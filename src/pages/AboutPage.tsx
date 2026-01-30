import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Users, Target, Award, Wrench } from 'lucide-react';

export const AboutPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Quem Somos | Poço Artesiano RJ</title>
                <meta name="description" content="Conheça a Poço_Artesiano_RJ: especialistas em engenharia hídrica com autonomia através de tecnologia de precisão." />
            </Helmet>

            <Breadcrumbs />

            <section className="py-24 bg-slate-950 min-h-screen">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                            <Users className="w-3 h-3" /> Institucional
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            QUEM SOMOS
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Engenharia de soluções hídricas.<br />
                            Autonomia hídrica através de tecnologia de precisão.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="mb-16 bg-slate-900 border border-white/10 p-8">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            A <strong className="text-cyan-400 font-mono">POÇO_ARTESIANO_RJ</strong> é uma empresa especializada em
                            <strong className="text-white"> engenharia de soluções hídricas</strong>, atuando no estado do Rio de Janeiro
                            desde sua fundação.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Nosso propósito é fornecer <strong className="text-white">autonomia e segurança hídrica</strong> para residências,
                            condomínios, indústrias e empreendimentos comerciais através da <span className="text-cyan-400">perfuração de poços artesianos</span>,
                            manutenção especializada e regularização ambiental.
                        </p>
                    </div>

                    {/* Mission, Vision, Values */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-slate-900 border border-white/10 p-6">
                            <Target className="w-8 h-8 text-cyan-500 mb-4" />
                            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">MISSÃO</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Garantir acesso sustentável a água de qualidade através de soluções técnicas personalizadas e conformidade legal.
                            </p>
                        </div>
                        <div className="bg-slate-900 border border-white/10 p-6">
                            <Award className="w-8 h-8 text-cyan-500 mb-4" />
                            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">VISÃO</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Ser referência em soluções hídricas no RJ, reconhecida pela excelência técnica e compromisso ambiental.
                            </p>
                        </div>
                        <div className="bg-slate-900 border border-white/10 p-6">
                            <Wrench className="w-8 h-8 text-cyan-500 mb-4" />
                            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">VALORES</h3>
                            <ul className="text-gray-400 text-sm space-y-1">
                                <li>• Precisão técnica</li>
                                <li>• Transparência</li>
                                <li>• Responsabilidade ambiental</li>
                                <li>• Comprometimento</li>
                            </ul>
                        </div>
                    </div>

                    {/* What We Do */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-black text-white mb-6 font-mono uppercase tracking-wider">
                            O QUE FAZEMOS
                        </h2>
                        <div className="space-y-6">
                            <div className="border-l-2 border-cyan-500/50 pl-6">
                                <h3 className="text-lg font-bold text-white mb-2">Perfuração de Poços Artesianos</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Executamos perfurações em diversas profundidades (50m a 300m+) utilizando sondas rotativas e equipamentos
                                    de última geração. Cada projeto inclui estudo hidrogeológico preliminar e dimensionamento adequado.
                                </p>
                            </div>

                            <div className="border-l-2 border-cyan-500/50 pl-6">
                                <h3 className="text-lg font-bold text-white mb-2">Manutenção e Limpeza</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Realizamos manutenção preventiva e corretiva de sistemas de bombeamento, limpeza química e mecânica de poços,
                                    substituição de bombas submersas e recuperação de vazão.
                                </p>
                            </div>

                            <div className="border-l-2 border-cyan-500/50 pl-6">
                                <h3 className="text-lg font-bold text-white mb-2">Legalização e Outorga (INEA)</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Assessoria completa no processo de regularização junto ao INEA (Instituto Estadual do Ambiente do Rio de Janeiro),
                                    elaboração de documentação técnica e acompanhamento de processos de outorga.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Differentials */}
                    <div className="mb-16 bg-cyan-950/10 border border-cyan-500/20 p-8">
                        <h2 className="text-2xl font-black text-white mb-6 font-mono uppercase tracking-wider">
                            NOSSOS DIFERENCIAIS
                        </h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-500 shrink-0">✓</span>
                                <span><strong className="text-white">Equipe Técnica Qualificada:</strong> Engenheiros e geólogos com CREA ativo</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-500 shrink-0">✓</span>
                                <span><strong className="text-white">Tecnologia de Ponta:</strong> Equipamentos modernos e sondas rotativas de alta performance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-500 shrink-0">✓</span>
                                <span><strong className="text-white">Conformidade Legal:</strong> Todos os projetos com ART e documentação técnica completa</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-500 shrink-0">✓</span>
                                <span><strong className="text-white">Garantia Estendida:</strong> 12 meses de garantia para estrutura de poços perfurados</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-500 shrink-0">✓</span>
                                <span><strong className="text-white">Atendimento Regional:</strong> Cobertura em todo o estado do Rio de Janeiro</span>
                            </li>
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-black text-white mb-6 font-mono uppercase tracking-wider">
                            CERTIFICAÇÕES E LICENÇAS
                        </h2>
                        <div className="bg-slate-900 border border-white/10 p-6">
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Registro CREA-RJ (Conselho Regional de Engenharia e Agronomia)</li>
                                <li>• Licença Ambiental de Operação (LAO)</li>
                                <li>• Cadastro Nacional de Perfuradores (ANM)</li>
                                <li>• Certificação ISO 9001 (Gestão de Qualidade)</li>
                                <li>• NR-10 e NR-35 para equipe técnica</li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-slate-900 border border-cyan-500/30 p-8 text-center">
                        <h3 className="text-white text-xl font-bold mb-4">
                            Precisa de uma solução hídrica confiável?
                        </h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Entre em contato e receba uma consultoria técnica gratuita.
                        </p>
                        <Link
                            to="/contato"
                            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 transition-colors uppercase text-sm tracking-wider"
                        >
                            SOLICITAR ORÇAMENTO
                        </Link>
                    </div>

                    {/* Footer */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors text-sm font-mono uppercase tracking-widest"
                        >
                            ← Voltar ao Início
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
