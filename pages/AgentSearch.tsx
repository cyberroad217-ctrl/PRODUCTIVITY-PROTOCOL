import React, { useState, useEffect } from 'react';
import { Search, Globe, ArrowUpRight, Cpu, Activity, Zap, ExternalLink } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface WebSource {
  uri: string;
  title: string;
}

const AgentSearch: React.FC = () => {
  // Initialize state from sessionStorage if available to persist data across navigation
  const [query, setQuery] = useState(() => sessionStorage.getItem('agentSearch_query') || '');
  const [lastQuery, setLastQuery] = useState(() => sessionStorage.getItem('agentSearch_lastQuery') || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(() => sessionStorage.getItem('agentSearch_result') || '');
  const [sources, setSources] = useState<WebSource[]>(() => {
    try {
      const saved = sessionStorage.getItem('agentSearch_sources');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync state changes to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('agentSearch_query', query);
  }, [query]);

  useEffect(() => {
    sessionStorage.setItem('agentSearch_lastQuery', lastQuery);
  }, [lastQuery]);

  useEffect(() => {
    sessionStorage.setItem('agentSearch_result', result);
  }, [result]);

  useEffect(() => {
    sessionStorage.setItem('agentSearch_sources', JSON.stringify(sources));
  }, [sources]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setResult('');
    setSources([]);
    setLastQuery(query);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      setResult(response.text || 'No data synthesized.');

      // Extract Grounding Chunks (URLs from Google Search)
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const extractedSources: WebSource[] = [];

      chunks.forEach((chunk: any) => {
        if (chunk.web && chunk.web.uri && chunk.web.title) {
          extractedSources.push({ uri: chunk.web.uri, title: chunk.web.title });
        }
      });

      // Deduplicate sources by URI
      const uniqueSources = Array.from(new Map(extractedSources.map(s => [s.uri, s])).values());
      setSources(uniqueSources);

    } catch (error) {
      console.error('Agent Web Search Error:', error);
      setResult('⚠️ Critical Error: Unable to establish connection with AGI Search Nodes.');
    } finally {
      setLoading(false);
    }
  };

  // Simple Markdown to HTML parser for the AI's response text
  const formatMarkdown = (text: string) => {
    let html = text
      .replace(/</g, '&lt;') // Sanitize HTML tags
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italics
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">$1</a>') // Links
      .replace(/\n/g, '<br />'); // Line breaks
    return html;
  };

  return (
    <div className="pt-28 md:pt-24 min-h-screen bg-white selection:bg-blue-200 selection:text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">
            <Globe className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
             Agent Web Search
          </h1>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest flex items-center justify-center">
             <Activity className="w-4 h-4 mr-2 text-blue-500 animate-pulse" />
             Real-Time Google Grounded AGI Intelligence
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-8 shadow-2xl group transition-all duration-300">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className={`h-6 w-6 transition-colors ${query.length > 0 ? 'text-gray-400' : 'text-gray-400 group-focus-within:text-blue-600'}`} />
          </div>
          
          <input
            type="text"
            placeholder="Instruct the AGI to search the live web..."
            className={`block w-full pl-16 pr-32 py-6 border-2 text-lg focus:ring-0 outline-none transition-all duration-300 rounded-sm font-medium ${
              query.length > 0 
                ? 'bg-black text-white border-black shadow-xl' 
                : 'bg-white text-black border-gray-200 focus:border-blue-600'
            }`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
          />
          
          <button 
            type="submit" 
            disabled={loading || !query.trim()}
            className={`absolute right-3 top-3 bottom-3 px-8 font-bold disabled:opacity-50 transition-all duration-300 rounded-sm flex items-center space-x-2 ${
              query.length > 0
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-blue-600'
            }`}
          >
            <span>{loading ? 'SYNCING...' : 'SEARCH'}</span>
            {!loading && <Zap className="w-4 h-4" />}
          </button>
        </form>

        {/* Fallback external Google link */}
        {lastQuery && !loading && (
          <div className="flex justify-center mb-12">
            <a 
              href={`https://www.google.com/search?q=${encodeURIComponent(lastQuery)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-1"
            >
              <Globe className="w-4 h-4 mr-2" />
              View "{lastQuery}" on Google Search Engine
            </a>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-6 animate-in fade-in duration-500">
            <div className="w-16 h-16 border-4 border-gray-100 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="font-mono text-sm text-gray-500 uppercase tracking-widest animate-pulse flex items-center">
               <Cpu className="w-4 h-4 mr-2" />
               Scouring the internet via Google Search nodes...
            </p>
          </div>
        )}

        {/* Results Area */}
        {!loading && result && (
          <div className="animate-in slide-in-from-bottom-5 duration-500">
            
            {/* Generated Content */}
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-sm shadow-sm mb-8">
              <div className="flex items-center space-x-2 mb-6 border-b border-gray-100 pb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">AGI Synthesis Complete</h3>
              </div>
              <div 
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(result) }}
              />
            </div>

            {/* Grounding Sources / Links */}
            {sources.length > 0 && (
              <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold tracking-tight uppercase">Live Results Links</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sources.map((src, index) => (
                    <li key={index} className="flex">
                      <a 
                        href={src.uri} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex flex-col p-4 bg-white border border-blue-100 hover:border-blue-400 hover:shadow-md transition-all rounded-sm group w-full"
                      >
                        <div className="flex items-start mb-2">
                          <ArrowUpRight className="w-5 h-5 mr-3 text-blue-300 group-hover:text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                            {src.title}
                          </p>
                        </div>
                        <div className="flex items-center text-[11px] text-blue-500 font-mono pl-8 break-all group-hover:underline">
                           <ExternalLink className="w-3 h-3 mr-1 flex-shrink-0" />
                           <span className="line-clamp-1">{src.uri}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default AgentSearch;