import React, { useState } from 'react';
import { translations, type Language } from '../translations';
import {
  Phone,
  MapPin,
  User,
  MessageSquare,
  Navigation,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface Props {
  lang: Language;
  preselectedProduct?: string;
  preselectedApplication?: string;
}

export const ContactSection: React.FC<Props> = ({
  lang,
  preselectedProduct = '',
  preselectedApplication = '',
}) => {
  const t = translations[lang].contact;
  const isGu = lang === 'gu';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: preselectedProduct || 'Water Conditioner / Water Softener',
    application: preselectedApplication || 'Residential',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const productOptions = [
    { value: 'Water Conditioner / Water Softener', labelEn: 'Water Conditioner / Water Softener', labelGu: 'વોટર કન્ડિશનર / વોટર સોફ્ટનર' },
    { value: 'MOLLISAQUA Water Conditioner', labelEn: 'MOLLISAQUA Catalytic Conditioner', labelGu: 'મોલિસાક્વા કેટાલિટિક કન્ડિશનર' },
    { value: 'AQANO Water Conditioner', labelEn: 'AQANO Water Conditioner', labelGu: 'અકાનો વોટર કન્ડિશનર' },
    { value: 'Water-Free Urinal Cartridge', labelEn: 'Water-Free Urinal Cartridge', labelGu: 'વોટર-ફ્રી યુરીનલ કાર્ટ્રીજ' },
    { value: 'Heat Pump', labelEn: 'Heat Pump Solutions', labelGu: 'હીટ પંપ સોલ્યુશન્સ' },
    { value: 'Solar AC', labelEn: 'Solar AC (Hybrid / Solar-Assisted)', labelGu: 'સોલાર એસી (હાઇબ્રિડ / સોલાર કૂલિંગ)' },
    { value: 'Industrial Consultation', labelEn: 'Industrial Water Consultation', labelGu: 'ઔદ્યોગિક વોટર કન્સલ્ટેશન' },
    { value: 'Other Enquiry', labelEn: 'Other Technology Enquiry', labelGu: 'અન્ય પૂછપરછ' },
  ];

  const appOptions = [
    { value: 'Residential', labelEn: 'Residential (Bungalow / Flat)', labelGu: 'રહેણાંક (બંગલો / ફ્લેટ)' },
    { value: 'Commercial', labelEn: 'Commercial Building / Office', labelGu: 'કોમર્શિયલ બિલ્ડિંગ / ઓફિસ' },
    { value: 'Industrial', labelEn: 'Industrial / Factory / Boiler', labelGu: 'ઔદ્યોગિક / ફેક્ટરી / બોઇલર' },
    { value: 'Agriculture', labelEn: 'Agriculture / Drip Irrigation', labelGu: 'કૃષિ / ડ્રીપ ઈરીગેશન' },
    { value: 'Hospitality', labelEn: 'Hotel / Resort / Restaurant', labelGu: 'હોટેલ / રિસોર્ટ / રેસ્ટોરન્ટ' },
    { value: 'Other', labelEn: 'Other Application', labelGu: 'અન્ય એપ્લિકેશન' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = t.validationName;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      newErrors.phone = t.validationPhone;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build formatted message
    const msgLines = [
      `*Enquiry for PARAM INDUSTRIES*`,
      `---------------------------------`,
      `*Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      formData.email ? `*Email:* ${formData.email.trim()}` : null,
      `*Product:* ${formData.product}`,
      `*Application:* ${formData.application}`,
      formData.message ? `*Requirement Details:* ${formData.message.trim()}` : null,
      `---------------------------------`,
      `Source: paramindustries website enquiry`,
    ].filter(Boolean);

    const fullMessage = msgLines.join('\n');
    const encoded = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/917984515685?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Riviera+Springs+Skycity+Club+07+Road+Shela+Ahmedabad+380058';

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Contact Cards, Verification & Address Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-[#063C7C] to-[#04244c] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <span className="text-xs font-bold tracking-wider uppercase text-cyan-300 bg-sky-900/60 border border-sky-600/40 px-3 py-1 rounded-full">
              {t.badge}
            </span>
            <h3 className="text-2xl font-bold mt-4 tracking-tight">
              {t.infoCompany}
            </h3>
            <p className="text-sky-200/90 text-xs sm:text-sm mt-1">
              {isGu ? 'વોટર કન્ડિશનિંગ અને ઉર્જા-કાર્યક્ષમ ટેકનોલોજી સોલ્યુશન્સ' : 'Water Conditioning & Energy-Efficient Technology Solutions'}
            </p>

            <div className="space-y-5 mt-6 pt-6 border-t border-sky-800/80 text-xs sm:text-sm">
              {/* Contact Person */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-600/30 border border-sky-500/40 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <div className="text-[11px] text-sky-300 uppercase tracking-wider font-semibold">
                    {t.personLabel}
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {t.personName}
                  </div>
                </div>
              </div>

              {/* Direct Phone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <div className="text-[11px] text-sky-300 uppercase tracking-wider font-semibold">
                    {t.phoneLabel}
                  </div>
                  <a
                    href="tel:+917984515685"
                    className="text-base font-bold text-emerald-300 hover:text-white transition-colors block mt-0.5 tracking-wide"
                  >
                    +91 7984515685
                  </a>
                  <span className="text-[11px] text-sky-200">
                    {isGu ? 'કોલ અને વોટ્સએપ પર ઉપલબ્ધ' : 'Available for Direct Calls & WhatsApp'}
                  </span>
                </div>
              </div>

              {/* Verified Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-600/30 border border-sky-500/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <div className="text-[11px] text-sky-300 uppercase tracking-wider font-semibold">
                    {t.addressLabel}
                  </div>
                  <address className="not-italic text-slate-200 leading-relaxed text-xs mt-1">
                    A/1501, Riviera Springs Skycity,<br />
                    Club 07 Road, Shela,<br />
                    Ahmedabad – 380058, Gujarat, India.
                  </address>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons on Contact Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-sky-800/80">
              <a
                href="tel:+917984515685"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.callBtn}</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-700/80 hover:bg-sky-600 text-white font-bold text-xs border border-sky-500/40 transition-all text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-cyan-300" />
                <span>{isGu ? 'ગૂગલ મેપ્સ' : 'Open in Maps'}</span>
              </a>
            </div>
          </div>

          {/* Transparent Trust Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start gap-3 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800 block mb-1">
                {isGu ? 'પ્રમાણિક એન્જિનિયરિંગ માર્ગદર્શન' : 'Honest Engineering Consultation'}
              </span>
              <p>
                {isGu
                  ? 'પરમ ઈન્ડસ્ટ્રીઝ કોઈપણ અવાસ્તવિક કે ખોટા દાવા કર્યા વિના તમારી પાઇપલાઇન અને પાણીની સ્થિતિ મુજબ સાચું માર્ગદર્શન આપે છે.'
                  : 'We evaluate your water hardness and operating conditions with factual recommendations and zero inflated marketing claims.'}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Lead Gen Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          <div className="mb-6">
            <h4 className="text-xl sm:text-2xl font-bold text-[#102D53]">
              {t.formTitle}
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {isGu
                ? 'નીચેની વિગતો ભરો અને સીધા વોટ્સએપ પર મુકેશભાઈ ઠક્કર સાથે વાતચીત શરૂ કરો.'
                : 'Fill in your details below to instantly format and initiate a WhatsApp conversation with Mukeshbhai Thakkar.'}
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            {/* Full Name & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.namePlaceholder}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all ${
                    errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-sky-500'
                  }`}
                />
                {errors.name && (
                  <span className="text-[11px] text-red-600 mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.phoneLabelForm}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.phonePlaceholder}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all ${
                    errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-sky-500'
                  }`}
                />
                {errors.phone && (
                  <span className="text-[11px] text-red-600 mt-1 block">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.emailPlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
              />
            </div>

            {/* Product & Application Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.productLabel}
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                >
                  {productOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {isGu ? opt.labelGu : opt.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.applicationLabel}
                </label>
                <select
                  name="application"
                  value={formData.application}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                >
                  {appOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {isGu ? opt.labelGu : opt.labelEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message / Requirement */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.messageLabel}
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.messagePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
              />
            </div>

            {/* Primary WhatsApp Submit CTA */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#0D874A] hover:bg-[#0b7540] text-white font-bold text-sm shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t.whatsappSubmitBtn}</span>
            </button>

            {/* Transparent Note / Disclaimer */}
            <p className="text-[11px] text-slate-500 leading-relaxed pt-2 text-center">
              {t.noteDisclaimer}
            </p>

            {isSubmitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isGu
                    ? 'વોટ્સએપ ખુલી રહ્યું છે! જો તે આપમેળે ન ખૂલે તો +91 7984515685 પર સીધો મેસેજ કરો.'
                    : 'Opening WhatsApp with your formatted enquiry! If it does not open, please message +91 7984515685 directly.'}
                </span>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};
