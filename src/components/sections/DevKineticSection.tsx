import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform, easeInOut } from 'framer-motion'
import type { Variants, MotionValue } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const VIOLET = '#7c6cff'
const CORAL = '#ff7d63'
const BLUE  = '#5cc8ff'
const GOLD  = '#fbbf24'

// ─────────────────────────────────────────────────────────────────────────────
// DEV KINETIC SECTION - Scroll-pinned storytelling stage.
// A fixed centre orb anchors the view while headlines transition and floating
// UI mockups + photos parallax in from the corners, one capability per scene.
// Theme: What EG Digital builds - Web, Mobile, SaaS & E-Commerce.
// ─────────────────────────────────────────────────────────────────────────────

type CardDef = {
  pos: React.CSSProperties        // anchor (top/left/right/bottom)
  from: { x: number; y: number }  // entry offset
  node: React.ReactNode
  far?: boolean                   // hidden on small screens
}

type Scene = {
  id: string
  label: string
  line1: string
  line2: string
  link: string
  to: string                      // route the Explore link navigates to
  accent: string
  cards: CardDef[]
}

// ── small presentational pieces for the floating mockups ─────────────────────
function Surface({ children, w, pad = 16, accent }: { children: React.ReactNode; w?: number; pad?: number; accent?: string }) {
  return (
    <div style={{
      width: w, background: 'var(--card)', border: '1px solid var(--cardln)', borderRadius: 18,
      boxShadow: '0 14px 34px rgba(8,33,60,0.12)', padding: pad, overflow: 'hidden',
      borderTop: accent ? `2px solid ${accent}` : '1px solid var(--cardln)',
    }}>{children}</div>
  )
}

function Metric({ label, value, sub, accent }: { label: string; value: string; sub: string; accent: string }) {
  return (
    <div style={{ background: `linear-gradient(150deg, ${accent}, ${accent}cc)`, borderRadius: 26, padding: 32, width: 296, color: '#fff', boxShadow: `0 16px 36px ${accent}44` }}>
      <div style={{ fontSize: 16, fontWeight: 700, opacity: 0.85, letterSpacing: '0.4px' }}>{label}</div>
      <div style={{ fontSize: 70, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, margin: '14px 0 7px' }}>{value}</div>
      <div style={{ fontSize: 16, fontWeight: 600, opacity: 0.85, display: 'flex', alignItems: 'center', gap: 7 }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H9M19 5V15" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>{sub}
      </div>
    </div>
  )
}

function Bars({ accent }: { accent: string }) {
  const h = [38, 60, 30, 78, 52, 90, 66]
  return (
    <svg viewBox="0 0 140 90" width="100%" height="74" preserveAspectRatio="none">
      {h.map((v, i) => (
        <rect key={i} x={6 + i * 19} y={90 - v} width={12} height={v} rx={3} fill={i === 5 ? accent : 'var(--barmute)'} />
      ))}
    </svg>
  )
}

function Line({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 160 70" width="100%" height="66" fill="none" preserveAspectRatio="none">
      <path d="M2 56 L26 40 L50 48 L74 22 L98 32 L122 12 L158 20" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 56 L26 40 L50 48 L74 22 L98 32 L122 12 L158 20 L158 70 L2 70 Z" fill={`${accent}22`} />
    </svg>
  )
}

function Rows({ rows, accent }: { rows: [string, string][]; accent: string }) {
  return (
    <div style={{ display: 'grid', gap: 9 }}>
      {rows.map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 3, background: accent }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--txt)' }}>{a}</span>
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>{b}</span>
        </div>
      ))}
    </div>
  )
}

function Photo({ src, alt, w, h, badge }: { src: string; alt: string; w: number; h: number; badge?: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', width: w, height: h, borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 38px rgba(8,33,60,0.22)', border: '4px solid var(--card)' }}>
      <img src={src} alt={alt} width={w} height={h} loading="lazy" decoding="async"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      {badge}
    </div>
  )
}

