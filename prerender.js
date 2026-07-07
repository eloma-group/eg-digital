// ─────────────────────────────────────────────────────────────────────────────
// STATIC SITE GENERATION (SSG)
//
// Runs after `vite build` (client) and `vite build --ssr` (server). For every
// route it renders the React tree to HTML, injects that into the built
// index.html template's #root, rewrites the per-page SEO tags (title,
// description, canonical, Open Graph / Twitter) and writes a static
// dist/<route>/index.html. Azure Static Web Apps then serves real, crawlable
// HTML for a direct hit on any URL, while the SPA still boots and takes over on
// the client.
// ─────────────────────────────────────────────────────────────────────────────

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const dist = path.resolve(process.cwd(), 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

// The compiled SSR bundle exposes both the renderer and the SEO data.
const serverEntry = url.pathToFileURL(
  path.resolve(process.cwd(), 'dist-server', 'entry-server.js'),
).href
const { render, ROUTES, PAGE_META, DEFAULT_META, SITE_URL, buildServiceJsonLd } = await import(serverEntry)

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// Replace the content="" of a <meta> matched by its identifying attribute.
function setMeta(html, attr, value) {
  const re = new RegExp(`(<meta\\s+${attr}\\s+content=")[^"]*(")`)
  return html.replace(re, (_m, a, b) => a + esc(value) + b)
}

function applyMeta(html, route) {
  const meta = PAGE_META[route] || {}
  const title = meta.title || DEFAULT_META.title
  const description = meta.description || DEFAULT_META.description
  const canonical = SITE_URL + route

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  html = setMeta(html, 'name="description"', description)
  html = setMeta(html, 'property="og:title"', title)
  html = setMeta(html, 'property="og:description"', description)
  html = setMeta(html, 'name="twitter:title"', title)
  html = setMeta(html, 'name="twitter:description"', description)
  html = setMeta(html, 'property="og:url"', canonical)
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    (_m, a, b) => a + esc(canonical) + b,
  )
  return html
}

// Bake the Service + BreadcrumbList JSON-LD for a service route into the <body>
// so crawlers that do not run JavaScript still read the structured data. The
// runtime useServiceJsonLd hook clears and re-adds these (matched by the same
// data-page-jsonld attribute) once the SPA boots, so there is never a duplicate.
function applyJsonLd(html, route) {
  const objects = buildServiceJsonLd(route)
  if (!objects || objects.length === 0) return html

  // Escape "<" as < so a stray "</script>" in any value can never break out
  // of the tag; the result is still valid JSON.
  const scripts = objects
    .map(
      (obj) =>
        `<script type="application/ld+json" data-page-jsonld>` +
        `${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`,
    )
    .join('\n')

  return html.replace('</body>', `${scripts}\n</body>`)
}

let count = 0
for (const route of ROUTES) {
  let appHtml
  try {
    appHtml = await render(route)
  } catch (err) {
    console.error(`\n[prerender] failed while rendering "${route}"`)
    throw err
  }

  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )
  html = applyMeta(html, route)
  html = applyJsonLd(html, route)

  const outDir = route === '/' ? dist : path.join(dist, route)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  count++
  console.log(`[prerender] ${route}`)
}

console.log(`\n[prerender] wrote ${count} static pages.`)

// ── sitemap.xml ──────────────────────────────────────────────────────────────
// Generated from the same ROUTES list so it can never drift from what actually
// ships. The homepage gets top priority; everything else a notch below.
const lastmod = new Date().toISOString().slice(0, 10)
const urls = ROUTES.map((route) => {
  const loc = esc(SITE_URL + route)
  const priority = route === '/' ? '1.0' : '0.8'
  return (
    `  <url>\n` +
    `    <loc>${loc}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>weekly</changefreq>\n` +
    `    <priority>${priority}</priority>\n` +
    `  </url>`
  )
}).join('\n')

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls}\n` +
  `</urlset>\n`

fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`[prerender] wrote sitemap.xml (${ROUTES.length} urls).`)

// robots.txt - allow everything and advertise the sitemap for crawlers.
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
fs.writeFileSync(path.join(dist, 'robots.txt'), robots)
console.log(`[prerender] wrote robots.txt.`)
