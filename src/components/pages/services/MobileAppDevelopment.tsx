import {
  Code2, Users, ShieldCheck, Unlock, Blocks, Smartphone, TabletSmartphone,
  Layers, Feather, Building2, AppWindow, Puzzle, LifeBuoy, Rocket, Store,
  Briefcase, Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - MOBILE APP DEVELOPMENT (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "iOS + Android / Shipped" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Code2,
    t: 'Engineering first, not a template with your logo on it',
    d: 'Anyone can wire together a no-code builder and call it a custom app. We write clean, efficient code, whether that is a native iOS or Android build, a cross-platform app in Flutter or React Native, or a full-stack product with its own backend. Clean code means fewer crashes, faster performance, easier updates, and an app your own team can actually maintain after launch. You own what we build, source code included.',
  },
  {
    icon: Users,
    t: 'One team for the app, the backend, and everything around it',
    d: 'Nearly every mobile app needs a web application behind the scenes: an API, a database, authentication, an admin dashboard. Because EG Digital also handles custom software, cloud infrastructure, and security, the parts of a build that usually get handed to a third party and quietly go wrong are all handled in one place. No finger-pointing between an app studio, a backend contractor, and a hosting company. One number to call.',
  },
  {
    icon: ShieldCheck,
    t: 'Built for scale and security from the first line of code',
    d: 'An app that works for a hundred users and falls over at ten thousand was built wrong. We architect for the load you are heading toward, not just the load you have today, and we build security in rather than bolting it on. With cyber security engineers in the same team, data protection, encryption, and Australian Privacy Act obligations are handled as part of the build, not discovered in an audit later.',
  },
  {
    icon: Unlock,
    t: 'Honest pricing and clear timelines',
    d: 'We quote from your actual requirements and itemise what you are paying for. You will know the scope, the price, and the timeline before we start, and you will not get ambushed by costs that were always coming. No open-ended retainers that never resolve into a working product. No "it depends" that never turns into a number.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Blocks,
    t: 'Custom app development',
    paras: [
      'Apps built around your business and your users, not forced into a generic template. We handle the whole build: strategy, UX and UI design, front-end, backend, integrations, testing, and store submission. Suitable for businesses launching a new product, digitising an existing process, or replacing an app that has outgrown its original build.',
    ],
  },
  {
    icon: Smartphone,
    t: 'iOS app development',
    paras: [
      "Native iPhone and iPad apps built for Apple's ecosystem, using Swift and current Apple frameworks. We build for performance and for the polish iOS users expect, and we handle the App Store submission and review process so your launch does not stall on a rejection you did not see coming.",
    ],
  },
  {
    icon: TabletSmartphone,
    t: 'Android app development',
    paras: [
      'Android apps built with Kotlin for the full range of devices your users actually carry, not just the flagship handset. We optimise for performance across screen sizes and OS versions, handle Google Play submission, and build to the standards a fragmented device landscape demands.',
    ],
  },
  {
    icon: Layers,
    t: 'React Native app development',
    paras: [
      'When you want one codebase serving both iOS and Android, React Native gets you there faster and for less than two separate native builds, without giving up a native feel. We use it where cross-platform is the right call, and we are honest about when it is not.',
    ],
  },
  {
    icon: Feather,
    t: 'Flutter app development',
    paras: [
      'Flutter is our other cross-platform workhorse: a single codebase, expressive UI, and strong performance across iOS and Android. For many products, a well-built Flutter app is the fastest route to market and the cheapest to maintain, since you are updating one codebase instead of two. We match the framework to your product rather than forcing every build down the same path.',
    ],
  },
  {
    icon: Building2,
    t: 'Enterprise app development',
    paras: [
      'For larger organisations, we build apps that connect to internal infrastructure, enforce proper security and access control, and handle real user volumes without buckling. Complex integrations, multiple user roles, compliance requirements, and accountability at scale are normal territory for us, and having cloud and security engineers in the same team is where these projects are won or lost.',
    ],
  },
  {
    icon: AppWindow,
    t: 'SaaS and web app development',
    paras: [
      'When your product runs in the browser as well as, or instead of, on a phone, we build it: customer portals, dashboards, booking and quoting systems, and full SaaS platforms with subscriptions, multi-tenancy, and the backend to support them. The line between "app" and "platform" is one we cross comfortably.',
    ],
  },
  {
    icon: Puzzle,
    t: 'Integrations and APIs',
    paras: [
      'A modern app rarely stands alone. We connect yours to the tools that run your business: CRM, ERP, Microsoft 365 and Dynamics, payment gateways, booking systems, Xero, MYOB, and more. This is where a lot of builds quietly fall apart, and where having software and cloud engineers on the same team pays off.',
    ],
  },
  {
    icon: LifeBuoy,
    t: 'Maintenance, hosting, and support',
    paras: [
      'An app is not "done" when it hits the store. Operating systems update, devices change, and users expect fixes and new features. We host, monitor, update, and secure what we build, so it stays fast, compatible, and safe long after launch. One team that knows your app, on call when you need them.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Rocket,
    t: 'Startups',
    d: 'Speed matters when you are proving an idea. We build MVPs and startup apps that get you to market quickly, then expand as you validate and scale. Because we also do software and cloud, we can take you from a prototype to a working, revenue-ready product without changing teams along the way.',
  },
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need an app that does real work for your business without a budget that swallows your year. We build practical, focused apps for small businesses across Australia, with clear pricing and no padding. Start with what you need now, and we build it to grow rather than forcing a rebuild in twelve months.',
  },
  {
    icon: Briefcase,
    t: 'B2B and corporate businesses',
    d: 'For internal tools, customer portals, and field apps, the app has to fit how your organisation already works and connect to the systems you already run. We build B2B and corporate apps that integrate with your CRM, ERP, and Microsoft stack, handle multiple stakeholders and user roles, and stand up to the scrutiny a business-critical tool attracts.',
  },
  {
    icon: Building2,
    t: 'Established and enterprise businesses',
    d: 'For complex apps, multiple integrations, and higher stakes, you need a team that can handle scale and stay accountable for it. We bring the engineering depth, the security posture, and the project management to deliver large-scale mobile app development that holds up, with one partner answerable for the whole thing.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Discovery and scope',
    d: 'We start by understanding your business, your users, and what the app actually has to achieve. You get a documented scope, a fixed quote, and a timeline before any code is written. No vague briefs that balloon later.',
  },
  {
    t: 'Design and prototype',
    d: 'We design the flows and interface around your users and your goals, then build a clickable prototype so you can react to something real before we commit to the build. This is also where a lot of cost gets saved: fixing a screen in design is cheap, fixing it in code is not.',
  },
  {
    t: 'Development',
    d: 'We build with clean code, in fortnightly sprints, with the backend, integrations, and security baked in from the start. You see working progress at the end of each sprint, not a black box until launch.',
  },
  {
    t: 'Testing and launch',
    d: 'Before anything ships, we test across devices and operating systems, check performance and security, and run user acceptance testing. Then we prepare and submit to the App Store and Google Play, and we stay with you through review and go-live.',
  },
  {
    t: 'Support and growth',
    d: 'After launch we host, monitor, and maintain the app, and because SEO, digital marketing, and software all live in the same team, we can keep improving and growing the product rather than handing you the keys and walking away.',
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'App development company in Australia',
    d: 'As a leading app development company in Australia, we build high-performance iOS, Android, and cross-platform apps for Australian businesses. Every project is engineered with security, scalability, Privacy Act compliance, and long-term maintainability in mind, and connected to the Australian tools you already run.',
  },
  {
    t: 'App development company in the UK',
    d: 'Businesses looking for a reliable app development company in the UK need mobile apps that combine performance, security, and a strong user experience. We build custom iOS, Android, and cross-platform apps that integrate cleanly with your existing systems while supporting future growth.',
  },
  {
    t: 'App development company in the USA',
    d: 'Our app development company in USA services help businesses create modern, scalable mobile apps that improve customer experience and operational efficiency. From consumer apps to enterprise platforms and custom portals, we build solutions designed to scale.',
  },
  {
    t: 'App development company in Canada',
    d: 'As a trusted app development company in Canada, we help businesses build mobile apps and custom digital platforms that are secure, fast, and easy to maintain. Our process focuses on clean code, sound architecture, and seamless integrations.',
  },
  {
    t: 'App development company in Singapore',
    d: 'Our app development company in Singapore services support businesses looking for high-performance mobile apps and custom platforms that deliver measurable outcomes. We combine technical depth with modern development practices to build products engineered for long-term success.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does it cost to develop an app in Australia?',
    a: 'Most custom apps in Australia fall between $30,000 for a simple MVP and $150,000 for a mid-complexity build with payments, integrations, and a custom backend, while enterprise platforms commonly start around $200,000 and climb with complexity. Local developer rates generally sit around $150 to $200 an hour. The honest version is that price tracks functionality far more than screen count, so the right number depends on what your app has to do. We quote from your actual requirements and itemise it, and we will tell you where a cross-platform build could bring the cost down without hurting the result.',
  },
  {
    q: 'How long does it take to develop a mobile app?',
    a: 'For a straightforward custom app, plan on roughly three to four months from kickoff to launch. A simple MVP can be ready sooner, while a larger build with multiple integrations, a custom backend, and enterprise requirements runs closer to six months or more. Timelines depend on scope and on how quickly feedback and content come back from your side, plus the App Store and Google Play review windows at the end, which is why we agree on scope and process before we begin rather than promising a date we cannot hold.',
  },
  {
    q: 'Which is the best app development company in Australia?',
    a: '"Best" depends on what you are building and what you need around it. The right partner for a simple consumer app is not always the right partner for a secure, integrated enterprise platform. What matters is engineering quality, transparency on price and timeline, ownership of your source code, and whether the team can handle the backend, security, and hosting rather than handing those off. With EG Digital you get an accountable Melbourne team plus software, cloud, and cyber security under one roof, which is exactly where app projects tend to succeed or fall over.',
  },
  {
    q: 'Do Australian app developers provide post-launch support?',
    a: "The good ones do, and it matters more than people expect. Operating systems update, devices change, and users expect fixes and new features, so an app without a support plan starts decaying the day it ships. We host, monitor, maintain, and secure the apps we build, and because the same team knows your product end to end, fixes and improvements do not sit in a stranger's queue. Ongoing maintenance typically runs 10 to 15 percent of the build cost per year, and we quote it up front.",
  },
  {
    q: 'Is it better to hire a local or offshore app developer?',
    a: 'It depends on your budget and how much is riding on the outcome. Offshore developers can be cheaper per hour, but the savings often come with communication overhead, timezone gaps, quality uncertainty, and questions about who is accountable when something breaks or how your data is handled under Australian privacy law. A local team works in your timezone, understands the Australian market and its compliance expectations, and is straightforward to reach. With EG Digital you get an Australian team in Melbourne, accountable and reachable, plus engineers, hosting, and security in one place rather than scattered across providers and time zones.',
  },
]

