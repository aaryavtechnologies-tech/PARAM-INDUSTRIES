import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import type { Language } from '../translations';

interface Props {
  lang: Language;
}

export const FloatingWidgets: React.FC<Props> = ({ lang }) => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const isGu = lang === 'gu';

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/917984515685?text=${encodeURIComponent(
    isGu
      ? 'નમસ્તે મુકેશભાઈ, મને પરમ ઈન્ડસ્ટ્રીઝના વોટર કન્ડિશનિંગ સોલ્યુશન્સ વિશે માહિતી જોઈએ છે.'
      : 'Hello Mukeshbhai, I would like to enquire about PARAM INDUSTRIES water conditioning and sustainable solutions.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Sticky WhatsApp Consultation Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Mukeshbhai Thakkar"
        className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0D874A] hover:bg-[#0b7540] text-white shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-lime-300 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-lime-300" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-emerald-100 font-medium leading-none">
            {isGu ? 'સીધા સંપર્ક કરો' : 'WhatsApp Us'}
          </span>
          <span className="text-xs font-bold leading-tight mt-0.5">
            +91 7984515685
          </span>
        </div>
      </a>
      
    </div>
  );
};
