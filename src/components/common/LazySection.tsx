import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
    children: React.ReactNode;
    threshold?: number;
    rootMargin?: string;
}

/**
 * LazySection - Defers rendering of children until they are close to the viewport.
 * Useful for heavy components that are "below the fold".
 */
export const LazySection: React.FC<LazySectionProps> = ({
    children,
    threshold = 0.1,
    rootMargin = '400px'
}) => {
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasBeenVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return (
        <div ref={sectionRef} style={{ minHeight: !hasBeenVisible ? '400px' : 'auto' }}>
            {hasBeenVisible ? children : null}
        </div>
    );
};
