import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase, Cpu, Rocket, HeartHandshake, Stethoscope, Landmark, Factory,
  GraduationCap, Building2, Truck, Plane, Sprout, Hotel, UtensilsCrossed,
  Search, X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM, EASE } from './_kit'

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
  { icon: Stethoscope, name: 'Healthcare', sym: 'Hc', field: 'Public & Social', detail: 'Compliant patient systems and secure, private data.' },
  { icon: GraduationCap, name: 'Education', sym: 'Ed', field: 'Public & Social', detail: 'Learning portals and student management platforms.' },
  { icon: HeartHandshake, name: 'Non-Profit Organizations', sym: 'Np', field: 'Public & Social', detail: 'Donor platforms and discounted Microsoft licensing.' },
  { icon: Landmark, name: 'Banking & Financial Services', sym: 'Bk', field: 'Commerce & Finance', detail: 'Secure, audited fintech and live reporting.' },
  { icon: Building2, name: 'Real Estate', sym: 'Re', field: 'Commerce & Finance', detail: 'Listing platforms and CRM automation.' },
  { icon: Briefcase, name: 'Professional Services', sym: 'Ps', field: 'Commerce & Finance', detail: 'Client portals, billing and workflow automation.' },
  { icon: Rocket, name: 'Startups & SMEs', sym: 'St', field: 'Commerce & Finance', detail: 'MVPs and growth tooling that ship fast.' },
  { icon: Cpu, name: 'IT', sym: 'It', field: 'Industrial & Tech', detail: 'Scalable platforms, DevOps and managed cloud.' },
  { icon: Factory, name: 'Manufacturing', sym: 'Mf', field: 'Industrial & Tech', detail: 'ERP, IoT dashboards and supply visibility.' },
  { icon: Truck, name: 'Logistics & Supply Chain', sym: 'Lg', field: 'Industrial & Tech', detail: 'Tracking, routing and inventory systems.' },
  { icon: Sprout, name: 'Agriculture', sym: 'Ag', field: 'Industrial & Tech', detail: 'Field sensors, data capture and analytics.' },
  { icon: Plane, name: 'Travel & Tourism', sym: 'Tr', field: 'Lifestyle & Travel', detail: 'Booking engines and itinerary apps.' },
  { icon: Hotel, name: 'Hospitality', sym: 'Hs', field: 'Lifestyle & Travel', detail: 'Reservations, POS and guest experience.' },
  { icon: UtensilsCrossed, name: 'Food & Beverage', sym: 'Fb', field: 'Lifestyle & Travel', detail: 'Ordering, delivery and loyalty apps.' },
]
const TOTAL = INDUSTRIES.length

