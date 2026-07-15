import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Code2, Users, Search, Receipt, Globe, AppWindow, ShoppingCart, Layers,
  Plug, RefreshCw, LifeBuoy, Store, Rocket, Briefcase, Building2, Phone,
  Gauge, ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, EASE } from '../_kit'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'
import { ElomaLink } from '../../../lib/elomaLink'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - WEB DEVELOPMENT (Australia)
   Dark navy hero with an animated in-page code-editor / browser panel (typed
   code bars, blinking cursor, live Core Web Vitals chips - compositor-only
   animation), green-accent card grids and a timeline process rail.
   Copy is verbatim from the approved page content.
   ════════════════════════════════════════════════════════════════════════════ */

const SKY = '#7dd3fc'

// Animated "code" lines: [indent, [width%, colour][]]
const CODE_LINES: [number, [number, string][]][] = [
  [0,  [[14, SKY], [30, GREEN]]],
  [1,  [[22, 'rgba(255,255,255,0.4)'], [18, SKY]]],
  [1,  [[34, GREEN], [12, 'rgba(255,255,255,0.32)']]],
  [2,  [[26, SKY], [22, 'rgba(255,255,255,0.4)']]],
  [1,  [[16, GREEN]]],
  [0,  [[10, SKY], [24, 'rgba(255,255,255,0.35)'], [14, GREEN]]],
]

const VITALS: { k: string; v: string }[] = [
  { k: 'LCP', v: '0.9s' },
  { k: 'CLS', v: '0.00' },
  { k: 'INP', v: '45ms' },
]

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Code2,
    t: 'Engineering first, not templates dressed up as custom',
    d: 'Plenty of companies sell a $60 theme with a new logo and call it custom. We write clean, efficient code, whether that is a tailored build on a proven CMS or a fully bespoke application. Clean code means fast load times, fewer things that break, and a site your own team can actually work with after launch. You own what we build.',
  },
  {
    icon: Users,
    t: 'One team for the build and everything around it',
    d: 'Because EG Digital also handles cloud hosting, software, security, and SEO, the things that usually fall through the cracks between a designer, a developer, and a hosting company are all handled in one place. No finger-pointing when something goes wrong. No waiting weeks for a developer at another company to action a fix. One number to call.',
  },
  {
    icon: Search,
    t: 'Built for Google and AI search from the start',
    d: "A site that search engines cannot crawl, render, and index might as well be invisible. We build on solid technical foundations: fast Core Web Vitals, mobile-first rendering, clean structure, and schema markup, so the site is ready to rank on Google and to be cited in AI answers from ChatGPT, Perplexity, and Google's AI Overviews. Most companies bolt SEO on at the end. We build it in.",
  },
  {
    icon: Receipt,
    t: 'Honest pricing and clear timelines',
    d: 'We quote from your actual requirements and itemise what you are paying for. You will know the scope, the price, and the timeline before we start, and you will not get surprised by costs that were always going to come up. No 48-month platform lock-ins. No "it depends" that never resolves into a number.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Globe,
    t: 'Custom website development',
    d: "Websites built around your business, not forced into someone else's template. We handle the build end to end: structure, responsive front-end, CMS so your team can update content without a developer, and the on-page foundations that help you rank. Suitable for service businesses, B2B companies, and brands that have outgrown a DIY site.",
  },
  {
    icon: AppWindow,
    t: 'Web application development',
    d: 'When you need more than pages, we build it: customer portals, booking and quoting systems, dashboards, internal tools, and software that runs in the browser. Because EG Digital also does custom software and cloud, the line between "website" and "application" is one we cross comfortably, and we build it to hold up under real use.',
  },
  {
    icon: ShoppingCart,
    t: 'E-commerce development',
    d: 'Online stores built to sell and to scale. Product and category structure, secure payment gateway integration, inventory and order handling, and a checkout designed to convert rather than lose people at the last step. We build the store and connect it to the systems behind it.',
  },
  {
    icon: Layers,
    t: 'Headless and CMS builds',
    d: 'Whether you want a straightforward CMS your marketing team can run themselves, or a headless setup that separates content from the front-end for speed and flexibility, we build for how you actually work and for where you are heading, not just where you are today.',
  },
  {
    icon: Plug,
    t: 'Integrations and APIs',
    d: 'A modern site rarely stands alone. We connect yours to the tools that run your business: CRM, ERP, Microsoft 365 and Dynamics, payment and invoicing platforms, booking systems, and more. This is where a lot of builds quietly fall apart, and where having software and cloud engineers in the same team pays off.',
  },
  {
    icon: RefreshCw,
    t: 'Website redesigns and migrations',
    d: 'Already have a site that is slow, dated, or hard to manage? We rebuild it without losing the search rankings you have earned. Migrations are handled carefully, with redirects mapped and rankings protected, so you move forward without going backwards in Google.',
  },
  {
    icon: LifeBuoy,
    t: 'Maintenance, hosting, and support',
    d: 'A site is not "done" at launch. We host, monitor, update, and secure what we build, so it stays fast and safe long after go-live. One team that knows your site, on call when you need them.',
  },
]

