// ─────────────────────────────────────────────────────────────────────────────
// BLOG STRUCTURED DATA (JSON-LD) - the BlogPosting schema for each /blog/<slug>
// article page.
//
// Used in two places, both reading from this one builder:
//   1. BUILD TIME - prerender.js bakes the <script type="application/ld+json">
//      tag into the static <body> of each blog route so no-JS crawlers read it.
//   2. RUNTIME - BlogArticle injects/refreshes the same tag on the client so
//      SPA navigation keeps the schema correct for the route.
// ─────────────────────────────────────────────────────────────────────────────

import { SITE_URL } from './pageMeta'
import { POSTS, photo } from './blogPosts'

const IMAGE_W = 1400
const IMAGE_H = 780

// "Jul 14, 2026" -> "2026-07-14", read in local time so the day never shifts.
const isoDate = (human: string) => {
  const d = new Date(human)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/**
 * Build the BlogPosting JSON-LD for a /blog/<slug> route. Returns null for any
 * other route (including newsroom posts), so callers can no-op safely.
 */
export function buildBlogJsonLd(route: string): object[] | null {
  const m = route.match(/^\/blog\/([^/]+)$/)
  if (!m) return null
  const post = POSTS.find(p => p.slug === m[1] && !p.newsroom)
  if (!post) return null

  const url = `${SITE_URL}/blog/${post.slug}`

  // Unsplash ids are cropped to a known size; locally hosted images keep their
  // own dimensions, so only the absolute URL is emitted for those.
  const imgId = post.schemaImage ?? post.img
  const image = imgId.startsWith('/')
    ? { '@type': 'ImageObject', url: SITE_URL + imgId }
    : { '@type': 'ImageObject', url: photo(imgId, IMAGE_W, IMAGE_H), width: IMAGE_W, height: IMAGE_H }

  return [
    {
      '@context': 'https://schema.org/',
      '@type': 'BlogPosting',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      headline: post.metaTitle,
      description: post.metaDescription,
      image,
      author: { '@type': 'Organization', name: 'EG Digital' },
      publisher: {
        '@type': 'Organization',
        name: 'EG Digital',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/Egdigital-logo.png`,
          width: 808,
          height: 244,
        },
      },
      datePublished: isoDate(post.date),
      dateModified: isoDate(post.modified ?? post.date),
    },
  ]
}
