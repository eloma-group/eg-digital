import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

function fadeUp(delay = 0) {
  return {
    initial:     { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport:    { once: true, margin: '-60px' },
    transition:  { duration: 0.8, ease: EASE, delay },
  }
}

// ── Card primitives ───────────────────────────────────────────────
function Card({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="fb-card" style={{
      background: '#fff',
      border: '1px solid rgba(8,33,60,0.07)',
      borderRadius: 16,
      padding: '18px 20px',
      boxShadow: '0 2px 10px rgba(8,33,60,0.05)',
      ...style,
    }}>
      {children}
    </div>
  )
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
      textTransform: 'uppercase', color: 'rgba(8,33,60,0.35)',
      marginBottom: 7,
    }}>
      {children}
    </div>
  )
}

function BigNum({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.04em', color: color ?? NAVY }}>
      {children}
    </div>
  )
}

// ── Mockup 1 - Microsoft Ecosystem ───────────────────────────────
function MockupMicrosoft() {
  const apps = [
    { name: 'Teams',      bg: '#4b53bc' },
    { name: 'Outlook',    bg: '#0078d4' },
    { name: 'SharePoint', bg: '#038387' },
    { name: 'OneDrive',   bg: '#1490df' },
    { name: 'Dynamics',   bg: '#002050' },
    { name: 'Azure',      bg: '#0072c6' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Label>Microsoft 365 Ecosystem</Label>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 5,
            background: 'rgba(60,185,140,0.1)', borderRadius: 99,
            padding: '4px 10px',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: GREEN }}>All Active</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {apps.map(app => (
            <div key={app.name} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
              padding: '12px 6px',
              background: 'rgba(8,33,60,0.02)', borderRadius: 12,
              border: '1px solid rgba(8,33,60,0.05)',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, background: app.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, fontWeight: 800, color: '#fff',
              }}>
                {app.name[0]}
              </div>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: NAVY, textAlign: 'center', lineHeight: 1.2 }}>{app.name}</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Card>
          <Label>Licences Active</Label>
          <BigNum>247</BigNum>
          <div style={{ marginTop: 8, height: 4, background: 'rgba(8,33,60,0.06)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: '82%', height: '100%', background: GREEN, borderRadius: 99 }} />
          </div>
          <div style={{ fontSize: 10, color: 'rgba(8,33,60,0.38)', fontWeight: 600, marginTop: 5 }}>82% utilisation</div>
        </Card>
        <Card>
          <Label>Cloud Uptime</Label>
          <BigNum color={GREEN}>99.9%</BigNum>
          <div style={{ fontSize: 10, color: 'rgba(8,33,60,0.38)', fontWeight: 600, marginTop: 5 }}>↑ Last 30 days</div>
        </Card>
      </div>
    </div>
  )
}

