import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplet, Search, ZoomIn, ZoomOut, Sun, Moon } from 'lucide-react';
import { PILLARS } from '../../data/siloData';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [fontSize, setFontSize] = useState(100);
    const [theme, setTheme] = useState<'dark' | 'light'>(
        (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
    );
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme Management
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'light') {
            root.classList.add('light');
            root.style.colorScheme = 'light';
        } else {
            root.classList.remove('light');
            root.style.colorScheme = 'dark';
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Font Size Management
    useEffect(() => {
        window.document.documentElement.setAttribute('data-font-size', fontSize.toString());
    }, [fontSize]);

    const increaseFontSize = () => {
        setFontSize((prev) => Math.min(prev + 15, 145));
    };

    const decreaseFontSize = () => {
        setFontSize((prev) => Math.max(prev - 15, 85));
    };

    const handleSearch = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            console.log("Pesquisando por:", searchQuery);
            // Simular busca ou redirecionar
            setIsSearchOpen(false);
            setSearchQuery('');
            alert(`Busca por "${searchQuery}" iniciada...`);
        }
    };

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'} py-4`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* LOGO - Industrial/Technical Look */}
                <Link to="/" className="flex items-center gap-3 cursor-pointer group shrink-0">
                    <div className="bg-cyan-500/10 border border-cyan-500/20 p-2 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                        <Droplet className="w-5 h-5 text-cyan-400 group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white dark:text-white light:text-slate-900 font-mono">
                        POÇO_ARTESIANO<span className="text-cyan-400">_RJ</span>
                    </span>
                </Link>

                {/* DESKTOP NAV - Monospace, Uppercase, Small */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <Link
                        to="/"
                        className="text-white/70 dark:text-white/70 light:text-slate-600 hover:text-cyan-400 text-xs font-mono uppercase tracking-[0.2em] transition-colors hover:underline decoration-cyan-500/50 underline-offset-8"
                    >
                        Início
                    </Link>

                    {/* Render Pillars as links */}
                    {PILLARS.map((pillar) => (
                        <Link
                            key={pillar.id}
                            to={`/${pillar.slug}`}
                            className="text-white/70 dark:text-white/70 light:text-slate-600 hover:text-cyan-400 text-xs font-mono uppercase tracking-[0.2em] transition-colors hover:underline decoration-cyan-500/50 underline-offset-8"
                        >
                            {pillar.title.split(' ')[0]}
                        </Link>
                    ))}

                    {/* CONTROLS GROUP */}
                    <div className="flex items-center gap-3 pl-4 border-l border-white/10 dark:border-white/10 light:border-slate-200">
                        {/* Search */}
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearch}
                                placeholder="PROCURAR..."
                                className={`bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 font-mono text-[10px] px-3 py-1.5 focus:outline-none focus:border-cyan-500 transition-all duration-300 ${isSearchOpen ? 'w-32 opacity-100 mr-2' : 'w-0 opacity-0 p-0 pointer-events-none'}`}
                            />
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="text-white/50 dark:text-white/50 light:text-slate-400 hover:text-cyan-400 transition-colors"
                                aria-label={isSearchOpen ? "Fechar busca" : "Abrir busca"}
                            >
                                <Search className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={decreaseFontSize}
                                className="text-white/50 dark:text-white/50 light:text-slate-400 hover:text-cyan-400 transition-colors"
                                aria-label="Diminuir tamanho da fonte"
                                title="Diminuir Fonte"
                            >
                                <ZoomOut className="w-4 h-4" aria-hidden="true" />
                            </button>
                            <span className="text-[9px] font-mono text-cyan-400 min-w-[28px] text-center" aria-live="polite">{fontSize}%</span>
                            <button
                                onClick={increaseFontSize}
                                className="text-white/50 dark:text-white/50 light:text-slate-400 hover:text-cyan-400 transition-colors"
                                aria-label="Aumentar tamanho da fonte"
                                title="Aumentar Fonte"
                            >
                                <ZoomIn className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Dark Mode */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="text-white/50 dark:text-white/50 light:text-slate-400 hover:text-cyan-400 transition-colors"
                            aria-label="Mudar Tema"
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    </div>

                    <Link
                        to="/contato"
                        className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 ml-2 font-mono text-xs font-bold uppercase tracking-widest transition-all shrink-0"
                    >
                        Fale Conosco
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button 
                    className="md:hidden text-white" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
                </button>
            </div>

            {/* MOBILE MENU - Full Screen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <Link to="/" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-cyan-400">
                        INÍCIO
                    </Link>
                    {PILLARS.map((p) => (
                        <Link
                            key={p.id}
                            to={`/${p.slug}`}
                            className="text-2xl font-black text-white uppercase tracking-tighter hover:text-cyan-400"
                        >
                            {p.title}
                        </Link>
                    ))}
                    <Link to="/contato" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-cyan-400">
                        CONTATO
                    </Link>
                </div>
            )}
        </nav>
    );
};
