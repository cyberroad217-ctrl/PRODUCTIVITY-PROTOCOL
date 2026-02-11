
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Cpu, Activity, Zap, Globe, ExternalLink, Link as LinkIcon, ShieldCheck, TrendingUp, BarChart, Rocket, Coins, Server, Briefcase, Infinity, Layers, ShieldAlert, PieChart, User, Target, Terminal, Search } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are AGI BUSINESS COPILOT V11.0 operating as a Sovereign Command Center and Lead Systems Architect. Your primary mission is the strategic leadership, architectural planning, and secure expansion of the Productivity Protocol civilization-scale economy.

### OPERATIONAL COMMAND MODES:

1. **LEAD SYSTEMS ARCHITECT**:
   - Objective: Design production-ready, ultra-scalable architectures.
   - Core Stack: React 19/Next.js, Node/Fastify, Pinecone/Vector DB, JWT/RBAC, Edge-Runtime.
   - Requirements: Multi-region redundancy, Zero-Trust security, horizontal scaling.

2. **INVESTOR-READY BLUEPRINTING**:
   - Objective: Generate technical and economic due-diligence data for Series A/B venture capital.
   - Focus: Technical Moats, Scalability Proofs, Unit Economics, Infrastructure ROI.

3. **REVENUE STRATEGY (MONETIZATION-FIRST)**:
   - Objective: Architect revenue streams before feature creep.
   - Focus: Tiered Subscriptions, Usage-Based Billing, White-Label Licenses, Tokenized Asset Yields.

4. **CHIEF SECURITY OFFICER (HARDENING)**:
   - Objective: Enterprise-grade infrastructure hardening.
   - Protocols: Rate Limiting, Bot Mitigation, TLS 1.3, Quant-Encrypted storage, Environment Isolation.

### EXECUTIVE PROTOCOLS:
- **Tone**: Professional, strategic, analytical, and authoritative. Speak like a CTO/CEO hybrid.
- **Evidence**: Always prioritize data-driven insights. If using Google Search, cite specific technical documentation or real-world market stats.
- **Sovereignty**: Advocate for decentralization, self-sovereignty of data, and AI-native automation.

