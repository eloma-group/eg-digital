import { BadgeCheck, Wallet, Headphones } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'
import { KineticBanner } from '../sections/JourneyHero'

type Tier = 'Cloud' | 'Technology' | 'Community'
type Partner = { name: string; mark: string; tier: Tier; accent: string }

/* Monogram tiles (not brand logos - premium, on-brand, no guessed SVGs). */
const PARTNERS: Partner[] = [
  { name: 'Amazon Web Services', mark: 'AWS', tier: 'Cloud', accent: '#ff9900' },
  { name: 'Google Cloud', mark: 'GC', tier: 'Cloud', accent: '#4285f4' },
  { name: 'Microsoft Azure', mark: 'AZ', tier: 'Cloud', accent: '#0078d4' },
  { name: 'Salesforce', mark: 'SF', tier: 'Technology', accent: '#00a1e0' },
  { name: 'Shopify', mark: 'SH', tier: 'Technology', accent: '#95bf47' },
  { name: 'Oracle', mark: 'OR', tier: 'Technology', accent: '#f80000' },
  { name: 'NetSuite', mark: 'NS', tier: 'Technology', accent: '#1f6bba' },
  { name: 'Zoho', mark: 'ZO', tier: 'Technology', accent: '#e42527' },
  { name: 'Sage', mark: 'SG', tier: 'Technology', accent: '#00a651' },
  { name: 'Tech Council AU', mark: 'TC', tier: 'Community', accent: '#7c3aed' },
  { name: 'AWS Activate', mark: 'AA', tier: 'Community', accent: '#ff9900' },
  { name: 'MS for Nonprofits', mark: 'MN', tier: 'Community', accent: GREEN },
  { name: 'Aus. Business Network', mark: 'AB', tier: 'Community', accent: '#0d2e52' },
]

const CERTS = ['Dynamics 365', 'Azure', 'Power Platform']

const BENEFITS = [
  { icon: BadgeCheck, title: 'Certified Expertise', body: 'Our team holds current certifications across every platform we deploy - so you get specialists, not generalists guessing their way through your stack.' },
  { icon: Wallet, title: 'Better Licensing', body: 'As an accredited partner we unlock partner-tier and nonprofit licensing - and we pass those savings straight through to you.' },
  { icon: Headphones, title: 'Priority Support', body: 'Direct partner escalation channels mean your critical issues move to the front of the queue - resolved fast, not parked.' },
]

const TIER_META: Record<Tier, string> = {
  Cloud: '#0078d4',
  Technology: GREEN,
  Community: '#7c3aed',
}