function Pill({ text, accent }: { text: string; accent: string }) {
  return (
    <div style={{ background: `linear-gradient(135deg, ${accent}, ${accent}bb)`, color: '#fff', borderRadius: 20, padding: '24px 34px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, minWidth: 342, boxShadow: `0 16px 36px ${accent}38` }}>
      <span style={{ fontSize: 21, fontWeight: 800 }}>{text}</span>
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
  )
}

function Header({ label, score, accent }: { label: string; score: string; accent: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
      <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--txt)' }}>{label}</span>
      <span style={{ fontSize: 11, fontWeight: 800, color: accent }}>{score}</span>
    </div>
  )
}

// ── scene definitions ────────────────────────────────────────────────────────
const SCENES: Scene[] = [
  {
    id: 'web', label: 'Web Platforms', accent: GREEN, link: 'Explore Web Development', to: '/solutions/development#web',
    line1: 'Maximise Your Reach with',
    line2: 'Lightning-Fast Web Platforms',
    cards: [
      { pos: { top: 'calc(104px + 4%)', left: '2%' }, from: { x: -120, y: -40 }, node: (
        <Surface w={368} accent={GREEN}><Header label="Core Web Vitals" score="Pass" accent={GREEN} /><Bars accent={GREEN} />
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8, fontWeight: 600 }}>LCP 1.1s · CLS 0.01</div></Surface>
      ) },
      { pos: { top: 'calc(104px + 2%)', right: '4%' }, from: { x: 120, y: -60 }, far: true, node: (
        <Photo src="/images/dev/web-dev.jpg" alt="Developer building a web platform" w={460} h={300}
          badge={<div style={{ position: 'absolute', bottom: 12, left: 12 }}><span style={{ background: GREEN, color: '#fff', fontSize: 11, fontWeight: 800, padding: '6px 12px', borderRadius: 100 }}>99 Lighthouse</span></div>} /> ) },
      { pos: { bottom: '6%', left: '5%' }, from: { x: -100, y: 80 }, far: true, node: (
        <Metric label="Page Speed" value="98" sub="+34% conversions" accent={GREEN} /> ) },
      { pos: { bottom: '8%', right: '3%' }, from: { x: 110, y: 70 }, node: (
        <Surface w={380}><Header label="Traffic Today" score="Live" accent={GREEN} />
          <Rows rows={[['Organic', '12.4k'], ['Direct', '6.1k'], ['Referral', '2.8k']]} accent={GREEN} /></Surface>
      ) },
    ],
  },
  {
    id: 'app', label: 'Mobile Apps', accent: VIOLET, link: 'Explore App Development', to: '/solutions/development#app',
    line1: 'Engage Users Anywhere with',
    line2: 'Native-Feel Mobile Apps',
    cards: [
      { pos: { top: 'calc(104px + 3%)', right: '4%' }, from: { x: 130, y: -50 }, node: (
        <Photo src="/images/dev/mobile.jpg" alt="Mobile app on a smartphone" w={328} h={408}
          badge={<div style={{ position: 'absolute', top: 12, left: 12 }}><span style={{ background: VIOLET, color: '#fff', fontSize: 11, fontWeight: 800, padding: '6px 12px', borderRadius: 100 }}>iOS · Android</span></div>} /> ) },
      { pos: { top: 'calc(104px + 6%)', left: '3%' }, from: { x: -120, y: -30 }, node: (
        <Surface w={366} accent={VIOLET}><div style={{ fontSize: 16, fontWeight: 800, color: 'var(--txt)', marginBottom: 8 }}>App Store Rating</div>
          <div style={{ fontSize: 66, fontWeight: 900, color: VIOLET, letterSpacing: '-0.04em', lineHeight: 1 }}>4.9</div>
          <div style={{ marginTop: 7, color: GOLD, letterSpacing: 2, fontSize: 17 }}>★★★★★</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 7, fontWeight: 600 }}>12,480 reviews</div></Surface>
      ) },
      { pos: { bottom: '7%', left: '6%' }, from: { x: -90, y: 80 }, far: true, node: (
        <Metric label="Daily Active Users" value="48k" sub="+21% retention" accent={VIOLET} /> ) },
      { pos: { bottom: '9%', right: '5%' }, from: { x: 110, y: 70 }, far: true, node: (
        <Surface w={364}><Header label="Push Engagement" score="68%" accent={VIOLET} /><Line accent={VIOLET} /></Surface> ) },
    ],
  },
  {
    id: 'saas', label: 'SaaS Products', accent: BLUE, link: 'Explore SaaS Engineering', to: '/solutions/development#saas',
    line1: 'Scale Without Limits using',
    line2: 'Multi-Tenant SaaS Platforms',
    cards: [
      { pos: { top: 'calc(104px + 4%)', left: '3%' }, from: { x: -130, y: -40 }, far: true, node: (
        <Surface w={394} accent={BLUE}><Header label="MRR" score="+18%" accent={BLUE} /><Line accent={BLUE} />
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8, fontWeight: 600 }}>$214,820 this month</div></Surface>
      ) },
      { pos: { top: 'calc(104px + 2%)', right: '4%' }, from: { x: 120, y: -55 }, node: (
        <Photo src="/images/dev/team-saas.jpg" alt="Team building a SaaS platform" w={450} h={298}
          badge={<div style={{ position: 'absolute', bottom: 12, left: 12 }}><span style={{ background: BLUE, color: '#fff', fontSize: 11, fontWeight: 800, padding: '6px 12px', borderRadius: 100 }}>99.99% uptime</span></div>} /> ) },
      { pos: { bottom: '6%', left: '6%' }, from: { x: -100, y: 80 }, node: (
        <Surface w={388}><Header label="Workspaces" score="Live" accent={BLUE} />
          <Rows rows={[['Enterprise', '128'], ['Growth', '642'], ['Starter', '2,910']]} accent={BLUE} /></Surface>
      ) },
      { pos: { bottom: '9%', right: '4%' }, from: { x: 110, y: 70 }, far: true, node: (
        <Metric label="Billing Automated" value="$2.1M" sub="Stripe synced" accent={BLUE} /> ) },
    ],
  },
  {
    id: 'ecom', label: 'E-Commerce', accent: CORAL, link: 'Explore E-Commerce', to: '/solutions/development#ecommerce',
    line1: 'Convert More Shoppers with',
    line2: 'High-Performance Storefronts',
    cards: [
      { pos: { top: 'calc(104px + 3%)', right: '4%' }, from: { x: 120, y: -50 }, node: (
        <Photo src="/images/dev/ecommerce.jpg" alt="Customer checking out in store" w={460} h={300}
          badge={<div style={{ position: 'absolute', bottom: 12, left: 12 }}><span style={{ background: CORAL, color: '#fff', fontSize: 11, fontWeight: 800, padding: '6px 12px', borderRadius: 100 }}>Headless</span></div>} /> ) },
      { pos: { top: 'calc(104px + 5%)', left: '3%' }, from: { x: -120, y: -30 }, node: (
        <Metric label="Conversion Rate" value="4.8%" sub="+62% vs theme" accent={CORAL} /> ) },
      { pos: { bottom: '7%', left: '6%' }, from: { x: -95, y: 80 }, far: true, node: (
        <Surface w={380} accent={CORAL}><Header label="Revenue" score="Today" accent={CORAL} /><Bars accent={CORAL} />
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8, fontWeight: 600 }}>$48,210 · 1,204 orders</div></Surface>
      ) },
      { pos: { bottom: '9%', right: '5%' }, from: { x: 110, y: 70 }, far: true, node: (
        <Pill text="Connect Your Store" accent={CORAL} /> ) },
    ],
  },
]

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// One-shot reveal: every element starts faded + slightly lowered and settles
// when its scene scrolls into view. `staggerChildren` gives the headline and
// cards a gentle cascade. Because viewport.once is true, this runs exactly
// once per scene - after that nothing animates, so scrolling stays native-smooth.
const stageVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

