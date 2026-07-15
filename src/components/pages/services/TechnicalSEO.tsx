import {
  Wrench, Users, ShieldCheck, Unlock, Search, Bug, Gauge, Network,
  Map as SitemapIcon, Code2, Copy, ShoppingCart, RefreshCw, Store,
  Building2, Rocket, Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'
import { ElomaLink } from '../../../lib/elomaLink'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - TECHNICAL SEO (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "Core Web Vitals" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Wrench,
    t: 'We fix problems, not just find them',
    d: 'Plenty of agencies will sell you an audit, hand over a 60-page PDF of issues, and leave the fixing to your development team, who may never get to it. Because EG Digital has software and cloud engineers in-house, we do the work: the crawl fixes, the speed optimisation, the schema implementation, the redirect cleanup. A found problem that never gets fixed does nothing for your rankings.',
  },
  {
    icon: Users,
    t: 'One team for the audit and the engineering behind it',
    d: 'Technical SEO is where SEO and development overlap almost completely. Page speed, site architecture, indexation, and structured data are all things a developer touches. Because we build and host websites too, there is no gap between the SEO recommendation and the engineering that delivers it, and no finger-pointing when something needs to change. One number to call.',
  },
  {
    icon: ShieldCheck,
    t: 'White-hat only, because your site is too valuable to gamble',
    d: "There is no secret backdoor to Google, and technical shortcuts, cloaking, doorway pages, spammy redirects, are a fast route to a manual penalty. We do technical SEO by the book, aligned with Google's guidelines, because sustainable rankings are the only kind worth having. If your site has already been penalised, our recovery work identifies the cause and puts it right.",
  },
  {
    icon: Unlock,
    t: 'Honest pricing and no lock-in',
    d: 'We quote from an actual audit of your site and itemise what you are paying for. No 12-month contracts designed to protect our revenue rather than deliver your results. A short minimum so the work has time to take effect is fair. A long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Search,
    t: 'Technical SEO audit',
    paras: [
      'Every engagement starts here. We run a full technical SEO audit covering crawlability, indexation, site speed, architecture, structured data, mobile rendering, and security, using industry-standard tools like Google Search Console, website crawlers, and log file analysis to see your site the way a search engine does. You get a prioritised list of what is holding you back and what to fix first, not a data dump.',
    ],
  },
  {
    icon: Bug,
    t: 'Crawl and indexation fixes',
    paras: [
      'If search engines cannot crawl and index your pages, nothing else matters. We resolve indexing issues, fix crawl errors and dead-end links, sort out orphan pages, and manage crawl budget so search engines spend their time on the pages that matter rather than wasting it on low-value URLs. For large sites, crawl budget optimisation alone can lift how much of your catalogue actually gets indexed.',
    ],
  },
  {
    icon: Gauge,
    t: 'Website speed optimisation and Core Web Vitals',
    paras: [
      'Speed is both a ranking factor and a conversion factor. We run a full site performance audit and improve your Google PageSpeed Insights scores and Core Web Vitals, tackling large images, render-blocking code, slow server response, and the other culprits behind slow pages. The result is a site that loads faster, holds users longer, and ranks better across desktop and mobile.',
    ],
  },
  {
    icon: Network,
    t: 'SEO site architecture and internal linking',
    paras: [
      'How your site is structured decides how well search engines understand it and how easily users navigate it. We build clean, logical site architecture, sensible URL structure, breadcrumbs, and internal linking that flows authority to your most important pages, following site architecture best practices rather than letting the site sprawl into a crawl maze.',
    ],
  },
  {
    icon: SitemapIcon,
    t: 'XML sitemaps and crawl directives',
    paras: [
      'We create and maintain XML sitemaps that guide crawlers efficiently through your site, following XML sitemap best practices, and we get your robots directives, canonical tags, and redirects right so search engines index the correct pages and ignore the ones they should not.',
    ],
  },
  {
    icon: Code2,
    t: 'Structured data and schema markup',
    paras: [
      'Proper schema markup helps search engines understand your content and can earn you rich results, star ratings, prices, FAQs, and more, shown right in the listing. We handle structured data implementation across your site, validate it against the Google Rich Results Test, and apply the right schema for your content, including rich snippets for eCommerce product and category pages.',
    ],
  },
  {
    icon: Copy,
    t: 'Duplicate content and faceted navigation fixes',
    paras: [
      'Large sites, and eCommerce sites especially, generate duplicate content and near-infinite URL combinations through filters and faceted navigation, which quietly waste crawl budget and dilute rankings. We fix duplicate content issues with proper canonicalisation and apply faceted navigation best practices so filters help shoppers without confusing search engines.',
    ],
  },
  {
    icon: ShoppingCart,
    t: 'eCommerce and Shopify technical SEO',
    paras: [
      'Online stores have their own technical challenges: huge catalogues, duplicate product pages, platform quirks, and complex navigation. We run technical eCommerce SEO audits and Shopify SEO audits, and fix the store-specific issues that hold rankings back, so your product and category pages get crawled, indexed, and shown properly.',
    ],
  },
  {
    icon: RefreshCw,
    t: 'Website migrations and penalty recovery',
    paras: [
      'A botched migration can wipe out years of rankings overnight, and a search penalty can do the same. We handle migrations carefully, with redirects mapped and equity preserved, and our penalty recovery service diagnoses the cause and restores your visibility.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You do not need an enterprise budget to fix the technical basics that are quietly capping your rankings. We handle technical SEO for small businesses across Australia, starting with the highest-impact fixes, crawl and index issues, speed, mobile, so the content and local visibility you are already paying for can actually perform. Clear pricing, no padding.',
  },
  {
    icon: ShoppingCart,
    t: 'eCommerce stores',
    d: 'Large catalogues bring large technical challenges: duplicate products, faceted navigation, crawl budget waste, and slow pages that cost sales. We bring the depth and the systems to keep a big store crawlable, indexable, and fast, so the pages that carry your margin rank the way they should.',
  },
  {
    icon: Building2,
    t: 'Enterprise and high-complexity sites',
    d: 'For large sites with thousands of pages, multiple templates, complex migrations, and higher stakes, technical SEO is a serious engineering exercise. We bring enterprise technical SEO expertise, the tools to diagnose issues at scale, and the accountability to see the fixes through, with one partner answerable for the whole thing.',
  },
  {
    icon: Rocket,
    t: 'Businesses launching or rebuilding a site',
    d: 'A new build is the best time to get the technical foundations right, and the easiest time to get them wrong. We work from a technical SEO checklist for new websites, so your site launches crawlable, fast, well-structured, and search-ready from the first line of code rather than needing remediation six months later.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Audit and discovery',
    d: 'We run a full technical SEO audit of your site, crawlability, indexation, speed, architecture, structured data, and security, and look at how your competitors are set up. You get a documented, prioritised read on what is holding you back before we touch anything.',
  },
  {
    t: 'Prioritise and plan',
    d: 'Not every issue matters equally. We prioritise the fixes by impact and effort, so we tackle the changes that will move rankings first rather than working through the list alphabetically. You see the plan and the reasoning, not a black box.',
  },
  {
    t: 'Fix and implement',
    d: 'This is where we differ from audit-only providers: we do the work. Crawl fixes, speed optimisation, architecture changes, schema implementation, redirect cleanup, all handled by our in-house engineers rather than handed to your team as a task list.',
  },
  {
    t: 'Validate and monitor',
    d: 'We confirm the fixes worked, indexation improving, Core Web Vitals passing, rich results validating in the Google Rich Results Test, and we keep monitoring, because technical issues can creep back in as a site changes.',
  },
  {
    t: 'Report and refine',
    d: 'You get reporting in plain language, tied to what actually improved: pages indexed, speed scores, rankings, and traffic, with the next priorities set against the data. Technical SEO is never fully "done" on a living site, and we treat it that way.',
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Technical SEO services in Australia',
    d: 'As a reputable technical SEO company in Australia, we help businesses fix the crawl, index, speed, and architecture issues holding their rankings back. Every engagement is built on white-hat methods, in-house engineering, and fixes we actually implement rather than just recommend.',
  },
  {
    t: 'Technical SEO services in the UK',
    d: 'Businesses looking for technical SEO in the UK need a partner who can both diagnose and fix foundational issues in a competitive market. We audit crawlability, speed, structure, and structured data, and resolve what is holding your site back.',
  },
  {
    t: 'Technical SEO services in the USA',
    d: 'Our technical SEO services in the USA help businesses fix the technical foundations behind their rankings across competitive markets and large sites. From crawl and index issues to Core Web Vitals and schema, we find the problems and fix them.',
  },
  {
    t: 'Technical SEO services in Canada',
    d: 'As a trusted technical SEO provider for Canadian businesses, we audit and fix site speed, crawlability, indexation, architecture, and structured data, giving your content and links a technically sound foundation to rank on.',
  },
  {
    t: 'Technical SEO services in Singapore',
    d: "Singapore's competitive market rewards fast, technically sound sites. Our technical SEO services in Singapore help businesses resolve crawl and index issues, improve Core Web Vitals, and implement structured data that earns richer search results.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is technical SEO?',
    a: 'Technical SEO is the practice of optimising the technical foundations of your website so search engines can crawl, index, render, and understand it, and so it loads fast and works well for users. It covers site speed and Core Web Vitals, crawlability and indexation, site architecture and internal linking, XML sitemaps, canonical tags and redirects, structured data and schema markup, mobile rendering, and security. It is separate from on-page content SEO and off-page link building, but it is the foundation both rely on: without a technically sound site, even great content and strong links struggle to rank. Fix the technical foundation and everything else you do works harder.',
  },
  {
    q: 'How often should you do a technical SEO audit?',
    a: 'For most sites, a thorough technical SEO audit once or twice a year is sensible, with lighter ongoing monitoring in between so new issues get caught early rather than after they have cost you rankings. Larger, more complex, and frequently changing sites, big eCommerce stores especially, benefit from more frequent checks, because every new product, template change, or plugin can introduce a technical problem. You should also run a full audit before and after any major change: a site migration, a redesign, a platform switch, or a CMS upgrade. On a living site, technical SEO is an ongoing discipline rather than a one-time fix, which is why we build monitoring into our engagements.',
  },
  {
    q: 'Does technical SEO guarantee rankings?',
    a: "No, and any provider who guarantees a specific ranking is either misinforming you or about to waste your money, because no one controls Google's algorithm. What technical SEO does is remove the barriers stopping you from ranking: if search engines cannot crawl your pages, your site is too slow, or your architecture confuses them, you cannot rank no matter how good your content is. Fixing those foundations lets your content and links do their job, and it is often the highest-ROI SEO work available because one foundational fix can lift many pages at once. But rankings ultimately depend on the whole picture, technical health plus content quality plus authority, not technical SEO alone.",
  },
  {
    q: 'What is a crawl budget?',
    a: 'Crawl budget is the number of pages a search engine will crawl on your site within a given timeframe, based roughly on how much it wants to crawl your site and how much your server can handle. For small sites it rarely matters, because search engines can easily crawl everything. For large sites, big eCommerce stores, news sites, and anything with thousands of URLs, it matters a lot: if crawl budget is wasted on low-value pages, duplicate URLs, endless faceted-navigation combinations, or broken links, your important pages may get crawled less often or missed entirely. Crawl budget optimization means directing that budget toward the pages that matter, by fixing duplicate content, tidying architecture, managing crawl directives, and cleaning up the URLs search engines should not be spending time on.',
  },
]

// Short signal chips for the hero - every phrase is drawn verbatim from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: 'In-house', l: 'software and cloud engineers' },
  { v: 'White-hat', l: "aligned with Google's guidelines" },
  { v: 'No lock-in', l: 'no 12-month contracts' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$1,000 - $5,000/mo', l: 'Ongoing technical SEO as part of a broader SEO retainer, scaling with site size and competition.' },
  { v: 'A few $1,000s', l: 'A one-off technical SEO audit for a small-to-medium site, typically scoped as a fixed project.' },
  { v: 'Highest ROI', l: 'Fixing one foundational issue can lift the performance of every page at once.' },
]

export function TechnicalSEO() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/technical-seo')

  usePageMeta(
    'Technical SEO Company in Australia | Audits, Speed & Site Fixes | EG Digital',
    'Technical SEO services in Australia that fix crawl, index, speed & architecture issues, not just report them. In-house engineers, white-hat, no lock-in. Get a free technical SEO audit.',
  )

  return (
    <PageLayout>
      <style>{`
        .tseo-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .tseo-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .tseo-shell{ max-width:2440px; } }
        @media (max-width:768px){ .tseo-shell{ max-width:100%; } }

        /* ── Section base ── */
        .tseo-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .tseo-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .tseo-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .tseo-sec.dark .tseo-shell { position:relative; z-index:1; }

        .tseo-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .tseo-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing: 0.01em; line-height: 1.04; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .tseo-h2 span { color:${GREEN}; }
        .tseo-sec.dark .tseo-h2 { color:#fff; }
        .tseo-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .tseo-sec.dark .tseo-lead { color:rgba(255,255,255,0.68); }

        /* ── Bento grid + spans ── */
        .bento { display:grid; grid-template-columns:repeat(12,1fr); gap:clamp(12px,1.4vw,20px); }
        .c12{ grid-column:span 12; } .c8{ grid-column:span 8; } .c7{ grid-column:span 7; }
        .c6{ grid-column:span 6; } .c5{ grid-column:span 5; } .c4{ grid-column:span 4; }
        @media (max-width:1024px){
          .bento > *{ grid-column:span 6; }
          .bento > .feat, .bento > .c12{ grid-column:span 12; }
        }
        @media (max-width:640px){ .bento > *{ grid-column:span 12 !important; } }

        /* ── Tile ── */
        .tile { position:relative; overflow:hidden; height:100%; border-radius:clamp(20px,2vw,28px);
          border:1px solid rgba(8,33,60,0.08); background:linear-gradient(165deg,#ffffff,#f5f8fc);
          padding:clamp(24px,2.5vw,40px); box-shadow:0 8px 28px -16px rgba(8,33,60,0.24);
          transition:transform .42s cubic-bezier(0.16,1,0.3,1), box-shadow .42s, border-color .42s; will-change:transform; }
        .tile:hover { transform:translateY(-6px); box-shadow:0 30px 62px -30px rgba(8,33,60,0.32); border-color:${GREEN}55; }
        .tile.d { background:linear-gradient(165deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12); box-shadow:none; }
        .tile.d:hover { border-color:rgba(60,185,140,0.42); box-shadow:0 34px 70px -30px rgba(0,0,0,0.55); }
        .tile.n { background:linear-gradient(158deg,#0e3059,${NAVY} 70%,#061a30); border:1px solid rgba(255,255,255,0.1); color:#fff; box-shadow:0 24px 60px -30px rgba(0,0,0,0.6); }
        .tile.g { background:linear-gradient(150deg,${GREEN},#2c9e74); border:none; color:${NAVY}; }
        .tile.feat { padding:clamp(28px,3vw,52px); }
        .tile-glow::after { content:''; position:absolute; top:-40%; right:-20%; width:60%; height:120%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}22, transparent 62%); pointer-events:none; }

        .tico { width:54px; height:54px; border-radius:15px; display:inline-flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${GREEN}29,${GREEN}0d); color:${GREEN}; margin-bottom:18px; }
        .tile.d .tico { background:rgba(60,185,140,0.16); }
        .tile.n .tico { background:linear-gradient(150deg,${GREEN},#2c9e74); color:${NAVY}; }
        .t-t { font-size:clamp(19px,1.7vw,27px); font-weight:900; letter-spacing:-0.03em; line-height:1.08; color:${NAVY}; margin:0 0 12px; }
        .tile.d .t-t, .tile.n .t-t { color:#fff; }
        .t-d { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:0; }
        .tile.d .t-d, .tile.n .t-d { color:rgba(255,255,255,0.7); }

        /* ── Hero ── */
        .tseo-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .tseo-h1 { position:relative; font-size:clamp(42px,6.2vw,92px); font-weight:900; letter-spacing: 0.01em; line-height: 1.02; color:#fff; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .tseo-lede { position:relative; font-size:clamp(20px,2.4vw,34px); font-weight:900; letter-spacing:-0.035em; line-height:1.06; color:#fff; margin:18px 0 0; }
        .tseo-lede span { color:${GREEN}; }
        .tseo-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .tseo-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .tseo-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .tseo-bp svg { transition:transform .2s; } .tseo-bp:hover svg { transform:translateX(3px); }
        .tseo-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .tseo-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .tseo-bp, .tseo-bg, .tseo-tel{ width:100%; justify-content:center; } }

        /* Hero image (Unsplash) + animated scan + emblem */
        .hero-img { padding:0; border:1px solid rgba(255,255,255,0.12); background:${NAVY}; min-height:clamp(300px,42vw,520px); }
        .hero-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .hero-img::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 38%, ${NAVY}77); pointer-events:none; }
        .tseo-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:tseo-scan 4.6s linear infinite; will-change:transform; }
        @keyframes tseo-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .tseo-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:tseo-float 6s ease-in-out infinite; will-change:transform; }
        .tseo-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:tseo-spin 3.4s linear infinite; will-change:transform; }
        .tseo-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .tseo-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .tseo-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .tseo-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(255,255,255,0.66); }
        .tseo-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .tseo-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:tseo-pulse 1.8s ease-in-out infinite; }
        @keyframes tseo-spin { to { transform:rotate(360deg); } }
        @keyframes tseo-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes tseo-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:tseo-float 7s ease-in-out infinite; will-change:transform; }
        .chip:nth-child(2){ animation-delay:.5s; } .chip:nth-child(3){ animation-delay:1s; }
        .chip-v { font-size:clamp(22px,2.4vw,34px); font-weight:900; letter-spacing:-0.03em; color:${GREEN}; line-height:1; }
        .chip-l { font-size:clamp(12.5px,1vw,14.5px); line-height:1.5; color:rgba(255,255,255,0.66); }

        .hero-intro { margin-top:clamp(14px,1.6vw,22px); }
        .hero-intro .t-d { margin:0 0 14px; max-width:none; }
        .hero-intro .t-d:last-child { margin-bottom:0; }
        .hero-intro strong { color:#fff; font-weight:800; }

        /* ── Services feature row ── */
        .srv-feat { display:grid; grid-template-columns:auto 1fr; gap:clamp(20px,2.6vw,40px); align-items:center; }
        @media (max-width:640px){ .srv-feat{ grid-template-columns:1fr; } }
        .srv-feat .tico { width:66px; height:66px; margin:0; }
        .srv-feat .t-t { font-size:clamp(24px,2.8vw,42px); text-transform:uppercase; word-spacing: 0.14em; margin-bottom:12px; }

        /* ── Steps ── */
        .step-no { font-size:clamp(38px,4.4vw,72px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:${GREEN};
          font-variant-numeric:tabular-nums; opacity:0.92; margin-bottom:6px; }

        /* ── Cost price rows ── */
        .prow { padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .prow:first-child{ padding-top:0; } .prow:last-child{ border-bottom:none; padding-bottom:0; }
        .prow-v { font-size:clamp(24px,2.8vw,40px); font-weight:900; letter-spacing:-0.04em; color:${GREEN}; line-height:1; }
        .prow-v span { font-size:0.4em; font-weight:700; }
        .prow-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.68); margin-top:8px; line-height:1.5; }
        .cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .cost-p:last-child{ margin-bottom:0; }
        .tseo-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .tseo-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing: 0.01em; line-height: 1.1; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .tseo-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .tseo-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .tseo-scan, .tseo-emblem, .tseo-emblem-ring, .tseo-dot, .chip { animation:none !important; }
          .tseo-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="tseo-sec dark tseo-hero">
        <div className="tseo-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Technical SEO Company in Australia</Eyebrow>
                <h1 className="tseo-h1">Technical SEO Company in Australia</h1>
                <p className="tseo-lede">
                  Fix the foundations search engines choke on, so your content and links can <span>finally rank</span>.
                </p>
                <div className="tseo-cta">
                  <button className="tseo-bp" onClick={() => navigate('/contact')}>
                    Get a free technical SEO audit
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="tseo-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile hero-img">
              <img
                src={img('photo-1461749280684-dccba630e2f6', 900, 900)}
                alt="Technical SEO services in Australia - technical SEO company in Australia"
                width={900} height={900} loading="eager" decoding="async"
              />
              <div className="tseo-scan" aria-hidden="true" />
              <div className="tseo-emblem" aria-hidden="true">
                <div className="tseo-emblem-ring"><span className="tseo-emblem-ic"><Gauge size={20} /></span></div>
                <div className="tseo-emblem-tx">
                  <span className="tseo-emblem-k">Core Web Vitals</span>
                  <span className="tseo-emblem-v"><span className="tseo-dot" /> Passing</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="chips">
            {SIGNALS.map(s => (
              <div className="chip" key={s.v}>
                <span className="chip-v">{s.v}</span>
                <span className="chip-l">{s.l}</span>
              </div>
            ))}
          </div>

          <Reveal className="tile d feat hero-intro" style={{ marginTop: 'clamp(14px,1.6vw,22px)' }}>
            <div>
              <p className="t-d">
                EG Digital is a Melbourne-based technical SEO company that fixes what is holding your site back at the
                foundation: crawlability, indexation, site speed, architecture, and structured data. We do not just hand
                you a report full of problems; we resolve them. We are part of <ElomaLink />, so your technical SEO sits
                alongside web development, PPC, Microsoft and cloud, custom software, and cyber security under one roof.
                That matters more than it sounds, because most technical SEO fixes are development work, and when the
                same team that finds the issue also has the engineers to fix it, the problems get resolved in days
                rather than sitting for weeks in a separate developer's queue.
              </p>
              <p className="t-d">
                <strong>One partner.</strong> One team that audits the site, fixes the crawl and indexation issues,
                speeds it up, tidies the architecture, and reports back in plain language.
              </p>
              <p className="t-d">
                Get a free technical SEO audit. No lock-in, just a clear read on what is holding your site back and what
                it would take to fix it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose EG Digital ── */}
      <section className="tseo-sec">
        <div className="tseo-shell">
          <div className="tseo-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="tseo-h2">Why choose EG Digital as your technical SEO consultants in <span>Australia</span></h2>
          </div>
          <div className="bento">
            {WHY.map((w, i) => {
              const Ic = w.icon
              const span = i === 0 || i === 3 ? 'c7' : 'c5'
              return (
                <Reveal key={w.t} delay={Math.min(i * 0.06, 0.24)} className={`tile tile-glow ${span}`}>
                  <div>
                    <span className="tico"><Ic size={24} /></span>
                    <h3 className="t-t">{w.t}</h3>
                    <p className="t-d">{w.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Our technical SEO services ── */}
      <section className="tseo-sec dark">
        <div className="tseo-shell">
          <div className="tseo-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="tseo-h2">Our technical SEO <span>services</span></h2>
            <p className="tseo-lead">
              We are a full-service technical SEO agency, so you can hand us the whole program or the single piece you
              are missing.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // audit is a full-width feature row; the rest form a varied bento.
              if (i === 0) {
                return (
                  <Reveal key={s.t} className="tile n feat c12 tile-glow">
                    <div className="srv-feat">
                      <span className="tico"><Ic size={30} /></span>
                      <div>
                        <h3 className="t-t">{s.t}</h3>
                        {s.paras.map((p, pi) => <p key={pi} className="t-d">{p}</p>)}
                      </div>
                    </div>
                  </Reveal>
                )
              }
              const spans = ['c8', 'c4', 'c4', 'c8', 'c6', 'c6', 'c6', 'c6']
              return (
                <Reveal key={s.t} delay={Math.min(i * 0.03, 0.18)} className={`tile d ${spans[i - 1]}`}>
                  <div>
                    <span className="tico"><Ic size={24} /></span>
                    <h3 className="t-t">{s.t}</h3>
                    {s.paras.map((p, pi) => <p key={pi} className="t-d">{p}</p>)}
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="tile g feat tile-glow" style={{ marginTop: 'clamp(12px,1.4vw,20px)' }}>
            <div>
              <h3 className="t-t" style={{ color: NAVY }}>What our technical SEO covers</h3>
              <p className="t-d" style={{ color: 'rgba(8,33,60,0.78)' }}>
                To be concrete, a full technical SEO engagement with us typically addresses crawl budget optimisation
                and fixing indexing issues; site performance audits and Core Web Vitals improvements to lift Google
                PageSpeed Insights scores; SEO site architecture and internal linking; XML sitemap creation and best
                practices; structured data and schema markup implementation validated against the Google Rich Results
                Test, including rich snippets for eCommerce; duplicate content fixes and faceted navigation best
                practices; and the technical side of eCommerce SEO and Shopify SEO audits. We use industry-standard
                technical SEO tools, including SEO audit software, website crawlers, and log file analysis, to see your
                site exactly as a search engine does before we change anything.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Who we do technical SEO for ── */}
      <section className="tseo-sec">
        <div className="tseo-shell">
          <div className="tseo-head">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="tseo-h2">Who we do technical SEO <span>for</span></h2>
          </div>
          <div className="bento">
            {AUDIENCES.map((a, i) => {
              const Ic = a.icon
              const span = i === 0 || i === 3 ? 'c7' : 'c5'
              return (
                <Reveal key={a.t} delay={Math.min(i * 0.06, 0.24)} className={`tile tile-glow ${span}`}>
                  <div>
                    <span className="tico"><Ic size={24} /></span>
                    <h3 className="t-t">{a.t}</h3>
                    <p className="t-d">{a.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="tseo-sec dark">
        <div className="tseo-shell">
          <div className="tseo-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="tseo-h2">How we <span>work</span></h2>
          </div>
          <div className="bento">
            {STEPS.map((s, i) => {
              const spans = ['c4', 'c4', 'c4', 'c6', 'c6']
              return (
                <Reveal key={s.t} delay={Math.min(i * 0.04, 0.16)} className={`tile d ${spans[i]}`}>
                  <div>
                    <div className="step-no">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="t-t">{s.t}</h3>
                    <p className="t-d">{s.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Cost ── */}
      <section className="tseo-sec">
        <div className="tseo-shell">
          <div className="tseo-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="tseo-h2">What technical SEO costs in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on the size and complexity of your site and the state it is in, and any
                  company quoting a flat price before auditing your site is guessing. Here is the current Australian
                  market for context.
                </p>
                <p className="cost-p">
                  A one-off technical SEO audit for a small-to-medium site is often scoped as a fixed project, typically
                  a few thousand dollars, with the fixes quoted separately or bundled in. Ongoing technical SEO, as
                  part of a broader SEO retainer, usually sits within the $1,000 to $5,000-a-month range that most
                  Australian SEO work falls into, scaling with site size and competition. Large, complex, or enterprise
                  sites, and significant migrations or penalty recoveries, are scoped individually because the
                  engineering effort varies so much. Where a site needs heavy remediation up front, expect a higher
                  initial investment to get the foundations right before ongoing work compounds.
                </p>
                <p className="cost-p">
                  Two things worth knowing. First, technical SEO is often the highest-ROI SEO work you can do, because
                  fixing a foundational issue can lift the performance of every page at once, but only if the fixes
                  actually get implemented rather than filed in a report. Second, be wary of very cheap "audits" that
                  are just automated tool exports with no analysis or fixes attached. We quote from a real audit,
                  itemise what gets done, and the report shows whether it worked.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="tile n c5 tile-glow">
              <div>
                {PRICES.map(p => (
                  <div className="prow" key={p.v}>
                    <div className="prow-v">
                      {p.v.includes('/mo')
                        ? <>{p.v.replace('/mo', '')}<span>/mo</span></>
                        : p.v}
                    </div>
                    <div className="prow-l">{p.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <p className="tseo-note">
            Get a free technical SEO audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── Technical SEO across Australia and beyond ── */}
      <section className="tseo-sec dark">
        <div className="tseo-shell">
          <div className="tseo-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="tseo-h2">Technical SEO across Australia and <span>beyond</span></h2>
            <p className="tseo-lead">
              Although EG Digital is based in Melbourne, we deliver technical SEO for businesses across Australia and
              international markets. Whether you run a small site, a large store, or a complex enterprise platform, our
              approach stays the same: find what search engines choke on, fix it properly, and report on the
              improvement.
            </p>
          </div>
          <div className="bento">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 0.06, 0.24)} className={`tile ${i === 0 ? 'g feat c12 tile-glow' : 'd c6'}`}>
                <div>
                  <h3 className="t-t" style={i === 0 ? { color: NAVY } : undefined}>{c.t}</h3>
                  <p className="t-d" style={i === 0 ? { color: 'rgba(8,33,60,0.78)' } : undefined}>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="co-close">
              Whether you are based in Australia or expanding internationally, our philosophy stays the same: do
              technical SEO the right way, fix what search engines choke on, and report on the improvement rather than
              just the problems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to fix the foundations ── */}
      <section className="tseo-sec">
        <div className="tseo-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="ready-h">Ready to fix the foundations holding your rankings back?</h2>
              <p className="ready-p">
                Tell us about your site and where you suspect the technical issues are. We will run a free audit, review
                your competitors, and show you exactly what is holding your rankings back and what it would take to fix
                it. If we are the right fit, we will show you how. If we are not, we will tell you.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free technical SEO audit below.
              </p>
              <div className="ready-cta">
                <button className="tseo-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="tseo-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="tseo-sec">
        <div className="tseo-shell">
          <div className="tseo-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="tseo-h2">Frequently asked <span>questions</span></h2>
          </div>
          <div className="bento">
            {FAQS.map((f, i) => {
              const span = i === 0 || i === 3 ? 'c7' : 'c5'
              return (
                <Reveal key={f.q} delay={Math.min(i * 0.05, 0.15)} className={`tile ${span}`}>
                  <div>
                    <h3 className="faq-q">{f.q}</h3>
                    <p className="faq-a">{f.a}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready When You Are"
        heading="Let's fix your"
        highlight="foundations."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
