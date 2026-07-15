import {
  BadgeCheck, ShieldCheck, ReceiptText, MapPin,
  Database, Zap, BarChart3, Users, Sparkles, TrendingUp,
  CheckSquare, Mail, FileCheck, FolderSync, Bell,
  Network, Search, Cloud, MessageSquare, PenTool,
  RefreshCw, Lock, Layers, Check,
} from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY } from '../_kit'
import { useNavigate } from 'react-router-dom'

/* ════════════════════════════════════════════════════════════════════════════
   SOLUTION PAGE - MICROSOFT 365 PRODUCTS
   Deep detail page for the Microsoft 365 practice: Microsoft 365, Power BI,
   Power Automate, SharePoint and Office 365. Microsoft brand palette accents.
   ════════════════════════════════════════════════════════════════════════════ */

const MSBLUE = '#2563eb'
const T_RED = '#f25022'
const T_GRN = '#7fba00'
const T_BLU = '#00a4ef'
const T_YLW = '#ffb900'

const STATS: [string, string][] = [
  ['22+', 'Microsoft clients'],
  ['10+', '365 apps deployed'],
  ['100%', 'Certified team'],
  ['24/7', 'Managed support'],
]

/* Microsoft 365 apps */
const APPS = [
  { ab: 'T', name: 'Teams', d: 'Communication and collaboration', c: '#6264A7' },
  { ab: 'W', name: 'Word', d: 'Document creation and editing', c: '#2B579A' },
  { ab: 'X', name: 'Excel', d: 'Data analysis and reporting', c: '#217346' },
  { ab: 'P', name: 'PowerPoint', d: 'Professional presentations', c: '#C43E1C' },
  { ab: 'O', name: 'Outlook', d: 'Email and calendar', c: '#0078D4' },
  { ab: 'N', name: 'OneNote', d: 'Digital note-taking', c: '#7719AA' },
  { ab: 'D', name: 'OneDrive', d: 'Secure cloud storage', c: '#0364B8' },
  { ab: 'S', name: 'Defender', d: 'Advanced security and protection', c: '#00A4EF' },
  { ab: 'G', name: 'Designer', d: 'AI-powered graphic design', c: '#8B5CF6' },
  { ab: 'C', name: 'Clipchamp', d: 'Easy video creation', c: '#6B4FBB' },
]

const M365_BENEFITS = [
  'Work securely from anywhere',
  'Improve team collaboration',
  'Boost productivity across departments',
  'Access files on any device',
  'Enterprise-grade data security',
  'Scale easily as you grow',
]

/* Dynamics 365 - why / services / benefits */
const D365_WHY = [
  { icon: Network, t: 'Unify Your Business Operations', d: 'Connect people, processes and data across departments with a single, integrated platform.',
    items: ['Centralized business data', 'Improved collaboration across teams', 'Real-time visibility into operations', 'Better decisions with actionable insights'] },
  { icon: RefreshCw, t: 'Automate and Optimize', d: 'Reduce manual work and improve efficiency through intelligent workflows and AI-powered automation.',
    items: ['Automated business processes', 'Increased productivity', 'Reduced operational costs', 'Faster response times'] },
  { icon: TrendingUp, t: 'Grow with Confidence', d: 'Scale your business with flexible solutions that evolve alongside your needs.',
    items: ['Cloud-based accessibility', 'Enterprise-grade security', 'Seamless Microsoft ecosystem integration', 'Built for businesses of all sizes'] },
]
const D365_SVC = [
  { icon: BarChart3, no: '01', t: 'Sales', d: 'Empower sales teams to manage leads, track opportunities, build relationships and close deals faster.' },
  { icon: MessageSquare, no: '02', t: 'Customer Service', d: 'Deliver exceptional experiences through intelligent case management, support automation and personalized service.' },
  { icon: MapPin, no: '03', t: 'Field Service', d: 'Optimize field operations with scheduling, work order management, technician tracking and real-time updates.' },
  { icon: ReceiptText, no: '04', t: 'Finance', d: 'Gain control over financial operations with automated accounting, budgeting, forecasting, reporting and compliance.' },
  { icon: Network, no: '05', t: 'Supply Chain', d: 'Improve inventory visibility, streamline procurement, optimize logistics and build a more resilient supply chain.' },
  { icon: Layers, no: '06', t: 'Business Central', d: 'A complete management solution for SMBs - finance, operations, sales and service in one platform.' },
]
const D365_BENEFITS = [
  'Strengthen customer relationships',
  'Improve operational efficiency',
  'Automate repetitive tasks',
  'Gain real-time business insights',
  'Enhance team productivity',
  'Improve financial visibility',
  'Scale as your business grows',
  'Integrate with Microsoft 365 and Power Platform',
]