const AUDIENCES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Store,
    t: 'Small businesses',
    d: 'You need a professional site that brings in enquiries without a budget that swallows your year. We build affordable, conversion-focused websites for small businesses across Australia, with clear pricing and no padding. Start with what you need now, and we build it to grow with you rather than forcing a rebuild in twelve months.',
  },
  {
    icon: Rocket,
    t: 'Startups',
    d: 'Speed matters when you are proving an idea. We build startup websites and MVPs that get you to market quickly, then expand as you validate and scale. Because we also do software and cloud, we can take you from a landing page to a working product without changing teams along the way.',
  },
  {
    icon: Briefcase,
    t: 'B2B companies',
    d: 'B2B buyers research before they ever talk to sales, so your site has to do real work in the funnel. We build B2B websites that explain a considered offer clearly, generate qualified leads, and connect to your CRM so nothing slips through. Longer sales cycles, multiple stakeholders, and integration with your existing systems are normal territory for us.',
  },
  {
    icon: Building2,
    t: 'Established and enterprise businesses',
    d: 'For complex sites, multiple integrations, and higher stakes, you need a team that can handle scale and accountability. We bring the engineering depth, the security posture, and the project management to deliver builds that hold up, with one partner answerable for all.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Discovery and scope',
    d: 'We start by understanding your business, your users, and what the site actually has to achieve. You get a documented scope, a fixed quote, and a timeline before any code is written. No vague briefs that balloon later.',
  },
  {
    t: 'Design and prototype',
    d: 'We design the structure and interface around your users and your goals, not around decoration, then show you a prototype so you can react to something real before we build it.',
  },
  {
    t: 'Development',
    d: 'We build with clean, efficient code, mobile-first, with SEO foundations and the integrations your business needs baked in from the start. You see progress as it happens, not a black box until launch.',
  },
  {
    t: 'Testing and launch',
    d: 'Before anything goes live, we test across devices and browsers, check speed and Core Web Vitals, and confirm everything is crawlable and indexable. Then we launch, with migrations and redirects handled carefully where you are replacing an old site.',
  },
  {
    t: 'Support and growth',
    d: 'After launch we host, monitor, and maintain the site, and because SEO and digital marketing live in the same team, we can keep growing your traffic and conversions rather than handing you the keys and walking away.',
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'Web Development Company in Australia',
    d: 'As a leading web development company in Australia, we build high-performance websites, eCommerce platforms, and custom web applications designed for Australian businesses. Every project is built with SEO-ready architecture, fast performance, accessibility, and long-term scalability in mind.',
  },
  {
    t: 'Web Development Company in UK',
    d: 'Businesses looking for a reliable web development company in the UK need websites that combine performance, security, and user experience. We build custom websites and business applications that integrate seamlessly with your existing systems while supporting future growth.',
  },
  {
    t: 'Web Development Company in USA',
    d: 'Our web development company in USA services help businesses create modern, responsive websites and web applications that improve customer experience and business efficiency. From corporate websites to custom portals and enterprise applications, we build solutions designed to scale.',
  },
  {
    t: 'Web Development Company in Canada',
    d: 'As a trusted web development company in Canada, we help businesses develop websites and custom digital platforms that are secure, fast, and easy to manage. Our development process focuses on clean code, search-friendly architecture, and seamless integrations.',
  },
  {
    t: 'Web Development Company in Singapore',
    d: 'Our web development company in Singapore services support businesses looking for high-performance websites and custom web applications that deliver measurable business outcomes. We combine technical expertise with modern development practices to create digital platforms built for long-term success.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is the average cost of web development in Australia?',
    a: 'Most professional business websites in Australia fall between $5,000 and $15,000, with the sweet spot for many small businesses around $5,000 to $10,000. Fully custom builds run higher, and e-commerce or web-application projects with payments and integrations typically start near $15,000 and climb with complexity. The honest version is that price tracks functionality more than page count, so the right number depends on what your site has to do. We quote from your actual requirements and itemise it, rather than quoting a tier before we understand the project.',
  },
  {
    q: 'How long does it take to develop a professional website?',
    a: 'For a straightforward custom business site, plan on roughly four to eight weeks from kickoff to launch. A simpler template-based build can be ready in two to four weeks, while a larger build with custom features, copywriting, and integrations runs closer to six to twelve weeks. Complex platforms and enterprise projects with multiple integrations can take longer again. The timeline depends on scope and on how quickly content and feedback come back from your side, which is why we agree on both before we begin.',
  },
  {
    q: 'Why should I choose a local Australian web company?',
    a: 'A local team works in your timezone, understands the Australian market and its compliance expectations, and is straightforward to reach when something needs attention. Offshore developers can be cheaper, but the savings often come with communication overhead, quality uncertainty, and timezone gaps that slow everything down. With EG Digital you get an Australian team in Melbourne, accountable and reachable, plus engineers, hosting, and security in one place rather than scattered across providers and time zones.',
  },
  {
    q: 'Do Australian web companies offer SEO services?',
    a: 'Many do, and the better ones build SEO into the development rather than treating it as an afterthought. We do both. Every site we build ships with the technical foundations search engines need: fast Core Web Vitals, clean structure, mobile-first rendering, and schema markup. EG Digital also runs full SEO and AI search optimisation as ongoing services, so the same team that builds your site can grow its traffic, instead of you having to brief a separate company on a site they did not build.',
  },
  {
    q: 'What technologies do top Australian companies use?',
    a: "It depends on the job, and a good company picks the tool that fits rather than forcing every project into the same stack. For content-driven business sites, WordPress and other established CMS platforms remain common because they are flexible and easy for your team to manage. For sites that need more speed and flexibility, headless CMS and modern JavaScript front-ends are increasingly the choice. For applications and complex logic, the build moves into custom development with proper databases, APIs, and cloud infrastructure. At EG Digital we match the technology to your needs and your team's ability to maintain it, and because we also handle software and cloud, we are not limited to one approach.",
  },
]

