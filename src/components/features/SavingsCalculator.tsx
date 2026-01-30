import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Wallet, TrendingUp, Droplet, ArrowRight } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
    const navigate = useNavigate();
    const [bill, setBill] = useState(500);

    // Estimation: 85% savings on the bill (considering pump electricity)
    const monthlySavings = bill * 0.85;
    const annualSavings = monthlySavings * 12;
    const fiveYearSavings = annualSavings * 5;

    const handleContactRedirect = () => {
        navigate('/contato');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative border-t border-white/5">
            {/* Bg Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-4 mb-16 items-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest">
                        <Calculator className="w-3 h-3" /> Análise_Sistêmica
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white leading-none tracking-tighter mb-4">
                            QUANTO DINHEIRO <br />
                            <span className="text-red-500">VOCÊ PERDE?</span>
                        </h2>
                        <p className="text-gray-500 text-sm max-w-xl">
                            Simulação em tempo real baseada nas tarifas estaduais.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* INPUT PANEL */}
                    <div className="bg-slate-950 border border-white/10 p-8 shadow-2xl relative group">
                        <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 group-hover:bg-cyan-500 transition-colors"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-white/20 group-hover:bg-cyan-500 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/20 group-hover:bg-cyan-500 transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/20 group-hover:bg-cyan-500 transition-colors"></div>

                        <div className="flex justify-between items-end mb-8">
                            <label htmlFor="bill-range" className="text-gray-400 font-mono text-[10px] uppercase tracking-widest">Sua Conta Mensal (Atual)</label>
                            <span className="text-3xl font-black text-cyan-400 font-mono">R$ {bill}</span>
                        </div>

                        <div className="relative h-12 mb-8">
                            <input
                                id="bill-range"
                                type="range"
                                min="100"
                                max="10000"
                                step="50"
                                value={bill}
                                onChange={(e) => setBill(parseInt(e.target.value))}
                                className="w-full h-1 bg-gray-800 appearance-none cursor-pointer accent-cyan-500 z-10 relative rounded-none hover:bg-gray-700 transition-colors"
                                aria-valuemin={100}
                                aria-valuemax={10000}
                                aria-valuenow={bill}
                            />
                            {/* Ticks */}
                            <div className="w-full flex justify-between mt-4 text-[10px] font-mono text-gray-600 uppercase">
                                <span>Min: R$100</span>
                                <span>|</span>
                                <span>|</span>
                                <span>|</span>
                                <span>Max: R$10k</span>
                            </div>
                        </div>

                        <div className="bg-cyan-900/10 p-4 border-l-2 border-cyan-500/50">
                            <p className="text-cyan-200/50 text-[10px] font-mono">
                                *Cálculo considera manutenção de bomba e eletricidade vs tarifa progressiva CEDAE.
                            </p>
                        </div>
                    </div>

                    {/* RESULTS PANEL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-950 p-6 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <Wallet className="w-4 h-4 text-gray-500" />
                                <span className="text-[10px] text-gray-600 font-mono uppercase">Economia_M</span>
                            </div>
                            <div>
                                <div className="text-xl font-black text-white font-mono">R$ {monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</div>
                                <div className="text-green-500 text-[10px] font-bold mt-1 tracking-widest uppercase">~85% Redução</div>
                            </div>
                        </div>

                        <div className="bg-slate-950 p-6 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <TrendingUp className="w-4 h-4 text-gray-500" />
                                <span className="text-[10px] text-gray-600 font-mono uppercase">Economia_A</span>
                            </div>
                            <div>
                                <div className="text-xl font-black text-white font-mono">R$ {annualSavings.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</div>
                                <div className="text-green-500 text-[10px] font-bold mt-1 tracking-widest uppercase">Anual</div>
                            </div>
                        </div>

                        <div className="bg-cyan-950/30 p-8 border border-cyan-500/20 sm:col-span-2 relative overflow-hidden group hover:bg-cyan-900/20 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Droplet className="w-16 h-16 text-cyan-500" />
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-cyan-400 text-[10px] font-mono uppercase tracking-widest mb-2">Projeção 5 Anos</h4>
                                <div className="text-3xl md:text-4xl font-black text-white font-mono tracking-tighter">
                                    R$ {fiveYearSavings.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                                </div>
                                <button
                                    onClick={handleContactRedirect}
                                    className="mt-6 flex items-center gap-2 text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-colors font-bold tracking-tight"
                                >
                                    INVESTIR ESSA ECONOMIA <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
