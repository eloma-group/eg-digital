import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const NAVY = '#08213C'
const GREEN = '#3CB98C'

/* Curated work imagery - websites, apps, SaaS, cloud, teamwork, design.
   Stable Unsplash photo IDs, sized & cropped for a light DOM payload. */
const Q = '?auto=format&fit=crop&w=620&h=760&q=70'
const IMAGES: { src: string; alt: string }[] = [
  { src: `https://images.unsplash.com/photo-1551434678-e076c223a692${Q}`, alt: 'Team collaborating on laptops' },
  { src: `https://images.unsplash.com/photo-1498050108023-c5249f4df085${Q}`, alt: 'Code on a screen' },
  { src: `https://images.unsplash.com/photo-1460925895917-afdab827c52f${Q}`, alt: 'Analytics dashboard' },
  { src: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7${Q}`, alt: 'Team in a planning meeting' },
  { src: `https://images.unsplash.com/photo-1531297484001-80022131f5a1${Q}`, alt: 'Modern device interface' },
  { src: `https://images.unsplash.com/photo-1555066931-4365d14bab8c${Q}`, alt: 'Developer writing code' },
  { src: `https://images.unsplash.com/photo-1517180102446-f3ece451e9d8${Q}`, alt: 'Cloud servers and network' },
  { src: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b${Q}`, alt: 'Laptop and technology' },
  { src: `https://images.unsplash.com/photo-1542744173-8e7e53415bb0${Q}`, alt: 'Design team collaboration' },
  { src: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40${Q}`, alt: 'Business analytics on screen' },
  { src: `https://images.unsplash.com/photo-1581291518857-4e27b48ff24e${Q}`, alt: 'Engineer at workstation' },
  { src: `https://images.unsplash.com/photo-1519389950473-47ba0277781c${Q}`, alt: 'Team working at computers' },
  { src: `https://images.unsplash.com/photo-1607706189992-eae578626c86${Q}`, alt: 'UI design mockups' },
  { src: `https://images.unsplash.com/photo-1593720213428-28a5b9e94613${Q}`, alt: 'Mobile app development' },
  { src: `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4${Q}`, alt: 'Clean workspace with laptop' },
  { src: `https://images.unsplash.com/photo-1573164713988-8665fc963095${Q}`, alt: 'Developer at a multi-screen setup' },
]

const THRESHOLD = 150 // px the pointer must travel before the next frame reveals

export function ImageTrail() {
  const stageRef = useRef<HTMLDivElement>(null)
  const cellsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    // Respect reduced motion - trail stays dormant.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Pointer trail is a desktop-pointer affordance; skip on touch.
    if (window.matchMedia('(hover: none)').matches) return

    const cells = cellsRef.current
    const total = cells.length
    let zIndex = 1
    let imgPos = 0
    let cellPos = 0
    let lastX = 0
    let lastY = 0
    let primed = false

    const reveal = (x: number, y: number) => {
      const cell = cells[cellPos % total]
      const img = cell.firstElementChild as HTMLElement
      cellPos++
      imgPos++
      zIndex++

      gsap.killTweensOf(cell)
      gsap.killTweensOf(img)

      gsap.timeline()
        .set(cell, {
          zIndex,
          x,
          y,
          opacity: 1,
          scale: 0.42,
          rotation: gsap.utils.random(-14, 14),
        })
        .set(img, { scale: 1.7, filter: 'brightness(0.42) contrast(1.08) saturate(0.92)' })
        // settle in (kept deliberately dark so the white headline stays legible)
        .to(cell, { scale: 1, duration: 0.55, ease: 'expo.out' }, 0)
        .to(img, { scale: 1, filter: 'brightness(0.58) contrast(1.08) saturate(0.92)', duration: 0.7, ease: 'expo.out' }, 0)
        // drift + fade away
        .to(cell, {
          opacity: 0,
          scale: 0.78,
          y: y + 56,
          duration: 0.55,
          ease: 'power2.in',
        }, 0.42)
        .to(img, { scale: 1.18, duration: 0.55, ease: 'power2.in' }, 0.42)
    }

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (!primed) {
        primed = true
        lastX = x
        lastY = y
        return
      }

      const dist = Math.hypot(x - lastX, y - lastY)
      if (dist < THRESHOLD) return
      lastX = x
      lastY = y
      reveal(x, y)
    }

    stage.addEventListener('pointermove', onMove)
    return () => {
      stage.removeEventListener('pointermove', onMove)
      gsap.killTweensOf(cells)
    }
  }, [])

  return (
    <section className="it-section">
      <style>{`
        .it-section { position: relative; overflow: hidden; background: ${NAVY};
          padding: clamp(80px,12vw,180px) clamp(24px,4vw,64px); }
        .it-stage { position: absolute; inset: 0; z-index: 1; touch-action: none; }
        /* Dark scrim behind the headline so it reads over any image that drifts past */
        .it-scrim { position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(ellipse 55% 60% at 50% 50%, rgba(8,33,60,0.78) 0%, rgba(8,33,60,0.45) 45%, transparent 75%); }
        .it-cell { position: absolute; top: 0; left: 0; width: clamp(140px,13vw,230px);
          aspect-ratio: 5 / 6; margin: calc(clamp(140px,13vw,230px) / -2) 0 0 calc(clamp(140px,13vw,230px) / -2);
          border-radius: 14px; overflow: hidden; opacity: 0; pointer-events: none;
          will-change: transform, opacity; box-shadow: 0 30px 70px -28px rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.08); }
        .it-cell img { width: 100%; height: 100%; object-fit: cover; display: block;
          will-change: transform; }

        .it-inner { position: relative; z-index: 2; max-width: min(calc(100vw - 120px), 2400px);
          margin: 0 auto; text-align: center; pointer-events: none; }
        .it-eyebrow { display: inline-flex; align-items: center; gap: 10px;
          font-size: clamp(10px,0.8vw,13px); font-weight: 800; letter-spacing: 2.6px;
          text-transform: uppercase; word-spacing: 0.14em; color: ${GREEN}; }
        .it-h2 { font-size: clamp(40px,7vw,116px); font-weight: 900; letter-spacing: 0.01em;
          line-height: 1.04; text-transform: uppercase; word-spacing: 0.14em; color: #fff; margin: 20px auto 0; max-width: 14ch; }
        .it-h2 em { font-style: normal; color: ${GREEN}; }
        .it-sub { font-size: clamp(15px,1.2vw,18px); line-height: 1.85; color: rgba(255,255,255,0.55);
          max-width: 540px; margin: 26px auto 0; }
        .it-hint { display: inline-flex; align-items: center; gap: 9px; margin-top: 30px;
          font-size: clamp(11px,0.85vw,13px); font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; word-spacing: 0.14em; color: rgba(255,255,255,0.42); }
        .it-hint span { width: 7px; height: 7px; border-radius: 99px; background: ${GREEN};
          animation: it-pulse 2.4s ease-in-out infinite; }
        @keyframes it-pulse { 0%,100% { opacity: 0.35; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }

        @media (max-width: 900px) { .it-stage { display: none; } }
      `}</style>

      {/* Trail stage - captures pointer movement and hosts recycled image cells */}
      <div className="it-stage" ref={stageRef} aria-hidden="true">
        {IMAGES.map((im, i) => (
          <div
            key={i}
            className="it-cell"
            ref={el => { if (el) cellsRef.current[i] = el }}
          >
            <img src={im.src} alt={im.alt} loading="lazy" decoding="async" draggable={false} />
          </div>
        ))}
      </div>

      {/* Dark scrim layer keeps the headline legible over passing imagery */}
      <div className="it-scrim" aria-hidden="true" />

      <div className="it-inner">
        <div className="it-eyebrow">
          <span style={{ width: 22, height: 2, background: GREEN }} />
          The Work Behind The Years
        </div>
        <h2 className="it-h2">2 years. <em>Many</em> projects. Unwavering quality.</h2>
        <p className="it-sub">
          Websites, apps, SaaS platforms, cloud and security - every milestone above is
          a wall of shipped work. Move your cursor to leaf through it.
        </p>
        <div className="it-hint"><span />Move to reveal</div>
      </div>
    </section>
  )
}
