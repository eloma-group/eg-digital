import { Rocket, Clock, TrendingUp, Globe, Code2, ShoppingBag } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useNavigate } from 'react-router-dom'

/* ════════════════════════════════════════════════════════════════════════════
   SOLUTION PAGE - DEVELOPMENT
   Engineering identity: dark code-driven hero, alternating zig-zag capability
   rows with device mockups, kinetic tech marquee. Distinct from every other page.
   ════════════════════════════════════════════════════════════════════════════ */

const CODE: [string, string][][] = [
  [['const ', 'kw'], ['app', 'pl'], [' = ', 'pn'], ['await ', 'kw'], ['build', 'fn'], ['({', 'pn']],
  [['  stack', 'pl'], [': ', 'pn'], ["'react + node'", 'st'], [',', 'pn']],
  [['  deploy', 'pl'], [': ', 'pn'], ["'edge'", 'st'], [',', 'pn']],
  [['  scale', 'pl'], [': ', 'pn'], ['true', 'bo']],
  [['})', 'pn']],
  [['// ', 'cm'], ['shipped on time', 'cm']],
]
const COL: Record<string, string> = { kw: '#c084fc', fn: '#5cc8ff', st: GREEN, pl: '#dbe4ee', pn: 'rgba(255,255,255,0.5)', bo: '#fbbf24', cm: 'rgba(255,255,255,0.34)' }

const STATS: [string, string][] = [['25+', 'Products shipped'], ['100%', 'On-time delivery'], ['4.2★', 'Client rating']]

const CAPS = [
  { no: '01', visual: 'code', anchor: 'saas', title: 'Software Development',
    desc: 'Custom software built around your specific requirements - streamlining operations, improving productivity and driving greater efficiency.',
    items: ['Custom Business Apps', 'Enterprise Software', 'CRM & ERP', 'Workflow Automation', 'Process Management', 'APIs & Integrations'] },
  { no: '02', visual: 'app', anchor: 'app', title: 'Mobile App Development',
    desc: 'Intuitive, high-performance mobile apps that deliver seamless experiences and keep you connected with your audience anywhere.',
    items: ['iOS', 'Android', 'Cross-Platform', 'Enterprise Apps', 'Engagement Apps', 'Maintenance & Support'] },
  { no: '03', visual: 'web', anchor: 'web', title: 'Website Development',
    desc: 'More than an online presence - fast, secure and visually striking sites designed to convert visitors into customers.',
    items: ['WordPress', 'React & Next.js', 'Shopify'] },
]

const PLATFORMS = [
  { icon: Globe, t: 'WordPress', d: 'Flexible, easy-to-manage websites built on the world’s most popular content management system.' },
  { icon: Code2, t: 'React & Next.js', d: 'Modern, high-performance web apps with fast loads, great UX and scalable architecture.' },
  { icon: ShoppingBag, t: 'Shopify', d: 'Launch and grow your online store with a powerful eCommerce platform built to sell.' },
]

const OUTCOMES = [
  { icon: Clock, t: 'On time, every time', d: 'Weekly shippable demos and a fixed roadmap - no open-ended timelines.' },
  { icon: TrendingUp, t: 'Built to scale', d: 'Clean, tested architecture that grows with your traffic and your team.' },
  { icon: Rocket, t: 'Launch & beyond', d: 'We do not disappear at launch - we monitor, iterate and keep you fast.' },
]

/* CRM - the platforms we implement */
const CRM_SOLUTIONS = [
  { ab: 'D365', c: '#2563eb', t: 'Microsoft Dynamics 365 CRM', d: 'Manage sales, customer service, marketing and relationships - integrated seamlessly with Microsoft 365.' },
  { ab: 'SF', c: '#00A1E0', t: 'Salesforce CRM', d: 'A cloud CRM to increase sales, improve engagement, automate workflows and gain deeper customer insights.' },
  { ab: 'OR', c: '#C74634', t: 'Oracle CRM', d: 'Enterprise-grade CRM to streamline customer interactions, improve efficiency and drive growth.' },
  { ab: 'ZO', c: '#E42527', t: 'Zoho CRM', d: 'A flexible, cost-effective CRM to manage leads, automate sales and strengthen customer relationships.' },
]

