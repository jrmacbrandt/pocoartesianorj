import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export const CityBanner: React.FC = () => {
    return (
        <div className="bg-yellow-950/20 border-l-4 border-yellow-500 p-4 my-8 rounded-r-lg max-w-4xl mx-auto">
            <div className="flex items-start md:items-center gap-4">
                <div className="bg-yellow-500/10 p-2 rounded-full hidden md:block">
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                    <h3 className="text-yellow-400 font-bold mb-1 font-mono uppercase text-sm md:text-base">
                        ⚠️ Atenção: Risco de Multa e Lacramento
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Poços sem outorga no RJ estão sujeitos à fiscalização rigorosa. Evite prejuízos.
                        <Link
                            to="/legalizacao-outorga-inea"
                            className="text-cyan-400 hover:text-cyan-300 ml-1 font-bold hover:underline decoration-cyan-500/30 underline-offset-4"
                        >
                            Evite multas e o lacramento do seu poço: regularize sua outorga junto ao INEA
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
