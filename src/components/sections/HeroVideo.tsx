import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* Duplicate of Hero3, robot swapped for a full-bleed background video.
   No gradient overlay, slightly smaller headline. Uses its own hv- class
   prefix so it never collides with the original h3- hero on the page. */

function Words() {
  const sz = { a: 'clamp(36px, 14cqi, 148px)', b: 'clamp(42px, 19cqi, 198px)', c: 'clamp(28px, 10.4cqi, 118px)' }
  return (
    <>
      <h1 style={{ margin: 0, fontWeight: 'inherit', letterSpacing: 'inherit' }}>
        <span className="hv-clip">
          <motion.span className="hv-word" style={{ fontSize: sz.a }}
            initial={{ y: '110%' }} animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}>
            We Build
          </motion.span>
        </span>
        <span className="hv-clip">
          <motion.span className="hv-word hv-word-green" style={{ fontSize: sz.b }}
            initial={{ y: '110%' }} animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}>
            Digital
          </motion.span>
        </span>
        <span className="hv-clip">
          <motion.span className="hv-word" style={{ fontSize: sz.c }}
            initial={{ y: '110%' }} animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}>
            Excellence.
          </motion.span>
        </span>
      </h1>
    </>
  )
}

function CtaRow() {
  const navigate = useNavigate()
  return (
    <motion.div
      className="hv-bar"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.56 }}
    >
      <p className="hv-bar-desc">
        Websites, apps &amp; SaaS platforms built for ambitious brands - delivered on time.
      </p>
      <button className="hv-cta" onClick={() => navigate('/contact')}>
        Start a Project
        <span className="hv-cta-ring">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
      </button>
    </motion.div>
  )
}

const CSS = `
  .hv-section {
    min-height: 100svh;
    display: flex; flex-direction: column;
    position: relative; overflow: hidden;
    padding-top: 76px;
  }

  /* ── full-bleed background video ── */
  .hv-video {
    position: absolute; inset: 0; z-index: 0;
    width: 100%; height: 100%; object-fit: cover;
    pointer-events: none;
  }

  /* ── LEFT: content. container-type makes the headline scale to THIS
       column (cqi units), never the full viewport. ── */
  .hv-head {
    position: relative; z-index: 4; flex: 1; pointer-events: none;
    display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left;
    padding: clamp(28px, 5.5vh, 72px) clamp(24px, 4vw, 72px) clamp(40px, 7vh, 100px);
    container-type: inline-size;
  }
  @media (min-width: 981px) {
    .hv-head { width: 56%; }
  }

  .hv-clip { overflow: hidden; line-height: 0.88; display: block; padding-right: clamp(6px, 1.4cqi, 22px); }
  .hv-clip + .hv-clip { margin-top: clamp(2px, 0.4vw, 6px); }
  .hv-word {
    display: block; font-weight: 900; letter-spacing: 0.01em;
    line-height: 1; text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY};
  }
  .hv-word-green { color: ${GREEN}; }

  .hv-rule-row { display: flex; align-items: center; gap: 16px; margin-top: clamp(20px, 3vw, 44px); }
  .hv-rule { flex: 1; height: 2px; border-radius: 99px; max-width: 320px;
    background: linear-gradient(90deg, ${GREEN} 0%, rgba(60,185,140,0.1) 100%); transform-origin: left center; }
  .hv-rule-txt {
    font-size: clamp(9px, 0.65vw, 11px); font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; word-spacing: 0.14em; color: rgba(8,33,60,0.5); white-space: nowrap; flex-shrink: 0;
  }

  /* ── bottom bar ── */
  .hv-bar {
    position: relative; z-index: 5; flex-shrink: 0; pointer-events: auto;
    display: flex; align-items: center; flex-wrap: wrap;
    gap: clamp(16px, 2vw, 32px);
    padding: clamp(20px, 3vh, 36px) clamp(24px, 4vw, 72px);
    border-top: 1px solid rgba(8,33,60,0.08);
  }
  .hv-bar-desc { font-size: clamp(14px, 1.05vw, 17px); color: rgba(8,33,60,0.68);
    line-height: 1.7; font-weight: 500; flex: 1; min-width: 200px; }
  .hv-cta {
    display: inline-flex; align-items: center; gap: 12px;
    background: ${NAVY}; color: #fff;
    font-size: clamp(13px, 0.9vw, 15px); font-weight: 800;
    padding: 15px 30px; border-radius: 100px; border: none;
    cursor: pointer; font-family: inherit; min-height: 50px;
    letter-spacing: 0.2px; white-space: nowrap; flex-shrink: 0;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s; will-change: transform;
  }
  .hv-cta:hover { background: #0e3260; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(8,33,60,0.28); }
  .hv-cta-ring { width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

  @media (max-width: 980px) {
    .hv-head { align-items: flex-start; justify-content: center; text-align: left; padding: clamp(28px, 6vh, 56px) clamp(24px, 5vw, 48px) clamp(24px, 4vh, 40px); }
  }
`

/* ════════════════════════════════════════════════════════════════════
   HERO VIDEO - duplicate of Hero3 with a full-bleed background video.
   ════════════════════════════════════════════════════════════════════ */
export function HeroVideo() {
  return (
    <>
      <style>{CSS}</style>

      <section className="hv-section" data-nav-overlap>
        <video
          className="hv-video"
          autoPlay muted loop playsInline
          preload="metadata"
          poster="/hero-updated-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero-updated.webm" type="video/webm" />
          <source src="/hero-updated.mp4" type="video/mp4" />
        </video>

        <div className="hv-head"><Words /></div>
        <CtaRow />
      </section>
    </>
  )
}
