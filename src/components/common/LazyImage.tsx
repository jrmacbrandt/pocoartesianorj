import React from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    priority?: boolean;
}

/**
 * Reusable LazyImage component.
 * Uses priority prop to determine if image should be loaded eagerly.
 */
export const LazyImage: React.FC<LazyImageProps> = ({ priority = false, src, ...props }) => {
    const [currentSrc, setCurrentSrc] = React.useState(src);

    React.useEffect(() => {
        if (!src) return;

        let optimizedSrc = src;

        // Auto WebP if it's an Unsplash image
        if (src.includes('images.unsplash.com') && !src.includes('fm=webp')) {
            const separator = src.includes('?') ? '&' : '?';
            optimizedSrc = `${src}${separator}fm=webp&q=80`;
            setCurrentSrc(optimizedSrc);
        }
        // Auto WebP for local images
        else if ((src.startsWith('/assets/') || src.startsWith('assets/')) && /\.(jpe?g|png)$/i.test(src)) {
            const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');

            const testImg = new Image();
            testImg.onload = () => setCurrentSrc(webpSrc);
            testImg.onerror = () => setCurrentSrc(src);
            testImg.src = webpSrc;
        } else {
            setCurrentSrc(src);
        }
    }, [src]);

    return (
        <img
            {...props}
            src={currentSrc}
            loading={priority ? 'eager' : 'lazy'}
            data-priority={priority ? 'high' : 'low'}
            {...(priority ? { fetchpriority: 'high' } : {})}
        />
    );
};
