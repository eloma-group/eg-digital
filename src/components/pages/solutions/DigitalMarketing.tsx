import { useState, useRef, useEffect } from 'react'
import { useInView, animate } from 'framer-motion'
import {
  Palette, Cloud, TrendingUp, Search, Target, Share2, Mail, PenTool, LineChart,
  BookMarked, CreditCard, Layout, BookOpen, Megaphone, Server, Check, ArrowUpRight,
} from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, EASE } from '../_kit'
import { useNavigate } from 'react-router-dom'

/* ════════════════════════════════════════════════════════════════════════════
   SOLUTION PAGE - DIGITAL & MARKETING
   Growth identity: warm amber palette, real search-performance hero panel,
   animated metric counters and a bento service grid. Real content throughout.
   ════════════════════════════════════════════════════════════════════════════ */

const AMBER = '#d97706'
const AMBER2 = '#f59e0b'

function Counter({ to, decimals = 0, prefix = '', suffix = '' }: { to: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(x) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{prefix}{v.toFixed(decimals)}{suffix}</span>
}

const METRICS = [
  { to: 150, prefix: '+', suffix: '%', label: 'Organic traffic lift' },
  { to: 14, label: 'Industries served' },
  { to: 40, prefix: '+', suffix: '%', label: 'Avg. conversion lift' },
  { to: 7, label: 'Marketing services' },
]

const KEYWORDS = [
  ['eg digital', '#1'],
  ['it support melbourne', '#2'],
  ['microsoft partner au', '#3'],
]

const BRANDING = [
  { icon: Palette, t: 'Logo Design & Brand Identity', d: 'A distinctive logo and identity system built around your brand.' },
  { icon: Mail, t: 'Email Signatures', d: 'Consistent, professional branded signatures across your team.' },
  { icon: CreditCard, t: 'Visiting Card Design', d: 'Memorable business cards that make the right first impression.' },
  { icon: Layout, t: 'Website UI/UX Design', d: 'Clean, conversion-focused interfaces your customers enjoy.' },
  { icon: BookOpen, t: 'Brand Guidelines', d: 'Clear rules that keep your brand consistent everywhere.' },
  { icon: Megaphone, t: 'Marketing Collateral', d: 'Brochures, decks and assets that look unmistakably you.' },
]

const CLOUD = [
  { icon: Cloud, t: 'Microsoft Azure', c: '#0078D4', d: 'Build, host and scale apps on Microsoft’s cloud - from app modernization to AI solutions and cloud databases.', tags: ['App hosting', 'AI solutions', 'Cloud databases'] },
  { icon: Server, t: 'Amazon Web Services', c: '#FF9900', d: 'The world’s leading cloud infrastructure with flexible, pay-as-you-go hosting for businesses of all sizes.', tags: ['Pay-as-you-go', 'Global scale', 'High availability'] },
]

const CLOUD_BENEFITS = [
  'Secure & reliable infrastructure',
  'Global data centers',
  'Scalable hosting solutions',
  'High performance & availability',
  'Flexible pricing models',
  'WordPress, PHP, .NET & Node.js',
  'Advanced security & backups',
]

const MARKETING = [
  { icon: Search, t: 'Search Engine Optimization', d: 'Improve rankings and organic visibility on search engines.' },
  { icon: Target, t: 'Google Ads Management', d: 'Drive targeted traffic and leads with high-performing campaigns.' },
  { icon: Share2, t: 'Social Media Management', d: 'Build engagement and grow your audience across platforms.' },
  { icon: Mail, t: 'Email Marketing', d: 'Nurture leads and lift conversions with personalized campaigns.' },
  { icon: PenTool, t: 'Content Writing', d: 'SEO-friendly content that attracts visitors and builds authority.' },
  { icon: LineChart, t: 'Organic SEO Growth', d: 'Long-term performance via technical optimization and quality content.' },
  { icon: BookMarked, t: 'Wikipedia Page Creation', d: 'Establish credibility with professionally managed Wikipedia pages.' },
]

const WHY = [
  'Increase brand awareness',
  'Generate more leads & sales',
  'Improve online visibility',
  'Build customer trust & credibility',
  'Strengthen customer engagement',
  'Drive long-term growth',
  'Gain a competitive advantage',
]

export function DigitalMarketingSolution() {
  const navigate = useNavigate()
  return (
    <PageLayout>
      <style>{`
        .dmk-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .dmk-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .dmk-shell{ max-width:2440px; } }

        /* ── Hero ── */
        .dmk-hero { position:relative; overflow:hidden; padding:clamp(36px,5vw,80px) 0 clamp(40px,5vw,72px); }
        .dmk-hero::before { content:''; position:absolute; top:-20%; right:-10%; width:min(680px,64vw); height:min(680px,64vw); border-radius:50%;
          background:radial-gradient(circle, ${AMBER}1f, transparent 64%); pointer-events:none; z-index:0; }
        .dmk-hgrid { position:relative; z-index:1; display:grid; grid-template-columns:1.05fr 0.95fr; gap:clamp(36px,5vw,80px); align-items:center; }
        @media (max-width:920px){ .dmk-hgrid{ grid-template-columns:1fr; } }
        .dmk-h1 { font-size:clamp(50px,9vw,124px); font-weight:900; letter-spacing:-0.05em; line-height:0.88; color:${NAVY}; margin:16px 0 0; text-transform:uppercase; }
        .dmk-h1 span { color:${AMBER}; }
        .dmk-intro { max-width:520px; font-size:clamp(15px,1.25vw,19px); line-height:1.8; color:rgba(8,33,60,0.58); margin:22px 0 0; }
        .dmk-cta { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .dmk-bp { display:inline-flex; align-items:center; gap:9px; background:${NAVY}; color:#fff; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:50px; transition:background .2s,transform .18s; will-change:transform; }
        .dmk-bp:hover { background:${AMBER}; transform:translateY(-2px); }
        .dmk-bp svg { transition:transform .2s; } .dmk-bp:hover svg { transform:translateX(3px); }
        .dmk-bg { background:#fff; color:${NAVY}; border:1.5px solid rgba(8,33,60,0.16); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:50px; transition:border-color .2s; }
        .dmk-bg:hover { border-color:rgba(8,33,60,0.4); }

        /* hero panel - real search performance */
        @keyframes dmk-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-10px); } }
        .dmk-panel { background:#fff; border:1px solid rgba(8,33,60,0.09); border-radius:22px; padding:clamp(20px,2.2vw,28px);
          box-shadow:0 30px 70px -30px rgba(8,33,60,0.4); animation:dmk-float 7s ease-in-out infinite; will-change:transform; }
        .dmk-panel:hover { animation-play-state:paused; }
        .dmk-ptop { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
        .dmk-ptitle { font-size:14px; font-weight:800; color:${NAVY}; }
        .dmk-plive { display:inline-flex; align-items:center; gap:6px; font-size:10px; font-weight:800; letter-spacing:1px; text-transform:uppercase;
          color:${GREEN}; background:rgba(60,185,140,0.12); border:1px solid rgba(60,185,140,0.3); padding:4px 10px; border-radius:99px; }
        .dmk-plive i { width:6px; height:6px; border-radius:50%; background:${GREEN}; }
        .dmk-pstats { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px; }
        .dmk-pstat { background:#fafaf7; border:1px solid rgba(8,33,60,0.06); border-radius:14px; padding:14px; }
        .dmk-pk { font-size:11px; font-weight:700; color:rgba(8,33,60,0.45); }
        .dmk-pv { font-size:clamp(22px,2.4vw,30px); font-weight:900; letter-spacing:-0.04em; color:${NAVY}; line-height:1.1; }
        .dmk-pd { font-size:11px; font-weight:700; color:${GREEN}; }
        .dmk-chart { position:relative; height:90px; margin-bottom:16px; }
        .dmk-chart svg { width:100%; height:100%; display:block; }
        .dmk-keys { display:flex; flex-direction:column; }
        .dmk-key { display:flex; align-items:center; justify-content:space-between; padding:9px 0; border-top:1px solid rgba(8,33,60,0.07); }
        .dmk-key span { font-size:12.5px; color:rgba(8,33,60,0.62); font-weight:500; }
        .dmk-rank { font-size:12px; font-weight:900; color:${AMBER}; background:${AMBER}14; padding:2px 9px; border-radius:99px; }

        /* ── Metrics band ── */
        .dmk-metrics { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(16px,3vw,40px); margin-top:clamp(36px,4vw,60px);
          padding-top:clamp(28px,3vw,40px); border-top:1px solid rgba(8,33,60,0.12); position:relative; z-index:1; }
        @media (max-width:680px){ .dmk-metrics{ grid-template-columns:repeat(2,1fr); gap:28px 16px; } }
        .dmk-mv { font-size:clamp(32px,4vw,58px); font-weight:900; letter-spacing:-0.05em; color:${NAVY}; line-height:1; }
        .dmk-ml { font-size:clamp(11px,0.85vw,13px); font-weight:800; letter-spacing:1.6px; text-transform:uppercase; color:rgba(8,33,60,0.42); margin-top:8px; }

        /* ── Bento services ── */
        .dmk-sec { padding:clamp(56px,7vw,120px) 0; background:#fff; }
        .dmk-h2 { font-size:clamp(34px,4.6vw,76px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .dmk-h2 span { color:${AMBER}; }
        .dmk-lead { max-width:560px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.55); margin:16px 0 0; }
        .dmk-bento { display:grid; grid-template-columns:repeat(3,1fr); grid-auto-rows:minmax(150px,auto); gap:clamp(14px,1.6vw,22px);
          grid-template-areas:"seo seo brand" "cloud stat brand"; margin-top:clamp(36px,4vw,56px); }
        @media (max-width:860px){ .dmk-bento{ grid-template-columns:1fr; grid-template-areas:"seo" "brand" "cloud" "stat"; } }
        .dmk-card { position:relative; border-radius:22px; padding:clamp(24px,2.6vw,38px); overflow:hidden; border:1px solid rgba(8,33,60,0.08);
          background:#fafbfd; transition:transform .35s cubic-bezier(0.16,1,0.3,1), box-shadow .35s; will-change:transform; }
        .dmk-card:hover { transform:translateY(-6px); box-shadow:0 28px 60px rgba(8,33,60,0.12); }
        .dmk-seo { grid-area:seo; } .dmk-cloud { grid-area:cloud; }
        .dmk-brand { grid-area:brand; background:linear-gradient(160deg, ${AMBER}, ${AMBER2}); border:none; color:#fff; }
        .dmk-stat { grid-area:stat; background:${NAVY}; border:none; color:#fff; display:flex; flex-direction:column; justify-content:center; }
        .dmk-ic { width:48px; height:48px; border-radius:13px; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
        .dmk-ct { font-size:clamp(20px,2vw,28px); font-weight:900; letter-spacing:-0.03em; margin:0 0 8px; }
        .dmk-cd { font-size:clamp(13px,1.05vw,15.5px); line-height:1.7; margin:0 0 18px; }
        .dmk-tags { display:flex; flex-wrap:wrap; gap:8px; }
        .dmk-pill { display:inline-flex; align-items:center; gap:7px; font-size:12.5px; font-weight:600; padding:6px 13px; border-radius:100px;
          border:1px solid rgba(8,33,60,0.12); color:rgba(8,33,60,0.64); transition:transform .2s, background .2s, border-color .2s; cursor:default; }
        .dmk-pill:hover { transform:translateY(-2px); background:${AMBER}10; border-color:${AMBER}55; color:${NAVY}; }
        .dmk-pill i { width:5px; height:5px; border-radius:50%; background:${AMBER}; flex-shrink:0; font-style:normal; }
        /* on-color variants */
        .dmk-brand .dmk-ct, .dmk-brand .dmk-cd { color:#fff; }
        .dmk-brand .dmk-cd { opacity:0.9; }
        .dmk-brand .dmk-ic { background:rgba(255,255,255,0.18); color:#fff; }
        .dmk-brand .dmk-pill { background:rgba(255,255,255,0.14); border-color:rgba(255,255,255,0.22); color:#fff; }
        .dmk-brand .dmk-pill i { background:#fff; }
        .dmk-brand .dmk-pill:hover { background:rgba(255,255,255,0.24); }
        .dmk-stat-v { font-size:clamp(40px,5vw,72px); font-weight:900; letter-spacing:-0.05em; line-height:1; color:#fff; }
        .dmk-stat-l { font-size:clamp(13px,1.05vw,15px); color:rgba(255,255,255,0.6); margin-top:10px; line-height:1.5; }

        /* ── Channels ── */
        .dmk-chips { display:flex; flex-wrap:wrap; gap:10px; margin-top:clamp(32px,4vw,48px); }
        .dmk-chip { display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:700; color:${NAVY};
          background:#fff; border:1px solid rgba(8,33,60,0.12); padding:10px 18px; border-radius:100px; min-height:44px;
          transition:transform .2s, box-shadow .2s, border-color .2s; }
        .dmk-chip:hover { transform:translateY(-3px); box-shadow:0 12px 28px rgba(8,33,60,0.1); border-color:${AMBER}66; }
        .dmk-chip i { width:8px; height:8px; border-radius:50%; background:${AMBER}; font-style:normal; }

        /* ── Section base ── */
        .dmk-sec2 { padding:clamp(56px,7vw,120px) 0; }
        .dmk-sec2.alt { background:#fff; }
        .dmk-sec2.dark { background:${NAVY}; position:relative; overflow:hidden; }
        .dmk-sec2.dark::before { content:''; position:absolute; top:-22%; left:-10%; width:min(620px,60vw); height:min(620px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${AMBER}26, transparent 65%); pointer-events:none; }
        .dmk-sec2.dark .dmk-shell { position:relative; z-index:1; }
        .dmk-sec2.dark .dmk-h2 { color:#fff; } .dmk-sec2.dark .dmk-h2 span { color:${AMBER2}; }
        .dmk-sec2.dark .dmk-lead { color:rgba(255,255,255,0.62); }

        /* ── Premium card (branding small + marketing) ── */
        .dmk-pc { position:relative; overflow:hidden; background:#fafbfd; border:1px solid rgba(8,33,60,0.08); border-radius:22px;
          padding:clamp(24px,2.5vw,38px); box-shadow:0 4px 22px rgba(8,33,60,0.05);
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .dmk-pc::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,${AMBER},${AMBER2});
          transform:scaleX(0); transform-origin:left center; transition:transform .45s cubic-bezier(0.16,1,0.3,1); }
        .dmk-pc:hover { transform:translateY(-7px); box-shadow:0 30px 64px rgba(217,119,6,0.16); border-color:${AMBER}44; }
        .dmk-pc:hover::before { transform:scaleX(1); }
        .dmk-pc-no { position:absolute; top:clamp(10px,1.4vw,18px); right:clamp(16px,2vw,26px); font-size:clamp(42px,5vw,78px); font-weight:900;
          letter-spacing:-0.05em; color:${AMBER}; opacity:0.09; line-height:1; font-variant-numeric:tabular-nums; pointer-events:none; }
        .dmk-pc-ic { position:relative; width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${AMBER}29,${AMBER}0d); color:${AMBER}; margin-bottom:18px; transition:transform .35s cubic-bezier(0.16,1,0.3,1); }
        .dmk-pc:hover .dmk-pc-ic { transform:scale(1.08) rotate(-4deg); }
        .dmk-pc-t { position:relative; font-size:clamp(16px,1.45vw,21px); font-weight:900; letter-spacing:-0.025em; color:${NAVY}; margin:0 0 9px; }
        .dmk-pc-d { position:relative; font-size:clamp(13px,1vw,15px); line-height:1.65; color:rgba(8,33,60,0.55); margin:0; }
        .dmk-pc-go { position:absolute; bottom:clamp(20px,2.2vw,30px); right:clamp(20px,2.2vw,30px); opacity:0; transform:translate(-6px,6px);
          color:${AMBER}; transition:opacity .35s, transform .35s; pointer-events:none; }
        .dmk-pc:hover .dmk-pc-go { opacity:1; transform:translate(0,0); }

        /* ── Branding bento ── */
        .dmk-bento2 { display:grid; grid-template-columns:repeat(3,1fr); grid-auto-rows:1fr; gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px);
          grid-template-areas:"feat feat a" "feat feat b" "c d e"; }
        @media (max-width:860px){ .dmk-bento2{ grid-template-columns:repeat(2,1fr); grid-template-areas:"feat feat" "a b" "c d" "e e"; } }
        @media (max-width:540px){ .dmk-bento2{ grid-template-columns:1fr; grid-template-areas:"feat" "a" "b" "c" "d" "e"; } }
        .dmk-feat-big { position:relative; overflow:hidden; grid-area:feat; border:1px solid ${AMBER}30; border-radius:24px;
          background:linear-gradient(160deg, #fffaf2 0%, #fdeccd 100%); color:${NAVY}; padding:clamp(28px,3vw,46px);
          display:flex; flex-direction:column; justify-content:flex-end; min-height:clamp(240px,26vw,360px);
          box-shadow:0 20px 50px -28px rgba(217,119,6,0.35); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s; will-change:transform; }
        .dmk-feat-big:hover { transform:translateY(-6px); box-shadow:0 38px 80px -32px rgba(217,119,6,0.4); }
        .dmk-feat-big::after { content:''; position:absolute; top:-32%; right:-14%; width:62%; height:124%; border-radius:50%;
          background:radial-gradient(circle, ${AMBER}24, transparent 60%); pointer-events:none; }
        .dmk-fb-ic { position:relative; width:60px; height:60px; border-radius:16px; background:linear-gradient(150deg,${AMBER}29,${AMBER}0d);
          display:flex; align-items:center; justify-content:center; color:${AMBER}; margin-bottom:auto; }
        .dmk-fb-tag { position:relative; font-size:11px; font-weight:800; letter-spacing:2.2px; text-transform:uppercase; color:${AMBER}; margin:22px 0 10px; }
        .dmk-fb-t { position:relative; font-size:clamp(26px,3vw,46px); font-weight:900; letter-spacing:-0.04em; line-height:0.95; margin:0 0 12px; text-transform:uppercase; color:${NAVY}; }
        .dmk-fb-d { position:relative; font-size:clamp(14px,1.1vw,17px); line-height:1.6; color:rgba(8,33,60,0.6); max-width:36ch; margin:0; }

        /* ── Cloud platform cards (dark) ── */
        .dmk-cloud-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:760px){ .dmk-cloud-grid{ grid-template-columns:1fr; } }
        .dmk-plat { position:relative; overflow:hidden; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:24px;
          padding:clamp(28px,3vw,44px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .dmk-plat::before { content:''; position:absolute; top:-40%; right:-20%; width:70%; height:140%; border-radius:50%;
          background:radial-gradient(circle, var(--g), transparent 62%); opacity:0.5; pointer-events:none; transition:opacity .4s; }
        .dmk-plat:hover { transform:translateY(-6px); border-color:rgba(255,255,255,0.22); box-shadow:0 34px 70px -28px rgba(0,0,0,0.55); }
        .dmk-plat:hover::before { opacity:0.85; }
        .dmk-plat-ic { position:relative; width:58px; height:58px; border-radius:15px; display:flex; align-items:center; justify-content:center; margin-bottom:20px; color:#fff; }
        .dmk-plat-t { position:relative; font-size:clamp(21px,2.1vw,30px); font-weight:900; letter-spacing:-0.03em; color:#fff; margin:0 0 11px; }
        .dmk-plat-d { position:relative; font-size:clamp(13px,1.05vw,16px); line-height:1.7; color:rgba(255,255,255,0.66); margin:0 0 20px; }
        .dmk-plat-tags { position:relative; display:flex; flex-wrap:wrap; gap:8px; }
        .dmk-plat-tag { font-size:12px; font-weight:700; color:rgba(255,255,255,0.85); background:rgba(255,255,255,0.07);
          border:1px solid rgba(255,255,255,0.14); padding:7px 14px; border-radius:100px; }

        /* ── Benefit checklist (dark) ── */
        .dmk-benlist { display:grid; grid-template-columns:repeat(2,1fr); gap:0 clamp(24px,3vw,52px); margin-top:clamp(34px,4vw,52px); }
        @media (max-width:680px){ .dmk-benlist{ grid-template-columns:1fr; } }
        .dmk-benrow { display:flex; align-items:center; gap:14px; padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.1);
          font-size:clamp(14px,1.05vw,16px); font-weight:600; color:rgba(255,255,255,0.84); }
        .dmk-benrow svg { color:${AMBER2}; flex-shrink:0; }

        /* ── Marketing grid (featured + cards) ── */
        .dmk-mkt { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:860px){ .dmk-mkt{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:540px){ .dmk-mkt{ grid-template-columns:1fr; } }
        .dmk-mkt-feat { grid-column:1 / -1; position:relative; overflow:hidden; display:grid; grid-template-columns:1.1fr 0.9fr;
          gap:clamp(24px,3vw,52px); align-items:center; background:${NAVY}; border-radius:24px; padding:clamp(28px,3vw,50px); }
        @media (max-width:760px){ .dmk-mkt-feat{ grid-template-columns:1fr; } }
        .dmk-mkt-feat::before { content:''; position:absolute; bottom:-50%; left:-10%; width:50%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${AMBER}33, transparent 60%); pointer-events:none; }
        .dmk-mf-ic { position:relative; width:56px; height:56px; border-radius:15px; background:linear-gradient(150deg,${AMBER},${AMBER2});
          display:flex; align-items:center; justify-content:center; color:#fff; margin-bottom:18px; }
        .dmk-mf-tag { position:relative; font-size:11px; font-weight:800; letter-spacing:2.2px; text-transform:uppercase; color:${AMBER2}; margin-bottom:12px; display:inline-block; }
        .dmk-mf-t { position:relative; font-size:clamp(24px,2.6vw,40px); font-weight:900; letter-spacing:-0.035em; line-height:0.98; color:#fff; margin:0 0 12px; text-transform:uppercase; }
        .dmk-mf-d { position:relative; font-size:clamp(14px,1.1vw,17px); line-height:1.7; color:rgba(255,255,255,0.66); margin:0; max-width:40ch; }
        .dmk-ladder { position:relative; display:flex; flex-direction:column; gap:10px; }
        .dmk-ladder-row { display:flex; align-items:center; justify-content:space-between; gap:14px; background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.1); border-radius:13px; padding:13px 16px; transition:transform .3s, background .3s; }
        .dmk-mkt-feat:hover .dmk-ladder-row { background:rgba(255,255,255,0.08); }
        .dmk-mkt-feat:hover .dmk-ladder-row:nth-child(1){ transform:translateX(6px); }
        .dmk-mkt-feat:hover .dmk-ladder-row:nth-child(2){ transform:translateX(10px); }
        .dmk-mkt-feat:hover .dmk-ladder-row:nth-child(3){ transform:translateX(14px); }
        .dmk-ladder-row span { font-size:13px; font-weight:600; color:rgba(255,255,255,0.72); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .dmk-ladder-rank { font-size:12px; font-weight:900; color:${AMBER2}; background:rgba(245,158,11,0.16); padding:4px 11px; border-radius:99px; flex-shrink:0; }

        /* ── Why-it-matters chips (light) ── */
        .dmk-why { display:flex; flex-wrap:wrap; gap:10px; margin-top:clamp(36px,4vw,56px); }
        .dmk-whychip { display:inline-flex; align-items:center; gap:9px; font-size:clamp(13px,1vw,15px); font-weight:700; color:${NAVY};
          background:#fff; border:1px solid rgba(8,33,60,0.1); padding:12px 20px; border-radius:100px;
          transition:transform .25s, box-shadow .25s, border-color .25s, background .25s; }
        .dmk-whychip:hover { transform:translateY(-3px); box-shadow:0 14px 30px rgba(217,119,6,0.14); border-color:${AMBER}66; background:${AMBER}0a; }
        .dmk-whychip svg { color:${AMBER}; flex-shrink:0; }

        @media (prefers-reduced-motion:reduce){ .dmk-panel{ animation:none; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="dmk-shell dmk-hero">
        <div className="dmk-hgrid">
          <Reveal>
            <Eyebrow>Digital & Marketing</Eyebrow>
            <h1 className="dmk-h1">Get found.<br /><span>Grow fast.</span></h1>
            <p className="dmk-intro">
              Strong branding, reliable cloud hosting and results-driven marketing that help your business stand out,
              get found and grow.
            </p>
            <div className="dmk-cta">
              <button className="dmk-bp" onClick={() => navigate('/contact')}>
                Grow my traffic
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
              </button>
              <button className="dmk-bg" onClick={() => navigate('/blog#work')}>See our work</button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="dmk-panel" aria-hidden="true">
              <div className="dmk-ptop">
                <span className="dmk-ptitle">Search Performance</span>
                <span className="dmk-plive"><i />Live</span>
              </div>
              <div className="dmk-pstats">
                <div className="dmk-pstat"><div className="dmk-pk">Clicks</div><div className="dmk-pv">12.4k</div><div className="dmk-pd">↑ +18.2%</div></div>
                <div className="dmk-pstat"><div className="dmk-pk">Impressions</div><div className="dmk-pv">184k</div><div className="dmk-pd">↑ +24.6%</div></div>
              </div>
              <div className="dmk-chart">
                <svg viewBox="0 0 320 90" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dmkArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={AMBER} stopOpacity="0.28" />
                      <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,72 L40,66 L80,58 L120,62 L160,44 L200,40 L240,28 L280,20 L320,10 L320,90 L0,90 Z" fill="url(#dmkArea)" />
                  <path d="M0,72 L40,66 L80,58 L120,62 L160,44 L200,40 L240,28 L280,20 L320,10" fill="none" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="dmk-keys">
                {KEYWORDS.map(([k, r]) => (
                  <div key={k} className="dmk-key"><span>{k}</span><span className="dmk-rank">{r}</span></div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="dmk-metrics">
          {METRICS.map(m => (
            <Reveal key={m.label}>
              <div className="dmk-mv"><Counter to={m.to} prefix={m.prefix} suffix={m.suffix} /></div>
              <div className="dmk-ml">{m.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Branding (asymmetric bento) ── */}
      <section className="dmk-sec2 alt">
        <div className="dmk-shell">
          <Reveal>
            <Eyebrow>Branding</Eyebrow>
            <h2 className="dmk-h2">A brand people<br /><span>remember.</span></h2>
            <p className="dmk-lead">A cohesive identity that makes you instantly recognisable across every touchpoint.</p>
          </Reveal>
          <div className="dmk-bento2">
            <Reveal className="dmk-feat-big">
              <div className="dmk-fb-ic"><Palette size={28} /></div>
              <span className="dmk-fb-tag">Where it starts</span>
              <h3 className="dmk-fb-t">Logo & Brand Identity</h3>
              <p className="dmk-fb-d">A distinctive logo and identity system built around your brand - the foundation everything else is designed from.</p>
            </Reveal>
            {BRANDING.slice(1).map((b, i) => {
              const Ic = b.icon
              const area = ['a', 'b', 'c', 'd', 'e'][i]
              return (
                <Reveal key={b.t} delay={Math.min(i * 0.05, 0.25)} style={{ gridArea: area }}>
                  <div className="dmk-pc" style={{ height: '100%' }}>
                    <span className="dmk-pc-no">{String(i + 2).padStart(2, '0')}</span>
                    <div className="dmk-pc-ic"><Ic size={22} /></div>
                    <h4 className="dmk-pc-t">{b.t}</h4>
                    <p className="dmk-pc-d">{b.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Cloud hosting (dark, glowing platforms) ── */}
      <section className="dmk-sec2 dark">
        <div className="dmk-shell">
          <Reveal>
            <Eyebrow light>Cloud Hosting</Eyebrow>
            <h2 className="dmk-h2">Secure, scalable<br /><span>infrastructure.</span></h2>
            <p className="dmk-lead">A strong online presence starts with reliable hosting. We deploy on the world’s leading cloud platforms for maximum performance and flexibility.</p>
          </Reveal>
          <div className="dmk-cloud-grid">
            {CLOUD.map((c, i) => {
              const Ic = c.icon
              return (
                <Reveal key={c.t} delay={Math.min(i * 0.1, 0.2)}>
                  <div className="dmk-plat" style={{ ['--g' as string]: `${c.c}66` }}>
                    <div className="dmk-plat-ic" style={{ background: c.c }}><Ic size={28} /></div>
                    <h3 className="dmk-plat-t">{c.t}</h3>
                    <p className="dmk-plat-d">{c.d}</p>
                    <div className="dmk-plat-tags">
                      {c.tags.map(t => <span key={t} className="dmk-plat-tag">{t}</span>)}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="dmk-benlist">
            {CLOUD_BENEFITS.map(b => <div key={b} className="dmk-benrow"><Check size={17} />{b}</div>)}
          </div>
        </div>
      </section>

      {/* ── Digital marketing (featured SEO + cards) ── */}
      <section className="dmk-sec2 alt">
        <div className="dmk-shell">
          <Reveal>
            <Eyebrow>Digital Marketing</Eyebrow>
            <h2 className="dmk-h2">Reach, traffic<br />and <span>leads.</span></h2>
            <p className="dmk-lead">Reach the right audience, generate quality leads and grow with strategies built to deliver measurable results.</p>
          </Reveal>
          <div className="dmk-mkt">
            <Reveal className="dmk-mkt-feat">
              <div>
                <div className="dmk-mf-ic"><Search size={26} /></div>
                <span className="dmk-mf-tag">Our flagship service</span>
                <h3 className="dmk-mf-t">{MARKETING[0].t}</h3>
                <p className="dmk-mf-d">{MARKETING[0].d} Climb the rankings and capture demand exactly when customers are searching.</p>
              </div>
              <div className="dmk-ladder">
                {KEYWORDS.map(([k, r]) => (
                  <div key={k} className="dmk-ladder-row"><span>{k}</span><span className="dmk-ladder-rank">{r}</span></div>
                ))}
              </div>
            </Reveal>
            {MARKETING.slice(1).map((m, i) => {
              const Ic = m.icon
              return (
                <Reveal key={m.t} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="dmk-pc" style={{ height: '100%' }}>
                    <span className="dmk-pc-no">{String(i + 2).padStart(2, '0')}</span>
                    <div className="dmk-pc-ic"><Ic size={22} /></div>
                    <h4 className="dmk-pc-t">{m.t}</h4>
                    <p className="dmk-pc-d">{m.d}</p>
                    <ArrowUpRight className="dmk-pc-go" size={20} />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="dmk-sec2">
        <div className="dmk-shell">
          <Reveal>
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="dmk-h2">Marketing that<br />moves the <span>needle.</span></h2>
            <p className="dmk-lead">The right digital strategy does more than look good - it drives real, lasting business growth.</p>
          </Reveal>
          <div className="dmk-why">
            {WHY.map(w => <span key={w} className="dmk-whychip"><TrendingUp size={15} />{w}</span>)}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Ready When You Are" heading="Let's grow your" highlight="reach." button="Grow my traffic" />
    </PageLayout>
  )
}
