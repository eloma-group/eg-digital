import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { LogoBuild } from './LogoBuild'

const GREEN = '#3CB98C'

const TARGET = new Date('2026-06-13T00:00:00')

function getTimeLeft() {
  const diff = Math.max(0, TARGET.getTime() - Date.now())
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) { return String(n).padStart(2, '0') }

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
})

export function SplashScreen() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .sp-root {
          position: fixed;
          inset: 0;
          overflow: hidden;
          font-family: inherit;
        }

        /* Full-bleed video */
        .sp-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        /* Left-dark → right-transparent gradient overlay */
        .sp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(8,33,60,0.97) 0%,
            rgba(8,33,60,0.90) 20%,
            rgba(8,33,60,0.68) 38%,
            rgba(8,33,60,0.32) 55%,
            rgba(8,33,60,0.06) 72%,
            transparent 88%
          );
          z-index: 1;
          pointer-events: none;
        }

        /* ══════════════════════════════════
           CONTENT - single left column
           3-row layout: logo | hero | footer
        ══════════════════════════════════ */
        .sp-wrap {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: clamp(20px, 3vh, 48px) clamp(24px, 4vw, 72px);
          width: clamp(320px, 58vw, 860px);
        }

        /* ─── TOP: logo ─── */
        .sp-logo-row {
          flex-shrink: 0;
          padding-bottom: clamp(10px, 1.4vh, 20px);
        }

        .sp-logo-img {
          width: clamp(168px, 18vw, 280px);
          height: auto;
          display: block;
        }

        /* ─── MIDDLE: eyebrow + headline + subtitle ─── */
        .sp-hero {
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .sp-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: clamp(8px, 1.4vw, 18px);
        }
        .sp-eyebrow-line {
          width: clamp(22px, 2.8vw, 44px);
          height: 2px;
          background: ${GREEN};
          flex-shrink: 0;
        }
        .sp-eyebrow-text {
          font-size: clamp(10px, 0.72vw, 12px);
          font-weight: 800;
          letter-spacing: 3.5px;
          text-transform: uppercase; word-spacing: 0.14em;
          color: ${GREEN};
        }

        /* vh cap keeps 3 lines within viewport; clamp floor matches CLAUDE.md 52px minimum */
        .sp-headline {
          font-size: min(clamp(52px, 9vw, 120px), 13vh);
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase; word-spacing: 0.14em;
          letter-spacing: 0.01em;
          line-height: 1.04;
          margin: 0 0 clamp(10px, 1.4vw, 18px);
        }
        .sp-headline-accent { color: ${GREEN}; }

        .sp-subtitle {
          font-size: clamp(14px, 1vw, 15px);
          color: rgba(255,255,255,0.50);
          line-height: 1.75;
          margin: 0;
          max-width: 400px;
        }

        /* ─── BOTTOM: countdown + divider + contacts ─── */
        .sp-footer {
          flex-shrink: 0;
          padding-top: clamp(12px, 1.6vh, 24px);
          border-top: 1px solid rgba(255,255,255,0.10);
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: clamp(20px, 2.8vw, 36px);
          flex-wrap: wrap;
        }

        /* Countdown - compact horizontal */
        .sp-countdown {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1vw, 12px);
          flex-shrink: 0;
        }

        .sp-count-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }

        .sp-count-box {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 6px;
          padding: clamp(6px, 0.8vw, 10px) clamp(8px, 1.2vw, 14px);
          min-width: clamp(44px, 5vw, 66px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sp-count-box::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 2px;
          background: ${GREEN};
          opacity: 0.5;
          border-radius: 0 0 2px 2px;
        }

        .sp-count-num {
          font-size: clamp(20px, 2.6vw, 38px);
          font-weight: 900;
          color: white;
          letter-spacing: -0.03em;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          display: block;
        }

        .sp-count-label {
          font-size: clamp(7px, 0.5vw, 9px);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase; word-spacing: 0.14em;
          color: rgba(255,255,255,0.30);
        }

        .sp-count-sep {
          font-size: clamp(16px, 2.2vw, 30px);
          font-weight: 900;
          color: ${GREEN};
          line-height: 1;
          opacity: 0.55;
          flex-shrink: 0;
          margin-bottom: 14px;
        }

        /* Vertical divider between countdown and contacts */
        .sp-vdivider {
          width: 1px;
          height: clamp(36px, 4vw, 52px);
          background: rgba(255,255,255,0.12);
          flex-shrink: 0;
        }

        /* Contacts */
        .sp-contacts {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: clamp(16px, 2.2vw, 28px);
          flex-wrap: wrap;
        }

        .sp-contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: opacity 0.2s;
          cursor: pointer;
          min-height: 44px;
        }
        .sp-contact-link:hover { opacity: 0.6; }

        .sp-icon-ring {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(60,185,140,0.35);
          background: rgba(60,185,140,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sp-contact-meta {
          font-size: clamp(9px, 0.58vw, 10px);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase; word-spacing: 0.14em;
          color: rgba(255,255,255,0.26);
          margin-bottom: 2px;
        }
        .sp-contact-val {
          font-size: clamp(11px, 0.85vw, 13px);
          font-weight: 600;
          color: rgba(255,255,255,0.78);
        }

        /* Bottom green bar */
        .sp-bottom-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, ${GREEN} 0%, ${GREEN} 35%, rgba(60,185,140,0.25) 65%, transparent 100%);
          transform-origin: left;
          z-index: 3;
        }

        /* ══════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════ */

        /* Tablet L: 1024–1279px */
        @media (max-width: 1279px) {
          .sp-wrap     { width: clamp(300px, 66vw, 760px); }
          .sp-headline { font-size: clamp(52px, 8vw, 96px); }
        }

        /* Tablet: 768–1023px */
        @media (max-width: 1023px) {
          .sp-wrap     { width: clamp(300px, 74vw, 680px); }
          .sp-headline { font-size: clamp(52px, 8vw, 82px); }
          .sp-overlay  {
            background: linear-gradient(
              to right,
              rgba(8,33,60,0.97) 0%,
              rgba(8,33,60,0.88) 35%,
              rgba(8,33,60,0.55) 58%,
              rgba(8,33,60,0.12) 80%,
              transparent 100%
            );
          }
        }

        /* Mobile L / Tablet portrait: ≤767px */
        @media (max-width: 767px) {
          .sp-wrap     { width: 100%; }
          .sp-overlay  {
            background: rgba(8,33,60,0.88);
          }
          .sp-headline { font-size: clamp(52px, 10vw, 78px); }
          .sp-footer   { gap: 14px; }
          .sp-vdivider { display: none; }
          .sp-contacts { gap: 14px; }
        }

        /* Mobile: 375–539px */
        @media (max-width: 539px) {
          .sp-headline      { font-size: clamp(52px, 13vw, 68px); }
          .sp-subtitle      { font-size: 14px; max-width: 100%; }
          .sp-count-sep     { display: none; }
          .sp-count-box     { min-width: clamp(42px, 18vw, 60px); }
          .sp-count-num     { font-size: clamp(20px, 6vw, 32px); }
          .sp-footer        { flex-direction: column; align-items: flex-start; gap: 14px; }
          .sp-contacts      { flex-direction: row; }
        }

        /* Mobile S: 320–374px */
        @media (max-width: 374px) {
          .sp-headline  { font-size: clamp(38px, 11vw, 50px); }
          .sp-logo-img  { width: clamp(150px, 44vw, 200px); }
          .sp-count-num { font-size: clamp(16px, 5vw, 22px); }
          .sp-count-box { min-width: clamp(38px, 11vw, 48px); padding: 5px 6px; }
          .sp-wrap      { padding: clamp(14px, 4vw, 18px); }
        }

        /* Short landscape phones */
        @media (max-height: 560px) and (orientation: landscape) {
          .sp-headline  { font-size: clamp(30px, 5.5vh, 48px); }
          .sp-subtitle  { display: none; }
          .sp-count-num { font-size: clamp(16px, 3vh, 26px); }
          .sp-count-box { padding: 4px 7px; }
          .sp-wrap      { padding: 10px clamp(16px, 3vw, 36px); }
        }

        /* Desktop L: 1536–1919px */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .sp-wrap     { width: clamp(680px, 52vw, 920px); }
          .sp-headline { font-size: min(clamp(64px, 7.5vw, 130px), 13vh); }
        }

        /* 2K: 1920–2559px */
        @media (min-width: 1920px) {
          .sp-wrap     { width: clamp(720px, 50vw, 1020px); }
          .sp-headline { font-size: clamp(80px, 7.5vw, 148px); }
        }

        /* 4K / Ultra-wide: 2560px+ */
        @media (min-width: 2560px) {
          .sp-wrap     { width: clamp(900px, 46vw, 1260px); }
          .sp-headline { font-size: clamp(96px, 6.5vw, 178px); }
        }
      `}</style>

      <div className="sp-root">

        {/* Video */}
        <video
          className="sp-video"
          src="/images/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        {/* Gradient overlay */}
        <div className="sp-overlay" />

        {/* Content column */}
        <div className="sp-wrap">

          {/* TOP - animated logo build */}
          <motion.div
            className="sp-logo-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
          >
            <LogoBuild className="sp-logo-img" />
          </motion.div>

          {/* MIDDLE - headline */}
          <div className="sp-hero">
            <motion.div className="sp-eyebrow" {...fadeUp(0.18)}>
              <div className="sp-eyebrow-line" />
              <span className="sp-eyebrow-text">Coming Soon</span>
            </motion.div>

            <motion.h1 className="sp-headline" {...fadeUp(0.28)}>
              We're<br />
              <span className="sp-headline-accent">Building</span><br />
              Something
            </motion.h1>

            <motion.p className="sp-subtitle" {...fadeUp(0.38)}>
              Our website is under construction. We're working hard to craft
              an exceptional digital experience - launching soon.
            </motion.p>
          </div>

          {/* BOTTOM - countdown + contacts */}
          <motion.div className="sp-footer" {...fadeUp(0.5)}>

            {/* Countdown */}
            <div className="sp-countdown">

              <div className="sp-count-item">
                <div className="sp-count-box">
                  <span className="sp-count-num">{pad(timeLeft.days)}</span>
                </div>
                <span className="sp-count-label">Days</span>
              </div>

              <span className="sp-count-sep">:</span>

              <div className="sp-count-item">
                <div className="sp-count-box">
                  <span className="sp-count-num">{pad(timeLeft.hours)}</span>
                </div>
                <span className="sp-count-label">Hours</span>
              </div>

              <span className="sp-count-sep">:</span>

              <div className="sp-count-item">
                <div className="sp-count-box">
                  <span className="sp-count-num">{pad(timeLeft.minutes)}</span>
                </div>
                <span className="sp-count-label">Mins</span>
              </div>

              <span className="sp-count-sep">:</span>

              <div className="sp-count-item">
                <div className="sp-count-box">
                  <span className="sp-count-num">{pad(timeLeft.seconds)}</span>
                </div>
                <span className="sp-count-label">Secs</span>
              </div>

            </div>

            {/* Divider */}
            <div className="sp-vdivider" />

            {/* Contacts */}
            <div className="sp-contacts">

              <a href="tel:1800054555" className="sp-contact-link">
                <div className="sp-icon-ring">
                  <Phone size={15} color={GREEN} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="sp-contact-meta">Phone</div>
                  <div className="sp-contact-val">1800 054 555</div>
                </div>
              </a>

              <a href="mailto:connect@egdigital.com.au" className="sp-contact-link">
                <div className="sp-icon-ring">
                  <Mail size={15} color={GREEN} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="sp-contact-meta">Email</div>
                  <div className="sp-contact-val">connect@egdigital.com.au</div>
                </div>
              </a>

            </div>

          </motion.div>

        </div>

        {/* Bottom accent bar */}
        <motion.div
          className="sp-bottom-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.3, delay: 0.8, ease: EASE }}
        />

      </div>
    </>
  )
}
