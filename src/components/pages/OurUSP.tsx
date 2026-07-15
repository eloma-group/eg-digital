import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PageLayout, NAVY, GREEN, CREAM, EASE, useIsMobile } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'
import { CinematicBanner } from '../sections/JourneyHero'

type Theme = 'light' | 'navy' | 'green'
type Scene = { n: string; tag: string; lines: string[]; hi: string; body: string; proof: string; theme: Theme }

const SCENES: Scene[] = [
  {
    n: '01', tag: 'Business-first thinking', theme: 'light',
    lines: ['We think like', 'business owners.'], hi: 'business owners.',
    body: 'We don’t just create websites or run campaigns - we look at the bigger picture. Every decision is made with your business goals, customer journey and growth opportunities in mind, ensuring our work delivers real value beyond just aesthetics.',
    proof: 'Growth-focused decisions',
  },
  {
    n: '02', tag: 'Tailored, never templated', theme: 'navy',
    lines: ['Solutions built', 'around your', 'business.'], hi: 'around your',
    body: 'No two businesses are the same, which is why we avoid one-size-fits-all solutions. Whether it’s branding, website development, SEO or marketing, every strategy is tailored to your industry, audience and objectives.',
    proof: 'No one-size-fits-all',
  },
  {
    n: '03', tag: 'Design that performs', theme: 'green',
    lines: ['Creativity', 'with a purpose.'], hi: 'purpose.',
    body: 'Great design should do more than look good. Our creative approach focuses on building trust, improving user experience and encouraging customer action - helping your brand make a lasting impact in a crowded digital space.',
    proof: 'Built to convert',
  },
  {
    n: '04', tag: 'In it for the long run', theme: 'navy',
    lines: ['A long-term', 'digital partner.'], hi: 'digital partner.',
    body: 'We aim to build lasting relationships, not just complete projects. As your business grows, we continue to provide guidance, support and digital solutions that evolve with your changing needs and ambitions.',
    proof: 'Partners, not projects',
  },
  {
    n: '05', tag: 'Always accountable', theme: 'green',
    lines: ['Fast, reliable', '& accountable.'], hi: '& accountable.',
    body: 'Businesses move quickly, and so do we. With clear communication, transparent processes and a commitment to meeting deadlines, you can count on us to deliver quality work without unnecessary delays or complications.',
    proof: 'On time, every time',
  },
]

const N = SCENES.length

const THEME: Record<Theme, { bg: string; fg: string; sub: string; ghost: string; chip: string; chipText: string }> = {
  light: { bg: '#ffffff', fg: NAVY, sub: 'rgba(8,33,60,0.6)', ghost: 'rgba(8,33,60,0.05)', chip: 'rgba(8,33,60,0.06)', chipText: NAVY },
  navy:  { bg: NAVY, fg: '#ffffff', sub: 'rgba(255,255,255,0.66)', ghost: 'rgba(255,255,255,0.055)', chip: 'rgba(255,255,255,0.1)', chipText: '#fff' },
  green: { bg: GREEN, fg: NAVY, sub: 'rgba(8,33,60,0.78)', ghost: 'rgba(8,33,60,0.08)', chip: 'rgba(8,33,60,0.12)', chipText: NAVY },
}

function renderLine(line: string, hi: string, accent: string) {
  if (!line.toLowerCase().includes(hi.toLowerCase())) return line
  const parts = line.split(new RegExp(`(${hi})`, 'i'))
  return parts.map((p, i) =>
    p.toLowerCase() === hi.toLowerCase()
      ? <span key={i} style={{ color: accent }}>{p}</span>
      : <span key={i}>{p}</span>)
}

