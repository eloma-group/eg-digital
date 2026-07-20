import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* Heavy Spline runtime is split out + lazy-loaded so it never blocks paint.
   Foreground robot = the Hero2 robot, layered over the section gradient. */
const RobotCanvas = lazy(() => import('./SplineRobot'))

/* The Spline runtime + scene is several MB. The hero sits at the top of the
   page so it is "in view" immediately - if we mounted the robot right away it
   would download all of that on first paint and make the whole site feel slow
   to load. Instead we wait until the browser is idle (or load + a short beat),
   so the page becomes interactive first and the robot streams in just after. */
function useDeferredMount() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    // On slow connections or data-saver, never load the multi-MB 3D scene -
    // the lightweight placeholder stays and the page stays fast.
    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }).connection
    if (conn && (conn.saveData || /(^|-)(2g|slow-2g)$/.test(conn.effectiveType || ''))) return

    let idle: number | undefined
    let timer: ReturnType<typeof setTimeout> | undefined
    const start = () => {
      const ric = (window as typeof window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      }).requestIdleCallback
      if (ric) idle = ric(() => setReady(true), { timeout: 2500 })
      else timer = setTimeout(() => setReady(true), 1500)
    }
    // Wait for the initial load to settle before kicking off the idle wait.
    if (document.readyState === 'complete') start()
    else { window.addEventListener('load', start, { once: true }) }
    return () => {
      window.removeEventListener('load', start)
      const cic = (window as typeof window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback
      if (idle !== undefined && cic) cic(idle)
      if (timer) clearTimeout(timer)
    }
  }, [])
  return ready
}

function Words() {
  const sz = { a: 'clamp(42px, 17.5cqi, 184px)', b: 'clamp(50px, 23.5cqi, 248px)', c: 'clamp(34px, 12.8cqi, 148px)' }
  return (
    <>
      <h1 style={{ margin: 0, fontWeight: 'inherit', letterSpacing: 'inherit' }}>
        <span className="h3-clip">
          <motion.span className="h3-word" style={{ fontSize: sz.a }}
            initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}>
            We Build
          </motion.span>
        </span>
        <span className="h3-clip">
          <motion.span className="h3-word h3-word-green" style={{ fontSize: sz.b }}
            initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}>
            Digital
          </motion.span>
        </span>
        <span className="h3-clip">
          <motion.span className="h3-word" style={{ fontSize: sz.c }}
            initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}>
            Excellence.
          </motion.span>
        </span>
      </h1>

      <div className="h3-rule-row">
        <motion.div className="h3-rule" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.58 }} style={{ transformOrigin: 'left center' }} />
        <motion.span className="h3-rule-txt" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.76 }}>
          Building ambitious brands since 2025
        </motion.span>
      </div>
    </>
  )
}

function CtaRow() {
  const navigate = useNavigate()
  return (
    <motion.div
      className="h3-bar"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.56 }}
    >
      <p className="h3-bar-desc">
        Websites, apps &amp; SaaS platforms built for ambitious brands - delivered on time.
      </p>
      <button className="h3-cta" onClick={() => navigate('/contact')}>
        Start a Project
        <span className="h3-cta-ring">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
      </button>
    </motion.div>
  )
}

