import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageLayout, Eyebrow, Reveal, NAVY, GREEN, CREAM, EASE } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'
import { photo } from '../../lib/blogPosts'

type Cat = 'Press' | 'Awards' | 'Articles'
type Card =
  | { type: 'cover'; cat: Cat; outlet: string; date: string; title: string; img: string }
  | { type: 'quote'; cat: Cat; outlet: string; date: string; quote: string }
  | { type: 'outlet'; cat: Cat; outlet: string; date: string; label: string }
  | { type: 'text'; cat: Cat; outlet: string; date: string; title: string }

const FILTERS: ('All' | Cat)[] = ['All', 'Press', 'Awards', 'Articles']

const CARDS: Card[] = [
  { type: 'cover', cat: 'Press', outlet: 'AusTech Daily', date: 'Mar 2026', title: 'EG Digital named one of Melbourne’s fastest-growing studios', img: 'photo-1545044846-351ba102b6d5' },
  { type: 'quote', cat: 'Press', outlet: 'StartupSmart', date: 'Feb 2026', quote: '“A rare agency that ships enterprise-grade work at startup speed.”' },
  { type: 'outlet', cat: 'Press', outlet: 'The Australian', date: 'Jan 2026', label: 'As featured in' },
  { type: 'cover', cat: 'Awards', outlet: 'Awards', date: 'Dec 2025', title: 'Site of the Day for the Lumio SaaS platform', img: 'photo-1551288049-bebda4e38f71' },
  { type: 'text', cat: 'Articles', outlet: 'EG Journal', date: 'Nov 2025', title: 'Why we quote honestly - and how fixed milestones keep us accountable' },
  { type: 'quote', cat: 'Awards', outlet: 'CSS Design Awards', date: 'Oct 2025', quote: '“Best UI Design - a masterclass in editorial restraint.”' },
  { type: 'cover', cat: 'Articles', outlet: 'EG Journal', date: 'Sep 2025', title: 'Shipping Dynamics 365 for SMEs without the six-month timeline', img: 'photo-1600880292203-757bb62b4baf' },
  { type: 'outlet', cat: 'Press', outlet: 'SmartCompany', date: 'Aug 2025', label: 'As seen in' },
  { type: 'text', cat: 'Articles', outlet: 'EG Journal', date: 'Jul 2025', title: 'The single-partner model: one team from first call to launch' },
  { type: 'quote', cat: 'Awards', outlet: 'The Webby Awards', date: 'Jun 2025', quote: '“Honoree - Best Visual Design, Aesthetic.”' },
]

