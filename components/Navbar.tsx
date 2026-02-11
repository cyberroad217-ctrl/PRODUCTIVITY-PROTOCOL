
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, ShoppingCart, BarChart3, Search, FileText, Layers, Activity, Bell, User, Wallet, HeartPulse, Clock, Code, Globe, Terminal, LifeBuoy, Settings, Database, Radio, Grid, ChevronDown, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [latency, setLatency] = useState(22);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setLatency(Math.floor(Math.random() * 5) + 20);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Ecosystem', path: '/', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Protocol', path: '/protocol', icon: <Layers className="w-4 h-4" /> },
    { name: 'Workspace', path: '/workspace', icon: <Grid className="w-4 h-4" /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'Console', path: '/console', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Search', path: '/search', icon: <Search className="w-4 h-4" /> },
  ];

  const commandIcons = [
    { icon: <Bell className="w-3 h-3" />, label: 'Alerts' },
    { icon: <User className="w-3 h-3" />, label: 'Profile' },
    { icon: <Wallet className="w-3 h-3" />, label: 'Settle' },
    { icon: <HeartPulse className="w-3 h-3 text-red-500" />, label: 'Health' },
    { icon: <Clock className="w-3 h-3" />, label: 'Sync' },
    { icon: <Code className="w-3 h-3" />, label: 'API' },
    { icon: <Globe className="w-3 h-3" />, label: 'Region' },
    { icon: <Terminal className="w-3 h-3" />, label: 'CLI' },
    { icon: <LifeBuoy className="w-3 h-3" />, label: 'Support' },
    { icon: <Settings className="w-3 h-3" />, label: 'Config' },
    { icon: <Database className="w-3 h-3" />, label: 'Storage' },
    { icon: <Radio className="w-3 h-3 text-green-500" />, label: 'Link' },
    { icon: <Moon className="w-3 h-3" />, label: 'Dark' },
    { icon: <Activity className="w-3 h-3" />, label: 'Stats' },
    { icon: <Search className="w-3 h-3" />, label: 'Find' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top Command Bar (15 Icons) */}
      <div className="bg-black text-white border-b border-zinc-800 px-4 h-10 flex items-center justify-between overflow-hidden hidden md:flex">
        <div className="flex items-center space-x-6">
           <div className="flex items-center space-x-2 border-r border-zinc-800 pr-4">
              <Activity className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest">{latency}ms Latency</span>
           </div>
           <div className="flex items-center space-x-4">
              {commandIcons.map((cmd, i) => (
                <button key={i} title={cmd.label} className="text-zinc-500 hover:text-white transition-colors">
                  {cmd.icon}
                </button>
              ))}
           </div>
        </div>
        <div className="flex items-center space-x-6 text-[9px] font-mono font-bold tracking-tighter">
           <span className="text-zinc-500">NY: <span className="text-white">OPEN</span></span>
           <span className="text-zinc-500">LDN: <span className="text-white">OPEN</span></span>
           <span className="text-zinc-500">TYO: <span className="text-zinc-400">CLOSED</span></span>
           <span className="bg-zinc-900 px-2 py-0.5 rounded text-zinc-300">{time}</span>
        </div>
      </div>

      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            
            <div className="flex justify-between items-center h-16 flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-black flex items-center justify-center rounded-sm shadow-xl">
                  <span className="text-white font-black text-xl italic tracking-tighter">P</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-black tracking-tighter hidden sm:block leading-none">PRODUCTIVITY PROTOCOL</span>
                  <span className="text-base font-black tracking-tighter sm:hidden leading-none uppercase">PROTOCOL</span>
                  <div className="flex items-center space-x-1.5 mt-1">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-[8px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Sovereign V11.0.4 Online</span>
                  </div>
                </div>
              </Link>

              <Link
                to="/marketplace"
                className="md:hidden bg-black text-white px-4 py-2 text-[9px] font-black hover:bg-zinc-800 transition-all rounded-sm uppercase tracking-widest shadow-lg"
              >
                GET EBOOK
              </Link>
            </div>

            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-t border-gray-100 md:border-none py-3 md:py-0 w-full md:w-auto">
              <div className="flex items-center space-x-7 w-max px-2 md:px-0">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center space-x-1.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all whitespace-nowrap group ${
                        isActive ? 'text-black' : 'text-zinc-400 hover:text-black'
                      }`}
                    >
                      <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>{link.icon}</span>
                      <span className="relative">
                        {link.name}
                        {isActive && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full" />}
                      </span>
                    </Link>
                  );
                })}
                
                <Link
                  to="/marketplace"
                  className="hidden md:flex items-center space-x-2 bg-black text-white px-6 py-2.5 rounded-sm text-[10px] font-black hover:bg-zinc-800 transition-all ml-4 uppercase tracking-[0.2em] shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>ELITE ACCESS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
