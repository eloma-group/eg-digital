import {
  TrendingUp, Wallet, Users, Unlock, Megaphone, Target, Tag,
  Palette, Repeat, ClipboardList, Activity, Store, ShoppingCart,
  Building2, Rocket, Globe, Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - FACEBOOK / META ADS MANAGEMENT (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "ROAS" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: TrendingUp,
    t: 'We report on revenue, not reach',
    d: 'A like is not a lead, and reach is not revenue. Our reporting starts with enquiries, purchases, and the revenue they turn into, then works back to the cost per result and the return on ad spend that produced them. If a report leads with impressions and engagement and buries the conversions, it is hiding the part that matters. Ours puts the part that matters first.',
  },
  {
    icon: Wallet,
    t: '100% of your budget goes to Meta',
    d: 'Every dollar you budget for ads goes to Meta. We do not take a cut of your media spend or hide a markup inside it. You pay us a clear management fee for the strategy, the creative, the optimisation, and the reporting, and you see exactly where the ad money went. No opaque commissions, no vague "media handling" line, and no incentive to spend more of your money just to inflate our fee.',
  },
  {
    icon: Users,
    t: 'One team for ads, creative, and tracking',
    d: 'You get a paid social strategist, campaign specialists, designers, copywriters, and developers who work together, not a single account manager forwarding your questions to people you never meet. Because EG Digital also builds websites and runs the underlying cloud and tracking, the landing page fix or Conversions API repair that usually waits weeks elsewhere gets done in days. That is often the difference between a Facebook campaign that converts and one that quietly wastes half its budget.',
  },
  {
    icon: Unlock,
    t: 'No lock-in, no guesswork',
    d: 'No 12-month contracts. No "leads guaranteed in 30 days," because anyone promising a fixed result before seeing your account is either guessing or about to waste your money. We earn the renewal each month by moving your numbers. A short minimum to let campaigns gather data and settle is fair. A long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Megaphone,
    t: 'Facebook and Instagram campaign management',
    paras: [
      'We run full campaigns end to end across Facebook and Instagram: objective selection, audience building, creative, copy, budgeting, and the ongoing optimisation that brings your cost per result down over time. One campaign structure reaches your audience across both platforms, so your budget is not split into two disconnected efforts.',
    ],
  },
  {
    icon: Target,
    t: 'Audience targeting and audience building',
    paras: [
      "This is where paid social lives or dies. We build the audiences that put your ads in front of the right people: custom audiences from your customer list and site visitors, lookalike audiences that mirror your best customers, and interest and behaviour targeting for people who match your buyer but have not found you yet. We combine your first-party data with Meta's tools rather than relying on either alone, which matters more than ever as third-party tracking keeps eroding.",
    ],
  },
  {
    icon: Tag,
    t: 'Facebook interest targeting',
    paras: [
      'Facebook knows what people care about, and interest targeting lets you reach them by it: the pages they follow, the topics they engage with, the products and activities they are into. Used carelessly it burns budget on broad, cheap, low-intent inventory. Used well it puts your offer in front of people primed to want it. We build interest-based audiences deliberately, test them against lookalikes and broad targeting, and keep the ones that actually convert rather than the ones that just get cheap clicks.',
    ],
  },
  {
    icon: Palette,
    t: 'Creative and ad design',
    paras: [
      'Social creative is the single biggest lever on performance, and it wears out fast. We design ads that fit each format and stop the scroll, whether that is a single image, a carousel, a Reel, or a Story, in a look that feels like your brand rather than generic stock. Because creative fatigue is real, we refresh it on a schedule instead of running the same tired ad until performance falls off a cliff.',
    ],
  },
  {
    icon: Repeat,
    t: 'Remarketing and retargeting',
    paras: [
      'Most people do not buy on the first visit. Remarketing brings them back. We build audiences from the people who viewed a product, started a form, or abandoned a cart, then serve them the right message to chase the sale rather than write it off. It is usually some of the cheapest revenue in the account, and most businesses leave it on the table.',
    ],
  },
  {
    icon: ClipboardList,
    t: 'Lead generation campaigns',
    paras: [
      "For service businesses, Meta's lead forms capture enquiries without the prospect ever leaving the feed, which lifts conversion rates and lowers cost per lead. We build lead campaigns with offers worth filling in a form for, then connect them to your CRM so the leads land where your sales team can act on them, rather than sitting in a Meta dashboard nobody checks.",
    ],
  },
  {
    icon: Activity,
    t: 'Conversion tracking and pixel setup',
    paras: [
      "Since Apple's privacy changes, tracking is the thing most accounts get wrong, and it is the reason so many businesses cannot tell which half of their budget is working. We set up the Meta Pixel and the Conversions API properly so your campaigns can see real results and optimise against them, instead of flying blind and guessing.",
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need enquiries coming in without a budget that swallows your year. We build lean, conversion-focused Facebook campaigns for small businesses across Australia, with clear pricing and no padding, and we start where your money works hardest rather than spreading it thin across every objective at once. Start with what makes sense now, prove it pays, then scale.',
  },
  {
    icon: ShoppingCart,
    t: 'E-commerce brands',
    d: 'Online stores live and die on return on ad spend, and Meta is one of the best demand-generation channels an e-commerce brand has. We run prospecting, catalogue, and remarketing campaigns built to sell, with the checkout drop-off chased down rather than written off. Because EG Digital also builds and hosts stores, the pixel gaps and catalogue problems that quietly wreck e-commerce campaigns get fixed at the source instead of worked around.',
  },
  {
    icon: Building2,
    t: 'B2B companies',
    d: 'Facebook is not just for B2C. With the right targeting and offer, it reaches decision-makers before they are actively searching, often at a fraction of the cost of other channels. We run demand-generation and lead campaigns that fill the top of your funnel with qualified prospects, connect them to your CRM, and account for the longer sales cycle rather than optimising for cheap clicks that never close.',
  },
  {
    icon: Rocket,
    t: 'Established and growth businesses',
    d: 'For bigger budgets, multiple objectives, and higher stakes, you need a team that can run paid social at scale and stay accountable for the number. We bring the strategy, the creative pipeline, the tracking discipline, and the reporting to manage spend across Facebook and Instagram without losing the plot, with one partner answerable for the whole thing.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Audit and strategy',
    d: 'We start by auditing your existing account, or your market if you are starting fresh, and we look at what your competitors are running and how they are positioning. You get a documented strategy with a recommended budget split across the funnel, target metrics, and a clear read on what good looks like before we spend a cent.',
  },
  {
    t: 'Tracking and setup',
    d: 'Before the ads go live, we get the measurement right: the Meta Pixel, the Conversions API, event tracking, and the landing-page checks that decide whether a click can actually convert. This is the step most accounts get wrong, and getting it right is what makes everything after it work.',
  },
  {
    t: 'Creative and build',
    d: 'We build the campaigns, design the creative, write the copy, and structure the audiences and budgets across the objectives that fit your goals. You see the reasoning and the assets, not a black box.',
  },
  {
    t: 'Optimisation',
    d: 'This is where the money is made or lost. We cut wasted spend, test creative and audiences against each other, refine targeting and budgets, and shift spend toward what converts. Paid social is not set-and-forget, and creative fatigue means it never can be, so we do not treat it that way.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to leads, sales, and revenue, in plain language, with next month's priorities set against the data. The account gets sharper over time, and so do the results.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Facebook Ads in the UK',
    d: "Our Facebook advertising services in the UK are built for one of the world's most competitive social advertising markets. We manage Facebook and Instagram campaigns that control cost per result in crowded auctions, tighten targeting, and tie spend to measurable enquiries and revenue rather than reach alone.",
  },
  {
    t: 'Facebook Ads in the USA',
    d: 'Businesses looking for Facebook ads management in the USA need creative and targeting that can compete in the most expensive Meta auction in the world. We combine strong creative, disciplined conversion tracking, and continuous optimisation to help businesses generate profitable, scalable growth across the United States.',
  },
  {
    t: 'Facebook Ads in Canada',
    d: 'Our Facebook advertising services in Canada focus on accountable spend: precise audiences, clean conversion tracking, and campaigns aligned to real buyer intent. Whether you operate locally or nationally, we help Canadian businesses turn paid social into qualified enquiries and sales.',
  },
  {
    t: 'Facebook Ads in Singapore',
    d: "Singapore's competitive digital market rewards sharp targeting and strong creative. Our Facebook advertising services in Singapore help businesses improve return on ad spend, generate qualified enquiries, and manage Facebook and Instagram campaigns with a clear line back to revenue.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is the average cost of FB ads service in Australia?',
    a: 'There are two costs and they are different. The first is ad spend, which is what you pay Meta to show your ads. In Australia the average cost per click sits around $1.50 for 2026, typically ranging from about $0.50 to $2.00, with cost per thousand impressions somewhere around $10 to $15 and much higher in competitive categories such as finance and legal. The second is the management fee, which is what you pay an agency to run the account. That typically runs $1,000 to $5,000 a month, charged as a flat retainer or as roughly 15% to 20% of ad spend, with the percentage often falling as budgets grow. Creative production is sometimes scoped on top. The honest version is that price tracks your industry, your creative, and your objective more than any fixed tier, so we quote from an audit of your actual account rather than a number off a menu.',
  },
  {
    q: 'Can I get a free Facebook ads consultation in Australia?',
    a: 'Yes. We offer a free, no-obligation Facebook ads consultation and audit to any Australian business. We review your existing account, or your market if you are starting fresh, look at what your competitors are running, and give you a straight read on where your budget is leaking and what it should be bringing back. You get the findings whether or not you go on to work with us, and there is no lock-in attached to it.',
  },
  {
    q: 'How do Facebook interest targeting tools work?',
    a: 'Meta builds a profile of what each user is interested in, based on the pages they follow, the content they engage with, and the products and activities they interact with across Facebook and Instagram. Interest targeting lets you reach people by those signals, so a camping brand can target people interested in hiking and the outdoors, for example. In practice, interest audiences are one lever among several. We test them against custom audiences built from your own data and lookalike audiences that mirror your best customers, then keep whichever combination actually converts. Broad interest targeting can waste budget on cheap, low-intent clicks, so the skill is in building the audience deliberately and reading the results, not just ticking interest boxes.',
  },
  {
    q: 'Is hiring a Facebook ads expert worth it?',
    a: 'For anything beyond boosting the occasional post, yes, and the maths usually makes the case. A self-managed account typically wastes a real share of its budget on the wrong audiences and worn-out creative, and it rarely has the tracking set up properly, which means it cannot optimise against real results. An expert brings the audience strategy, the creative testing, the correct pixel and Conversions API setup, and the ongoing optimisation that brings your cost per result down. With EG Digital you also get designers, copywriters, and the developers to fix the landing page and tracking under the same roof, so the parts of a campaign that usually get handed off to a third party are handled in-house. The management fee is only worth it if it recovers more than it costs, which is exactly the bar we hold ourselves to.',
  },
  {
    q: 'What are the best practices for Facebook ads in Australia?',
    a: "The fundamentals hold across markets, but a few matter most. Get the tracking right first: the Meta Pixel and the Conversions API, so your campaigns can see real conversions since Apple's privacy changes. Lead with creative, because it is the biggest driver of performance and it fatigues fast, so refresh it on a schedule. Build audiences from your own first-party data where you can, then extend with lookalikes and interest targeting, rather than relying on broad targeting alone. Fund the testing phase properly, because underfunding it is the most common reason campaigns fail. And measure against cost per result and return on ad spend, not likes and reach. Beyond that, Australian budgets should account for seasonal cost spikes, especially the Q4 run-up to Christmas when competition drives prices up.",
  },
  {
    q: 'Do you run Instagram ads as well as Facebook?',
    a: 'Yes, and usually in the same campaign. Facebook and Instagram both run through Meta Ads Manager, so a single campaign can reach your audience across both platforms, plus placements like Reels and Stories. We choose the placement mix based on where your audience is and where your creative performs, rather than splitting your budget into two disconnected efforts.',
  },
]

// Short signal chips for the hero - every phrase is drawn verbatim from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: '100% to Meta', l: 'no cut of your media spend, no hidden markup' },
  { v: 'Revenue', l: 'we report on enquiries and sales, not reach' },
  { v: 'No lock-in', l: 'no 12-month contracts, no guaranteed-leads gimmicks' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$1,000 - $5,000/mo', l: 'Management fee most Australian SMBs pay, as a flat retainer or a percentage of ad spend.' },
  { v: '15% - 20%', l: 'Typical percentage-of-spend management fee, often dropping as budgets grow.' },
  { v: '~$1.50 CPC', l: 'Average cost per click on Meta in Australia for 2026, typically $0.50 to $2.00.' },
]

export function FacebookAdsManagement() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/facebook-ads-management')

  usePageMeta(
    'Facebook Ads Management Services Australia | Meta Ads | EG Digital',
    'Facebook & Instagram ads management in Australia, run on Meta Ads Manager for revenue, not reach. Audience targeting, creative & tracking done in-house. 100% of budget to Meta, no lock-in. Free consultation.',
  )

  return (
    <PageLayout>
      <style>{`
        .fba-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .fba-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .fba-shell{ max-width:2440px; } }
        @media (max-width:768px){ .fba-shell{ max-width:100%; } }

        /* ── Section base ── */
        .fba-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .fba-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .fba-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .fba-sec.dark .fba-shell { position:relative; z-index:1; }

        .fba-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .fba-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .fba-h2 span { color:${GREEN}; }
        .fba-sec.dark .fba-h2 { color:#fff; }
        .fba-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .fba-sec.dark .fba-lead { color:rgba(255,255,255,0.68); }

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
        .fba-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .fba-h1 { position:relative; font-size:clamp(42px,6.2vw,96px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:#fff; margin:16px 0 0; text-transform:uppercase; }
        .fba-lede { position:relative; font-size:clamp(19px,2.2vw,32px); font-weight:900; letter-spacing:-0.035em; line-height:1.08; color:#fff; margin:18px 0 0; }
        .fba-lede span { color:${GREEN}; }
        .fba-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .fba-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .fba-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .fba-bp svg { transition:transform .2s; } .fba-bp:hover svg { transform:translateX(3px); }
        .fba-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .fba-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .fba-bp, .fba-bg, .fba-tel{ width:100%; justify-content:center; } }

        /* Hero image (Unsplash) + animated scan + emblem */
        .hero-img { padding:0; border:1px solid rgba(255,255,255,0.12); background:${NAVY}; min-height:clamp(300px,42vw,520px); }
        .hero-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .hero-img::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 38%, ${NAVY}77); pointer-events:none; }
        .fba-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:fba-scan 4.6s linear infinite; will-change:transform; }
        @keyframes fba-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .fba-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:fba-float 6s ease-in-out infinite; will-change:transform; }
        .fba-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:fba-spin 3.4s linear infinite; will-change:transform; }
        .fba-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .fba-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .fba-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .fba-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.66); }
        .fba-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .fba-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:fba-pulse 1.8s ease-in-out infinite; }
        @keyframes fba-spin { to { transform:rotate(360deg); } }
        @keyframes fba-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes fba-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:fba-float 7s ease-in-out infinite; will-change:transform; }
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
        .fba-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .fba-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing:-0.045em; line-height:0.98; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .fba-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .fba-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .fba-scan, .fba-emblem, .fba-emblem-ring, .fba-dot, .chip { animation:none !important; }
          .fba-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="fba-sec dark fba-hero">
        <div className="fba-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Facebook Ads Company in Australia</Eyebrow>
                <h1 className="fba-h1">Facebook Ads Management Services in Australia</h1>
                <p className="fba-lede">
                  Reach your buyers before they even start searching, with creative built to <span>stop the scroll</span>.
                </p>
                <div className="fba-cta">
                  <button className="fba-bp" onClick={() => navigate('/contact')}>
                    Get a free Facebook ads consultation
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="fba-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile hero-img">
              <img
                src={img('photo-1563986768609-322da13575f3', 900, 900)}
                alt="Facebook ads management services in Australia - Meta ads company in Australia"
                width={900} height={900} loading="eager" decoding="async"
              />
              <div className="fba-scan" aria-hidden="true" />
              <div className="fba-emblem" aria-hidden="true">
                <div className="fba-emblem-ring"><span className="fba-emblem-ic"><TrendingUp size={20} /></span></div>
                <div className="fba-emblem-tx">
                  <span className="fba-emblem-k">Return on Ad Spend</span>
                  <span className="fba-emblem-v"><span className="fba-dot" /> Climbing</span>
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
                Most Facebook ad agencies chase likes and reach. Those are vanity metrics, not results. Leads are the
                result. Sales are.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based Facebook ads company that treats paid social as a revenue channel, not a
                follower count. We plan, build, and manage Facebook and Instagram campaigns across Meta Ads Manager, and
                we tie every dollar of ad spend to one number you actually care about: qualified enquiries and sales from
                people ready to buy. When a campaign is not paying its way, we tell you and we fix it, rather than letting
                the budget quietly disappear into impressions that never convert.
              </p>
              <p className="t-d">
                <strong>We are part of Eloma Group,</strong> so your Facebook advertising sits next to web development,
                SEO, Microsoft and cloud, custom software, and cyber security under one roof. That matters more than it
                sounds. The landing page your ads point to, the conversion tracking behind it, and the systems that catch
                the lead are usually where paid social leaks money. When the same team runs all of it, the leaks get
                sealed instead of blamed on someone else's developer queue.
              </p>
              <p className="t-d">
                One partner. One team that plans the campaign, builds the creative, writes the copy, sets up the
                tracking, and reads the numbers back to you in plain language.
              </p>
              <p className="t-d">
                Get a free Facebook ads consultation. No lock-in, just a clear read on where your spend is going and what
                it is bringing back.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why hire EG Digital ── */}
      <section className="fba-sec">
        <div className="fba-shell">
          <div className="fba-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="fba-h2">Why hire EG Digital as your Facebook ads company in <span>Australia</span></h2>
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

      {/* ── Our Facebook and Meta ads services ── */}
      <section className="fba-sec dark">
        <div className="fba-shell">
          <div className="fba-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="fba-h2">Our Facebook and Meta ads <span>services</span></h2>
            <p className="fba-lead">
              Facebook advertising is more than boosting a post. A campaign that actually sells runs across several
              objectives and placements, each doing a different job in your funnel, and because Facebook and Instagram
              share the same Meta Ads Manager, we run both from one place. Here is what we do.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // Campaign management is a full-width feature row; the rest form a varied bento.
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

      {/* ── Who we run Facebook ads for ── */}
      <section className="fba-sec">
        <div className="fba-shell">
          <div className="fba-head">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="fba-h2">Who we run Facebook ads <span>for</span></h2>
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
      <section className="fba-sec dark">
        <div className="fba-shell">
          <div className="fba-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="fba-h2">How we <span>work</span></h2>
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
      <section className="fba-sec">
        <div className="fba-shell">
          <div className="fba-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="fba-h2">What Facebook ads cost in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on your industry, your audience, and your objective, and any company quoting
                  a flat number before seeing your account is guessing.
                </p>
                <p className="cost-p">
                  For context, the average cost per click on Meta in Australia sits around $1.50 for 2026, up roughly 12%
                  year on year, with a typical range of around $0.50 to $2.00 depending on placement and competition.
                  Cost per thousand impressions runs somewhere around $10 to $15 across most industries, though
                  competitive categories such as finance and legal run far higher, and Reels placements are often close
                  to half the cost of Instagram Feed. What you actually pay comes down to your objective, your creative
                  quality, and how well the account is managed, more than any single benchmark.
                </p>
                <p className="cost-p">
                  Management fees are separate from that ad spend, and this is the distinction that trips people up. The
                  ad spend is what you pay Meta to show your ads. The management fee is what you pay us to make those ads
                  profitable. Most Australian SMBs pay between $1,000 and $5,000 per month in management fees, charged
                  either as a flat monthly retainer or as a percentage of ad spend, typically in the range of 15% to 20%,
                  with the percentage often dropping as budgets grow. Creative production is sometimes scoped separately,
                  because good social creative is a real part of the cost and the biggest driver of results.
                </p>
                <p className="cost-p">
                  Two things worth knowing. First, paid social needs a testing budget to find the creative and audiences
                  that work, and underfunding that phase is the most common reason Facebook campaigns fail to deliver.
                  Second, be wary of any agency charging a high percentage of your spend with no cap, because that model
                  rewards them for spending more of your money whether it works or not. We keep the incentive pointed at
                  your results.
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
          <p className="fba-note">
            Get a free Facebook ads consultation and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International Facebook Ads Services ── */}
      <section className="fba-sec dark">
        <div className="fba-shell">
          <div className="fba-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="fba-h2">International Facebook Ads <span>Services</span></h2>
            <p className="fba-lead">
              Based in Melbourne, EG Digital delivers Facebook and Meta ads management in Australia while also helping
              businesses grow paid-social performance across the UK, USA, Canada, and Singapore, with campaigns built for
              each market's competition, cost per result, and buyer behaviour.
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
              dollar to the platform, target the right buyers, build creative that converts, optimise relentlessly, and
              report on the revenue the campaigns actually produce.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to make your spend work harder ── */}
      <section className="fba-sec">
        <div className="fba-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free consultation</Eyebrow>
              <h2 className="ready-h">Ready to make your Facebook ad spend work harder?</h2>
              <p className="ready-p">
                Tell us where your paid social is falling short. We will run a free audit, review your competitors, and
                tell you exactly where your budget is leaking and what it should be bringing back. If we can help, we
                will show you how. If we cannot, we will tell you that too.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free Facebook ads consultation below.
              </p>
              <div className="ready-cta">
                <button className="fba-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free consultation
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="fba-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="fba-sec">
        <div className="fba-shell">
          <div className="fba-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="fba-h2">Frequently asked <span>questions</span></h2>
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
        button="Get a free consultation"
      />
    </PageLayout>
  )
}
