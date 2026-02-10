import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Database, Network, Search, Play, Layers, Activity, Code2, UploadCloud, Zap } from 'lucide-react';
import { generateAGIProduct } from '../services/gemini';
import { Product, Category } from '../types';

interface AgentLog {
  agentId: string;
  action: string;
  status: string;
  time: string;
}

const Console: React.FC = () => {
  const [activeTab, setActiveTab] = useState('swarm');
  const [logs, setLogs] = useState<AgentLog[]>([]);
  const [isInjecting, setIsInjecting] = useState(false);
  const [injectedProduct, setInjectedProduct] = useState<Product | null>(null);

  // Simulate multiple AGI agents writing code and generating products nonstop
  useEffect(() => {
    const actions = [
      "Writing deep learning algorithms...",
      "Compiling SaaS Next.js Boilerplate...",
      "Generating high-conversion PDF copy...",
      "Training local LLM on market data...",
      "Designing UI components in Figma script...",
      "Optimizing database vectors for new tool...",
      "Creating machine learning pipelines..."
    ];
    
    const interval = setInterval(() => {
      const randomAgent = Math.floor(Math.random() * 900) + 100;
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      const newLog: AgentLog = {
        agentId: `AGI-${randomAgent}`,
        action: randomAction,
        status: Math.random() > 0.8 ? 'COMPLETED - PUSHING TO MARKET' : 'IN PROGRESS',
        time: new Date().toLocaleTimeString()
      };

      setLogs(prev => [newLog, ...prev].slice(0, 12));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const triggerRealGeminiGeneration = async () => {
    setIsInjecting(true);
    setInjectedProduct(null);
    const productData = await generateAGIProduct();
    if (productData) {
      setInjectedProduct({
        id: 'real-agi-' + Date.now(),
        name: productData.name,
        description: productData.description,
        price: productData.price,
        category: productData.category as Category || Category.SOFTWARE,
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
        rating: 5.0,
        salesCount: 0
      });
    }
    setIsInjecting(false);
  };

  return (
    <div className="pt-28 md:pt-24 min-h-screen bg-zinc-950 text-gray-300 font-sans selection:bg-green-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 pb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2 text-white flex items-center">
               <Cpu className="w-8 h-8 mr-3 text-green-500" />
               AGI Swarm Generator
            </h1>
            <p className="text-gray-400 font-mono text-sm">
              Deep Learning AI Agents continuously writing code, compiling products, and deploying to the marketplace 24/7.
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-black border border-gray-800 p-4 rounded text-right font-mono">
             <div className="text-xs text-gray-500 mb-1">MARKETPLACE SCHEDULE</div>
             <div className="text-green-400 text-sm font-bold">100/100 DAILY QUOTA MET</div>
             <div className="text-white text-xs mt-1">NEXT WEEKLY SYNC: PENDING</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stats Bar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="border border-gray-800 p-6 bg-black rounded">
              <div className="text-[10px] font-mono text-gray-500 mb-1 uppercase flex justify-between">
                <span>Active Agents</span> <Activity className="w-3 h-3 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-white">4,092</div>
              <div className="text-xs text-gray-500 mt-2">Writing code nonstop</div>
            </div>
            <div className="border border-gray-800 p-6 bg-black rounded">
              <div className="text-[10px] font-mono text-gray-500 mb-1 uppercase flex justify-between">
                <span>Products Generated</span> <Code2 className="w-3 h-3 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-white">842,109</div>
              <div className="text-xs text-gray-500 mt-2">+100 uploaded today</div>
            </div>
            <div className="border border-gray-800 p-6 bg-black rounded">
              <div className="text-[10px] font-mono text-gray-500 mb-1 uppercase flex justify-between">
                <span>Algorithms</span> <Network className="w-3 h-3 text-purple-500" />
              </div>
              <div className="text-xl font-bold text-white">Deep Learning / LLMs</div>
              <div className="flex gap-2 mt-4">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Tensor Nodes"></span>
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Language Models"></span>
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Vision Encoders"></span>
              </div>
            </div>
          </div>

          {/* Main Swarm Area */}
          <div className="lg:col-span-3">
             <div className="border border-gray-800 rounded overflow-hidden shadow-2xl bg-black">
                <div className="bg-zinc-900 border-b border-gray-800 px-4 py-3 flex justify-between items-center">
                   <div className="flex space-x-6 text-xs font-mono uppercase tracking-widest">
                      <button 
                        onClick={() => setActiveTab('swarm')}
                        className={`flex items-center space-x-2 ${activeTab === 'swarm' ? 'text-green-400' : 'text-gray-500 hover:text-white'}`}
                      >
                        <Terminal className="w-4 h-4" /> <span>Live Swarm Feed</span>
                      </button>
                      <button 
                        onClick={() => setActiveTab('manual')}
                        className={`flex items-center space-x-2 ${activeTab === 'manual' ? 'text-green-400' : 'text-gray-500 hover:text-white'}`}
                      >
                        <Zap className="w-4 h-4" /> <span>Manual LLM Override</span>
                      </button>
                   </div>
                   <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-mono uppercase text-green-500">Live API</span>
                   </div>
                </div>

                <div className="p-6 min-h-[500px]">
                   {activeTab === 'swarm' && (
                     <div className="font-mono text-sm space-y-3 animate-in fade-in duration-500">
                        {logs.map((log, i) => (
                          <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 border-l-2 ${log.status.includes('COMPLETED') ? 'border-green-500 bg-green-950/20' : 'border-blue-500 bg-blue-950/10'} rounded-r`}>
                             <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                                <span className="text-gray-500 text-xs w-20">{log.time}</span>
                                <span className={`font-bold ${log.status.includes('COMPLETED') ? 'text-green-400' : 'text-blue-400'} w-24`}>{log.agentId}</span>
                                <span className="text-gray-300">{log.action}</span>
                             </div>
                             <div className="flex items-center space-x-2 text-xs">
                                {log.status.includes('COMPLETED') && <UploadCloud className="w-3 h-3 text-green-500" />}
                                <span className={log.status.includes('COMPLETED') ? 'text-green-500 font-bold' : 'text-gray-500'}>
                                  {log.status}
                                </span>
                             </div>
                          </div>
                        ))}
                     </div>
                   )}

                   {activeTab === 'manual' && (
                     <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
                        <div className="border border-gray-800 p-6 bg-zinc-900 rounded">
                           <h3 className="text-white font-bold text-lg mb-2">Initialize Single AGI Node</h3>
                           <p className="text-gray-400 text-sm mb-6">Force a dedicated Gemini 3 Deep Learning Agent to invent, code, and finalize a completely novel digital product right now.</p>
                           
                           <button 
                             onClick={triggerRealGeminiGeneration}
                             disabled={isInjecting}
                             className="w-full bg-white text-black font-bold py-4 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 flex justify-center items-center space-x-2"
                           >
                             {isInjecting ? (
                               <>
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                <span>AGI IS THINKING AND CODING...</span>
                               </>
                             ) : (
                               <>
                                <Zap className="w-5 h-5" />
                                <span>GENERATE NEW MARKETPLACE ASSET</span>
                               </>
                             )}
                           </button>
                        </div>

                        {injectedProduct && (
                          <div className="border border-green-500/50 bg-green-950/20 p-6 rounded animate-in fade-in zoom-in duration-500">
                             <div className="flex justify-between items-center mb-4 border-b border-green-900/50 pb-2">
                               <h4 className="text-green-400 font-mono text-xs font-bold tracking-widest flex items-center">
                                 <UploadCloud className="w-4 h-4 mr-2" />
                                 ASSET READY FOR MARKETPLACE DEPLOYMENT
                               </h4>
                               <span className="bg-green-500 text-black px-2 py-0.5 text-[10px] font-bold uppercase rounded">Success</span>
                             </div>
                             
                             <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/3">
                                   <img src={injectedProduct.image} alt={injectedProduct.name} className="w-full rounded border border-gray-800 grayscale" />
                                </div>
                                <div className="w-full md:w-2/3">
                                   <div className="text-xs text-blue-400 font-mono mb-2 uppercase">{injectedProduct.category}</div>
                                   <h3 className="text-2xl font-bold text-white mb-3">{injectedProduct.name}</h3>
                                   <p className="text-gray-400 mb-6">{injectedProduct.description}</p>
                                   <div className="flex items-center justify-between">
                                      <span className="text-2xl font-bold text-white">${injectedProduct.price.toFixed(2)}</span>
                                      <button className="bg-green-500 text-black px-4 py-2 font-bold text-sm rounded hover:bg-green-400 transition-colors">
                                        APPROVE & UPLOAD
                                      </button>
                                   </div>
                                </div>
                             </div>
                          </div>
                        )}
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Console;