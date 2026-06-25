import { useState, useRef, useEffect } from 'react'
import { useInView, animate } from 'framer-motion'
import {
  ShieldCheck, Cpu, Workflow, KeyRound, Cloud, Database, Bot, Sparkles, Wand2, Boxes,
  Network, GitMerge, HeartHandshake, LayoutGrid, Building2, Check, ArrowUpRight,
} from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, EASE } from '../_kit'
import { useNavigate } from 'react-router-dom'

/* ════════════════════════════════════════════════════════════════════════════
   SOLUTION PAGE - SECURITY & INTEGRATION  (light theme)
   Showing TWO layout options for the capabilities section:
     A - Quadrant + Shield   B - Architecture Stack
   Shared light hero with a live "Threat Monitor" panel + threat-stat counters.
   ════════════════════════════════════════════════════════════════════════════ */

const VIOLET = '#7c3aed'
const VIOLET2 = '#a855f7'
const AMBER = '#d97706'

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

const FEED: [string, string, string][] = [
  ['Phishing attempt', 'Blocked', GREEN],
  ['Malware payload', 'Quarantined', VIOLET],
  ['Login anomaly', 'Flagged', AMBER],
  ['Brute-force login', 'Blocked', GREEN],
]

const STATS = [
  { node: <Counter to={178} suffix="+" />, label: 'Threats blocked daily' },
  { node: <Counter to={99.9} decimals={1} suffix="%" />, label: 'Uptime SLA' },
  { node: <>24/7</>, label: 'SOC monitoring' },
  { node: <Counter to={4} />, label: 'Layers of defense' },
]

const CAPS = [
  { icon: ShieldCheck, no: '01', title: 'Cyber Security', desc: 'Enterprise-grade protection on the Microsoft security stack.',
    items: ['Defender XDR', 'Microsoft Entra', 'Defender for Cloud', 'Microsoft Purview'] },
  { icon: Cpu, no: '02', title: 'AI Cyber Security', desc: 'AI-driven threat detection and response that learns as it defends.',
    items: ['Microsoft Defender', 'Microsoft Foundry', '365 Copilot', 'Copilot Studio'] },
  { icon: Workflow, no: '03', title: 'Integrations', desc: 'Connect every system cleanly so your data flows without friction.',
    items: ['API Integrations', 'Middleware / iPaaS', 'Point-to-Point'] },
  { icon: KeyRound, no: '04', title: 'Licenses', desc: 'The right licences at the right price - non-profit pricing included.',
    items: ['Non-Profit Licenses', 'Office 365', 'D365 Licenses'] },
]

// Ordered outer perimeter -> core: identity, endpoint, cloud, data (defense in depth)
const CYBER = [
  { icon: KeyRound, domain: 'Identity', t: 'Microsoft Entra', d: 'Modern identity and access management that secures employees, customers and partners at the perimeter.',
    items: ['Access Management', 'Conditional Access', 'SSO', 'MFA', 'Identity Governance'] },
  { icon: ShieldCheck, domain: 'Endpoint & Email', t: 'Microsoft Defender XDR', d: 'Unified threat prevention, detection, investigation and response across endpoints, email and apps.',
    items: ['Endpoint Protection', 'Email Security', 'Identity Protection', 'Cloud App Security', 'Threat Response'] },
  { icon: Cloud, domain: 'Cloud', t: 'Defender for Cloud', d: 'Identify vulnerabilities, monitor risk and protect cloud workloads across every environment.',
    items: ['Posture Management', 'Threat Protection', 'Compliance Monitoring', 'Risk Remediation'] },
  { icon: Database, domain: 'Data', t: 'Microsoft Purview', d: 'Protect and govern your data at the core with comprehensive compliance and information protection.',
    items: ['Data Governance', 'Loss Prevention', 'Compliance', 'Information Protection'] },
]

