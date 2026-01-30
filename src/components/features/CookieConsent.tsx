import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('lgpd-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('lgpd-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:right-auto md:left-8 md:max-w-md z-[70]"
                >
                    <div className="bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border border-cyan-500/30 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-cyan-500/10 p-2 border border-cyan-500/20 shrink-0">
                                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
                                    Conformidade_LGPD
                                </h3>
                                <p className="text-[11px] font-mono text-white/70 dark:text-white/70 light:text-slate-600 leading-relaxed uppercase">
                                    Utilizamos cookies para otimizar sua experiência técnica. Ao continuar, você concorda com nossa{' '}
                                    <Link to="/politica-de-privacidade" className="text-cyan-400 hover:underline">Política de Privacidade</Link> e{' '}
                                    <Link to="/termos-de-uso" className="text-cyan-400 hover:underline">Termos de Uso</Link>.
                                </p>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-white/30 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleAccept}
                                className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all"
                            >
                                Aceitar_Termos
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
