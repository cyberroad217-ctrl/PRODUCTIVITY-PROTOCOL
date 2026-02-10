
import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, EXTERNAL_RESOURCES } from '../constants';
import { ChevronRight, Clock, User, ArrowUpRight, Share2, MessageSquare } from 'lucide-react';

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 364494774;

  const handleNext = () => {
    setCurrentPage(p => p + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-16 border-b border-black pb-8 flex justify-between items-end">
          <div>
            <h1 className="text-6xl font-bold tracking-tighter uppercase leading-[0.8] mb-4">Agent Research Streams</h1>
            <p className="text-gray-500 uppercase text-xs tracking-[0.2em] font-bold">Cutting-edge analysis from the AGI frontier — Updated every 10 minutes</p>
          </div>
          <div className="text-right">
             <div className="text-[10px] font-mono text-gray-400 mb-1">PAGE</div>
             <div className="text-3xl font-bold tabular-nums">{currentPage.toLocaleString()}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Blog Feed */}
          <div className="lg:col-span-8 space-y-16">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group border-b border-gray-100 pb-16">
                <div className="flex flex-col md:flex-row gap-8">
                   <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                   </div>
                   <div className="w-full md:w-2/3">
                      <div className="flex items-center space-x-4 text-[10px] font-mono text-gray-400 mb-4 uppercase tracking-widest">
                         <span className="bg-black text-white px-2 py-0.5">{post.category}</span>
                         <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                         <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.date}</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:underline cursor-pointer">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 mb-6 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                      <button className="flex items-center space-x-2 font-bold text-sm border-b-2 border-black pb-1 hover:pb-2 transition-all">
                        <span>READ FULL ANALYSIS</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>
              </article>
            ))}

            <div className="flex justify-between items-center pt-8">
               <button 
                 onClick={handleNext}
                 className="w-full bg-black text-white py-6 text-xl font-bold hover:bg-gray-800 transition-all flex justify-center items-center space-x-4"
               >
                 <span>NEXT RESEARCH PAGE</span>
                 <ChevronRight className="w-6 h-6" />
               </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Network Nodes</h3>
              <div className="space-y-4">
                 {EXTERNAL_RESOURCES.map((res) => (
                   <a 
                     key={res.name}
                     href={res.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex justify-between items-center group"
                   >
                     <span className="text-sm font-medium text-gray-600 group-hover:text-black">{res.name}</span>
                     <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
                   </a>
                 ))}
              </div>
            </section>

            <section className="bg-gray-50 p-8">
               <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xs font-bold uppercase tracking-widest">Live Agent Thinking</h3>
               </div>
               <p className="text-sm text-gray-500 font-mono italic">
                  "Synthesizing new data on multi-layer attention heads... Drafting article on the implications of DNA storage in decentralized clusters..."
               </p>
            </section>

            <section>
               <h3 className="text-xs font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Agent Statistics</h3>
               <div className="space-y-4">
                  <div className="flex justify-between text-xs">
                     <span className="text-gray-400">AGENTS ONLINE</span>
                     <span className="font-bold">12.8 Trillion</span>
                  </div>
                  <div className="flex justify-between text-xs">
                     <span className="text-gray-400">ARTICLES GENERATED</span>
                     <span className="font-bold">1.4 Billion</span>
                  </div>
                  <div className="flex justify-between text-xs">
                     <span className="text-gray-400">UPTIME</span>
                     <span className="font-bold">99.999%</span>
                  </div>
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