function PressCard({ c }: { c: Card }) {
  const [hover, setHover] = useState(false)
  const meta = (light: boolean) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 800, letterSpacing: '1.4px', textTransform: 'uppercase', color: light ? 'rgba(255,255,255,0.7)' : GREEN }}>
      {c.outlet}<span style={{ width: 3, height: 3, borderRadius: '50%', background: 'currentColor' }} />{c.date}
    </div>
  )
  const base: React.CSSProperties = {
    breakInside: 'avoid', marginBottom: 'clamp(14px,1.4vw,22px)', borderRadius: 16, overflow: 'hidden',
    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s',
    transform: hover ? 'translateY(-5px)' : 'translateY(0)',
    boxShadow: hover ? '0 24px 50px -18px rgba(8,33,60,0.28)' : '0 1px 2px rgba(8,33,60,0.05)',
    cursor: 'pointer',
  }

  if (c.type === 'cover') {
    return (
      <div style={base} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={{ position: 'relative', overflow: 'hidden', height: 'clamp(180px,16vw,240px)', background: NAVY }}>
          <img
            src={photo(c.img, 800, 480)}
            alt={c.title}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hover ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
          />
        </div>
        <div style={{ background: '#fff', padding: 'clamp(18px,1.8vw,26px)' }}>
          {meta(false)}
          <h3 style={{ fontSize: 'clamp(17px,1.5vw,22px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.25, color: NAVY, margin: '12px 0 0' }}>{c.title}</h3>
        </div>
      </div>
    )
  }
  if (c.type === 'quote') {
    return (
      <div style={{ ...base, background: hover ? NAVY : '#fff', border: '1px solid rgba(8,33,60,0.1)', padding: 'clamp(24px,2.4vw,36px)' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={{ fontSize: 60, fontWeight: 900, lineHeight: 0.7, color: GREEN, marginBottom: 8 }}>“</div>
        <p style={{ fontSize: 'clamp(18px,1.7vw,26px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.3, color: hover ? '#fff' : NAVY, margin: '0 0 18px', transition: 'color 0.3s' }}>{c.quote}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 800, letterSpacing: '1.4px', textTransform: 'uppercase', color: hover ? 'rgba(255,255,255,0.7)' : GREEN, transition: 'color 0.3s' }}>
          {c.outlet}<span style={{ width: 3, height: 3, borderRadius: '50%', background: 'currentColor' }} />{c.date}
        </div>
      </div>
    )
  }
  if (c.type === 'outlet') {
    return (
      <div style={{ ...base, background: NAVY, padding: 'clamp(24px,2.4vw,36px)' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: GREEN, marginBottom: 14 }}>{c.label}</div>
        <div style={{ fontSize: 'clamp(22px,2.4vw,34px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff' }}>{c.outlet}</div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginTop: 12 }}>{c.date}</div>
      </div>
    )
  }
  return (
    <div style={{ ...base, background: '#fff', border: '1px solid rgba(8,33,60,0.1)', padding: 'clamp(22px,2.2vw,32px)' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {meta(false)}
      <h3 style={{ fontSize: 'clamp(18px,1.7vw,26px)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.25, color: NAVY, margin: '14px 0 0' }}>{c.title}</h3>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 18, fontSize: 12, fontWeight: 800, color: GREEN }}>
        Read article
        <svg width="10" height="10" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" /></svg>
      </div>
    </div>
  )
}

export function Media() {
  usePageMeta(
    'EG Digital Media | News, Updates & Press',
    'Stay updated with EG Digital media coverage, announcements, insights, and press releases showcasing our innovation in digital transformation services.',
  )
  const [filter, setFilter] = useState<'All' | Cat>('All')
  const shown = CARDS.filter(c => filter === 'All' || c.cat === filter)

  return (
    <PageLayout>
      <style>{`
        .md-masonry { column-count: 3; column-gap: clamp(14px,1.4vw,22px); max-width: 1760px; margin: 0 auto;
          padding: clamp(24px,3vw,40px) clamp(24px,4vw,72px) clamp(60px,9vw,130px); }
        @media (min-width: 1920px) { .md-masonry { max-width: 1900px; } }
        @media (max-width: 1000px) { .md-masonry { column-count: 2; } }
        @media (max-width: 600px)  { .md-masonry { column-count: 1; } }
      `}</style>

      {/* ── Masthead ── */}
      <section style={{ borderBottom: `1px solid rgba(8,33,60,0.12)`, padding: 'clamp(36px,5vw,72px) clamp(24px,4vw,72px) clamp(20px,3vw,36px)', maxWidth: 1760, margin: '0 auto' }}>
        <Reveal>
          <Eyebrow>Press & Features</Eyebrow>
          <h1 style={{ fontSize: 'clamp(52px,12vw,200px)', fontWeight: 900, letterSpacing: '0.015em', lineHeight: 1.06, color: NAVY, margin: '14px 0 0', textTransform: 'uppercase' }}>
            Newsroom
          </h1>
        </Reveal>
      </section>

      {/* ── Featured lead ── */}
      <section style={{ maxWidth: 1760, margin: '0 auto', padding: 'clamp(28px,4vw,56px) clamp(24px,4vw,72px)' }}>
        <Reveal>
          <div className="md-lead" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 'clamp(24px,3vw,52px)', alignItems: 'center', background: '#fff', border: '1px solid rgba(8,33,60,0.1)', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ minHeight: 'clamp(260px,28vw,420px)', background: NAVY, position: 'relative', overflow: 'hidden' }}>
              <img
                src={photo('photo-1522071820081-009f0129c71c', 900, 700)}
                alt="The EG Digital team collaborating in the studio"
                loading="lazy"
                decoding="async"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{ position: 'absolute', top: 22, left: 22, zIndex: 1, background: GREEN, color: NAVY, fontSize: 11, fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '7px 13px', borderRadius: 99 }}>Featured</span>
            </div>
            <div style={{ padding: 'clamp(28px,3vw,56px) clamp(28px,3vw,56px) clamp(28px,3vw,56px) 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 800, letterSpacing: '1.4px', textTransform: 'uppercase', color: GREEN }}>
                AusTech Daily<span style={{ width: 3, height: 3, borderRadius: '50%', background: GREEN }} />March 2026
              </div>
              <h2 style={{ fontSize: 'clamp(26px,3.2vw,52px)', fontWeight: 900, letterSpacing: '0.01em', lineHeight: 1.08, color: NAVY, margin: '16px 0 18px', textTransform: 'uppercase' }}>
                The studio shipping enterprise work at startup speed
              </h2>
              <p style={{ fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.8, color: 'rgba(8,33,60,0.6)', margin: 0, maxWidth: 520 }}>
                A deep-dive into how EG Digital became one of Melbourne’s fastest-growing digital studios - and why the single-partner model is winning.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Filter bar ── */}
      <div style={{ position: 'sticky', top: 76, zIndex: 50, background: `${CREAM}f2`, backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(8,33,60,0.08)', borderBottom: '1px solid rgba(8,33,60,0.08)' }}>
        <div style={{ maxWidth: 1760, margin: '0 auto', padding: '14px clamp(24px,4vw,72px)', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {FILTERS.map(f => {
            const on = filter === f
            return (
              <button key={f} onClick={() => setFilter(f)} style={{
                background: on ? NAVY : 'transparent', color: on ? '#fff' : 'rgba(8,33,60,0.6)',
                border: `1px solid ${on ? NAVY : 'rgba(8,33,60,0.16)'}`, borderRadius: 99,
                padding: '9px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.2s', minHeight: 40,
              }}>{f}</button>
            )
          })}
        </div>
      </div>

      {/* ── Masonry ── */}
      <motion.div className="md-masonry" key={filter} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
        {shown.map((c, i) => <PressCard key={`${filter}-${i}`} c={c} />)}
      </motion.div>

      <style>{`@media (max-width: 820px){ .md-lead { grid-template-columns: 1fr !important; } .md-lead > div:last-child { padding: clamp(24px,5vw,40px) !important; } }`}</style>
    </PageLayout>
  )
}
