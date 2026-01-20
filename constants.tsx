
import React from 'react';
import { 
  Home, 
  ShieldCheck, 
  Briefcase, 
  Calendar, 
  Swords, 
  ArrowRight 
} from 'lucide-react';
import { Division, DivisionId } from './types';

export const DIVISIONS: Division[] = [
  {
    id: DivisionId.PROPERTY_RESET,
    title: "Property Reset",
    description: "Home transformation, decluttering, and reset services designed to restore order, clarity, and peace to your physical space.",
    color: "#00eaff",
    borderColor: "border-cyan-400",
    link: "#",
    icon: "Home",
  },
  {
    id: DivisionId.SPARK_SHIELD,
    title: "Spark & Shield",
    description: "Personal protection, empowerment, and readiness tools for everyday confidence and safety. Prepare for the unexpected.",
    color: "#ff6b00",
    borderColor: "border-orange-500",
    link: "#",
    icon: "ShieldCheck",
  },
  {
    id: DivisionId.BUSINESS_TOOLS,
    title: "POS Business Tools",
    description: "Smart, mobile‑friendly tools for entrepreneurs, creators, and small business owners to simplify daily operations and grow their professional presence.",
    color: "#8fff00",
    borderColor: "border-lime-400",
    link: "/business-tools",
    icon: "Briefcase",
  },
  {
    id: DivisionId.DIGITAL_TOOLS,
    title: "Digital Manage Your Life Tools",
    description: "Calendars, planners, trackers, and digital systems that simplify daily life and boost productivity across all devices.",
    color: "#ff00d4",
    borderColor: "border-fuchsia-500",
    link: "#",
    icon: "Calendar",
  },
  {
    id: DivisionId.POS_FIGHT,
    title: "POS Fight",
    description: "Support, guidance, and structured tools for navigating life’s toughest battles with dignity and strength. You don't have to fight alone.",
    color: "#ff0033",
    borderColor: "border-red-600",
    link: "#",
    icon: "Swords",
  }
];

export const getIcon = (iconName: string, color: string) => {
  const props = { size: 28, color: color, strokeWidth: 2 };
  switch (iconName) {
    case 'Home': return <Home {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Briefcase': return <Briefcase {...props} />;
    case 'Calendar': return <Calendar {...props} />;
    case 'Swords': return <Swords {...props} />;
    default: return <ArrowRight {...props} />;
  }
};
