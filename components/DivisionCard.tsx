
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Division } from '../types';
import { getIcon } from '../constants';

interface DivisionCardProps {
  division: Division;
  onNavigate?: () => void;
}

const DivisionCard: React.FC<DivisionCardProps> = ({ division, onNavigate }) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
      return;
    }

    if (division.link === '#') {
      alert(`${division.title} section is coming soon!`);
    } else {
      window.open(division.link, division.isExternal ? '_blank' : '_self');
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative overflow-hidden bg-[#121212] hover:bg-[#181818] transition-all duration-300 p-8 rounded-2xl border-l-4 ${division.borderColor} cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[${division.color}22] flex flex-col h-full`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-[#1e1e1e] rounded-xl group-hover:scale-110 transition-transform duration-300">
          {getIcon(division.icon, division.color)}
        </div>
        {division.isExternal ? (
          <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
        ) : (
          <ArrowRight size={20} className="text-gray-500 group-hover:text-white transition-colors" />
        )}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
        {division.title}
      </h3>

      {division.logo && (
        <div className="mb-4">
          <img 
            src={division.logo} 
            alt={`${division.title} Logo`} 
            className="w-[120px] h-auto rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      )}
      
      <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors flex-grow">
        {division.description}
      </p>

      {division.note && (
        <p className="text-sm italic text-gray-500 mb-6 leading-snug group-hover:text-gray-400 transition-colors">
          {division.note}
        </p>
      )}
      
      <div 
        className="inline-flex items-center justify-center font-bold px-5 py-2.5 rounded-lg text-sm transition-all w-fit"
        style={{ backgroundColor: division.color, color: '#000' }}
      >
        {division.link === '#' ? 'Coming Soon' : 'View Division'}
      </div>

      {/* Subtle Glow Effect */}
      <div 
        className="absolute -right-8 -bottom-8 w-32 h-32 blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ backgroundColor: division.color }}
      />
    </div>
  );
};

export default DivisionCard;