const AICYBER = [
  { icon: Bot, t: 'Microsoft Defender', d: 'AI-powered detection and response across identities, endpoints, apps, email and cloud.' },
  { icon: Sparkles, t: 'Microsoft 365 Copilot', d: 'AI assistance across emails, meetings, documents, chats and daily business tasks.' },
  { icon: Wand2, t: 'Copilot Studio', d: 'Build custom AI assistants and intelligent agents tailored to your processes.' },
  { icon: Boxes, t: 'Microsoft Foundry', d: 'Build, deploy and manage enterprise-ready AI solutions securely and efficiently.' },
]

const INTEGRATION = [
  { icon: Workflow, t: 'API Integration', d: 'Connect applications, platforms and services to improve efficiency and data access.' },
  { icon: Network, t: 'Middleware & iPaaS', d: 'Secure, scalable integrations between cloud and on-premise systems.' },
  { icon: GitMerge, t: 'Point-to-Point', d: 'Direct connections between business apps that streamline operations and cut manual work.' },
]

const INTEGRATION_BENEFITS = [
  'Eliminate data silos',
  'Improve business efficiency',
  'Automate workflows',
  'Real-time data exchange',
  'Enhanced system connectivity',
]

const LICENSING = [
  { icon: HeartHandshake, t: 'Non-Profit Licensing', d: 'Discounted or donated Microsoft solutions designed for eligible non-profit organizations.' },
  { icon: LayoutGrid, t: 'Microsoft 365 Licensing', d: 'The right Microsoft 365 plans for productivity, collaboration, security and communication.' },
  { icon: Building2, t: 'Dynamics 365 Licensing', d: 'Flexible CRM and ERP licensing tailored to your operations and growth objectives.' },
]

