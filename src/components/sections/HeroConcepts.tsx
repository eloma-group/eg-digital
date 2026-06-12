import { motion } from 'framer-motion'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* ════════════════════════════════════════════════════════════════════
   Shared pieces — identical across every kinetic concept so the only
   thing you're comparing is the RIGHT-SIDE motion treatment.
   ════════════════════════════════════════════════════════════════════ */

function MetaStrip({ label }: { label: string }) {
  return (
    <motion.div
      className="hc-meta"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.05 }}
    >
      <span className="hc-meta-tag accent" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <span style={{ position: 'relative', display: 'flex', width: 7, height: 7, flexShrink: 0 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: GREEN, animation: 'hcPulse 2s ease-out infinite' }} />
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, position: 'relative' }} />
        </span>
        EG Digital
      </span>
      <div className="hc-meta-line" />
      <span className="hc-meta-tag">{label}</span>
      <div className="hc-meta-line hc-sm-hide" />
      <span className="hc-meta-tag hc-sm-hide">Est. 2021</span>
      <div className="hc-meta-line hc-sm-hide" />
      <span className="hc-meta-tag hc-sm-hide">Sydney, Australia</span>
    </motion.div>
  )
}

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
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

/* Shared CSS used by every kinetic concept section */
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
  .hc-meta {
    position: relative; z-index: 4; flex-shrink: 0;
    display: flex; align-items: center;
    padding: 14px clamp(24px, 4vw, 72px);
    border-bottom: 1px solid rgba(8,33,60,0.08);
    gap: clamp(8px, 1.5vw, 20px);
  }
  .hc-meta-tag {
    font-size: clamp(9px, 0.65vw, 11px);
    font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase;
    color: rgba(8,33,60,0.3); white-space: nowrap;
  }
  .hc-meta-tag.accent { color: ${GREEN}; }
  .hc-meta-line { flex: 1; height: 1px; background: rgba(8,33,60,0.08); min-width: 12px; }
  @media (max-width: 560px) { .hc-sm-hide { display: none; } }

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

  /* Concept divider label */
  .hc-tag {
    position: absolute; top: 78px; left: clamp(24px, 4vw, 72px); z-index: 5;
    display: inline-flex; align-items: center; gap: 8px;
    background: ${NAVY}; color: #fff; border-radius: 99px;
    padding: 7px 14px; font-size: 11px; font-weight: 800; letter-spacing: 1px;
  }
  .hc-tag b { color: ${GREEN}; }