/* Animated code-editor / browser panel - typed code bars assemble with a
   spring, a cursor blinks, and live Core Web Vitals chips fade in.
   Transform/opacity only. */
function CodePanel() {
  return (
    <div className="wdv-panel" aria-label="Website build in progress">
      <div className="wdv-chrome">
        <span className="wdv-cdots"><i /><i /><i /></span>
        <span className="wdv-url">egdigital.com.au</span>
        <span className="wdv-live"><i />Live</span>
      </div>
      <div className="wdv-code">
        {CODE_LINES.map(([indent, segs], li) => (
          <motion.div
            key={li}
            className="wdv-cl"
            style={{ paddingLeft: indent * 22 }}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.3 + li * 0.12, duration: 0.5, ease: EASE }}
          >
            {segs.map(([w, c], si) => (
              <span key={si} className="wdv-seg" style={{ width: `${w}%`, background: c }} />
            ))}
            {li === CODE_LINES.length - 1 && <span className="wdv-cursor" />}
          </motion.div>
        ))}
      </div>
      <div className="wdv-vitals">
        {VITALS.map((v, i) => (
          <motion.span
            key={v.k}
            className="wdv-vit"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 1.1 + i * 0.1, duration: 0.5, ease: EASE }}
          >
            <Gauge size={13} /> {v.k} <b>{v.v}</b>
          </motion.span>
        ))}
        <motion.span
          className="wdv-vit ok"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 1.4, duration: 0.5, ease: EASE }}
        >
          <ShieldCheck size={13} /> Secure <b>SSL</b>
        </motion.span>
      </div>
    </div>
  )
}

