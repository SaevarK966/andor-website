export type Locale = 'is' | 'en';

export type RouteKey =
  | 'home'
  | 'controlSystems'
  | 'projects'
  | 'myscada'
  | 'about'
  | 'contact';

export const alternateLocale: Record<Locale, Locale> = {
  is: 'en',
  en: 'is',
};

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { is: '/', en: '/en/' },
  controlSystems: { is: '/stjornkerfi/', en: '/en/control-systems/' },
  projects: { is: '/verkefni/', en: '/en/projects/' },
  myscada: { is: '/myscada/', en: '/en/myscada/' },
  about: { is: '/um-andor/', en: '/en/about/' },
  contact: { is: '/hafa-samband/', en: '/en/contact/' },
};

export const routePath = (route: RouteKey, locale: Locale) => routes[route][locale];

const common = {
  is: {
    nav: {
      controlSystems: 'Stjórnkerfi',
      projects: 'Verkefni',
      myscada: 'mySCADA',
      about: 'Um AndOr',
      contact: 'Hafa samband',
    },
    language: 'English',
    languageCode: 'EN',
    openMenu: 'Opna valmynd',
    closeMenu: 'Loka valmynd',
    lightTheme: 'Skipta yfir í ljóst þema',
    darkTheme: 'Skipta yfir í dökkt þema',
    skipToContent: 'Fara beint í efni',
    tagline: 'Hönnun stjórnkerfa',
    phoneLabel: 'Sími',
    officeLabel: 'Skrifstofa',
  },
  en: {
    nav: {
      controlSystems: 'Control systems',
      projects: 'Projects',
      myscada: 'mySCADA',
      about: 'About',
      contact: 'Contact',
    },
    language: 'Íslenska',
    languageCode: 'IS',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    lightTheme: 'Switch to light theme',
    darkTheme: 'Switch to dark theme',
    skipToContent: 'Skip to content',
    tagline: 'Control-system design',
    phoneLabel: 'Phone',
    officeLabel: 'Office',
  },
} as const;

