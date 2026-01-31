export interface City {
    id: string;
    name: string;
    slug: string;
    technicalData?: {
        aquifers: string;
        depth: string;
        quality: string;
    };
}

export interface Pillar {
    id: string;
    title: string;
    slug: string;
    description: string;
}

export const CITIES: City[] = [
    {
        id: 'niteroi',
        name: 'Niterói',
        slug: 'niteroi',
        technicalData: {
            aquifers: 'Aquíferos Cristalinos (Fissural) e Sedimentares em Itaipu/Piratininga',
            depth: '60m a 150m (Cristalino) / 20m a 40m (Sedimentar)',
            quality: 'Alta pureza, com mineralização característica da Região Oceânica.'
        }
    },
    {
        id: 'marica',
        name: 'Maricá',
        slug: 'marica',
        technicalData: {
            aquifers: 'Aquífero Sedimentar (Itaipuaçu) e Cristalino (Bambuí)',
            depth: '40m a 120m',
            quality: 'Potável, com baixo índice de turbidez e monitoramento de salinidade.'
        }
    },
    {
        id: 'sao-goncalo',
        name: 'São Gonçalo',
        slug: 'sao-goncalo',
        technicalData: {
            aquifers: 'Aquífero Cristalino Fissural predominante',
            depth: '80m a 180m',
            quality: 'Geralmente mineralizada, excelente para uso doméstico e industrial.'
        }
    },
    {
        id: 'itaborai',
        name: 'Itaboraí',
        slug: 'itaborai',
        technicalData: {
            aquifers: 'Aquíferos Cristalinos e Bacias Sedimentares Locais',
            depth: '60m a 140m',
            quality: 'Límpida e fresca, com alto grau de pureza natural.'
        }
    },
    {
        id: 'rio-bonito',
        name: 'Rio Bonito',
        slug: 'rio-bonito',
        technicalData: {
            aquifers: 'Aquífero Cristalino e Aluviões em regiões de vale',
            depth: '50m a 130m',
            quality: 'Altíssima qualidade, característica de águas de encosta da Serra.'
        }
    },
    {
        id: 'mage',
        name: 'Magé',
        slug: 'mage',
        technicalData: {
            aquifers: 'Sistema Aquífero Macacu e Cristalino da Serra do Mar',
            depth: '40m a 110m',
            quality: 'Uma das melhores águas da Baixada, com baixa dureza e alta potabilidade.'
        }
    },
    {
        id: 'nova-iguacu',
        name: 'Nova Iguaçu',
        slug: 'nova-iguacu',
        technicalData: {
            aquifers: 'Aquíferos Sedimentares (Piranema) e Cristalinos',
            depth: '40m a 120m',
            quality: 'Boa, com presença de ferro característica de solos sedimentares.'
        }
    },
    {
        id: 'duque-de-caxias',
        name: 'Duque de Caxias',
        slug: 'duque-de-caxias',
        technicalData: {
            aquifers: 'Aquífero Sedimentar e Cristalino Fissural',
            depth: '50m a 150m',
            quality: 'Excelente para processos industriais, reuso e consumo doméstico.'
        }
    },
    {
        id: 'saquarema',
        name: 'Saquarema',
        slug: 'saquarema',
        technicalData: {
            aquifers: 'Aquíferos Sedimentares Quaternários (Restingas)',
            depth: '20m a 70m',
            quality: 'Levemente mineralizada, exige proteção contra intrusão salina.'
        }
    },
    {
        id: 'araruama',
        name: 'Araruama',
        slug: 'araruama',
        technicalData: {
            aquifers: 'Sedimentos Litorâneos e Aquífero Cristalino de base',
            depth: '30m a 90m',
            quality: 'Boa potabilidade, ideal para condomínios e casas de veraneio.'
        }
    }
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
