import { BadgeCheck, Wallet, Headphones, Globe, Check } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'
import { KineticBanner } from '../sections/JourneyHero'
import { ElomaLink } from '../../lib/elomaLink'

const UNGC_PRINCIPLES = [
  'Human rights & fair labour standards',
  'Environmental responsibility',
  'Anti-corruption & ethical governance',
]

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
        .np-h2 { font-size: clamp(36px,5.5vw,88px); font-weight: 900; letter-spacing: 0.01em; line-height: 1.02;
          text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; margin: 14px 0 0; }
        .np-legend { display: flex; gap: 18px; flex-wrap: wrap; }
        .np-legend-item { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 800;
          letter-spacing: 1.4px; text-transform: uppercase; word-spacing: 0.14em; color: rgba(8,33,60,0.5); }
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
        .np-ttier { font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; word-spacing: 0.14em; margin-top: 6px; }

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
          font-weight: 800; letter-spacing: 2.8px; text-transform: uppercase; word-spacing: 0.14em; color: ${GREEN}; }
        .np-feat-h { position: relative; font-size: clamp(40px,5.5vw,92px); font-weight: 900; letter-spacing: 0.01em;
          line-height: 1.02; text-transform: uppercase; word-spacing: 0.14em; color: #fff; margin: 0; }
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
        .np-bene-h { font-size: clamp(20px,1.8vw,26px); font-weight: 900; letter-spacing: 0.01em; text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; margin: 0 0 12px; }
        .np-bene-b { font-size: clamp(14px,1.05vw,16px); line-height: 1.75; color: rgba(8,33,60,0.6); margin: 0; }

        /* ── UN Global Compact ── */
        .ungc { position: relative; overflow: hidden; background: ${NAVY}; }
        .ungc-aura { position: absolute; top: -20%; right: -8%; width: clamp(320px,42vw,760px); height: clamp(320px,42vw,760px);
          border-radius: 50%; background: radial-gradient(circle, rgba(60,185,140,0.16), transparent 68%);
          pointer-events: none; will-change: transform; animation: np-pulse 9s ease-in-out infinite; }
        /* Floating ambient particles */
        .ungc-dust { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .ungc-dust i { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: ${GREEN};
          opacity: 0.25; will-change: transform; animation: ungc-drift 14s ease-in-out infinite; }
        .ungc-dust i:nth-child(1) { left: 12%; top: 24%; animation-duration: 13s; }
        .ungc-dust i:nth-child(2) { left: 30%; top: 68%; width: 4px; height: 4px; animation-duration: 17s; animation-delay: -3s; }
        .ungc-dust i:nth-child(3) { left: 62%; top: 18%; width: 5px; height: 5px; animation-duration: 15s; animation-delay: -6s; }
        .ungc-dust i:nth-child(4) { left: 80%; top: 74%; animation-duration: 19s; animation-delay: -2s; }
        .ungc-dust i:nth-child(5) { left: 48%; top: 40%; width: 3px; height: 3px; opacity: 0.18; animation-duration: 21s; animation-delay: -8s; }
        @keyframes ungc-drift {
          0%,100% { transform: translate(0,0); }
          33% { transform: translate(24px,-30px); }
          66% { transform: translate(-18px,20px); }
        }
        .ungc-grid { position: relative; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(32px,5vw,80px); align-items: center; }
        @media (max-width: 900px) { .ungc-grid { grid-template-columns: 1fr; } }
        .ungc-h2 { font-size: clamp(40px,6vw,96px); font-weight: 900; letter-spacing: 0.01em; line-height: 1.0;
          text-transform: uppercase; word-spacing: 0.14em; color: #fff; margin: 16px 0 0; }
        .ungc-shine { background: linear-gradient(100deg, ${GREEN} 20%, #aef5d6 40%, ${GREEN} 60%);
          background-size: 220% 100%; -webkit-background-clip: text; background-clip: text; color: transparent;
          will-change: background-position; animation: ungc-shine 5.5s linear infinite; }
        @keyframes ungc-shine { 0% { background-position: 140% 0; } 100% { background-position: -40% 0; } }
        .ungc-p { font-size: clamp(15px,1.15vw,18px); line-height: 1.78; color: rgba(255,255,255,0.66);
          margin: clamp(20px,2.4vw,32px) 0 0; max-width: 52ch; font-weight: 500; }
        .ungc-p b { color: #fff; font-weight: 800; }
        .ungc-list { list-style: none; margin: clamp(24px,3vw,40px) 0 0; padding: 0; display: grid; gap: 16px; }
        .ungc-li { display: flex; align-items: center; gap: 14px; font-size: clamp(15px,1.1vw,17px);
          font-weight: 700; color: #fff; will-change: transform, opacity;
          opacity: 0; transform: translateX(-16px); animation: ungc-li-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
        .ungc-li:nth-child(1) { animation-delay: 0.15s; }
        .ungc-li:nth-child(2) { animation-delay: 0.28s; }
        .ungc-li:nth-child(3) { animation-delay: 0.41s; }
        @keyframes ungc-li-in { to { opacity: 1; transform: translateX(0); } }
        .ungc-tick { width: 26px; height: 26px; flex-shrink: 0; border-radius: 8px; background: rgba(60,185,140,0.16);
          border: 1px solid rgba(60,185,140,0.4); display: flex; align-items: center; justify-content: center; color: ${GREEN};
          transition: transform 0.25s, background 0.25s; }
        .ungc-li:hover .ungc-tick { transform: scale(1.12) rotate(-6deg); background: rgba(60,185,140,0.28); }

        /* Membership card */
        .ungc-card { position: relative; overflow: hidden; box-sizing: border-box; border-radius: 28px; padding: clamp(32px,3.4vw,56px);
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 30px 80px -34px rgba(0,0,0,0.7); text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: clamp(18px,2vw,28px);
          will-change: transform; animation: ungc-float 8s ease-in-out infinite;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s; }
        /* Diagonal sheen sweep */
        .ungc-card::after { content: ''; position: absolute; top: -60%; left: -60%; width: 60%; height: 220%;
          background: linear-gradient(105deg, transparent, rgba(255,255,255,0.10), transparent);
          transform: rotate(18deg); pointer-events: none; will-change: transform; animation: ungc-sheen 6s ease-in-out infinite; }
        @keyframes ungc-sheen { 0%,72%,100% { transform: translateX(-40%) rotate(18deg); } 84% { transform: translateX(360%) rotate(18deg); } }
        .ungc-card:hover { transform: translateY(-8px); border-color: rgba(60,185,140,0.4);
          box-shadow: 0 44px 100px -34px rgba(0,0,0,0.8); }
        @keyframes ungc-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .ungc-badge { position: relative; align-self: center; font-size: 11px; font-weight: 900; letter-spacing: 2.4px;
          text-transform: uppercase; word-spacing: 0.14em; color: #3a2c00; background: linear-gradient(135deg,#f6d365,#e8b230);
          padding: 8px 20px; border-radius: 100px; will-change: transform;
          animation: ungc-badge-glow 3.4s ease-in-out infinite; }
        @keyframes ungc-badge-glow {
          0%,100% { box-shadow: 0 0 22px rgba(232,178,48,0.35); transform: scale(1); }
          50% { box-shadow: 0 0 46px rgba(232,178,48,0.7); transform: scale(1.05); }
        }
        .ungc-orb { position: relative; width: clamp(140px,15vw,190px); height: clamp(140px,15vw,190px); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; }
        /* Rotating conic-gradient halo behind the globe */
        .ungc-halo { position: absolute; inset: -14%; border-radius: 50%; pointer-events: none; will-change: transform;
          background: conic-gradient(from 0deg, transparent 0deg, rgba(60,185,140,0.35) 70deg, transparent 150deg,
            transparent 210deg, rgba(60,185,140,0.22) 280deg, transparent 360deg);
          filter: blur(10px); animation: ungc-spin 9s linear infinite; }
        .ungc-orb::before { content: ''; position: absolute; inset: 0; border-radius: 50%;
          border: 1.5px dashed rgba(60,185,140,0.4); will-change: transform; animation: ungc-spin 26s linear infinite; }
        .ungc-orb::after { content: ''; position: absolute; inset: 12%; border-radius: 50%;
          border: 1px solid rgba(60,185,140,0.18); will-change: transform; animation: ungc-spin 18s linear infinite reverse; }
        @keyframes ungc-spin { to { transform: rotate(360deg); } }
        /* Orbiting satellite that circles the globe */
        .ungc-sat { position: absolute; inset: 0; border-radius: 50%; will-change: transform; animation: ungc-spin 12s linear infinite; }
        .ungc-sat::before { content: ''; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; margin-left: -5px;
          border-radius: 50%; background: ${GREEN}; box-shadow: 0 0 14px 2px rgba(60,185,140,0.8); }
        .ungc-sat2 { position: absolute; inset: 12%; border-radius: 50%; will-change: transform; animation: ungc-spin 8s linear infinite reverse; }
        .ungc-sat2::before { content: ''; position: absolute; bottom: -4px; left: 50%; width: 7px; height: 7px; margin-left: -3.5px;
          border-radius: 50%; background: #aef5d6; box-shadow: 0 0 10px 1px rgba(174,245,214,0.8); }
        .ungc-orb-core { position: relative; width: 62%; height: 62%; border-radius: 50%; display: flex; align-items: center;
          justify-content: center; color: ${GREEN}; will-change: transform; animation: ungc-pulse-core 4s ease-in-out infinite;
          background: radial-gradient(circle at 35% 30%, rgba(60,185,140,0.28), rgba(8,33,60,0.9));
          border: 1px solid rgba(60,185,140,0.35); box-shadow: inset 0 0 40px rgba(60,185,140,0.2); }
        @keyframes ungc-pulse-core { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        .ungc-card-h { font-size: clamp(22px,2vw,30px); font-weight: 900; letter-spacing: 0.01em; text-transform: uppercase;
          word-spacing: 0.14em; color: #fff; margin: 0; }
        .ungc-card-meta { font-size: clamp(12px,0.9vw,14px); font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase;
          word-spacing: 0.14em; color: rgba(255,255,255,0.5); margin: 0; }

        @media (prefers-reduced-motion: reduce) {
          .np-glow, .ungc-aura, .ungc-dust i, .ungc-shine, .ungc-orb::before, .ungc-orb::after,
          .ungc-sat, .ungc-sat2, .ungc-halo, .ungc-orb-core, .ungc-card, .ungc-card::after,
          .ungc-badge { animation: none !important; }
          .ungc-shine { color: ${GREEN}; -webkit-text-fill-color: ${GREEN}; }
          .ungc-li { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
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

      {/* ── UN Global Compact membership ── */}
      <section className="np-section ungc">
        <div className="ungc-aura" aria-hidden="true" />
        <div className="ungc-dust" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="np-shell">
          <div className="ungc-grid">
            <Reveal>
              <div>
                <Eyebrow>Memberships & Certifications</Eyebrow>
                <h2 className="ungc-h2">A proud participant<br />of the <span className="ungc-shine">UN Global Compact.</span></h2>
                <p className="ungc-p">
                  <ElomaLink /> has joined the <b>United Nations Global Compact</b> - the world's largest
                  corporate sustainability initiative - aligning our strategy and operations with its
                  universal principles on human rights, labour, the environment and anti-corruption.
                </p>
                <ul className="ungc-list">
                  {UNGC_PRINCIPLES.map(p => (
                    <li key={p} className="ungc-li">
                      <span className="ungc-tick"><Check size={16} strokeWidth={3} /></span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="ungc-card">
                <div className="ungc-badge">Member</div>
                <div className="ungc-orb">
                  <div className="ungc-halo" aria-hidden="true" />
                  <div className="ungc-sat" aria-hidden="true" />
                  <div className="ungc-sat2" aria-hidden="true" />
                  <div className="ungc-orb-core"><Globe size={44} strokeWidth={1.5} /></div>
                </div>
                <div>
                  <h3 className="ungc-card-h">UN Global Compact</h3>
                  <p className="ungc-card-meta">Participant &middot; Ten Principles</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Let's Build Together" heading="Put our network" highlight="to work." button="Start a conversation" />
    </PageLayout>
  )
}
