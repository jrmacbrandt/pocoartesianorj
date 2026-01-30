import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PILLARS, CITIES } from '../data/siloData';
import { Map, ArrowRight, Droplet, Users, Shield, FileText } from 'lucide-react';

export const SitemapPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Mapa do Site | Poço Artesiano RJ</title>
                <meta name="description" content="Navegação completa do site Poço_Artesiano_RJ. Encontre todos os nossos serviços e áreas atendidas no Rio de Janeiro." />
            </Helmet>

            <Breadcrumbs />

            <section className="py-24 bg-slate-950 min-h-screen relative overflow-hidden">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                            <Map className="w-3 h-3" /> Arquitetura_de_Informação
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                            MAPA DO <span className="text-cyan-400 font-mono">SITE</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl font-mono leading-relaxed">
                            Índice técnico de todas as seções e diretórios do domínio POÇO_ARTESIANO_RJ.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* MAIN PAGES */}
                        <div>
                            <h3 className="text-white font-black text-xl mb-8 flex items-center gap-3 border-b border-white/10 pb-4 uppercase tracking-tighter">
                                <Users className="w-5 h-5 text-cyan-500" /> Institucional
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Início', path: '/' },
                                    { label: 'Quem Somos', path: '/quem-somos' },
                                    { label: 'Contato Técnico', path: '/contato' },
                                    { label: 'Política de Privacidade', path: '/politica-de-privacidade' },
                                    { label: 'Termos de Uso', path: '/termos-de-uso' }
                                ].map(link => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm flex items-center gap-2 group">
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PILLARS / SERVICES */}
                        <div>
                            <h3 className="text-white font-black text-xl mb-8 flex items-center gap-3 border-b border-white/10 pb-4 uppercase tracking-tighter">
                                <Droplet className="w-5 h-5 text-cyan-500" /> Serviços_Core
                            </h3>
                            <ul className="space-y-4">
                                {PILLARS.map(pillar => (
                                    <li key={pillar.slug}>
                                        <Link to={`/${pillar.slug}`} className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm flex items-center gap-2 group">
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            {pillar.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CITY PAGES GRID (Summary) */}
                        <div className="lg:col-span-1">
                            <h3 className="text-white font-black text-xl mb-8 flex items-center gap-3 border-b border-white/10 pb-4 uppercase tracking-tighter">
                                <Shield className="w-5 h-5 text-cyan-500" /> Áreas_Atendidas
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {CITIES.map(city => (
                                    <Link
                                        key={city.slug}
                                        to={`/perfuracao-de-pocos/${city.slug}`}
                                        className="text-[10px] font-mono text-gray-500 hover:text-cyan-400 bg-white/[0.02] border border-white/5 py-2 px-3 transition-all text-center uppercase"
                                    >
                                        {city.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FULL DIRECTORY TABLE - Technical Look */}
                    <div className="mt-24">
                        <h3 className="text-white font-black text-xl mb-8 flex items-center gap-3 uppercase tracking-tighter">
                            <FileText className="w-5 h-5 text-cyan-500" /> Diretório_Completo_de_Cidades
                        </h3>
                        <div className="overflow-x-auto border border-white/5 bg-slate-900/50 backdrop-blur-sm">
                            <table className="w-full text-left font-mono text-[10px]">
                                <thead className="bg-white/5 text-cyan-500">
                                    <tr>
                                        <th className="p-4 border-r border-white/5">Localização_RJ</th>
                                        <th className="p-4 border-r border-white/5">Perfuração</th>
                                        <th className="p-4 border-r border-white/5">Manutenção</th>
                                        <th className="p-4">Regularização</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    {CITIES.map(city => (
                                        <tr key={city.slug} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="p-4 border-r border-white/5 text-white font-bold">{city.name.toUpperCase()}</td>
                                            <td className="p-4 border-r border-white/5">
                                                <Link to={`/perfuracao-de-pocos/${city.slug}`} className="hover:text-cyan-400 hover:underline">ACCESS_PERF</Link>
                                            </td>
                                            <td className="p-4 border-r border-white/5">
                                                <Link to={`/manutencao-e-limpeza/${city.slug}`} className="hover:text-cyan-400 hover:underline">ACCESS_MANUT</Link>
                                            </td>
                                            <td className="p-4">
                                                <Link to={`/legalizacao-outorga-inea/${city.slug}`} className="hover:text-cyan-400 hover:underline">ACCESS_REG</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
