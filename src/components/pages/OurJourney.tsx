import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PageLayout, NAVY, GREEN, CREAM, EASE } from './_kit'
import { ImageTrail } from '../sections/ImageTrail'
import { JourneyHero } from '../sections/JourneyHero'

type M = { year: string; tag: string; head: string; hi: string; body: string; stat: string; statLabel: string }

const MILESTONES: M[] = [
  { year: '2021', tag: 'The Spark', head: 'One desk, one conviction', hi: 'conviction', body: 'EG Digital begins in Melbourne with a single belief — ambitious businesses deserve technology delivered on time, without the agency runaround.', stat: '01', statLabel: 'Studio founded' },
  { year: '2022', tag: 'Microsoft Partner', head: 'Enterprise tech, in reach', hi: 'reach', body: 'We become a certified Microsoft partner, bringing Dynamics 365, Power Platform and Azure capability to startups and SMEs for the first time.', stat: '5', statLabel: 'Certifications' },
  { year: '2023', tag: 'The Squad', head: 'A senior team takes shape', hi: 'team', body: 'Engineers, designers and cloud specialists join. We pass thirty shipped projects across seven industries — and keep hitting every date.', stat: '30+', statLabel: 'Projects shipped' },
  { year: '2024', tag: 'Full Stack', head: 'One partner for everything', hi: 'everything', body: 'We expand into managed cloud, cyber security and AI-assisted operations — becoming a true single partner for the entire digital stack.', stat: '4', statLabel: 'New practices' },
  { year: '2025', tag: 'Momentum', head: 'Fifty products and counting', hi: 'Fifty', body: 'From SaaS platforms to e-commerce, we cross fifty shipped products and open dedicated support and maintenance practices.', stat: '50+', statLabel: 'Products live' },
  { year: '2026', tag: 'Today', head: 'Only just getting started', hi: 'started', body: 'We build websites, apps and SaaS for ambitious brands across Australia — and the next chapter is yours to write with us.', stat: '∞', statLabel: 'The next chapter' },
]

const Y = MILESTONES.map(m => m.year)
const N = Y.length

// Build a plateau mapping so the reel "lands" on each year at its dwell centre.
const IN: number[] = [0]
const OUT: string[] = ['0%']
for (let i = 0; i < N; i++) { IN.push((i + 0.5) / N); OUT.push(`-${(i / N) * 100}%`) }
IN.push(1); OUT.push(`-${((N - 1) / N) * 100}%`)

function renderHead(head: string, hi: string) {
  const parts = head.split(new RegExp(`(${hi})`, 'i'))
  return parts.map((p, i) =>
    p.toLowerCase() === hi.toLowerCase()
      ? <span key={i} style={{ color: GREEN }}>{p}</span>
      : <span key={i}>{p}</span>,
  )
}

function Milestone({ m }: { m: M }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 78%', 'start 32%'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0.18, 1])
  const y = useTransform(scrollYProgress, [0, 1], [34, 0])

  return (
    <div ref={ref} className="jr-block">
      <motion.div style={{ opacity, y }}>
        <div className="jr-block-tag">
          <span style={{ width: 22, height: 2, background: GREEN }} />
          {m.year} — {m.tag}
        </div>
        <h2 className="jr-block-head">{renderHead(m.head, m.hi)}</h2>
        <p className="jr-block-body">{m.body}</p>
        <div className="jr-block-stat">
          <span className="jr-stat-num">{m.stat}</span>
          <span className="jr-stat-lbl">{m.statLabel}</span>
        </div>
      </motion.div>
    </div>
  )
}

