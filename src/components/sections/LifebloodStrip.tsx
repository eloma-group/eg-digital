import { ElomaLink } from '../../lib/elomaLink'

// Lifeblood / Australian Red Cross brand red - defined locally (never hardcoded inline).
const RED   = '#E4002B'
const NAVY  = '#1A2B3C'
const MUTED = 'rgba(26,43,60,0.58)'

// Eloma Group's Lifeblood team sign-up page.
const TEAM_URL = 'https://my.donateblood.com.au/app/myteams_home/Eloma%20Group?orgId=209771'

/**
 * Blood-donation call-to-action strip - sits directly above the footer on every
 * page (rendered from FooterSection). Red-themed to distinguish it from the navy
 * ASD partnership strip while keeping the shared split-card language.
 */
export function LifebloodStrip() {
  return (
    <section className="lb-strip" aria-label="Eloma Group blood donation team">
      <span className="lb-strip-dots" aria-hidden />
      <div className="lb-card">
        <div className="lb-card-logo">
          <span className="lb-card-glow" aria-hidden />
          <img
            src="/partners/lifeblood-lockup.png"
            alt="Australian Red Cross Lifeblood"
            className="lb-card-img"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="lb-card-body">
          <span className="lb-card-eyebrow">
            <svg className="lb-card-heart" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 21s-7.5-4.9-10.2-9.2C.2 9.1.9 5.6 3.8 4.2c2-1 4.3-.3 5.6 1.3L12 8l2.6-2.5c1.3-1.6 3.6-2.3 5.6-1.3 2.9 1.4 3.6 4.9 2 7.6C19.5 16.1 12 21 12 21z"/>
            </svg>
            Give blood, give life
          </span>
          <h2 className="lb-card-h">Join the <ElomaLink /> blood donation team</h2>
          <p className="lb-card-p">
            Every donation can help save up to three lives. <ElomaLink /> proudly partners with
            Australian Red Cross Lifeblood - our people, partners and community roll up their sleeves
            together. Join our team and see how our small acts add up to a life-changing gift.
          </p>
        </div>
        <div className="lb-card-action">
          <a
            href={TEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lb-card-btn"
            aria-label="Join the Eloma Group blood donation team"
          >
            Join our team<span className="lb-card-arrow" aria-hidden>↗</span>
          </a>
        </div>
      </div>

      <style>{`
        .lb-strip {
          position: relative; overflow: hidden;
          background: linear-gradient(180deg,#ffffff 0%,#fdf2f4 100%);
          padding: clamp(28px,3.4vw,52px) clamp(24px,4vw,64px);
          border-top: 1px solid rgba(228,0,43,0.10);
        }
        .lb-strip-dots {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.5;
          background-image: radial-gradient(rgba(228,0,43,0.06) 1px, transparent 1px);
          background-size: 26px 26px;
          -webkit-mask-image: linear-gradient(90deg,#000,transparent 72%);
          mask-image: linear-gradient(90deg,#000,transparent 72%);
        }

        /* the split card */
        .lb-card {
          position: relative; z-index: 1;
          display: flex; align-items: stretch;
          max-width: 1760px; margin: 0 auto;
          background: #fff;
          border: 1px solid rgba(228,0,43,0.12);
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 40px 80px -50px rgba(228,0,43,0.40);
        }

        /* left - red logo panel (fills full card height) */
        .lb-card-logo {
          position: relative; overflow: hidden; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg,#E4002B 0%,#B00021 100%);
          padding: clamp(14px,1.4vw,24px) clamp(20px,2vw,34px);
        }
        .lb-card-glow {
          position: absolute; top: -60%; right: -20%; width: 90%; height: 200%; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.28), transparent 62%); pointer-events: none;
        }
        .lb-card-img { position: relative; z-index: 1; height: clamp(56px,5vw,92px); width: auto; display: block; border-radius: 8px; }

        /* middle - content panel */
        .lb-card-body {
          flex: 1; min-width: 0;
          display: flex; flex-direction: column; justify-content: center;
          padding: clamp(18px,1.9vw,32px) clamp(26px,2.8vw,52px);
        }
        .lb-card-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: 'Eloma Sans', 'Inter', sans-serif; font-weight: 800; font-size: clamp(10px,0.8vw,12px);
          letter-spacing: 2.2px; text-transform: uppercase; word-spacing: 0.14em; color: ${RED}; margin-bottom: 10px;
        }
        .lb-card-heart { width: 15px; height: 15px; flex-shrink: 0; }
        .lb-card-h {
          margin: 0 0 10px; font-family: 'Eloma Sans Heading', 'Poppins', sans-serif; font-weight: 700;
          font-size: clamp(22px,2.3vw,38px); line-height: 1.15; letter-spacing: 0.01em; color: ${NAVY};
        }
        .lb-card-p {
          margin: 0; font-family: 'Eloma Sans', 'Inter', sans-serif; font-size: clamp(14px,1.15vw,17px);
          line-height: 1.8; color: ${MUTED}; max-width: 68ch;
        }
        /* Eloma Group links inherit the surrounding text - no underline. */
        .lb-card-h a, .lb-card-p a { text-decoration: none !important; }

        /* right - CTA button panel */
        .lb-card-action {
          flex-shrink: 0; display: flex; align-items: center;
          padding: clamp(18px,1.9vw,32px) clamp(26px,2.8vw,48px) clamp(18px,1.9vw,32px) 0;
        }
        .lb-card-btn {
          display: inline-flex; align-items: center; gap: 8px;
          min-height: 48px; padding: 0 clamp(22px,1.8vw,30px);
          background: ${RED}; color: #fff; white-space: nowrap;
          font-family: 'Eloma Sans', 'Poppins', sans-serif; font-weight: 700; font-size: clamp(14px,1.05vw,16px);
          letter-spacing: -0.01em; text-decoration: none; border-radius: 14px;
          box-shadow: 0 18px 34px -18px rgba(228,0,43,0.65);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, background 0.3s ease;
        }
        .lb-card-btn:hover {
          transform: translateY(-3px); background: #c8001f;
          box-shadow: 0 26px 46px -18px rgba(228,0,43,0.7);
        }
        .lb-card-arrow { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .lb-card-btn:hover .lb-card-arrow { transform: translate(3px,-3px); }

        /* Tablet & down - stack the action below the copy */
        @media (max-width: 1080px) {
          .lb-card { flex-wrap: wrap; }
          .lb-card-body { flex-basis: 100%; }
          .lb-card-action {
            flex-basis: 100%;
            padding: 0 clamp(26px,2.8vw,52px) clamp(24px,3vw,36px);
          }
          .lb-card-btn { width: 100%; justify-content: center; }
        }
        @media (max-width: 860px) {
          .lb-card { flex-direction: column; }
          .lb-card-logo { padding: clamp(30px,7vw,44px); }
          .lb-card-body { padding: clamp(28px,7vw,44px) clamp(28px,7vw,44px) clamp(18px,4vw,24px); }
          .lb-card-action { padding: 0 clamp(28px,7vw,44px) clamp(28px,7vw,44px); }
        }
        @media (min-width: 1920px) {
          .lb-card { max-width: 1900px; }
          .lb-card-h { font-size: 42px; }
          .lb-card-p { font-size: 18px; }
          .lb-card-img { height: 100px; }
        }
        @media (min-width: 2560px) {
          .lb-card { max-width: 2400px; }
          .lb-card-h { font-size: 50px; }
          .lb-card-p { font-size: 20px; }
          .lb-card-img { height: 128px; }
        }
      `}</style>
    </section>
  )
}
