
import React from 'react';
import { Layers, ShieldCheck, Zap, Server, Coins, PieChart, Rocket, CheckCircle2, ShieldAlert, Briefcase, Globe, Target, ArrowRight, Cpu, Database, Award, TrendingUp, Hexagon, Network, Activity, RefreshCcw, Lock, HardDrive } from 'lucide-react';

const Protocol: React.FC = () => {
  return (
    <div className="pt-28 md:pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Page Header */}
        <div className="mb-20 text-center border-b border-gray-100 pb-16">
          <div className="inline-flex items-center space-x-2 text-zinc-400 mb-6 font-bold text-[10px] uppercase tracking-[0.4em]">
             <Award className="w-3.5 h-3.5" />
             <span>Sovereign Standard V11.0.4</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Technical Blueprint</h1>
          <p className="text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            The architectural foundation and strategic roadmap of the Productivity Protocol ecosystem. Designed for planetary-scale deployment and autonomous capital allocation.
          </p>
        </div>

        {/* System Architecture Section */}
        <section className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <div className="bg-black text-white p-3 rounded-sm">
              <Layers className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">System Architecture</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              {[
                {
                  title: "Frontend Layer",
                  tech: "React 19 / Next.js / Edge",
                  desc: "High-performance, edge-rendered interface with zero-latency state management and neural design principles optimized for 120fps UI."
                },
                {
                  title: "API Gateway",
                  tech: "Node.js / Fastify / gRPC",
                  desc: "Secure, horizontally-scaled gateway with integrated rate-limiting, bot prevention, and cryptographic JWT validation nodes."
                },
                {
                  title: "Memory Layer",
                  tech: "Pinecone / Vector DB / Redis",
                  desc: "High-dimensional vector storage for persistent AI context and sub-millisecond semantic retrieval across trillion-token corpora."
                },
                {
                  title: "Sovereign Web3",
                  tech: "Solana / Layer 2 / Auth",
                  desc: "Decentralized identity and smart-contract-based revenue distribution for cross-border ecosystem settlement and tokenized yield."
                }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-black pl-8 relative group">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">{item.tech}</h3>
                  <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-8 sticky top-24">
              {/* Recursive Node Graph Visual (SVG) */}
              <div className="bg-zinc-950 p-8 rounded-sm border border-zinc-800 shadow-2xl relative overflow-hidden h-[400px] flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#4f46e5_0%,transparent_70%)]"></div>
                 <svg width="300" height="300" viewBox="0 0 300 300" className="relative z-10 animate-spin-slow">
                    <path d="M150 25 L260 85 L260 215 L150 275 L40 215 L40 85 Z" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="opacity-30" />
                    <circle cx="150" cy="150" r="40" fill="none" stroke="white" strokeWidth="2" />
                    <circle cx="150" cy="25" r="5" fill="white" />
                    <circle cx="260" cy="85" r="5" fill="white" />
                    <circle cx="260" cy="215" r="5" fill="white" />
                    <circle cx="150" cy="275" r="5" fill="white" />
                    <circle cx="40" cy="215" r="5" fill="white" />
                    <circle cx="40" cy="85" r="5" fill="white" />
                    <line x1="150" y1="25" x2="150" y2="150" stroke="white" strokeWidth="0.5" className="animate-pulse" />
                    <line x1="260" y1="85" x2="150" y2="150" stroke="white" strokeWidth="0.5" className="animate-pulse" />
                    <line x1="260" y1="215" x2="150" y2="150" stroke="white" strokeWidth="0.5" className="animate-pulse" />
                 </svg>
                 <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div>
                       <p className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Architecture</p>
                       <p className="text-xs font-bold text-white uppercase tracking-widest">Recursive Loop V4</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-mono text-green-500 uppercase animate-pulse">Synced</p>
                    </div>
                 </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-12 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Server className="w-64 h-64 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Infrastructure Audit</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
                    <span className="text-xs font-mono font-bold uppercase text-zinc-400">Security Layer</span>
                    <span className="text-xs font-mono font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100 uppercase tracking-widest">Zero-Trust Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
                    <span className="text-xs font-mono font-bold uppercase text-zinc-400">Node Latency</span>
                    <span className="text-xs font-mono font-bold text-zinc-800">0.02ms Global Routing</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
                    <span className="text-xs font-mono font-bold uppercase text-zinc-400">AI Context Retention</span>
                    <span className="text-xs font-mono font-bold text-zinc-800">Infinite Persistence Loop</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold uppercase text-zinc-400">System Uptime</span>
                    <span className="text-xs font-mono font-bold text-zinc-800">99.9999% SLA Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Moat Section with Growth Loop Visual */}
        <section className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <div className="bg-black text-white p-3 rounded-sm">
              <Network className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Technical Moat</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
             <div className="p-10 border border-zinc-100 bg-white group hover:border-black transition-all">
                <Hexagon className="w-10 h-10 mb-8 group-hover:text-blue-600 transition-colors" />
                <h3 className="text-2xl font-bold uppercase mb-4">Proprietary Training</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Our models are trained on exclusive, low-latency financial transaction data and executive workflow sessions that are inaccessible to standard LLM crawlers.</p>
             </div>
             <div className="p-10 border border-zinc-100 bg-white group hover:border-black transition-all">
                <Activity className="w-10 h-10 mb-8 group-hover:text-green-600 transition-colors" />
                <h3 className="text-2xl font-bold uppercase mb-4">Recursive Optimization</h3>
                <p className="text-gray-500 leading-relaxed text-sm">The architecture utilizes a closed-loop feedback mechanism where AI agents audit and rewrite their own logic buffers every 100 blocks, ensuring exponential efficiency.</p>
             </div>
          </div>

          {/* Recursive Growth Loop Logic */}
          <div className="bg-zinc-950 p-12 rounded-sm border border-zinc-800">
             <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-12 text-center">Recursive Growth Loop V11.0</h3>
             <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {[
                  { icon: <Zap />, label: "Input Action" },
                  { icon: <RefreshCcw />, label: "Recursive Audit" },
                  { icon: <Cpu />, label: "Neural Refine" },
                  { icon: <TrendingUp />, label: "Yield Scaled" }
                ].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center group">
                       <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-full text-zinc-500 group-hover:text-white group-hover:border-white transition-all shadow-xl">
                          {step.icon}
                       </div>
                       <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">{step.label}</p>
                    </div>
                    {i < 3 && <ArrowRight className="hidden md:block w-6 h-6 text-zinc-800 animate-pulse" />}
                  </React.Fragment>
                ))}
             </div>
          </div>
        </section>

        {/* Security Hardening Section */}
        <section className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <div className="bg-black text-white p-3 rounded-sm">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Security Hardening</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Lock />, title: "Zero-Trust Protocol", desc: "Never trust, always verify. Every internal request requires cryptographic signatures and biometric validation." },
              { icon: <Activity />, title: "Rate Limit Logic", desc: "Sliding-window algorithms and neural bot detection to mitigate DDoS and brute-force attempts at the edge." },
              { icon: <HardDrive />, title: "Environment Isolation", desc: "Strict container-level separation of dev, staging, and production clusters with encrypted secrets." },
              { icon: <Award />, title: "Automated Auditing", desc: "Continuous on-chain auditing of system changes and user permission updates for immutable compliance." }
            ].map((s, i) => (
              <div key={i} className="bg-zinc-50 border border-zinc-100 p-8 rounded-sm hover:border-black transition-all group">
                <div className="mb-6 text-zinc-300 group-hover:text-black transition-colors">{s.icon}</div>
                <h4 className="font-bold uppercase text-sm mb-4 group-hover:text-blue-600 transition-colors">{s.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Roadmap */}
        <section className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <div className="bg-black text-white p-3 rounded-sm">
              <Rocket className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Strategic Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                phase: "Phase 01: Foundation", 
                title: "Protocol MVP", 
                status: "COMPLETED",
                items: ["AI CEO Integration", "Sovereign Infrastructure", "Marketplace Alpha"] 
              },
              { 
                phase: "Phase 02: Expansion", 
                title: "Scale & Revenue", 
                status: "IN_PROGRESS",
                items: ["Recursive Agent Loops", "Global Fin-Infra", "Investor-Ready Blueprints"] 
              },
              { 
                phase: "Phase 03: Dominance", 
                title: "Civilization Scale", 
                status: "PLANNED",
                items: ["Self-Evolving Protocol", "Planet-Scale Nodes", "Tokenized Equity Layer"] 
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-10 hover:border-black transition-all rounded-sm shadow-sm hover:shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{p.phase}</span>
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-sm border font-mono ${
                    p.status === 'COMPLETED' ? 'text-green-600 bg-green-50 border-green-100' :
                    p.status === 'IN_PROGRESS' ? 'text-blue-600 bg-blue-50 border-blue-100 animate-pulse' :
                    'text-zinc-400 bg-zinc-50 border-zinc-100'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-8 tracking-tight uppercase">{p.title}</h4>
                <ul className="space-y-4">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-zinc-500 font-medium uppercase tracking-tight">
                      <CheckCircle2 className={`w-4 h-4 mr-3 flex-shrink-0 ${p.status === 'COMPLETED' ? 'text-green-500' : 'text-zinc-200'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Monetization / Investor Section */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <div className="bg-black text-white p-3 rounded-sm">
              <PieChart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Monetization Strategy</h2>
          </div>

          <div className="bg-zinc-950 text-white p-12 md:p-20 rounded-sm border border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { label: "Subscription Tiers", desc: "Predictable recurring revenue for access to the core Sovereign system." },
                { label: "Usage-Based Billing", desc: "Scaling revenue linearly with compute consumption across the network." },
                { label: "Asset Licensing", desc: "White-labeling the Protocol for enterprise integration and private clusters." },
                { label: "Token Governance", desc: "Sovereign economy participation, buy-backs, and deflationary burn logic." }
              ].map((m, i) => (
                <div key={i}>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 font-mono">MODEL 0{i+1}</p>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{m.label}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-medium">{m.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-20 border-t border-zinc-800 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-md text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Series A Investor Portal</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  The Productivity Protocol is currently seeking Series A partners to scale the planet-scale infrastructure layer. Access our technical due-diligence vault below.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="bg-white text-black px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all rounded-sm shadow-2xl">
                   CONTACT CEO CORE
                 </button>
                 <button className="bg-zinc-800 text-white px-8 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-700 transition-all rounded-sm">
                   DOWNLOAD DECK
                 </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Protocol;
