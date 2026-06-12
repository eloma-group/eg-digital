import { useEffect, useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAVY = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif"

/* Shared styling for all three banner treatments. One banner per page, so a
   per-component <style> tag is fine (no duplicate-injection concern). */
const HERO_CSS = `
  .jh { position: relative; min-height: 100svh; display: flex; flex-direction: column;
    overflow: hidden; isolation: isolate; padding: clamp(112px,15vh,180px) clamp(24px,4vw,72px) clamp(40px,6vh,72px);
    font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif; }

  .jh-eyebrow { display: inline-flex; align-items: center; gap: 11px;
    font-size: clamp(10px,0.8vw,13px); font-weight: 800; letter-spacing: 2.6px; text-transform: uppercase; color: ${GREEN}; }
  .jh-eyebrow b { width: 7px; height: 7px; border-radius: 99px; background: ${GREEN}; flex-shrink: 0;
    box-shadow: 0 0 0 0 rgba(60,185,140,0.55); animation: jh-pulse 2.6s ease-in-out infinite; }
  .jh-eyebrow--muted { color: rgba(8,33,60,0.4); }
  .jh-eyebrow--muted b, .jh-eyebrow--light b { animation: none; }
  .jh-eyebrow--light { color: rgba(255,255,255,0.75); }
  @keyframes jh-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(60,185,140,0.5); } 50% { box-shadow: 0 0 0 8px rgba(60,185,140,0); } }

  .jh-clip { overflow: hidden; display: block; }
  .jh-line { display: block; }

  .jh-scrollcue { display: inline-flex; align-items: center; gap: 11px;
    font-size: clamp(10px,0.78vw,12px); font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: rgba(8,33,60,0.45); }
  .jh-scrollcue i { width: 46px; height: 1px; background: rgba(8,33,60,0.25); position: relative; overflow: hidden; }
  .jh-scrollcue i::after { content: ''; position: absolute; top: 0; left: 0; height: 100%; width: 40%; background: ${GREEN};
    animation: jh-dash 1.9s ease-in-out infinite; }
  .jh-scrollcue--light { color: rgba(255,255,255,0.5); }
  .jh-scrollcue--light i { background: rgba(255,255,255,0.22); }
  @keyframes jh-dash { 0% { transform: translateX(-100%); } 60%,100% { transform: translateX(300%); } }

  .jh-meta { font-size: clamp(10px,0.78vw,12px); font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: rgba(8,33,60,0.45); }

  .jh-ledger { display: flex; align-items: stretch; }
  .jh-ledger > div { display: flex; flex-direction: column; gap: 6px;
    padding-right: clamp(20px,2.4vw,40px); margin-right: clamp(20px,2.4vw,40px); border-right: 1px solid rgba(8,33,60,0.14); }
  .jh-ledger > div:last-child { border: none; margin: 0; padding: 0; }
  .jh-ledger .num { font-size: clamp(26px,2.8vw,42px); font-weight: 900; letter-spacing: -0.04em; line-height: 1; color: ${NAVY}; font-variant-numeric: tabular-nums; }
  .jh-ledger .lbl { font-size: clamp(10px,0.8vw,12px); font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(8,33,60,0.42); }

  /* ── A — Editorial ── */
  .jh-a { background: ${CREAM}; justify-content: space-between; }
  .jh-a::before { content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background: radial-gradient(50% 50% at 78% 14%, rgba(60,185,140,0.10), transparent 60%); }
  .jh-a-top, .jh-a-mid, .jh-a-bot { position: relative; z-index: 1; width: 100%; max-width: min(calc(100vw - 120px), 2400px); margin: 0 auto; }
  .jh-a-top { display: flex; align-items: center; justify-content: space-between; padding-bottom: clamp(20px,3vh,40px); border-bottom: 1px solid rgba(8,33,60,0.1); }
  .jh-a-mid { display: flex; flex-direction: column; justify-content: center; flex: 1; padding: clamp(28px,5vh,64px) 0; }
  .jh-a-h1 { font-family: ${SERIF}; font-weight: 800; font-size: clamp(56px,11.5vw,200px); line-height: 0.92;
    letter-spacing: -0.02em; color: ${NAVY}; margin: 0; }
  .jh-a-h1 em { font-style: italic; font-weight: 500; color: ${GREEN}; }
  .jh-a-sub { font-family: ${SERIF}; font-style: italic; font-size: clamp(18px,1.7vw,28px); line-height: 1.6;
    color: rgba(8,33,60,0.55); margin: clamp(28px,3vw,44px) 0 0; max-width: 620px; }
  .jh-a-bot { display: flex; align-items: center; justify-content: space-between; padding-top: clamp(20px,3vh,32px); border-top: 1px solid rgba(8,33,60,0.1); }

  /* ── B — Cinematic ── */
  .jh-b { background: ${NAVY}; align-items: center; text-align: center; justify-content: center; gap: clamp(28px,4vh,52px); }
  .jh-b::before { content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background: radial-gradient(60% 60% at 50% 0%, rgba(60,185,140,0.16), transparent 60%); }
  .jh-b > * { position: relative; z-index: 1; }
  .jh-b-clip { position: relative; width: 100%; max-width: min(calc(100vw - 96px), 1840px); aspect-ratio: 1200 / 280; }
  .jh-b-clip video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .jh-b-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .jh-b-sub { font-family: ${SERIF}; font-style: italic; font-size: clamp(17px,1.5vw,26px); line-height: 1.6;
    color: rgba(255,255,255,0.62); margin: 0; max-width: 660px; }
  .jh-b-bot { margin-top: clamp(4px,2vh,16px); }

  /* ── C — Kinetic ── */
  .jh-c { background: ${CREAM}; justify-content: center; gap: clamp(30px,5vh,60px); }
  .jh-c::before { content: ''; position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background: radial-gradient(46% 50% at 14% 86%, rgba(60,185,140,0.10), transparent 60%); }
  .jh-c > * { position: relative; z-index: 1; width: 100%; max-width: min(calc(100vw - 120px), 2400px); margin-left: auto; margin-right: auto; }
  .jh-c-h1 { font-family: ${SERIF}; font-weight: 800; font-size: clamp(50px,9.5vw,168px); line-height: 0.98;
    letter-spacing: -0.02em; color: ${NAVY}; margin: 0; }
  .jh-c-rot { display: block; height: 1em; overflow: hidden; position: relative; }
  .jh-c-rot em { display: inline-block; font-style: italic; font-weight: 500; color: ${GREEN}; white-space: nowrap; }
  .jh-c-bot { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; flex-wrap: wrap; }

  @media (max-width: 900px) {
    .jh { padding-top: clamp(104px,16vh,150px); }
    .jh-a-top { flex-wrap: wrap; gap: 12px; }
    .jh-b-clip { aspect-ratio: 1200 / 280; }
    .jh-c-bot { flex-direction: column; align-items: flex-start; gap: 24px; }
  }
  @media (max-width: 540px) {
    .jh-a-bot { flex-direction: column; align-items: flex-start; gap: 18px; }
    .jh-ledger > div { padding-right: 16px; margin-right: 16px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .jh-eyebrow b, .jh-scrollcue i::after { animation: none !important; }
  }
`

function Style() { return <style>{HERO_CSS}</style> }

/* ───────────────────────── Editorial (Our Journey) ─────────────────────────
   Cream stage, oversized Playfair serif, generous negative space, hairline rules. */
export function JourneyHero() {
  return (
    <>
      <Style />
      <section className="jh jh-a">
        <div className="jh-a-top">
          <span className="jh-eyebrow"><b />Chapter 01 — The Spark</span>
          <span className="jh-eyebrow jh-eyebrow--muted">Est. 2021</span>
        </div>

        <div className="jh-a-mid">
          <h1 className="jh-a-h1">
            <span className="jh-clip"><motion.span className="jh-line" initial={{ y: '115%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}>From one desk</motion.span></span>
            <span className="jh-clip"><motion.span className="jh-line" initial={{ y: '115%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.22 }}>to a <em>studio.</em></motion.span></span>
          </h1>
          <motion.p className="jh-a-sub" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}>
            Six years, one conviction — that ambitious businesses deserve technology delivered on time.
          </motion.p>
        </div>

        <motion.div className="jh-a-bot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <span className="jh-meta">Melbourne, Australia</span>
          <span className="jh-scrollcue">Scroll to begin <i /></span>
        </motion.div>
      </section>
    </>
  )
}

/* ───────────────────────── Cinematic text-clip (Our USP) ─────────────────────────
   Navy stage. The showreel plays *inside* a giant word via an SVG mask. */
export function CinematicBanner({
  eyebrow, word, sub, scrollLabel = 'Scroll to explore',
}: { eyebrow: string; word: string; sub: string; scrollLabel?: string }) {
  const maskId = useId().replace(/:/g, '')
  return (
    <>
      <Style />
      <section className="jh jh-b">
        <motion.span className="jh-eyebrow jh-eyebrow--light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <b />{eyebrow}
        </motion.span>

        <motion.div className="jh-b-clip" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}>
          <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/images/EG%20Digital%20Homepage%20Video.mp4" type="video/mp4" />
          </video>
          <svg className="jh-b-svg" viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid meet" aria-label={word}>
            <defs>
              <mask id={maskId}>
                <rect width="1200" height="280" fill="#fff" />
                <text x="600" y="146" textAnchor="middle" dominantBaseline="central"
                  fontFamily={SERIF} fontWeight="900" fontSize="252"
                  textLength="1150" lengthAdjust="spacingAndGlyphs" fill="#000">{word}</text>
              </mask>
            </defs>
            <rect width="1200" height="280" fill={NAVY} mask={`url(#${maskId})`} />
          </svg>
        </motion.div>

        <motion.p className="jh-b-sub" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}>
          {sub}
        </motion.p>

        <motion.div className="jh-b-bot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <span className="jh-scrollcue jh-scrollcue--light">{scrollLabel} <i /></span>
        </motion.div>
      </section>
    </>
  )
}

/* ───────────────────────── Kinetic rotator (Networks & Partners) ─────────────────────────
   Cream stage, editorial serif headline with one word cycling on a single line. */
export function KineticBanner({
  eyebrow, pre, rotate, post, stats = [['2021', 'Founded'], ['50+', 'Products'], ['6', 'Years']],
}: { eyebrow: string; pre: string; rotate: string[]; post: string; stats?: [string, string][] }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % rotate.length), 2200)
    return () => clearInterval(id)
  }, [rotate.length])
  return (
    <>
      <Style />
      <section className="jh jh-c">
        <motion.span className="jh-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <b />{eyebrow}
        </motion.span>

        <h1 className="jh-c-h1">
          <span className="jh-clip"><motion.span className="jh-line" initial={{ y: '115%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}>{pre}</motion.span></span>
          <span className="jh-c-rot">
            <AnimatePresence mode="wait" initial={false}>
              <motion.em key={rotate[i]}
                initial={{ y: '100%', opacity: 0 }} animate={{ y: '0%', opacity: 1 }} exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}>
                {rotate[i]}
              </motion.em>
            </AnimatePresence>
          </span>
          <span className="jh-clip"><motion.span className="jh-line" initial={{ y: '115%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}>{post}</motion.span></span>
        </h1>

        <motion.div className="jh-c-bot" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}>
          <div className="jh-ledger">
            {stats.map(([num, lbl]) => (
              <div key={lbl}><span className="num">{num}</span><span className="lbl">{lbl}</span></div>
            ))}
          </div>
          <span className="jh-scrollcue">Scroll <i /></span>
        </motion.div>
      </section>
    </>
  )
}
