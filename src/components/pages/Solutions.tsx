import { Boxes, Code2, Megaphone, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'
import { SOLUTION_SECTIONS } from '../../lib/sectionRoutes'

type Kind = 'ms' | 'dev' | 'mkt' | 'sec'
type Group = {
  label: string; color: string; icon: LucideIcon; kind: Kind; blurb: string
  categories: { label: string; items: string[] }[]
}

const GROUPS: Group[] = [
  {
    label: 'Microsoft Products', color: '#2563eb', icon: Boxes, kind: 'ms',
    blurb: 'Certified deployment and management across the full Microsoft ecosystem - built to make your team collaborate smarter from day one.',
    categories: [
      { label: 'Microsoft 365', items: ['Power BI', 'Power Automate', 'SharePoint', 'Office 365'] },
      { label: 'Dynamics 365', items: ['Sales', 'Customer Service', 'Field Service', 'Finance', 'Supply Chain'] },
      { label: 'CRM', items: ['Microsoft', 'Salesforce', 'Oracle', 'Zoho'] },
      { label: 'ERP', items: ['Sage', 'NetSuite', 'Microsoft', 'Salesforce'] },
    ],
  },
  {
    label: 'Development', color: GREEN, icon: Code2, kind: 'dev',
    blurb: 'Websites, apps and software engineered to perform - on time, on budget, and built to scale with your business.',
    categories: [
      { label: 'Software Development', items: ['Custom Software Development'] },
      { label: 'App Development', items: ['Custom App Development'] },
      { label: 'Website Development', items: ['WordPress', 'React & Next', 'Shopify'] },
    ],
  },
  {
    label: 'Digital & Marketing', color: '#d97706', icon: Megaphone, kind: 'mkt',
    blurb: 'Standout branding, technical SEO and reliable cloud hosting that put your business in front of the right audience.',
    categories: [
      { label: 'Branding', items: ['Logo Creation', 'Email Signature', 'Visiting Cards', 'Website Design'] },
      { label: 'Cloud Hosting', items: ['Azure', 'AWS'] },
      { label: 'SEO & Marketing', items: ['Email Marketing', 'Social Media', 'Google Ads', 'Content Writing', 'Organic SEO'] },
    ],
  },
  {
    label: 'Security & Integration', color: '#7c3aed', icon: ShieldCheck, kind: 'sec',
    blurb: 'AI-driven threat detection, zero-trust architecture and seamless integrations that keep your data safe and systems connected.',
    categories: [
      { label: 'Cyber Security', items: ['Defender XDR', 'Microsoft Entra', 'Defender for Cloud', 'Microsoft Purview'] },
      { label: 'AI Cyber Security', items: ['Microsoft Defender', 'Microsoft Foundry', '365 Copilot', 'Copilot Studio'] },
      { label: 'Integrations', items: ['API Integrations', 'Middleware / iPaaS', 'Point-to-Point'] },
      { label: 'Licenses', items: ['Non-Profit Licenses', 'Office 365', 'D365 Licenses'] },
    ],
  },
]

const TOTAL_CAPS = GROUPS.reduce((n, g) => n + g.categories.length, 0)
const OVERVIEW: [string, string][] = [
  [String(GROUPS.length).padStart(2, '0'), 'Practices'],
  [`${TOTAL_CAPS}`, 'Capability areas'],
  ['01', 'Accountable team'],
]

/* Domain-themed ambient stage. Pure CSS/SVG, compositor-only (transform/opacity),
   frozen under prefers-reduced-motion. One distinct visual per practice. */
function PracticeStage({ kind, color }: { kind: Kind; color: string }) {
  return (
    <div className={`ps-stage ps-${kind}`} style={{ ['--c' as string]: color }} aria-hidden="true">
      {kind === 'ms' && (
        <div className="ps-ms-scene">
          <div className="ps-ms-grid">
            <span className="ps-ms-tile" style={{ animationDelay: '0s' }} />
            <span className="ps-ms-tile" style={{ animationDelay: '0.5s' }} />
            <span className="ps-ms-tile" style={{ animationDelay: '1s' }} />
            <span className="ps-ms-tile" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      )}

      {kind === 'dev' && (
        <div className="ps-dev-win">
          <div className="ps-dev-bar"><i /><i /><i /></div>
          <div className="ps-dev-body">
            <span className="ps-dev-line l1" />
            <span className="ps-dev-line l2" />
            <span className="ps-dev-line l3" />
            <span className="ps-dev-line l4" />
            <span className="ps-dev-caret" />
          </div>
        </div>
      )}

      {kind === 'mkt' && (
        <div className="ps-mkt">
          <span className="ps-ring r1" /><span className="ps-ring r2" /><span className="ps-ring r3" />
          <div className="ps-bars">
            <span style={{ height: '40%', animationDelay: '0s' }} />
            <span style={{ height: '64%', animationDelay: '0.15s' }} />
            <span style={{ height: '50%', animationDelay: '0.3s' }} />
            <span style={{ height: '82%', animationDelay: '0.45s' }} />
            <span style={{ height: '100%', animationDelay: '0.6s' }} />
          </div>
        </div>
      )}

      {kind === 'sec' && (
        <div className="ps-sec">
          <span className="ps-node n1" /><span className="ps-node n2" /><span className="ps-node n3" />
          <div className="ps-shield">
            <div className="ps-radar" />
            <div className="ps-sec-core" />
          </div>
        </div>
      )}
    </div>
  )
}

export function Solutions() {
  usePageMeta(
    'Digital Solutions | Web, App & AI Services EG Digital',
    'Explore EG Digital solutions including web development, mobile apps, AI systems, cloud services, and digital transformation for modern businesses.',
  )
  return (
    <PageLayout>
      <style>{`
        .sol-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .sol-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .sol-shell { max-width: 2440px; } }

        /* ── Hero ── */
        .sol-hero { padding: clamp(40px,6vw,96px) 0 clamp(28px,3vw,44px); }
        .sol-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: 0.01em;
          line-height: 1; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; word-spacing: 0.14em; }
        .sol-h1 span { color: ${GREEN}; }
        .sol-intro { max-width: 640px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }
        .sol-jump { display: flex; flex-wrap: wrap; gap: 10px; margin-top: clamp(24px,3vw,36px); }
        .sol-chip { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 800;
          letter-spacing: 0.3px; padding: 9px 18px; border-radius: 100px; min-height: 42px;
          border: 1px solid rgba(8,33,60,0.14); background: #fff; color: ${NAVY}; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s; }
        .sol-chip:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(8,33,60,0.1); }
        .sol-chip span { width: 9px; height: 9px; border-radius: 3px; }

        /* ── Overview band ── */
        .sol-ov { display: flex; flex-wrap: wrap; gap: clamp(24px,5vw,80px); margin-top: clamp(36px,5vw,64px);
          padding-top: clamp(28px,3vw,44px); border-top: 1px solid rgba(8,33,60,0.12); }
        .sol-ov-item { display: flex; flex-direction: column; gap: 4px; }
        .sol-ov-v { font-size: clamp(34px,4vw,60px); font-weight: 900; letter-spacing: -0.04em; color: ${NAVY}; line-height: 1; }
        .sol-ov-l { font-size: clamp(11px,0.85vw,13px); font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; word-spacing: 0.14em; color: rgba(8,33,60,0.42); }

        /* ── Chapter sections ── */
        .sol-chapter { position: relative; overflow: hidden; scroll-margin-top: 88px; padding: clamp(56px,7vw,128px) 0; }
        .sol-glow { position: absolute; top: -10%; right: -8%; width: clamp(300px,40vw,640px); height: clamp(300px,40vw,640px);
          border-radius: 50%; pointer-events: none; filter: blur(8px); }
        .sol-grid { position: relative; display: grid; grid-template-columns: minmax(300px, 0.82fr) 1.18fr; gap: clamp(28px,4vw,72px); align-items: start; }
        @media (max-width: 1000px) { .sol-grid { grid-template-columns: 1fr; gap: clamp(28px,4vw,44px); } }

        /* Sticky left rail */
        .sol-rail { position: sticky; top: 88px; align-self: start; }
        @media (max-width: 1000px) { .sol-rail { position: static; top: auto; } }
        /* ── Domain-themed ambient stages ── */
        .ps-stage { position: relative; width: 100%; max-width: 380px; aspect-ratio: 1.3/1;
          margin-bottom: clamp(20px,2.4vw,30px); border-radius: 22px; overflow: hidden;
          border: 1px solid rgba(8,33,60,0.08);
          background:
            radial-gradient(120% 110% at 82% 8%, color-mix(in srgb, var(--c) 14%, transparent), transparent 60%),
            linear-gradient(165deg, #ffffff, #eef1f5);
          display: flex; align-items: center; justify-content: center;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 16px 36px -22px rgba(8,33,60,0.4); }

        /* Microsoft - floating 3D tile cube */
        .ps-ms-scene { perspective: 640px; }
        .ps-ms-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 124px; height: 124px;
          transform-style: preserve-3d; animation: ps-ms-spin 11s ease-in-out infinite; will-change: transform; }
        @keyframes ps-ms-spin { 0%,100% { transform: rotateX(22deg) rotateY(-26deg); } 50% { transform: rotateX(-16deg) rotateY(26deg); } }
        .ps-ms-tile { border-radius: 11px; will-change: transform; animation: ps-ms-pop 4s ease-in-out infinite;
          box-shadow: 0 10px 20px -8px color-mix(in srgb, var(--c) 60%, transparent); }
        .ps-ms-tile:nth-child(1) { background: var(--c); }
        .ps-ms-tile:nth-child(2) { background: color-mix(in srgb, var(--c) 70%, #fff); }
        .ps-ms-tile:nth-child(3) { background: color-mix(in srgb, var(--c) 52%, #fff); }
        .ps-ms-tile:nth-child(4) { background: color-mix(in srgb, var(--c) 88%, #fff); }
        @keyframes ps-ms-pop { 0%,100% { transform: translateZ(0); } 50% { transform: translateZ(30px); } }

        /* Development - tilted code terminal that types */
        .ps-dev-win { width: 74%; max-width: 244px; border-radius: 13px; overflow: hidden; background: ${NAVY};
          transform: perspective(780px) rotateY(-15deg) rotateX(7deg); will-change: transform;
          box-shadow: 0 30px 54px -24px rgba(8,33,60,0.65); animation: ps-dev-tilt 9s ease-in-out infinite; }
        @keyframes ps-dev-tilt {
          0%,100% { transform: perspective(780px) rotateY(-15deg) rotateX(7deg); }
          50% { transform: perspective(780px) rotateY(-5deg) rotateX(3deg); } }
        .ps-dev-bar { display: flex; gap: 5px; padding: 9px 12px; background: rgba(255,255,255,0.06); }
        .ps-dev-bar i { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.28); }
        .ps-dev-bar i:first-child { background: var(--c); }
        .ps-dev-body { padding: 15px 14px 18px; display: flex; flex-direction: column; gap: 9px; }
        .ps-dev-line { height: 7px; border-radius: 4px; transform: scaleX(0); transform-origin: left center;
          will-change: transform; animation: ps-type 5s cubic-bezier(0.16,1,0.3,1) infinite; }
        .ps-dev-line.l1 { width: 72%; animation-delay: 0s; background: var(--c); }
        .ps-dev-line.l2 { width: 92%; animation-delay: 0.5s; background: rgba(255,255,255,0.2); }
        .ps-dev-line.l3 { width: 56%; animation-delay: 1s; background: var(--c); }
        .ps-dev-line.l4 { width: 84%; animation-delay: 1.5s; background: rgba(255,255,255,0.2); }
        @keyframes ps-type { 0% { transform: scaleX(0); } 14% { transform: scaleX(1); } 88% { transform: scaleX(1); } 100% { transform: scaleX(0); } }
        .ps-dev-caret { width: 8px; height: 14px; border-radius: 1px; background: var(--c); animation: ps-blink 1s steps(1) infinite; }
        @keyframes ps-blink { 0%,50% { opacity: 1; } 50.01%,100% { opacity: 0; } }

        /* Digital & Marketing - broadcast rings + growing bars */
        .ps-mkt { position: relative; width: 100%; height: 100%; display: flex; align-items: flex-end; justify-content: center; }
        .ps-ring { position: absolute; top: 32%; left: 50%; width: 46px; height: 46px; border-radius: 50%;
          border: 2px solid var(--c); transform: translate(-50%,-50%) scale(0.4); opacity: 0; will-change: transform, opacity;
          animation: ps-ring 3.6s ease-out infinite; }
        .ps-ring.r2 { animation-delay: 1.2s; } .ps-ring.r3 { animation-delay: 2.4s; }
        @keyframes ps-ring { 0% { transform: translate(-50%,-50%) scale(0.4); opacity: 0.7; } 100% { transform: translate(-50%,-50%) scale(3.8); opacity: 0; } }
        .ps-bars { position: relative; display: flex; align-items: flex-end; gap: 11px; height: 52%; padding-bottom: 16%; }
        .ps-bars span { width: 16px; border-radius: 5px 5px 0 0; transform: scaleY(0.25); transform-origin: bottom; will-change: transform;
          background: linear-gradient(180deg, var(--c), color-mix(in srgb, var(--c) 45%, #fff)); animation: ps-grow 3s ease-in-out infinite; }
        @keyframes ps-grow { 0%,100% { transform: scaleY(0.25); } 50% { transform: scaleY(1); } }

        /* Security & Integration - shield with radar sweep + pinging nodes */
        .ps-sec { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .ps-shield { position: relative; width: 108px; height: 128px; overflow: hidden;
          clip-path: polygon(50% 0, 100% 18%, 100% 58%, 50% 100%, 0 58%, 0 18%);
          background: color-mix(in srgb, var(--c) 16%, #fff);
          box-shadow: 0 16px 32px -16px color-mix(in srgb, var(--c) 70%, transparent); }
        .ps-shield::after { content: ''; position: absolute; inset: 0; clip-path: inherit;
          border: 2px solid color-mix(in srgb, var(--c) 55%, transparent); }
        .ps-radar { position: absolute; top: 50%; left: 50%; width: 220%; aspect-ratio: 1; transform: translate(-50%,-50%);
          background: conic-gradient(from 0deg, color-mix(in srgb, var(--c) 65%, transparent), transparent 72%);
          will-change: transform; animation: ps-spin 3.6s linear infinite; }
        @keyframes ps-spin { to { transform: translate(-50%,-50%) rotate(360deg); } }
        .ps-sec-core { position: absolute; top: 50%; left: 50%; width: 15px; height: 15px; border-radius: 50%;
          transform: translate(-50%,-50%); background: var(--c); box-shadow: 0 0 0 6px color-mix(in srgb, var(--c) 22%, transparent); }
        .ps-node { position: absolute; width: 11px; height: 11px; border-radius: 50%; background: var(--c); z-index: 2;
          box-shadow: 0 4px 10px -2px color-mix(in srgb, var(--c) 70%, transparent); }
        .ps-node::after { content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 2px solid var(--c); transform: scale(0.6); opacity: 0.8; will-change: transform, opacity; animation: ps-ping 2.2s ease-out infinite; }
        .ps-node.n1 { top: 18%; left: 15%; } .ps-node.n2 { top: 22%; right: 14%; } .ps-node.n3 { bottom: 18%; right: 24%; }
        .ps-node.n2::after { animation-delay: 0.7s; } .ps-node.n3::after { animation-delay: 1.4s; }
        @keyframes ps-ping { 0% { transform: scale(0.6); opacity: 0.8; } 100% { transform: scale(2.6); opacity: 0; } }

        @media (prefers-reduced-motion: reduce) {
          .ps-ms-grid, .ps-ms-tile, .ps-dev-win, .ps-dev-line, .ps-dev-caret,
          .ps-ring, .ps-bars span, .ps-radar, .ps-node::after { animation: none !important; }
          .ps-dev-line { transform: scaleX(1); } .ps-bars span { transform: scaleY(0.7); }
        }

        .sol-tag { display: inline-flex; align-items: center; gap: 10px; font-size: clamp(11px,0.85vw,13px);
          font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; word-spacing: 0.14em; margin-bottom: 14px; }
        .sol-tag .ic { width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sol-h2 { font-size: clamp(34px,4.4vw,72px); font-weight: 900; letter-spacing: 0.01em; line-height: 1.04;
          text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; margin: 0 0 18px; }
        .sol-rule { height: 3px; width: 64px; border-radius: 99px; margin: 0 0 18px; transform-origin: left center; }
        .sol-blurb { font-size: clamp(15px,1.2vw,19px); line-height: 1.8; color: rgba(8,33,60,0.6); margin: 0; max-width: 46ch; }
        .sol-meta { margin-top: 22px; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; word-spacing: 0.14em; color: rgba(8,33,60,0.38); }

        /* Capability cards */
        .sol-cards { display: grid; grid-template-columns: repeat(2,1fr); gap: clamp(14px,1.6vw,22px); }
        @media (max-width: 1280px) and (min-width: 1001px) { .sol-cards { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .sol-cards { grid-template-columns: 1fr; } }
        .sol-card { position: relative; background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 18px;
          padding: clamp(20px,2vw,30px); box-shadow: 0 4px 22px rgba(8,33,60,0.05); overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s, border-color 0.28s; will-change: transform; }
        .sol-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; transform: scaleX(0);
          transform-origin: left center; transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
          background: var(--c, ${GREEN}); }
        .sol-card:hover { transform: translateY(-5px); box-shadow: 0 24px 54px rgba(8,33,60,0.13); }
        .sol-card:hover::before { transform: scaleX(1); }
        .sol-card-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
        .sol-cat-h { font-size: clamp(16px,1.25vw,20px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY}; margin: 0; }
        .sol-card-idx { font-size: 12px; font-weight: 900; letter-spacing: 0.5px; font-variant-numeric: tabular-nums; }
        .sol-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .sol-pill { display: inline-flex; align-items: center; gap: 7px; font-size: 12.5px; font-weight: 600;
          color: rgba(8,33,60,0.62); padding: 6px 12px; border-radius: 100px; border: 1px solid rgba(8,33,60,0.12);
          transition: color 0.2s, border-color 0.2s, background 0.2s; }
        .sol-pill i { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; font-style: normal; }
        .sol-card:hover .sol-pill { border-color: rgba(8,33,60,0.18); }

        @media (prefers-reduced-motion: reduce) { .sol-card, .sol-card::before { transition: none; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="sol-shell sol-hero">
        <Reveal>
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="sol-h1">One partner.<br />Every <span>solution.</span></h1>
          <p className="sol-intro">
            From Microsoft and custom development to marketing, cloud and AI cyber security -
            EG Digital covers the entire digital stack, so you never have to juggle a dozen vendors.
          </p>
          <div className="sol-jump">
            {GROUPS.map(g => (
              <a key={g.label} className="sol-chip" href={`#${SOLUTION_SECTIONS[g.label]}`}>
                <span style={{ background: g.color }} />{g.label}
              </a>
            ))}
          </div>
          <div className="sol-ov">
            {OVERVIEW.map(([v, l]) => (
              <div key={l} className="sol-ov-item">
                <div className="sol-ov-v">{v}</div>
                <div className="sol-ov-l">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Practice chapters ── */}
      {GROUPS.map((g, gi) => {
        const Ic = g.icon
        return (
          <section
            key={g.label}
            id={SOLUTION_SECTIONS[g.label]}
            className="sol-chapter"
            style={{ background: gi % 2 ? CREAM : '#fff' }}
          >
            <div
              className="sol-glow"
              aria-hidden="true"
              style={{ background: `radial-gradient(circle, ${g.color}1f, transparent 68%)` }}
            />
            <div className="sol-shell sol-grid">
              {/* Sticky rail */}
              <Reveal className="sol-rail">
                <PracticeStage kind={g.kind} color={g.color} />
                <div className="sol-tag" style={{ color: g.color }}>
                  <span className="ic" style={{ background: `${g.color}1a`, color: g.color }}><Ic size={18} /></span>
                  Practice {String(gi + 1).padStart(2, '0')}
                </div>
                <h2 className="sol-h2">{g.label}</h2>
                <div className="sol-rule" style={{ background: g.color }} />
                <p className="sol-blurb">{g.blurb}</p>
                <div className="sol-meta">{g.categories.length} capability areas</div>
              </Reveal>

              {/* Capability cards */}
              <div className="sol-cards">
                {g.categories.map((c, ci) => (
                  <Reveal key={c.label} delay={Math.min(ci * 0.06, 0.3)}>
                    <div className="sol-card" style={{ ['--c' as string]: g.color }}>
                      <div className="sol-card-top">
                        <h3 className="sol-cat-h">{c.label}</h3>
                        <span className="sol-card-idx" style={{ color: g.color }}>{String(ci + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="sol-tags">
                        {c.items.map(it => (
                          <span key={it} className="sol-pill"><i style={{ background: g.color }} />{it}</span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <PageCTA eyebrow="Ready When You Are" heading="Find the right" highlight="solution." button="Talk to our team" />
    </PageLayout>
  )
}
