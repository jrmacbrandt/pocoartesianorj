import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, UserCheck, Send, Loader2, ExternalLink, Activity, ArrowRight } from 'lucide-react';

export const VirtualEngineer: React.FC = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string | null>(null);
    const [sources, setSources] = useState<{ title: string, uri: string }[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const askAI = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setResponse(null);
        setSources([]);

        try {
            const apiKey = process.env.GROQ_API_KEY;

            if (!apiKey || apiKey.includes('PLACEHOLDER')) {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setResponse(`[MODO DIAGNÓSTICO] Terminal aguardando configuração de chave GROQ no .env.local.`);
                return;
            }

            console.log('[ENGENHEIRO_VIRTUAL] Tentando conexão neural via Groq...');

            const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        { role: 'system', content: 'Você é o "Engenheiro Virtual Poço RJ". Responda de forma técnica, direta e profissional sobre hidrogeologia, perfuração de poços artesianos e legislação no Rio de Janeiro.' },
                        { role: 'user', content: query }
                    ],
                    temperature: 0.7
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error?.message || `Erro HTTP: ${res.status}`);
            }

            setResponse(data.choices[0]?.message?.content || "Resposta processada sem retorno de texto.");
            setQuery(''); // Clear input after successful response

            // Re-focus input for next question
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);

        } catch (err: any) {
            console.error('[ENGENHEIRO_VIRTUAL] Erro Crítico:', err);
            setResponse(`FALHA DE COMUNICAÇÃO: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleConsultEngineer = () => {
        navigate('/contato');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-24 bg-black border-t border-white/10 font-mono">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto border border-white/10 bg-slate-950 p-1">
                    {/* TERMINAL HEADER */}
                    <div className="flex items-center justify-between bg-white/5 p-3 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">
                            ENGENHEIRO_VIRTUAL_V1.0
                        </div>
                    </div>

                    <div className="p-6 md:p-12">
                        <div className="flex items-start gap-6 mb-12">
                            <div className="w-16 h-16 border border-cyan-500/50 bg-cyan-900/10 flex items-center justify-center shrink-0 relative">
                                <Activity className="w-8 h-8 text-cyan-500 animate-pulse" />
                                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">ENGENHEIRO VIRTUAL</h2>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                                    Acesso direto à base de conhecimento hidrogeológico. Pergunte sobre lençol freático, custos de perfuração e licenciamento, etc...
                                </p>
                            </div>
                        </div>

                        {/* CHAT INTERFACE */}
                        <div className="space-y-6">
                            {/* Input Area */}
                            <div className="relative group">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    id="ai-query"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && askAI()}
                                    placeholder="> INSERIR COMANDO OU PERGUNTA..."
                                    className="w-full bg-black border border-white/20 p-6 text-cyan-400 placeholder-cyan-900 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                                    aria-label="Perguntar ao Engenheiro Virtual"
                                />
                                <button
                                    onClick={askAI}
                                    disabled={loading || !query.trim()}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-white transition-colors disabled:opacity-30"
                                    aria-label="Enviar pergunta"
                                >
                                    {loading ? <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" /> : <Send className="w-6 h-6" aria-hidden="true" />}
                                </button>
                            </div>

                            {/* Response Area */}
                            {response && (
                                <div className="bg-cyan-950/10 border-l-2 border-cyan-500 p-6 animate-in fade-in slide-in-from-top-2 max-h-[450px] overflow-y-auto custom-scrollbar">
                                    <div className="text-xs text-cyan-600 mb-2 uppercase tracking-widest sticky top-0 bg-slate-950/50 backdrop-blur-sm py-1">Saída:</div>
                                    <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                        {response}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col gap-4 mt-8 border-t border-white/5 pt-4">
                                <div className="flex justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
                                    <span>Status: ONLINE</span>
                                    <button onClick={handleConsultEngineer} className="hover:text-cyan-500 transition-colors flex items-center gap-2">
                                        Falar com Humano <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                                <div className="inline-flex self-start px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest">
                                    A inteligência artificial pode cometer erros. Para um atendimento personalizado, agende uma consulta com a nossa Equipe de Engenharia.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
