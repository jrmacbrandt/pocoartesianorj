import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Droplet, Hammer } from 'lucide-react';
import { FadeInWhenVisible } from '../layout/ParallaxWrapper';
import { LazyImage } from '../common/LazyImage';

interface Project {
    title: string;
    location: string;
    type: 'perfuração' | 'manutenção';
    image: string;
    alt: string;
    description: string;
}

const projects: Project[] = [
    {
        title: "Perfuração Industrial",
        location: "Baixada Fluminense, RJ",
        type: 'perfuração',
        image: "/assets/projeto-baixada.png",
        alt: "Sonda rotativa realizando perfuração de poço artesiano industrial de alta vazão na Baixada Fluminense",
        description: "Sistema de alta vazão para complexo logístico, garantindo autonomia hídrica total."
    },
    {
        title: "Perfuração Costeira",
        location: "Região dos Lagos, RJ",
        type: 'perfuração',
        image: "/assets/projeto-lagos.png",
        alt: "Equipe técnica operando perfuratriz em terreno arenoso na Região dos Lagos para poço artesiano residencial",
        description: "Execução técnica em terreno arenoso com proteção contra salinidade."
    },
    {
        title: "Manutenção Preventiva",
        location: "Niterói, RJ",
        type: 'manutenção',
        image: "/assets/projeto-niteroi.png",
        alt: "Técnico realizando limpeza química e manutenção preventiva em conjunto motobomba de poço artesiano em Niterói",
        description: "Limpeza química e recuperação de vazão para condomínio residencial."
    }
];

export const FeaturedProjects: React.FC = () => {
    return (
        <section className="py-24 bg-slate-950 relative border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <FadeInWhenVisible>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                                <Droplet className="w-3 h-3" /> Portfólio_Técnico
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase mb-4">
                                Alguns dos nossos <br />
                                <span className="text-cyan-500">Projetos Recentes</span>
                            </h2>
                            <p className="text-gray-500 text-sm max-w-xl font-mono">
                                Soluções de engenharia entregues com precisão geológica em todo o estado do Rio de Janeiro.
                            </p>
                        </FadeInWhenVisible>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                            <div className="group bg-slate-900 border border-white/5 overflow-hidden flex flex-col h-full hover:border-cyan-500/30 transition-all duration-500">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <LazyImage
                                        src={project.image}
                                        alt={project.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>

                                    {/* Type Tag */}
                                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-[9px] uppercase tracking-widest">
                                        {project.type === 'perfuração' ? <Droplet className="w-2.5 h-2.5 text-cyan-500" /> : <Hammer className="w-2.5 h-2.5 text-yellow-500" />}
                                        {project.type}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-cyan-500/70 font-mono text-[10px] uppercase tracking-wider mb-4">
                                        <MapPin className="w-3 h-3" /> {project.location}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </section>
    );
};