// ── the static markup of a single scene (headline + floating cards) ───────────
// Shared by the desktop cross-fade layers and the mobile stacked blocks so the
// content/design stays identical in both modes.
function SceneInner({ scene }: { scene: Scene }) {
  const navigate = useNavigate()
  return (
    <div className="dvk-stage">
      <div className="dvk-headwrap">
        <div className="dvk-head">
          <span className="dvk-tag" style={{ color: scene.accent }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: scene.accent }} />{scene.label}
          </span>
          <h1 className="dvk-title">
            <span className="dvk-l1">{scene.line1}</span>
            <span className="dvk-l2" style={{ ['--acc' as string]: scene.accent } as React.CSSProperties}>{scene.line2}</span>
          </h1>
          <button type="button" className="dvk-link" style={{ color: scene.accent }} onClick={() => navigate(scene.to)}>
            {scene.link}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
      {scene.cards.map((c, idx) => {
        // Anchor each card's scale origin to its OUTER corner so that when it
        // shrinks (on smaller viewports / higher zoom) it tucks toward the
        // screen edge instead of sliding under the centred headline.
        const p = c.pos as Record<string, unknown>
        const ox = 'right' in p ? 'right' : 'left'
        const oy = 'bottom' in p ? 'bottom' : 'top'
        return (
          <div key={idx} className={`dvk-card${c.far ? ' dvk-far' : ''}`}
            style={{ ...c.pos, ['--ox' as string]: ox, ['--oy' as string]: oy } as React.CSSProperties}>
            {c.node}
          </div>
        )
      })}
    </div>
  )
}

