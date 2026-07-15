import {
  Compass, Users, Target, Unlock, Palette, MessageSquare, BookOpen,
  RefreshCw, Layers, Store, Rocket, Building2, TrendingUp, Sparkles,
  Globe, Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'
import { ElomaLink } from '../../../lib/elomaLink'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - BRANDING (Australia)
   Bento / modern-SaaS layout: varied rounded tiles on a 12-col grid, gradient
   accents, floating stat chips and a dark-first hero. Brand navy + green.
   Copy is verbatim from the approved page content; the hero carries an
   internet-fetched image plus an animated "Brand System" emblem.
   ════════════════════════════════════════════════════════════════════════════ */

// Stable Unsplash IDs already proven elsewhere in this codebase.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Compass,
    t: 'Strategy first, not just a nice logo',
    d: 'Most branding work starts and ends with a logo. Ours starts with the questions a logo cannot answer: who you are for, what you stand for, why anyone should choose you over the business next door. We work that out first, then build the identity to express it. That is the difference between a brand that looks good and one that actually does a job, and it is why a good-looking rebrand with no strategy behind it changes nothing.',
  },
  {
    icon: Users,
    t: 'One team that keeps the brand consistent',
    d: 'A brand is only as strong as its weakest touchpoint, and inconsistency is what kills most of them. You get brand strategists and designers who build the whole system, and because EG Digital also runs your website, social, ads, and content, that system is applied the same way everywhere instead of drifting the moment it leaves the brand guidelines PDF. One look, one voice, every channel.',
  },
  {
    icon: Target,
    t: 'Built for the business, not for an awards shelf',
    d: 'We are not chasing a design award with your brand. We are building something that makes you recognisable, earns trust faster, and lets you charge what you are worth. Every decision traces back to what it does for the business, so you end up with a brand that works in the market, not one that only impresses other designers.',
  },
  {
    icon: Unlock,
    t: 'No lock-in, no filler',
    d: 'No 12-month contracts on ongoing brand work. No padding a package with deliverables you did not ask for to justify the fee. We earn the work by building a brand that does its job. For ongoing brand support a short minimum is fair; a long lock-in is not, and we do not use them.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; paras: string[] }[] = [
  {
    icon: Compass,
    t: 'Brand strategy',
    paras: [
      'Strategy is the foundation everything else sits on. We work out who your brand is for, where it sits in the market, what makes it different, and why anyone should care, through research into your audience, your competitors, and your own business. You get a documented brand strategy: your positioning, your values, your audience, and the direction that guides every design and message decision after it. Skip this and you are just decorating; get it right and every other piece has something to build on.',
    ],
  },
  {
    icon: Palette,
    t: 'Brand identity',
    paras: [
      'Identity is how the strategy becomes something people can see and recognise. We build the full identity system: your logo, colour palette, typography, imagery style, and the visual language that ties it together, so your brand is recognisable at a glance and consistent wherever it appears. This is custom logo and brand identity design in Australia built on strategy, not decoration, delivered as a system you can actually use rather than a single logo file with no rules around it.',
    ],
  },
  {
    icon: MessageSquare,
    t: 'Brand messaging and voice',
    paras: [
      'How your brand sounds matters as much as how it looks. We define your messaging and voice: your tagline, your key messages, the way you talk about what you do, and the tone that carries across your website, your ads, and every email. So your brand sounds like one business with one personality, no matter who is writing, instead of shifting register every time a different person picks up the pen.',
    ],
  },
  {
    icon: BookOpen,
    t: 'Brand guidelines',
    paras: [
      "A brand only stays consistent if everyone who touches it knows the rules. We produce brand guidelines that lock in how your brand looks and sounds: logo usage, colours, type, imagery, voice, and the do's and don'ts, so your team, your printer, and any agency you work with keep the brand consistent instead of each interpreting it their own way. Your brand, documented and protected.",
    ],
  },
  {
    icon: RefreshCw,
    t: 'Rebranding',
    paras: [
      'Sometimes the brand you started with no longer fits the business you have become. We run rebranding services for Australian companies that have outgrown a look thrown together early, merged, changed direction, or simply gone stale, handling it from strategy through to rollout. A rebrand is risky when it is done on a whim and valuable when it is done properly, so we base it on where the business is going, not just a fresh coat of paint, and plan the rollout so you carry your existing customers with you rather than confusing them.',
    ],
  },
  {
    icon: Layers,
    t: 'Brand rollout and application',
    paras: [
      'A brand is worth nothing sitting in a guidelines document. We apply it across everything your business shows up on: your website, your social channels, your marketing, your collateral, and every customer touchpoint, so the brand people see is the brand you built. Because the same team runs your web, social, and content, the rollout is handled in-house and stays consistent from the first application to the last.',
    ],
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need a brand that makes you look established without a budget that swallows the year. We offer affordable small business branding services across Australia with clear pricing and no padding, focused on what you actually need to look credible and consistent, rather than a bloated package built for a company ten times your size. Get the strategy and identity right now, look the part, then build as you grow.',
  },
  {
    icon: Rocket,
    t: 'Startups',
    d: 'Startups have to look credible before they have the track record to prove it, and a real brand is how they do it. We build the brand from strategy up: positioning, identity, and voice, all consistent from day one, so you look like you belong in the market when you launch, pitch, and sell. Not a logo thrown together in a weekend that you have to redo the moment you raise.',
  },
  {
    icon: Building2,
    t: 'Established businesses and rebrands',
    d: 'For established businesses, the brand you built early often no longer matches where you are now. We handle the rebrand properly: the strategy to work out where you are heading, the identity to match it, and the rollout to get you there without losing the customers you already have. One partner answerable for the whole transition.',
  },
  {
    icon: TrendingUp,
    t: 'Growth businesses',
    d: 'For businesses scaling fast across multiple channels, keeping the brand consistent gets harder the bigger you get. We build the brand system and the guidelines that hold it together at scale, and because we also run your digital channels, we keep it disciplined as you grow rather than watching it fragment across teams and suppliers.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Discovery and research',
    d: 'We start by understanding your business, your audience, and your market, digging into your competitors and what actually sets you apart, before any design begins.',
  },
  {
    t: 'Brand strategy',
    d: 'We define your positioning, values, audience, and direction, and document it, so every decision after this has a clear foundation to build on.',
  },
  {
    t: 'Identity and messaging',
    d: 'We design the visual identity and define the voice, then refine both with you until the brand looks and sounds like the business you are building.',
  },
  {
    t: 'Guidelines and handover',
    d: 'You get the full brand system, the source files, and a set of guidelines that keep everyone consistent, so the brand is yours to use and hard to break.',
  },
  {
    t: 'Rollout and support',
    d: 'We apply the brand across your channels and touchpoints, and as you grow, we produce what you need and keep everything consistent.',
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Branding in the UK',
    d: "Our branding services in the UK help businesses build a brand that stands out in one of the world's most competitive markets. We handle strategy, identity, messaging, and rollout, so businesses look credible and consistent, tailored to UK audiences and expectations.",
  },
  {
    t: 'Branding in the USA',
    d: 'Businesses looking for branding services in the USA need a brand that competes across large, crowded markets. We combine brand strategy, identity, and messaging to help businesses build a brand that holds up, stays consistent, and scales across the United States.',
  },
  {
    t: 'Branding in Canada',
    d: 'Our branding services in Canada focus on brands that are recognisable, consistent, and built on strategy: positioning, identity, and the system that carries them across every channel. Whether you operate locally or nationally, we help Canadian businesses build a brand that works.',
  },
  {
    t: 'Branding in Singapore',
    d: "Singapore's competitive, brand-conscious market rewards a sharp, consistent brand. Our branding services in Singapore help businesses build strong positioning, a distinct identity, and a brand that stays consistent across every touchpoint.",
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is included in a branding package?',
    a: 'It depends on the scope, but a proper branding package covers more than a logo. At a minimum it includes brand strategy (your positioning, values, and audience), a visual identity (logo, colour palette, typography, and imagery style), and a set of brand guidelines that document how it all should be used. A fuller package adds brand messaging and voice, a broader identity system with templates and assets, and rollout across your channels. Cheap "branding packages" are often just a logo and a colour swatch with no strategy behind them, which is why they rarely change anything. With EG Digital you get the strategy, the identity, the messaging, the guidelines, and the source files, so the brand is complete and yours to use.',
  },
  {
    q: 'How long does the branding process take?',
    a: 'Most branding projects take somewhere between four and twelve weeks, depending on scope and how much research and strategy is involved. A focused identity project for a small business can move faster; a full strategy-led brand or a rebrand for an established company takes longer because the groundwork, research, positioning, and stakeholder input, has to be done properly first. We would rather set that expectation honestly than rush the strategy and hand you a brand that looks fine but does not fit. You will get a clear timeline up front, mapped to the scope we agree on.',
  },
  {
    q: 'What is the difference between branding and a logo?',
    a: 'A logo is one small part of a brand. The logo is a mark that identifies you; the brand is everything people think, feel, and expect when they see it, which includes your positioning, your messaging, your voice, your visual identity, and every experience someone has with your business. A logo without a brand behind it is just a picture. A strong brand makes the logo mean something. We build the whole brand, strategy and identity together, so your logo is the visible tip of something with substance underneath it, not the entire exercise.',
  },
  {
    q: 'Do you provide the brand files and guidelines?',
    a: 'Yes, as standard. You get the source files for your identity, the editable originals rather than flat images you cannot change, along with a set of brand guidelines that document how your brand should be used. That means you, and any designer or agency you work with later, can apply and extend the brand without rebuilding it from scratch. Some providers hold files back or charge to release them, which locks you in. We hand everything over, because the brand is yours.',
  },
]

