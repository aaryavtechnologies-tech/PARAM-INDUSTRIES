import React, { useState } from 'react';
import { translations, type Language } from '../translations';
import {
  Home,
  Hotel,
  Building2,
  Factory,
  Sprout,
  Fish,
  Flame,
  Stethoscope,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

interface Props {
  lang: Language;
  onSelectApplication: (appName: string) => void;
}

export const ApplicationCards: React.FC<Props> = ({ lang, onSelectApplication }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial' | 'agriculture'>('all');

  const t = translations[lang].applications;
  const isGu = lang === 'gu';

  const apps = [
    {
      id: 'residential',
      category: 'residential',
      icon: Home,
      name: t.app1Name,
      desc: t.app1Desc,
      highlights: isGu
        ? ['ગીઝર અને નળમાં ક્ષાર અટકાવો', 'સોલાર વોટર હીટરનું રક્ષણ', 'બાથરૂમ ફિટિંગ્સ ચમકદાર રાખો']
        : ['Protects geyser elements & taps', 'Maintains solar water heater efficiency', 'Keeps bathroom fixtures scale-free'],
      color: 'from-sky-500/10 to-blue-500/10',
      badge: isGu ? 'રહેણાંક' : 'Domestic',
      borderAccent: 'group-hover:border-sky-400',
      iconColor: 'text-sky-600',
    },
    {
      id: 'hospitality',
      category: 'commercial',
      icon: Hotel,
      name: t.app2Name,
      desc: t.app2Desc,
      highlights: isGu
        ? ['સેન્ટ્રલ બોઇલર ક્ષાર સુરક્ષા', 'કોમર્શિયલ કિચન પાઇપલાઇન', 'શાવર અને ગ્લાસ પર ડાઘ મુક્ત']
        : ['Central boiler protection', 'Commercial dishwasher lines', 'Spot-free guest shower glass'],
      color: 'from-blue-500/10 to-indigo-500/10',
      badge: isGu ? 'હોસ્પિટાલિટી' : 'Hospitality',
      borderAccent: 'group-hover:border-blue-400',
      iconColor: 'text-blue-600',
    },
    {
      id: 'healthcare',
      category: 'commercial',
      icon: Stethoscope,
      name: t.app3Name,
      desc: t.app3Desc,
      highlights: isGu
        ? ['યુટિલિટી વોટર લાઇન્સ', 'લોન્ડ્રી અને ગરમ પાણી લૂપ્સ', 'HVAC કૂલિંગ રક્ષણ']
        : ['Facility utility hot water loops', 'Laundry equipment scale defense', 'HVAC condenser protection'],
      color: 'from-cyan-500/10 to-sky-500/10',
      badge: isGu ? 'હેલ્થકેર યુટિલિટી' : 'Healthcare Utility',
      borderAccent: 'group-hover:border-cyan-400',
      iconColor: 'text-cyan-700',
      disclaimer: isGu
        ? 'નોંધ: ફક્ત યુટિલિટી પાણી માટે. મેડિકલ ડિવાઇસ તરીકે માન્યતાનો દાવો નથી.'
        : 'Notice: Sized for utility non-potable circuits. Not marketed as medical equipment.',
    },
    {
      id: 'commercial',
      category: 'commercial',
      icon: Building2,
      name: t.app4Name,
      desc: t.app4Desc,
      highlights: isGu
        ? ['બિલ્ડિંગ પાઇપલાઇન રક્ષણ', 'કૂલિંગ ટાવર સર્કિટ્સ', 'પાણીનો બગાડ ઝીરો']
        : ['Multi-story riser line scaling control', 'HVAC condenser chiller lines', 'Zero backwash discharge water'],
      color: 'from-slate-500/10 to-sky-500/10',
      badge: isGu ? 'કોમર્શિયલ' : 'Commercial',
      borderAccent: 'group-hover:border-sky-400',
      iconColor: 'text-[#075DB1]',
    },
    {
      id: 'industrial',
      category: 'industrial',
      icon: Factory,
      name: t.app5Name,
      desc: t.app5Desc,
      highlights: isGu
        ? ['પ્રોસેસ પાઇપિંગ સુરક્ષા', 'પ્લેટ હીટ એક્સચેન્જર્સ', 'રાસાયણિક ડીસ્કેલિંગમાં ઘટાડો']
        : ['Process piping scale management', 'Plate heat exchanger reliability', 'Reduces chemical descaling downtime'],
      color: 'from-blue-600/10 to-slate-600/10',
      badge: isGu ? 'ઔદ્યોગિક' : 'Industrial Units',
      borderAccent: 'group-hover:border-blue-500',
      iconColor: 'text-[#063C7C]',
    },
    {
      id: 'agriculture',
      category: 'agriculture',
      icon: Sprout,
      name: t.app6Name,
      desc: t.app6Desc,
      highlights: isGu
        ? ['ડ્રીપ એમીટર્સમાં ચોકિંગ અટકાવે', 'માઇક્રો-સ્પ્રિંકલર સફાઈ', 'બોરવેલ કઠણ પાણી માટે અનુકૂળ']
        : ['Helps prevent drip emitter calcification', 'Unclogged micro-sprinkler nozzles', 'Suitable for hard borewell irrigation'],
      color: 'from-emerald-500/10 to-teal-500/10',
      badge: isGu ? 'કૃષિ અને સિંચાઈ' : 'Agriculture Eco',
      borderAccent: 'group-hover:border-emerald-500',
      iconColor: 'text-[#0D874A]',
      isGreen: true,
    },
    {
      id: 'farms',
      category: 'agriculture',
      icon: Fish,
      name: t.app7Name,
      desc: t.app7Desc,
      highlights: isGu
        ? ['વોશિંગ લાઈનોમાં ક્ષાર અટકાવ', 'મિસ્ટિંગ નોઝલ્સ ક્લિયરન્સ', 'એક્વાકલ્ચર સર્કિટ્સ']
        : ['Prevents scale in wash lines', 'Keeps cooling misting nozzles clear', 'Aquaculture aeration circuits'],
      color: 'from-teal-500/10 to-emerald-500/10',
      badge: isGu ? 'ડેરી અને ફાર્મિંગ' : 'Dairy & Aquaculture',
      borderAccent: 'group-hover:border-teal-400',
      iconColor: 'text-teal-700',
      isGreen: true,
    },
    {
      id: 'boilers',
      category: 'industrial',
      icon: Flame,
      name: t.app8Name,
      desc: t.app8Desc,
      highlights: isGu
        ? ['કૂલિંગ ટાવર હાર્ડનેસ કંટ્રોલ', 'હીટ ટ્રાન્સફર કાર્યક્ષમતા', 'હીટિંગ કોઈલ્સની સુરક્ષા']
        : ['Cooling tower water scale management', 'Maintains heat transfer surfaces', 'Supports condenser loop longevity'],
      color: 'from-blue-600/10 to-cyan-600/10',
      badge: isGu ? 'થર્મલ સિસ્ટમ્સ' : 'Thermal & Chillers',
      borderAccent: 'group-hover:border-sky-500',
      iconColor: 'text-sky-700',
    },
  ];

  const filteredApps = apps.filter((app) => {
    if (activeFilter === 'all') return true;
    return app.category === activeFilter;
  });

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { key: 'all', label: isGu ? 'તમામ ક્ષેત્રો' : 'All Applications' },
          { key: 'residential', label: isGu ? 'રહેણાંક' : 'Residential' },
          { key: 'commercial', label: isGu ? 'કોમર્શિયલ' : 'Commercial' },
          { key: 'industrial', label: isGu ? 'ઔદ્યોગિક' : 'Industrial' },
          { key: 'agriculture', label: isGu ? 'કૃષિ અને ફાર્મ' : 'Agriculture & Farms' },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveFilter(item.key as any)}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeFilter === item.key
                ? 'bg-[#063C7C] text-white shadow-md shadow-blue-900/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:bg-sky-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 8 Applications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredApps.map((app) => {
          const IconComp = app.icon;
          return (
            <div
              key={app.id}
              className={`group relative bg-white rounded-3xl p-6 border border-slate-200/90 hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${app.borderAccent}`}
            >
              {/* Background gradient hint */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${app.color} rounded-3xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform ${app.iconColor}`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                      app.isGreen
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-sky-50 text-sky-800 border border-sky-200'
                    }`}
                  >
                    {app.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h4 className="font-bold text-[#102D53] text-lg mb-2 group-hover:text-[#075DB1] transition-colors">
                  {app.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {app.desc}
                </p>

                {/* Key Benefits List */}
                <ul className="space-y-2 mb-4">
                  {app.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          app.isGreen ? 'text-emerald-600' : 'text-sky-600'
                        }`}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Disclaimer if present */}
                {app.disclaimer && (
                  <p className="text-[10px] text-slate-500 italic bg-slate-50 p-2 rounded-lg border border-slate-100 mb-4">
                    {app.disclaimer}
                  </p>
                )}
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-4 border-t border-slate-100 mt-2">
                <button
                  onClick={() => onSelectApplication(app.name)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold rounded-xl text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-sky-700" />
                  <span>{t.ctaBtn}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