export function NetworksPartners() {
  usePageMeta(
    'EG Digital Partners | Networks & Technology Alliances',
    "Meet EG Digital's trusted partners and technology networks that power our digital solutions, cloud services, and enterprise-grade business systems.",
  )
  return (
    <PageLayout>
      <style>{`
        .np-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .np-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .np-shell { max-width: 2440px; } }

        .np-section { padding: clamp(56px,8vw,120px) 0; }
        .np-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px;
          flex-wrap: wrap; margin-bottom: clamp(28px,4vw,52px); }
        .np-h2 { font-size: clamp(36px,5.5vw,88px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.9;
          text-transform: uppercase; color: ${NAVY}; margin: 14px 0 0; }
        .np-legend { display: flex; gap: 18px; flex-wrap: wrap; }
        .np-legend-item { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 800;
          letter-spacing: 1.4px; text-transform: uppercase; color: rgba(8,33,60,0.5); }
        .np-legend-item span { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }

        /* ── Bento grid ── */
        .np-bento { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(12px,1.4vw,20px);
          grid-auto-rows: clamp(150px,15vw,212px); }
        .np-feat { grid-column: span 2; grid-row: span 2; }
        @media (max-width: 1000px) { .np-bento { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 680px) { .np-bento { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 420px) {
          .np-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
          .np-feat, .np-cell { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        .np-cell, .np-feat { min-width: 0; }

        /* Partner tile */
        .np-tile { height: 100%; min-height: 150px; box-sizing: border-box; display: flex; flex-direction: column;
          justify-content: space-between; gap: 12px; background: #fff; border: 1px solid rgba(8,33,60,0.08);
          border-radius: 20px; padding: clamp(18px,1.6vw,26px); box-shadow: 0 4px 22px rgba(8,33,60,0.05);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s, border-color 0.28s; will-change: transform; }
        .np-tile:hover { transform: translateY(-6px); border-color: rgba(60,185,140,0.5);
          box-shadow: 0 24px 54px rgba(8,33,60,0.13); }
        .np-mark { width: clamp(46px,3.4vw,58px); height: clamp(46px,3.4vw,58px); border-radius: 14px;
          display: flex; align-items: center; justify-content: center; font-size: clamp(15px,1.2vw,19px);
          font-weight: 900; letter-spacing: -0.02em; transition: transform 0.28s; }
        .np-tile:hover .np-mark { transform: scale(1.08) rotate(-3deg); }
        .np-tname { font-size: clamp(15px,1.15vw,18px); font-weight: 800; letter-spacing: -0.02em; color: ${NAVY}; line-height: 1.2; }
        .np-ttier { font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; margin-top: 6px; }

        /* Featured platinum cell */
        .np-featcard { position: relative; overflow: hidden; height: 100%; box-sizing: border-box;
          background: ${NAVY}; border-radius: 24px; padding: clamp(28px,3vw,52px);
          display: flex; flex-direction: column; justify-content: space-between; gap: 22px;
          box-shadow: 0 30px 70px -28px rgba(8,33,60,0.6); }
        .np-glow { position: absolute; top: -28%; right: -12%; width: clamp(260px,30vw,480px); height: clamp(260px,30vw,480px);
          border-radius: 50%; background: radial-gradient(circle, rgba(60,185,140,0.30), transparent 70%);
          pointer-events: none; animation: np-pulse 7s ease-in-out infinite; }
        @keyframes np-pulse { 0%,100% { opacity: 0.65; transform: scale(1); } 50% { opacity: 1; transform: scale(1.12); } }
        .np-plat { position: relative; display: inline-flex; align-items: center; gap: 10px; font-size: clamp(10px,0.8vw,12px);
          font-weight: 800; letter-spacing: 2.8px; text-transform: uppercase; color: ${GREEN}; }
        .np-feat-h { position: relative; font-size: clamp(40px,5.5vw,92px); font-weight: 900; letter-spacing: -0.05em;
          line-height: 0.9; text-transform: uppercase; color: #fff; margin: 0; }
        .np-feat-p { position: relative; font-size: clamp(14px,1.1vw,17px); line-height: 1.75; color: rgba(255,255,255,0.66);
          margin: 0; max-width: 46ch; font-weight: 500; }
        .np-chips { position: relative; display: flex; flex-wrap: wrap; gap: 9px; }
        .np-chip { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.85); padding: 7px 14px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); }

        /* ── Benefits ── */
        .np-benes { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(16px,2vw,28px); }
        @media (max-width: 900px) { .np-benes { grid-template-columns: 1fr; } }
        .np-bene { background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 22px;
          padding: clamp(26px,2.6vw,40px); box-shadow: 0 4px 24px rgba(8,33,60,0.05);
          transition: transform 0.25s, box-shadow 0.25s; will-change: transform; }
        .np-bene:hover { transform: translateY(-5px); box-shadow: 0 22px 52px rgba(8,33,60,0.12); }
        .np-bene-ic { width: 54px; height: 54px; border-radius: 15px; background: rgba(60,185,140,0.12);
          display: flex; align-items: center; justify-content: center; color: ${GREEN}; margin-bottom: 22px; }
        .np-bene-h { font-size: clamp(20px,1.8vw,26px); font-weight: 900; letter-spacing: -0.03em; text-transform: uppercase; color: ${NAVY}; margin: 0 0 12px; }
        .np-bene-b { font-size: clamp(14px,1.05vw,16px); line-height: 1.75; color: rgba(8,33,60,0.6); margin: 0; }

        @media (prefers-reduced-motion: reduce) { .np-glow { animation: none !important; } }
      `}</style>

      {/* ── Hero ── */}
      <KineticBanner
        eyebrow="Networks & Partners"
        pre="Certified across"
        rotate={['Microsoft', 'Azure', 'AWS', 'Salesforce', 'Shopify']}
        post="and more."
        stats={[['12+', 'Alliances'], ['1', 'Platinum'], ['3', 'Tiers']]}
      />

      {/* ── Alliance bento ── */}
      <section className="np-section" style={{ background: CREAM }}>
        <div className="np-shell">
          <Reveal>
            <div className="np-head">
              <div>
                <Eyebrow>Our Alliance</Eyebrow>
                <h2 className="np-h2">The companies<br />behind the work.</h2>
              </div>
              <div className="np-legend">
                {(Object.keys(TIER_META) as Tier[]).map(t => (
                  <span key={t} className="np-legend-item">
                    <span style={{ background: TIER_META[t] }} />{t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="np-bento">
            {/* Featured platinum partner */}
            <Reveal className="np-feat">
              <div className="np-featcard">
                <div className="np-glow" aria-hidden="true" />
                <div className="np-plat"><BadgeCheck size={16} /> Platinum Partner</div>
                <h3 className="np-feat-h">Microsoft</h3>
                <p className="np-feat-p">
                  Our deepest alliance. Certified across Dynamics 365, Azure and the Power Platform -
                  the full Microsoft cloud, delivered alongside our own custom build practice.
                </p>
                <div className="np-chips">
                  {CERTS.map(c => <span key={c} className="np-chip">{c}</span>)}
                </div>
              </div>
            </Reveal>

            {/* Partner tiles */}
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} className="np-cell" delay={Math.min(i * 0.04, 0.4)}>
                <div className="np-tile">
                  <div className="np-mark" style={{ background: `${p.accent}1a`, color: p.accent }}>{p.mark}</div>
                  <div>
                    <div className="np-tname">{p.name}</div>
                    <div className="np-ttier" style={{ color: TIER_META[p.tier] }}>{p.tier}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What partnership means ── */}
      <section className="np-section">
        <div className="np-shell">
          <Reveal>
            <div className="np-head">
              <div>
                <Eyebrow>Why It Matters</Eyebrow>
                <h2 className="np-h2">What our partnerships<br />mean for <span style={{ color: GREEN }}>you.</span></h2>
              </div>
            </div>
          </Reveal>
          <div className="np-benes">
            {BENEFITS.map((b, i) => {
              const Ic = b.icon
              return (
                <Reveal key={b.title} delay={i * 0.08}>
                  <div className="np-bene">
                    <div className="np-bene-ic"><Ic size={26} /></div>
                    <h3 className="np-bene-h">{b.title}</h3>
                    <p className="np-bene-b">{b.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Let's Build Together" heading="Put our network" highlight="to work." button="Start a conversation" />
    </PageLayout>
  )
}
