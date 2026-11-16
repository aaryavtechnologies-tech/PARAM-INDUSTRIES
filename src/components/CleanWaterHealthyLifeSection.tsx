import React, { useState } from 'react';
import { translations, type Language } from '../translations';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Droplet,
  Heart,
  Flame,
  Shirt,
  Smile,
  Wrench,
  ArrowRight,
  Phone,
  Maximize2,
  X,
  LayoutTemplate,
  Columns,
} from 'lucide-react';

interface Props {
  lang: Language;
  onConsultClick: () => void;
}

export const CleanWaterHealthyLifeSection: React.FC<Props> = ({ lang, onConsultClick }) => {
  const t = translations[lang].healthyLife;
  const isGu = lang === 'gu';
  const [showFullBannerModal, setShowFullBannerModal] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'panoramic' | 'split'>('panoramic');

  const benefits = [
    {
      id: 'hair',
      title: t.b1Title,
      desc: t.b1Desc,
      img: './images/benefit-hair.jpg',
      icon: Heart,
      tag: isGu ? 'વાળનું રક્ષણ' : 'Hair Defense',
      color: 'border-pink-200/80 bg-pink-50/40 text-pink-700',
    },
    {
      id: 'skin',
      title: t.b2Title,
      desc: t.b2Desc,
      img: './images/benefit-skin.jpg',
      icon: Smile,
      tag: isGu ? 'કોમળ ત્વચા' : 'Radiant Skin',
      color: 'border-amber-200/80 bg-amber-50/40 text-amber-700',
    },
    {
      id: 'fabrics',
      title: t.b3Title,
      desc: t.b3Desc,
      img: './images/benefit-fabrics.jpg',
      icon: Shirt,
      tag: isGu ? 'સોફ્ટ કપડાં' : 'Fabric Softness',
      color: 'border-sky-200/80 bg-sky-50/40 text-sky-700',
    },
    {
      id: 'lather',
      title: t.b4Title,
      desc: t.b4Desc,
      img: './images/benefit-lather.jpg',
      icon: Droplet,
      tag: isGu ? 'વધુ ફીણ' : 'Rich Lather',
      color: 'border-cyan-200/80 bg-cyan-50/40 text-cyan-700',
    },
    {
      id: 'scaling',
      title: t.b5Title,
      desc: t.b5Desc,
      img: './images/benefit-scaling.jpg',
      icon: ShieldCheck,
      tag: isGu ? 'ક્ષાર મુક્તિ' : 'Scale-Free Fixtures',
      color: 'border-blue-200/80 bg-blue-50/40 text-blue-700',
    },
    {
      id: 'equipment',
      title: t.b6Title,
      desc: t.b6Desc,
      img: './images/benefit-equipment.jpg',
      icon: Flame,
      tag: isGu ? 'સાધનોનું આયુષ્ય' : 'Longer Equipment Life',
      color: 'border-emerald-200/80 bg-emerald-50/40 text-emerald-700',
    },
  ];

  return (
    <section id="healthy-life" className="py-20 relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-cyan-50/40">
      
      {/* Ambient Glass Water Caustic Background Motifs */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-300/30 blur-3xl animate-water-float" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-sky-300/25 blur-3xl animate-water-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Glass Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-200 shadow-sm text-xs font-extrabold text-[#075DB1] uppercase tracking-wider mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102D53] tracking-tight">
            {t.heading}
          </h2>

          <div className="text-lg sm:text-xl font-extrabold text-[#075DB1] mt-2">
            {t.tagline}
          </div>

          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* View Layout Switcher (Full Banner Panoramic vs Split Card) */}
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-xs font-bold text-slate-500 hidden sm:inline">
            {isGu ? 'સત્તાવાર બેનર અને ઉત્પાદન વિગતો' : 'Official Banner & System Overview'}
          </span>

          <div className="inline-flex items-center gap-1.5 p-1 rounded-full glass-panel border border-sky-200 shadow-xs ml-auto">
            <button
              onClick={() => setViewMode('panoramic')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'panoramic'
                  ? 'bg-[#063C7C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#063C7C]'
              }`}
            >
              <LayoutTemplate className="w-3.5 h-3.5" />
              <span>{isGu ? 'પેનોરેમિક બેનર (સંપૂર્ણ)' : 'Full Banner (Uncropped)'}</span>
            </button>

            <button
              onClick={() => setViewMode('split')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'split'
                  ? 'bg-[#063C7C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#063C7C]'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>{isGu ? 'સ્પ્લિટ કાર્ડ' : 'Side-by-Side'}</span>
            </button>
          </div>
        </div>

        {/* Master Feature Card with 100% Uncropped Official Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 shadow-2xl mb-16 relative overflow-hidden">
          
          {/* ========================================================= */}
          {/* VIEW MODE 1: FULL PANORAMIC 16:9 BANNER (ZERO CROPPING)   */}
          {/* ========================================================= */}
          {viewMode === 'panoramic' && (
            <div>
              {/* Grand 16:9 Master Banner Frame with Perfect Height (560px on Desktop) */}
              <div
                onClick={() => setShowFullBannerModal(true)}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/95 group bg-slate-950 w-full aspect-[16/9] max-h-[580px] mb-8 cursor-pointer flex items-center justify-center transition-all"
                title={isGu ? 'સંપૂર્ણ હાઈ-રેઝોલ્યુશન બેનર જોવા ક્લિક કરો' : 'Click to view full uncropped high-resolution banner'}
              >
                {/* 2X Master Banner: Exact 16:9 Aspect Ratio with 0% Cropped Text */}
                <img
                  src="./images/param-clean-water-health-2x.jpg"
                  alt="PARAM INDUSTRIES - Smarter Water. Healthier Living. Clean water and healthy life"
                  className="w-full h-full object-contain sm:object-cover group-hover:scale-[1.01] transition-transform duration-700"
                />

                {/* Ambient Glass Highlight Rim */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/30 pointer-events-none rounded-2xl sm:rounded-3xl" />

                {/* Floating Glass Water Droplet Sphere Badge */}
                <div className="absolute bottom-4 left-4 p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl flex items-center gap-2.5 max-w-[220px]">
                  <img
                    src="./images/water-sphere-eco.jpg"
                    alt="Clean water healthy life sphere"
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div className="text-left">
                    <span className="text-[11px] font-black text-[#063C7C] leading-none block">
                      {isGu ? 'શુદ્ધ પાણી' : 'Clean Water'}
                    </span>
                    <span className="text-[10px] font-bold text-[#0D874A] leading-tight block mt-0.5">
                      {isGu ? 'સ્વસ્થ જીવન' : 'Healthy Life'}
                    </span>
                  </div>
                </div>

                {/* Top Action Pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <div className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-[#075DB1] text-white text-[11px] font-bold backdrop-blur-md border border-white/30 shadow-md transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isGu ? 'મોટું કરીને જુઓ' : 'Expand Lightbox'}</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white text-[11px] font-extrabold text-[#075DB1] shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{isGu ? 'અમદાવાદ લાઈવ ડેમો' : 'Ahmedabad Demo'}</span>
                  </div>
                </div>
              </div>

              {/* Two-Column Structured Content Directly Below Full Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                
                {/* Left Side: Value Proposition */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#063C7C] text-xs font-bold">
                    <span>{isGu ? 'વોટર કન્ડિશનર / સોફ્ટનર સોલ્યુશન' : 'Water Conditioner / Softener Solution'}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102D53] leading-snug">
                    {isGu
                      ? 'પાણીની ગુણવત્તા સુધારે છે, કઠણ પાણીને નરમ મુલાયમ પાણીમાં પરિવર્તિત કરે છે.'
                      : 'Transform Hard Water Into Silk-Smooth, Mineral-Conditioned Water.'}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {t.intro}
                  </p>
                </div>

                {/* Right Side: 3 Benefit Badges & Booking Strip */}
                <div className="lg:col-span-6 space-y-5">
                  {/* 3 Core Highlight Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-white/95 border border-sky-100 shadow-xs flex items-start gap-2.5">
                      <Wrench className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">
                          {isGu ? 'આજીવન મેન્ટેનન્સ નથી' : 'Zero Maintenance'}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {isGu ? 'ફિટ એન્ડ ફર્ગેટ' : 'Fit & Forget Solution'}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/95 border border-emerald-100 shadow-xs flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">
                          {isGu ? 'મીઠા / કેમિકલ વગર' : 'No Salt or Chemicals'}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {isGu ? '૧૦૦% ઇકો-ફ્રેન્ડલી' : '100% Eco-Friendly'}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/95 border border-pink-100 shadow-xs flex items-start gap-2.5">
                      <Heart className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">
                          {isGu ? 'વાળ અને ત્વચા સુરક્ષા' : 'Hair & Skin Defense'}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {isGu ? 'ખરતા વાળ અટકાવે' : 'Reduces Hair Fall'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sizing & Quick Booking Strip */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-cyan-50/60 to-white border border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="./images/mollisaqua-cylinder.jpg"
                        alt="Mollisaqua water conditioner cylinder on water splash"
                        className="w-14 h-11 object-cover rounded-xl shadow-xs border border-white"
                      />
                      <div>
                        <span className="font-extrabold text-sm text-[#063C7C] block">
                          MOLLISAQUA M20 & AQANO
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {isGu ? 'સોસાયટી બોર, બંગલો, ફ્લેટ અને ફેક્ટરી માટે' : 'For Society Borewells, Bungalows, Flats & Factories'}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={onConsultClick}
                      className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#063C7C] hover:bg-[#075DB1] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                    >
                      <span>{isGu ? 'પરામર્શ મેળવો' : 'Book Consultation'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* VIEW MODE 2: SPLIT CARD (WITH OBJECT-CONTAIN, ZERO CLIPPING) */}
          {/* ========================================================= */}
          {viewMode === 'split' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Contained Banner with Ambient Glass Padding (Nothing Cut Off!) */}
              <div className="lg:col-span-6 relative flex flex-col justify-center">
                <div
                  onClick={() => setShowFullBannerModal(true)}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/95 group bg-gradient-to-br from-[#063C7C] via-[#075DB1] to-[#04244c] w-full h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center cursor-pointer p-2 sm:p-4"
                  title={isGu ? 'સંપૂર્ણ હાઈ-રેઝોલ્યુશન બેનર જોવા ક્લિક કરો' : 'Click to view full uncropped high-resolution banner'}
                >
                  {/* Object Contain Ensures 100% of the Image is Visible Without Any Cropping */}
                  <img
                    src="./images/param-clean-water-health-2x.jpg"
                    alt="PARAM INDUSTRIES - Smarter Water. Healthier Living."
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Ambient Glass Highlight Rim */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/30 pointer-events-none rounded-2xl sm:rounded-3xl" />

                  {/* Top Action Pills */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <div className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-[#075DB1] text-white text-[11px] font-bold backdrop-blur-md border border-white/30 shadow-md transition-all">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{isGu ? 'મોટું કરીને જુઓ' : 'Expand'}</span>
                    </div>

                    <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white text-[11px] font-extrabold text-[#075DB1] shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{isGu ? 'અમદાવાદ લાઈવ ડેમો' : 'Ahmedabad Demo'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Description & Core Value Props */}
              <div className="lg:col-span-6 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#063C7C] text-xs font-bold">
                    <span>{isGu ? 'વોટર કન્ડિશનર / સોફ્ટનર સોલ્યુશન' : 'Water Conditioner / Softener Solution'}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102D53] leading-snug">
                    {isGu
                      ? 'પાણીની ગુણવત્તા સુધારે છે, કઠણ પાણીને નરમ મુલાયમ પાણીમાં પરિવર્તિત કરે છે.'
                      : 'Transform Hard Water Into Silk-Smooth, Mineral-Conditioned Water.'}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {t.intro}
                  </p>
                </div>

                {/* 3 Core Highlight Badges directly from Poster */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/95 border border-sky-100 shadow-xs flex items-start gap-2.5">
                    <Wrench className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {isGu ? 'આજીવન મેન્ટેનન્સ નથી' : 'Zero Maintenance'}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {isGu ? 'ફિટ એન્ડ ફર્ગેટ' : 'Fit & Forget Solution'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/95 border border-emerald-100 shadow-xs flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {isGu ? 'મીઠા / કેમિકલ વગર' : 'No Salt or Chemicals'}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {isGu ? '૧૦૦% ઇકો-ફ્રેન્ડલી' : '100% Eco-Friendly'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/95 border border-pink-100 shadow-xs flex items-start gap-2.5">
                    <Heart className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {isGu ? 'વાળ અને ત્વચા સુરક્ષા' : 'Hair & Skin Defense'}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {isGu ? 'ખરતા વાળ અટકાવે' : 'Reduces Hair Fall'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sizing & Quick Booking Strip */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-cyan-50/60 to-white border border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="./images/mollisaqua-cylinder.jpg"
                      alt="Mollisaqua water conditioner cylinder on water splash"
                      className="w-14 h-11 object-cover rounded-xl shadow-xs border border-white"
                    />
                    <div>
                      <span className="font-extrabold text-sm text-[#063C7C] block">
                        MOLLISAQUA M20 & AQANO
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {isGu ? 'સોસાયટી બોર, બંગલો, ફ્લેટ અને ફેક્ટરી માટે' : 'For Society Borewells, Bungalows, Flats & Factories'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={onConsultClick}
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#063C7C] hover:bg-[#075DB1] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    <span>{isGu ? 'પરામર્શ મેળવો' : 'Book Consultation'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* 6 High-Fidelity Benefit Cards Grid with Real Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="group glass-panel rounded-3xl p-5 border border-white/80 hover:border-sky-300 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo & Badge */}
                  <div className="relative rounded-2xl overflow-hidden mb-4 h-44 shadow-inner bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                    <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md bg-white/90 shadow-xs ${item.color}`}>
                      {item.tag}
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                      <span className="font-bold text-sm drop-shadow-md">{item.title}</span>
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <IconComp className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100/80 mt-4 flex items-center justify-between text-xs text-[#075DB1] font-semibold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {isGu ? 'સિદ્ધ પરિણામ' : 'Proven Outcome'}
                  </span>
                  <span className="text-[11px] text-slate-400">PARAM INDUSTRIES</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Demo Banner Card (Ahmedabad Location) */}
        <div className="mt-12 glass-card-aqua rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              {isGu ? 'લાઈવ ડેમો ઉપલબ્ધ' : 'Live Product Demonstration'}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#102D53] mt-2">
              {isGu
                ? 'અમારા અમદાવાદ કાર્યાલય ખાતે લાઈવ ડેમો જુઓ'
                : 'Experience the Live Water Conditioning Demo at Shela, Ahmedabad'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              A/1501, Riviera Springs Skycity, Club 07 Road, Shela, Ahmedabad – 380058, Gujarat.
            </p>
          </div>

          <a
            href="tel:+917984515685"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>+91 7984515685 ({isGu ? 'મુકેશભાઈ ઠક્કર' : 'Call Mukeshbhai'})</span>
          </a>
        </div>

      </div>

      {/* Full High-Resolution Uncropped Banner Modal */}
      {showFullBannerModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setShowFullBannerModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Modal Header */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => setShowFullBannerModal(false)}
                className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Complete Uncropped 16:9 Banner */}
            <div className="relative w-full aspect-[16/9] bg-black">
              <img
                src="./images/param-clean-water-health-2x.jpg"
                alt="PARAM INDUSTRIES - Full Official Banner"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer Strip */}
            <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-base text-cyan-300">
                  PARAM INDUSTRIES — Smarter Water. Healthier Living.
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {isGu
                    ? 'મુકેશભાઈ ઠક્કર • +91 7984515685 • શીલા, અમદાવાદ'
                    : 'Mukeshbhai Thakkar • +91 7984515685 • Shela, Ahmedabad'}
                </p>
              </div>

              <a
                href={`https://wa.me/917984515685?text=${encodeURIComponent(
                  isGu
                    ? 'નમસ્તે મુકેશભાઈ, હું પરમ ઈન્ડસ્ટ્રીઝના વોટર કન્ડિશનર સોલ્યુશન વિશે વાત કરવા માંગુ છું.'
                    : 'Hello Mukeshbhai, I would like to get a free consultation on PARAM INDUSTRIES water conditioner.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all"
              >
                <span>{isGu ? 'વોટ્સએપ પરામર્શ' : 'WhatsApp Consultation'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