/* Power BI - how it helps */
const PBI_HELP = [
  { icon: Database, t: 'Centralize all your data', d: 'Connect Excel, cloud apps and databases into one source of truth.' },
  { icon: Zap, t: 'Make faster decisions', d: 'Real-time dashboards give instant visibility into your key business metrics.' },
  { icon: BarChart3, t: 'Interactive dashboards', d: 'Turn complex spreadsheets into clear charts, graphs and visual reports.' },
  { icon: Sparkles, t: 'AI-powered discovery', d: 'Surface patterns, trends and opportunities - no technical expertise needed.' },
]

const PBI_SVC: [string, string, string][] = [
  ['01', 'Dashboard Development', 'Custom dashboards for your most important business metrics.'],
  ['02', 'Data Integration', 'Connect multiple platforms into one centralized environment.'],
  ['03', 'Business Reporting', 'Automated reports that replace slow, manual processes.'],
  ['04', 'Training & Support', 'Empower your team to use Power BI with confidence.'],
]

/* Power Automate */
const PA_DISCOVER = ['Process mining and analysis', 'Workflow optimization', 'Performance tracking', 'Data-driven insights']
const PA_FLOW = [
  { icon: CheckSquare, t: 'Approval Workflows', d: 'Route requests and sign-offs to the right people for faster decisions.' },
  { icon: Mail, t: 'Email Automation', d: 'Send notifications, reminders and follow-ups from set triggers.' },
  { icon: FileCheck, t: 'Document Processing', d: 'Automate data extraction, approvals, storage and document flows.' },
  { icon: FolderSync, t: 'Data Synchronization', d: 'Keep information consistent across systems in real time.' },
  { icon: Bell, t: 'Task & Notifications', d: 'Create tasks, assign owners and alert teams automatically.' },
]

/* SharePoint */
const SP_CAPS = [
  { icon: Network, t: 'Centralize knowledge', d: 'One organized home for documents, resources and company info.', items: ['Document management', 'Knowledge sharing', 'Secure file storage', 'Version control'] },
  { icon: Users, t: 'Improve collaboration', d: 'Teams work together seamlessly, wherever they are.', items: ['Collaboration sites', 'Shared workspaces', 'Real-time co-authoring', 'Communication portals'] },
  { icon: Search, t: 'AI knowledge discovery', d: 'Find information faster with intelligent, AI-powered search.', items: ['Intelligent search', 'Faster file access', 'Personalized suggestions', 'AI content discovery'] },
]
const SP_FEATURES = [
  { icon: Layers, t: 'Branded Intranet', d: 'A central hub for news, resources, policies and communications.' },
  { icon: Sparkles, t: 'Agents & Copilot', d: 'AI agents that answer questions and summarize content fast.' },
  { icon: FileCheck, t: 'Content Management', d: 'Permissions, versioning and approval workflows built in.' },
  { icon: RefreshCw, t: 'Process Automation', d: 'Integrate with Power Automate and Microsoft 365 apps.' },
]
const SP_BENEFITS = [
  'Securely share and manage content',
  'Improve cross-department collaboration',
  'Reduce information silos',
  'Enable remote and hybrid work',
  'Stronger security and compliance',
]

/* Office 365 */
const O365_AREAS = [
  { icon: PenTool, t: 'Create & collaborate', d: 'Build documents, sheets and decks together in real time.', items: ['Word', 'Excel', 'PowerPoint', 'OneNote'] },
  { icon: MessageSquare, t: 'Communicate', d: 'Keep everyone connected from anywhere.', items: ['Outlook email', 'Online meetings', 'Shared calendars', 'Instant messaging'] },
  { icon: Cloud, t: 'Store & share', d: 'Your files, available whenever you need them.', items: ['Cloud storage', 'Secure sharing', 'Any-device access', 'Auto synchronization'] },
]
const O365_MODERN = [
  { icon: RefreshCw, t: 'Hybrid Work Ready', d: 'Stay productive and connected from any location.' },
  { icon: Zap, t: 'Always Up to Date', d: 'Latest features and security, no costly upgrades.' },
  { icon: Lock, t: 'Built-In Security', d: 'Advanced protection, compliance and identity management.' },
  { icon: TrendingUp, t: 'Flexible & Scalable', d: 'Add users and storage as your business grows.' },
]
const O365_SVC = [
  'Consulting, planning & licensing',
  'Deployment, setup & configuration',
  'Email migration to Exchange Online',
  'Teams collaboration setup',
  'Security, compliance & access',
  'User training, adoption & support',
]