const CSS = `
  .h3-section {
    background:
      linear-gradient(180deg, #ffffff 0%, #ffffff 26%, rgba(255,255,255,0) 70%),
      linear-gradient(105deg,
        #dcebfb 0%,
        #eef5fd 28%,
        #ffffff 50%,
        #f6fbf9 72%,
        #e7f5ef 100%);
    min-height: 100svh;
    display: flex; flex-direction: column;
    position: relative; overflow: hidden;
    padding-top: 76px;
  }

  /* ── ambient light-theme glow behind the robot ── */
  .h3-amb { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
  .h3-amb::before, .h3-amb::after { content: ''; position: absolute; border-radius: 50%; filter: blur(60px); }
  .h3-amb::before {
    width: 40vw; height: 40vw; right: 2vw; top: 34%;
    background: radial-gradient(circle, rgba(60,185,140,0.10) 0%, rgba(60,185,140,0) 70%);
  }
  .h3-amb::after {
    width: 34vw; height: 34vw; left: 0; bottom: 6%;
    background: radial-gradient(circle, rgba(92,200,255,0.15) 0%, rgba(92,200,255,0) 70%);
  }

  /* ── robot occupies the right side, behind the content ──
       Locked to ONE scene-safe square frame at every size and centred
       vertically, so the scene never crops or goes portrait. Width is
       whichever is smaller: half the screen, or whatever keeps the square
       inside the available height. ── */
  .h3-robot {
    position: absolute; right: 0; top: 50%;
    /* nudge the robot right so it clears the DIGITAL headline (the empty
       canvas margin on its right just slips off-screen) */
    transform: translate(clamp(28px, 4.5vw, 84px), -50%);
    width: min(50%, calc(100svh - 76px)); aspect-ratio: 1 / 1; z-index: 3;
  }
  .h3-stage { position: absolute; inset: 0; }

  /* caption under the robot */
  .h3-robot-cap {
    position: absolute; left: 0; right: 0; bottom: clamp(4px, 2%, 26px);
    z-index: 4; text-align: center; pointer-events: none; padding: 0 20px;
  }
  .h3-robot-cap-t {
    display: block; font-size: clamp(12px, 0.95vw, 15px); font-weight: 900;
    letter-spacing: 0.01em; text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; line-height: 1.1;
  }
  .h3-robot-cap-d {
    display: block; margin-top: 6px; font-size: clamp(12px, 0.95vw, 14px);
    font-weight: 500; color: rgba(8,33,60,0.5); line-height: 1.5;
  }

  /* foreground robot, sits over the section gradient */
  .h3-fg-robot { position: absolute; inset: 0; z-index: 2; }
  .h3-fallback { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
  .h3-fallback span {
    width: 56px; height: 56px; border-radius: 50%;
    border: 3px solid rgba(8,33,60,0.12); border-top-color: ${GREEN};
    animation: h3spin 0.9s linear infinite; will-change: transform;
  }
  @keyframes h3spin { to { transform: rotate(360deg); } }

  /* ── LEFT: content. container-type makes the headline scale to THIS
       column (cqi units), never the full viewport - so it can never grow
       into the robot's half. ── */
  .h3-head {
    position: relative; z-index: 4; flex: 1; pointer-events: none;
    display: flex; flex-direction: column; justify-content: center;
    padding: clamp(28px, 5.5vh, 72px) clamp(24px, 4vw, 72px) clamp(18px, 3.5vh, 52px);
    container-type: inline-size;
  }
  /* desktop: keep the headline inside the left half, clear of the robot */
  @media (min-width: 981px) {
    .h3-head { width: 56%; }
  }

  /* padding-right widens the clip's visible (padding) box so the last glyph
     (e.g. the L in DIGITAL) is never trimmed by overflow:hidden. cqi keeps
     the breathing room proportional to the big headline. */
  .h3-clip { overflow: hidden; line-height: 0.88; display: block; padding-right: clamp(6px, 1.4cqi, 22px); }
  .h3-clip + .h3-clip { margin-top: clamp(2px, 0.4vw, 6px); }
  .h3-word {
    display: block; font-weight: 900; letter-spacing: 0.01em;
    line-height: 1; text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY};
  }
  .h3-word-green { color: ${GREEN}; }

  .h3-rule-row { display: flex; align-items: center; gap: 16px; margin-top: clamp(20px, 3vw, 44px); }
  .h3-rule { flex: 1; height: 2px; border-radius: 99px; max-width: 320px;
    background: linear-gradient(90deg, ${GREEN} 0%, rgba(60,185,140,0.1) 100%); transform-origin: left center; }
  .h3-rule-txt {
    font-size: clamp(9px, 0.65vw, 11px); font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; word-spacing: 0.14em; color: rgba(8,33,60,0.28); white-space: nowrap; flex-shrink: 0;
  }

  /* ── bottom bar ── */
  .h3-bar {
    position: relative; z-index: 5; flex-shrink: 0; pointer-events: auto;
    display: flex; align-items: center; flex-wrap: wrap;
    gap: clamp(16px, 2vw, 32px);
    padding: clamp(20px, 3vh, 36px) clamp(24px, 4vw, 72px);
    border-top: 1px solid rgba(8,33,60,0.08);
  }
  .h3-bar-desc { font-size: clamp(14px, 1.05vw, 17px); color: rgba(8,33,60,0.44);
    line-height: 1.7; font-weight: 500; flex: 1; min-width: 200px; }
  .h3-cta {
    display: inline-flex; align-items: center; gap: 12px;
    background: ${NAVY}; color: #fff;
    font-size: clamp(13px, 0.9vw, 15px); font-weight: 800;
    padding: 15px 30px; border-radius: 100px; border: none;
    cursor: pointer; font-family: inherit; min-height: 50px;
    letter-spacing: 0.2px; white-space: nowrap; flex-shrink: 0;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s; will-change: transform;
  }
  .h3-cta:hover { background: #0e3260; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(8,33,60,0.28); }
  .h3-cta-ring { width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

  /* ════════ RESPONSIVE: stack robot on top ════════ */
  @media (max-width: 980px) {
    .h3-robot { position: relative; top: auto; right: auto; bottom: auto; transform: none; aspect-ratio: auto; width: 100%; height: 44vh; order: -1; }
    .h3-head { align-items: flex-start; padding: clamp(20px, 4vh, 40px) clamp(24px, 5vw, 48px) clamp(24px, 4vh, 40px); }
    .h3-amb::before { width: 84vw; height: 84vw; right: -18vw; top: 34%; }
    .h3-amb::after { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .h3-fallback span { animation: none; }
  }
`

