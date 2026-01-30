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
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
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
            const loadedImages: HTMLImageElement[] = [];
            let count = 0;

            // Load every 2nd frame from the original 136 frames
            for (let i = 1; i <= 136; i += 2) {
                const img = new Image();
                const frameNumber = i.toString().padStart(3, '0');

                if (count <= 10) {
                    (img as any).fetchPriority = 'high';
                }

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
        if (!canvasRef.current || imagesRef.current.length < TOTAL_FRAMES) return;

        const deltaTime = time - lastTimeRef.current;
        const frameInterval = 1000 / FRAME_RATE;

        if (deltaTime >= frameInterval) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const nextFrame = (frameRef.current + 1) % TOTAL_FRAMES;
                const img = imagesRef.current[nextFrame];

                // Clear and draw
                ctx.clearRect(0, 0, canvas.width, canvas.height);

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
                className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale"
                style={{ filter: 'contrast(1.2) brightness(0.8) hue-rotate(180deg)' }}
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
