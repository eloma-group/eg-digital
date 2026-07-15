import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { industrySlug } from '../../lib/industryRoutes'
import {
  Briefcase, Cpu, Rocket, HeartHandshake, Stethoscope, Landmark, Factory,
  GraduationCap, Building2, Truck, Plane, Sprout, Hotel, UtensilsCrossed,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM, EASE } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'

type Field = 'Public & Social' | 'Commerce & Finance' | 'Industrial & Tech' | 'Lifestyle & Travel'
type Industry = { icon: LucideIcon; name: string; sym: string; field: Field; detail: string }

const FIELDS: { label: Field; color: string }[] = [
  { label: 'Public & Social', color: GREEN },
  { label: 'Commerce & Finance', color: '#2563eb' },
  { label: 'Industrial & Tech', color: '#d97706' },
  { label: 'Lifestyle & Travel', color: '#7c3aed' },
]
const FIELD_COLOR: Record<Field, string> = Object.fromEntries(FIELDS.map(f => [f.label, f.color])) as Record<Field, string>

const INDUSTRIES: Industry[] = [
  { icon: Stethoscope, name: 'Healthcare', sym: 'Hc', field: 'Public & Social', detail: 'Compliant, secure technology that improves patient care and efficiency.' },
  { icon: GraduationCap, name: 'Education', sym: 'Ed', field: 'Public & Social', detail: 'Digital collaboration, secure systems and modern learning technology.' },
  { icon: HeartHandshake, name: 'Non-Profit Organizations', sym: 'Np', field: 'Public & Social', detail: 'Affordable tools and collaboration for mission-driven teams.' },
  { icon: Landmark, name: 'Banking & Financial Services', sym: 'Bk', field: 'Commerce & Finance', detail: 'Security, compliance and engagement with modern fintech.' },
  { icon: Building2, name: 'Real Estate', sym: 'Re', field: 'Commerce & Finance', detail: 'Streamlined property management, engagement and operations.' },
  { icon: Briefcase, name: 'Professional Services', sym: 'Ps', field: 'Commerce & Finance', detail: 'Secure, scalable technology that boosts productivity and client service.' },
  { icon: Rocket, name: 'Startups & SMEs', sym: 'St', field: 'Commerce & Finance', detail: 'Cost-effective, scalable technology that grows with you.' },
  { icon: Cpu, name: 'IT', sym: 'It', field: 'Industrial & Tech', detail: 'Modern cloud, security, development and managed IT for operational excellence.' },
  { icon: Factory, name: 'Manufacturing', sym: 'Mf', field: 'Industrial & Tech', detail: 'Automation, ERP and intelligent technology for productivity and visibility.' },
  { icon: Truck, name: 'Logistics & Supply Chain', sym: 'Lg', field: 'Industrial & Tech', detail: 'Visibility and coordination across transport, warehousing and supply.' },
  { icon: Sprout, name: 'Agriculture', sym: 'Ag', field: 'Industrial & Tech', detail: 'Data-driven insights for productivity, sustainability and performance.' },
  { icon: Plane, name: 'Travel & Tourism', sym: 'Tr', field: 'Lifestyle & Travel', detail: 'Digital platforms, automation and cloud for richer journeys.' },
  { icon: Hotel, name: 'Hospitality', sym: 'Hs', field: 'Lifestyle & Travel', detail: 'Integrated systems and digital engagement for great guest stays.' },
  { icon: UtensilsCrossed, name: 'Food & Beverage', sym: 'Fb', field: 'Lifestyle & Travel', detail: 'Operations, supply chain and customer experience, optimised.' },
]

/* ═════════════════ Periodic table (primary) ═════════════════ */
function indexFromHash(hash: string): number {
  if (!hash) return -1
  const slug = decodeURIComponent(hash.slice(1))
  return INDUSTRIES.findIndex(ind => industrySlug(ind.name) === slug)
}

