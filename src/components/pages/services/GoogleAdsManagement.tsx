import {
  TrendingUp, TrendingDown, Wallet, Users, Unlock, Search, ShoppingCart,
  Zap, LayoutGrid, PlaySquare, Repeat, FileSearch, Store, ShoppingBag,
  Building2, Rocket, Globe, Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - GOOGLE ADS MANAGEMENT (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "Cost Per Lead" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: TrendingUp,
    t: 'We report on revenue, not clicks',
    d: 'A click is a cost, not a result. Our reporting starts with enquiries, leads, and the revenue they turn into, then works back to the cost per lead and the return on ad spend that produced them. If a report leads with impressions and click-through rate and buries the conversions, it is hiding the part that matters. Ours puts the part that matters first.',
  },
  {
    icon: Wallet,
    t: '100% of your budget goes to Google',
    d: 'Every dollar you budget for ads goes to Google. We do not take a cut of your media spend or hide a markup inside it. You pay us a clear management fee for the strategy, the build, the optimisation, and the reporting, and you see exactly where the ad money went. No opaque commissions, no vague "media handling" line, and no incentive to spend more of your money just to inflate our fee.',
  },
  {
    icon: Users,
    t: 'One team for ads, landing pages, and tracking',
    d: 'You get a paid media strategist, campaign specialists, copywriters, and developers who work together, not a single account manager forwarding your questions to people you never meet. Because EG Digital also builds websites and runs the underlying cloud and tracking, the landing page fix or conversion-tracking repair that usually waits weeks elsewhere gets done in days. That is often the difference between a Google Ads campaign that converts and one that quietly wastes half its budget.',
  },
  {
    icon: Unlock,
    t: 'No lock-in, no guesswork',
    d: 'No 12-month contracts. No "leads guaranteed in 30 days," because anyone promising a fixed result before seeing your account is either guessing or about to waste your money. We earn the renewal each month by moving your numbers. A short minimum to let campaigns gather data and settle is fair. A long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Search,
    t: 'Search campaigns',
    paras: [
      "Search ads put you at the top of the results page the moment someone types what you sell. This is the highest-intent inventory in paid advertising, and it is also the easiest to waste if the account is loose. We build tight keyword themes, write ads that match the searcher's intent, add the negative keywords that stop your budget bleeding into irrelevant searches, and prune the terms that spend without converting. The goal is simple: fewer wasted clicks, more of the right ones, and a cost per lead you can build a business on.",
    ],
  },
  {
    icon: ShoppingCart,
    t: 'Google Shopping campaigns',
    paras: [
      'For online stores, Shopping is usually where the return lives. We optimise your product feed, structure campaigns so your best-margin products get the budget they deserve, and target shoppers who are ready to buy rather than just browse. Because EG Digital also builds and hosts e-commerce stores, the feed errors and tracking gaps that quietly wreck Shopping campaigns get fixed at the source instead of worked around.',
    ],
  },
  {
    icon: Zap,
    t: 'Performance Max campaigns',
    paras: [
      'Performance Max spreads a single campaign across Search, Shopping, Display, YouTube, Gmail, and Maps, with Google\'s automation deciding where your budget goes. Handled carelessly, it becomes a black box that spends your money where you cannot see it. We handle it deliberately: strong creative assets, clean audience signals, the right conversion goals, and the account structure that keeps Performance Max from cannibalising your branded search. Automation does the placement. We keep it pointed at profit.',
    ],
  },
  {
    icon: LayoutGrid,
    t: 'Display campaigns',
    paras: [
      'Display keeps your brand in front of the right audience across millions of sites, apps, and videos, and it is where remarketing does its best work. We use it to re-engage people who visited your site but did not act, and to build awareness with audiences that match your best customers. Creative and targeting decide whether display works or just burns impressions, so we handle both rather than pointing a generic banner at everyone.',
    ],
  },
  {
    icon: PlaySquare,
    t: 'YouTube campaigns',
    paras: [
      'YouTube is the second-largest search engine and one of the biggest reach platforms in Australia, with over 16 million active users. We run video campaigns that build awareness, drive consideration, and remarket to warm audiences, with targeting tuned to where your buyer is in their journey. We handle the targeting, the placement, and the measurement so the spend is accountable rather than a branding indulgence.',
    ],
  },
  {
    icon: Repeat,
    t: 'Remarketing and retargeting',
    paras: [
      'Most people do not convert on the first visit. Remarketing brings them back. We build audiences from the people who viewed a product, started a form, or abandoned a cart, then serve them the right message across Search, Display, and YouTube to chase the sale rather than write it off. It is usually some of the cheapest revenue in the account, and most businesses leave it on the table.',
    ],
  },
  {
    icon: FileSearch,
    t: 'Google Ads audits',
    paras: [
      'If you already run Google Ads and suspect the budget is leaking, an audit tells you where. We review your account structure, keywords and negatives, bidding, conversion tracking, ad copy, and landing pages, then hand you a documented read on what is working, what is wasting money, and what to fix first. You get the findings whether or not you go on to work with us.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need enquiries coming in without a budget that swallows your year. We build lean, conversion-focused Google Ads campaigns for small businesses across Australia, with clear pricing and no padding, and we start where your money works hardest rather than spreading it thin across every campaign type at once. Start with what makes sense now, prove it pays, then scale.',
  },
  {
    icon: ShoppingBag,
    t: 'E-commerce stores',
    d: 'Online stores live and die on return on ad spend. We run Shopping, Search, Performance Max, and remarketing campaigns built to sell, with product feeds optimised, high-intent shoppers targeted, and the checkout drop-off chased with remarketing rather than written off. Because EG Digital also builds and hosts stores, the feed problems and tracking gaps that quietly wreck e-commerce campaigns get fixed at the source.',
  },
  {
    icon: Building2,
    t: 'B2B companies',
    d: "B2B buyers research before they ever talk to sales, and the lead has to be qualified or it wastes everyone's time. We run Search campaigns that reach decision-makers, generate leads worth chasing, and connect to your CRM so nothing slips through. Longer sales cycles and multiple stakeholders are normal territory for us, and we tune the account to cost per qualified lead rather than raw volume.",
  },
  {
    icon: Rocket,
    t: 'Established and growth businesses',
    d: 'For bigger budgets, multiple campaign types, and higher stakes, you need a team that can run Google Ads at scale and stay accountable for the number. We bring the strategy, the tracking discipline, and the reporting to manage spend across Search, Shopping, Performance Max, Display, and YouTube without losing the plot, with one partner answerable for the whole thing.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Audit and strategy',
    d: 'We start by auditing your existing account, or your market if you are starting fresh, and we look at where your competitors are spending and what they are bidding on. You get a documented strategy with a recommended budget split, target metrics, and a clear read on what good looks like before we spend a cent.',
  },
  {
    t: 'Tracking and setup',
    d: 'Before the ads go live, we get the measurement right: conversion tracking, call tracking, GA4, and the landing-page checks that decide whether a click can actually convert. This is the step most accounts get wrong, and it is the reason so many businesses cannot tell which half of their budget is working.',
  },
  {
    t: 'Build and launch',
    d: 'We build the campaigns, research the keywords and negatives, write the ads, set the bidding strategy, and launch across the campaign types that fit your goals. You see the structure and the reasoning, not a black box.',
  },
  {
    t: 'Optimisation',
    d: 'This is where the money is made or lost. We cut wasted spend, test ad variations, refine keywords, targeting, and bids, and shift budget toward what converts. Google Ads is not set-and-forget, and we do not treat it that way.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to leads and revenue, in plain language, with next month's priorities set against the data. The account gets sharper over time, and so do the results.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Google Ads in the UK',
    d: "Our Google Ads services in the UK are built for one of the world's most competitive advertising markets. We manage search, Shopping, and Performance Max campaigns that control cost per click in crowded auctions, tighten targeting, and tie spend to measurable enquiries and revenue rather than clicks alone.",
  },
  {
    t: 'Google Ads in the USA',
    d: 'Businesses looking for Google Ads management in the USA need campaigns that can compete across expensive keywords and multiple geographic markets. We combine tight account structure, disciplined conversion tracking, and continuous optimisation to help businesses generate profitable, scalable growth across the United States.',
  },
  {
    t: 'Google Ads in Canada',
    d: 'Our Google Ads services in Canada focus on accountable spend: precise targeting, clean conversion tracking, and campaigns aligned to real buyer intent. Whether you operate locally or nationally, we help Canadian businesses turn paid clicks into qualified enquiries.',
  },
  {
    t: 'Google Ads in Singapore',
    d: "Singapore's competitive digital market rewards sharp targeting and tight measurement. Our Google Ads services in Singapore help businesses improve return on ad spend, generate qualified enquiries, and manage paid search with a clear line back to revenue.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much do Google Ads cost in Australia?',
    a: 'There are two costs and they are different. The first is ad spend, which is what you pay Google for the clicks. In Australia that averages roughly $2 to $4 per click for search, rising well past $10 in competitive categories such as legal and finance, and most SMBs budget between $1,500 and $5,000 a month to produce steady lead flow. The second is the management fee, which is what you pay an agency to run the account. That typically runs $1,000 to $5,000 a month, charged as a flat retainer or as roughly 10% to 20% of ad spend, with the percentage often falling as budgets grow. A one-off setup fee is common on top. The honest version is that price tracks your industry and your competition more than any fixed tier, so we quote from an audit of your actual account rather than a number off a menu.',
  },
  {
    q: 'Are Google Ads worth it for small businesses?',
    a: 'Yes, when the account is targeted and managed properly, and no when it is left on autopilot. Google Ads puts you in front of people at the exact moment they are searching for what you sell, which is why it converts better than most channels, and you control the budget down to the day. The catch is that a loose account wastes a real share of its spend on searches that it will never buy, which is where the reputation for "Google Ads not working" usually comes from. For a small business, the smart approach is to start with a focused budget on your highest-intent keywords, prove it pays, then scale, rather than spreading thin across every campaign type at once. Done that way, it is one of the fastest ways to generate enquiries a small business has.',
  },
  {
    q: 'How long does it take to see results from Google Ads?',
    a: 'Faster than SEO, but not instant. Google Ads can drive clicks the day the campaign goes live, and many accounts see early leads within the first two to four weeks. The meaningful results, a stable cost per lead and a return on ad spend you can plan around, usually take two to three months, because the campaigns need data to learn from and we need real conversions to optimise against. A brand-new account with no history takes a little longer to settle than one we are improving. We would rather set that expectation honestly than promise overnight numbers we cannot hit.',
  },
  {
    q: 'Should I hire a freelancer or a Google Ads agency?',
    a: "It depends on your budget and how much is riding on the outcome. A freelancer can be cheaper and works fine for a single, simple campaign, but you are relying on one person's availability and one skill set, and the landing page, tracking, and reporting often fall outside what they cover. A Google Ads agency gives you a team: strategy, campaign management, copywriting, and the developers to fix the page and the tracking, with someone accountable when something breaks. With EG Digital you also get web, cloud, and software under the same roof, so the parts of a campaign that usually get handed off to a third party are handled in-house. For anything beyond a basic, low-stakes campaign, that integration is where the results come from.",
  },
  {
    q: 'Do you take a percentage of my ad spend?',
    a: 'Only if that is the model that suits your account, and never as a hidden markup. You can be billed a flat monthly retainer or a percentage of spend, whichever fits, and either way 100% of your ad budget goes to Google. We spell the fee out in a scope document before you commit, and we do not use uncapped percentage models that reward us for spending more of your money regardless of whether it works.',
  },
  {
    q: 'Can you audit and take over an existing Google Ads account?',
    a: 'Yes, and it is one of the most common ways clients start with us. We audit your current account, show you where it is leaking and what is worth keeping, then rebuild what needs rebuilding and leave the rest. You keep ownership of your account and your history throughout. You get the audit findings whether or not you go on to work with us.',
  },
]

// Short signal chips for the hero - every phrase is drawn verbatim from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: '100% to Google', l: 'no cut of your media spend, no hidden markup' },
  { v: 'Revenue', l: 'we report on leads and revenue, not clicks' },
  { v: 'No lock-in', l: 'no 12-month contracts, no guaranteed-leads gimmicks' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$1,000 - $5,000/mo', l: 'Management fee most Australian SMBs pay, as a flat retainer or a percentage of ad spend.' },
  { v: '10% - 20%', l: 'Typical percentage-of-spend management fee, often dropping as budgets grow.' },
  { v: '$2 - $4 CPC', l: 'Average cost per click for search in Australia, far higher in legal, finance and insurance.' },
]

export function GoogleAdsManagement() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/google-ads-management')

  usePageMeta(
    'Google Ads Management Services Australia | EG Digital',
    'Expert Google Ads management in Australia. Search, Shopping, Performance Max & YouTube campaigns managed for revenue, not clicks. 100% of budget to Google, no lock-in. Get a free Google Ads audit.',
  )

  return (
    <PageLayout>
      <style>{`
        .gads-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .gads-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .gads-shell{ max-width:2440px; } }
        @media (max-width:768px){ .gads-shell{ max-width:100%; } }

        /* ── Section base ── */
        .gads-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .gads-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .gads-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .gads-sec.dark .gads-shell { position:relative; z-index:1; }

        .gads-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .gads-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .gads-h2 span { color:${GREEN}; }
        .gads-sec.dark .gads-h2 { color:#fff; }
        .gads-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .gads-sec.dark .gads-lead { color:rgba(255,255,255,0.68); }

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
        .gads-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .gads-h1 { position:relative; font-size:clamp(42px,6.2vw,96px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:#fff; margin:16px 0 0; text-transform:uppercase; }
        .gads-lede { position:relative; font-size:clamp(19px,2.2vw,32px); font-weight:900; letter-spacing:-0.035em; line-height:1.08; color:#fff; margin:18px 0 0; }
        .gads-lede span { color:${GREEN}; }
        .gads-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .gads-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .gads-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .gads-bp svg { transition:transform .2s; } .gads-bp:hover svg { transform:translateX(3px); }
        .gads-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .gads-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .gads-bp, .gads-bg, .gads-tel{ width:100%; justify-content:center; } }

        /* Hero image (Unsplash) + animated scan + emblem */
        .hero-img { padding:0; border:1px solid rgba(255,255,255,0.12); background:${NAVY}; min-height:clamp(300px,42vw,520px); }
        .hero-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .hero-img::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 38%, ${NAVY}77); pointer-events:none; }
        .gads-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:gads-scan 4.6s linear infinite; will-change:transform; }
        @keyframes gads-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .gads-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:gads-float 6s ease-in-out infinite; will-change:transform; }
        .gads-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:gads-spin 3.4s linear infinite; will-change:transform; }
        .gads-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .gads-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .gads-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .gads-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.66); }
        .gads-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .gads-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:gads-pulse 1.8s ease-in-out infinite; }
        @keyframes gads-spin { to { transform:rotate(360deg); } }
        @keyframes gads-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes gads-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:gads-float 7s ease-in-out infinite; will-change:transform; }
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
        .prow-v span { font-size:0.4em; font-weight:700; }
        .prow-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.68); margin-top:8px; line-height:1.5; }
        .cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .cost-p:last-child{ margin-bottom:0; }
        .gads-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .gads-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing:-0.045em; line-height:0.98; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .gads-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .gads-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .gads-scan, .gads-emblem, .gads-emblem-ring, .gads-dot, .chip { animation:none !important; }
          .gads-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="gads-sec dark gads-hero">
        <div className="gads-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Google Ads Company in Australia</Eyebrow>
                <h1 className="gads-h1">Google Ads Management Services in Australia</h1>
                <p className="gads-lede">
                  Get in front of buyers at the exact moment they search, and pay only for the clicks that <span>count</span>.
                </p>
                <div className="gads-cta">
                  <button className="gads-bp" onClick={() => navigate('/contact')}>
                    Get a free Google Ads audit
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="gads-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile hero-img">
              <img
                src={img('photo-1551288049-bebda4e38f71', 900, 900)}
                alt="Google Ads management services in Australia - Google Ads company in Australia"
                width={900} height={900} loading="eager" decoding="async"
              />
              <div className="gads-scan" aria-hidden="true" />
              <div className="gads-emblem" aria-hidden="true">
                <div className="gads-emblem-ring"><span className="gads-emblem-ic"><TrendingDown size={20} /></span></div>
                <div className="gads-emblem-tx">
                  <span className="gads-emblem-k">Cost Per Lead</span>
                  <span className="gads-emblem-v"><span className="gads-dot" /> Falling</span>
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
                Most Google Ads agencies sell you a busy dashboard. Impressions, clicks, a rising quality score. None of
                that is the point. Leads are the point. Sales are.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based Google Ads company that treats the platform as a revenue channel, not a
                monthly click report. We plan, build, and manage Google Ads accounts end to end, and we tie every dollar
                of ad spend to one number you actually care about: qualified enquiries from people ready to buy. When a
                campaign is not paying its way, we tell you and we fix it, rather than quietly letting the budget burn on
                search terms that will never convert.
              </p>
              <p className="t-d">
                <strong>We are part of Eloma Group,</strong> so your Google Ads sits next to web development, SEO,
                Microsoft and cloud, custom software, and cyber security under one roof. That matters more than it
                sounds. The landing page your ads point to, the conversion tracking behind it, and the systems that catch
                the lead are usually where campaigns leak money. When the same team runs all of it, the leaks get sealed
                instead of blamed on someone else's developer queue.
              </p>
              <p className="t-d">
                One partner. One team that plans the campaign, writes the ads, builds the page, and reads the numbers
                back to you in plain language.
              </p>
              <p className="t-d">
                Get a free Google Ads audit. No lock-in, just a clear read on where your spend is going and what it is
                bringing back.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why hire EG Digital ── */}
      <section className="gads-sec">
        <div className="gads-shell">
          <div className="gads-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="gads-h2">Why hire EG Digital as your Google Ads company in <span>Australia</span></h2>
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

      {/* ── Our Google Ads services ── */}
      <section className="gads-sec dark">
        <div className="gads-shell">
          <div className="gads-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="gads-h2">Our Google Ads <span>services</span></h2>
            <p className="gads-lead">
              Google Ads is more than picking a few keywords and writing a headline. A modern account runs across several
              campaign types, each doing a different job in your buyer's journey. We manage all of them, and we manage
              them as one account rather than a pile of disconnected campaigns.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // Search is a full-width feature row; the rest form a varied bento.
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
              const spans = ['c8', 'c4', 'c4', 'c8', 'c6', 'c6']
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

      {/* ── Who we run Google Ads for ── */}
      <section className="gads-sec">
        <div className="gads-shell">
          <div className="gads-head">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="gads-h2">Who we run Google Ads <span>for</span></h2>
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
      <section className="gads-sec dark">
        <div className="gads-shell">
          <div className="gads-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="gads-h2">How we <span>work</span></h2>
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
      <section className="gads-sec">
        <div className="gads-shell">
          <div className="gads-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="gads-h2">What Google Ads cost in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on your industry, your competition, and how much you are spending on clicks,
                  and any company quoting a flat number before seeing your account is guessing.
                </p>
                <p className="cost-p">
                  For context, the average cost per click in Australia sits around $2 to $4 for search, while competitive
                  categories such as legal, finance, and insurance run much higher, often $10 or more and sometimes far
                  past that. Most Australian SMBs budget somewhere between $1,500 and $5,000 a month in ad spend to see
                  consistent lead flow, and more in competitive categories. Below roughly $1,500 a month, many industries
                  simply do not generate enough clicks to gather the data needed to optimise well.
                </p>
                <p className="cost-p">
                  Management fees are separate from that ad spend, and this is the distinction that trips people up. The
                  ad spend is what you pay Google for the clicks. The management fee is what you pay us to make those
                  clicks profitable. Most Australian SMBs pay between $1,000 and $5,000 per month in management fees,
                  charged either as a flat monthly retainer or as a percentage of ad spend, typically in the range of 10%
                  to 20%, with the percentage often dropping as budgets grow. A one-off account setup or audit is
                  sometimes scoped separately from the monthly management.
                </p>
                <p className="cost-p">
                  Two things worth knowing. First, an unmanaged account typically wastes a large share of its budget on
                  the wrong searches, so a management fee often pays for itself in recovered spend before it does
                  anything else. Second, be wary of any agency charging a high percentage of your spend with no cap,
                  because that model rewards them for spending more of your money whether it works or not. We keep the
                  incentive pointed at your results.
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
          <p className="gads-note">
            Get a free Google Ads audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International Google Ads Services ── */}
      <section className="gads-sec dark">
        <div className="gads-shell">
          <div className="gads-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="gads-h2">International Google Ads <span>Services</span></h2>
            <p className="gads-lead">
              Based in Melbourne, EG Digital delivers Google Ads management in Australia while also helping businesses
              grow paid-search performance across the UK, USA, Canada, and Singapore, with campaigns built for each
              market's competition, cost per click, and buyer behaviour.
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
              dollar to the platform, target the right buyers, optimise relentlessly, and report on the revenue the
              campaigns actually produce.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to make your spend work harder ── */}
      <section className="gads-sec">
        <div className="gads-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="ready-h">Ready to make your Google Ads spend work harder?</h2>
              <p className="ready-p">
                Tell us where your paid search is falling short. We will run a free audit, review your competitors, and
                tell you exactly where your budget is leaking and what it should be bringing back. If we can help, we
                will show you how. If we cannot, we will tell you that too.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free Google Ads audit below.
              </p>
              <div className="ready-cta">
                <button className="gads-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="gads-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="gads-sec">
        <div className="gads-shell">
          <div className="gads-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="gads-h2">Frequently asked <span>questions</span></h2>
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
        heading="Let's make your"
        highlight="spend work."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
