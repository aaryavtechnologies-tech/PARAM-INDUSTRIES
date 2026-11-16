import React, { useState } from 'react';
import { translations, type Language } from '../translations';
import { CheckCircle2, Info, Play, Pause, ChevronRight } from 'lucide-react';

interface Props {
  lang: Language;
}

export const PipelineSimulation: React.FC<Props> = ({ lang }) => {
  const [activeStage, setActiveStage] = useState<number>(2);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const t = translations[lang].science;
  const isGu = lang === 'gu';

  const stages = [
    {
      id: 1,
      num: isGu ? 'સ્ટેજ ૧' : 'Stage 1',
      title: t.stage1Title,
      subtitle: isGu ? 'ઓગળેલા કેલ્શિયમ અને મેગ્નેશિયમ' : 'Dissolved Ca²⁺ & Mg²⁺',
      shortDesc: t.stage1Desc,
      details: t.stage1Details,
      color: '#075DB1',
      bgTag: 'bg-sky-50 text-sky-800 border-sky-200',
    },
    {
      id: 2,
      num: isGu ? 'સ્ટેજ ૨' : 'Stage 2',
      title: t.stage2Title,
      subtitle: isGu ? 'કેટાલિટિક રેડોક્સ સંપર્ક' : 'Catalytic Alloy Interaction',
      shortDesc: t.stage2Desc,
      details: t.stage2Details,
      color: '#d97706',
      bgTag: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      id: 3,
      num: isGu ? 'સ્ટેજ ૩' : 'Stage 3',
      title: t.stage3Title,
      subtitle: isGu ? 'નોન-એડહેસિવ માઇક્રો-સ્ફટિકો' : 'Non-Adhesive Aragonite Crystals',
      shortDesc: t.stage3Desc,
      details: t.stage3Details,
      color: '#0D874A',
      bgTag: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white via-sky-50/50 to-white rounded-3xl border border-sky-100 p-6 sm:p-10 shadow-xl">
      
      {/* Simulation Controls & Status Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-sky-100">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
            {t.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#102D53] mt-2">
            {t.heading}
          </h3>
          <p className="text-slate-600 text-sm max-w-2xl mt-1">
            {t.subheading}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 hover:border-sky-300 shadow-sm text-slate-700 transition-all cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-sky-600" />
                <span>{isGu ? 'વિરામ' : 'Pause Flow'}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isGu ? 'શરૂ કરો' : 'Resume Flow'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Water Pipeline Graphic (Desktop Horizontal / Mobile Optimized) */}
      <div className="relative w-full bg-slate-900 rounded-2xl overflow-hidden p-4 sm:p-8 shadow-2xl border border-slate-800">
        
        {/* Background Flow Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Pipeline Diagram SVG */}
        <div className="relative w-full">
          <svg
            viewBox="0 0 900 240"
            className="w-full h-auto max-h-72 drop-shadow-lg overflow-visible"
          >
            <defs>
              {/* Pipe Wall Gradient */}
              <linearGradient id="pipeWall" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="15%" stopColor="#cbd5e1" />
                <stop offset="35%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="70%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              {/* Water Gradient Flow */}
              <linearGradient id="waterStreamFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.75" />
                <stop offset="35%" stopColor="#0369a1" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#0891b2" stopOpacity="0.9" />
                <stop offset="65%" stopColor="#0284c7" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.8" />
              </linearGradient>

              {/* Catalytic Core Gradient */}
              <linearGradient id="coreAlloyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="30%" stopColor="#ca8a04" />
                <stop offset="70%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#854d0e" />
              </linearGradient>

              {/* Glow Filter */}
              <filter id="pipGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Stage 1 Region Background Highlight */}
            <rect
              x="20"
              y="20"
              width="260"
              height="200"
              rx="12"
              fill={activeStage === 1 ? '#0369a1' : 'transparent'}
              fillOpacity={activeStage === 1 ? '0.2' : '0'}
              stroke={activeStage === 1 ? '#38bdf8' : 'transparent'}
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveStage(1)}
            />

            {/* Stage 2 Region Background Highlight */}
            <rect
              x="300"
              y="20"
              width="300"
              height="200"
              rx="12"
              fill={activeStage === 2 ? '#ca8a04' : 'transparent'}
              fillOpacity={activeStage === 2 ? '0.2' : '0'}
              stroke={activeStage === 2 ? '#facc15' : 'transparent'}
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveStage(2)}
            />

            {/* Stage 3 Region Background Highlight */}
            <rect
              x="620"
              y="20"
              width="260"
              height="200"
              rx="12"
              fill={activeStage === 3 ? '#059669' : 'transparent'}
              fillOpacity={activeStage === 3 ? '0.2' : '0'}
              stroke={activeStage === 3 ? '#34d399' : 'transparent'}
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveStage(3)}
            />

            {/* Continuous Outer Pipe Structure */}
            {/* Upper Pipe Wall */}
            <rect x="20" y="70" width="860" height="14" fill="url(#pipeWall)" rx="2" />
            {/* Lower Pipe Wall */}
            <rect x="20" y="156" width="860" height="14" fill="url(#pipeWall)" rx="2" />

            {/* Internal Flow Conduit */}
            <rect x="20" y="84" width="860" height="72" fill="url(#waterStreamFlow)" />

            {/* Stage 1: Dissolved Hard Mineral Ions (Ca2+, Mg2+) */}
            <g className={isPlaying ? 'animate-pulse' : ''}>
              <circle cx="60" cy="105" r="7" fill="#ef4444" opacity="0.9" filter="url(#pipGlow)" />
              <text x="60" y="108" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">Ca²⁺</text>

              <circle cx="110" cy="130" r="7" fill="#f97316" opacity="0.9" filter="url(#pipGlow)" />
              <text x="110" y="133" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">Mg²⁺</text>

              <circle cx="160" cy="100" r="7" fill="#ef4444" opacity="0.9" filter="url(#pipGlow)" />
              <text x="160" y="103" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">Ca²⁺</text>

              <circle cx="210" cy="125" r="7" fill="#f97316" opacity="0.9" filter="url(#pipGlow)" />
              <text x="210" y="128" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">Mg²⁺</text>

              <circle cx="250" cy="105" r="7" fill="#ef4444" opacity="0.9" filter="url(#pipGlow)" />
              <text x="250" y="108" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">Ca²⁺</text>
            </g>

            {/* In Stage 1: Pipe Wall Untreated Limescale Deposition indicator */}
            <g opacity="0.8">
              <path d="M40,84 Q60,94 80,84 Q100,92 120,84" fill="#fef08a" opacity="0.7" />
              <path d="M140,156 Q160,146 180,156 Q200,148 220,156" fill="#fef08a" opacity="0.7" />
            </g>

            {/* Stage 2: Inline Catalytic Core Chamber */}
            <rect x="330" y="60" width="240" height="120" rx="10" fill="url(#pipeWall)" stroke="#1e293b" strokeWidth="2" />
            <rect x="345" y="76" width="210" height="88" rx="6" fill="#0f172a" />
            <g transform="translate(355, 84)">
              <rect x="0" y="0" width="190" height="72" rx="4" fill="url(#coreAlloyGrad)" stroke="#ca8a04" strokeWidth="2" opacity="0.85" />
              {[15, 45, 75, 105, 135, 165].map((xVal, idx) => (
                <path
                  key={idx}
                  d={`M${xVal},6 L${xVal + 12},36 L${xVal},66`}
                  fill="none"
                  stroke="#78350f"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              ))}
              <text x="95" y="41" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                ENGINEERED CATALYTIC ALLOY
              </text>
            </g>

            {/* Stage 3: Modified Non-Adherent Aragonite Clusters Flowing Free */}
            <g className={isPlaying ? 'animate-pulse' : ''}>
              <g transform="translate(650, 100)">
                <polygon points="0,-7 6,-2 4,6 -4,6 -6,-2" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
              </g>

              <g transform="translate(710, 130)">
                <polygon points="0,-7 6,-2 4,6 -4,6 -6,-2" fill="#34d399" stroke="#ffffff" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
              </g>

              <g transform="translate(760, 95)">
                <polygon points="0,-7 6,-2 4,6 -4,6 -6,-2" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
              </g>

              <g transform="translate(820, 120)">
                <polygon points="0,-7 6,-2 4,6 -4,6 -6,-2" fill="#34d399" stroke="#ffffff" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
              </g>
            </g>

            {/* Smooth Clean Walls in Stage 3 */}
            <line x1="620" y1="84" x2="880" y2="84" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
            <line x1="620" y1="156" x2="880" y2="156" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />

            {/* Stage Indicators on Top of Diagram */}
            <text x="150" y="45" fill="#93c5fd" fontSize="13" fontWeight="bold" textAnchor="middle">
              {isGu ? '૧. હાર્ડ વોટર પ્રવેશ' : '1. Hard Water Enters'}
            </text>
            <text x="450" y="45" fill="#fde047" fontSize="13" fontWeight="bold" textAnchor="middle">
              {isGu ? '૨. કેટાલિટિક કન્ડિશનિંગ' : '2. Catalytic Conditioning'}
            </text>
            <text x="750" y="45" fill="#6ee7b7" fontSize="13" fontWeight="bold" textAnchor="middle">
              {isGu ? '૩. ક્ષાર વ્યવસ્થાપન અસર' : '3. Scale-Management'}
            </text>

            {/* Bottom Molecular Labels */}
            <text x="150" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">
              {isGu ? 'ઓગળેલા ક્ષારો (Ca²⁺, Mg²⁺)' : 'Dissolved Ca²⁺ & Mg²⁺ ions'}
            </text>
            <text x="450" y="195" fill="#cbd5e1" fontSize="10" textAnchor="middle">
              {isGu ? 'સપાટી રેડોક્સ ન્યુક્લિએશન' : 'Redox nucleation habit alteration'}
            </text>
            <text x="750" y="195" fill="#a7f3d0" fontSize="10" textAnchor="middle">
              {isGu ? 'સૂક્ષ્મ નોન-એડહેસિવ સ્ફટિકો' : 'Non-adhering microscopic crystals'}
            </text>
          </svg>
        </div>

        {/* Dynamic Water Particle Streams */}
        {isPlaying && (
          <div className="absolute inset-x-8 top-[48%] h-4 overflow-hidden pointer-events-none opacity-40">
            <div className="w-full flex justify-between animate-wave">
              <span className="w-2 h-2 rounded-full bg-cyan-300" />
              <span className="w-2 h-2 rounded-full bg-sky-200" />
              <span className="w-2 h-2 rounded-full bg-blue-300" />
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              <span className="w-2 h-2 rounded-full bg-sky-300" />
            </div>
          </div>
        )}
      </div>

      {/* Stage Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {stages.map((stage) => {
          const isSelected = activeStage === stage.id;
          return (
            <div
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${
                isSelected
                  ? 'bg-white shadow-lg border-sky-400 ring-2 ring-sky-200 -translate-y-1'
                  : 'bg-white/60 hover:bg-white hover:border-slate-300 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${stage.bgTag}`}>
                  {stage.num}
                </span>
                {isSelected && (
                  <span className="flex items-center text-xs font-semibold text-sky-600">
                    {isGu ? 'સક્રિય દૃશ્ય' : 'Active View'}
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                )}
              </div>

              <h4 className="font-bold text-[#102D53] text-base mb-1">
                {stage.title}
              </h4>
              <div className="text-xs font-semibold text-slate-500 mb-2">
                {stage.subtitle}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {stage.shortDesc}
              </p>

              {isSelected && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-700 bg-sky-50/70 p-2.5 rounded-xl font-medium">
                  {stage.details}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mandatory Technical Accuracy Badges */}
      <div className="mt-8 bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-sky-950">
              {t.disclaimerTitle}
            </h5>
            <p className="text-xs text-sky-900 leading-relaxed">
              {t.disclaimerText}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-sky-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-800 block">{t.keyFact1Title}</span>
                  <span className="text-slate-600">{t.keyFact1Desc}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-sky-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-800 block">{t.keyFact2Title}</span>
                  <span className="text-slate-600">{t.keyFact2Desc}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-sky-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-800 block">{t.keyFact3Title}</span>
                  <span className="text-slate-600">{t.keyFact3Desc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
