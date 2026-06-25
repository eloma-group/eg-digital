import { RefreshCw, Cloud, Server, Headphones, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from './_kit'
import { SERVICE_SECTIONS } from '../../lib/sectionRoutes'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICES - "We watch your systems 24/7"
   Signature: a live Operations Console (NOC status board) with per-service
   heartbeat monitors. Below, each service gets a quiet editorial detail section
   carrying its SERVICE_SECTIONS anchor for deep-linking.
   ════════════════════════════════════════════════════════════════════════════ */

type Kind = 'upg' | 'cloud' | 'srv' | 'sup'
type Cap = { title: string; detail: string }
type Service = {
  label: string; short: string; tag: string; icon: LucideIcon; kind: Kind; color: string
  lead: string; body: string; caps: Cap[]; mon: [string, string]
}

const SERVICES: Service[] = [
  {
    label: 'Upgrades', short: 'Upgrades', tag: 'Patching & version control', icon: RefreshCw, kind: 'upg', color: GREEN,
    lead: 'Stay current, stay protected.',
    body: 'Regular updates are critical to security, stability and performance. We keep your systems current with the latest patches, upgrades and enhancements - without disrupting your day.',
    caps: [
      { title: 'Security Updates & Patching', detail: 'Protect systems from vulnerabilities and emerging threats with timely, critical patches.' },
      { title: 'Software Version Upgrades', detail: 'Keep applications and platforms current with the latest features and compatibility.' },
      { title: 'Performance Enhancements', detail: 'Optimise performance through regular maintenance and configuration improvements.' },
      { title: 'Compliance & Risk Reduction', detail: 'Reduce operational risk and stay compliant by keeping software secure and supported.' },
    ],
    mon: ['100%', 'patched'],
  },
  {
    label: 'Cloud Maintenances', short: 'Cloud', tag: 'Azure & AWS', icon: Cloud, kind: 'cloud', color: '#0078d4',
    lead: 'A cloud that stays fast and reliable.',
    body: 'Cloud environments need ongoing monitoring and optimisation to perform at their best. We keep your infrastructure secure, efficient and scalable across Azure and AWS.',
    caps: [
      { title: 'Cloud Performance Monitoring', detail: 'Continuously monitor resources to catch issues early and hold optimal performance.' },
      { title: 'Security & Compliance', detail: 'Apply security best practice and compliance controls to protect your data.' },
      { title: 'Backup & Disaster Recovery', detail: 'Reliable backups and recovery plans that keep the business running.' },
      { title: 'Resource & Cost Optimisation', detail: 'Right-size usage to improve efficiency and control operational cost.' },
    ],
    mon: ['99.98%', 'uptime'],
  },
  {
    label: 'Server Maintenances', short: 'Server', tag: 'Uptime & tuning', icon: Server, kind: 'srv', color: '#6366f1',
    lead: 'Infrastructure that just stays up.',
    body: 'Your servers are the backbone of your IT. We provide proactive maintenance and support for maximum uptime, security and performance - so your team never thinks about them.',
    caps: [
      { title: 'Server Health Monitoring', detail: 'Track performance and health to resolve issues before they hit operations.' },
      { title: 'Performance Optimisation', detail: 'Improve speed, reliability and resource use through regular tuning.' },
      { title: 'Security Management', detail: 'Protect servers with security updates, access controls and monitoring.' },
      { title: 'Backup & Recovery Support', detail: 'Safeguard critical data with comprehensive backup and recovery.' },
    ],
    mon: ['99.99%', 'uptime'],
  },
  {
    label: 'Support Services', short: 'Support', tag: 'Help desk & on-site', icon: Headphones, kind: 'sup', color: '#d97706',
    lead: 'Real people, fast answers.',
    body: 'Our dedicated support team provides fast, reliable assistance to keep your users productive and your systems running smoothly - remotely or on-site, whenever you need it.',
    caps: [
      { title: 'Help Desk & User Support', detail: 'Prompt help for everyday technical issues, user queries and software concerns.' },
      { title: 'Remote & On-Site Assistance', detail: 'Expert support remotely or on-site, matched to the issue and its urgency.' },
      { title: 'Troubleshooting & Resolution', detail: 'Quickly diagnose and resolve problems to minimise disruption.' },
      { title: 'Ongoing Monitoring & Support', detail: 'Continuously monitor your environment and provide proactive support.' },
    ],
    mon: ['<15m', 'response'],
  },
]

const STATS: [string, string][] = [['99.99%', 'Uptime SLA'], ['<15m', 'Avg response'], ['24/7', 'Monitoring'], ['0', 'Open incidents']]

/* ── Service module cards ── */
function ServiceCards() {
  return (
    <div className="svc-grid">
      {SERVICES.map((s, i) => {
        const Ic = s.icon
        return (
          <Reveal key={s.label}>
            <section id={SERVICE_SECTIONS[s.label]} className={`svc-card${i % 2 ? ' rev' : ''}`} style={{ ['--c' as string]: s.color }}>
              <div className="svc-head">
                <div className="svc-head-row">
                  <span className="svc-head-ic"><Ic size={24} /></span>
                  <span className="svc-code">SVC-{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h2 className="svc-h">{s.label}</h2>
                <p className="svc-lead">{s.lead}</p>
                <p className="svc-body">{s.body}</p>
                <span className="svc-status"><i />Operational · {s.mon[0]} {s.mon[1]}</span>
              </div>
              <div className="svc-caps">
                {s.caps.map(c => (
                  <div key={c.title} className="svc-cap">
                    <span className="svc-cap-ic"><Check size={15} /></span>
                    <div>
                      <h3 className="svc-cap-t">{c.title}</h3>
                      <p className="svc-cap-d">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )
      })}
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

        .sv-hero { padding: clamp(40px,6vw,92px) 0 clamp(24px,3vw,40px); }
        .sv-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .sv-h1 span { color: ${GREEN}; }
        .sv-intro { max-width: 640px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }

        /* ── Hero stat strip ── */
        .sv-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(16px,3vw,40px); margin-top: clamp(36px,4vw,58px);
          padding-top: clamp(28px,3vw,40px); border-top: 1px solid rgba(8,33,60,0.12); }
        @media (max-width: 680px) { .sv-stats { grid-template-columns: repeat(2,1fr); gap: 28px 16px; } }
        .sv-sv { font-size: clamp(30px,4vw,56px); font-weight: 900; letter-spacing: -0.05em; color: ${NAVY}; line-height: 1; }
        .sv-sl { font-size: clamp(11px,0.85vw,13px); font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(8,33,60,0.42); margin-top: 8px; }
        @keyframes svc-beat { 0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.6); } 70%,100% { box-shadow: 0 0 0 8px rgba(255,255,255,0); } }

        /* ── Service modules section ── */
        .sv-rows-sec { margin-top: clamp(48px,6vw,92px); }
        .sv-sech { font-size: clamp(30px,4vw,64px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.94; text-transform: uppercase; color: ${NAVY}; margin: 12px 0 0; }
        .sv-sech span { color: ${GREEN}; }

        .svc-grid { display: flex; flex-direction: column; gap: clamp(18px,2.4vw,32px); }
        .svc-card { display: grid; grid-template-columns: 0.92fr 1.08fr; border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(8,33,60,0.08); background: #fff; box-shadow: 0 24px 60px -42px rgba(8,33,60,0.5);
          scroll-margin-top: 96px; transition: box-shadow 0.4s, transform 0.4s; will-change: transform; }
        .svc-card:hover { transform: translateY(-4px); box-shadow: 0 44px 92px -50px rgba(8,33,60,0.6); }
        @media (max-width: 860px) { .svc-card { grid-template-columns: 1fr; } }

        .svc-head { position: relative; overflow: hidden; padding: clamp(28px,3vw,48px);
          background: linear-gradient(158deg, var(--c), color-mix(in srgb, var(--c) 60%, ${NAVY})); color: #fff; display: flex; flex-direction: column; }
        .svc-head::after { content: ''; position: absolute; top: -32%; right: -16%; width: 58%; height: 132%; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 62%); pointer-events: none; }
        .svc-head-row { position: relative; display: flex; align-items: center; justify-content: space-between; margin-bottom: clamp(22px,3vw,42px); }
        .svc-head-ic { width: 52px; height: 52px; border-radius: 14px; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; color: #fff; }
        .svc-code { font-family: ui-monospace, monospace; font-size: 12px; font-weight: 800; letter-spacing: 1.5px; color: rgba(255,255,255,0.72); }
        .svc-h { position: relative; font-size: clamp(30px,3.4vw,52px); font-weight: 900; letter-spacing: -0.04em; line-height: 0.95; text-transform: uppercase; margin: 0 0 12px; }
        .svc-lead { position: relative; font-size: clamp(15px,1.3vw,19px); font-weight: 800; letter-spacing: -0.01em; color: #fff; margin: 0 0 14px; }
        .svc-body { position: relative; font-size: clamp(13px,1.05vw,16px); line-height: 1.7; color: rgba(255,255,255,0.8); margin: 0 0 auto; max-width: 46ch; }
        .svc-status { position: relative; display: inline-flex; align-items: center; gap: 8px; margin-top: clamp(22px,3vw,34px); align-self: flex-start;
          background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.28); border-radius: 99px; padding: 7px 14px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.6px; text-transform: uppercase; }
        .svc-status i { width: 7px; height: 7px; border-radius: 50%; background: #fff; box-shadow: 0 0 0 0 rgba(255,255,255,0.6); animation: svc-beat 2s ease-out infinite; }
        .svc-card.rev .svc-head { order: 2; }
        @media (max-width: 860px) { .svc-card.rev .svc-head { order: 0; } }

        .svc-caps { padding: clamp(24px,2.8vw,44px); display: grid; grid-template-columns: 1fr 1fr; gap: clamp(20px,2.4vw,32px); align-content: center; }
        @media (max-width: 560px) { .svc-caps { grid-template-columns: 1fr; } }
        .svc-cap { display: flex; gap: 13px; }
        .svc-cap-ic { width: 26px; height: 26px; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--c) 15%, transparent); color: var(--c); }
        .svc-cap-t { font-size: clamp(15px,1.15vw,17px); font-weight: 800; letter-spacing: -0.01em; color: ${NAVY}; margin: 0 0 5px; }
        .svc-cap-d { font-size: clamp(12.5px,0.98vw,14.5px); line-height: 1.6; color: rgba(8,33,60,0.55); margin: 0; }

        @media (prefers-reduced-motion: reduce) {
          .svc-status i { animation: none !important; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="sv-shell sv-hero">
        <Reveal>
          <Eyebrow>Managed Services</Eyebrow>
          <h1 className="sv-h1">Always on,<br />always <span>looked after.</span></h1>
          <p className="sv-intro">
            Technology needs continuous monitoring, maintenance and support to perform at its best. Our proactive
            managed services reduce downtime, improve performance and keep your IT secure, stable and efficient.
          </p>
        </Reveal>
        <div className="sv-stats">
          {STATS.map(([v, l]) => (
            <Reveal key={l}><div className="sv-sv">{v}</div><div className="sv-sl">{l}</div></Reveal>
          ))}
        </div>
      </section>

      {/* ── Service modules ── */}
      <section className="sv-shell sv-rows-sec">
        <Reveal style={{ marginBottom: 'clamp(30px,4vw,52px)' }}>
          <Eyebrow>What we cover</Eyebrow>
          <h2 className="sv-sech">Four services, one<br /><span>accountable team.</span></h2>
        </Reveal>
        <ServiceCards />
      </section>

      <PageCTA eyebrow="Let's Get Started" heading="Keep it running" highlight="smoothly." button="Talk to our team" />
    </PageLayout>
  )
}
