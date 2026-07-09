// ─────────────────────────────────────────────────────────────────────────────
// SERVICE STRUCTURED DATA (JSON-LD) - single source of truth for the Service +
// BreadcrumbList schema emitted on each service landing page.
//
// Used in two places, both reading from this one map:
//   1. BUILD TIME - prerender.js bakes the <script type="application/ld+json">
//      tags into the static <body> of each route so no-JS crawlers read them.
//   2. RUNTIME - the useServiceJsonLd hook injects/refreshes the same tags on
//      the client so SPA navigation keeps the schema correct for the route.
//
// Add a service page's entry here and it is picked up by both automatically.
// ─────────────────────────────────────────────────────────────────────────────

import { SITE_URL } from './pageMeta'
import { SERVICE_FAQS } from './serviceFaqs'

export interface ServiceSchemaInput {
  /** Service @name - mirrors the page's meta title. */
  serviceName: string
  /** Service @description - a fuller, page-appropriate summary of the service. */
  serviceDescription: string
  /** Human label for the final breadcrumb crumb (e.g. "PPC Services"). */
  breadcrumbName: string
}

// Keyed by route path - each key MUST also appear in ROUTES (pageMeta.ts).
export const SERVICE_SCHEMA: Record<string, ServiceSchemaInput> = {
  '/services/social-media-marketing': {
    serviceName: 'Social Media Marketing Services in Australia | EG Digital',
    serviceDescription:
      'EG Digital provides professional social media marketing services in Australia, including organic strategy, content creation, community management, paid social campaigns, and analytics across Facebook, Instagram, LinkedIn, and TikTok to help businesses build brand awareness and generate qualified leads.',
    breadcrumbName: 'Social Media Marketing',
  },
  '/services/ppc-services': {
    serviceName: 'PPC Services in Australia | Google, Bing & Social Ads | EG Digital',
    serviceDescription:
      'EG Digital provides professional PPC management services, including Google Ads, Microsoft Ads (Bing), Meta Ads, LinkedIn Ads, campaign strategy, keyword research, conversion tracking, and ongoing optimisation to help businesses generate qualified leads and maximize ROI.',
    breadcrumbName: 'PPC Services',
  },
  '/services/web-development': {
    serviceName: 'Web Development company in Australia | EG Digital',
    serviceDescription:
      'EG Digital provides professional web development services in Australia, including custom website design, responsive front-end development, e-commerce builds, CMS integration, performance optimisation, and ongoing support to help businesses launch fast, secure, and scalable websites.',
    breadcrumbName: 'Web Development',
  },
  '/services/seo-services': {
    serviceName: 'SEO company in Australia | SEO + AEO & GEO | EG Digital',
    serviceDescription:
      'EG Digital provides professional SEO services in Australia, including SEO, AEO, and GEO strategy, keyword research, on-page and technical optimisation, content, link building, and conversion tracking to help businesses rank on Google and get cited in AI search.',
    breadcrumbName: 'SEO Services',
  },
  '/services/technical-seo': {
    serviceName: 'Technical SEO Company in Australia | Audits, Speed & Site Fixes | EG Digital',
    serviceDescription:
      'EG Digital provides professional technical SEO services in Australia, including technical audits, crawlability and indexation fixes, Core Web Vitals and site speed optimisation, site architecture, structured data, and migration support to give your content and links a technically sound foundation to rank on.',
    breadcrumbName: 'Technical SEO',
  },
  '/services/mobile-app-development-company-australia': {
    serviceName: 'App Development Company in Australia | iOS, Android & Cross-Platform | EG Digital',
    serviceDescription:
      'EG Digital provides professional mobile app development services in Australia, including native iOS and Android apps, cross-platform React Native and Flutter builds, UX/UI design, backend and API development, testing, and ongoing support to help businesses launch fast, secure, and scalable apps.',
    breadcrumbName: 'Mobile App Development',
  },
  '/services/local-seo': {
    serviceName: 'Local SEO Services in Australia | Google Maps & Local Search | EG Digital',
    serviceDescription:
      'EG Digital provides professional local SEO services in Australia, including Google Business Profile management, local keyword targeting, citation building, review management, local link building, and conversion tracking to help businesses rank in Google Maps and local search.',
    breadcrumbName: 'Local SEO',
  },
  '/services/off-page-seo': {
    serviceName: 'Off-Page SEO Services in Australia | Link Building | EG Digital',
    serviceDescription:
      'EG Digital provides professional off-page SEO and link building services in Australia, including backlink profile audits, white-hat link building, high-authority link acquisition, guest posting, competitor backlink research, and digital PR to help businesses build the authority that ranks them on Google and gets them cited in AI search.',
    breadcrumbName: 'Off-Page SEO',
  },
  '/services/facebook-ads-management': {
    serviceName: 'Facebook Ads Management Services Australia | Meta Ads | EG Digital',
    serviceDescription:
      'EG Digital provides professional Facebook and Instagram ads management services in Australia, including campaign strategy, audience targeting, creative and ad design, remarketing, lead generation, and Meta Pixel and Conversions API tracking to help businesses generate qualified enquiries and maximise return on ad spend.',
    breadcrumbName: 'Facebook Ads',
  },
  '/services/google-ads-management': {
    serviceName: 'Google Ads Management Services Australia | EG Digital',
    serviceDescription:
      'EG Digital provides professional Google Ads management services in Australia, including Search, Shopping, Performance Max, Display, and YouTube campaigns, keyword research, conversion tracking, and ongoing optimisation to help businesses generate qualified leads and maximise return on ad spend.',
    breadcrumbName: 'Google Ads',
  },
  '/services/linkedin-ads-management': {
    serviceName: 'LinkedIn Ads Management Services Australia | B2B | EG Digital',
    serviceDescription:
      'EG Digital provides professional B2B LinkedIn ads management services in Australia, including campaign strategy, audience targeting by job title, seniority, industry and company size, Sponsored Content and InMail ad formats, creative and copywriting, CRM integration, and account-based retargeting to help businesses generate qualified pipeline and maximise return on ad spend.',
    breadcrumbName: 'LinkedIn Ads',
  },
  '/services/branding': {
    serviceName: 'Branding Services in Australia | EG Digital',
    serviceDescription:
      'EG Digital provides professional branding services in Australia, including brand strategy, logo and visual identity design, brand messaging and voice, brand guidelines, rebranding, and brand rollout across channels to help businesses build a recognisable, consistent brand that earns trust and a price premium.',
    breadcrumbName: 'Branding',
  },
}

