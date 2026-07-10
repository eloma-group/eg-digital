import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../layout/Navbar'
import { FooterSection } from '../sections/FooterSection'

export const NAVY  = '#08213C'
export const GREEN = '#3CB98C'
export const CREAM = '#f8f8ff'
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* Page shell - fixed Navbar on top, Footer at the bottom, brand font + no
   horizontal scroll. Every About subpage renders inside this. */
export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ overflowX: 'clip', background: CREAM, fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: 76 }}>{children}</main>
      <FooterSection />
    </div>
  )
}

/* In-view fade-up. Compositor-only (transform + opacity).
   During the static pre-render there is no `window`, so we bake the VISIBLE
   end-state into the HTML - otherwise framer-motion writes the hidden
   `opacity:0; transform:translateY(28px)` initial state into the raw markup and
   the content (including the hero H1) stays invisible for crawlers and before
   JS runs. On the client the hidden start-state is applied so the fade-up still
   plays. Safe because the app re-renders fresh on the client (no hydration). */
export function Reveal({
  children, delay = 0, y = 28, style, className,
}: { children: ReactNode; delay?: number; y?: number; style?: CSSProperties; className?: string }) {
  const initial = typeof window === 'undefined' ? { opacity: 1, y: 0 } : { opacity: 0, y }
  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/* Eyebrow / kicker label used across pages. */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <span style={{ width: 22, height: 2, background: GREEN, flexShrink: 0 }} />
      <span style={{
        fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.5px',
        textTransform: 'uppercase', color: light ? 'rgba(255,255,255,0.7)' : GREEN,
      }}>
        {children}
      </span>
    </div>
  )
}

/* Shared closing CTA - navy band that always routes to /contact (overridable).
   Used by every standalone page so the call-to-action is consistent. */
export function PageCTA({
  eyebrow = 'Get In Touch',
  heading,
  highlight,
  button = 'Start a Conversation',
  to = '/contact',
}: {
  eyebrow?: string
  heading: ReactNode
  highlight?: string
  button?: string
  to?: string
}) {
  const navigate = useNavigate()
  return (
    <section style={{ background: NAVY, padding: 'clamp(64px,10vw,140px) clamp(24px,4vw,72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 70% at 50% 0%, rgba(60,185,140,0.16), transparent 60%)` }} />
      <motion.div
        initial={typeof window === 'undefined' ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: EASE }}
        style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.6px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
          <span style={{ width: 22, height: 2, background: GREEN }} />{eyebrow}
        </div>
        <h2 style={{ fontSize: 'clamp(40px,7vw,104px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.95, color: '#fff', margin: '18px 0 30px', textTransform: 'uppercase' }}>
          {heading}{highlight && <> <span style={{ color: GREEN }}>{highlight}</span></>}
        </h2>
        <button onClick={() => navigate(to)} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: GREEN, color: NAVY, border: 'none', borderRadius: 100, padding: '16px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', minHeight: 52 }}>
          {button}
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" /></svg>
        </button>
      </motion.div>
    </section>
  )
}

export function useIsMobile(breakpoint = 768) {
  const [is, setIs] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const cb = () => setIs(mq.matches)
    cb()
    mq.addEventListener('change', cb)
    return () => mq.removeEventListener('change', cb)
  }, [breakpoint])
  return is
}