const VALUES = [
  { icon: BadgeCheck, t: 'Certified Expertise', d: 'A certified Microsoft partner team that lives in the ecosystem every day.' },
  { icon: ReceiptText, t: 'Licensing Optimised', d: 'We cut waste and unlock the right licences - including non-profit pricing.' },
  { icon: ShieldCheck, t: 'Secure By Default', d: 'Zero-trust, Microsoft Entra and Defender baked into every deployment.' },
  { icon: MapPin, t: 'Local & Accountable', d: 'One accountable team from kickoff through ongoing support.' },
]

const FLOAT_CHIPS = [
  { label: 'Power BI', c: T_YLW, style: { top: '6%', left: '-4%' } },
  { label: 'Teams', c: T_BLU, style: { top: '20%', right: '-6%' } },
  { label: 'SharePoint', c: MSBLUE, style: { bottom: '22%', left: '-8%' } },
  { label: 'Power Automate', c: T_GRN, style: { bottom: '6%', right: '-2%' } },
]

export function MicrosoftProducts() {
  const navigate = useNavigate()
  return (
    <PageLayout>
      <style>{`
        .msp-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .msp-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .msp-shell{ max-width:2440px; } }

        /* ── Hero ── */
        .msp-hero { position: relative; overflow: hidden; padding: clamp(36px,5vw,80px) 0 clamp(40px,5vw,72px); }
        .msp-hero::before { content:''; position:absolute; inset:0; z-index:0; pointer-events:none;
          background-image:radial-gradient(circle, rgba(8,33,60,0.055) 1px, transparent 1px); background-size:30px 30px;
          mask-image:radial-gradient(ellipse 60% 55% at 78% 18%, black, transparent 72%);
          -webkit-mask-image:radial-gradient(ellipse 60% 55% at 78% 18%, black, transparent 72%); }
        .msp-hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: clamp(36px,5vw,80px); align-items: center; }
        @media (max-width:920px){ .msp-hero-grid{ grid-template-columns:1fr; } .msp-hero-visual{ order:-1; } }
        .msp-badge { display:inline-flex; align-items:center; gap:9px; margin-top:18px; padding:8px 15px; border-radius:100px;
          background:${MSBLUE}12; border:1px solid ${MSBLUE}2e; font-size:12px; font-weight:800; letter-spacing:0.3px; color:${MSBLUE}; }
        .msp-h1 { font-size: clamp(52px,9.5vw,128px); font-weight:900; letter-spacing: 0.01em; line-height: 1; color:${NAVY}; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .msp-h1 span { color:${MSBLUE}; }
        .msp-intro { max-width:560px; font-size:clamp(15px,1.25vw,19px); line-height:1.8; color:rgba(8,33,60,0.58); margin:22px 0 0; }
        .msp-cta-row { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .msp-btn-p { display:inline-flex; align-items:center; gap:9px; background:${NAVY}; color:#fff; border:none; border-radius:100px;
          padding:15px 30px; font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:50px; transition:background .2s,transform .18s; will-change:transform; }
        .msp-btn-p:hover { background:${MSBLUE}; transform:translateY(-2px); }
        .msp-btn-g { background:#fff; color:${NAVY}; border:1.5px solid rgba(8,33,60,0.16); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:50px; transition:border-color .2s; }
        .msp-btn-g:hover { border-color:rgba(8,33,60,0.4); }

        /* Hero visual - Microsoft tile mosaic + floating product chips */
        .msp-hero-visual { position:relative; display:flex; align-items:center; justify-content:center; min-height:clamp(280px,34vw,420px); }
        .msp-orbit { position:absolute; width:clamp(280px,30vw,400px); height:clamp(280px,30vw,400px); border-radius:50%;
          background:radial-gradient(circle, ${MSBLUE}14 0%, transparent 65%); }
        .msp-tiles { position:relative; display:grid; grid-template-columns:1fr 1fr; gap:clamp(10px,1.4vw,18px);
          width:clamp(150px,17vw,220px); height:clamp(150px,17vw,220px); animation:msp-spin 13s ease-in-out infinite; will-change:transform; }
        @keyframes msp-spin { 0%,100%{ transform:rotate(-4deg); } 50%{ transform:rotate(4deg); } }
        .msp-tile { border-radius:clamp(12px,1.4vw,18px); box-shadow:0 16px 34px -16px rgba(8,33,60,0.4); animation:msp-pop 4.5s ease-in-out infinite; will-change:transform; }
        .msp-tile:nth-child(1){ background:${T_RED}; } .msp-tile:nth-child(2){ background:${T_GRN}; animation-delay:.4s; }
        .msp-tile:nth-child(3){ background:${T_BLU}; animation-delay:.8s; } .msp-tile:nth-child(4){ background:${T_YLW}; animation-delay:1.2s; }
        @keyframes msp-pop { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-8px); } }
        .msp-chip { position:absolute; display:inline-flex; align-items:center; gap:7px; background:#fff; border:1px solid rgba(8,33,60,0.1);
          box-shadow:0 12px 30px -12px rgba(8,33,60,0.3); border-radius:100px; padding:8px 14px; font-size:13px; font-weight:700; color:${NAVY};
          animation:msp-float 6s ease-in-out infinite; will-change:transform; }
        .msp-chip i { width:8px; height:8px; border-radius:50%; flex-shrink:0; font-style:normal; }
        @keyframes msp-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-10px); } }

        /* ── Stats band ── */
        .msp-stats { position:relative; z-index:1; display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(16px,3vw,40px); margin-top:clamp(36px,4vw,60px);
          padding-top:clamp(28px,3vw,40px); border-top:1px solid rgba(8,33,60,0.12); }
        @media (max-width:680px){ .msp-stats{ grid-template-columns:repeat(2,1fr); gap:28px 16px; } }
        .msp-sv { font-size:clamp(32px,4vw,58px); font-weight:900; letter-spacing:-0.05em; color:${NAVY}; line-height:1; }
        .msp-sl { font-size:clamp(11px,0.85vw,13px); font-weight:800; letter-spacing:1.6px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(8,33,60,0.42); margin-top:8px; }

        /* ── Section ── */
        .msp-sec { padding: clamp(56px,7vw,118px) 0; }
        .msp-sec.alt { background:#fff; }
        .msp-sec.d365 { position:relative; overflow:hidden;
          background:linear-gradient(180deg, #f6f9ff 0%, #fbfcff 100%); }
        .msp-sec.d365::before { content:''; position:absolute; top:-14%; left:-7%; width:min(560px,54vw); height:min(560px,54vw);
          border-radius:50%; background:radial-gradient(circle, ${MSBLUE}14, transparent 64%); pointer-events:none; }
        .msp-sec.d365 .msp-shell { position:relative; z-index:1; }
        .msp-sec.dark { background:${NAVY}; position:relative; overflow:hidden; }
        .msp-sec.dark::before { content:''; position:absolute; top:-22%; right:-10%; width:min(620px,60vw); height:min(620px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${T_BLU}24, transparent 65%); pointer-events:none; }
        .msp-sec.dark .msp-shell { position:relative; z-index:1; }
        .msp-sec.dark .msp-h2 { color:#fff; }
        .msp-sec.dark .msp-h2 span { color:${T_BLU}; }
        .msp-sec.dark .msp-h3 { color:#fff; }
        .msp-sec.dark .msp-lead { color:rgba(255,255,255,0.62); }
        .msp-h2 { font-size:clamp(34px,4.6vw,76px); font-weight:900; letter-spacing: 0.01em; line-height: 1.04; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .msp-h2 span { color:${MSBLUE}; }
        .msp-h3 { font-size:clamp(22px,2.6vw,40px); font-weight:900; letter-spacing: 0.01em; line-height: 1.12; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:clamp(48px,6vw,82px) 0 0; }
        .msp-lead { max-width:600px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.55); margin:16px 0 0; }

        /* ── Microsoft 365 apps ── */
        .msp-apps { display:grid; grid-template-columns:repeat(5,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:980px){ .msp-apps{ grid-template-columns:repeat(3,1fr); } }
        @media (max-width:560px){ .msp-apps{ grid-template-columns:repeat(2,1fr); } }
        .msp-app { background:#fafbfd; border:1px solid rgba(8,33,60,0.08); border-radius:18px; padding:clamp(18px,1.8vw,26px);
          transition:transform .3s cubic-bezier(0.16,1,0.3,1), box-shadow .3s; will-change:transform; }
        .msp-app:hover { transform:translateY(-5px); box-shadow:0 20px 44px rgba(8,33,60,0.12); }
        .msp-app-ic { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:900; font-size:18px; margin-bottom:14px; }
        .msp-app-n { font-size:clamp(15px,1.1vw,18px); font-weight:900; letter-spacing:-0.02em; color:${NAVY}; margin:0 0 4px; }
        .msp-app-d { font-size:clamp(12px,0.9vw,13.5px); line-height:1.5; color:rgba(8,33,60,0.5); margin:0; }

        /* ── Benefit chips ── */
        .msp-chips { display:flex; flex-wrap:wrap; gap:10px; margin-top:clamp(40px,5vw,64px); }
        .msp-chk { display:inline-flex; align-items:center; gap:9px; background:#fafbfd; border:1px solid rgba(8,33,60,0.1); border-radius:100px;
          padding:11px 18px; font-size:clamp(13px,1vw,15px); font-weight:700; color:${NAVY}; }
        .msp-chk svg { color:${MSBLUE}; flex-shrink:0; }
        .msp-sec.dark .msp-chk { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.12); color:#fff; }
        .msp-sec.dark .msp-chk svg { color:${T_BLU}; }

        /* ── Feature cards (Power BI / SharePoint / Office 365) ── */
        .msp-feats { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        .msp-feats.c3 { grid-template-columns:repeat(3,1fr); }
        @media (max-width:980px){ .msp-feats{ grid-template-columns:repeat(2,1fr); } .msp-feats.c3{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:600px){ .msp-feats, .msp-feats.c3{ grid-template-columns:1fr; } }
        .msp-feat { background:#fff; border:1px solid rgba(8,33,60,0.08); border-radius:20px; padding:clamp(22px,2.2vw,30px);
          box-shadow:0 4px 22px rgba(8,33,60,0.05); transition:transform .3s cubic-bezier(0.16,1,0.3,1), box-shadow .3s; will-change:transform; }
        .msp-sec.alt .msp-feat { background:#fafbfd; }
        .msp-feat:hover { transform:translateY(-5px); box-shadow:0 22px 50px rgba(8,33,60,0.12); }
        .msp-feat-ic { width:48px; height:48px; border-radius:13px; background:${MSBLUE}14; color:${MSBLUE};
          display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
        .msp-feat-t { font-size:clamp(16px,1.4vw,21px); font-weight:900; letter-spacing:-0.02em; color:${NAVY}; margin:0 0 8px; }
        .msp-feat-d { font-size:clamp(13px,1vw,15px); line-height:1.65; color:rgba(8,33,60,0.55); margin:0; }
        .msp-sec.dark .msp-feat { background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.1); box-shadow:none; }
        .msp-sec.dark .msp-feat-ic { background:rgba(0,164,239,0.16); color:${T_BLU}; }
        .msp-sec.dark .msp-feat-t { color:#fff; }
        .msp-sec.dark .msp-feat-d { color:rgba(255,255,255,0.58); }

        /* mini list inside feature cards */
        .msp-mini-list { list-style:none; margin:16px 0 0; padding:16px 0 0; border-top:1px solid rgba(8,33,60,0.1); display:flex; flex-direction:column; gap:9px; }
        .msp-mini-list li { display:flex; align-items:center; gap:9px; font-size:clamp(12.5px,0.95vw,14px); font-weight:600; color:rgba(8,33,60,0.6); }
        .msp-mini-list li i { width:5px; height:5px; border-radius:50%; background:${MSBLUE}; flex-shrink:0; }
        .msp-sec.dark .msp-mini-list { border-top-color:rgba(255,255,255,0.12); }
        .msp-sec.dark .msp-mini-list li { color:rgba(255,255,255,0.6); }
        .msp-sec.dark .msp-mini-list li i { background:${T_BLU}; }

        /* ── Numbered service cards ── */
        .msp-svc { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(32px,3vw,44px); }
        @media (max-width:880px){ .msp-svc{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:560px){ .msp-svc{ grid-template-columns:1fr; } }
        .msp-svc-card { background:#fff; border:1px solid rgba(8,33,60,0.08); border-radius:18px; padding:clamp(20px,2vw,28px);
          transition:transform .3s cubic-bezier(0.16,1,0.3,1), box-shadow .3s; will-change:transform; }
        .msp-svc-card:hover { transform:translateY(-4px); box-shadow:0 20px 44px rgba(8,33,60,0.1); }
        .msp-svc-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
        .msp-svc-ic { width:46px; height:46px; border-radius:13px; background:${MSBLUE}14; color:${MSBLUE};
          display:flex; align-items:center; justify-content:center; transition:transform .35s cubic-bezier(0.16,1,0.3,1), background .3s; }
        .msp-svc-card:hover .msp-svc-ic { transform:scale(1.08) rotate(-4deg); background:${MSBLUE}22; }
        .msp-svc-no { font-size:13px; font-weight:900; font-family:ui-monospace,monospace; color:${MSBLUE}; }
        .msp-svc-t { font-size:clamp(16px,1.3vw,19px); font-weight:900; letter-spacing:-0.02em; color:${NAVY}; margin:8px 0 7px; }
        .msp-svc-d { font-size:clamp(13px,0.95vw,14.5px); line-height:1.6; color:rgba(8,33,60,0.55); margin:0; }

        /* ── Power Automate split ── */
        .msp-pa { display:grid; grid-template-columns:0.82fr 1.18fr; gap:clamp(20px,3vw,44px); margin-top:clamp(36px,4vw,56px); align-items:start; }
        @media (max-width:880px){ .msp-pa{ grid-template-columns:1fr; } }
        .msp-disc { background:#fafbfd; border:1px solid rgba(8,33,60,0.1); border-radius:22px; padding:clamp(24px,2.6vw,38px); }
        .msp-disc-t { font-size:clamp(18px,1.6vw,24px); font-weight:900; letter-spacing:-0.02em; color:${NAVY}; margin:0; }
        .msp-disc-d { font-size:clamp(13px,1vw,15px); line-height:1.65; color:rgba(8,33,60,0.55); margin:8px 0 0; }
        .msp-list { list-style:none; margin:20px 0 0; padding:0; display:flex; flex-direction:column; gap:13px; }
        .msp-list li { display:flex; align-items:center; gap:11px; font-size:clamp(14px,1.05vw,16px); font-weight:600; color:rgba(8,33,60,0.72); }
        .msp-list li svg { color:${MSBLUE}; flex-shrink:0; }
        .msp-flow { display:flex; flex-direction:column; gap:12px; }
        .msp-flow-item { display:flex; gap:16px; align-items:flex-start; background:#fff; border:1px solid rgba(8,33,60,0.08); border-radius:16px;
          padding:clamp(16px,1.6vw,22px); transition:transform .25s, box-shadow .25s; will-change:transform; }
        .msp-flow-item:hover { transform:translateX(4px); box-shadow:0 14px 34px rgba(8,33,60,0.1); }
        .msp-flow-ic { flex-shrink:0; width:44px; height:44px; border-radius:12px; background:${MSBLUE}14; color:${MSBLUE}; display:flex; align-items:center; justify-content:center; }
        .msp-flow-t { font-size:clamp(15px,1.2vw,18px); font-weight:900; letter-spacing:-0.02em; color:${NAVY}; margin:0 0 4px; }
        .msp-flow-d { font-size:clamp(13px,0.95vw,14.5px); line-height:1.55; color:rgba(8,33,60,0.55); margin:0; }

        /* ── Office 365 services checklist ── */
        .msp-checks { display:grid; grid-template-columns:repeat(2,1fr); gap:0 clamp(20px,3vw,48px); margin-top:clamp(32px,3vw,44px); }
        @media (max-width:680px){ .msp-checks{ grid-template-columns:1fr; } }
        .msp-check { display:flex; align-items:center; gap:13px; padding:15px 0; border-bottom:1px solid rgba(8,33,60,0.09);
          font-size:clamp(14px,1.05vw,16px); font-weight:600; color:rgba(8,33,60,0.74); }
        .msp-check svg { color:${MSBLUE}; flex-shrink:0; }

        /* ── Value cards ── */
        .msp-vals { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(40px,5vw,60px); }
        @media (max-width:980px){ .msp-vals{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:520px){ .msp-vals{ grid-template-columns:1fr; } }
        .msp-val { background:#fff; border:1px solid rgba(8,33,60,0.08); border-radius:20px; padding:clamp(22px,2.2vw,32px);
          box-shadow:0 4px 22px rgba(8,33,60,0.05); transition:transform .3s cubic-bezier(0.16,1,0.3,1), box-shadow .3s; will-change:transform; }
        .msp-val:hover { transform:translateY(-5px); box-shadow:0 22px 50px rgba(8,33,60,0.12); }
        .msp-val-ic { width:50px; height:50px; border-radius:14px; background:${MSBLUE}14; color:${MSBLUE};
          display:flex; align-items:center; justify-content:center; margin-bottom:18px; }
        .msp-val-t { font-size:clamp(17px,1.5vw,21px); font-weight:900; letter-spacing:-0.02em; color:${NAVY}; margin:0 0 9px; }
        .msp-val-d { font-size:clamp(13px,1vw,15px); line-height:1.68; color:rgba(8,33,60,0.55); margin:0; }

        @media (prefers-reduced-motion:reduce){ .msp-tiles,.msp-tile,.msp-chip{ animation:none !important; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="msp-shell msp-hero">
        <div className="msp-hero-grid">
          <Reveal>
            <Eyebrow>Microsoft 365 Solutions</Eyebrow>
            <h1 className="msp-h1">Microsoft,<br /><span>Mastered.</span></h1>
            <p className="msp-intro">
              Microsoft 365, Dynamics 365, Power BI, Power Automate, SharePoint and Office 365 - deployed, integrated and
              supported by a certified Microsoft Partner so your team works smarter from day one.
            </p>
            <div className="msp-badge"><BadgeCheck size={15} /> Certified Microsoft Partner</div>
            <div className="msp-cta-row">
              <button className="msp-btn-p" onClick={() => navigate('/contact')}>
                Talk to our team
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
              </button>
              <button className="msp-btn-g" onClick={() => navigate('/contact')}>Check your licensing</button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="msp-hero-visual">
            <div className="msp-orbit" aria-hidden="true" />
            <div className="msp-tiles" aria-hidden="true">
              <span className="msp-tile" /><span className="msp-tile" /><span className="msp-tile" /><span className="msp-tile" />
            </div>
            {FLOAT_CHIPS.map((ch, i) => (
              <span key={ch.label} className="msp-chip" style={{ ...ch.style, animationDelay: `${i * 0.7}s` }}>
                <i style={{ background: ch.c }} />{ch.label}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="msp-stats">
          {STATS.map(([v, l]) => (
            <Reveal key={l}><div className="msp-sv">{v}</div><div className="msp-sl">{l}</div></Reveal>
          ))}
        </div>
      </section>

      {/* ── Microsoft 365 ── */}
      <section className="msp-sec alt">
        <div className="msp-shell">
          <Reveal>
            <Eyebrow>Microsoft 365</Eyebrow>
            <h2 className="msp-h2">Everything your<br />team uses, <span>daily.</span></h2>
            <p className="msp-lead">
              One cloud platform that brings productivity, collaboration, communication and security together - so your
              team can work securely from anywhere.
            </p>
          </Reveal>
          <div className="msp-apps">
            {APPS.map((a, i) => (
              <Reveal key={a.name} delay={Math.min(i * 0.04, 0.32)}>
                <div className="msp-app">
                  <div className="msp-app-ic" style={{ background: a.c }}>{a.ab}</div>
                  <h3 className="msp-app-n">{a.name}</h3>
                  <p className="msp-app-d">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="msp-chips">
            {M365_BENEFITS.map(b => (
              <span key={b} className="msp-chk"><Check size={15} />{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dynamics 365 ── */}
      <section id="dynamics-365" className="msp-sec d365" style={{ scrollMarginTop: 90 }}>
        <div className="msp-shell">
          <Reveal>
            <Eyebrow>Dynamics 365</Eyebrow>
            <h2 className="msp-h2">Connect your business.<br />Empower every <span>team.</span></h2>
            <p className="msp-lead">
              Microsoft Dynamics 365 brings customers, sales, operations, finance and service together in one intelligent
              business platform - powered by AI, automation and real-time insights so you work efficiently, adapt faster
              and drive sustainable growth.
            </p>
          </Reveal>

          <Reveal><h3 className="msp-h3">Why Dynamics 365?</h3></Reveal>
          <div className="msp-feats c3">
            {D365_WHY.map((c, i) => {
              const Ic = c.icon
              return (
                <Reveal key={c.t} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="msp-feat">
                    <div className="msp-feat-ic"><Ic size={23} /></div>
                    <h3 className="msp-feat-t">{c.t}</h3>
                    <p className="msp-feat-d">{c.d}</p>
                    <ul className="msp-mini-list">
                      {c.items.map(it => <li key={it}><i />{it}</li>)}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal><h3 className="msp-h3">Our Dynamics 365 services</h3></Reveal>
          <div className="msp-svc">
            {D365_SVC.map((s, i) => {
              const Ic = s.icon
              return (
                <Reveal key={s.no} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="msp-svc-card">
                    <div className="msp-svc-top">
                      <div className="msp-svc-ic"><Ic size={22} /></div>
                      <span className="msp-svc-no">{s.no}</span>
                    </div>
                    <h4 className="msp-svc-t">{s.t}</h4>
                    <p className="msp-svc-d">{s.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="msp-chips">
            {D365_BENEFITS.map(b => (
              <span key={b} className="msp-chk"><Check size={15} />{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Power BI ── */}
      <section className="msp-sec dark">
        <div className="msp-shell">
          <Reveal>
            <Eyebrow light>Power BI</Eyebrow>
            <h2 className="msp-h2">Turn data into<br /><span>clear insight.</span></h2>
            <p className="msp-lead">
              We transform complex information into dashboards, interactive reports and real-time insights - so you make
              smarter decisions, faster.
            </p>
          </Reveal>
          <div className="msp-feats">
            {PBI_HELP.map((f, i) => {
              const Ic = f.icon
              return (
                <Reveal key={f.t} delay={Math.min(i * 0.05, 0.32)}>
                  <div className="msp-feat">
                    <div className="msp-feat-ic"><Ic size={23} /></div>
                    <h3 className="msp-feat-t">{f.t}</h3>
                    <p className="msp-feat-d">{f.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal><h3 className="msp-h3">Our Power BI services</h3></Reveal>
          <div className="msp-svc">
            {PBI_SVC.map(([no, t, d], i) => (
              <Reveal key={no} delay={Math.min(i * 0.05, 0.3)}>
                <div className="msp-svc-card">
                  <span className="msp-svc-no">{no}</span>
                  <h4 className="msp-svc-t">{t}</h4>
                  <p className="msp-svc-d">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Power Automate ── */}
      <section className="msp-sec alt">
        <div className="msp-shell">
          <Reveal>
            <Eyebrow>Power Automate</Eyebrow>
            <h2 className="msp-h2">Automate work.<br />Accelerate <span>growth.</span></h2>
            <p className="msp-lead">
              Build intelligent, low-code workflows that connect your systems, cut manual effort and free teams to focus
              on what matters most.
            </p>
          </Reveal>
          <div className="msp-pa">
            <Reveal>
              <div className="msp-disc">
                <h3 className="msp-disc-t">Discover opportunities</h3>
                <p className="msp-disc-d">Identify repetitive tasks and process bottlenecks across your business.</p>
                <ul className="msp-list">
                  {PA_DISCOVER.map(d => <li key={d}><Check size={17} />{d}</li>)}
                </ul>
              </div>
            </Reveal>
            <div className="msp-flow">
              {PA_FLOW.map((f, i) => {
                const Ic = f.icon
                return (
                  <Reveal key={f.t} delay={Math.min(i * 0.06, 0.3)}>
                    <div className="msp-flow-item">
                      <div className="msp-flow-ic"><Ic size={22} /></div>
                      <div>
                        <h4 className="msp-flow-t">{f.t}</h4>
                        <p className="msp-flow-d">{f.d}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SharePoint ── */}
      <section className="msp-sec">
        <div className="msp-shell">
          <Reveal>
            <Eyebrow>SharePoint</Eyebrow>
            <h2 className="msp-h2">Connect knowledge.<br />Simplify <span>teamwork.</span></h2>
            <p className="msp-lead">
              An intelligent workplace where teams collaborate efficiently, manage documents securely and find what they
              need to work smarter.
            </p>
          </Reveal>
          <div className="msp-feats c3">
            {SP_CAPS.map((c, i) => {
              const Ic = c.icon
              return (
                <Reveal key={c.t} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="msp-feat">
                    <div className="msp-feat-ic"><Ic size={23} /></div>
                    <h3 className="msp-feat-t">{c.t}</h3>
                    <p className="msp-feat-d">{c.d}</p>
                    <ul className="msp-mini-list">
                      {c.items.map(it => <li key={it}><i />{it}</li>)}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal><h3 className="msp-h3">Powerful features</h3></Reveal>
          <div className="msp-feats">
            {SP_FEATURES.map((f, i) => {
              const Ic = f.icon
              return (
                <Reveal key={f.t} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="msp-feat">
                    <div className="msp-feat-ic"><Ic size={23} /></div>
                    <h3 className="msp-feat-t">{f.t}</h3>
                    <p className="msp-feat-d">{f.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="msp-chips">
            {SP_BENEFITS.map(b => (
              <span key={b} className="msp-chk"><Check size={15} />{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office 365 ── */}
      <section className="msp-sec alt">
        <div className="msp-shell">
          <Reveal>
            <Eyebrow>Office 365</Eyebrow>
            <h2 className="msp-h2">The complete<br />productivity <span>suite.</span></h2>
            <p className="msp-lead">
              Communicate, collaborate, create and stay productive - in the office, at home or on the go - with
              cloud-powered apps and secure storage.
            </p>
          </Reveal>
          <div className="msp-feats c3">
            {O365_AREAS.map((a, i) => {
              const Ic = a.icon
              return (
                <Reveal key={a.t} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="msp-feat">
                    <div className="msp-feat-ic"><Ic size={23} /></div>
                    <h3 className="msp-feat-t">{a.t}</h3>
                    <p className="msp-feat-d">{a.d}</p>
                    <ul className="msp-mini-list">
                      {a.items.map(it => <li key={it}><i />{it}</li>)}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal><h3 className="msp-h3">Built for the modern workplace</h3></Reveal>
          <div className="msp-feats">
            {O365_MODERN.map((m, i) => {
              const Ic = m.icon
              return (
                <Reveal key={m.t} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="msp-feat">
                    <div className="msp-feat-ic"><Ic size={23} /></div>
                    <h3 className="msp-feat-t">{m.t}</h3>
                    <p className="msp-feat-d">{m.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal><h3 className="msp-h3">Our Office 365 services</h3></Reveal>
          <div className="msp-checks">
            {O365_SVC.map(s => (
              <div key={s} className="msp-check"><Check size={18} />{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why EG Digital ── */}
      <section className="msp-sec">
        <div className="msp-shell">
          <Reveal>
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="msp-h2">Microsoft partners<br />who <span>go further.</span></h2>
            <p className="msp-lead">We don’t just build reports and deploy apps - we help you create a data-driven, connected workplace.</p>
          </Reveal>
          <div className="msp-vals">
            {VALUES.map((v, i) => {
              const Ic = v.icon
              return (
                <Reveal key={v.t} delay={Math.min(i * 0.07, 0.3)}>
                  <div className="msp-val">
                    <div className="msp-val-ic"><Ic size={24} /></div>
                    <h3 className="msp-val-t">{v.t}</h3>
                    <p className="msp-val-d">{v.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Ready When You Are" heading="Get more from" highlight="Microsoft." button="Talk to our team" />
    </PageLayout>
  )
}