const home = {
  is: {
    metaTitle: 'AndOr | Heildarlausnir í stjórnkerfum',
    metaDescription:
      'AndOr hannar, forritar og gangsetur sérsniðin stjórnkerfi og er umboðsaðili mySCADA á Íslandi.',
    hero: {
      title: 'Heildarlausnir í stjórnkerfum',
      accent: 'Frá hönnun að gangsetningu',
      lead:
        'AndOr ehf. býður upp á heildarlausnir sniðnar að þínum þörfum og veitir ráðgjöf varðandi val stjórnkerfa. Umboðsaðili mySCADA á Íslandi.',
      primary: 'Hafa samband',
      secondary: 'Skoða lausnir',
      eyebrow: 'Hönnun · Forritun · Gangsetning',
    },
    services: {
      kicker: 'Þjónusta',
      title: 'Hvað gerum við?',
      lead:
        'Við fylgjum verkefnum frá hönnun og stýriteikningum að gangsetningu og prófunum. Skjámyndakerfin eru frá mySCADA, sem AndOr er umboðsaðili fyrir á Íslandi.',
      primary: 'Skoða stjórnkerfi',
      secondary: 'mySCADA búnaður',
      steps: [
        {
          number: '01 · HÖNNUN',
          title: 'Hönnun og ráðgjöf',
          body: 'Þarfagreining og hönnun stjórnkerfis í samráði við viðskiptavin, ásamt ráðgjöf um val búnaðar.',
        },
        {
          number: '02 · TEIKNINGAR',
          title: 'Stýriteikningar',
          body: 'Vandaðar stýriteikningar sem hægt er að smíða stjórnskápa eftir, í samstarfi við skápasmiði.',
        },
        {
          number: '03 · FORRITUN',
          title: 'Iðntölvuforritun',
          body: 'Forritun á Siemens iðntölvubúnaði og uppsetning skjámyndakerfa frá mySCADA.',
        },
        {
          number: '04 · GANGSETNING',
          title: 'Gangsetning og prófanir',
          body: 'Kerfið er gangsett, prófað og afhent tilbúið til reksturs.',
        },
      ],
    },
    projects: {
      kicker: 'Verkefni',
      title: 'Lausnir byggðar fyrir raunverulegan rekstur',
      body: 'Við hönnum stjórnkerfi og skjámyndir með skýra yfirsýn, örugga stýringu og þarfir rekstursins að leiðarljósi.',
      action: 'Skoða verkefni',
    },
    proof: {
      kicker: 'Samfellt ferli',
      title: 'Einn skýr samstarfsflötur í gegnum verkefnið',
      items: ['Ráðgjöf og hönnun', 'Stýriteikningar', 'PLC og HMI', 'Prófanir og afhending'],
    },
    cta: {
      title: 'Vinnum saman að betri lausnum!',
      body: 'Hafðu samband fyrir frekari upplýsingar eða tilboð.',
      action: 'Hafa samband',
    },
  },
  en: {
    metaTitle: 'AndOr | Complete control-system solutions',
    metaDescription:
      'AndOr designs, programs and commissions tailored control systems and is the authorised mySCADA distributor in Iceland.',
    hero: {
      title: 'Complete control-system solutions',
      accent: 'From design to commissioning',
      lead:
        'AndOr ehf. delivers complete solutions tailored to your needs and advises on choosing the right control systems. Authorised mySCADA distributor in Iceland.',
      primary: 'Contact us',
      secondary: 'View solutions',
      eyebrow: 'Design · Programming · Commissioning',
    },
    services: {
      kicker: 'Services',
      title: 'What we do',
      lead:
        'We guide projects from design and control drawings through commissioning and testing. Our HMI systems are provided by mySCADA, for which AndOr is the authorised distributor in Iceland.',
      primary: 'Control systems',
      secondary: 'mySCADA hardware',
      steps: [
        {
          number: '01 · DESIGN',
          title: 'Design & consulting',
          body: 'Needs analysis and control-system design together with the customer, plus advice on hardware selection.',
        },
        {
          number: '02 · DRAWINGS',
          title: 'Control drawings',
          body: 'Complete control drawings ready for panel builders to manufacture cabinets from.',
        },
        {
          number: '03 · PROGRAMMING',
          title: 'PLC programming',
          body: 'Programming of Siemens PLCs and configuration of mySCADA HMI systems.',
        },
        {
          number: '04 · COMMISSIONING',
          title: 'Commissioning & testing',
          body: 'The system is commissioned, tested and handed over ready for operation.',
        },
      ],
    },
    projects: {
      kicker: 'Projects',
      title: 'Solutions built for real-world operation',
      body: 'We design control systems and HMI screens around clear oversight, safe control and the practical needs of each operation.',
      action: 'View projects',
    },
    proof: {
      kicker: 'One continuous process',
      title: 'A clear point of collaboration throughout the project',
      items: ['Consulting & design', 'Control drawings', 'PLC & HMI', 'Testing & handover'],
    },
    cta: {
      title: "Let's build better solutions together!",
      body: 'Get in touch for more information or a quote.',
      action: 'Contact us',
    },
  },
} as const;

