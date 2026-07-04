import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageLayout, Eyebrow, NAVY, GREEN, EASE } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'

type Group = { id: string; label: string; items: { q: string; a: string }[] }

const GROUPS: Group[] = [
  {
    id: 'general', label: 'General',
    items: [
      { q: 'What does EG Digital do?', a: 'We design and build websites, apps and SaaS platforms - and back them with cloud, security and managed support. One partner for the full digital stack.' },
      { q: 'Where are you based?', a: 'We’re a Melbourne-based studio at 71 Gipps Street, Collingwood, working with ambitious businesses right across Australia.' },
      { q: 'Are you a certified Microsoft partner?', a: 'Yes. We deliver Dynamics 365, Power Platform and Azure as a certified partner, alongside our own custom development practice.' },
    ],
  },
  {
    id: 'process', label: 'Process',
    items: [
      { q: 'How does a project start?', a: 'With a conversation. We scope your goals, map the work into fixed milestones, and give you an honest quote and timeline before anything is signed.' },
      { q: 'How long does a typical build take?', a: 'Most websites land in 4–8 weeks; apps and SaaS platforms run longer. Either way you get a milestone schedule up front and weekly visibility on progress.' },
      { q: 'How involved will we be?', a: 'As involved as you want. You get a single point of contact, weekly check-ins and a shared board - no chasing, no black box.' },
    ],
  },
  {
    id: 'pricing', label: 'Pricing',
    items: [
      { q: 'How do you price projects?', a: 'Fixed-scope projects are quoted as fixed price against defined milestones. Ongoing work runs on a transparent monthly retainer. We quote what it really costs.' },
      { q: 'Do you offer ongoing support?', a: 'Yes - managed support, cloud maintenance and server maintenance plans keep what we build running at peak performance after launch.' },
    ],
  },
  {
    id: 'engagement', label: 'Engagement',
    items: [
      { q: 'Do you work with startups and SMEs?', a: 'Absolutely - it’s our core. You get enterprise-grade capability without the enterprise timeline or overhead.' },
      { q: 'What if we already have an in-house team?', a: 'We slot in. Whether you need extra delivery capacity, specialist Microsoft skills or a full build, we shape the engagement around your team.' },
      { q: 'Do you sign NDAs?', a: 'Always, when needed. Your ideas, data and reputation are treated as our own from the first conversation.' },
    ],
  },
]

export function FAQ() {
  usePageMeta(
    'EG Digital FAQ | Frequently Asked Questions',
    'Find answers to common questions about EG Digital services, pricing, development process, support, and how we help businesses grow digitally.',
  )
  const [open, setOpen] = useState<string | null>('general-0')
  const [active, setActive] = useState(GROUPS[0].id)
  const refs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )
    Object.values(refs.current).forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const go = (id: string) => refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <PageLayout>
      <style>{`
        .faq-wrap { display: grid; grid-template-columns: 0.7fr 1fr; gap: clamp(32px,5vw,96px);
          max-width: 1500px; margin: 0 auto; padding: clamp(40px,6vw,96px) clamp(24px,4vw,72px) clamp(60px,9vw,130px); align-items: start; }
        .faq-left { position: sticky; top: 110px; }
        @media (max-width: 900px) {
          .faq-wrap { grid-template-columns: 1fr; gap: 28px; }
          .faq-left { position: static; }
        }
      `}</style>

      <div className="faq-wrap">
        {/* ── Sticky left ── */}
        <div className="faq-left">
          <Eyebrow>Help Centre</Eyebrow>
          <h1 style={{ fontSize: 'clamp(38px,5vw,76px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.92, color: NAVY, margin: '16px 0 28px', textTransform: 'uppercase' }}>
            Questions,<br /><span style={{ color: GREEN }}>answered.</span>
          </h1>

          <nav aria-label="FAQ categories" style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 32 }}>
            {GROUPS.map(g => {
              const on = active === g.id
              return (
                <button key={g.id} onClick={() => go(g.id)} style={{
                  display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none',
                  cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', padding: '10px 0', width: '100%',
                }}>
                  <span style={{ width: on ? 26 : 13, height: 2, background: on ? GREEN : 'rgba(8,33,60,0.25)', transition: 'all 0.3s' }} />
                  <span style={{ fontSize: 'clamp(14px,1.1vw,17px)', fontWeight: on ? 800 : 600, color: on ? NAVY : 'rgba(8,33,60,0.45)', transition: 'color 0.25s' }}>{g.label}</span>
                </button>
              )
            })}
          </nav>

          <div style={{ background: NAVY, borderRadius: 16, padding: 'clamp(22px,2.2vw,30px)' }}>
            <div style={{ fontSize: 'clamp(17px,1.5vw,21px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>Still curious?</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 18px' }}>Can’t find your answer? Talk to a real person on the team.</p>
            <a href="mailto:connect@egdigital.com.au" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GREEN, color: NAVY, borderRadius: 100, padding: '12px 22px', fontSize: 14, fontWeight: 800, textDecoration: 'none' }}>
              Contact us
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" /></svg>
            </a>
          </div>
        </div>

        {/* ── Right accordion ── */}
        <div>
          {GROUPS.map(g => (
            <section key={g.id} id={g.id} ref={el => { refs.current[g.id] = el }} style={{ marginBottom: 'clamp(36px,4vw,64px)', scrollMarginTop: 100 }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', color: GREEN, marginBottom: 8 }}>{g.label}</div>
              {g.items.map((it, i) => {
                const id = `${g.id}-${i}`
                const isOpen = open === id
                return (
                  <div key={id} style={{ position: 'relative', borderBottom: '1px solid rgba(8,33,60,0.12)' }}>
                    {/* green left accent */}
                    <span style={{ position: 'absolute', left: -1, top: 0, bottom: 0, width: 3, background: GREEN, transformOrigin: 'top', transform: `scaleY(${isOpen ? 1 : 0})`, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)' }} />
                    <button
                      onClick={() => setOpen(isOpen ? null : id)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                        width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                        textAlign: 'left', padding: 'clamp(22px,2.4vw,34px) 0 clamp(22px,2.4vw,34px) clamp(16px,2vw,28px)',
                      }}
                    >
                      <span style={{ fontSize: 'clamp(18px,2vw,30px)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.2, color: isOpen ? NAVY : 'rgba(8,33,60,0.82)', transition: 'color 0.2s' }}>{it.q}</span>
                      <span style={{ position: 'relative', width: 26, height: 26, flexShrink: 0 }}>
                        <span style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: 2, background: isOpen ? GREEN : NAVY, transform: 'translateY(-50%)' }} />
                        <motion.span animate={{ rotate: isOpen ? 0 : 90, opacity: isOpen ? 0 : 1 }} transition={{ duration: 0.25 }} style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: 2, background: NAVY, transform: 'translateY(-50%)' }} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: EASE }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{ fontSize: 'clamp(15px,1.15vw,18px)', lineHeight: 1.8, color: 'rgba(8,33,60,0.62)', margin: 0, padding: '0 clamp(40px,5vw,80px) clamp(26px,2.6vw,38px) clamp(16px,2vw,28px)' }}>{it.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </section>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