// ── MOBILE: each scene is its own full-height block in normal document flow ────
// No pinning - the browser scrolls it natively with a one-shot enter reveal.
function SceneBlock({ scene }: { scene: Scene }) {
  return (
    <motion.section className="dvk-scene"
      variants={stageVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}>
      <motion.div variants={revealVariants} style={{ width: '100%' }}>
        <SceneInner scene={scene} />
      </motion.div>
    </motion.section>
  )
}

// ── DESKTOP: every scene is an absolutely-stacked layer inside one pinned stage.
// As the tall scroll track moves through the viewport, each layer cross-fades:
// the outgoing scene blurs + fades + drifts up, the incoming one blurs in from
// below. All driven off a single scrollYProgress so it stays compositor-smooth.
const TRANS = 0.5        // transition zone as a fraction of one scene's slot (one slot = one full cross-fade)
const DRIFT = 36         // px of vertical drift during a transition
const SCENE_VH = 60      // scroll distance (in vh) allotted to each scene - smaller = one scroll advances one section

function SceneLayer({ scene, i, total, progress }: { scene: Scene; i: number; total: number; progress: MotionValue<number> }) {
  const seg = 1 / total
  const start = i * seg
  const end = (i + 1) * seg
  const t = seg * TRANS

  // Build per-scene keyframes. First scene starts fully shown (no fade-in),
  // last scene stays shown to the end (no fade-out), middle scenes do both.
  // Compositor-only cross-fade: opacity + scale + drift. No animated filter/blur
  // (that forces a full-screen paint every frame and was the source of the jank).
  let input: number[], oOut: number[], sOut: number[], yOut: number[]
  if (i === 0) {
    input = [start, end - t, end]
    oOut = [1, 1, 0]; sOut = [1, 1, 1.05]; yOut = [0, 0, -DRIFT]
  } else if (i === total - 1) {
    input = [start, start + t, end]
    oOut = [0, 1, 1]; sOut = [0.94, 1, 1]; yOut = [DRIFT, 0, 0]
  } else {
    input = [start, start + t, end - t, end]
    oOut = [0, 1, 1, 0]; sOut = [0.94, 1, 1, 1.05]; yOut = [DRIFT, 0, 0, -DRIFT]
  }

  // ease-in-out every segment so each fade ramps gently instead of linearly
  const ease = Array(input.length - 1).fill(easeInOut)
  const opacity = useTransform(progress, input, oOut, { ease })
  const scale = useTransform(progress, input, sOut, { ease })
  const y = useTransform(progress, input, yOut, { ease })

  // Hidden layers leave the paint pipeline entirely so only the 1-2 active
  // scenes ever cost anything to render.
  const visibility = useTransform(opacity, (v) => (v < 0.01 ? 'hidden' : 'visible'))

  return (
    <motion.div className="dvk-layer" style={{ opacity, scale, y, visibility }}>
      <SceneInner scene={scene} />
    </motion.div>
  )
}

