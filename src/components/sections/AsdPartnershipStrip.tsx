const NAVY  = '#1A2B3C'
const GREEN = '#3CB98C'
const MUTED = 'rgba(26,43,60,0.58)'

/**
 * Government partnership strip - sits directly above the footer (home page).
 * Split card: a navy logo panel (left) fused to a light content panel (right)
 * so both sides share the same height and no vertical space is wasted.
 */
export function AsdPartnershipStrip() {
  return (
    <section className="asd-strip" aria-label="Australian Signals Directorate partnership">
      <span className="asd-strip-dots" aria-hidden />
      <a href="/partners" className="asd-card" aria-label="In partnership with the Australian Signals Directorate">
        <div className="asd-card-logo">
          <span className="asd-card-glow" aria-hidden />
          <img
            src="/partners/asd-lockup.png"
            alt="Australian Government - Australian Signals Directorate & Australian Cyber Security Centre (ACSC)"
            className="asd-card-img"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="asd-card-body">
          <span className="asd-card-eyebrow"><span className="asd-card-dot" />Government Partnership</span>
          <h1 className="asd-card-h">In partnership with the <span className="asd-g">Australian Signals Directorate</span></h1>
          <p className="asd-card-p">
            Eloma Group works alongside the Australian Government's Australian Signals Directorate (ASD) and the
            Australian Cyber Security Centre (ACSC) - aligning our operations to national-grade security standards,
            trusted infrastructure and resilient, security-first delivery.
          </p>
          <span className="asd-card-cta">View our partners<span className="asd-card-arrow" aria-hidden>→</span></span>
        </div>
      </a>

      <style>{`
        .asd-strip {
          position: relative; overflow: hidden;
          background: linear-gradient(180deg,#ffffff 0%,#f3faf7 100%);
          padding: clamp(28px,3.4vw,52px) clamp(24px,4vw,64px);
          border-top: 1px solid rgba(26,43,60,0.08);
        }
        .asd-strip-dots {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.5;
          background-image: radial-gradient(rgba(19,41,61,0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          -webkit-mask-image: linear-gradient(90deg,#000,transparent 72%);
          mask-image: linear-gradient(90deg,#000,transparent 72%);
        }

        /* the split card */
        .asd-card {
          position: relative; z-index: 1;
          display: flex; align-items: stretch;
          max-width: 1760px; margin: 0 auto;
          background: #fff;
          border: 1px solid rgba(26,43,60,0.10);
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 40px 80px -50px rgba(19,41,61,0.45);
          text-decoration: none;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.3s ease;
        }
        .asd-card:hover {
          transform: translateY(-4px);
          border-color: rgba(60,185,140,0.5);
          box-shadow: 0 56px 100px -50px rgba(19,41,61,0.55);
        }

        /* left - navy logo panel (fills full card height) */
        .asd-card-logo {
          position: relative; overflow: hidden; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg,#04264C 0%,#002248 100%);
          padding: clamp(14px,1.4vw,24px) clamp(20px,2vw,34px);
        }
        .asd-card-glow {
          position: absolute; top: -60%; left: -20%; width: 90%; height: 200%; border-radius: 50%;
          background: radial-gradient(circle, rgba(60,185,140,0.22), transparent 62%); pointer-events: none;
        }
        .asd-card-img { position: relative; z-index: 1; height: clamp(70px,6.5vw,116px); width: auto; display: block; }

        /* right - light content panel */
        .asd-card-body {
          flex: 1; min-width: 0;
          display: flex; flex-direction: column; justify-content: center;
          padding: clamp(18px,1.9vw,32px) clamp(26px,2.8vw,52px);
        }
        .asd-g { color: ${GREEN}; }
        .asd-card-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: 'Inter', sans-serif; font-weight: 800; font-size: clamp(10px,0.8vw,12px);
          letter-spacing: 2.2px; text-transform: uppercase; color: ${GREEN}; margin-bottom: 10px;
        }
        .asd-card-dot { width: 6px; height: 6px; border-radius: 50%; background: ${GREEN}; box-shadow: 0 0 0 4px rgba(60,185,140,0.16); }
        .asd-card-h {
          margin: 0 0 10px; font-family: 'Poppins', sans-serif; font-weight: 700;
          font-size: clamp(22px,2.3vw,38px); line-height: 1.1; letter-spacing: -0.03em; color: ${NAVY};
        }
        .asd-card-p {
          margin: 0; font-family: 'Inter', sans-serif; font-size: clamp(14px,1.15vw,17px);
          line-height: 1.8; color: ${MUTED}; max-width: 68ch;
        }
        .asd-card-cta {
          display: inline-flex; align-items: center; gap: 8px; margin-top: clamp(12px,1.4vw,18px);
          font-family: 'Poppins', sans-serif; font-weight: 600; font-size: clamp(13px,1.05vw,15px);
          letter-spacing: -0.01em; color: ${GREEN};
        }
        .asd-card-arrow { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .asd-card:hover .asd-card-arrow { transform: translateX(5px); }

        @media (max-width: 860px) {
          .asd-card { flex-direction: column; }
          .asd-card-logo { padding: clamp(30px,7vw,44px); }
          .asd-card-body { padding: clamp(28px,7vw,44px); }
        }
        @media (min-width: 1920px) {
          .asd-card { max-width: 1900px; }
          .asd-card-h { font-size: 42px; }
          .asd-card-p { font-size: 18px; }
          .asd-card-img { height: 128px; }
        }
        @media (min-width: 2560px) {
          .asd-card { max-width: 2400px; }
          .asd-card-h { font-size: 50px; }
          .asd-card-p { font-size: 20px; }
          .asd-card-img { height: 160px; }
        }
      `}</style>
    </section>
  )
}
