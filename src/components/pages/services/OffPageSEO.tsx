import {
  TrendingUp, ShieldCheck, Users, Unlock, Search, Link2, Award,
  PenLine, Crosshair, Megaphone, Globe, Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - OFF-PAGE SEO / LINK BUILDING (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "Link Authority" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: TrendingUp,
    t: 'We report on revenue, not domain rating',
    d: 'A backlink is a means, not a result. Our reporting starts with organic enquiries, leads, and the revenue they turn into, then works back to the links and authority that produced them. If a report only shows you a rising DR score and a link count, it is hiding the part that matters. Ours shows you the part that matters first.',
  },
  {
    icon: ShieldCheck,
    t: 'White-hat only, because the cheap way gets you penalised',
    d: 'There is no secret backdoor to Google, and the businesses buying $299 link packages are one algorithm update away from a manual penalty that takes months to recover from. We build links the way that lasts: digital PR, genuine outreach, and content worth citing. No private blog networks. No link farms. No exact-match anchor spam. It is slower than the shortcuts, and it is the only version that survives.',
  },
  {
    icon: Users,
    t: 'One team for off-page, on-page, and the site itself',
    d: "Links point at pages, and a link pointing at a slow, thin, or broken page wastes the authority it carries. Because EG Digital also runs technical SEO, content, and web development in-house, the on-page fixes that make your links count get actioned in days rather than sitting in a separate developer's queue. No briefing three companies who never talk to each other.",
  },
  {
    icon: Unlock,
    t: 'No lock-in, no smoke',
    d: 'No 24-month contracts. No hidden link networks. No guaranteed "fifty DA-50 links in 30 days," because anyone promising that is either misleading you or about to damage your site. We earn the renewal each month by moving your numbers.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Search,
    t: 'Backlink profile analysis and off-page SEO audit',
    paras: [
      'Every engagement starts here. We map your existing backlink profile, flag the toxic or spammy links dragging you down, and measure your authority against the competitors actually beating you in search. You get a documented read on where you stand, what is helping, what is hurting, and what it would take to close the gap, before we touch anything.',
    ],
  },
  {
    icon: Link2,
    t: 'White hat backlink services',
    paras: [
      'The core of the work. We earn high-quality, relevant backlinks through outreach and genuine relationships, not bulk placements. Every prospect passes a relevance and authority check before we pursue it, and every link is one you would be comfortable showing Google. Quality over quantity is not a slogan here; it is the whole method.',
    ],
  },
  {
    icon: Award,
    t: 'High authority link building',
    paras: [
      'Links from trusted, established sites carry far more weight than a pile of low-quality ones, and they are harder to earn, which is exactly why they work. We target the publications and domains that genuinely move rankings in your industry, through digital PR and outreach that pitches editors with data and stories worth covering.',
    ],
  },
  {
    icon: PenLine,
    t: 'Guest posting services in Australia',
    paras: [
      'We write genuinely useful content for reputable, relevant sites in your niche, earning you a quality backlink and putting your brand in front of a new audience at the same time. No link farms dressed up as guest posts, no irrelevant placements that Google ignores. Real sites, real readers, real editorial standards.',
    ],
  },
  {
    icon: Crosshair,
    t: 'Competitor backlink research',
    paras: [
      "Your competitors' link profiles are a map of where you should be. We analyse who links to the sites outranking you, find the gaps you can realistically fill, and build a plan to match and beat their authority where it counts. You get to see exactly why they rank and what it takes to catch them.",
    ],
  },
  {
    icon: Megaphone,
    t: 'Brand mentions and digital PR',
    paras: [
      'Not every trust signal is a link. Unlinked brand mentions, citations, and coverage across the sites your buyers read all tell Google your business is known and credible. We build the digital PR and outreach that gets your name in front of the right audiences, which earns links and grows the brand recognition that AI engines now read as authority too.',
    ],
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Audit and benchmark',
    d: 'We analyse your current backlink profile, flag toxic links, and measure your authority against the competitors winning your keywords. Baseline first. We cannot improve what we have not measured.',
  },
  {
    t: 'Strategy and target list',
    d: 'We build a documented off-page strategy: the sites and publications worth pursuing, the content that will earn links, and the priorities that get you the fastest authority gains. You see the plan before we start, not a black box.',
  },
  {
    t: 'Outreach and link earning',
    d: 'We pitch editors, place guest content, run digital PR, and earn the links, each one passing a relevance and authority check first. No spam, no shortcuts, no links you would be embarrassed to show Google.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to leads and revenue, in plain language, with next month's priorities set against the data. Every backlink and mention is tracked, its impact measured, and the approach refined as you grow. The authority compounds, and so do the results.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Off-page SEO services in the UK',
    d: 'Our off-page SEO services in the UK are built for one of the world\'s most competitive search markets. We earn high-authority backlinks and brand mentions from relevant UK publications, strengthening the topical authority that ranks you on Google and gets you cited across AI search platforms.',
  },
  {
    t: 'Off-page SEO services in the USA',
    d: 'Businesses looking for off-page SEO services in the USA need authority strong enough to compete across crowded industries and multiple markets. We combine white-hat link building, guest posting, and digital PR to earn the credible backlinks that drive sustainable organic growth across the United States.',
  },
  {
    t: 'Off-page SEO services in Canada',
    d: 'Our off-page SEO services in Canada focus on building long-term authority through high-quality, relevant backlinks and genuine brand mentions. Whether you operate locally or nationally, we help Canadian businesses earn the trust signals that improve both Google rankings and AI search citations.',
  },
  {
    t: 'Off-page SEO services in Singapore',
    d: "Singapore's competitive digital market rewards credibility and expertise. Our off-page SEO services in Singapore help businesses earn authoritative backlinks, build brand mentions, and grow the authority that lifts visibility across Google Search, AI Overviews, ChatGPT, and Perplexity.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is included in off-page SEO services?',
    a: 'Off-page SEO services cover everything done outside your website to build its authority: earning high-quality backlinks through outreach and digital PR, guest posting on relevant sites, building brand mentions and citations, analysing your backlink profile, researching competitor links, and disavowing toxic ones. At EG Digital it also includes monthly reporting tied to leads and rankings, so you can see what the authority work actually produced.',
  },
  {
    q: 'Are off-page SEO services worth the investment?',
    a: 'Yes, for almost any business competing in search. Backlinks and authority remain among Google\'s strongest ranking signals, and they increasingly decide whether AI engines cite your brand too. The catch is that quality matters far more than quantity: a few links from trusted, relevant sites outperform hundreds of cheap ones, which can actively harm you. Done properly with white-hat methods, off-page SEO compounds over time and keeps paying off long after the work is done.',
  },
  {
    q: 'What is the best off-page SEO company for a small business in Australia?',
    a: 'The best off-page SEO company for a small business is one that builds links the white-hat way, reports on leads rather than vanity metrics, and does not lock you into a long contract. Avoid anyone selling cheap bulk backlinks, which risk a Google penalty. EG Digital builds focused, affordable off-page campaigns for Australian small businesses, starting where your money works hardest and scaling as the results prove out.',
  },
  {
    q: 'How can I improve off-page SEO for a local Australian business?',
    a: 'Start by earning links and mentions from local and industry-relevant sources: local publications, industry associations, and complementary businesses in your area. Consistent citations, genuine reviews, and coverage on trusted regional sites all build the local authority Google rewards. Combine that with a clean backlink profile, remove any toxic links, and pair it with strong local SEO so the authority you earn translates into rankings and enquiries in your area.',
  },
  {
    q: 'What impact do social signals have on off-page SEO rankings?',
    a: 'Social signals like shares, mentions, and engagement are not a direct Google ranking factor, but they support off-page SEO indirectly. Content that spreads on social gets seen by more people, which increases the chance of earning genuine backlinks and brand mentions, the signals that do move rankings. Social activity also builds the brand recognition that AI engines increasingly read as a marker of authority, so it is worth doing as part of the wider picture.',
  },
  {
    q: 'How is off-page SEO different from on-page SEO?',
    a: 'On-page SEO covers what you control on your own site: content, keywords, structure, and technical health. Off-page SEO covers what happens off your site: backlinks, brand mentions, and the authority signals that tell Google your business is credible and worth ranking. On-page lays the groundwork and off-page builds the reputation, and you need both working together to reach and hold the top of search. EG Digital runs both under one team for that reason.',
  },
]

