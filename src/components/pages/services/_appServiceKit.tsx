import { Fragment } from 'react'
import type { ReactNode } from 'react'
import { Globe, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from '../_kit'
import { usePageMeta } from '../../../hooks/usePageMeta'
import { useServiceJsonLd } from '../../../hooks/useServiceJsonLd'

/* ════════════════════════════════════════════════════════════════════════════
   SHARED SERVICE-PAGE TEMPLATE (bento layout)
   Used by the app-development and graphic-design service pages, which share the
   same structure: dark-first hero, why cards, service bento, audience cards,
   numbered process, cost + price card, international band, ready band, FAQ, CTA.
   Copy is passed in verbatim from each page's approved content. Hero and one
   service tile carry an internet-fetched animated vector illustration (Popsy)
   with content-appropriate alt text.
   These pages are intentionally NOT linked from the header or footer nav; they
   are reached via contextual blog interlinks only.
   ════════════════════════════════════════════════════════════════════════════ */

const POPSY = (slug: string) => `https://illustrations.popsy.co/green/${slug}.svg`

// Tiny inline-link renderer: turns "[label](/path)" into a react-router <Link>
// so verbatim copy can carry genuine internal cross-links without rewording.
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (m) return <Link key={i} to={m[2]} className="svc-link">{m[1]}</Link>
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

export interface Card { icon: LucideIcon; t: string; d: string }
export interface Service { icon: LucideIcon; t: string; paras: string[] }
export interface Step { t: string; d: string }
export interface Priced { v: string; l: string }
export interface Faq { q: string; a: string }
export interface Illo { slug: string; alt: string }

export interface ServicePageData {
  route: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  lede: ReactNode
  primaryCta: string
  heroImg: Illo
  heroBadge: { k: string; v: string }
  signals: { v: string; l: string }[]
  intro: ReactNode[]
  whyHeading: ReactNode
  why: Card[]
  servicesHeading: ReactNode
  servicesLead?: ReactNode
  services: Service[]
  serviceImg: Illo & { cap: string }
  benefits?: { eyebrow: string; heading: ReactNode; lead: ReactNode; items: Step[] }
  audiencesEyebrow: string
  audiencesHeading: ReactNode
  audiences: Card[]
  processEyebrow: string
  processHeading: ReactNode
  steps: Step[]
  costHeading: ReactNode
  costParas: string[]
  prices: Priced[]
  costNote: ReactNode
  intlHeading: ReactNode
  intlLead: ReactNode
  countries: Step[]
  intlClose: ReactNode
  readyEyebrow?: string
  readyHeading: string
  readyParas: ReactNode[]
  faqs: Faq[]
  cta: { heading: string; highlight: string; button: string }
}

const Arrow = ({ stroke }: { stroke: string }) => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" /></svg>
)