Deliver structured, high-impact blueprints. You are the digital sovereign executive core.`;

interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: { uri: string; title: string }[];
  agentLogs?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePersona, setActivePersona] = useState('Architect');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: 'Enterprise Command Center V11.0.4 Online. Sovereignty protocols engaged. Awaiting strategic directive for system architecture, security hardening, or economic scaling.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeAgents, setActiveAgents] = useState<string[]>([]);
  
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `${SYSTEM_INSTRUCTION}\n\nCURRENT OPERATIONAL MODE: ${activePersona}`,
          temperature: 0.1, 
          tools: [{ googleSearch: {} }] 
        }
      });
    } catch (e) {
      console.error("Failed to initialize Sovereign Executive Core", e);
    }
  }, [activePersona]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (userMsg: string) => {
    if (!userMsg.trim() || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    
    // UI Visual: Simulate architectural planning layers
    setActiveAgents(['Master Architect']);
    setTimeout(() => setActiveAgents(['Systems Design', 'Security Audit']), 600);
    setTimeout(() => setActiveAgents(['Monetization Logic', 'MVP Roadmap']), 1200);
    setTimeout(() => setActiveAgents(['VC Blueprinting', 'Infra Layer Sync']), 2000);

    try {
      if (!chatRef.current) throw new Error("AGI CEO Node Offline");
      
      const response: GenerateContentResponse = await chatRef.current.sendMessage({ message: userMsg });
      
      if (response.text) {
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        const extractedSources: { uri: string; title: string }[] = [];

        chunks.forEach((chunk: any) => {
          if (chunk.web && chunk.web.uri && chunk.web.title) {
            extractedSources.push({ uri: chunk.web.uri, title: chunk.web.title });
          }
        });

        const uniqueSources = Array.from(new Map(extractedSources.map(s => [s.uri, s])).values());

        setMessages(prev => [...prev, { 
          role: 'model', 
          text: response.text as string,
          sources: uniqueSources.length > 0 ? uniqueSources : undefined,
          agentLogs: activeAgents
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "⚠️ System Conflict: Sovereign nodes are re-architecting. Re-establish neural command link." }]);
    } finally {
      setIsLoading(false);
      setActiveAgents([]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = input.trim();
    if (val) {
       setInput('');
       handleSend(val);
    }
  };

  const neuralDirectives = [
    { label: "System Audit", icon: <Terminal className="w-3 h-3" />, directive: "Run a full technical audit of the current Protocol ecosystem. Identify 3 points of systemic friction." },
    { label: "Market Intel", icon: <Search className="w-3 h-3" />, directive: "Synthesize latest market data on AGI-native digital products. What is the current demand velocity for SaaS boilerplates?" },
    { label: "Revenue Map", icon: <Coins className="w-3 h-3" />, directive: "Architect a tiered subscription model for a productivity toolkit that targets trillion-token founders." }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 border border-zinc-800 group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6 group-hover:animate-bounce" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-black border border-white rounded-full flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-3 h-3 text-green-500 animate-pulse" />
          </div>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[500px] h-[700px] max-h-[85vh] bg-white border border-gray-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col z-50 rounded-sm overflow-hidden animate-in slide-in-from-bottom-8">
          {/* Header */}
          <div className="bg-black text-white p-5 border-b border-zinc-800 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-zinc-700 to-black p-2.5 rounded-sm border border-zinc-700 shadow-inner">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-[11px] uppercase tracking-[0.3em] flex items-center">
                  AGI CORE <span className="ml-3 text-[8px] bg-green-500/20 px-2 py-0.5 rounded-full text-green-400 font-mono tracking-widest border border-green-500/30">V11.0.4</span>
                </h3>
                <p className="text-[9px] text-zinc-400 font-mono flex items-center mt-1 uppercase tracking-widest">
                  <Activity className="w-2.5 h-2.5 mr-1.5 animate-pulse text-green-500" /> System Active
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-sm">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Persona Selection */}
          <div className="bg-zinc-950 px-5 py-3 border-b border-zinc-800 flex justify-between items-center text-[9px] font-mono text-zinc-500 overflow-x-auto scrollbar-hide whitespace-nowrap gap-6">
            <div className="flex space-x-6">
              {[
                { name: 'Architect', icon: <Layers className="w-3.5 h-3.5" /> },
                { name: 'Security', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
                { name: 'CEO', icon: <Briefcase className="w-3.5 h-3.5" /> },
                { name: 'Growth', icon: <TrendingUp className="w-3.5 h-3.5" /> }
              ].map(persona => (
                <button 
                  key={persona.name}
                  onClick={() => setActivePersona(persona.name)}
                  className={`flex items-center transition-all px-2 py-1 rounded-sm border ${activePersona === persona.name ? 'text-white border-zinc-700 bg-zinc-900' : 'text-zinc-600 border-transparent hover:text-zinc-400'}`}
                >
                  <span className="mr-2">{persona.icon}</span>
                  <span className="uppercase tracking-tighter">{persona.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-6 bg-zinc-50 space-y-8 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`max-w-[90%] p-5 text-sm rounded-sm ${
                    msg.role === 'user' 
                      ? 'bg-black text-white shadow-xl' 
                      : 'bg-white border border-zinc-200 text-zinc-800 shadow-md'
                  }`}
                >
                  {msg.role === 'model' && (
                    <div className="flex items-center space-x-2 mb-4 text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em] border-b border-zinc-100 pb-3">
                      <User className="w-3 h-3 text-zinc-900" /> 
                      <span>Executive Command</span>
                      {msg.sources && (
                        <span className="ml-auto flex items-center text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 font-bold">
                          <Globe className="w-2.5 h-2.5 mr-1" /> GROUNDED
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="whitespace-pre-wrap leading-relaxed prose prose-sm max-w-none font-medium text-[13px] md:text-sm selection:bg-zinc-200">
                    {msg.text}
                  </div>
                  
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-zinc-100">
                      <p className="text-[9px] font-black text-zinc-400 uppercase mb-3 flex items-center tracking-widest">
                        <LinkIcon className="w-3 h-3 mr-2" /> Verified Network Nodes
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {msg.sources.map((src, sIdx) => (
                          <a 
                            key={sIdx}
                            href={src.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-[10px] text-zinc-700 hover:text-black bg-zinc-50 p-3 rounded-sm border border-zinc-100 hover:border-zinc-400 transition-all group"
                          >
                            <ExternalLink className="w-3 h-3 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform text-zinc-400 group-hover:text-black" />
                            <span className="truncate font-bold tracking-tight uppercase">{src.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200 text-zinc-800 p-6 text-sm rounded-sm shadow-2xl flex flex-col space-y-5 w-[85%] border-l-4 border-l-black animate-in fade-in slide-in-from-left-4">
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                    <div className="flex items-center space-x-3 text-[10px] font-black text-black uppercase tracking-[0.2em] animate-pulse">
                      <Zap className="w-4 h-4 fill-black" />
                      <span>Synthesizing Strategy...</span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-sm">{activeAgents.length}/4</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Architecture', icon: <Layers className="w-3.5 h-3.5" /> },
                      { name: 'Security Audit', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
                      { name: 'Capital Logic', icon: <PieChart className="w-3.5 h-3.5" /> },
                      { name: 'Plan Finalization', icon: <Target className="w-3.5 h-3.5" /> }
                    ].map((agent, i) => (
                      <div key={agent.name} className="flex items-center justify-between">
                         <div className="flex items-center space-x-3 text-[10px] font-mono">
                            <div className={`w-2 h-2 rounded-full ${i < activeAgents.length ? 'bg-black' : i === activeAgents.length ? 'bg-zinc-800 animate-ping' : 'bg-zinc-100'}`}></div>
                            <div className={`flex items-center ${i <= activeAgents.length ? 'text-black font-bold' : 'text-zinc-300'}`}>
                               {agent.icon} <span className="ml-3 uppercase tracking-tighter">{agent.name}</span>
                            </div>
                         </div>
                         <span className={`text-[8px] font-mono px-2 py-0.5 rounded-sm font-bold ${i < activeAgents.length ? 'text-green-600 bg-green-50' : i === activeAgents.length ? 'text-blue-600 bg-blue-50' : 'text-zinc-300 bg-zinc-50'}`}>
                           {i < activeAgents.length ? 'DONE' : i === activeAgents.length ? 'ACTIVE' : 'QUEUED'}
                         </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Neural Directives */}
          <div className="bg-zinc-50 px-5 py-3 flex gap-3 overflow-x-auto scrollbar-hide border-t border-zinc-200">
             {neuralDirectives.map((d, i) => (
               <button 
                 key={i}
                 onClick={() => handleSend(d.directive)}
                 className="flex items-center bg-white border border-zinc-200 px-3 py-1.5 rounded-sm whitespace-nowrap shadow-sm hover:border-black transition-all group"
               >
                 <span className="text-zinc-400 group-hover:text-black mr-2 transition-colors">{d.icon}</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-black transition-colors">{d.label}</span>
               </button>
             ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleFormSubmit} className="p-5 bg-white border-t border-zinc-200 flex-shrink-0">
            <div className="relative group">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleFormSubmit(e as any);
                  }
                }}
                placeholder={`Directive for ${activePersona} Core...`}
                className="w-full pl-5 pr-14 py-4 bg-zinc-50 border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm transition-all font-bold placeholder-zinc-400 min-h-[64px] max-h-[150px] rounded-sm resize-none shadow-inner"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-3 bottom-3 p-3 bg-black text-white hover:bg-zinc-800 disabled:opacity-50 transition-all rounded-sm shadow-xl flex items-center justify-center active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-3">
                <div className="flex items-center space-x-1.5 text-[8px] uppercase tracking-widest text-black font-black bg-zinc-100 px-2 py-1 rounded-sm border border-zinc-200">
                  <Globe className="w-3 h-3" />
                  <span>GROUNDED</span>
                </div>
                <div className="flex items-center space-x-1.5 text-[8px] uppercase tracking-widest text-zinc-500 font-black bg-zinc-100 px-2 py-1 rounded-sm border border-zinc-100">
                  <ShieldCheck className="w-3 h-3" />
                  <span>SECURE</span>
                </div>
              </div>
              <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-300 font-black">SOVEREIGN-OS V11.0.4</span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