`

/* ════════════════════════════════════════════════════════════════════
   KINETIC A — GRADIENT MESH  (the one you picked)
   A large living gradient-mesh form on the right, cropped by the frame.
   Slow organic blob motion + a rotating conic ring. GPU transforms only.
   ════════════════════════════════════════════════════════════════════ */
export function HeroKinetic() {
  return (
    <>
      <style>{`
        ${SHARED_CSS}
        @keyframes hcBlobA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-7%,5%) scale(1.18); } }
        @keyframes hcBlobB { 0%,100% { transform: translate(0,0) scale(1.1); } 50% { transform: translate(6%,-6%) scale(0.9); } }
        @keyframes hcBlobC { 0%,100% { transform: translate(0,0) scale(0.95); } 50% { transform: translate(4%,7%) scale(1.12); } }
        @keyframes hcSpin  { to { transform: rotate(360deg); } }

        .hcB-stage {
          position: absolute; top: 0; right: 0; bottom: 0;
          width: 52%; z-index: 1; pointer-events: none; overflow: hidden;
          -webkit-mask: linear-gradient(90deg, transparent 0%, #000 26%);
                  mask: linear-gradient(90deg, transparent 0%, #000 26%);
        }
        .hcB-blob { position: absolute; border-radius: 50%; filter: blur(48px); will-change: transform; }
        .hcB-b1 { width: 60%; height: 60%; top: 6%;  right: 2%;  background: radial-gradient(circle at 40% 40%, rgba(60,185,140,0.85), rgba(60,185,140,0) 70%); animation: hcBlobA 14s ease-in-out infinite; }
        .hcB-b2 { width: 52%; height: 52%; top: 34%; right: 22%; background: radial-gradient(circle at 50% 50%, rgba(8,33,60,0.55), rgba(8,33,60,0) 70%);     animation: hcBlobB 18s ease-in-out infinite; }
        .hcB-b3 { width: 46%; height: 46%; top: 2%;  right: 30%; background: radial-gradient(circle at 50% 50%, rgba(120,230,190,0.8), rgba(120,230,190,0) 70%); animation: hcBlobC 16s ease-in-out infinite; }

        .hcB-ring {
          position: absolute; top: 50%; right: 8%; width: clamp(280px, 26vw, 460px); aspect-ratio: 1;
          transform: translateY(-50%); border-radius: 50%; will-change: transform;
          background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.9) 60deg, transparent 130deg, ${GREEN} 220deg, transparent 300deg);
          -webkit-mask: radial-gradient(closest-side, transparent 70%, #000 71%, #000 100%);
                  mask: radial-gradient(closest-side, transparent 70%, #000 71%, #000 100%);
          opacity: 0.6; animation: hcSpin 26s linear infinite;
        }
        .hcB-ring2 {
          position: absolute; top: 50%; right: 13%; width: clamp(180px, 17vw, 300px); aspect-ratio: 1;
          transform: translateY(-50%); border-radius: 50%; will-change: transform;
          border: 1.5px solid rgba(255,255,255,0.6); animation: hcSpin 40s linear infinite reverse;
        }
        @media (prefers-reduced-motion: reduce) { .hcB-blob, .hcB-ring, .hcB-ring2 { animation: none; } }
        @media (max-width: 767px) { .hcB-stage { width: 100%; opacity: 0.5; } }
      `}</style>

      <section className="hc-section">
        <span className="hc-tag">KINETIC A · <b>GRADIENT MESH</b></span>
        <div className="hcB-stage" aria-hidden="true">
          <div className="hcB-blob hcB-b1" />
          <div className="hcB-blob hcB-b2" />
          <div className="hcB-blob hcB-b3" />
          <div className="hcB-ring" />
          <div className="hcB-ring2" />
        </div>
        <MetaStrip label="Creative Studio" />
        <div className="hc-head"><Words /></div>
        <CtaRow />
      </section>
    </>
  )
}

/* ════════════════════════════════════════════════════════════════════
   IMAGE HEROES — DIAGONAL reveal.
   Same idea as above, but the transparent→visible ramp runs on a diagonal
   (≈118°): invisible across the lower-left (text) area, fading in toward
   the top-right corner. Compositor-only ken-burns zoom.
   ════════════════════════════════════════════════════════════════════ */
function ImageHeroDiag({ src, tag, metaLabel }: { src: string; tag: React.ReactNode; metaLabel: string }) {
  return (
    <>
      <style>{`
        ${SHARED_CSS}
        @keyframes hcImgZoom { from { transform: scale(1); } to { transform: scale(1.07); } }
        .hcImgD-stage {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-size: cover; background-position: center right; background-repeat: no-repeat;
          transform-origin: 100% 0%;
          animation: hcImgZoom 26s ease-in-out infinite alternate;
          will-change: transform;
          /* diagonal: invisible lower-left → fully visible top-right */
          -webkit-mask: linear-gradient(118deg, transparent 0%, transparent 46%, rgba(0,0,0,0.5) 64%, rgba(0,0,0,0.9) 84%, #000 100%);
                  mask: linear-gradient(118deg, transparent 0%, transparent 46%, rgba(0,0,0,0.5) 64%, rgba(0,0,0,0.9) 84%, #000 100%);
        }
        /* cream wash over the revealed photo so it matches the hero theme */
        .hcImgD-tint {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: ${CREAM}; opacity: 0.32;
          -webkit-mask: linear-gradient(118deg, transparent 0%, transparent 46%, rgba(0,0,0,0.5) 64%, rgba(0,0,0,0.9) 84%, #000 100%);
                  mask: linear-gradient(118deg, transparent 0%, transparent 46%, rgba(0,0,0,0.5) 64%, rgba(0,0,0,0.9) 84%, #000 100%);
        }
        .hcImgD-fade {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: linear-gradient(118deg, ${CREAM} 0%, ${CREAM} 40%, rgba(248,248,255,0) 62%);
        }
        @media (prefers-reduced-motion: reduce) { .hcImgD-stage { animation: none; } }
        @media (max-width: 767px) {
          .hcImgD-stage {
            -webkit-mask: linear-gradient(118deg, transparent 0%, transparent 56%, rgba(0,0,0,0.6) 80%, #000 100%);
                    mask: linear-gradient(118deg, transparent 0%, transparent 56%, rgba(0,0,0,0.6) 80%, #000 100%);
            opacity: 0.6;
          }
          .hcImgD-fade { background: linear-gradient(118deg, ${CREAM} 0%, ${CREAM} 50%, rgba(248,248,255,0) 78%); }
        }
      `}</style>

      <section className="hc-section">
        <span className="hc-tag">{tag}</span>
        <motion.div
          className="hcImgD-stage"
          aria-hidden="true"
          style={{ backgroundImage: `url(${src})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: EASE }}
        />
        <div className="hcImgD-tint" aria-hidden="true" />
        <div className="hcImgD-fade" aria-hidden="true" />

        <MetaStrip label={metaLabel} />
        <div className="hc-head"><Words /></div>
        <CtaRow />
      </section>
    </>
  )
}

export function HeroImageFujiDiag() {
  return (
    <ImageHeroDiag
      src="https://impeccable.style/neo-mirai/assets/manifesto-fuji-regenerated.webp"
      tag={<>IMAGE A · <b>FUJI · DIAGONAL</b></>}
      metaLabel="Creative Studio"
    />
  )
}

export function HeroImageCityDiag() {
  return (
    <ImageHeroDiag
      src="https://impeccable.style/neo-mirai/assets/hero-city.webp"
      tag={<>IMAGE B · <b>CITY · DIAGONAL</b></>}
      metaLabel="Creative Studio"
    />
  )
}

/* ════════════════════════════════════════════════════════════════════
   VIDEO HERO — DIAGONAL reveal.
   Same diagonal transparent→visible ramp as the image heroes, but the
   right side plays the EG Digital homepage video. Compositor-only ken-burns
   zoom; muted + looped autoplay so it never blocks paint or interaction.
   ════════════════════════════════════════════════════════════════════ */
export function HeroVideoDiag() {
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
          background: linear-gradient(118deg, ${CREAM} 0%, ${CREAM} 40%, rgba(248,248,255,0) 62%);
        }
        @media (prefers-reduced-motion: reduce) { .hcVid-el { animation: none; } }
        @media (max-width: 767px) {
          .hcVid-el {
            -webkit-mask: linear-gradient(118deg, transparent 0%, transparent 56%, rgba(0,0,0,0.6) 80%, #000 100%);
                    mask: linear-gradient(118deg, transparent 0%, transparent 56%, rgba(0,0,0,0.6) 80%, #000 100%);
            opacity: 0.6;
          }
          .hcVid-fade { background: linear-gradient(118deg, ${CREAM} 0%, ${CREAM} 50%, rgba(248,248,255,0) 78%); }
        }
      `}</style>

      <section className="hc-section">
        <span className="hc-tag">VIDEO · <b>HOMEPAGE · DIAGONAL</b></span>
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

        <MetaStrip label="Creative Studio" />
        <div className="hc-head"><Words /></div>
        <CtaRow />
      </section>
    </>
  )
}
