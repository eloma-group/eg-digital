import { useEffect } from 'react'
import {
  BarChart3, Users, Sparkles, Unlock, PenTool, CalendarCheck, Palette,
  LayoutGrid, Mail, Megaphone, Store, ShoppingCart, Briefcase, Building2,
  Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - SOCIAL MEDIA MARKETING (Australia)
   Green-accent editorial layout matching the house style: navy + brand green,
   large clamp typography, bento service cards, dark international band and a
   plain-language FAQ. Copy is verbatim from the approved page content.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: BarChart3,
    t: 'We measure enquiries, not vanity metrics',
    d: 'Follower count is vanity. So is reach on its own. Our reporting starts with the numbers that pay the bills: enquiries from social, leads, taps through to your site, and the sales they turn into. Then it works back to the engagement and reach that produced them. If a monthly report leads with follower growth and hides whether the phone rang, it is showing you the wrong thing first. Ours shows you the right thing first.',
  },
  {
    icon: Users,
    t: 'One team for content, design, branding, and email',
    d: 'You get a strategist, content creators, a graphic designer, and copywriters who work together, not a single account manager forwarding your brief to freelancers you never meet. Because EG Digital also builds websites, runs SEO and paid ads, and handles your branding, the work stays consistent across every channel instead of your Instagram looking like one company and your website looking like another.',
  },
  {
    icon: Sparkles,
    t: 'Content built for your brand, not a template',
    d: 'Plenty of agencies run every client through the same content template with the logo swapped out. We build content around your actual brand: your voice, your audience, and what your customers respond to. That takes more work than recycling a template, and it is the difference between a feed people scroll past and one they stop for.',
  },
  {
    icon: Unlock,
    t: 'No lock-in, no filler',
    d: 'No 12-month contracts. No packages padded with posts nobody reads to justify the fee. We earn the renewal each month by producing content that works and reporting honestly on what it did. A short minimum to build momentum is fair. A long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: PenTool,
    t: 'Content creation',
    paras: [
      'Content is the engine of social, and most of it fails because it is generic. We plan and produce content mapped to your audience and your goals: static posts, carousels, and the short-form video that carries the most reach in 2026. Every piece has a job, whether that is building awareness, driving traffic, or pushing an enquiry, and a documented content calendar means you always know what is going out and why. We produce content on a schedule so your channels stay active and consistent, rather than going quiet for three weeks and posting five times in a panic.',
      'Short-form video sits at the centre of this. Reels, TikToks, and YouTube Shorts get the reach that static posts no longer do, so we build video into the plan rather than treating it as an extra. You get content shaped for how people actually use each platform, not the same post copy-pasted across all of them.',
    ],
  },
  {
    icon: CalendarCheck,
    t: 'Social media management',
    paras: [
      'Posting is only half the job. We run the day-to-day management of your channels: scheduling, publishing across the platforms that fit your business, and community management, which means responding to comments and messages so the people engaging with you actually hear back. Social is a conversation, and a channel that never replies loses the people most likely to buy. We keep it active, consistent, and responsive, so your audience builds instead of drifting.',
    ],
  },
  {
    icon: Palette,
    t: 'Branding',
    paras: [
      'A strong brand is what makes your content recognisable before anyone reads the caption. We build and sharpen brand identity: your visual style, your voice, and the consistency that makes you look like one business across every channel and touchpoint. Whether you need a brand built from scratch or an existing one tightened up, we make sure your social, your website, and everything else look and sound like they came from the same place, because they did.',
    ],
  },
  {
    icon: LayoutGrid,
    t: 'Graphic design',
    paras: [
      'Good design is the difference between a post that looks professional and one that looks thrown together. Our designers produce the visual assets your channels run on: post graphics, carousels, story templates, ad creative, and branded content that holds up next to anyone in your feed. Everything is built to your brand and sized for each platform, so nothing looks stretched, cramped, or off-brand. Because design lives in the same team as your content and your website, the look stays consistent everywhere.',
    ],
  },
  {
    icon: Mail,
    t: 'Email marketing',
    paras: [
      'Social builds the audience; email is how you own the relationship with it. You do not control the algorithm, but you control your list. We plan and run email that turns followers and site visitors into subscribers, and subscribers into customers: newsletters, campaigns, automated sequences, and the design and copy that get them opened and clicked. Because the same team runs your social and your site, your channels feed your list and your list brings people back, instead of three disconnected tools nobody is joining up.',
    ],
  },
  {
    icon: Megaphone,
    t: 'Paid social',
    paras: [
      'When you want to reach beyond your existing audience, paid social does it: Facebook, Instagram, and LinkedIn ads that put your content in front of the right people and drive enquiries at scale. We run paid social as part of our full PPC service, so the ads, the targeting, and the tracking are handled by specialists rather than boosted on a whim. If paid social is where you want to focus, our PPC services cover it in full.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need social that brings in enquiries without a budget that swallows your year. We build affordable, focused social media management for small businesses across Australia, with clear pricing and no padding, and we concentrate on the one or two platforms where your customers actually are rather than spreading you thin across all of them. Start with what makes sense now, prove it works, then grow.',
  },
  {
    icon: ShoppingCart,
    t: 'E-commerce brands',
    d: 'Online stores need social that sells, not just posts. We run content, design, and email built to drive traffic and revenue, with the channels feeding your store and remarketing chasing the people who visited but did not buy. Because EG Digital also builds and hosts stores, your social, your site, and your email all pull in the same direction.',
  },
  {
    icon: Briefcase,
    t: 'Service businesses',
    d: 'For service businesses, social is where trust gets built before anyone makes an enquiry. We create content that shows your work, answers the questions buyers ask, and keeps you visible so you are the name they think of when they are ready. Consistent, credible, and pointed at enquiries rather than applause.',
  },
  {
    icon: Building2,
    t: 'Established and growth businesses',
    d: 'For bigger brands running multiple channels with more at stake, you need a team that can produce content at volume and keep it consistent and on-brand across everything. We bring the strategy, the creative capacity, and the reporting to manage social at scale, with one partner answerable for how it all fits together.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Discovery and strategy',
    d: 'We start by understanding your business, your audience, and what social actually needs to achieve for you. You get a documented strategy: the platforms that fit, the content approach, and the metrics we will hold ourselves to, before anything gets posted.',
  },
  {
    t: 'Brand and content plan',
    d: 'We lock in the look and the voice, then build a content calendar so you can see what is going out and why. No guessing, no posting for the sake of it.',
  },
  {
    t: 'Create and design',
    d: 'Our team produces the content and the design: posts, video, graphics, and email, all built to your brand and shaped for each platform.',
  },
  {
    t: 'Publish and manage',
    d: 'We schedule and publish across your channels and handle community management, so your audience gets replies and your channels stay active and consistent.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to enquiries and results, in plain language, with next month's plan set against what actually worked. The content gets sharper over time, and so do the results.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Social Media Marketing in the UK',
    d: "Our social media marketing services in the UK help businesses cut through one of the world's most crowded content markets. We build content, design, and email programs that grow engaged audiences and drive measurable enquiries, tailored to UK platform behaviour and buyer expectations.",
  },
  {
    t: 'Social Media Marketing in the USA',
    d: 'Businesses looking for social media marketing services in the USA need content that competes across large, fast-moving platforms and multiple markets. We combine strategy, content creation, design, and email to help businesses build audiences and generate leads that scale across the United States.',
  },
  {
    t: 'Social Media Marketing in Canada',
    d: 'Our social media marketing services in Canada focus on content that connects and converts: strategy, creative, and community management aligned to what Canadian audiences respond to. Whether you operate locally or nationally, we help Canadian businesses turn social channels into a real source of enquiries.',
  },
  {
    t: 'Social Media Marketing in Singapore',
    d: "Singapore's competitive, mobile-first market rewards sharp content and consistency. Our social media marketing services in Singapore help businesses build engaged audiences, produce high-quality content across the right platforms, and turn social attention into qualified enquiries.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much do SMM services cost in Australia?',
    a: 'Most Australian small businesses pay between $1,000 and $2,000 per month for professional organic social media management on one or two platforms, with content and monthly reporting included. A fuller program with more platforms, regular video, and a dedicated account manager usually runs $2,500 to $5,000 per month. Those figures cover management and content; if you add paid social ads, the ad spend goes to the platform separately and managing those ads adds a fee on top. The honest version is that price tracks content volume and platform count more than any fixed package, so we quote from what your business actually needs rather than a tier off a menu. Be wary of anything around $500 a month, which usually buys generic posts with no strategy behind them.',
  },
  {
    q: 'What is the role of an SMM company?',
    a: 'An SMM company runs the social side of your marketing so you do not have to, and does it better than posting between meetings ever could. That covers the strategy (which platforms, what content, what you are trying to achieve), the content and design (posts, video, graphics), the day-to-day management (scheduling, publishing, and replying to comments and messages), and the reporting that tells you whether any of it is working. A good SMM company ties all of that to business outcomes, not follower counts. With EG Digital you also get branding, email, web, and paid ads under the same roof, so your social is joined up with everything else your marketing is doing instead of running as an island.',
  },
]

