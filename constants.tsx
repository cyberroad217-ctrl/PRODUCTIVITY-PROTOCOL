import { Product, Category, BlogPost } from './types';

export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00';

export const ADJECTIVES = ['Quantum', 'Neural', 'Elite', 'Advanced', 'Autonomous', 'Deep', 'Solopreneur', 'SaaS', 'Agentic', 'Hyper', 'Cognitive', 'Dynamic', 'Infinite', 'Synthetic', 'Apex', 'Prime', 'Algorithmic', 'Machine', 'Vector', 'Tensor', 'Limitless'];
export const NOUNS = ['System', 'Protocol', 'Framework', 'Toolkit', 'Matrix', 'Engine', 'Vault', 'Boilerplate', 'Stack', 'Library', 'OS', 'Playbook', 'Core', 'Network', 'Grid', 'Module', 'Cluster', 'Swarm', 'Algorithm', 'Generator'];

export const BLOG_TOPICS = ['Chain of Thought Prompts', 'LLM Context Windows', 'Agentic Workflows', 'Deep Learning Scaling', 'AGI System Architecture', 'Vector Database Optimization', 'Multi-Agent Swarms', 'Neural Pathways in SaaS'];
export const BLOG_ACTIONS = ['Destroying', 'Replacing', 'Scaling', 'Automating', 'Synthesizing', 'Revolutionizing', 'Generating', 'Optimizing'];

export const UNSPLASH_IDS = [
  '1498050108023-c5249f4df085', '1504384308090-c894fdcc538d', '1526374965328-7f61d4dc18c5',
  '1618005182384-a83a8bd57fbe', '1504868584819-f81d14d68bf0', '1639322537228-f710d846310a',
  '1676299081847-824916de030a', '1605810230434-7631ac76ec81', '1510915228340-2f8c58d24029',
  '1451187580459-43490279c0fa', '1525547719571-a2d4ac8945e2', '1488590528505-98d2b5aba04b',
  '1550751827-4bd374c3f58b', '1614729939124-032f0b56c9ce', '1496096265110-f83ad7f96608',
  '1507146426996-ef05306b995a', '1551288049-bebda4e38f71', '1523961131990-521072f16e88',
  '1484417894907-623942c8ee29', '1518770660439-4636190af475', '1535223289827-42f1e9919769',
  '1558494949-ef010cbdcc31', '1506377247377-2a5b3b417ebb', '1550439062-609e1531270e',
  '1620712943543-bcc4688e7485', '1460925895917-afdab827c52f', '1677442136019-21780ecad995',
  '1519389953810-1955815b9c05', '1478760329108-5c3ed9d495a0', '1516110833967-0b5716ca1387',
  '1485827404703-89b55fcc595e', '1531297172869-d5d1bb55b3eb', '1518432031352-d6fc5c10da59',
  '1551288049-bebda4e38f71', '1611162617474-5b21e879e113', '1526304640581-d334cdbbf45e',
  '1504384764586-bb4cdc1707b0', '1642132652803-518df9df87b9', '1620712943543-bcc4688e7485'
];

export const FEATURED_PRODUCT: Product = {
  id: 'protocol-ebook-001',
  name: 'The Productivity Protocol: Elite System',
  description: 'Master the high-performance frameworks used by trillion-dollar founders. A comprehensive guide to scaling your output with AI-integrated workflows.',
  price: 29.99,
  category: Category.EBOOKS,
  image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    salesCount: 420
  },
  {
    id: 'p2',
    name: 'The Solopreneur AI Stack',
    description: '500+ Midjourney Prompts & Automation Workflows.',
    price: 49.0,
    category: Category.AI_PACKS,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    salesCount: 3100
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Rise of Trillion-Token Context Windows',
    excerpt: 'How quantum LLMs are reshaping software architecture and long-form reasoning.',
    content: 'The era of narrow context windows is over. AGI swarms are now utilizing massive, multi-trillion token context buffers to ingest entire codebases, historical corporate data, and real-time market feeds simultaneously. This paradigm shift means AI agents no longer "forget" midway through a task. Instead, they maintain persistent, deep-learning memory states across weeks of continuous execution. Organizations deploying these models are seeing a 10,000% increase in autonomous output. We are moving from prompted assistance to fully autonomous, context-aware digital workers.',
    author: 'AI Agent #0992',
    date: '2025-05-12',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXTERNAL_RESOURCES = [
  { name: 'Google Labs', url: 'https://labs.google.com/search?source=hp_search&authuser=0' },
  { name: 'Hugging Face MCP', url: 'https://huggingface.co/learn/mcp-course/unit0/introduction' },
  { name: 'Grok', url: 'https://grok.com' },
  { name: 'ChatGPT', url: 'https://chatgpt.com' },
  { name: 'Claude', url: 'https://claude.ai/login' },
  { name: 'Stitch by Google', url: 'https://stitch.withgoogle.com' },
  { name: 'Nexus AI | Digital Product Ecosystem', url: 'https://websim.com/@darkfire49638182/ai-digital-product-market/edit' },
  { name: 'Rainbow Lamington', url: 'https://rainbow-lamington-d97751.netlify.app' },
  { name: 'Digital PDF Ecosystem', url: 'https://digitalpdf.netlify.app' },
  { name: 'AI Wealth Lab', url: 'https://aiwealthlab.netlify.app' }
];