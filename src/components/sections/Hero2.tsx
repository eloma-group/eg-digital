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
      className="hc-bar"
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.56 }}
    >
      <p className="hc-bar-desc">
        Websites, apps &amp; SaaS platforms built for ambitious brands - delivered on time.
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
   HERO 2 - Image hero with diagonal reveal (Tokyo skyline + Fuji).
   Mirrors Hero 1 exactly, but reveals /images/hero-image.png on the
   right side. Compositor-only ken-burns zoom.
   ════════════════════════════════════════════════════════════════════ */
export function Hero2() {
  const src = '/images/hero-image.png'
  return (
    <>
      <style>{`
        ${SHARED_CSS}
        /* slow ken-burns: zoom + gentle diagonal drift (compositor-only) */
        @keyframes hcImg2Zoom {
          from { transform: scale(1.04) translate3d(0, 0, 0); }
          to   { transform: scale(1.1) translate3d(-1.6%, -1%, 0); }
        }
        /* atmospheric layer that drifts across the sky like moving clouds */
        @keyframes hcImg2Clouds {
          0%   { transform: translate3d(-11%, 0, 0); }
          100% { transform: translate3d(11%, 0, 0); }
        }
        /* second, slower + opposite-direction layer for parallax depth */
        @keyframes hcImg2Clouds2 {
          0%   { transform: translate3d(9%, 1%, 0); }
          100% { transform: translate3d(-9%, -1%, 0); }
        }
        /* full-bleed image - no diagonal mask */
        .hcImg2-stage {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-size: cover; background-position: center; background-repeat: no-repeat;
          transform-origin: center;
          animation: hcImg2Zoom 30s ease-in-out infinite alternate;
          will-change: transform;
        }
        .hcImg2-clouds {
          position: absolute; inset: -10% -16%; z-index: 1; pointer-events: none;
          background:
            radial-gradient(40% 30% at 22% 26%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%),
            radial-gradient(34% 26% at 62% 18%, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0) 62%),
            radial-gradient(46% 32% at 84% 34%, rgba(255,255,255,0.46) 0%, rgba(255,255,255,0) 64%);
          opacity: 0.9;
          animation: hcImg2Clouds 26s ease-in-out infinite alternate;
          will-change: transform;
        }
        /* slower, larger wisps behind the front layer → parallax */
        .hcImg2-clouds2 {
          position: absolute; inset: -12% -18%; z-index: 1; pointer-events: none;
          background:
            radial-gradient(52% 40% at 40% 14%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 64%),
            radial-gradient(60% 44% at 74% 24%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 66%);
          opacity: 0.75;
          animation: hcImg2Clouds2 46s ease-in-out infinite alternate;
          will-change: transform;
        }
        /* left scrim keeps the navy headline legible over the photo */
        .hcImg2-scrim {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 22%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.25) 58%, rgba(255,255,255,0) 76%),
            linear-gradient(0deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 32%);
        }
        @media (prefers-reduced-motion: reduce) {
          .hcImg2-stage, .hcImg2-clouds, .hcImg2-clouds2 { animation: none; }
          .hcImg2-clouds { opacity: 0.4; }
          .hcImg2-clouds2 { opacity: 0.3; }
        }
        @media (max-width: 767px) {
          .hcImg2-scrim {
            background:
              linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0.5) 75%, rgba(255,255,255,0.1) 100%),
              linear-gradient(0deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 36%);
          }
        }
      `}</style>

      <section className="hc-section" data-nav-overlap>
        <motion.div
          className="hcImg2-stage"
          aria-hidden="true"
          style={{ backgroundImage: `url(${src})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: EASE }}
        />
        <div className="hcImg2-clouds2" aria-hidden="true" />
        <div className="hcImg2-clouds" aria-hidden="true" />
        <div className="hcImg2-scrim" aria-hidden="true" />

        <div className="hc-head"><Words /></div>
        <CtaRow />
      </section>
    </>
  )
}
