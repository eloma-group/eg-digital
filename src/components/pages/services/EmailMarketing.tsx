import {
  BarChart3, Users, Lock, Unlock, Target, Send, Zap, LayoutTemplate,
  PenTool, UserPlus, Store, Rocket, ShoppingBag, Building2,
  Globe, Phone, Mail,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'
import { ElomaLink } from '../../../lib/elomaLink'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - EMAIL MARKETING (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "Owned list" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: BarChart3,
    t: 'We measure sales, not opens',
    d: 'An open rate is a means, not a result. Our reporting starts with the numbers that pay the bills: revenue from email, enquiries, clicks that convert, and the repeat customers it brings back. Then it works back to the opens and click rates that produced them. If a report leads with open rates and hides whether anyone bought, it is showing you the wrong thing first. Ours shows you the right thing first.',
  },
  {
    icon: Users,
    t: 'One team for strategy, design, copy, and automation',
    d: 'Email done well needs four skills at once: a strategist who knows what to send and when, a designer who makes it look right, a copywriter who makes people click, and someone who can actually build the automation in your platform. You get all four working together, not a single freelancer covering one and outsourcing the rest. Because EG Digital also runs your website, social, and content, your email is consistent with everything else and fed by all of it.',
  },
  {
    icon: Lock,
    t: 'Owned, not rented',
    d: 'We build email as the channel you control, because it is the one channel you do control. Everything we do points at growing a list you own and a relationship you keep, so when ad costs climb or reach drops, you still have a direct line to the people most likely to buy. That is the whole point of email, and it is the part most agencies treat as a side project.',
  },
  {
    icon: Unlock,
    t: 'No lock-in, no filler',
    d: 'No 12-month contracts. No packages padded with sends nobody reads to justify the retainer. We earn the renewal each month by producing email that works and reporting honestly on what it did. A short minimum to build momentum is fair. A long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Target,
    t: 'Email strategy',
    paras: [
      'Email without a strategy is just sending. Before anything goes out, we map what you should send, to whom, and when: the campaigns, the automated sequences, the segments, and the calendar behind it all. You get a documented plan tied to your business, not a habit of emailing your whole list the same thing whenever someone remembers to. This is the part most businesses skip, and it is why most email underperforms.',
    ],
  },
  {
    icon: Send,
    t: 'Campaign management',
    paras: [
      'We run your campaigns end to end: planning the send, building the audience, writing and designing the email, launching it, and reading the results back to you. Newsletters, promotions, launches, and one-off sends, all handled by one team rather than cobbled together in a rush the day before. You get email that goes out on schedule, looks the part, and is built to sell rather than just to fill an inbox.',
    ],
  },
  {
    icon: Zap,
    t: 'Email automation',
    paras: [
      'Automation is where email earns its keep, because it works while you do not. We set up the sequences that run on their own: welcome flows for new subscribers, abandoned cart recovery, post-purchase follow-ups, re-engagement for people who have gone quiet, and the triggered emails that reach someone at exactly the right moment. For e-commerce businesses across Australia, email marketing automation is often the single highest-return thing you can set up, and we build it to run without you touching it.',
    ],
  },
  {
    icon: LayoutTemplate,
    t: 'Email newsletter design',
    paras: [
      "A newsletter people actually open is worth more than a list ten times the size that they ignore. We produce custom email newsletter design in Australia built to your brand: templates that look right in every inbox, render properly on mobile, and give people a reason to keep opening. Everything is designed to your brand and coded to work across email clients, so what you approve is what lands, not a broken layout on half your subscribers' phones.",
    ],
  },
  {
    icon: PenTool,
    t: 'Email copywriting',
    paras: [
      'Design gets the email opened; copy gets the click. Our copywriters write the subject lines, the body, and the calls to action that turn a read into an enquiry or a sale. Every email has a job, and the writing is built to do it, in your voice, not a template with your logo dropped in.',
    ],
  },
  {
    icon: UserPlus,
    t: 'List growth and management',
    paras: [
      'A list is only as good as the people on it and how it is looked after. We build the sign-up forms, lead magnets, and opt-in points that grow your list with people who actually want to hear from you, and we keep it clean: segmented, healthy, and compliant with Australian spam law, so your emails land in the inbox rather than the junk folder.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need email that brings in sales without a budget that swallows your year. We build affordable email marketing services for small businesses across Australia, with clear pricing and no padding, focused on the handful of campaigns and automations that actually move the needle rather than a bloated program you will not keep up. Start with a welcome flow and a monthly newsletter, prove it works, then grow.',
  },
  {
    icon: Rocket,
    t: 'Startups',
    d: 'Startups have a small list and a lot to prove, and email is one of the cheapest ways to turn early interest into revenue. We set up the automation that nurtures new subscribers, the campaigns that keep you top of mind, and the sign-up points that grow the list as you grow, so email pulls its weight from day one rather than waiting until you are big enough to bother.',
  },
  {
    icon: ShoppingBag,
    t: 'E-commerce brands',
    d: 'Online stores make some of their best money from email, and most leave it on the table. We build the automation that recovers abandoned carts, follows up after a purchase, and wins back lapsed customers, plus the campaigns that drive sales around launches and promotions. Because EG Digital also builds and hosts stores, your email, your site, and your marketing all pull in the same direction.',
  },
  {
    icon: Building2,
    t: 'B2B businesses',
    d: 'For B2B, email is how you stay in front of a buyer through a long sales cycle without pestering them. We run b2b email marketing campaign management across Australia: nurture sequences that keep leads warm, newsletters that build authority, and the segmented campaigns that reach the right contact with the right message. Credible, consistent, and pointed at qualified enquiries rather than open rates.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Discovery and strategy',
    d: 'We start by understanding your business, your list, and what email actually needs to achieve for you. You get a documented email strategy: the campaigns, the automations, the segments, and the metrics we will hold ourselves to, before anything gets sent.',
  },
  {
    t: 'Setup and design',
    d: 'We build or clean up your platform, design your templates to your brand, and set up the automation and tracking so everything is ready to run properly.',
  },
  {
    t: 'Create and send',
    d: 'Our team writes and designs the emails, campaigns and automated sequences alike, and gets them out to the right segments on schedule.',
  },
  {
    t: 'Automate and nurture',
    d: 'We put the sequences in place that run on their own, so your email keeps working, welcoming, recovering, and re-engaging, without you lifting a finger.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to revenue and enquiries, in plain language, with next month's plan set against what actually worked. The email gets sharper over time, and so do the results.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Email Marketing in the UK',
    d: "Our email marketing services in the UK help businesses turn a list into revenue in one of the world's most competitive markets. We build strategy, design, copy, and automation that grow engaged lists and drive measurable sales, tailored to UK audiences and compliant with UK rules.",
  },
  {
    t: 'Email Marketing in the USA',
    d: 'Businesses looking for email marketing services in the USA need email that competes for attention in a crowded inbox across large, fast-moving markets. We combine strategy, design, copywriting, and automation to help businesses build lists and drive revenue that scales across the United States.',
  },
  {
    t: 'Email Marketing in Canada',
    d: 'Our email marketing services in Canada focus on email that connects and converts: strategy, design, and automation aligned to what Canadian audiences respond to and compliant with Canadian anti-spam law. Whether you operate locally or nationally, we help Canadian businesses turn their list into a real source of sales.',
  },
  {
    t: 'Email Marketing in Singapore',
    d: "Singapore's competitive, mobile-first market rewards sharp, well-timed email. Our email marketing services in Singapore help businesses build engaged lists, send campaigns and automations that land, and turn inbox attention into qualified enquiries and sales.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much do email marketing services cost in Australia?',
    a: 'Most Australian small businesses pay between $500 and $1,500 per month for an ongoing email program with a regular campaign or newsletter, a couple of core automations, and monthly reporting. A fuller program with frequent campaigns, a full suite of automated flows, custom design, and detailed reporting usually runs $1,500 to $4,000 per month, and one-off projects like a template build or an automation setup are scoped separately. Your email platform, such as Klaviyo or Mailchimp, is billed by the provider on top and usually scales with your list size. The honest version is that price tracks how much you send and how much is custom rather than any fixed package, so we quote from what your business actually needs. Be wary of very cheap packages, which usually mean a generic template blasted to your whole list with no strategy behind it.',
  },
  {
    q: 'Are email marketing services worth it for startups?',
    a: 'For most startups, yes, and often sooner than they expect. Email is one of the cheapest channels you have, and unlike ads, it keeps working after you stop paying: a welcome sequence set up once nurtures every new subscriber for months, and a list you own is not at the mercy of an algorithm or a rising ad cost. The catch is that email rewards doing it properly, since a generic blast to a tiny list does little. The value comes from the right automation and segmentation, which is where a service earns its fee. For an early-stage startup we usually start small, a welcome flow and a regular campaign, prove the return, then build from there rather than committing to a large program before the list is big enough to justify it.',
  },
]

// Short signal chips for the hero - every phrase is drawn verbatim from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: 'Sales, not opens', l: 'we measure revenue, enquiries and repeat customers first' },
  { v: 'One team', l: 'strategy, design, copy and automation under one roof' },
  { v: 'No lock-in', l: 'no 12-month contracts, and you own the list' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$500 - $1,500', l: 'Per month for an ongoing email program: a regular campaign or newsletter, a couple of core automations, and monthly reporting.' },
  { v: '$1,500 - $4,000', l: 'Per month for a fuller program: frequent campaigns, a full suite of automated flows, custom design, and detailed reporting.' },
  { v: 'Scoped separately', l: 'One-off projects like a template build, an automation setup, or a list clean-up.' },
]

export function EmailMarketing() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/email-marketing')

  usePageMeta(
    'Email Marketing Services in Australia | EG Digital',
    'Email marketing company in Australia. Strategy, automation, newsletter design & campaign management for small business, ecommerce & B2B. Get a free email audit.',
  )

  return (
    <PageLayout>
      <style>{`
        .eml-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .eml-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .eml-shell{ max-width:2440px; } }
        @media (max-width:768px){ .eml-shell{ max-width:100%; } }

        /* ── Section base ── */
        .eml-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .eml-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .eml-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .eml-sec.dark .eml-shell { position:relative; z-index:1; }

        .eml-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .eml-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing: 0.01em; line-height: 1.04; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .eml-h2 span { color:${GREEN}; }
        .eml-sec.dark .eml-h2 { color:#fff; }
        .eml-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .eml-sec.dark .eml-lead { color:rgba(255,255,255,0.68); }

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
        .eml-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .eml-h1 { position:relative; font-size:clamp(46px,7vw,104px); font-weight:900; letter-spacing: 0.01em; line-height: 1.02; color:#fff; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .eml-lede { position:relative; font-size:clamp(19px,2.2vw,32px); font-weight:900; letter-spacing:-0.035em; line-height:1.08; color:#fff; margin:18px 0 0; }
        .eml-lede span { color:${GREEN}; }
        .eml-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .eml-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .eml-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .eml-bp svg { transition:transform .2s; } .eml-bp:hover svg { transform:translateX(3px); }
        .eml-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .eml-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .eml-bp, .eml-bg, .eml-tel{ width:100%; justify-content:center; } }

        /* Hero animated email-campaign panel (in-code, no fetched image) */
        .eml-visual { padding:clamp(20px,2.4vw,36px); border:1px solid rgba(255,255,255,0.12); overflow:hidden;
          display:flex; align-items:center; justify-content:center; min-height:clamp(300px,42vw,520px); }
        .mock { position:relative; z-index:1; width:100%; max-width:430px; border-radius:22px;
          background:linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
          border:1px solid rgba(255,255,255,0.12); padding:clamp(16px,1.8vw,24px); box-shadow:0 30px 60px -30px rgba(0,0,0,0.6); }
        .mock-top { display:flex; align-items:center; gap:12px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1); }
        .mock-ic { width:38px; height:38px; border-radius:11px; flex-shrink:0; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${GREEN},#2c9e74); color:${NAVY}; }
        .mock-tt { display:flex; flex-direction:column; line-height:1.25; margin-right:auto; }
        .mock-k { font-size:10px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(255,255,255,0.5); }
        .mock-v { font-size:14px; font-weight:800; color:#fff; letter-spacing:-0.01em; }
        .mock-live { display:inline-flex; align-items:center; gap:7px; font-size:11px; font-weight:800; letter-spacing:0.5px; text-transform:uppercase; word-spacing: 0.14em; color:${GREEN}; }
        .mock-list { display:flex; flex-direction:column; gap:10px; padding:16px 0; }
        .mrow { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px;
          background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08);
          animation:mrow-in 2.4s ease-in-out infinite; will-change:transform, opacity; }
        @keyframes mrow-in { 0%{ transform:translateY(11px); opacity:0; } 14%,76%{ transform:translateY(0); opacity:1; } 100%{ transform:translateY(-7px); opacity:0; } }
        .mrow-av { width:30px; height:30px; border-radius:50%; flex-shrink:0; background:linear-gradient(150deg,${GREEN}88, rgba(255,255,255,0.16)); }
        .mrow-lines { display:flex; flex-direction:column; gap:6px; flex:1; }
        .mrow-l1 { height:7px; width:70%; border-radius:4px; background:rgba(255,255,255,0.3); }
        .mrow-l2 { height:6px; width:45%; border-radius:4px; background:rgba(255,255,255,0.15); }
        .mrow-tick { width:22px; height:22px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:${GREEN}; }
        .mock-metrics { display:grid; grid-template-columns:1fr 1fr; gap:12px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.1); }
        .metric { border-radius:12px; padding:12px 14px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); }
        .metric-k { display:block; font-size:10px; font-weight:800; letter-spacing:1.2px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(255,255,255,0.5); }
        .metric-v { display:block; font-size:15px; font-weight:900; color:${GREEN}; margin:3px 0 10px; letter-spacing:-0.02em; }
        .bars { display:flex; align-items:flex-end; gap:5px; height:34px; }
        .bars i { flex:1; border-radius:3px 3px 0 0; background:${GREEN}; transform-origin:bottom; transform:scaleY(0.28);
          animation:bar-grow 1.8s ease-in-out infinite; will-change:transform; }
        .bars.alt i { background:rgba(255,255,255,0.24); animation-duration:2.3s; }
        @keyframes bar-grow { 0%,100%{ transform:scaleY(0.25); } 50%{ transform:scaleY(1); } }

        .eml-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:eml-scan 4.6s linear infinite; will-change:transform; }
        @keyframes eml-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .eml-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:eml-float 6s ease-in-out infinite; will-change:transform; }
        .eml-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:eml-spin 3.4s linear infinite; will-change:transform; }
        .eml-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .eml-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .eml-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .eml-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(255,255,255,0.66); }
        .eml-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .eml-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:eml-pulse 1.8s ease-in-out infinite; }
        @keyframes eml-spin { to { transform:rotate(360deg); } }
        @keyframes eml-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes eml-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:eml-float 7s ease-in-out infinite; will-change:transform; }
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
        .eml-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .eml-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing: 0.01em; line-height: 1.1; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .eml-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .eml-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .eml-scan, .eml-emblem, .eml-emblem-ring, .eml-dot, .chip,
          .mrow, .bars i { animation:none !important; }
          .mrow { transform:none; opacity:1; }
          .bars i { transform:scaleY(0.7); }
          .eml-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="eml-sec dark eml-hero">
        <div className="eml-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Email Marketing Company in Australia</Eyebrow>
                <h1 className="eml-h1">Email Marketing Services in Australia</h1>
                <p className="eml-lede">
                  The one channel you <span>actually own</span>.
                </p>
                <div className="eml-cta">
                  <button className="eml-bp" onClick={() => navigate('/contact')}>
                    Get a free email audit
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="eml-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile n eml-visual" aria-label="Animated email campaign panel: emails delivering, with sales measured over opens">
              <div className="eml-scan" aria-hidden="true" />
              <div className="mock" aria-hidden="true">
                <div className="mock-top">
                  <span className="mock-ic"><Send size={16} /></span>
                  <div className="mock-tt">
                    <span className="mock-k">Campaign</span>
                    <span className="mock-v">Monthly newsletter</span>
                  </div>
                  <span className="mock-live"><span className="eml-dot" /> Sending</span>
                </div>
                <div className="mock-list">
                  {[0, 1, 2, 3].map(i => (
                    <div className="mrow" style={{ animationDelay: `${i * 0.6}s` }} key={i}>
                      <span className="mrow-av" />
                      <span className="mrow-lines"><span className="mrow-l1" /><span className="mrow-l2" /></span>
                      <span className="mrow-tick">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5L5 9L9.5 3.5" stroke={NAVY} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mock-metrics">
                  <div className="metric">
                    <span className="metric-k">Sales</span>
                    <span className="metric-v">Measured</span>
                    <div className="bars">
                      {[0, 1, 2, 3, 4].map(k => <i key={k} style={{ animationDelay: `${k * 0.14}s` }} />)}
                    </div>
                  </div>
                  <div className="metric">
                    <span className="metric-k">Opens</span>
                    <span className="metric-v">Secondary</span>
                    <div className="bars alt">
                      {[0, 1, 2, 3, 4].map(k => <i key={k} style={{ animationDelay: `${k * 0.18}s` }} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="eml-emblem" aria-hidden="true">
                <div className="eml-emblem-ring"><span className="eml-emblem-ic"><Mail size={20} /></span></div>
                <div className="eml-emblem-tx">
                  <span className="eml-emblem-k">Your List</span>
                  <span className="eml-emblem-v"><span className="eml-dot" /> Owned</span>
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
                Every other channel is rented. Google can change the algorithm, Meta can change the reach, and your ad
                costs can double overnight. Your email list is the one audience nobody can take away from you. Most
                businesses barely use it.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based email marketing company that treats your list as the asset it is, not an
                afterthought you send to twice a year. We handle the strategy, the design, the copy, the automation, and
                the reporting, and we point every send at something you can measure: enquiries, sales, and repeat
                customers. When a campaign gets a high open rate and sells nothing, we do not call that a win. We look at
                what actually moved the business and do more of it.
              </p>
              <p className="t-d">
                <strong>We are part of <ElomaLink />,</strong> which means your email sits next to SEO, web development, PPC,
                social media, and content under one roof. That matters more than it sounds. Your list is fed by your
                website, your social channels, and your search traffic, and all of that is usually run by different
                suppliers who never talk to each other. When one team handles the whole picture, your channels feed your
                list and your list brings people back, instead of a set of disconnected tools nobody is joining up.
              </p>
              <p className="t-d">
                One partner. One team that builds the list, designs the emails, writes the copy, sets up the automation,
                and reads the results back to you in plain language.
              </p>
              <p className="t-d">
                Get a free email audit. No lock-in, just an honest look at what your email is doing and what it could be
                doing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why work with EG Digital ── */}
      <section className="eml-sec">
        <div className="eml-shell">
          <div className="eml-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="eml-h2">Why work with EG Digital as your email marketing company in <span>Australia</span></h2>
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

      {/* ── Our email marketing services ── */}
      <section className="eml-sec dark">
        <div className="eml-shell">
          <div className="eml-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="eml-h2">Our email marketing <span>services</span></h2>
            <p className="eml-lead">
              We are a full-service email marketing company, so you can hand us the whole program or the single piece you
              are missing. As part of our wider digital marketing services in Australia, here is what we do.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // Email strategy is a full-width feature row; the rest form a varied bento.
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

      {/* ── Who we run email for ── */}
      <section className="eml-sec">
        <div className="eml-shell">
          <div className="eml-head">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="eml-h2">Who we run email <span>for</span></h2>
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
      <section className="eml-sec dark">
        <div className="eml-shell">
          <div className="eml-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="eml-h2">How we <span>work</span></h2>
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
      <section className="eml-sec">
        <div className="eml-shell">
          <div className="eml-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="eml-h2">What email marketing costs in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on how many campaigns and automations you need and how much design and copy
                  sit behind them, and any company quoting a flat number before understanding your business is guessing.
                </p>
                <p className="cost-p">
                  For context, most Australian small businesses pay between $500 and $1,500 per month for an ongoing email
                  program: a regular campaign or newsletter, a couple of core automations, and monthly reporting. A fuller
                  program with frequent campaigns, a full suite of automated flows, custom design, and detailed reporting
                  typically runs $1,500 to $4,000 per month. One-off projects, a template build, an automation setup, a
                  list clean-up, are usually scoped separately. Your email platform, such as Klaviyo or Mailchimp, is
                  billed by the provider on top, usually scaled to list size.
                </p>
                <p className="cost-p">
                  Two things worth knowing. First, price tracks how much you send and how much of it is custom, so a full
                  set of flows plus weekly campaigns costs more than a monthly newsletter. Second, cheap email is usually
                  cheap for a reason: a bargain package generally means a generic template blasted to your whole list with
                  no strategy or segmentation, which is why so much email gets ignored or marked as spam. We would rather
                  do fewer things well and show you they worked.
                </p>
                <p className="cost-p">
                  We quote from your actual needs, and the quote comes with a clear scope, not just a number. You will
                  know what gets sent each month, and the report will show whether it landed.
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
          <p className="eml-note">
            Get a free email audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International Email Marketing Services ── */}
      <section className="eml-sec dark">
        <div className="eml-shell">
          <div className="eml-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="eml-h2">International Email Marketing <span>Services</span></h2>
            <p className="eml-lead">
              Based in Melbourne, EG Digital delivers email marketing services in Australia while also helping businesses
              grow their email across the UK, USA, Canada, and Singapore, with strategy and campaigns built for each
              market's audience and inbox behaviour.
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
              Whether your business operates in Australia or internationally, our approach stays the same: build a list
              you own, send email that fits the brand, and measure it by the revenue it produces rather than the opens it
              collects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to make your email work ── */}
      <section className="eml-sec">
        <div className="eml-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="ready-h">Ready to make your email work?</h2>
              <p className="ready-p">
                Tell us where your email is falling short. We will run a free audit, review what your email and your
                competitors are doing, and tell you exactly where the opportunity is. If we can help, we will show you
                how. If we cannot, we will tell you that too.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free email audit below.
              </p>
              <div className="ready-cta">
                <button className="eml-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="eml-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="eml-sec">
        <div className="eml-shell">
          <div className="eml-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="eml-h2">Frequently asked <span>questions</span></h2>
          </div>
          <div className="bento">
            {FAQS.map((f, i) => {
              const span = i === 0 ? 'c7' : 'c5'
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
        heading="Let's make your"
        highlight="email work."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
