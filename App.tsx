
import React, { useState } from 'react';
import { 
  Box, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ShieldCheck 
} from 'lucide-react';
import { DIVISIONS } from './constants';
import DivisionCard from './components/DivisionCard';
import AIAssistant from './components/AIAssistant';
import BusinessToolsPage from './components/BusinessToolsPage';

type View = 'hub' | 'business_tools';

const App: React.FC = () => {
  const [view, setView] = useState<View>('hub');

  const handleNavigateToBusiness = () => setView('business_tools');
  const handleNavigateToHub = () => setView('hub');

  if (view === 'business_tools') {
    return <BusinessToolsPage onBack={handleNavigateToHub} />;
  }

  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white transition-opacity duration-500">
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleNavigateToHub}>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">Point On Solutions</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <button onClick={handleNavigateToHub} className="hover:text-white transition-colors">Hub</button>
            <button onClick={handleNavigateToBusiness} className="hover:text-white transition-colors">Business Tools</button>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-40">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-purple-400 animate-pulse">
            The Point On Solutions Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            Design Your <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">Perfect Reset.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            Five specialized divisions dedicated to restoring order, confidence, and productivity to every aspect of your life and business.
          </p>
          <div className="mt-12 flex flex-col items-center">
             <ChevronDown className="animate-bounce text-gray-600" size={32} />
          </div>
        </section>

        {/* AI Assistant Section */}
        <AIAssistant />

        {/* Division Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIVISIONS.map((division) => (
            <DivisionCard 
              key={division.id} 
              division={division} 
              onNavigate={division.id === 'business_tools' ? handleNavigateToBusiness : undefined}
            />
          ))}
          {/* Join Us Placeholder Card */}
          <div className="group bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-2xl border border-purple-500/20 flex flex-col items-center justify-center text-center cursor-pointer hover:border-purple-500/40 transition-all">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Box className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">More To Come</h3>
            <p className="text-gray-400 text-sm">We are constantly building tools to improve your life.</p>
            <div className="mt-8 text-purple-400 text-sm font-bold group-hover:underline">Stay Updated →</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#080808] border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight">Point On Solutions</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Empowering individuals and entrepreneurs through structured resets, intelligent tools, and unwavering support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Divisions</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {DIVISIONS.map(d => (
                <li key={d.id} className="hover:text-white cursor-pointer transition-colors">{d.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          © 2026 Point On Solutions Umbrella Hub. All rights reserved. Precision in every reset.
        </div>
      </footer>
    </div>
  );
};

export default App;
