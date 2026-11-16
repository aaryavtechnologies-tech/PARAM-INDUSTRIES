import React, { useState } from 'react';
import { translations, type Language } from '../translations';
import { ChevronDown, Search } from 'lucide-react';

interface Props {
  lang: Language;
}

export const FAQAccordion: React.FC<Props> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const t = translations[lang].faqs;
  const isGu = lang === 'gu';

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredItems = t.items.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Filter for FAQs */}
      <div className="relative mb-6 max-w-md mx-auto">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={isGu ? 'પ્રશ્નો શોધો (દા.ત. TDS, વીજળી, મીઠું)...' : 'Filter questions (e.g. TDS, electricity, salt)...'}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all shadow-sm"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-xs text-slate-400 hover:text-slate-600 absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-white border-sky-300 shadow-md ring-1 ring-sky-100'
                  : 'bg-white/80 hover:bg-white border-slate-200 shadow-sm'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#075DB1] text-white'
                        : 'bg-sky-50 text-sky-800 border border-sky-100'
                    }`}
                  >
                    Q{index + 1}
                  </span>
                  <span
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isOpen ? 'text-[#075DB1]' : 'text-[#102D53]'
                    }`}
                  >
                    {item.q}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-sky-100 text-[#075DB1]' : 'text-slate-400 bg-slate-50'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                  <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100/60 text-slate-700">
                    {item.a}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 p-6 text-slate-500 text-xs">
            {isGu
              ? 'તમારા શોધ શબ્દ સાથે કોઈ પ્રશ્ન મેળ ખાતો નથી. કૃપા કરીને અન્ય શબ્દ અજમાવો અથવા સીધો અમારો સંપર્ક કરો.'
              : 'No matching questions found. Please try a different query or contact our team directly.'}
          </div>
        )}
      </div>
    </div>
  );
};
