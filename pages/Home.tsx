
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Zap, Database, Globe, ArrowRight, ShieldCheck, Cpu, Briefcase, Coins, TrendingUp, Check, Star, ShieldAlert, Quote, BookOpen, Layers, Activity, Sparkles, Terminal, Rocket, Target, Award, Timer, Download, Shield, Calculator, Plus, Minus, HelpCircle, ChevronDown, UserCheck, HardDrive } from 'lucide-react';
/* Import CURRENT_YEAR from constants */
import { FEATURED_PRODUCT, INITIAL_PRODUCTS, STRIPE_PAYMENT_LINK, CURRENT_YEAR } from '../constants';
import ProductCard from '../components/ProductCard';
import { GoogleGenAI } from "@google/genai";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [diagnosticInput, setDiagnosticInput] = useState('');
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<string | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [timeLeft, setTimeLeft] = useState('00:59:59');
  
  const [hourlyRate, setHourlyRate] = useState(50);
  const [hoursSaved, setHoursSaved] = useState(15);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    const timer = setInterval(() => {
      const now = new Date();
      const hours = 23 - now.getHours();
      const mins = 59 - now.getMinutes();
      const secs = 59 - now.getSeconds();
      setTimeLeft(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
    }, 1000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/marketplace');
    }
  };

  const runDiagnostic = async () => {
    if (!diagnosticInput.trim()) return;
    setIsDiagnosing(true);
    setDiagnosticResult(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as the Productivity Protocol Diagnostic Agent. Analyze this user's current workflow: "${diagnosticInput}". 1. Rate their "Protocol Alignment Score" out of 100. 2. Give 3 short tactical improvements. 3. Pitch the E-book. Professional & brutal.`,
      });
      setDiagnosticResult(response.text || 'Diagnostic Failed.');
    } catch (error) {
      setDiagnosticResult("Critical error. Recalibrate neural core.");
    } finally {
      setIsDiagnosing(false);
    }
  };

  const calculateROI = () => {
    const monthlyValue = hourlyRate * hoursSaved * 4;
    const yearlyValue = monthlyValue * 12;
    return { monthlyValue, yearlyValue };
  };

  const { monthlyValue, yearlyValue } = calculateROI();

  const faqs = [
    { q: "Is this just another productivity course?", a: "No. The Protocol focuses on systems architecture, treating output as a software engineering problem." },
    { q: "Do I need technical skills?", a: "Designed for both architects and founders. Frameworks are modular and accessible." },
    { q: "What is 'Sovereign Intelligence'?", a: "Maintaining complete ownership of your data and neural output while utilizing planetary-scale AI." }
  ];

  return (
    <div className="pt-32 md:pt-28 relative overflow-x-hidden">
      {/* Sticky Sales Banner */}
      <div className={`fixed top-10 left-0 right-0 bg-black text-white py-3 px-4 z-[90] transform transition-transform duration-500 border-b border-zinc-800 ${showSticky ? 'translate-y-16 md:translate-y-16' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-green-500">
               <Timer className="w-4 h-4 animate-pulse" />
               <span className="font-mono text-[11px] font-bold">{timeLeft}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">Flash Sale: Productivity Protocol v11.0.4 - $29.99</span>
          </div>
          <a href={STRIPE_PAYMENT_LINK} className="bg-white text-black px-4 py-1.5 text-[10px] font-bold uppercase tracking-tighter whitespace-nowrap hover:bg-zinc-200 transition-all rounded-sm">
            SECURE ACCESS
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-3 py-1.5 text-[10px] font-bold mb-8 uppercase tracking-[0.3em] animate-pulse">
              <Zap className="w-3.5 h-3.5" />
              <span>Sovereign Intelligence Core: V11.0 ONLINE</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.8]">
              ACCELERATE YOUR <br />
              <span className="text-gray-300">DOMINANCE</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Deploying planet-scale productivity frameworks and AI-native assets. Engineered for the next trillion-token era.
            </p>

            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-16 group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search the AGI Asset Vault..."
                className="block w-full pl-14 pr-32 py-6 border-2 border-zinc-100 text-lg focus:border-black focus:ring-0 outline-none transition-all rounded-sm font-medium shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-3 bottom-3 bg-black text-white px-8 font-bold hover:bg-zinc-800 transition-all rounded-sm uppercase tracking-widest text-xs">
                SEARCH
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Flagship Product Section */}
      <section id="flagship" className="py-32 bg-zinc-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img src={FEATURED_PRODUCT.image} className="w-full shadow-2xl rounded-sm grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 shadow-2xl">
                 <p className="text-[10px] font-mono mb-1 text-gray-500">System Velocity</p>
                 <p className="font-bold text-2xl">12.5K USERS</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-3 mb-6">
                <span className="bg-green-50 text-green-600 px-3 py-1 text-[9px] font-bold uppercase tracking-widest border border-green-100 rounded-full">#1 BEST SELLER</span>
                <span className="bg-red-50 text-red-600 px-3 py-1 text-[9px] font-bold uppercase tracking-widest border border-red-100 rounded-full flex items-center"><Zap className="w-3 h-3 mr-1" /> 12 COPIES LEFT</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter leading-none">The Protocol <br /><span className="text-zinc-400">Master Your DNA</span></h2>
              <p className="text-lg text-zinc-600 mb-10 font-medium leading-relaxed">The only systemic framework designed to replace manual decision-making with high-frequency autonomous logic.</p>
              <div className="grid grid-cols-2 gap-8 mb-12 border-l-2 border-black pl-8">
                 <div>
                    <p className="text-3xl font-black tabular-nums">45x</p>
                    <p className="text-[9px] font-bold uppercase text-zinc-400 tracking-widest">ROI POTENTIAL</p>
                 </div>
                 <div>
                    <p className="text-3xl font-black tabular-nums">0.02ms</p>
                    <p className="text-[9px] font-bold uppercase text-zinc-400 tracking-widest">LATENCY DROP</p>
                 </div>
              </div>
              <a href={STRIPE_PAYMENT_LINK} className="inline-flex items-center justify-center space-x-4 bg-black text-white px-16 py-8 rounded-sm text-sm font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all shadow-2xl group">
                 <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 <span>GET THE PROTOCOL $29.99</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Heatmap & Leaderboard Feature */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Systemic Contribution</h2>
              <p className="text-zinc-500 font-mono text-[10px] mt-2 uppercase tracking-widest">Global Node Network Output Heatmap</p>
           </div>
           
           <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 bg-zinc-50 p-8 border border-zinc-100 rounded-sm">
                 <div className="flex justify-between items-center mb-8">
                    <p className="text-xs font-bold uppercase tracking-widest flex items-center">
                       <Activity className="w-4 h-4 mr-2 text-blue-500" /> Output Matrix
                    </p>
                    <span className="text-[9px] text-zinc-400 font-mono">NODE_DELTA_9 ACTIVE</span>
                 </div>
                 {/* Simulated Heatmap */}
                 <div className="flex flex-wrap gap-1.5">
                    {Array.from({ length: 364 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3.5 h-3.5 rounded-sm transition-all hover:scale-125 cursor-pointer ${
                          Math.random() > 0.8 ? 'bg-blue-600' : 
                          Math.random() > 0.5 ? 'bg-blue-300' : 'bg-zinc-200'
                        }`}
                        title={`Day ${i}: ${Math.floor(Math.random() * 100)} systemic actions`}
                      />
                    ))}
                 </div>
                 <div className="mt-8 flex justify-between items-center text-[8px] font-bold uppercase tracking-widest text-zinc-400">
                    <span>JANUARY {CURRENT_YEAR}</span>
                    <span>DECEMBER {CURRENT_YEAR}</span>
                 </div>
              </div>

              <div className="col-span-12 lg:col-span-4 bg-zinc-950 text-white p-8 rounded-sm shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Award className="w-24 h-24" />
                 </div>
                 <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">Top Architects</h3>
                 <div className="space-y-6">
                    {[
                      { name: 'X_ARCHITECT', score: '992', role: 'CORE' },
                      { name: 'NEURAL_LINK', score: '842', role: 'ELITE' },
                      { name: 'VOID_RUNTIME', score: '721', role: 'SOVEREIGN' },
                      { name: 'DELTA_CORE', score: '655', role: 'VET' }
                    ].map((user, i) => (
                      <div key={i} className="flex justify-between items-center group">
                         <div className="flex items-center space-x-3">
                            <span className="text-[10px] font-mono text-zinc-700">0{i+1}</span>
                            <div>
                               <p className="text-xs font-bold tracking-widest group-hover:text-blue-400 transition-colors">{user.name}</p>
                               <p className="text-[8px] text-zinc-500 font-mono uppercase">{user.role}</p>
                            </div>
                         </div>
                         <span className="text-xs font-black tabular-nums">{user.score} XP</span>
                      </div>
                    ))}
                 </div>
                 <button className="w-full mt-10 border border-zinc-800 py-3 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all rounded-sm">VIEW ALL NODES</button>
              </div>
           </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,#1d4ed8_0%,transparent_70%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="inline-flex items-center space-x-2 text-blue-400 mb-6 font-bold text-[10px] uppercase tracking-[0.3em]">
                    <Calculator className="w-4 h-4" />
                    <span>Executive Analytics</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">Unlock <br /> Hidden Yield</h2>
                 <p className="text-zinc-400 text-lg mb-12 max-w-md font-medium">Input your core operational metrics to reveal latent capital trapped in manual legacy workflows.</p>
                 <div className="space-y-10">
                    <div className="space-y-4">
                       <div className="flex justify-between text-[10px] font-black uppercase text-zinc-500 tracking-widest">
                          <span>Hourly Rate</span>
                          <span className="text-white">${hourlyRate}</span>
                       </div>
                       <input type="range" min="20" max="1000" step="10" value={hourlyRate} onChange={e => setHourlyRate(parseInt(e.target.value))} className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                    </div>
                    <div className="space-y-4">
                       <div className="flex justify-between text-[10px] font-black uppercase text-zinc-500 tracking-widest">
                          <span>Weekly Hours Leaked</span>
                          <span className="text-white">{hoursSaved}H</span>
                       </div>
                       <input type="range" min="1" max="80" step="1" value={hoursSaved} onChange={e => setHoursSaved(parseInt(e.target.value))} className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                    </div>
                 </div>
              </div>
              <div className="bg-zinc-900 p-12 md:p-20 border border-zinc-800 rounded-sm shadow-2xl relative group">
                 <div className="absolute -top-4 -left-4 bg-blue-600 px-4 py-1 text-[10px] font-black uppercase tracking-widest">PROJECTION ACTIVE</div>
                 <div className="space-y-12">
                    <div>
                       <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Monthly Potential Recovery</p>
                       <p className="text-7xl font-black tracking-tighter text-blue-400 tabular-nums">${monthlyValue.toLocaleString()}</p>
                    </div>
                    <div className="pt-12 border-t border-zinc-800">
                       <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Annual Systemic Alpha</p>
                       <p className="text-5xl font-black tracking-tighter text-white tabular-nums">${yearlyValue.toLocaleString()}</p>
                    </div>
                    <a href={STRIPE_PAYMENT_LINK} className="block w-full bg-white text-black py-6 text-center font-black text-xs uppercase tracking-[0.3em] rounded-sm hover:bg-zinc-200 transition-all shadow-xl group">
                       RECLAIM THIS CAPITAL FOR $29.99
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 bg-zinc-50 border-t border-gray-100 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 blur-3xl rounded-full"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-none">Ready?</h2>
          <p className="text-xl text-gray-500 mb-12 font-medium">Join 12,500+ elite architects using the Productivity Protocol.</p>
          <a href={STRIPE_PAYMENT_LINK} className="inline-block bg-black text-white px-20 py-8 text-xl font-black uppercase tracking-[0.2em] rounded-sm shadow-2xl hover:scale-105 active:scale-95 transition-transform">
             SECURE ACCESS NOW
          </a>
          <p className="mt-8 text-[9px] font-bold text-zinc-400 uppercase tracking-[0.4em]">INSTANT DNA DELIVERY • 12 RECURSIVE MODULES</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
