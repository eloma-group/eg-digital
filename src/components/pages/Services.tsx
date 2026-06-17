import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw, Cloud, Server, Headphones, ChevronLeft, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM, EASE } from './_kit'
import { SERVICE_SECTIONS } from '../../lib/sectionRoutes'

type Kind = 'upg' | 'cloud' | 'srv' | 'sup'
type Cap = { title: string; detail: string }
type Service = {
  label: string; short: string; icon: LucideIcon; kind: Kind; color: string
  lead: string; body: string; caps: Cap[]; status: string; metrics: [string, string][]
}

const SERVICES: Service[] = [
  {
    label: 'Upgrades', short: 'Upgrades', icon: RefreshCw, kind: 'upg', color: GREEN,
    lead: 'Modernise without the downtime.',
    body: 'We move legacy systems onto current, supported frameworks - carefully phased so your business keeps running while it happens. No big-bang risk, no data loss.',
    caps: [
      { title: 'Framework migrations', detail: 'Move to current, supported stacks before end-of-life bites.' },
      { title: 'Legacy modernisation', detail: 'Refactor brittle systems into maintainable, documented code.' },
      { title: 'Zero-downtime rollouts', detail: 'Phased, reversible releases that keep you trading.' },
      { title: 'Hardening', detail: 'Close security gaps and tune speed with every upgrade.' },
    ],
    status: 'Last upgrade shipped clean',
    metrics: [['Migrations', '120+'], ['Rollbacks', '0%'], ['Downtime', '0 min']],
  },
  {
    label: 'Cloud Maintenances', short: 'Cloud', icon: Cloud, kind: 'cloud', color: '#0078d4',
    lead: 'A cloud that stays fast and lean.',
    body: 'Proactive monitoring, scaling and optimisation across Azure and AWS. We keep your cloud secure and performant - and stop surprise bills before they land.',
    caps: [
      { title: 'Azure & AWS management', detail: 'Day-to-day operation of your cloud, fully handled.' },
      { title: 'Auto-scaling', detail: 'Capacity that flexes with demand, automatically.' },
      { title: 'Cost optimisation', detail: 'Right-sizing and reserved planning that stops bill shock.' },
      { title: 'Backup & recovery', detail: 'Tested restores and alerts before issues reach users.' },
    ],
    status: 'Autoscaling active',
    metrics: [['Uptime', '99.98%'], ['Cost', '-31%'], ['Regions', '6']],
  },
  {
    label: 'Server Maintenances', short: 'Server', icon: Server, kind: 'srv', color: '#6366f1',
    lead: 'Infrastructure that just stays up.',
    body: 'Patching, backups, uptime monitoring and performance tuning that keep your servers rock solid - so your team never thinks about the box under the hood.',
    caps: [
      { title: 'Scheduled patching', detail: 'OS and software kept current on a predictable cadence.' },
      { title: 'Automated backups', detail: 'Nightly backups with regular, verified restore drills.' },
      { title: '24/7 monitoring', detail: 'We see the alert before your customers ever do.' },
      { title: 'Capacity planning', detail: 'Tuning and headroom so nothing ever slows down.' },
    ],
    status: 'Monitoring 24/7',
    metrics: [['Uptime', '99.99%'], ['Patches', 'current'], ['Backups', '04:00']],
  },
  {
    label: 'Support Services', short: 'Support', icon: Headphones, kind: 'sup', color: '#d97706',
    lead: 'Real people who know your stack.',
    body: 'Responsive, senior-led support with clear SLAs. When something needs attention, you reach an engineer who already understands your setup - not a script.',
    caps: [
      { title: 'Measurable SLAs', detail: 'Response and resolution targets agreed in writing.' },
      { title: 'Senior-led support', detail: 'Reach an engineer who knows your stack, not a script.' },
      { title: 'Priority response', detail: 'Critical issues jump the queue and get owned.' },
      { title: 'Ongoing advisory', detail: 'Proactive guidance, not just break-fix tickets.' },
    ],
    status: 'Queue clear',
    metrics: [['SLA met', '99.4%'], ['Response', '<15m'], ['CSAT', '4.9']],
  },
]

const N = SERVICES.length

