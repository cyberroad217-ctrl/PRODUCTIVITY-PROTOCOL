
import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Database, Network, Search, Play, Layers, Activity } from 'lucide-react';

const Console: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('stack');

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `[${new Date().toLocaleTimeString()}] Pipeline: ${Math.random() > 0.5 ? 'Session cache refresh' : 'Vector embedding fan-out'} - Status: OK`;
      setLogs(prev => [newLog, ...prev].slice(0, 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const runSyntheticQuery = () => {
    if (!query) return;
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] Querying 1.2T corpus: "${query}"...`, ...prev]);
    setTimeout(() => {
      setLogs(prev => [`[${new Date().toLocaleTimeString()}] Results found in 28B nodes index. Routing to smart agent.`, ...prev]);
    }, 800);
    setQuery('');
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2">LLM Operations Console</h1>
          <p className="text-gray-500">System idle — monitoring real-time activity across trillion-token model families.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Stats Bar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="border border-gray-100 p-6 bg-gray-50">
              <div className="text-[10px] font-mono text-gray-400 mb-1 uppercase">Language Corpus</div>
              <div className="text-2xl font-bold">1.2T Tokens</div>
            </div>
            <div className="border border-gray-100 p-6 bg-gray-50">
              <div className="text-[10px] font-mono text-gray-400 mb-1 uppercase">Vector Index</div>
              <div className="text-2xl font-bold">28B Nodes</div>
            </div>
            <div className="border border-gray-100 p-6 bg-gray-50">
              <div className="text-[10px] font-mono text-gray-400 mb-1 uppercase">Storage Tiers</div>
              <div className="text-2xl font-bold">3 Tiers</div>
              <div className="flex gap-2 mt-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full" title="Hot layer active"></span>
                 <span className="w-2 h-2 bg-yellow-500 rounded-full" title="Warm layer active"></span>
                 <span className="w-2 h-2 bg-blue-500 rounded-full" title="Cold layer standby"></span>
              </div>
            </div>
          </div>

          {/* Main Console Area */}
          <div className="lg:col-span-3">
             <div className="border border-black">
                <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
                   <div className="flex space-x-6 text-[10px] font-mono uppercase tracking-widest">
                      <button 
                        onClick={() => setActiveTab('stack')}
                        className={`flex items-center space-x-1 ${activeTab === 'stack' ? 'text-white' : 'text-gray-500'}`}
                      >
                        <Layers className="w-3 h-3" /> <span>Stack</span>
                      </button>
                      <button 
                        onClick={() => setActiveTab('files')}
                        className={`flex items-center space-x-1 ${activeTab === 'files' ? 'text-white' : 'text-gray-500'}`}
                      >
                        <Terminal className="w-3 h-3" /> <span>Files</span>
                      </button>
                      <button 
                        onClick={() => setActiveTab('probe')}
                        className={`flex items-center space-x-1 ${activeTab === 'probe' ? 'text-white' : 'text-gray-500'}`}
                      >
                        <Activity className="w-3 h-3" /> <span>Probe</span>
                      </button>
                   </div>
                   <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                      <span className="text-[10px] font-mono uppercase">Live Link</span>
                   </div>
                </div>

                <div className="p-8 bg-white min-h-[400px]">
                   {activeTab === 'stack' && (
                     <div className="space-y-8 animate-in fade-in duration-500">
                        <div>
                          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Deep LLM Lab</h3>
                          <p className="text-sm text-gray-500 mb-8">Inspect stacked model layers and real-time database probes.</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="p-4 border border-gray-100 bg-gray-50">
                                <h4 className="font-bold text-xs uppercase mb-2">Foundation Models</h4>
                                <p className="text-xs text-gray-500">Massive base models trained on trillions.</p>
                                <div className="mt-4 flex items-center justify-between">
                                  <span className="text-[10px] font-mono text-gray-400">ACTIVE LAYERS: 3</span>
                                  <Play className="w-3 h-3 cursor-pointer" />
                                </div>
                             </div>
                             <div className="p-4 border border-gray-100 bg-gray-50">
                                <h4 className="font-bold text-xs uppercase mb-2">Retrieval & DB</h4>
                                <p className="text-xs text-gray-500">Fast vector lookup & DNA storage.</p>
                                <div className="mt-4 flex items-center justify-between">
                                  <span className="text-[10px] font-mono text-gray-400">INDEX: SYNCED</span>
                                  <Play className="w-3 h-3 cursor-pointer" />
                                </div>
                             </div>
                             <div className="p-4 border border-gray-100 bg-gray-50">
                                <h4 className="font-bold text-xs uppercase mb-2">Agents & Tools</h4>
                                <p className="text-xs text-gray-500">Smart routing to specialized sub-nodes.</p>
                                <div className="mt-4 flex items-center justify-between">
                                  <span className="text-[10px] font-mono text-gray-400">MODE: SMART</span>
                                  <Play className="w-3 h-3 cursor-pointer" />
                                </div>
                             </div>
                          </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Synthetic Query Runner</h4>
                          <div className="flex">
                             <input 
                               type="text" 
                               placeholder="Enter probe query..."
                               className="flex-grow border border-black p-3 outline-none"
                               value={query}
                               onChange={(e) => setQuery(e.target.value)}
                               onKeyDown={(e) => e.key === 'Enter' && runSyntheticQuery()}
                             />
                             <button 
                               onClick={runSyntheticQuery}
                               className="bg-black text-white px-6 font-bold hover:bg-gray-800"
                             >
                               RUN
                             </button>
                          </div>
                        </div>
                     </div>
                   )}

                   {activeTab === 'files' && (
                     <div className="font-mono text-sm space-y-1 animate-in slide-in-from-bottom-2 duration-300">
                        <div className="text-gray-400">/root/quantum_db/</div>
                        <div className="pl-4">├── index_28b.bin [2.4TB]</div>
                        <div className="pl-4">├── metadata.json</div>
                        <div className="pl-4">├── model_weights/</div>
                        <div className="pl-8">├── foundation_v4.pt</div>
                        <div className="pl-8">└── reasoning_v2.pt</div>
                        <div className="pl-4">└── logs/</div>
                        <div className="pl-8 text-green-600">└── current_session.log</div>
                     </div>
                   )}

                   {activeTab === 'probe' && (
                     <div className="font-mono text-xs space-y-2 animate-in fade-in duration-300">
                        {logs.map((log, i) => (
                          <div key={i} className={`${i === 0 ? 'text-black font-bold' : 'text-gray-400'}`}>{log}</div>
                        ))}
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