/* ERP - the platforms we implement */
const ERP_SOLUTIONS = [
  { ab: 'D365', c: '#2563eb', t: 'Microsoft Dynamics 365', d: 'A cloud ERP to manage finance, operations, supply chain, sales and relationships from a unified platform.' },
  { ab: 'NS', c: '#1f6bb5', t: 'Oracle NetSuite', d: 'A leading cloud ERP with complete visibility into financials, inventory, operations and performance.' },
  { ab: 'SG', c: '#00A36C', t: 'Sage ERP', d: 'A flexible business management solution simplifying finance, operations, inventory and reporting.' },
  { ab: 'SF', c: '#00A1E0', t: 'Salesforce ERP Solutions', d: 'Extend Salesforce with ERP capabilities connecting data, processes, finance and workflow automation.' },
]

function Mock({ kind }: { kind: string }) {
  if (kind === 'app') {
    return (
      <div className="dvp-mock dvp-phone" aria-hidden="true">
        <span className="dvp-mlive"><i />Live</span>
        <div className="dvp-phone-notch" />
        <div className="dvp-phone-screen">
          <div className="dvp-app-top"><span className="dvp-app-title">Dashboard</span><span className="dvp-app-avatar" /></div>
          <div className="dvp-app-card">
            <span className="dvp-app-k">Revenue</span>
            <span className="dvp-app-v">$24.8k</span>
            <span className="dvp-app-trend">↑ +18.4% this month</span>
          </div>
          <div className="dvp-app-chart">
            {[40, 62, 50, 80, 68, 92].map((h, i) => <span key={i} style={{ height: `${h}%`, background: i === 5 ? GREEN : 'rgba(255,255,255,0.16)' }} />)}
          </div>
          <div className="dvp-app-rows">
            <div className="dvp-app-row"><span>Order #1042</span><i style={{ background: GREEN }} /></div>
            <div className="dvp-app-row"><span>Order #1041</span><i /></div>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'web') {
    return (
      <div className="dvp-mock dvp-browser" aria-hidden="true">
        <div className="dvp-bbar"><i /><i /><i /><span className="dvp-url">egdigital.com.au</span></div>
        <div className="dvp-bbody">
          <div className="dvp-bnav">
            <span className="dvp-blogo">EG</span>
            <span className="dvp-blink">Work</span><span className="dvp-blink">Services</span><span className="dvp-blink">About</span>
            <span className="dvp-bcta">Contact</span>
          </div>
          <div className="dvp-bhero">
            <span className="dvp-bh">We build digital.</span>
            <span className="dvp-bsub">Websites, apps and platforms engineered to scale.</span>
            <span className="dvp-bbtn">Start a project</span>
          </div>
          <div className="dvp-grid3">{['Web', 'Apps', 'SaaS'].map(t => <span key={t} className="dvp-tile">{t}</span>)}</div>
        </div>
      </div>
    )
  }
  // code (default)
  return (
    <div className="dvp-mock dvp-code" aria-hidden="true">
      <div className="dvp-cbar"><i /><i /><i /><span className="dvp-cfile">build.ts</span></div>
      <pre className="dvp-cbody">
        {CODE.map((line, i) => (
          <div key={i} className="dvp-cline">
            <span className="dvp-cnum">{i + 1}</span>
            <span>{line.map(([t, c], j) => <span key={j} style={{ color: COL[c] }}>{t}</span>)}</span>
          </div>
        ))}
      </pre>
      <div className="dvp-cwterm"><span style={{ color: GREEN }}>✓</span> 2,736 modules · built in 1.24s</div>
    </div>
  )
}

export function DevelopmentSolution() {
  usePageMeta(
    'Web & App Development Services | EG Digital Experts',
    'EG Digital offers custom web and mobile app development services using modern technologies to build scalable, secure, and high-performance solutions.',
  )
  const navigate = useNavigate()
  return (
    <PageLayout>
      <style>{`
        .dvp-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .dvp-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .dvp-shell{ max-width:2440px; } }

        /* ── Hero (dark) ── */
        .dvp-hero { background:radial-gradient(120% 100% at 85% 0%, #0c2b4d 0%, #061525 60%); position:relative; overflow:hidden;
          margin-top:-76px; padding:calc(76px + clamp(40px,6vw,88px)) 0 clamp(48px,6vw,88px); }
        .dvp-hero::after { content:''; position:absolute; bottom:-32%; left:-12%; width:min(660px,62vw); height:min(660px,62vw); border-radius:50%;
          background:radial-gradient(circle, rgba(60,185,140,0.18), transparent 65%); pointer-events:none; z-index:0; }
        .dvp-hgrid { position:relative; z-index:1; display:grid; grid-template-columns:1.1fr 0.9fr; gap:clamp(36px,5vw,80px); align-items:center; }
        .dvp-cwterm { border-top:1px solid rgba(255,255,255,0.08); padding:11px 16px; font-family:ui-monospace,monospace; font-size:11.5px; color:rgba(255,255,255,0.62); }
        @media (max-width:920px){ .dvp-hgrid{ grid-template-columns:1fr; } }
        .dvp-h1 { font-size:clamp(52px,9.5vw,128px); font-weight:900; letter-spacing: 0.01em; line-height: 1; color:#fff; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .dvp-h1 span { color:${GREEN}; }
        .dvp-intro { max-width:520px; font-size:clamp(15px,1.25vw,19px); line-height:1.8; color:rgba(255,255,255,0.62); margin:22px 0 0; }
        .dvp-cta { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .dvp-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px;
          padding:15px 30px; font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:50px; transition:transform .18s,filter .2s; will-change:transform; }
        .dvp-bp:hover { transform:translateY(-2px); filter:brightness(1.08); }
        .dvp-bg { background:transparent; color:#fff; border:1.5px solid rgba(255,255,255,0.25); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:50px; transition:border-color .2s; }
        .dvp-bg:hover { border-color:rgba(255,255,255,0.6); }
        .dvp-hstats { display:flex; gap:clamp(22px,3vw,44px); margin-top:clamp(30px,4vw,44px); }
        .dvp-hsv { font-size:clamp(24px,2.4vw,38px); font-weight:900; letter-spacing:-0.04em; color:#fff; line-height:1; }
        .dvp-hsl { font-size:11px; font-weight:800; letter-spacing:1.4px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(255,255,255,0.45); margin-top:6px; }

        /* code window in hero */
        .dvp-codewin { border-radius:16px; overflow:hidden; background:#0a1322; border:1px solid rgba(255,255,255,0.1);
          box-shadow:0 40px 80px -30px rgba(0,0,0,0.7); transform:perspective(1100px) rotateY(-9deg) rotateX(4deg); will-change:transform; }
        .dvp-cwbar { display:flex; align-items:center; gap:6px; padding:11px 14px; background:rgba(255,255,255,0.05); }
        .dvp-cwbar i { width:9px; height:9px; border-radius:50%; background:rgba(255,255,255,0.25); }
        .dvp-cwbar i:first-child { background:#ff5f57; } .dvp-cwbar i:nth-child(2){ background:#ffbd2e; } .dvp-cwbar i:nth-child(3){ background:#28ca41; }
        .dvp-cwfile { margin-left:8px; font-size:11px; color:rgba(255,255,255,0.4); font-family:ui-monospace,monospace; }
        .dvp-cwbody { margin:0; padding:18px 16px; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:clamp(12px,1vw,14.5px); line-height:1.95; }
        .dvp-cwline { display:flex; gap:14px; }
        .dvp-cwnum { color:rgba(255,255,255,0.22); width:14px; text-align:right; flex-shrink:0; }

        /* ── Zig-zag capability rows ── */
        .dvp-sec { padding:clamp(56px,7vw,120px) 0; }
        .dvp-rows { display:flex; flex-direction:column; gap:clamp(48px,7vw,120px); }
        .dvp-row { display:grid; grid-template-columns:1fr 1fr; gap:clamp(28px,5vw,84px); align-items:center; }
        .dvp-row.rev .dvp-text { order:2; }
        @media (max-width:900px){ .dvp-row{ grid-template-columns:1fr; gap:clamp(24px,5vw,40px); } .dvp-row.rev .dvp-text{ order:0; } }
        .dvp-rno { font-family:ui-monospace,monospace; font-size:14px; font-weight:800; color:${GREEN}; }
        .dvp-rt { font-size:clamp(30px,3.6vw,60px); font-weight:900; letter-spacing: 0.01em; line-height: 1.07; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:10px 0 14px; }
        .dvp-rd { font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.58); max-width:46ch; margin:0 0 20px; }
        .dvp-rtags { display:flex; flex-wrap:wrap; gap:8px; }
        .dvp-pill { display:inline-flex; align-items:center; gap:7px; font-size:12.5px; font-weight:600; color:rgba(8,33,60,0.64);
          padding:6px 13px; border-radius:100px; border:1px solid rgba(8,33,60,0.12);
          transition:color .2s, border-color .2s, background .2s, transform .2s; cursor:default; }
        .dvp-pill:hover { color:${NAVY}; border-color:rgba(60,185,140,0.5); background:rgba(60,185,140,0.08); transform:translateY(-2px); }
        .dvp-pill i { width:5px; height:5px; border-radius:50%; background:${GREEN}; flex-shrink:0; font-style:normal; }

        /* device mocks - real content, no skeletons */
        .dvp-mock { position:relative; border-radius:18px; box-shadow:0 30px 70px -28px rgba(8,33,60,0.4);
          transition:transform .45s cubic-bezier(0.16,1,0.3,1), box-shadow .45s; will-change:transform; }
        .dvp-mock:hover { transform:translateY(-8px); box-shadow:0 48px 96px -32px rgba(8,33,60,0.5); }
        .dvp-tile { transition:transform .35s cubic-bezier(0.16,1,0.3,1); }
        .dvp-mock:hover .dvp-tile:nth-child(1){ transform:translateY(-3px); }
        .dvp-mock:hover .dvp-tile:nth-child(2){ transform:translateY(-5px); }
        .dvp-mock:hover .dvp-tile:nth-child(3){ transform:translateY(-3px); }
        .dvp-mlive { position:absolute; top:16px; right:16px; z-index:3; display:inline-flex; align-items:center; gap:6px;
          background:rgba(60,185,140,0.16); border:1px solid rgba(60,185,140,0.4); color:${GREEN}; font-size:10px; font-weight:800;
          letter-spacing:1px; text-transform:uppercase; word-spacing: 0.14em; padding:4px 10px; border-radius:99px; }
        .dvp-mlive i { width:6px; height:6px; border-radius:50%; background:${GREEN}; }

        /* code */
        .dvp-code { background:#0a1322; overflow:hidden; }
        .dvp-cbar { display:flex; align-items:center; gap:6px; padding:11px 14px; background:rgba(255,255,255,0.05); }
        .dvp-cbar i { width:9px; height:9px; border-radius:50%; background:rgba(255,255,255,0.25); }
        .dvp-cbar i:first-child{ background:#ff5f57; } .dvp-cbar i:nth-child(2){ background:#ffbd2e; } .dvp-cbar i:nth-child(3){ background:#28ca41; }
        .dvp-cfile { margin-left:8px; font-size:11px; color:rgba(255,255,255,0.4); font-family:ui-monospace,monospace; }
        .dvp-cbody { margin:0; padding:18px 16px; font-family:ui-monospace,monospace; font-size:clamp(12px,1vw,14.5px); line-height:1.95; }
        .dvp-cline { display:flex; gap:14px; } .dvp-cnum { color:rgba(255,255,255,0.22); width:14px; text-align:right; flex-shrink:0; }

        /* browser - real landing-page content */
        .dvp-browser { background:#fff; border:1px solid rgba(8,33,60,0.1); overflow:hidden; }
        .dvp-bbar { display:flex; align-items:center; gap:6px; padding:11px 14px; background:#f2f4f7; border-bottom:1px solid rgba(8,33,60,0.07); }
        .dvp-bbar i { width:9px; height:9px; border-radius:50%; background:rgba(8,33,60,0.18); }
        .dvp-url { margin-left:8px; flex:1; max-width:220px; border-radius:99px; background:#fff; border:1px solid rgba(8,33,60,0.1);
          font-size:11px; color:rgba(8,33,60,0.5); padding:4px 12px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .dvp-bbody { padding:clamp(20px,2.6vw,34px); }
        .dvp-bnav { display:flex; align-items:center; gap:14px; padding-bottom:clamp(16px,2vw,22px); border-bottom:1px solid rgba(8,33,60,0.08); margin-bottom:clamp(16px,2vw,22px); }
        .dvp-blogo { font-weight:900; color:${NAVY}; font-size:15px; letter-spacing:-0.02em; }
        .dvp-blink { font-size:12px; font-weight:600; color:rgba(8,33,60,0.5); }
        .dvp-bcta { margin-left:auto; background:${GREEN}; color:${NAVY}; font-size:11px; font-weight:800; padding:6px 14px; border-radius:99px; }
        .dvp-bhero { display:flex; flex-direction:column; gap:9px; align-items:flex-start; margin-bottom:clamp(16px,2vw,22px); }
        .dvp-bh { font-size:clamp(22px,2.6vw,38px); font-weight:900; letter-spacing: 0.01em; line-height: 1.07; color:${NAVY}; text-transform:uppercase; word-spacing: 0.14em; }
        .dvp-bsub { font-size:clamp(12px,1vw,14px); color:rgba(8,33,60,0.5); line-height:1.6; }
        .dvp-bbtn { background:${NAVY}; color:#fff; font-size:12px; font-weight:800; padding:9px 18px; border-radius:99px; margin-top:4px; }
        .dvp-grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
        .dvp-tile { aspect-ratio:1/0.78; border-radius:12px; display:flex; align-items:flex-end; padding:10px; font-size:12px; font-weight:800; color:${NAVY};
          background:linear-gradient(150deg, rgba(60,185,140,0.14), rgba(8,33,60,0.03)); border:1px solid rgba(8,33,60,0.07); }

        /* phone - real dashboard content */
        .dvp-phone { width:clamp(200px,23vw,260px); margin:0 auto; background:#0d1117; border-radius:32px; padding:10px; border:1px solid rgba(255,255,255,0.08); }
        .dvp-phone-notch { width:46px; height:6px; border-radius:99px; background:rgba(255,255,255,0.2); margin:2px auto 10px; }
        .dvp-phone-screen { background:#0a0f17; border-radius:24px; padding:16px; display:flex; flex-direction:column; gap:13px; }
        .dvp-app-top { display:flex; align-items:center; justify-content:space-between; }
        .dvp-app-title { font-size:13px; font-weight:800; color:#fff; letter-spacing:-0.01em; }
        .dvp-app-avatar { width:22px; height:22px; border-radius:50%; background:rgba(60,185,140,0.3); border:1px solid ${GREEN}; }
        .dvp-app-card { background:rgba(60,185,140,0.1); border:1px solid rgba(60,185,140,0.25); border-radius:14px; padding:14px; display:flex; flex-direction:column; gap:3px; }
        .dvp-app-k { font-size:11px; color:rgba(255,255,255,0.5); font-weight:600; }
        .dvp-app-v { font-size:26px; font-weight:900; color:#fff; letter-spacing:-0.04em; line-height:1; }
        .dvp-app-trend { font-size:11px; color:${GREEN}; font-weight:700; margin-top:2px; }
        .dvp-app-chart { display:flex; align-items:flex-end; gap:7px; height:58px; }
        .dvp-app-chart span { flex:1; border-radius:5px 5px 0 0; }
        .dvp-app-rows { display:flex; flex-direction:column; }
        .dvp-app-row { display:flex; align-items:center; justify-content:space-between; padding:9px 0; border-top:1px solid rgba(255,255,255,0.07);
          font-size:12px; color:rgba(255,255,255,0.6); font-weight:600; }
        .dvp-app-row i { width:7px; height:7px; border-radius:50%; background:rgba(255,255,255,0.3); }

        /* ── Outcomes ── */
        .dvp-out { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(14px,1.8vw,24px); margin-top:clamp(40px,5vw,60px); }
        @media (max-width:820px){ .dvp-out{ grid-template-columns:1fr; } }
        .dvp-ocard { background:#fff; border:1px solid rgba(8,33,60,0.08); border-radius:20px; padding:clamp(24px,2.4vw,36px);
          box-shadow:0 4px 22px rgba(8,33,60,0.05); transition:transform .3s cubic-bezier(0.16,1,0.3,1), box-shadow .3s; will-change:transform; }
        .dvp-ocard:hover { transform:translateY(-5px); box-shadow:0 22px 50px rgba(8,33,60,0.12); }
        .dvp-oic { width:52px; height:52px; border-radius:14px; background:rgba(60,185,140,0.14); color:${GREEN}; display:flex; align-items:center; justify-content:center; margin-bottom:18px; }
        .dvp-ot { font-size:clamp(18px,1.6vw,23px); font-weight:900; letter-spacing:-0.02em; color:${NAVY}; margin:0 0 9px; }
        .dvp-od { font-size:clamp(13px,1vw,15px); line-height:1.7; color:rgba(8,33,60,0.55); margin:0; }
        .dvp-h2 { font-size:clamp(34px,4.6vw,76px); font-weight:900; letter-spacing: 0.01em; line-height: 1.04; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .dvp-h2 span { color:${GREEN}; }

        /* ── CRM / ERP solution sections ── */
        .dvp-lead { max-width:640px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.55); margin:18px 0 0; }
        .dvp-subh { font-size:clamp(20px,2.4vw,34px); font-weight:900; letter-spacing: 0.01em; line-height: 1.12; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:clamp(36px,4.5vw,60px) 0 0; }
        .dvp-sol { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(28px,3vw,40px); }
        @media (max-width:980px){ .dvp-sol{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:560px){ .dvp-sol{ grid-template-columns:1fr; } }
        .dvp-sbadge { width:48px; height:48px; border-radius:13px; display:flex; align-items:center; justify-content:center;
          color:#fff; font-weight:900; font-size:13px; letter-spacing:-0.02em; margin-bottom:16px; flex-shrink:0;
          box-shadow:0 10px 22px -10px rgba(8,33,60,0.5); transition:transform .35s cubic-bezier(0.16,1,0.3,1); }
        .dvp-ocard:hover .dvp-sbadge { transform:scale(1.08) rotate(-4deg); }

        /* ── motion & hover polish ── */
        @keyframes dvp-cwfloat {
          0%,100% { transform:perspective(1100px) rotateY(-9deg) rotateX(4deg) translateY(0); }
          50%     { transform:perspective(1100px) rotateY(-9deg) rotateX(4deg) translateY(-12px); }
        }
        .dvp-codewin { animation:dvp-cwfloat 7s ease-in-out infinite; }
        .dvp-codewin:hover { animation-play-state:paused; }
        @keyframes dvp-pulse { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.7); opacity:0.45; } }
        .dvp-mlive i { animation:dvp-pulse 1.8s ease-in-out infinite; }
        .dvp-oic { transition:transform .35s cubic-bezier(0.16,1,0.3,1), background .3s; }
        .dvp-ocard:hover .dvp-oic { transform:scale(1.08) rotate(-4deg); background:rgba(60,185,140,0.22); }
        .dvp-rno { transition:letter-spacing .3s; }
        .dvp-row:hover .dvp-rno { letter-spacing:2px; }
        .dvp-bp svg, .dvp-bg { transition:transform .2s, border-color .2s; }
        .dvp-bp svg { transition:transform .2s; } .dvp-bp:hover svg { transform:translateX(3px); }
        @media (prefers-reduced-motion:reduce) { .dvp-codewin, .dvp-mlive i { animation:none; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="dvp-hero">
        <div className="dvp-shell dvp-hgrid">
          <Reveal>
            <Eyebrow light>Development</Eyebrow>
            <h1 className="dvp-h1">Built<br />to <span>ship.</span></h1>
            <p className="dvp-intro">
              Your website, app or software is often a customer’s first impression. We build modern, scalable, user-friendly
              solutions that drive growth and create exceptional experiences.
            </p>
            <div className="dvp-cta">
              <button className="dvp-bp" onClick={() => navigate('/contact')}>
                Start a project
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
              </button>
              <button className="dvp-bg" onClick={() => navigate('/blog#work')}>View our work</button>
            </div>
            <div className="dvp-hstats">
              {STATS.map(([v, l]) => <div key={l}><div className="dvp-hsv">{v}</div><div className="dvp-hsl">{l}</div></div>)}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="dvp-codewin">
              <div className="dvp-cwbar"><i /><i /><i /><span className="dvp-cwfile">build.ts</span></div>
              <pre className="dvp-cwbody">
                {CODE.map((line, i) => (
                  <div key={i} className="dvp-cwline">
                    <span className="dvp-cwnum">{i + 1}</span>
                    <span>{line.map(([t, c], j) => <span key={j} style={{ color: COL[c] }}>{t}</span>)}</span>
                  </div>
                ))}
              </pre>
              <div className="dvp-cwterm"><span style={{ color: GREEN }}>✓</span> built in 1.24s <span style={{ opacity: 0.55 }}>· deployed to edge</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Zig-zag capabilities ── */}
      <section className="dvp-sec">
        <div className="dvp-shell">
          <Reveal style={{ marginBottom: 'clamp(36px,5vw,64px)' }}>
            <Eyebrow>What we build</Eyebrow>
            <h2 className="dvp-h2">Three ways we<br />ship <span>software.</span></h2>
          </Reveal>
          <div className="dvp-rows">
            {CAPS.map((c, i) => (
              <Reveal key={c.no}>
                <div id={c.anchor} className={`dvp-row${i % 2 ? ' rev' : ''}`} style={{ scrollMarginTop: 90 }}>
                  <div className="dvp-text">
                    <span className="dvp-rno">{c.no}</span>
                    <h3 className="dvp-rt">{c.title}</h3>
                    <p className="dvp-rd">{c.desc}</p>
                    <div className="dvp-rtags">{c.items.map(it => <span key={it} className="dvp-pill"><i />{it}</span>)}</div>
                  </div>
                  <div><Mock kind={c.visual} /></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Website platforms ── */}
      <section id="ecommerce" className="dvp-sec" style={{ paddingTop: 0, scrollMarginTop: 90 }}>
        <div className="dvp-shell">
          <Reveal>
            <Eyebrow>Website platforms</Eyebrow>
            <h2 className="dvp-h2">Built on the<br />right <span>stack.</span></h2>
          </Reveal>
          <div className="dvp-out">
            {PLATFORMS.map((p, i) => {
              const Ic = p.icon
              return (
                <Reveal key={p.t} delay={Math.min(i * 0.08, 0.3)}>
                  <div className="dvp-ocard">
                    <div className="dvp-oic"><Ic size={24} /></div>
                    <h3 className="dvp-ot">{p.t}</h3>
                    <p className="dvp-od">{p.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CRM ── */}
      <section id="crm" className="dvp-sec" style={{ scrollMarginTop: 90, paddingTop: 0 }}>
        <div className="dvp-shell">
          <Reveal>
            <Eyebrow>CRM Solutions</Eyebrow>
            <h2 className="dvp-h2">Turn relationships<br />into <span>growth.</span></h2>
            <p className="dvp-lead">
              A CRM organizes customer data, tracks interactions, manages sales pipelines and automates processes - so
              your sales, marketing and service teams work together and deliver exceptional customer experiences.
            </p>
          </Reveal>
          <Reveal><h3 className="dvp-subh">Our CRM solutions</h3></Reveal>
          <div className="dvp-sol">
            {CRM_SOLUTIONS.map((s, i) => (
              <Reveal key={s.t} delay={Math.min(i * 0.07, 0.3)}>
                <div className="dvp-ocard">
                  <div className="dvp-sbadge" style={{ background: s.c }}>{s.ab}</div>
                  <h3 className="dvp-ot">{s.t}</h3>
                  <p className="dvp-od">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ERP ── */}
      <section id="erp" className="dvp-sec" style={{ scrollMarginTop: 90, paddingTop: 0 }}>
        <div className="dvp-shell">
          <Reveal>
            <Eyebrow>ERP Solutions</Eyebrow>
            <h2 className="dvp-h2">Streamline ops.<br />Drive <span>growth.</span></h2>
            <p className="dvp-lead">
              An ERP brings finance, inventory, operations and procurement into one integrated platform - improving
              visibility, automating processes and giving you real-time insights across the organization.
            </p>
          </Reveal>
          <Reveal><h3 className="dvp-subh">Our ERP solutions</h3></Reveal>
          <div className="dvp-sol">
            {ERP_SOLUTIONS.map((s, i) => (
              <Reveal key={s.t} delay={Math.min(i * 0.07, 0.3)}>
                <div className="dvp-ocard">
                  <div className="dvp-sbadge" style={{ background: s.c }}>{s.ab}</div>
                  <h3 className="dvp-ot">{s.t}</h3>
                  <p className="dvp-od">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="dvp-sec">
        <div className="dvp-shell">
          <Reveal>
            <Eyebrow>Why build with us</Eyebrow>
            <h2 className="dvp-h2">Engineering you<br />can <span>count on.</span></h2>
          </Reveal>
          <div className="dvp-out">
            {OUTCOMES.map((o, i) => {
              const Ic = o.icon
              return (
                <Reveal key={o.t} delay={Math.min(i * 0.08, 0.3)}>
                  <div className="dvp-ocard">
                    <div className="dvp-oic"><Ic size={24} /></div>
                    <h3 className="dvp-ot">{o.t}</h3>
                    <p className="dvp-od">{o.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Ready When You Are" heading="Let's build" highlight="something." button="Start a project" />
    </PageLayout>
  )
}
