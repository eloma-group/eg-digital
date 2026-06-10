const NAVY  = '#08213C'
const GREEN = '#3CB98C'

const COLS = [
  { heading: 'Product',   links: ['Features','Pricing','Integrations','Changelog','Roadmap'] },
  { heading: 'Company',   links: ['About Us','Careers','Blog','Press','Contact'] },
  { heading: 'Resources', links: ['Documentation','Help Centre','API Reference','Status','Webinars'] },
  { heading: 'Legal',     links: ['Privacy Policy','Terms of Service','Cookie Policy','GDPR','Security'] },
]

function IconTwitter() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
}
function IconLinkedin() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
}
function IconInstagram() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
}
function IconFacebook() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
}

export function FooterSection() {
  return (
    <>
      <style>{`
        .footer-wrap {
          background: ${NAVY};
          padding: clamp(64px,8vw,112px) clamp(24px,4vw,64px) 0;
        }
        .footer-inner { max-width: min(calc(100vw - 48px),1760px); margin: 0 auto; }
        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr;
          gap: clamp(32px,4vw,64px);
          padding-bottom: clamp(48px,5vw,72px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .footer-tagline { font-size: 14px; color: rgba(255,255,255,0.42); line-height: 1.7; max-width: 260px; margin-bottom: 24px; margin-top: 14px; }
        .footer-socials { display: flex; gap: 10px; }
        .footer-social {
          width: 38px; height: 38px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.45); cursor: pointer; transition: all 0.2s;
        }
        .footer-social:hover { border-color: ${GREEN}; color: ${GREEN}; }
        .footer-col-heading {
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,0.88);
          margin-bottom: 18px;
        }
        .footer-col-links { display: flex; flex-direction: column; gap: 11px; }
        .footer-col-links button {
          background: none; border: none; cursor: pointer;
          font-size: 14px; color: rgba(255,255,255,0.42);
          transition: color 0.2s; text-align: left;
          font-family: inherit; padding: 0;
        }
        .footer-col-links button:hover { color: rgba(255,255,255,0.85); }
        .footer-bottom {
          padding: 22px 0;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy { font-size: 13px; color: rgba(255,255,255,0.28); }
        .footer-copy-links { display: flex; gap: 18px; }
        .footer-copy-links button {
          font-size: 13px; color: rgba(255,255,255,0.28);
          background: none; border: none; cursor: pointer; transition: color 0.2s; font-family: inherit;
        }
        .footer-copy-links button:hover { color: rgba(255,255,255,0.65); }
        @media (max-width: 1100px) {
          .footer-top { grid-template-columns: 1fr 1fr 1fr; }
          .footer-brand { grid-column: 1/-1; }
        }
        @media (max-width: 640px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 400px) {
          .footer-top { grid-template-columns: 1fr; }
        }
        @media (min-width: 1920px) { .footer-inner { max-width: 1900px; } }
        @media (min-width: 2560px) { .footer-inner { max-width: 2440px; } }
      `}</style>

      <footer className="footer-wrap">
        <div className="footer-inner">
          <div className="footer-top">
            {/* Brand col */}
            <div className="footer-brand">
              <img src="/images/EG Digital Logo White-01.png" alt="EG Digital" style={{ height: 38, width: 'auto' }} />
              <p className="footer-tagline">
                Your single partner for cloud, development, cybersecurity, and digital growth — built for ambitious Australian businesses.
              </p>
              <div className="footer-socials">
                {[
                  { Icon: IconTwitter,   label: 'Twitter'   },
                  { Icon: IconLinkedin,  label: 'LinkedIn'  },
                  { Icon: IconInstagram, label: 'Instagram' },
                  { Icon: IconFacebook,  label: 'Facebook'  },
                ].map(({ Icon, label }) => (
                  <div key={label} className="footer-social" aria-label={label} role="link" tabIndex={0}>
                    <Icon />
                  </div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {COLS.map(col => (
              <div key={col.heading}>
                <div className="footer-col-heading">{col.heading}</div>
                <div className="footer-col-links">
                  {col.links.map(l => <button key={l}>{l}</button>)}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <span className="footer-copy">© 2026 EG Digital. All rights reserved.</span>
            <div className="footer-copy-links">
              <button>Privacy</button>
              <button>Terms</button>
              <button>Cookies</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
