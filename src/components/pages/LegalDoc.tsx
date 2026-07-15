import { useEffect, useRef, useState } from 'react'
import { PageLayout, Eyebrow, NAVY, GREEN } from './_kit'
import { linkEloma } from '../../lib/elomaLink'

/* ── Shared legal-document layout ──
   A two-column reading layout (sticky section index on the left, prose on the
   right) used by both the Privacy Policy and Terms & Conditions pages so the
   two legal pages stay visually consistent. Content is passed in as data so
   each page only owns its copy. */

export type LegalBlock =
  | { type: 'para'; text: string }
  | { type: 'list'; items: string[] }

export type LegalSection = {
  id: string
  heading: string
  blocks: LegalBlock[]
}

export function LegalDoc({
  eyebrow,
  title,
  highlight,
  intro,
  updated,
  sections,
}: {
  eyebrow: string
  title: string
  highlight: string
  intro: string
  updated: string
  sections: LegalSection[]
}) {
  const [active, setActive] = useState(sections[0]?.id ?? '')
  const refs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    )
    Object.values(refs.current).forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const go = (id: string) => refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <PageLayout>
      <style>{`
        .legal-wrap { display: grid; grid-template-columns: 0.62fr 1fr; gap: clamp(32px,5vw,96px);
          max-width: 1500px; margin: 0 auto; padding: clamp(40px,6vw,96px) clamp(24px,4vw,72px) clamp(60px,9vw,130px); align-items: start; }
        .legal-left { position: sticky; top: 110px; }
        .legal-index { display: flex; flex-direction: column; gap: 2; }
        .legal-idx-btn { display: flex; align-items: center; gap: 12px; background: none; border: none;
          cursor: pointer; font-family: inherit; text-align: left; padding: 9px 0; width: 100%; }
        @media (max-width: 900px) {
          .legal-wrap { grid-template-columns: 1fr; gap: 28px; }
          .legal-left { position: static; }
          .legal-index { display: none; }
        }
      `}</style>

      <div className="legal-wrap">
        {/* ── Sticky left: title + section index ── */}
        <div className="legal-left">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 style={{ fontSize: 'clamp(38px,5vw,76px)', fontWeight: 900, letterSpacing: '0.015em', lineHeight: 1.14, color: NAVY, margin: '16px 0 20px', textTransform: 'uppercase' }}>
            {title}<br /><span style={{ color: GREEN }}>{highlight}</span>
          </h1>

          <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(8,33,60,0.45)', margin: '0 0 28px' }}>
            Last updated: {updated}
          </p>

          <nav aria-label="Sections" className="legal-index">
            {sections.map(s => {
              const on = active === s.id
              return (
                <button key={s.id} onClick={() => go(s.id)} className="legal-idx-btn">
                  <span style={{ width: on ? 26 : 13, height: 2, background: on ? GREEN : 'rgba(8,33,60,0.25)', transition: 'all 0.3s', flexShrink: 0 }} />
                  <span style={{ fontSize: 'clamp(13px,1vw,15px)', fontWeight: on ? 800 : 600, color: on ? NAVY : 'rgba(8,33,60,0.45)', transition: 'color 0.25s' }}>{s.heading}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* ── Right: prose ── */}
        <div>
          <p style={{ fontSize: 'clamp(16px,1.3vw,20px)', lineHeight: 1.8, color: 'rgba(8,33,60,0.72)', margin: '0 0 clamp(36px,4vw,60px)', fontWeight: 500 }}>
            {intro}
          </p>

          {sections.map((s, i) => (
            <section key={s.id} id={s.id} ref={el => { refs.current[s.id] = el }} style={{ marginBottom: 'clamp(36px,4vw,60px)', scrollMarginTop: 100 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18 }}>
                <span style={{ fontSize: 'clamp(13px,1vw,15px)', fontWeight: 900, color: GREEN, letterSpacing: '0.5px', minWidth: 30 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 style={{ fontSize: 'clamp(24px,2.6vw,38px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: NAVY, margin: 0 }}>
                  {s.heading}
                </h2>
              </div>

              <div style={{ paddingLeft: 'clamp(0px,3vw,44px)' }}>
                {s.blocks.map((b, bi) =>
                  b.type === 'para' ? (
                    <p key={bi} style={{ fontSize: 'clamp(15px,1.15vw,18px)', lineHeight: 1.85, color: 'rgba(8,33,60,0.66)', margin: '0 0 18px' }}>
                      {linkEloma(b.text)}
                    </p>
                  ) : (
                    <ul key={bi} style={{ listStyle: 'none', margin: '0 0 18px', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {b.items.map((it, li) => (
                        <li key={li} style={{ position: 'relative', paddingLeft: 24, fontSize: 'clamp(15px,1.15vw,18px)', lineHeight: 1.8, color: 'rgba(8,33,60,0.66)' }}>
                          <span style={{ position: 'absolute', left: 0, top: '0.62em', width: 8, height: 8, borderRadius: '50%', background: GREEN }} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}

          {/* Contact footer inside the doc */}
          <div style={{ background: NAVY, borderRadius: 16, padding: 'clamp(26px,3vw,40px)', marginTop: 'clamp(20px,3vw,40px)' }}>
            <div style={{ fontSize: 'clamp(18px,1.6vw,24px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>
              Questions about this policy?
            </div>
            <p style={{ fontSize: 'clamp(14px,1.1vw,16px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px', maxWidth: 560 }}>
              If anything here is unclear, or you'd like to exercise your rights over your data, reach out to our team and a real person will help.
            </p>
            <a href="mailto:connect@egdigital.com.au" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GREEN, color: NAVY, borderRadius: 100, padding: '13px 24px', fontSize: 14, fontWeight: 800, textDecoration: 'none', minHeight: 44 }}>
              connect@egdigital.com.au
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" /></svg>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
