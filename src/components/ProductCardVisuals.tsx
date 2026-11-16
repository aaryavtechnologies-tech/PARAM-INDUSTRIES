import React from 'react';

export const WaterConditionerThumb: React.FC = () => (
  <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-slate-900 via-[#063C7C] to-[#041d3d] rounded-2xl overflow-hidden flex items-center justify-center p-4 shadow-inner">
    {/* Ambient Aqua Light */}
    <div className="absolute inset-0 bg-radial from-cyan-500/20 via-transparent to-transparent opacity-80" />
    
    {/* Flow Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,60 Q120,30 260,70 T500,50" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 6" />
      <path d="M0,140 Q150,170 300,120 T500,150" fill="none" stroke="#06A9E0" strokeWidth="2" strokeDasharray="6 8" />
    </svg>

    {/* Realistic Metallic Cylinder Graphic */}
    <svg viewBox="0 0 320 140" className="w-full max-w-[280px] drop-shadow-2xl">
      <defs>
        <linearGradient id="thumbMetal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="15%" stopColor="#cbd5e1" />
          <stop offset="35%" stopColor="#64748b" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="70%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="thumbReflect" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Pipe Ends */}
      <rect x="20" y="55" width="25" height="30" rx="3" fill="url(#thumbMetal)" stroke="#334155" />
      <rect x="42" y="45" width="14" height="50" rx="3" fill="url(#thumbMetal)" stroke="#334155" />
      
      {/* Main Polished Body */}
      <rect x="56" y="42" width="208" height="56" rx="8" fill="url(#thumbMetal)" stroke="#1e293b" strokeWidth="1.2" />
      <rect x="56" y="48" width="208" height="10" fill="url(#thumbReflect)" />
      
      {/* Brand Plaque */}
      <rect x="100" y="56" width="120" height="28" rx="4" fill="#0f172a" fillOpacity="0.5" stroke="#94a3b8" strokeWidth="0.8" />
      <text x="160" y="70" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1.5">
        MOLLISAQUA
      </text>
      <text x="160" y="80" fill="#cbd5e1" fontSize="6.5" textAnchor="middle" letterSpacing="0.8">
        CATALYTIC CONDITIONER
      </text>

      {/* Right Pipe Ends */}
      <rect x="264" y="45" width="14" height="50" rx="3" fill="url(#thumbMetal)" stroke="#334155" />
      <rect x="275" y="55" width="25" height="30" rx="3" fill="url(#thumbMetal)" stroke="#334155" />

      {/* Flow arrow */}
      <path d="M210,108 L235,108 M228,104 L235,108 L228,112" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <text x="195" y="111" fill="#7dd3fc" fontSize="8" fontWeight="bold">FLOW</text>
    </svg>

    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-cyan-200/90 font-mono">
      <span>SS-316L INLINE</span>
      <span>0-WATT NON-CHEMICAL</span>
    </div>
  </div>
);

export const UrinalCartridgeThumb: React.FC = () => (
  <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-slate-900 via-[#075DB1]/80 to-[#03264c] rounded-2xl overflow-hidden flex items-center justify-center p-4 shadow-inner">
    <div className="absolute inset-0 bg-radial from-emerald-500/15 via-transparent to-transparent opacity-80" />

    {/* Modern Eco Urinal Cartridge SVG */}
    <svg viewBox="0 0 240 200" className="w-full max-w-[220px] drop-shadow-2xl">
      <defs>
        <linearGradient id="cartridgeBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="25%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="75%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="sealBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06A9E0" />
          <stop offset="100%" stopColor="#075DB1" />
        </linearGradient>
        <linearGradient id="ecoGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Cartridge Outer Housing Top Rim */}
      <ellipse cx="120" cy="50" rx="75" ry="18" fill="url(#cartridgeBody)" stroke="#334155" strokeWidth="1.5" />
      <ellipse cx="120" cy="50" rx="66" ry="14" fill="#0f172a" />

      {/* Cartridge Tapered Lower Shell */}
      <path d="M45,50 L65,150 Q70,165 120,165 Q170,165 175,150 L195,50" fill="url(#cartridgeBody)" stroke="#334155" strokeWidth="1.5" />

      {/* Blue Eco Seal Ring */}
      <ellipse cx="120" cy="54" rx="55" ry="11" fill="url(#sealBlue)" />
      
      {/* Central Bio-Drain Dome */}
      <ellipse cx="120" cy="53" rx="36" ry="8" fill="#1e293b" />
      <circle cx="120" cy="52" r="5" fill="#38bdf8" />

      {/* Water Saving Drop Icon Graphic */}
      <path d="M120,85 C115,95 108,105 108,114 A12,12 0 0,0 132,114 C132,105 125,95 120,85 Z" fill="url(#ecoGreenGrad)" stroke="#ecfdf5" strokeWidth="1" />
      
      {/* Zero Water Indicator Label */}
      <rect x="85" y="132" width="70" height="18" rx="9" fill="#0f172a" fillOpacity="0.85" />
      <text x="120" y="144" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">
        100% WATERLESS
      </text>
    </svg>

    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-emerald-200/90 font-mono">
      <span>ZERO FLUSH WATER</span>
      <span>ODOR BARRIER SEAL</span>
    </div>
  </div>
);

export const HeatPumpThumb: React.FC = () => (
  <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-slate-900 via-[#04336c] to-[#092244] rounded-2xl overflow-hidden flex items-center justify-center p-4 shadow-inner">
    <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent opacity-80" />

    {/* Modern Commercial Heat Pump Unit SVG */}
    <svg viewBox="0 0 260 180" className="w-full max-w-[240px] drop-shadow-2xl">
      <defs>
        <linearGradient id="hpCasing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="fanGrill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Main Outdoor Cabinet */}
      <rect x="30" y="25" width="200" height="135" rx="8" fill="url(#hpCasing)" stroke="#475569" strokeWidth="1.5" />
      
      {/* Top Air Vent Louvers */}
      <rect x="45" y="35" width="170" height="12" rx="2" fill="#334155" opacity="0.3" />
      <line x1="50" y1="41" x2="210" y2="41" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 2" />

      {/* Dual Axial Fans */}
      {/* Left Fan */}
      <circle cx="85" cy="95" r="38" fill="url(#fanGrill)" stroke="#475569" strokeWidth="1.5" />
      <circle cx="85" cy="95" r="32" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="85" cy="95" r="10" fill="#0284c7" />
      <path d="M85,63 L85,127 M53,95 L117,95" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Right Side Control Interface & Titanium Exchanger Plate */}
      <rect x="140" y="60" width="75" height="85" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
      
      {/* Digital Micro-Controller Display */}
      <rect x="150" y="70" width="55" height="24" rx="3" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="0.8" />
      <text x="177" y="85" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
        55°C ECO
      </text>

      {/* Inverter Tech Badges */}
      <text x="177" y="108" fill="#34d399" fontSize="7.5" fontWeight="bold" textAnchor="middle">
        HIGH COP 4.2
      </text>
      <text x="177" y="122" fill="#94a3b8" fontSize="6.5" textAnchor="middle">
        HEAT TRANSFER
      </text>

      {/* Unit Base Feet */}
      <rect x="45" y="160" width="30" height="8" rx="2" fill="#1e293b" />
      <rect x="185" y="160" width="30" height="8" rx="2" fill="#1e293b" />
    </svg>

    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-sky-200/90 font-mono">
      <span>HIGH EFFICIENCY</span>
      <span>THERMAL HEAT TRANSFER</span>
    </div>
  </div>
);

export const SolarACThumb: React.FC = () => (
  <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-slate-900 via-[#054382] to-[#041935] rounded-2xl overflow-hidden flex items-center justify-center p-4 shadow-inner">
    <div className="absolute inset-0 bg-radial from-amber-400/15 via-transparent to-transparent opacity-80" />

    {/* Solar Hybrid AC Unit Graphic */}
    <svg viewBox="0 0 280 180" className="w-full max-w-[250px] drop-shadow-2xl">
      <defs>
        <linearGradient id="solarPanelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#172554" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="indoorAC" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>

      {/* Angled Solar PV Panel array */}
      <g transform="translate(25, 20)">
        <polygon points="10,40 100,10 120,60 30,90" fill="url(#solarPanelGrad)" stroke="#38bdf8" strokeWidth="1.2" />
        {/* Solar Grid Lines */}
        <line x1="40" y1="30" x2="60" y2="80" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
        <line x1="70" y1="20" x2="90" y2="70" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
        <line x1="20" y1="52" x2="110" y2="22" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
        <line x1="25" y1="68" x2="115" y2="38" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
      </g>

      {/* Sun Ray Rays icon */}
      <circle cx="50" cy="24" r="8" fill="#facc15" />
      <path d="M50,10 L50,13 M50,35 L50,38 M36,24 L39,24 M61,24 L64,24" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" />

      {/* Sleek Modern Indoor Split AC Unit */}
      <rect x="120" y="70" width="145" height="58" rx="6" fill="url(#indoorAC)" stroke="#94a3b8" strokeWidth="1.2" />
      
      {/* Front Panel Contour Curve */}
      <path d="M120,110 Q192,122 265,110" stroke="#0284c7" strokeWidth="1.5" fill="none" opacity="0.5" />
      
      {/* Air Deflection Louver */}
      <rect x="126" y="116" width="133" height="8" rx="2" fill="#64748b" opacity="0.3" />

      {/* Digital Inverter Temp Indicator */}
      <rect x="220" y="80" width="34" height="16" rx="2" fill="#0f172a" fillOpacity="0.8" />
      <text x="237" y="92" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
        24°C
      </text>

      {/* Solar Connected Cord */}
      <path d="M110,65 Q130,50 145,70" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" fill="none" />

      {/* Eco Label */}
      <rect x="130" y="80" width="60" height="16" rx="3" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="0.8" />
      <text x="160" y="91" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">
        SOLAR ASSIST
      </text>
    </svg>

    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-amber-200/90 font-mono">
      <span>SOLAR PV ASSISTED</span>
      <span>ENERGY CONSERVATION</span>
    </div>
  </div>
);

