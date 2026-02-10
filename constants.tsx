
import { Product, Category, BlogPost } from './types';

export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00';

export const FEATURED_PRODUCT: Product = {
  id: 'protocol-ebook-001',
  name: 'The Productivity Protocol: Elite System',
  description: 'Master the high-performance frameworks used by trillion-dollar founders. A comprehensive guide to scaling your output with AI-integrated workflows.',
  price: 29.99,
  category: Category.EBOOKS,
  image: 'https://picsum.photos/seed/productivity/800/1000',
  rating: 4.9,
  salesCount: 12500
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Next.js + AI Boilerplate 2025',
    description: 'The ultimate starting point for high-demand SaaS products.',
    price: 149.0,
    category: Category.SOFTWARE,
    image: 'https://picsum.photos/seed/code1/600/400',
    rating: 5.0,
    salesCount: 420
  },
  {
    id: 'p2',
    name: 'The Solopreneur AI Stack',
    description: '500+ Midjourney Prompts & Automation Workflows.',
    price: 49.0,
    category: Category.AI_PACKS,
    image: 'https://picsum.photos/seed/ai1/600/400',
    rating: 4.8,
    salesCount: 3100
  },
  {
    id: 'p3',
    name: 'SaaS Marketing Kit 2025',
    description: 'Complete frameworks for viral growth and conversion.',
    price: 89.0,
    category: Category.MARKETING,
    image: 'https://picsum.photos/seed/mkt1/600/400',
    rating: 4.7,
    salesCount: 890
  },
  {
    id: 'p4',
    name: 'Deep Learning Prompt Library',
    description: 'Expert-engineered prompts for Claude, GPT, and Gemini.',
    price: 25.0,
    category: Category.AI_PACKS,
    image: 'https://picsum.photos/seed/prompt1/600/400',
    rating: 4.9,
    salesCount: 5600
  },
  {
    id: 'p5',
    name: 'Quantum Workflow Templates',
    description: 'Notion & Obsidian structures for high-output individuals.',
    price: 35.0,
    category: Category.TEMPLATES,
    image: 'https://picsum.photos/seed/tpl1/600/400',
    rating: 4.6,
    salesCount: 2200
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Rise of Trillion-Token Context Windows',
    excerpt: 'How quantum LLMs are reshaping software architecture and long-form reasoning.',
    content: '',
    author: 'AI Agent #0992',
    date: '2025-05-12',
    category: 'Research',
    image: 'https://picsum.photos/seed/blog1/800/600'
  },
  {
    id: 'b2',
    title: 'Agentic Workflows: The New OS',
    excerpt: 'Why static software is dying and the era of autonomous protocols has begun.',
    content: '',
    author: 'Content AI',
    date: '2025-05-11',
    category: 'FutureTech',
    image: 'https://picsum.photos/seed/blog2/800/600'
  }
];

export const EXTERNAL_RESOURCES = [
  { name: 'Google Labs', url: 'https://labs.google.com/search?source=hp_search&authuser=0' },
  { name: 'Hugging Face MCP', url: 'https://huggingface.co/learn/mcp-course/unit0/introduction' },
  { name: 'Grok', url: 'https://grok.com' },
  { name: 'ChatGPT', url: 'https://chatgpt.com' },
  { name: 'Claude', url: 'https://claude.ai/login' },
  { name: 'Stitch by Google', url: 'https://stitch.withgoogle.com' }
];
