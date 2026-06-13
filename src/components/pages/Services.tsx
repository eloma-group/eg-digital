import { RefreshCw, Cloud, Server, Headphones } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM } from './_kit'
import { SERVICE_SECTIONS } from '../../lib/sectionRoutes'

type Kind = 'upg' | 'cloud' | 'srv' | 'sup'
type Cap = { title: string; detail: string }
type Service = {
  label: string; icon: LucideIcon; kind: Kind; color: string
  lead: string; body: string; caps: Cap[]
}

const SERVICES: Service[] = [
  {
    label: 'Upgrades', icon: RefreshCw, kind: 'upg', color: GREEN,
    lead: 'Modernise without the downtime.',
    body: 'We move legacy systems onto current, supported frameworks — carefully phased so your business keeps running while it happens. No big-bang risk, no data loss.',
    caps: [
      { title: 'Framework & version migrations', detail: 'Move to current, supported stacks before end-of-life bites.' },
      { title: 'Legacy modernisation', detail: 'Refactor brittle systems into maintainable, documented code.' },
      { title: 'Zero-downtime rollouts', detail: 'Phased, reversible releases that keep you trading throughout.' },
      { title: 'Security & performance hardening', detail: 'Close gaps and tune speed as part of every upgrade.' },
    ],
  },
  {
    label: 'Cloud Maintenances', icon: Cloud, kind: 'cloud', color: '#0078d4',
    lead: 'A cloud that stays fast and cost-efficient.',
    body: 'Proactive monitoring, scaling and optimisation across Azure and AWS. We keep your cloud lean, secure and performant — and stop surprise bills before they land.',
    caps: [
      { title: 'Azure & AWS management', detail: 'Day-to-day operation of your cloud, fully handled.' },
      { title: 'Auto-scaling & load balancing', detail: 'Capacity that flexes with demand, automatically.' },
      { title: 'Cost optimisation', detail: 'Right-sizing and reserved planning that stops bill shock.' },
      { title: 'Backup, recovery & monitoring', detail: 'Tested restores and alerts before issues reach users.' },
    ],
  },
  {
    label: 'Server Maintenances', icon: Server, kind: 'srv', color: '#6366f1',
    lead: 'Infrastructure that just stays up.',
    body: 'Patching, backups, uptime monitoring and performance tuning that keep your servers rock solid — so your team never thinks about the box under the hood.',
    caps: [
      { title: 'Scheduled patching', detail: 'OS and software kept current on a predictable cadence.' },
      { title: 'Automated backups', detail: 'Nightly backups with regular, verified restore drills.' },
      { title: '24/7 uptime monitoring', detail: 'We see the alert before your customers ever do.' },
      { title: 'Performance & capacity planning', detail: 'Tuning and headroom so nothing ever slows down.' },
    ],
  },
  {
    label: 'Support Services', icon: Headphones, kind: 'sup', color: '#d97706',
    lead: 'Real people who know your stack.',
    body: 'Responsive, senior-led support with clear SLAs. When something needs attention, you reach an engineer who already understands your setup — not a script.',
    caps: [
      { title: 'Clear, measurable SLAs', detail: 'Response and resolution targets agreed in writing.' },
      { title: 'Senior-led support', detail: 'Reach an engineer who knows your stack, not a script.' },
      { title: 'Priority incident response', detail: 'Critical issues jump the queue and get owned end-to-end.' },
      { title: 'Ongoing advisory', detail: 'Proactive guidance, not just break-fix tickets.' },
    ],
  },
]

const TOTAL_CAPS = SERVICES.reduce((n, s) => n + s.caps.length, 0)
const OVERVIEW: [string, string][] = [
  [String(SERVICES.length).padStart(2, '0'), 'Services'],
  [`${TOTAL_CAPS}`, 'Capabilities'],
  ['24/7', 'Coverage'],
]

/* Domain-themed ambient stage per service. Pure CSS/SVG, compositor-only,
   frozen under prefers-reduced-motion. */
