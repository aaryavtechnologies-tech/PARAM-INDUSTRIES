import React, { useState, useEffect } from 'react';
import { translations, type Language } from '../translations';
import {
  Menu,
  X,
  Phone,
  Globe,
  Droplets,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface Props {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

export const Navbar: React.FC<Props> = ({ lang, onLanguageChange, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const t = translations[lang].nav;
  const isGu = lang === 'gu';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.home, id: 'home' },
    { href: '#healthy-life', label: t.healthyLife, id: 'healthy-life', highlight: true },
    { href: '#reels', label: t.reels, id: 'reels', highlight: true },
    { href: '#solutions', label: t.solutions, id: 'solutions' },
    { href: '#technology', label: t.technology, id: 'technology' },
    { href: '#applications', label: t.applications, id: 'applications' },
    { href: '#industrial', label: t.industrial, id: 'industrial' },
    { href: '#about', label: t.about, id: 'about' },
    { href: '#faqs', label: t.faqs, id: 'faqs' },
    { href: '#contact', label: t.contact, id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-md py-2.5 border-b border-sky-100/80'
          : 'bg-white/70 backdrop-blur-lg py-3.5 border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-[#063C7C] via-[#075DB1] to-[#06A9E0] flex items-center justify-center text-white shadow-md shadow-sky-900/20 group-hover:scale-105 transition-transform border border-white/40">
              <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-lg tracking-tight text-[#063C7C] group-hover:text-[#075DB1] transition-colors leading-none">
                  PARAM INDUSTRIES
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#06A9E0] tracking-wider uppercase mt-1">
                {isGu ? 'શુદ્ધ પાણી... સ્વસ્થ જીવન...' : 'Clean Water... Healthy Life...'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-sky-200/60 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-200 flex items-center gap-1 ${
                    isActive
                      ? 'bg-[#063C7C] text-white shadow-xs'
                      : link.highlight
                      ? 'text-[#075DB1] hover:text-[#063C7C] hover:bg-sky-50 font-extrabold'
                      : 'text-slate-700 hover:text-[#075DB1] hover:bg-white'
                  }`}
                >
                  {link.highlight && <Sparkles className="w-3 h-3 text-cyan-500" />}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Switcher + Call CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Button */}
            <div className="flex items-center p-0.5 rounded-full bg-slate-100/90 backdrop-blur-sm border border-slate-200">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-extrabold rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-[#063C7C] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('gu')}
                className={`px-2.5 py-1 text-xs font-extrabold rounded-full transition-all cursor-pointer ${
                  lang === 'gu'
                    ? 'bg-[#063C7C] text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="ગુજરાતીમાં જુઓ"
              >
                ગુજરાતી
              </button>
            </div>

            {/* Quick Consultation CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#063C7C] hover:bg-[#075DB1] text-white text-xs font-bold shadow-md shadow-blue-900/15 hover:shadow-lg transition-all"
            >
              <span>{t.getQuote}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Language pill + Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onLanguageChange(lang === 'en' ? 'gu' : 'en')}
              className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-sky-50 text-[#063C7C] border border-sky-200 flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-[#06A9E0]" />
              <span>{lang === 'en' ? 'ગુજરાતી' : 'English'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 text-sm font-bold border-b border-slate-50 ${
                  link.highlight ? 'text-[#075DB1]' : 'text-slate-800 hover:text-[#075DB1]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.highlight && <Sparkles className="w-3.5 h-3.5 text-cyan-500" />}
                  {link.label}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="tel:+917984515685"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>+91 7984515685 ({isGu ? 'મુકેશભાઈ ઠક્કર' : 'Mukeshbhai'})</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#063C7C] text-white text-xs font-bold shadow-md"
            >
              <span>{t.getQuote}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