function PeriodicConcept() {
  const { hash } = useLocation()
  const [i, setI] = useState(() => Math.max(0, indexFromHash(typeof window !== 'undefined' ? window.location.hash : '')))
  // Footer "Industries" links carry the sector slug in the hash - select it.
  useEffect(() => {
    const idx = indexFromHash(hash)
    if (idx >= 0) setI(idx)
  }, [hash])
  const a = INDUSTRIES[i]; const c = FIELD_COLOR[a.field]
  return (
    <>
      <div className="pt-legend">
        {FIELDS.map(f => <span key={f.label} className="pt-leg"><i style={{ background: f.color }} />{f.label}</span>)}
      </div>
      <div className="pt">
        <div className="pt-table">
          {INDUSTRIES.map((ind, idx) => {
            const fc = FIELD_COLOR[ind.field]
            return (
              <button key={ind.name} id={industrySlug(ind.name)} className={`pt-tile${idx === i ? ' on' : ''}`} style={{ ['--c' as string]: fc, scrollMarginTop: 96 }} onMouseEnter={() => setI(idx)} onClick={() => setI(idx)}>
                <span className="pt-n">{String(idx + 1).padStart(2, '0')}</span>
                <span className="pt-sym">{ind.sym}</span>
                <span className="pt-nm">{ind.name}</span>
              </button>
            )
          })}
        </div>
        <div className="pt-readout" style={{ ['--c' as string]: c }}>
          <span className="pt-r-bgnum">{String(i + 1).padStart(2, '0')}</span>
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease: EASE }} style={{ position: 'relative', zIndex: 1 }}>
              <div className="pt-r-sym">{a.sym}</div>
              <div className="pt-r-field">{a.field}</div>
              <h3 className="pt-r-name">{a.name}</h3>
              <p className="pt-r-detail">{a.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

/* ═════════════════ Field tabs + spotlight ═════════════════ */
function TabsConcept() {
  const [f, setF] = useState<Field>(FIELDS[0].label)
  const items = INDUSTRIES.filter(i => i.field === f)
  const c = FIELD_COLOR[f]
  return (
    <div className="tb">
      <div className="tb-tabs">
        {FIELDS.map(fd => (
          <button key={fd.label} className={`tb-tab${f === fd.label ? ' on' : ''}`} style={{ ['--c' as string]: fd.color }} onClick={() => setF(fd.label)}>
            <span className="dot" style={{ background: fd.color }} />{fd.label}
          </button>
        ))}
      </div>
      <div className="tb-panel" style={{ ['--c' as string]: c }}>
        <div className="tb-side">
          <div className="tb-side-n">{String(items.length).padStart(2, '0')}</div>
          <div className="tb-side-l">Sectors</div>
          <h3 className="tb-side-h">{f}</h3>
        </div>
        <div className="tb-items">
          <AnimatePresence mode="wait">
            <motion.div key={f} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.32, ease: EASE }} className="tb-items-grid">
              {items.map(ind => {
                const Ic = ind.icon
                return (
                  <div key={ind.name} className="tb-item">
                    <div className="tb-item-ic" style={{ background: `color-mix(in srgb, ${c} 13%, transparent)`, color: c }}><Ic size={20} /></div>
                    <div><div className="tb-item-nm">{ind.name}</div><div className="tb-item-d">{ind.detail}</div></div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

/* ═════════════════ Living tile wall (ambient closer) ═════════════════ */
const WALL_COLS = [[0, 3, 6, 9, 12], [1, 4, 7, 10, 13], [2, 5, 8, 11]]
const WALL_ANIM = ['wall-up 34s', 'wall-down 28s', 'wall-up 40s']
function WallConcept() {
  return (
    <div className="wall">
      {WALL_COLS.map((col, ci) => (
        <div className="wall-col" key={ci}>
          <div className="wall-track" style={{ animation: `${WALL_ANIM[ci]} linear infinite` }}>
            {[...col, ...col].map((idx, k) => {
              const ind = INDUSTRIES[idx]; const Ic = ind.icon; const c = FIELD_COLOR[ind.field]
              return (
                <div className="wall-tile" key={k} style={{ ['--c' as string]: c }}>
                  <div className="wall-ic" style={{ background: `color-mix(in srgb, ${c} 13%, transparent)`, color: c }}><Ic size={20} /></div>
                  <div className="wall-tx"><div className="wall-nm">{ind.name}</div><div className="wall-fd" style={{ color: c }}>{ind.field}</div></div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Industries() {
  usePageMeta(
    'Industries We Serve | EG Digital Solutions',
    'EG Digital serves industries like healthcare, finance, education, retail, logistics, and more with tailored digital solutions and scalable technology.',
  )
  return (
    <PageLayout>
      <style>{`
        .in-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .in-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .in-shell { max-width: 2440px; } }
        .in-sec { padding: clamp(56px,7vw,116px) 0; }
        .in-hero { padding: clamp(40px,6vw,96px) 0 clamp(20px,3vw,32px); }
        .in-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: 0.01em; line-height: 1; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; word-spacing: 0.14em; }
        .in-h1 span { color: ${GREEN}; }
        .in-intro { max-width: 640px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }
        .in-h2 { font-size: clamp(34px,5vw,76px); font-weight: 900; letter-spacing: 0.01em; line-height: 1.04; text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; margin: 14px 0 0; }
        .in-h2 span { color: ${GREEN}; }
        .in-lead { max-width: 600px; font-size: clamp(15px,1.15vw,18px); line-height: 1.7; color: rgba(8,33,60,0.55); margin: 16px 0 0; }
        .in-head { margin-bottom: clamp(28px,3.5vw,48px); }

        /* ── Field legend ── */
        .pt-legend { display: flex; flex-wrap: wrap; gap: 12px 22px; margin-bottom: clamp(20px,2.5vw,32px); }
        .pt-leg { display: inline-flex; align-items: center; gap: 8px; font-size: clamp(11px,0.9vw,13px); font-weight: 800; letter-spacing: 0.4px; color: rgba(8,33,60,0.6); }
        .pt-leg i { width: 11px; height: 11px; border-radius: 3px; }

        /* ── Periodic table ── */
        .pt { display: grid; grid-template-columns: 1.4fr 0.6fr; gap: clamp(20px,3vw,40px); align-items: start; }
        @media (max-width: 900px) { .pt { grid-template-columns: 1fr; } }
        .pt-table { display: grid; grid-template-columns: repeat(7,1fr); gap: clamp(8px,0.8vw,12px); }
        @media (max-width: 1100px) { .pt-table { grid-template-columns: repeat(5,1fr); } }
        @media (max-width: 640px) { .pt-table { grid-template-columns: repeat(4,1fr); } }
        @media (max-width: 380px) { .pt-table { grid-template-columns: repeat(3,1fr); } }
        .pt-tile { position: relative; aspect-ratio: 1/1; display: flex; flex-direction: column; align-items: flex-start; justify-content: center;
          padding: 10px; border-radius: 12px; background: #fff; border: 1px solid rgba(8,33,60,0.1); cursor: pointer; font-family: inherit;
          overflow: hidden; transition: transform 0.25s, box-shadow 0.25s, background 0.25s; will-change: transform; }
        .pt-tile::before { content: ''; position: absolute; inset: 0; background: color-mix(in srgb, var(--c) 10%, transparent); opacity: 0; transition: opacity 0.25s; }
        .pt-tile:hover { transform: translateY(-4px); box-shadow: 0 16px 34px -14px color-mix(in srgb, var(--c) 60%, transparent); }
        .pt-tile.on { background: var(--c); border-color: var(--c); box-shadow: 0 18px 38px -14px color-mix(in srgb, var(--c) 70%, transparent); }
        .pt-n { font-size: 10px; font-weight: 800; color: rgba(8,33,60,0.4); font-variant-numeric: tabular-nums; position: relative; z-index: 1; }
        .pt-sym { font-size: clamp(20px,2.4vw,34px); font-weight: 900; letter-spacing: -0.04em; color: var(--c); line-height: 1; margin: auto 0 4px; position: relative; z-index: 1; transition: color 0.25s; }
        .pt-nm { font-size: 9.5px; font-weight: 700; color: rgba(8,33,60,0.5); line-height: 1.15; position: relative; z-index: 1; transition: color 0.25s; }
        .pt-tile.on .pt-sym, .pt-tile.on .pt-nm { color: #fff; } .pt-tile.on .pt-n { color: rgba(255,255,255,0.7); }
        .pt-readout { position: relative; overflow: hidden; background: #fff; border: 1px solid rgba(8,33,60,0.1); border-top: 4px solid var(--c); border-radius: 20px; padding: clamp(24px,2.6vw,36px); min-height: 240px; box-shadow: 0 20px 50px -28px rgba(8,33,60,0.3); position: sticky; top: 96px; }
        .pt-r-bgnum { position: absolute; right: -6px; bottom: -28px; font-size: clamp(120px,16vw,200px); font-weight: 900; letter-spacing: -0.06em; color: color-mix(in srgb, var(--c) 8%, transparent); line-height: 0.8; }
        .pt-r-sym { font-size: clamp(48px,6vw,84px); font-weight: 900; letter-spacing: -0.05em; color: var(--c); line-height: 0.9; }
        .pt-r-field { font-size: 11px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; word-spacing: 0.14em; color: var(--c); margin: 14px 0 6px; }
        .pt-r-name { font-size: clamp(22px,2.2vw,32px); font-weight: 900; letter-spacing: 0.01em; color: ${NAVY}; margin: 0 0 12px; text-transform: uppercase; word-spacing: 0.14em; line-height: 1.12; }
        .pt-r-detail { font-size: clamp(14px,1.05vw,16px); line-height: 1.7; color: rgba(8,33,60,0.6); margin: 0; max-width: 40ch; }

        /* ── Field tabs ── */
        .tb-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: clamp(20px,2.4vw,32px); }
        .tb-tab { display: inline-flex; align-items: center; gap: 9px; font-family: inherit; font-size: 13.5px; font-weight: 800; padding: 12px 20px; border-radius: 100px; min-height: 46px; cursor: pointer; border: 1px solid rgba(8,33,60,0.14); background: #fff; color: rgba(8,33,60,0.6); transition: all 0.2s; }
        .tb-tab .dot { width: 9px; height: 9px; border-radius: 3px; }
        .tb-tab.on { background: var(--c); border-color: var(--c); color: #fff; } .tb-tab.on .dot { background: #fff !important; }
        .tb-panel { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: clamp(24px,3vw,52px); background: #fff; border: 1px solid rgba(8,33,60,0.1); border-radius: 24px; padding: clamp(28px,3vw,52px); box-shadow: 0 20px 52px -30px rgba(8,33,60,0.28); }
        @media (max-width: 820px) { .tb-panel { grid-template-columns: 1fr; } }
        .tb-side { border-right: 1px solid rgba(8,33,60,0.1); padding-right: clamp(20px,2vw,32px); }
        @media (max-width: 820px) { .tb-side { border-right: none; border-bottom: 1px solid rgba(8,33,60,0.1); padding-right: 0; padding-bottom: 20px; } }
        .tb-side-n { font-size: clamp(54px,7vw,104px); font-weight: 900; letter-spacing: -0.06em; color: var(--c); line-height: 0.8; }
        .tb-side-l { font-size: 11px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; word-spacing: 0.14em; color: rgba(8,33,60,0.42); margin: 8px 0 16px; }
        .tb-side-h { font-size: clamp(20px,2vw,30px); font-weight: 900; letter-spacing: 0.01em; text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; margin: 0; line-height: 1.12; }
        .tb-items-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(14px,1.8vw,22px); }
        @media (max-width: 520px) { .tb-items-grid { grid-template-columns: 1fr; } }
        .tb-item { display: flex; gap: 14px; align-items: flex-start; }
        .tb-item-ic { width: 44px; height: 44px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tb-item-nm { font-size: clamp(15px,1.2vw,18px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY}; }
        .tb-item-d { font-size: 13px; line-height: 1.6; color: rgba(8,33,60,0.55); margin-top: 3px; }

        /* ── Living tile wall ── */
        .wall { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(12px,1.4vw,18px); height: clamp(420px,54vh,580px); overflow: hidden;
          -webkit-mask: linear-gradient(180deg, transparent, #000 11%, #000 89%, transparent); mask: linear-gradient(180deg, transparent, #000 11%, #000 89%, transparent); }
        @media (max-width: 640px) { .wall { grid-template-columns: repeat(2,1fr); } .wall-col:last-child { display: none; } }
        .wall-col { overflow: hidden; }
        .wall-track { display: flex; flex-direction: column; gap: clamp(12px,1.4vw,18px); will-change: transform; transition: opacity 0.3s; }
        @keyframes wall-up { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes wall-down { from { transform: translateY(-50%); } to { transform: translateY(0); } }
        .wall:hover .wall-col:not(:hover) .wall-track { opacity: 0.4; }
        .wall-col:hover .wall-track { animation-play-state: paused !important; }
        .wall-tile { display: flex; align-items: center; gap: 14px; background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 16px; padding: 18px; box-shadow: 0 4px 20px rgba(8,33,60,0.05); }
        .wall-ic { width: 44px; height: 44px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .wall-nm { font-size: clamp(14px,1.1vw,16px); font-weight: 800; color: ${NAVY}; letter-spacing: -0.02em; line-height: 1.15; }
        .wall-fd { font-size: 10.5px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; word-spacing: 0.14em; margin-top: 3px; }

        @media (prefers-reduced-motion: reduce) { .wall-track { animation: none !important; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="in-shell in-hero">
        <Reveal>
          <Eyebrow>Industries</Eyebrow>
          <h1 className="in-h1">Tailored for<br />every <span>industry.</span></h1>
          <p className="in-intro">
            Every industry faces unique challenges, opportunities and goals. We deliver customised digital
            transformation, cloud, security, development and business solutions - so you operate smarter, grow faster
            and stay ahead.
          </p>
        </Reveal>
      </section>

      {/* ── Periodic table (primary) ── */}
      <section className="in-sec" style={{ background: '#fff' }}>
        <div className="in-shell">
          <Reveal className="in-head">
            <Eyebrow>The EG industry table</Eyebrow>
            <h2 className="in-h2">14 sectors,<br />one <span>periodic table.</span></h2>
            <p className="in-lead">Every sector we serve as an element - colour-coded by field. Hover a tile to load its profile.</p>
          </Reveal>
          <PeriodicConcept />
        </div>
      </section>

      {/* ── Explore by field ── */}
      <section className="in-sec" style={{ background: CREAM }}>
        <div className="in-shell">
          <Reveal className="in-head">
            <Eyebrow>Explore by field</Eyebrow>
            <h2 className="in-h2">Grouped by<br />what you <span>do.</span></h2>
            <p className="in-lead">Pick a field to see the sectors within it and how we help each one.</p>
          </Reveal>
          <TabsConcept />
        </div>
      </section>

      {/* ── Every sector, in motion ── */}
      <section className="in-sec" style={{ background: '#fff' }}>
        <div className="in-shell">
          <Reveal className="in-head">
            <Eyebrow>Every sector, covered</Eyebrow>
            <h2 className="in-h2">A whole world<br />of <span>work.</span></h2>
            <p className="in-lead">Hover any column to pause it and read the tiles.</p>
          </Reveal>
          <WallConcept />
        </div>
      </section>

      <PageCTA eyebrow="Your Sector, Our Expertise" heading="Don't see" highlight="yours?" button="Let's talk" />
    </PageLayout>
  )
}
