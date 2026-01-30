import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxWrapperProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
}

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
    children,
    offset = 100,
    className = ""
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div ref={ref} className={`relative sm:overflow-hidden ${className}`}>
            <motion.div style={{ y: springY }}>
                {children}
            </motion.div>
        </div>
    );
};

export const FadeInWhenVisible: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
};
