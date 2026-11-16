export type Language = 'en' | 'gu';

export interface Translations {
  nav: {
    home: string;
    solutions: string;
    technology: string;
    healthyLife: string;
    reels: string;
    applications: string;
    industrial: string;
    about: string;
    faqs: string;
    contact: string;
    getQuote: string;
    callNow: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subheading: string;
    supportingText: string;
    exploreBtn: string;
    consultBtn: string;
    micro1: string;
    micro2: string;
    micro3: string;
    hairSkinPill: string;
    flowLabel: string;
    specTitle: string;
    specSub: string;
    liveDemoBadge: string;
  };
  healthyLife: {
    badge: string;
    heading: string;
    tagline: string;
    subheading: string;
    intro: string;
    b1Title: string;
    b1Desc: string;
    b2Title: string;
    b2Desc: string;
    b3Title: string;
    b3Desc: string;
    b4Title: string;
    b4Desc: string;
    b5Title: string;
    b5Desc: string;
    b6Title: string;
    b6Desc: string;
    fitForgetBadge: string;
    fitForgetDesc: string;
  };
  reels: {
    badge: string;
    heading: string;
    tagline: string;
    subheading: string;
    tabAll: string;
    tabPhotos: string;
    soundOn: string;
    soundOff: string;
    watchFull: string;
    consultOnWhatsapp: string;
    liveDemoLocation: string;
    playVideo: string;
    pauseVideo: string;
    liveProofPill: string;
    muteHint: string;
    unmuteHint: string;
  };
  solutions: {
    heading: string;
    subtitle: string;
    card1Title: string;
    card1Badge: string;
    card1Desc: string;
    card1F1: string;
    card1F2: string;
    card1F3: string;
    card1Btn: string;

    card2Title: string;
    card2Badge: string;
    card2Desc: string;
    card2F1: string;
    card2F2: string;
    card2F3: string;
    card2Btn: string;

    card3Title: string;
    card3Badge: string;
    card3Desc: string;
    card3F1: string;
    card3F2: string;
    card3F3: string;
    card3Btn: string;

    card4Title: string;
    card4Badge: string;
    card4Desc: string;
    card4F1: string;
    card4F2: string;
    card4F3: string;
    card4Btn: string;

    aqanoTitle: string;
    aqanoSubtitle: string;
    aqanoDesc: string;
  };
  mollisaqua: {
    badge: string;
    heading: string;
    subheading: string;
    desc1: string;
    desc2: string;
    b1Title: string;
    b1Desc: string;
    b2Title: string;
    b2Desc: string;
    b3Title: string;
    b3Desc: string;
    b4Title: string;
    b4Desc: string;
    b5Title: string;
    b5Desc: string;
    b6Title: string;
    b6Desc: string;
    techPrincipleTitle: string;
    techPrincipleDesc: string;
    disclaimer: string;
    viewSpecsBtn: string;
  };
  science: {
    badge: string;
    heading: string;
    subheading: string;
    stage1Title: string;
    stage1Desc: string;
    stage1Details: string;
    stage2Title: string;
    stage2Desc: string;
    stage2Details: string;
    stage3Title: string;
    stage3Desc: string;
    stage3Details: string;
    keyFact1Title: string;
    keyFact1Desc: string;
    keyFact2Title: string;
    keyFact2Desc: string;
    keyFact3Title: string;
    keyFact3Desc: string;
    disclaimerTitle: string;
    disclaimerText: string;
  };
  applications: {
    badge: string;
    heading: string;
    subtitle: string;
    ctaBtn: string;
    app1Name: string;
    app1Desc: string;
    app2Name: string;
    app2Desc: string;
    app3Name: string;
    app3Desc: string;
    app4Name: string;
    app4Desc: string;
    app5Name: string;
    app5Desc: string;
    app6Name: string;
    app6Desc: string;
    app7Name: string;
    app7Desc: string;
    app8Name: string;
    app8Desc: string;
  };
  industrial: {
    badge: string;
    heading: string;
    subheading: string;
    principleTitle: string;
    principleDesc: string;
    benefitTitle: string;
    b1: string;
    b2: string;
    b3: string;
    b4: string;
    b5: string;
    b6: string;
    note: string;
    ctaBtn: string;
  };
  about: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    mollisaquaTitle: string;
    mollisaquaText: string;
    locationTitle: string;
    locationText: string;
    coreValuesTitle: string;
    v1Title: string;
    v1Desc: string;
    v2Title: string;
    v2Desc: string;
    v3Title: string;
    v3Desc: string;
  };
  faqs: {
    badge: string;
    heading: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    infoCompany: string;
    personLabel: string;
    personName: string;
    phoneLabel: string;
    addressLabel: string;
    addressVal: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabelForm: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    productLabel: string;
    applicationLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    whatsappSubmitBtn: string;
    callBtn: string;
    directionsBtn: string;
    validationName: string;
    validationPhone: string;
    noteDisclaimer: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    productsTitle: string;
    contactTitle: string;
    rights: string;
    disclaimer: string;
  };
  comparison: {
    title: string;
    subtitle: string;
    featureCol: string;
    mollisaquaCol: string;
    ionSoftenerCol: string;
    roCol: string;
    rows: Array<{
      feature: string;
      mollis: string;
      softener: string;
      ro: string;
    }>;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      solutions: 'Our Solutions',
      healthyLife: 'Clean Water & Health',
      reels: 'Live Reels',
      technology: 'Technology',
      applications: 'Applications',
      industrial: 'Industrial',
      about: 'About Us',
      faqs: 'FAQs',
      contact: 'Contact',
      getQuote: 'Get Consultation',
      callNow: 'Call Now',
    },
    hero: {
      badge: 'Clean Water... Healthy Life... • Ahmedabad',
      titleLine1: 'Clean Water.',
      titleLine2: 'Healthy Life.',
      subheading: 'Advanced Water Conditioning & Scale Management Solutions',
      supportingText:
        'Transform hard, harsh water into gentle, conditioned water. Protect your family’s hair and skin, safeguard home appliances, and eliminate stubborn limescale without salt, chemicals, or electricity.',
      exploreBtn: 'Explore Water Solutions',
      consultBtn: 'Get Free Consultation',
      micro1: 'No External Electricity',
      micro2: 'No Salt or Chemicals',
      micro3: 'Lifetime Fit & Forget',
      hairSkinPill: 'Helps Prevent Hair Fall & Keeps Skin Soft',
      flowLabel: 'Continuous Inline Crystal Mineral Conditioning',
      specTitle: 'MOLLISAQUA & AQANO Systems',
      specSub: 'Engineered Catalytic Scale Management',
      liveDemoBadge: 'LIVE DEMO AT SHELA, AHMEDABAD',
    },
    healthyLife: {
      badge: 'Lifestyle & Wellness Impact',
      heading: 'Clean Water... Healthy Life...',
      tagline: 'Simple, Permanent Solution for Hard Water Problems',
      subheading:
        'Improves water quality, transforms hard water into silky soft water for your home and family.',
      intro:
        'Hard water contains heavy dissolved calcium and magnesium that dry out your skin, cause brittle hair fall, leave white crusts on bathroom tiles, and choke geyser heating elements. PARAM INDUSTRIES water conditioning technology provides gentle, mineral-rich conditioned water that protects what matters most.',
      b1Title: 'Helps Keep Hair Strong',
      b1Desc:
        'Reduces hair-related problems and hair fall by eliminating harsh hard-water mineral buildup on your scalp.',
      b2Title: 'Soft Skin & Less Residue',
      b2Desc:
        'Leaves skin naturally soft, hydrated, and comfortable without the sticky residue or dryness caused by unconditioned hard water.',
      b3Title: 'Cleaner, Softer Fabrics',
      b3Desc:
        'Towels, bedsheets, and clothes stay noticeably softer, fresher, and retain their original bright colors longer.',
      b4Title: 'Better Lather, Less Soap',
      b4Desc:
        'Generates rich, luxurious lather with minimal soap and shampoo, saving household cleaning products.',
      b5Title: 'Reduces Scaling on Fixtures',
      b5Desc:
        'Prevents unsightly white mineral crusts from accumulating on showerheads, designer taps, and glass partitions.',
      b6Title: 'Extends Equipment Life',
      b6Desc:
        'Keeps geyser heating elements, solar water heaters, and washing machines free from efficiency-robbing scale.',
      fitForgetBadge: 'Fit & Forget Convenience',
      fitForgetDesc:
        'No monthly salt refills, zero replacement filters, and zero maintenance. Once installed in your pipeline, it works passively year after year.',
    },
    reels: {
      badge: 'Real Site Proof • Autoplay Reels',
      heading: 'Live Demonstrations & Customer Reels',
      tagline: 'Real Proof from Societies, Bungalows & Borewells Across Ahmedabad',
      subheading:
        'Watch real installation videos, tap water flows, and scale protection performance filmed directly at societies, bungalows, and industrial sites across Ahmedabad, Gujarat.',
      tabAll: 'Video Reels (8 Live Demos)',
      tabPhotos: 'Site Installations (Photos)',
      soundOn: 'Tap for Sound',
      soundOff: 'Mute',
      watchFull: 'Open Full Reel',
      consultOnWhatsapp: 'Enquire About This Installation',
      liveDemoLocation: 'Ahmedabad, Gujarat • Real Site Verification',
      playVideo: 'Play Reel',
      pauseVideo: 'Pause Reel',
      liveProofPill: '100% Real Site Demonstration',
      muteHint: 'Muted for autoplay. Tap sound icon to hear live audio.',
      unmuteHint: 'Audio playing.',
    },
    solutions: {
      heading: 'Innovative Solutions for a Smarter Future',
      subtitle:
        'Explore technology-driven solutions for water management, resource conservation and sustainable cooling.',
      card1Title: 'Water Softener / Water Conditioner',
      card1Badge: 'Flagship Conditioning',
      card1Desc:
        'Advanced inline water conditioning technology designed to help manage the effects of hard-water scaling in suitable residential, commercial and industrial systems.',
      card1F1: 'Helps manage mineral scale formation on taps and tiles',
      card1F2: 'No external electricity required for catalytic conditioner',
      card1F3: 'No salt or chemical dosing for featured conditioner',
      card1Btn: 'Explore Water Conditioning',

      card2Title: 'Water-Free Urinal Cartridge',
      card2Badge: 'Water Conservation',
      card2Desc:
        'A practical water-conservation solution designed for compatible waterless urinal systems, helping reduce flushing-water consumption in commercial and public facilities.',
      card2F1: 'Saves thousands of liters of fresh water annually',
      card2F2: 'Hygienic barrier seal technology',
      card2F3: 'Ideal for offices, hotels, hospitals & public venues',
      card2Btn: 'Enquire Now',

      card3Title: 'Heat Pump',
      card3Badge: 'Energy Efficient',
      card3Desc:
        'Energy-efficient heat pump solutions that transfer heat for suitable heating applications, helping support efficient energy use.',
      card3F1: 'High coefficient of thermal performance',
      card3F2: 'Commercial & residential heating solutions',
      card3F3: 'Low carbon footprint compared to conventional geysers',
      card3Btn: 'Enquire Now',

      card4Title: 'Solar AC',
      card4Badge: 'Sustainable Cooling',
      card4Desc:
        'Explore solar-compatible air-conditioning solutions designed to support sustainable cooling and reduce dependence on conventional electricity where suitable.',
      card4F1: 'Solar photovoltaic assisted cooling integration',
      card4F2: 'Optimized inverter drive technology',
      card4F3: 'Daytime cooling cost mitigation for homes & workspaces',
      card4Btn: 'Enquire Now',

      aqanoTitle: 'AQANO Water Conditioner Range',
      aqanoSubtitle: 'Distinct Named Water Conditioning Range',
      aqanoDesc:
        'Alongside MOLLISAQUA, PARAM INDUSTRIES offers AQANO Water Conditioner systems to provide flexible, dependable water conditioning solutions tailored to diverse residential and commercial piping layouts.',
    },
    mollisaqua: {
      badge: 'Featured Technology Highlight',
      heading: 'MOLLISAQUA — Advanced Water Conditioning Technology',
      subheading: 'An innovative approach to managing hard-water scaling.',
      desc1:
        'MOLLISAQUA is presented as an inline catalytic metal-based water conditioner that operates without external electricity, salt, or chemical dosing.',
      desc2:
        'It is designed to help manage the effects of hardness-related scaling while retaining dissolved minerals in the water.',
      b1Title: 'No External Electricity',
      b1Desc: 'Operates purely on inline fluid pressure and catalytic contact with zero electrical wiring.',
      b2Title: 'No Salt or Chemical Dosing',
      b2Desc: 'Requires no sodium chloride brine bags, resins, or chemical additives in the water stream.',
      b3Title: 'No Moving Parts',
      b3Desc: 'Solid-state metallic alloy design minimizes mechanical wear, tear, and failure points.',
      b4Title: 'Helps Reduce Scaling',
      b4Desc: 'Intended to alter crystal growth habits, reducing dense adhesive crust formation on pipes.',
      b5Title: 'Supports Equipment Performance',
      b5Desc: 'Aids in keeping heat exchanger surfaces and heating elements clearer of hard scale layers.',
      b6Title: 'Low-Maintenance Design',
      b6Desc: 'Non-consumable catalytic core provides prolonged service with minimal routine intervention.',
      techPrincipleTitle: "Manufacturer's Described Operating Principle",
      techPrincipleDesc:
        'The supplied material describes a special engineered alloy of noble and semi-noble metals and a catalytic redox-based mechanism. As water flows through the chamber, surface catalytic reactions encourage calcium and magnesium ions to precipitate into stable, non-adhering microscopic structures rather than sticking to pipe walls.',
      disclaimer:
        'Technical note: Operating principle is presented as manufacturer-described information. System suitability and specific outcomes depend on individual water chemistry, flow rates, and operating conditions.',
      viewSpecsBtn: 'Discuss Mollisaqua Specifications',
    },
    science: {
      badge: 'Working Principle & Physics',
      heading: 'The Science Behind Water Conditioning',
      subheading:
        'An engineered catalytic approach to managing hard-water crystallization without removing essential dietary minerals.',
      stage1Title: 'Stage 1 — Hard Water Enters',
      stage1Desc:
        'Untreated water containing dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) bicarbonate ions enters the inline catalytic unit under standard pipeline pressure.',
      stage1Details:
        'Dissolved minerals are freely dispersed. In untreated pipelines, temperature and pressure changes cause them to precipitate as hard, clinging calcite scale.',
      stage2Title: 'Stage 2 — Catalytic Conditioning',
      stage2Desc:
        'Water flows directly across the specially engineered catalytic alloy core inside the chamber.',
      stage2Details:
        'According to the product’s described operating principle, interactions at the catalytic surface create micro-redox potential shifts that alter crystallization nuclei.',
      stage3Title: 'Stage 3 — Scale-Management Effect',
      stage3Desc:
        'Hardness minerals form fine, suspended aragonite-like micro-crystals that remain non-adhesive.',
      stage3Details:
        'The technology is intended to help reduce scaling tendency in suitable operating conditions without functioning as a traditional ion-exchange softener.',
      keyFact1Title: 'Does Not Remove Minerals',
      keyFact1Desc: 'Retains essential calcium and magnesium in the water rather than swapping them with sodium salt.',
      keyFact2Title: 'No TDS Reduction',
      keyFact2Desc: 'Unlike reverse osmosis, catalytic conditioning does not demineralize water or lower total dissolved solids.',
      keyFact3Title: 'Application Dependent',
      keyFact3Desc: 'Performance outcomes vary with flow rate, water hardness level, and temperature differentials.',
      disclaimerTitle: 'Mandatory Technical Transparency',
      disclaimerText:
        'A catalytic water conditioner is designed for scale management. It does not disinfect biological bacteria, does not act as a water purifier, and does not replace drinking water filtration where purification is required.',
    },
    applications: {
      badge: 'Versatile Deployments',
      heading: 'Designed for Multiple Applications',
      subtitle:
        'Protecting piping, boilers, fixtures, and irrigation lines across domestic, commercial, and agricultural sectors.',
      ctaBtn: 'Discuss Your Application',
      app1Name: 'Residential Homes & Bungalows',
      app1Desc: 'Taps, geysers, showerheads, solar water heaters, and household pipelines.',
      app2Name: 'Hotels & Hospitality',
      app2Desc: 'Commercial kitchens, laundry systems, central hot water boilers, and guest bathrooms.',
      app3Name: 'Hospitals & Healthcare Facilities',
      app3Desc: 'General hot water loops, laundry facilities, and HVAC systems (non-medical utility water).',
      app4Name: 'Commercial Buildings & Complexes',
      app4Desc: 'Corporate complexes, educational institutions, retail centers, and cooling water circuits.',
      app5Name: 'Factories & Industrial Units',
      app5Desc: 'Process pipelines, heat exchangers, cooling water jackets, and utility headers.',
      app6Name: 'Agriculture & Irrigation (Crop Booster)',
      app6Desc: 'Drip emitters, micro-sprinklers, borewell pipelines, and fertigation systems.',
      app7Name: 'Dairy / Poultry / Fish Farms',
      app7Desc: 'Washing lines, misting systems, animal watering lines, and aquaculture water circuits.',
      app8Name: 'Boilers, Chillers & Cooling Systems',
      app8Desc: 'Cooling tower circuits, heat recovery condensers, and low-pressure steam boilers.',
    },
    industrial: {
      badge: 'Engineering & Industrial Operations',
      heading: 'Smarter Scale Management for Industrial Systems',
      subheading: 'Supporting efficient equipment operation through advanced water-conditioning solutions.',
      principleTitle: 'Industrial Working Principle',
      principleDesc:
        'The manufacturer describes MOLLISAQUA as using a catalytic metal alloy installed directly inside the industrial water pipeline. The intended function is to influence mineral-scale deposition in critical thermal equipment such as boilers, chillers, and plate heat exchangers without chemical dosing.',
      benefitTitle: 'Potential Industrial Operational Outcomes',
      b1: 'Helps manage limescale formation on heat-transfer surfaces',
      b2: 'May support heat-transfer performance and thermal conductivity',
      b3: 'May reduce descaling chemical frequency and shutdown cleanings',
      b4: 'Can support equipment reliability and pipe flow cross-section',
      b5: 'Suitable for evaluation across selected light and heavy industrial applications',
      b6: 'Operates with zero external power feed and no salt brine regeneration',
      note: 'Technical note: System suitability and results depend on water chemistry, operating conditions and application-specific testing.',
      ctaBtn: 'Request Industrial Consultation',
    },
    about: {
      badge: 'Company Profile',
      heading: 'Your Partner in Water & Sustainable Technology',
      p1: 'PARAM INDUSTRIES, based in Ahmedabad, Gujarat, provides water-conditioning, water-saving and energy-efficient product solutions for residential, commercial, agricultural and industrial needs.',
      p2: 'The company focuses on practical technologies, honest engineering guidance, and customer-focused product recommendations to address water hardness and resource conservation challenges across Gujarat and India.',
      mollisaquaTitle: 'MOLLISAQUA Technology Background',
      mollisaquaText:
        'The supplied manufacturer information states that MOLLISAQUA has over 20 years of experience in water-treatment technology with an international presence including the USA and Australia. PARAM INDUSTRIES brings this proven catalytic concept to regional clients.',
      locationTitle: 'Our Ahmedabad Headquarters',
      locationText:
        'Located at Riviera Springs Skycity on Club 07 Road in Shela, Ahmedabad, our team is directly accessible for on-site live demonstrations, consultations, and technical sizing assessments.',
      coreValuesTitle: 'Our Operating Principles',
      v1Title: 'Technical Transparency',
      v1Desc: 'We explain realistic capabilities clearly, without exaggerating outcomes or making unsubstantiated promises.',
      v2Title: 'Resource Conservation',
      v2Desc: 'Prioritizing water-saving urinal cartridges and zero-waste catalytic conditioners that preserve clean water.',
      v3Title: 'Customer-Centric Sizing',
      v3Desc: 'Selecting the appropriate pipe diameter and flow profile for each individual installation.',
    },
    faqs: {
      badge: 'Clear Answers',
      heading: 'Frequently Asked Questions',
      subtitle: 'Transparent, accurate answers regarding catalytic water conditioning and our product range.',
      items: [
        {
          q: 'Does MOLLISAQUA reduce TDS?',
          a: 'No. MOLLISAQUA is not an RO water purifier. It is designed as a catalytic water conditioner and does not remove dissolved salts or reduce TDS like reverse osmosis.',
        },
        {
          q: 'Does it remove water hardness?',
          a: 'It does not remove hardness minerals in the same way as an ion-exchange softener. Its intended purpose is to help manage scale formation.',
        },
        {
          q: 'Does the conditioner require electricity?',
          a: 'The featured catalytic inline water conditioner is designed to operate without external electricity.',
        },
        {
          q: 'Does it require salt or chemicals?',
          a: 'The conditioner is designed to operate without salt regeneration or chemical dosing.',
        },
        {
          q: 'Is conditioned water safe for drinking?',
          a: 'Drinking-water safety depends on the source water and contaminants present. A water conditioner does not disinfect or purify unsafe water. Water testing and appropriate treatment may be necessary.',
        },
        {
          q: 'Can it be used for industrial applications?',
          a: 'It can be considered for selected industrial systems, subject to technical compatibility and water-quality assessment.',
        },
        {
          q: 'Is a water test required?',
          a: 'Water testing is recommended to assess hardness, TDS, overall water quality and suitability for a particular application.',
        },
        {
          q: 'What is the expected service life?',
          a: 'The supplied marketing material mentions a service-life claim of approximately 40–45 years. This must not be presented as guaranteed. Actual warranty and service-life information should be confirmed from official technical documents.',
        },
        {
          q: 'Is the system maintenance-free?',
          a: 'The product is described as a low-maintenance, no-moving-parts design. Installation conditions and system requirements may still require periodic checks.',
        },
        {
          q: 'How can I request a demonstration?',
          a: 'Customers can contact PARAM INDUSTRIES at +91 7984515685 to enquire about product availability, technical guidance and demonstrations at our Shela, Ahmedabad office.',
        },
      ],
    },
    contact: {
      badge: 'Connect With Our Team',
      heading: "Let's Find the Right Solution for You",
      subheading: 'Connect with our team to discuss your residential, commercial or industrial requirements.',
      infoCompany: 'PARAM INDUSTRIES',
      personLabel: 'Key Contact Person',
      personName: 'Mukeshbhai Thakkar',
      phoneLabel: 'Direct Phone / WhatsApp',
      addressLabel: 'Office Location & Live Demo',
      addressVal: 'A/1501, Riviera Springs Skycity, Club 07 Road, Shela, Ahmedabad – 380058, Gujarat, India.',
      formTitle: 'Send Direct Enquiry',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Rajesh Patel',
      phoneLabelForm: 'Mobile Number *',
      phonePlaceholder: 'e.g. 9876543210',
      emailLabel: 'Email Address (Optional)',
      emailPlaceholder: 'e.g. rajesh@example.com',
      productLabel: 'Product Interested In *',
      applicationLabel: 'Application Type *',
      messageLabel: 'Message / Requirement Details',
      messagePlaceholder: 'Please specify your pipe size, water source (borewell/municipal), or specific scaling issues...',
      whatsappSubmitBtn: 'Send Enquiry on WhatsApp',
      callBtn: 'Call: +91 7984515685',
      directionsBtn: 'Get Directions on Google Maps',
      validationName: 'Please enter your name.',
      validationPhone: 'Please enter a valid 10-digit mobile number.',
      noteDisclaimer:
        'Note: Clicking "Send Enquiry on WhatsApp" formats your details and opens WhatsApp directly to chat with Mukeshbhai Thakkar. We respect your privacy.',
    },
    footer: {
      tagline: 'Clean Water... Healthy Life... Advanced Water & Energy Solutions.',
      quickLinks: 'Navigation',
      productsTitle: 'Solutions & Offerings',
      contactTitle: 'Param Industries',
      rights: '© 2026 PARAM INDUSTRIES. All Rights Reserved.',
      disclaimer:
        'Disclaimer: Water conditioning technology is designed to help manage scale formation; results vary based on water chemistry, temperature, and operating conditions. Drinking water must meet local potable standards.',
    },
    comparison: {
      title: 'Water Conditioning vs Traditional Methods',
      subtitle: 'Understand the distinct advantages of catalytic inline conditioning over conventional systems.',
      featureCol: 'Key Parameter',
      mollisaquaCol: 'MOLLISAQUA / Catalytic',
      ionSoftenerCol: 'Conventional Salt Softener',
      roCol: 'Reverse Osmosis (RO)',
      rows: [
        {
          feature: 'Working Principle',
          mollis: 'Catalytic alloy modifies crystal nucleation',
          softener: 'Ion-exchange resin replaces Ca/Mg with Na',
          ro: 'Semi-permeable membrane filtration under pressure',
        },
        {
          feature: 'External Electricity',
          mollis: 'Zero electricity needed',
          softener: 'Required for multiport valves / timers',
          ro: 'High electricity consumption for booster pump',
        },
        {
          feature: 'Salt / Chemicals',
          mollis: 'Zero salt or chemicals',
          softener: 'Requires ongoing 25-50kg salt bags',
          ro: 'Requires anti-scalant chemicals / sanitizers',
        },
        {
          feature: 'Water Wastage / Reject',
          mollis: '0% water waste (no backwash stream)',
          softener: 'Significant water waste during regeneration',
          ro: 'High reject water ratio (up to 50-70%)',
        },
        {
          feature: 'Mineral Retention',
          mollis: 'Retains natural calcium & magnesium',
          softener: 'Stripped of minerals, enriched with sodium',
          ro: 'Removes up to 95%+ of all dissolved minerals',
        },
        {
          feature: 'Maintenance Demand',
          mollis: 'Minimal / solid-state alloy',
          softener: 'Frequent resin cleaning & salt top-up',
          ro: 'Periodic filter & membrane replacements',
        },
      ],
    },
  },
  gu: {
    nav: {
      home: 'હોમ',
      solutions: 'અમારા સોલ્યુશન્સ',
      healthyLife: 'શુદ્ધ પાણી અને સ્વાસ્થ્ય',
      reels: 'લાઈવ રીલ્સ',
      technology: 'ટેકનોલોજી',
      applications: 'ઉપયોગ ક્ષેત્રો',
      industrial: 'ઔદ્યોગિક',
      about: 'અમારા વિશે',
      faqs: 'પ્રશ્નોત્તરી (FAQs)',
      contact: 'સંપર્ક',
      getQuote: 'મફત પરામર્શ મેળવો',
      callNow: 'કોલ કરો',
    },
    hero: {
      badge: 'શુદ્ધ પાણી... સ્વસ્થ જીવન... • અમદાવાદ',
      titleLine1: 'શુદ્ધ પાણી.',
      titleLine2: 'સ્વસ્થ જીવન.',
      subheading: 'ક્ષાર વાળા પાણીની મુશ્કેલીઓનું સરળ અને કાયમી સમાધાન',
      supportingText:
        'પાણીની ગુણવત્તા સુધારે છે, હાર્ડ પાણીને નરમ મુલાયમ પાણીમાં પરિવર્તિત કરે છે. માથાના ખરતા વાળ અને ચામડીની સમસ્યાઓથી રક્ષણ આપે છે, ઘરના નળ-ગીઝરને સુરક્ષિત રાખે છે - મીઠા કે કેમિકલ વગર.',
      exploreBtn: 'અમારા સોલ્યુશન્સ જુઓ',
      consultBtn: 'મફત પરામર્શ મેળવો',
      micro1: 'વીજળીની જરૂર નથી',
      micro2: 'મીઠા/કેમિકલ વગર',
      micro3: 'આજીવન મેન્ટેનન્સ નથી',
      hairSkinPill: 'માથાના ખરતા વાળ અને ચામડીના રોગો થતા અટકાવે',
      flowLabel: 'સતત ઇનલાઇન મિનરલ કન્ડિશનિંગ',
      specTitle: 'મોલિસાક્વા અને અકાનો સિસ્ટમ્સ',
      specSub: 'એન્જિનિયર્ડ કેટાલિટિક ક્ષાર વ્યવસ્થાપન',
      liveDemoBadge: 'લાઈવ ડેમો: શીલા, અમદાવાદ',
    },
    healthyLife: {
      badge: 'સ્વાસ્થ્ય અને જીવનશૈલી ફાયદા',
      heading: 'શુદ્ધ પાણી... સ્વસ્થ જીવન...',
      tagline: 'ક્ષાર વાળા પાણીની મુશ્કેલીઓનું સરળ અને કાયમી સમાધાન',
      subheading: 'પાણીની ગુણવત્તા સુધારે છે, હાર્ડ પાણી/નરમ મુલાયમ પાણીમાં પરિવર્તિત કરે છે.',
      intro:
        'બોરવેલ અને કઠણ પાણીમાં રહેલા ભારે કેલ્શિયમ અને મેગ્નેશિયમના કારણે વાળ ખરવા, ચામડી સુકાઈ જવી, બાથરૂમના નળ અને ટાઇલ્સ પર સફેદ ક્ષાર જામવો અને ગીઝર બગડવું સામાન્ય છે. પરમ ઈન્ડસ્ટ્રીઝનું વોટર કન્ડિશનર પાણીને મુલાયમ બનાવી આ તમામ મુશ્કેલીઓમાંથી મુક્તિ આપે છે.',
      b1Title: 'માથાના ખરતા વાળ અટકાવે',
      b1Desc:
        'હાર્ડ વોટરના ક્ષારને કારણે માથાની ચામડીમાં થતા નુકસાન અને વાળ ખરવાની સમસ્યા ઘટાડવામાં સહાયક બને છે.',
      b2Title: 'મુલાયમ ત્વચા અને ચામડીનું રક્ષણ',
      b2Desc:
        'ચામડીના રોગો અને ખંજવાળ થતા અટકાવે છે; સ્નાન પછી ત્વચા કુદરતી રીતે મુલાયમ અને તાજગીભરી રહે છે.',
      b3Title: 'કપડાં વધુ સાફ અને સોફ્ટ',
      b3Desc:
        'કપડાં અને ટુવાલ ધોયા પછી કડક થવાને બદલે મુલાયમ રહે છે અને તેના રંગો લાંબા સમય સુધી ચમકદાર રહે છે.',
      b4Title: 'સાબુ-શેમ્પૂનું વધુ ફીણ',
      b4Desc:
        'ઓછા સાબુ અને શેમ્પૂમાં પણ ઉત્તમ ફીણ થાય છે, જેથી સાબુનો બગાડ ઘટતા ઘરખર્ચમાં રાહત મળે છે.',
      b5Title: 'નળ અને ટાઇલ્સ પર ક્ષાર મુક્તિ',
      b5Desc:
        'શાવર, બાથરૂમના નળ અને કાચની પાર્ટીશન્સ પર જામતો સફેદ ડાઘવાળો ક્ષાર બનતો અટકે છે.',
      b6Title: 'ગીઝર અને સાધનોનું આયુષ્ય વધારે',
      b6Desc:
        'ગીઝરના હીટિંગ કોઈલ અને પાઇપલાઇનમાં ક્ષારનો થર જામતો નથી, જેથી ઉપકરણો લાંબા સમય સુધી કાર્યક્ષમ રહે છે.',
      fitForgetBadge: 'ફિટ એન્ડ ફર્ગેટ (Fit & Forget)',
      fitForgetDesc:
        'દર મહિને મીઠું ઉમેરવાની ઝંઝટ નહીં, કોઈ ફિલ્ટર બદલવાનું નહીં, આજીવન કોઈ મેન્ટેનન્સ નહીં. પાઇપલાઇનમાં એકવાર લગાવ્યા પછી નિશ્ચિંત રહો.',
    },
    reels: {
      badge: 'વાસ્તવિક સાઈટ પરિણામો • ઓટોપ્લે રીલ્સ',
      heading: 'લાઈવ સાઈટ ડેમોસ્ટ્રેશન અને વિડીયો રીલ્સ',
      tagline: 'અમદાવાદ અને ગુજરાતની સોસાયટીઓ અને બંગલાઓના અસલી પરિણામો',
      subheading:
        'અમદાવાદ અને ગુજરાતભરની સોસાયટીઓ, બંગલાઓ અને ફેક્ટરીઓમાં થયેલા સાચા ઇન્સ્ટોલેશન અને પરિણામોના વાસ્તવિક વિડીયો રીલ્સ જુઓ.',
      tabAll: 'વિડીયો રીલ્સ (૮ લાઈવ ડેમો)',
      tabPhotos: 'સાઈટ ઇન્સ્ટોલેશન (વાસ્તવિક ફોટા)',
      soundOn: 'અવાજ માટે ટેપ કરો',
      soundOff: 'અવાજ બંધ કરો',
      watchFull: 'આખી રીલ જુઓ',
      consultOnWhatsapp: 'આ ઇન્સ્ટોલેશન અંગે પૂછપરછ કરો',
      liveDemoLocation: 'અમદાવાદ, ગુજરાત • ૧૦૦% વાસ્તવિક સાઈટ',
      playVideo: 'રીલ ચલાવો',
      pauseVideo: 'રીલ થોભાવો',
      liveProofPill: '૧૦૦% વાસ્તવિક સાઈટ પ્રૂફ',
      muteHint: 'ઓટોપ્લે માટે અવાજ બંધ છે. લાઈવ અવાજ સાંભળવા સાઉન્ડ આઇકોન દબાવો.',
      unmuteHint: 'લાઈવ અવાજ ચાલુ છે.',
    },
    solutions: {
      heading: 'સ્માર્ટર ભવિષ્ય માટે નવીન સોલ્યુશન્સ',
      subtitle: 'જળ વ્યવસ્થાપન, સંસાધન સંરક્ષણ અને ટકાઉ કૂલિંગ માટે ટેકનોલોજી આધારિત સોલ્યુશન્સ.',
      card1Title: 'વોટર સોફ્ટનર / વોટર કન્ડિશનર',
      card1Badge: 'ફ્લેગશિપ કન્ડિશનિંગ',
      card1Desc:
        'રહેણાંક, વ્યાપારી અને ઔદ્યોગિક પ્રણાલીઓમાં કઠણ પાણીના ક્ષાર (સ્કેલિંગ)ની અસરોને નિયંત્રિત કરવા માટે અદ્યતન ઇનલાઇન વોટર કન્ડિશનિંગ ટેકનોલોજી.',
      card1F1: 'ક્ષાર અને કાટનું જમાવટ અટકાવવામાં મદદરૂપ',
      card1F2: 'કેટાલિટિક કન્ડિશનર માટે બાહ્ય વીજળીની જરૂર નથી',
      card1F3: 'કોઈપણ મીઠું કે રાસાયણિક ડોઝિંગની જરૂર નથી',
      card1Btn: 'વોટર કન્ડિશનિંગ વિગતો જુઓ',

      card2Title: 'વોટર-ફ્રી યુરીનલ કાર્ટ્રીજ',
      card2Badge: 'જળ સંરક્ષણ',
      card2Desc:
        'સુસંગત વૉટરલેસ યુરીનલ સિસ્ટમ્સ માટે રચાયેલ વ્યવહારુ જળ સંરક્ષણ સોલ્યુશન, જે કોમર્શિયલ અને જાહેર સુવિધાઓમાં ફ્લશિંગના પાણીનો બગાડ ઘટાડે છે.',
      card2F1: 'વાર્ષિક હજારો લિટર પીવાના પાણીની બચત',
      card2F2: 'હાઇજીનિક બેરિયર સીલ ટેકનોલોજી અને દુર્ગંધ મુક્ત',
      card2F3: 'ઓફિસો, હોટલો, હોસ્પિટલો અને જાહેર સંકુલો માટે શ્રેષ્ઠ',
      card2Btn: 'પૂછપરછ કરો',

      card3Title: 'હીટ પંપ',
      card3Badge: 'ઉર્જા કાર્યક્ષમ',
      card3Desc:
        'ગરમ પાણીની જરૂરિયાત માટે અત્યંત ઉર્જા-કાર્યક્ષમ હીટ પંપ સોલ્યુશન્સ, જે વીજ વપરાશમાં નોંધપાત્ર બચત કરવામાં મદદ કરે છે.',
      card3F1: 'ઉચ્ચ થર્મલ કાર્યક્ષમતા (COP)',
      card3F2: 'કોમર્શિયલ અને રહેણાંક ગરમ પાણી માટે શ્રેષ્ઠ',
      card3F3: 'સામાન્ય ગીઝર કરતાં ઘણો ઓછો કાર્બન ઉત્સર્જન',
      card3Btn: 'પૂછપરછ કરો',

      card4Title: 'સોલાર એર કન્ડિશનર (Solar AC)',
      card4Badge: 'ટકાઉ કૂલિંગ',
      card4Desc:
        'ટકાઉ કૂલિંગ માટે સૌર ઉર્જા સુસંગત એર-કન્ડિશનિંગ સોલ્યુશન્સ, જે સામાન્ય વીજળી પરની નિર્ભરતા ઘટાડવામાં મદદરૂપ બને છે.',
      card4F1: 'સોલાર ફોટોવોલ્ટેઇક પાવર સાથે કૂલિંગ ઇન્ટિગ્રેશન',
      card4F2: 'ઓપ્ટિમાઇઝ્ડ ઇન્વર્ટર ડ્રાઇવ ટેકનોલોજી',
      card4F3: 'દિવસના સમયમાં વીજ બિલમાં નોંધપાત્ર રાહત',
      card4Btn: 'પૂછપરછ કરો',

      aqanoTitle: 'અકાનો (AQANO) વોટર કન્ડિશનર રેન્જ',
      aqanoSubtitle: 'વિશિષ્ટ નામવાળી વોટર કન્ડિશનિંગ રેન્જ',
      aqanoDesc:
        'મોલિસાક્વા ઉપરાંત, પરમ ઈન્ડસ્ટ્રીઝ વિવિધ રહેણાંક અને વ્યાપારી પાઇપિંગ જરૂરિયાતો માટે અકાનો (AQANO) વોટર કન્ડિશનર સોલ્યુશન્સ પણ ઉપલબ્ધ કરાવે છે.',
    },
    mollisaqua: {
      badge: 'વિશિષ્ટ ટેકનોલોજી હાઇલાઇટ',
      heading: 'મોલિસાક્વા (MOLLISAQUA) — અદ્યતન વોટર કન્ડિશનિંગ ટેકનોલોજી',
      subheading: 'કઠણ પાણીના ક્ષારના નિયંત્રણ માટે એક નવીન અભિગમ.',
      desc1:
        'મોલિસાક્વા એ ઇનલાઇન કેટાલિટિક મેટલ આધારિત વોટર કન્ડિશનર છે જે કોઈપણ બાહ્ય વીજળી, મીઠું કે રસાયણો વિના કાર્ય કરે છે.',
      desc2:
        'તે પાણીમાં રહેલા ઉપયોગી કુદરતી ખનિજોને જાળવી રાખીને હાર્ડ વોટરના ક્ષારની અસરોને નિયંત્રિત કરવામાં મદદ કરવા માટે રચાયેલ છે.',
      b1Title: 'વીજળીની જરૂર નથી',
      b1Desc: 'ઝીરો વાયરિંગ અને કોઈ વીજળી વગર પાણીના કુદરતી પ્રવાહના દબાણ પર જ કાર્ય કરે છે.',
      b2Title: 'મીઠું કે કેમિકલ મુક્ત',
      b2Desc: 'પાણીમાં કોઈ સોલ્ટ બેગ્સ, રેઝિન કે કેમિકલ ઉમેરવાની જરૂર પડતી નથી.',
      b3Title: 'કોઈ મુવિંગ પાર્ટ્સ નથી',
      b3Desc: 'સોલિડ-સ્ટેટ મેટાલિક એલોય ડિઝાઇન જેનાથી યાંત્રિક ઘસારો કે બગાડ થતો નથી.',
      b4Title: 'ક્ષાર ઘટાડવામાં મદદરૂપ',
      b4Desc: 'ક્ષારના સ્ફટિકોની રચના બદલીને પાઇપ પર ચોંટતો કઠણ ક્ષાર બનતો અટકાવવામાં સહાય કરે છે.',
      b5Title: 'સાધનોની ક્ષમતા જાળવે છે',
      b5Desc: 'હીટિંગ એલિમેન્ટ્સ, ગીઝર અને પાઇપલાઇનમાં ક્ષારનો થર જામતો રોકી કાર્યક્ષમતા ટકાવી રાખે છે.',
      b6Title: 'ઓછા મેન્ટેનન્સવાળી ડિઝાઇન',
      b6Desc: 'નોન-કન્ઝ્યુમેબલ કેટાલિટિક કોર નિયમિત જાળવણી વગર લાંબા સમય સુધી કાર્યરત રહે છે.',
      techPrincipleTitle: 'ઉત્પાદક દ્વારા વર્ણવેલ કાર્ય સિદ્ધાંત',
      techPrincipleDesc:
        'ઉત્પાદકની વિગતો મુજબ આ સિસ્ટમ નોબલ અને સેમી-નોબલ ધાતુઓના ખાસ એન્જિનિયર્ડ એલોય અને કેટાલિટિક રેડોક્સ મિકેનિઝમ પર કાર્ય કરે છે. જ્યારે પાણી આ ચેમ્બરમાંથી પસાર થાય છે, ત્યારે સપાટી પરની પ્રક્રિયા કેલ્શિયમ અને મેગ્નેશિયમ આયનોને પાઇપની સપાટી પર ચોંટવાને બદલે સ્થિર, ન-ચોંટે તેવા માઇક્રો-સ્ફટિકોમાં ફેરવે છે.',
      disclaimer:
        'તકનીકી નોંધ: આ કાર્ય સિદ્ધાંત ઉત્પાદક દ્વારા આપવામાં આવેલ માહિતી મુજબ છે. પરિણામ પાણીની ગુણવત્તા, પ્રવાહ દર અને પરિસ્થિતિઓ પર આધારિત છે.',
      viewSpecsBtn: 'મોલિસાક્વાની વિગતો ચર્ચો',
    },
    science: {
      badge: 'કાર્ય સિદ્ધાંત અને વિજ્ઞાન',
      heading: 'વોટર કન્ડિશનિંગ પાછળનું વિજ્ઞાન',
      subheading:
        'આરોગ્યપ્રદ ખનિજો દૂર કર્યા વગર કઠણ પાણીના સ્ફટિકીકરણને નિયંત્રિત કરવા માટેનો એન્જિનિયર્ડ કેટાલિટિક અભિગમ.',
      stage1Title: 'સ્ટેજ ૧ — હાર્ડ વોટરનો પ્રવેશ',
      stage1Desc:
        'ઓગળેલા કેલ્શિયમ (Ca²⁺) અને મેગ્નેશિયમ (Mg²⁺) આયનો ધરાવતું અશુદ્ધ કઠણ પાણી પાઇપલાઇનના સામાન્ય દબાણ હેઠળ યુનિટમાં પ્રવેશે છે.',
      stage1Details:
        'સામાન્ય પાઈપોમાં તાપમાન અને દબાણના ફેરફારથી આ ખનિજો પાઇપની દીવાલો પર કઠણ ક્ષાર (સ્કેલ) તરીકે ચોંટી જાય છે.',
      stage2Title: 'સ્ટેજ ૨ — કેટાલિટિક કન્ડિશનિંગ',
      stage2Desc:
        'ચેમ્બરની અંદર રહેલા ખાસ એન્જિનિયર્ડ કેટાલિટિક એલોય કોરની સપાટી પરથી પાણી વહે છે.',
      stage2Details:
        'ઉત્પાદકના જણાવ્યા અનુસાર, કેટાલિટિક સપાટી પર થતી પ્રક્રિયાઓ માઇક્રો-રેડોક્સ સંભવિત ફેરફારો બનાવે છે જે સ્ફટિકીકરણને પ્રભાવિત કરે છે.',
      stage3Title: 'સ્ટેજ ૩ — ક્ષાર વ્યવસ્થાપન અસર',
      stage3Desc:
        'ખનિજો બારીક, મુક્ત રીતે વહેતા એરાગોનાઇટ જેવા સૂક્ષ્મ સ્ફટિકો બનાવે છે જે ચોંટતા નથી.',
      stage3Details:
        'આ ટેકનોલોજી સામાન્ય આયન-એક્સચેન્જ સોફ્ટનરની જેમ ખનિજો હટાવ્યા વગર ક્ષાર જામવાની વૃત્તિ ઘટાડવામાં મદદ કરે છે.',
      keyFact1Title: 'ખનિજો દૂર કરતું નથી',
      keyFact1Desc: 'પાણીમાં રહેલા જરૂરી કુદરતી કેલ્શિયમ અને મેગ્નેશિયમને જાળવી રાખે છે, સોડિયમ મીઠું ઉમેરતું નથી.',
      keyFact2Title: 'TDS ઘટાડતું નથી',
      keyFact2Desc: 'રિવર્સ ઓસ્મોસિસ (RO) ની જેમ આ સિસ્ટમ TDS ઓછું કરતી નથી કે કુદરતી ખનિજો ઘટાડતી નથી.',
      keyFact3Title: 'પરિસ્થિતિ આધારિત પરિણામ',
      keyFact3Desc: 'પાણીનો પ્રવાહ દર, હાર્ડનેસનું સ્તર અને તાપમાન મુજબ ક્ષાર નિયંત્રણનું પ્રમાણ અલગ હોઈ શકે છે.',
      disclaimerTitle: 'અનિવાર્ય તકનીકી પારદર્શિતા',
      disclaimerText:
        'કેટાલિટિક વોટર કન્ડિશનર સ્કેલિંગ (ક્ષાર) નિયંત્રણ માટે છે. તે બેક્ટેરિયા મુક્ત કરતું નથી કે પીવાના પાણીનું ફિલ્ટર નથી. પીવાના પાણી માટે યોગ્ય શુદ્ધિકરણ જરૂરી છે.',
    },
    applications: {
      badge: 'બહુલક્ષી ઉપયોગિતા',
      heading: 'વિવિધ એપ્લિકેશન્સ માટે રચાયેલ',
      subtitle: 'રહેણાંક, વ્યાપારી, ઔદ્યોગિક અને કૃષિ ક્ષેત્રમાં પાઇપિંગ અને સાધનોનું રક્ષણ.',
      ctaBtn: 'તમારી જરૂરિયાત જણાવો',
      app1Name: 'રહેણાંક મકાનો અને બંગલો',
      app1Desc: 'નળ, શાવર, ગીઝર, સોલાર વોટર હીટર અને બાથરૂમ ફિટિંગ્સનું રક્ષણ.',
      app2Name: 'હોટેલ્સ અને હોસ્પિટાલિટી',
      app2Desc: 'કોમર્શિયલ કિચન, લોન્ડ્રી સિસ્ટમ્સ, સેન્ટ્રલ બોઇલર્સ અને બાથરૂમ પાઇપલાઇન.',
      app3Name: 'હોસ્પિટલો અને ક્લિનિક્સ',
      app3Desc: 'ગરમ પાણીની લાઈનો, લોન્ડ્રી અને યુટિલિટી સિસ્ટમ્સ (બિન-તબીબી ઉપયોગી પાણી).',
      app4Name: 'કોમર્શિયલ બિલ્ડિંગ્સ',
      app4Desc: 'કોર્પોરેટ ઓફિસો, શોપિંગ મોલ્સ, સંસ્થાઓ અને કૂલિંગ સર્કિટ્સ.',
      app5Name: 'ફેક્ટરીઓ અને ઔદ્યોગિક એકમો',
      app5Desc: 'પ્રોસેસ પાઇપલાઇન્સ, હીટ એક્સચેન્જર્સ, કૂલિંગ જેકેટ્સ અને પ્લાન્ટ યુટિલિટીઝ.',
      app6Name: 'કૃષિ અને સિંચાઈ (Crop Booster)',
      app6Desc: 'ડ્રીપ ઈરીગેશન, માઇક્રો-સ્પ્રિંકલર્સ, બોરવેલ પાઇપ્સ અને ફર્ટિગેશન સિસ્ટમ્સ.',
      app7Name: 'ડેરી, પોલ્ટ્રી અને ફિશ ફાર્મ્સ',
      app7Desc: 'વોશિંગ લાઇન્સ, મિસ્ટિંગ સિસ્ટમ્સ, પશુઓ માટે પીવાના પાણીની લાઈનો.',
      app8Name: 'બોઇલર્સ, ચિલર્સ અને કૂલિંગ સિસ્ટમ્સ',
      app8Desc: 'કૂલિંગ ટાવર લૂપ્સ, હીટ રિકવરી કન્ડેન્સર્સ અને લો-પ્રેશર સ્ટીમ બોઇલર્સ.',
    },
    industrial: {
      badge: 'ઔદ્યોગિક કામગીરી અને એન્જિનિયરિંગ',
      heading: 'ઔદ્યોગિક પ્રણાલીઓ માટે સ્માર્ટ સ્કેલ મેનેજમેન્ટ',
      subheading: 'અદ્યતન વોટર-કન્ડિશનિંગ સોલ્યુશન્સ દ્વારા સાધનોની કાર્યક્ષમતામાં સહાય.',
      principleTitle: 'ઔદ્યોગિક કાર્ય સિદ્ધાંત',
      principleDesc:
        'ઉત્પાદકના જણાવ્યા અનુસાર મોલિસાક્વા ઔદ્યોગિક પાઇપલાઇનમાં ફિટ કરવામાં આવતા ખાસ કેટાલિટિક મેટલ એલોયનો ઉપયોગ કરે છે. તેનો મુખ્ય ઉદ્દેશ બોઇલર્સ, હીટ એક્સચેન્જર્સ અને ચિલર્સ જેવા થર્મલ સાધનોમાં કેમિકલ વગર મિનરલ સ્કેલિંગનું નિયંત્રણ કરવાનો છે.',
      benefitTitle: 'સંભવિત ઔદ્યોગિક ફાયદાઓ',
      b1: 'હીટ ટ્રાન્સફર સપાટીઓ પર ક્ષાર (લાઈમસ્કેલ) જામતો અટકાવવામાં સહાયક',
      b2: 'હીટ-ટ્રાન્સફર કાર્યક્ષમતા અને થર્મલ વહનમાં મદદરૂપ થઈ શકે છે',
      b3: 'વારંવાર ડીસ્કેલિંગ કેમિકલ્સ અને શટડાઉનની જરૂરિયાત ઘટાડી શકે છે',
      b4: 'સાધનોની વિશ્વસનીયતા અને પાઇપ પ્રવાહ જાળવવામાં ઉપયોગી',
      b5: 'પસંદગીના ઉદ્યોગોમાં મૂલ્યાંકન અને ઉપયોગ માટે યોગ્ય',
      b6: 'ઝીરો બાહ્ય વીજળી અને સોલ્ટ વગર સંપૂર્ણ સુરક્ષિત સંચાલન',
      note: 'તકનીકી નોંધ: સિસ્ટમની યોગ્યતા અને પરિણામો પાણીની રસાયણશાસ્ત્ર, ઓપરેટિંગ પરિસ્થિતિઓ અને ચોક્કસ પરીક્ષણ પર આધારિત છે.',
      ctaBtn: 'ઔદ્યોગિક પરામર્શ મેળવો',
    },
    about: {
      badge: 'કંપની પરિચય',
      heading: 'વોટર અને સસ્ટેનેબલ ટેકનોલોજીમાં તમારો વિશ્વાસપાત્ર ભાગીદાર',
      p1: 'પરમ ઈન્ડસ્ટ્રીઝ (PARAM INDUSTRIES), અમદાવાદ, ગુજરાત સ્થિત એક અગ્રણી સંસ્થા છે, જે રહેણાંક, વ્યાપારી, કૃષિ અને ઔદ્યોગિક જરૂરિયાતો માટે વોટર-કન્ડિશનિંગ, જળ-બચત અને ઉર્જા-કાર્યક્ષમ ઉત્પાદનો પૂરા પાડે છે.',
      p2: 'કંપની ગુજરાત અને ભારતમાં પાણીની કઠિનતા અને સંસાધન બચતના પડકારોને પહોંચી વળવા વ્યવહારુ ટેકનોલોજી, પારદર્શક એન્જિનિયરિંગ માર્ગદર્શન અને ગ્રાહકલક્ષી સોલ્યુશન્સ પર ધ્યાન કેન્દ્રિત કરે છે.',
      mollisaquaTitle: 'મોલિસાક્વા (MOLLISAQUA) નો ટેકનોલોજી અનુભવ',
      mollisaquaText:
        'ઉત્પાદક દ્વારા આપવામાં આવેલી માહિતી અનુસાર, મોલિસાક્વા પાસે વોટર ટ્રીટમેન્ટ ટેકનોલોજીમાં ૨૦ થી વધુ વર્ષોનો અનુભવ છે અને યુએસએ (USA) તથા ઓસ્ટ્રેલિયા સહિત આંતરરાષ્ટ્રીય હાજરી છે. પરમ ઈન્ડસ્ટ્રીઝ આ કેટાલિટિક કન્સેપ્ટ સ્થાનિક ગ્રાહકો સુધી પહોંચાડે છે.',
      locationTitle: 'અમારું અમદાવાદ સ્થિત કાર્યાલય',
      locationText:
        'રિવેરા સ્પ્રિંગ્સ સ્કાયસિટી, ક્લબ ૦૭ રોડ, શીલા, અમદાવાદ ખાતે સ્થિત અમારું કાર્યાલય લાઈવ ડેમો, ટેકનિકલ સલાહ અને યોગ્ય સાઈઝિંગ માટે હંમેશા ઉપલબ્ધ છે.',
      coreValuesTitle: 'અમારા મુખ્ય કાર્ય સિદ્ધાંતો',
      v1Title: 'તકનીકી પારદર્શિતા',
      v1Desc: 'અતિશયોક્તિ કે અવાસ્તવિક વચનો આપ્યા વગર સાચી અને સચોટ માહિતી ગ્રાહક સુધી પહોંચાડવી.',
      v2Title: 'કુદરતી સંસાધનોનું સંરક્ષણ',
      v2Desc: 'પાણી બચાવતા યુરીનલ કાર્ટ્રીજ અને શૂન્ય કચરો પેદા કરતા કેટાલિટિક કન્ડિશનર્સને પ્રાથમિકતા.',
      v3Title: 'ગ્રાહકલક્ષી સાઈઝિંગ',
      v3Desc: 'દરેક પાઇપલાઈન અને ઉપયોગ માટે યોગ્ય ડાયામીટર અને પ્રવાહ ક્ષમતા અનુસાર માર્ગદર્શન.',
    },
    faqs: {
      badge: 'સ્પષ્ટ પ્રશ્નોત્તરી',
      heading: 'વારંવાર પૂછાતા પ્રશ્નો (FAQs)',
      subtitle: 'કેટાલિટિક વોટર કન્ડિશનિંગ અને અમારા ઉત્પાદનો વિશે પ્રમાણિક અને સચોટ જવાબો.',
      items: [
        {
          q: 'શું મોલિસાક્વા TDS ઘટાડે છે?',
          a: 'ના. મોલિસાક્વા એ RO વોટર પ્યુરિફાયર નથી. તે કેટાલિટિક વોટર કન્ડિશનર તરીકે કાર્ય કરે છે અને રિવર્સ ઓસ્મોસિસની જેમ ઓગળેલા ક્ષારો દૂર કરતું નથી કે TDS ઘટાડતું નથી.',
        },
        {
          q: 'શું તે પાણીની કઠિનતા (Hardness) દૂર કરે છે?',
          a: 'તે સામાન્ય આયન-એક્સચેન્જ સોફ્ટનરની જેમ ખનિજોને પાણીમાંથી બહાર કાઢતું નથી. તેનો મુખ્ય હેતુ પાઇપ પર ચોંટતા સ્કેલિંગ (ક્ષાર)ને નિયંત્રિત કરવામાં મદદ કરવાનો છે.',
        },
        {
          q: 'શું કન્ડિશનર માટે વીજળીની જરૂર પડે છે?',
          a: 'આ કેટાલિટિક ઇનલાઇન વોટર કન્ડિશનર કોઈપણ બાહ્ય વીજળી વિના કાર્ય કરવા માટે રચાયેલ છે.',
        },
        {
          q: 'શું તેમાં મીઠું (Salt) કે રસાયણો ઉમેરવા પડે છે?',
          a: 'ના. આ કન્ડિશનર કોઈપણ મીઠાના રિજનરેશન કે રાસાયણિક ડોઝિંગ વગર કાર્ય કરે છે.',
        },
        {
          q: 'શું કન્ડિશન્ડ થયેલું પાણી પીવા માટે સુરક્ષિત છે?',
          a: 'પીવાના પાણીની સલામતી તેના સ્ત્રોત અને રહેલા દૂષિત તત્વો પર આધારિત છે. વોટર કન્ડિશનર પાણીને જંતુમુક્ત કે શુદ્ધ કરતું નથી. પીવા માટે યોગ્ય ટેસ્ટિંગ અને ફિલ્ટરેશન જરૂરી છે.',
        },
        {
          q: 'શું તેનો ઉપયોગ ઔદ્યોગિક હેતુઓ માટે થઈ શકે?',
          a: 'હા, તકનીકી સુસંગતતા અને પાણીની ગુણવત્તાના મૂલ્યાંકન પછી પસંદગીની ઔદ્યોગિક પ્રણાલીઓ માટે તેનો વિચાર કરી શકાય છે.',
        },
        {
          q: 'શું પાણીનું ટેસ્ટિંગ કરાવવું જરૂરી છે?',
          a: 'હા, ચોક્કસ એપ્લિકેશન માટે પાણીની હાર્ડનેસ, TDS અને એકંદર ગુણવત્તા ચકાસવા માટે વોટર ટેસ્ટ કરાવવાની ભલામણ કરવામાં આવે છે.',
        },
        {
          q: 'આ સિસ્ટમનું અંદાજિત આયુષ્ય કેટલું હોય છે?',
          a: 'ઉત્પાદકના માર્કેટિંગ મટિરિયલમાં આશરે ૪૦-૪૫ વર્ષના સર્વિસ લાઇફનો ઉલ્લેખ છે. તેને ગેરેન્ટેડ ગણવો નહીં; સત્તાવાર ટેકનિકલ દસ્તાવેજો પરથી વોરંટી વિગતો માન્ય રાખવી.',
        },
        {
          q: 'શું સિસ્ટમ મેન્ટેનન્સ-ફ્રી છે?',
          a: 'ઉત્પાદનને ઓછા મેન્ટેનન્સ અને નો-મુવિંગ-પાર્ટ્સ ડિઝાઇન તરીકે દર્શાવવામાં આવ્યું છે. તેમ છતાં પાઇપલાઇન અને ઇન્સ્ટોલેશનની સ્થિતિ મુજબ સમયાંતરે સામાન્ય તપાસ સલાહભર્યું છે.',
        },
        {
          q: 'હું ડેમોન્સ્ટ્રેશન માટે કેવી રીતે વિનંતી કરી શકું?',
          a: 'ગ્રાહકો પ્રોડક્ટની ઉપલબ્ધતા, ટેકનિકલ માર્ગદર્શન અને ડેમો માટે પરમ ઈન્ડસ્ટ્રીઝનો +91 7984515685 પર સીધો સંપર્ક કરી શકે છે અથવા શીલા, અમદાવાદ ખાતે પધારી શકે છે.',
        },
      ],
    },
    contact: {
      badge: 'અમારી ટીમ સાથે સંપર્ક કરો',
      heading: 'ચાલો તમારા માટે યોગ્ય સોલ્યુશન શોધીએ',
      subheading: 'તમારી રહેણાંક, વ્યાપારી કે ઔદ્યોગિક જરૂરિયાતોની ચર્ચા કરવા માટે અમારો સંપર્ક કરો.',
      infoCompany: 'પરમ ઈન્ડસ્ટ્રીઝ (PARAM INDUSTRIES)',
      personLabel: 'સંપર્ક વ્યક્તિ',
      personName: 'મુકેશભાઈ ઠક્કર',
      phoneLabel: 'સીધો ફોન / વોટ્સએપ',
      addressLabel: 'ઓફિસનું સરનામું અને લાઈવ ડેમો',
      addressVal: 'A/1501, રિવેરા સ્પ્રિંગ્સ સ્કાયસિટી, ક્લબ ૦૭ રોડ, શીલા, અમદાવાદ – 380058, ગુજરાત, ભારત.',
      formTitle: 'સીધી પૂછપરછ મોકલો',
      nameLabel: 'પૂરું નામ *',
      namePlaceholder: 'દા.ત. મુકેશભાઈ પટેલ',
      phoneLabelForm: 'મોબાઇલ નંબર *',
      phonePlaceholder: 'દા.ત. 9876543210',
      emailLabel: 'ઇમેઇલ એડ્રેસ (વૈકલ્પિક)',
      emailPlaceholder: 'દા.ત. mukesh@example.com',
      productLabel: 'રસ ધરાવતું ઉત્પાદન *',
      applicationLabel: 'એપ્લિકેશન પ્રકાર *',
      messageLabel: 'જરૂરિયાતની વિગતો / સંદેશ',
      messagePlaceholder: 'કૃપા કરીને પાઇપ સાઇઝ, પાણીનો સ્ત્રોત (બોરવેલ/મ્યુનિસિપલ) અથવા ચોક્કસ સ્કેલિંગ સમસ્યા જણાવો...',
      whatsappSubmitBtn: 'વોટ્સએપ પર પૂછપરછ મોકલો',
      callBtn: 'કોલ કરો: +91 7984515685',
      directionsBtn: 'ગૂગલ મેપ્સ પર દિશા મેળવો',
      validationName: 'કૃપા કરીને તમારું નામ લખો.',
      validationPhone: 'કૃપા કરીને માન્ય ૧૦ આંકડાનો મોબાઇલ નંબર દાખલ કરો.',
      noteDisclaimer:
        'નોંધ: "વોટ્સએપ પર પૂછપરછ મોકલો" બટન ક્લિક કરવાથી તમારી વિગતો સાથે સીધું વોટ્સએપ ખુલશે અને મુકેશભાઈ ઠક્કર સાથે સીધી વાતચીત શરૂ થશે.',
    },
    footer: {
      tagline: 'શુદ્ધ પાણી... સ્વસ્થ જીવન... ટકાઉ આવતીકાલ માટે નવીન વોટર અને એનર્જી સોલ્યુશન્સ.',
      quickLinks: 'ઝડપી લિંક્સ',
      productsTitle: 'સોલ્યુશન્સ અને પ્રોડક્ટ્સ',
      contactTitle: 'પરમ ઈન્ડસ્ટ્રીઝ',
      rights: '© 2026 પરમ ઈન્ડસ્ટ્રીઝ. સર્વાધિકાર સુરક્ષિત.',
      disclaimer:
        'ડિસ્ક્લેમર: વોટર કન્ડિશનિંગ ટેકનોલોજી ક્ષાર નિયંત્રણમાં મદદ માટે રચાયેલ છે; પરિણામ પાણીની ગુણવત્તા, તાપમાન અને સ્થિતિ પર આધારિત છે. પીવાનું પાણી સ્થાનિક શુદ્ધતા ધોરણો મુજબ હોવું જરૂરી છે.',
    },
    comparison: {
      title: 'વોટર કન્ડિશનિંગ વિરુદ્ધ પરંપરાગત પદ્ધતિઓ',
      subtitle: 'સામાન્ય સિસ્ટમ્સની સરખામણીમાં કેટાલિટિક ઇનલાઇન કન્ડિશનિંગના વિશિષ્ટ ફાયદા સમજો.',
      featureCol: 'મુખ્ય પરિમાણ',
      mollisaquaCol: 'મોલિસાક્વા / કેટાલિટિક',
      ionSoftenerCol: 'સામાન્ય સોલ્ટ સોફ્ટનર',
      roCol: 'રિવર્સ ઓસ્મોસિસ (RO)',
      rows: [
        {
          feature: 'કાર્ય સિદ્ધાંત',
          mollis: 'કેટાલિટિક એલોય સ્ફટિકોની રચના બદલે છે',
          softener: 'આયન એક્સચેન્જ રેઝિન Ca/Mg ની જગ્યાએ Na મૂકે છે',
          ro: 'ઊંચા દબાણે સેમી-પરમીએબલ મેમ્બ્રેન ફિલ્ટરેશન',
        },
        {
          feature: 'બાહ્ય વીજળી',
          mollis: 'શૂન્ય વીજળીની જરૂરિયાત',
          softener: 'મલ્ટિપોર્ટ વાલ્વ / ટાઈમર માટે વીજળી જરૂરી',
          ro: 'બૂસ્ટર પંપ માટે સતત વધુ વીજ વપરાશ',
        },
        {
          feature: 'મીઠું / રસાયણો',
          mollis: 'શૂન્ય મીઠું કે કેમિકલ',
          softener: 'દર મહિને ૨૫-૫૦ કિલો સોલ્ટ બેગ્સની જરૂર',
          ro: 'એન્ટી-સ્કેલેન્ટ કેમિકલ્સ અને સેનિટાઈઝર્સ',
        },
        {
          feature: 'પાણીનો બગાડ',
          mollis: '૦% પાણીનો બગાડ (નો બેકવોશ)',
          softener: 'રીજનરેશન વખતે પુષ્કળ પાણીનો બગાડ',
          ro: '૫૦% થી ૭૦% પાણી રિજેક્ટ તરીકે વેડફાય છે',
        },
        {
          feature: 'ખનિજોની જાળવણી',
          mollis: 'કુદરતી કેલ્શિયમ અને મેગ્નેશિયમ જળવાઈ રહે છે',
          softener: 'કુદરતી ખનિજો હટીને સોડિયમ મીઠું વધે છે',
          ro: '૯૫%+ કુદરતી ઉપયોગી ખનિજો દૂર થાય છે',
        },
        {
          feature: 'મેન્ટેનન્સની જરૂરિયાત',
          mollis: 'નહિવત / સોલિડ-સ્ટેટ એલોય',
          softener: 'વારંવાર રેઝિન સફાઈ અને મીઠું ભરવું',
          ro: 'સમયાંતરે ફિલ્ટર્સ અને મેમ્બ્રેન બદલવા',
        },
      ],
    },
  },
};
