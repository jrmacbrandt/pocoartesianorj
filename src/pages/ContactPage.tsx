import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const ContactPage: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formStatus, setFormStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);

        const formData = new FormData(e.currentTarget);

        // This is a default access key for demonstration + public testing.
        // User can replace with their own from https://web3forms.com/
        formData.append("access_key", "dabfe65e-88eb-4856-b385-28ff8b4a96fe");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
            } else {
                setFormStatus("Erro ao enviar. Por favor, tente novamente.");
            }
        } catch (error) {
            setFormStatus("Erro de conexão. Verifique sua rede.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contato | Poço Artesiano RJ</title>
                <meta name="description" content="Entre em contato com a Poço_Artesiano_RJ. Orçamentos para perfuração, manutenção e legalização de poços no Rio de Janeiro." />
            </Helmet>

            <Breadcrumbs />

            <section className="py-24 bg-slate-950 min-h-screen relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                            <MessageSquare className="w-3 h-3" /> Central_de_Atendimento
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
                            VAMOS INICIAR SEU <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 font-mono">PROJETO_HÍDRICO</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                            Engenharia de precisão para sua autonomia. Nossa equipe técnica está pronta para dimensionar a solução ideal para sua propriedade.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* CONTACT INFO & MAP */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                {/* Cards */}
                                <div className="p-8 bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-cyan-900/20 flex items-center justify-center border border-cyan-500/20 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-2 uppercase font-mono text-sm tracking-wider">Localização</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Avenida Presidente Vargas, 7325<br />
                                                Centro, Rio de Janeiro - RJ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-cyan-900/20 flex items-center justify-center border border-cyan-500/20 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-2 uppercase font-mono text-sm tracking-wider">E-mail Técnico</h4>
                                            <p className="text-cyan-500/70 text-sm font-mono break-all">
                                                contato.grupowebcluster@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* GOOGLE MAP */}
                            <div className="relative h-[300px] lg:h-[400px] bg-slate-900 border border-white/5 overflow-hidden group">
                                <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay pointer-events-none z-10"></div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.21323!2d-43.18442!3d-22.9035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a5f8a5f9%3A0x6d6d6d6d6d6d6d6d!2sAv.%20Pres.%20Vargas%2C%207325%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020210-030!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&style=feature:all|element:all|saturation:-100|lightness:-20"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                                ></iframe>
                                <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[9px] font-mono text-cyan-500 uppercase tracking-widest">
                                    Live_Satellite_Feed
                                </div>
                            </div>
                        </div>

                        {/* FORM PANEL */}
                        <div className="lg:col-span-7">
                            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-8 md:p-12 relative overflow-hidden">
                                {/* Decor lines */}
                                <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/10 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-white/10 pointer-events-none"></div>

                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.form
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest ml-1">Nome_Completo</label>
                                                    <input
                                                        required
                                                        name="name"
                                                        type="text"
                                                        placeholder="Ex: João Roberto"
                                                        className="w-full bg-slate-950 border border-white/10 p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm uppercase"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest ml-1">E-mail_Contato</label>
                                                    <input
                                                        required
                                                        name="email"
                                                        type="email"
                                                        placeholder="email@exemplo.com"
                                                        className="w-full bg-slate-950 border border-white/10 p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest ml-1">Telefone/WhatsApp</label>
                                                    <input
                                                        required
                                                        name="phone"
                                                        type="tel"
                                                        placeholder="(21) 00000-0000"
                                                        className="w-full bg-slate-950 border border-white/10 p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest ml-1">Serviço_Pretendido</label>
                                                    <div className="relative">
                                                        <select
                                                            name="service"
                                                            className="w-full bg-slate-950 border border-white/10 p-4 pr-12 text-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm uppercase appearance-none cursor-pointer"
                                                        >
                                                            <option>Perfuração de Poço</option>
                                                            <option>Manutenção e Limpeza</option>
                                                            <option>Legalização / Outorga</option>
                                                            <option>Outros Serviços</option>
                                                        </select>
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest ml-1">Descrição_da_Necessidade</label>
                                                <textarea
                                                    required
                                                    name="message"
                                                    rows={5}
                                                    placeholder="Descreva seu projeto ou problema..."
                                                    className="w-full bg-slate-950 border border-white/10 p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm uppercase resize-none"
                                                ></textarea>
                                            </div>

                                            {formStatus && (
                                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono text-center">
                                                    {formStatus}
                                                </div>
                                            )}

                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 text-black font-black py-5 flex items-center justify-center gap-3 transition-all tracking-tighter uppercase group"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                                ) : (
                                                    <>
                                                        ENVIAR REQUISIÇÃO TÉCNICA
                                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-[10px] text-gray-600 text-center uppercase font-mono mt-4">
                                                *Seus dados estão protegidos sob nossa <a href="/politica-de-privacidade" className="text-cyan-500/50 hover:text-cyan-400 underline transition-colors">Política de Privacidade</a>.
                                            </p>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-20"
                                        >
                                            <div className="w-20 h-20 bg-cyan-500 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_-10px_rgba(6,182,212,0.5)]">
                                                <CheckCircle2 className="w-10 h-10 text-black" />
                                            </div>
                                            <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">Mensagem Recebida</h3>
                                            <p className="text-gray-500 max-w-sm mx-auto mb-10">
                                                Protocolo de atendimento gerado. Nossa equipe técnica entrará em contato em até 24h úteis.
                                            </p>
                                            <button
                                                onClick={() => setIsSubmitted(false)}
                                                className="text-cyan-500 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors"
                                            >
                                                ← Enviar nova mensagem
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
