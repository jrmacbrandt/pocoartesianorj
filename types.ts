export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}