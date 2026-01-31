import React from 'react';
import { faqData } from '../../data/mock';
import { FadeInWhenVisible } from '../layout/ParallaxWrapper';

export const FAQSection: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <FadeInWhenVisible>
                    <h2 className="text-2xl font-bold text-white mb-16 font-mono tracking-tight uppercase border-l-4 border-cyan-500 pl-6">FAQ - Perguntas Frequentes & Regulamentação</h2>
                </FadeInWhenVisible>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {faqData.map((item, i) => (
                        <FadeInWhenVisible key={i} delay={i * 0.1}>
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-cyan-500 font-mono text-xs">0{i + 1} //</span>
                                    <h4 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors leading-[1.2]">
                                        {item.q}
                                    </h4>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed border-l border-white/10 pl-10 ml-2">
                                    {item.a}
                                </p>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </section>
    );
};