export function SecurityIntegrationSolution() {
  const navigate = useNavigate()
  return (
    <PageLayout>
      <style>{`
        .sec-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .sec-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .sec-shell{ max-width:2440px; } }

        /* ── Hero ── */
        .sec-hero { position:relative; overflow:hidden; padding:clamp(36px,5vw,80px) 0 clamp(40px,5vw,72px); }
        .sec-hero::before { content:''; position:absolute; top:-20%; right:-10%; width:min(680px,64vw); height:min(680px,64vw); border-radius:50%;
          background:radial-gradient(circle, ${VIOLET}1f, transparent 64%); pointer-events:none; z-index:0; }
        .sec-hgrid { position:relative; z-index:1; display:grid; grid-template-columns:1.05fr 0.95fr; gap:clamp(36px,5vw,80px); align-items:center; }
        @media (max-width:920px){ .sec-hgrid{ grid-template-columns:1fr; } }
        .sec-h1 { font-size:clamp(50px,9vw,124px); font-weight:900; letter-spacing:-0.05em; line-height:0.88; color:${NAVY}; margin:16px 0 0; text-transform:uppercase; }
        .sec-h1 span { color:${VIOLET}; }
        .sec-intro { max-width:520px; font-size:clamp(15px,1.25vw,19px); line-height:1.8; color:rgba(8,33,60,0.58); margin:22px 0 0; }
        .sec-cta { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .sec-bp { display:inline-flex; align-items:center; gap:9px; background:${NAVY}; color:#fff; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:50px; transition:background .2s,transform .18s; will-change:transform; }
        .sec-bp:hover { background:${VIOLET}; transform:translateY(-2px); }
        .sec-bp svg { transition:transform .2s; } .sec-bp:hover svg { transform:translateX(3px); }
        .sec-bg { background:#fff; color:${NAVY}; border:1.5px solid rgba(8,33,60,0.16); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:50px; transition:border-color .2s; }
        .sec-bg:hover { border-color:rgba(8,33,60,0.4); }

        /* threat monitor panel */
        @keyframes sec-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-10px); } }
        .sec-panel { background:#fff; border:1px solid rgba(8,33,60,0.09); border-radius:22px; padding:clamp(20px,2.2vw,28px);
          box-shadow:0 30px 70px -30px rgba(8,33,60,0.4); animation:sec-float 7s ease-in-out infinite; will-change:transform; }
        .sec-panel:hover { animation-play-state:paused; }
        .sec-ptop { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
        .sec-ptitle { font-size:14px; font-weight:800; color:${NAVY}; }
        .sec-plive { display:inline-flex; align-items:center; gap:6px; font-size:10px; font-weight:800; letter-spacing:1px; text-transform:uppercase;
          color:${VIOLET}; background:${VIOLET}14; border:1px solid ${VIOLET}33; padding:4px 10px; border-radius:99px; }
        @keyframes sec-pulse { 0%,100%{ transform:scale(1); opacity:1; } 50%{ transform:scale(1.7); opacity:0.4; } }
        .sec-plive i { width:6px; height:6px; border-radius:50%; background:${VIOLET}; animation:sec-pulse 1.8s ease-in-out infinite; }
        .sec-shield { display:flex; align-items:center; gap:14px; background:${VIOLET}0d; border:1px solid ${VIOLET}26; border-radius:14px; padding:16px; margin-bottom:14px; }
        .sec-shield-ic { width:44px; height:44px; border-radius:12px; background:${VIOLET}; color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .sec-shield-k { font-size:11px; font-weight:700; color:rgba(8,33,60,0.45); }
        .sec-shield-v { font-size:14.5px; font-weight:800; color:${NAVY}; }
        .sec-feed { display:flex; flex-direction:column; }
        .sec-frow { display:flex; align-items:center; justify-content:space-between; padding:11px 0; border-top:1px solid rgba(8,33,60,0.07); }
        .sec-fname { font-size:13px; color:rgba(8,33,60,0.66); font-weight:500; display:flex; align-items:center; gap:9px; }
        .sec-fname b { width:7px; height:7px; border-radius:50%; }
        .sec-fbadge { font-size:11px; font-weight:800; padding:3px 10px; border-radius:99px; }

        /* stats */
        .sec-stats { position:relative; z-index:1; display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(16px,3vw,40px);
          margin-top:clamp(36px,4vw,60px); padding-top:clamp(28px,3vw,40px); border-top:1px solid rgba(8,33,60,0.12); }
        @media (max-width:680px){ .sec-stats{ grid-template-columns:repeat(2,1fr); gap:28px 16px; } }
        .sec-sv { font-size:clamp(32px,4vw,58px); font-weight:900; letter-spacing:-0.05em; color:${NAVY}; line-height:1; }
        .sec-sl { font-size:clamp(11px,0.85vw,13px); font-weight:800; letter-spacing:1.6px; text-transform:uppercase; color:rgba(8,33,60,0.42); margin-top:8px; }

        /* shared section header */
        .sec-cap { padding:clamp(56px,7vw,118px) 0; }
        .sec-cap.alt { background:#fff; }
        .sec-h2 { font-size:clamp(34px,4.6vw,76px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .sec-h2 span { color:${VIOLET}; }
        .sec-lead { max-width:560px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.55); margin:16px 0 0; }
        .sec-pill { display:inline-flex; align-items:center; gap:7px; font-size:12.5px; font-weight:600; color:rgba(8,33,60,0.64);
          padding:6px 13px; border-radius:100px; border:1px solid rgba(8,33,60,0.12); transition:transform .2s, background .2s, border-color .2s, color .2s; cursor:default; }
        .sec-pill:hover { transform:translateY(-2px); background:${VIOLET}10; border-color:${VIOLET}55; color:${NAVY}; }
        .sec-pill i { width:5px; height:5px; border-radius:50%; background:${VIOLET}; flex-shrink:0; font-style:normal; }
        .sec-ct { font-size:clamp(19px,1.9vw,27px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0; }
        .sec-cd { font-size:clamp(13.5px,1.02vw,15.5px); line-height:1.65; color:rgba(8,33,60,0.56); margin:10px 0 16px; }
        .sec-ic { width:48px; height:48px; border-radius:13px; background:${VIOLET}14; color:${VIOLET}; display:flex; align-items:center; justify-content:center; flex-shrink:0;
          transition:transform .35s cubic-bezier(0.16,1,0.3,1); }

        /* ════ DESIGN A - Quadrant + Shield ════ */
        .q-grid { display:grid; grid-template-columns:1fr clamp(160px,17vw,230px) 1fr; gap:clamp(18px,2.4vw,40px); align-items:center;
          grid-template-areas:"c1 shield c2" "c3 shield c4"; margin-top:clamp(40px,5vw,64px); }
        @media (max-width:820px){ .q-grid{ grid-template-columns:1fr; grid-template-areas:"shield" "c1" "c2" "c3" "c4"; gap:clamp(16px,4vw,24px); } }
        .q-shield { grid-area:shield; display:flex; flex-direction:column; align-items:center; text-align:center; }
        .q-emblem { position:relative; width:clamp(120px,14vw,176px); aspect-ratio:1; border-radius:50%;
          background:radial-gradient(circle at 35% 30%, ${VIOLET}, #5b21b6); color:#fff; display:flex; align-items:center; justify-content:center;
          box-shadow:0 26px 54px -16px ${VIOLET}cc; }
        .q-emblem::before, .q-emblem::after { content:''; position:absolute; border-radius:50%; border:1.5px solid ${VIOLET}40; }
        .q-emblem::before { inset:-12px; animation:q-ring 3s ease-out infinite; }
        .q-emblem::after  { inset:-12px; animation:q-ring 3s ease-out infinite 1.5s; }
        @keyframes q-ring { 0%{ transform:scale(0.9); opacity:0.8; } 100%{ transform:scale(1.35); opacity:0; } }
        .q-elabel { margin-top:16px; font-size:clamp(13px,1vw,15px); font-weight:900; letter-spacing:1.5px; text-transform:uppercase; color:${NAVY}; }
        .q-esub { font-size:12px; color:rgba(8,33,60,0.5); margin-top:4px; }
        .q-card { background:#fff; border:1px solid rgba(8,33,60,0.08); border-radius:20px; padding:clamp(20px,2.2vw,30px);
          box-shadow:0 4px 22px rgba(8,33,60,0.05); transition:transform .3s cubic-bezier(0.16,1,0.3,1), box-shadow .3s, border-color .3s; will-change:transform; }
        .q-card:hover { transform:translateY(-6px); box-shadow:0 24px 54px rgba(8,33,60,0.13); border-color:${VIOLET}55; }
        .q-card:hover .sec-ic { transform:scale(1.08) rotate(-4deg); }
        .q-c1{ grid-area:c1; } .q-c2{ grid-area:c2; } .q-c3{ grid-area:c3; } .q-c4{ grid-area:c4; }
        .q-top { display:flex; align-items:center; gap:13px; margin-bottom:6px; }
        .q-no { margin-left:auto; font-family:ui-monospace,monospace; font-size:12px; font-weight:800; color:rgba(8,33,60,0.3); }
        .q-tags { display:flex; flex-wrap:wrap; gap:7px; }

        /* ════ Detailed sections ════ */
        .sx-sec { padding:clamp(56px,7vw,118px) 0; }
        .sx-sec.alt { background:#fff; }
        .sx-sec.dark { background:${NAVY}; position:relative; overflow:hidden; }
        .sx-sec.dark::before { content:''; position:absolute; top:-22%; right:-10%; width:min(620px,60vw); height:min(620px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${VIOLET}33, transparent 65%); pointer-events:none; }
        .sx-sec.dark .sec-shell { position:relative; z-index:1; }
        .sx-sec.dark .sec-h2 { color:#fff; } .sx-sec.dark .sec-h2 span { color:${VIOLET2}; }
        .sx-sec.dark .sec-lead { color:rgba(255,255,255,0.62); }
        .sx-h3 { font-size:clamp(22px,2.6vw,40px); font-weight:900; letter-spacing:-0.035em; line-height:1; text-transform:uppercase; color:${NAVY}; margin:clamp(46px,6vw,80px) 0 0; }
        .sx-sec.dark .sx-h3 { color:#fff; }

        /* premium card */
        .sx-grid2 { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:760px){ .sx-grid2{ grid-template-columns:1fr; } }
        .sx-grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:860px){ .sx-grid3{ grid-template-columns:1fr; } }
        .sx-pc { position:relative; overflow:hidden; background:#fafbfd; border:1px solid rgba(8,33,60,0.08); border-radius:22px;
          padding:clamp(24px,2.5vw,36px); box-shadow:0 4px 22px rgba(8,33,60,0.05); height:100%;
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .sx-pc::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,${VIOLET},${VIOLET2});
          transform:scaleX(0); transform-origin:left center; transition:transform .45s cubic-bezier(0.16,1,0.3,1); }
        .sx-pc:hover { transform:translateY(-7px); box-shadow:0 30px 64px rgba(124,58,237,0.16); border-color:${VIOLET}44; }
        .sx-pc:hover::before { transform:scaleX(1); }
        .sx-pc-no { position:absolute; top:clamp(10px,1.4vw,18px); right:clamp(16px,2vw,26px); font-size:clamp(40px,5vw,74px); font-weight:900;
          letter-spacing:-0.05em; color:${VIOLET}; opacity:0.09; line-height:1; font-variant-numeric:tabular-nums; pointer-events:none; }
        .sx-pc-ic { position:relative; width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${VIOLET}29,${VIOLET}0d); color:${VIOLET}; margin-bottom:16px; transition:transform .35s cubic-bezier(0.16,1,0.3,1); }
        .sx-pc:hover .sx-pc-ic { transform:scale(1.08) rotate(-4deg); }
        .sx-pc-t { position:relative; font-size:clamp(17px,1.5vw,23px); font-weight:900; letter-spacing:-0.025em; color:${NAVY}; margin:0 0 9px; }
        .sx-pc-d { position:relative; font-size:clamp(13px,1vw,15px); line-height:1.65; color:rgba(8,33,60,0.55); margin:0; }
        .sx-pc-go { position:absolute; bottom:clamp(20px,2.2vw,28px); right:clamp(20px,2.2vw,28px); opacity:0; transform:translate(-6px,6px);
          color:${VIOLET}; transition:opacity .35s, transform .35s; pointer-events:none; }
        .sx-pc:hover .sx-pc-go { opacity:1; transform:translate(0,0); }

        /* mini checklist inside cards */
        .sx-mini { position:relative; list-style:none; margin:18px 0 0; padding:18px 0 0; border-top:1px solid rgba(8,33,60,0.1);
          display:grid; grid-template-columns:1fr 1fr; gap:10px 18px; }
        @media (max-width:520px){ .sx-mini{ grid-template-columns:1fr; } }
        .sx-mini li { display:flex; align-items:center; gap:8px; font-size:clamp(12.5px,0.95vw,14px); font-weight:600; color:rgba(8,33,60,0.6); }
        .sx-mini li svg { color:${VIOLET}; flex-shrink:0; }

        /* AI dark glowing grid */
        .sx-ai { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:980px){ .sx-ai{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:540px){ .sx-ai{ grid-template-columns:1fr; } }
        .sx-aicard { position:relative; overflow:hidden; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:20px;
          padding:clamp(22px,2.2vw,32px); height:100%; transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .sx-aicard::before { content:''; position:absolute; top:-40%; right:-30%; width:82%; height:120%; border-radius:50%;
          background:radial-gradient(circle, ${VIOLET}4d, transparent 62%); opacity:0; transition:opacity .4s; pointer-events:none; }
        .sx-aicard:hover { transform:translateY(-6px); border-color:rgba(255,255,255,0.2); box-shadow:0 30px 64px -28px rgba(0,0,0,0.55); }
        .sx-aicard:hover::before { opacity:0.7; }
        .sx-aicard-ic { position:relative; width:50px; height:50px; border-radius:14px; background:linear-gradient(150deg,${VIOLET},${VIOLET2}); color:#fff;
          display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
        .sx-aicard-t { position:relative; font-size:clamp(16px,1.4vw,20px); font-weight:900; letter-spacing:-0.025em; color:#fff; margin:0 0 9px; }
        .sx-aicard-d { position:relative; font-size:clamp(12.5px,0.98vw,14.5px); line-height:1.6; color:rgba(255,255,255,0.6); margin:0; }

        /* benefits checklist (light) */
        .sx-benlist { display:grid; grid-template-columns:repeat(2,1fr); gap:0 clamp(24px,3vw,52px); margin-top:clamp(34px,4vw,52px); }
        @media (max-width:680px){ .sx-benlist{ grid-template-columns:1fr; } }
        .sx-benrow { display:flex; align-items:center; gap:13px; padding:15px 0; border-bottom:1px solid rgba(8,33,60,0.09);
          font-size:clamp(14px,1.05vw,16px); font-weight:600; color:rgba(8,33,60,0.74); }
        .sx-benrow svg { color:${VIOLET}; flex-shrink:0; }

        /* ── Defense-in-depth layers ── */
        .sx-layers { margin-top:clamp(36px,4vw,56px); border:1px solid rgba(8,33,60,0.1); border-radius:22px; overflow:hidden; background:#fff;
          box-shadow:0 4px 30px rgba(8,33,60,0.05); }
        .sx-layer { position:relative; display:grid; grid-template-columns:auto auto minmax(0,1fr) auto; gap:clamp(14px,2.2vw,38px); align-items:center;
          padding:clamp(22px,2.6vw,36px) clamp(20px,2.4vw,40px); border-top:1px solid rgba(8,33,60,0.09); transition:background .35s; }
        .sx-layer:first-child { border-top:none; }
        .sx-layer::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:${VIOLET};
          transform:scaleY(0); transform-origin:top center; transition:transform .4s cubic-bezier(0.16,1,0.3,1); }
        .sx-layer:hover { background:linear-gradient(90deg,${VIOLET}0a,transparent 55%); }
        .sx-layer:hover::before { transform:scaleY(1); }
        .sx-lmark { display:flex; flex-direction:column; align-items:center; gap:8px; min-width:clamp(32px,3vw,46px); }
        .sx-lcode { font-family:ui-monospace,monospace; font-size:clamp(12px,1vw,15px); font-weight:800; letter-spacing:1px; color:${VIOLET}; }
        .sx-lbar { width:4px; height:clamp(34px,4.4vw,60px); border-radius:99px; background:${VIOLET}; }
        .sx-licon { width:clamp(46px,4.4vw,60px); height:clamp(46px,4.4vw,60px); border-radius:15px; flex-shrink:0;
          background:linear-gradient(150deg,${VIOLET}29,${VIOLET}0d); color:${VIOLET}; display:flex; align-items:center; justify-content:center;
          transition:transform .35s cubic-bezier(0.16,1,0.3,1); }
        .sx-layer:hover .sx-licon { transform:scale(1.08) rotate(-4deg); }
        .sx-ldom { display:block; font-family:ui-monospace,monospace; font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:rgba(8,33,60,0.42); margin-bottom:6px; }
        .sx-lname { font-size:clamp(18px,1.9vw,30px); font-weight:900; letter-spacing:-0.03em; line-height:1; color:${NAVY}; margin:0; }
        .sx-ldesc { font-size:clamp(13px,1vw,15px); line-height:1.6; color:rgba(8,33,60,0.55); margin:8px 0 0; max-width:54ch; }
        .sx-lchips { display:flex; flex-wrap:wrap; gap:7px; justify-content:flex-end; max-width:clamp(170px,22vw,320px); }
        @media (max-width:820px){
          .sx-layer { grid-template-columns:auto 1fr; gap:14px 18px; padding:clamp(22px,5vw,30px) clamp(18px,4vw,26px); }
          .sx-lmark { flex-direction:row; }
          .sx-ltext { grid-column:1 / -1; }
          .sx-lchips { grid-column:1 / -1; justify-content:flex-start; max-width:none; }
        }

        /* ── Integration node rail ── */
        .sx-rail { position:relative; display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(20px,3vw,40px); margin-top:clamp(44px,5vw,68px); }
        .sx-rail::before { content:''; position:absolute; top:clamp(30px,3.3vw,44px); left:16%; right:16%; height:2px;
          background:linear-gradient(90deg,${VIOLET}33,${VIOLET},${VIOLET}33); }
        @media (max-width:760px){ .sx-rail{ grid-template-columns:1fr; gap:clamp(28px,7vw,40px); } .sx-rail::before{ display:none; } }
        .sx-node { text-align:center; }
        .sx-node-dot { position:relative; z-index:1; width:clamp(62px,6.6vw,88px); height:clamp(62px,6.6vw,88px); border-radius:50%;
          margin:0 auto clamp(18px,2vw,26px); background:#fff; border:2px solid ${VIOLET}; color:${VIOLET};
          display:flex; align-items:center; justify-content:center; box-shadow:0 12px 32px -12px ${VIOLET}80;
          transition:transform .35s cubic-bezier(0.16,1,0.3,1), background .35s, color .35s; }
        .sx-node:hover .sx-node-dot { transform:translateY(-6px); background:${VIOLET}; color:#fff; }
        .sx-node-t { font-size:clamp(17px,1.6vw,23px); font-weight:900; letter-spacing:-0.025em; color:${NAVY}; margin:0 0 8px; }
        .sx-node-d { font-size:clamp(13px,1vw,15px); line-height:1.6; color:rgba(8,33,60,0.55); margin:0 auto; max-width:34ch; }

        @media (prefers-reduced-motion:reduce){ .sec-panel,.sec-plive i,.q-emblem::before,.q-emblem::after { animation:none; } }
      `}</style>

      {/* ── Hero (shared) ── */}
      <section className="sec-shell sec-hero">
        <div className="sec-hgrid">
          <Reveal>
            <Eyebrow>Security & Integration</Eyebrow>
            <h1 className="sec-h1">Secure &<br /><span>connected.</span></h1>
            <p className="sec-intro">
              AI-driven threat detection, modern identity, seamless integrations and the right Microsoft licensing - so your data stays safe and your systems stay connected.
            </p>
            <div className="sec-cta">
              <button className="sec-bp" onClick={() => navigate('/contact')}>
                Secure my business
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
              </button>
              <button className="sec-bg" onClick={() => navigate('/services')}>See our services</button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="sec-panel" aria-hidden="true">
              <div className="sec-ptop">
                <span className="sec-ptitle">Threat Monitor</span>
                <span className="sec-plive"><i />Active</span>
              </div>
              <div className="sec-shield">
                <div className="sec-shield-ic"><ShieldCheck size={22} /></div>
                <div>
                  <div className="sec-shield-k">System status</div>
                  <div className="sec-shield-v">Protected · 178 threats blocked today</div>
                </div>
              </div>
              <div className="sec-feed">
                {FEED.map(([name, status, color]) => (
                  <div key={name} className="sec-frow">
                    <span className="sec-fname"><b style={{ background: color }} />{name}</span>
                    <span className="sec-fbadge" style={{ color, background: `${color}1f` }}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="sec-stats">
          {STATS.map((s, i) => (
            <Reveal key={i}><div className="sec-sv">{s.node}</div><div className="sec-sl">{s.label}</div></Reveal>
          ))}
        </div>
      </section>

      {/* ── What we deliver ── */}
      <section className="sec-cap alt">
        <div className="sec-shell">
          <Reveal>
            <Eyebrow>What we deliver</Eyebrow>
            <h2 className="sec-h2">Four pillars,<br />one <span>shield.</span></h2>
            <p className="sec-lead">Protection and connection that surround your business from every angle.</p>
          </Reveal>

          <div className="q-grid">
            {CAPS.map((c, i) => {
              const Ic = c.icon
              return (
                <Reveal key={c.title} delay={Math.min(i * 0.06, 0.24)} className={`q-card q-c${i + 1}`}>
                  <div className="q-top">
                    <div className="sec-ic"><Ic size={22} /></div>
                    <h3 className="sec-ct" style={{ fontSize: 'clamp(17px,1.6vw,22px)' }}>{c.title}</h3>
                    <span className="q-no">{c.no}</span>
                  </div>
                  <p className="sec-cd">{c.desc}</p>
                  <div className="q-tags">{c.items.map(it => <span key={it} className="sec-pill"><i />{it}</span>)}</div>
                </Reveal>
              )
            })}
            <Reveal className="q-shield" delay={0.1}>
              <div className="q-emblem"><ShieldCheck size={52} strokeWidth={1.6} /></div>
              <div className="q-elabel">Protected</div>
              <div className="q-esub">Zero-trust by default</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cyber Security (detailed) ── */}
      <section className="sx-sec">
        <div className="sec-shell">
          <Reveal>
            <Eyebrow>Cyber Security</Eyebrow>
            <h2 className="sec-h2">Defence in<br /><span>depth.</span></h2>
            <p className="sec-lead">Four layers of Microsoft protection, from the identity perimeter to your data core - so a threat that slips one layer still meets the next.</p>
          </Reveal>
          <Reveal>
            <div className="sx-layers">
              {CYBER.map((c, i) => {
                const Ic = c.icon
                return (
                  <div key={c.t} className="sx-layer">
                    <div className="sx-lmark">
                      <span className="sx-lcode">L{i + 1}</span>
                      <span className="sx-lbar" style={{ opacity: 0.45 + i * 0.18 }} />
                    </div>
                    <div className="sx-licon"><Ic size={24} /></div>
                    <div className="sx-ltext">
                      <span className="sx-ldom">{c.domain}</span>
                      <h3 className="sx-lname">{c.t}</h3>
                      <p className="sx-ldesc">{c.d}</p>
                    </div>
                    <div className="sx-lchips">{c.items.map(it => <span key={it} className="sec-pill"><i />{it}</span>)}</div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── AI Cyber Security (dark) ── */}
      <section className="sx-sec dark">
        <div className="sec-shell">
          <Reveal>
            <Eyebrow light>AI Cyber Security</Eyebrow>
            <h2 className="sec-h2">Intelligence that<br /><span>defends.</span></h2>
            <p className="sec-lead">Harness AI to strengthen security operations, automate workflows and boost productivity across your business.</p>
          </Reveal>
          <div className="sx-ai">
            {AICYBER.map((a, i) => {
              const Ic = a.icon
              return (
                <Reveal key={a.t} delay={Math.min(i * 0.07, 0.28)}>
                  <div className="sx-aicard">
                    <div className="sx-aicard-ic"><Ic size={23} /></div>
                    <h3 className="sx-aicard-t">{a.t}</h3>
                    <p className="sx-aicard-d">{a.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Integration ── */}
      <section className="sx-sec alt">
        <div className="sec-shell">
          <Reveal>
            <Eyebrow>Integration</Eyebrow>
            <h2 className="sec-h2">Systems that<br /><span>work as one.</span></h2>
            <p className="sec-lead">Connect your applications, automate workflows and create a seamless flow of information across your organization.</p>
          </Reveal>
          <div className="sx-rail">
            {INTEGRATION.map((it, i) => {
              const Ic = it.icon
              return (
                <Reveal key={it.t} delay={Math.min(i * 0.1, 0.2)} className="sx-node">
                  <div className="sx-node-dot"><Ic size={28} /></div>
                  <h3 className="sx-node-t">{it.t}</h3>
                  <p className="sx-node-d">{it.d}</p>
                </Reveal>
              )
            })}
          </div>
          <Reveal><h3 className="sx-h3">Integration benefits</h3></Reveal>
          <div className="sx-benlist">
            {INTEGRATION_BENEFITS.map(b => <div key={b} className="sx-benrow"><Check size={17} />{b}</div>)}
          </div>
        </div>
      </section>

      {/* ── Microsoft Licensing ── */}
      <section className="sx-sec">
        <div className="sec-shell">
          <Reveal>
            <Eyebrow>Microsoft Licensing</Eyebrow>
            <h2 className="sec-h2">The right licences,<br /><span>maximum value.</span></h2>
            <p className="sec-lead">Get the right Microsoft licences for your organization while maximizing value and ensuring compliance.</p>
          </Reveal>
          <div className="sx-grid3">
            {LICENSING.map((l, i) => {
              const Ic = l.icon
              return (
                <Reveal key={l.t} delay={Math.min(i * 0.07, 0.24)}>
                  <div className="sx-pc">
                    <div className="sx-pc-ic"><Ic size={23} /></div>
                    <h3 className="sx-pc-t">{l.t}</h3>
                    <p className="sx-pc-d">{l.d}</p>
                    <ArrowUpRight className="sx-pc-go" size={20} />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Ready When You Are" heading="Lock it down," highlight="connect it up." button="Secure my business" />
    </PageLayout>
  )
}
