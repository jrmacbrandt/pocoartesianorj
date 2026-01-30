import React from 'react';
import { motion } from 'framer-motion';

export const LoadingHUD: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-slate-950 z-[100] flex flex-col items-center justify-center">
            {/* Background Grid - consistent with site aesthetic */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <div className="relative">
                {/* Animated Scanner Effect */}
                <motion.div
                    animate={{
                        height: ["0%", "100%", "0%"],
                        top: ["0%", "0%", "100%"]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute left-0 right-0 w-full bg-cyan-500/20 border-t border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10"
                />

                {/* Industrial Spinner */}
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 border-2 border-white/5 flex items-center justify-center p-1">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full border-t-2 border-cyan-500 rounded-none shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                        />
                    </div>

                    {/* Loading Text */}
                    <div className="mt-8 text-center">
                        <div className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-2 animate-pulse">
                            LOADING_SYSTEM_RESOURCES
                        </div>
                        <div className="flex gap-1 justify-center">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-1 h-1 bg-cyan-500"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/10"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/10"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/10"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/10"></div>
        </div>
    );
};
