import { useEffect } from 'react'
import {
  BarChart3, Wallet, Users, Unlock, Target, Search, Monitor, LayoutGrid,
  ThumbsUp, Network, Play, Store, ShoppingCart, Briefcase, Building2,
  Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - PPC SERVICES (Australia)
   Mirrors the SocialMediaMarketing service-page layout: navy + brand green,
   large clamp typography, alternating light/dark bands, numbered process and
   plain-language FAQ. Copy is verbatim from the approved page content.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: BarChart3,
    t: 'We report on revenue, not clicks',
    d: 'A click is a cost, not a result. Our reporting starts with enquiries, leads, and the revenue they turn into, then works back to the cost per lead and the return on ad spend that produced them. If a report leads with impressions and click-through rate and buries the conversions, it is hiding the part that matters. Ours puts the part that matters first.',
  },
  {
    icon: Wallet,
    t: '100% of your budget goes to the platform',
    d: 'Every dollar you budget for ads goes to Google, Microsoft, or Meta. We do not take a cut of your media spend or hide a markup inside it. You pay us a clear management fee for the strategy, the build, the optimisation, and the reporting, and you see exactly where the ad money went. No opaque commissions, no vague "media handling" line.',
  },
  {
    icon: Users,
    t: 'One team for ads, landing pages, and tracking',
    d: "You get a paid media strategist, campaign specialists, copywriters, and developers who work together, not a single account manager forwarding your questions to people you never meet. Because EG Digital also builds websites and runs the underlying cloud and tracking, the landing page fix or conversion-tracking repair that usually waits weeks in someone else's developer queue gets done in days. That is often the difference between a campaign that converts and one that does not.",
  },
  {
    icon: Unlock,
    t: 'No lock-in, no guesswork',
    d: 'No 12-month contracts. No "leads guaranteed in 30 days," because anyone promising a fixed result before seeing your account is either guessing or about to waste your money. We earn the renewal each month by moving your numbers. A short minimum to let campaigns gather data and settle is fair. A long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Target,
    t: 'Google Ads',
    paras: [
      'Google is where most buying intent lives, and it is where most Australian budgets go first. We plan, build, and manage full Google Ads accounts end to end: account structure, keyword and negative-keyword research, ad copy, bidding strategy, and the conversion tracking that tells you which clicks actually became customers. We manage the budget tightly, cut the search terms wasting money, and keep testing so the cost per lead comes down over time rather than drifting up.',
    ],
  },
  {
    icon: Search,
    t: 'Search Ads',
    paras: [
      "Search ads put you at the top of the results page the moment someone types what you sell. This is the highest-intent inventory in paid advertising, and it is also the easiest to waste if the account is loose. We build tight keyword themes, write ads that match the searcher's intent, and prune the terms that spend without converting. The goal is simple: fewer wasted clicks, more of the right ones, and a cost per lead you can build a business on.",
    ],
  },
  {
    icon: Monitor,
    t: 'Display Ads',
    paras: [
      'Display keeps your brand in front of the right audience across millions of sites, apps, and videos, and it is where remarketing does its best work. We use it to re-engage people who visited your site but did not act, and to build awareness with audiences that match your best customers. Creative and targeting decide whether display works or just burns impressions, so we handle both rather than pointing a generic banner at everyone.',
    ],
  },
  {
    icon: LayoutGrid,
    t: 'Bing Ads (Microsoft Advertising)',
    paras: [
      'Bing gets overlooked, and that is exactly why it is worth running. Microsoft Advertising reaches an audience that often skews older and higher-income, competition is thinner than Google, and the cost per click is frequently lower. For many Australian businesses it quietly delivers some of the cheapest qualified leads in the account. As a Microsoft partner through Eloma Group, we are comfortable in this platform where a lot of agencies simply are not.',
    ],
  },
  {
    icon: ThumbsUp,
    t: 'Facebook Ads (Meta)',
    paras: [
      'Facebook and Instagram are where you reach people before they are actively searching, using audience targeting that Google cannot match. We use Meta for demand generation, remarketing, and lead capture, with creative built to stop the scroll and offers built to convert rather than just collect likes. Because social creative wears out fast, we refresh it on a schedule instead of running the same tired ad until performance falls off a cliff.',
    ],
  },
  {
    icon: Network,
    t: 'LinkedIn Ads',
    paras: [
      "For B2B, LinkedIn is the sharpest targeting available: job title, company, industry, seniority, and company size. It costs more per click than other platforms, so it only pays off with tight targeting and an offer worth a decision-maker's attention. We build LinkedIn campaigns for businesses with a considered, higher-value sale, and we connect them to your CRM so the leads land where your sales team can act on them.",
    ],
  },
  {
    icon: Play,
    t: 'YouTube Ads',
    paras: [
      'YouTube is the second-largest search engine and one of the biggest reach platforms in Australia, with over 16 million active users. We run video campaigns that build awareness, drive consideration, and remarket to warm audiences, with targeting tuned to where your buyer is in their journey. Good video ads do real work here. We handle the targeting, the placement, and the measurement so the spend is accountable rather than a branding indulgence.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need enquiries coming in without a budget that swallows your year. We build lean, conversion-focused campaigns for small businesses across Australia, with clear pricing and no padding, and we start where your money works hardest rather than spreading it thin across every platform. Start with what makes sense now, prove it pays, then scale.',
  },
  {
    icon: ShoppingCart,
    t: 'E-commerce stores',
    d: 'Online stores live and die on return on ad spend. We run Shopping, Search, and remarketing campaigns built to sell, with product feeds optimised, high-intent shoppers targeted, and the checkout drop-off chased with remarketing rather than written off. Because EG Digital also builds and hosts stores, the feed problems and tracking gaps that quietly wreck e-commerce campaigns get fixed at the source.',
  },
  {
    icon: Briefcase,
    t: 'B2B companies',
    d: "B2B buyers research before they ever talk to sales, and the lead has to be qualified or it wastes everyone's time. We run Search and LinkedIn campaigns that reach decision-makers, generate leads worth chasing, and connect to your CRM so nothing slips through. Longer sales cycles and multiple stakeholders are normal territory for us.",
  },
  {
    icon: Building2,
    t: 'Established and growth businesses',
    d: 'For bigger budgets, multiple platforms, and higher stakes, you need a team that can run campaigns at scale and stay accountable for the number. We bring the strategy, the tracking discipline, and the reporting to manage spend across Google, Microsoft, and social without losing the plot, with one partner answerable for the whole thing.',
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
    d: 'We build the campaigns, write the ads, set the bidding, and launch across the platforms that fit your goals. You see the structure and the reasoning, not a black box.',
  },
  {
    t: 'Optimisation',
    d: 'This is where the money is made or lost. We cut wasted spend, test ad variations, refine targeting and bids, and shift budget toward what converts. Paid media is not set-and-forget, and we do not treat it that way.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to leads and revenue, in plain language, with next month's priorities set against the data. The account gets sharper over time, and so do the results.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'PPC Services in the UK',
    d: "Our PPC services in the UK are built for one of the world's most competitive advertising markets. We manage Google, Microsoft, and paid-social campaigns that control cost per click in crowded auctions, tighten targeting, and tie spend to measurable enquiries and revenue rather than clicks alone.",
  },
  {
    t: 'PPC Services in the USA',
    d: 'Businesses looking for PPC services in the USA need campaigns that can compete across expensive keywords and multiple geographic markets. We combine Google Ads, Microsoft Advertising, and paid social with disciplined tracking and conversion optimisation to help businesses generate profitable, scalable growth across the United States.',
  },
  {
    t: 'PPC Services in Canada',
    d: 'Our PPC services in Canada focus on accountable spend: precise targeting, clean conversion tracking, and campaigns aligned to real buyer intent. Whether you operate locally or nationally, we help Canadian businesses turn paid traffic into qualified enquiries across Google, Microsoft, and social platforms.',
  },
  {
    t: 'PPC Services in Singapore',
    d: "Singapore's competitive digital market rewards sharp targeting and tight measurement. Our PPC services in Singapore help businesses improve return on ad spend, generate qualified enquiries, and manage paid campaigns across Google, Microsoft Advertising, and paid social with a clear line back to revenue.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is the average cost of PPC services in Australia?',
    a: 'Most Australian SMBs pay between $1,000 and $5,000 per month in management fees, charged either as a flat retainer or as roughly 10% to 20% of ad spend, with the percentage often falling as budgets grow. That fee is separate from the ad spend you pay the platforms, which for local businesses usually starts around $2,000 to $5,000 a month to produce steady lead flow. Competitive industries such as legal and finance run higher on both counts, because clicks cost more and the account needs more attention. The honest version is that price tracks your market and your platforms more than any fixed tier, so we quote from an audit of your actual account rather than a number off a menu.',
  },
  {
    q: 'How long does it take to see results from PPC?',
    a: 'Faster than SEO, but not instant. Paid ads can drive clicks the day they go live, and many accounts see early leads within the first two to four weeks. The meaningful results, a stable cost per lead and a return on ad spend you can plan around, usually take two to three months, because the campaigns need data to learn from and we need real conversions to optimise against. A brand-new account with no history takes a little longer to settle than one we are improving. We would rather set that expectation honestly than promise overnight numbers we cannot hit.',
  },
  {
    q: 'Should I hire a freelancer or a PPC company?',
    a: "It depends on your budget and how much is riding on the outcome. A freelancer can be cheaper and works fine for a single, simple campaign, but you are relying on one person's availability and one skill set, and the landing page, tracking, and reporting often fall outside what they cover. A PPC company gives you a team: strategy, campaign management, copywriting, and the developers to fix the page and the tracking, with someone accountable when something breaks. With EG Digital you also get web, cloud, and software under the same roof, so the parts of a campaign that usually get handed off to a third party are handled in-house instead. For anything beyond a basic, low-stakes campaign, that integration is where the results come from.",
  },
]

