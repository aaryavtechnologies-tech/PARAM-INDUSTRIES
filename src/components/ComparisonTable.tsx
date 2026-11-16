import React from 'react';
import { translations, type Language } from '../translations';
import { Check, Info } from 'lucide-react';

interface Props {
  lang: Language;
}

export const ComparisonTable: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].comparison;
  const isGu = lang === 'gu';

  return (
    <div className="w-full bg-white rounded-3xl border border-sky-100 p-6 sm:p-10 shadow-lg">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold tracking-wider uppercase text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
          {isGu ? 'તુલનાત્મક માર્ગદર્શિકા' : 'Comparative Analysis'}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#102D53] mt-3">
          {t.title}
        </h3>
        <p className="text-slate-600 text-sm mt-2">
          {t.subtitle}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                {t.featureCol}
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#075DB1] bg-sky-50/80 rounded-t-2xl w-1/4 border-x border-t border-sky-200">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  {t.mollisaquaCol}
                </div>
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-slate-700 w-1/4">
                {t.ionSoftenerCol}
              </th>
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-slate-700 w-1/4">
                {t.roCol}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {t.rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-4 font-bold text-slate-800">
                  {row.feature}
                </td>
                <td className="py-4 px-4 font-medium text-sky-950 bg-sky-50/50 border-x border-sky-200">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.mollis}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-600">
                  <span>{row.softener}</span>
                </td>
                <td className="py-4 px-4 text-slate-600">
                  <span>{row.ro}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p>
          {isGu
            ? 'આ સરખામણી સામાન્ય સિસ્ટમ્સ વચ્ચેના તકનીકી સિદ્ધાંતો સમજાવવા માટે છે. દરેક ઘર કે ઉદ્યોગની પાણી ગુણવત્તા મુજબ સાચું સાધન પસંદ કરવું જરૂરી છે.'
            : 'This table summarizes general technology distinctions. Sizing and equipment selection should always be guided by site-specific water test analysis.'}
        </p>
      </div>
    </div>
  );
};