function ConceptLabel({ n, title, note, light }: { n: string; title: string; note: string; light?: boolean }) {
  const c2 = light ? '#fff' : NAVY
  const c3 = light ? 'rgba(255,255,255,0.6)' : 'rgba(8,33,60,0.55)'
  return (
    <div style={{ marginBottom: 'clamp(28px,4vw,52px)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.6px', textTransform: 'uppercase', color: GREEN }}>
        <span style={{ width: 22, height: 2, background: GREEN }} />Concept {n}
      </div>
      <h2 style={{ fontSize: 'clamp(28px,3.4vw,52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.96, color: c2, margin: '12px 0 8px', textTransform: 'uppercase' }}>{title}</h2>
      <p style={{ fontSize: 'clamp(14px,1.05vw,16px)', color: c3, margin: 0, maxWidth: '62ch', lineHeight: 1.7 }}>{note}</p>
    </div>
  )
}

/* ═════════════════ CONCEPT 00 - Explorer (search + filter) ═════════════════ */
function ExplorerConcept() {
  const [query, setQuery] = useState('')
  const [field, setField] = useState<Field | 'All'>('All')
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return INDUSTRIES.filter(ind => {
      const mf = field === 'All' || ind.field === field
      const mq = !q || ind.name.toLowerCase().includes(q) || ind.detail.toLowerCase().includes(q) || ind.field.toLowerCase().includes(q)
      return mf && mq
    })
  }, [query, field])
  const counts = useMemo(() => {
    const m: Record<string, number> = { All: TOTAL }
    FIELDS.forEach(f => { m[f.label] = INDUSTRIES.filter(i => i.field === f.label).length })
    return m
  }, [])
  return (
    <div className="ex">
      <div className="ex-bar">
        <div className="ex-search">
          <Search className="s" size={18} />
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search industries…" aria-label="Search industries" />
          {query && <button className="ex-clear" onClick={() => setQuery('')} aria-label="Clear"><X size={15} /></button>}
        </div>
        <div className="ex-chips">
          <button className={`ex-chip${field === 'All' ? ' on' : ''}`} onClick={() => setField('All')}>All <span className="cnt">{counts.All}</span></button>
          {FIELDS.map(f => (
            <button key={f.label} className={`ex-chip${field === f.label ? ' on' : ''}`} onClick={() => setField(f.label)}>
              <span className="dot" style={{ background: f.color }} />{f.label} <span className="cnt">{counts[f.label]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="ex-count">Showing <b>{filtered.length}</b> of {TOTAL}</div>
      <motion.div layout className="ex-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map(ind => {
            const Ic = ind.icon; const c = FIELD_COLOR[ind.field]
            return (
              <motion.article key={ind.name} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3, ease: EASE }} className="ex-card" style={{ ['--c' as string]: c }}>
                <div className="ex-card-top">
                  <div className="ex-ic" style={{ background: `color-mix(in srgb, ${c} 13%, transparent)`, color: c }}><Ic size={22} /></div>
                  <span className="ex-field" style={{ color: c }}>{ind.field}</span>
                </div>
                <h3 className="ex-name">{ind.name}</h3>
                <p className="ex-detail">{ind.detail}</p>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

/* ═════════════════ CONCEPT 01 - Periodic table ═════════════════ */
function PeriodicConcept() {
  const [i, setI] = useState(0)
  const a = INDUSTRIES[i]; const c = FIELD_COLOR[a.field]
  return (
    <div className="pt">
      <div className="pt-table">
        {INDUSTRIES.map((ind, idx) => {
          const fc = FIELD_COLOR[ind.field]
          return (
            <button key={ind.name} className={`pt-tile${idx === i ? ' on' : ''}`} style={{ ['--c' as string]: fc }} onMouseEnter={() => setI(idx)} onClick={() => setI(idx)}>
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
  )
}

/* ═════════════════ CONCEPT 02 - Isometric sector map ═════════════════ */
function IsoConcept() {
  const [i, setI] = useState(0)
  const a = INDUSTRIES[i]; const c = FIELD_COLOR[a.field]
  return (
    <div className="iso">
      <div className="iso-stage">
        <div className="iso-plane">
          {INDUSTRIES.map((ind, idx) => {
            const fc = FIELD_COLOR[ind.field]
            return (
              <button key={ind.name} className={`iso-block${idx === i ? ' on' : ''}`} style={{ ['--c' as string]: fc }} onMouseEnter={() => setI(idx)} onClick={() => setI(idx)} aria-label={ind.name}>
                <span>{ind.sym}</span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="iso-cap" style={{ ['--c' as string]: c }}>
        <span className="iso-cap-dot" />
        <div>
          <div className="iso-cap-field">{a.field}</div>
          <div className="iso-cap-name">{a.name}</div>
          <div className="iso-cap-detail">{a.detail}</div>
        </div>
      </div>
    </div>
  )
}

/* ═════════════════ CONCEPT 03 - Living tile wall ═════════════════ */
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

/* ═════════════════ CONCEPT 04 - Field tabs + spotlight ═════════════════ */
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

export function Industries() {
  return (
    <PageLayout>
      <style>{`
        .in-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .in-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .in-shell { max-width: 2440px; } }
        .in-sec { padding: clamp(56px,7vw,116px) 0; }
        .in-hero { padding: clamp(40px,6vw,96px) 0 clamp(20px,3vw,32px); }
        .in-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .in-h1 span { color: ${GREEN}; }
        .in-intro { max-width: 620px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }

        /* ── 00 Explorer ── */
        .ex-bar { display: flex; align-items: center; gap: clamp(14px,2vw,28px); flex-wrap: wrap; margin-bottom: 8px; }
        .ex-search { position: relative; flex: 1 1 260px; min-width: 200px; }
        .ex-search svg.s { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: rgba(8,33,60,0.4); }
        .ex-search input { width: 100%; box-sizing: border-box; font-family: inherit; font-size: 15px; color: ${NAVY}; background: #fff; border: 1px solid rgba(8,33,60,0.14); border-radius: 100px; padding: 13px 44px; outline: none; min-height: 48px; transition: border-color 0.2s, box-shadow 0.2s; }
        .ex-search input:focus { border-color: ${GREEN}; box-shadow: 0 0 0 3px rgba(60,185,140,0.16); }
        .ex-clear { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); width: 28px; height: 28px; border: none; background: rgba(8,33,60,0.06); color: rgba(8,33,60,0.55); border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .ex-chips { display: flex; gap: 8px; flex-wrap: wrap; }
        .ex-chip { display: inline-flex; align-items: center; gap: 8px; font-family: inherit; font-size: 13px; font-weight: 800; padding: 10px 16px; border-radius: 100px; min-height: 44px; cursor: pointer; border: 1px solid rgba(8,33,60,0.14); background: #fff; color: rgba(8,33,60,0.6); transition: all 0.2s; }
        .ex-chip:hover { color: ${NAVY}; border-color: rgba(8,33,60,0.28); }
        .ex-chip .dot { width: 9px; height: 9px; border-radius: 3px; } .ex-chip .cnt { font-size: 11px; opacity: 0.6; font-variant-numeric: tabular-nums; }
        .ex-chip.on { background: ${NAVY}; color: #fff; border-color: ${NAVY}; }
        .ex-count { padding: clamp(18px,2.2vw,28px) 0 clamp(14px,1.6vw,18px); font-size: 13px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; color: rgba(8,33,60,0.42); }
        .ex-count b { color: ${NAVY}; }
        .ex-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(14px,1.8vw,24px); }
        @media (max-width: 1000px) { .ex-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .ex-grid { grid-template-columns: 1fr; } }
        .ex-card { position: relative; overflow: hidden; background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 20px; padding: clamp(22px,2.2vw,30px); box-shadow: 0 4px 22px rgba(8,33,60,0.05); display: flex; flex-direction: column; gap: 13px; }
        .ex-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; transform: scaleY(0); transform-origin: top; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); background: var(--c); }
        .ex-card:hover { transform: translateY(-5px); box-shadow: 0 24px 54px rgba(8,33,60,0.13); border-color: color-mix(in srgb, var(--c) 35%, transparent); }
        .ex-card:hover::before { transform: scaleY(1); }
        .ex-card-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .ex-ic { width: 48px; height: 48px; border-radius: 13px; display: flex; align-items: center; justify-content: center; }
        .ex-field { font-size: 10.5px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; }
        .ex-name { font-size: clamp(17px,1.4vw,22px); font-weight: 900; letter-spacing: -0.03em; color: ${NAVY}; margin: 0; line-height: 1.1; }
        .ex-detail { font-size: clamp(13px,1vw,15px); line-height: 1.6; color: rgba(8,33,60,0.55); margin: 0; }

        /* ── 01 Periodic table ── */
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
        .pt-readout { position: relative; overflow: hidden; background: #fff; border: 1px solid rgba(8,33,60,0.1); border-top: 4px solid var(--c); border-radius: 20px; padding: clamp(24px,2.6vw,36px); min-height: 240px; box-shadow: 0 20px 50px -28px rgba(8,33,60,0.3); }
        .pt-r-bgnum { position: absolute; right: -6px; bottom: -28px; font-size: clamp(120px,16vw,200px); font-weight: 900; letter-spacing: -0.06em; color: color-mix(in srgb, var(--c) 8%, transparent); line-height: 0.8; }
        .pt-r-sym { font-size: clamp(48px,6vw,84px); font-weight: 900; letter-spacing: -0.05em; color: var(--c); line-height: 0.9; }
        .pt-r-field { font-size: 11px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: var(--c); margin: 14px 0 6px; }
        .pt-r-name { font-size: clamp(22px,2.2vw,32px); font-weight: 900; letter-spacing: -0.03em; color: ${NAVY}; margin: 0 0 12px; text-transform: uppercase; line-height: 1; }
        .pt-r-detail { font-size: clamp(14px,1.05vw,16px); line-height: 1.7; color: rgba(8,33,60,0.6); margin: 0; max-width: 36ch; }

        /* ── 02 Isometric map ── */
        .iso { display: flex; flex-direction: column; align-items: center; gap: clamp(24px,4vw,48px); }
        .iso-stage { perspective: 1300px; width: 100%; display: flex; justify-content: center; padding: clamp(20px,4vw,50px) 0; }
        .iso-plane { transform: rotateX(54deg) rotateZ(45deg); transform-style: preserve-3d; display: grid; grid-template-columns: repeat(4, clamp(58px,6vw,88px)); gap: clamp(14px,1.6vw,22px); }
        @media (max-width: 560px) { .iso-plane { grid-template-columns: repeat(3, 64px); transform: rotateX(52deg) rotateZ(45deg); } }
        .iso-block { aspect-ratio: 1/1; border-radius: 12px; background: var(--c); color: #fff; font-weight: 900; font-size: clamp(14px,1.4vw,20px); letter-spacing: -0.03em;
          display: flex; align-items: center; justify-content: center; cursor: pointer; border: none; font-family: inherit;
          box-shadow: 7px 7px 0 0 color-mix(in srgb, var(--c) 55%, #000); transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s, filter 0.28s; will-change: transform; }
        .iso-block:hover, .iso-block.on { transform: translate(-7px,-7px); box-shadow: 16px 16px 0 0 color-mix(in srgb, var(--c) 55%, #000); }
        .iso-block.on { filter: saturate(1.15) brightness(1.06); }
        .iso-cap { display: flex; align-items: center; gap: 16px; background: #fff; border: 1px solid rgba(8,33,60,0.1); border-left: 4px solid var(--c); border-radius: 16px; padding: 18px 26px; box-shadow: 0 16px 40px -22px rgba(8,33,60,0.3); max-width: 560px; }
        .iso-cap-dot { width: 14px; height: 14px; border-radius: 5px; background: var(--c); flex-shrink: 0; }
        .iso-cap-field { font-size: 11px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; color: var(--c); }
        .iso-cap-name { font-size: clamp(18px,1.8vw,26px); font-weight: 900; letter-spacing: -0.03em; color: ${NAVY}; line-height: 1.1; }
        .iso-cap-detail { font-size: 14px; color: rgba(8,33,60,0.55); margin-top: 2px; }

        /* ── 03 Living tile wall ── */
        .wall { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(12px,1.4vw,18px); height: clamp(420px,54vh,580px); overflow: hidden;
          -webkit-mask: linear-gradient(180deg, transparent, #000 11%, #000 89%, transparent); mask: linear-gradient(180deg, transparent, #000 11%, #000 89%, transparent); }
        @media (max-width: 640px) { .wall { grid-template-columns: repeat(2,1fr); } .wall-col:last-child { display: none; } }
        .wall-col { overflow: hidden; }
        .wall-track { display: flex; flex-direction: column; gap: clamp(12px,1.4vw,18px); will-change: transform; }
        @keyframes wall-up { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes wall-down { from { transform: translateY(-50%); } to { transform: translateY(0); } }
        .wall:hover .wall-col:not(:hover) .wall-track { opacity: 0.4; }
        .wall-col:hover .wall-track { animation-play-state: paused !important; }
        .wall-track { transition: opacity 0.3s; }
        .wall-tile { display: flex; align-items: center; gap: 14px; background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 16px; padding: 18px; box-shadow: 0 4px 20px rgba(8,33,60,0.05); }
        .wall-ic { width: 44px; height: 44px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .wall-nm { font-size: clamp(14px,1.1vw,16px); font-weight: 800; color: ${NAVY}; letter-spacing: -0.02em; line-height: 1.15; }
        .wall-fd { font-size: 10.5px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; margin-top: 3px; }

        /* ── 04 Field tabs ── */
        .tb-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: clamp(20px,2.4vw,32px); }
        .tb-tab { display: inline-flex; align-items: center; gap: 9px; font-family: inherit; font-size: 13.5px; font-weight: 800; padding: 12px 20px; border-radius: 100px; min-height: 46px; cursor: pointer; border: 1px solid rgba(8,33,60,0.14); background: #fff; color: rgba(8,33,60,0.6); transition: all 0.2s; }
        .tb-tab .dot { width: 9px; height: 9px; border-radius: 3px; }
        .tb-tab.on { background: var(--c); border-color: var(--c); color: #fff; } .tb-tab.on .dot { background: #fff !important; }
        .tb-panel { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: clamp(24px,3vw,52px); background: #fff; border: 1px solid rgba(8,33,60,0.1); border-radius: 24px; padding: clamp(28px,3vw,52px); box-shadow: 0 20px 52px -30px rgba(8,33,60,0.28); }
        @media (max-width: 820px) { .tb-panel { grid-template-columns: 1fr; } }
        .tb-side { border-right: 1px solid rgba(8,33,60,0.1); padding-right: clamp(20px,2vw,32px); }
        @media (max-width: 820px) { .tb-side { border-right: none; border-bottom: 1px solid rgba(8,33,60,0.1); padding-right: 0; padding-bottom: 20px; } }
        .tb-side-n { font-size: clamp(54px,7vw,104px); font-weight: 900; letter-spacing: -0.06em; color: var(--c); line-height: 0.8; }
        .tb-side-l { font-size: 11px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: rgba(8,33,60,0.42); margin: 8px 0 16px; }
        .tb-side-h { font-size: clamp(20px,2vw,30px); font-weight: 900; letter-spacing: -0.03em; text-transform: uppercase; color: ${NAVY}; margin: 0; line-height: 1; }
        .tb-items-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(14px,1.8vw,22px); }
        @media (max-width: 520px) { .tb-items-grid { grid-template-columns: 1fr; } }
        .tb-item { display: flex; gap: 14px; align-items: flex-start; }
        .tb-item-ic { width: 44px; height: 44px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tb-item-nm { font-size: clamp(15px,1.2vw,18px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY}; }
        .tb-item-d { font-size: 13px; line-height: 1.6; color: rgba(8,33,60,0.55); margin-top: 3px; }

        @media (prefers-reduced-motion: reduce) { .wall-track { animation: none !important; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="in-shell in-hero">
        <Reveal>
          <Eyebrow>Industries</Eyebrow>
          <h1 className="in-h1">Built for<br />your <span>world.</span></h1>
          <p className="in-intro">
            Four directions for this page, shown below - pick the one you like and I'll keep it and
            drop the rest. Same fourteen sectors throughout.
          </p>
        </Reveal>
      </section>

      <section className="in-sec" style={{ background: '#fff' }}>
        <div className="in-shell"><ConceptLabel n="00" title="Explorer (current)" note="A live directory - search by name and filter by field; the grid reflows as you go." /><ExplorerConcept /></div>
      </section>

      <section className="in-sec" style={{ background: CREAM }}>
        <div className="in-shell"><ConceptLabel n="01" title="Periodic Table" note="Sectors as elements - number, symbol, name, colour-coded by field. Hover a tile to load its readout." /><PeriodicConcept /></div>
      </section>

      <section className="in-sec" style={{ background: '#fff' }}>
        <div className="in-shell"><ConceptLabel n="02" title="Isometric Sector Map" note="Raised 3D blocks on a tilted plane. Hover a block - it lifts and its detail appears below." /><IsoConcept /></div>
      </section>

      <section className="in-sec" style={{ background: CREAM }}>
        <div className="in-shell"><ConceptLabel n="03" title="Living Tile Wall" note="Three columns drifting at different speeds. Hover a column to pause it and spotlight the tiles." /><WallConcept /></div>
      </section>

      <section className="in-sec" style={{ background: '#fff' }}>
        <div className="in-shell"><ConceptLabel n="04" title="Field Tabs + Spotlight" note="The four fields as tabs - pick one and its sectors animate in beside a big field marker." /><TabsConcept /></div>
      </section>

      <PageCTA eyebrow="Your Sector, Our Expertise" heading="Don't see" highlight="yours?" button="Let's talk" />
    </PageLayout>
  )
}
