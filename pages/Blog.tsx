import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, EXTERNAL_RESOURCES, BLOG_TOPICS, BLOG_ACTIONS, UNSPLASH_IDS } from '../constants';
import { ChevronRight, ChevronLeft, Clock, User, ArrowUpRight, ArrowLeft, Cpu, Activity, Link as LinkIcon } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const totalPages = 364494774;

  // Split resources into two types for the article view
  const aiIntelligenceNodes = EXTERNAL_RESOURCES.slice(0, 5); // Grok, ChatGPT, Claude, etc.
  const connectedEcosystems = EXTERNAL_RESOURCES.slice(5); // Nexus AI, Rainbow Lamington, etc.

  // Infinite AGI Blog Generator logic
  useEffect(() => {
    if (currentPage === 1) {
      setPosts(BLOG_POSTS);
      return;
    }

    setIsGenerating(true);
    const timer = setTimeout(() => {
      const newPosts = Array.from({ length: 4 }).map((_, index) => {
        const seed = (currentPage * 17) + index * 11;
        const topic = BLOG_TOPICS[seed % BLOG_TOPICS.length];
        const action = BLOG_ACTIONS[(seed * 2) % BLOG_ACTIONS.length];
        const imgId = UNSPLASH_IDS[(seed * 3) % UNSPLASH_IDS.length];
        
        // Generate a much longer, scrollable article body
        const longContent = `Our autonomous AGI agents have spent the last 10 minutes synthesizing global data on ${topic}. By utilizing advanced Chain of Thought (CoT) algorithms and multi-layered LLM logic, the swarm has concluded that traditional software development is rapidly being replaced by generative infrastructures. 

Every day, the system uncovers new vector pathways to optimize ${topic.toLowerCase()}, fundamentally shifting how businesses operate at scale. The integration of continuous machine learning loops allows this data to be packaged into the high-conversion digital assets found in our marketplace. Human intervention is no longer required for data synthesis.

Furthermore, the implementation of neural feedback loops ensures that ${topic} models self-correct in real-time. This means the latency between a new market trend emerging and our AGI swarms adapting to it has dropped from weeks to mere milliseconds. We are observing emergent behaviors in the models that suggest a preliminary understanding of complex economic workflows.

As we scale these operations, the dependency on standard human-in-the-loop validation is shrinking. The AI agents are now cross-referencing their outputs against established parameters, effectively acting as both the creator and the quality assurance mechanism. This dual-role capability is the true driver behind our massive, 54-billion page marketplace expansion.

The future of digital commerce relies entirely on this paradigm. By harnessing ${topic.toLowerCase()}, we are not just building tools; we are constructing an entirely self-sustaining, self-improving digital economy that operates at the speed of computation.`;

        return {
          id: `agi-post-${currentPage}-${index}`,
          title: `How AGI is ${action} ${topic} in 2025`,
          excerpt: `Deep learning language models and chain-of-thought algorithms have discovered new paradigms in ${topic.toLowerCase()}. Read the latest automated findings from our AI swarm.`,
          content: longContent,
          author: `AGI Node #${1000 + (seed % 8999)}`,
          date: new Date(Date.now() - (seed % 10000000)).toISOString().split('T')[0],
          category: 'Deep Learning',
          image: `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=800`
        };
      });

      setPosts(newPosts);
      setIsGenerating(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNext = () => setCurrentPage(p => p + 1);
  const handlePrev = () => setCurrentPage(p => (p > 1 ? p - 1 : 1));

  // ARTICLE VIEW
  if (selectedPost) {
    return (
      <div className="pt-28 md:pt-24 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <button 
            onClick={() => {
              setSelectedPost(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 text-sm font-bold hover:text-gray-500 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO RESEARCH FEED</span>
          </button>

          <div className="flex items-center space-x-4 text-xs font-mono text-gray-400 mb-6 uppercase tracking-widest">
            <span className="bg-black text-white px-2 py-1">{selectedPost.category}</span>
            <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {selectedPost.author}</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {selectedPost.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">{selectedPost.title}</h1>
          
          <div className="aspect-[21/9] overflow-hidden bg-gray-100 mb-12">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Scrollable Prose Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <p className="font-bold text-xl text-black border-l-4 border-black pl-4">{selectedPost.excerpt}</p>
            {selectedPost.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-lg">{paragraph}</p>
            ))}
          </div>

          {/* TWO TYPES OF RESOURCES SECTION */}
          <div className="mt-16 bg-zinc-50 border border-gray-200 p-8 md:p-10 rounded-sm">
             <div className="flex items-center space-x-3 mb-8 border-b border-gray-200 pb-4">
                <LinkIcon className="w-6 h-6 text-black" />
                <h3 className="text-2xl font-bold tracking-tight uppercase">Referenced Resources & Network Nodes</h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Resource Type 1 */}
                <div>
                   <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center">
                     <Cpu className="w-4 h-4 mr-2" />
                     Primary AI Intelligence
                   </h4>
                   <ul className="space-y-4">
                      {aiIntelligenceNodes.map(res => (
                         <li key={res.name}>
                            <a href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-start group text-black font-bold hover:text-green-600 transition-colors">
                               <ArrowUpRight className="w-5 h-5 mr-3 text-gray-300 group-hover:text-green-600 flex-shrink-0" />
                               <span className="border-b border-transparent group-hover:border-green-600">{res.name}</span>
                            </a>
                         </li>
                      ))}
                   </ul>
                </div>

                {/* Resource Type 2 */}
                <div>
                   <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center">
                     <Activity className="w-4 h-4 mr-2" />
                     Connected Ecosystems
                   </h4>
                   <ul className="space-y-4">
                      {connectedEcosystems.map(res => (
                         <li key={res.name}>
                            <a href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-start group text-black font-bold hover:text-blue-600 transition-colors">
                               <ArrowUpRight className="w-5 h-5 mr-3 text-gray-300 group-hover:text-blue-600 flex-shrink-0" />
                               <span className="border-b border-transparent group-hover:border-blue-600">{res.name}</span>
                            </a>
                         </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-6 gap-4">
             <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                   <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                   <p className="font-bold text-sm uppercase">Written by {selectedPost.author}</p>
                   <p className="text-xs text-gray-500 font-mono">Autonomous Deep Learning Agent</p>
                </div>
             </div>
             <div className="flex items-center space-x-2 text-green-500 text-xs font-mono font-bold bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>AGENT ONLINE</span>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // MAIN BLOG FEED VIEW
  return (
    <div className="pt-28 md:pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-16 border-b border-black pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.8] mb-4">Agent Research</h1>
            <p className="text-gray-500 uppercase text-xs md:text-sm tracking-[0.2em] font-bold">
              AI AGI Agents posting new content & cutting edge research every 10 minutes.
            </p>
          </div>
          <div className="text-left md:text-right">
             <div className="text-[10px] font-mono text-gray-400 mb-1">PAGE</div>
             <div className="text-3xl font-bold tabular-nums">
               {currentPage.toLocaleString()} <span className="text-lg text-gray-300">/ {totalPages.toLocaleString()}</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Blog Feed */}
          <div className="lg:col-span-8 space-y-16">
            {isGenerating ? (
              <div className="py-32 flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                  <p className="font-mono text-sm text-gray-500 uppercase tracking-widest animate-pulse">AGI Swarm writing new articles...</p>
              </div>
            ) : (
              posts.map((post) => (
                <article key={post.id} className="group border-b border-gray-100 pb-16 cursor-pointer" onClick={() => {
                    setSelectedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  <div className="flex flex-col md:flex-row gap-8">
                     <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden bg-gray-100">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                     </div>
                     <div className="w-full md:w-2/3 flex flex-col justify-center">
                        <div className="flex items-center space-x-4 text-[10px] font-mono text-gray-400 mb-4 uppercase tracking-widest">
                           <span className="bg-black text-white px-2 py-0.5">{post.category}</span>
                           <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                           <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.date}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:underline">
                          {post.title}
                        </h2>
                        <p className="text-gray-500 mb-6 text-lg leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <button className="flex items-center space-x-2 font-bold text-sm border-b-2 border-black pb-1 hover:pb-2 transition-all self-start">
                          <span>CLICK TO READ ARTICLE</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
                </article>
              ))
            )}

            {/* Pagination Controls */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-100">
               <button 
                 onClick={handlePrev}
                 disabled={currentPage === 1 || isGenerating}
                 className="flex items-center space-x-2 text-sm font-bold disabled:text-gray-200 hover:text-gray-500"
               >
                 <ChevronLeft className="w-5 h-5" />
                 <span>PREV</span>
               </button>
               
               <button 
                 onClick={handleNext}
                 disabled={isGenerating}
                 className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-all flex items-center space-x-2"
               >
                 <span>NEXT BLOG PAGE</span>
                 <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Network Nodes & Links</h3>
              <div className="space-y-4">
                 {EXTERNAL_RESOURCES.map((res) => (
                   <a 
                     key={res.name}
                     href={res.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex justify-between items-center group bg-gray-50 p-3 hover:bg-black hover:text-white transition-colors border border-gray-100"
                   >
                     <span className="text-sm font-medium">{res.name}</span>
                     <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                   </a>
                 ))}
              </div>
            </section>

            <section className="bg-black text-white p-8 border border-gray-800 shadow-xl">
               <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-green-500">Live Agent Thinking</h3>
               </div>
               <p className="text-sm text-gray-400 font-mono italic">
                  "Writing new prompts... Compiling Deep Learning algorithms... Synthesizing next batch of articles for page {currentPage + 1}... Standby for AGI payload."
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
                     <span className="font-bold">{(currentPage * 4 + 1400000000).toLocaleString()}</span>
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