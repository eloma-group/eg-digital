import { motion } from 'framer-motion'
import { PageLayout, Reveal, NAVY, GREEN, EASE } from './_kit'
import { KineticBanner } from '../sections/JourneyHero'

type Tier = { id: string; label: string; note: string; names: string[] }

const TIERS: Tier[] = [
  { id: 'cloud', label: 'Cloud', note: 'Infrastructure partners', names: ['Amazon Web Services', 'Google Cloud', 'Microsoft Azure'] },
  { id: 'technology', label: 'Technology', note: 'Platforms we build on', names: ['Salesforce', 'Zoho', 'Shopify', 'Sage', 'NetSuite', 'Oracle'] },
  { id: 'community', label: 'Community', note: 'Networks & accreditation', names: ['Microsoft for Nonprofits', 'AWS Activate', 'Australian Business Network', 'Tech Council AU'] },
]

/* Marquee rows — top row solid navy, middle outlined, bottom solid. */
const ROW_A = ['Microsoft', 'Amazon Web Services', 'Google Cloud', 'Salesforce', 'Azure', 'Power Platform']
const ROW_B = ['Dynamics 365', 'Zoho', 'Shopify', 'Oracle', 'NetSuite', 'Sage']
const ROW_C = ['Tech Council AU', 'AWS Activate', 'Microsoft for Nonprofits', 'Australian Business Network']

function MarqueeRow({ items, dir, outline }: { items: string[]; dir: 'l' | 'r'; outline?: boolean }) {
  const loop = [...items, ...items]
  return (
    <div className="np-mqtrack">
      <div className={`np-mq np-mq--${dir}`}>
        {loop.map((name, i) => (
          <span key={i} className="np-mqitem">
            <span
              className="np-mqtext"
              style={outline
                ? { color: 'transparent', WebkitTextStroke: `1.5px rgba(8,33,60,0.5)` }
                : { color: NAVY }}
            >{name}</span>
            <span className="np-mqdot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}

export function NetworksPartners() {
  return (
    <PageLayout>
      <style>{`
        .np-shell { max-width: 1760px; margin: 0 auto; padding: 0 clamp(24px,4vw,72px); }
        @media (min-width: 1920px) { .np-shell { max-width: 1900px; } }

        /* marquee */
        .np-mqtrack { overflow: hidden; width: 100%; }
        .np-mq { display: flex; align-items: center; width: max-content; will-change: transform; }
        .np-mq--l { animation: np-ml 38s linear infinite; }
        .np-mq--r { animation: np-mr 44s linear infinite; }
        @keyframes np-ml { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes np-mr { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .np-mqwall:hover .np-mq { animation-play-state: paused; }
        .np-mqitem { display: inline-flex; align-items: center; gap: clamp(28px,3.5vw,64px); padding-right: clamp(28px,3.5vw,64px); }
        .np-mqtext { font-size: clamp(34px,6vw,92px); font-weight: 900; letter-spacing: -0.045em;
          text-transform: uppercase; line-height: 1; white-space: nowrap; }
        .np-mqdot { width: clamp(8px,0.9vw,13px); height: clamp(8px,0.9vw,13px); border-radius: 50%;
          background: ${GREEN}; flex-shrink: 0; }
        @media (prefers-reduced-motion: reduce) { .np-mq { animation: none !important; } }

        /* tier legend */
        .np-tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(20px,2.4vw,40px); }
        @media (max-width: 900px) { .np-tiers { grid-template-columns: 1fr; } }
      `}</style>

      {/* ── Hero ── */}
      <KineticBanner
        eyebrow="Networks & Partners"
        pre="Certified across"
        rotate={['Microsoft', 'Azure', 'AWS', 'Salesforce', 'Shopify']}
        post="and more."
        stats={[['12+', 'Alliances'], ['1', 'Platinum'], ['3', 'Tiers']]}
      />

      {/* ── Living marquee wall ── */}
      <section className="np-mqwall" aria-label="Partner network" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px,1vw,18px)', padding: 'clamp(20px,3vw,48px) 0', borderTop: '1px solid rgba(8,33,60,0.1)', borderBottom: '1px solid rgba(8,33,60,0.1)' }}>
        <MarqueeRow items={ROW_A} dir="l" />
        <MarqueeRow items={ROW_B} dir="r" outline />
        <MarqueeRow items={ROW_C} dir="l" />
      </section>

      {/* ── Platinum spotlight ── */}
      <section className="np-shell" style={{ padding: 'clamp(56px,8vw,120px) clamp(24px,4vw,72px)' }}>
        <Reveal>
          <div style={{ position: 'relative', overflow: 'hidden', background: NAVY, borderRadius: 22, padding: 'clamp(36px,5vw,80px)', display: 'flex', flexDirection: 'column', gap: 'clamp(24px,3vw,44px)' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', right: '-6%', width: 'clamp(260px,34vw,520px)', height: 'clamp(260px,34vw,520px)', borderRadius: '50%', background: `radial-gradient(circle, rgba(60,185,140,0.22), transparent 70%)`, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 11 }}>
              <span style={{ fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: GREEN }}>Platinum</span>
              <span style={{ width: 26, height: 2, background: GREEN }} />
              <span style={{ fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Strategic alliance</span>
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 28 }}>
              <h2 style={{ fontSize: 'clamp(40px,6vw,104px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.92, color: '#fff', margin: 0, textTransform: 'uppercase' }}>Microsoft<br /><span style={{ color: GREEN }}>Partner.</span></h2>
              <p style={{ fontSize: 'clamp(15px,1.2vw,18px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.66)', margin: 0, maxWidth: '40ch', fontWeight: 500 }}>
                Certified across Dynamics 365, Azure and the Power Platform — the full Microsoft cloud, delivered alongside our own custom build practice.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Tier legend ── */}
      <section className="np-shell" style={{ padding: '0 clamp(24px,4vw,72px) clamp(64px,9vw,140px)' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 'clamp(28px,3vw,48px)', paddingBottom: 18, borderBottom: '1px solid rgba(8,33,60,0.12)' }}>
            <h3 style={{ fontSize: 'clamp(22px,2.4vw,36px)', fontWeight: 900, letterSpacing: '-0.04em', color: NAVY, margin: 0, textTransform: 'uppercase' }}>By tier</h3>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '1.6px', textTransform: 'uppercase', color: 'rgba(8,33,60,0.38)' }}>Who we work with</span>
          </div>
        </Reveal>

        <div className="np-tiers">
          {TIERS.map((t, ti) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.7, ease: EASE, delay: ti * 0.08 }}
            >
              <div style={{ fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.6px', textTransform: 'uppercase', color: GREEN, marginBottom: 6 }}>{t.label}</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(8,33,60,0.42)', marginBottom: 18 }}>{t.note}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
                {t.names.map(n => (
                  <li key={n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderTop: '1px solid rgba(8,33,60,0.1)' }}>
                    <span style={{ width: 7, height: 7, borderRadius: 2, background: 'rgba(8,33,60,0.22)', flexShrink: 0 }} />
                    <span style={{ fontSize: 'clamp(16px,1.4vw,21px)', fontWeight: 800, letterSpacing: '-0.02em', color: NAVY }}>{n}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
