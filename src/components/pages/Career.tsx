import { Rocket, HeartHandshake, GraduationCap, Globe, Clock, Sparkles } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM } from './_kit'

const PERKS = [
  { icon: Globe, title: 'Remote-first', body: 'Work from anywhere in Australia. We care about outcomes, not hours at a desk.' },
  { icon: GraduationCap, title: 'Always learning', body: 'Generous learning budget, certifications paid for, and time set aside to grow.' },
  { icon: Rocket, title: 'Real ownership', body: 'Ship work that matters from day one. No busywork, no endless approval chains.' },
  { icon: HeartHandshake, title: 'Senior team', body: 'Learn beside experienced engineers, designers and cloud specialists who love the craft.' },
  { icon: Clock, title: 'Sane pace', body: 'Tight, visible milestones — not crunch. We protect your time and your focus.' },
  { icon: Sparkles, title: 'Modern stack', body: 'React 19, TypeScript, Azure, AI tooling — we build with what is genuinely best.' },
]

const ROLES = [
  { title: 'Senior Full-Stack Engineer', type: 'Full-time · Remote (AU)', tag: 'Engineering' },
  { title: 'Cloud / DevOps Engineer', type: 'Full-time · Remote (AU)', tag: 'Engineering' },
  { title: 'Product Designer (UI/UX)', type: 'Full-time · Remote (AU)', tag: 'Design' },
  { title: 'Digital Marketing Specialist', type: 'Full-time · Remote (AU)', tag: 'Growth' },
  { title: 'Cyber Security Analyst', type: 'Full-time · Remote (AU)', tag: 'Security' },
]

export function Career() {
  return (
    <PageLayout>
      <style>{`
        .cr-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .cr-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .cr-shell { max-width: 2440px; } }

        .cr-hero { padding: clamp(40px,6vw,96px) 0 clamp(28px,3vw,48px); }
        .cr-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em;
          line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .cr-h1 span { color: ${GREEN}; }
        .cr-intro { max-width: 640px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }

        .cr-section { padding: clamp(44px,6vw,96px) 0; }
        .cr-section-head { max-width: 720px; margin-bottom: clamp(28px,4vw,48px); }
        .cr-h2 { font-size: clamp(34px,5vw,76px); font-weight: 900; letter-spacing: -0.05em; line-height: 0.92;
          text-transform: uppercase; color: ${NAVY}; margin: 14px 0 0; }

        .cr-perks { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(16px,2vw,28px); }
        @media (max-width: 1000px) { .cr-perks { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) { .cr-perks { grid-template-columns: 1fr; } }
        .cr-perk { background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 20px;
          padding: clamp(22px,2.4vw,34px); box-shadow: 0 4px 24px rgba(8,33,60,0.05);
          transition: transform 0.25s, box-shadow 0.25s; will-change: transform; }
        .cr-perk:hover { transform: translateY(-5px); box-shadow: 0 22px 52px rgba(8,33,60,0.12); }
        .cr-perk-ic { width: 50px; height: 50px; border-radius: 14px; background: rgba(60,185,140,0.12);
          display: flex; align-items: center; justify-content: center; color: ${GREEN}; margin-bottom: 18px; }
        .cr-perk-h { font-size: clamp(18px,1.5vw,22px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY}; margin: 0 0 10px; }
        .cr-perk-b { font-size: clamp(14px,1.05vw,16px); line-height: 1.7; color: rgba(8,33,60,0.6); margin: 0; }

        .cr-roles { display: flex; flex-direction: column; gap: 14px; }
        .cr-role { display: flex; align-items: center; justify-content: space-between; gap: 20px;
          background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 18px;
          padding: clamp(20px,2.4vw,30px) clamp(22px,2.6vw,36px); box-shadow: 0 4px 20px rgba(8,33,60,0.05);
          transition: transform 0.22s, box-shadow 0.22s; will-change: transform; }
        .cr-role:hover { transform: translateX(6px); box-shadow: 0 16px 38px rgba(8,33,60,0.1); }
        .cr-role-l { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
        .cr-role-tag { font-size: 11px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: ${GREEN}; }
        .cr-role-title { font-size: clamp(18px,1.7vw,26px); font-weight: 900; letter-spacing: -0.03em; color: ${NAVY}; }
        .cr-role-type { font-size: 13.5px; font-weight: 600; color: rgba(8,33,60,0.5); }
        .cr-role-btn { flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px; background: ${NAVY};
          color: #fff; border: none; border-radius: 100px; padding: 12px 22px; font-size: 13.5px; font-weight: 800;
          cursor: pointer; font-family: inherit; min-height: 44px; text-decoration: none; transition: background 0.2s; }
        .cr-role-btn:hover { background: ${GREEN}; color: ${NAVY}; }
        @media (max-width: 600px) {
          .cr-role { flex-direction: column; align-items: flex-start; }
          .cr-role-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="cr-shell cr-hero">
        <Reveal>
          <Eyebrow>Career</Eyebrow>
          <h1 className="cr-h1">Build the<br />future <span>with us.</span></h1>
          <p className="cr-intro">
            We're a senior, remote-first team that ships work we're proud of for ambitious Australian
            businesses. If you care about craft, ownership and moving fast without the chaos — we'd love to meet you.
          </p>
        </Reveal>
      </section>

      <section className="cr-section" style={{ background: CREAM }}>
        <div className="cr-shell">
          <Reveal>
            <div className="cr-section-head">
              <Eyebrow>Why EG Digital</Eyebrow>
              <h2 className="cr-h2">Work that respects your time.</h2>
            </div>
          </Reveal>
          <div className="cr-perks">
            {PERKS.map((p, i) => {
              const Ic = p.icon
              return (
                <Reveal key={p.title} delay={(i % 3) * 0.06}>
                  <div className="cr-perk">
                    <div className="cr-perk-ic"><Ic size={24} /></div>
                    <h3 className="cr-perk-h">{p.title}</h3>
                    <p className="cr-perk-b">{p.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cr-section">
        <div className="cr-shell">
          <Reveal>
            <div className="cr-section-head">
              <Eyebrow>Open Roles</Eyebrow>
              <h2 className="cr-h2">Come do your best work.</h2>
            </div>
          </Reveal>
          <div className="cr-roles">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={(i % 5) * 0.05}>
                <div className="cr-role">
                  <div className="cr-role-l">
                    <span className="cr-role-tag">{r.tag}</span>
                    <span className="cr-role-title">{r.title}</span>
                    <span className="cr-role-type">{r.type}</span>
                  </div>
                  <a className="cr-role-btn" href="mailto:connect@egdigital.com.au?subject=Application">
                    Apply
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA eyebrow="Don't See Your Role?" heading="Tell us what" highlight="you do best." button="Get in touch" />
    </PageLayout>
  )
}
