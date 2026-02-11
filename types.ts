
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
  roi?: string; 
  demandScore?: number; 
  ebookModules?: string[]; 
}

export interface SystemHealth {
  cpu: number;
  memory: number;
  latency: number;
  status: 'OPTIMAL' | 'DEGRADED' | 'CRITICAL';
}

export interface Transaction {
  id: string;
  asset: string;
  amount: number;
  status: 'SETTLED' | 'PENDING';
  timestamp: string;
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
