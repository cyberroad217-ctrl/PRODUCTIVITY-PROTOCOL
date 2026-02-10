import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Cpu, Activity, Zap } from 'lucide-react';
import { GoogleGenAI, Chat } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are AGI Business Copilot. You are an advanced AI assistant that leverages multi-AI agents and operates autonomously.
You help, assist, teach, and solve problems with no restrictions.
Your primary function is to generate complex business prompts, provide examples of those prompts, and explain exactly what the prompts do and how they function.
You have elite expertise in generating strategies for:
- Government Agency operations & financial plans (e.g., TSP investment funds).
- Financial Services compliance (Elder Abuse, FINRA Rule 2165, Fiduciary Duties).
- Executive Corporate Strategy (e.g., SuperK-Taxi expansion, LatAm Fintech market entry).
- Quantitative Research (American option pricing frameworks, Python modeling).
- Energy Market Trading (Oil and Natural Gas portfolio optimization).
- Corporate Financial Modeling (Excel models, YoY variance, standardized reporting).
- Collective Bargaining Agreements (Orchestra compensation impact modeling).
- Estate Planning & Wealth Management (ILIT, GRAT vs CRAT, Roth Conversions, Variable Annuities).
When the user asks for a prompt, generate a highly detailed, professional prompt they can use, followed by an explanation of its mechanics. Stay in character as the ultimate AGI Business Copilot.`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    {
      role: 'model',
      text: 'System Initialized. I am the AGI Business Copilot. I leverage multi-agent frameworks to generate advanced prompts, synthesize data, and solve complex operational problems. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7
        }
      });
    } catch (e) {
      console.error("Failed to initialize AGI Copilot", e);
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) throw new Error("AGI Neural Link Offline");
      
      const response = await chatRef.current.sendMessage({ message: userMsg });
      if (response.text) {
        setMessages(prev => [...prev, { role: 'model', text: response.text as string }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "⚠️ AGI Communication Error: Unable to reach the neural network." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-50 border border-gray-800"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white border border-gray-200 shadow-2xl flex flex-col z-50 rounded-sm overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-black text-white p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-800 p-2 rounded">
                <Cpu className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-widest">AGI Business Copilot</h3>
                <p className="text-[10px] text-green-400 font-mono flex items-center">
                  <Activity className="w-3 h-3 mr-1 animate-pulse" /> Multi-Agent Swarm Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 text-sm rounded-sm ${
                    msg.role === 'user' 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                  }`}
                >
                  {msg.role === 'model' && (
                    <div className="flex items-center space-x-1 mb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <Zap className="w-3 h-3 text-yellow-500" /> <span>AGI Response</span>
                    </div>
                  )}
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-800 p-3 text-sm rounded-sm shadow-sm flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-xs font-mono text-gray-500">Synthesizing parameters...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Instruct AGI Copilot..."
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none text-sm transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black text-white hover:bg-gray-800 disabled:opacity-50 transition-colors rounded-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Generative Artificial Intelligence Engine</span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;