export function OurJourney() {
  const navigate = useNavigate()
  const timelineRef = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)

  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start start', 'end end'] })
  const sp = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 })
  const reelY = useTransform(sp, IN, OUT)
  const railScale = useTransform(sp, [0, 1], [0, 1])
  useMotionValueEvent(sp, 'change', v => setIdx(Math.max(0, Math.min(N - 1, Math.floor(v * N)))))

  return (
    <PageLayout>
      <style>{`
        .jr-timeline { display: grid; grid-template-columns: 42% 58%;
          max-width: min(calc(100vw - 120px), 2400px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }

        /* Left — sticky year stage */
        .jr-stage { position: sticky; top: 0; align-self: start; height: 100svh;
          display: flex; flex-direction: column; justify-content: center; gap: 28px; }
        .jr-stage-idx { font-size: clamp(11px,0.85vw,13px); font-weight: 800; letter-spacing: 2.5px;
          text-transform: uppercase; color: rgba(8,33,60,0.4); font-variant-numeric: tabular-nums; }
        .jr-reel-row { display: flex; align-items: center; height: clamp(96px,15.5vw,256px);
          font-size: clamp(78px,13vw,252px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.85;
          color: ${NAVY}; font-variant-numeric: tabular-nums; white-space: nowrap; }
        .jr-reel-window { height: clamp(96px,15.5vw,256px); overflow: hidden; }
        .jr-reel-wrap { display: flex; align-items: center; gap: clamp(16px,2vw,36px); min-width: 0; }
        .jr-rail { width: 3px; height: clamp(96px,15.5vw,256px); background: rgba(8,33,60,0.1); border-radius: 99px; position: relative; flex-shrink: 0; }
        .jr-rail-fill { position: absolute; inset: 0; background: ${GREEN}; border-radius: 99px; transform-origin: top center; will-change: transform; }

        /* Right — milestone stream */
        .jr-block { min-height: 90svh; display: flex; flex-direction: column; justify-content: center;
          padding: clamp(40px,8vh,90px) 0 clamp(40px,8vh,90px) clamp(28px,4vw,80px); }
        .jr-block-tag { display: inline-flex; align-items: center; gap: 12px; font-size: clamp(11px,0.85vw,13px);
          font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: ${GREEN}; margin-bottom: 22px; }
        .jr-block-head { font-size: clamp(32px,5vw,72px); font-weight: 900; letter-spacing: -0.045em;
          line-height: 1.0; text-transform: uppercase; color: ${NAVY}; margin: 0 0 22px; }
        .jr-block-body { font-size: clamp(15px,1.2vw,18px); line-height: 1.85; color: rgba(8,33,60,0.58); margin: 0; max-width: 540px; }
        .jr-block-stat { display: flex; align-items: baseline; gap: 16px; margin-top: 34px; padding-top: 26px; border-top: 1px solid rgba(8,33,60,0.12); }
        .jr-stat-num { font-size: clamp(28px,3.5vw,56px); font-weight: 900; letter-spacing: -0.04em; color: ${NAVY}; line-height: 1; }
        .jr-stat-lbl { font-size: clamp(11px,0.85vw,13px); font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(8,33,60,0.42); }

        @media (max-width: 900px) {
          .jr-timeline { grid-template-columns: 1fr; max-width: 100%; padding: 0; }
          .jr-stage { top: 68px; height: auto; flex-direction: row; align-items: center; justify-content: space-between;
            padding: 16px clamp(20px,5vw,40px); background: ${CREAM}; border-bottom: 1px solid rgba(8,33,60,0.1); z-index: 20; gap: 16px; }
          .jr-reel-row { height: clamp(56px,16vw,90px); font-size: clamp(48px,14vw,84px); }
          .jr-reel-window { height: clamp(56px,16vw,90px); }
          .jr-rail { height: clamp(56px,16vw,90px); }
          .jr-stage-idx { display: none; }
          .jr-block { min-height: auto; padding: clamp(44px,10vw,72px) clamp(20px,5vw,40px); }
          .jr-block:not(:last-child) { border-bottom: 1px solid rgba(8,33,60,0.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .jr-reel-wrap, .jr-rail-fill { transition: none; }
          .jr-eyebrow b, .jr-scrollcue i::after { animation: none !important; }
        }
      `}</style>

      {/* ── Hero (3 switchable premium variants) ── */}
      <JourneyHero />

      {/* ── Timeline: sticky scrubbed year + milestone stream ── */}
      <div className="jr-timeline" ref={timelineRef}>
        <div className="jr-stage">
          <div className="jr-stage-idx">Chapter {String(idx + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</div>
          <div className="jr-reel-wrap">
            <div className="jr-rail"><motion.div className="jr-rail-fill" style={{ scaleY: railScale }} /></div>
            <div className="jr-reel-window">
              <motion.div style={{ y: reelY }}>
                {Y.map(yr => <div key={yr} className="jr-reel-row">{yr}</div>)}
              </motion.div>
            </div>
          </div>
        </div>

        <div>
          {MILESTONES.map(m => <Milestone key={m.year} m={m} />)}
        </div>
      </div>

      {/* ── Image trail: the work behind the years ── */}
      <ImageTrail />

      {/* ── Closing CTA ── */}
      <section style={{ background: NAVY, padding: 'clamp(64px,10vw,140px) clamp(24px,4vw,72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 70% at 50% 0%, rgba(60,185,140,0.16), transparent 60%)` }} />
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: EASE }} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.6px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
            <span style={{ width: 22, height: 2, background: GREEN }} />The Next Chapter
          </div>
          <h2 style={{ fontSize: 'clamp(40px,7vw,104px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.95, color: '#fff', margin: '18px 0 30px', textTransform: 'uppercase' }}>
            Let's write <span style={{ color: GREEN }}>yours.</span>
          </h2>
          <button onClick={() => navigate('/about/our-usp')} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: GREEN, color: NAVY, border: 'none', borderRadius: 100, padding: '16px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', minHeight: 52 }}>
            See what makes us different
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </motion.div>
      </section>
    </PageLayout>
  )
}
