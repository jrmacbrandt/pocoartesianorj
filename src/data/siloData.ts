export interface City {
    id: string;
    name: string;
    slug: string;
}

export interface Pillar {
    id: string;
    title: string;
    slug: string;
    description: string;
}

export const CITIES: City[] = [
    { id: 'niteroi', name: 'Niterói', slug: 'niteroi' },
    { id: 'marica', name: 'Maricá', slug: 'marica' },
    { id: 'sao-goncalo', name: 'São Gonçalo', slug: 'sao-goncalo' },
    { id: 'itaborai', name: 'Itaboraí', slug: 'itaborai' },
    { id: 'rio-bonito', name: 'Rio Bonito', slug: 'rio-bonito' },
    { id: 'mage', name: 'Magé', slug: 'mage' },
    { id: 'nova-iguacu', name: 'Nova Iguaçu', slug: 'nova-iguacu' },
    { id: 'duque-de-caxias', name: 'Duque de Caxias', slug: 'duque-de-caxias' },
    { id: 'saquarema', name: 'Saquarema', slug: 'saquarema' },
    { id: 'araruama', name: 'Araruama', slug: 'araruama' }
];

export const PILLARS: Pillar[] = [
    {
        id: 'perfuracao',
        title: 'Perfuração de Poços',
        slug: 'perfuracao-de-pocos',
        description: 'Perfuração de poços artesianos com equipamentos de alta tecnologia e garantia de água.'
    },
    {
        id: 'manutencao',
        title: 'Manutenção e Limpeza',
        slug: 'manutencao-e-limpeza',
        description: 'Limpeza química e mecânica, manutenção preventiva e corretiva de poços.'
    },
    {
        id: 'legalizacao',
        title: 'Legalização e Outorga',
        slug: 'legalizacao-outorga-inea',
        description: 'Legalização completa junto ao INEA, outorga de direito de uso e dispensa.'
    }
];

export const ROUTES = {
    HOME: '/',
    CONTACT: '/contato',
    PILLAR: (slug: string) => `/${slug}`,
    CITY: (pillarSlug: string, citySlug: string) => `/${pillarSlug}/${citySlug}`
};