export const pageContent = {
  is: {
    controlSystems: {
      tag: 'Stjórnkerfi',
      title: 'Sérsniðin stjórnkerfi fyrir stór og smá verkefni',
      intro:
        'Starfsmenn AndOr hafa margra ára reynslu af hönnun stjórnkerfa. Notast er við Siemens iðntölvubúnað og skjámyndakerfi frá mySCADA. AndOr sér um hönnun stjórnkerfis, stýriteikningar og allt að gangsetningu.',
      meta: 'Sérsniðin stjórnkerfi, stýriteikningar, Siemens iðntölvuforritun og gangsetning frá AndOr.',
    },
    projects: {
      tag: 'Verkefni',
      title: 'Dæmi um okkar lausnir',
      intro:
        'Verkefnasíðan er í vinnslu. Dæmi verða birt þegar við höfum staðfest birtingarrétt, yfirfarið efnið og afmáð viðkvæmar upplýsingar.',
      meta: 'Verkefnadæmi frá AndOr í stjórnkerfum og skjámyndakerfum.',
    },
    myscada: {
      tag: 'mySCADA',
      title: 'mySCADA skjámyndakerfi',
      intro:
        'mySCADA Technologies þróar nútíma HMI- og SCADA-lausnir. AndOr er umboðsaðili mySCADA á Íslandi og veitir ráðgjöf um val, uppsetningu og rekstur.',
      meta: 'AndOr er umboðsaðili mySCADA á Íslandi og veitir ráðgjöf um HMI- og SCADA-lausnir.',
    },
    about: {
      tag: 'Um AndOr',
      title: 'Hönnun stjórnkerfa frá Akureyri',
      intro:
        'AndOr ehf. var stofnað árið 2019 og sérhæfir sig í hönnun stjórnkerfa, stýriteikningum, iðntölvuforritun, skjámyndakerfum, gangsetningu og prófunum.',
      meta: 'AndOr er akureyrskt fyrirtæki sem sérhæfir sig í hönnun og gangsetningu stjórnkerfa.',
    },
    contact: {
      tag: 'Hafa samband',
      title: 'Vinnum saman að betri lausnum',
      intro: 'Hafðu samband fyrir frekari upplýsingar eða tilboð.',
      meta: 'Hafðu samband við AndOr vegna stjórnkerfa, mySCADA-lausna og ráðgjafar.',
    },
  },
  en: {
    controlSystems: {
      tag: 'Control systems',
      title: 'Custom control systems for projects large and small',
      intro:
        "AndOr's staff have years of experience in control-system design. We use Siemens PLC hardware and mySCADA HMI systems. AndOr handles control-system design, control drawings and everything through to commissioning.",
      meta: 'Tailored control systems, control drawings, Siemens PLC programming and commissioning from AndOr.',
    },
    projects: {
      tag: 'Projects',
      title: 'Examples of our solutions',
      intro:
        'The projects page is in progress. Examples will be published once usage permission, content review and redaction of sensitive information are complete.',
      meta: 'Examples of AndOr control-system and HMI projects.',
    },
    myscada: {
      tag: 'mySCADA',
      title: 'mySCADA HMI systems',
      intro:
        'mySCADA Technologies develops modern HMI and SCADA solutions. AndOr is the authorised mySCADA distributor in Iceland and advises on selection, installation and operation.',
      meta: 'AndOr is the authorised mySCADA distributor in Iceland and advises on HMI and SCADA solutions.',
    },
    about: {
      tag: 'About AndOr',
      title: 'Control-system design from Akureyri',
      intro:
        'AndOr ehf. was founded in 2019 and specialises in control-system design, control drawings, PLC programming, HMI development, commissioning and testing.',
      meta: 'AndOr is an Akureyri-based company specialising in control-system design and commissioning.',
    },
    contact: {
      tag: 'Contact',
      title: "Let's build better solutions together",
      intro: 'Get in touch for more information or a quote.',
      meta: 'Contact AndOr about control systems, mySCADA solutions and consulting.',
    },
  },
} as const;

export const company = {
  name: 'AndOr ehf.',
  registrationNumber: '561219-2300',
  email: 'andor@andor.is',
  phoneDisplay: '840-8168',
  phoneHref: 'tel:+3548408168',
  office: 'Glerárgata 32, 600 Akureyri',
  mapsHref: 'https://maps.google.com/?q=Glerárgata+32,+600+Akureyri',
  founded: '2019',
} as const;

export const navItems: { route: Exclude<RouteKey, 'home'> }[] = [
  { route: 'controlSystems' },
  { route: 'projects' },
  { route: 'myscada' },
  { route: 'about' },
  { route: 'contact' },
];

export function contentFor(locale: Locale) {
  return {
    common: common[locale],
    home: home[locale],
    pages: pageContent[locale],
  };
}
