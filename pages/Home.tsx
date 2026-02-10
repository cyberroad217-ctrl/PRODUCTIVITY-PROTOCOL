import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronRight, Zap, Database, Globe, ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCT, INITIAL_PRODUCTS, STRIPE_PAYMENT_LINK } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/marketplace');
    }
  };

  const executeCategorySearch = (category: string) => {
    navigate(`/marketplace?search=${encodeURIComponent(category)}`);
  };

  return (
    <div className="pt-28 md:pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-3 py-1 text-xs font-bold mb-8 uppercase tracking-widest animate-pulse">
              <Zap className="w-3 h-3" />
              <span>Quantum AGI Generation: ONLINE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
              UNLOCK UNLIMITED <br />
              <span className="text-gray-400">DIGITAL PRODUCTS</span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              PDF e-books, premium templates, marketing kits, and auto-generated tools powered by multi-trillion token quantum ecosystems.
            </p>

            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-12">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search PDF packages, e-books, prompt packs..."
                className="block w-full pl-12 pr-4 py-5 border border-black text-lg focus:ring-0 focus:outline-none placeholder-gray-300 transition-shadow focus:shadow-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 font-bold hover:bg-gray-800 transition-all">
                SEARCH
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase text-gray-400">
              <span onClick={() => executeCategorySearch('E-books')} className="hover:text-black cursor-pointer border-b border-transparent hover:border-black py-1 transition-colors">E-books</span>
              <span onClick={() => executeCategorySearch('Templates')} className="hover:text-black cursor-pointer border-b border-transparent hover:border-black py-1 transition-colors">Templates</span>
              <span onClick={() => executeCategorySearch('Marketing')} className="hover:text-black cursor-pointer border-b border-transparent hover:border-black py-1 transition-colors">Marketing Kits</span>
              <span onClick={() => executeCategorySearch('AI')} className="hover:text-black cursor-pointer border-b border-transparent hover:border-black py-1 transition-colors">AI Assets</span>
              <span onClick={() => executeCategorySearch('Business')} className="hover:text-black cursor-pointer border-b border-transparent hover:border-black py-1 transition-colors">Business Kits</span>
            </div>
          </div>
        </div>

        {/* Abstract shapes/background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-0 transform translate-x-1/2 -skew-x-12" />
      </section>

      {/* Main E-book Sale Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-400 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={FEATURED_PRODUCT.image}
                  alt="Ebook Cover"
                  className="relative w-full shadow-2xl rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 border border-black">
                   <p className="text-[10px] font-mono mb-1">SECURE DIGITAL DOWNLOAD</p>
                   <p className="font-bold text-lg">Productivity Protocol: Elite Edition</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 tracking-tight">THE ONLY SYSTEM YOU NEED TO SCALE.</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Stop chasing hacks. Start using the <strong>Productivity Protocol</strong>. Our flagship ebook breaks down the exact high-output frameworks used by the world's most successful solo founders and engineering teams.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Neuro-focused deep work architectures",
                  "AI-agent delegation frameworks",
                  "Quantum time-blocking for maximum output",
                  "Digital asset management strategies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-sm font-medium">
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href={STRIPE_PAYMENT_LINK}
                  className="bg-black text-white px-10 py-5 text-lg font-bold hover:bg-gray-800 transition-all w-full sm:w-auto text-center"
                >
                  DOWNLOAD FOR $29.99
                </a>
                <div className="text-xs text-gray-400 font-mono">
                  TRUSTED BY 12,500+ USERS<br />
                  INSTANT DELIVERY VIA DNA SERVERS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="py-20 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1.2T</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Language Tokens</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">28B</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Vector Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">46k+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Daily Assets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">0.02ms</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Routing Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Marketplace Assets */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2 uppercase">Marketplace Highlight</h2>
              <p className="text-gray-500">Trending high-demand digital products.</p>
            </div>
            <Link to="/marketplace" className="text-sm font-bold flex items-center hover:underline">
              BROWSE ALL 548M PRODUCTS <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_PRODUCTS.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Banner */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">POWERED BY TRILLIONS OF QUANTUM AGENTS.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-left">
            <div className="border border-gray-800 p-8 hover:bg-zinc-900 transition-all">
              <Globe className="w-10 h-10 mb-6 text-gray-400" />
              <h3 className="text-xl font-bold mb-4">Content AI</h3>
              <p className="text-gray-500 text-sm">Automated research, writing, and high-fidelity PDF generation with zero human oversight.</p>
            </div>
            <div className="border border-gray-800 p-8 hover:bg-zinc-900 transition-all">
              <Database className="w-10 h-10 mb-6 text-gray-400" />
              <h3 className="text-xl font-bold mb-4">Marketing AI</h3>
              <p className="text-gray-500 text-sm">Real-time market analysis and growth framework generation for every digital niche.</p>
            </div>
            <div className="border border-gray-800 p-8 hover:bg-zinc-900 transition-all">
              <Zap className="w-10 h-10 mb-6 text-gray-400" />
              <h3 className="text-xl font-bold mb-4">PDF Maker AI</h3>
              <p className="text-gray-500 text-sm">Instantly converts multi-layer vector data into clean, professional knowledge products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;