// Short signal chips for the hero - every phrase is drawn from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: 'iOS + Android', l: 'native and cross-platform builds' },
  { v: 'In-house', l: 'engineering, backend and security' },
  { v: 'You own it', l: 'source code included' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$30k - $80k', l: 'A simple app or MVP with a focused feature set.' },
  { v: '$80k - $150k', l: 'A mid-complexity app with multiple user roles, payments, integrations, and a custom backend.' },
  { v: '$200k+', l: 'Enterprise apps connected to internal infrastructure, with advanced security and large-scale user management.' },
]

export function MobileAppDevelopment() {
  const navigate = useNavigate()

  usePageMeta(
    'App Development Company in Australia | iOS, Android & Cross-Platform | EG Digital',
    'A full-service mobile app development company in Australia building fast, secure iOS, Android, React Native & Flutter apps. Melbourne team, in-house engineering. Get a free quote.',
  )

  return (
    <PageLayout>
      <style>{`
        .mad-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .mad-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .mad-shell{ max-width:2440px; } }
        @media (max-width:768px){ .mad-shell{ max-width:100%; } }

        /* ── Section base ── */
        .mad-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .mad-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .mad-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .mad-sec.dark .mad-shell { position:relative; z-index:1; }

        .mad-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .mad-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .mad-h2 span { color:${GREEN}; }
        .mad-sec.dark .mad-h2 { color:#fff; }
        .mad-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .mad-sec.dark .mad-lead { color:rgba(255,255,255,0.68); }

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
        .mad-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .mad-h1 { position:relative; font-size:clamp(46px,7vw,104px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:#fff; margin:16px 0 0; text-transform:uppercase; }
        .mad-lede { position:relative; font-size:clamp(20px,2.4vw,34px); font-weight:900; letter-spacing:-0.035em; line-height:1.06; color:#fff; margin:18px 0 0; }
        .mad-lede span { color:${GREEN}; }
        .mad-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .mad-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .mad-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .mad-bp svg { transition:transform .2s; } .mad-bp:hover svg { transform:translateX(3px); }
        .mad-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .mad-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .mad-bp, .mad-bg, .mad-tel{ width:100%; justify-content:center; } }

        /* Hero image (Unsplash) + animated scan + emblem */
        .hero-img { padding:0; border:1px solid rgba(255,255,255,0.12); background:${NAVY}; min-height:clamp(300px,42vw,520px); }
        .hero-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .hero-img::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 38%, ${NAVY}77); pointer-events:none; }
        .mad-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:mad-scan 4.6s linear infinite; will-change:transform; }
        @keyframes mad-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .mad-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:mad-float 6s ease-in-out infinite; will-change:transform; }
        .mad-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:mad-spin 3.4s linear infinite; will-change:transform; }
        .mad-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .mad-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .mad-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .mad-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.66); }
        .mad-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .mad-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:mad-pulse 1.8s ease-in-out infinite; }
        @keyframes mad-spin { to { transform:rotate(360deg); } }
        @keyframes mad-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes mad-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:mad-float 7s ease-in-out infinite; will-change:transform; }
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
        .mad-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .mad-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing:-0.045em; line-height:0.98; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .mad-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .mad-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .mad-scan, .mad-emblem, .mad-emblem-ring, .mad-dot, .chip { animation:none !important; }
          .mad-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="mad-sec dark mad-hero">
        <div className="mad-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Mobile App Development Company in Australia</Eyebrow>
                <h1 className="mad-h1">Apps engineered to perform</h1>
                <p className="mad-lede">
                  We build mobile apps that <span>hold up under real use</span>, not demos that fall apart after launch.
                </p>
                <div className="mad-cta">
                  <button className="mad-bp" onClick={() => navigate('/contact')}>
                    Get a free quote
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="mad-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile hero-img">
              <img
                src={img('photo-1526498460520-4c246339dccb', 900, 900)}
                alt="Mobile app development on iOS and Android devices"
                width={900} height={900} loading="eager" decoding="async"
              />
              <div className="mad-scan" aria-hidden="true" />
              <div className="mad-emblem" aria-hidden="true">
                <div className="mad-emblem-ring"><span className="mad-emblem-ic"><Smartphone size={19} /></span></div>
                <div className="mad-emblem-tx">
                  <span className="mad-emblem-k">iOS + Android</span>
                  <span className="mad-emblem-v"><span className="mad-dot" /> Shipped</span>
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
                Plenty of apps look great in a pitch deck and collapse the moment real users, real data, and real load
                hit them. A slow, crash-prone, or insecure app does not just disappoint users. It costs you the
                download, the review, and the reinstall you will never get back.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based mobile app development company that builds iOS, Android, and
                cross-platform apps engineered to perform: fast, secure, scalable, and connected to the systems that
                actually run your business. We are part of Eloma Group, so your app sits alongside cloud hosting, custom
                software, Microsoft and integrations, cyber security, and SEO under one roof. That means the app we ship
                is not a stranded island. It talks to your backend, it stays secure, and it keeps working long after
                go-live.
              </p>
              <p className="t-d">
                <strong>One partner for the whole thing.</strong> One team that scopes it, designs it, builds it, ships
                it to the stores, and keeps it running.
              </p>
              <p className="t-d">
                Get a free quote. Tell us what you want to build and we will give you a real number and a real timeline,
                not a vague range.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose EG Digital ── */}
      <section className="mad-sec">
        <div className="mad-shell">
          <div className="mad-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="mad-h2">Why choose EG Digital as your app development company in <span>Australia</span></h2>
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

      {/* ── Our mobile app development services ── */}
      <section className="mad-sec dark">
        <div className="mad-shell">
          <div className="mad-head">
            <Eyebrow light>What we build</Eyebrow>
            <h2 className="mad-h2">Our mobile app development <span>services</span></h2>
            <p className="mad-lead">
              We are a full-service app development company, so you can hand us the whole project or the single piece
              you are missing.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // Custom app development is a full-width feature row; the rest form a varied bento.
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
        </div>
      </section>

      {/* ── Who we build for ── */}
      <section className="mad-sec">
        <div className="mad-shell">
          <div className="mad-head">
            <Eyebrow>Who we build for</Eyebrow>
            <h2 className="mad-h2">Who we build <span>for</span></h2>
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
      <section className="mad-sec dark">
        <div className="mad-shell">
          <div className="mad-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="mad-h2">How we <span>work</span></h2>
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
      <section className="mad-sec">
        <div className="mad-shell">
          <div className="mad-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mad-h2">What app development costs in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on what you are building, and any company quoting a flat price before
                  understanding your project is guessing. Here is the current Australian market for context.
                </p>
                <p className="cost-p">
                  A simple app or MVP with a focused feature set typically runs $30,000 to $80,000. A mid-complexity app
                  with multiple user roles, payments, integrations, and a custom backend usually lands between $80,000
                  and $150,000. Enterprise apps connected to internal infrastructure, with advanced security and
                  large-scale user management, commonly start around $200,000 and climb from there. Australian developer
                  rates generally sit around $150 to $200 an hour, which reflects local salaries, quality assurance
                  standards, and compliance expectations rather than better code by default.
                </p>
                <p className="cost-p">
                  Three things worth knowing. First, the biggest cost driver is functionality, not screen count:
                  payments, integrations, real-time features, and custom logic are what move the number. Second, a
                  cross-platform build in Flutter or React Native can cut cost by roughly 30 to 40 percent compared with
                  two separate native apps, which is often the smartest way to reach both iOS and Android on a tighter
                  budget. Third, compliance is now a real line item in 2026, particularly with Privacy Act changes
                  affecting apps that handle personal data, so building it in early is cheaper than retrofitting it
                  later.
                </p>
                <p className="cost-p">
                  On top of the build, budget for hosting, app store fees, and ongoing maintenance, which typically runs
                  10 to 15 percent of the build cost each year. We quote all of it up front so nothing ambushes you. You
                  get an itemised scope and a real number, not a "from $X" asterisk.
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
          <p className="mad-note">
            Get a free quote and a real number. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── App development across Australia and beyond ── */}
      <section className="mad-sec dark">
        <div className="mad-shell">
          <div className="mad-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="mad-h2">App development across Australia and <span>beyond</span></h2>
            <p className="mad-lead">
              Although EG Digital is based in Melbourne, we deliver custom mobile app development for businesses across
              Australia and international markets. Whether you are launching a startup MVP, building a customer portal,
              or developing a large-scale enterprise platform, our team creates scalable, secure apps that support
              long-term growth.
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
              Whether you are based in Australia or expanding internationally, our development philosophy stays the
              same: build secure, scalable, high-performance apps that deliver real business value and integrate
              seamlessly with the technology your business relies on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to build something that works ── */}
      <section className="mad-sec">
        <div className="mad-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free quote</Eyebrow>
              <h2 className="ready-h">Ready to build something that works?</h2>
              <p className="ready-p">
                Tell us what you are trying to build and what it needs to do. We will give you a clear scope, an
                itemised quote, and a realistic timeline, with no obligation and no vague ranges. If we are the right
                fit, we will show you how. If we are not, we will tell you.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free quote below.
              </p>
              <div className="ready-cta">
                <button className="mad-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free quote
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="mad-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mad-sec">
        <div className="mad-shell">
          <div className="mad-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mad-h2">Frequently asked <span>questions</span></h2>
          </div>
          <div className="bento">
            {FAQS.map((f, i) => {
              const spans = ['c7', 'c5', 'c5', 'c7', 'c12']
              return (
                <Reveal key={f.q} delay={Math.min(i * 0.05, 0.15)} className={`tile ${spans[i]}`}>
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
        highlight="app."
        button="Get a free quote"
      />
    </PageLayout>
  )
}
