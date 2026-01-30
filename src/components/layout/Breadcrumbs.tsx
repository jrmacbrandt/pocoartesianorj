import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';
import { PILLARS, CITIES } from '../../data/siloData';

export const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    const getReadableName = (slug: string) => {
        const pillar = PILLARS.find(p => p.slug === slug);
        if (pillar) return pillar.title;

        const city = CITIES.find(c => c.slug === slug);
        if (city) return city.name;

        return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    };

    // Schema.org BreadcrumbList
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://pocoartesianorj.com.br';
    const schemaItems = pathnames.map((slug, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        return {
            "@type": "ListItem",
            "position": index + 2, // 1 is Home
            "name": getReadableName(slug),
            "item": `${origin}${routeTo}`
        };
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": origin
            },
            ...schemaItems
        ]
    };

    return (
        <div className="bg-slate-950/50 border-b border-white/5 py-3 mt-[72px]">
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <div className="container mx-auto px-4 md:px-6">
                <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400 font-mono">
                    <li>
                        <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center">
                            <Home className="w-3 h-3 md:w-4 md:h-4" />
                        </Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return (
                            <React.Fragment key={to}>
                                <ChevronRight className="w-3 h-3 text-gray-600" />
                                <li>
                                    {last ? (
                                        <span className="text-cyan-500 font-medium cursor-default">
                                            {getReadableName(value)}
                                        </span>
                                    ) : (
                                        <Link to={to} className="hover:text-cyan-400 transition-colors">
                                            {getReadableName(value)}
                                        </Link>
                                    )}
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};