/* ───────────────────────── Themed ambient stage (shared) ───────────────────────── */
function ServiceStage({ kind, color }: { kind: Kind; color: string }) {
  return (
    <div className={`svs-stage svs-${kind}`} style={{ ['--c' as string]: color }} aria-hidden="true">
      {kind === 'upg' && (
        <div className="svs-upg"><span className="svs-upg-halo" /><div className="svs-upg-ring" />
          <svg className="svs-upg-up" viewBox="0 0 24 24" width="34" height="34" fill="none"><path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>)}
      {kind === 'cloud' && (
        <div className="svs-cloud"><span className="svs-cl-pulse" /><div className="svs-cl-orbit"><span /><span /><span /></div>
          <svg className="svs-cl-shape" viewBox="0 0 120 72"><g fill="currentColor"><circle cx="38" cy="44" r="20" /><circle cx="64" cy="34" r="26" /><circle cx="88" cy="46" r="18" /><rect x="22" y="44" width="78" height="22" rx="11" /></g><circle cx="58" cy="30" r="9" fill="#fff" fillOpacity="0.22" /></svg>
        </div>)}
      {kind === 'srv' && (
        <div className="svs-srv"><div className="svs-srv-rack">{[0, 1, 2, 3].map(u => <div key={u} className="svs-srv-u"><i /><b /><b /><b /></div>)}<span className="svs-srv-scan" /></div></div>)}
      {kind === 'sup' && (
        <div className="svs-sup"><span className="svs-sup-on" /><div className="svs-sup-chat"><span className="svs-bub b1" /><span className="svs-bub b2" /><div className="svs-typing"><i /><i /><i /></div></div></div>)}
    </div>
  )
}

function CapList({ caps, color, light }: { caps: Cap[]; color: string; light?: boolean }) {
  return (
    <div className="cmn-caps">
      {caps.map(c => (
        <div key={c.title}>
          <div className="cmn-cap-t" style={{ color: light ? '#fff' : NAVY }}>
            <i style={{ background: `color-mix(in srgb, ${color} 26%, transparent)`, color: light ? '#fff' : color }}>✓</i>{c.title}
          </div>
          <p className="cmn-cap-d" style={{ color: light ? 'rgba(255,255,255,0.55)' : 'rgba(8,33,60,0.55)' }}>{c.detail}</p>
        </div>
      ))}
    </div>
  )
}

