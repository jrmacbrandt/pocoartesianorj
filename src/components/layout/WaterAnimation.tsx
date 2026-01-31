import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 68;
const FRAME_RATE = 20;

export const WaterAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const frameRef = useRef(0);
    const requestRef = useRef<number>();
    const lastTimeRef = useRef<number>(0);

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { rootMargin: '300px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const loadImages = async () => {
            // Delay loading slightly to prioritize LCP and FCP
            await new Promise(resolve => setTimeout(resolve, 800));
            if (!isVisible) return;

            const loadedImages: HTMLImageElement[] = [];
            let count = 0;

            // Load every 2nd frame from the original 136 frames
            for (let i = 1; i <= 136; i += 2) {
                const img = new Image();
                const frameNumber = i.toString().padStart(3, '0');

                // Set low priority to all frames to avoid blocking LCP
                (img as any).fetchPriority = 'low';

                img.src = `/assets/agua-frames/ffout${frameNumber}.webp`;

                img.onload = () => {
                    count++;
                    setImagesLoaded(count);
                    if (count === 15 && frameRef.current === 0) {
                        startAnimation();
                    }
                };
                loadedImages.push(img);
            }
            imagesRef.current = loadedImages;
        };

        loadImages();

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [isVisible]);

    const startAnimation = () => {
        lastTimeRef.current = performance.now();
        requestRef.current = requestAnimationFrame(animate);
    };

    const animate = (time: number) => {
        if (!canvasRef.current || imagesRef.current.length < TOTAL_FRAMES || !isVisible) return;

        const deltaTime = time - lastTimeRef.current;
        const frameInterval = 1000 / FRAME_RATE;

        if (deltaTime >= frameInterval) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d', { alpha: false }); // Optimization: set alpha to false for canvas context
            if (ctx) {
                const nextFrame = (frameRef.current + 1) % TOTAL_FRAMES;
                const img = imagesRef.current[nextFrame];

                // Cover logic
                const imgAspect = img.width / img.height;
                const canvasAspect = canvas.width / canvas.height;
                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgAspect;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imgAspect;
                    drawHeight = canvas.height;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                frameRef.current = nextFrame;
            }
            lastTimeRef.current = time - (deltaTime % frameInterval);
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    // Re-start animation when visibility changes
    useEffect(() => {
        if (isVisible && imagesLoaded >= 15) {
            startAnimation();
        } else if (!isVisible && requestRef.current) {
            cancelAnimationFrame(requestRef.current);
        }
    }, [isVisible, imagesLoaded]);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale transition-opacity duration-1000"
                style={{
                    opacity: imagesLoaded >= 15 ? 0.3 : 0,
                    filter: imagesLoaded >= 15 ? 'contrast(1.2) brightness(0.8) hue-rotate(180deg)' : 'blur(20px)',
                    willChange: 'transform, opacity'
                }}
            />
            {/* Loading indicator (optional, hidden) */}
            {isVisible && imagesLoaded < TOTAL_FRAMES && (
                <div className="absolute bottom-4 right-4 text-cyan-500 font-mono text-[8px] opacity-50">
                    LOADING SYSTEM ASSETS: {Math.floor((imagesLoaded / TOTAL_FRAMES) * 100)}%
                </div>
            )}
        </div>
    );
};