function DesktopStage({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })
  // Soft spring so the cross-fade glides just behind the raw scroll value -
  // kills micro-jitter and makes every transition feel buttery.
  const progress = useSpring(scrollYProgress, { stiffness: 170, damping: 32, mass: 0.28, restDelta: 0.0005 })
  const total = SCENES.length

  return (
    // Track is `total` viewports tall; the sticky child stays pinned across it
    // so the whole scroll distance is spent cross-fading the scenes.
    <div className="dvk-track" ref={trackRef} style={{ height: `${total * SCENE_VH}vh` }}>
      <div className="dvk-pin">
        <div className="dvk-eyebrow-row">
          <span className="dvk-eyebrow"><span className="d" />What We Build</span>
        </div>
        <div className="dvk-stagewrap">
          {SCENES.map((s, i) => (
            <SceneLayer key={s.id} scene={s} i={i} total={total} progress={progress} />
          ))}
        </div>
        <div className="dvk-banner">
          <p>Have a project in mind? No credit card, just a conversation.</p>
          <button className="dvk-cta" onClick={() => navigate('/contact')}>
            Get a Free Quote
            <svg width="12" height="12" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// As the viewport (or browser zoom) shrinks, the wide photo/mockup cards would
// slide under the centred headline. Instead of hiding them we scale them down
// so they stay visible and tuck into their outer corner. The headline text is
// left untouched. The scale is driven off the widest card (the 460px photos).
function useCardScale() {
  const [cs, setCs] = useState(1)
  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth
      const stage = Math.min(vw - 48, 1760)          // centre stage width
      const headline = Math.min(720, 0.76 * stage)   // protected headline column
      const gutter = 0.46 * stage - 0.5 * headline   // room from a card's outer anchor to the headline edge
      const s = (gutter - 8) / 460                    // 460 = widest card; corner-anchored fit scale
      setCs(Math.max(0.3, Math.min(1, s)))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])
  return cs
}

