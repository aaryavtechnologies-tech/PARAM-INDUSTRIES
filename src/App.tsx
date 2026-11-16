import { useState, useEffect } from 'react';
import { translations, type Language } from './translations';
import { Navbar } from './components/Navbar';
import { CleanWaterHealthyLifeSection } from './components/CleanWaterHealthyLifeSection';
import { LiveReelsSection } from './components/LiveReelsSection';
import { WaterConditionerVisual } from './components/WaterConditionerVisual';
import { PipelineSimulation } from './components/PipelineSimulation';
import { ApplicationCards } from './components/ApplicationCards';
import { ComparisonTable } from './components/ComparisonTable';
import { FAQAccordion } from './components/FAQAccordion';
import { ContactSection } from './components/ContactSection';
import { FloatingWidgets } from './components/FloatingWidgets';
import { WaterAssessmentTool } from './components/WaterAssessmentTool';
import {
  WaterConditionerThumb,
  UrinalCartridgeThumb,
  HeatPumpThumb,
  SolarACThumb,
} from './components/ProductCardVisuals';
import {
  Droplets,
  ZapOff,
  ShieldCheck,
  Cpu,
  TrendingDown,
  Gauge,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  ExternalLink,
  Info,
  Sparkles,
  ChevronRight,
  MessageSquare,
  Globe2,
  Heart,
} from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProductForContact, setSelectedProductForContact] = useState<string>('Water Conditioner / Water Softener');
  const [selectedAppForContact, setSelectedAppForContact] = useState<string>('Residential');

  const t = translations[lang];
  const isGu = lang === 'gu';

  // Scrollspy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'healthy-life', 'reels', 'solutions', 'technology', 'applications', 'industrial', 'about', 'faqs', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProduct = (productName: string) => {
    setSelectedProductForContact(productName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectApplication = (appName: string) => {
    setSelectedAppForContact(appName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAssessmentRecommendation = (product: string, app: string) => {
    setSelectedProductForContact(product);
    setSelectedAppForContact(app);
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fdff] text-slate-800 antialiased selection:bg-sky-500 selection:text-white flex flex-col font-sans">
      
      {/* SECTION 1: Sticky Navigation Header */}
      <Navbar
        lang={lang}
        onLanguageChange={(newLang) => setLang(newLang)}
        activeSection={activeSection}
      />

      <main className="flex-grow pt-20">
        
        {/* SECTION 2: High-Impact Glass Split Hero (Clean Water, Healthy Life) */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-cyan-50/70 via-white to-sky-50/50"
        >
          {/* Subtle Glass Water Wave Background Motifs */}
          <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden -z-10">
            <svg
              className="absolute -top-24 left-0 w-[140%] h-auto animate-wave"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#06A9E0"
                fillOpacity="0.1"
                d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </svg>
            <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-cyan-300/35 blur-3xl animate-water-float" />
            <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl animate-water-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: High-Impact Typography & CTAs (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Location / Brand Tagline Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-200/80 shadow-xs text-xs font-extrabold text-[#075DB1]">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>{t.hero.badge}</span>
                </div>

                {/* Main Headlines: Clean Water. Healthy Life. */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#102D53] tracking-tight leading-[1.1]">
                  {t.hero.titleLine1}{' '}
                  <span className="bg-gradient-to-r from-[#075DB1] via-[#06A9E0] to-[#0D874A] bg-clip-text text-transparent">
                    {t.hero.titleLine2}
                  </span>
                </h1>

                {/* Subheading: Gujarati & English solution headline */}
                <div className="text-lg sm:text-xl font-extrabold text-[#075DB1] leading-snug">
                  {t.hero.subheading}
                </div>

                {/* Hair & Skin Health Callout Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-50/80 border border-pink-200 text-pink-900 text-xs font-bold shadow-xs">
                  <Heart className="w-4 h-4 text-pink-600 fill-pink-200" />
                  <span>{t.hero.hairSkinPill}</span>
                </div>

                {/* Supporting Text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t.hero.supportingText}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="#healthy-life"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#063C7C] hover:bg-[#075DB1] text-white text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <span>{t.hero.exploreBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/917984515685?text=${encodeURIComponent(
                      isGu
                        ? 'નમસ્તે મુકેશભાઈ, હું પરમ ઈન્ડસ્ટ્રીઝની વેબસાઇટ પરથી શુદ્ધ પાણી અને સ્વસ્થ જીવન (વોટર કન્ડિશનર) અંગે મફત પરામર્શ મેળવવા માંગુ છું.'
                        : 'Hello Mukeshbhai, I would like to get a free consultation on PARAM INDUSTRIES Clean Water... Healthy Life water conditioner solutions.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:bg-white text-[#0D874A] border-2 border-emerald-600/40 hover:border-emerald-600 text-sm font-extrabold shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-emerald-600" />
                    <span>{t.hero.consultBtn}</span>
                  </a>
                </div>

                {/* Micro Guarantee Trust Stats */}
                <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-center gap-2 text-left">
                    <CheckCircle2 className="w-4 h-4 text-[#06A9E0] shrink-0" />
                    <span className="text-xs font-bold text-slate-700 leading-tight">
                      {t.hero.micro1}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <CheckCircle2 className="w-4 h-4 text-[#0D874A] shrink-0" />
                    <span className="text-xs font-bold text-slate-700 leading-tight">
                      {t.hero.micro2}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-left">
                    <CheckCircle2 className="w-4 h-4 text-[#075DB1] shrink-0" />
                    <span className="text-xs font-bold text-slate-700 leading-tight">
                      {t.hero.micro3}
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Hero Visual — 3D Metallic Inline Water Conditioner with Glass Lighting (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <WaterConditionerVisual lang={lang} showInteractiveToggle={true} />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2B: CLEAN WATER... HEALTHY LIFE... (Lifestyle, Hair, Skin, Fixtures & Poster Real Photos) */}
        <CleanWaterHealthyLifeSection
          lang={lang}
          onConsultClick={scrollToContact}
        />

        {/* SECTION 2C: LIVE DEMONSTRATIONS & VIDEO REELS (Autoplay 9:16 Reels & Real Site Photos) */}
        <LiveReelsSection
          lang={lang}
          onConsultClick={scrollToContact}
        />

        {/* SECTION 3: Our Innovative Solutions (4 Primary Categories) */}
        <section id="solutions" className="py-20 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3.5 py-1 rounded-full">
                {isGu ? 'ઉત્પાદનો અને સેવાઓ' : 'Products & Systems'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D53] tracking-tight mt-3">
                {t.solutions.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                {t.solutions.subtitle}
              </p>
            </div>

            {/* 4 Premium Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Product 1: Water Softener / Water Conditioner */}
              <div className="group glass-panel rounded-3xl border border-slate-200/90 hover:border-sky-400 p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative mb-5">
                    <WaterConditionerThumb />
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#063C7C] border border-sky-200">
                      {t.solutions.card1Badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#102D53] group-hover:text-[#075DB1] transition-colors mb-2">
                    {t.solutions.card1Title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {t.solutions.card1Desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card1F1}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card1F2}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card1F3}</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectProduct('Water Conditioner / Water Softener')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#063C7C] hover:bg-[#075DB1] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <span>{t.solutions.card1Btn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Product 2: Water-Free Urinal Cartridge */}
              <div className="group glass-panel rounded-3xl border border-slate-200/90 hover:border-emerald-400 p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative mb-5">
                    <UrinalCartridgeThumb />
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0D874A] border border-emerald-200">
                      {t.solutions.card2Badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#102D53] group-hover:text-[#0D874A] transition-colors mb-2">
                    {t.solutions.card2Title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {t.solutions.card2Desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card2F1}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card2F2}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card2F3}</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectProduct('Water-Free Urinal Cartridge')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#0D874A] text-slate-800 hover:text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span>{t.solutions.card2Btn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Product 3: Heat Pump */}
              <div className="group glass-panel rounded-3xl border border-slate-200/90 hover:border-amber-400 p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative mb-5">
                    <HeatPumpThumb />
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-amber-700 border border-amber-200">
                      {t.solutions.card3Badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#102D53] group-hover:text-amber-700 transition-colors mb-2">
                    {t.solutions.card3Title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {t.solutions.card3Desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card3F1}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card3F2}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card3F3}</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectProduct('Heat Pump')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#075DB1] text-slate-800 hover:text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span>{t.solutions.card3Btn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Product 4: Solar AC */}
              <div className="group glass-panel rounded-3xl border border-slate-200/90 hover:border-sky-400 p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative mb-5">
                    <SolarACThumb />
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-sky-800 border border-sky-200">
                      {t.solutions.card4Badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#102D53] group-hover:text-[#075DB1] transition-colors mb-2">
                    {t.solutions.card4Title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {t.solutions.card4Desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card4F1}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card4F2}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{t.solutions.card4F3}</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectProduct('Solar AC')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#063C7C] text-slate-800 hover:text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span>{t.solutions.card4Btn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Distinct AQANO & MOLLISAQUA Product Line Feature Card (Prompt Requirement) */}
            <div className="mt-12 glass-card-aqua rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#075DB1] text-xs font-extrabold border border-sky-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#06A9E0]" />
                  <span>{t.solutions.aqanoSubtitle}</span>
                </div>
                <h4 className="text-xl font-bold text-[#102D53]">
                  {t.solutions.aqanoTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                  {t.solutions.aqanoDesc}
                </p>
              </div>

              <button
                onClick={() => handleSelectProduct('AQANO Water Conditioner')}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-sky-100 text-[#075DB1] border border-sky-300 font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                <span>{isGu ? 'અકાનો સિસ્ટમ્સ વિગતો' : 'Enquire About AQANO'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 4: Featured MOLLISAQUA Technology Showcase */}
        <section id="technology" className="py-20 bg-gradient-to-b from-white via-sky-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Large Realistic Product Presentation */}
              <div className="lg:col-span-5">
                <div className="sticky top-28">
                  <WaterConditionerVisual lang={lang} showInteractiveToggle={true} />
                </div>
              </div>

              {/* Right Side: Features, Benefits & Engineering Detail */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3.5 py-1 rounded-full">
                    {t.mollisaqua.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D53] tracking-tight mt-3">
                    {t.mollisaqua.heading}
                  </h2>
                  <div className="text-base sm:text-lg font-bold text-[#075DB1] mt-1">
                    {t.mollisaqua.subheading}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {t.mollisaqua.desc1}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.mollisaqua.desc2}
                </p>

                {/* 6 Benefit Cards with Line Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  {/* B1 */}
                  <div className="p-4 rounded-2xl glass-panel border border-slate-200/90 shadow-xs hover:border-sky-300 transition-all">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#075DB1]">
                        <ZapOff className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-[#102D53] text-sm">
                        {t.mollisaqua.b1Title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.mollisaqua.b1Desc}
                    </p>
                  </div>

                  {/* B2 */}
                  <div className="p-4 rounded-2xl glass-panel border border-slate-200/90 shadow-xs hover:border-sky-300 transition-all">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-[#0D874A]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-[#102D53] text-sm">
                        {t.mollisaqua.b2Title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.mollisaqua.b2Desc}
                    </p>
                  </div>

                  {/* B3 */}
                  <div className="p-4 rounded-2xl glass-panel border border-slate-200/90 shadow-xs hover:border-sky-300 transition-all">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-[#06A9E0]">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-[#102D53] text-sm">
                        {t.mollisaqua.b3Title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.mollisaqua.b3Desc}
                    </p>
                  </div>

                  {/* B4 */}
                  <div className="p-4 rounded-2xl glass-panel border border-slate-200/90 shadow-xs hover:border-sky-300 transition-all">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#063C7C]">
                        <TrendingDown className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-[#102D53] text-sm">
                        {t.mollisaqua.b4Title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.mollisaqua.b4Desc}
                    </p>
                  </div>

                  {/* B5 */}
                  <div className="p-4 rounded-2xl glass-panel border border-slate-200/90 shadow-xs hover:border-sky-300 transition-all">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#075DB1]">
                        <Gauge className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-[#102D53] text-sm">
                        {t.mollisaqua.b5Title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.mollisaqua.b5Desc}
                    </p>
                  </div>

                  {/* B6 */}
                  <div className="p-4 rounded-2xl glass-panel border border-slate-200/90 shadow-xs hover:border-sky-300 transition-all">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-[#102D53] text-sm">
                        {t.mollisaqua.b6Title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.mollisaqua.b6Desc}
                    </p>
                  </div>

                </div>

                {/* Technical Working Principle Description with Required Disclaimer */}
                <div className="bg-sky-50/70 rounded-2xl p-5 border border-sky-200/70 space-y-2">
                  <h4 className="text-xs font-bold text-sky-950 uppercase tracking-wider">
                    {t.mollisaqua.techPrincipleTitle}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {t.mollisaqua.techPrincipleDesc}
                  </p>
                  <p className="text-[11px] text-slate-500 italic pt-1">
                    {t.mollisaqua.disclaimer}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleSelectProduct('MOLLISAQUA Water Conditioner')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#063C7C] hover:bg-[#075DB1] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    <span>{t.mollisaqua.viewSpecsBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SECTION 5: How Does Mollisaqua Work? (3-Stage Interactive Pipeline Animation) */}
        <section className="py-20 bg-white border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <PipelineSimulation lang={lang} />

            {/* Technology Comparison Table */}
            <ComparisonTable lang={lang} />

          </div>
        </section>

        {/* Interactive Hardness & Sizing Advisor */}
        <section className="py-12 bg-sky-50/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WaterAssessmentTool
              lang={lang}
              onApplyRecommendation={handleAssessmentRecommendation}
            />
          </div>
        </section>

        {/* SECTION 6: Applications & Industries (8 Areas) */}
        <section id="applications" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3.5 py-1 rounded-full">
                {t.applications.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D53] tracking-tight mt-3">
                {t.applications.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                {t.applications.subtitle}
              </p>
            </div>

            <ApplicationCards
              lang={lang}
              onSelectApplication={handleSelectApplication}
            />

          </div>
        </section>

        {/* SECTION 7: Industrial Water Conditioning */}
        <section id="industrial" className="py-20 bg-gradient-to-br from-[#063C7C] via-[#075DB1] to-[#04254e] text-white relative overflow-hidden">
          
          {/* Subtle Technical Grid Lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-cyan-300 bg-sky-900/60 border border-sky-400/30 px-3.5 py-1 rounded-full">
                    {t.industrial.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
                    {t.industrial.heading}
                  </h2>
                  <div className="text-base sm:text-lg font-semibold text-cyan-200 mt-1">
                    {t.industrial.subheading}
                  </div>
                </div>

                {/* Working Principle */}
                <div className="bg-sky-900/40 border border-sky-500/30 rounded-2xl p-5 backdrop-blur-sm space-y-2">
                  <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    {t.industrial.principleTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                    {t.industrial.principleDesc}
                  </p>
                </div>

                {/* Industrial Benefits List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    {t.industrial.benefitTitle}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      t.industrial.b1,
                      t.industrial.b2,
                      t.industrial.b3,
                      t.industrial.b4,
                      t.industrial.b5,
                      t.industrial.b6,
                    ].map((ben, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sky-100 leading-normal">{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mandatory Technical Note */}
                <div className="flex items-start gap-2 text-xs text-sky-200/80 bg-sky-950/60 p-3.5 rounded-xl border border-sky-800">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="italic">{t.industrial.note}</p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleSelectProduct('Industrial Consultation')}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
                  >
                    <span>{t.industrial.ctaBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Side: Technical Graphic Representation */}
              <div className="lg:col-span-5">
                <div className="bg-sky-950/70 border border-sky-500/30 rounded-3xl p-6 backdrop-blur-md shadow-2xl space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-sky-800">
                    <span className="text-xs font-mono text-cyan-300">PARAM INDUSTRIAL PIPING</span>
                    <span className="text-[10px] bg-emerald-900/80 text-emerald-300 px-2.5 py-0.5 rounded-full font-mono">ACTIVE PROTOCOL</span>
                  </div>

                  {/* Industrial Piping Graphic */}
                  <svg viewBox="0 0 320 180" className="w-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="indPipe" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#94a3b8" />
                        <stop offset="50%" stopColor="#e2e8f0" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>
                    </defs>
                    {/* Header Pipeline */}
                    <rect x="20" y="60" width="280" height="40" rx="4" fill="url(#indPipe)" stroke="#334155" />
                    {/* Flanged Conditioners inline */}
                    <rect x="80" y="45" width="160" height="70" rx="8" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
                    <rect x="70" y="40" width="10" height="80" rx="2" fill="#cbd5e1" stroke="#334155" />
                    <rect x="240" y="40" width="10" height="80" rx="2" fill="#cbd5e1" stroke="#334155" />
                    
                    {/* Text on industrial unit */}
                    <text x="160" y="80" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                      INDUSTRIAL MOLLISAQUA
                    </text>
                    <text x="160" y="95" fill="#7dd3fc" fontSize="8" textAnchor="middle">
                      FLANGED ALLOY CORE
                    </text>

                    {/* Flow arrow */}
                    <path d="M120,135 L200,135 M190,130 L200,135 L190,140" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                    <text x="160" y="150" fill="#7dd3fc" fontSize="9" textAnchor="middle">INDUSTRIAL CONTINUOUS FLOW</text>
                  </svg>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-sky-900/50 p-3 rounded-xl border border-sky-700/50">
                      <span className="text-[10px] text-sky-300 block uppercase">Flange Diameter</span>
                      <span className="font-bold text-white text-sm">2" to 8"+ DN</span>
                    </div>
                    <div className="bg-sky-900/50 p-3 rounded-xl border border-sky-700/50">
                      <span className="text-[10px] text-sky-300 block uppercase">Operating Power</span>
                      <span className="font-bold text-emerald-300 text-sm">0 kW / Passive</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-sky-200/70 text-center">
                    {isGu
                      ? 'અમદાવાદ અને સમગ્ર ગુજરાતમાં ફેક્ટરી સાઇટ્સ માટે ઉપલબ્ધ'
                      : 'On-site technical evaluation available across Ahmedabad & Gujarat'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 8: About Param Industries */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Company Story & Values (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3.5 py-1 rounded-full">
                    {t.about.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D53] tracking-tight mt-3">
                    {t.about.heading}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {t.about.p1}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.about.p2}
                </p>

                {/* Manufacturer Experience Clear Clarification (Prompt Requirement) */}
                <div className="glass-panel border border-slate-200 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#063C7C] uppercase tracking-wider">
                    <Globe2 className="w-4 h-4 text-[#075DB1]" />
                    <span>{t.about.mollisaquaTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.about.mollisaquaText}
                  </p>
                </div>

                {/* 3 Core Operating Principles */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.about.coreValuesTitle}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-100">
                      <span className="font-bold text-sky-950 text-xs block mb-1">
                        {t.about.v1Title}
                      </span>
                      <span className="text-[11px] text-slate-600 leading-tight block">
                        {t.about.v1Desc}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <span className="font-bold text-emerald-950 text-xs block mb-1">
                        {t.about.v2Title}
                      </span>
                      <span className="text-[11px] text-slate-600 leading-tight block">
                        {t.about.v2Desc}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                      <span className="font-bold text-blue-950 text-xs block mb-1">
                        {t.about.v3Title}
                      </span>
                      <span className="text-[11px] text-slate-600 leading-tight block">
                        {t.about.v3Desc}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Verified Office Location & Contact Person Card (5 cols) */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-slate-900 to-[#072d59] rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                    <span className="text-xs font-semibold text-cyan-300">
                      {isGu ? 'અમદાવાદ હેડક્વાર્ટર & લાઈવ ડેમો' : 'Ahmedabad Base & Live Demo'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">GUJARAT • INDIA</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-cyan-300 uppercase">
                          {t.about.locationTitle}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed mt-1">
                          {t.about.locationText}
                        </p>
                        <address className="not-italic text-xs font-mono text-slate-400 mt-2 block">
                          A/1501, Riviera Springs Skycity,<br />
                          Club 07 Road, Shela,<br />
                          Ahmedabad – 380058, Gujarat, India.
                        </address>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Contact Person</span>
                        <span className="font-bold text-white text-sm">Mukeshbhai Thakkar</span>
                      </div>
                      <a
                        href="tel:+917984515685"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Riviera+Springs+Skycity+Club+07+Road+Shela+Ahmedabad+380058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20"
                  >
                    <span>{isGu ? 'ગૂગલ મેપ્સ પર લોકેશન જુઓ' : 'View Location on Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 9: Frequently Asked Questions (Accordion) */}
        <section id="faqs" className="py-20 bg-slate-50 border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3.5 py-1 rounded-full">
                {t.faqs.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D53] tracking-tight mt-3">
                {t.faqs.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                {t.faqs.subtitle}
              </p>
            </div>

            <FAQAccordion lang={lang} />

          </div>
        </section>

        {/* SECTION 10: Premium Contact / Lead Generation */}
        <section id="contact" className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3.5 py-1 rounded-full">
                {t.contact.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D53] tracking-tight mt-3">
                {t.contact.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                {t.contact.subheading}
              </p>
            </div>

            <ContactSection
              lang={lang}
              preselectedProduct={selectedProductForContact}
              preselectedApplication={selectedAppForContact}
            />

          </div>
        </section>

      </main>

      {/* SECTION 11: Deep Navy Blue Corporate Footer */}
      <footer className="bg-[#063C7C] text-white pt-16 pb-8 border-t border-sky-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky-800/80">
            
            {/* Col 1: Brand & Positioning (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#075DB1] to-[#06A9E0] flex items-center justify-center text-white shadow-md">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <span className="font-extrabold text-lg tracking-tight text-white">
                  PARAM INDUSTRIES
                </span>
              </div>

              <p className="text-xs text-sky-200/90 leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>

              <div className="text-xs text-sky-300/80 space-y-1">
                <div>{isGu ? 'સંપર્ક વ્યક્તિ: મુકેશભાઈ ઠક્કર' : 'Contact Person: Mukeshbhai Thakkar'}</div>
                <div>{isGu ? 'લાઈવ ડેમો: શીલા, અમદાવાદ, ગુજરાત' : 'Live Demo: Shela, Ahmedabad, Gujarat, India'}</div>
              </div>
            </div>

            {/* Col 2: Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-xs text-sky-200/80">
                <li><a href="#home" className="hover:text-white transition-colors">{t.nav.home}</a></li>
                <li><a href="#healthy-life" className="hover:text-white transition-colors">{t.nav.healthyLife}</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">{t.nav.solutions}</a></li>
                <li><a href="#technology" className="hover:text-white transition-colors">{t.nav.technology}</a></li>
                <li><a href="#applications" className="hover:text-white transition-colors">{t.nav.applications}</a></li>
                <li><a href="#industrial" className="hover:text-white transition-colors">{t.nav.industrial}</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">{t.nav.faqs}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>

            {/* Col 3: Product Categories (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                {t.footer.productsTitle}
              </h4>
              <ul className="space-y-2 text-xs text-sky-200/80">
                <li><a href="#solutions" className="hover:text-white transition-colors">MOLLISAQUA Water Conditioner</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">AQANO Water Conditioner Range</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Water-Free Urinal Cartridge</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Energy-Efficient Heat Pump</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Solar AC Solutions</a></li>
                <li><a href="#industrial" className="hover:text-white transition-colors">Industrial Scale Conditioning</a></li>
              </ul>
            </div>

            {/* Col 4: Contact & Phone Direct (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                {t.footer.contactTitle}
              </h4>
              <div className="space-y-2 text-xs">
                <a
                  href="tel:+917984515685"
                  className="inline-flex items-center gap-1.5 font-bold text-emerald-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 7984515685</span>
                </a>
                <p className="text-sky-300/80 text-[11px] leading-relaxed">
                  Shela, Ahmedabad – 380058, Gujarat, India.
                </p>
              </div>
            </div>

          </div>

          {/* Legal / Copyright Bottom Line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sky-300/70">
            <div>{t.footer.rights}</div>
            <div className="max-w-xl text-center sm:text-right text-[10px] leading-tight text-sky-300/60">
              {t.footer.disclaimer}
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Sticky WhatsApp & Scroll Widget */}
      <FloatingWidgets lang={lang} />

    </div>
  );
}

export default App;
