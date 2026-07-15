import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, CREAM, EASE } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'

/* ── Data ── */
const BENEFITS = [
  'Career Growth Opportunities', 'Continuous Learning',
  'Innovative Work Environment', 'Collaborative Team Culture',
  'Real-World Project Experience', 'Recognition & Rewards',
  'Work-Life Balance', 'Opportunity to Make an Impact',
]
const BENE_COLORS = ['#2563eb', GREEN, '#7c3aed', '#d97706']
const STORY = [
  { time: 'Morning', k: 'Start with Purpose', b: 'Kick off the day by connecting with your team, reviewing priorities and setting goals for success.', c: GREEN },
  { time: 'Midday', k: 'Collaborate & Innovate', b: 'Work alongside talented professionals, share ideas, solve challenges and bring innovative solutions to life.', c: '#2563eb' },
  { time: 'Afternoon', k: 'Learn & Grow', b: 'Gain hands-on experience, explore new technologies and continuously develop your skills through real-world projects.', c: '#d97706' },
  { time: 'End of day', k: 'Celebrate Achievements', b: 'Wrap up by sharing wins, recognising contributions and making an impact that drives business success.', c: '#7c3aed' },
]
const TEAM_COLOR: Record<string, string> = { Engineering: '#2563eb', Design: '#7c3aed', Growth: '#d97706', Security: GREEN }
const ROLES = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', type: 'Full-time · Remote', summary: 'React, TypeScript & .NET across client products end to end.' },
  { title: 'Cloud / DevOps Engineer', team: 'Engineering', type: 'Full-time · Remote', summary: 'Azure & AWS, CI/CD and the reliability clients lean on.' },
  { title: 'Product Designer (UI/UX)', team: 'Design', type: 'Full-time · Remote', summary: 'Own experiences from first sketch to shipped, polished UI.' },
  { title: 'Digital Marketing Specialist', team: 'Growth', type: 'Full-time · Remote', summary: 'SEO, paid and content that actually moves the numbers.' },
  { title: 'Cyber Security Analyst', team: 'Security', type: 'Full-time · Remote', summary: 'Microsoft Defender, monitoring and zero-trust hardening.' },
]
const applyHref = (t: string) => `mailto:connect@egdigital.com.au?subject=${encodeURIComponent('Application - ' + t)}`

/* ── Open roles - apply with your work, not a form (sticky-note board) ── */
function Notebook() {
  return (
    <div className="nb">
      <div className="nb-annot">// open roles - apply with your work, not a form</div>
      <div className="nb-notes">
        {ROLES.map((r, i) => {
          const c = TEAM_COLOR[r.team]
          return (
            <a key={r.title} href={applyHref(r.title)} className="nb-note" style={{ ['--c' as string]: c, ['--rot' as string]: `${(i % 2 ? 1 : -1) * (1.4 + (i % 3) * 0.5)}deg` }}>
              <span className="nb-pin" />
              <span className="nb-team" style={{ color: c }}>{r.team}</span>
              <span className="nb-title">{r.title}</span>
              <span className="nb-sum">{r.summary}</span>
              <span className="nb-apply">apply ↗</span>
            </a>
          )
        })}
      </div>
      <div className="nb-annot nb-annot-2">↳ remote-first · paid trial · collaborative team</div>
    </div>
  )
}