// Pinned cross-fade only makes sense where the floating cards have room. On
// small screens we fall back to the original stacked, natively-scrolled blocks.
function useIsMobile(query = '(max-width: 600px)') {
  const [match, setMatch] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setMatch(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return match
}

export function DevKineticSection() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const cardScale = useCardScale()

  const theme = { ['--txt' as string]: NAVY, ['--card' as string]: '#ffffff', ['--cardln' as string]: 'rgba(8,33,60,0.08)', ['--muted' as string]: 'rgba(8,33,60,0.5)', ['--barmute' as string]: 'rgba(8,33,60,0.10)', ['--cs' as string]: cardScale } as React.CSSProperties

  return (
    <>
      <style>{`
        /* Soft glow lives in the painted background (a plain gradient, no blur
           filter and no separate animated layer) so it costs nothing to scroll. */
        .dvk-wrap { position:relative; overflow-x:clip; padding:clamp(40px,6vh,90px) 0 clamp(60px,8vh,120px);
          background:
            radial-gradient(62vw 62vw at 6% 8%, rgba(124,108,255,0.06), transparent 60%),
            radial-gradient(62vw 62vw at 94% 92%, rgba(60,185,140,0.06), transparent 60%),
            #ffffff; }

        .dvk-eyebrow-row { width:min(calc(100vw - 48px),1760px); margin:0 auto clamp(8px,2vh,28px); }
        .dvk-eyebrow { display:inline-flex; align-items:center; gap:9px; font-size:clamp(10px,0.8vw,12px); font-weight:800;
          letter-spacing:2px; text-transform:uppercase; color:var(--txt); opacity:.8; }
        .dvk-eyebrow span.d { width:7px; height:7px; border-radius:50%; background:${GREEN}; }

        /* DESKTOP: one tall scroll track, sticky pinned stage that cross-fades
           the scenes as you scroll through it. */
        .dvk-track { position:relative; }
        .dvk-pin { position:sticky; top:0; height:100vh; display:grid; grid-template-rows:auto 1fr auto;
          padding:clamp(18px,3vh,40px) 0; box-sizing:border-box; }
        .dvk-pin .dvk-eyebrow-row { align-self:start; margin-bottom:0; }
        .dvk-stagewrap { position:relative; width:100%; min-height:0; }
        .dvk-layer { position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          pointer-events:none; transform-origin:center; will-change:transform,opacity; backface-visibility:hidden; }
        .dvk-layer .dvk-stage { height:100%; }
        .dvk-pin .dvk-banner { position:static; align-self:end; margin:0 auto; }

        /* each scene is a normal-flow block that owns its own height (mobile) */
        .dvk-scene { position:relative; display:flex; align-items:center; justify-content:center;
          min-height:clamp(540px,82vh,940px); }
        .dvk-stage { position:relative; width:min(calc(100vw - 48px),1760px); height:clamp(540px,82vh,940px); margin:0 auto; }

        .dvk-headwrap { position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          z-index:4; pointer-events:none; will-change:transform,opacity; }
        .dvk-head { width:min(720px,76%); display:flex; flex-direction:column; align-items:center; text-align:center; }
        .dvk-tag { display:inline-flex; align-items:center; gap:8px; font-size:11px; font-weight:800; letter-spacing:2px;
          text-transform:uppercase; margin-bottom:14px; }
        .dvk-title { margin:0; font-weight:900; letter-spacing:-0.045em; line-height:0.98; text-transform:none;
          display:flex; flex-direction:column; gap:2px; }
        .dvk-l1 { font-size:clamp(28px,4.2vw,54px); color:var(--txt); }
        .dvk-l2 { font-size:clamp(28px,4.2vw,54px); background:linear-gradient(110deg, var(--acc), var(--txt));
          -webkit-background-clip:text; background-clip:text; color:transparent; }
        .dvk-link { display:inline-flex; align-items:center; gap:6px; margin-top:18px; font-size:14px; font-weight:800;
          letter-spacing:.2px; pointer-events:auto; cursor:pointer; background:none; border:none; padding:8px 4px;
          min-height:44px; font-family:inherit; transition:gap .2s,opacity .2s; }
        .dvk-link:hover { gap:10px; opacity:.82; }

        .dvk-card { position:absolute; z-index:3; will-change:transform,opacity; }
        /* Card scales down with the viewport (--cs) and tucks into its outer
           corner so it never slides under the headline. */
        .dvk-card > div { transform:scale(var(--cs,1)); transform-origin:var(--ox,center) var(--oy,center); transition:transform .15s ease; }

        /* CTA pill sticks to the bottom of the viewport while the section is in
           view, then scrolls away with it. It is tiny, so it stays cheap. */
        .dvk-banner { position:sticky; bottom:clamp(16px,3vh,30px); z-index:8; width:max-content; max-width:calc(100vw - 40px);
          margin:clamp(20px,4vh,40px) auto 0; display:flex; align-items:center; gap:16px; padding:10px 10px 10px 24px;
          border-radius:100px; background:${NAVY}; box-shadow:0 14px 32px rgba(8,33,60,0.26); }
        .dvk-banner p { margin:0; font-size:clamp(12px,1.2vw,14px); font-weight:600; color:rgba(255,255,255,0.82); white-space:nowrap; }
        .dvk-cta { background:${GREEN}; color:#fff; border:none; padding:12px 22px; border-radius:100px; font-family:inherit;
          font-size:13px; font-weight:800; cursor:pointer; min-height:44px; display:inline-flex; align-items:center; gap:8px;
          transition:transform .18s,background .2s; will-change:transform; white-space:nowrap; }
        .dvk-cta:hover { transform:translateY(-2px); background:#33a87d; }

        @media (max-width:1024px) { .dvk-card.dvk-far { display:none; } }
        @media (max-width:760px) {
          .dvk-banner p { white-space:normal; font-size:11px; }
          .dvk-banner { padding:8px 8px 8px 16px; gap:10px; }
        }
        @media (max-width:520px) {
          .dvk-card { display:none; }
          .dvk-scene, .dvk-stage { min-height:auto; height:auto; }
          .dvk-scene { padding:clamp(56px,12vh,96px) 0; }
          .dvk-headwrap { position:relative; inset:auto; }
          .dvk-head { width:92%; }
          .dvk-l1,.dvk-l2 { font-size:clamp(30px,9vw,46px); }
        }
        @media (min-width:1920px) { .dvk-stage, .dvk-eyebrow-row { width:min(calc(100vw - 140px),1900px); } }
        @media (min-width:2560px) { .dvk-stage, .dvk-eyebrow-row { width:min(calc(100vw - 160px),2400px); } }
        @media (prefers-reduced-motion:reduce) {
          .dvk-headwrap, .dvk-card { transform:none !important; opacity:1 !important; }
        }
      `}</style>

      <div className="dvk-wrap" style={theme}>
        {isMobile ? (
          <>
            <div className="dvk-eyebrow-row">
              <span className="dvk-eyebrow"><span className="d" />What We Build</span>
            </div>

            {SCENES.map((s) => (
              <SceneBlock key={s.id} scene={s} />
            ))}

            <div className="dvk-banner">
              <p>Have a project in mind? No credit card, just a conversation.</p>
              <button className="dvk-cta" onClick={() => navigate('/contact')}>
                Get a Free Quote
                <svg width="12" height="12" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>
              </button>
            </div>
          </>
        ) : (
          <DesktopStage navigate={navigate} />
        )}
      </div>
    </>
  )
}
