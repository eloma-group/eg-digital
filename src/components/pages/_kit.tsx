import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import { Navbar } from '../layout/Navbar'
import { FooterSection } from '../sections/FooterSection'

export const NAVY  = '#08213C'
export const GREEN = '#3CB98C'
export const CREAM = '#f8f8ff'
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* Page shell — fixed Navbar on top, Footer at the bottom, brand font + no
   horizontal scroll. Every About subpage renders inside this. */
export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ overflowX: 'clip', background: CREAM, fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: 68 }}>{children}</main>
      <FooterSection />
    </div>
  )
}

/* In-view fade-up. Compositor-only (transform + opacity). */
export function Reveal({
  children, delay = 0, y = 28, style, className,
}: { children: ReactNode; delay?: number; y?: number; style?: CSSProperties; className?: string }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
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
