import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PageLayout, NAVY, GREEN, CREAM, EASE } from './_kit'
import { ImageTrail } from '../sections/ImageTrail'
import { JourneyHero } from '../sections/JourneyHero'

type M = { year: string; tag: string; head: string; hi: string; body: string; stat: string; statLabel: string }

const MILESTONES: M[] = [
  { year: '2013', tag: 'The Spark', head: 'The passion for digital began', hi: 'digital', body: 'As businesses started moving online, it became clear a digital presence was no longer optional. Working closely with different businesses gave valuable insight into how brands connect with customers through technology, marketing and design - laying the foundation for a future in the digital industry.', stat: '01', statLabel: 'Where it began' },
  { year: '2014', tag: 'Learning', head: 'Learning the digital landscape', hi: 'landscape', body: 'Exposure to fast-changing digital environments built a deeper understanding of websites, online marketing, branding and customer engagement. Businesses needed more than an online presence - they needed strategies that delivered real results.', stat: '02', statLabel: 'Foundations laid' },
  { year: '2016', tag: 'Insight', head: 'Understanding business challenges', hi: 'business', body: 'Working with businesses across different industries revealed common challenges - limited visibility, inconsistent branding and difficulty generating quality leads online. This phase strengthened the belief that digital solutions should be practical, measurable and focused on business growth.', stat: '03', statLabel: 'Industries studied' },
  { year: '2018', tag: 'Hands-on', head: 'Gaining real-world experience', hi: 'real-world', body: 'Hands-on involvement in website development, branding, content creation and marketing campaigns provided valuable experience. Understanding what works - and what doesn’t - shaped a customer-focused approach built around delivering meaningful outcomes.', stat: '04', statLabel: 'Experience earned' },
  { year: '2020', tag: 'The Vision', head: 'A vision started taking shape', hi: 'vision', body: 'Years of experience and continuous learning led to a clear vision - helping businesses grow through smart digital solutions. The focus was not just on providing services, but on becoming a trusted partner that understands business goals and delivers long-term value.', stat: '05', statLabel: 'A clear purpose' },
  { year: '2025', tag: 'EG Digital is Born', head: 'EG Digital was born', hi: 'born', body: 'As a subsidiary of Eloma Group, EG Digital launched with a vision to help businesses grow through innovative digital solutions. The same year, it achieved a key milestone by becoming a Microsoft Partner and licensing provider, strengthening its technology and service capabilities.', stat: 'Microsoft', statLabel: 'Certified Partner' },
  { year: '2026', tag: 'Today', head: 'Rapid growth & recognition', hi: 'growth', body: 'Within a short period, EG Digital delivered projects for clients across multiple industries, building a strong reputation for quality, creativity and reliability. With a growing client portfolio and expanding digital expertise, the company moves forward with confidence and purpose.', stat: '∞', statLabel: 'The next chapter' },
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
          {m.year} - {m.tag}
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

        /* Left - sticky year stage */
        .jr-stage { position: sticky; top: 0; align-self: start; height: 100svh;
          display: flex; flex-direction: column; justify-content: center; gap: 28px; }
        .jr-stage-idx { font-size: clamp(11px,0.85vw,13px); font-weight: 800; letter-spacing: 2.5px;
          text-transform: uppercase; color: rgba(8,33,60,0.4); font-variant-numeric: tabular-nums; }
        .jr-reel-row { display: flex; align-items: center; height: clamp(96px,15.5vw,256px);
          font-size: clamp(78px,13vw,252px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.85;
          color: #08213C66; font-variant-numeric: tabular-nums; white-space: nowrap; }
        .jr-reel-window { height: clamp(96px,15.5vw,256px); overflow: hidden; }
        .jr-reel-wrap { display: flex; align-items: center; gap: clamp(16px,2vw,36px); min-width: 0; }
        .jr-rail { width: 3px; height: clamp(96px,15.5vw,256px); background: rgba(8,33,60,0.1); border-radius: 99px; position: relative; flex-shrink: 0; }
        .jr-rail-fill { position: absolute; inset: 0; background: ${GREEN}; border-radius: 99px; transform-origin: top center; will-change: transform; }

        /* Right - milestone stream */
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
          .jr-stage { top: 76px; height: auto; flex-direction: row; align-items: center; justify-content: space-between;
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
          <h2 style={{ fontSize: 'clamp(40px,7vw,104px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.95, color: '#fff', margin: '18px 0 24px', textTransform: 'uppercase' }}>
            Let's write <span style={{ color: GREEN }}>yours.</span>
          </h2>
          <p style={{ fontSize: 'clamp(13px,1vw,16px)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0 0 30px' }}>
            2 Years · Many Projects · Unwavering quality
          </p>
          <button onClick={() => navigate('/contact')} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: GREEN, color: NAVY, border: 'none', borderRadius: 100, padding: '16px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', minHeight: 52 }}>
            Start a conversation
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </motion.div>
      </section>
    </PageLayout>
  )
}