function ServiceStage({ kind, color }: { kind: Kind; color: string }) {
  return (
    <div className={`svs-stage svs-${kind}`} style={{ ['--c' as string]: color }} aria-hidden="true">
      {kind === 'upg' && (
        <div className="svs-upg">
          <span className="svs-upg-halo" />
          <div className="svs-upg-ring" />
          <svg className="svs-upg-up" viewBox="0 0 24 24" width="30" height="30" fill="none">
            <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      {kind === 'cloud' && (
        <div className="svs-cloud">
          <span className="svs-cl-pulse" />
          <div className="svs-cl-orbit"><span /><span /><span /></div>
          <svg className="svs-cl-shape" viewBox="0 0 120 72">
            <g fill="currentColor">
              <circle cx="38" cy="44" r="20" />
              <circle cx="64" cy="34" r="26" />
              <circle cx="88" cy="46" r="18" />
              <rect x="22" y="44" width="78" height="22" rx="11" />
            </g>
            <circle cx="58" cy="30" r="9" fill="#fff" fillOpacity="0.22" />
          </svg>
        </div>
      )}

      {kind === 'srv' && (
        <div className="svs-srv">
          <div className="svs-srv-rack">
            {[0, 1, 2, 3].map(u => (
              <div key={u} className="svs-srv-u">
                <i /><b /><b /><b />
              </div>
            ))}
            <span className="svs-srv-scan" />
          </div>
        </div>
      )}

      {kind === 'sup' && (
        <div className="svs-sup">
          <span className="svs-sup-on" />
          <div className="svs-sup-chat">
            <span className="svs-bub b1" />
            <span className="svs-bub b2" />
            <div className="svs-typing"><i /><i /><i /></div>
          </div>
        </div>
      )}
    </div>
  )
}

export function Services() {
  return (
    <PageLayout>
      <style>{`
        .sv-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .sv-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .sv-shell { max-width: 2440px; } }

        /* ── Hero ── */
        .sv-hero { padding: clamp(40px,6vw,96px) 0 clamp(28px,3vw,44px); }
        .sv-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em;
          line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .sv-h1 span { color: ${GREEN}; }
        .sv-intro { max-width: 640px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }
        .sv-jump { display: flex; flex-wrap: wrap; gap: 10px; margin-top: clamp(24px,3vw,36px); }
        .sv-chip { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 800;
          letter-spacing: 0.3px; padding: 9px 18px; border-radius: 100px; min-height: 42px;
          border: 1px solid rgba(8,33,60,0.14); background: #fff; color: ${NAVY}; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s; }
        .sv-chip:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(8,33,60,0.1); }
        .sv-chip span { width: 9px; height: 9px; border-radius: 3px; }

        .sv-ov { display: flex; flex-wrap: wrap; gap: clamp(24px,5vw,80px); margin-top: clamp(36px,5vw,64px);
          padding-top: clamp(28px,3vw,44px); border-top: 1px solid rgba(8,33,60,0.12); }
        .sv-ov-item { display: flex; flex-direction: column; gap: 4px; }
        .sv-ov-v { font-size: clamp(34px,4vw,60px); font-weight: 900; letter-spacing: -0.04em; color: ${NAVY}; line-height: 1; }
        .sv-ov-l { font-size: clamp(11px,0.85vw,13px); font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: rgba(8,33,60,0.42); }

        /* ── Service chapters ── */
        .sv-chapter { position: relative; overflow: hidden; scroll-margin-top: 88px; padding: clamp(56px,7vw,128px) 0; }
        .sv-glow { position: absolute; top: -10%; right: -8%; width: clamp(300px,40vw,640px); height: clamp(300px,40vw,640px);
          border-radius: 50%; pointer-events: none; filter: blur(8px); }
        .sv-grid { position: relative; display: grid; grid-template-columns: minmax(300px, 0.82fr) 1.18fr; gap: clamp(28px,4vw,72px); align-items: start; }
        @media (max-width: 1000px) { .sv-grid { grid-template-columns: 1fr; gap: clamp(28px,4vw,44px); } }

        .sv-rail { position: sticky; top: 88px; align-self: start; }
        @media (max-width: 1000px) { .sv-rail { position: static; top: auto; } }
        .sv-tag { display: inline-flex; align-items: center; gap: 10px; font-size: clamp(11px,0.85vw,13px);
          font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; margin-bottom: 14px; }
        .sv-tag .ic { width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sv-h2 { font-size: clamp(34px,4.4vw,72px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.92;
          text-transform: uppercase; color: ${NAVY}; margin: 0 0 16px; }
        .sv-rule { height: 3px; width: 64px; border-radius: 99px; margin: 0 0 18px; }
        .sv-lead { font-size: clamp(17px,1.5vw,23px); font-weight: 800; letter-spacing: -0.02em; color: ${NAVY}; margin: 0 0 12px; }
        .sv-body { font-size: clamp(15px,1.15vw,18px); line-height: 1.8; color: rgba(8,33,60,0.6); margin: 0; max-width: 46ch; }

        /* Capability cards */
        .sv-cards { display: grid; grid-template-columns: repeat(2,1fr); gap: clamp(14px,1.6vw,22px); }
        @media (max-width: 560px) { .sv-cards { grid-template-columns: 1fr; } }
        .sv-card { position: relative; background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 18px;
          padding: clamp(20px,2vw,30px); box-shadow: 0 4px 22px rgba(8,33,60,0.05); overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s, border-color 0.28s; will-change: transform; }
        .sv-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; transform: scaleX(0);
          transform-origin: left center; transition: transform 0.32s cubic-bezier(0.16,1,0.3,1); background: var(--c, ${GREEN}); }
        .sv-card:hover { transform: translateY(-5px); box-shadow: 0 24px 54px rgba(8,33,60,0.13); }
        .sv-card:hover::before { transform: scaleX(1); }
        .sv-card-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
        .sv-card-h { font-size: clamp(15px,1.2vw,19px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY}; margin: 0; line-height: 1.2; }
        .sv-card-idx { font-size: 12px; font-weight: 900; letter-spacing: 0.5px; font-variant-numeric: tabular-nums; flex-shrink: 0; }
        .sv-card-d { font-size: clamp(13.5px,1vw,15px); line-height: 1.65; color: rgba(8,33,60,0.58); margin: 0; }

        /* ── Domain stages ── */
        .svs-stage { position: relative; width: 100%; max-width: 380px; aspect-ratio: 1.3/1;
          margin-bottom: clamp(20px,2.4vw,30px); border-radius: 22px; overflow: hidden; border: 1px solid rgba(8,33,60,0.08);
          background:
            radial-gradient(120% 110% at 82% 8%, color-mix(in srgb, var(--c) 14%, transparent), transparent 60%),
            linear-gradient(165deg, #ffffff, #eef1f5);
          display: flex; align-items: center; justify-content: center;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 16px 36px -22px rgba(8,33,60,0.4); }

        /* Upgrades — refresh ring + rising arrow */
        .svs-upg { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--c); }
        .svs-upg-halo { position: absolute; width: 84px; height: 84px; border-radius: 50%;
          background: color-mix(in srgb, var(--c) 18%, transparent); animation: svs-halo 2.6s ease-in-out infinite; will-change: transform, opacity; }
        @keyframes svs-halo { 0%,100% { transform: scale(0.85); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 0.9; } }
        .svs-upg-ring { position: absolute; width: 108px; height: 108px; border-radius: 50%;
          border: 5px solid color-mix(in srgb, var(--c) 22%, transparent); border-top-color: var(--c); border-right-color: var(--c);
          will-change: transform; animation: svs-spin 2.6s linear infinite; }
        @keyframes svs-spin { to { transform: rotate(360deg); } }
        .svs-upg-up { position: relative; color: var(--c); will-change: transform; animation: svs-bob 2.2s ease-in-out infinite; }
        @keyframes svs-bob { 0%,100% { transform: translateY(3px); } 50% { transform: translateY(-3px); } }

        /* Cloud — floating cloud + orbiting sync nodes */
        .svs-cloud { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .svs-cl-pulse { position: absolute; width: 60px; height: 60px; border-radius: 50%; border: 2px solid var(--c);
          opacity: 0; will-change: transform, opacity; animation: svs-pulse 3.2s ease-out infinite; }
        @keyframes svs-pulse { 0% { transform: scale(0.6); opacity: 0.6; } 100% { transform: scale(3); opacity: 0; } }
        .svs-cl-shape { width: 150px; height: auto; color: var(--c); position: relative; z-index: 2;
          filter: drop-shadow(0 14px 22px color-mix(in srgb, var(--c) 45%, transparent)); will-change: transform; animation: svs-bob 4.5s ease-in-out infinite; }
        .svs-cl-orbit { position: absolute; width: 168px; height: 168px; will-change: transform; animation: svs-spin 9s linear infinite; }
        .svs-cl-orbit span { position: absolute; width: 12px; height: 12px; border-radius: 50%; background: var(--c);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--c) 20%, transparent); }
        .svs-cl-orbit span:nth-child(1) { top: -6px; left: calc(50% - 6px); }
        .svs-cl-orbit span:nth-child(2) { bottom: 6px; right: 2px; width: 9px; height: 9px; }
        .svs-cl-orbit span:nth-child(3) { bottom: 14px; left: 4px; width: 8px; height: 8px; }

        /* Server — tilted 3D rack with blinking LEDs + scan line */
        .svs-srv { perspective: 760px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .svs-srv-rack { position: relative; width: 64%; max-width: 220px; display: flex; flex-direction: column; gap: 8px;
          padding: 14px; border-radius: 12px; background: ${NAVY}; overflow: hidden;
          transform: rotateY(-15deg) rotateX(7deg); will-change: transform; animation: svs-rack 9s ease-in-out infinite;
          box-shadow: 0 30px 54px -24px rgba(8,33,60,0.65); }
        @keyframes svs-rack { 0%,100% { transform: rotateY(-15deg) rotateX(7deg); } 50% { transform: rotateY(-6deg) rotateX(3deg); } }
        .svs-srv-u { display: flex; align-items: center; gap: 7px; padding: 8px 9px; border-radius: 6px; background: rgba(255,255,255,0.05); }
        .svs-srv-u i { width: 8px; height: 8px; border-radius: 50%; background: var(--c); flex-shrink: 0;
          will-change: opacity; animation: svs-led 1.6s steps(1) infinite; }
        .svs-srv-u:nth-child(2) i { animation-delay: 0.4s; } .svs-srv-u:nth-child(3) i { animation-delay: 0.8s; } .svs-srv-u:nth-child(4) i { animation-delay: 1.2s; }
        @keyframes svs-led { 0%,60% { opacity: 1; } 60.01%,100% { opacity: 0.25; } }
        .svs-srv-u b { height: 5px; border-radius: 3px; background: rgba(255,255,255,0.16); flex: 1; }
        .svs-srv-u b:last-child { flex: 0 0 18px; }
        .svs-srv-scan { position: absolute; left: 0; right: 0; height: 22px; top: 0;
          background: linear-gradient(180deg, color-mix(in srgb, var(--c) 40%, transparent), transparent);
          will-change: transform; animation: svs-scan 3s ease-in-out infinite; }
        @keyframes svs-scan { 0% { transform: translateY(-22px); } 100% { transform: translateY(150px); } }

        /* Support — live chat bubbles + typing indicator + online dot */
        .svs-sup { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .svs-sup-chat { width: 68%; max-width: 220px; background: #fff; border: 1px solid rgba(8,33,60,0.1); border-radius: 16px;
          padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 18px 40px -20px rgba(8,33,60,0.4); }
        .svs-bub { height: 16px; border-radius: 9px; transform: scale(0.4); opacity: 0; transform-origin: left center;
          will-change: transform, opacity; animation: svs-pop 4.5s ease-in-out infinite; }
        .svs-bub.b1 { width: 70%; background: color-mix(in srgb, var(--c) 16%, #eef1f5); }
        .svs-bub.b2 { width: 55%; align-self: flex-end; transform-origin: right center; background: var(--c); animation-delay: 0.9s; }
        @keyframes svs-pop { 0%,8% { transform: scale(0.4); opacity: 0; } 16%,82% { transform: scale(1); opacity: 1; } 92%,100% { transform: scale(0.4); opacity: 0; } }
        .svs-typing { display: inline-flex; gap: 5px; align-self: flex-start; padding: 8px 11px; border-radius: 9px;
          background: color-mix(in srgb, var(--c) 16%, #eef1f5); }
        .svs-typing i { width: 6px; height: 6px; border-radius: 50%; background: var(--c); will-change: transform; animation: svs-typedot 1.2s ease-in-out infinite; }
        .svs-typing i:nth-child(2) { animation-delay: 0.18s; } .svs-typing i:nth-child(3) { animation-delay: 0.36s; }
        @keyframes svs-typedot { 0%,100% { transform: translateY(0); opacity: 0.5; } 40% { transform: translateY(-5px); opacity: 1; } }
        .svs-sup-on { position: absolute; top: 22%; right: 20%; width: 12px; height: 12px; border-radius: 50%; background: #22c55e; z-index: 2; }
        .svs-sup-on::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 2px solid #22c55e;
          will-change: transform, opacity; animation: svs-pulse 2s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .svs-upg-halo, .svs-upg-ring, .svs-upg-up, .svs-cl-pulse, .svs-cl-shape, .svs-cl-orbit,
          .svs-srv-rack, .svs-srv-u i, .svs-srv-scan, .svs-bub, .svs-typing i, .svs-sup-on::after { animation: none !important; }
          .svs-bub { transform: scale(1); opacity: 1; } .svs-srv-scan { display: none; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="sv-shell sv-hero">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h1 className="sv-h1">Built, shipped<br />&amp; <span>looked after.</span></h1>
          <p className="sv-intro">
            We don't just deliver and disappear. From upgrades to round-the-clock support, one senior
            team owns the outcome — so your technology keeps performing long after launch.
          </p>
          <div className="sv-jump">
            {SERVICES.map(s => (
              <a key={s.label} className="sv-chip" href={`#${SERVICE_SECTIONS[s.label]}`}>
                <span style={{ background: s.color }} />{s.label}
              </a>
            ))}
          </div>
          <div className="sv-ov">
            {OVERVIEW.map(([v, l]) => (
              <div key={l} className="sv-ov-item">
                <div className="sv-ov-v">{v}</div>
                <div className="sv-ov-l">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Service chapters ── */}
      {SERVICES.map((s, si) => {
        const Ic = s.icon
        return (
          <section
            key={s.label}
            id={SERVICE_SECTIONS[s.label]}
            className="sv-chapter"
            style={{ background: si % 2 ? CREAM : '#fff' }}
          >
            <div
              className="sv-glow"
              aria-hidden="true"
              style={{ background: `radial-gradient(circle, ${s.color}1f, transparent 68%)` }}
            />
            <div className="sv-shell sv-grid">
              <Reveal className="sv-rail">
                <ServiceStage kind={s.kind} color={s.color} />
                <div className="sv-tag" style={{ color: s.color }}>
                  <span className="ic" style={{ background: `${s.color}1a`, color: s.color }}><Ic size={18} /></span>
                  Service {String(si + 1).padStart(2, '0')}
                </div>
                <h2 className="sv-h2">{s.label}</h2>
                <div className="sv-rule" style={{ background: s.color }} />
                <p className="sv-lead">{s.lead}</p>
                <p className="sv-body">{s.body}</p>
              </Reveal>

              <div className="sv-cards">
                {s.caps.map((c, ci) => (
                  <Reveal key={c.title} delay={Math.min(ci * 0.06, 0.3)}>
                    <div className="sv-card" style={{ ['--c' as string]: s.color }}>
                      <div className="sv-card-top">
                        <h3 className="sv-card-h">{c.title}</h3>
                        <span className="sv-card-idx" style={{ color: s.color }}>{String(ci + 1).padStart(2, '0')}</span>
                      </div>
                      <p className="sv-card-d">{c.detail}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <PageCTA eyebrow="Let's Get Started" heading="Need it built" highlight="right?" button="Start your project" />
    </PageLayout>
  )
}
