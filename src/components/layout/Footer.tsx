import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, MapPin, Mail } from 'lucide-react';
import { CITIES, ROUTES } from '../../data/siloData';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-8 overflow-hidden relative border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 text-[20rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none -mr-24 -mt-24 font-mono">
                H2O
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 border-b border-white/10 pb-12">

                    {/* Col 1: Brand (Span 3) */}
                    <div className="md:col-span-3">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 bg-cyan-500 pl-1 pt-1 group-hover:bg-cyan-400 transition-colors">
                                <div className="w-full h-full border border-black flex items-center justify-center">
                                    <Droplet className="text-black w-6 h-6 fill-current" />
                                </div>
                            </div>
                            <span className="text-3xl font-bold tracking-tighter font-mono group-hover:text-cyan-400 transition-colors">
                                POÇO<span className="text-cyan-400 group-hover:text-white">_RJ</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6 font-mono text-sm">
                            ENGENHARIA DE SOLUÇÕES HÍDRICAS.<br />
                            Autonomia hídrica através de tecnologia de precisão.
                        </p>
                    </div>

                    {/* Col 2: Quick Links (Span 3) */}
                    <div className="md:col-span-3">
                        <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-6">Navegação</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Início', path: '/' },
                                { name: 'Perfuração de Poços', path: '/perfuracao-de-pocos' },
                                { name: 'Manutenção', path: '/manutencao-e-limpeza' },
                                { name: 'Contato', path: '/contato' },
                                { name: 'Quem Somos', path: '/quem-somos' },
                                { name: 'Mapa do Site', path: '/mapa-do-site' },
                                { name: 'Política de Privacidade', path: '/politica-de-privacidade' },
                                { name: 'Termos de Uso', path: '/termos-de-uso' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors text-[11px] uppercase tracking-wider font-mono">
                                        <span className="w-1 h-1 bg-cyan-500 rounded-none opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Áreas Atendidas (Span 3) - NEW SILO LINKS */}
                    <div className="md:col-span-3">
                        <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-6">Áreas Atendidas</h4>
                        <ul className="space-y-2">
                            {CITIES.slice(0, 8).map((city) => (
                                <li key={city.id}>
                                    <Link
                                        to={ROUTES.CITY('perfuracao-de-pocos', city.slug)}
                                        className="text-xs text-gray-500 hover:text-cyan-400 transition-colors uppercase font-mono tracking-wider flex items-center gap-1"
                                    >
                                        <MapPin className="w-3 h-3" />
                                        {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact (Span 3) */}
                    <div className="md:col-span-3">
                        <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] mb-6">Contato Técnico</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group cursor-pointer">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-mono mb-1">Localização</div>
                                    <div className="font-bold text-sm">Avenida Presidente Vargas, 7325 - Centro/RJ</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group cursor-pointer">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-mono mb-1">EMAIL</div>
                                    <div className="font-bold text-sm">contato.grupowebcluster@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-widest">
                    <p>&copy; 2024 POÇO_ARTESIANO_RJ ENG. LDT.</p>
                </div>
            </div>
        </footer>
    );
};
