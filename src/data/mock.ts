import { Stat, NewsItem, Testimonial } from '../types';

export const stats: Stat[] = [
    { value: "500", label: "PROJETOS EXECUTADOS" },
    { value: "900", label: "POÇOS LEGALIZADOS" }
];

export const news: NewsItem[] = [
    {
        id: 1,
        title: "Seca e falta d'água no Recreio: Soluções",
        excerpt: "Se a água da rua vive faltando, o poço mudou minha vida como sua empresa e em cons...",
        date: "12 Out",
        category: "Notícias"
    },
    {
        id: 2,
        title: "Poço Artesiano Hídrica e economia fina.",
        excerpt: "Com a crise hídrica, ter autonomia tornou-se essencial para condomínios e indústrias...",
        date: "05 Set",
        category: "Dicas"
    },
    {
        id: 3,
        title: "Manutenção Preventiva: O Segredo da Longevidade",
        excerpt: "Aprenda como pequenos cuidados podem evitar grandes gastos com seu poço artesiano...",
        date: "20 Ago",
        category: "Dicas"
    }
];

export const testimonials: Testimonial[] = [
    {
        quote: "Depois de anos sofrendo com a falta d'água no Recreio, o poço mudou minha vida. Economia real e tranquilidade total.",
        author: "Ricardo M.",
        role: "Cliente Residencial"
    },
    {
        quote: "A redução na conta de água do condomínio foi imediata. O investimento se pagou em menos de 10 meses. Recomendo fortemente.",
        author: "Mariana Souza",
        role: "Síndica de Condomínio"
    },
    {
        quote: "Atendimento técnico de primeira. Perfuraram com precisão e a água é de excelente qualidade. Autonomia total agora.",
        author: "José Silva",
        role: "Proprietário Rural"
    },
    {
        quote: "O suporte pós-venda é excepcional. Sempre que tive dúvidas sobre a bomba ou a manutenção, fui atendido prontamente. Empresa séria.",
        author: "Cláudia Oliveira",
        role: "Empresária"
    }
];

export const faqData = [
    {
        q: "Por que investir em um poço artesiano agora?",
        a: "A crise hídrica e os constantes reajustes nas tarifas tornam a autonomia hídrica um investimento estratégico com payback rápido."
    },
    {
        q: "Qual o valor de um poço artesiano hoje?",
        a: "O valor varia conforme a geologia e profundidade, partindo de soluções compactas até projetos industriais de grande porte."
    },
    {
        q: "É permitido ter um poço artesiano em casa?",
        a: "Sim, desde que respeitadas as normas técnicas de construção e os processos de outorga junto aos órgãos competentes."
    },
    {
        q: "Precisa de licença para fazer poço semi-artesiano?",
        a: "Sim, todo aproveitamento de águas subterrâneas requer regularização (Outorga ou Dispensa) junto ao INEA."
    },
    {
        q: "Quanto tempo leva para perfurar um poço artesiano?",
        a: "Em média, a perfuração leva de 3 a 7 dias úteis, dependendo da geologia do terreno e da profundidade do projeto."
    },
    {
        q: "Quanto fica para legalizar um poço artesiano?",
        a: "O custo envolve taxas governamentais e honorários técnicos para elaboração de projeto e acompanhamento geológico."
    }
];