export function PPCServices() {
  const navigate = useNavigate()

  // No global per-route meta helper exists, so set the document title here to
  // match the approved META TITLE for this page.
  useEffect(() => {
    const prev = document.title
    document.title = 'PPC Services in Australia | Google, Bing & Social Ads | EG Digital'
    return () => { document.title = prev }
  }, [])

  return (
    <PageLayout>
      <style>{`
        .ppc-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .ppc-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .ppc-shell{ max-width:2440px; } }
        /* Mobile: drop the outer 96px gutter so content keeps a clean 24px bezel
           instead of a narrow centred column. */
        @media (max-width:768px){ .ppc-shell{ max-width:100%; } }

        /* ── Hero ── */
        .ppc-hero { position:relative; overflow:hidden; padding:clamp(40px,5vw,88px) clamp(24px,4vw,64px) clamp(44px,5vw,80px); }
        .ppc-hero::before { content:''; position:absolute; top:-22%; right:-8%; width:min(720px,66vw); height:min(720px,66vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}22, transparent 64%); pointer-events:none; z-index:0; }
        .ppc-hgrid { position:relative; z-index:1; display:grid; grid-template-columns:1.05fr 0.95fr; gap:clamp(36px,5vw,80px); align-items:center; }
        @media (max-width:920px){ .ppc-hgrid{ grid-template-columns:1fr; } }
        .ppc-h1 { font-size:clamp(46px,8vw,116px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:${NAVY}; margin:16px 0 0; text-transform:uppercase; }
        .ppc-lede { font-size:clamp(22px,3vw,40px); font-weight:900; letter-spacing:-0.035em; line-height:1.04; color:${NAVY}; margin:20px 0 0; }
        .ppc-lede span { color:${GREEN}; }
        .ppc-intro { max-width:560px; font-size:clamp(15px,1.2vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:20px 0 0; }
        .ppc-intro strong { color:${NAVY}; font-weight:700; }
        .ppc-cta { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .ppc-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .ppc-bp:hover { background:${NAVY}; color:#fff; transform:translateY(-2px); }
        .ppc-bp svg { transition:transform .2s; } .ppc-bp:hover svg { transform:translateX(3px); }
        .ppc-bg { display:inline-flex; align-items:center; gap:9px; background:#fff; color:${NAVY}; border:1.5px solid rgba(8,33,60,0.16); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s; text-decoration:none; }
        .ppc-bg:hover { border-color:rgba(8,33,60,0.4); }
        @media (max-width:480px){ .ppc-bp, .ppc-bg, .ppc-tel{ width:100%; justify-content:center; } }
        .ppc-heroimg { position:relative; border-radius:24px; overflow:hidden; box-shadow:0 34px 80px -34px rgba(8,33,60,0.5); aspect-ratio:4 / 3.4; }
        .ppc-heroimg img { width:100%; height:100%; object-fit:cover; display:block; }
        .ppc-heroimg::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 40%, ${NAVY}66); }

        /* ── Section base ── */
        .ppc-sec { padding:clamp(56px,7vw,120px) 0; }
        .ppc-sec.alt { background:#fff; }
        .ppc-sec.dark { background:${NAVY}; position:relative; overflow:hidden; }
        .ppc-sec.dark::before { content:''; position:absolute; top:-22%; left:-10%; width:min(640px,60vw); height:min(640px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}2e, transparent 65%); pointer-events:none; }
        .ppc-sec.dark .ppc-shell { position:relative; z-index:1; }
        .ppc-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ppc-h2 span { color:${GREEN}; }
        .ppc-sec.dark .ppc-h2 { color:#fff; }
        .ppc-lead { max-width:640px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.58); margin:18px 0 0; }
        .ppc-sec.dark .ppc-lead { color:rgba(255,255,255,0.66); }

        /* ── Why cards ── */
        .ppc-why { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .ppc-why{ grid-template-columns:1fr; } }
        .ppc-wc { position:relative; overflow:hidden; background:#fafbfd; border:1px solid rgba(8,33,60,0.08); border-radius:22px;
          padding:clamp(24px,2.6vw,40px); box-shadow:0 4px 22px rgba(8,33,60,0.05);
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .ppc-wc::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:${GREEN};
          transform:scaleX(0); transform-origin:left center; transition:transform .45s cubic-bezier(0.16,1,0.3,1); }
        .ppc-wc:hover { transform:translateY(-6px); box-shadow:0 30px 64px rgba(8,33,60,0.12); border-color:${GREEN}55; }
        .ppc-wc:hover::before { transform:scaleX(1); }
        .ppc-wc-ic { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${GREEN}29,${GREEN}0d); color:${GREEN}; margin-bottom:18px; }
        .ppc-wc-t { font-size:clamp(19px,1.7vw,26px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 12px; line-height:1.08; }
        .ppc-wc-d { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:0; }

        /* ── Services (alternating rows) ── */
        .ppc-srv { display:flex; flex-direction:column; gap:clamp(16px,2vw,26px); margin-top:clamp(36px,4vw,56px); }
        .ppc-srow { display:grid; grid-template-columns:auto 1fr; gap:clamp(18px,2.4vw,34px); align-items:start;
          background:#fff; border:1px solid rgba(8,33,60,0.09); border-radius:24px; padding:clamp(26px,3vw,48px);
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .ppc-srow:hover { transform:translateY(-5px); box-shadow:0 30px 66px -30px rgba(8,33,60,0.32); border-color:${GREEN}44; }
        @media (max-width:640px){ .ppc-srow{ grid-template-columns:1fr; } }
        .ppc-srow-ic { width:64px; height:64px; border-radius:17px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${NAVY},#12395f); color:${GREEN}; flex-shrink:0; }
        .ppc-srow-t { font-size:clamp(22px,2.4vw,38px); font-weight:900; letter-spacing:-0.035em; line-height:0.98; color:${NAVY}; margin:2px 0 0; text-transform:uppercase; }
        .ppc-srow-p { font-size:clamp(14px,1.05vw,16.5px); line-height:1.8; color:rgba(8,33,60,0.62); margin:14px 0 0; }

        /* ── Audiences ── */
        .ppc-aud { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .ppc-aud{ grid-template-columns:1fr; } }
        .ppc-ac { position:relative; overflow:hidden; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:22px;
          padding:clamp(26px,3vw,42px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .ppc-ac:hover { transform:translateY(-6px); border-color:rgba(60,185,140,0.4); box-shadow:0 34px 70px -28px rgba(0,0,0,0.55); }
        .ppc-ac-ic { width:54px; height:54px; border-radius:15px; display:flex; align-items:center; justify-content:center;
          background:rgba(60,185,140,0.14); color:${GREEN}; margin-bottom:18px; }
        .ppc-ac-t { font-size:clamp(20px,2vw,30px); font-weight:900; letter-spacing:-0.03em; color:#fff; margin:0 0 11px; line-height:1.06; }
        .ppc-ac-d { font-size:clamp(14px,1.02vw,16px); line-height:1.76; color:rgba(255,255,255,0.68); margin:0; }

        /* ── How we work (numbered steps) ── */
        .ppc-steps { display:flex; flex-direction:column; margin-top:clamp(36px,4vw,56px); }
        .ppc-step { display:grid; grid-template-columns:auto 1fr; gap:clamp(20px,3vw,48px); align-items:start;
          padding:clamp(24px,3vw,40px) 0; border-top:1px solid rgba(8,33,60,0.12); }
        .ppc-step:last-child { border-bottom:1px solid rgba(8,33,60,0.12); }
        .ppc-step-no { font-size:clamp(40px,5vw,86px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:${GREEN};
          font-variant-numeric:tabular-nums; opacity:0.9; }
        .ppc-step-t { font-size:clamp(22px,2.4vw,40px); font-weight:900; letter-spacing:-0.035em; line-height:1; color:${NAVY}; margin:0; text-transform:uppercase; }
        .ppc-step-d { font-size:clamp(14px,1.05vw,16.5px); line-height:1.8; color:rgba(8,33,60,0.62); margin:12px 0 0; max-width:70ch; }
        @media (max-width:480px){
          .ppc-step{ grid-template-columns:1fr; gap:10px; }
          .ppc-step-no{ font-size:34px; }
        }

        /* ── Cost ── */
        .ppc-cost { display:grid; grid-template-columns:1.1fr 0.9fr; gap:clamp(32px,4vw,72px); align-items:center; margin-top:clamp(32px,4vw,52px); }
        @media (max-width:900px){ .ppc-cost{ grid-template-columns:1fr; } }
        .ppc-cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .ppc-cost-p:last-child { margin-bottom:0; }
        .ppc-cost-p strong { color:${NAVY}; font-weight:800; }
        .ppc-pricecard { background:${NAVY}; border-radius:24px; padding:clamp(28px,3vw,44px); color:#fff; position:relative; overflow:hidden; }
        .ppc-pricecard::before { content:''; position:absolute; bottom:-40%; right:-15%; width:60%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}33, transparent 62%); pointer-events:none; }
        .ppc-pr { position:relative; padding:18px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .ppc-pr:first-of-type { padding-top:0; }
        .ppc-pr:last-of-type { border-bottom:none; padding-bottom:0; }
        .ppc-pr-v { font-size:clamp(26px,3vw,44px); font-weight:900; letter-spacing:-0.04em; color:${GREEN}; line-height:1; }
        .ppc-pr-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.66); margin-top:8px; line-height:1.5; }
        .ppc-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .ppc-note a { color:${GREEN}; text-decoration:none; }

        /* ── Countries ── */
        .ppc-co { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .ppc-co{ grid-template-columns:1fr; } }
        .ppc-coc { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:clamp(24px,2.6vw,38px);
          transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s; will-change:transform; }
        .ppc-coc:hover { transform:translateY(-5px); border-color:rgba(60,185,140,0.4); }
        .ppc-coc-t { font-size:clamp(18px,1.7vw,24px); font-weight:900; letter-spacing:-0.025em; color:#fff; margin:0 0 10px; }
        .ppc-coc-d { font-size:clamp(14px,1.02vw,15.5px); line-height:1.75; color:rgba(255,255,255,0.66); margin:0; }
        .ppc-co-close { max-width:820px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(30px,3.6vw,48px) 0 0; }

        /* ── Ready band ── */
        .ppc-ready { background:linear-gradient(160deg, #f2fbf7 0%, #e6f6ee 100%); border:1px solid ${GREEN}30; border-radius:28px;
          padding:clamp(34px,5vw,72px); margin-top:clamp(36px,4vw,56px); text-align:center; }
        .ppc-ready-h { font-size:clamp(30px,4.4vw,68px); font-weight:900; letter-spacing:-0.045em; line-height:0.96; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ppc-ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.62); }
        .ppc-ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .ppc-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .ppc-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .ppc-faq { margin-top:clamp(36px,4vw,56px); }
        .ppc-fq { padding:clamp(24px,3vw,40px) 0; border-top:1px solid rgba(8,33,60,0.12); }
        .ppc-fq:last-child { border-bottom:1px solid rgba(8,33,60,0.12); }
        .ppc-fq-q { font-size:clamp(20px,2.1vw,32px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 14px; line-height:1.1; }
        .ppc-fq-a { font-size:clamp(14px,1.05vw,16.5px); line-height:1.82; color:rgba(8,33,60,0.64); margin:0; max-width:90ch; }

        /* ── Legal line ── */
        .ppc-legal { font-size:clamp(12px,0.95vw,14px); line-height:1.7; color:rgba(8,33,60,0.5); font-style:italic; margin:clamp(30px,3.6vw,48px) 0 0; }
      `}</style>

      {/* ── Hero ── */}
      <section className="ppc-shell ppc-hero">
        <div className="ppc-hgrid">
          <Reveal>
            <Eyebrow>PPC Services in Australia</Eyebrow>
            <h1 className="ppc-h1">Paid ads that pay their way</h1>
            <p className="ppc-lede">
              Get in front of buyers the moment they search, and <span>pay only when they click</span>.
            </p>
            <p className="ppc-intro">
              Most agencies sell you clicks. Clicks are not the point. Leads are. Sales are.
            </p>
            <p className="ppc-intro">
              EG Digital is a Melbourne-based PPC company that treats paid advertising as a revenue channel, not a
              monthly click report. We build and manage campaigns across Google, Bing, and the major social platforms,
              and we tie every dollar of ad spend to one number you actually care about: qualified enquiries from
              people ready to buy. When a campaign is not paying its way, we tell you and we fix it, rather than
              quietly letting the budget burn.
            </p>
            <div className="ppc-cta">
              <button className="ppc-bp" onClick={() => navigate('/contact')}>
                Get a free PPC audit
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
              </button>
              <a className="ppc-bg" href="tel:1800054555">
                <Phone size={16} /> 1800 054 555
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="ppc-heroimg">
              <img
                src={img('photo-1454165804606-c3d57bc86b40', 900, 780)}
                alt="Paid advertising performance analytics on screen"
                width={900} height={780} loading="eager" decoding="async"
              />
            </div>
          </Reveal>
        </div>

        <p className="ppc-intro" style={{ maxWidth: 900 }}>
          We are part of Eloma Group, so your PPC sits next to web development, SEO, Microsoft and cloud, custom
          software, and cyber security under one roof. That matters more than it sounds. The landing page your ads
          point to, the tracking behind it, and the systems that catch the lead are usually where campaigns leak
          money. When the same team runs all of it, the leaks get sealed instead of blamed on someone else.
        </p>
        <p className="ppc-intro" style={{ maxWidth: 900 }}>
          <strong>One partner.</strong> One team that plans the campaign, writes the ads, builds the page, and reads
          the numbers back to you in plain language.
        </p>
        <p className="ppc-intro" style={{ maxWidth: 900 }}>
          Get a free PPC audit. No lock-in, just a clear read on where your spend is going and what it is bringing
          back.
        </p>
      </section>

      {/* ── Why work with EG Digital ── */}
      <section className="ppc-sec alt">
        <div className="ppc-shell">
          <Reveal>
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="ppc-h2">Why work with EG Digital as your PPC company in <span>Australia</span></h2>
          </Reveal>
          <div className="ppc-why">
            {WHY.map((w, i) => {
              const Ic = w.icon
              return (
                <Reveal key={w.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="ppc-wc" style={{ height: '100%' }}>
                    <div className="ppc-wc-ic"><Ic size={24} /></div>
                    <h3 className="ppc-wc-t">{w.t}</h3>
                    <p className="ppc-wc-d">{w.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Our PPC services ── */}
      <section className="ppc-sec">
        <div className="ppc-shell">
          <Reveal>
            <Eyebrow>What we run</Eyebrow>
            <h2 className="ppc-h2">Our PPC <span>services</span></h2>
            <p className="ppc-lead">
              We are a full-service PPC company, so you can hand us the whole program or the single channel you are
              missing. Here is what we run.
            </p>
          </Reveal>
          <div className="ppc-srv">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              return (
                <Reveal key={s.t} delay={Math.min(i * 0.04, 0.2)}>
                  <div className="ppc-srow">
                    <div className="ppc-srow-ic"><Ic size={28} /></div>
                    <div>
                      <h3 className="ppc-srow-t">{s.t}</h3>
                      {s.paras.map((p, pi) => <p key={pi} className="ppc-srow-p">{p}</p>)}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Who we run PPC for (dark) ── */}
      <section className="ppc-sec dark">
        <div className="ppc-shell">
          <Reveal>
            <Eyebrow light>Who it's for</Eyebrow>
            <h2 className="ppc-h2">Who we run PPC <span>for</span></h2>
          </Reveal>
          <div className="ppc-aud">
            {AUDIENCES.map((a, i) => {
              const Ic = a.icon
              return (
                <Reveal key={a.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="ppc-ac" style={{ height: '100%' }}>
                    <div className="ppc-ac-ic"><Ic size={24} /></div>
                    <h3 className="ppc-ac-t">{a.t}</h3>
                    <p className="ppc-ac-d">{a.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="ppc-sec alt">
        <div className="ppc-shell">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="ppc-h2">From audit to <span>revenue</span></h2>
          </Reveal>
          <div className="ppc-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={Math.min(i * 0.04, 0.16)}>
                <div className="ppc-step">
                  <div className="ppc-step-no">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="ppc-step-t">{s.t}</h3>
                    <p className="ppc-step-d">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost ── */}
      <section className="ppc-sec">
        <div className="ppc-shell">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="ppc-h2">What PPC costs in <span>Australia</span></h2>
          </Reveal>
          <div className="ppc-cost">
            <Reveal>
              <div>
                <p className="ppc-cost-p">
                  Honest answer: it depends on your market, your platforms, and how much you are spending on ads, and
                  any company quoting a flat number before seeing your account is guessing.
                </p>
                <p className="ppc-cost-p">
                  For context, most Australian SMBs pay between $1,000 and $5,000 per month in management fees,
                  separate from the ad spend itself. Fees are usually charged as a flat monthly retainer or as a
                  percentage of ad spend, typically in the range of 10% to 20%, with the percentage often dropping as
                  budgets grow. Competitive industries such as legal, finance, and trades sit higher, because the cost
                  per click is higher and the margin for error is thinner. A one-off account setup or audit is
                  sometimes scoped separately from the monthly management.
                </p>
                <p className="ppc-cost-p">
                  Two things worth knowing. First, ad spend and management fees are different costs. The ad spend is
                  what you pay Google or Meta for the clicks; the management fee is what you pay us to make those
                  clicks profitable. For local businesses, a realistic starting point is roughly $2,000 to $5,000 a
                  month in ad spend to see consistent lead flow, and more in competitive categories. Second, be wary
                  of any agency charging a high percentage of your spend with no cap, because that model rewards them
                  for spending more of your money whether it works or not. We keep the incentive pointed at your
                  results.
                </p>
                <p className="ppc-cost-p">
                  We quote from an actual audit of your situation, and the quote comes with a scope document, not just
                  a number. You will know what gets done each month, and the report will show whether it did.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="ppc-pricecard">
                <div className="ppc-pr">
                  <div className="ppc-pr-v">$1,000 - $5,000<span style={{ fontSize: '0.4em', fontWeight: 700 }}>/mo</span></div>
                  <div className="ppc-pr-l">Typical management fees for Australian SMBs, separate from the ad spend itself.</div>
                </div>
                <div className="ppc-pr">
                  <div className="ppc-pr-v">10% - 20%</div>
                  <div className="ppc-pr-l">Fees charged as a percentage of ad spend, with the percentage often dropping as budgets grow.</div>
                </div>
                <div className="ppc-pr">
                  <div className="ppc-pr-v">$2,000 - $5,000<span style={{ fontSize: '0.4em', fontWeight: 700 }}>/mo</span></div>
                  <div className="ppc-pr-l">A realistic starting point in ad spend for local businesses to see consistent lead flow.</div>
                </div>
              </div>
            </Reveal>
          </div>
          <p className="ppc-note">
            Get a free PPC audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International (dark) ── */}
      <section className="ppc-sec dark">
        <div className="ppc-shell">
          <Reveal>
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="ppc-h2">International PPC <span>Services</span></h2>
            <p className="ppc-lead">
              Based in Melbourne, EG Digital delivers PPC services in Australia while also helping businesses grow
              paid-search and paid-social performance across the UK, USA, Canada, and Singapore, with campaigns built
              for each market's competition, cost per click, and buyer behaviour.
            </p>
          </Reveal>
          <div className="ppc-co">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 0.06, 0.24)}>
                <div className="ppc-coc" style={{ height: '100%' }}>
                  <h3 className="ppc-coc-t">{c.t}</h3>
                  <p className="ppc-coc-d">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="ppc-co-close">
              Whether your business operates in Australia or internationally, our approach stays the same: send every
              dollar to the platform, target the right buyers, optimise relentlessly, and report on the revenue the
              campaigns actually produce.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to make your ad spend work harder ── */}
      <section className="ppc-sec alt">
        <div className="ppc-shell">
          <Reveal>
            <div className="ppc-ready">
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="ppc-ready-h">Ready to make your ad spend work harder?</h2>
              <p className="ppc-ready-p">
                Tell us where your paid advertising is falling short. We will run a free audit, review your
                competitors, and tell you exactly where your budget is leaking and what it should be bringing back. If
                we can help, we will show you how. If we cannot, we will tell you that too.
              </p>
              <p className="ppc-ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free PPC audit below.
              </p>
              <div className="ppc-ready-cta">
                <button className="ppc-bp" onClick={() => navigate('/contact')}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="ppc-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ppc-sec">
        <div className="ppc-shell">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="ppc-h2">Frequently asked <span>questions</span></h2>
          </Reveal>
          <div className="ppc-faq">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.15)}>
                <div className="ppc-fq">
                  <h3 className="ppc-fq-q">{f.q}</h3>
                  <p className="ppc-fq-a">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="ppc-legal">
              EG Digital Australia Pty Ltd, a unit of Eloma Group. PPC management delivered Australia-wide from
              Melbourne.
            </p>
          </Reveal>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready When You Are"
        heading="Let's make every click"
        highlight="count."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