function CardFace({ s, mobile }: { s: Scene; mobile: boolean }) {
  const t = THEME[s.theme]
  const accent = s.theme === 'green' ? '#fff' : GREEN
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', background: t.bg, color: t.fg,
      borderRadius: mobile ? 22 : 28,
      border: s.theme === 'light' ? '1px solid rgba(8,33,60,0.1)' : 'none',
      boxShadow: '0 40px 90px -40px rgba(8,33,60,0.45)',
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(32px,5vw,96px)',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-0.18em', right: 'clamp(-8px,1vw,40px)',
        fontSize: 'clamp(180px,28vw,440px)', fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 0.8,
        color: t.ghost, fontVariantNumeric: 'tabular-nums', pointerEvents: 'none', userSelect: 'none', zIndex: 0,
      }}>{s.n}</div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 940 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 'clamp(24px,3vw,44px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
            <span style={{ fontSize: 'clamp(13px,1vw,15px)', fontWeight: 800, color: accent, fontVariantNumeric: 'tabular-nums' }}>{s.n}</span>
            <span style={{ width: 26, height: 2, background: accent }} />
            <span style={{ fontSize: 'clamp(10px,0.82vw,13px)', fontWeight: 800, letterSpacing: '2.4px', textTransform: 'uppercase', color: t.sub }}>{s.tag}</span>
          </div>
          <span style={{ fontSize: 'clamp(11px,0.9vw,13px)', fontWeight: 800, letterSpacing: '1.5px', color: t.sub, fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>{s.n} / 0{N}</span>
        </div>

        <h2 style={{ margin: 0, textTransform: 'uppercase' }}>
          {s.lines.map((ln, li) => (
            <span key={li} style={{ overflow: 'hidden', display: 'block', lineHeight: 1.08 }}>
              <motion.span
                style={{ display: 'block', fontSize: mobile ? 'clamp(34px,8.5vw,56px)' : 'clamp(40px,5.4vw,94px)', fontWeight: 900, letterSpacing: '0.01em', color: t.fg }}
                initial={{ y: '110%' }} whileInView={{ y: '0%' }} viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, ease: EASE, delay: 0.07 * li }}
              >{renderLine(ln, s.hi, accent)}</motion.span>
            </span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.26 }}
          style={{ fontSize: 'clamp(15px,1.2vw,18px)', lineHeight: 1.85, color: t.sub, margin: 'clamp(22px,2.4vw,34px) 0 0', maxWidth: '48ch', fontWeight: 500 }}
        >{s.body}</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginTop: 'clamp(24px,2.6vw,38px)', background: t.chip, color: t.chipText, borderRadius: 100, padding: '10px 18px' }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: accent }} />
          <span style={{ fontSize: 'clamp(12px,0.95vw,14px)', fontWeight: 800, letterSpacing: '0.3px' }}>{s.proof}</span>
        </motion.div>
      </div>
    </div>
  )
}

/* One pinned card in the stack - scales back + dims as the next deals over it. */
function StackCard({ s, i }: { s: Scene; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const last = i === N - 1
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90px', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, last ? 1 : 0.9])
  const dim = useTransform(scrollYProgress, [0, 1], [0, last ? 0 : 0.4])

  return (
    <div ref={ref} style={{ position: 'sticky', top: 90, height: 'calc(100vh - 90px)', paddingBottom: 'clamp(16px,2vh,28px)' }}>
      <motion.div style={{ scale, transformOrigin: 'center top', height: '100%', position: 'relative', borderRadius: 28, overflow: 'hidden' }}>
        <CardFace s={s} mobile={false} />
        <motion.div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: NAVY, opacity: dim, pointerEvents: 'none', borderRadius: 28 }} />
      </motion.div>
    </div>
  )
}

export function OurUSP() {
  usePageMeta(
    'EG Digital USP | Why Businesses Choose Us',
    "Explore EG Digital's unique strengths in web development, AI solutions, and digital marketing that help businesses scale faster with measurable results.",
  )
  const navigate = useNavigate()
  const mobile = useIsMobile(820)

  const Hero = (
    <CinematicBanner
      eyebrow="What Makes Us"
      word="DIFFERENT"
      sub="We believe great digital solutions should be simple, effective and focused on business growth - combining creativity, strategy and technology to help businesses stand out, connect with customers and achieve lasting success."
      scrollLabel="Scroll to explore"
    />
  )

  const CTA = (
    <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 'clamp(72px,11vw,150px) clamp(24px,4vw,72px)' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: EASE }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 'clamp(10px,0.8vw,12px)', fontWeight: 800, letterSpacing: '2.6px', textTransform: 'uppercase', color: GREEN, marginBottom: 18 }}>
          <span style={{ width: 22, height: 2, background: GREEN }} />The exception, not the rule
        </div>
        <h2 style={{ fontSize: 'clamp(38px,7vw,104px)', fontWeight: 900, letterSpacing: '0.01em', lineHeight: 1.07, color: NAVY, margin: '0 0 30px', textTransform: 'uppercase' }}>
          Ready to feel<br />the <span style={{ color: GREEN }}>difference?</span>
        </h2>
        <button onClick={() => navigate('/contact')} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: NAVY, color: '#fff', border: 'none', borderRadius: 100, padding: '16px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', minHeight: 52 }}>
          Get in touch
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </button>
      </motion.div>
    </section>
  )

  if (mobile) {
    return (
      <PageLayout>
        {Hero}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: '0 clamp(20px,4vw,32px) clamp(48px,8vw,80px)' }}>
          {SCENES.map((s, i) => (
            <div key={i} style={{ minHeight: '78vh', display: 'flex' }}>
              <CardFace s={s} mobile />
            </div>
          ))}
        </div>
        {CTA}
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {Hero}
      <div style={{ background: CREAM, padding: '0 clamp(24px,4vw,72px)' }}>
        <div style={{ maxWidth: 1760, margin: '0 auto' }}>
          {SCENES.map((s, i) => <StackCard key={i} s={s} i={i} />)}
        </div>
      </div>
      {CTA}
    </PageLayout>
  )
}
