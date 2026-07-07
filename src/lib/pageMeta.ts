// ─────────────────────────────────────────────────────────────────────────────
// PAGE META - single source of truth for per-route SEO, used at BUILD TIME by
// the static pre-render step (prerender.js) to bake the correct <title>,
// description, canonical and Open Graph / Twitter tags into each route's HTML.
//
// The values here mirror the titles/descriptions each page already sets at
// runtime (via usePageMeta or an inline document.title effect). Keeping them
// here lets crawlers that do not run JavaScript still read the right metadata.
//
// A route listed in ROUTES but absent from PAGE_META (or with a field omitted)
// inherits the site defaults baked into index.html - matching the current
// runtime behaviour exactly.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = 'https://egdigital.com.au'

export const DEFAULT_META = {
  title:
    'Digital Marketing Company in Australia | EG Digital',
  description:
    'EG Digital is a results-driven digital marketing company in Australia. SEO, Google Ads, social, web design and Microsoft services from one accountable Melbourne team. Talk to us today.',
}

export interface PageMeta {
  title?: string
  description?: string
}

// Every path the SPA router serves. The pre-render step walks this list and
// writes dist/<path>/index.html for each one.
export const ROUTES: string[] = [
  '/',
  '/about/our-journey',
  '/about/our-usp',
  '/about/networks-partners',
  '/about/media',
  '/about/values',
  '/about/faq',
  '/contact',
  '/solutions',
  '/solutions/microsoft-products',
  '/solutions/development',
  '/solutions/digital-marketing',
  '/solutions/security-integration',
  '/services',
  '/services/social-media-marketing',
  '/services/ppc-services',
  '/services/web-development',
  '/services/seo-services',
  '/services/technical-seo',
  '/services/mobile-app-development-company-australia',
  '/services/local-seo',
  '/industries',
  '/blog',
  '/career',
  '/privacy-policy',
  '/terms-and-conditions',
]

// Per-route overrides. Omit description to inherit the site default.
export const PAGE_META: Record<string, PageMeta> = {
  '/about/our-journey': {
    title: 'EG Digital Journey | Our Growth Story & Innovation',
    description:
      "Discover EG Digital's journey from startup to digital excellence. Learn how we build innovative web, app, and AI solutions for modern businesses.",
  },
  '/about/our-usp': {
    title: 'EG Digital USP | Why Businesses Choose Us',
    description:
      "Explore EG Digital's unique strengths in web development, AI solutions, and digital marketing that help businesses scale faster with measurable results.",
  },
  '/about/networks-partners': {
    title: 'EG Digital Partners | Networks & Technology Alliances',
    description:
      "Meet EG Digital's trusted partners and technology networks that power our digital solutions, cloud services, and enterprise-grade business systems.",
  },
  '/about/media': {
    title: 'EG Digital Media | News, Updates & Press',
    description:
      'Stay updated with EG Digital media coverage, announcements, insights, and press releases showcasing our innovation in digital transformation services.',
  },
  '/about/values': {
    title: 'EG Digital Values | Mission, Vision & Principles',
    description:
      "Learn about EG Digital's core values, mission, and vision driving innovation, integrity, and customer-focused digital transformation for global businesses.",
  },
  '/about/faq': {
    title: 'EG Digital FAQ | Frequently Asked Questions',
    description:
      'Find answers to common questions about EG Digital services, pricing, development process, support, and how we help businesses grow digitally.',
  },
  '/solutions': {
    title: 'Digital Solutions | Web, App & AI Services EG Digital',
    description:
      'Explore EG Digital solutions including web development, mobile apps, AI systems, cloud services, and digital transformation for modern businesses.',
  },
  '/solutions/microsoft-products': {
    title: 'Microsoft Solutions in Australia | 365, Azure & Dynamics | EG Digital',
  },
  '/solutions/development': {
    title: 'Web & App Development Services | EG Digital Experts',
    description:
      'EG Digital offers custom web and mobile app development services using modern technologies to build scalable, secure, and high-performance solutions.',
  },
  '/services': {
    title: 'EG Digital Services | IT & Digital Growth Solutions',
    description:
      'Discover EG Digital services including SEO, web development, AI solutions, cloud management, cybersecurity, and digital marketing for business growth.',
  },
  '/services/social-media-marketing': {
    title: 'Social Media Marketing Services in Australia | EG Digital',
  },
  '/services/ppc-services': {
    title: 'PPC Services in Australia | Google, Bing & Social Ads | EG Digital',
  },
  '/services/web-development': {
    title: 'Web Development company in Australia | EG Digital',
  },
  '/services/seo-services': {
    title: 'SEO company in Australia | SEO + AEO & GEO | EG Digital',
  },
  '/services/technical-seo': {
    title: 'Technical SEO Company in Australia | Audits, Speed & Site Fixes | EG Digital',
    description:
      'Technical SEO services in Australia that fix crawl, index, speed & architecture issues, not just report them. In-house engineers, white-hat, no lock-in. Get a free technical SEO audit.',
  },
  '/services/mobile-app-development-company-australia': {
    title: 'App Development Company in Australia | iOS, Android & Cross-Platform | EG Digital',
    description:
      'A full-service mobile app development company in Australia building fast, secure iOS, Android, React Native & Flutter apps. Melbourne team, in-house engineering. Get a free quote.',
  },
  '/services/local-seo': {
    title: 'Local SEO Services in Australia | Google Maps & Local Search | EG Digital',
    description:
      'Local SEO marketing services in Australia that rank you in Google Maps and local search. White-hat, Google Business Profile management, no lock-in. Get a free local SEO audit.',
  },
  '/industries': {
    title: 'Industries We Serve | EG Digital Solutions',
    description:
      'EG Digital serves industries like healthcare, finance, education, retail, logistics, and more with tailored digital solutions and scalable technology.',
  },
  '/blog': {
    title: 'EG Digital Blog | Insights on Tech & Innovation',
    description:
      'Read EG Digital blog for insights on web development, AI, cloud computing, SEO strategies, and digital transformation trends shaping modern businesses.',
  },
  '/career': {
    title: 'EG Digital Careers | Join Our Growing Tech Team',
    description:
      'Explore career opportunities at EG Digital. Join our team of developers, designers, and marketers building innovative digital solutions worldwide.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | EG Digital Australia',
    description:
      'Read the EG Digital Australia privacy policy - what personal information we collect, how we use it, and the rights and choices you have over your data.',
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | EG Digital Australia',
    description:
      'Read the terms and conditions that govern the use of the EG Digital Australia website and services, including intellectual property, payment and liability.',
  },
}
