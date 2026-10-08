// ─────────────────────────────────────────────────────────────────────────────
// PAGE STRUCTURED DATA (JSON-LD) - single entry point for every route's
// page-level schema:
//   - WebSite on the homepage
//   - BreadcrumbList on every page except the homepage
//   - Service + WebPage (+ FAQPage) on service pages     (serviceSchema.ts)
//   - FAQPage on /about/faq                               (faqData.ts)
//   - BlogPosting on every blog and newsroom article      (blogSchema.ts)
//
// Used in two places, both reading from this one builder:
//   1. BUILD TIME - prerender.js bakes the tags into each route's static HTML.
//   2. RUNTIME - <PageJsonLd /> re-injects them on every SPA navigation.
//
// New routes get a breadcrumb automatically. Add a label to CRUMB_LABELS only
// when the title-cased URL segment does not read well.
// ─────────────────────────────────────────────────────────────────────────────

import { ROUTES, SITE_URL } from './pageMeta'
import { POSTS, postPath } from './blogPosts'
import { SERVICE_SCHEMA, buildServiceJsonLd } from './serviceSchema'
import { buildFaqJsonLd } from './faqData'
import { buildBlogJsonLd } from './blogSchema'

const CRUMB_LABELS: Record<string, string> = {
  '/': 'Homepage',
  '/about/our-usp': 'Our USP',
  '/about/networks-partners': 'Networks & Partners',
  '/about/media': 'Newsroom',
  '/about/faq': 'FAQ',
  '/solutions/microsoft-products': 'Microsoft Products',
  '/terms-and-conditions': 'Terms and Conditions',
}

const ROUTE_SET = new Set(ROUTES)

// "/about/our-journey/" -> "/about/our-journey"
export const normaliseRoute = (route: string) =>
  route.length > 1 ? route.replace(/\/+$/, '') : route

const titleCase = (segment: string) =>
  segment
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

function crumbLabel(path: string): string {
  if (CRUMB_LABELS[path]) return CRUMB_LABELS[path]
  if (SERVICE_SCHEMA[path]) return SERVICE_SCHEMA[path].breadcrumbName
  const post = POSTS.find(p => postPath(p) === path)
  if (post) return post.h1 ?? post.title
  return titleCase(path.slice(path.lastIndexOf('/') + 1))
}

/**
 * Homepage > each ancestor that is a real page > the current page. Ancestors
 * with no page of their own (e.g. /about) are skipped so every crumb resolves.
 */
export function buildBreadcrumbJsonLd(route: string): object | null {
  if (route === '/' || !ROUTE_SET.has(route)) return null

  const segments = route.split('/').filter(Boolean)
  const paths = ['/', ...segments.map((_, i) => '/' + segments.slice(0, i + 1).join('/'))]
    .filter(p => ROUTE_SET.has(p))

  const url = SITE_URL + route
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: paths.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumbLabel(p),
      item: p === '/' ? `${SITE_URL}/` : SITE_URL + p,
    })),
  }
}

/** WebSite schema for the homepage. The publisher is the Organization in index.html. */
function buildWebsiteJsonLd(route: string): object | null {
  if (route !== '/') return null
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'EG Digital',
    alternateName: ['EG Digital Australia', 'EG Digital by Eloma Group'],
    url: `${SITE_URL}/`,
    inLanguage: 'en-AU',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

/** Every page-level JSON-LD object for a route, in a stable order. */
export function buildPageJsonLd(rawRoute: string): object[] {
  const route = normaliseRoute(rawRoute)
  const breadcrumb = buildBreadcrumbJsonLd(route)
  const website = buildWebsiteJsonLd(route)
  return [
    ...(website ? [website] : []),
    ...(buildServiceJsonLd(route) || []),
    ...(buildFaqJsonLd(route) || []),
    ...(buildBlogJsonLd(route) || []),
    ...(breadcrumb ? [breadcrumb] : []),
  ]
}