/* ── A day at EG (scroll story) ── */
function ScrollStory() {
  return (
    <div className="ss">
      <div className="ss-line"><motion.div className="ss-line-fill" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-20% 0px -20% 0px' }} transition={{ duration: 1.4, ease: EASE }} /></div>
      {STORY.map((s, i) => (
        <Reveal key={s.k} delay={i * 0.04}>
          <div className="ss-ch" style={{ ['--c' as string]: s.c }}>
            <div className="ss-dot" />
            <div className="ss-time">{s.time}</div>
            <h3 className="ss-k">{s.k}</h3>
            <p className="ss-b">{s.b}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function Career() {
  usePageMeta(
    'EG Digital Careers | Join Our Growing Tech Team',
    'Explore career opportunities at EG Digital. Join our team of developers, designers, and marketers building innovative digital solutions worldwide.',
  )
  return (
    <PageLayout>
      <style>{`
        .cr-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .cr-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .cr-shell { max-width: 2440px; } }
        .cr-sec { padding: clamp(56px,7vw,116px) 0; }

        .cr-hero { padding: clamp(40px,6vw,96px) 0 clamp(20px,3vw,32px); }
        .cr-badge { display: inline-flex; align-items: center; gap: 9px; background: rgba(60,185,140,0.12); border: 1px solid rgba(60,185,140,0.3); color: ${GREEN}; border-radius: 100px; padding: 8px 16px; font-size: 12px; font-weight: 800; letter-spacing: 0.6px; margin-bottom: 22px; }
        .cr-badge .pulse { width: 8px; height: 8px; border-radius: 50%; background: ${GREEN}; position: relative; }
        .cr-badge .pulse::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 2px solid ${GREEN}; animation: cr-ping 2s ease-out infinite; }
        @keyframes cr-ping { 0% { transform: scale(0.6); opacity: 0.8; } 100% { transform: scale(2.4); opacity: 0; } }
        .cr-h1 { font-size: clamp(52px,10.5vw,140px); font-weight: 900; letter-spacing: 0.01em; line-height: 0.98; color: ${NAVY}; margin: 0; text-transform: uppercase; word-spacing: 0.14em; }
        .cr-h1 span { color: ${GREEN}; }
        .cr-intro { max-width: 620px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 24px 0 0; }

        .cr-h2 { font-size: clamp(34px,5vw,76px); font-weight: 900; letter-spacing: 0.01em; line-height: 1.04; text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; margin: 14px 0 0; }
        .cr-h2 span { color: ${GREEN}; }
        .cr-sub { max-width: 560px; font-size: clamp(15px,1.15vw,18px); line-height: 1.7; color: rgba(8,33,60,0.55); margin: 16px 0 0; }

        /* ── What you'll get ── */
        .cr-benes { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(14px,1.6vw,22px); margin-top: clamp(32px,4vw,54px); }
        @media (max-width: 900px) { .cr-benes { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) { .cr-benes { grid-template-columns: 1fr; } }
        .cr-bene { position: relative; overflow: hidden; display: flex; align-items: center; gap: 14px; background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 16px;
          padding: clamp(20px,2vw,28px); box-shadow: 0 4px 22px rgba(8,33,60,0.05);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, border-color 0.3s; will-change: transform; height: 100%; }
        .cr-bene::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--c); transform: scaleX(0); transform-origin: left center; transition: transform 0.35s cubic-bezier(0.16,1,0.3,1); }
        .cr-bene:hover { transform: translateY(-6px); box-shadow: 0 26px 54px -10px color-mix(in srgb, var(--c) 24%, rgba(8,33,60,0.14)); border-color: color-mix(in srgb, var(--c) 40%, transparent); }
        .cr-bene:hover::before { transform: scaleX(1); }
        .cr-bene-ic { width: 36px; height: 36px; border-radius: 10px; background: color-mix(in srgb, var(--c) 15%, transparent); color: var(--c);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .cr-bene:hover .cr-bene-ic { transform: scale(1.08) rotate(-5deg); }
        .cr-bene-t { font-size: clamp(14px,1.1vw,16.5px); font-weight: 800; letter-spacing: -0.01em; color: ${NAVY}; line-height: 1.3; }

        /* ── Notebook (open roles) ── */
        .nb { position: relative; background:
            linear-gradient(#fff, #fff) padding-box,
            repeating-linear-gradient(0deg, rgba(8,33,60,0.05) 0 1px, transparent 1px 28px),
            repeating-linear-gradient(90deg, rgba(8,33,60,0.05) 0 1px, transparent 1px 28px);
          background-color: #fff; border: 1px solid rgba(8,33,60,0.1); border-radius: 22px; padding: clamp(28px,4vw,60px); }
        .nb-annot { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: clamp(12px,1vw,14px); color: rgba(8,33,60,0.5); }
        .nb-annot-2 { margin-top: clamp(20px,3vw,36px); color: ${GREEN}; }
        .nb-notes { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(18px,2.4vw,32px); margin-top: clamp(22px,3vw,40px); }
        @media (max-width: 860px) { .nb-notes { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 540px) { .nb-notes { grid-template-columns: 1fr; } }
        .nb-note { position: relative; display: flex; flex-direction: column; gap: 8px; text-decoration: none;
          background: color-mix(in srgb, var(--c) 9%, #fffef5); border: 1px solid color-mix(in srgb, var(--c) 22%, transparent);
          border-radius: 4px; padding: 24px 22px 20px; transform: rotate(var(--rot)); box-shadow: 0 10px 26px -12px rgba(8,33,60,0.28);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s; will-change: transform; }
        .nb-note:hover { transform: rotate(0deg) translateY(-5px); box-shadow: 0 22px 46px -16px rgba(8,33,60,0.32); }
        .nb-pin { position: absolute; top: -7px; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; background: var(--c); box-shadow: 0 2px 5px rgba(0,0,0,0.3); }
        .nb-team { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; word-spacing: 0.14em; }
        .nb-title { font-size: clamp(17px,1.4vw,21px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY}; line-height: 1.15; }
        .nb-sum { font-size: 13px; line-height: 1.55; color: rgba(8,33,60,0.55); }
        .nb-apply { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 13px; font-weight: 700; color: var(--c); margin-top: 4px; }

        /* ── A day at EG (scroll story) ── */
        .ss { position: relative; padding-left: clamp(40px,6vw,90px); }
        .ss-line { position: absolute; left: clamp(14px,2.4vw,34px); top: 12px; bottom: 12px; width: 2px; background: rgba(8,33,60,0.12); }
        .ss-line-fill { position: absolute; inset: 0; background: linear-gradient(${GREEN}, #2563eb, #d97706, #7c3aed); transform-origin: top center; will-change: transform; }
        .ss-ch { position: relative; padding: clamp(20px,3vw,40px) 0; }
        .ss-dot { position: absolute; left: calc(clamp(14px,2.4vw,34px) - clamp(40px,6vw,90px) - 7px); top: clamp(26px,3.4vw,46px); width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 3px solid var(--c); }
        .ss-time { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: clamp(13px,1.1vw,15px); font-weight: 700; color: var(--c); letter-spacing: 1px; }
        .ss-k { font-size: clamp(28px,4vw,60px); font-weight: 900; letter-spacing: 0.01em; text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; margin: 8px 0 10px; line-height: 1.07; }
        .ss-b { font-size: clamp(15px,1.2vw,19px); line-height: 1.7; color: rgba(8,33,60,0.6); margin: 0; max-width: 52ch; }

        @media (prefers-reduced-motion: reduce) { .cr-badge .pulse::after { animation: none; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="cr-shell cr-hero">
        <Reveal>
          <div className="cr-badge"><span className="pulse" />We're hiring · {ROLES.length} open roles</div>
          <h1 className="cr-h1">Come build<br />the future <span>with us.</span></h1>
          <p className="cr-intro">
            Career growth, continuous learning and real ownership - in a collaborative team that ships work it's proud
            of. Come make a real impact with us.
          </p>
        </Reveal>
      </section>

      {/* ── Open roles (top, right after banner) ── */}
      <section className="cr-sec" style={{ background: '#fff' }}>
        <div className="cr-shell">
          <Reveal>
            <Eyebrow>Open Roles</Eyebrow>
            <h2 className="cr-h2">Shape the future<br /><span>with us.</span></h2>
            <p className="cr-sub">Work on exciting projects, collaborate with great minds, and create real impact.</p>
          </Reveal>
          <div style={{ marginTop: 'clamp(28px,3.5vw,48px)' }}><Notebook /></div>
        </div>
      </section>

      {/* ── What you'll get ── */}
      <section className="cr-sec" style={{ background: CREAM }}>
        <div className="cr-shell">
          <Reveal>
            <Eyebrow>Life at EG Digital</Eyebrow>
            <h2 className="cr-h2">What you'll<br />get <span>here.</span></h2>
          </Reveal>
          <div className="cr-benes">
            {BENEFITS.map((b, i) => (
              <Reveal key={b}>
                <div className="cr-bene" style={{ ['--c' as string]: BENE_COLORS[i % BENE_COLORS.length] }}>
                  <span className="cr-bene-ic"><Check size={16} strokeWidth={3} /></span>
                  <span className="cr-bene-t">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── A day at EG ── */}
      <section className="cr-sec" style={{ background: '#fff' }}>
        <div className="cr-shell">
          <Reveal>
            <Eyebrow>A Day at EG Digital</Eyebrow>
            <h2 className="cr-h2">Every day, a chance to<br />learn, create & <span>grow.</span></h2>
          </Reveal>
          <div style={{ marginTop: 'clamp(32px,4vw,56px)' }}><ScrollStory /></div>
        </div>
      </section>

      <PageCTA eyebrow="Don't See Your Role?" heading="Tell us what" highlight="you do best." button="Get in touch" />
    </PageLayout>
  )
}
