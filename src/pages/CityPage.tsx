import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';
import { PILLARS, CITIES } from '../data/siloData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { CityBanner } from '../components/features/CityBanner';

export const CityPage: React.FC = () => {
    const { pillarSlug, citySlug } = useParams<{ pillarSlug: string; citySlug: string }>();

    const pillar = PILLARS.find(p => p.slug === pillarSlug);
    const city = CITIES.find(c => c.slug === citySlug);

    if (!pillar || !city) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-slate-950 pt-20">
            <Helmet>
                <title>{`${pillar.title} em ${city.name} - RJ | Poço Artesiano`}</title>
                <meta name="description" content={`Serviço especializado de ${pillar.title} em ${city.name}, Rio de Janeiro. Atendimento técnico local com geólogos da região.`} />
            </Helmet>

            <Breadcrumbs />

            <div className="container mx-auto px-4 py-12">
                {/* HERO LOCAL */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-6">
                        <MapPin className="w-3 h-3" />
                        Atendimento em {city.name}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {pillar.title} em <span className="text-cyan-500">{city.name}</span>
                    </h1>
                    <p className="text-lg text-gray-300">
                        Soluções de engenharia hídrica personalizadas para a geologia de {city.name}.
                        Garantia de água e conformidade legal.
                    </p>
                </div>

                {/* CONVERSION TRIGGER (LOSS AVERSION) */}
                <CityBanner />

                {/* LOCAL CONTENT */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">Por que contratar em {city.name}?</h2>
                        <p className="text-gray-400 leading-relaxed">
                            A região de {city.name} possui características hidrogeológicas específicas que exigem conhecimento técnico local.
                            Nossa equipe já realizou diversos projetos de {pillar.title.toLowerCase()} na cidade,
                            garantindo o melhor ponto de perfuração e a vazão ideal para sua necessidade.
                        </p>
                        <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                            <h3 className="text-lg font-mono text-cyan-400 mb-2">DADOS TÉCNICOS LOCAIS</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li>
                                    <span className="text-white block font-semibold mb-1">Aquíferos predominantes:</span>
                                    {city.technicalData?.aquifers}
                                </li>
                                <li>
                                    <span className="text-white block font-semibold mb-1">Profundidade média estimada:</span>
                                    {city.technicalData?.depth}
                                </li>
                                <li>
                                    <span className="text-white block font-semibold mb-1">Qualidade da água esperada em {city.name}:</span>
                                    {city.technicalData?.quality}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA SECTION */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 flex flex-col justify-center text-center">
                        <h3 className="text-xl font-bold text-white mb-4">Orçamento para {pillar.title}</h3>
                        <p className="text-gray-400 mb-6 text-sm">
                            Receba uma análise preliminar gratuita do potencial hídrico do seu terreno em {city.name}.
                        </p>
                        <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded transition-all uppercase tracking-widest text-sm">
                            Solicitar Orçamento Agora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