// ── Mockup 2 - Dev Project Tracker ───────────────────────────────
function MockupDev() {
  const files = [
    { name: 'Homepage',        note: 'Deployed',     dot: GREEN      },
    { name: 'Product Pages',   note: 'Deployed',     dot: GREEN      },
    { name: 'Checkout Flow',   note: 'In Progress',  dot: '#f59e0b'  },
    { name: 'Admin Panel',     note: 'Queued',       dot: 'rgba(8,33,60,0.2)' },
  ]
  const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Shopify']
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <div>
            <Label>Active Build</Label>
            <div style={{ fontSize: 17, fontWeight: 800, color: NAVY, letterSpacing: '-0.02em' }}>Nova Commerce</div>
          </div>
          <div style={{
            background: `${GREEN}18`, border: `1px solid ${GREEN}40`,
            borderRadius: 99, padding: '4px 12px',
            fontSize: 10, fontWeight: 700, color: GREEN,
          }}>On Track</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {files.map(f => (
            <div key={f.name} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '8px 10px', background: 'rgba(8,33,60,0.025)', borderRadius: 9,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: f.dot, flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: NAVY }}>{f.name}</span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: f.dot }}>{f.note}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, height: 4, background: 'rgba(8,33,60,0.06)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ width: '55%', height: '100%', background: GREEN, borderRadius: 99 }} />
        </div>
        <div style={{ fontSize: 10, color: 'rgba(8,33,60,0.4)', fontWeight: 600, marginTop: 5 }}>Build progress - 55% complete</div>
      </Card>

      <Card>
        <Label>Tech Stack</Label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {stack.map(s => (
            <div key={s} style={{
              padding: '5px 11px', borderRadius: 99,
              background: 'rgba(8,33,60,0.05)',
              fontSize: 11, fontWeight: 700, color: NAVY,
            }}>{s}</div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ── Mockup 3 - SEO & Marketing ────────────────────────────────────
function MockupMarketing() {
  const bars = [34, 46, 42, 58, 52, 68, 62, 78, 72, 86, 82, 100]
  const keywords = [
    { kw: 'Microsoft 365 Sydney',    pos: 1, up: true },
    { kw: 'IT Solutions Australia',  pos: 3, up: true },
    { kw: 'Cloud Hosting Provider',  pos: 6, up: false },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <Label>Organic Traffic Growth</Label>
            <BigNum>+284%</BigNum>
            <div style={{ fontSize: 12, color: GREEN, fontWeight: 700, marginTop: 4 }}>Over 12 months</div>
          </div>
          {/* Domain authority ring */}
          <div style={{ position: 'relative', width: 54, height: 54, flexShrink: 0 }}>
            <svg width="54" height="54" viewBox="0 0 54 54">
              <circle cx="27" cy="27" r="22" fill="none" stroke="rgba(8,33,60,0.06)" strokeWidth="5" />
              <circle cx="27" cy="27" r="22" fill="none" stroke={GREEN} strokeWidth="5"
                strokeDasharray={`${2 * Math.PI * 22 * 0.84} ${2 * Math.PI * 22 * 0.16}`}
                strokeDashoffset={2 * Math.PI * 22 * 0.25}
                strokeLinecap="round" />
            </svg>
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 13, fontWeight: 900, color: NAVY, lineHeight: 1 }}>84</span>
              <span style={{ fontSize: 8, fontWeight: 700, color: 'rgba(8,33,60,0.35)', letterSpacing: '0.5px' }}>DA</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 52 }}>
          {bars.map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0',
              background: i >= 9 ? GREEN : `rgba(60,185,140,${0.1 + h * 0.006})`,
            }} />
          ))}
        </div>
      </Card>

      <Card>
        <Label>Keyword Rankings</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 4 }}>
          {keywords.map(k => (
            <div key={k.kw} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                background: k.pos === 1 ? GREEN : 'rgba(8,33,60,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800,
                color: k.pos === 1 ? '#fff' : NAVY,
              }}>#{k.pos}</div>
              <span style={{
                fontSize: 12, fontWeight: 600, color: NAVY,
                flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>{k.kw}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: k.up ? GREEN : 'rgba(8,33,60,0.3)', flexShrink: 0 }}>
                {k.up ? '↑' : '→'}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ── Mockup 4 - Cyber Security ─────────────────────────────────────
function MockupSecurity() {
  const threats = [
    { name: 'Phishing Attempts',   count: 148, color: '#ef4444' },
    { name: 'Malware Detected',    count: 23,  color: '#f59e0b' },
    { name: 'Unauthorised Access', count: 7,   color: GREEN      },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Dark protection card */}
      <Card style={{ background: NAVY, border: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '1.8px',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 6,
            }}>AI Protection Status</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em' }}>
              System Protected
            </div>
          </div>
          {/* Shield icon */}
          <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
            <path d="M24 2L3 10V28C3 40.5 13 51 24 55C35 51 45 40.5 45 28V10L24 2Z"
              fill={`${GREEN}22`} stroke={GREEN} strokeWidth="1.5" />
            <path d="M16 28L22 34L32 22"
              stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[
            { label: 'Threats Blocked', val: '178' },
            { label: 'Scans Today',     val: '2.4K' },
            { label: 'Uptime',          val: '100%' },
          ].map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 10px',
            }}>
              <div style={{
                fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.35)',
                letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 5,
              }}>{s.label}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em' }}>{s.val}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <Label>Recent Threats - All Blocked</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 6 }}>
          {threats.map(t => (
            <div key={t.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: NAVY }}>{t.name}</span>
              </div>
              <div style={{
                fontSize: 11, fontWeight: 800, color: NAVY,
                background: 'rgba(8,33,60,0.05)', borderRadius: 99, padding: '3px 10px',
              }}>{t.count} blocked</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ── FeatureBlock ──────────────────────────────────────────────────
type FeatureBlockProps = {
  id?: string
  num: string
  eyebrow: string
  headline: string
  body: string
  cta: string
  to: string
  flip?: boolean
  bg?: string
  mockup: ReactNode
}

function FeatureBlock({ id, num, eyebrow, headline, body, cta, to, flip, bg = '#fff', mockup }: FeatureBlockProps) {
  const navigate = useNavigate()
  return (
    <section
      id={id}
      style={{ background: bg, padding: 'clamp(72px,9vw,130px) clamp(24px,4vw,72px)' }}
    >
      <div className={`fb-grid${flip ? ' fb-flip' : ''}`}>

        {/* Text */}
        <div style={{ position: 'relative' }}>
          {/* Large ghost number */}
          <div style={{
            position: 'absolute', top: -12, left: -6,
            fontSize: 'clamp(96px, 11vw, 156px)',
            fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 1,
            color: 'rgba(8,33,60,0.032)',
            userSelect: 'none', pointerEvents: 'none',
          }} aria-hidden="true">{num}</div>

          <motion.div className="fb-eyebrow" {...fadeUp(0)}>{eyebrow}</motion.div>
          <motion.h2 className="fb-h2" {...fadeUp(0.08)}>{headline}</motion.h2>
          <motion.p className="fb-body" {...fadeUp(0.14)}>{body}</motion.p>
          <motion.div {...fadeUp(0.2)}>
            <button className="fb-cta" onClick={() => navigate(to)}>{cta} <ArrowRight size={15} /></button>
          </motion.div>
        </div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.14 }}
        >
          {mockup}
        </motion.div>

      </div>
    </section>
  )
}

