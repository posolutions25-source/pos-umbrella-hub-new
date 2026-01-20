
import React from 'react';
import { ArrowLeft, ExternalLink, Sparkles, Plus } from 'lucide-react';

interface BusinessToolsPageProps {
  onBack: () => void;
}

const BusinessToolsPage: React.FC<BusinessToolsPageProps> = ({ onBack }) => {
  const LUNACAL_URL = "https://shorturl.at/7qZSG";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-lime-400 selection:text-black">
      {/* Centered Content Container */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center animate-in fade-in zoom-in-95 duration-700">
        
        {/* Navigation / Back Button */}
        <button 
          onClick={onBack}
          className="group mb-12 inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to POS Hub
        </button>

        {/* New Tool Highlight */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-full bg-lime-400/10 border border-lime-400/20 text-[10px] font-black tracking-widest uppercase text-lime-400">
          <Sparkles size={12} />
          New Division Launch
        </div>

        {/* Logo Section - Custom Grid Logo */}
        <div className="relative mb-12 flex justify-center">
          <div className="absolute -inset-10 bg-pink-500/5 blur-3xl rounded-full"></div>
          <a 
            href={LUNACAL_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative p-8 bg-[#121212] rounded-3xl border border-white/5 shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 group"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-[6px] w-[86px] h-[86px]">
              <div className="bg-[#ff4fa8] rounded-[6px]"></div>
              <div className="bg-[#ff4fa8] rounded-[6px] flex items-center justify-center text-white font-bold text-2xl leading-none">
                ✔
              </div>
              <div className="bg-[#ff4fa8] rounded-[6px]"></div>
              <div className="bg-[#ff4fa8] rounded-[6px]"></div>
            </div>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors flex items-center justify-center">
               <ExternalLink className="opacity-0 group-hover:opacity-100 text-white transition-opacity" size={24} />
            </div>
          </a>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
          POS Business <span className="text-lime-400">Tools</span>
        </h1>

        <div className="space-y-6 mb-12">
          <p className="text-xl text-gray-300 leading-relaxed font-medium">
            Lunacal.ai is a next‑generation scheduling platform now available through the POS ecosystem.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Designed for entrepreneurs who value their time, Lunacal.ai simplifies the way you connect with clients, manage bookings, and grow your professional presence.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href={LUNACAL_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-lime-400 hover:bg-lime-300 text-black font-black rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-lime-900/10"
          >
            Visit Lunacal.ai
            <ExternalLink size={18} />
          </a>
          <button 
            onClick={onBack}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all"
          >
            Explore Other Divisions
          </button>
        </div>

        {/* Upcoming Tools Note */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Plus size={48} className="text-lime-400" />
          </div>
          <h4 className="text-sm font-black uppercase tracking-widest text-lime-400 mb-2">Expansion Pending</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lunacal.ai is just the beginning. Our team is currently developing a suite of mobile-first business tools focused on financial tracking, client management, and creative growth. 
            <span className="block mt-2 font-bold text-gray-300 italic">Stay tuned for more updates.</span>
          </p>
        </div>

        {/* Subtle decorative background glow */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-lime-400/5 blur-[120px] -z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default BusinessToolsPage;
