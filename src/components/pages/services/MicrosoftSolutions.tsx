import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck, Users, SlidersHorizontal, MapPin, LayoutGrid, Cloud, Server,
  Database, Key, HardDrive, Headphones, Store, TrendingUp, Building2, Shield,
  Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, EASE } from '../_kit'
import { ElomaLink } from '../../../lib/elomaLink'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - MICROSOFT SOLUTIONS (Australia)
   Redesigned: dark navy hero with an animated Microsoft four-tile motion logo
   built in-page (authentic brand colours, compositor-only animation), Microsoft
   brand-colour accents cycling through cards, and a timeline process rail.
   Copy is verbatim from the approved page content.
   ════════════════════════════════════════════════════════════════════════════ */

// Official Microsoft brand tile colours.
const MS_RED    = '#F25022'
const MS_GREEN  = '#7FBA00'
const MS_BLUE   = '#00A4EF'
const MS_YELLOW = '#FFB900'
const MS_COLORS = [MS_BLUE, MS_GREEN, MS_YELLOW, MS_RED]

const PRODUCTS: { t: string; c: string }[] = [
  { t: 'Microsoft 365', c: MS_RED },
  { t: 'Azure', c: MS_BLUE },
  { t: 'Dynamics 365', c: MS_GREEN },
  { t: 'Power Platform', c: MS_YELLOW },
]

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: BadgeCheck,
    t: 'A certified partner, not a box-shifter',
    d: "Anyone can resell a Microsoft licence. The difference is what happens after. As a certified Microsoft Partner, we handle the deployment, the migration, the security configuration, and the ongoing support, so you get an environment that is set up correctly rather than a licence key and a link to Microsoft's help pages. We have deployed Microsoft 365, Azure, and Dynamics across Australian businesses, and we know where these projects usually go wrong.",
  },
  {
    icon: Users,
    t: 'One team for licensing, deployment, and support',
    d: 'You get consultants, engineers, and support staff who work together, not a licensing reseller who bills you and a separate IT company you have to brief every time something needs fixing. Because EG Digital also runs cloud, security, and software in-house, the Azure setup, the security hardening, and the integration into your other systems all get handled by the same team, in the same place.',
  },
  {
    icon: SlidersHorizontal,
    t: 'We right-size your licensing, not upsell it',
    d: 'Most businesses are paying for Microsoft seats they do not use: licences assigned to staff who left, people on higher tiers than they need, and add-ons nobody touches. We audit what you actually use and match each person to the right plan, which often means you spend less, not more. A reseller earns more when you buy more. We earn the relationship by getting your licensing right.',
  },
  {
    icon: MapPin,
    t: 'Local, accountable, and reachable',
    d: 'We are an Australian team in Melbourne, in your timezone, reachable when something needs attention. Offshore support can be cheaper, but the savings usually come with communication gaps and slow response when your email is down and your team cannot work. With EG Digital you get one number to call and one team answerable for the whole environment.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: LayoutGrid,
    t: 'Microsoft 365 consulting',
    paras: [
      'Microsoft 365 is more than Office and email, and most businesses use a fraction of what they pay for. We help you get the whole platform working: the right plans for your team, Exchange Online for email, Teams for collaboration, SharePoint and OneDrive for files, and the security and compliance controls that come with it. Whether you are moving to Microsoft 365 for the first time or trying to get more out of a setup that was never configured properly, we plan it, deploy it, and train your team so they actually use it.',
      "This is also where Copilot and Microsoft's AI tools come in. Copilot Chat is now built into the Microsoft 365 plans, and the paid Copilot licence adds AI assistance across Word, Excel, Outlook, and Teams. We help you work out whether Copilot is worth it for your team, set it up safely, and make sure your data is governed properly before you turn AI loose on it.",
    ],
  },
  {
    icon: Cloud,
    t: 'Microsoft Azure services',
    paras: [
      "Azure is Microsoft's cloud platform, and it runs everything from a single virtual server to your entire infrastructure. We plan, build, and manage Azure environments: virtual machines, storage, networking, backup and disaster recovery, and the security and cost controls that keep it from becoming an expensive mess. Azure bills on what you use, which is flexible but easy to overspend on if nobody is watching, so we set it up to scale with your business and keep an eye on the cost. As Azure managed services, we monitor, maintain, and optimise the environment rather than building it and handing you the keys.",
    ],
  },
  {
    icon: Server,
    t: 'Microsoft cloud solutions',
    paras: [
      'Moving to the Microsoft cloud is one of the biggest shifts a business makes, and it usually goes wrong in the migration. We handle the whole move: assessing what you have, planning the transition, migrating your data and workloads without losing anything, and making sure everything runs securely once it lands. Because EG Digital also does cloud hosting and cyber security, your migration is planned with security built in from the start rather than bolted on after. The goal is simple: you move to the cloud without business disruption, and it works properly on the other side.',
    ],
  },
  {
    icon: Database,
    t: 'Dynamics 365 (CRM and ERP)',
    paras: [
      "Dynamics 365 is Microsoft's business platform, and it covers both CRM (managing customers, sales, and service) and ERP (managing finance, operations, and supply chain). We implement and configure Dynamics around how your business actually works, not a generic template, and we connect it to your Microsoft 365, your Power Platform, and the other systems that run your business. This is where a lot of implementations quietly fall apart, because the platform is powerful but complex, and getting it to fit your processes takes real work. We do that work, and because Power BI and Power Automate live in the same family, we can add real-time reporting and automate the repetitive tasks that eat your team's time.",
    ],
  },
  {
    icon: Key,
    t: 'Licensing and migration',
    paras: [
      'Microsoft licensing is genuinely confusing, and the costs are going up: commercial Microsoft 365 pricing rose across most plans from 1 July 2026. We take the confusion off your plate. We advise on the right licences through the Cloud Solution Provider (CSP) model, which gives you flexible monthly or annual billing and one partner for licensing, support, and billing questions. When you are moving from another provider or an old agreement, we handle the migration carefully so there is no gap in your licences and no loss of email, files, or Teams data. Your data lives in your Microsoft tenant, not with your old reseller, and we make sure it stays intact through the move.',
    ],
  },
  {
    icon: HardDrive,
    t: 'Microsoft data recovery services',
    paras: [
      'When data is lost, corrupted, or hit by ransomware, getting it back fast is what matters. We help recover data across the Microsoft environment: Exchange Online mailboxes, SharePoint and OneDrive files, and the backups that should have been in place before anything went wrong. A common and dangerous assumption is that Microsoft 365 backs everything up for you. It does not, at least not the way most businesses assume, which is why we also set up proper backup and disaster recovery so a bad day stays a bad day instead of becoming a catastrophe. If you have lost data, we work to recover it. If you have not yet, we make sure you are protected before you do.',
    ],
  },
  {
    icon: Headphones,
    t: 'Managed Microsoft services and support',
    paras: [
      'A Microsoft environment is not finished at deployment. We monitor, maintain, secure, and support what we build, with the ongoing management that keeps it running rather than slowly breaking. That covers proactive monitoring, security updates, configuration changes, user support, and the day-to-day admin most businesses do not have the time or the in-house skill to keep on top of. One team that knows your environment, on call when you need them, so your staff can get on with their work instead of fighting with their tools.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need Microsoft set up properly without an enterprise IT budget or an in-house IT team. We handle the whole thing: the right plans, a clean setup, your data migrated safely, and ongoing support when you need it, with clear pricing and no seats you are not using. Start with what your team actually needs, and scale as you grow.',
  },
  {
    icon: TrendingUp,
    t: 'Growing and mid-sized businesses',
    d: 'As you grow, your Microsoft environment gets more complex: more users, more security to manage, more systems to connect. We bring the consulting and the engineering to keep it running cleanly, right-size the licensing as your headcount changes, and connect Microsoft to the other tools your business runs on, with one partner accountable for how it all fits.',
  },
  {
    icon: Building2,
    t: 'Established and enterprise businesses',
    d: 'For larger environments with Azure infrastructure, Dynamics implementations, and serious security and compliance requirements, you need a partner who can handle scale and stay accountable. We bring the technical depth across Microsoft 365, Azure, and Dynamics, the security posture, and the project management to deliver and run environments that hold up.',
  },
  {
    icon: Shield,
    t: 'Regulated industries',
    d: 'Healthcare, finance, government, and other regulated sectors have compliance requirements that most IT companies handle as an afterthought. We build Microsoft environments with security and compliance in from the start, using the controls in Microsoft 365 and Azure to meet your obligations, and because cyber security lives in the same team, it is handled properly rather than promised and forgotten.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Assessment and licensing review',
    d: 'We start by understanding your business and auditing what you currently have: your licences, your usage, and your setup. You get a clear read on whether you are on the right plans, where you are overspending, and what the right environment looks like, before anything changes.',
  },
  {
    t: 'Planning and design',
    d: 'We design the environment around how your business works: the right licences, the right configuration, and a migration plan that protects your data. You know the scope, the approach, and the timeline before we begin.',
  },
  {
    t: 'Deployment and migration',
    d: 'We deploy the environment and migrate your data carefully, with no gap in your licences and nothing lost in the move. You see progress as it happens, not a black box until it goes live.',
  },
  {
    t: 'Security and configuration',
    d: 'We harden the environment, set up the security and compliance controls, and configure everything to fit how your team works. This is the step that decides whether the setup is safe and usable or a problem waiting to happen.',
  },
  {
    t: 'Support and optimisation',
    d: 'After go-live we monitor, maintain, and support the environment, and we keep your licensing right as your business changes. One team that knows your setup, on call, keeping it running and keeping it cost-effective.',
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Microsoft Solutions in the UK',
    d: 'Our Microsoft services in the UK help businesses deploy, migrate, and manage Microsoft 365, Azure, and Dynamics 365 with the licensing, security, and support to match. We set the environment up properly and stay on to run it, so your Microsoft investment works rather than sitting half-configured.',
  },
  {
    t: 'Microsoft Solutions in the USA',
    d: 'Businesses looking for Microsoft solutions in the USA need a partner who handles deployment, migration, and ongoing management, not just licences. We implement and support Microsoft 365, Azure, and Dynamics across US businesses, with security and cost control built in from the start.',
  },
  {
    t: 'Microsoft Solutions in Canada',
    d: 'Our Microsoft services in Canada cover the full stack: Microsoft 365, Azure cloud, and Dynamics 365, deployed, secured, and managed. Whether you are migrating to the cloud or getting more out of an existing setup, we help Canadian businesses run Microsoft properly.',
  },
  {
    t: 'Microsoft Solutions in Singapore',
    d: "Singapore's businesses need Microsoft environments that are secure, well-configured, and properly supported. Our Microsoft services in Singapore cover deployment, migration, licensing, and ongoing management across Microsoft 365, Azure, and Dynamics 365.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is the difference between Microsoft 365 and a one-time Office purchase?',
    a: 'Microsoft 365 is a subscription billed per user per month, and it includes the always-updated Office apps plus the cloud services: business email through Exchange Online, Teams, SharePoint, OneDrive storage, and security features, with new features and fixes as they ship. A one-time Office purchase, like Office Home and Business 2024, is a single up-front payment for a fixed set of desktop apps on one device, with no cloud services, no ongoing feature updates, and no upgrade path to the next version. For most businesses, the subscription makes sense because email, collaboration, and security matter as much as the apps. The one-time purchase suits a narrow set of cases, and we are happy to tell you honestly which one fits.',
  },
  {
    q: 'Do you help move us from another Microsoft provider without losing data?',
    a: 'Yes, and it is safer than most people fear. Your data, your mailboxes, your files, and your Teams content live in your Microsoft tenant, not with your current reseller, so changing who supplies and manages your licences does not move or delete your data. The key is timing: we make sure your new licences are in place with no gap before the old ones expire, using equivalent products so nothing needs reassigning. Done in the right order, there is no loss of email or files and no disruption to your team. We handle the whole migration, including the licensing side through the CSP model, so you get flexible billing and one partner for everything afterward.',
  },
  {
    q: 'How much can we save by getting our Microsoft licensing right?',
    a: 'More than most businesses expect, because most are overpaying without knowing it. The common problems are licences still assigned to staff who have left, people sitting on higher-tier plans than their role needs, and add-ons nobody uses. A licensing review through the Microsoft admin centre surfaces this quickly, and matching each person to the right plan often cuts the bill rather than raising it. With the 1 July 2026 price increases now in effect on most plans, getting the mix right matters more than it did. We review what you actually use and recommend the right plan for each person, and because we are a certified partner rather than a reseller chasing volume, our incentive is to get it right, not to sell you more seats.',
  },
]

