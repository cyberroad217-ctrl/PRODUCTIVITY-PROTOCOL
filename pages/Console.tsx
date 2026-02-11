
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Database, Network, Search, Play, Layers, Activity, Code2, UploadCloud, Zap, ShieldAlert, ShieldCheck, Lock, Globe, TrendingUp, BarChart, Crosshair, Coins, HardDrive, Cpu as CpuIcon, Server, Shield, Activity as ActivityIcon } from 'lucide-react';
import { generateAGIProduct } from '../services/gemini';
import { Product, Category, Transaction } from '../types';

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
  const [computeYield, setComputeYield] = useState(42092);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constants locally to avoid import issues
  const ADJECTIVES = ['Quantum', 'Neural', 'Elite', 'Advanced', 'Autonomous', 'Deep'];

  useEffect(() => {
    const actions = [
      "Writing deep learning algorithms...",
      "Compiling SaaS Next.js Boilerplate...",
      "Generating high-conversion PDF copy...",
      "Training local LLM on market data...",
      "Designing UI components in Figma script...",
      "Optimizing database vectors for new tool...",
      "Creating machine learning pipelines...",
      "Auditing smart contracts for yield...",
      "Refining recursive prompt chains..."
    ];
    
    const interval = setInterval(() => {
      const randomAgent = Math.floor(Math.random() * 900) + 100;
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const newLog: AgentLog = {
        agentId: `AGI-${randomAgent}`,
        action: randomAction,
        status: Math.random() > 0.8 ? 'COMPLETED' : 'IN PROGRESS',
        time: new Date().toLocaleTimeString()
      };
      setLogs(prev => [newLog, ...prev].slice(0, 12));
      setComputeYield(prev => prev + Math.floor(Math.random() * 10) - 2);

      // Simulate live transactions
      if (Math.random() > 0.7) {
        const newTx: Transaction = {
          id: `TX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
          asset: ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)] + ' Protocol',
          amount: Math.floor(Math.random() * 500) + 20,
          status: Math.random() > 0.3 ? 'SETTLED' : 'PENDING',
          timestamp: new Date().toLocaleTimeString()
        };
        setTransactions(prev => [newTx, ...prev].slice(0, 10));
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  /* Fix for triggerRealGeminiGeneration undefined error */
  const triggerRealGeminiGeneration = async () => {
    setIsInjecting(true);
    setInjectedProduct(null);
    try {
      const product = await generateAGIProduct();
      if (product) {
        setInjectedProduct({
          ...product,
          id: `agi-gen-${Date.now()}`,
          image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
          rating: 4.9,
          salesCount: 1,
        });
      }
    } catch (error) {
      console.error("Gemini manual generation error:", error);
    } finally {
      setIsInjecting(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'command' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let animationFrameId: number;
      const points = Array.from({ length: 15 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      }));
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        points.forEach((p, i) => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill();
          for (let j = i + 1; j < points.length; j++) {
            const p2 = points[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 150) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); }
          }
        });
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
      return () => window.cancelAnimationFrame(animationFrameId);
    }
  }, [activeTab]);

  return (
    <div className="pt-32 md:pt-28 min-h-screen bg-zinc-950 text-gray-300 font-sans selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-800 pb-12">
          <div>
            <h1 className="text-5xl font-black tracking-tighter uppercase mb-3 text-white flex items-center">
               <Cpu className="w-10 h-10 mr-4 text-blue-500" />
               Sovereign Command Console
            </h1>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.5em]">
              Real-time monitoring of global node propagation and asset synthesis
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex space-x-4">
             <div className="bg-black border border-zinc-800 p-4 rounded-sm text-right">
                <p className="text-[8px] font-black text-zinc-500 uppercase mb-1">Global Load</p>
                <p className="text-lg font-black text-blue-500 tabular-nums">12.8%</p>
             </div>
             <div className="bg-blue-600 p-4 rounded-sm text-white shadow-xl">
                <p className="text-[8px] font-black uppercase mb-1 opacity-70">Uptime</p>
                <p className="text-lg font-black tabular-nums tracking-widest">99.9%</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Quick Stats Sidebar */}
          <div className="lg:col-span-3 space-y-6">
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm group hover:border-blue-500 transition-all">
                <div className="flex justify-between items-center mb-4">
                   <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Active Swarms</p>
                   <ActivityIcon className="w-4 h-4 text-blue-500 animate-pulse" />
                </div>
                <p className="text-4xl font-black tabular-nums text-white">4,092</p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm group hover:border-green-500 transition-all">
                <div className="flex justify-between items-center mb-4">
                   <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Yield Velocity</p>
                   <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-4xl font-black tabular-nums text-white">12.8<span className="text-lg">x</span></p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-6">Regional Distribution</p>
                <div className="space-y-4">
                   {['NA-EAST', 'EU-WEST', 'AS-SOUTH'].map((reg, i) => (
                     <div key={i} className="space-y-1">
                        <div className="flex justify-between text-[8px] font-black uppercase">
                           <span>{reg}</span>
                           <span>{80 - (i*20)}%</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                           <div className="bg-blue-600 h-full" style={{ width: `${80 - (i*20)}%` }}></div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Main Monitor Area */}
          <div className="lg:col-span-9 space-y-8">
             <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl">
                <div className="bg-black border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
                   <div className="flex space-x-8">
                      {['swarm', 'settlement', 'command', 'manual'].map(tab => (
                        <button 
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all pb-1 border-b-2 ${activeTab === tab ? 'text-white border-blue-500' : 'text-zinc-600 border-transparent hover:text-zinc-400'}`}
                        >
                          {tab}
                        </button>
                      ))}
                   </div>
                   <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[8px] font-black font-mono uppercase text-green-500">Live Telemetry</span>
                   </div>
                </div>

                <div className="p-8 min-h-[500px]">
                   {activeTab === 'swarm' && (
                     <div className="font-mono text-[11px] space-y-4 animate-in fade-in duration-500">
                        {logs.map((log, i) => (
                          <div key={i} className="flex justify-between items-center p-3 bg-black/40 border-l-2 border-blue-600">
                             <div className="flex space-x-6">
                                <span className="text-zinc-600">{log.time}</span>
                                <span className="text-blue-400 font-bold">{log.agentId}</span>
                                <span className="text-zinc-300 uppercase tracking-tighter">{log.action}</span>
                             </div>
                             <span className={log.status === 'COMPLETED' ? 'text-green-500 font-bold' : 'text-zinc-600'}>{log.status}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {activeTab === 'settlement' && (
                     <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                           <h3 className="text-xl font-black uppercase tracking-tighter">Global Ledger V1</h3>
                           <p className="text-[10px] font-mono text-zinc-500">Total Settlement: $1,284,092.42</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                           {transactions.map(tx => (
                             <div key={tx.id} className="bg-black/20 border border-zinc-800 p-4 flex justify-between items-center group hover:border-zinc-500 transition-all">
                                <div className="flex items-center space-x-6">
                                   <div className={`p-2 rounded-full ${tx.status === 'SETTLED' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                      <Zap className="w-4 h-4" />
                                   </div>
                                   <div>
                                      <p className="text-xs font-black uppercase tracking-widest text-white">{tx.asset}</p>
                                      <p className="text-[9px] font-mono text-zinc-600">{tx.id}</p>
                                   </div>
                                </div>
                                <div className="text-right">
                                   <p className="text-sm font-black tabular-nums text-white">${tx.amount}</p>
                                   <p className={`text-[8px] font-black uppercase ${tx.status === 'SETTLED' ? 'text-green-500' : 'text-zinc-600'}`}>{tx.status}</p>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                   )}

                   {activeTab === 'command' && (
                     <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500 h-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="bg-black p-8 rounded-sm border border-zinc-800 relative">
                              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8">Node Reliability Index</p>
                              <div className="h-32 flex items-end space-x-2">
                                 {Array.from({ length: 12 }).map((_, i) => (
                                   <div key={i} className="flex-grow bg-blue-600/20 border-t border-blue-500 transition-all hover:bg-blue-500" style={{ height: `${20 + Math.random() * 80}%` }}></div>
                                 ))}
                              </div>
                           </div>
                           <div className="bg-black p-8 rounded-sm border border-zinc-800">
                              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8">Asset Liquidity Delta</p>
                              <div className="flex flex-col justify-center h-32 items-center text-center">
                                 <p className="text-4xl font-black text-green-500">+12.42%</p>
                                 <p className="text-[9px] font-mono text-zinc-600 uppercase mt-2">Compounding daily via swarm</p>
                              </div>
                           </div>
                        </div>
                        <div className="relative h-64 bg-black border border-zinc-800 rounded-sm overflow-hidden">
                           <canvas ref={canvasRef} width={800} height={256} className="w-full h-full opacity-60" />
                           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-500 animate-pulse">Node Sync: Optimal</p>
                           </div>
                        </div>
                     </div>
                   )}

                   {activeTab === 'manual' && (
                     <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                        <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-sm shadow-2xl relative group">
                           <div className="absolute top-0 right-0 p-8 opacity-5">
                              <CpuIcon className="w-40 h-40" />
                           </div>
                           <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">Manual Core Override</h3>
                           <p className="text-zinc-500 text-sm mb-12 max-w-md">Forcing a dedicated Gemini 3 Node to architect and deploy a unique systemic variant immediately.</p>
                           <button 
                             onClick={triggerRealGeminiGeneration}
                             disabled={isInjecting}
                             className="w-full bg-white text-black py-6 text-xs font-black uppercase tracking-[0.4em] hover:bg-zinc-200 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95 disabled:opacity-50"
                           >
                             {isInjecting ? "SYNTHESIZING PAYLOAD..." : "INITIATE CORE GEN"}
                           </button>
                        </div>

                        {injectedProduct && (
                          <div className="bg-blue-600/10 border border-blue-500/50 p-8 rounded-sm animate-in zoom-in duration-500">
                             <div className="flex flex-col md:flex-row gap-10">
                                <div className="md:w-1/3 aspect-square bg-black border border-zinc-800 overflow-hidden">
                                   <img src={injectedProduct.image} className="w-full h-full object-cover grayscale" />
                                </div>
                                <div className="md:w-2/3 flex flex-col justify-center">
                                   <p className="text-blue-400 font-mono text-[9px] uppercase tracking-widest mb-2">STRUCTURALLY VETTED</p>
                                   <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">{injectedProduct.name}</h4>
                                   <p className="text-zinc-400 text-sm mb-8 leading-relaxed uppercase tracking-widest">{injectedProduct.description}</p>
                                   <div className="flex justify-between items-center">
                                      <span className="text-4xl font-black tabular-nums">${injectedProduct.price.toFixed(2)}</span>
                                      <button className="bg-blue-600 text-white px-10 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all rounded-sm">DEPLOY NODE</button>
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
