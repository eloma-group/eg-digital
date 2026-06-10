import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LayoutGrid, Users, Cloud, TrendingUp, Package, Zap } from 'lucide-react'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const MS_PRODUCTS = [
  { Icon: LayoutGrid, label: 'Microsoft 365'  },
  { Icon: Users,      label: 'Teams'          },
  { Icon: Cloud,      label: 'Azure'          },
  { Icon: TrendingUp, label: 'Dynamics CRM'   },
  { Icon: Package,    label: 'Dynamics ERP'   },
  { Icon: Zap,        label: 'Power Platform' },
]


export function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <>
      <style>{`
        /* ── Section shell ── */
        .ab2-section {
          position: relative;
          min-height: clamp(640px, 90vh, 960px);
          overflow: hidden;
          font-family: inherit;
        }

        /* ── Ghost-white left panel ── */
        .ab2-left {
          position: absolute; inset: 0;
          background: ${CREAM};
          clip-path: polygon(0 0, 62% 0, 38% 100%, 0 100%);
          display: flex; align-items: center;
          will-change: transform;
        }

        /* ── NAVY right panel ── */
        .ab2-right {
          position: absolute; inset: 0;
          background: ${NAVY};
          clip-path: polygon(62% 0, 100% 0, 100% 100%, 38% 100%);
          will-change: transform;
        }
        .ab2-right-bloom {
          position: absolute; top: -14%; right: -4%;
          width: 70%; height: 80%;
          background: radial-gradient(ellipse, rgba(60,185,140,0.09) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ── Left content ── */
        .ab2-left-content {
          width: 40%;
          padding: clamp(48px, 6vw, 100px) clamp(24px, 4vw, 72px);
        }
        .ab2-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: clamp(10px, 0.75vw, 12px); font-weight: 800;
          letter-spacing: 2.5px; text-transform: uppercase; color: ${GREEN};
          margin-bottom: clamp(20px, 2.5vw, 36px);
        }
        .ab2-eyebrow-line {
          width: 22px; height: 1.5px; background: ${GREEN};
          flex-shrink: 0; border-radius: 1px;
        }
        .ab2-heading {
          font-size: clamp(32px, 4.2vw, 64px); font-weight: 900;
          letter-spacing: -0.045em; line-height: 0.9;
          text-transform: uppercase; color: ${NAVY};
          margin: 0 0 clamp(18px, 2.2vw, 32px);
        }
        .ab2-heading-accent { color: ${GREEN}; font-style: normal; }
        .ab2-body {
          font-size: clamp(15px, 1.2vw, 18px); color: rgba(8,33,60,0.58);
          line-height: 1.85; margin: 0 0 clamp(24px, 3vw, 40px);
        }
        .ab2-divider {
          width: 100%; height: 1px;
          background: rgba(8,33,60,0.09);
          margin-bottom: clamp(20px, 2.5vw, 36px);
        }
        .ab2-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ab2-cta {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: clamp(12px, 0.82vw, 14px); font-weight: 700;
          padding: 13px 22px; border-radius: 100px; min-height: 44px;
          cursor: pointer; font-family: inherit; letter-spacing: 0.3px;
          transition: background 0.22s, color 0.22s, border-color 0.22s, transform 0.18s;
        }
        .ab2-cta-primary {
          background: ${NAVY}; color: #fff; border: 1.5px solid ${NAVY};
        }
        .ab2-cta-primary:hover {
          background: ${GREEN}; border-color: ${GREEN}; color: ${NAVY};
          transform: translateY(-2px);
        }
        .ab2-cta-ghost {
          background: transparent; color: ${NAVY};
          border: 1.5px solid rgba(8,33,60,0.18);
        }
        .ab2-cta-ghost:hover { border-color: rgba(8,33,60,0.50); }

        /* ── Right Microsoft Partner panel ── */
        .ab2-ms-content {
          position: absolute;
          top: 50%; left: 65%;
          transform: translateY(-50%);
          width: 29%;
          max-width: 400px;
        }

        /* Partner badge */
        .ab2-ms-badge {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 100px;
          padding: 7px 14px 7px 10px;
          margin-bottom: clamp(18px, 2.2vw, 28px);
        }
        .ab2-ms-badge-text {
          font-size: clamp(9px, 0.65vw, 11px); font-weight: 800;
          letter-spacing: 2.2px; text-transform: uppercase;
          color: rgba(255,255,255,0.60);
        }

        /* Microsoft four-square logo */
        .ab2-ms-logo {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 2px; width: 16px; height: 16px; flex-shrink: 0;
        }
        .ab2-ms-logo span { display: block; border-radius: 1px; }

        /* Heading */
        .ab2-ms-heading {
          font-size: clamp(22px, 2.8vw, 40px); font-weight: 900;
          letter-spacing: -0.04em; line-height: 0.92;
          text-transform: uppercase; color: #fff;
          margin: 0 0 clamp(14px, 1.8vw, 22px);
        }

        /* Body */
        .ab2-ms-body {
          font-size: clamp(13px, 0.9vw, 15px); color: rgba(255,255,255,0.55);
          line-height: 1.80; margin: 0 0 clamp(18px, 2.2vw, 28px);
        }

        /* Product chip grid */
        .ab2-ms-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: clamp(7px, 0.8vw, 10px);
        }
        .ab2-ms-chip {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: clamp(9px, 1vw, 12px) clamp(10px, 1.2vw, 14px);
          transition: background 0.2s, border-color 0.2s;
          cursor: default;
        }
        .ab2-ms-chip:hover {
          background: rgba(60,185,140,0.10);
          border-color: rgba(60,185,140,0.28);
        }
        .ab2-ms-chip-icon {
          color: ${GREEN}; opacity: 0.85; flex-shrink: 0;
        }
        .ab2-ms-chip-label {
          font-size: clamp(10px, 0.72vw, 12px); font-weight: 700;
          letter-spacing: 0.2px; color: rgba(255,255,255,0.68);
          white-space: nowrap;
        }


        /* ── Green diagonal blade line ── */
        .ab2-blade-svg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          pointer-events: none; z-index: 3;
          overflow: visible;
        }
        .ab2-blade-line {
          stroke: ${GREEN}; stroke-width: 2;
          stroke-dasharray: 2200; stroke-dashoffset: 2200;
          vector-effect: non-scaling-stroke;
          transition: stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.35s;
        }
        .ab2-blade-line.is-drawn { stroke-dashoffset: 0; }

        /* ── Responsive ≤1000px — stack vertically ── */
        @media (max-width: 1000px) {
          .ab2-section { min-height: unset; }
          .ab2-left {
            position: relative; clip-path: none; display: block;
            padding: clamp(56px, 9vw, 100px) clamp(24px, 5vw, 56px);
          }
          .ab2-left-content { width: 100%; max-width: 680px; padding: 0; }
          .ab2-right {
            position: relative; clip-path: none;
            padding: clamp(48px, 8vw, 80px) clamp(24px, 5vw, 56px);
          }
          .ab2-ms-content {
            position: static; transform: none;
            width: 100%; max-width: 640px;
          }
          .ab2-blade-svg { display: none; }
        }

        @media (max-width: 540px) {
          .ab2-ms-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ab2-blade-line { transition: none; stroke-dashoffset: 0; }
        }
        @media (min-width: 1920px) {
          .ab2-left-content { max-width: 680px; }
          .ab2-ms-content { left: 63%; width: 32%; }
        }
        @media (min-width: 2560px) {
          .ab2-ms-content { left: 62%; width: 34%; }
        }
      `}</style>

      <section className="ab2-section" id="about" ref={sectionRef}>

        {/* ── Ghost-white left panel ── */}
        <div className="ab2-left">
          <motion.div
            className="ab2-left-content"
            initial={{ opacity: 0, x: -64 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, ease: EASE, delay: 0.12 }}
          >
            <div className="ab2-eyebrow">
              <span className="ab2-eyebrow-line" />
              Who We Are
            </div>

            <h2 className="ab2-heading">
              Your<br />
              <em className="ab2-heading-accent">last</em><br />
              agency.
            </h2>

            <p className="ab2-body">
              We're a tight-knit team of builders and designers obsessed with shipping
              great work. Based in Sydney, Australia — built for ambitious brands worldwide.
              No bloat, no excuses. Just exceptional digital products, on time, every time.
            </p>

            <div className="ab2-divider" />

            <div className="ab2-cta-row">
              <button
                className="ab2-cta ab2-cta-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Work With Us
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 9L9 1M9 1H2.5M9 1V7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              <button className="ab2-cta ab2-cta-ghost">Learn More</button>
            </div>
          </motion.div>
        </div>

        {/* ── NAVY right panel — Microsoft Partner ── */}
        <div className="ab2-right">
          <div className="ab2-right-bloom" />

          <div className="ab2-ms-content">

            {/* Partner badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            >
              <div className="ab2-ms-badge">
                {/* Microsoft four-square logo */}
                <div className="ab2-ms-logo" aria-hidden="true">
                  <span style={{ background: '#f25022' }} />
                  <span style={{ background: '#7fba00' }} />
                  <span style={{ background: '#00a4ef' }} />
                  <span style={{ background: '#ffb900' }} />
                </div>
                <span className="ab2-ms-badge-text">Microsoft Partner</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h3
              className="ab2-ms-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
            >
              End-to-End<br />
              Microsoft<br />
              Solutions
            </motion.h3>

            {/* Body */}
            <motion.p
              className="ab2-ms-body"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.40 }}
            >
              As a certified Microsoft partner, we deploy and manage the full
              suite — 365, Teams, Dynamics CRM, ERP, and Azure — so your team
              collaborates smarter from day one.
            </motion.p>

            {/* Product chip grid */}
            <motion.div
              className="ab2-ms-grid"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.48 }}
            >
              {MS_PRODUCTS.map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="ab2-ms-chip"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.50 + i * 0.07 }}
                >
                  <Icon size={14} className="ab2-ms-chip-icon" />
                  <span className="ab2-ms-chip-label">{label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ── GREEN diagonal blade line ── */}
        <svg className="ab2-blade-svg" aria-hidden="true" preserveAspectRatio="none">
          <line
            className={`ab2-blade-line${inView ? ' is-drawn' : ''}`}
            x1="62%" y1="0%"
            x2="38%" y2="100%"
          />
        </svg>

      </section>
    </>
  )
}
