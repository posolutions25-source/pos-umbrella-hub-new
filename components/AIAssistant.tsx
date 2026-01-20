
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Loader2, Bot, User } from 'lucide-react';
import { getSmartRecommendation } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState<{ analysis: string; recommendation: string; helpfulTip: string } | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    const result = await getSmartRecommendation(query);
    setChat(result);
    setLoading(false);
    setQuery('');
  };

  useEffect(() => {
    if (chat && chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat]);

  return (
    <div className="max-w-3xl mx-auto mb-20 bg-[#121212]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-tr from-indigo-600 to-purple-400 rounded-lg shadow-lg">
          <Sparkles className="text-white" size={20} />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight">Smart Solutions Finder</h2>
          <p className="text-gray-400 text-sm">Tell us what's on your mind, and AI will guide you to the right tool.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., I'm feeling overwhelmed with my home clutter..."
          className="w-full bg-[#1e1e1e] border border-white/5 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white placeholder-gray-500"
        />
        <button
          disabled={loading}
          type="submit"
          className="absolute right-2 top-2 bottom-2 px-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-colors shadow-lg shadow-purple-900/20"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
        </button>
      </form>

      {chat && (
        <div ref={chatRef} className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
              <Bot size={16} />
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl rounded-tl-none">
                <p className="text-gray-300 text-sm uppercase font-bold tracking-widest mb-2">Analysis</p>
                <p className="text-white leading-relaxed">{chat.analysis}</p>
              </div>
              <div className="p-5 bg-purple-600/10 border border-purple-500/30 rounded-2xl">
                <p className="text-purple-400 text-sm uppercase font-bold tracking-widest mb-2">Recommendation</p>
                <p className="text-xl font-bold text-white mb-2">{chat.recommendation}</p>
                <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/20">
                  <p className="text-purple-200 italic text-sm">"{chat.helpfulTip}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
