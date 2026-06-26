import { useEffect, useLayoutEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// LOGO BUILD - animated EG Digital wordmark.
// The kangaroo "G" icon sweeps in with a conic-gradient reveal, then each
// letter of "digital" pops up in sequence, finished by the ™ mark. Plays once
// on mount then holds the finished logo. Parts live in /public/images/logo-build/.
//
// The frame loop mutates each <img> style DIRECTLY via refs - it never calls
// setState, so React does no per-frame reconciliation and the build stays
// buttery-smooth. Only transform / opacity / mask change (compositor-friendly).
// ─────────────────────────────────────────────────────────────────────────────

const STAGE_W = 808
const STAGE_H = 244
const BUILD_END = 3.2 // seconds - everything is fully built well before this

type Part = {
  id: string
  left: number
  width: number
  role: 'icon' | 'letter' | 'tm'
  order?: number
}

const PARTS: Part[] = [
  { id: 'icon', left: 0,   width: 216, role: 'icon' },
  { id: 'd',    left: 231, width: 92,  role: 'letter', order: 0 },
  { id: 'i1',   left: 343, width: 27,  role: 'letter', order: 1 },
  { id: 'g',    left: 380, width: 95,  role: 'letter', order: 2 },
  { id: 'i2',   left: 494, width: 26,  role: 'letter', order: 3 },
  { id: 't',    left: 524, width: 67,  role: 'letter', order: 4 },
  { id: 'a',    left: 591, width: 79,  role: 'letter', order: 5 },
  { id: 'l',    left: 691, width: 21,  role: 'letter', order: 6 },
  { id: 'tm',   left: 712, width: 89,  role: 'tm' },
]

const clamp01 = (x: number) => Math.max(0, Math.min(1, x))
const prog = (t: number, s: number, d: number) => clamp01((t - s) / d)
const outCubic = (x: number) => 1 - Math.pow(1 - x, 3)
const outBack = (x: number) => {
  const c1 = 1.70158, c3 = c1 + 1
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
}

// Final resting scale of the ™ mark (it sits at the top of its part, so we
// shrink it from 'center top' to keep it in place, just smaller).
const TM_SCALE = 0.62

const originFor = (it: Part) =>
  it.role === 'icon' ? '52% 48%' : it.role === 'letter' ? 'center bottom' : 'center top'

// Compute the animated transform / opacity / mask for one part at time t and
// write them straight onto the element. No React involved.
function applyFrame(el: HTMLImageElement, it: Part, t: number) {
  if (it.role === 'icon') {
    const p = outCubic(prog(t, 0, 1.0))
    const ang = `${p * 360}deg`
    const mask = `conic-gradient(from -120deg at 52% 48%, #000 ${ang}, transparent 0)`
    el.style.transform = `scale(${(0.9 + 0.1 * p).toFixed(4)})`
    el.style.opacity = p > 0 ? '1' : '0'
    el.style.webkitMaskImage = mask
    el.style.maskImage = mask
    return
  }
  if (it.role === 'letter') {
    const s = 0.9 + (it.order ?? 0) * 0.12
    const p = prog(t, s, 0.5)
    const e = outBack(p)
    const ty = (1 - e) * 34
    const sc = 0.6 + 0.4 * Math.min(1, p * 1.4)
    el.style.transform = `translateY(${ty.toFixed(2)}px) scale(${sc.toFixed(4)})`
    el.style.opacity = prog(t, s, 0.28).toFixed(3)
    return
  }
  // ™
  const p = prog(t, 2.18, 0.6)
  el.style.transform = `scale(${(outBack(p) * TM_SCALE).toFixed(4)})`
  el.style.opacity = prog(t, 2.18, 0.3).toFixed(3)
}

export function LogoBuild({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])

  // Scale the fixed 808x244 stage down to the (responsive) wrapper width.
  // Written straight to the node so a resize never triggers a React render.
  useLayoutEffect(() => {
    const el = wrapRef.current
    const stage = stageRef.current
    if (!el || !stage) return
    const measure = () => { stage.style.transform = `scale(${el.clientWidth / STAGE_W})` }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // One-shot build loop, mutating each <img> directly. Holds the finished
  // logo once past BUILD_END.
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const frame = (time: number) => {
      const elapsed = (time - start) / 1000
      const t = elapsed >= BUILD_END ? BUILD_END + 1 : elapsed
      for (let i = 0; i < PARTS.length; i++) {
        const el = imgRefs.current[i]
        if (el) applyFrame(el, PARTS[i], t)
      }
      if (elapsed < BUILD_END) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      ref={wrapRef}
      className={className}
      role="img"
      aria-label="EG Digital"
      style={{ position: 'relative', aspectRatio: `${STAGE_W} / ${STAGE_H}` }}
    >
      <div
        ref={stageRef}
        style={{
          position: 'absolute', top: 0, left: 0, width: STAGE_W, height: STAGE_H,
          transformOrigin: 'top left', willChange: 'transform',
        }}
      >
        {PARTS.map((it, i) => (
          <img
            key={it.id}
            ref={(el) => { imgRefs.current[i] = el }}
            src={`/images/logo-build/${it.id}.png`}
            alt=""
            draggable={false}
            decoding="async"
            style={{
              position: 'absolute', top: 0, left: it.left, width: it.width, height: STAGE_H,
              display: 'block', opacity: 0, transformOrigin: originFor(it),
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </div>
  )
}