const PROVIDER = {
  '@type': 'Organization',
  name: 'EG Digital',
  url: SITE_URL,
  telephone: '1800 054 555',
  logo: `${SITE_URL}/images/Egdigital-logo.png`,
}

/**
 * Build the WebPage + Service + BreadcrumbList + FAQPage JSON-LD objects for a
 * service route (FAQPage only when that page has FAQs). Returns null for any
 * route without an entry, so callers can no-op safely.
 */
export function buildServiceJsonLd(route: string): object[] | null {
  const s = SERVICE_SCHEMA[route]
  if (!s) return null

  const url = SITE_URL + route
  const breadcrumbId = `${url}#breadcrumb`
  const serviceId = `${url}#service`

  const breadcrumb = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Homepage', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: s.breadcrumbName, item: url },
    ],
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: s.serviceName,
    description: s.serviceDescription,
    url,
    inLanguage: 'en-AU',
    isPartOf: { '@type': 'WebSite', name: 'EG Digital', url: SITE_URL },
    breadcrumb: { '@id': breadcrumbId },
    // Reference the single Service node by @id - never inline a second copy,
    // or validators read two separate Service entities on the page.
    about: { '@id': serviceId },
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceId,
    name: s.serviceName,
    description: s.serviceDescription,
    url,
    areaServed: { '@type': 'Place', name: 'Australia' },
    provider: PROVIDER,
  }

  const objects: object[] = [webPage, service, breadcrumb]

  const faqs = SERVICE_FAQS[route]
  if (faqs && faqs.length) {
    objects.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  return objects
}