// ── Features export ───────────────────────────────────────────────
export function Features() {
  return (
    <>
      <style>{`
        .fb-grid {
          max-width: min(calc(100vw - 48px), 1760px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(48px, 6vw, 100px);
        }
        .fb-flip { direction: rtl; }
        .fb-flip > * { direction: ltr; }

        .fb-eyebrow {
          font-size: clamp(10px, 0.72vw, 12px);
          font-weight: 800; letter-spacing: 2.5px;
          text-transform: uppercase; color: ${GREEN};
          margin-bottom: clamp(12px, 1.2vw, 18px);
          display: flex; align-items: center; gap: 10px;
          position: relative; z-index: 1;
        }
        .fb-eyebrow::before {
          content: ''; display: block;
          width: 24px; height: 2px;
          background: ${GREEN}; flex-shrink: 0;
        }

        .fb-h2 {
          font-size: clamp(34px, 4.5vw, 64px);
          font-weight: 900; color: ${NAVY};
          text-transform: uppercase;
          letter-spacing: -0.04em; line-height: 0.94;
          margin-bottom: clamp(14px, 1.8vw, 24px);
          position: relative; z-index: 1;
        }

        .fb-body {
          font-size: clamp(15px, 1.1vw, 17px);
          color: rgba(8,33,60,0.54); line-height: 1.8;
          margin-bottom: clamp(22px, 2.5vw, 36px);
          max-width: 460px;
          position: relative; z-index: 1;
        }

        .fb-cta {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: clamp(13px, 0.9vw, 15px); font-weight: 700;
          color: ${GREEN}; background: none;
          border: none; border-bottom: 2px solid ${GREEN};
          padding-bottom: 3px; cursor: pointer;
          font-family: inherit; transition: gap 0.2s;
          position: relative; z-index: 1;
        }
        .fb-cta:hover { gap: 14px; }

        .fb-card {
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s, border-color 0.28s;
          will-change: transform;
        }
        .fb-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(8,33,60,0.13);
          border-color: rgba(60,185,140,0.30);
        }

        @media (max-width: 900px) {
          .fb-grid, .fb-flip { grid-template-columns: 1fr; direction: ltr; }
        }
        @media (max-width: 540px) {
          .fb-h2 { font-size: clamp(28px, 8vw, 44px); }
        }
        @media (min-width: 1920px) { .fb-grid { max-width: 1900px; } }
        @media (min-width: 2560px) { .fb-grid { max-width: 2440px; } }
      `}</style>

      <FeatureBlock
        id="services"
        num="01"
        eyebrow="Microsoft Partner"
        headline="End-to-End Microsoft Solutions"
        body="As a certified Microsoft partner, we deploy and manage the full suite - 365, Teams, Dynamics CRM, ERP, and Azure - so your team collaborates smarter from day one."
        cta="Explore Microsoft Services"
        to="/solutions"
        bg="#fff"
        mockup={<MockupMicrosoft />}
      />

      <FeatureBlock
        num="02"
        eyebrow="Digital Development"
        headline="Websites, Apps & SaaS Built to Scale"
        body="From marketing websites to complex SaaS platforms and mobile apps, we engineer digital products that perform - on time, on budget, and built to grow with your business."
        cta="View Development Services"
        to="/services"
        flip
        bg={CREAM}
        mockup={<MockupDev />}
      />

      <FeatureBlock
        num="03"
        eyebrow="Growth & Marketing"
        headline="SEO & Branding That Drives Results"
        body="We combine technical SEO, standout branding, and reliable cloud hosting to put your business in front of the right audience - and keep it performing at its peak."
        cta="Explore Growth Services"
        to="/solutions"
        bg="#fff"
        mockup={<MockupMarketing />}
      />

      <FeatureBlock
        id="case-studies"
        num="04"
        eyebrow="Security & Integration"
        headline="AI Cyber Security & Smart Integrations"
        body="Protect your business with AI-driven threat detection, proactive monitoring, and seamless system integrations - keeping your data safe and your operations fully connected."
        cta="View Security Services"
        to="/solutions"
        flip
        bg={CREAM}
        mockup={<MockupSecurity />}
      />
    </>
  )
}
