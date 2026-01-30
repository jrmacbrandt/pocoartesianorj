import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PILLARS, CITIES, ROUTES } from '../data/siloData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { CTAButton } from '../components/common/CTAButton';

export const PillarPage: React.FC = () => {
    const { pillarSlug } = useParams<{ pillarSlug: string }>();
    const pillar = PILLARS.find(p => p.slug === pillarSlug);

    if (!pillar) {
        return <Navigate to="/" replace />;
    }

    const getServiceIcon = () => {
        // Simple icon logic for demo
        return <CheckCircle2 className="w-12 h-12 text-cyan-400 mb-4" />;
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-20">
            <Helmet>
                <title>{`${pillar.title} no Rio de Janeiro | Poço Artesiano RJ`}</title>
                <meta name="description" content={`${pillar.description} Atendemos Niterói, Maricá, São Gonçalo e toda região do RJ.`} />
            </Helmet>

            <Breadcrumbs />

            <div className="container mx-auto px-4 py-12 md:py-20">
                {/* HERO SECTION */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    {getServiceIcon()}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        {pillar.title} <span className="text-cyan-500">RJ</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        {pillar.description} Especialistas em engenharia hídrica com foco em alta performance e segurança legal.
                    </p>
                </div>

                {/* CONTENT SECTION (Placeholder for specific content) */}
                <div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/5 rounded-2xl p-8 mb-16">
                    <h2 className="text-2xl font-bold text-white mb-4">Excelência em {pillar.title}</h2>
                    <p className="text-gray-400 mb-6">
                        Nossa equipe técnica segue rigorosamente as normas da ABNT (NBR 12244) para garantir a longevidade e a segurança do seu projeto.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {['Equipe credenciada no CREA-RJ', 'Maquinário de ponta', 'Geólogos especializados', 'Garantia de vazão em contrato'].map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* LOCAL SILO LINKS (SPOKES) */}
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <MapPin className="text-cyan-400" />
                        <h2 className="text-2xl font-mono uppercase text-white">Áreas de Atuação - {pillar.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {CITIES.map(city => (
                            <Link
                                key={city.id}
                                to={ROUTES.CITY(pillar.slug, city.slug)}
                                className="group bg-slate-900 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 p-4 rounded-lg transition-all duration-300 flex items-center justify-between"
                            >
                                <div>
                                    <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                        {city.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Veja nossos projetos de {pillar.title.toLowerCase().split(' ')[0]} em {city.name}
                                    </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA BUTTON */}
                <CTAButton />
            </div>
        </div>
    );
};