function ConceptLabel({ n, title, note, light }: { n: string; title: string; note: string; light?: boolean }) {
  const c1 = light ? 'rgba(255,255,255,0.5)' : 'rgba(8,33,60,0.42)'
  const c2 = light ? '#fff' : NAVY
  const c3 = light ? 'rgba(255,255,255,0.6)' : 'rgba(8,33,60,0.55)'
  return (
    <div style={{ marginBottom: 'clamp(28px,4vw,52px)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.6px', textTransform: 'uppercase', color: GREEN }}>
        <span style={{ width: 22, height: 2, background: GREEN }} />Concept {n}
      </div>
      <h2 style={{ fontSize: 'clamp(28px,3.4vw,52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.96, color: c2, margin: '12px 0 8px', textTransform: 'uppercase' }}>{title}</h2>
      <p style={{ fontSize: 'clamp(14px,1.05vw,16px)', color: c3, margin: 0, maxWidth: '60ch', lineHeight: 1.7 }}>{note}<span style={{ color: c1 }}></span></p>
    </div>
  )
}

/* ═════════════════ CONCEPT 1 - Ops control-room (dark) ═════════════════ */
function ControlRoom() {
  const [i, setI] = useState(0)
  const s = SERVICES[i]
  return (
    <div className="cr" style={{ ['--c' as string]: s.color }}>
      <div className="cr-tabs">
        {SERVICES.map((sv, idx) => {
          const Ic = sv.icon
          return (
            <button key={sv.label} className={`cr-tab${idx === i ? ' on' : ''}`} onClick={() => setI(idx)} style={{ ['--c' as string]: sv.color }}>
              <span className="cr-tab-ic"><Ic size={16} /></span>
              <span className="cr-tab-l">{sv.short}</span>
              <span className="cr-tab-dot" />
            </button>
          )
        })}
      </div>
      <div className="cr-main">
        <div className="cr-monitor">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <ServiceStage kind={s.kind} color={s.color} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="cr-readout">
          <div className="cr-status"><span className="cr-led" />SYSTEMS · {s.status.toUpperCase()}</div>
          <h3 className="cr-h">{s.label}</h3>
          <p className="cr-body">{s.body}</p>
          <div className="cr-metrics">
            {s.metrics.map(([l, v]) => (
              <div key={l} className="cr-metric"><div className="cr-metric-v">{v}</div><div className="cr-metric-l">{l}</div></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═════════════════ CONCEPT 2 - Orbit system (light) ═════════════════ */
const ORBIT_POS = [
  { top: '4%', left: '50%' }, { top: '50%', left: '94%' },
  { top: '96%', left: '50%' }, { top: '50%', left: '6%' },
]
function OrbitSystem() {
  const [i, setI] = useState(0)
  const s = SERVICES[i]
  return (
    <div className="orb">
      <div className="orb-stage">
        <div className="orb-ring" /><div className="orb-ring orb-ring2" />
        <div className="orb-hub"><span>EG</span><small>always-on</small></div>
        {SERVICES.map((sv, idx) => {
          const Ic = sv.icon
          return (
            <button key={sv.label} className={`orb-node${idx === i ? ' on' : ''}`} onClick={() => setI(idx)} onMouseEnter={() => setI(idx)}
              style={{ top: ORBIT_POS[idx].top, left: ORBIT_POS[idx].left, ['--c' as string]: sv.color }}>
              <Ic size={20} /><span className="orb-node-l">{sv.short}</span>
            </button>
          )
        })}
      </div>
      <div className="orb-detail" style={{ ['--c' as string]: s.color }}>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.4, ease: EASE }}>
            <div className="orb-detail-head">
              <span className="orb-num" style={{ color: s.color }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className="orb-h">{s.label}</h3>
            </div>
            <div className="orb-stagebox"><ServiceStage kind={s.kind} color={s.color} /></div>
            <p className="orb-body">{s.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ═════════════════ CONCEPT 3 - Editorial hover-index (cream) ═════════════════ */
function HoverIndex() {
  const [i, setI] = useState(0)
  const s = SERVICES[i]
  return (
    <div className="hx">
      <ul className="hx-list">
        {SERVICES.map((sv, idx) => (
          <li key={sv.label} id={SERVICE_SECTIONS[sv.label]} className={`hx-row${idx === i ? ' on' : ''}`}
            onMouseEnter={() => setI(idx)} onClick={() => setI(idx)} style={{ ['--c' as string]: sv.color }}>
            <span className="hx-n">{String(idx + 1).padStart(2, '0')}</span>
            <span className="hx-name">{sv.label}</span>
            <span className="hx-lead">{sv.lead}</span>
          </li>
        ))}
      </ul>
      <div className="hx-preview" style={{ ['--c' as string]: s.color }}>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: EASE }} className="hx-prev-inner">
            <ServiceStage kind={s.kind} color={s.color} />
            <CapList caps={s.caps} color={s.color} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ═════════════════ CONCEPT 4 - Cinematic filmstrip ═════════════════ */
function Filmstrip() {
  const track = useRef<HTMLDivElement>(null)
  const [i, setI] = useState(0)
  const go = (idx: number) => {
    const el = track.current; if (!el) return
    const n = Math.max(0, Math.min(N - 1, idx))
    const slide = el.children[n] as HTMLElement
    if (slide) el.scrollTo({ left: slide.offsetLeft - 16, behavior: 'smooth' })
  }
  const onScroll = () => {
    const el = track.current; if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const idx = max > 0 ? Math.round((el.scrollLeft / max) * (N - 1)) : 0
    setI(idx)
  }
  return (
    <div className="fs">
      <div className="fs-track" ref={track} onScroll={onScroll}>
        {SERVICES.map(sv => {
          const Ic = sv.icon
          return (
            <article key={sv.label} className="fs-slide" style={{ ['--c' as string]: sv.color }}>
              <div className="fs-slide-l">
                <div className="fs-tag"><span className="ic" style={{ background: `${sv.color}1a`, color: sv.color }}><Ic size={18} /></span>{sv.short}</div>
                <h3 className="fs-h">{sv.lead}</h3>
                <p className="fs-body">{sv.body}</p>
                <CapList caps={sv.caps} color={sv.color} />
              </div>
              <div className="fs-slide-r"><ServiceStage kind={sv.kind} color={sv.color} /></div>
            </article>
          )
        })}
      </div>
      <div className="fs-nav">
        <div className="fs-dots">
          {SERVICES.map((sv, idx) => (
            <button key={sv.label} aria-label={sv.short} className={`fs-dot${idx === i ? ' on' : ''}`} onClick={() => go(idx)} style={{ ['--c' as string]: sv.color }} />
          ))}
        </div>
        <div className="fs-arrows">
          <button aria-label="Previous" className="fs-arrow" onClick={() => go(i - 1)} disabled={i === 0}><ChevronLeft size={18} /></button>
          <button aria-label="Next" className="fs-arrow" onClick={() => go(i + 1)} disabled={i === N - 1}><ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <PageLayout>
      <style>{`
        .sv-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .sv-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .sv-shell { max-width: 2440px; } }
        .sv-sec { padding: clamp(56px,7vw,120px) 0; }

        .sv-hero { padding: clamp(40px,6vw,96px) 0 clamp(28px,3vw,40px); }
        .sv-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .sv-h1 span { color: ${GREEN}; }
        .sv-intro { max-width: 640px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }

        .cmn-caps { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(14px,1.6vw,22px) clamp(20px,2.4vw,30px); }
        @media (max-width: 520px) { .cmn-caps { grid-template-columns: 1fr; } }
        .cmn-cap-t { display: flex; align-items: center; gap: 10px; font-size: clamp(14px,1.05vw,16px); font-weight: 800; margin: 0 0 5px; }
        .cmn-cap-t i { width: 19px; height: 19px; border-radius: 6px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; font-style: normal; }
        .cmn-cap-d { font-size: 13px; line-height: 1.6; margin: 0; padding-left: 29px; }

        /* ── CONCEPT 1: Control room (light) ── */
        .cr { border-radius: 26px; overflow: hidden; background: #fff; border: 1px solid rgba(8,33,60,0.1); box-shadow: 0 30px 70px -40px rgba(8,33,60,0.32); transition: box-shadow 0.4s; }
        .cr-tabs { display: grid; grid-template-columns: repeat(4,1fr); border-bottom: 1px solid rgba(8,33,60,0.1); }
        .cr-tab { display: flex; align-items: center; justify-content: center; gap: 9px; padding: 16px 12px; background: none; border: none; cursor: pointer; font-family: inherit; color: rgba(8,33,60,0.5); border-right: 1px solid rgba(8,33,60,0.08); position: relative; transition: color 0.25s, background 0.25s; }
        .cr-tab:last-child { border-right: none; }
        .cr-tab .cr-tab-ic { color: var(--c); opacity: 0.75; transition: opacity 0.25s; }
        .cr-tab-l { font-size: clamp(12px,1vw,15px); font-weight: 800; letter-spacing: 0.4px; text-transform: uppercase; }
        .cr-tab-dot { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--c); transform: scaleX(0); transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .cr-tab.on { color: ${NAVY}; background: color-mix(in srgb, var(--c) 6%, transparent); } .cr-tab.on .cr-tab-ic { opacity: 1; } .cr-tab.on .cr-tab-dot { transform: scaleX(1); }
        .cr-main { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px,3vw,52px); padding: clamp(28px,3.4vw,56px); align-items: center; }
        @media (max-width: 860px) { .cr-tabs { grid-template-columns: repeat(2,1fr); } .cr-main { grid-template-columns: 1fr; } }
        .cr-monitor { position: relative; display: flex; justify-content: center; }
        .cr-status { display: inline-flex; align-items: center; gap: 9px; font-size: clamp(10px,0.8vw,12px); font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: rgba(8,33,60,0.5); margin-bottom: 16px; }
        .cr-led { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 0 4px rgba(34,197,94,0.18); animation: cr-blink 2s ease-in-out infinite; }
        @keyframes cr-blink { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        .cr-h { font-size: clamp(28px,3.2vw,52px); font-weight: 900; letter-spacing: -0.04em; line-height: 0.96; text-transform: uppercase; color: ${NAVY}; margin: 0 0 14px; }
        .cr-body { font-size: clamp(14px,1.1vw,17px); line-height: 1.8; color: rgba(8,33,60,0.6); margin: 0 0 26px; max-width: 46ch; }
        .cr-metrics { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        .cr-metric { background: ${CREAM}; border: 1px solid rgba(8,33,60,0.08); border-radius: 14px; padding: 16px 14px; }
        .cr-metric-v { font-size: clamp(20px,2vw,30px); font-weight: 900; letter-spacing: -0.03em; color: var(--c); line-height: 1; }
        .cr-metric-l { font-size: 11px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; color: rgba(8,33,60,0.45); margin-top: 7px; }

        /* ── CONCEPT 2: Orbit ── */
        .orb { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px,4vw,72px); align-items: center; }
        @media (max-width: 900px) { .orb { grid-template-columns: 1fr; } }
        .orb-stage { position: relative; aspect-ratio: 1/1; max-width: 520px; width: 100%; margin: 0 auto; }
        .orb-ring { position: absolute; inset: 14%; border-radius: 50%; border: 1.5px dashed rgba(8,33,60,0.18); will-change: transform; animation: orb-spin 26s linear infinite; }
        .orb-ring2 { inset: 2%; border-style: solid; border-color: rgba(8,33,60,0.07); animation-duration: 40s; animation-direction: reverse; }
        @keyframes orb-spin { to { transform: rotate(360deg); } }
        .orb-hub { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: clamp(90px,12vw,130px); height: clamp(90px,12vw,130px); border-radius: 50%; background: ${NAVY}; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 20px 44px -18px rgba(8,33,60,0.6); }
        .orb-hub span { font-size: clamp(22px,2.4vw,34px); font-weight: 900; letter-spacing: -0.04em; }
        .orb-hub small { font-size: 9px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: ${GREEN}; margin-top: 2px; }
        .orb-node { position: absolute; transform: translate(-50%,-50%); width: clamp(74px,9vw,104px); height: clamp(74px,9vw,104px); border-radius: 50%; background: #fff; border: 1px solid rgba(8,33,60,0.1); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--c); font-family: inherit; box-shadow: 0 10px 26px -12px rgba(8,33,60,0.3); transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, border-color 0.3s; }
        .orb-node:hover { transform: translate(-50%,-50%) scale(1.06); }
        .orb-node.on { border-color: var(--c); box-shadow: 0 16px 36px -12px color-mix(in srgb, var(--c) 60%, transparent), 0 0 0 4px color-mix(in srgb, var(--c) 18%, transparent); transform: translate(-50%,-50%) scale(1.1); }
        .orb-node-l { font-size: 11px; font-weight: 800; letter-spacing: 0.4px; text-transform: uppercase; color: ${NAVY}; }
        .orb-detail { background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 24px; padding: clamp(26px,3vw,44px); box-shadow: 0 20px 52px -28px rgba(8,33,60,0.3); border-top: 4px solid var(--c); }
        .orb-detail-head { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
        .orb-num { font-size: clamp(28px,3vw,46px); font-weight: 900; letter-spacing: -0.05em; }
        .orb-h { font-size: clamp(22px,2.4vw,38px); font-weight: 900; letter-spacing: -0.03em; text-transform: uppercase; color: ${NAVY}; margin: 0; line-height: 1; }
        .orb-stagebox { display: flex; justify-content: center; margin-bottom: 22px; }
        .orb-stagebox .svs-stage { max-width: 360px; }
        .orb-body { font-size: clamp(14px,1.1vw,17px); line-height: 1.8; color: rgba(8,33,60,0.6); margin: 0; }

        /* ── CONCEPT 3: Hover index ── */
        .hx { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(24px,4vw,64px); align-items: start; }
        @media (max-width: 900px) { .hx { grid-template-columns: 1fr; } .hx-preview { display: none; } }
        .hx-list { list-style: none; margin: 0; padding: 0; }
        .hx-row { display: grid; grid-template-columns: auto 1fr; column-gap: 18px; align-items: baseline; padding: clamp(22px,3vw,40px) 8px; border-top: 1px solid rgba(8,33,60,0.14); cursor: pointer; scroll-margin-top: 90px; transition: padding-left 0.3s, opacity 0.3s; }
        .hx-row:last-child { border-bottom: 1px solid rgba(8,33,60,0.14); }
        .hx-row { opacity: 0.45; } .hx-row.on { opacity: 1; padding-left: 18px; }
        .hx-n { font-size: clamp(13px,1vw,15px); font-weight: 900; color: var(--c); font-variant-numeric: tabular-nums; }
        .hx-name { font-size: clamp(30px,5vw,82px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.92; text-transform: uppercase; color: ${NAVY}; grid-column: 2; }
        .hx-lead { grid-column: 2; font-size: clamp(13px,1vw,15px); font-weight: 600; color: rgba(8,33,60,0.5); margin-top: 8px; max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.4s, opacity 0.3s, margin-top 0.3s; }
        .hx-row.on .hx-lead { max-height: 40px; opacity: 1; }
        .hx-preview { position: sticky; top: 96px; background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 24px; padding: clamp(22px,2.4vw,34px); box-shadow: 0 20px 52px -28px rgba(8,33,60,0.3); border-top: 4px solid var(--c); }
        .hx-prev-inner { display: flex; flex-direction: column; gap: 22px; }
        .hx-prev-inner .svs-stage { max-width: 100%; }

        /* ── CONCEPT 4: Filmstrip ── */
        .fs-track { display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 4px 4px 18px; scrollbar-width: none; }
        .fs-track::-webkit-scrollbar { display: none; }
        .fs-slide { flex: 0 0 86%; scroll-snap-align: center; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: clamp(24px,3vw,56px); align-items: center; background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 24px; padding: clamp(28px,3.4vw,56px); box-shadow: 0 20px 52px -30px rgba(8,33,60,0.28); border-left: 4px solid var(--c); }
        @media (min-width: 1100px) { .fs-slide { flex-basis: 62%; } }
        @media (max-width: 760px) { .fs-slide { flex-basis: 88%; grid-template-columns: 1fr; } .fs-slide-r { display: none; } }
        .fs-slide-r { display: flex; justify-content: center; }
        .fs-tag { display: inline-flex; align-items: center; gap: 10px; font-size: clamp(11px,0.85vw,13px); font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: var(--c); margin-bottom: 16px; }
        .fs-tag .ic { width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .fs-h { font-size: clamp(26px,3vw,52px); font-weight: 900; letter-spacing: -0.04em; line-height: 0.96; text-transform: uppercase; color: ${NAVY}; margin: 0 0 16px; }
        .fs-body { font-size: clamp(14px,1.1vw,17px); line-height: 1.8; color: rgba(8,33,60,0.6); margin: 0 0 24px; max-width: 44ch; }
        .fs-nav { display: flex; align-items: center; justify-content: space-between; margin-top: 22px; padding: 0 4px; }
        .fs-dots { display: flex; gap: 9px; }
        .fs-dot { width: 28px; height: 6px; border-radius: 99px; border: none; background: rgba(8,33,60,0.16); cursor: pointer; transition: background 0.3s, width 0.3s; }
        .fs-dot.on { width: 44px; background: var(--c); }
        .fs-arrows { display: flex; gap: 10px; }
        .fs-arrow { width: 48px; height: 48px; border-radius: 50%; border: 1px solid rgba(8,33,60,0.16); background: #fff; color: ${NAVY}; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s, color 0.2s, opacity 0.2s; }
        .fs-arrow:hover { background: ${NAVY}; color: #fff; } .fs-arrow:disabled { opacity: 0.3; cursor: default; }

        /* ── shared stages ── */
        .svs-stage { position: relative; width: 100%; max-width: 420px; aspect-ratio: 1.35/1; border-radius: 20px; overflow: hidden; border: 1px solid rgba(8,33,60,0.08); background: radial-gradient(120% 110% at 82% 8%, color-mix(in srgb, var(--c) 18%, transparent), transparent 60%), linear-gradient(165deg,#ffffff,#eef1f5); display: flex; align-items: center; justify-content: center; box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 16px 36px -22px rgba(8,33,60,0.4); }
        .svs-upg { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--c); }
        .svs-upg-halo { position: absolute; width: 90px; height: 90px; border-radius: 50%; background: color-mix(in srgb, var(--c) 18%, transparent); animation: svs-halo 2.6s ease-in-out infinite; will-change: transform, opacity; }
        @keyframes svs-halo { 0%,100% { transform: scale(0.85); opacity: 0.5; } 50% { transform: scale(1.12); opacity: 0.9; } }
        .svs-upg-ring { position: absolute; width: 112px; height: 112px; border-radius: 50%; border: 5px solid color-mix(in srgb, var(--c) 22%, transparent); border-top-color: var(--c); border-right-color: var(--c); will-change: transform; animation: svs-spin 2.6s linear infinite; }
        @keyframes svs-spin { to { transform: rotate(360deg); } }
        .svs-upg-up { position: relative; color: var(--c); will-change: transform; animation: svs-bob 2.2s ease-in-out infinite; }
        @keyframes svs-bob { 0%,100% { transform: translateY(3px); } 50% { transform: translateY(-3px); } }
        .svs-cloud { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .svs-cl-pulse { position: absolute; width: 64px; height: 64px; border-radius: 50%; border: 2px solid var(--c); opacity: 0; will-change: transform, opacity; animation: svs-pulse 3.2s ease-out infinite; }
        @keyframes svs-pulse { 0% { transform: scale(0.6); opacity: 0.6; } 100% { transform: scale(3); opacity: 0; } }
        .svs-cl-shape { width: 156px; height: auto; color: var(--c); position: relative; z-index: 2; filter: drop-shadow(0 14px 22px color-mix(in srgb, var(--c) 45%, transparent)); will-change: transform; animation: svs-bob 4.5s ease-in-out infinite; }
        .svs-cl-orbit { position: absolute; width: 178px; height: 178px; will-change: transform; animation: svs-spin 9s linear infinite; }
        .svs-cl-orbit span { position: absolute; width: 12px; height: 12px; border-radius: 50%; background: var(--c); box-shadow: 0 0 0 4px color-mix(in srgb, var(--c) 20%, transparent); }
        .svs-cl-orbit span:nth-child(1) { top: -6px; left: calc(50% - 6px); } .svs-cl-orbit span:nth-child(2) { bottom: 6px; right: 2px; width: 9px; height: 9px; } .svs-cl-orbit span:nth-child(3) { bottom: 16px; left: 4px; width: 8px; height: 8px; }
        .svs-srv { perspective: 760px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .svs-srv-rack { position: relative; width: 58%; max-width: 220px; display: flex; flex-direction: column; gap: 8px; padding: 14px; border-radius: 12px; background: ${NAVY}; overflow: hidden; transform: rotateY(-15deg) rotateX(7deg); will-change: transform; animation: svs-rack 9s ease-in-out infinite; box-shadow: 0 30px 54px -24px rgba(8,33,60,0.55); }
        @keyframes svs-rack { 0%,100% { transform: rotateY(-15deg) rotateX(7deg); } 50% { transform: rotateY(-6deg) rotateX(3deg); } }
        .svs-srv-u { display: flex; align-items: center; gap: 7px; padding: 8px 9px; border-radius: 6px; background: rgba(255,255,255,0.05); }
        .svs-srv-u i { width: 8px; height: 8px; border-radius: 50%; background: var(--c); flex-shrink: 0; will-change: opacity; animation: svs-led 1.6s steps(1) infinite; }
        .svs-srv-u:nth-child(2) i { animation-delay: 0.4s; } .svs-srv-u:nth-child(3) i { animation-delay: 0.8s; } .svs-srv-u:nth-child(4) i { animation-delay: 1.2s; }
        @keyframes svs-led { 0%,60% { opacity: 1; } 60.01%,100% { opacity: 0.25; } }
        .svs-srv-u b { height: 5px; border-radius: 3px; background: rgba(255,255,255,0.16); flex: 1; } .svs-srv-u b:last-child { flex: 0 0 18px; }
        .svs-srv-scan { position: absolute; left: 0; right: 0; height: 22px; top: 0; background: linear-gradient(180deg, color-mix(in srgb, var(--c) 45%, transparent), transparent); will-change: transform; animation: svs-scan 3s ease-in-out infinite; }
        @keyframes svs-scan { 0% { transform: translateY(-22px); } 100% { transform: translateY(160px); } }
        .svs-sup { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .svs-sup-chat { width: 62%; max-width: 230px; background: #fff; border: 1px solid rgba(8,33,60,0.1); border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 18px 40px -20px rgba(8,33,60,0.4); }
        .svs-bub { height: 16px; border-radius: 9px; transform: scale(0.4); opacity: 0; transform-origin: left center; will-change: transform, opacity; animation: svs-pop 4.5s ease-in-out infinite; }
        .svs-bub.b1 { width: 70%; background: color-mix(in srgb, var(--c) 16%, #eef1f5); }
        .svs-bub.b2 { width: 55%; align-self: flex-end; transform-origin: right center; background: var(--c); animation-delay: 0.9s; }
        @keyframes svs-pop { 0%,8% { transform: scale(0.4); opacity: 0; } 16%,82% { transform: scale(1); opacity: 1; } 92%,100% { transform: scale(0.4); opacity: 0; } }
        .svs-typing { display: inline-flex; gap: 5px; align-self: flex-start; padding: 8px 11px; border-radius: 9px; background: color-mix(in srgb, var(--c) 16%, #eef1f5); }
        .svs-typing i { width: 6px; height: 6px; border-radius: 50%; background: var(--c); will-change: transform; animation: svs-typedot 1.2s ease-in-out infinite; }
        .svs-typing i:nth-child(2) { animation-delay: 0.18s; } .svs-typing i:nth-child(3) { animation-delay: 0.36s; }
        @keyframes svs-typedot { 0%,100% { transform: translateY(0); opacity: 0.5; } 40% { transform: translateY(-5px); opacity: 1; } }
        .svs-sup-on { position: absolute; top: 22%; right: 22%; width: 12px; height: 12px; border-radius: 50%; background: #22c55e; z-index: 2; }
        .svs-sup-on::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 2px solid #22c55e; will-change: transform, opacity; animation: svs-pulse 2s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .orb-ring, .cr-led, .svs-upg-halo, .svs-upg-ring, .svs-upg-up, .svs-cl-pulse, .svs-cl-shape, .svs-cl-orbit,
          .svs-srv-rack, .svs-srv-u i, .svs-srv-scan, .svs-bub, .svs-typing i, .svs-sup-on::after { animation: none !important; }
          .svs-bub { transform: scale(1); opacity: 1; } .svs-srv-scan { display: none; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="sv-shell sv-hero">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h1 className="sv-h1">Built, shipped<br />&amp; <span>looked after.</span></h1>
          <p className="sv-intro">
            Four directions for this page, shown below - pick the one you like and I'll keep it
            and drop the rest. Each uses the same four services and live animations.
          </p>
        </Reveal>
      </section>

      {/* Concept 1 - Control room (light) */}
      <section className="sv-sec" style={{ background: '#fff' }}>
        <div className="sv-shell">
          <ConceptLabel n="01" title="Ops Control-Room" note="A live 'mission control' - each service is a status module with real-time metrics and its animation as a monitor." />
          <ControlRoom />
        </div>
      </section>

      {/* Concept 2 - Orbit */}
      <section className="sv-sec" style={{ background: CREAM }}>
        <div className="sv-shell">
          <ConceptLabel n="02" title="Orbit System" note="Services orbit a central always-on hub. Hover or click a node to dock open its detail." />
          <OrbitSystem />
        </div>
      </section>

      {/* Concept 3 - Editorial hover-index */}
      <section className="sv-sec" style={{ background: '#fff' }}>
        <div className="sv-shell">
          <ConceptLabel n="03" title="Editorial Hover-Index" note="A minimal typographic index - hover a line and its visual + capabilities reveal beside it." />
          <HoverIndex />
        </div>
      </section>

      {/* Concept 4 - Cinematic filmstrip */}
      <section className="sv-sec" style={{ background: CREAM }}>
        <div className="sv-shell">
          <ConceptLabel n="04" title="Cinematic Filmstrip" note="A horizontal, swipeable showcase reel - drag, use the arrows, or tap the progress bar." />
          <Filmstrip />
        </div>
      </section>

      <PageCTA eyebrow="Let's Get Started" heading="Need it built" highlight="right?" button="Start your project" />
    </PageLayout>
  )
}
