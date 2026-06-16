import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#ffffff'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

function Words() {
  return (
    <>
      <span className="hc-clip">
        <motion.span className="hc-word" style={{ fontSize: 'clamp(58px, 13.2vw, 210px)' }}
          initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}>
          We Build
        </motion.span>
      </span>
      <span className="hc-clip">
        <motion.span className="hc-word hc-word-green" style={{ fontSize: 'clamp(70px, 17.8vw, 284px)' }}
          initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}>
          Digital
        </motion.span>
      </span>
      <span className="hc-clip">
        <motion.span className="hc-word" style={{ fontSize: 'clamp(46px, 10.6vw, 168px)' }}
          initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}>
          Excellence.
        </motion.span>
      </span>

      <div className="hc-rule-row">
        <motion.div className="hc-rule" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.58 }} style={{ transformOrigin: 'left center' }} />
        <motion.span className="hc-rule-txt" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.76 }}>
          Building ambitious brands since 2021
        </motion.span>
      </div>
    </>
  )
}

function CtaRow() {
  const navigate = useNavigate()
  return (
    <motion.div
      className="hc-bar"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.56 }}
    >
      <p className="hc-bar-desc">
        Websites, apps &amp; SaaS platforms built for ambitious brands — delivered on time.
      </p>
      <button
        className="hc-cta"
        onClick={() => navigate('/contact')}
      >
        Start a Project
        <span className="hc-cta-ring">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
      </button>
    </motion.div>
  )
}

const SHARED_CSS = `
  @keyframes hcPulse {
    0%   { transform: scale(1);   opacity: 0.75; }
    70%  { transform: scale(2.8); opacity: 0; }
    100% { transform: scale(2.8); opacity: 0; }
  }
  .hc-section {
    background: ${CREAM};
    min-height: 100svh;
    display: flex; flex-direction: column;
    position: relative; overflow: hidden;
    padding-top: 68px;
  }

  .hc-clip { overflow: hidden; line-height: 0.88; display: block; }
  .hc-clip + .hc-clip { margin-top: clamp(2px, 0.4vw, 6px); }
  .hc-word {
    display: block; font-weight: 900; letter-spacing: -0.05em;
    line-height: 0.88; text-transform: uppercase; color: ${NAVY};
  }
  .hc-word-green { color: ${GREEN}; }

  .hc-rule-row { display: flex; align-items: center; gap: 16px; margin-top: clamp(20px, 3vw, 44px); }
  .hc-rule { flex: 1; height: 2px; border-radius: 99px; max-width: 320px;
    background: linear-gradient(90deg, ${GREEN} 0%, rgba(60,185,140,0.1) 100%); transform-origin: left center; }
  .hc-rule-txt {
    font-size: clamp(9px, 0.65vw, 11px); font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; color: rgba(8,33,60,0.28); white-space: nowrap; flex-shrink: 0;
  }

  .hc-head {
    position: relative; z-index: 3; flex: 1;
    display: flex; flex-direction: column; justify-content: center;
    padding: clamp(28px, 5.5vh, 72px) clamp(24px, 4vw, 72px) clamp(18px, 3.5vh, 52px);
  }

  .hc-bar {
    position: relative; z-index: 4; flex-shrink: 0;
    display: flex; align-items: center; flex-wrap: wrap;
    gap: clamp(16px, 2vw, 32px);
    padding: clamp(20px, 3vh, 36px) clamp(24px, 4vw, 72px);
    border-top: 1px solid rgba(8,33,60,0.08);
  }
  .hc-bar-desc { font-size: clamp(14px, 1.05vw, 17px); color: rgba(8,33,60,0.44);
    line-height: 1.7; font-weight: 500; flex: 1; min-width: 200px; }
  .hc-cta {
    display: inline-flex; align-items: center; gap: 12px;
    background: ${NAVY}; color: #fff;
    font-size: clamp(13px, 0.9vw, 15px); font-weight: 800;
    padding: 15px 30px; border-radius: 100px; border: none;
    cursor: pointer; font-family: inherit; min-height: 50px;
    letter-spacing: 0.2px; white-space: nowrap; flex-shrink: 0;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s; will-change: transform;
  }
  .hc-cta:hover { background: #0e3260; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(8,33,60,0.28); }
  .hc-cta-ring { width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
`

/* ════════════════════════════════════════════════════════════════════
   HERO 2 — Video hero with diagonal reveal.
   Same diagonal transparent→visible ramp as Hero 1, but the right side
   plays the EG Digital homepage video. Compositor-only ken-burns zoom;
   muted + looped autoplay so it never blocks paint or interaction.
   ════════════════════════════════════════════════════════════════════ */
export function Hero2() {
  return (
    <>
      <style>{`
        ${SHARED_CSS}
        @keyframes hcVidZoom { from { transform: scale(1); } to { transform: scale(1.06); } }
        .hcVid-stage { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
        .hcVid-el {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center right;
          transform-origin: 100% 0%;
          animation: hcVidZoom 24s ease-in-out infinite alternate;
          will-change: transform;
          /* diagonal: invisible lower-left (text) → fully visible top-right */
          -webkit-mask: linear-gradient(118deg, transparent 0%, transparent 32%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.92) 72%, #000 90%);
                  mask: linear-gradient(118deg, transparent 0%, transparent 32%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.92) 72%, #000 90%);
        }
        .hcVid-fade {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: linear-gradient(118deg, ${CREAM} 0%, ${CREAM} 40%, rgba(255,255,255,0) 62%);
        }
        @media (prefers-reduced-motion: reduce) { .hcVid-el { animation: none; } }
        @media (max-width: 767px) {
          .hcVid-el {
            -webkit-mask: linear-gradient(118deg, transparent 0%, transparent 56%, rgba(0,0,0,0.6) 80%, #000 100%);
                    mask: linear-gradient(118deg, transparent 0%, transparent 56%, rgba(0,0,0,0.6) 80%, #000 100%);
            opacity: 0.6;
          }
          .hcVid-fade { background: linear-gradient(118deg, ${CREAM} 0%, ${CREAM} 50%, rgba(255,255,255,0) 78%); }
        }
      `}</style>

      <section className="hc-section" data-nav-overlap>
        <div className="hcVid-stage" aria-hidden="true">
          <video
            className="hcVid-el"
            autoPlay muted loop playsInline preload="auto"
            ref={el => { if (el) { el.muted = true; el.play().catch(() => {}) } }}
          >
            <source src="/images/EG%20Digital%20Homepage%20Video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hcVid-fade" aria-hidden="true" />

        <div className="hc-head"><Words /></div>
        <CtaRow />
      </section>
    </>
  )
}
