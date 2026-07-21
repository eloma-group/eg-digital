import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, MapPin, Clock, Users } from 'lucide-react'
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

type Role = {
  title: string
  team: string
  type: string
  summary: string
  location: string
  employment: string
  department: string
  about: string
  responsibilities: string[]
  lookingFor: string[]
  whyJoin: string[]
}

const ROLES: Role[] = [
  {
    title: 'Social Media Executive', team: 'Growth', type: 'Full-time · Remote',
    summary: 'Content, captions & community across every channel that matters.',
    location: 'Melbourne, VIC (Hybrid)', employment: 'Full-Time', department: 'Growth Marketing',
    about: "We're looking for a Social Media Executive to plan, create, and manage content across Instagram, LinkedIn, Facebook, TikTok, and Threads for EG Digital and our client accounts. You'll turn campaign briefs into scroll-stopping content and track what actually drives engagement.",
    responsibilities: [
      'Plan and execute monthly social media content calendars for EG Digital and client brands',
      "Write captions, hashtag sets, and short-form copy aligned with each brand's voice",
      'Coordinate with the design team for reels, carousels, and static posts',
      'Monitor engagement, comments, and DMs; respond or escalate as needed',
      'Track performance metrics (reach, engagement rate, follower growth) and report monthly',
      'Stay current on platform trends, algorithm changes, and emerging formats',
    ],
    lookingFor: [
      "1-3 years' experience managing social media for a brand or agency",
      'Strong written communication and a good eye for visual content',
      'Familiarity with scheduling tools (Meta Business Suite, Buffer, or similar)',
      'Basic understanding of social media analytics and reporting',
      'Comfortable juggling multiple client accounts and deadlines',
    ],
    whyJoin: [
      'Work across a genuinely varied client mix - healthcare, logistics, retail, finance and more',
      'Small, collaborative team where your ideas get tested and shipped fast',
      'Certified Microsoft Partner agency with real growth-marketing case studies to learn from',
    ],
  },
  {
    title: 'Graphic Designer & Video Editor', team: 'Design', type: 'Full-time · Remote',
    summary: 'Static to motion - visuals that stop the scroll.',
    location: 'Melbourne, VIC (Hybrid)', employment: 'Full-Time', department: 'Creative',
    about: "EG Digital is hiring a Graphic Designer & Video Editor to produce on-brand visuals and short-form video for our website, social channels, and client campaigns. You'll work closely with the marketing and development teams to bring briefs to life, from static graphics to reels and case-study videos.",
    responsibilities: [
      'Design social media graphics, ad creatives, and marketing collateral across client accounts',
      'Edit short-form video content (reels, testimonials, case-study clips) for social and web',
      'Maintain brand consistency across all visual assets',
      'Support web and landing page projects with graphics, icons, and image assets',
      'Manage multiple creative requests and turn them around within agreed timelines',
    ],
    lookingFor: [
      'Proficiency in Adobe Photoshop, Illustrator, and Premiere Pro (or equivalent tools)',
      'A portfolio demonstrating both static design and video editing work',
      'Understanding of social-first design (aspect ratios, motion, captions/subtitles)',
      'Good time management across multiple concurrent briefs',
      "1-3 years' relevant experience (agency experience a plus)",
    ],
    whyJoin: [
      'Creative freedom across a wide range of industries and formats',
      'Direct exposure to full campaigns - from concept to published content',
      'Growing in-house creative team with room to specialise',
    ],
  },
  {
    title: 'Web Designer', team: 'Design', type: 'Full-time · Remote',
    summary: 'Clean, responsive design from wireframe to shipped page.',
    location: 'Melbourne, VIC (Hybrid)', employment: 'Full-Time', department: 'Digital Development',
    about: "We're looking for a Web Designer to craft clean, conversion-focused website designs for EG Digital's client projects - from marketing sites to e-commerce storefronts. You'll work alongside developers to turn design concepts into fast, responsive, on-brand websites.",
    responsibilities: [
      'Design responsive website layouts and UI components in Figma (or similar)',
      'Translate client briefs and brand guidelines into wireframes and high-fidelity mockups',
      'Collaborate with developers to ensure designs are implemented accurately and performantly',
      'Optimise designs for usability, accessibility, and conversion',
      'Maintain a design system/component library for faster future builds',
    ],
    lookingFor: [
      'Strong portfolio of responsive web design work',
      'Proficiency in Figma, Adobe XD, or equivalent design tools',
      'Understanding of UX principles, accessibility basics, and mobile-first design',
      'Basic HTML/CSS understanding is a plus (not required to code)',
      "1-3 years' experience designing for the web (agency experience preferred)",
    ],
    whyJoin: [
      'Work on real, live client builds - not just concept work',
      'Close collaboration with a hands-on development team',
      'Exposure to Microsoft, e-commerce, and SaaS-style projects in one role',
    ],
  },
  {
    title: 'SEO Specialist', team: 'Growth', type: 'Full-time · Remote',
    summary: 'Rankings, traffic & technical fixes that actually move the needle.',
    location: 'Melbourne, VIC (Hybrid)', employment: 'Full-Time', department: 'Growth Marketing',
    about: "EG Digital is looking for an SEO Specialist to drive organic growth for our clients through technical SEO, on-page optimisation, and content strategy. You'll own SEO performance for a portfolio of client accounts across multiple industries.",
    responsibilities: [
      'Conduct technical SEO audits and coordinate fixes with developers',
      'Perform keyword research and on-page optimisation across client sites',
      'Plan and oversee content and backlink strategies to improve rankings',
      'Track and report on rankings, organic traffic, and conversions monthly',
      'Stay up to date with Google algorithm updates and adjust strategy accordingly',
    ],
    lookingFor: [
      "1-3 years' hands-on SEO experience (agency or in-house)",
      'Working knowledge of tools such as Ahrefs, SEMrush, SE Ranking, or Google Search Console',
      'Understanding of technical SEO fundamentals (site speed, indexing, schema, Core Web Vitals)',
      'Strong analytical skills and comfort working with data/reporting',
      'Clear written communication for client-facing reporting',
    ],
    whyJoin: [
      'Manage SEO for a genuinely diverse client base across 14+ industries',
      'Backed by an in-house dev team, so technical fixes actually get shipped',
      'Real case studies and measurable results to build your portfolio',
    ],
  },
]
const applyHref = (t: string) => `mailto:connect@egdigital.com.au?subject=${encodeURIComponent(t + ' Application')}`

