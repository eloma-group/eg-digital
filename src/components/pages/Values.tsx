import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageLayout, Eyebrow, Reveal, NAVY, GREEN, EASE } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'

type Value = { n: string; word: string; def: string }

const VALUES: Value[] = [
  { n: '01', word: 'Honest by default', def: 'We quote what it really costs and say what we really think - no padded estimates, no vanishing scope, no surprises on the invoice.' },
  { n: '02', word: 'Momentum', def: 'Speed is a feature. We move in tight, visible milestones so progress is always something you can see, not something you’re promised.' },
  { n: '03', word: 'Craft', def: 'Pixels, performance and architecture all matter. We sweat the details users never name but always feel.' },
  { n: '04', word: 'Ownership', def: 'We treat your deadline, your budget and your reputation as our own. One accountable team, start to finish.' },
  { n: '05', word: 'Partnership', def: 'We’re a partner, not a vendor. The best work happens when we’re in the room thinking with you, not just for you.' },
  { n: '06', word: 'Curiosity', def: 'We stay close to what’s next - AI, cloud, security - so your stack is ready for next year’s problems, not last year’s.' },
  { n: '07', word: 'Built to outlast us', def: 'Clean code, clear docs and managed support mean what we deliver keeps working long after launch day.' },
]

/* A creed line whose type scrubs from faint to solid as it crosses the
   viewport, with a green rule sweeping underneath. Transform + opacity only. */
function CreedLine({ v }: { v: Value }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.4'] })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.14, 1])
  const y = useTransform(scrollYProgress, [0, 1], [44, 0])
  const ruleScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const defOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1])
  const idxColor = useTransform(scrollYProgress, [0, 1], ['rgba(8,33,60,0.22)', GREEN])

  return (
    <div ref={ref} className="vl-row">
      <motion.div className="vl-idx" style={{ color: idxColor }}>{v.n}</motion.div>

      <div className="vl-main">
        <motion.h2 className="vl-word" style={{ opacity, y, color: NAVY }}>{v.word}</motion.h2>
        <motion.span aria-hidden="true" className="vl-rule" style={{ scaleX: ruleScale }} />
        <motion.p className="vl-def" style={{ opacity: defOpacity }}>{v.def}</motion.p>
      </div>
    </div>
  )
}

export function Values() {
  usePageMeta(
    'EG Digital Values | Mission, Vision & Principles',
    "Learn about EG Digital's core values, mission, and vision driving innovation, integrity, and customer-focused digital transformation for global businesses.",
  )
  return (
    <PageLayout>
      <style>{`
        .vl-shell { max-width: 1760px; margin: 0 auto; padding: 0 clamp(24px,4vw,72px); }
        @media (min-width: 1920px) { .vl-shell { max-width: 1900px; } }

        .vl-list { max-width: 1760px; margin: 0 auto; padding: clamp(20px,3vw,48px) clamp(24px,4vw,72px) clamp(56px,8vw,120px); }
        @media (min-width: 1920px) { .vl-list { max-width: 1900px; } }

        .vl-row { display: grid; grid-template-columns: clamp(60px,7vw,140px) 1fr;
          gap: clamp(16px,3vw,56px); align-items: start;
          padding: clamp(36px,5vw,80px) 0; border-top: 1px solid rgba(8,33,60,0.12); }
        .vl-row:last-child { border-bottom: 1px solid rgba(8,33,60,0.12); }

        .vl-idx { font-size: clamp(20px,2vw,30px); font-weight: 900; letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums; line-height: 1; padding-top: 0.4em; }

        .vl-word { margin: 0; text-transform: uppercase; word-spacing: 0.14em; font-weight: 900; letter-spacing: 0.01em;
          line-height: 1.04; font-size: clamp(40px,8vw,128px); will-change: transform, opacity; }

        .vl-rule { display: block; height: 3px; background: ${GREEN}; transform-origin: left center;
          margin: clamp(18px,2vw,30px) 0; will-change: transform; }

        .vl-def { margin: 0; max-width: 64ch; font-weight: 500;
          font-size: clamp(15px,1.3vw,20px); line-height: 1.8; color: rgba(8,33,60,0.6); }

        @media (max-width: 720px) {
          .vl-row { grid-template-columns: 1fr; gap: 6px; }
          .vl-idx { padding-top: 0; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="vl-shell" style={{ padding: 'clamp(44px,7vw,110px) clamp(24px,4vw,72px) clamp(20px,3vw,40px)' }}>
        <Reveal>
          <Eyebrow>Values</Eyebrow>
          <h1 style={{ fontSize: 'clamp(46px,9vw,150px)', fontWeight: 900, letterSpacing: '0.015em', lineHeight: 1.06, color: NAVY, margin: '18px 0 0', textTransform: 'uppercase' }}>
            What we<br />stand <span style={{ color: GREEN }}>for.</span>
          </h1>
          <p style={{ maxWidth: 600, fontSize: 'clamp(15px,1.25vw,19px)', lineHeight: 1.8, color: 'rgba(8,33,60,0.58)', margin: '22px 0 0' }}>
            Seven principles that decide how we work, who we hire and what we ship. Read them top to bottom - they come into focus as you go.
          </p>
        </Reveal>
      </section>

      {/* ── Creed list ── */}
      <div className="vl-list">
        {VALUES.map(v => <CreedLine key={v.n} v={v} />)}
      </div>

      {/* ── Closing statement ── */}
      <section style={{ background: NAVY, padding: 'clamp(72px,11vw,160px) clamp(24px,4vw,72px)' }}>
        <div className="vl-shell" style={{ padding: '0 clamp(24px,4vw,72px)', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: EASE }}
            style={{ fontSize: 'clamp(34px,6vw,96px)', fontWeight: 900, letterSpacing: '0.01em', lineHeight: 1.14, color: '#fff', margin: 0, textTransform: 'uppercase' }}
          >
            Values you can<br /><span style={{ color: GREEN }}>actually feel.</span>
          </motion.h2>
        </div>
      </section>
    </PageLayout>
  )
}
