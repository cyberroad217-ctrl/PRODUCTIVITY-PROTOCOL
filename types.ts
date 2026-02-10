
export enum Category {
  EBOOKS = 'E-books',
  TEMPLATES = 'Templates',
  MARKETING = 'Marketing Kits',
  AI_PACKS = 'AI Packs',
  BUSINESS = 'Business Kits',
  SOFTWARE = 'Software & Tools'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  salesCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface ConsoleStats {
  languageCorpus: string;
  vectorIndex: string;
  storageTiers: number;
  activeLayers: number;
  contextWindow: string;
  routingMode: string;
}
