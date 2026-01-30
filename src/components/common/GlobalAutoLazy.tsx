import React, { useEffect } from 'react';

/**
 * GlobalAutoLazy - Automatically applies loading="lazy" to all <img> tags
 * that don't have a data-priority="high" attribute.
 * This ensures that any future images added to the project are optimized
 * by default.
 */
export const GlobalAutoLazy: React.FC = () => {
    useEffect(() => {
        const applyLazyLoading = (node: Node) => {
            if (node instanceof HTMLElement) {
                const images = node.tagName === 'IMG' ? [node] : Array.from(node.querySelectorAll('img'));

                images.forEach((img) => {
                    // 1. Auto Lazy Loading
                    if (!img.getAttribute('loading') && img.getAttribute('data-priority') !== 'high') {
                        img.setAttribute('loading', 'lazy');
                    }

                    const src = img.getAttribute('src');
                    if (!src) return;

                    // 2. Auto WebP for Unsplash
                    if (src.includes('images.unsplash.com') && !src.includes('fm=webp')) {
                        const separator = src.includes('?') ? '&' : '?';
                        img.setAttribute('src', `${src}${separator}fm=webp&q=80`);
                    }

                    // 3. Auto WebP for Local Images
                    // If it's a local asset (relative path or starts with /assets) and is jpg/png
                    else if ((src.startsWith('/assets/') || src.startsWith('assets/')) && /\.(jpe?g|png)$/i.test(src)) {
                        const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');

                        // Check if we've already tried this one to prevent loops
                        if (img.getAttribute('data-webp-tried') === 'true') return;

                        // Create a temporary image to test if the webp version exists
                        const testImg = new Image();
                        testImg.onload = () => {
                            img.setAttribute('src', webpSrc);
                            img.setAttribute('data-webp-applied', 'true');
                        };
                        testImg.onerror = () => {
                            // If webp fails, mark so we don't try again
                            img.setAttribute('data-webp-tried', 'true');
                        };
                        testImg.src = webpSrc;
                    }
                });
            }
        };

        // 1. Initial scan
        applyLazyLoading(document.body);

        // 2. Observe future DOM changes (important for SPAs)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    applyLazyLoading(node);
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, []);

    return null; // This component doesn't render anything
};
