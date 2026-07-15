import {
  BarChart3, Users, Palette, Unlock, Target, PenTool, Building2,
  Share2, Video, Mail, Store, Briefcase, ShoppingBag, TrendingUp,
  Globe, Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'
import { ElomaLink } from '../../../lib/elomaLink'
import { photo } from '../../../lib/blogPosts'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - CONTENT CREATION (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content. Hero and the short-form video
   feature both carry an internet-fetched image with content-appropriate alt text.
   This page is intentionally NOT linked from the header or footer navigation; it
   is reached via the blog interlink on the "content marketing services" anchor.
   ════════════════════════════════════════════════════════════════════════════ */

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: BarChart3,
    t: 'We measure enquiries, not word counts',
    d: 'Volume is vanity. So is a busy blog nobody reads. Our reporting starts with the numbers that pay the bills: enquiries from content, leads, traffic that converts, and the sales it turns into. Then it works back to the rankings and engagement that produced them. If a monthly report leads with how many pieces went out and hides whether any of them worked, it is showing you the wrong thing first. Ours shows you the right thing first.',
  },
  {
    icon: Users,
    t: 'One team for strategy, writing, design, and video',
    d: 'You get a content strategist, writers, a graphic designer, and video producers who work together, not a single account manager forwarding your brief to freelancers you never meet. Because EG Digital also runs SEO, builds websites, and handles paid ads and branding, your content is built to rank, shaped for each channel, and consistent with everything else you put out, instead of your blog reading like one company and your website like another.',
  },
  {
    icon: Palette,
    t: 'Content built for your brand, not a template',
    d: 'Plenty of agencies run every client through the same template and swap the logo. Worse, plenty now run every brief through a generic AI prompt and hand you the raw output. We do neither. We build content around your actual business: your voice, your audience, and the questions your customers are asking. We use AI where it speeds up research and drafting, but a person shapes the argument, checks the facts, and makes it sound like you. That takes more work than recycling a template or publishing a first draft from a chatbot. It is also the difference between content people finish and content they close after one line.',
  },
  {
    icon: Unlock,
    t: 'No lock-in, no filler',
    d: 'No 12-month contracts. No packages padded with blog posts nobody reads to justify the retainer. We earn the renewal each month by producing content that works and reporting honestly on what it did. A short minimum to build momentum is fair. A long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Target,
    t: 'Content strategy',
    paras: [
      'Content without a strategy is just publishing. Before anyone writes a word, we map your content to your audience, your buyer\'s journey, and the keywords and questions that lead to revenue. You get a documented content strategy: the topics, the formats, the channels, and a calendar so you always know what is going out and why. This is the part most companies skip, and it is why most content spend gets wasted. As a content strategy company working with businesses across Sydney, Melbourne, and the rest of Australia, we start with the plan and hold ourselves to it.',
    ],
  },
  {
    icon: PenTool,
    t: 'Content writing and copywriting',
    paras: [
      'Words still do the heavy lifting. Our writers produce the content your business runs on: blog posts and articles that pull in demand, service and landing pages that convert, case studies that build trust, and the website copy that ties it together. Every piece is mapped to a search intent and a stage in the funnel, written to rank in both Google and AI answers, and edited to read like a person wrote it, because a person did. This is professional business content creation, not filler billed by the word.',
    ],
  },
  {
    icon: Building2,
    t: 'B2B and corporate content',
    paras: [
      'B2B buyers research longer, involve more people, and read more before they ever make contact. We produce the content that earns that trust: whitepapers, long-form guides, thought leadership, LinkedIn content, and the technical writing that shows you know your field. Our corporate content writing services are built for longer sales cycles and multiple decision-makers, so the content answers the questions a buyer, a manager, and a finance lead each need answered before they say yes. If B2B content marketing across Australia is where your growth comes from, this is the core of it.',
    ],
  },
  {
    icon: Share2,
    t: 'Social media content creation',
    paras: [
      'Social lives or dies on the content behind it. We produce the posts, carousels, captions, and short-form video that keep your channels active and worth following, all built to your brand and shaped for how people actually use each platform. Our social media content creation services run as part of our full social media offering, so the content, the posting, and the community management are handled by one team rather than boosted on a whim.',
    ],
  },
  {
    icon: Video,
    t: 'Short-form video production',
    paras: [
      'Short-form video gets the reach static posts no longer do. Reels, TikToks, and YouTube Shorts sit at the centre of most content plans in 2026, so we build video in rather than treating it as an add-on. Our short-form video production covers the concept, the script, and the edit, sized and captioned for each platform. You get video shaped for the feed, not a cut-down TV ad nobody watches to the end.',
    ],
  },
  {
    icon: Palette,
    t: 'Graphic design and visual content',
    paras: [
      'Design is what makes content look like it came from a real business. Our designers produce the visual assets your content runs on: blog and article graphics, infographics, social templates, ad creative, and branded visuals that hold up next to anyone in your feed. Everything is built to your brand and sized for each platform, so nothing looks stretched, cramped, or off-brand. Because design lives in the same team as your writing and your website, the look stays consistent everywhere.',
    ],
  },
  {
    icon: Mail,
    t: 'Email content',
    paras: [
      'Content builds the audience; email is how you keep it. We write the newsletters, campaigns, and automated sequences that turn readers and site visitors into subscribers, and subscribers into customers. Because the same team runs your content and your site, your channels feed your list and your list brings people back, instead of three disconnected tools nobody is joining up.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need content that brings in enquiries without a budget that swallows your year. We build affordable content writing and creation for small businesses across Australia, with clear pricing and no padding, focused on the handful of topics and channels where your customers actually are rather than a blog that tries to cover everything. If you have been looking for the best content creation services for small business in Australia that do not treat you like an afterthought, start with what makes sense now, prove it works, then grow.',
  },
  {
    icon: Briefcase,
    t: 'B2B and professional services',
    d: 'For B2B and professional services, content is where trust gets built long before anyone makes contact. We create the guides, case studies, and thought leadership that answer buyer questions and keep you visible through a long sales cycle, so you are the name they shortlist when they are ready. Credible, specific, and pointed at qualified enquiries rather than applause.',
  },
  {
    icon: ShoppingBag,
    t: 'E-commerce brands',
    d: 'Online stores need content that sells, not just fills a blog. We produce product content, buying guides, and the social and email that drive traffic and revenue, with the content feeding your store and your search rankings at the same time. Because EG Digital also builds and hosts stores, your content, your site, and your email all pull in the same direction.',
  },
  {
    icon: TrendingUp,
    t: 'Established and growth businesses',
    d: 'For bigger brands publishing across multiple channels with more at stake, you need a team that can produce content at volume and keep it consistent and on-brand across everything. As a creative content company in Melbourne working with growth businesses, we bring the strategy, the writing and design capacity, and the reporting to manage content at scale, with one partner answerable for how it all fits together.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Discovery and strategy',
    d: 'We start by understanding your business, your audience, and what content actually needs to achieve for you. You get a documented content strategy: the topics, the formats, the channels, and the metrics we will hold ourselves to, before anything gets written.',
  },
  {
    t: 'Research and content plan',
    d: 'We research the topics, keywords, and questions worth targeting, then build a content calendar so you can see what is going out and why. No guessing, no publishing for the sake of it.',
  },
  {
    t: 'Create and design',
    d: 'Our team writes, designs, and produces the content: articles, pages, video, graphics, and email, all built to your brand and shaped for each channel.',
  },
  {
    t: 'Publish and distribute',
    d: 'We get the content live and in front of people, across your site, your social channels, and your list, so it reaches the audience it was built for instead of sitting on a page nobody visits.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to enquiries and results, in plain language, with next month's plan set against what actually worked. The content gets sharper over time, and so do the results.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Content Creation in the UK',
    d: "Our content creation services in the UK help businesses cut through one of the world's most crowded content markets. We build strategy, writing, design, and video that grow engaged audiences and drive measurable enquiries, tailored to UK buyer expectations and search behaviour.",
  },
  {
    t: 'Content Creation in the USA',
    d: 'Businesses looking for content creation services in the USA need content that competes across large, fast-moving markets and multiple audiences. We combine strategy, writing, design, and video to help businesses build authority and generate leads that scale across the United States.',
  },
  {
    t: 'Content Creation in Canada',
    d: 'Our content creation services in Canada focus on content that connects and converts: strategy, writing, and creative aligned to what Canadian audiences respond to. Whether you operate locally or nationally, we help Canadian businesses turn content into a real source of enquiries.',
  },
  {
    t: 'Content Creation in Singapore',
    d: "Singapore's competitive, mobile-first market rewards sharp content and consistency. Our content creation services in Singapore help businesses build engaged audiences, produce high-quality content across the right channels, and turn attention into qualified enquiries.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much do content creation services cost in Australia?',
    a: 'Most Australian small businesses pay between $1,000 and $2,500 per month for an ongoing content program with a plan, a handful of pieces, and monthly reporting. A fuller program with regular long-form content, short-form video, and design usually runs $2,500 to $6,000 per month, and one-off projects like a batch of cornerstone pages or a video shoot are scoped separately. The honest version is that price tracks content volume and format more than any fixed package, so we quote from what your business actually needs rather than a tier off a menu. Be wary of anything around $400 a month, which usually buys thin, generic writing or raw AI output with no strategy behind it.',
  },
  {
    q: 'Do I need a local agency for content creation?',
    a: 'Not strictly, but it helps more than people expect. A local team understands the Australian market, the local search landscape, and how your customers actually talk, which matters for content that needs to sound credible to an Australian buyer. It also means you work in your own timezone with people you can reach, rather than routing every brief through an offshore content mill and waiting a day for each reply. EG Digital is based in Melbourne and works with businesses across Australia and internationally, so you get local understanding without being limited to one city.',
  },
  {
    q: 'What is the difference between content marketing and content creation?',
    a: 'Content creation is the making: the writing, design, and video, the actual pieces themselves. Content marketing is the wider job of using that content to reach an audience and turn it into customers, which covers the strategy, the distribution, the SEO, and the measurement around it. Creation without marketing is a pile of content nobody sees; marketing without creation is a plan with nothing to run. The two work together, which is the point of having one team handle both. With EG Digital you get the creation and the marketing under the same roof, alongside SEO, social, email, and paid ads, so the content you make is actually built to get found and to convert.',
  },
]

// Short signal chips for the hero - every phrase is drawn verbatim from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: 'Enquiries, not claps', l: 'we measure enquiries, leads and the customers behind them first' },
  { v: 'One team', l: 'strategy, writing, design and video under one roof' },
  { v: 'No lock-in', l: 'no 12-month contracts, no filler, no padding' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$1,000 - $2,500', l: 'Per month for an ongoing content program: a content plan, a handful of written pieces, and monthly reporting.' },
  { v: '$2,500 - $6,000', l: 'Per month for a fuller program: regular long-form content, short-form video, design, and a documented strategy.' },
  { v: 'Scoped separately', l: 'One-off projects like a set of cornerstone pages, a batch of case studies, or a video shoot.' },
]

export function ContentCreation() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/content-creation')

  usePageMeta(
    'Content Creation Services in Australia | EG Digital',
    'Full-service content creation company in Australia. Content strategy, copywriting, B2B content, short-form video & design from a Melbourne team. Get a free content audit.',
  )

  return (
    <PageLayout>
      <style>{`
        .cc-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .cc-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .cc-shell{ max-width:2440px; } }
        @media (max-width:768px){ .cc-shell{ max-width:100%; } }

        /* ── Section base ── */
        .cc-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .cc-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .cc-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .cc-sec.dark .cc-shell { position:relative; z-index:1; }

        .cc-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .cc-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing: 0.01em; line-height: 1.04; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .cc-h2 span { color:${GREEN}; }
        .cc-sec.dark .cc-h2 { color:#fff; }
        .cc-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .cc-sec.dark .cc-lead { color:rgba(255,255,255,0.68); }

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

        /* ── Fetched-image tile ── */
        .img-tile { padding:0; overflow:hidden; position:relative; min-height:clamp(220px,26vw,340px); }
        .img-tile img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .img-tile::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, rgba(8,33,60,0.12) 0%, rgba(8,33,60,0.62) 78%); pointer-events:none; }
        .img-cap { position:absolute; left:0; right:0; bottom:0; z-index:1; padding:clamp(18px,2vw,26px);
          display:flex; align-items:center; gap:11px; }
        .img-cap span { font-size:clamp(12px,1vw,15px); font-weight:800; letter-spacing:-0.01em; color:#fff; line-height:1.3; }
        .img-cap i { width:34px; height:34px; border-radius:11px; flex-shrink:0; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${GREEN},#2c9e74); color:${NAVY}; }

        /* ── Hero ── */
        .cc-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .cc-h1 { position:relative; font-size:clamp(42px,6.4vw,100px); font-weight:900; letter-spacing: 0.01em; line-height: 1.04; color:#fff; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .cc-lede { position:relative; font-size:clamp(19px,2.2vw,32px); font-weight:900; letter-spacing:-0.035em; line-height:1.1; color:#fff; margin:18px 0 0; }
        .cc-lede span { color:${GREEN}; }
        .cc-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .cc-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .cc-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .cc-bp svg { transition:transform .2s; } .cc-bp:hover svg { transform:translateX(3px); }
        .cc-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .cc-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .cc-bp, .cc-bg, .cc-tel{ width:100%; justify-content:center; } }

        /* Hero fetched-image visual */
        .cc-visual { padding:0; overflow:hidden; position:relative; min-height:clamp(320px,44vw,560px); }
        .cc-hero-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .cc-visual::after { content:''; position:absolute; inset:0; background:linear-gradient(210deg, rgba(8,33,60,0.18) 0%, rgba(8,33,60,0.7) 82%); pointer-events:none; }
        .cc-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}40 55%, transparent); animation:cc-scan 4.6s linear infinite; will-change:transform; }
        @keyframes cc-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .cc-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:cc-float 6s ease-in-out infinite; will-change:transform; }
        .cc-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:cc-spin 3.4s linear infinite; will-change:transform; }
        .cc-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .cc-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .cc-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .cc-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(255,255,255,0.66); }
        .cc-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .cc-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:cc-pulse 1.8s ease-in-out infinite; }
        @keyframes cc-spin { to { transform:rotate(360deg); } }
        @keyframes cc-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes cc-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:cc-float 7s ease-in-out infinite; will-change:transform; }
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
        .cc-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .cc-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing: 0.01em; line-height: 1.1; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .cc-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .cc-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .cc-scan, .cc-emblem, .cc-emblem-ring, .cc-dot, .chip { animation:none !important; }
          .cc-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="cc-sec dark cc-hero">
        <div className="cc-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Content Creation Company in Australia</Eyebrow>
                <h1 className="cc-h1">Content Creation Services in Australia</h1>
                <p className="cc-lede">
                  Content that brings in <span>customers</span>, not just claps.
                </p>
                <div className="cc-cta">
                  <button className="cc-bp" onClick={() => navigate('/contact')}>
                    Get a free content audit
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="cc-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile n cc-visual">
              <img
                className="cc-hero-img"
                src={photo('photo-1499750310107-5fef28a66643', 900, 1100)}
                width={900}
                height={1100}
                loading="eager"
                decoding="async"
                alt="A content writer drafting a blog article on a laptop at a Melbourne desk"
              />
              <div className="cc-scan" aria-hidden="true" />
              <div className="cc-emblem" aria-hidden="true">
                <div className="cc-emblem-ring"><span className="cc-emblem-ic"><BarChart3 size={20} /></span></div>
                <div className="cc-emblem-tx">
                  <span className="cc-emblem-k">Measured by</span>
                  <span className="cc-emblem-v"><span className="cc-dot" /> Enquiries</span>
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
                Most content agencies measure output. Word counts, posts published, blogs shipped. Output is not the
                point. What the content brings in is.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based content creation company that treats content as a growth channel, not a
                content mill. We handle the strategy, the writing, the design, and the video, and we point every piece at
                something you can measure: enquiries, leads, and the customers behind them. When an article gets read a
                thousand times and produces no enquiries, we do not call that a win. We look at what actually moved the
                business and do more of it.
              </p>
              <p className="t-d">
                <strong>We are part of <ElomaLink />,</strong> which means your content sits next to SEO, web development,
                PPC, social media, and branding under one roof. That matters more than it sounds. The blog you publish,
                the page it links to, the ad that promotes it, and the email that follows up are usually run by four
                different companies that never talk to each other. When one team handles all of it, your content feeds
                your search rankings, your rankings feed your site, and your site feeds your list. Nothing falls through
                the gap.
              </p>
              <p className="t-d">
                One partner. One team that plans the content, researches it, writes it, designs it, and reads the results
                back to you in plain language.
              </p>
              <p className="t-d">
                Get a free content audit. No lock-in, just an honest look at what your content is doing and what it could
                be doing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why work with EG Digital ── */}
      <section className="cc-sec">
        <div className="cc-shell">
          <div className="cc-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="cc-h2">Why work with EG Digital as your content creation company in <span>Australia</span></h2>
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

      {/* ── Our content creation services ── */}
      <section className="cc-sec dark">
        <div className="cc-shell">
          <div className="cc-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="cc-h2">Our content creation <span>services</span></h2>
            <p className="cc-lead">
              We are a full-service content creation company, so you can hand us the whole program or the single piece
              you are missing. Here is what we do.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // Content strategy leads as a full-width feature row.
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
              // writing, B2B, social, video, design all c6; email full-width. A
              // fetched short-form-video image pairs alongside the design tile.
              const spans = ['c6', 'c6', 'c6', 'c6', 'c6', 'c12']
              const tile = (
                <Reveal key={s.t} delay={Math.min(i * 0.03, 0.18)} className={`tile d ${spans[i - 1]}`}>
                  <div>
                    <span className="tico"><Ic size={24} /></span>
                    <h3 className="t-t">{s.t}</h3>
                    {s.paras.map((p, pi) => <p key={pi} className="t-d">{p}</p>)}
                  </div>
                </Reveal>
              )
              // After the "Graphic design and visual content" tile, drop in the
              // fetched video-production image so the row stays balanced.
              if (i === 5) {
                return (
                  <Fragment key={s.t}>
                    {tile}
                    <Reveal delay={0.1} className="tile d img-tile c6">
                      <img
                        src={photo('photo-1516387938699-a93567ec168e', 900, 640)}
                        width={900}
                        height={640}
                        loading="lazy"
                        decoding="async"
                        alt="A camera on set filming short-form video content for Reels, TikToks and YouTube Shorts"
                      />
                      <div className="img-cap">
                        <i><Video size={17} /></i>
                        <span>Short-form video shaped for the feed, not a cut-down TV ad</span>
                      </div>
                    </Reveal>
                  </Fragment>
                )
              }
              return tile
            })}
          </div>
        </div>
      </section>

      {/* ── Who we create content for ── */}
      <section className="cc-sec">
        <div className="cc-shell">
          <div className="cc-head">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="cc-h2">Who we create content <span>for</span></h2>
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
      <section className="cc-sec dark">
        <div className="cc-shell">
          <div className="cc-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="cc-h2">How we <span>work</span></h2>
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
      <section className="cc-sec">
        <div className="cc-shell">
          <div className="cc-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="cc-h2">What content creation costs in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on how much content you need, what formats, and whether video and design are
                  involved, and any company quoting a flat number before understanding your business is guessing.
                </p>
                <p className="cost-p">
                  For context, most Australian small businesses pay between $1,000 and $2,500 per month for an ongoing
                  content program: a content plan, a handful of written pieces, and monthly reporting. A fuller program
                  with regular long-form content, short-form video, design, and a documented strategy typically runs
                  $2,500 to $6,000 per month. One-off projects, a set of cornerstone pages, a batch of case studies, a
                  video shoot, are usually scoped separately.
                </p>
                <p className="cost-p">
                  Two things worth knowing. First, price tracks volume and format more than anything else, so weekly
                  articles plus video costs more than a couple of blog posts a month. Second, cheap content is usually
                  cheap for a reason: a $400-a-month package generally means thin, generic writing or raw AI output with
                  no strategy behind it, which is why so much content spend produces nothing. We would rather do fewer
                  things well and show you they worked.
                </p>
                <p className="cost-p">
                  We quote from your actual needs, and the quote comes with a clear scope, not just a number. You will
                  know what gets produced each month, and the report will show whether it landed.
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
          <p className="cc-note">
            Get a free content audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International Content Creation Services ── */}
      <section className="cc-sec dark">
        <div className="cc-shell">
          <div className="cc-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="cc-h2">International Content Creation <span>Services</span></h2>
            <p className="cc-lead">
              Based in Melbourne, EG Digital delivers content creation services in Australia while also helping
              businesses grow their content across the UK, USA, Canada, and Singapore, with strategy and writing built
              for each market's audience and search behaviour.
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
              Whether your business operates in Australia or internationally, our approach stays the same: build content
              that fits the brand, target the topics that lead to revenue, and measure content by the enquiries it
              produces rather than the clicks it collects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to make your content work ── */}
      <section className="cc-sec">
        <div className="cc-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="ready-h">Ready to make your content work?</h2>
              <p className="ready-p">
                Tell us where your content is falling short. We will run a free audit, review what your content and your
                competitors are doing, and tell you exactly where the opportunity is. If we can help, we will show you
                how. If we cannot, we will tell you that too.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free content audit below.
              </p>
              <div className="ready-cta">
                <button className="cc-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="cc-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cc-sec">
        <div className="cc-shell">
          <div className="cc-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="cc-h2">Frequently asked <span>questions</span></h2>
          </div>
          <div className="bento">
            {FAQS.map((f, i) => {
              const span = i === 0 ? 'c7' : i === 1 ? 'c5' : 'c12'
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
        highlight="content work."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
