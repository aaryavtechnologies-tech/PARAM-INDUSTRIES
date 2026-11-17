import React, { useState, useRef, useEffect, useCallback } from 'react';
import { translations, type Language } from '../translations';
import {
  Play,
  Volume2,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Camera,
  Film,
  ShieldCheck,
} from 'lucide-react';

interface Props {
  lang: Language;
  onConsultClick: () => void;
  activeSection?: string;
}

interface ReelItem {
  id: number;
  src: string;
  thumb: string;
  titleEn: string;
  titleGu: string;
  descEn: string;
  descGu: string;
  tagEn: string;
  tagGu: string;
  locationEn: string;
  locationGu: string;
  duration: string;
}

interface PhotoItem {
  id: number;
  src: string;
  titleEn: string;
  titleGu: string;
  descEn: string;
  descGu: string;
  tagEn: string;
  tagGu: string;
}

export const LiveReelsSection: React.FC<Props> = ({ lang, activeSection }) => {
  const t = translations[lang].reels;
  const isGu = lang === 'gu';

  const [activeTab, setActiveTab] = useState<'reels' | 'photos'>('reels');
  // Currently active reel that is playing with full audio (defaults to Reel 1)
  const [activeAudioReelId, setActiveAudioReelId] = useState<number>(1);
  
  // Track playback states for videos
  const [playingStates, setPlayingStates] = useState<Record<number, boolean>>({});

  const [activeModalReel, setActiveModalReel] = useState<ReelItem | null>(null);
  const [modalPlaying, setModalPlaying] = useState<boolean>(true);

  // References to section, video elements & reel card wrappers
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const reels: ReelItem[] = [
    {
      id: 1,
      src: './videos/param-reel-demo-1.mp4',
      thumb: './videos/param-reel-thumb-1.jpg',
      titleEn: 'Main Supply Pipeline Inline Fitment',
      titleGu: 'મુખ્ય સપ્લાય પાઈપલાઈન પર ઈનલાઈન ફિટિંગ',
      descEn: 'Direct inline water conditioner fitment on main supply line in Ahmedabad society.',
      descGu: 'અમદાવાદની સોસાયટીમાં મુખ્ય વોટર લાઇન પર મોલિસાક્વા કન્ડિશનરનું સીધું ફિટિંગ.',
      tagEn: 'Bungalow & Society',
      tagGu: 'સોસાયટી અને બંગલો',
      locationEn: 'Shela, Ahmedabad',
      locationGu: 'શીલા, અમદાવાદ',
      duration: '22s',
    },
    {
      id: 2,
      src: './videos/param-reel-demo-2.mp4',
      thumb: './videos/param-reel-thumb-2.jpg',
      titleEn: 'Instant Hardness & High-Flow Testing',
      titleGu: 'પાણીના ફ્લો અને ક્વોલિટીનું લાઈવ ટેસ્ટિંગ',
      descEn: 'Demonstrating smooth uninterrupted water flow through the catalytic chamber.',
      descGu: 'કેટાલિટિક ચેમ્બરમાંથી ઝીરો પ્રેશર ડ્રોપ સાથે પસાર થતા પાણીનું જીવંત નિરીક્ષણ.',
      tagEn: 'Flow Test',
      tagGu: 'ફ્લો ટેસ્ટ',
      locationEn: 'Bopal, Ahmedabad',
      locationGu: 'બોપલ, અમદાવાદ',
      duration: '15s',
    },
    {
      id: 3,
      src: './videos/param-reel-demo-3.mp4',
      thumb: './videos/param-reel-thumb-3.jpg',
      titleEn: 'Borewell Heavy Mineral Conditioning',
      titleGu: 'બોરવેલ પાણી માટે સ્પેશિયલ કન્ડિશનર સેટઅપ',
      descEn: 'Tackling heavy dissolved calcium and magnesium scaling straight from the bore pump.',
      descGu: 'જમીનમાંથી આવતા ભારે ક્ષાર વાળા બોરવેલ પાણીનું તાત્કાલિક કન્ડિશનિંગ.',
      tagEn: 'Borewell Pump',
      tagGu: 'બોરવેલ પંપ',
      locationEn: 'Sanand Road, Ahmedabad',
      locationGu: 'સાણંદ રોડ, અમદાવાદ',
      duration: '21s',
    },
    {
      id: 4,
      src: './videos/param-reel-demo-4.mp4',
      thumb: './videos/param-reel-thumb-4.jpg',
      titleEn: 'Society Common Borewell Plant',
      titleGu: 'સોસાયટી કોમન બોરવેલ પ્લાન્ટ ઇન્સ્ટોલેશન',
      descEn: 'Heavy-duty water conditioning system protecting hundreds of residential flats.',
      descGu: 'સોસાયટીના તમામ ફ્લેટ્સ માટે કોમન બોરવેલ લાઈન પર હેવી-ડ્યુટી સિસ્ટમ.',
      tagEn: 'Apartment Complex',
      tagGu: 'રેસિડેન્શિયલ ફ્લેટ્સ',
      locationEn: 'SG Highway, Ahmedabad',
      locationGu: 'એસ.જી. હાઈવે, અમદાવાદ',
      duration: '56s',
    },
    {
      id: 5,
      src: './videos/param-reel-demo-5.mp4',
      thumb: './videos/param-reel-thumb-5.jpg',
      titleEn: 'Complete Technical Site Walkthrough',
      titleGu: 'સાઈટ પર ટેકનિકલ સમજૂતી અને વિગતવાર ડેમો',
      descEn: 'Mukeshbhai Thakkar demonstrates fit & forget zero-maintenance operation.',
      descGu: 'મુકેશભાઈ ઠક્કર દ્વારા આજીવન મેન્ટેનન્સ-મુક્ત સિસ્ટમની સંપૂર્ણ માહિતી.',
      tagEn: 'Expert Walkthrough',
      tagGu: 'ટેકનિકલ ડેમો',
      locationEn: 'Riviera Springs, Ahmedabad',
      locationGu: 'રિવેરા સ્પ્રિંગ્સ, અમદાવાદ',
      duration: '4m 22s',
    },
    {
      id: 6,
      src: './videos/param-reel-demo-6.mp4',
      thumb: './videos/param-reel-thumb-6.jpg',
      titleEn: 'Geyser & Pipe Limescale Defense',
      titleGu: 'ગીઝર, નળ અને પાઈપમાં ક્ષાર અટકાવવાનું પ્રૂફ',
      descEn: 'Protecting bathroom fixtures, solar heaters, and plumbing from white crust.',
      descGu: 'બાથરૂમ નળ, શાવર અને ગીઝરને સફેદ ક્ષારથી મુક્ત રાખવાનો લાઈવ ડેમો.',
      tagEn: 'Scale Defense',
      tagGu: 'ક્ષાર મુક્તિ',
      locationEn: 'Science City, Ahmedabad',
      locationGu: 'સાયન્સ સિટી, અમદાવાદ',
      duration: '1m 20s',
    },
    {
      id: 7,
      src: './videos/param-reel-demo-7.mp4',
      thumb: './videos/param-reel-thumb-7.jpg',
      titleEn: 'Overhead Tank Connection & Bypass',
      titleGu: 'ઓવરહેડ ટાંકી કનેક્શન અને બાયપાસ વાલ્વ સેટઅપ',
      descEn: 'Robust plumbing architecture ensuring seamless water circulation.',
      descGu: 'સરળ બાયપાસ વાલ્વ સાથે મજબૂત સ્ટેઈનલેસ સ્ટીલ પ્લમ્બિંગ જોડાણ.',
      tagEn: 'Plumbing Setup',
      tagGu: 'પ્લમ્બિંગ સેટઅપ',
      locationEn: 'Thaltej, Ahmedabad',
      locationGu: 'થલતેજ, અમદાવાદ',
      duration: '43s',
    },
    {
      id: 8,
      src: './videos/param-reel-demo-8.mp4',
      thumb: './videos/param-reel-thumb-8.jpg',
      titleEn: 'Silky Soft Conditioned Water Output',
      titleGu: 'શુદ્ધ કન્ડિશન્ડ સોફ્ટ વોટર આઉટપુટ ડેમો',
      descEn: 'Soft, lather-rich water ready for healthy skin, hair protection, and appliances.',
      descGu: 'વાળ અને ત્વચા માટે સુરક્ષિત મુલાયમ પાણીનું વાસ્તવિક પરિણામ.',
      tagEn: 'Clean Water',
      tagGu: 'શુદ્ધ મુલાયમ પાણી',
      locationEn: 'Prahlad Nagar, Ahmedabad',
      locationGu: 'પ્રહલાદ નગર, અમદાવાદ',
      duration: '12s',
    },
  ];

  const photos: PhotoItem[] = [
    {
      id: 1,
      src: './images/param-site-installation-1.jpg',
      titleEn: 'Society Pump Station Heavy Delivery Unit',
      titleGu: 'સોસાયટી પંપ સ્ટેશન હેવી ડિલિવરી યુનિટ',
      descEn: 'Commercial inline water conditioner mounted directly onto high-pressure delivery manifold.',
      descGu: 'હાઈ-પ્રેશર ડિલિવરી મેનિફોલ્ડ પર સીધું ઇન્સ્ટોલ કરેલું કોમર્શિયલ વોટર કન્ડિશનર.',
      tagEn: 'Society Common Pump',
      tagGu: 'સોસાયટી કોમન પંપ',
    },
    {
      id: 2,
      src: './images/param-site-installation-2.jpg',
      titleEn: 'Borewell Continuous Catalytic Conditioner',
      titleGu: 'બોરવેલ સતત કેટાલિટિક કન્ડિશનર',
      descEn: 'Zero-maintenance metallic conditioner installed to neutralize scaling before storage tanks.',
      descGu: 'સ્ટોરેજ ટાંકી પહેલાં ક્ષારને તટસ્થ કરવા માટે લગાવેલ ઝીરો-મેન્ટેનન્સ યુનિટ.',
      tagEn: 'Borewell Line',
      tagGu: 'બોરવેલ લાઈન',
    },
    {
      id: 3,
      src: './images/param-site-installation-3.jpg',
      titleEn: 'Bungalow Overhead Tank Bypass Connection',
      titleGu: 'બંગલાની ઓવરહેડ ટાંકી બાયપાસ કનેક્શન',
      descEn: 'Compact inline unit delivering conditioned water to all bathrooms and kitchen lines.',
      descGu: 'ઘરના તમામ બાથરૂમ, કિચન અને ગીઝર માટે કન્ડિશન્ડ વોટર સપ્લાય.',
      tagEn: 'Bungalow Overhead',
      tagGu: 'બંગલો ઓવરહેડ',
    },
    {
      id: 4,
      src: './images/param-site-installation-4.jpg',
      titleEn: 'Industrial & Commercial Machinery Setup',
      titleGu: 'ઔદ્યોગિક અને કોમર્શિયલ મશીનરી સેટઅપ',
      descEn: 'Safeguarding cooling towers, boilers, and heat pumps from efficiency-robbing scale.',
      descGu: 'કૂલિંગ ટાવર, બોઈલર અને હીટ પંપ માટે આજીવન ક્ષાર સંરક્ષણ.',
      tagEn: 'Commercial Facility',
      tagGu: 'કોમર્શિયલ ફેસિલિટી',
    },
  ];

  // Stop and mute ALL reels (ensures ZERO background playback when user is on home page or other sections)
  const pauseAndMuteAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) {
        vid.pause();
        vid.muted = true;
      }
    });
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.muted = true;
    }
    setPlayingStates({});
  }, []);

  // Resume playback and route live audio ONLY for reels currently visible inside the viewport
  const resumeVisibleReels = useCallback((targetAudioId?: number) => {
    const section = sectionRef.current || document.getElementById('reels');
    if (!section) return;

    const sRect = section.getBoundingClientRect();
    const isSectionVisible = sRect.bottom > 80 && sRect.top < window.innerHeight - 80;
    if (!isSectionVisible) {
      pauseAndMuteAllVideos();
      return;
    }

    const audioId = targetAudioId ?? activeAudioReelId;
    let closestId = audioId;
    let minDistance = Infinity;
    const viewportCenter = window.innerHeight / 2;

    Object.entries(cardRefs.current).forEach(([k, card]) => {
      const vidId = Number(k);
      const vid = videoRefs.current[vidId];
      if (card && vid) {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(viewportCenter - cardCenter);
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          if (dist < minDistance) {
            minDistance = dist;
            closestId = vidId;
          }
          vid.play().catch(() => {});
          setPlayingStates((prev) => ({ ...prev, [vidId]: true }));
        } else {
          vid.pause();
          vid.muted = true;
          setPlayingStates((prev) => ({ ...prev, [vidId]: false }));
        }
      }
    });

    if (closestId) {
      setActiveAudioReelId(closestId);
      Object.entries(videoRefs.current).forEach(([k, vid]) => {
        const vidId = Number(k);
        if (vid) {
          if (vidId === closestId) {
            vid.muted = false;
            vid.volume = 1.0;
          } else {
            vid.muted = true;
          }
        }
      });
    }
  }, [activeAudioReelId, pauseAndMuteAllVideos]);

  // Play a specific reel with audio while keeping visible reels playing
  const playReelWithAudio = useCallback((id: number) => {
    const section = sectionRef.current || document.getElementById('reels');
    if (section) {
      const rect = section.getBoundingClientRect();
      const inView = rect.bottom > 80 && rect.top < window.innerHeight - 80;
      if (!inView) {
        pauseAndMuteAllVideos();
        return;
      }
    }

    setActiveAudioReelId(id);

    Object.entries(videoRefs.current).forEach(([k, vid]) => {
      const vidId = Number(k);
      if (vid) {
        if (vidId === id) {
          vid.muted = false;
          vid.volume = 1.0;
        } else {
          vid.muted = true;
        }
        vid.play().catch(() => {});
        setPlayingStates((prev) => ({ ...prev, [vidId]: true }));
      }
    });
  }, [pauseAndMuteAllVideos]);

  // Toggle play/pause for a specific reel
  const togglePlay = (id: number) => {
    const vid = videoRefs.current[id];
    if (vid) {
      if (vid.paused) {
        playReelWithAudio(id);
      } else {
        vid.pause();
        vid.muted = true;
        setPlayingStates((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  // Open full modal for a reel with automatic audio
  const openModal = (reel: ReelItem) => {
    // Pause background reels while modal is open
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) vid.pause();
    });
    setActiveModalReel(reel);
    setModalPlaying(true);
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.muted = true;
    }
    setActiveModalReel(null);

    const section = sectionRef.current || document.getElementById('reels');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.bottom > 80 && rect.top < window.innerHeight - 80) {
        resumeVisibleReels(activeAudioReelId);
      } else {
        pauseAndMuteAllVideos();
      }
    }
  };

  const nextModalReel = () => {
    if (!activeModalReel) return;
    const currentIndex = reels.findIndex((r) => r.id === activeModalReel.id);
    const nextIndex = (currentIndex + 1) % reels.length;
    setActiveModalReel(reels[nextIndex]);
    setModalPlaying(true);
  };

  const prevModalReel = () => {
    if (!activeModalReel) return;
    const currentIndex = reels.findIndex((r) => r.id === activeModalReel.id);
    const prevIndex = (currentIndex - 1 + reels.length) % reels.length;
    setActiveModalReel(reels[prevIndex]);
    setModalPlaying(true);
  };

  // =========================================================================
  // EFFECT 1: Immediate pause when activeSection is NOT 'reels' (e.g. user on Home page)
  // =========================================================================
  useEffect(() => {
    if (activeSection && activeSection !== 'reels') {
      // User navigated to another section (e.g. 'home', 'healthy-life', 'solutions') -> PAUSE ALL!
      pauseAndMuteAllVideos();
    } else if (activeSection === 'reels' && activeTab === 'reels') {
      resumeVisibleReels();
    }
  }, [activeSection, activeTab, pauseAndMuteAllVideos, resumeVisibleReels]);

  // =========================================================================
  // EFFECT 2: Viewport Intersection Observer & Continuous Scroll Engine
  // =========================================================================
  useEffect(() => {
    if (activeTab !== 'reels') {
      pauseAndMuteAllVideos();
      return;
    }

    const sectionEl = sectionRef.current || document.getElementById('reels');
    if (!sectionEl) return;

    const checkSectionInView = () => {
      const rect = sectionEl.getBoundingClientRect();
      return rect.bottom > 80 && rect.top < window.innerHeight - 80;
    };

    // On mount or tab switch, if user is not in the reels section (e.g. at the top on Home page), ensure paused
    if (!checkSectionInView()) {
      pauseAndMuteAllVideos();
    } else {
      resumeVisibleReels();
    }

    // A. Section-level observer: triggers immediately when scrolling away from reels
    let sectionObserver: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const inView = entry.isIntersecting && entry.intersectionRatio > 0;
          if (!inView) {
            // User scrolled away from reels (e.g. back to home page) -> PAUSE & MUTE ALL!
            pauseAndMuteAllVideos();
          } else {
            resumeVisibleReels();
          }
        },
        { threshold: [0, 0.05, 0.2] }
      );
      sectionObserver.observe(sectionEl);
    }

    // B. Scroll / Resize / HashChange Handler
    const handleScrollOrNav = () => {
      const inView = checkSectionInView();
      if (!inView) {
        pauseAndMuteAllVideos();
        return;
      }
      resumeVisibleReels();
    };

    // C. Page visibility handler (tab switch, browser minimize)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAndMuteAllVideos();
      } else if (checkSectionInView()) {
        resumeVisibleReels();
      }
    };

    window.addEventListener('scroll', handleScrollOrNav, { passive: true });
    window.addEventListener('wheel', handleScrollOrNav, { passive: true });
    window.addEventListener('touchmove', handleScrollOrNav, { passive: true });
    window.addEventListener('hashchange', handleScrollOrNav, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (sectionObserver) sectionObserver.disconnect();
      window.removeEventListener('scroll', handleScrollOrNav);
      window.removeEventListener('wheel', handleScrollOrNav);
      window.removeEventListener('touchmove', handleScrollOrNav);
      window.removeEventListener('hashchange', handleScrollOrNav);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      pauseAndMuteAllVideos();
    };
  }, [activeTab, pauseAndMuteAllVideos, resumeVisibleReels]);

  // When modal reel changes, play modal with full audio automatically
  useEffect(() => {
    if (activeModalReel && modalVideoRef.current) {
      modalVideoRef.current.muted = false;
      modalVideoRef.current.volume = 1.0;
      modalVideoRef.current.play().then(() => {
        setModalPlaying(true);
      }).catch(() => {
        modalVideoRef.current?.play().catch(() => {});
      });
    }
  }, [activeModalReel]);

  return (
    <section id="reels" ref={sectionRef} className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/50 to-white">
      {/* Background Motifs */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-blue-200/35 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-200 shadow-sm text-xs font-black text-[#075DB1] uppercase tracking-wider mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102D53] tracking-tight">
            {t.heading}
          </h2>

          <div className="text-base sm:text-lg font-extrabold text-[#075DB1] mt-2">
            {t.tagline}
          </div>

          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Tab Switcher: Video Reels vs Site Photos */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('reels')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer shadow-sm ${
              activeTab === 'reels'
                ? 'bg-[#063C7C] text-white shadow-md shadow-blue-900/20 scale-105'
                : 'glass-panel text-slate-700 hover:text-[#063C7C] border border-slate-200'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>{t.tabAll}</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-cyan-400 text-slate-900 font-black">
              8
            </span>
          </button>

          <button
            onClick={() => setActiveTab('photos')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer shadow-sm ${
              activeTab === 'photos'
                ? 'bg-[#063C7C] text-white shadow-md shadow-blue-900/20 scale-105'
                : 'glass-panel text-slate-700 hover:text-[#063C7C] border border-slate-200'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>{t.tabPhotos}</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-400 text-slate-900 font-black">
              4
            </span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: ALL 8 VERTICAL REELS AUTOPLAYING ON SCROLL         */}
        {/* ========================================================= */}
        {activeTab === 'reels' && (
          <div>
            {/* Live Audio Status Strip */}
            <div className="mb-6 p-3 rounded-2xl glass-panel border border-emerald-200 flex items-center justify-between text-xs text-slate-700 max-w-2xl mx-auto shadow-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Volume2 className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
                </div>
                <span className="font-extrabold text-emerald-800">{t.audioPlaying}</span>
                <span className="text-slate-500 text-[11px] hidden sm:inline">
                  • {isGu ? 'સ્ક્રોલ કરતાંની સાથે જ તમામ વિડીયો લાઈવ સાઉન્ડ સાથે ઓટોપ્લે થશે' : 'All videos autoplay with live sound as you scroll'}
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#075DB1]">
                {t.liveProofPill}
              </span>
            </div>

            {/* Reels Grid: ALL 8 VIDEOS RUN AUTOPLAY SIMULTANEOUSLY ON SCROLL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reels.map((reel) => {
                const isCurrentActive = activeAudioReelId === reel.id;
                const isPlaying = playingStates[reel.id] ?? true;

                return (
                  <div
                    key={reel.id}
                    ref={(el) => {
                      cardRefs.current[reel.id] = el;
                    }}
                    data-reel-id={reel.id}
                    onClick={() => playReelWithAudio(reel.id)}
                    onMouseEnter={() => playReelWithAudio(reel.id)}
                    className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-slate-950 flex flex-col aspect-[9/16] cursor-pointer ${
                      isCurrentActive
                        ? 'border-4 border-cyan-400 ring-4 ring-cyan-400/20 shadow-cyan-900/30 scale-[1.01]'
                        : 'border-2 border-white/80 hover:border-cyan-300'
                    }`}
                  >
                    {/* Native Video Element with Controlled Viewport Autoplay */}
                    <video
                      ref={(el) => {
                        videoRefs.current[reel.id] = el;
                      }}
                      src={reel.src}
                      poster={reel.thumb}
                      autoPlay={false}
                      loop={true}
                      playsInline={true}
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlays for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/50 pointer-events-none" />

                    {/* Top Bar: LIVE Indicator + Audio Active Indicator + Fullscreen Icon */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        <span>REEL #{reel.id}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {/* Live Sound Playing Indicator */}
                        {isCurrentActive && isPlaying && (
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[10px] font-extrabold backdrop-blur-md shadow-sm animate-pulse">
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>SOUND ON</span>
                          </div>
                        )}

                        {/* Expand Modal Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(reel);
                          }}
                          title={t.watchFull}
                          className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-[#075DB1] text-white backdrop-blur-md flex items-center justify-center transition-all shadow-md cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-slate-300" />
                        </button>
                      </div>
                    </div>

                    {/* Play/Pause Center Indicator (Only shown if manually paused) */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlay(reel.id);
                          }}
                          className="w-14 h-14 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl cursor-pointer pointer-events-auto"
                        >
                          <Play className="w-6 h-6 text-white ml-1 fill-white" />
                        </div>
                      </div>
                    )}

                    {/* Bottom Reel Caption & Direct WhatsApp CTA */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 space-y-2">
                      {/* Tag & Duration */}
                      <div className="flex items-center justify-between text-[11px] text-cyan-300 font-bold">
                        <span className="px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-800/80">
                          {isGu ? reel.tagGu : reel.tagEn}
                        </span>
                        <span className="text-slate-300 text-[10px]">{reel.duration}</span>
                      </div>

                      {/* Title */}
                      <h4 className="text-white font-extrabold text-sm line-clamp-2 drop-shadow-md leading-tight">
                        {isGu ? reel.titleGu : reel.titleEn}
                      </h4>

                      {/* Location */}
                      <div className="flex items-center gap-1 text-[11px] text-slate-300">
                        <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{isGu ? reel.locationGu : reel.locationEn}</span>
                      </div>

                      {/* Direct WhatsApp Action Pill */}
                      <a
                        href={`https://wa.me/917984515685?text=${encodeURIComponent(
                          isGu
                            ? `નમસ્તે મુકેશભાઈ, મેં વેબસાઇટ પર આ રીલ વિડીયો જોયો: "${reel.titleGu}". મારે આ સોલ્યુશન વિશે વધુ માહિતી જોઈએ છે.`
                            : `Hello Mukeshbhai, I watched this site reel video: "${reel.titleEn}". I would like to enquire about this solution for my property.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all cursor-pointer mt-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-white" />
                        <span>{isGu ? 'પૂછપરછ કરો' : 'WhatsApp Enquiry'}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: REAL SITE INSTALLATION PHOTOS                      */}
        {/* ========================================================= */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-white/90 hover:border-cyan-300 transition-all duration-300 bg-slate-900 flex flex-col min-h-[460px] sm:min-h-[500px]"
              >
                {/* Photo Element with Perfect Height and Cover */}
                <div className="relative w-full h-[340px] sm:h-[380px] overflow-hidden bg-slate-950">
                  <img
                    src={photo.src}
                    alt={isGu ? photo.titleGu : photo.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* Real Site Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600/95 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-sm flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{isGu ? 'વાસ્તવિક સાઈટ' : 'Real Site'}</span>
                  </div>

                  <span className="absolute bottom-3 left-3 text-xs font-extrabold text-cyan-300 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md border border-cyan-800">
                    {isGu ? photo.tagGu : photo.tagEn}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-4 flex-grow flex flex-col justify-between bg-slate-900 text-white">
                  <div>
                    <h4 className="font-extrabold text-sm leading-snug text-white">
                      {isGu ? photo.titleGu : photo.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {isGu ? photo.descGu : photo.descEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 mt-3 flex items-center justify-between text-[11px] text-cyan-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isGu ? 'અમદાવાદ ઇન્સ્ટોલેશન' : 'Ahmedabad Site'}</span>
                    </span>
                    <a
                      href={`https://wa.me/917984515685?text=${encodeURIComponent(
                        isGu
                          ? `નમસ્તે મુકેશભાઈ, મેં સાઈટ ફોટો જોયો: "${photo.titleGu}". મારે આ પ્રકારનું ઇન્સ્ટોલેશન કરાવવું છે.`
                          : `Hello Mukeshbhai, I saw this site installation photo: "${photo.titleEn}". I would like similar installation.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-300 underline font-bold"
                    >
                      {isGu ? 'પૂછપરછ' : 'Enquire'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Live Demo Callout Strip */}
        <div className="mt-14 glass-panel rounded-3xl p-6 sm:p-8 border border-white/90 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#075DB1]" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#075DB1]">
                {t.liveDemoLocation}
              </span>
              <h4 className="text-lg sm:text-xl font-black text-[#102D53] mt-0.5">
                {isGu
                  ? 'તમારા સ્થળે લાઈવ ડેમો અથવા વોટ્સએપ પર વિડીયો કોલ ડેમો જુઓ'
                  : 'Book a Live Physical Demonstration or Video Call Inspection'}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                A/1501, Riviera Springs Skycity, Club 07 Road, Shela, Ahmedabad – 380058.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/917984515685?text=${encodeURIComponent(
              isGu
                ? 'નમસ્તે મુકેશભાઈ, હું પરમ ઈન્ડસ્ટ્રીઝની વેબસાઇટ પરથી વિડીયો રીલ્સ જોઈને લાઈવ ડેમો બુક કરવા માંગુ છું.'
                : 'Hello Mukeshbhai, I watched your video reels and would like to book a live product demonstration in Ahmedabad.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#063C7C] hover:bg-[#075DB1] text-white font-extrabold text-xs sm:text-sm shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{isGu ? 'મુકેશભાઈ સાથે વાત કરો' : 'WhatsApp Mukeshbhai'}</span>
          </a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FULL-SCREEN REEL VIEWER MODAL (WITH FULL LIVE SOUND)      */}
      {/* ========================================================= */}
      {activeModalReel && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm sm:max-w-md h-[90vh] max-h-[820px] rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/20 flex flex-col"
          >
            {/* Modal Video Element with Full Audio Enabled (No Mute) */}
            <video
              ref={modalVideoRef}
              src={activeModalReel.src}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
              onClick={() => {
                if (modalVideoRef.current) {
                  if (modalVideoRef.current.paused) {
                    modalVideoRef.current.play();
                    setModalPlaying(true);
                  } else {
                    modalVideoRef.current.pause();
                    setModalPlaying(false);
                  }
                }
              }}
            />

            {/* Modal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/60 pointer-events-none" />

            {/* Top Modal Controls */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-black backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>PARAM REEL #{activeModalReel.id}</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Live Audio Indicator (No Mute Toggle) */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-extrabold backdrop-blur-md shadow-sm">
                  <Volume2 className="w-4 h-4 animate-bounce" />
                  <span>LIVE SOUND</span>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="w-9 h-9 rounded-full bg-slate-900/80 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Play/Pause Center Indicator */}
            {!modalPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-16 h-16 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl">
                  <Play className="w-8 h-8 text-white ml-1 fill-white" />
                </div>
              </div>
            )}

            {/* Navigation Arrows for Next / Prev Reel */}
            <button
              onClick={prevModalReel}
              title="Previous Reel"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-cyan-600 text-white flex items-center justify-center backdrop-blur-md transition-all z-20 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextModalReel}
              title="Next Reel"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-cyan-600 text-white flex items-center justify-center backdrop-blur-md transition-all z-20 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Modal Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-cyan-900/80 border border-cyan-700 text-cyan-300 text-xs font-bold">
                  {isGu ? activeModalReel.tagGu : activeModalReel.tagEn}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  {isGu ? activeModalReel.locationGu : activeModalReel.locationEn}
                </span>
              </div>

              <h3 className="text-white font-black text-lg leading-snug drop-shadow-md">
                {isGu ? activeModalReel.titleGu : activeModalReel.titleEn}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {isGu ? activeModalReel.descGu : activeModalReel.descEn}
              </p>

              {/* Direct WhatsApp Call to Action */}
              <a
                href={`https://wa.me/917984515685?text=${encodeURIComponent(
                  isGu
                    ? `નમસ્તે મુકેશભાઈ, હું આ લાઈવ રીલ જોઈ રહ્યો છું: "${activeModalReel.titleGu}". મારે આ સિસ્ટમ અંગે માહિતી અને કિંમત જાણવી છે.`
                    : `Hello Mukeshbhai, I am watching live reel: "${activeModalReel.titleEn}". I would like full details and sizing for my property.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{isGu ? 'વોટ્સએપ પર મુકેશભાઈ સાથે વાત કરો' : 'Enquire on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