/* ── Open roles - apply with your work, not a form (sticky-note board) ── */
function Notebook({ onApply }: { onApply: (r: Role) => void }) {
  return (
    <div className="nb">
      <div className="nb-annot">// open roles - apply with your work, not a form</div>
      <div className="nb-notes">
        {ROLES.map((r, i) => {
          const c = TEAM_COLOR[r.team]
          return (
            <button key={r.title} type="button" onClick={() => onApply(r)} className="nb-note" style={{ ['--c' as string]: c, ['--rot' as string]: `${(i % 2 ? 1 : -1) * (1.4 + (i % 3) * 0.5)}deg` }}>
              <span className="nb-pin" />
              <span className="nb-team" style={{ color: c }}>{r.team}</span>
              <span className="nb-title">{r.title}</span>
              <span className="nb-sum">{r.summary}</span>
              <span className="nb-apply">apply ↗</span>
            </button>
          )
        })}
      </div>
      <div className="nb-annot nb-annot-2">↳ remote-first · paid trial · collaborative team</div>
    </div>
  )
}

/* ── Role detail modal (opens on Apply click) ── */
function RoleModal({ role, onClose }: { role: Role | null; onClose: () => void }) {
  useEffect(() => {
    if (!role) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [role, onClose])

  return (
    <AnimatePresence>
      {role && (
        <motion.div
          className="rm-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE }}
        >
          <motion.div
            className="rm-panel"
            role="dialog" aria-modal="true" aria-label={`${role.title} role details`}
            onClick={(e) => e.stopPropagation()}
            style={{ ['--c' as string]: TEAM_COLOR[role.team] }}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <button type="button" className="rm-close" onClick={onClose} aria-label="Close"><X size={20} /></button>

            <div className="rm-head">
              <span className="rm-team">{role.department}</span>
              <h3 className="rm-title">{role.title}</h3>
              <div className="rm-meta">
                <span className="rm-chip"><MapPin size={14} />{role.location}</span>
                <span className="rm-chip"><Clock size={14} />{role.employment}</span>
                <span className="rm-chip"><Users size={14} />{role.department}</span>
              </div>
            </div>

            <div className="rm-body">
              <div className="rm-block">
                <h4 className="rm-h">About the Role</h4>
                <p className="rm-p">{role.about}</p>
              </div>
              <div className="rm-block">
                <h4 className="rm-h">Key Responsibilities</h4>
                <ul className="rm-list">{role.responsibilities.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="rm-block">
                <h4 className="rm-h">What We're Looking For</h4>
                <ul className="rm-list">{role.lookingFor.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="rm-block">
                <h4 className="rm-h">Why Join EG Digital</h4>
                <ul className="rm-list">{role.whyJoin.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>

            <div className="rm-foot">
              <p className="rm-foot-note">Send your resume and portfolio (if applicable) to connect@egdigital.com.au with the subject line "{role.title} Application".</p>
              <a href={applyHref(role.title)} className="rm-cta">Apply Now</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
  const [activeRole, setActiveRole] = useState<Role | null>(null)
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
          font-family: inherit; text-align: left; width: 100%; cursor: pointer;
          background: color-mix(in srgb, var(--c) 9%, #fffef5); border: 1px solid color-mix(in srgb, var(--c) 22%, transparent);
          border-radius: 4px; padding: 24px 22px 20px; transform: rotate(var(--rot)); box-shadow: 0 10px 26px -12px rgba(8,33,60,0.28);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s; will-change: transform; }
        .nb-note:hover { transform: rotate(0deg) translateY(-5px); box-shadow: 0 22px 46px -16px rgba(8,33,60,0.32); }
        .nb-pin { position: absolute; top: -7px; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; background: var(--c); box-shadow: 0 2px 5px rgba(0,0,0,0.3); }
        .nb-team { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; word-spacing: 0.14em; }
        .nb-title { font-size: clamp(17px,1.4vw,21px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY}; line-height: 1.15; }
        .nb-sum { font-size: 13px; line-height: 1.55; color: rgba(8,33,60,0.55); }
        .nb-apply { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 13px; font-weight: 700; color: var(--c); margin-top: 4px; }

        /* ── Role detail modal ── */
        .rm-overlay { position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center;
          padding: clamp(12px,3vw,40px); background: rgba(8,33,60,0.55); backdrop-filter: blur(4px); }
        .rm-panel { position: relative; width: min(760px, 100%); max-height: min(88vh, 900px); overflow-y: auto;
          background: #fff; border-radius: 22px; border: 1px solid rgba(8,33,60,0.1);
          box-shadow: 0 40px 90px -30px rgba(8,33,60,0.55); will-change: transform, opacity; -webkit-overflow-scrolling: touch; }
        .rm-close { position: absolute; top: 16px; right: 16px; z-index: 2; width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; background: rgba(8,33,60,0.06); color: ${NAVY};
          border: none; cursor: pointer; transition: background 0.2s, transform 0.2s; }
        .rm-close:hover { background: rgba(8,33,60,0.12); transform: rotate(90deg); }
        .rm-head { padding: clamp(28px,4vw,44px) clamp(24px,4vw,48px) clamp(20px,2.4vw,28px);
          border-bottom: 1px solid rgba(8,33,60,0.08); border-top: 4px solid var(--c); border-radius: 22px 22px 0 0; }
        .rm-team { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase; color: var(--c); }
        .rm-title { font-size: clamp(26px,3.4vw,44px); font-weight: 900; letter-spacing: -0.02em; color: ${NAVY};
          line-height: 1.05; margin: 8px 0 16px; padding-right: 48px; }
        .rm-meta { display: flex; flex-wrap: wrap; gap: 10px; }
        .rm-chip { display: inline-flex; align-items: center; gap: 6px; font-size: clamp(12px,1vw,14px); font-weight: 600;
          color: rgba(8,33,60,0.7); background: rgba(8,33,60,0.05); border-radius: 100px; padding: 7px 14px; }
        .rm-chip svg { color: var(--c); }
        .rm-body { padding: clamp(22px,3vw,36px) clamp(24px,4vw,48px); display: flex; flex-direction: column; gap: clamp(20px,2.6vw,30px); }
        .rm-h { font-size: clamp(15px,1.3vw,18px); font-weight: 900; letter-spacing: 0.02em; text-transform: uppercase;
          color: ${NAVY}; margin: 0 0 10px; }
        .rm-p { font-size: clamp(15px,1.15vw,17px); line-height: 1.7; color: rgba(8,33,60,0.72); margin: 0; }
        .rm-list { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .rm-list li { position: relative; padding-left: 26px; font-size: clamp(14px,1.1vw,16px); line-height: 1.6; color: rgba(8,33,60,0.72); }
        .rm-list li::before { content: ''; position: absolute; left: 4px; top: 9px; width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
        .rm-foot { position: sticky; bottom: 0; padding: clamp(20px,2.6vw,28px) clamp(24px,4vw,48px);
          background: ${CREAM}; border-top: 1px solid rgba(8,33,60,0.08); border-radius: 0 0 22px 22px;
          display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; }
        .rm-foot-note { flex: 1 1 260px; font-size: clamp(12px,0.95vw,13.5px); line-height: 1.55; color: rgba(8,33,60,0.55); margin: 0; }
        .rm-cta { flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; min-height: 52px;
          background: ${NAVY}; color: #fff; text-decoration: none; font-weight: 800; font-size: clamp(15px,1.15vw,16px);
          letter-spacing: 0.01em; border-radius: 100px; padding: 15px 34px; transition: transform 0.2s, background 0.2s; }
        .rm-cta:hover { background: var(--c); transform: translateY(-2px); }
        @media (max-width: 540px) { .rm-foot { flex-direction: column; align-items: stretch; } .rm-cta { width: 100%; } }

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
          <div style={{ marginTop: 'clamp(28px,3.5vw,48px)' }}><Notebook onApply={setActiveRole} /></div>
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

      <RoleModal role={activeRole} onClose={() => setActiveRole(null)} />
    </PageLayout>
  )
}
