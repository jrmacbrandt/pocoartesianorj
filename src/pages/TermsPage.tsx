import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FileText, AlertTriangle } from 'lucide-react';

export const TermsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Termos de Uso | Poço Artesiano RJ</title>
                <meta name="description" content="Termos de Uso dos serviços da Poço_Artesiano_RJ. Conheça as condições e responsabilidades na contratação de nossos serviços." />
            </Helmet>

            <Breadcrumbs />

            <section className="py-24 bg-slate-950 min-h-screen">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                            <FileText className="w-3 h-3" /> Documento_Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            TERMOS DE USO
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Termos de Uso da Poço Artesiano RJ - <Link to="/" className="text-cyan-400 hover:underline">https://pocoartesianorj.com.br</Link>
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 text-gray-300 text-sm leading-relaxed">

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">1. Introdução</h2>
                            <p>
                                Bem-vindo aos termos de uso da Poço Artesiano RJ, proprietária do site <Link to="/" className="text-cyan-400 hover:underline">https://pocoartesianorj.com.br</Link>. Ao utilizar nosso site, você concorda com os termos e condições descritos a seguir. Leia atentamente antes de realizar qualquer compra ou utilizar nossos serviços.
                            </p>
                        </div>

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">2. Aceitação dos Termos</h2>
                            <p>
                                Ao acessar ou utilizar nosso site, você concorda com todos os termos e condições estabelecidos aqui. Se não concordar com algum ponto destes termos, por favor, não continue utilizando nossos serviços.
                            </p>
                        </div>

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">3. Alterações nos Termos</h2>
                            <p>
                                A Poço Artesiano RJ se reserva ao direito de modificar estes termos de uso a qualquer momento. Alterações entrarão em vigor imediatamente após a publicação no site. Recomendamos que você reveja periodicamente os termos para estar ciente de quaisquer modificações.
                            </p>
                        </div>

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">4. Uso do Site</h2>
                            <p>
                                Você concorda em utilizar nosso site apenas para fins legais e de maneira que não viole os direitos de terceiros, nem restrinja ou iniba o uso e aproveitamento do site por parte de outros usuários.
                            </p>
                        </div>

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">5. Conta do Usuário</h2>
                            <p>
                                Ao criar uma conta em nosso site, você é responsável por manter a confidencialidade das suas informações de conta, incluindo senha, e por todas as atividades que ocorram em sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado da sua conta.
                            </p>
                        </div>

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">6. Compras e Pagamentos</h2>
                            <p>
                                Ao efetuar uma compra em nosso site, você concorda em fornecer informações precisas de pagamento, atualizadas e completas para todas as compras realizadas. A Poço Artesiano RJ reserva-se ao direito de recusar ou cancelar pedidos a seu critério.
                            </p>
                        </div>

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">7. Política de Privacidade</h2>
                            <p>
                                O uso de informações pessoais está sujeito à nossa <Link to="/politica-de-privacidade" className="text-cyan-400 hover:underline">Política de Privacidade</Link>.
                            </p>
                        </div>

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">8. Propriedade Intelectual</h2>
                            <p>
                                Todos os conteúdos presentes em nosso site, como textos, gráficos, logotipos, ícones, imagens, vídeos e software, são propriedade exclusiva da Poço Artesiano RJ ou de seus colaboradores.
                            </p>
                        </div>

                        <div className="border-l-2 border-cyan-500/50 pl-6">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">9. Limitação de Responsabilidade</h2>
                            <p>
                                A Poço Artesiano RJ não será responsável por danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de uso do site.
                            </p>
                        </div>

                        <div className="bg-cyan-900/20 border-2 border-cyan-500/20 p-8 text-center">
                            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-tighter">10. Contato</h2>
                            <p className="mb-4">
                                Para qualquer dúvida ou esclarecimento sobre estes termos de uso, entre em contato conosco:
                            </p>
                            <p className="text-2xl font-black text-cyan-400 font-mono tracking-tighter italic">
                                contato.grupowebcluster@gmail.com
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/5 italic text-gray-500 text-[10px] text-center uppercase tracking-widest">
                            Ao continuar a utilizar nosso site, você concorda com estes termos de uso da Poço Artesiano RJ.
                            <br />Obrigado por escolher a <span className="text-cyan-500/50">pocoartesianorj.com.br</span>.
                        </div>
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
