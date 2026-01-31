import React, { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Ban, FileText, Droplet, MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { stats, faqData } from '../data/mock';
import { ParallaxWrapper, FadeInWhenVisible } from '../components/layout/ParallaxWrapper';
import { WaterAnimation } from '../components/layout/WaterAnimation';
import { LazySection } from '../components/common/LazySection';

// Lazy load sections below the fold
const FAQSection = lazy(() => import('../components/layout/FAQSection').then(m => ({ default: m.FAQSection })));
const ReviewSection = lazy(() => import('../components/layout/ReviewSection').then(m => ({ default: m.ReviewSection })));

export const HomePage: React.FC = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    const springBgY = useSpring(bgY, { stiffness: 100, damping: 30 });

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <div className="relative">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            {/* HERO SECTION - PINNED AREA */}
            <div className="h-screen relative overflow-visible">
                <section ref={heroRef} className="sticky top-0 h-screen bg-slate-950 flex flex-col justify-center overflow-hidden z-0">
                    <motion.div style={{ y: springBgY, opacity, willChange: 'transform, opacity' }} className="absolute inset-0 z-0">
                        <WaterAnimation />
                    </motion.div>

                    <motion.div
                        style={{ scale, opacity, willChange: 'transform, opacity' }}
                        className="container mx-auto px-4 md:px-6 relative z-10 pt-20 md:pt-0"
                    >
                        <div className="max-w-4xl">
                            {/* Tagline */}
                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="h-[1px] w-12 bg-cyan-500"></div>
                                <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em]">Autonomia Hídrica v2.0</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-wide [word-spacing:0.15em] mb-8 uppercase">
                                Poço Artesiano no RJ: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Sua Independência Hídrica com Economia de água de até 90%</span>
                            </h1>

                            {/* Subtext */}
                            <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mb-10 border-l border-cyan-500/30 pl-6">
                                Abandone a dependência da rede pública. Implementamos sistemas artesianos de alta performance para autonomia total da sua propriedade.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    to="/contato"
                                    className="group bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 font-bold text-base tracking-tight transition-all flex items-center justify-center gap-3 backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)]"
                                >
                                    INICIAR PROJETO
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    to="/perfuracao-de-pocos"
                                    className="group px-8 py-4 border border-white/20 text-white hover:border-white transition-all font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-3"
                                >
                                    Como Funciona
                                    <MoveRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        style={{ opacity }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce"
                    >
                        <span className="text-[10px] uppercase font-mono tracking-widest text-white">Rolar</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                    </motion.div>
                </section>
            </div>

            {/* OVERLAPPING CONTENT STRIP */}
            <div className="relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] bg-slate-950">
                {/* STATS STRIP - HUD STYLE with Parallax */}
                <ParallaxWrapper offset={50} className="bg-slate-900 overflow-hidden">
                    <section className="border-y border-white/5 py-12 md:py-16">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {stats.map((s, i) => (
                                    <FadeInWhenVisible key={i} delay={i * 0.1}>
                                        <div className="group cursor-default">
                                            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors font-mono tracking-tighter">
                                                {s.value}<span className="text-cyan-500 text-xl align-top">+</span>
                                            </h2>
                                            <p className="text-[15px] font-mono uppercase tracking-[0.2em] text-gray-500 border-t border-gray-800 pt-4 mt-4 group-hover:border-cyan-500/50 transition-colors">
                                                {s.label}
                                            </p>
                                        </div>
                                    </FadeInWhenVisible>
                                ))}
                                <div className="col-span-1 md:col-span-2 lg:col-span-2 flex items-center justify-end">
                                    <FadeInWhenVisible delay={0.4}>
                                        <p className="text-gray-400 text-right max-w-md text-base md:text-lg leading-relaxed font-mono">
                                            <span className="text-cyan-400 font-bold block mb-2">METODOLOGIA DE PONTA</span>
                                            Nossos dados refletem 15 anos de excelência em engenharia geológica no estado do RJ.
                                        </p>
                                    </FadeInWhenVisible>
                                </div>
                            </div>
                        </div>
                    </section>
                </ParallaxWrapper>

                {/* PAIN POINTS - ASYMMETRIC GRID */}
                <section className="py-20 bg-slate-950 text-white relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-12 gap-12 items-start">
                            <div className="md:col-span-4 md:sticky md:top-32">
                                <FadeInWhenVisible>
                                    <h2 className="text-3xl font-black mb-6 leading-[1.1] uppercase tracking-wide [word-spacing:0.16em]">
                                        Perfuração de Poços com <br /> <span className="text-cyan-500 text-2xl">Geologia de Precisão e Outorga INEA</span>
                                    </h2>
                                    <p className="text-gray-400 text-base mb-8">
                                        A água pública é incerta. O aquífero é constante. Entenda por que migrar agora.
                                    </p>
                                    <div className="w-12 h-1 bg-red-500"></div>
                                </FadeInWhenVisible>
                            </div>

                            <div className="md:col-span-8 flex flex-col gap-6">
                                {[
                                    { title: "Zero Racionamento", desc: "Sua fonte própria não depende das manutenções da CEDAE.", icon: Ban },
                                    { title: "Redução de Custos", desc: "Elimine a conta de água com tarifas progressivas abusivas.", icon: FileText },
                                    { title: "Qualidade Superior", desc: "Água filtrada naturalmente por camadas de rocha e sedimentos.", icon: Droplet }
                                ].map((item, idx) => (
                                    <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                                        <div className="group p-8 bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-white/[0.04]">
                                            <div className="flex items-start justify-between mb-6">
                                                <item.icon className="w-8 h-8 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                                                <span className="font-mono text-[10px] text-gray-700 group-hover:text-cyan-500">0{idx + 1}</span>
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                            <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                                        </div>
                                    </FadeInWhenVisible>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES TEASER */}
                <section className="py-20 bg-slate-900 border-t border-white/5">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <FadeInWhenVisible>
                            <h2 className="text-2xl font-bold text-white mb-10 font-mono tracking-tight uppercase">Soluções Especializadas em Engenharia Hídrica e Manutenção</h2>
                        </FadeInWhenVisible>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                            {[
                                { title: "Perfuração", sub: "Perfuração de Poços no Rio de Janeiro", link: "/perfuracao-de-pocos" },
                                { title: "Manutenção", sub: "Manutenção e Limpeza de Poços", link: "/manutencao-e-limpeza" },
                                { title: "Legalização", sub: "Legalização e Outorga de Água (INEA)", link: "/legalizacao-outorga-inea" }
                            ].map((s, i) => (
                                <FadeInWhenVisible key={i} delay={i * 0.1}>
                                    <Link to={s.link} className="block group bg-slate-950 p-10 border border-white/5 hover:border-cyan-500/50 transition-all h-full">
                                        <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors mb-2">{s.title}</h3>
                                        <p className="text-[10px] font-mono uppercase text-gray-600 group-hover:text-cyan-500/50">{s.sub}</p>
                                    </Link>
                                </FadeInWhenVisible>
                            ))}
                        </div>
                        <div className="mt-12">
                            <FadeInWhenVisible delay={0.3}>
                                <Link to="/perfuracao-de-pocos" className="text-sm font-mono uppercase tracking-widest text-cyan-500 hover:text-white transition-colors underline underline-offset-8 decoration-cyan-500/30">
                                    Ver todos os serviços
                                </Link>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                </section>
                {/* AUTHORITY SECTION */}
                <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
                        <Droplet className="w-64 h-64 text-white" />
                    </div>
                    <div className="container mx-auto px-4 md:px-6">
                        <FadeInWhenVisible>
                            <div className="mb-12">
                                <div className="h-[1px] w-24 bg-cyan-500 mb-6"></div>
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-wide [word-spacing:0.15em] uppercase max-w-4xl">
                                    Autoridade em Perfuração de Poços: <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Da Região dos Lagos à Baixada Fluminense</span>
                                </h2>
                            </div>
                        </FadeInWhenVisible>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { t: "Experiência Regional", d: "Conhecimento técnico das variadas formações geológicas do Rio de Janeiro." },
                                { t: "Equipamentos de Ponta", d: "Tecnologia de perfuração rotativa e rotopercussiva para qualquer terreno." },
                                { t: "Suporte Técnico", d: "Equipe de engenharia pronta para dimensionar o sistema ideal para sua necessidade." }
                            ].map((item, i) => (
                                <FadeInWhenVisible key={i} delay={i * 0.1}>
                                    <div className="p-8 border border-white/5 bg-white/[0.01]">
                                        <h4 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-widest">{item.t}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                                    </div>
                                </FadeInWhenVisible>
                            ))}
                        </div>
                    </div>
                </section>

                <LazySection>
                    <Suspense fallback={<div className="h-[400px] bg-slate-900 animate-pulse" />}>
                        <FAQSection />
                    </Suspense>
                </LazySection>

                <LazySection>
                    <Suspense fallback={<div className="h-[400px] bg-cyan-900/10 animate-pulse" />}>
                        <ReviewSection />
                    </Suspense>
                </LazySection>
            </div >
        </div >
    );
};
