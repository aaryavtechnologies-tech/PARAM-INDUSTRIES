import React, { useState } from 'react';
import { ShieldCheck, ZapOff, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

interface Props {
  lang: 'en' | 'gu';
  showInteractiveToggle?: boolean;
}

export const WaterConditionerVisual: React.FC<Props> = ({ lang, showInteractiveToggle = true }) => {
  const [viewMode, setViewMode] = useState<'exterior' | 'cutaway' | 'photo'>('exterior');

  const isGu = lang === 'gu';

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Ambient Glass Aqua Glow Backdrop */}
      <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/25 via-sky-500/25 to-blue-600/25 rounded-3xl blur-3xl -z-10 animate-pulse pointer-events-none" />

      {/* Main Glass Product Container */}
      <div className="relative glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80">
        
        {/* Top Badges & Toggle */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-sky-200 text-[#075DB1] text-xs font-bold tracking-wide shadow-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{isGu ? 'ઇનલાઇન કેટાલિટિક સિસ્ટમ' : 'Inline Catalytic System'}</span>
          </div>

          {showInteractiveToggle && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setViewMode(viewMode === 'cutaway' ? 'exterior' : 'cutaway')}
                className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  viewMode === 'cutaway'
                    ? 'bg-[#063C7C] text-white border-[#063C7C]'
                    : 'bg-white/80 text-slate-700 border-slate-200 hover:border-sky-300'
                }`}
                title="Toggle Internal Catalytic Core Cutaway"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isGu ? 'કોર કટઅવે' : 'Core Cutaway'}</span>
              </button>

              <button
                onClick={() => setViewMode(viewMode === 'photo' ? 'exterior' : 'photo')}
                className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  viewMode === 'photo'
                    ? 'bg-[#063C7C] text-white border-[#063C7C]'
                    : 'bg-white/80 text-slate-700 border-slate-200 hover:border-sky-300'
                }`}
                title="View Live Physical Model"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{isGu ? 'વાસ્તવિક ફોટો' : 'Real Photo'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Display Container: Photographic View OR 3D CAD Glass-type Rendering */}
        {viewMode === 'photo' ? (
          <div className="relative w-full h-64 sm:h-76 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#075DB1]/90 to-[#03264c] p-4 shadow-inner border border-sky-400/40">
            {/* Water Splash Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
              <img
                src="./images/mollisaqua-cylinder.jpg"
                alt="MOLLISAQUA Water Conditioner on Water Splash"
                className="max-h-36 sm:max-h-44 object-contain rounded-xl drop-shadow-2xl border-2 border-white/40"
              />
              <div className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-cyan-300 font-mono border border-cyan-500/40">
                MOLLISAQUA M20 • SS-316L ALLOY CORE
              </div>
            </div>

            <div className="absolute bottom-2 inset-x-4 flex items-center justify-between text-[11px] text-cyan-200/80 font-mono">
              <span>PHOTO FROM BROCHURE</span>
              <span>100% GENUINE SPEC</span>
            </div>
          </div>
        ) : (
          /* SVG Photorealistic Metallic Water Conditioner with Glass Refraction Effects */
          <div className="relative w-full h-64 sm:h-76 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#072448] to-[#04172f] shadow-inner p-4 border border-sky-500/30">
            
            {/* Animated Water Streams in Background */}
            <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06A9E0" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0D874A" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M-50,60 Q150,20 350,70 T750,50" fill="none" stroke="url(#streamGrad)" strokeWidth="2.5" strokeDasharray="6 8" className="animate-pulse" />
              <path d="M-50,130 Q150,170 350,120 T750,140" fill="none" stroke="url(#streamGrad)" strokeWidth="3.5" strokeDasharray="10 12" />
              <path d="M-50,200 Q150,160 350,210 T750,190" fill="none" stroke="url(#streamGrad)" strokeWidth="2.5" strokeDasharray="4 6" />
            </svg>

            {/* Floating Glass-type Realistic Water Droplets */}
            <div className="absolute top-5 left-7 w-3.5 h-3.5 rounded-full bg-cyan-200/80 shadow-[0_0_12px_#38bdf8] border border-white animate-bounce" style={{ animationDuration: '3.2s' }} />
            <div className="absolute bottom-7 right-10 w-3 h-3 rounded-full bg-cyan-100/70 shadow-[0_0_10px_#38bdf8] border border-white animate-bounce" style={{ animationDuration: '2.5s' }} />
            <div className="absolute top-10 right-16 w-2.5 h-2.5 rounded-full bg-sky-200/60 animate-ping" style={{ animationDuration: '4s' }} />

            {/* 3D-styled Stainless Steel Inline Water Conditioner Graphic */}
            <svg viewBox="0 0 520 220" className="w-full h-full max-h-56 filter drop-shadow-2xl">
              <defs>
                <linearGradient id="metalCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="12%" stopColor="#e2e8f0" />
                  <stop offset="35%" stopColor="#94a3b8" />
                  <stop offset="50%" stopColor="#f1f5f9" />
                  <stop offset="68%" stopColor="#64748b" />
                  <stop offset="88%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>

                <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="75%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4" />
                </linearGradient>

                <linearGradient id="flangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="30%" stopColor="#cbd5e1" />
                  <stop offset="50%" stopColor="#f8fafc" />
                  <stop offset="70%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>

                <linearGradient id="catalyticAlloyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e0b868" />
                  <stop offset="25%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#ca8a04" />
                  <stop offset="75%" stopColor="#fef08a" />
                  <stop offset="100%" stopColor="#a16207" />
                </linearGradient>

                <linearGradient id="waterFlowInside" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
                </linearGradient>

                <pattern id="catalyticMesh" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M0,8 L8,0 L16,8 L8,16 Z" fill="none" stroke="#d97706" strokeWidth="1.2" />
                  <circle cx="8" cy="8" r="1.5" fill="#facc15" />
                </pattern>
              </defs>

              {/* Left Pipe Inlet */}
              <rect x="25" y="85" width="45" height="50" rx="4" fill="url(#flangeGrad)" stroke="#475569" strokeWidth="1.5" />
              <line x1="38" y1="85" x2="38" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="52" y1="85" x2="52" y2="135" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Left Flange Ring with Bolts */}
              <rect x="70" y="70" width="22" height="80" rx="4" fill="url(#flangeGrad)" stroke="#334155" strokeWidth="1.5" />
              <circle cx="81" cy="78" r="3" fill="#64748b" stroke="#f1f5f9" strokeWidth="1" />
              <circle cx="81" cy="98" r="3" fill="#64748b" stroke="#f1f5f9" strokeWidth="1" />
              <circle cx="81" cy="122" r="3" fill="#64748b" stroke="#f1f5f9" strokeWidth="1" />
              <circle cx="81" cy="142" r="3" fill="#64748b" stroke="#f1f5f9" strokeWidth="1" />

              {/* Left Thread / Coupling */}
              <rect x="92" y="78" width="18" height="64" rx="2" fill="url(#flangeGrad)" stroke="#475569" strokeWidth="1" />

              {/* Main Chamber Body */}
              {viewMode === 'exterior' ? (
                <g>
                  {/* Solid Metallic Housing */}
                  <rect x="110" y="65" width="300" height="90" rx="10" fill="url(#metalCylinder)" stroke="#334155" strokeWidth="1.5" />
                  {/* Chrome Polish Reflection Strip */}
                  <rect x="110" y="75" width="300" height="14" fill="url(#metalHighlight)" opacity="0.9" />
                  <rect x="110" y="102" width="300" height="6" fill="#ffffff" opacity="0.45" />
                  <rect x="110" y="125" width="300" height="12" fill="#1e293b" opacity="0.3" />

                  {/* Laser-Etched Branding & Model Stamp */}
                  <g transform="translate(180, 102)">
                    <rect x="-10" y="-18" width="160" height="36" rx="4" fill="#0f172a" fillOpacity="0.25" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3 3" />
                    <text x="70" y="-3" fill="#063C7C" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">
                      MOLLISAQUA
                    </text>
                    <text x="70" y="11" fill="#075DB1" fontSize="8" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
                      CATALYTIC SCALE CONTROLLER
                    </text>
                  </g>

                  {/* Flow Direction Indicator Arrow */}
                  <g transform="translate(345, 118)">
                    <path d="M0,0 L24,0 M16,-4 L24,0 L16,4" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="12" y="-7" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle">FLOW</text>
                  </g>

                  {/* Technical Spec Markings */}
                  <text x="135" y="142" fill="#475569" fontSize="6.5" fontFamily="monospace">SS-316L • NO ELECTRICITY • NON-CHEMICAL</text>
                </g>
              ) : (
                /* Cutaway View: Revealing Inner Catalytic Alloy Core */
                <g>
                  {/* Outer Cutaway Shell */}
                  <path d="M110,65 L410,65 Q415,65 415,70 L415,80 L110,80 Z" fill="url(#metalCylinder)" stroke="#334155" strokeWidth="1" />
                  <path d="M110,140 L410,140 L410,150 Q410,155 405,155 L115,155 Q110,155 110,150 Z" fill="url(#metalCylinder)" stroke="#334155" strokeWidth="1" />

                  {/* Inner Water Stream Layer */}
                  <rect x="110" y="80" width="300" height="60" fill="url(#waterFlowInside)" />

                  {/* Catalytic Core Structure */}
                  <rect x="140" y="88" width="240" height="44" rx="6" fill="url(#catalyticAlloyGrad)" stroke="#b45309" strokeWidth="1.5" />
                  <rect x="140" y="88" width="240" height="44" rx="6" fill="url(#catalyticMesh)" opacity="0.8" />

                  {/* Flow and Reaction Indicator Waves */}
                  <path d="M115,110 C130,105 145,115 160,110 S190,105 210,110 S240,115 270,110 S310,105 340,110 S380,115 405,110" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

                  {/* Core Label */}
                  <rect x="190" y="96" width="140" height="26" rx="4" fill="#1e293b" fillOpacity="0.85" />
                  <text x="260" y="112" fill="#fde047" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
                    CATALYTIC ALLOY CORE
                  </text>
                </g>
              )}

              {/* Right Thread / Coupling */}
              <rect x="410" y="78" width="18" height="64" rx="2" fill="url(#flangeGrad)" stroke="#475569" strokeWidth="1" />

              {/* Right Flange Ring with Bolts */}
              <rect x="428" y="70" width="22" height="80" rx="4" fill="url(#flangeGrad)" stroke="#334155" strokeWidth="1.5" />
              <circle cx="439" cy="78" r="3" fill="#64748b" stroke="#f1f5f9" strokeWidth="1" />
              <circle cx="439" cy="98" r="3" fill="#64748b" stroke="#f1f5f9" strokeWidth="1" />
              <circle cx="439" cy="122" r="3" fill="#64748b" stroke="#f1f5f9" strokeWidth="1" />
              <circle cx="439" cy="142" r="3" fill="#64748b" stroke="#f1f5f9" strokeWidth="1" />

              {/* Right Pipe Outlet */}
              <rect x="450" y="85" width="45" height="50" rx="4" fill="url(#flangeGrad)" stroke="#475569" strokeWidth="1.5" />
              <line x1="468" y1="85" x2="468" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="482" y1="85" x2="482" y2="135" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Sparkling Reflection Accents */}
              <circle cx="160" cy="75" r="2" fill="#ffffff" filter="url(#glow)" />
              <circle cx="360" cy="74" r="2.5" fill="#ffffff" filter="url(#glow)" />
            </svg>

            {/* Real-time Indicator Bottom Bar */}
            <div className="absolute bottom-2 inset-x-4 flex items-center justify-between text-[11px] text-sky-200/80 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {isGu ? 'પ્રવાહ દિશા: ડાબેથી જમણે' : 'Flow: Left to Right'}
              </span>
              <span>MOLLISAQUA / AQANO LINE</span>
            </div>
          </div>
        )}

        {/* 3 Essential Micro-Labels from posters */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div className="p-2.5 rounded-xl bg-white/90 border border-sky-100 shadow-xs flex flex-col items-center text-center">
            <ZapOff className="w-4 h-4 text-sky-600 mb-1" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              {isGu ? 'વીજળીની જરૂર નથી' : 'No Electricity'}
            </span>
            <span className="text-[9px] text-slate-500 mt-0.5">
              {isGu ? '૦ વોટ પાવર' : 'Zero Power'}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/90 border border-emerald-100 shadow-xs flex flex-col items-center text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              {isGu ? 'મીઠા/કેમિકલ વગર' : 'No Salt / Chem'}
            </span>
            <span className="text-[9px] text-slate-500 mt-0.5">
              {isGu ? 'નોન-કેમિકલ' : 'Zero Additives'}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/90 border border-cyan-100 shadow-xs flex flex-col items-center text-center">
            <Sparkles className="w-4 h-4 text-cyan-600 mb-1" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              {isGu ? 'આજીવન મેન્ટેનન્સ નથી' : 'Fit & Forget'}
            </span>
            <span className="text-[9px] text-slate-500 mt-0.5">
              {isGu ? 'કાયમી સમાધાન' : 'Permanent Solution'}
            </span>
          </div>
        </div>

        {/* Both Named Brands Reference Notice */}
        <div className="mt-4 pt-3 border-t border-sky-100/80 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#063C7C]">MOLLISAQUA</span>
            <span className="text-slate-300">•</span>
            <span className="font-extrabold text-[#075DB1]">AQANO</span>
          </div>
          <span className="text-[11px] text-slate-500">
            {isGu ? 'પરમ ઈન્ડસ્ટ્રીઝ દ્વારા પ્રસ્તુત' : 'Offered by Param Industries'}
          </span>
        </div>

      </div>
    </div>
  );
};
