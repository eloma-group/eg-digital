import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM, EASE } from './_kit'

const REDUCED = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ── Shared data ── */
const STATS = [
  { to: 100, decimals: 0, suffix: '%', label: 'Remote' },
  { to: 4.9, decimals: 1, suffix: '', label: 'Team rating' },
  { to: 0, decimals: 0, suffix: '', label: 'Juniors on delivery' },
  { to: 50, decimals: 0, suffix: '+', label: 'Products shipped' },
]
const VOICES = [
  { quote: 'The best work of my career - real ownership, zero busywork.', name: 'Aria', role: 'Senior Engineer', color: '#2563eb' },
  { quote: 'Senior people, a sane pace, and we actually ship. A rare combination.', name: 'Marco', role: 'Product Designer', color: '#7c3aed' },
  { quote: "Remote done right. I'm trusted with outcomes, never clock-watched.", name: 'Lena', role: 'DevOps Engineer', color: GREEN },
]
const BENEFITS = [
  '$3,000 annual learning budget', 'Certifications paid in full',
  'Async-first - very few meetings', 'Top-tier hardware, your choice',
  'Paid trial task before any offer', 'No cover letters, ever',
  'Senior-only delivery team', 'Real ownership from week one',
]
const STORY = [
  { time: '09:00', k: 'Stand-up', b: 'A quick async check-in - no status theatre, just what’s shipping today.', c: GREEN },
  { time: '11:00', k: 'Deep work', b: 'Long, protected focus blocks. Notifications off, craft on.', c: '#2563eb' },
  { time: '15:00', k: 'Ship it', b: 'Tight, reversible releases. Real work to real users, daily.', c: '#d97706' },
  { time: '17:00', k: 'We’ve got you', b: 'Support and each other. We close the loop before we log off.', c: '#7c3aed' },
]
const TEAM_COLOR: Record<string, string> = { Engineering: '#2563eb', Design: '#7c3aed', Growth: '#d97706', Security: GREEN }
const TEAM_CODE: Record<string, string> = { Engineering: 'ENG', Design: 'DES', Growth: 'GRW', Security: 'SEC' }
const ROLES = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', type: 'Full-time · Remote', summary: 'React, TypeScript & .NET across client products end to end.' },
  { title: 'Cloud / DevOps Engineer', team: 'Engineering', type: 'Full-time · Remote', summary: 'Azure & AWS, CI/CD and the reliability clients lean on.' },
  { title: 'Product Designer (UI/UX)', team: 'Design', type: 'Full-time · Remote', summary: 'Own experiences from first sketch to shipped, polished UI.' },
  { title: 'Digital Marketing Specialist', team: 'Growth', type: 'Full-time · Remote', summary: 'SEO, paid and content that actually moves the numbers.' },
  { title: 'Cyber Security Analyst', team: 'Security', type: 'Full-time · Remote', summary: 'Microsoft Defender, monitoring and zero-trust hardening.' },
]
const applyHref = (t: string) => `mailto:connect@egdigital.com.au?subject=${encodeURIComponent('Application - ' + t)}`

/* ── Helpers ── */
function CountUp({ to, decimals = 0, suffix = '' }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [v, setV] = useState(0)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    if (REDUCED()) { setV(to); return }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const start = performance.now(); const dur = 1200
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur); const eased = 1 - Math.pow(1 - p, 3)
          setV(to * eased); if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    obs.observe(el); return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}

const SCR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%/<>*'
function Scramble({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [out, setOut] = useState(text)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    if (REDUCED()) { setOut(text); return }
    let raf = 0
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let frame = 0
        const step = () => {
          let s = ''
          for (let i = 0; i < text.length; i++) {
            if (i < frame / 2.2) s += text[i]
            else if (text[i] === ' ') s += ' '
            else s += SCR[Math.floor(Math.random() * SCR.length)]
          }
          setOut(s); frame++
          if (frame / 2.2 < text.length) raf = requestAnimationFrame(step); else setOut(text)
        }
        step()
      }
    }, { threshold: 0.5 })
    obs.observe(el); return () => { obs.disconnect(); cancelAnimationFrame(raf) }
  }, [text])
  return <span ref={ref}>{out}</span>
}

