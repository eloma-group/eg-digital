import {
  TrendingUp, Wallet, Users, Unlock, ClipboardList, Target, Mail,
  PenLine, Database, Repeat, Building2, Cpu, Briefcase, Store,
  Globe, Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'
import { ElomaLink } from '../../../lib/elomaLink'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - LINKEDIN ADS MANAGEMENT (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "Pipeline" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: TrendingUp,
    t: 'We report on pipeline, not impressions',
    d: "On a platform this expensive, vanity metrics are a fast way to waste money. Our reporting starts with qualified leads, the opportunities they become, and the revenue behind them, then works back to the cost per lead that produced them. LinkedIn's real value shows up in your CRM, not in a dashboard of impressions, so that is where we measure it.",
  },
  {
    icon: Wallet,
    t: '100% of your budget goes to LinkedIn',
    d: 'Every dollar you budget for ads goes to LinkedIn. We do not take a cut of your media spend or hide a markup inside it. You pay us a clear management fee for the strategy, the creative, the optimisation, and the reporting, and you see exactly where the ad money went. On a channel where every click is a premium, that transparency matters more, not less. No opaque commissions, no vague "media handling" line.',
  },
  {
    icon: Users,
    t: 'One team for ads, creative, and CRM',
    d: 'You get a paid social strategist, campaign specialists, designers, copywriters, and developers who work together, not a single account manager forwarding your questions to people you never meet. Because EG Digital also builds websites and runs the underlying cloud and software, the landing page fix or the CRM connection that usually stalls for weeks elsewhere gets done in days. On LinkedIn, where leads have to land where your sales team can act on them, that integration is the difference between a lead captured and a lead lost.',
  },
  {
    icon: Unlock,
    t: 'No lock-in, and an honest answer on fit',
    d: 'No 12-month contracts. And unlike agencies that will sell LinkedIn to anyone, we will tell you if it is not right for your business. LinkedIn works for a considered, higher-value sale. If your product is low-value or impulse-driven, we will point you to a channel that fits rather than take your money. We earn the renewal each month by moving your numbers, not by locking you in.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: ClipboardList,
    t: 'Campaign strategy and setup',
    paras: [
      'We build LinkedIn campaigns around a clear business goal, whether that is qualified leads, demo requests, event sign-ups, or reaching a specific set of accounts. Each campaign starts with defined targets like cost per lead and cost per opportunity, and a budget structured across the funnel, so performance is measured against outcomes that actually support growth rather than raw click volume.',
    ],
  },
  {
    icon: Target,
    t: 'Audience targeting and audience building',
    paras: [
      'This is what you are paying the LinkedIn premium for, so it has to be right. We target by the criteria that no other platform verifies at this depth: job title, seniority, function, industry, company size, and even named companies for account-based campaigns. We build the audience from your ideal customer profile and your own data, then keep it tight enough to justify the cost per click without starving the campaign of the volume it needs to learn.',
    ],
  },
  {
    icon: Mail,
    t: 'Ad formats: Sponsored Content, InMail, and more',
    paras: [
      "We use the right format for the job. Single-image Sponsored Content is the workhorse for the feed. Carousels tell a multi-point story like a case study. Video builds consideration. Sponsored Messaging (InMail) lands a personalised message directly in a decision-maker's inbox. And Lead Gen Forms pre-fill from the user's LinkedIn profile, which lifts conversion rates and lowers cost per lead because the prospect never has to leave the platform. We match the format to your objective rather than running one type and hoping.",
    ],
  },
  {
    icon: PenLine,
    t: 'Creative and business-focused copywriting',
    paras: [
      "LinkedIn is a professional context, so the creative has to earn attention without the gimmicks that work elsewhere. We design ads that fit the feed and read as credible, and we write copy that explains your offer in plain language, focused on the problem your buyer is actually trying to solve, backed by proof. Because creative fatigues faster on LinkedIn's smaller, high-value audiences, we refresh it on a schedule instead of running it into the ground.",
    ],
  },
  {
    icon: Database,
    t: 'CRM integration and lead tracking',
    paras: [
      'A lead sitting in a LinkedIn dashboard nobody checks is a wasted lead. We connect your campaigns to your CRM so enquiries land where your sales team can act on them immediately, and so we can track from click through to closed deal. This is the step that lets us optimise against cost per opportunity rather than cost per click, and it is the one most accounts skip.',
    ],
  },
  {
    icon: Repeat,
    t: 'Retargeting and account-based campaigns',
    paras: [
      'B2B sales cycles are long, and one touch rarely closes a deal. We build retargeting audiences from your site visitors and video viewers to stay in front of buyers as they move through a considered decision, and we run account-based campaigns that put your message in front of every stakeholder at the specific companies you want to win.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Building2,
    t: 'B2B companies',
    d: "This is LinkedIn's home ground, and ours. B2B buyers research before they ever talk to sales, decisions involve multiple stakeholders, and the lead has to be qualified or it wastes everyone's time. We run campaigns that reach the right decision-makers, generate leads worth chasing, and connect to your CRM so nothing slips through. Longer sales cycles and multiple approvers are normal territory for us.",
  },
  {
    icon: Cpu,
    t: 'SaaS and technology',
    d: 'We build campaigns that speak to the problem your product solves, promoting demos, free trials, webinars, and gated content to the exact roles and industries that buy. Retargeting keeps you in front of buyers across a long sales cycle, and account-based campaigns let you go after named target accounts directly.',
  },
  {
    icon: Briefcase,
    t: 'Professional and financial services',
    d: 'Trust and credibility come first in professional services, and LinkedIn is built for it. We put thought leadership and clear, compliant messaging in front of senior decision-makers and business owners, breaking a complex offering down into plain language that earns a considered buyer\'s attention.',
  },
  {
    icon: Store,
    t: 'Small businesses with a high-value sale',
    d: 'A smaller budget can still work on LinkedIn if the targeting is tight and the objective is clear. We help small Australian businesses with a considered, higher-value sale focus on a single strong offer, reach decision-makers they could not easily access elsewhere, and avoid the wasted spend that sinks most small LinkedIn campaigns. If your sale is low-value, we will tell you LinkedIn is not the right fit rather than take the budget.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Fit check and strategy',
    d: "We start by being honest about whether LinkedIn suits your business, then audit your market and your competitors' positioning. You get a documented strategy with a recommended budget, target metrics like cost per lead and cost per opportunity, and a clear read on what good looks like before we spend a cent.",
  },
  {
    t: 'Tracking and CRM setup',
    d: 'Before the ads go live, we get the measurement right: conversion tracking, the LinkedIn Insight Tag, and the CRM connection that decides whether a lead can actually reach your sales team. On LinkedIn, where you are measuring cost per opportunity rather than cost per click, this step is what makes the reporting meaningful.',
  },
  {
    t: 'Creative and build',
    d: 'We build the campaigns, design the creative, write the copy, and structure the audiences and budgets across the formats and objectives that fit your goals. You see the reasoning and the assets, not a black box.',
  },
  {
    t: 'Optimisation',
    d: 'This is where a premium budget is protected or wasted. We refine targeting to keep the cost per lead in check, test creative and messaging against each other, manage frequency so your audience does not burn out, and shift budget toward what converts. LinkedIn is not set-and-forget, and at these prices it never can be.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to leads, opportunities, and revenue, in plain language, with next month's priorities set against the data. Because B2B deals take time to close, we hold the account to pipeline impact over the full sales cycle, not a day-30 snapshot.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'LinkedIn Ads in the UK',
    d: "Our LinkedIn advertising services in the UK are built for one of the world's most competitive B2B markets. We manage campaigns that control the cost of reaching senior decision-makers in crowded auctions, tighten targeting by role and industry, and tie spend to measurable pipeline rather than impressions.",
  },
  {
    t: 'LinkedIn Ads in the USA',
    d: 'Businesses looking for LinkedIn ads management in the USA face the most expensive B2B auction in the world, where reaching enterprise decision-makers carries a real premium. We combine precise account and role targeting, strong creative, and CRM-connected tracking to help businesses generate qualified pipeline at a defensible cost across the United States.',
  },
  {
    t: 'LinkedIn Ads in Canada',
    d: 'Our LinkedIn advertising services in Canada focus on accountable spend: tight targeting, clean conversion tracking, and campaigns aligned to real buyer intent. Whether you operate locally or nationally, we help Canadian B2B businesses turn a premium channel into qualified leads and closed deals.',
  },
  {
    t: 'LinkedIn Ads in Singapore',
    d: "Singapore's competitive B2B market rewards sharp targeting and credible creative. Our LinkedIn advertising services in Singapore help businesses reach decision-makers across the region, generate qualified enquiries, and manage campaigns with a clear line from click to revenue.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Is LinkedIn advertising effective for Australian businesses?',
    a: 'Yes, for the right kind of business. LinkedIn is the most effective channel in Australia for reaching decision-makers by job title, seniority, industry, and company size, which is why B2B advertisers consistently rate its leads as their highest quality. It works best for businesses with a considered, higher-value sale, longer sales cycles, and buying decisions that involve several stakeholders, because LinkedIn keeps you visible and credible throughout that process. It is less suited to low-value or impulse purchases, where the cost per click is hard to justify. The honest test is your deal value and your sales cycle: if one client is worth thousands and the decision takes weeks, LinkedIn usually pays. If not, we will point you somewhere cheaper.',
  },
  {
    q: 'How much should I spend on LinkedIn ads?',
    a: "Enough to gather real data, and no more than your economics justify. LinkedIn's technical minimum is a $10 daily budget, but the practical floor for a B2B campaign is closer to $50 to $100 a day, because below that you generate clicks too slowly to learn anything. In Australian terms, most meaningful programs start at $1,500 to $5,000 a month in ad spend, separate from management fees, with competitive industries and senior audiences needing more. The right number works backwards from your goal: if you know your cost per lead, your lead-to-client rate, and how many clients you need, you can size the budget to hit it. We run that maths against your actual numbers rather than quoting a figure off a menu.",
  },
  {
    q: 'Can I hire someone to manage my LinkedIn ads?',
    a: 'Yes, and on a platform this expensive it usually pays for itself. LinkedIn punishes poorly built accounts with even higher costs, so the difference between a specialist and a self-managed campaign shows up directly in your cost per lead. A good manager brings the audience strategy, the right format choices, the creative testing, the correct tracking, and the CRM connection that gets leads to your sales team, plus the ongoing optimisation that keeps a premium budget from leaking. With EG Digital you also get designers, copywriters, and the developers to fix the landing page and CRM under the same roof, so the parts of a B2B campaign that usually get handed off to a third party are handled in-house. The management fee is only worth it if it recovers more than it costs, which is the bar we hold ourselves to.',
  },
  {
    q: 'How do you set up LinkedIn ads for a new client?',
    a: 'We start with a fit check, because there is no point setting up a channel that will not pay. Assuming LinkedIn suits the business, we define the objective and the target audience by role, seniority, industry, and company size, then get the tracking right: the LinkedIn Insight Tag, conversion tracking, and the CRM connection so leads reach the sales team. From there we build the campaign structure, choose the ad formats that match the objective, design the creative, and write the copy, then launch with a budget structured across the funnel. Once live, we optimise continuously against cost per lead and cost per opportunity, and report back in plain language. You see the reasoning at every step.',
  },
  {
    q: 'How can I improve my LinkedIn ad conversion rates?',
    a: 'The biggest levers are targeting, format, and the offer. Tighten the audience so your spend only reaches genuine decision-makers, then use LinkedIn\'s Lead Gen Forms, which pre-fill from the user\'s profile and consistently convert better than sending people to a landing page because there is less friction. Make sure the offer is worth a considered buyer\'s attention, a webinar, a piece of original research, a genuinely useful resource, rather than a generic "contact us." Refresh creative before it fatigues, since LinkedIn\'s audiences are smaller and see your ads sooner. And connect everything to your CRM so you can see which audiences and messages actually produce opportunities, then shift budget toward them. Conversion rate on LinkedIn is won in the setup, not the bid.',
  },
]

// Short signal chips for the hero - every phrase is drawn verbatim from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: 'Pipeline', l: 'we report on qualified leads and revenue, not impressions' },
  { v: '100% to LinkedIn', l: 'no cut of your media spend, no hidden markup' },
  { v: 'No lock-in', l: 'and an honest answer on whether LinkedIn fits' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$8 - $18 CPC', l: 'Typical LinkedIn cost per click for most B2B audiences in Australia for 2026.' },
  { v: '$1,500 - $5,000/mo', l: 'Practical ad-spend floor for a meaningful B2B program, separate from management fees.' },
  { v: '15% - 20%', l: 'Management fee as a percentage of ad spend, often dropping as budgets grow.' },
]

export function LinkedInAdsManagement() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/linkedin-ads-management')

  usePageMeta(
    'LinkedIn Ads Management Services Australia | B2B | EG Digital',
    'B2B LinkedIn advertising company in Australia. Reach decision-makers by role, seniority & industry, with campaigns managed for pipeline, not impressions. CRM-connected, no lock-in. Free consultation.',
  )

  return (
    <PageLayout>
      <style>{`
        .lna-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .lna-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .lna-shell{ max-width:2440px; } }
        @media (max-width:768px){ .lna-shell{ max-width:100%; } }

        /* ── Section base ── */
        .lna-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .lna-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .lna-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .lna-sec.dark .lna-shell { position:relative; z-index:1; }

        .lna-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .lna-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing: 0.01em; line-height: 1.04; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .lna-h2 span { color:${GREEN}; }
        .lna-sec.dark .lna-h2 { color:#fff; }
        .lna-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .lna-sec.dark .lna-lead { color:rgba(255,255,255,0.68); }

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
        .lna-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .lna-h1 { position:relative; font-size:clamp(40px,5.8vw,90px); font-weight:900; letter-spacing: 0.01em; line-height: 1.02; color:#fff; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .lna-lede { position:relative; font-size:clamp(19px,2.2vw,32px); font-weight:900; letter-spacing:-0.035em; line-height:1.08; color:#fff; margin:18px 0 0; }
        .lna-lede span { color:${GREEN}; }
        .lna-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .lna-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .lna-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .lna-bp svg { transition:transform .2s; } .lna-bp:hover svg { transform:translateX(3px); }
        .lna-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .lna-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .lna-bp, .lna-bg, .lna-tel{ width:100%; justify-content:center; } }

        /* Hero image (Unsplash) + animated scan + emblem */
        .hero-img { padding:0; border:1px solid rgba(255,255,255,0.12); background:${NAVY}; min-height:clamp(300px,42vw,520px); }
        .hero-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .hero-img::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 38%, ${NAVY}77); pointer-events:none; }
        .lna-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:lna-scan 4.6s linear infinite; will-change:transform; }
        @keyframes lna-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .lna-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:lna-float 6s ease-in-out infinite; will-change:transform; }
        .lna-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:lna-spin 3.4s linear infinite; will-change:transform; }
        .lna-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .lna-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .lna-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .lna-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(255,255,255,0.66); }
        .lna-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .lna-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:lna-pulse 1.8s ease-in-out infinite; }
        @keyframes lna-spin { to { transform:rotate(360deg); } }
        @keyframes lna-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes lna-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:lna-float 7s ease-in-out infinite; will-change:transform; }
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
        .lna-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .lna-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing: 0.01em; line-height: 1.1; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .lna-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .lna-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .lna-scan, .lna-emblem, .lna-emblem-ring, .lna-dot, .chip { animation:none !important; }
          .lna-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="lna-sec dark lna-hero">
        <div className="lna-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>B2B LinkedIn Advertising Company in Australia</Eyebrow>
                <h1 className="lna-h1">LinkedIn Ads Management Services in Australia</h1>
                <p className="lna-lede">
                  Reach the decision-makers who sign off on the deal, with the sharpest <span>B2B targeting there is</span>.
                </p>
                <div className="lna-cta">
                  <button className="lna-bp" onClick={() => navigate('/contact')}>
                    Get a free LinkedIn ads consultation
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="lna-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile hero-img">
              <img
                src={img('photo-1573497491208-6b1acb260507', 900, 900)}
                alt="LinkedIn ads management services in Australia - B2B LinkedIn advertising company in Australia"
                width={900} height={900} loading="eager" decoding="async"
              />
              <div className="lna-scan" aria-hidden="true" />
              <div className="lna-emblem" aria-hidden="true">
                <div className="lna-emblem-ring"><span className="lna-emblem-ic"><TrendingUp size={20} /></span></div>
                <div className="lna-emblem-tx">
                  <span className="lna-emblem-k">Qualified Pipeline</span>
                  <span className="lna-emblem-v"><span className="lna-dot" /> Growing</span>
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
                Most agencies treat LinkedIn like another social channel and wonder why the budget disappears. LinkedIn is
                not Facebook. It is the most expensive ad platform per click in Australia, and for B2B it is often worth
                every cent, but only if the targeting is tight and the offer is worth a decision-maker's attention.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based LinkedIn advertising company that treats paid LinkedIn as a pipeline
                channel, not an awareness exercise. We plan, build, and manage LinkedIn campaigns for businesses with a
                considered, higher-value sale, and we tie every dollar of ad spend to one number you actually care about:
                qualified leads that reach your sales team ready to talk. When a campaign is not paying its way, we tell
                you and we fix it, rather than letting a premium budget burn on the wrong audience.
              </p>
              <p className="t-d">
                <strong>We are part of <ElomaLink />,</strong> so your LinkedIn advertising sits next to web development,
                SEO, Microsoft and cloud, custom software, and cyber security under one roof. That matters more than it
                sounds. The landing page your ads point to, the conversion tracking behind it, and the CRM that catches
                the lead are usually where B2B campaigns leak money. When the same team runs all of it, the leaks get
                sealed instead of blamed on someone else's developer queue.
              </p>
              <p className="t-d">
                One partner. One team that plans the campaign, builds the creative, writes the copy, connects it to your
                CRM, and reads the numbers back to you in plain language.
              </p>
              <p className="t-d">
                Get a free LinkedIn ads consultation. No lock-in, just a clear read on whether LinkedIn is right for your
                business and what it should be bringing back.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why hire EG Digital ── */}
      <section className="lna-sec">
        <div className="lna-shell">
          <div className="lna-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="lna-h2">Why hire EG Digital as your B2B LinkedIn advertising company in <span>Australia</span></h2>
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

      {/* ── Our LinkedIn ads services ── */}
      <section className="lna-sec dark">
        <div className="lna-shell">
          <div className="lna-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="lna-h2">Our LinkedIn ads <span>services</span></h2>
            <p className="lna-lead">
              LinkedIn advertising is more than a Sponsored Post. It runs across several ad formats and a targeting
              system no other platform can match, and getting the combination right is where the results are. Here is
              what we do.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // Campaign strategy is a full-width feature row; the rest form a varied bento.
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

      {/* ── Who we run LinkedIn ads for ── */}
      <section className="lna-sec">
        <div className="lna-shell">
          <div className="lna-head">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="lna-h2">Who we run LinkedIn ads <span>for</span></h2>
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
      <section className="lna-sec dark">
        <div className="lna-shell">
          <div className="lna-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="lna-h2">How we <span>work</span></h2>
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
      <section className="lna-sec">
        <div className="lna-shell">
          <div className="lna-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="lna-h2">What LinkedIn ads cost in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: more than every other channel, and any company promising cheap LinkedIn clicks is either
                  guessing or running irrelevant traffic.
                </p>
                <p className="cost-p">
                  For context, LinkedIn cost per click in Australia typically runs $8 to $18 for most B2B audiences in
                  2026, dropping under $10 for niche or less competitive sectors and climbing past $25 for C-suite and
                  enterprise targeting. That is roughly three to five times what you would pay on Google and higher again
                  than Meta. Cost per thousand impressions runs around $20 to $50, and cost per lead spans $80 to $300 or
                  more depending on your industry, offer, and how senior your audience is. LinkedIn's minimum is a $10
                  daily budget, but the practical floor for gathering usable data is closer to $50 to $100 a day per
                  campaign, which puts most meaningful programs at $1,500 to $5,000 a month in ad spend or more.
                </p>
                <p className="cost-p">
                  Management fees are separate from that ad spend. The ad spend is what you pay LinkedIn for the clicks.
                  The management fee is what you pay us to make those expensive clicks profitable. On LinkedIn, this
                  typically runs as a flat monthly retainer or around 15% to 20% of ad spend, with the percentage often
                  dropping as budgets grow.
                </p>
                <p className="cost-p">
                  Two things worth knowing. First, the metric that matters here is not cost per click, it is cost per
                  qualified opportunity and cost per closed deal. A $200 lead looks expensive until a third of those
                  leads become opportunities and a fifth close at a five-figure deal value, at which point LinkedIn is
                  often the best-returning channel a B2B business runs. Second, LinkedIn punishes narrow, poorly built
                  accounts with even higher costs, so the skill is in the targeting and the creative, not the size of the
                  bid. That is exactly where a specialist earns their fee.
                </p>
                <p className="cost-p">
                  We quote from an actual audit of your situation, and the quote comes with a scope document, not just a
                  number. You will know what gets done each month, and the report will show whether it did.
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
          <p className="lna-note">
            Get a free LinkedIn ads consultation and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International LinkedIn Ads Services ── */}
      <section className="lna-sec dark">
        <div className="lna-shell">
          <div className="lna-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="lna-h2">International LinkedIn Ads <span>Services</span></h2>
            <p className="lna-lead">
              Based in Melbourne, EG Digital delivers LinkedIn advertising management in Australia while also helping B2B
              businesses grow their pipeline across the UK, USA, Canada, and Singapore, with campaigns built for each
              market's competition, cost per lead, and buyer behaviour.
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
              Whether your business operates in Australia or internationally, our approach stays the same: send every
              dollar to the platform, target the exact decision-makers who matter, build creative worth their attention,
              optimise relentlessly, and report on the pipeline the campaigns actually produce.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to reach the decision-makers ── */}
      <section className="lna-sec">
        <div className="lna-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free consultation</Eyebrow>
              <h2 className="ready-h">Ready to reach the decision-makers who matter?</h2>
              <p className="ready-p">
                Tell us who you are trying to reach and what you are selling. We will run a free audit, review your
                competitors, and give you a straight read on whether LinkedIn is right for your business and what it
                should be bringing back. If we can help, we will show you how. If LinkedIn is not the right fit, we will
                tell you that too.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free LinkedIn ads consultation below.
              </p>
              <div className="ready-cta">
                <button className="lna-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free consultation
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="lna-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lna-sec">
        <div className="lna-shell">
          <div className="lna-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="lna-h2">Frequently asked <span>questions</span></h2>
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
        highlight="pipeline."
        button="Get a free consultation"
      />
    </PageLayout>
  )
}
