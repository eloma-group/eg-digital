import {
  BarChart3, Users, ShieldCheck, Unlock, MapPin, Search, Code2, ListChecks,
  Navigation, Star, FileText, Link2, Store, Wrench, Building2, Stethoscope,
  Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - LOCAL SEO (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "Map pack / Top 3" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: BarChart3,
    t: 'We report on enquiries, not vanity metrics',
    d: 'Rankings and impressions are a means to an end, and the end is phone calls, direction requests, and form fills from people ready to buy. Our reporting leads with the actions that make you money, then works back to the rankings and visibility that produced them. If a report opens with a graph of impressions and buries whether the phone rang, it is hiding the part that matters.',
  },
  {
    icon: Users,
    t: 'One team for the SEO and the website behind it',
    d: "Local SEO lives or dies on the health of your website: page speed, mobile rendering, clean structure, and proper local schema. Because EG Digital also builds and hosts websites, the technical fixes that usually sit for weeks in a separate developer's queue get actioned in days. No briefing a third party on a site they did not build. One number to call.",
  },
  {
    icon: ShieldCheck,
    t: 'White-hat only, because shortcuts get you penalised',
    d: 'There is no secret backdoor to Google, and anyone buying cheap links or stuffing fake reviews is one algorithm update away from tanking your rankings, or worse. We do local SEO by the book: genuine Google Business Profile optimisation, consistent citations, real local content, and quality links. It is slower than the shortcuts, and it is the only version that lasts.',
  },
  {
    icon: Unlock,
    t: 'Honest pricing and no lock-in',
    d: 'We quote from an actual audit of your situation and itemise what you are paying for each month. No 12-month contracts designed to protect our revenue rather than deliver your results. A short minimum so the work has time to compound is fair. A long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: MapPin,
    t: 'Google Business Profile management',
    paras: [
      'Your Google Business Profile is the single biggest lever in local search, and most businesses barely touch it. We handle the full setup and ongoing management: correct categories, complete services and attributes, photos, posts, Q&A, and the optimisation that decides whether you land in the Google Maps three-pack or sit invisible below it. For many local businesses, the profile drives half or more of all leads, so this is where we start.',
    ],
  },
  {
    icon: Search,
    t: 'Local keyword research and strategy',
    paras: [
      'We find the searches your customers actually use, the ones with local intent and buying intent, and build a strategy around the terms you can realistically win rather than the vanity keywords that never convert. Every location you serve gets mapped to the right pages and the right signals.',
    ],
  },
  {
    icon: Code2,
    t: 'Local on-page optimisation',
    paras: [
      'We optimize your site for the way local search works: location-based title tags and meta descriptions, LocalBusiness schema markup, consistent name-address-phone details, and location or service-area pages that give Google a reason to rank you for each area you cover.',
    ],
  },
  {
    icon: ListChecks,
    t: 'Citation building and NAP consistency',
    paras: [
      'Inconsistent business details across directories quietly drag your rankings down. We audit your existing citations, clean up the mismatches, and build fresh listings across the Australian directories that matter, so your name, address, and phone number line up everywhere Google looks.',
    ],
  },
  {
    icon: Navigation,
    t: 'Google Maps ranking service',
    paras: [
      'Ranking in the Maps three-pack is its own discipline, driven by profile quality, proximity, reviews, and local signals working together. We optimise all of it as a system, so you climb toward the top three results where the calls and directions actually come from.',
    ],
  },
  {
    icon: Star,
    t: 'Review Management Service',
    paras: [
      'Reviews are both a ranking factor and a conversion factor: they help you rank and they help searchers choose you. We set up a review-asking system that makes it easy for happy customers to leave feedback, and help you respond to reviews, including the negative ones, in a way that protects your reputation.',
    ],
  },
  {
    icon: FileText,
    t: 'Local content',
    paras: [
      'Location-relevant content tells Google you genuinely serve an area and gives local searchers a reason to land on your site. From service-area pages to blog content tied to your local market, we create content that earns local rankings rather than filler that sits there doing nothing.',
    ],
  },
  {
    icon: Link2,
    t: 'Local link building',
    paras: [
      'Quality local links, from complementary businesses, industry associations, and relevant local sources, are among the strongest signals in local SEO. We build them the right way, through genuine outreach, not the cheap link packages that get sites penalised.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need enquiries from your local area without a budget that swallows your year. We build focused, affordable local SEO for small businesses across Australia, with clear pricing and no padding, and we start where your money works hardest: usually your Google Business Profile and the fastest local wins. Start with what makes sense now, prove it pays, then scale.',
  },
  {
    icon: Wrench,
    t: 'Trades and home services',
    d: 'For plumbers, electricians, builders, and other trades, the Google Maps three-pack drives more calls than almost anything else. We get your profile and local signals working so you show up when someone in your service area searches, and connect the enquiries to how you actually take work.',
  },
  {
    icon: Building2,
    t: 'Multi-location businesses',
    d: 'Franchises, chains, and businesses with several shopfronts need each location ranking in its own area without cannibalising the others. We manage a profile and local signals per location, with a strategy that scales across all of them rather than treating your business as one generic entity.',
  },
  {
    icon: Stethoscope,
    t: 'Professional services and clinics',
    d: 'For legal, health, finance, and other considered services, local organic rankings matter as much as the map pack, because a large share of clicks go to the results below it. We cover both surfaces so you capture the searcher whether they tap the map or scroll to the organic results.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Audit and discovery',
    d: 'We start by auditing your current local visibility, your Google Business Profile, your citations, and your website, and by looking at what your local competitors are doing. You get a documented read on where you rank, what is holding you back, and what good looks like before we touch anything.',
  },
  {
    t: 'Strategy and Google Business Profile setup',
    d: 'We build a tailored local SEO strategy with clear priorities and target metrics, then get your Google Business Profile fully optimised, since that is where the fastest movement usually comes from.',
  },
  {
    t: 'On-site and off-site optimisation',
    d: 'We fix and optimize your website for local search, build and clean up citations, create location content, and start earning quality local links. You see what is being done, not a black box.',
  },
  {
    t: 'Monitor, report, refine',
    d: "Google keeps changing the rules, so local SEO is never set-and-forget. We track your rankings, calls, and enquiries, report in plain language, and set the next month's priorities against the data. The results compound over time, and so does your lead flow.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does local SEO cost in Australia?',
    a: 'For a single-location small business in a moderately competitive area, local SEO typically runs $1,000 to $2,500 per month, while businesses targeting a whole city or a competitive category usually sit in the $2,500 to $5,000 range. Google Business Profile management on its own often starts around $400 a month, and multi-location or highly competitive campaigns push beyond $5,000. The honest version is that price tracks your competition and the number of locations more than any fixed tier, so we quote from an audit of your actual situation. Be cautious of very cheap offshore "local SEO," which usually means automated citation spam rather than a real strategy.',
  },
  {
    q: 'Does my Australian business need local SEO?',
    a: 'If you serve customers in a specific area or have a physical location, then yes, almost certainly. Most people looking for a nearby business search Google or Google Maps first, and a large share of those searches lead to a call or visit within a day. If you are not showing up in the map pack and local results for your area, those customers are finding a competitor instead. The businesses that benefit most are the ones with a service area or a shopfront: trades, clinics, professional services, hospitality, and retail. A purely national online business with no local footprint is the main exception, and even then location signals can still help.',
  },
  {
    q: 'How do I rank higher on Google Maps in Australia?',
    a: 'Ranking in the Google Maps three-pack comes down to a few things working together: a complete, well-optimised Google Business Profile with the right categories and services, consistent business details across directories, a steady stream of genuine reviews, proximity to the searcher, and local signals from your website like location pages and LocalBusiness schema. There is no single switch, and there is no legitimate shortcut. It is the sum of those signals maintained over time, which is exactly what a proper Google Maps ranking service manages on your behalf. Anyone promising instant top-three placement is overselling.',
  },
  {
    q: 'What is the difference between SEO and local SEO?',
    a: 'Regular SEO is about ranking your website for relevant searches generally, wherever the searcher is. Local SEO adds a geographic focus: it optimises for location-based searches and for the Google Maps results, so you show up when someone nearby searches for what you offer, including "near me" queries. Local SEO uses the same technical and on-page foundations as regular SEO, but layers on the pieces that standard SEO does not touch, chiefly your Google Business Profile, local citations, reviews, and location-specific content. On the strategy question of local versus national SEO, the simple version is that local wins you a defined area faster and more affordably, while national SEO chases a broader market that takes longer and costs more, and most local businesses are far better served starting local.',
  },
]

// Short signal chips for the hero - every phrase is drawn from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: 'Map three-pack', l: 'Google Search and Google Maps' },
  { v: 'White-hat', l: 'genuine profile, real reviews' },
  { v: 'No lock-in', l: 'no 12-month contracts' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$1,000 - $2,500/mo', l: 'A single-location small business in a moderately competitive area.' },
  { v: '$2,500 - $5,000/mo', l: 'Businesses targeting a whole city or a more competitive category.' },
  { v: 'From $400/mo', l: 'Google Business Profile management on its own.' },
]

export function LocalSEO() {
  const navigate = useNavigate()

  usePageMeta(
    'Local SEO Services in Australia | Google Maps & Local Search | EG Digital',
    'Local SEO marketing services in Australia that rank you in Google Maps and local search. White-hat, Google Business Profile management, no lock-in. Get a free local SEO audit.',
  )

  return (
    <PageLayout>
      <style>{`
        .lseo-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .lseo-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .lseo-shell{ max-width:2440px; } }
        @media (max-width:768px){ .lseo-shell{ max-width:100%; } }

        /* ── Section base ── */
        .lseo-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .lseo-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .lseo-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .lseo-sec.dark .lseo-shell { position:relative; z-index:1; }

        .lseo-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .lseo-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .lseo-h2 span { color:${GREEN}; }
        .lseo-sec.dark .lseo-h2 { color:#fff; }
        .lseo-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .lseo-sec.dark .lseo-lead { color:rgba(255,255,255,0.68); }

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
        .lseo-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .lseo-h1 { position:relative; font-size:clamp(46px,7vw,104px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:#fff; margin:16px 0 0; text-transform:uppercase; }
        .lseo-lede { position:relative; font-size:clamp(20px,2.4vw,34px); font-weight:900; letter-spacing:-0.035em; line-height:1.06; color:#fff; margin:18px 0 0; }
        .lseo-lede span { color:${GREEN}; }
        .lseo-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .lseo-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .lseo-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .lseo-bp svg { transition:transform .2s; } .lseo-bp:hover svg { transform:translateX(3px); }
        .lseo-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .lseo-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .lseo-bp, .lseo-bg, .lseo-tel{ width:100%; justify-content:center; } }

        /* Hero image (Unsplash) + animated scan + emblem */
        .hero-img { padding:0; border:1px solid rgba(255,255,255,0.12); background:${NAVY}; min-height:clamp(300px,42vw,520px); }
        .hero-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .hero-img::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 38%, ${NAVY}77); pointer-events:none; }
        .lseo-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:lseo-scan 4.6s linear infinite; will-change:transform; }
        @keyframes lseo-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .lseo-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:lseo-float 6s ease-in-out infinite; will-change:transform; }
        .lseo-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:lseo-spin 3.4s linear infinite; will-change:transform; }
        .lseo-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .lseo-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .lseo-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .lseo-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.66); }
        .lseo-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .lseo-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:lseo-pulse 1.8s ease-in-out infinite; }
        @keyframes lseo-spin { to { transform:rotate(360deg); } }
        @keyframes lseo-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes lseo-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:lseo-float 7s ease-in-out infinite; will-change:transform; }
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

        /* ── Cost price rows ── */
        .prow { padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .prow:first-child{ padding-top:0; } .prow:last-child{ border-bottom:none; padding-bottom:0; }
        .prow-v { font-size:clamp(24px,2.8vw,40px); font-weight:900; letter-spacing:-0.04em; color:${GREEN}; line-height:1; }
        .prow-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.68); margin-top:8px; line-height:1.5; }
        .cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .cost-p:last-child{ margin-bottom:0; }
        .lseo-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .lseo-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing:-0.045em; line-height:0.98; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .lseo-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .lseo-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }

        @media (prefers-reduced-motion: reduce) {
          .lseo-scan, .lseo-emblem, .lseo-emblem-ring, .lseo-dot, .chip { animation:none !important; }
          .lseo-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="lseo-sec dark lseo-hero">
        <div className="lseo-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Local SEO Services in Australia</Eyebrow>
                <h1 className="lseo-h1">Own the map pack</h1>
                <p className="lseo-lede">
                  Get found by the customers already searching for you, <span>in the suburb where you actually do business</span>.
                </p>
                <div className="lseo-cta">
                  <button className="lseo-bp" onClick={() => navigate('/contact')}>
                    Get a free local SEO audit
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="lseo-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile hero-img">
              <img
                src={img('photo-1524661135-423995f22d0b', 900, 900)}
                alt="Local business search on Google Maps"
                width={900} height={900} loading="eager" decoding="async"
              />
              <div className="lseo-scan" aria-hidden="true" />
              <div className="lseo-emblem" aria-hidden="true">
                <div className="lseo-emblem-ring"><span className="lseo-emblem-ic"><MapPin size={19} /></span></div>
                <div className="lseo-emblem-tx">
                  <span className="lseo-emblem-k">Map pack</span>
                  <span className="lseo-emblem-v"><span className="lseo-dot" /> Top 3</span>
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
                When someone nearby searches for what you sell, one of two things happens: your business shows up in
                the map results and the enquiry is yours, or a competitor shows up instead and you never knew the search
                happened. A business that ranks nationally but is invisible in its own postcode is leaving its easiest
                leads on the table.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based agency offering local SEO services in Australia built to do one job well:
                put your business in front of high-intent local searchers on Google Search and Google Maps, and turn
                that visibility into calls, directions, and walk-ins. We are part of Eloma Group, so your local SEO sits
                alongside web development, PPC, Microsoft and cloud, custom software, and cyber security under one roof.
                That matters, because the thing that usually holds local rankings back is a slow, poorly structured, or
                unindexable website, and when the same team fixes the site and does the SEO, that gap closes instead of
                getting blamed on someone else.
              </p>
              <p className="t-d">
                <strong>One partner.</strong> One team that audits it, optimises your Google Business Profile, fixes the
                site, builds the local signals, and reports back in plain language.
              </p>
              <p className="t-d">
                Get a free local SEO audit. No lock-in, just a clear read on where you rank now and what is holding you
                back.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose EG Digital ── */}
      <section className="lseo-sec">
        <div className="lseo-shell">
          <div className="lseo-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="lseo-h2">Why choose EG Digital as your local SEO company in <span>Australia</span></h2>
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

      {/* ── Our local SEO services ── */}
      <section className="lseo-sec dark">
        <div className="lseo-shell">
          <div className="lseo-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="lseo-h2">Our local SEO <span>services</span></h2>
            <p className="lseo-lead">
              We are a full-service local SEO agency, so you can hand us the whole program or the single piece you are
              missing.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // Google Business Profile is a full-width feature row; the rest form a varied bento.
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
              const spans = ['c8', 'c4', 'c4', 'c8', 'c6', 'c6', 'c12']
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

      {/* ── Who we do local SEO for ── */}
      <section className="lseo-sec">
        <div className="lseo-shell">
          <div className="lseo-head">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="lseo-h2">Who we do local SEO <span>for</span></h2>
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
      <section className="lseo-sec dark">
        <div className="lseo-shell">
          <div className="lseo-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="lseo-h2">How we <span>work</span></h2>
          </div>
          <div className="bento">
            {STEPS.map((s, i) => {
              const spans = ['c7', 'c5', 'c5', 'c7']
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
      <section className="lseo-sec">
        <div className="lseo-shell">
          <div className="lseo-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="lseo-h2">What local SEO costs in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on your market, your competition, and how many locations you are ranking,
                  and any company quoting a flat price before auditing your situation is guessing. Here is the current
                  Australian market for context.
                </p>
                <p className="cost-p">
                  For a single-location small business in a moderately competitive area, local SEO typically runs $1,000
                  to $2,500 per month. Businesses targeting a whole city or a more competitive category usually sit in
                  the $2,500 to $5,000 range, because the keyword competition demands more content and more links.
                  Multi-location and highly competitive campaigns push beyond $5,000. Google Business Profile management
                  on its own commonly starts around $400 a month, and a brand-new site starting from scratch may need a
                  one-off setup on top, often $2,000 to $8,000, to get the foundations right.
                </p>
                <p className="cost-p">
                  Two things worth knowing. First, be wary of $200-to-$400-a-month "local SEO" from offshore providers,
                  which usually means automated citation spam and templated reports with no real strategy, and
                  occasionally does damage through spammy links. Second, no one can guarantee a specific Google position,
                  and any provider who promises page one in 30 days is either misleading you or targeting keywords so
                  obscure they will not move your business. We quote from an audit, itemise what gets done each month,
                  and the report shows whether it did.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="tile n c5 tile-glow">
              <div>
                {PRICES.map(p => (
                  <div className="prow" key={p.v}>
                    <div className="prow-v">{p.v}</div>
                    <div className="prow-l">{p.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <p className="lseo-note">
            Get a free local SEO audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── Ready to be found ── */}
      <section className="lseo-sec">
        <div className="lseo-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="ready-h">Ready to be found by more local customers?</h2>
              <p className="ready-p">
                Tell us where you want to rank and where your local visibility is falling short. We will run a free
                audit, review your competitors, and show you exactly what is holding your rankings back and what it
                would take to fix it. If we are the right fit, we will show you how. If we are not, we will tell you.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free local SEO audit below.
              </p>
              <div className="ready-cta">
                <button className="lseo-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="lseo-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lseo-sec">
        <div className="lseo-shell">
          <div className="lseo-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="lseo-h2">Frequently asked <span>questions</span></h2>
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
        heading="Let's get you"
        highlight="found."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