// Short signal chips for the hero - every phrase is drawn verbatim from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: 'Revenue', l: 'we report on leads and revenue, not domain rating' },
  { v: 'White-hat', l: 'digital PR, genuine outreach, content worth citing' },
  { v: 'No lock-in', l: 'no 24-month contracts, no hidden link networks' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$1,500 - $5,000/mo', l: 'What most Australian SMBs pay for off-page SEO as part of a broader campaign, with competitive industries pushing higher.' },
  { v: 'Upper end', l: 'Digital PR and high-authority link campaigns, because genuine outreach to established publications takes real time and real relationships.' },
  { v: 'Avoid $200 - $400', l: 'That price almost always means automated placements on low-quality sites, which does nothing at best and earns a penalty at worst.' },
]

export function OffPageSEO() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/off-page-seo')

  usePageMeta(
    'Off-Page SEO Services in Australia | Link Building | EG Digital',
    'White-hat off-page SEO and link building services in Australia. High-authority backlinks, guest posting, digital PR and brand mentions from a Melbourne team. Get a free off-page SEO audit.',
  )

  return (
    <PageLayout>
      <style>{`
        .ops-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .ops-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .ops-shell{ max-width:2440px; } }
        @media (max-width:768px){ .ops-shell{ max-width:100%; } }

        /* ── Section base ── */
        .ops-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .ops-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .ops-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .ops-sec.dark .ops-shell { position:relative; z-index:1; }

        .ops-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .ops-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ops-h2 span { color:${GREEN}; }
        .ops-sec.dark .ops-h2 { color:#fff; }
        .ops-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .ops-sec.dark .ops-lead { color:rgba(255,255,255,0.68); }

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
        .ops-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .ops-h1 { position:relative; font-size:clamp(44px,6.6vw,100px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:#fff; margin:16px 0 0; text-transform:uppercase; }
        .ops-lede { position:relative; font-size:clamp(20px,2.4vw,34px); font-weight:900; letter-spacing:-0.035em; line-height:1.06; color:#fff; margin:18px 0 0; }
        .ops-lede span { color:${GREEN}; }
        .ops-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .ops-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .ops-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .ops-bp svg { transition:transform .2s; } .ops-bp:hover svg { transform:translateX(3px); }
        .ops-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .ops-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .ops-bp, .ops-bg, .ops-tel{ width:100%; justify-content:center; } }

        /* Hero image (Unsplash) + animated scan + emblem */
        .hero-img { padding:0; border:1px solid rgba(255,255,255,0.12); background:${NAVY}; min-height:clamp(300px,42vw,520px); }
        .hero-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .hero-img::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 38%, ${NAVY}77); pointer-events:none; }
        .ops-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:ops-scan 4.6s linear infinite; will-change:transform; }
        @keyframes ops-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .ops-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:ops-float 6s ease-in-out infinite; will-change:transform; }
        .ops-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:ops-spin 3.4s linear infinite; will-change:transform; }
        .ops-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .ops-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .ops-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .ops-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.66); }
        .ops-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .ops-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:ops-pulse 1.8s ease-in-out infinite; }
        @keyframes ops-spin { to { transform:rotate(360deg); } }
        @keyframes ops-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes ops-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:ops-float 7s ease-in-out infinite; will-change:transform; }
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
        .srv-feat .t-t { font-size:clamp(24px,2.8vw,42px); text-transform:uppercase; margin-bottom:12px; }

        /* ── Steps ── */
        .step-no { font-size:clamp(38px,4.4vw,72px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:${GREEN};
          font-variant-numeric:tabular-nums; opacity:0.92; margin-bottom:6px; }

        /* ── AEO editorial band ── */
        .aeo-grid { display:grid; grid-template-columns:1fr 0.82fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .aeo-grid{ grid-template-columns:1fr; } }
        .aeo-stat { font-size:clamp(80px,12vw,190px); font-weight:900; letter-spacing:-0.06em; line-height:0.86; color:${NAVY}; }
        .aeo-stat small { display:block; font-size:clamp(14px,1.15vw,18px); font-weight:700; letter-spacing:-0.01em; line-height:1.55;
          color:rgba(8,33,60,0.72); margin-top:14px; text-transform:none; }

        /* ── Cost price rows ── */
        .prow { padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .prow:first-child{ padding-top:0; } .prow:last-child{ border-bottom:none; padding-bottom:0; }
        .prow-v { font-size:clamp(24px,2.8vw,40px); font-weight:900; letter-spacing:-0.04em; color:${GREEN}; line-height:1; }
        .prow-v span { font-size:0.4em; font-weight:700; }
        .prow-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.68); margin-top:8px; line-height:1.5; }
        .cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .cost-p:last-child{ margin-bottom:0; }
        .ops-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .ops-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing:-0.045em; line-height:0.98; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .ops-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .ops-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .ops-scan, .ops-emblem, .ops-emblem-ring, .ops-dot, .chip { animation:none !important; }
          .ops-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="ops-sec dark ops-hero">
        <div className="ops-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Link Building Company in Australia</Eyebrow>
                <h1 className="ops-h1">Off-Page SEO Services in Australia</h1>
                <p className="ops-lede">
                  Build the authority that gets you <span>ranked, cited, and chosen</span>.
                </p>
                <div className="ops-cta">
                  <button className="ops-bp" onClick={() => navigate('/contact')}>
                    Get a free off-page SEO audit
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="ops-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile hero-img">
              <img
                src={img('photo-1552664730-d307ca884978', 900, 900)}
                alt="Off-page SEO services in Australia - link building company in Australia"
                width={900} height={900} loading="eager" decoding="async"
              />
              <div className="ops-scan" aria-hidden="true" />
              <div className="ops-emblem" aria-hidden="true">
                <div className="ops-emblem-ring"><span className="ops-emblem-ic"><Link2 size={20} /></span></div>
                <div className="ops-emblem-tx">
                  <span className="ops-emblem-k">Link Authority</span>
                  <span className="ops-emblem-v"><span className="ops-dot" /> Building</span>
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
                Most link builders sell you a number. Two hundred backlinks a month. A domain rating that ticks up on a
                dashboard. None of that is the point. Rankings are. Revenue is.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based off-page SEO company that treats authority as something you earn, not
                something you buy in bulk. We build the links, the brand mentions, and the trust signals that tell Google
                your site deserves to rank, and we tie all of it to the number you actually care about: qualified
                enquiries from people searching for what you sell. Every link we chase passes a relevance and authority
                check first, because fifty links that hold through the next algorithm update beat five hundred that
                vanish with it.
              </p>
              <p className="t-d">
                <strong>We are part of Eloma Group,</strong> so your off-page work sits next to on-page SEO, technical
                SEO, web development, and content under one roof. One partner, one team, one set of monthly reports you
                can read without a translator.
              </p>
              <p className="t-d">
                Get a free off-page SEO audit. No lock-in, just a clear read on your backlink profile and where you stand
                against the competitors outranking you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose EG Digital ── */}
      <section className="ops-sec">
        <div className="ops-shell">
          <div className="ops-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="ops-h2">Why work with EG Digital as your link building company in <span>Australia</span></h2>
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

      {/* ── Our off-page SEO services ── */}
      <section className="ops-sec dark">
        <div className="ops-shell">
          <div className="ops-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="ops-h2">Our off-page SEO <span>services</span></h2>
            <p className="ops-lead">
              We are a full-service off-page SEO company, so you can take the whole program or the single piece you are
              missing.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // The audit is a full-width feature row; the rest form a varied bento.
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
              const spans = ['c6', 'c6', 'c6', 'c6', 'c12']
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
        </div>
      </section>

      {/* ── SEO, AEO, and why off-page authority matters more now ── */}
      <section className="ops-sec">
        <div className="ops-shell">
          <div className="ops-head">
            <Eyebrow>SEO + AEO</Eyebrow>
            <h2 className="ops-h2">Why off-page authority matters <span>more now</span></h2>
          </div>
          <div className="aeo-grid">
            <Reveal className="tile feat">
              <div>
                <p className="cost-p">
                  Off-page SEO used to be about one thing: ranking in Google's list of blue links. It still does that,
                  and it now does something else. More buyers ask ChatGPT, Perplexity, Gemini, or Google's AI Overviews
                  before they ever reach a search results page, and those engines decide which brands to cite partly on
                  the same signals that rank you in Google, authority, credibility, and how often trusted sources
                  reference you.
                </p>
                <p className="cost-p">
                  That is the part most Australian companies are still catching up on. The businesses that get cited are
                  the ones with genuine authority behind them: real links from real sites, and a brand that shows up
                  across the web rather than only on its own domain. Off-page SEO builds exactly that. The work that
                  earns you a Google ranking is much of the same work that gets you into an AI answer, so we do it once
                  and it pays off in both places.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="tile g feat tile-glow">
              <div>
                <div className="aeo-stat">
                  81%
                  <small>
                    A 2026 audit found AI systems failed to cite brands in 81% of unbranded questions about the brand's
                    own category.
                  </small>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="ops-sec dark">
        <div className="ops-shell">
          <div className="ops-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="ops-h2">How we <span>work</span></h2>
          </div>
          <div className="bento">
            {STEPS.map((s, i) => {
              const spans = ['c6', 'c6', 'c6', 'c6']
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
      <section className="ops-sec">
        <div className="ops-shell">
          <div className="ops-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="ops-h2">What off-page SEO costs in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on your industry, your competition, and how aggressive the link building
                  needs to be, and any company quoting a flat number before seeing your backlink profile is guessing.
                </p>
                <p className="cost-p">
                  For context, most Australian SMBs pay between $1,500 and $5,000 per month for off-page SEO as part of a
                  broader campaign, with competitive industries such as legal, finance, and trades pushing higher because
                  the links cost more to earn and the competition is fiercer. A standalone off-page SEO audit is usually
                  scoped separately. Digital PR and high-authority link campaigns sit at the upper end, because genuine
                  outreach to established publications takes real time and real relationships.
                </p>
                <p className="cost-p">
                  One thing worth knowing: be wary of anything around $200 to $400 a month advertised as "link building."
                  That price almost always means automated placements on low-quality or irrelevant sites, which does
                  nothing at best and earns a penalty at worst. We quote from an actual audit of your situation, and the
                  quote comes with a scope document, not just a number. You will know what gets done each month, and the
                  report will show whether it did.
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
          <p className="ops-note">
            Get a free off-page SEO audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International off-page SEO services ── */}
      <section className="ops-sec dark">
        <div className="ops-shell">
          <div className="ops-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="ops-h2">International off-page SEO <span>services</span></h2>
            <p className="ops-lead">
              Based in Melbourne, EG Digital delivers off-page SEO services in Australia while also helping businesses
              build authority across the UK, USA, Canada, and Singapore through link building and digital PR tailored to
              each market.
            </p>
          </div>
          <div className="bento">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 0.06, 0.24)} className="tile d c6">
                <div>
                  <span className="tico"><Globe size={24} /></span>
                  <h3 className="t-t">{c.t}</h3>
                  <p className="t-d">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="co-close">
              Whether your business operates in Australia or internationally, our approach stays the same: earn quality
              links, build genuine brand mentions, and grow the authority that gets you found on Google and in AI
              answers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to build authority that lasts ── */}
      <section className="ops-sec">
        <div className="ops-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="ready-h">Ready to build authority that lasts?</h2>
              <p className="ready-p">
                Tell us where your search visibility is falling short. We will run a free off-page SEO audit, analyse
                your backlink profile, review your competitors, and tell you exactly where you stand and what it would
                take to outrank them. If we can help, we will show you how. If we cannot, we will tell you that too.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free off-page SEO audit below.
              </p>
              <div className="ready-cta">
                <button className="ops-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="ops-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ops-sec">
        <div className="ops-shell">
          <div className="ops-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="ops-h2">Frequently asked <span>questions</span></h2>
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
        heading="Let's build your"
        highlight="authority."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