/* The hero panel - robot + gradient backdrop, owning its own in-view /
   robot-mount lifecycle so the 3D scene only spins up while on screen. */
function HeroPanel() {
  // Spline runs a non-stop render loop that keeps burning the GPU even when the
  // hero is far off-screen, which makes the WHOLE page scroll badly. We mount
  // the 3D scene only while the hero is in (or near) the viewport and unmount
  // it once it leaves - the render loop stops and the rest of the page scrolls
  // free. The generous margin keeps it alive through small scrolls near the top.
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { margin: '400px 0px 400px 0px' })
  const deferReady = useDeferredMount()

  return (
    <section ref={ref} className="h3-section" data-nav-overlap>
      <div className="h3-amb" aria-hidden="true" />

      <div className="h3-robot">
        <div className="h3-stage" aria-hidden="true">
          {inView && deferReady ? (
            <div className="h3-fg-robot">
              <Suspense fallback={<div className="h3-fallback"><span /></div>}>
                <RobotCanvas />
              </Suspense>
            </div>
          ) : (
            <div className="h3-fallback"><span /></div>
          )}
        </div>
        <motion.div
          className="h3-robot-cap"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
        >
          <span className="h3-robot-cap-t">Eyes on You</span>
          <span className="h3-robot-cap-d">Move your cursor and watch me follow along.</span>
        </motion.div>
      </div>

      <div className="h3-head"><Words /></div>
      <CtaRow />
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════════
   HERO 3 - Full-bleed layout/content with a white -> gray section gradient
   backdrop and the (transparent) robot on the right.
   ════════════════════════════════════════════════════════════════════ */
export function Hero3() {
  return (
    <>
      <style>{CSS}</style>

      <HeroPanel />
    </>
  )
}
