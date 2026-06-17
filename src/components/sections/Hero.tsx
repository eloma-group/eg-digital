import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const SPRING = { stiffness: 55, damping: 20, mass: 1 }

export function Hero() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, SPRING)
  const smoothY = useSpring(mouseY, SPRING)

  // Back layer - watermark drifts slowest (feels furthest away)
  const backX  = useTransform(smoothX, v => v * 0.007)
  const backY  = useTransform(smoothY, v => v * 0.007)

  // Mid layer - arcs drift at medium speed
  const midX   = useTransform(smoothX, v => v * 0.018)
  const midY   = useTransform(smoothY, v => v * 0.018)

  // Front layer - heading drifts most (feels closest), stronger horizontal
  const frontX = useTransform(smoothX, v => v * 0.032)
  const frontY = useTransform(smoothY, v => v * 0.016)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - (rect.left + rect.width / 2))
    mouseY.set(e.clientY - (rect.top + rect.height / 2))
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <>
      <style>{`
        @keyframes heroPulse {
          0%   { transform: scale(1);   opacity: 0.75; }
          70%  { transform: scale(2.8); opacity: 0; }
          100% { transform: scale(2.8); opacity: 0; }
        }

        @keyframes heroGrain {
          0%   { transform: translate(0,    0);   }
          10%  { transform: translate(-2%, -3%);  }
          20%  { transform: translate(3%,   2%);  }
          30%  { transform: translate(-1%,  4%);  }
          40%  { transform: translate(4%,  -1%);  }
          50%  { transform: translate(-3%,  1%);  }
          60%  { transform: translate(1%,  -4%);  }
          70%  { transform: translate(-4%,  3%);  }
          80%  { transform: translate(2%,   1%);  }
          90%  { transform: translate(-1%, -2%);  }
        }

        /* ─── Section ─── */
        .hero-section {
          background: ${CREAM};
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          padding-top: 68px;
        }

        /* Rich green blooms on cream */
        .hero-section::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 1100px 820px at 108% -8%,  rgba(60,185,140,0.24) 0%, rgba(60,185,140,0.07) 48%, transparent 68%),
            radial-gradient(ellipse  640px 520px at 72%  108%, rgba(60,185,140,0.16) 0%, transparent 60%),
            radial-gradient(ellipse  420px 380px at  -6%  32%, rgba(60,185,140,0.10) 0%, transparent 58%);
        }

        /* Film grain overlay */
        .hero-grain-layer {
          position: absolute;
          inset: -50%; width: 200%; height: 200%;
          pointer-events: none; z-index: 3; opacity: 0.032;
          background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='300' height='300' filter='url(%23g)'/></svg>");
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: heroGrain 0.55s steps(1) infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-grain-layer { display: none; }
        }

        /* Giant background watermark - back layer */
        .hero-wm {
          position: absolute;
          font-size: clamp(260px, 42vw, 640px);
          font-weight: 900;
          color: rgba(8,33,60,0.03);
          text-transform: uppercase;
          letter-spacing: -0.05em;
          line-height: 1;
          top: 50%; right: -4%;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          will-change: transform;
        }

        /* ─── Decorative arcs - mid layer ─── */
        .hero-arcs {
          position: absolute; inset: 0;
          pointer-events: none; z-index: 1;
          will-change: transform;
        }
        .hero-arc {
          position: absolute;
          border-radius: 50%;
          background: transparent;
        }
        .hero-arc-1 {
          width: clamp(480px, 58vw, 860px);
          height: clamp(480px, 58vw, 860px);
          top: -28%; right: -14%;
          border: 1.5px solid rgba(60,185,140,0.14);
        }
        .hero-arc-2 {
          width: clamp(260px, 30vw, 460px);
          height: clamp(260px, 30vw, 460px);
          bottom: -18%; left: -7%;
          border: 1px solid rgba(60,185,140,0.10);
        }

        /* ─── Top meta strip ─── */
        .hero-meta {
          position: relative; z-index: 2; flex-shrink: 0;
          display: flex; align-items: center;
          padding: 14px clamp(24px, 4vw, 72px);
          border-bottom: 1px solid rgba(8,33,60,0.08);
          gap: clamp(8px, 1.5vw, 20px);
        }
        .hero-meta-tag {
          font-size: clamp(9px, 0.65vw, 11px);
          font-weight: 700; letter-spacing: 2.2px;
          text-transform: uppercase;
          color: rgba(8,33,60,0.3);
          white-space: nowrap;
        }
        .hero-meta-tag.accent { color: ${GREEN}; }
        .hero-meta-line {
          flex: 1; height: 1px;
          background: rgba(8,33,60,0.08);
          min-width: 12px;
        }
        @media (max-width: 560px) {
          .hero-meta-sm-hide { display: none; }
        }

        /* ─── Heading zone - front layer ─── */
        .hero-head {
          position: relative; z-index: 2;
          flex: 1;
          display: flex; flex-direction: column;
          justify-content: center;
          padding: clamp(28px, 5.5vh, 72px) clamp(24px, 4vw, 72px) clamp(18px, 3.5vh, 52px);
          will-change: transform;
        }

        .hero-clip {
          overflow: hidden;
          line-height: 0.88;
          display: block;
        }
        .hero-clip + .hero-clip {
          margin-top: clamp(2px, 0.4vw, 6px);
        }

        .hero-word {
          display: block;
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 0.88;
          text-transform: uppercase;
          color: ${NAVY};
        }
        .hero-word-green { color: ${GREEN}; }

        .hero-rule-row {
          display: flex; align-items: center; gap: 16px;
          margin-top: clamp(20px, 3vw, 44px);
        }
        .hero-rule {
          flex: 1; height: 2px; border-radius: 99px;
          background: linear-gradient(90deg, ${GREEN} 0%, rgba(60,185,140,0.1) 100%);
          transform-origin: left center;
        }
        .hero-rule-txt {
          font-size: clamp(9px, 0.65vw, 11px);
          font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(8,33,60,0.28);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ─── CTA bar ─── */
        .hero-bar {
          position: relative; z-index: 2; flex-shrink: 0;
          display: flex; align-items: center; flex-wrap: wrap;
          gap: clamp(16px, 2vw, 32px);
          padding: clamp(20px, 3vh, 36px) clamp(24px, 4vw, 72px);
          border-top: 1px solid rgba(8,33,60,0.08);
        }
        .hero-bar-desc {
          font-size: clamp(14px, 1.05vw, 17px);
          color: rgba(8,33,60,0.44); line-height: 1.7;
          font-weight: 500; flex: 1; min-width: 200px;
        }
        .hero-cta {
          display: inline-flex; align-items: center; gap: 12px;
          background: ${NAVY}; color: #fff;
          font-size: clamp(13px, 0.9vw, 15px); font-weight: 800;
          padding: 15px 30px; border-radius: 100px; border: none;
          cursor: pointer; font-family: inherit; min-height: 50px;
          letter-spacing: 0.2px; white-space: nowrap; flex-shrink: 0;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          will-change: transform;
        }
        .hero-cta:hover {
          background: #0e3260; transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(8,33,60,0.28);
        }
        .hero-cta-ring {
          width: 24px; height: 24px; border-radius: 50%;
          background: rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

      `}</style>

      <section
        className="hero-section"
        id="home"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        {/* Grain */}
        <div className="hero-grain-layer" aria-hidden="true" />

        {/* Back layer - EG watermark, drifts slowest */}
        <motion.div
          className="hero-wm"
          aria-hidden="true"
          style={{ x: backX, y: backY }}
          transformTemplate={(_v, t) => `translateY(-50%) ${t}`}
        >EG</motion.div>

        {/* Mid layer - decorative arcs */}
        <motion.div
          className="hero-arcs"
          aria-hidden="true"
          style={{ x: midX, y: midY }}
        >
          <div className="hero-arc hero-arc-1" />
          <div className="hero-arc hero-arc-2" />
        </motion.div>

        {/* ── Meta strip ── */}
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <span className="hero-meta-tag accent" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ position: 'relative', display: 'flex', width: 7, height: 7, flexShrink: 0 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: GREEN, animation: 'heroPulse 2s ease-out infinite' }} />
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, position: 'relative' }} />
            </span>
            EG Digital
          </span>
          <div className="hero-meta-line" />
          <span className="hero-meta-tag">Digital Agency</span>
          <div className="hero-meta-line hero-meta-sm-hide" />
          <span className="hero-meta-tag hero-meta-sm-hide">Est. 2021</span>
          <div className="hero-meta-line hero-meta-sm-hide" />
          <span className="hero-meta-tag hero-meta-sm-hide">Sydney, Australia</span>
        </motion.div>

        {/* ── Giant heading - front layer, drifts most ── */}
        <motion.div
          className="hero-head"
          style={{ x: frontX, y: frontY }}
        >

          <span className="hero-clip">
            <motion.span
              className="hero-word"
              style={{ fontSize: 'clamp(58px, 13.2vw, 210px)' }}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
            >
              We Build
            </motion.span>
          </span>

          <span className="hero-clip">
            <motion.span
              className="hero-word hero-word-green"
              style={{ fontSize: 'clamp(70px, 17.8vw, 284px)' }}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
            >
              Digital
            </motion.span>
          </span>

          <span className="hero-clip">
            <motion.span
              className="hero-word"
              style={{ fontSize: 'clamp(46px, 10.6vw, 168px)' }}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
            >
              Excellence.
            </motion.span>
          </span>

          <div className="hero-rule-row">
            <motion.div
              className="hero-rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.58 }}
              style={{ transformOrigin: 'left center' }}
            />
            <motion.span
              className="hero-rule-txt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.76 }}
            >
              Building ambitious brands since 2021
            </motion.span>
          </div>

        </motion.div>

        {/* ── CTA bar ── */}
        <motion.div
          className="hero-bar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.56 }}
        >
          <p className="hero-bar-desc">
            Websites, apps &amp; SaaS platforms built for ambitious brands - delivered on time.
          </p>

          <button
            className="hero-cta"
            onClick={() => navigate('/contact')}
          >
            Start a Project
            <span className="hero-cta-ring">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </motion.div>

      </section>
    </>
  )
}
