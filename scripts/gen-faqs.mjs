// One-off generator: extracts the verbatim FAQ Q&A rendered on each service
// page (dist/<route>/index.html) and writes src/lib/serviceFaqs.ts, so the
// FAQPage schema is generated from the exact copy shown on the page.
import fs from 'node:fs'
import path from 'node:path'

const ROUTES = [
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
]

const dist = path.resolve(process.cwd(), 'dist')

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .trim()

function extract(html) {
  // Walk faq-q / faq-a in document order. A question starts a new entry; each
  // following answer paragraph appends to it until the next question.
  const re = /class="[^"]*(?:faq|fq)-(q|a)"[^>]*>([\s\S]*?)<\/(?:h3|p)>/g
  const out = []
  let m
  while ((m = re.exec(html))) {
    const kind = m[1]
    const text = decode(m[2].replace(/<[^>]+>/g, ''))
    if (kind === 'q') out.push({ q: text, a: '' })
    else if (out.length) out[out.length - 1].a += (out[out.length - 1].a ? ' ' : '') + text
  }
  return out
}

const entries = {}
for (const route of ROUTES) {
  const file = path.join(dist, route, 'index.html')
  const html = fs.readFileSync(file, 'utf-8')
  const faqs = extract(html)
  if (!faqs.length) throw new Error(`No FAQs found for ${route}`)
  entries[route] = faqs
}

const body = Object.entries(entries)
  .map(([route, faqs]) => {
    const items = faqs
      .map(
        (f) =>
          `    { q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} },`,
      )
      .join('\n')
    return `  '${route}': [\n${items}\n  ],`
  })
  .join('\n')

const file = `// ─────────────────────────────────────────────────────────────────────────────
// SERVICE FAQ DATA - the verbatim question/answer pairs shown in each service
// page's "Frequently asked questions" section, used to generate the FAQPage
// JSON-LD (see serviceSchema.ts).
//
// AUTO-GENERATED from the rendered pages by scripts/gen-faqs.mjs. If a page's
// FAQ copy changes, rebuild and re-run that script so the schema stays in sync
// with what visitors actually see (Google requires the two to match).
// ─────────────────────────────────────────────────────────────────────────────

export const SERVICE_FAQS: Record<string, { q: string; a: string }[]> = {
${body}
}
`

fs.writeFileSync(path.resolve(process.cwd(), 'src/lib/serviceFaqs.ts'), file)
console.log('[gen-faqs] wrote src/lib/serviceFaqs.ts with', Object.keys(entries).length, 'routes')
