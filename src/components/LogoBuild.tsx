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

const STAGE_W = 2093
const STAGE_H = 469
const BUILD_END = 3.2 // seconds - everything is fully built well before this

type Part = {
  id: string
  left: number
  width: number
  role: 'icon' | 'letter' | 'tm'
  order?: number
}

const PARTS: Part[] = [
  { id: 'icon', left: 0,    width: 440, role: 'icon' },
  { id: 'e',    left: 499,  width: 186, role: 'letter', order: 0 },
  { id: 'g1',   left: 709,  width: 196, role: 'letter', order: 1 },
  { id: 'd',    left: 989,  width: 193, role: 'letter', order: 2 },
  { id: 'i1',   left: 1230, width: 38,  role: 'letter', order: 3 },
  { id: 'g2',   left: 1296, width: 196, role: 'letter', order: 4 },
  { id: 'i2',   left: 1540, width: 38,  role: 'letter', order: 5 },
  { id: 't',    left: 1592, width: 130, role: 'letter', order: 6 },
  { id: 'a',    left: 1727, width: 160, role: 'letter', order: 7 },
  { id: 'l',    left: 1939, width: 26,  role: 'letter', order: 8 },
  { id: 'tm',   left: 1986, width: 108, role: 'tm' },
]

const clamp01 = (x: number) => Math.max(0, Math.min(1, x))
const prog = (t: number, s: number, d: number) => clamp01((t - s) / d)
const outCubic = (x: number) => 1 - Math.pow(1 - x, 3)
const outBack = (x: number) => {
  const c1 = 1.70158, c3 = c1 + 1
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
}

// Final resting scale of the ™ mark. Each part is sliced at its natural size
// and position from the source logo, so the ™ rests at 1.0 (it still pops in
// from 'center top' via the outBack ease).
const TM_SCALE = 1.0

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
            src={`/images/logo-build-eg/${it.id}.png`}
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
