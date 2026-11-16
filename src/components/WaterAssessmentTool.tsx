import React, { useState } from 'react';
import type { Language } from '../translations';
import {
  Sparkles,
  Droplet,
  Settings2,
  ArrowRight,
  Flame,
} from 'lucide-react';

interface Props {
  lang: Language;
  onApplyRecommendation: (product: string, app: string, notes: string) => void;
}

export const WaterAssessmentTool: React.FC<Props> = ({ lang, onApplyRecommendation }) => {
  const isGu = lang === 'gu';

  const [source, setSource] = useState<'borewell' | 'municipal' | 'tanker' | 'industrial'>('borewell');
  const [scaleIssue, setScaleIssue] = useState<'geyser' | 'taps' | 'drip' | 'industrial' | 'toilets'>('geyser');
  const [propertyType, setPropertyType] = useState<'bungalow' | 'apartment' | 'hotel' | 'factory' | 'farm'>('bungalow');

  const getRecommendation = () => {
    let recommendedModel = 'MOLLISAQUA Catalytic Conditioner';
    let pipeSize = '3/4" to 1" Inline';
    let summaryEn = 'Ideal for whole-bungalow hard-water scale management. Helps protect geysers and bathroom chrome fixtures without salt or electricity.';
    let summaryGu = 'સમગ્ર બંગલા માટે હાર્ડ-વોટર સ્કેલ કંટ્રોલ માટે ઉત્તમ. ગીઝર અને બાથરૂમ ફિટિંગ્સને મીઠા કે વીજળી વગર ક્ષારથી સુરક્ષિત રાખે છે.';

    if (scaleIssue === 'toilets') {
      recommendedModel = 'Water-Free Urinal Cartridge System';
      pipeSize = 'Universal Eco-Trap Retrofit';
      summaryEn = 'Eliminates flushing water in commercial restrooms, saves thousands of liters annually, and stops sewer odor.';
      summaryGu = 'કોમર્શિયલ વોશરૂમમાં ફ્લશિંગના પાણીનો ૧૦૦% બચાવ કરે છે અને વાર્ષિક હજારો લિટર પાણી બચાવે છે.';
    } else if (propertyType === 'factory' || scaleIssue === 'industrial') {
      recommendedModel = 'MOLLISAQUA Industrial Flanged Conditioner';
      pipeSize = '2" to 6"+ Industrial Header';
      summaryEn = 'Engineered for cooling towers, plate heat exchangers, and low-pressure boilers to assist in managing limescale encrustation.';
      summaryGu = 'કૂલિંગ ટાવર્સ, હીટ એક્સચેન્જર્સ અને બોઇલર્સ માટે ખાસ એન્જિનિયર્ડ, રાસાયણિક ડોઝિંગ વગર ક્ષાર નિયંત્રણમાં મદદરૂપ.';
    } else if (propertyType === 'farm' || scaleIssue === 'drip') {
      recommendedModel = 'MOLLISAQUA / AQANO Agricultural Inline';
      pipeSize = '1.5" to 3" Main Delivery Line';
      summaryEn = 'Helps prevent mineral calcification in micro-drip emitters and spray nozzles from hard borewell water.';
      summaryGu = 'બોરવેલના કઠણ પાણીથી ડ્રીપ એમીટર્સ અને નોઝલ્સમાં જામતો ક્ષાર અટકાવવામાં મદદરૂપ.';
    } else if (propertyType === 'apartment') {
      recommendedModel = 'AQANO / MOLLISAQUA Multi-Riser Line';
      pipeSize = '1.25" to 2" Overhead Delivery';
      summaryEn = 'Designed for multi-unit apartment complexes to treat incoming water before individual flats.';
      summaryGu = 'એપાર્ટમેન્ટ કોમ્પ્લેક્સ માટે ઓવરહેડ ટેન્ક ડિલિવરી લાઇન પર સરળ ઇન્સ્ટોલેશન.';
    }

    return { recommendedModel, pipeSize, summaryEn, summaryGu };
  };

  const rec = getRecommendation();

  const handleApply = () => {
    const notes = `Assessment: Source=${source}, Issue=${scaleIssue}, Property=${propertyType}. Recommended: ${rec.recommendedModel} (${rec.pipeSize})`;
    onApplyRecommendation(rec.recommendedModel, propertyType, notes);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 rounded-3xl border border-sky-100 p-6 sm:p-10 shadow-xl">
      <div className="max-w-3xl mb-8">
        <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
          {isGu ? 'સ્માર્ટ સિલેક્ટર ટૂલ' : 'Interactive Assessment Guide'}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#102D53] mt-3">
          {isGu ? 'તમારી જરૂરિયાત મુજબ યોગ્ય સિસ્ટમ પસંદ કરો' : 'Find the Recommended Solution for Your Water'}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          {isGu
            ? 'તમારો પાણી સ્ત્રોત, સમસ્યા અને મિલકત પ્રકાર પસંદ કરો જેથી શ્રેષ્ઠ મોડલ અને પાઇપ સાઇઝનું માર્ગદર્શન મળે.'
            : 'Select your water source, current scaling challenge, and property type to get tailored engineering guidance.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Step 1: Water Source */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
            <Droplet className="w-4 h-4 text-sky-600" />
            <span>{isGu ? '૧. પાણીનો સ્ત્રોત' : '1. Water Source'}</span>
          </label>
          <div className="space-y-2">
            {[
              { id: 'borewell', en: 'Borewell / Ground Water (Hard)', gu: 'બોરવેલ / ભૂગર્ભ જળ (કઠણ)' },
              { id: 'municipal', en: 'Municipal / Narmada Line', gu: 'મ્યુનિસિપલ / નર્મદા લાઇન' },
              { id: 'tanker', en: 'Tanker Supply (Mixed Quality)', gu: 'ટેન્કર સપ્લાય (મિશ્ર ગુણવત્તા)' },
              { id: 'industrial', en: 'Industrial Recirculating Loop', gu: 'ઔદ્યોગિક રિસર્ક્યુલેશન લૂપ' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSource(opt.id as any)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  source === opt.id
                    ? 'bg-[#063C7C] text-white shadow-xs font-semibold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                {isGu ? opt.gu : opt.en}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Primary Challenge */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>{isGu ? '૨. મુખ્ય સમસ્યા' : '2. Primary Issue'}</span>
          </label>
          <div className="space-y-2">
            {[
              { id: 'geyser', en: 'Geyser & Solar Heater Scaling', gu: 'ગીઝર અને સોલાર હીટરમાં ક્ષાર' },
              { id: 'taps', en: 'White Crust on Taps & Tiles', gu: 'નળ અને ટાઇલ્સ પર સફેદ ક્ષાર' },
              { id: 'toilets', en: 'Commercial Toilet Water Waste', gu: 'વોશરૂમમાં પાણીનો બગાડ / વાસ' },
              { id: 'drip', en: 'Drip Irrigation Nozzle Clogging', gu: 'ડ્રીપ ઈરીગેશન નોઝલમાં ચોકિંગ' },
              { id: 'industrial', en: 'Boiler / Chiller Limescale', gu: 'બોઇલર / ચિલરમાં સ્કેલિંગ' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setScaleIssue(opt.id as any)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  scaleIssue === opt.id
                    ? 'bg-[#075DB1] text-white shadow-xs font-semibold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                {isGu ? opt.gu : opt.en}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Property Type */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
            <Settings2 className="w-4 h-4 text-emerald-600" />
            <span>{isGu ? '૩. મિલકત / સ્કેલ' : '3. Property Type'}</span>
          </label>
          <div className="space-y-2">
            {[
              { id: 'bungalow', en: 'Individual Bungalow / Villa', gu: 'સ્વતંત્ર બંગલો / વિલા' },
              { id: 'apartment', en: 'Multi-Flat Apartment Building', gu: 'એપાર્ટમેન્ટ બિલ્ડિંગ / ફ્લેટ્સ' },
              { id: 'hotel', en: 'Hotel / Hospital / Commercial', gu: 'હોટેલ / હોસ્પિટલ / કોમર્શિયલ' },
              { id: 'factory', en: 'Factory / Industrial Plant', gu: 'ફેક્ટરી / ઔદ્યોગિક પ્લાન્ટ' },
              { id: 'farm', en: 'Agriculture Farm / Greenhouse', gu: 'ખેતીવાડી ફાર્મ / ગ્રીનહાઉસ' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setPropertyType(opt.id as any)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  propertyType === opt.id
                    ? 'bg-[#0D874A] text-white shadow-xs font-semibold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                {isGu ? opt.gu : opt.en}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Result Display Box */}
      <div className="mt-8 bg-gradient-to-r from-[#063C7C] to-[#075DB1] rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>{isGu ? 'ભલામણ કરેલ સોલ્યુશન' : 'Recommended Sizing Solution'}</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
            {rec.recommendedModel}
          </h4>
          <div className="text-xs sm:text-sm text-cyan-200 font-mono">
            {isGu ? `અંદાજિત પાઇપ સાઇઝ: ${rec.pipeSize}` : `Estimated Line Size: ${rec.pipeSize}`}
          </div>
          <p className="text-xs text-slate-200 max-w-xl leading-relaxed pt-1">
            {isGu ? rec.summaryGu : rec.summaryEn}
          </p>
        </div>

        <button
          onClick={handleApply}
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-[#063C7C] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
        >
          <span>{isGu ? 'આ વિગત સાથે પૂછપરછ કરો' : 'Discuss This Requirement'}</span>
          <ArrowRight className="w-4 h-4 text-[#063C7C]" />
        </button>
      </div>
    </div>
  );
};