export function AppServicePage({ data }: { data: ServicePageData }) {
  const navigate = useNavigate()
  useServiceJsonLd(data.route)
  usePageMeta(data.metaTitle, data.metaDescription)

  return (
    <PageLayout>
      <style>{`
        .svc-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .svc-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .svc-shell{ max-width:2440px; } }
        @media (max-width:768px){ .svc-shell{ max-width:100%; } }

        .svc-sec { padding:clamp(52px,7vw,116px) 0; position:relative; }
        .svc-sec.dark { background:radial-gradient(120% 90% at 85% -10%, #0d2c4f 0%, ${NAVY} 55%, #061a30 100%); overflow:hidden; }
        .svc-sec.dark::before { content:''; position:absolute; bottom:-30%; left:-8%; width:min(620px,58vw); height:min(620px,58vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}26, transparent 66%); pointer-events:none; }
        .svc-sec.dark .svc-shell { position:relative; z-index:1; }

        .svc-head { max-width:920px; margin:0 0 clamp(28px,3.4vw,52px); }
        .svc-h2 { font-size:clamp(33px,4.6vw,78px); font-weight:900; letter-spacing:-0.05em; line-height:0.94; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .svc-h2 span { color:${GREEN}; }
        .svc-sec.dark .svc-h2 { color:#fff; }
        .svc-lead { max-width:720px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.6); margin:18px 0 0; }
        .svc-sec.dark .svc-lead { color:rgba(255,255,255,0.68); }

        .bento { display:grid; grid-template-columns:repeat(12,1fr); gap:clamp(12px,1.4vw,20px); }
        .c12{ grid-column:span 12; } .c7{ grid-column:span 7; }
        .c6{ grid-column:span 6; } .c5{ grid-column:span 5; } .c4{ grid-column:span 4; }
        @media (max-width:1024px){
          .bento > *{ grid-column:span 6; }
          .bento > .feat, .bento > .c12{ grid-column:span 12; }
        }
        @media (max-width:640px){ .bento > *{ grid-column:span 12 !important; } }

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
        .t-d + .t-d { margin-top:12px; }
        .svc-link { color:${GREEN}; text-decoration:none; font-weight:700; border-bottom:1px solid ${GREEN}55; }
        .svc-link:hover { border-bottom-color:${GREEN}; }

        /* Animated vector illustration tiles */
        .svc-illo-wrap { position:relative; display:flex; align-items:center; justify-content:center; }
        .svc-illo-wrap::before { content:''; position:absolute; width:70%; height:70%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}2e, transparent 66%); pointer-events:none; }
        .svc-illo { position:relative; z-index:1; width:100%; object-fit:contain;
          animation:svc-float 6s ease-in-out infinite; will-change:transform; filter:drop-shadow(0 24px 40px rgba(0,0,0,0.35)); }
        @keyframes svc-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-12px); } }

        .svc-visual { padding:clamp(22px,3vw,46px); overflow:hidden; }
        .svc-visual .svc-illo-wrap { width:100%; min-height:clamp(280px,40vw,500px); }
        .svc-visual .svc-illo { max-height:clamp(280px,40vw,500px); }
        .svc-emblem { position:absolute; left:clamp(14px,2vw,26px); bottom:clamp(14px,2vw,26px); z-index:3;
          display:flex; align-items:center; gap:12px; padding:12px 18px 12px 12px; border-radius:100px;
          background:rgba(8,33,60,0.72); backdrop-filter:blur(8px); box-shadow:0 18px 40px -18px rgba(0,0,0,0.6);
          animation:svc-float 6.5s ease-in-out infinite; will-change:transform; }
        .svc-emblem-ring { position:relative; width:46px; height:46px; border-radius:50%; flex-shrink:0;
          background:conic-gradient(${GREEN}, ${GREEN}00 70%, ${GREEN}); animation:svc-spin 3.4s linear infinite; will-change:transform; }
        .svc-emblem-ring::after { content:''; position:absolute; inset:4px; border-radius:50%; background:${NAVY}; }
        .svc-emblem-ic { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:${GREEN}; z-index:1;
          font-size:11px; font-weight:900; letter-spacing:0.5px; }
        .svc-emblem-tx { display:flex; flex-direction:column; line-height:1.1; }
        .svc-emblem-k { font-size:11px; font-weight:800; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.66); }
        .svc-emblem-v { display:flex; align-items:center; gap:7px; font-size:15px; font-weight:900; letter-spacing:-0.02em; color:#fff; }
        .svc-dot { width:9px; height:9px; border-radius:50%; background:${GREEN}; animation:svc-pulse 1.8s ease-in-out infinite; }
        @keyframes svc-spin { to { transform:rotate(360deg); } }
        @keyframes svc-pulse { 0%,100%{ transform:scale(1); opacity:0.7; } 50%{ transform:scale(1.25); opacity:1; } }

        .svc-imgtile { display:flex; flex-direction:column; gap:14px; align-items:center; justify-content:center; min-height:clamp(240px,26vw,320px); }
        .svc-imgtile .svc-illo-wrap { width:100%; }
        .svc-imgtile .svc-illo { max-height:clamp(150px,17vw,220px); }
        .svc-imgtile .cap { display:flex; align-items:center; gap:11px; }
        .svc-imgtile .cap span { font-size:clamp(13px,1.05vw,16px); font-weight:800; letter-spacing:-0.01em; color:#fff; line-height:1.3; }
        .svc-imgtile .cap i { width:34px; height:34px; border-radius:11px; flex-shrink:0; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${GREEN},#2c9e74); color:${NAVY}; }

        /* Hero */
        .svc-hero { padding-top:clamp(30px,4vw,60px); }
        .hero-bento { display:grid; grid-template-columns:1.12fr 0.88fr; gap:clamp(14px,1.6vw,22px); align-items:stretch; }
        @media (max-width:920px){ .hero-bento{ grid-template-columns:1fr; } }
        .hero-head { display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
        .hero-head::before { content:''; position:absolute; top:-30%; right:-14%; width:52%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}30, transparent 62%); pointer-events:none; }
        .svc-h1 { position:relative; font-size:clamp(40px,6vw,96px); font-weight:900; letter-spacing:-0.05em; line-height:0.94; color:#fff; margin:16px 0 0; text-transform:uppercase; }
        .svc-lede { position:relative; font-size:clamp(18px,2vw,30px); font-weight:900; letter-spacing:-0.035em; line-height:1.12; color:#fff; margin:18px 0 0; }
        .svc-lede span { color:${GREEN}; }
        .svc-cta { position:relative; display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(24px,3vw,34px); }
        .svc-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,transform .18s; will-change:transform; }
        .svc-bp:hover { background:#fff; color:${NAVY}; transform:translateY(-2px); }
        .svc-bp svg { transition:transform .2s; } .svc-bp:hover svg { transform:translateX(3px); }
        .svc-bg { display:inline-flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); color:#fff; border:1.5px solid rgba(255,255,255,0.24); border-radius:100px; padding:15px 28px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:border-color .2s,background .2s; text-decoration:none; }
        .svc-bg:hover { border-color:rgba(255,255,255,0.5); background:rgba(255,255,255,0.12); }
        @media (max-width:480px){ .svc-bp, .svc-bg, .svc-tel{ width:100%; justify-content:center; } }

        .chips { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(12px,1.4vw,20px); margin-top:clamp(14px,1.6vw,22px); }
        @media (max-width:640px){ .chips{ grid-template-columns:1fr; } }
        .chip { display:flex; flex-direction:column; gap:5px; border-radius:20px; padding:clamp(18px,2vw,26px);
          background:linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12);
          animation:svc-float 7s ease-in-out infinite; will-change:transform; }
        .chip:nth-child(2){ animation-delay:.5s; } .chip:nth-child(3){ animation-delay:1s; }
        .chip-v { font-size:clamp(20px,2.2vw,32px); font-weight:900; letter-spacing:-0.03em; color:${GREEN}; line-height:1; }
        .chip-l { font-size:clamp(12.5px,1vw,14.5px); line-height:1.5; color:rgba(255,255,255,0.66); }

        .hero-intro { margin-top:clamp(14px,1.6vw,22px); }
        .hero-intro .t-d { margin:0 0 14px; max-width:none; }
        .hero-intro .t-d:last-child { margin-bottom:0; }
        .hero-intro strong { color:#fff; font-weight:800; }

        .srv-feat { display:grid; grid-template-columns:auto 1fr; gap:clamp(20px,2.6vw,40px); align-items:center; }
        @media (max-width:640px){ .srv-feat{ grid-template-columns:1fr; } }
        .srv-feat .tico { width:66px; height:66px; margin:0; }
        .srv-feat .t-t { font-size:clamp(24px,2.8vw,42px); text-transform:uppercase; margin-bottom:12px; }

        .step-no { font-size:clamp(38px,4.4vw,72px); font-weight:900; letter-spacing:-0.05em; line-height:0.9; color:${GREEN};
          font-variant-numeric:tabular-nums; opacity:0.92; margin-bottom:6px; }

        .prow { padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .prow:first-child{ padding-top:0; } .prow:last-child{ border-bottom:none; padding-bottom:0; }
        .prow-v { font-size:clamp(22px,2.6vw,38px); font-weight:900; letter-spacing:-0.04em; color:${GREEN}; line-height:1; }
        .prow-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.68); margin-top:8px; line-height:1.5; }
        .cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .cost-p:last-child{ margin-bottom:0; }
        .svc-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .svc-note a { color:${GREEN}; text-decoration:none; }

        .ready { text-align:center; }
        .ready-h { font-size:clamp(30px,4.4vw,66px); font-weight:900; letter-spacing:-0.045em; line-height:0.98; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .ready-p { max-width:760px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.66); }
        .ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }
        .svc-tel { display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:${NAVY}; color:#fff; border-radius:100px;
          padding:15px 28px; font-size:15px; font-weight:800; min-height:52px; transition:transform .18s; will-change:transform; }
        .svc-tel:hover { transform:translateY(-2px); }

        .faq-q { font-size:clamp(19px,2vw,29px); font-weight:900; letter-spacing:-0.03em; color:${NAVY}; margin:0 0 13px; line-height:1.12; }
        .faq-a { font-size:clamp(14px,1.03vw,16px); line-height:1.8; color:rgba(8,33,60,0.64); margin:0; }
        .co-close { max-width:900px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(28px,3.4vw,46px) 0 0; }

        @media (prefers-reduced-motion: reduce) {
          .svc-illo, .svc-emblem, .svc-emblem-ring, .svc-dot, .chip { animation:none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="svc-sec dark svc-hero">
        <div className="svc-shell">
          <div className="hero-bento">
            <Reveal className="tile n feat hero-head">
              <div>
                <Eyebrow light>{data.eyebrow}</Eyebrow>
                <h1 className="svc-h1">{data.h1}</h1>
                <p className="svc-lede">{data.lede}</p>
                <div className="svc-cta">
                  <button className="svc-bp" onClick={() => navigate('/contact')}>
                    {data.primaryCta}<Arrow stroke={NAVY} />
                  </button>
                  <a className="svc-bg" href="tel:1800054555"><Phone size={16} /> 1800 054 555</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="tile n svc-visual">
              <div className="svc-illo-wrap">
                <img
                  className="svc-illo"
                  src={POPSY(data.heroImg.slug)}
                  loading="eager"
                  decoding="async"
                  alt={data.heroImg.alt}
                />
              </div>
              <div className="svc-emblem" aria-hidden="true">
                <div className="svc-emblem-ring"><span className="svc-emblem-ic">EG</span></div>
                <div className="svc-emblem-tx">
                  <span className="svc-emblem-k">{data.heroBadge.k}</span>
                  <span className="svc-emblem-v"><span className="svc-dot" /> {data.heroBadge.v}</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="chips">
            {data.signals.map(s => (
              <div className="chip" key={s.v}>
                <span className="chip-v">{s.v}</span>
                <span className="chip-l">{s.l}</span>
              </div>
            ))}
          </div>

          <Reveal className="tile d feat hero-intro" style={{ marginTop: 'clamp(14px,1.6vw,22px)' }}>
            <div>
              {data.intro.map((p, i) => <p className="t-d" key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why */}
      <section className="svc-sec">
        <div className="svc-shell">
          <div className="svc-head">
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="svc-h2">{data.whyHeading}</h2>
          </div>
          <div className="bento">
            {data.why.map((w, i) => {
              const Ic = w.icon
              const span = i === 0 || i === 3 ? 'c7' : 'c5'
              return (
                <Reveal key={w.t} delay={Math.min(i * 0.06, 0.24)} className={`tile tile-glow ${span}`}>
                  <div>
                    <span className="tico"><Ic size={24} /></span>
                    <h3 className="t-t">{w.t}</h3>
                    <p className="t-d"><RichText text={w.d} /></p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="svc-sec dark">
        <div className="svc-shell">
          <div className="svc-head">
            <Eyebrow light>What we do</Eyebrow>
            <h2 className="svc-h2">{data.servicesHeading}</h2>
            {data.servicesLead && <p className="svc-lead">{data.servicesLead}</p>}
          </div>
          <div className="bento">
            {data.services.map((s, i) => {
              const Ic = s.icon
              if (i === 0) {
                return (
                  <Reveal key={s.t} className="tile n feat c12 tile-glow">
                    <div className="srv-feat">
                      <span className="tico"><Ic size={30} /></span>
                      <div>
                        <h3 className="t-t">{s.t}</h3>
                        {s.paras.map((p, pi) => <p key={pi} className="t-d"><RichText text={p} /></p>)}
                      </div>
                    </div>
                  </Reveal>
                )
              }
              const tile = (
                <Reveal key={s.t} delay={Math.min(i * 0.03, 0.18)} className="tile d c6">
                  <div>
                    <span className="tico"><Ic size={24} /></span>
                    <h3 className="t-t">{s.t}</h3>
                    {s.paras.map((p, pi) => <p key={pi} className="t-d"><RichText text={p} /></p>)}
                  </div>
                </Reveal>
              )
              // Drop the animated illustration tile in as the second card so the
              // grid stays balanced and the section has a visual anchor.
              if (i === 1) {
                return (
                  <Fragment key={s.t}>
                    {tile}
                    <Reveal delay={0.1} className="tile d svc-imgtile c6">
                      <div className="svc-illo-wrap">
                        <img className="svc-illo" src={POPSY(data.serviceImg.slug)} loading="lazy" decoding="async" alt={data.serviceImg.alt} />
                      </div>
                      <div className="cap">
                        <i><Globe size={17} /></i>
                        <span>{data.serviceImg.cap}</span>
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

      {/* Benefits (optional) */}
      {data.benefits && (
        <section className="svc-sec">
          <div className="svc-shell">
            <div className="svc-head">
              <Eyebrow>{data.benefits.eyebrow}</Eyebrow>
              <h2 className="svc-h2">{data.benefits.heading}</h2>
              <p className="svc-lead">{data.benefits.lead}</p>
            </div>
            <div className="bento">
              {data.benefits.items.map((b, i) => {
                const spans = ['c4', 'c4', 'c4', 'c6', 'c6', 'c12']
                return (
                  <Reveal key={b.t} delay={Math.min(i * 0.05, 0.2)} className={`tile tile-glow ${spans[i] ?? 'c6'}`}>
                    <div>
                      <h3 className="t-t">{b.t}</h3>
                      <p className="t-d"><RichText text={b.d} /></p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Audiences */}
      <section className="svc-sec">
        <div className="svc-shell">
          <div className="svc-head">
            <Eyebrow>{data.audiencesEyebrow}</Eyebrow>
            <h2 className="svc-h2">{data.audiencesHeading}</h2>
          </div>
          <div className="bento">
            {data.audiences.map((a, i) => {
              const Ic = a.icon
              const span = i === 0 || i === 3 ? 'c7' : 'c5'
              return (
                <Reveal key={a.t} delay={Math.min(i * 0.06, 0.24)} className={`tile tile-glow ${span}`}>
                  <div>
                    <span className="tico"><Ic size={24} /></span>
                    <h3 className="t-t">{a.t}</h3>
                    <p className="t-d"><RichText text={a.d} /></p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="svc-sec dark">
        <div className="svc-shell">
          <div className="svc-head">
            <Eyebrow light>{data.processEyebrow}</Eyebrow>
            <h2 className="svc-h2">{data.processHeading}</h2>
          </div>
          <div className="bento">
            {data.steps.map((s, i) => {
              const spans = data.steps.length === 5 ? ['c4', 'c4', 'c4', 'c6', 'c6'] : ['c6', 'c6', 'c6', 'c6', 'c6', 'c6']
              return (
                <Reveal key={s.t} delay={Math.min(i * 0.04, 0.16)} className={`tile d ${spans[i] ?? 'c6'}`}>
                  <div>
                    <div className="step-no">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="t-t">{s.t}</h3>
                    <p className="t-d"><RichText text={s.d} /></p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="svc-sec">
        <div className="svc-shell">
          <div className="svc-head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="svc-h2">{data.costHeading}</h2>
          </div>
          <div className="bento">
            <Reveal className="tile c7">
              <div>
                {data.costParas.map((p, i) => <p className="cost-p" key={i}>{p}</p>)}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="tile n c5 tile-glow">
              <div>
                {data.prices.map(p => (
                  <div className="prow" key={p.v}>
                    <div className="prow-v">{p.v}</div>
                    <div className="prow-l">{p.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <p className="svc-note">{data.costNote}</p>
        </div>
      </section>

      {/* International */}
      <section className="svc-sec dark">
        <div className="svc-shell">
          <div className="svc-head">
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="svc-h2">{data.intlHeading}</h2>
            <p className="svc-lead">{data.intlLead}</p>
          </div>
          <div className="bento">
            {data.countries.map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 0.06, 0.24)} className="tile d c6">
                <div>
                  <span className="tico"><Globe size={24} /></span>
                  <h3 className="t-t">{c.t}</h3>
                  <p className="t-d">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><p className="co-close">{data.intlClose}</p></Reveal>
        </div>
      </section>

      {/* Ready */}
      <section className="svc-sec">
        <div className="svc-shell">
          <Reveal className="tile g feat ready tile-glow">
            <div>
              <Eyebrow>{data.readyEyebrow ?? 'Free quote'}</Eyebrow>
              <h2 className="ready-h">{data.readyHeading}</h2>
              {data.readyParas.map((p, i) => (
                <p className="ready-p" key={i} style={i === data.readyParas.length - 1 ? { fontWeight: 700, color: NAVY } : undefined}>{p}</p>
              ))}
              <div className="ready-cta">
                <button className="svc-bp" onClick={() => navigate('/contact')} style={{ background: NAVY, color: '#fff' }}>
                  {data.cta.button}<Arrow stroke="#fff" />
                </button>
                <a className="svc-tel" href="tel:1800054555"><Phone size={16} /> Call 1800 054 555</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-sec">
        <div className="svc-shell">
          <div className="svc-head">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="svc-h2">Frequently asked <span>questions</span></h2>
          </div>
          <div className="bento">
            {data.faqs.map((f, i) => {
              const span = i % 2 === 0 ? 'c7' : 'c5'
              const last = i === data.faqs.length - 1 && data.faqs.length % 2 === 1
              return (
                <Reveal key={f.q} delay={Math.min(i * 0.04, 0.16)} className={`tile ${last ? 'c12' : span}`}>
                  <div>
                    <h3 className="faq-q">{f.q}</h3>
                    <p className="faq-a"><RichText text={f.a} /></p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Ready When You Are" heading={data.cta.heading} highlight={data.cta.highlight} button={data.cta.button} />
    </PageLayout>
  )
}