// Short signal chips for the hero - every phrase is drawn verbatim from the copy.
const SIGNALS: { v: string; l: string }[] = [
  { v: 'Strategy first', l: 'positioning and message before the logo, not after' },
  { v: 'One team', l: 'one look, one voice, across every channel' },
  { v: 'No lock-in', l: 'no long contracts, and you own the brand at the end' },
]

// Pricing figures pulled from the verbatim cost copy.
const PRICES: { v: string; l: string }[] = [
  { v: '$2,500 - $6,000', l: 'A basic brand identity for a small business: logo, palette, typography and simple guidelines.' },
  { v: '$6,000 - $20,000+', l: 'A full strategy-led brand: complete identity system, messaging, voice and detailed guidelines.' },
  { v: 'Scoped on its own', l: 'A full rebrand for an established company, including rollout across channels.' },
]

export function Branding() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/branding')

  usePageMeta(
    'Branding Services in Australia | EG Digital',
    'Branding company in Australia. Brand strategy, identity, messaging, guidelines & rebranding from a Melbourne team. Get a free brand audit.',
  )

  return (
    <PageLayout>
      <style>{`
        .brd-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .brd-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .brd-shell{ max-width:2440px; } }
        @media (max-width:768px){ .brd-shell{ max-width:100%; } }

        /* ── Section base ── */
        .brd-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .brd-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .brd-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .brd-sec.dark .brd-shell { position:relative; z-index:1; }

        .brd-head { max-width:900px; margin:0 0 clamp(28px,3.4vw,52px); }
        .brd-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing: 0.01em; line-height: 1.04; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .brd-h2 span { color:${GREEN}; }
        .brd-sec.dark .brd-h2 { color:#fff; }
        .brd-lead { max-width:680px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .brd-sec.dark .brd-lead { color:rgba(255,255,255,0.68); }

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
        .brd-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .brd-h1 { position:relative; font-size:clamp(46px,7vw,104px); font-weight:900; letter-spacing: 0.01em; line-height: 1.02; color:#fff; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .brd-lede { position:relative; font-size:clamp(19px,2.2vw,32px); font-weight:900; letter-spacing:-0.035em; line-height:1.08; color:#fff; margin:18px 0 0; }
        .brd-lede span { color:${GREEN}; }
        .brd-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .brd-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .brd-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .brd-bp svg { transition:transform .2s; } .brd-bp:hover svg { transform:translateX(3px); }
        .brd-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .brd-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .brd-bp, .brd-bg, .brd-tel{ width:100%; justify-content:center; } }

        /* Hero image (Unsplash) + animated scan + emblem */
        .hero-img { padding:0; border:1px solid rgba(255,255,255,0.12); background:${NAVY}; min-height:clamp(300px,42vw,520px); }
        .hero-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .hero-img::after { content:''; position:absolute; inset:0; background:linear-gradient(200deg, transparent 38%, ${NAVY}77); pointer-events:none; }
        .brd-scan { position:absolute; left:0; right:0; height:36%; z-index:2; pointer-events:none;
          background:linear-gradient(to bottom, transparent, ${GREEN}4d 55%, transparent); animation:brd-scan 4.6s linear infinite; will-change:transform; }
        @keyframes brd-scan { 0%{ transform:translateY(-110%); } 100%{ transform:translateY(320%); } }
        .brd-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:brd-float 6s ease-in-out infinite; will-change:transform; }
        .brd-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:brd-spin 3.4s linear infinite; will-change:transform; }
        .brd-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .brd-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1; }
        .brd-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .brd-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; word-spacing: 0.14em; color:rgba(255,255,255,0.66); }
        .brd-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .brd-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:brd-pulse 1.8s ease-in-out infinite; }
        @keyframes brd-spin { to { transform:rotate(360deg); } }
        @keyframes brd-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes brd-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        /* Hero signal chips */
        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:brd-float 7s ease-in-out infinite; will-change:transform; }
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
        .brd-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .brd-note a { color:${GREEN}; text-decoration:none; }

        /* ── Ready band ── */
        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing: 0.01em; line-height: 1.1; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .brd-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .brd-tel:hover { transform:translateY(-2px); }

        /* ── FAQ ── */
        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:840px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .brd-scan, .brd-emblem, .brd-emblem-ring, .brd-dot, .chip { animation:none !important; }
          .brd-scan { display:none; }
        }
      `}</style>

      {/* ── Hero (dark bento) ── */}
      <section className="brd-sec dark brd-hero">
        <div className="brd-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>Branding Company in Australia</Eyebrow>
                <h1 className="brd-h1">Branding Services in Australia</h1>
                <p className="brd-lede">
                  A brand is what people say about you when you <span>leave the room</span>.
                </p>
                <div className="brd-cta">
                  <button className="brd-bp" onClick={() => navigate('/contact')}>
                    Get a free brand audit
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                  </button>
                  <a className="brd-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile hero-img">
              <img
                src={img('photo-1626785774573-4b799315345d', 900, 900)}
                alt="Branding services in Australia - brand strategy and identity design company in Australia"
                width={900} height={900} loading="eager" decoding="async"
              />
              <div className="brd-scan" aria-hidden="true" />
              <div className="brd-emblem" aria-hidden="true">
                <div className="brd-emblem-ring"><span className="brd-emblem-ic"><Sparkles size={20} /></span></div>
                <div className="brd-emblem-tx">
                  <span className="brd-emblem-k">Brand System</span>
                  <span className="brd-emblem-v"><span className="brd-dot" /> Consistent</span>
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
                A logo is not a brand. A colour palette is not a brand. Your brand is the impression you leave, what
                people think and feel and expect the moment they see your name. You either shape it on purpose or you
                leave it to chance.
              </p>
              <p className="t-d">
                EG Digital is a Melbourne-based branding company that treats your brand as a business asset, not a mood
                board. We build the strategy underneath the look: your positioning, your message, your voice, and the
                identity system that carries all of it, then keep it consistent everywhere your business shows up. When a
                brand looks nice but says nothing and stands for nothing, we do not call that branding. We build a brand
                that means something and earns you the trust, the recognition, and the price premium that comes with it.
              </p>
              <p className="t-d">
                <strong>We are part of <ElomaLink />,</strong> which means your brand sits next to web development, SEO,
                PPC, social media, and content under one roof. That matters more than it sounds. Your brand lives on your
                website, in your ads, across your social, and through every email, and those are usually built by
                different suppliers who never talk to each other, which is why so many businesses look like a different
                company on every channel. When one team owns the brand and everything it touches, you look like one
                business everywhere.
              </p>
              <p className="t-d">
                One partner. One team that builds the brand and keeps it consistent across everything you put into the
                world.
              </p>
              <p className="t-d">
                Get a free brand audit. No lock-in, just an honest look at how your brand is landing and where it is
                letting you down.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why work with EG Digital ── */}
      <section className="brd-sec">
        <div className="brd-shell">
          <div className="brd-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="brd-h2">Why work with EG Digital as your branding company in <span>Australia</span></h2>
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

      {/* ── Our branding services ── */}
      <section className="brd-sec dark">
        <div className="brd-shell">
          <div className="brd-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="brd-h2">Our branding <span>services</span></h2>
            <p className="brd-lead">
              We are a full-service branding company, so you can hand us the whole brand or the single piece you are
              missing. Here is what we do.
            </p>
          </div>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              // Brand strategy is a full-width feature row; the rest form a varied bento.
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

      {/* ── Who we build brands for ── */}
      <section className="brd-sec">
        <div className="brd-shell">
          <div className="brd-head">
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="brd-h2">Who we build brands <span>for</span></h2>
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
      <section className="brd-sec dark">
        <div className="brd-shell">
          <div className="brd-head">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="brd-h2">How we <span>work</span></h2>
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
      <section className="brd-sec">
        <div className="brd-shell">
          <div className="brd-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="brd-h2">What branding costs in <span>Australia</span></h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                <p className="cost-p">
                  Honest answer: it depends on how much you need, strategy, identity, messaging, a full rebrand, and how
                  big the business is, and any company quoting a flat number before understanding the project is guessing.
                </p>
                <p className="cost-p">
                  For context, a basic brand identity for a small business, logo, palette, typography, and simple
                  guidelines, usually runs $2,500 to $6,000. A full branding project with proper strategy, a complete
                  identity system, messaging and voice, and detailed guidelines typically runs $6,000 to $20,000 or more,
                  depending on depth and the size of the business. A full rebrand for an established company, including
                  rollout across channels, sits at the higher end and is scoped on its own. Ongoing brand support, where
                  we produce and apply brand assets as you grow, commonly runs month to month based on volume.
                </p>
                <p className="cost-p">
                  Two things worth knowing. First, price tracks depth and scale more than anything else, so a full
                  strategy-led brand for a growing company costs more than a logo and a palette for a startup. Second,
                  cheap branding is usually cheap for a reason: a bargain package generally means a template logo with no
                  strategy behind it, which is exactly the brand you end up paying to redo. We would rather build it
                  properly once.
                </p>
                <p className="cost-p">
                  We quote from your actual project, and the quote comes with a clear scope, not just a number. You will
                  know exactly what you are getting, and you will own the brand at the end of it.
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
          <p className="brd-note">
            Get a free brand audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International Branding Services ── */}
      <section className="brd-sec dark">
        <div className="brd-shell">
          <div className="brd-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="brd-h2">International Branding <span>Services</span></h2>
            <p className="brd-lead">
              Based in Melbourne, EG Digital delivers branding services in Australia while also helping businesses build
              their brand across the UK, USA, Canada, and Singapore, with strategy and identity shaped for each market's
              audience and expectations.
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
              Whether your business operates in Australia or internationally, our approach stays the same: strategy
              first, an identity built to express it, and a brand kept consistent across every channel rather than left
              to drift.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to build a brand that works ── */}
      <section className="brd-sec">
        <div className="brd-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="ready-h">Ready to build a brand that works?</h2>
              <p className="ready-p">
                Tell us where your brand is falling short. We will run a free audit, review how your brand and your
                competitors are landing, and tell you exactly where the opportunity is. If we can help, we will show you
                how. If we cannot, we will tell you that too.
              </p>
              <p className="ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free brand audit below.
              </p>
              <div className="ready-cta">
                <button className="brd-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  Get my free audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="brd-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="brd-sec">
        <div className="brd-shell">
          <div className="brd-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="brd-h2">Frequently asked <span>questions</span></h2>
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
        highlight="brand."
        button="Get a free audit"
      />
    </PageLayout>
  )
}
