import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { testimonials } from '../../data/mock';
import { FadeInWhenVisible } from '../layout/ParallaxWrapper';

export const ReviewSection: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <section className="py-24 bg-cyan-900/10 border-t border-cyan-900/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeInWhenVisible>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                                <MessageSquare className="w-3 h-3" /> Depoimentos
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-white leading-none tracking-tighter mb-8">
                                RESULTADO <br />
                                <span className="text-cyan-500">COMPROVADO.</span>
                            </h2>
                            <div className="flex gap-2 mb-8">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveTestimonial(i)}
                                        className={`w-4 h-4 rounded-sm transition-colors duration-300 ${i === activeTestimonial ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-red-600/50 hover:bg-red-500'}`}
                                        aria-label={`Ver depoimento ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="min-h-[120px]">
                                <p className="text-xl text-white italic font-light leading-relaxed">
                                    "{testimonials[activeTestimonial].quote}"
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-cyan-500/50"></div>
                                    <div className="text-sm font-mono uppercase text-cyan-400">{testimonials[activeTestimonial].author}</div>
                                </div>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.2}>
                        <div className="relative h-64 md:h-96 w-full bg-slate-950 border border-white/5 overflow-hidden group">
                            <img
                                src="/assets/perfuracao-poco-artesiano.jpeg"
                                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                alt="Perfuração técnica de poço artesiano de alta profundidade"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
                                <div className="font-mono text-xs text-cyan-400 mb-1">LOCALIZAÇÃO</div>
                                <div className="text-white font-bold">RECREIO DOS BANDEIRANTES, RJ</div>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>
    );
};