/* Animated Microsoft motion logo - the four brand tiles assemble with a spring,
   then keep a gentle staggered float. Transform/opacity only. */
function MotionLogo() {
  return (
    <div className="mso-panel" aria-label="Microsoft partner">
      <div className="mso-badge"><BadgeCheck size={14} /> Certified Microsoft Partner</div>
      <div className="mso-tiles">
        {MS_COLORS.map((c, i) => (
          <motion.span
            key={c}
            className="mso-tile-w"
            initial={{ opacity: 0, scale: 0.35, y: 26 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.25 + i * 0.14, type: 'spring', stiffness: 240, damping: 17 }}
          >
            <i className="mso-tile" style={{ background: c }} />
          </motion.span>
        ))}
      </div>
      <motion.div
        className="mso-word"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.85, duration: 0.7, ease: EASE }}
      >
        Microsoft
      </motion.div>
      <div className="mso-prods">
        {PRODUCTS.map((p, i) => (
          <motion.span
            key={p.t}
            className="mso-prod"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 1 + i * 0.09, duration: 0.55, ease: EASE }}
          >
            <i style={{ background: p.c }} />{p.t}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export function MicrosoftSolutions() {
  const navigate = useNavigate()

  // No global per-route meta helper exists, so set the document title here to
  // match the approved META TITLE for this page.
  useEffect(() => {
    const prev = document.title
    document.title = 'Microsoft Solutions in Australia | 365, Azure & Dynamics | EG Digital'
    return () => { document.title = prev }
  }, [])

  return (
    <PageLayout>
      <style>{`
        .mso-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .mso-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .mso-shell{ max-width:2440px; } }
        /* Mobile: drop the outer 96px gutter so content keeps a clean 24px bezel
           instead of a narrow centred column. */
        @media (max-width:768px){ .mso-shell{ max-width:100%; } }

        /* ── Hero (dark navy, Microsoft glow) ── */
        .mso-hero { position:relative; overflow:hidden; background:${NAVY};
          padding:clamp(48px,6vw,104px) clamp(24px,4vw,64px) clamp(48px,6vw,96px); }
        .mso-hero::before { content:''; position:absolute; top:-28%; right:-10%; width:min(760px,70vw); height:min(760px,70vw); border-radius:50%;
          background:radial-gradient(circle, ${MS_BLUE}2e, transparent 62%); pointer-events:none; }
        .mso-hero::after { content:''; position:absolute; bottom:-34%; left:-12%; width:min(640px,60vw); height:min(640px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 62%); pointer-events:none; }
        .mso-hin { position:relative; z-index:1; max-width:min(calc(100vw - 96px),1760px); margin:0 auto; }
        @media (min-width:1920px){ .mso-hin{ max-width:1900px; } }
        @media (min-width:2560px){ .mso-hin{ max-width:2440px; } }
        @media (max-width:768px){ .mso-hin{ max-width:100%; } }
        .mso-hgrid { display:grid; grid-template-columns:1.06fr 0.94fr; gap:clamp(36px,5vw,88px); align-items:center; }
        @media (max-width:960px){ .mso-hgrid{ grid-template-columns:1fr; } }
        .mso-h1 { font-size:clamp(44px,7.4vw,108px); font-weight:900; letter-spacing:0.015em; line-height: 1.14; color:#fff; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .mso-h1 em { font-style:normal; color:${GREEN}; }
        .mso-lede { font-size:clamp(20px,2.6vw,34px); font-weight:800; letter-spacing:-0.01em; line-height:1.28; color:rgba(255,255,255,0.92); margin:22px 0 0; }
        .mso-lede span { color:${GREEN}; }
        .mso-intro { max-width:600px; font-size:clamp(15px,1.2vw,18px); line-height:1.8; color:rgba(255,255,255,0.64); margin:20px 0 0; }
        .mso-intro strong { color:#fff; font-weight:700; }
        .mso-cta { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(26px,3vw,36px); }
        .mso-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,color .2s,transform .18s; will-change:transform; }
        .mso-bp:hover { background:#fff; transform:translateY(-2px); }
        .mso-bp svg { transition:transform .2s; } .mso-bp:hover svg { transform:translateX(3px); }
        .mso-bg { display:inline-flex; align-items:center; gap:9px; background:transparent; color:#fff; border:1.5px solid rgba(255,255,255,0.28); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .mso-bg:hover { border-color:rgba(255,255,255,0.65); background:rgba(255,255,255,0.06); }
        @media (max-width:480px){ .mso-bp, .mso-bg, .mso-tel{ width:100%; justify-content:center; } }
        .mso-hero-more { max-width:900px; margin-top:clamp(30px,3.6vw,52px); padding-top:clamp(26px,3vw,40px); border-top:1px solid rgba(255,255,255,0.12); }
        .mso-hero-more .mso-intro { max-width:900px; margin-top:16px; }
        .mso-hero-more .mso-intro:first-child { margin-top:0; }

        /* ── Animated Microsoft motion logo panel ── */
        @keyframes mso-panel-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-12px); } }
        @keyframes mso-tile-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        .mso-panel { position:relative; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.12); border-radius:28px;
          padding:clamp(28px,3vw,48px) clamp(24px,2.6vw,44px); text-align:center;
          box-shadow:0 40px 90px -40px rgba(0,0,0,0.6); animation:mso-panel-float 8s ease-in-out infinite; will-change:transform; }
        .mso-panel:hover { animation-play-state:paused; }
        .mso-badge { display:inline-flex; align-items:center; gap:7px; font-size:11px; font-weight:800; letter-spacing:1.8px; text-transform:uppercase; word-spacing: 0.14em;
          color:${GREEN}; background:rgba(60,185,140,0.12); border:1px solid rgba(60,185,140,0.32); padding:7px 15px; border-radius:99px; margin-bottom:clamp(22px,2.6vw,34px); }
        .mso-tiles { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(10px,1.2vw,16px);
          width:clamp(140px,16vw,220px); aspect-ratio:1; margin:0 auto; }
        .mso-tile-w { display:block; }
        .mso-tile { display:block; width:100%; height:100%; border-radius:clamp(12px,1.4vw,18px);
          box-shadow:0 16px 36px -12px rgba(0,0,0,0.5); animation:mso-tile-float 5.5s ease-in-out infinite; will-change:transform; }
        .mso-tile-w:nth-child(1) .mso-tile { animation-delay:0s; }
        .mso-tile-w:nth-child(2) .mso-tile { animation-delay:.7s; }
        .mso-tile-w:nth-child(3) .mso-tile { animation-delay:1.4s; }
        .mso-tile-w:nth-child(4) .mso-tile { animation-delay:2.1s; }
        .mso-word { font-size:clamp(26px,2.8vw,42px); font-weight:800; letter-spacing:-0.02em; color:#fff; margin-top:clamp(20px,2.4vw,30px); }
        .mso-prods { display:flex; flex-wrap:wrap; justify-content:center; gap:9px; margin-top:clamp(18px,2vw,26px); }
        .mso-prod { display:inline-flex; align-items:center; gap:8px; font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.85);
          background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.13); padding:8px 15px; border-radius:100px; }
        .mso-prod i { width:9px; height:9px; border-radius:3px; flex-shrink:0; }
        @media (prefers-reduced-motion:reduce){ .mso-panel, .mso-tile{ animation:none; } }

        /* ── Section base ── */
        .mso-sec { padding:clamp(56px,7vw,120px) 0; }
        .mso-sec.alt { background:#fff; }
        .mso-sec.dark { background:${NAVY}; position:relative; overflow:hidden; }
        .mso-sec.dark::before { content:''; position:absolute; top:-22%; left:-10%; width:min(640px,60vw); height:min(640px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${MS_BLUE}2b, transparent 65%); pointer-events:none; }
        .mso-sec.dark .mso-shell { position:relative; z-index:1; }
        .mso-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:0.01em; line-height: 1.14; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .mso-h2 span { color:${GREEN}; }
        .mso-sec.dark .mso-h2 { color:#fff; }
        .mso-lead { max-width:640px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.58); margin:18px 0 0; }
        .mso-sec.dark .mso-lead { color:rgba(255,255,255,0.66); }

        /* ── Why cards (Microsoft colour accents) ── */
        .mso-why { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .mso-why{ grid-template-columns:1fr; } }
        .mso-wc { position:relative; overflow:hidden; background:#fafbfd; border:1px solid rgba(8,33,60,0.08); border-radius:22px;
          padding:clamp(24px,2.6vw,40px); box-shadow:0 4px 22px rgba(8,33,60,0.05);
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .mso-wc::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:var(--mc);
          transform:scaleX(0); transform-origin:left center; transition:transform .45s cubic-bezier(0.16,1,0.3,1); }
        .mso-wc:hover { transform:translateY(-6px); box-shadow:0 30px 64px rgba(8,33,60,0.12); }
        .mso-wc:hover::before { transform:scaleX(1); }
        .mso-wc-ic { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
          background:color-mix(in srgb, var(--mc) 14%, #fff); color:var(--mc); margin-bottom:18px; }
        .mso-wc-t { font-size:clamp(19px,1.7vw,26px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 12px; line-height:1.08; }
        .mso-wc-d { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:0; }

        /* ── Services (2-col cards, number watermark, colour cycle) ── */
        .mso-srv { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:900px){ .mso-srv{ grid-template-columns:1fr; } }
        .mso-sc { position:relative; overflow:hidden; background:#fff; border:1px solid rgba(8,33,60,0.09); border-radius:24px;
          padding:clamp(26px,2.8vw,44px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .mso-sc:hover { transform:translateY(-6px); box-shadow:0 32px 68px -30px rgba(8,33,60,0.3); border-color:var(--mc); }
        .mso-sc-no { position:absolute; top:clamp(12px,1.4vw,20px); right:clamp(16px,2vw,28px); font-size:clamp(46px,5vw,84px); font-weight:900;
          letter-spacing:-0.05em; color:var(--mc); opacity:0.12; line-height:1; font-variant-numeric:tabular-nums; pointer-events:none; }
        .mso-sc-ic { width:58px; height:58px; border-radius:16px; display:flex; align-items:center; justify-content:center;
          background:var(--mc); color:#fff; margin-bottom:18px; box-shadow:0 12px 26px -10px var(--mc); }
        .mso-sc-t { font-size:clamp(21px,2.1vw,32px); font-weight:900; letter-spacing:0.01em; line-height:1.12; color:${NAVY}; margin:0; text-transform:uppercase; word-spacing: 0.14em; }
        .mso-sc-p { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:14px 0 0; }
        .mso-sc.wide { grid-column:1 / -1; }
        @media (min-width:901px){ .mso-sc.wide .mso-sc-body{ columns:2; column-gap:clamp(24px,3vw,52px); } .mso-sc.wide .mso-sc-p:first-of-type{ margin-top:0; } .mso-sc.wide .mso-sc-body{ margin-top:14px; } }

        /* ── Audiences (dark) ── */
        .mso-aud { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .mso-aud{ grid-template-columns:1fr; } }
        .mso-ac { position:relative; overflow:hidden; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:22px;
          padding:clamp(26px,3vw,42px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .mso-ac:hover { transform:translateY(-6px); border-color:var(--mc); box-shadow:0 34px 70px -28px rgba(0,0,0,0.55); }
        .mso-ac-ic { width:54px; height:54px; border-radius:15px; display:flex; align-items:center; justify-content:center;
          background:color-mix(in srgb, var(--mc) 20%, transparent); color:var(--mc); margin-bottom:18px; }
        .mso-ac-t { font-size:clamp(20px,2vw,30px); font-weight:900; letter-spacing:-0.015em; color:#fff; margin:0 0 11px; line-height:1.16; }
        .mso-ac-d { font-size:clamp(14px,1.02vw,16px); line-height:1.76; color:rgba(255,255,255,0.68); margin:0; }

        /* ── How we work (timeline rail) ── */
        .mso-steps { margin-top:clamp(36px,4vw,56px); }
        .mso-step { display:grid; grid-template-columns:auto 1fr; gap:clamp(18px,2.6vw,44px); }
        .mso-rail { display:flex; flex-direction:column; align-items:center; }
        .mso-dot { width:clamp(46px,4vw,60px); height:clamp(46px,4vw,60px); border-radius:50%; background:${GREEN}; color:${NAVY};
          display:flex; align-items:center; justify-content:center; font-weight:900; font-size:clamp(16px,1.4vw,21px);
          letter-spacing:-0.03em; flex-shrink:0; box-shadow:0 10px 26px -8px rgba(60,185,140,0.55); }
        .mso-line { flex:1; width:2px; background:rgba(8,33,60,0.14); margin:10px 0; min-height:26px; }
        .mso-step:last-child .mso-line { display:none; }
        .mso-step-body { padding-bottom:clamp(28px,3.4vw,52px); }
        .mso-step:last-child .mso-step-body { padding-bottom:0; }
        .mso-step-t { font-size:clamp(22px,2.4vw,40px); font-weight:900; letter-spacing:0.01em; line-height:1.12; color:${NAVY}; margin:0; text-transform:uppercase; word-spacing: 0.14em; padding-top:clamp(8px,1vw,14px); }
        .mso-step-d { font-size:clamp(14px,1.05vw,16.5px); line-height:1.8; color:rgba(8,33,60,0.62); margin:12px 0 0; max-width:72ch; }

        /* ── Cost ── */
        .mso-cost { display:grid; grid-template-columns:1.1fr 0.9fr; gap:clamp(32px,4vw,72px); align-items:center; margin-top:clamp(32px,4vw,52px); }
        @media (max-width:900px){ .mso-cost{ grid-template-columns:1fr; } }
        .mso-cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .mso-cost-p:last-child { margin-bottom:0; }
        .mso-pricecard { background:${NAVY}; border-radius:24px; padding:clamp(28px,3vw,44px); color:#fff; position:relative; overflow:hidden; }
        .mso-pricecard::before { content:''; position:absolute; bottom:-40%; right:-15%; width:60%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${MS_BLUE}3d, transparent 62%); pointer-events:none; }
        .mso-pr { position:relative; display:grid; grid-template-columns:auto 1fr; gap:16px; align-items:center;
          padding:18px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .mso-pr:first-of-type { padding-top:0; }
        .mso-pr:last-of-type { border-bottom:none; padding-bottom:0; }
        .mso-pr-sq { width:14px; height:14px; border-radius:4px; flex-shrink:0; }
        .mso-pr-v { font-size:clamp(24px,2.6vw,40px); font-weight:900; letter-spacing:-0.04em; color:#fff; line-height:1; }
        .mso-pr-v small { font-size:0.42em; font-weight:700; color:rgba(255,255,255,0.6); }
        .mso-pr-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.66); margin-top:7px; line-height:1.5; }
        .mso-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .mso-note a { color:${GREEN}; text-decoration:none; }

        /* ── Countries ── */
        .mso-co { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .mso-co{ grid-template-columns:1fr; } }
        .mso-coc { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:clamp(24px,2.6vw,38px);
          transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s; will-change:transform; }
        .mso-coc:hover { transform:translateY(-5px); border-color:var(--mc); }
        .mso-coc-t { display:flex; align-items:center; gap:10px; font-size:clamp(18px,1.7vw,24px); font-weight:900; letter-spacing:-0.025em; color:#fff; margin:0 0 10px; }
        .mso-coc-t i { width:11px; height:11px; border-radius:3px; background:var(--mc); flex-shrink:0; }
        .mso-coc-d { font-size:clamp(14px,1.02vw,15.5px); line-height:1.75; color:rgba(255,255,255,0.66); margin:0; }
        .mso-co-close { max-width:820px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(30px,3.6vw,48px) 0 0; }

        /* ── Ready band ── */
        .mso-ready { position:relative; overflow:hidden; background:linear-gradient(160deg, #f2fbf7 0%, #e9f4fb 100%); border:1px solid rgba(8,33,60,0.1); border-radius:28px;
          padding:clamp(34px,5vw,72px); margin-top:clamp(36px,4vw,56px); text-align:center; }
        .mso-ready::before { content:''; position:absolute; inset:0; pointer-events:none;
          background:radial-gradient(ellipse 50% 60% at 85% 10%, ${MS_BLUE}17, transparent 65%); }
        .mso-ready-h { font-size:clamp(30px,4.4vw,68px); font-weight:900; letter-spacing:0.01em; line-height: 1.16; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .mso-ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.62); }
        .mso-ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .mso-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .mso-tel:hover { transform:translateY(-2px); }
        .mso-ready .mso-bg { color:${NAVY}; border-color:rgba(8,33,60,0.2); }
        .mso-ready .mso-bg:hover { border-color:rgba(8,33,60,0.5); background:rgba(8,33,60,0.04); }

        /* ── FAQ ── */
        .mso-faq { margin-top:clamp(36px,4vw,56px); }
        .mso-fq { padding:clamp(24px,3vw,40px) 0; border-top:1px solid rgba(8,33,60,0.12); }
        .mso-fq:last-child { border-bottom:1px solid rgba(8,33,60,0.12); }
        .mso-fq-q { font-size:clamp(20px,2.1vw,32px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 14px; line-height:1.1; }
        .mso-fq-a { font-size:clamp(14px,1.05vw,16.5px); line-height:1.82; color:rgba(8,33,60,0.64); margin:0; max-width:90ch; }

        /* ── Legal line ── */
        .mso-legal { font-size:clamp(12px,0.95vw,14px); line-height:1.7; color:rgba(8,33,60,0.5); font-style:italic; margin:clamp(30px,3.6vw,48px) 0 0; }
      `}</style>

      {/* ── Hero (dark) ── */}
      <section className="mso-hero">
        <div className="mso-hin">
          <div className="mso-hgrid">
            <Reveal>
              <Eyebrow light>Microsoft Solutions in Australia</Eyebrow>
              <h1 className="mso-h1">Microsoft, set up <em>right</em> and run <em>right</em></h1>
              <p className="mso-lede">
                Microsoft 365, Azure, and Dynamics, deployed and run by a certified partner so your team{' '}
                <span>works smarter from day one</span>.
              </p>
              <p className="mso-intro">
                Most IT companies sell you licences and disappear. Licences are the easy part. Making Microsoft
                actually work for your business is the job.
              </p>
              <p className="mso-intro">
                EG Digital is a Melbourne-based certified Microsoft Partner that deploys, integrates, and supports the
                full Microsoft stack: Microsoft 365, Azure, Dynamics 365, and the Power Platform. We do not just sell
                you seats and leave you to figure out the rest. We set the environment up properly, migrate your data
                without losing anything, secure it, and stay on to run it, so the tools you are paying for do what they
                are supposed to.
              </p>
              <div className="mso-cta">
                <button className="mso-bp" onClick={() => navigate('/contact')}>
                  Get a free licensing review
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="mso-bg" href="tel:1800054555">
                  <Phone size={16} /> 1800 054 555
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <MotionLogo />
            </Reveal>
          </div>

          <Reveal>
            <div className="mso-hero-more">
              <p className="mso-intro">
                We are part of <ElomaLink />, which means your Microsoft environment sits next to web development, SEO,
                cloud hosting, cyber security, and custom software under one roof. That matters more than it sounds.
                Your Microsoft setup, your security, your integrations, and the systems that connect to it are usually
                run by three or four companies that never talk to each other. When one team handles all of it, your
                licensing, your security, and your integrations line up instead of leaving gaps for problems to fall
                through.
              </p>
              <p className="mso-intro">
                <strong>One partner.</strong> One team that plans the licensing, deploys the environment, secures it,
                and answers the phone when something breaks.
              </p>
              <p className="mso-intro">
                Talk to our team, or get a free licensing review. No obligation, just a clear read on whether you are
                on the right plans and paying the right amount.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose EG Digital ── */}
      <section className="mso-sec alt">
        <div className="mso-shell">
          <Reveal>
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="mso-h2">Why choose EG Digital for your Microsoft solutions in <span>Australia</span></h2>
          </Reveal>
          <div className="mso-why">
            {WHY.map((w, i) => {
              const Ic = w.icon
              return (
                <Reveal key={w.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="mso-wc" style={{ height: '100%', ['--mc' as string]: MS_COLORS[i % 4] }}>
                    <div className="mso-wc-ic"><Ic size={24} /></div>
                    <h3 className="mso-wc-t">{w.t}</h3>
                    <p className="mso-wc-d">{w.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Our Microsoft services ── */}
      <section className="mso-sec">
        <div className="mso-shell">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mso-h2">Our Microsoft <span>services</span></h2>
            <p className="mso-lead">
              We handle the full Microsoft stack, so you can hand us the whole environment or the one piece you are
              missing. Here is what we do.
            </p>
          </Reveal>
          <div className="mso-srv">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              const wide = i === 0
              return (
                <Reveal key={s.t} delay={Math.min(i * 0.04, 0.2)} className={wide ? 'mso-sc wide' : undefined} style={wide ? { ['--mc' as string]: MS_COLORS[i % 4] } : undefined}>
                  {wide ? (
                    <>
                      <span className="mso-sc-no">{String(i + 1).padStart(2, '0')}</span>
                      <div className="mso-sc-ic"><Ic size={26} /></div>
                      <h3 className="mso-sc-t">{s.t}</h3>
                      <div className="mso-sc-body">
                        {s.paras.map((p, pi) => <p key={pi} className="mso-sc-p">{p}</p>)}
                      </div>
                    </>
                  ) : (
                    <div className="mso-sc" style={{ height: '100%', ['--mc' as string]: MS_COLORS[i % 4] }}>
                      <span className="mso-sc-no">{String(i + 1).padStart(2, '0')}</span>
                      <div className="mso-sc-ic"><Ic size={26} /></div>
                      <h3 className="mso-sc-t">{s.t}</h3>
                      {s.paras.map((p, pi) => <p key={pi} className="mso-sc-p">{p}</p>)}
                    </div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Who we support (dark) ── */}
      <section className="mso-sec dark">
        <div className="mso-shell">
          <Reveal>
            <Eyebrow light>Who it's for</Eyebrow>
            <h2 className="mso-h2">Who we <span>support</span></h2>
          </Reveal>
          <div className="mso-aud">
            {AUDIENCES.map((a, i) => {
              const Ic = a.icon
              return (
                <Reveal key={a.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="mso-ac" style={{ height: '100%', ['--mc' as string]: MS_COLORS[i % 4] }}>
                    <div className="mso-ac-ic"><Ic size={24} /></div>
                    <h3 className="mso-ac-t">{a.t}</h3>
                    <p className="mso-ac-d">{a.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How we work (timeline) ── */}
      <section className="mso-sec alt">
        <div className="mso-shell">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mso-h2">From review to <span>run</span></h2>
          </Reveal>
          <div className="mso-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={Math.min(i * 0.04, 0.16)}>
                <div className="mso-step">
                  <div className="mso-rail">
                    <div className="mso-dot">{String(i + 1).padStart(2, '0')}</div>
                    <div className="mso-line" />
                  </div>
                  <div className="mso-step-body">
                    <h3 className="mso-step-t">{s.t}</h3>
                    <p className="mso-step-d">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost ── */}
      <section className="mso-sec">
        <div className="mso-shell">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mso-h2">What Microsoft solutions cost in <span>Australia</span></h2>
          </Reveal>
          <div className="mso-cost">
            <Reveal>
              <div>
                <p className="mso-cost-p">
                  Honest answer: it depends on which products you need, how many users you have, and how much setup and
                  ongoing support is involved. Here is the current Australian market for context.
                </p>
                <p className="mso-cost-p">
                  Microsoft 365 licensing is priced per user per month. As a rough guide, Business Basic sits around $9
                  per user, Business Standard around $18.70, and Business Premium around $32.90, all per user per month
                  and excluding GST, on annual billing. Paying annually is usually about 17% cheaper than paying month
                  to month, in exchange for a 12-month commitment. Note that commercial pricing rose across most plans
                  from 1 July 2026, so the number on your last renewal may not be the number on your next one, which is
                  exactly why a licensing review before you renew is worth doing.
                </p>
                <p className="mso-cost-p">
                  If you would rather own Office outright than subscribe, a one-time purchase like Office Home and
                  Business 2024 runs a few hundred dollars per device, but it is a fixed set of apps with no cloud
                  services, no ongoing updates beyond security fixes, and no upgrade path, so it suits a narrow set of
                  situations rather than most businesses. We are happy to talk you through the trade-off honestly.
                </p>
                <p className="mso-cost-p">
                  Azure is billed on what you use rather than per seat, so the cost depends entirely on the
                  infrastructure you run. Dynamics 365 is licensed per user per app and varies widely with what you are
                  implementing. On top of the licences, there is the setup, migration, and ongoing management, which we
                  quote from your actual requirements. You get an itemised scope and a real number, not a licence price
                  with the hard part left off.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mso-pricecard">
                <div className="mso-pr">
                  <span className="mso-pr-sq" style={{ background: MS_BLUE }} />
                  <div>
                    <div className="mso-pr-v">~$9 <small>/user/mo</small></div>
                    <div className="mso-pr-l">Microsoft 365 Business Basic, per user per month excluding GST, on annual billing.</div>
                  </div>
                </div>
                <div className="mso-pr">
                  <span className="mso-pr-sq" style={{ background: MS_GREEN }} />
                  <div>
                    <div className="mso-pr-v">~$18.70 <small>/user/mo</small></div>
                    <div className="mso-pr-l">Microsoft 365 Business Standard, per user per month excluding GST, on annual billing.</div>
                  </div>
                </div>
                <div className="mso-pr">
                  <span className="mso-pr-sq" style={{ background: MS_YELLOW }} />
                  <div>
                    <div className="mso-pr-v">~$32.90 <small>/user/mo</small></div>
                    <div className="mso-pr-l">Microsoft 365 Business Premium, per user per month excluding GST, on annual billing.</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <p className="mso-note">
            Get a free licensing review and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── Regions (dark) ── */}
      <section className="mso-sec dark">
        <div className="mso-shell">
          <Reveal>
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="mso-h2">Microsoft Solutions across <span>regions</span></h2>
            <p className="mso-lead">
              Based in Melbourne, EG Digital delivers Microsoft solutions in Australia while also supporting businesses
              across the UK, USA, Canada, and Singapore with Microsoft 365, Azure, and Dynamics deployment, migration,
              and management.
            </p>
          </Reveal>
          <div className="mso-co">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 0.06, 0.24)}>
                <div className="mso-coc" style={{ height: '100%', ['--mc' as string]: MS_COLORS[i % 4] }}>
                  <h3 className="mso-coc-t"><i />{c.t}</h3>
                  <p className="mso-coc-d">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mso-co-close">
              Whether your business operates in Australia or internationally, our approach stays the same: right-size
              the licensing, deploy it properly, secure it from the start, and stay on to run it, so Microsoft works
              for your business instead of the other way around.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to get Microsoft working properly ── */}
      <section className="mso-sec alt">
        <div className="mso-shell">
          <Reveal>
            <div className="mso-ready">
              <Eyebrow>Free review</Eyebrow>
              <h2 className="mso-ready-h">Ready to get Microsoft working properly?</h2>
              <p className="mso-ready-p">
                Tell us what you are running and where it is falling short. We will review your licensing, look at your
                setup, and tell you exactly where you are overspending or exposed, and what the right environment looks
                like. If we can help, we will show you how. If we cannot, we will tell you that too.
              </p>
              <p className="mso-ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free licensing review below.
              </p>
              <div className="mso-ready-cta">
                <button className="mso-bp" onClick={() => navigate('/contact')}>
                  Get my free review
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="mso-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mso-sec">
        <div className="mso-shell">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mso-h2">Frequently asked <span>questions</span></h2>
          </Reveal>
          <div className="mso-faq">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.15)}>
                <div className="mso-fq">
                  <h3 className="mso-fq-q">{f.q}</h3>
                  <p className="mso-fq-a">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mso-legal">
              EG Digital Australia Pty Ltd, a unit of <ElomaLink />. Certified Microsoft Partner delivering Microsoft
              solutions Australia-wide from Melbourne.
            </p>
          </Reveal>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready When You Are"
        heading="Let's get Microsoft"
        highlight="working."
        button="Get a free review"
      />
    </PageLayout>
  )
}
