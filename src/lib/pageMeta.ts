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

import { POSTS } from './blogPosts'

export const SITE_URL = 'https://egdigital.com.au'

export const DEFAULT_META = {
  title:
    'Digital Marketing Company in Australia | EG Digital',
  description:
    'EG Digital is a results-driven digital marketing company in Australia. SEO, Google Ads, social media, web design and Microsoft services from one accountable Melbourne team. Talk to us today.',
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
  '/services/off-page-seo',
  '/services/facebook-ads-management',
  '/services/google-ads-management',
  '/services/linkedin-ads-management',
  '/services/branding',
  '/services/email-marketing',
  '/services/content-creation',
  '/services/flutter-app-development-company-australia',
  '/services/custom-app-development-company-australia',
  '/services/android-app-development-company-australia',
  '/services/iphone-app-development-company-australia',
  '/services/graphic-design',
  '/industries',
  '/blog',
  // Every article gets its own crawlable, pre-rendered page - blog posts under
  // /blog, newsroom posts under /about/media.
  ...POSTS.map(p => (p.newsroom ? `/about/media/${p.slug}` : `/blog/${p.slug}`)),
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
    title: 'Social Media Marketing Agency Australia | EG Digital',
    description:
      'Grow your brand with data-driven social media marketing. Strategy, content & paid social tailored for Australian businesses. Book a free consult.',
  },
  '/services/ppc-services': {
    title: 'PPC Services Australia | Paid Search Experts | EG Digital',
    description:
      'Results-focused PPC management across Google & Bing. Keyword strategy, conversion tracking and ongoing optimisation to lower cost per lead.',
  },
  '/services/web-development': {
    title: 'Web Development company in Australia | EG Digital',
  },
  '/services/seo-services': {
    title: 'SEO Services Australia | Proven Results | EG Digital',
    description:
      'Data-driven SEO services that improve rankings, traffic and leads. Technical SEO, content and link building tailored for Australian businesses.',
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
  '/services/off-page-seo': {
    title: 'Off-Page SEO Services Australia | EG Digital',
    description:
      'Boost rankings with authoritative link building and digital PR. Off-page SEO strategies that build domain authority and drive organic growth.',
  },
  '/services/facebook-ads-management': {
    title: 'Facebook Ads Management Services Australia | EG Digital',
    description:
      'Expert Facebook & Instagram ads management that drives real leads and sales. Full-funnel strategy and optimisation. Get a free strategy call.',
  },
  '/services/google-ads-management': {
    title: 'Google Ads Agency Australia | No Lock-In Contracts | EG Digital',
    description:
      'No lock-in contracts, no guessing. We report on revenue, not clicks. Get a free Google Ads audit & consultation and see where your budget is leaking.',
  },
  '/services/linkedin-ads-management': {
    title: 'LinkedIn Ads Management Agency Australia | EG Digital',
    description:
      'B2B LinkedIn advertising that generates qualified leads. Campaign setup, targeting & optimisation by LinkedIn ads specialists.',
  },
  '/services/branding': {
    title: 'Branding Agency Australia | Brand Strategy & Identity | EG Digital',
    description:
      'Build a brand that resonates. Strategy, identity and positioning services to help Australian businesses stand out and grow with confidence.',
  },
  '/services/email-marketing': {
    title: 'Email Marketing Services in Australia | EG Digital',
    description:
      'Email marketing company in Australia. Strategy, automation, newsletter design & campaign management for small business, ecommerce & B2B. Get a free email audit.',
  },
  '/services/content-creation': {
    title: 'Content Creation Services Australia | EG Digital',
    description:
      'Engaging, SEO-optimised content that converts - blogs, website copy and social content created by Australian content marketing specialists.',
  },
  '/services/flutter-app-development-company-australia': {
    title: 'Flutter App Development Company in Australia | EG Digital',
    description:
      'Flutter app development services in Australia. Custom, MVP & enterprise cross-platform apps built for iOS and Android. Melbourne team, in-house engineering. Get a free quote.',
  },
  '/services/custom-app-development-company-australia': {
    title: 'Custom App Development Company in Australia | Mobile, Web & Enterprise | EG Digital',
    description:
      'Custom app development in Australia built around your business. Mobile apps, web platforms & enterprise software, secure and scalable, source code yours. Melbourne team. Free quote.',
  },
  '/services/android-app-development-company-australia': {
    title: 'Android App Development Company in Australia | Native Kotlin Apps | EG Digital',
    description:
      'Android app development in Australia done right. Native Kotlin apps built to run across every device, secure and scalable, with in-house engineering. Melbourne team. Get a free quote.',
  },
  '/services/iphone-app-development-company-australia': {
    title: 'iPhone App Development Company in Australia | Native iOS Apps | EG Digital',
    description:
      'iOS app development in Australia done right. Native iPhone & iPad apps built in Swift, secure and scalable, with in-house engineering. Melbourne team. Get a free quote.',
  },
  '/services/graphic-design': {
    title: 'Graphic Design Services Australia | EG Digital',
    description:
      'Professional graphic design for brands that want to stand out - logos, digital assets and marketing collateral by experienced designers.',
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

// Fold in per-article SEO from the posts registry (title tag + meta description
// come straight from each post) so the static build bakes them per URL.
for (const p of POSTS) {
  const path = p.newsroom ? `/about/media/${p.slug}` : `/blog/${p.slug}`
  PAGE_META[path] = { title: p.metaTitle, description: p.metaDescription }
}
