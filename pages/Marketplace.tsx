
import React, { useState, useEffect } from 'react';
// Fix: Category is not exported from constants.tsx, so it was removed from this import
import { INITIAL_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, Search, ChevronLeft, ChevronRight, LayoutGrid, List } from 'lucide-react';
// Fix: Import Category from types.ts where it is correctly exported
import { Product, Category } from '../types';

const Marketplace: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const totalPages = 54883237565; // Massive simulated count

  const categories = ['All', ...Object.values(Category)];

  // Simulate loading new products on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // In a real app, this would fetch from a massive DB.
    // For demo, we just cycle the seed data.
    const shuffled = [...INITIAL_PRODUCTS].sort(() => Math.random() - 0.5);
    setProducts(shuffled);
  }, [currentPage]);

  const handleNext = () => setCurrentPage((p) => p + 1);
  const handlePrev = () => setCurrentPage((p) => (p > 1 ? p - 1 : 1));

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2">Marketplace</h1>
            <p className="text-gray-500 text-sm font-mono">
              Browsing page <span className="text-black font-bold">{currentPage.toLocaleString()}</span> / {totalPages.toLocaleString()}
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search software, kits..."
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-200 focus:border-black outline-none text-sm"
              />
            </div>
            <div className="flex border border-gray-200 divide-x divide-gray-200">
              <button className="p-2 bg-gray-50 hover:bg-gray-100"><LayoutGrid className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-gray-100"><List className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="w-4 h-4" />
                <span className="font-bold text-sm uppercase tracking-widest">Filters</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`block text-sm w-full text-left py-1 hover:pl-1 transition-all ${
                          activeCategory === cat ? 'font-bold text-black border-l-2 border-black pl-2' : 'text-gray-500'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400 mb-3">Price Range</h4>
                  <div className="space-y-4">
                    <input type="range" className="w-full accent-black" />
                    <div className="flex justify-between text-xs font-mono">
                      <span>$0</span>
                      <span>$5000+</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-gray-100">
                  <div className="bg-black text-white p-4">
                    <p className="text-[10px] font-mono mb-2">NEUROLOGICAL VAULT</p>
                    <p className="text-sm font-bold mb-4">Sync your brain for 1-click downloads.</p>
                    <button className="w-full bg-white text-black py-2 text-xs font-bold">NEXT SYNC</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Product Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={`${product.id}-${currentPage}`} product={product} />
              ))}
              {/* Simulate "more products" by doubling the list for view */}
              {products.map((product) => (
                <ProductCard key={`${product.id}-alt-${currentPage}`} product={{...product, id: product.id + '-alt'}} />
              ))}
            </div>

            {/* Pagination UI */}
            <div className="mt-20 flex flex-col items-center">
              <div className="flex items-center space-x-8">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2 text-sm font-bold disabled:text-gray-200 hover:text-gray-500"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>PREV</span>
                </button>
                <div className="flex items-center space-x-2 font-mono text-sm">
                   <span className="w-10 h-10 border border-black flex items-center justify-center font-bold">
                     {currentPage}
                   </span>
                   <span className="text-gray-300">...</span>
                   <span className="px-4">548,832,375,65</span>
                </div>
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 text-sm font-bold hover:text-gray-500"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-bold">
                Generated by Quantum DNA Cluster #8892
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