export function SocialMediaMarketing() {
  const navigate = useNavigate()

  // No global per-route meta helper exists, so set the document title here to
  // match the approved META TITLE for this page.
  useEffect(() => {
    const prev = document.title
    document.title = 'Social Media Marketing Services in Australia | EG Digital'
    return () => { document.title = prev }
  }, [])

  return (
    <PageLayout>
      <style>{`
        .smm-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .smm-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .smm-shell{ max-width:2440px; } }
        /* Mobile: drop the outer 96px gutter so content keeps a clean 24px bezel
           instead of a narrow centred column. */
        @media (max-width:768px){ .smm-shell{ max-width:100%; } }

        /* ── Hero ── */
        .smm-hero { position:relative; overflow:hidden; padding:clamp(40px,5vw,88px) clamp(24px,4vw,64px) clamp(44px,5vw,80px); }
        .smm-hero::before { content:''; position:absolute; top:-22%; right:-8%; width:min(720px,66vw); height:min(720px,66vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}22, transparent 64%); pointer-events:none; z-index:0; }
        .smm-hgrid { position:relative; z-index:1; display:grid; grid-template-columns:1.05fr 0.95fr; gap:clamp(36px,5vw,80px); align-items:center; }
        @media (max-width:920px){ .smm-hgrid{ grid-template-columns:1fr; } }
        .smm-h1 { font-size:clamp(46px,8vw,116px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:${NAVY}; margin:16px 0 0; text-transform:uppercase; }
        .smm-lede { font-size:clamp(22px,3vw,40px); font-weight:900; letter-spacing:-0.035em; line-height:1.04; color:${NAVY}; margin:20px 0 0; }
        .smm-lede span { color:${GREEN}; }
        .smm-intro { max-width:560px; font-size:clamp(15px,1.2vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:20px 0 0; }
        .smm-intro strong { color:${NAVY}; font-weight:700; }
        .smm-cta { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .smm-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .smm-bp:hover { background:${NAVY}; color:#fff; transform:translateY(-2px); }
        .smm-bp svg { transition:transform .2s; } .smm-bp:hover svg { transform:translateX(3px); }
        .smm-bg { display:inline-flex; align-items:center; gap:9px; background:#fff; color:${NAVY}; border:1.5px solid rgba(8,33,60,0.16); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s; }
        .smm-bg:hover { border-color:rgba(8,33,60,0.4); }
        @media (max-width:480px){ .smm-bp, .smm-bg, .smm-tel{ width:100%; justify-content:center; } }
        .smm-heroimg { position:relative; border-radius:24px; overflow:hidden; box-shadow:0 34px 80px -34px rgba(8,33,60,0.5); aspect-ratio:4 / 3.4; }
        .smm-heroimg img { width:100%; height:100%; object-fit:cover; display:block; }
        .smm-heroimg::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 40%, ${NAVY}66); }

        /* ── Section base ── */
        .smm-sec { padding:clamp(56px,7vw,120px) 0; }
        .smm-sec.alt { background:#fff; }
        .smm-sec.dark { background:${NAVY}; position:relative; overflow:hidden; }
        .smm-sec.dark::before { content:''; position:absolute; top:-22%; left:-10%; width:min(640px,60vw); height:min(640px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}2e, transparent 65%); pointer-events:none; }
        .smm-sec.dark .smm-shell { position:relative; z-index:1; }
        .smm-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:-0.05em; line-height:0.92; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .smm-h2 span { color:${GREEN}; }
        .smm-sec.dark .smm-h2 { color:#fff; }
        .smm-lead { max-width:640px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.58); margin:18px 0 0; }
        .smm-sec.dark .smm-lead { color:rgba(255,255,255,0.66); }

        /* ── Why cards ── */
        .smm-why { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .smm-why{ grid-template-columns:1fr; } }
        .smm-wc { position:relative; overflow:hidden; background:#fafbfd; border:1px solid rgba(8,33,60,0.08); border-radius:22px;
          padding:clamp(24px,2.6vw,40px); box-shadow:0 4px 22px rgba(8,33,60,0.05);
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .smm-wc::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:${GREEN};
          transform:scaleX(0); transform-origin:left center; transition:transform .45s cubic-bezier(0.16,1,0.3,1); }
        .smm-wc:hover { transform:translateY(-6px); box-shadow:0 30px 64px rgba(8,33,60,0.12); border-color:${GREEN}55; }
        .smm-wc:hover::before { transform:scaleX(1); }
        .smm-wc-ic { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${GREEN}29,${GREEN}0d); color:${GREEN}; margin-bottom:18px; }
        .smm-wc-t { font-size:clamp(19px,1.7vw,26px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 12px; line-height:1.08; }
        .smm-wc-d { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:0; }

        /* ── Services (alternating rows) ── */
        .smm-srv { display:flex; flex-direction:column; gap:clamp(16px,2vw,26px); margin-top:clamp(36px,4vw,56px); }
        .smm-srow { display:grid; grid-template-columns:auto 1fr; gap:clamp(18px,2.4vw,34px); align-items:start;
          background:#fff; border:1px solid rgba(8,33,60,0.09); border-radius:24px; padding:clamp(26px,3vw,48px);
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .smm-srow:hover { transform:translateY(-5px); box-shadow:0 30px 66px -30px rgba(8,33,60,0.32); border-color:${GREEN}44; }
        @media (max-width:640px){ .smm-srow{ grid-template-columns:1fr; } }
        .smm-srow-ic { width:64px; height:64px; border-radius:17px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${NAVY},#12395f); color:${GREEN}; flex-shrink:0; }
        .smm-srow-t { font-size:clamp(22px,2.4vw,38px); font-weight:900; letter-spacing:-0.035em; line-height:0.98; color:${NAVY}; margin:2px 0 0; text-transform:uppercase; }
        .smm-srow-p { font-size:clamp(14px,1.05vw,16.5px); line-height:1.8; color:rgba(8,33,60,0.62); margin:14px 0 0; }

        /* ── Audiences ── */
        .smm-aud { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .smm-aud{ grid-template-columns:1fr; } }
        .smm-ac { position:relative; overflow:hidden; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:22px;
          padding:clamp(26px,3vw,42px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .smm-ac:hover { transform:translateY(-6px); border-color:rgba(60,185,140,0.4); box-shadow:0 34px 70px -28px rgba(0,0,0,0.55); }
        .smm-ac-ic { width:54px; height:54px; border-radius:15px; display:flex; align-items:center; justify-content:center;
          background:rgba(60,185,140,0.14); color:${GREEN}; margin-bottom:18px; }
        .smm-ac-t { font-size:clamp(20px,2vw,30px); font-weight:900; letter-spacing:-0.03em; color:#fff; margin:0 0 11px; line-height:1.06; }
        .smm-ac-d { font-size:clamp(14px,1.02vw,16px); line-height:1.76; color:rgba(255,255,255,0.68); margin:0; }

        /* ── How we work (numbered steps) ── */
        .smm-steps { display:flex; flex-direction:column; margin-top:clamp(36px,4vw,56px); }
        .smm-step { display:grid; grid-template-columns:auto 1fr; gap:clamp(20px,3vw,48px); align-items:start;
          padding:clamp(24px,3vw,40px) 0; border-top:1px solid rgba(8,33,60,0.12); }
        .smm-step:last-child { border-bottom:1px solid rgba(8,33,60,0.12); }
        .smm-step-no { font-size:clamp(40px,5vw,86px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:${GREEN};
          font-variant-numeric:tabular-nums; opacity:0.9; }
        .smm-step-t { font-size:clamp(22px,2.4vw,40px); font-weight:900; letter-spacing:-0.035em; line-height:1; color:${NAVY}; margin:0; text-transform:uppercase; }
        .smm-step-d { font-size:clamp(14px,1.05vw,16.5px); line-height:1.8; color:rgba(8,33,60,0.62); margin:12px 0 0; max-width:70ch; }
        @media (max-width:480px){
          .smm-step{ grid-template-columns:1fr; gap:10px; }
          .smm-step-no{ font-size:34px; }
        }

        /* ── Cost ── */
        .smm-cost { display:grid; grid-template-columns:1.1fr 0.9fr; gap:clamp(32px,4vw,72px); align-items:center; margin-top:clamp(32px,4vw,52px); }
        @media (max-width:900px){ .smm-cost{ grid-template-columns:1fr; } }
        .smm-cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .smm-cost-p:last-child { margin-bottom:0; }
        .smm-cost-p strong { color:${NAVY}; font-weight:800; }
        .smm-pricecard { background:${NAVY}; border-radius:24px; padding:clamp(28px,3vw,44px); color:#fff; position:relative; overflow:hidden; }
        .smm-pricecard::before { content:''; position:absolute; bottom:-40%; right:-15%; width:60%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}33, transparent 62%); pointer-events:none; }
        .smm-pr { position:relative; padding:18px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .smm-pr:first-of-type { padding-top:0; }
        .smm-pr:last-of-type { border-bottom:none; padding-bottom:0; }
        .smm-pr-v { font-size:clamp(26px,3vw,44px); font-weight:900; letter-spacing:-0.04em; color:${GREEN}; line-height:1; }
        .smm-pr-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.66); margin-top:8px; line-height:1.5; }
        .smm-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .smm-note a { color:${GREEN}; text-decoration:none; }

        /* ── Countries ── */
        .smm-co { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .smm-co{ grid-template-columns:1fr; } }
        .smm-coc { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:clamp(24px,2.6vw,38px);
          transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s; will-change:transform; }
        .smm-coc:hover { transform:translateY(-5px); border-color:rgba(60,185,140,0.4); }
        .smm-coc-t { font-size:clamp(18px,1.7vw,24px); font-weight:900; letter-spacing:-0.025em; color:#fff; margin:0 0 10px; }
        .smm-coc-d { font-size:clamp(14px,1.02vw,15.5px); line-height:1.75; color:rgba(255,255,255,0.66); margin:0; }
        .smm-co-close { max-width:820px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(30px,3.6vw,48px) 0 0; }

        /* ── Ready band ── */
        .smm-ready { background:linear-gradient(160deg, #f2fbf7 0%, #e6f6ee 100%); border:1px solid ${GREEN}30; border-radius:28px;
          padding:clamp(34px,5vw,72px); margin-top:clamp(36px,4vw,56px); text-align:center; }
        .smm-ready-h { font-size:clamp(30px,4.4vw,68px); font-weight:900; letter-spacing:-0.045em; line-height:0.96; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .smm-ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.62); }
        .smm-ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .smm-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .smm-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .smm-faq { margin-top:clamp(36px,4vw,56px); }
        .smm-fq { padding:clamp(24px,3vw,40px) 0; border-top:1px solid rgba(8,33,60,0.12); }
        .smm-fq:last-child { border-bottom:1px solid rgba(8,33,60,0.12); }
        .smm-fq-q { font-size:clamp(20px,2.1vw,32px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 14px; line-height:1.1; }
        .smm-fq-a { font-size:clamp(14px,1.05vw,16.5px); line-height:1.82; color:rgba(8,33,60,0.64); margin:0; max-width:90ch; }

        /* ── Legal line ── */
        .smm-legal { font-size:clamp(12px,0.95vw,14px); line-height:1.7; color:rgba(8,33,60,0.5); font-style:italic; margin:clamp(30px,3.6vw,48px) 0 0; }
      `}</style>

      {/* ── Hero ── */}
      <section className="smm-shell smm-hero">
        <div className="smm-hgrid">
          <Reveal>
            <Eyebrow>Social Media Marketing Services in Australia</Eyebrow>
            <h1 className="smm-h1">Social media that brings in customers</h1>
            <p className="smm-lede">
              Turn your social channels into a channel that <span>actually brings in customers</span>.
            </p>
            <p className="smm-intro">
              Most social media agencies sell you followers and likes. Followers are not the point. Customers are.
            </p>
            <p className="smm-intro">
              EG Digital is a Melbourne-based social media marketing company that treats social as a business channel,
              not a popularity contest. We handle the content, the design, the branding, and the email that ties it all
              together, and we point every piece at outcomes you can measure: enquiries, leads, and the customers behind
              them. When a post gets a thousand likes and no enquiries, we do not call that a win. We look at what
              actually moved the business and do more of it.
            </p>
            <div className="smm-cta">
              <button className="smm-bp" onClick={() => navigate('/contact')}>
                Get a free social media audit
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
              </button>
              <a className="smm-bg" href="tel:1800054555">
                <Phone size={16} /> 1800 054 555
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="smm-heroimg">
              <img
                src={img('photo-1460925895917-afdab827c52f', 900, 780)}
                alt="Marketing analytics dashboard showing social performance"
                width={900} height={780} loading="eager" decoding="async"
              />
            </div>
          </Reveal>
        </div>

        <p className="smm-intro" style={{ maxWidth: 900 }}>
          We are part of Eloma Group, which means your social sits next to web development, SEO, PPC, Microsoft and
          cloud, and branding under one roof. That matters. The content you post, the landing pages it drives traffic
          to, and the email list it feeds are usually run by three different companies that never talk to each other.
          When one team handles all of it, your social feeds your website, your website feeds your list, and your list
          brings people back. Nothing falls through the gap.
        </p>
        <p className="smm-intro" style={{ maxWidth: 900 }}>
          <strong>One partner.</strong> One team that plans the content, designs it, writes it, and reads the results
          back to you in plain language.
        </p>
        <p className="smm-intro" style={{ maxWidth: 900 }}>
          Get a free social media audit. No lock-in, just an honest look at what your channels are doing and what they
          could be doing.
        </p>
      </section>

      {/* ── Why work with EG Digital ── */}
      <section className="smm-sec alt">
        <div className="smm-shell">
          <Reveal>
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="smm-h2">Why work with EG Digital as your social media marketing company in <span>Australia</span></h2>
          </Reveal>
          <div className="smm-why">
            {WHY.map((w, i) => {
              const Ic = w.icon
              return (
                <Reveal key={w.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="smm-wc" style={{ height: '100%' }}>
                    <div className="smm-wc-ic"><Ic size={24} /></div>
                    <h3 className="smm-wc-t">{w.t}</h3>
                    <p className="smm-wc-d">{w.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Our services ── */}
      <section className="smm-sec">
        <div className="smm-shell">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="smm-h2">Our social media marketing <span>services</span></h2>
            <p className="smm-lead">
              We are a full-service social media marketing company, so you can hand us the whole program or the single
              piece you are missing. Here is what we do.
            </p>
          </Reveal>
          <div className="smm-srv">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              return (
                <Reveal key={s.t} delay={Math.min(i * 0.04, 0.2)}>
                  <div className="smm-srow">
                    <div className="smm-srow-ic"><Ic size={28} /></div>
                    <div>
                      <h3 className="smm-srow-t">{s.t}</h3>
                      {s.paras.map((p, pi) => <p key={pi} className="smm-srow-p">{p}</p>)}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Who we run social for (dark) ── */}
      <section className="smm-sec dark">
        <div className="smm-shell">
          <Reveal>
            <Eyebrow light>Who it's for</Eyebrow>
            <h2 className="smm-h2">Who we run social media <span>for</span></h2>
          </Reveal>
          <div className="smm-aud">
            {AUDIENCES.map((a, i) => {
              const Ic = a.icon
              return (
                <Reveal key={a.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="smm-ac" style={{ height: '100%' }}>
                    <div className="smm-ac-ic"><Ic size={24} /></div>
                    <h3 className="smm-ac-t">{a.t}</h3>
                    <p className="smm-ac-d">{a.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="smm-sec alt">
        <div className="smm-shell">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="smm-h2">From strategy to <span>results</span></h2>
          </Reveal>
          <div className="smm-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={Math.min(i * 0.04, 0.16)}>
                <div className="smm-step">
                  <div className="smm-step-no">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="smm-step-t">{s.t}</h3>
                    <p className="smm-step-d">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost ── */}
      <section className="smm-sec">
        <div className="smm-shell">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="smm-h2">What social media marketing costs in <span>Australia</span></h2>
          </Reveal>
          <div className="smm-cost">
            <Reveal>
              <div>
                <p className="smm-cost-p">
                  Honest answer: it depends on how many platforms you are on, how much content you need, and whether paid
                  ads are involved, and any company quoting a flat number before understanding your business is guessing.
                </p>
                <p className="smm-cost-p">
                  For context, most Australian small businesses pay between $1,000 and $2,000 per month for professional
                  organic social media management across one or two platforms, with a content plan and monthly reporting.
                  A fuller program with more platforms, regular short-form video, and a dedicated account manager
                  typically runs $2,500 to $5,000 per month. These are management and content fees. If you add paid
                  social advertising, the ad spend itself is separate, and the management of those ads usually adds a flat
                  fee or a percentage of spend on top.
                </p>
                <p className="smm-cost-p">
                  Two things worth knowing. First, price tracks content volume and platform count more than anything
                  else, so weekly video across three platforms costs more than a couple of static posts on one. Second,
                  cheap social is usually cheap for a reason: a $500-a-month package generally means generic content
                  posted a few times a week with no strategy behind it, which is why so much social spend gets wasted. We
                  would rather do fewer things well and show you they worked.
                </p>
                <p className="smm-cost-p">
                  We quote from your actual needs, and the quote comes with a clear scope, not just a number. You will
                  know what gets produced each month, and the report will show whether it landed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="smm-pricecard">
                <div className="smm-pr">
                  <div className="smm-pr-v">$1,000 - $2,000<span style={{ fontSize: '0.4em', fontWeight: 700 }}>/mo</span></div>
                  <div className="smm-pr-l">Organic social media management across one or two platforms, with a content plan and monthly reporting.</div>
                </div>
                <div className="smm-pr">
                  <div className="smm-pr-v">$2,500 - $5,000<span style={{ fontSize: '0.4em', fontWeight: 700 }}>/mo</span></div>
                  <div className="smm-pr-l">A fuller program with more platforms, regular short-form video, and a dedicated account manager.</div>
                </div>
                <div className="smm-pr">
                  <div className="smm-pr-v">+ Ad spend</div>
                  <div className="smm-pr-l">Paid social ad spend is separate, with management added as a flat fee or a percentage of spend.</div>
                </div>
              </div>
            </Reveal>
          </div>
          <p className="smm-note">
            Get a free social media audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International (dark) ── */}
      <section className="smm-sec dark">
        <div className="smm-shell">
          <Reveal>
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="smm-h2">International Social Media Marketing <span>Services</span></h2>
            <p className="smm-lead">
              Based in Melbourne, EG Digital delivers social media marketing services in Australia while also helping
              businesses grow their social presence across the UK, USA, Canada, and Singapore, with content and strategy
              built for each market's audience and platform behaviour.
            </p>
          </Reveal>
          <div className="smm-co">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 0.06, 0.24)}>
                <div className="smm-coc" style={{ height: '100%' }}>
                  <h3 className="smm-coc-t">{c.t}</h3>
                  <p className="smm-coc-d">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="smm-co-close">
              Whether your business operates in Australia or internationally, our approach stays the same: build content
              that fits the brand, stay consistent across the right channels, and measure social by the enquiries it
              produces rather than the likes it collects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to make your social channels work ── */}
      <section className="smm-sec alt">
        <div className="smm-shell">
          <Reveal>
            <div className="smm-ready">
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="smm-ready-h">Ready to make your social channels work?</h2>
              <p className="smm-ready-p">
                Tell us where your social presence is falling short. We will run a free audit, review what your channels
                and your competitors are doing, and tell you exactly where the opportunity is. If we can help, we will
                show you how. If we cannot, we will tell you that too.
              </p>
              <p className="smm-ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free social media audit below.
              </p>
              <div className="smm-ready-cta">
                <button className="smm-bp" onClick={() => navigate('/contact')}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="smm-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="smm-sec">
        <div className="smm-shell">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="smm-h2">Frequently asked <span>questions</span></h2>
          </Reveal>
          <div className="smm-faq">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.15)}>
                <div className="smm-fq">
                  <h3 className="smm-fq-q">{f.q}</h3>
                  <p className="smm-fq-a">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="smm-legal">
              EG Digital Australia Pty Ltd, a unit of Eloma Group. Social media marketing delivered Australia-wide from
              Melbourne.
            </p>
          </Reveal>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready When You Are"
        heading="Let's make social"
        highlight="pay."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
