
import React, { useState } from 'react';
import { Target, Zap, Cpu, Activity, Share2, Save, Maximize2, Trash2, Download, MousePointer2, Plus, Sparkles } from 'lucide-react';

const Workspace: React.FC = () => {
  const [nodes, setNodes] = useState<{ id: number; x: number; y: number; label: string }[]>([
    { id: 1, x: 200, y: 150, label: 'Core System' },
    { id: 2, x: 500, y: 300, label: 'Neural Hub' }
  ]);

  const addNode = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setNodes([...nodes, { id: Date.now(), x, y, label: 'New Node' }]);
  };

  return (
    <div className="pt-32 md:pt-28 min-h-screen bg-zinc-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 w-full flex-grow flex flex-col">
        <div className="mb-8 flex justify-between items-end border-b border-zinc-200 pb-6">
           <div>
              <h1 className="text-4xl font-bold uppercase tracking-tighter flex items-center">
                <Target className="w-8 h-8 mr-3" /> Neural Workspace
              </h1>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mt-2">Sovereign Architectural Sandbox V1.2</p>
           </div>
           <div className="flex space-x-3">
              <button className="flex items-center space-x-2 bg-white border border-zinc-200 px-4 py-2 text-[10px] font-black uppercase hover:border-black transition-all rounded-sm">
                <Share2 className="w-3 h-3" /> <span>Sync Link</span>
              </button>
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-2 text-[10px] font-black uppercase hover:bg-zinc-800 transition-all rounded-sm shadow-xl">
                <Save className="w-3 h-3" /> <span>Freeze State</span>
              </button>
           </div>
        </div>

        <div className="flex-grow grid grid-cols-12 gap-8 mb-12">
           {/* Tools Sidebar */}
           <div className="col-span-12 lg:col-span-2 space-y-4">
              <div className="bg-white border border-zinc-200 p-6 rounded-sm shadow-sm">
                 <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">Toolbox</p>
                 <div className="space-y-4">
                    {[
                      { icon: <MousePointer2 className="w-4 h-4" />, label: 'Select' },
                      { icon: <Plus className="w-4 h-4" />, label: 'Insert' },
                      { icon: <Activity className="w-4 h-4" />, label: 'Trigger' },
                      { icon: <Trash2 className="w-4 h-4" />, label: 'Purge' },
                      { icon: <Download className="w-4 h-4" />, label: 'Export' }
                    ].map((tool, i) => (
                      <button key={i} className="w-full flex items-center space-x-3 p-3 border border-zinc-100 hover:border-black transition-all group">
                         <span className="text-zinc-400 group-hover:text-black">{tool.icon}</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest">{tool.label}</span>
                      </button>
                    ))}
                 </div>
              </div>

              <div className="bg-zinc-900 text-white p-6 rounded-sm shadow-xl relative overflow-hidden">
                 <Sparkles className="absolute -right-2 -bottom-2 w-12 h-12 opacity-10" />
                 <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 mb-2">AGI Insights</p>
                 <p className="text-[11px] font-medium leading-relaxed italic opacity-70">"Workspace integrity is at 98%. Neural nodes are optimally distributed."</p>
              </div>
           </div>

           {/* Canvas Area */}
           <div className="col-span-12 lg:col-span-10 bg-white border border-zinc-200 relative overflow-hidden rounded-sm shadow-inner group cursor-crosshair h-[600px] lg:h-auto" onClick={addNode}>
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
              
              {nodes.map(node => (
                <div 
                  key={node.id} 
                  style={{ left: node.x, top: node.y }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center min-w-[120px] transition-all hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                   <Cpu className="w-5 h-5 mb-2" />
                   <span className="text-[9px] font-black uppercase tracking-widest">{node.label}</span>
                </div>
              ))}

              <div className="absolute bottom-6 right-6 flex space-x-4">
                 <div className="bg-black/5 backdrop-blur px-4 py-2 border border-zinc-200 rounded-sm">
                    <p className="text-[8px] font-mono text-zinc-500 uppercase">Status: <span className="text-green-600 font-bold">READY</span></p>
                 </div>
                 <button className="bg-white border border-zinc-200 p-2 hover:border-black transition-all shadow-sm">
                   <Maximize2 className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