export function WebDevelopment() {
  const navigate = useNavigate()
  useServiceJsonLd('/services/web-development')

  // No global per-route meta helper exists, so set the document title here to
  // match the approved META TITLE for this page.
  useEffect(() => {
    const prev = document.title
    document.title = 'Web Development company in Australia | EG Digital'
    return () => { document.title = prev }
  }, [])

  return (
    <PageLayout>
      <style>{`
        .wdv-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .wdv-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .wdv-shell{ max-width:2440px; } }
        /* Mobile: drop the outer 96px gutter so content keeps a clean 24px bezel
           instead of a narrow centred column. */
        @media (max-width:768px){ .wdv-shell{ max-width:100%; } }

        /* ── Hero (dark navy) ── */
        .wdv-hero { position:relative; overflow:hidden; background:${NAVY};
          padding:clamp(48px,6vw,104px) clamp(24px,4vw,64px) clamp(48px,6vw,96px); }
        .wdv-hero::before { content:''; position:absolute; top:-28%; right:-10%; width:min(760px,70vw); height:min(760px,70vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}2b, transparent 62%); pointer-events:none; }
        .wdv-hero::after { content:''; position:absolute; bottom:-34%; left:-12%; width:min(640px,60vw); height:min(640px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${SKY}1f, transparent 62%); pointer-events:none; }
        .wdv-hin { position:relative; z-index:1; max-width:min(calc(100vw - 96px),1760px); margin:0 auto; }
        @media (min-width:1920px){ .wdv-hin{ max-width:1900px; } }
        @media (min-width:2560px){ .wdv-hin{ max-width:2440px; } }
        @media (max-width:768px){ .wdv-hin{ max-width:100%; } }
        .wdv-hgrid { display:grid; grid-template-columns:1.06fr 0.94fr; gap:clamp(36px,5vw,88px); align-items:center; }
        @media (max-width:960px){ .wdv-hgrid{ grid-template-columns:1fr; } }
        .wdv-h1 { font-size:clamp(42px,6.4vw,92px); font-weight:900; letter-spacing:0.015em; line-height: 1.14; color:#fff; margin:16px 0 0; text-transform:uppercase; word-spacing: 0.14em; }
        .wdv-h1 em { font-style:normal; color:${GREEN}; }
        .wdv-lede { font-size:clamp(20px,2.6vw,34px); font-weight:800; letter-spacing:-0.01em; line-height:1.28; color:rgba(255,255,255,0.92); margin:22px 0 0; }
        .wdv-lede span { color:${GREEN}; }
        .wdv-intro { max-width:600px; font-size:clamp(15px,1.2vw,18px); line-height:1.8; color:rgba(255,255,255,0.64); margin:20px 0 0; }
        .wdv-intro strong { color:#fff; font-weight:700; }
        .wdv-cta { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(26px,3vw,36px); }
        .wdv-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,color .2s,transform .18s; will-change:transform; }
        .wdv-bp:hover { background:#fff; transform:translateY(-2px); }
        .wdv-bp svg { transition:transform .2s; } .wdv-bp:hover svg { transform:translateX(3px); }
        .wdv-bg { display:inline-flex; align-items:center; gap:9px; background:transparent; color:#fff; border:1.5px solid rgba(255,255,255,0.28); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .wdv-bg:hover { border-color:rgba(255,255,255,0.65); background:rgba(255,255,255,0.06); }
        @media (max-width:480px){ .wdv-bp, .wdv-bg, .wdv-tel{ width:100%; justify-content:center; } }
        .wdv-hero-more { max-width:900px; margin-top:clamp(30px,3.6vw,52px); padding-top:clamp(26px,3vw,40px); border-top:1px solid rgba(255,255,255,0.12); }
        .wdv-hero-more .wdv-intro { max-width:900px; margin-top:16px; }
        .wdv-hero-more .wdv-intro:first-child { margin-top:0; }

        /* ── Animated code-editor panel ── */
        @keyframes wdv-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-12px); } }
        @keyframes wdv-blink { 0%,49%{ opacity:1; } 50%,100%{ opacity:0; } }
        @keyframes wdv-pulse { 0%,100%{ transform:scale(1); } 50%{ transform:scale(1.5); } }
        .wdv-panel { position:relative; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.12); border-radius:24px;
          overflow:hidden; box-shadow:0 40px 90px -40px rgba(0,0,0,0.6); animation:wdv-float 8s ease-in-out infinite; will-change:transform; }
        .wdv-panel:hover { animation-play-state:paused; }
        .wdv-chrome { display:flex; align-items:center; gap:12px; padding:14px 18px; border-bottom:1px solid rgba(255,255,255,0.1);
          background:rgba(255,255,255,0.03); }
        .wdv-cdots { display:inline-flex; gap:6px; }
        .wdv-cdots i { width:11px; height:11px; border-radius:50%; }
        .wdv-cdots i:nth-child(1){ background:#ff5f57; } .wdv-cdots i:nth-child(2){ background:#febc2e; } .wdv-cdots i:nth-child(3){ background:#28c840; }
        .wdv-url { flex:1; text-align:center; font-size:12px; font-weight:700; color:rgba(255,255,255,0.55);
          background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:99px; padding:6px 14px;
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .wdv-live { display:inline-flex; align-items:center; gap:6px; font-size:10px; font-weight:800; letter-spacing:1px; text-transform:uppercase; word-spacing: 0.14em;
          color:${GREEN}; background:rgba(60,185,140,0.12); border:1px solid rgba(60,185,140,0.32); padding:4px 10px; border-radius:99px; flex-shrink:0; }
        .wdv-live i { width:6px; height:6px; border-radius:50%; background:${GREEN}; animation:wdv-pulse 1.6s ease-in-out infinite; will-change:transform; }
        .wdv-code { padding:clamp(20px,2.4vw,34px) clamp(18px,2.2vw,30px); display:flex; flex-direction:column; gap:13px; }
        .wdv-cl { display:flex; align-items:center; gap:8px; }
        .wdv-seg { display:inline-block; height:11px; border-radius:6px; flex-shrink:1; min-width:12px; }
        .wdv-cursor { display:inline-block; width:9px; height:16px; border-radius:2px; background:${GREEN};
          animation:wdv-blink 1.1s step-end infinite; }
        .wdv-vitals { display:flex; flex-wrap:wrap; gap:9px; padding:0 clamp(18px,2.2vw,30px) clamp(20px,2.4vw,30px); }
        .wdv-vit { display:inline-flex; align-items:center; gap:7px; font-size:12px; font-weight:700; color:rgba(255,255,255,0.8);
          background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); padding:8px 14px; border-radius:100px; }
        .wdv-vit svg { color:${GREEN}; }
        .wdv-vit b { color:${GREEN}; font-weight:900; }
        @media (prefers-reduced-motion:reduce){ .wdv-panel, .wdv-cursor, .wdv-live i{ animation:none; } }

        /* ── Section base ── */
        .wdv-sec { padding:clamp(56px,7vw,120px) 0; }
        .wdv-sec.alt { background:#fff; }
        .wdv-sec.dark { background:${NAVY}; position:relative; overflow:hidden; }
        .wdv-sec.dark::before { content:''; position:absolute; top:-22%; left:-10%; width:min(640px,60vw); height:min(640px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}29, transparent 65%); pointer-events:none; }
        .wdv-sec.dark .wdv-shell { position:relative; z-index:1; }
        .wdv-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:0.01em; line-height: 1.14; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .wdv-h2 span { color:${GREEN}; }
        .wdv-sec.dark .wdv-h2 { color:#fff; }
        .wdv-lead { max-width:640px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.58); margin:18px 0 0; }
        .wdv-sec.dark .wdv-lead { color:rgba(255,255,255,0.66); }

        /* ── Why cards ── */
        .wdv-why { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .wdv-why{ grid-template-columns:1fr; } }
        .wdv-wc { position:relative; overflow:hidden; background:#fafbfd; border:1px solid rgba(8,33,60,0.08); border-radius:22px;
          padding:clamp(24px,2.6vw,40px); box-shadow:0 4px 22px rgba(8,33,60,0.05);
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .wdv-wc::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:${GREEN};
          transform:scaleX(0); transform-origin:left center; transition:transform .45s cubic-bezier(0.16,1,0.3,1); }
        .wdv-wc:hover { transform:translateY(-6px); box-shadow:0 30px 64px rgba(8,33,60,0.12); border-color:${GREEN}55; }
        .wdv-wc:hover::before { transform:scaleX(1); }
        .wdv-wc-ic { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${GREEN}29,${GREEN}0d); color:${GREEN}; margin-bottom:18px; }
        .wdv-wc-t { font-size:clamp(19px,1.7vw,26px); font-weight:900; letter-spacing:-0.01em; color:${NAVY}; margin:0 0 12px; line-height:1.16; }
        .wdv-wc-d { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:0; }

        /* ── Services (2-col cards, number watermark) ── */
        .wdv-srv { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:900px){ .wdv-srv{ grid-template-columns:1fr; } }
        .wdv-sc { position:relative; overflow:hidden; background:#fff; border:1px solid rgba(8,33,60,0.09); border-radius:24px;
          padding:clamp(26px,2.8vw,44px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .wdv-sc:hover { transform:translateY(-6px); box-shadow:0 32px 68px -30px rgba(8,33,60,0.3); border-color:${GREEN}; }
        .wdv-sc-no { position:absolute; top:clamp(12px,1.4vw,20px); right:clamp(16px,2vw,28px); font-size:clamp(46px,5vw,84px); font-weight:900;
          letter-spacing:-0.05em; color:${GREEN}; opacity:0.12; line-height:1; font-variant-numeric:tabular-nums; pointer-events:none; }
        .wdv-sc-ic { width:58px; height:58px; border-radius:16px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${NAVY},#12395f); color:${GREEN}; margin-bottom:18px; }
        .wdv-sc-t { font-size:clamp(21px,2.1vw,32px); font-weight:900; letter-spacing:0.01em; line-height:1.12; color:${NAVY}; margin:0; text-transform:uppercase; word-spacing: 0.14em; }
        .wdv-sc-p { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:14px 0 0; }
        .wdv-sc.wide { grid-column:1 / -1; }

        /* ── Audiences (dark) ── */
        .wdv-aud { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .wdv-aud{ grid-template-columns:1fr; } }
        .wdv-ac { position:relative; overflow:hidden; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:22px;
          padding:clamp(26px,3vw,42px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .wdv-ac:hover { transform:translateY(-6px); border-color:rgba(60,185,140,0.45); box-shadow:0 34px 70px -28px rgba(0,0,0,0.55); }
        .wdv-ac-ic { width:54px; height:54px; border-radius:15px; display:flex; align-items:center; justify-content:center;
          background:rgba(60,185,140,0.14); color:${GREEN}; margin-bottom:18px; }
        .wdv-ac-t { font-size:clamp(20px,2vw,30px); font-weight:900; letter-spacing:-0.01em; color:#fff; margin:0 0 11px; line-height:1.16; }
        .wdv-ac-d { font-size:clamp(14px,1.02vw,16px); line-height:1.76; color:rgba(255,255,255,0.68); margin:0; }

        /* ── How we work (timeline rail) ── */
        .wdv-steps { margin-top:clamp(36px,4vw,56px); }
        .wdv-step { display:grid; grid-template-columns:auto 1fr; gap:clamp(18px,2.6vw,44px); }
        .wdv-rail { display:flex; flex-direction:column; align-items:center; }
        .wdv-dot { width:clamp(46px,4vw,60px); height:clamp(46px,4vw,60px); border-radius:50%; background:${GREEN}; color:${NAVY};
          display:flex; align-items:center; justify-content:center; font-weight:900; font-size:clamp(16px,1.4vw,21px);
          letter-spacing:-0.02em; flex-shrink:0; box-shadow:0 10px 26px -8px rgba(60,185,140,0.55); }
        .wdv-line { flex:1; width:2px; background:rgba(8,33,60,0.14); margin:10px 0; min-height:26px; }
        .wdv-step:last-child .wdv-line { display:none; }
        .wdv-step-body { padding-bottom:clamp(28px,3.4vw,52px); }
        .wdv-step:last-child .wdv-step-body { padding-bottom:0; }
        .wdv-step-t { font-size:clamp(22px,2.4vw,40px); font-weight:900; letter-spacing:0.01em; line-height:1.12; color:${NAVY}; margin:0; text-transform:uppercase; word-spacing: 0.14em; padding-top:clamp(8px,1vw,14px); }
        .wdv-step-d { font-size:clamp(14px,1.05vw,16.5px); line-height:1.8; color:rgba(8,33,60,0.62); margin:12px 0 0; max-width:72ch; }
        @media (max-width:480px){
          .wdv-step{ grid-template-columns:1fr; gap:10px; }
          .wdv-rail{ flex-direction:row; }
          .wdv-line{ display:none; }
        }

        /* ── Cost ── */
        .wdv-cost { display:grid; grid-template-columns:1.1fr 0.9fr; gap:clamp(32px,4vw,72px); align-items:center; margin-top:clamp(32px,4vw,52px); }
        @media (max-width:900px){ .wdv-cost{ grid-template-columns:1fr; } }
        .wdv-cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .wdv-cost-p:last-child { margin-bottom:0; }
        .wdv-pricecard { background:${NAVY}; border-radius:24px; padding:clamp(28px,3vw,44px); color:#fff; position:relative; overflow:hidden; }
        .wdv-pricecard::before { content:''; position:absolute; bottom:-40%; right:-15%; width:60%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}33, transparent 62%); pointer-events:none; }
        .wdv-pr { position:relative; padding:18px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .wdv-pr:first-of-type { padding-top:0; }
        .wdv-pr:last-of-type { border-bottom:none; padding-bottom:0; }
        .wdv-pr-v { font-size:clamp(24px,2.6vw,40px); font-weight:900; letter-spacing:-0.03em; color:${GREEN}; line-height:1; }
        .wdv-pr-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.66); margin-top:8px; line-height:1.5; }
        .wdv-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .wdv-note a { color:${GREEN}; text-decoration:none; }

        /* ── Countries ── */
        .wdv-co { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .wdv-co{ grid-template-columns:1fr; } }
        .wdv-coc { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:clamp(24px,2.6vw,38px);
          transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s; will-change:transform; }
        .wdv-coc:hover { transform:translateY(-5px); border-color:rgba(60,185,140,0.45); }
        .wdv-coc.wide { grid-column:1 / -1; }
        .wdv-coc-t { font-size:clamp(18px,1.7vw,24px); font-weight:900; letter-spacing:-0.01em; color:#fff; margin:0 0 10px; line-height:1.2; }
        .wdv-coc-d { font-size:clamp(14px,1.02vw,15.5px); line-height:1.75; color:rgba(255,255,255,0.66); margin:0; }
        .wdv-co-close { max-width:820px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(30px,3.6vw,48px) 0 0; }

        /* ── FAQ ── */
        .wdv-faq { margin-top:clamp(36px,4vw,56px); }
        .wdv-fq { padding:clamp(24px,3vw,40px) 0; border-top:1px solid rgba(8,33,60,0.12); }
        .wdv-fq:last-child { border-bottom:1px solid rgba(8,33,60,0.12); }
        .wdv-fq-q { font-size:clamp(20px,2.1vw,32px); font-weight:900; letter-spacing:-0.01em; color:${NAVY}; margin:0 0 14px; line-height:1.18; }
        .wdv-fq-a { font-size:clamp(14px,1.05vw,16.5px); line-height:1.82; color:rgba(8,33,60,0.64); margin:0; max-width:90ch; }

        /* ── Ready band ── */
        .wdv-ready { position:relative; overflow:hidden; background:linear-gradient(160deg, #f2fbf7 0%, #e9f4fb 100%); border:1px solid rgba(8,33,60,0.1); border-radius:28px;
          padding:clamp(34px,5vw,72px); margin-top:clamp(36px,4vw,56px); text-align:center; }
        .wdv-ready::before { content:''; position:absolute; inset:0; pointer-events:none;
          background:radial-gradient(ellipse 50% 60% at 85% 10%, ${GREEN}1a, transparent 65%); }
        .wdv-ready-h { font-size:clamp(30px,4.4vw,68px); font-weight:900; letter-spacing:0.01em; line-height: 1.16; text-transform:uppercase; word-spacing: 0.14em; color:${NAVY}; margin:14px 0 0; }
        .wdv-ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.62); }
        .wdv-ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .wdv-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .wdv-tel:hover { transform:translateY(-2px); }

        /* ── Legal line ── */
        .wdv-legal { font-size:clamp(12px,0.95vw,14px); line-height:1.7; color:rgba(8,33,60,0.5); font-style:italic; margin:clamp(30px,3.6vw,48px) 0 0; }
      `}</style>

      {/* ── Hero (dark) ── */}
      <section className="wdv-hero">
        <div className="wdv-hin">
          <div className="wdv-hgrid">
            <Reveal>
              <Eyebrow light>Web Development company in Australia</Eyebrow>
              <h1 className="wdv-h1">Web Development Company in Australia</h1>
              <p className="wdv-lede">
                We build fast, custom websites and web apps that <span>earn their keep</span>.
              </p>
              <p className="wdv-intro">
                A website that looks good but loads slowly, breaks on mobile, or cannot be found in search is not an
                asset. It is a liability with a logo on it.
              </p>
              <p className="wdv-intro">
                EG Digital is a Melbourne-based web development company that builds sites and web applications
                engineered to perform: quick to load, easy to manage, search-ready from the first line of code, and
                built to scale as your business grows. We are part of <ElomaLink />, so your build sits alongside cloud
                hosting, custom software, Microsoft and integrations, cyber security, and SEO under one roof. That
                means the site we ship is not a stranded brochure. It connects to your systems, it stays secure, and it
                gets found.
              </p>
              <div className="wdv-cta">
                <button className="wdv-bp" onClick={() => navigate('/contact')}>
                  Get a free quote
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="wdv-bg" href="tel:1800054555">
                  <Phone size={16} /> 1800 054 555
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <CodePanel />
            </Reveal>
          </div>

          <Reveal>
            <div className="wdv-hero-more">
              <p className="wdv-intro">
                <strong>One partner for the whole thing.</strong> One team that designs it, codes it, hosts it, and
                keeps it running.
              </p>
              <p className="wdv-intro">
                Get a free quote. Tell us what you need and we will give you a real number, not a vague range.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose EG Digital ── */}
      <section className="wdv-sec alt">
        <div className="wdv-shell">
          <Reveal>
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="wdv-h2">Why choose EG Digital as your web development company in <span>Australia</span></h2>
          </Reveal>
          <div className="wdv-why">
            {WHY.map((w, i) => {
              const Ic = w.icon
              return (
                <Reveal key={w.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="wdv-wc" style={{ height: '100%' }}>
                    <div className="wdv-wc-ic"><Ic size={24} /></div>
                    <h3 className="wdv-wc-t">{w.t}</h3>
                    <p className="wdv-wc-d">{w.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Our web development services ── */}
      <section className="wdv-sec">
        <div className="wdv-shell">
          <Reveal>
            <Eyebrow>What we build</Eyebrow>
            <h2 className="wdv-h2">Our web development <span>services</span></h2>
            <p className="wdv-lead">
              We are a full-service web development company, so you can hand us the whole project or the one piece you
              are missing.
            </p>
          </Reveal>
          <div className="wdv-srv">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              const wide = i === SERVICES.length - 1
              return (
                <Reveal key={s.t} delay={Math.min(i * 0.04, 0.2)} style={wide ? { gridColumn: '1 / -1' } : undefined}>
                  <div className="wdv-sc" style={{ height: '100%' }}>
                    <span className="wdv-sc-no">{String(i + 1).padStart(2, '0')}</span>
                    <div className="wdv-sc-ic"><Ic size={26} /></div>
                    <h3 className="wdv-sc-t">{s.t}</h3>
                    <p className="wdv-sc-p">{s.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Who we build for (dark) ── */}
      <section className="wdv-sec dark">
        <div className="wdv-shell">
          <Reveal>
            <Eyebrow light>Who it's for</Eyebrow>
            <h2 className="wdv-h2">Who we build <span>for</span></h2>
          </Reveal>
          <div className="wdv-aud">
            {AUDIENCES.map((a, i) => {
              const Ic = a.icon
              return (
                <Reveal key={a.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="wdv-ac" style={{ height: '100%' }}>
                    <div className="wdv-ac-ic"><Ic size={24} /></div>
                    <h3 className="wdv-ac-t">{a.t}</h3>
                    <p className="wdv-ac-d">{a.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How we work (timeline) ── */}
      <section className="wdv-sec alt">
        <div className="wdv-shell">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="wdv-h2">From scope to <span>ship</span></h2>
          </Reveal>
          <div className="wdv-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={Math.min(i * 0.04, 0.16)}>
                <div className="wdv-step">
                  <div className="wdv-rail">
                    <div className="wdv-dot">{String(i + 1).padStart(2, '0')}</div>
                    <div className="wdv-line" />
                  </div>
                  <div className="wdv-step-body">
                    <h3 className="wdv-step-t">{s.t}</h3>
                    <p className="wdv-step-d">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost ── */}
      <section className="wdv-sec">
        <div className="wdv-shell">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="wdv-h2">What web development costs in <span>Australia</span></h2>
          </Reveal>
          <div className="wdv-cost">
            <Reveal>
              <div>
                <p className="wdv-cost-p">
                  Honest answer: it depends on what you are building, and any company quoting a flat price before
                  understanding your project is guessing. Here is the current Australian market for context.
                </p>
                <p className="wdv-cost-p">
                  A standard small-business website (a professionally built site of roughly five to fifteen pages with
                  a CMS and SEO foundations) typically runs $5,000 to $15,000. A more bespoke custom build pushes
                  toward $15,000 to $30,000 or more. E-commerce stores and web applications with payments,
                  integrations, and custom logic usually start around $15,000 and scale well beyond $50,000 for
                  complex platforms. Simple template builds can come in lower, and DIY builders cost a few hundred a
                  year, with trade-offs we are happy to talk you through honestly.
                </p>
                <p className="wdv-cost-p">
                  Two things worth knowing. First, the biggest cost driver in 2026 is no longer design, it is
                  functionality: bookings, payments, integrations, and custom logic are what move the number. Second,
                  Melbourne and Sydney rates tend to sit above regional pricing, which reflects local salaries and
                  overheads rather than better code by default.
                </p>
                <p className="wdv-cost-p">
                  On top of the build, budget for hosting and ongoing maintenance. We quote both up front so nothing
                  ambushes you later. You get an itemised scope and a real number, not a "from $X" asterisk.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="wdv-pricecard">
                <div className="wdv-pr">
                  <div className="wdv-pr-v">$5,000 - $15,000</div>
                  <div className="wdv-pr-l">A standard small-business website of roughly five to fifteen pages with a CMS and SEO foundations.</div>
                </div>
                <div className="wdv-pr">
                  <div className="wdv-pr-v">$15,000 - $30,000+</div>
                  <div className="wdv-pr-l">A more bespoke custom build, engineered around your business.</div>
                </div>
                <div className="wdv-pr">
                  <div className="wdv-pr-v">$15,000 - $50,000+</div>
                  <div className="wdv-pr-l">E-commerce stores and web applications with payments, integrations, and custom logic.</div>
                </div>
              </div>
            </Reveal>
          </div>
          <p className="wdv-note">
            Get a free quote for your project. <a href="tel:1800054555">Call 1800 054 555</a>
          </p>
        </div>
      </section>

      {/* ── International (dark) ── */}
      <section className="wdv-sec dark">
        <div className="wdv-shell">
          <Reveal>
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="wdv-h2">Web development across <span>markets</span></h2>
            <p className="wdv-lead">
              Although EG Digital is based in Melbourne, we deliver custom web development solutions for businesses
              across Australia and international markets. Whether you're launching a new business website, building a
              customer portal, or developing a custom web application, our team creates scalable solutions that support
              long-term growth.
            </p>
          </Reveal>
          <div className="wdv-co">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 0.06, 0.24)} style={i === 0 ? { gridColumn: '1 / -1' } : undefined}>
                <div className="wdv-coc" style={{ height: '100%' }}>
                  <h3 className="wdv-coc-t">{c.t}</h3>
                  <p className="wdv-coc-d">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="wdv-co-close">
              Whether you're based in Australia or expanding internationally, our development philosophy remains the
              same: build secure, scalable, and search-friendly websites that deliver real business value while
              integrating seamlessly with the technology your business relies on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wdv-sec alt">
        <div className="wdv-shell">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="wdv-h2">Frequently asked <span>questions</span></h2>
          </Reveal>
          <div className="wdv-faq">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.15)}>
                <div className="wdv-fq">
                  <h3 className="wdv-fq-q">{f.q}</h3>
                  <p className="wdv-fq-a">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to build something that works ── */}
      <section className="wdv-sec">
        <div className="wdv-shell">
          <Reveal>
            <div className="wdv-ready">
              <Eyebrow>Free quote</Eyebrow>
              <h2 className="wdv-ready-h">Ready to build something that works?</h2>
              <p className="wdv-ready-p">
                Tell us what you are trying to build and what it needs to do. We will give you a clear scope, an
                itemised quote, and a realistic timeline, with no obligation and no vague ranges. If we are the right
                fit, we will show you how. If we are not, we will tell you.
              </p>
              <p className="wdv-ready-p" style={{ fontWeight: 700, color: NAVY }}>
                Call us on 1800 054 555 or request your free quote below.
              </p>
              <div className="wdv-ready-cta">
                <button className="wdv-bp" onClick={() => navigate('/contact')}>
                  Get my free quote
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
                <a className="wdv-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="wdv-legal">
              EG Digital Australia Pty Ltd, a unit of <ElomaLink />. Web development delivered Australia-wide from
              Melbourne.
            </p>
          </Reveal>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready When You Are"
        heading="Let's build something that"
        highlight="works."
        button="Get my free quote"
      />
    </PageLayout>
  )
}
