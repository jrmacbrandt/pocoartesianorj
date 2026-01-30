import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
    text?: string;
    to?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
    text = 'INICIAR PROJETO',
    to = '/contato'
}) => {
    return (
        <div className="flex justify-center mt-16 mb-8">
            <Link
                to={to}
                className="group relative inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black px-12 py-5 text-lg tracking-[0.2em] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
                <span>{text}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
};