function ConceptLabel({ n, title, note }: { n: string; title: string; note: string }) {
  return (
    <div style={{ marginBottom: 'clamp(28px,4vw,52px)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.6px', textTransform: 'uppercase', color: GREEN }}>
        <span style={{ width: 22, height: 2, background: GREEN }} />Concept {n}
      </div>
      <h2 style={{ fontSize: 'clamp(28px,3.4vw,52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.96, color: NAVY, margin: '12px 0 8px', textTransform: 'uppercase' }}>{title}</h2>
      <p style={{ fontSize: 'clamp(14px,1.05vw,16px)', color: 'rgba(8,33,60,0.55)', margin: 0, maxWidth: '62ch', lineHeight: 1.7 }}>{note}</p>
    </div>
  )
}

/* ═══════════ CONCEPT 01 - Studio product-page ═══════════ */
function ProductPage() {
  const [v, setV] = useState(0)
  const voice = VOICES[v]
  return (
    <div className="pp">
      <div className="pp-stats">
        {STATS.map(s => (
          <div key={s.label} className="pp-stat">
            <div className="pp-stat-v"><CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} /></div>
            <div className="pp-stat-l">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="pp-grid">
        <div className="pp-quote" style={{ ['--c' as string]: voice.color }}>
          <span className="pp-q-mark">“</span>
          <p className="pp-q-text">{voice.quote}</p>
          <div className="pp-q-foot">
            <div className="pp-q-who">
              <span className="pp-q-av" style={{ background: voice.color }}>{voice.name[0]}</span>
              <div><div className="pp-q-name">{voice.name}</div><div className="pp-q-role">{voice.role}</div></div>
            </div>
            <div className="pp-q-dots">
              {VOICES.map((vc, i) => (
                <button key={vc.name} aria-label={vc.name} className={`pp-dot${i === v ? ' on' : ''}`} style={{ ['--c' as string]: vc.color }} onClick={() => setV(i)} />
              ))}
            </div>
          </div>
        </div>
        <div className="pp-benes">
          <div className="pp-benes-h">What you actually get</div>
          <div className="pp-benes-grid">
            {BENEFITS.map(b => (
              <div key={b} className="pp-bene"><span className="pp-check"><Check size={13} strokeWidth={3} /></span>{b}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ CONCEPT 02 - Build-studio notebook ═══════════ */
function Notebook() {
  return (
    <div className="nb">
      <div className="nb-annot">// open roles - apply with your work, not a form</div>
      <div className="nb-notes">
        {ROLES.map((r, i) => {
          const c = TEAM_COLOR[r.team]
          return (
            <a key={r.title} href={applyHref(r.title)} className="nb-note" style={{ ['--c' as string]: c, ['--rot' as string]: `${(i % 2 ? 1 : -1) * (1.4 + (i % 3) * 0.5)}deg` }}>
              <span className="nb-pin" />
              <span className="nb-team" style={{ color: c }}>{r.team}</span>
              <span className="nb-title">{r.title}</span>
              <span className="nb-sum">{r.summary}</span>
              <span className="nb-apply">apply ↗</span>
            </a>
          )
        })}
      </div>
      <div className="nb-annot nb-annot-2">↳ remote-first · paid trial · senior-only team</div>
    </div>
  )
}

/* ═══════════ CONCEPT 03 - Departures board ═══════════ */
function Departures() {
  return (
    <div className="db">
      <div className="db-top"><span className="db-flash" />Now boarding · {ROLES.length} departures</div>
      <div className="db-head"><span>Role</span><span>Team</span><span>Schedule</span><span>Gate</span></div>
      {ROLES.map(r => {
        const c = TEAM_COLOR[r.team]
        return (
          <a key={r.title} href={applyHref(r.title)} className="db-row" style={{ ['--c' as string]: c }}>
            <span className="db-role"><Scramble text={r.title.toUpperCase()} /></span>
            <span className="db-team"><Scramble text={TEAM_CODE[r.team]} /></span>
            <span className="db-sched">{r.type}</span>
            <span className="db-gate">APPLY <ArrowUpRight size={15} /></span>
          </a>
        )
      })}
    </div>
  )
}

/* ═══════════ CONCEPT 04 - Scroll story ═══════════ */
function ScrollStory() {
  return (
    <div className="ss">
      <div className="ss-line"><motion.div className="ss-line-fill" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-20% 0px -20% 0px' }} transition={{ duration: 1.4, ease: EASE }} /></div>
      {STORY.map((s, i) => (
        <Reveal key={s.k} delay={i * 0.04}>
          <div className="ss-ch" style={{ ['--c' as string]: s.c }}>
            <div className="ss-dot" />
            <div className="ss-time">{s.time}</div>
            <h3 className="ss-k">{s.k}</h3>
            <p className="ss-b">{s.b}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function Career() {
  return (
    <PageLayout>
      <style>{`
        .cr-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .cr-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .cr-shell { max-width: 2440px; } }
        .cr-sec { padding: clamp(56px,7vw,116px) 0; }

        .cr-hero { padding: clamp(40px,6vw,96px) 0 clamp(20px,3vw,32px); }
        .cr-badge { display: inline-flex; align-items: center; gap: 9px; background: rgba(60,185,140,0.12); border: 1px solid rgba(60,185,140,0.3); color: ${GREEN}; border-radius: 100px; padding: 8px 16px; font-size: 12px; font-weight: 800; letter-spacing: 0.6px; margin-bottom: 22px; }
        .cr-badge .pulse { width: 8px; height: 8px; border-radius: 50%; background: ${GREEN}; position: relative; }
        .cr-badge .pulse::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 2px solid ${GREEN}; animation: cr-ping 2s ease-out infinite; }
        @keyframes cr-ping { 0% { transform: scale(0.6); opacity: 0.8; } 100% { transform: scale(2.4); opacity: 0; } }
        .cr-h1 { font-size: clamp(52px,10.5vw,140px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.86; color: ${NAVY}; margin: 0; text-transform: uppercase; }
        .cr-h1 span { color: ${GREEN}; }
        .cr-intro { max-width: 620px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 24px 0 0; }

        /* ── 01 Product page ── */
        .pp-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(16px,2vw,28px); margin-bottom: clamp(28px,4vw,52px); }
        @media (max-width: 700px) { .pp-stats { grid-template-columns: repeat(2,1fr); } }
        .pp-stat { background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 18px; padding: clamp(20px,2.4vw,32px); box-shadow: 0 4px 22px rgba(8,33,60,0.05); }
        .pp-stat-v { font-size: clamp(36px,4.4vw,68px); font-weight: 900; letter-spacing: -0.05em; color: ${NAVY}; line-height: 0.9; font-variant-numeric: tabular-nums; }
        .pp-stat-l { font-size: 11px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(8,33,60,0.42); margin-top: 10px; }
        .pp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(16px,2vw,28px); }
        @media (max-width: 900px) { .pp-grid { grid-template-columns: 1fr; } }
        .pp-quote { position: relative; overflow: hidden; background: ${NAVY}; border-radius: 22px; padding: clamp(28px,3vw,48px); display: flex; flex-direction: column; color: #fff; }
        .pp-q-mark { font-size: 120px; line-height: 0.6; color: var(--c); font-family: Georgia, serif; opacity: 0.5; height: 50px; }
        .pp-q-text { font-size: clamp(20px,2vw,30px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.3; margin: 0 0 auto; }
        .pp-q-foot { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: clamp(24px,3vw,40px); }
        .pp-q-who { display: flex; align-items: center; gap: 12px; }
        .pp-q-av { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff; }
        .pp-q-name { font-size: 15px; font-weight: 800; }
        .pp-q-role { font-size: 12.5px; color: rgba(255,255,255,0.55); }
        .pp-q-dots { display: flex; gap: 8px; }
        .pp-dot { width: 9px; height: 9px; border-radius: 50%; border: none; background: rgba(255,255,255,0.25); cursor: pointer; transition: all 0.2s; }
        .pp-dot.on { width: 26px; border-radius: 99px; background: var(--c); }
        .pp-benes { background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 22px; padding: clamp(28px,3vw,44px); box-shadow: 0 4px 22px rgba(8,33,60,0.05); }
        .pp-benes-h { font-size: clamp(18px,1.6vw,24px); font-weight: 900; letter-spacing: -0.03em; text-transform: uppercase; color: ${NAVY}; margin-bottom: 22px; }
        .pp-benes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 24px; }
        @media (max-width: 520px) { .pp-benes-grid { grid-template-columns: 1fr; } }
        .pp-bene { display: flex; align-items: flex-start; gap: 11px; font-size: clamp(14px,1.05vw,16px); font-weight: 600; color: rgba(8,33,60,0.72); line-height: 1.45; }
        .pp-check { width: 22px; height: 22px; border-radius: 7px; background: rgba(60,185,140,0.15); color: ${GREEN}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* ── 02 Notebook ── */
        .nb { position: relative; background:
            linear-gradient(#fff, #fff) padding-box,
            repeating-linear-gradient(0deg, rgba(8,33,60,0.05) 0 1px, transparent 1px 28px),
            repeating-linear-gradient(90deg, rgba(8,33,60,0.05) 0 1px, transparent 1px 28px);
          background-color: #fff; border: 1px solid rgba(8,33,60,0.1); border-radius: 22px; padding: clamp(28px,4vw,60px); }
        .nb-annot { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: clamp(12px,1vw,14px); color: rgba(8,33,60,0.5); }
        .nb-annot-2 { margin-top: clamp(20px,3vw,36px); color: ${GREEN}; }
        .nb-notes { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(18px,2.4vw,32px); margin-top: clamp(22px,3vw,40px); }
        @media (max-width: 860px) { .nb-notes { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 540px) { .nb-notes { grid-template-columns: 1fr; } }
        .nb-note { position: relative; display: flex; flex-direction: column; gap: 8px; text-decoration: none;
          background: color-mix(in srgb, var(--c) 9%, #fffef5); border: 1px solid color-mix(in srgb, var(--c) 22%, transparent);
          border-radius: 4px; padding: 24px 22px 20px; transform: rotate(var(--rot)); box-shadow: 0 10px 26px -12px rgba(8,33,60,0.28);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s; will-change: transform; }
        .nb-note:hover { transform: rotate(0deg) translateY(-5px); box-shadow: 0 22px 46px -16px rgba(8,33,60,0.32); }
        .nb-pin { position: absolute; top: -7px; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; background: var(--c); box-shadow: 0 2px 5px rgba(0,0,0,0.3); }
        .nb-team { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .nb-title { font-size: clamp(17px,1.4vw,21px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY}; line-height: 1.15; }
        .nb-sum { font-size: 13px; line-height: 1.55; color: rgba(8,33,60,0.55); }
        .nb-apply { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 13px; font-weight: 700; color: var(--c); margin-top: 4px; }

        /* ── 03 Departures board ── */
        .db { background: #fff; border: 1px solid rgba(8,33,60,0.1); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 52px -30px rgba(8,33,60,0.3);
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
        .db-top { display: flex; align-items: center; gap: 10px; padding: 16px clamp(18px,2.4vw,32px); background: ${NAVY}; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .db-flash { width: 9px; height: 9px; border-radius: 2px; background: #f59e0b; animation: db-flash 1.1s steps(1) infinite; }
        @keyframes db-flash { 0%,50% { opacity: 1; } 50.01%,100% { opacity: 0.25; } }
        .db-head, .db-row { display: grid; grid-template-columns: 1fr 90px 1.1fr 120px; gap: clamp(10px,1.6vw,24px); align-items: center; padding: clamp(14px,1.6vw,20px) clamp(18px,2.4vw,32px); }
        .db-head { font-size: 10.5px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(8,33,60,0.4); border-bottom: 1px solid rgba(8,33,60,0.12); }
        .db-row { border-bottom: 1px solid rgba(8,33,60,0.08); text-decoration: none; transition: background 0.2s; }
        .db-row:last-child { border-bottom: none; }
        .db-row:hover { background: color-mix(in srgb, var(--c) 7%, transparent); }
        .db-role { font-size: clamp(13px,1.3vw,17px); font-weight: 700; color: ${NAVY}; letter-spacing: 0.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .db-team { font-size: clamp(13px,1.2vw,16px); font-weight: 700; color: var(--c); letter-spacing: 1px; }
        .db-sched { font-size: 12.5px; color: rgba(8,33,60,0.55); }
        .db-gate { display: inline-flex; align-items: center; gap: 6px; justify-content: flex-end; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: var(--c); }
        @media (max-width: 700px) {
          .db-head { display: none; }
          .db-row { grid-template-columns: 1fr auto; gap: 4px 12px; }
          .db-sched { grid-column: 1; font-size: 11px; }
          .db-team { grid-row: 1; grid-column: 2; justify-self: end; }
          .db-gate { grid-row: 2; grid-column: 2; }
        }

        /* ── 04 Scroll story ── */
        .ss { position: relative; padding-left: clamp(40px,6vw,90px); }
        .ss-line { position: absolute; left: clamp(14px,2.4vw,34px); top: 12px; bottom: 12px; width: 2px; background: rgba(8,33,60,0.12); }
        .ss-line-fill { position: absolute; inset: 0; background: linear-gradient(${GREEN}, #2563eb, #d97706, #7c3aed); transform-origin: top center; will-change: transform; }
        .ss-ch { position: relative; padding: clamp(20px,3vw,40px) 0; }
        .ss-dot { position: absolute; left: calc(clamp(14px,2.4vw,34px) - clamp(40px,6vw,90px) - 7px); top: clamp(26px,3.4vw,46px); width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 3px solid var(--c); }
        .ss-time { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: clamp(13px,1.1vw,15px); font-weight: 700; color: var(--c); letter-spacing: 1px; }
        .ss-k { font-size: clamp(28px,4vw,60px); font-weight: 900; letter-spacing: -0.04em; text-transform: uppercase; color: ${NAVY}; margin: 8px 0 10px; line-height: 0.95; }
        .ss-b { font-size: clamp(15px,1.2vw,19px); line-height: 1.7; color: rgba(8,33,60,0.6); margin: 0; max-width: 52ch; }

        /* ── Shared roles board ── */
        .cr-roles { display: flex; flex-direction: column; }
        .cr-role { display: grid; grid-template-columns: clamp(110px,13vw,180px) 1fr auto; gap: clamp(16px,3vw,40px); align-items: center; padding: clamp(20px,2.6vw,32px) clamp(8px,1.4vw,16px); border-top: 1px solid rgba(8,33,60,0.12); text-decoration: none; position: relative; overflow: hidden; transition: background 0.25s, padding-left 0.3s; }
        .cr-role:last-child { border-bottom: 1px solid rgba(8,33,60,0.12); }
        .cr-role::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--c); transform: scaleY(0); transform-origin: top; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .cr-role:hover { background: #fff; padding-left: 20px; } .cr-role:hover::before { transform: scaleY(1); }
        @media (max-width: 760px) { .cr-role { grid-template-columns: 1fr; gap: 6px; } }
        .cr-role-team { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; color: var(--c); }
        .cr-role-team .dot { width: 9px; height: 9px; border-radius: 3px; background: var(--c); }
        .cr-role-title { font-size: clamp(19px,2vw,28px); font-weight: 900; letter-spacing: -0.03em; color: ${NAVY}; line-height: 1.05; }
        .cr-role-sum { font-size: 13px; color: rgba(8,33,60,0.55); margin-top: 4px; }
        .cr-role-apply { width: 46px; height: 46px; border-radius: 50%; background: ${NAVY}; color: #fff; display: flex; align-items: center; justify-content: center; justify-self: end; transition: background 0.25s, transform 0.25s; }
        .cr-role:hover .cr-role-apply { background: var(--c); transform: rotate(45deg); }

        @media (prefers-reduced-motion: reduce) { .cr-badge .pulse::after, .db-flash { animation: none; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="cr-shell cr-hero">
        <Reveal>
          <div className="cr-badge"><span className="pulse" />We're hiring · {ROLES.length} open roles</div>
          <h1 className="cr-h1">Come build<br />the future <span>with us.</span></h1>
          <p className="cr-intro">
            Four directions for this page, shown below - pick the one you like and I'll keep it and drop
            the rest. A senior, remote-first team that ships work it's proud of.
          </p>
        </Reveal>
      </section>

      <section className="cr-sec" style={{ background: '#fff' }}>
        <div className="cr-shell"><ConceptLabel n="01" title="Studio Product-Page" note="Counts-up momentum stats, a rotating employee voice, and the real specifics with green checks - the 2025 best-practice play." /><ProductPage /></div>
      </section>

      <section className="cr-sec" style={{ background: CREAM }}>
        <div className="cr-shell"><ConceptLabel n="02" title="Build-Studio Notebook" note="Grid-paper canvas, roles as pinned sticky notes at slight angles, monospace annotations. Characterful and unmistakably a build shop." /><Notebook /></div>
      </section>

      <section className="cr-sec" style={{ background: '#fff' }}>
        <div className="cr-shell"><ConceptLabel n="03" title="Departures Board" note="Open roles as a live split-flap departures board - titles and team codes decode into place on scroll." /><Departures /></div>
      </section>

      <section className="cr-sec" style={{ background: CREAM }}>
        <div className="cr-shell"><ConceptLabel n="04" title="A Day at EG (scroll story)" note="A narrative timeline of a real day - stand-up to sign-off - with a colour-shifting spine. Builds momentum to the roles." /><ScrollStory /></div>
      </section>

      {/* ── Shared roles board ── */}
      <section className="cr-sec" style={{ background: '#fff' }}>
        <div className="cr-shell">
          <Reveal>
            <div style={{ marginBottom: 'clamp(24px,3vw,40px)' }}>
              <Eyebrow>Open Roles</Eyebrow>
              <h2 style={{ fontSize: 'clamp(34px,5vw,76px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.92, textTransform: 'uppercase', color: NAVY, margin: '14px 0 0' }}>Come do your<br />best <span style={{ color: GREEN }}>work.</span></h2>
            </div>
          </Reveal>
          <div className="cr-roles">
            {ROLES.map((r, i) => {
              const c = TEAM_COLOR[r.team]
              return (
                <Reveal key={r.title} delay={(i % 5) * 0.05}>
                  <a className="cr-role" style={{ ['--c' as string]: c }} href={applyHref(r.title)}>
                    <span className="cr-role-team"><span className="dot" />{r.team}</span>
                    <div><div className="cr-role-title">{r.title}</div><div className="cr-role-sum">{r.summary} · {r.type}</div></div>
                    <span className="cr-role-apply"><ArrowUpRight size={20} /></span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Don't See Your Role?" heading="Tell us what" highlight="you do best." button="Get in touch" />
    </PageLayout>
  )
}
