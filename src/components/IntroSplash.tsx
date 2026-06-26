import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// INTRO SPLASH - full-screen white intro where the EG Digital logo REBUILDS
// itself on load: the logo image is sliced into a grid of tiles, each tile
// starts scattered (offset + scaled down + rotated + transparent) and then
// snaps into its correct place with a staggered, pseudo-random delay - so the
// whole mark looks like it is assembling piece by piece. Once whole, a glossy
// shine sweeps across it and it gently floats, then the screen fades away.
//
// Each tile shows its slice via background-size / background-position on the
// same cached PNG (no extra image files). Everything animates on transform /
// opacity only, so it stays 120fps-smooth.
// ─────────────────────────────────────────────────────────────────────────────

const LOGO = '/images/s.png'
const DURATION = 4200 // total time the splash stays up before fading out
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const BACK: [number, number, number, number] = [0.34, 1.56, 0.64, 1] // snap-into-place overshoot

const COLS = 9
const ROWS = 3

// deterministic 0..1 pseudo-random so the scatter feels organic but stable
function rand(i: number) {
  const s = Math.sin(i * 12.9898) * 43758.5453
  return s - Math.floor(s)
}

const TILES = Array.from({ length: COLS * ROWS }, (_, i) => {
  const c = i % COLS
  const r = Math.floor(i / COLS)
  const rnd = rand(i + 1)
  return {
    c, r, rnd,
    // where this slice of the full image sits
    bgPos: `${(c / (COLS - 1)) * 100}% ${(r / (ROWS - 1)) * 100}%`,
    // scatter offset pushes each tile outward from the centre before it settles
    ox: (c - (COLS - 1) / 2) * 16 + (rnd - 0.5) * 18,
    oy: (r - (ROWS - 1) / 2) * 16 + (rnd - 0.5) * 18,
    rot: (rnd - 0.5) * 34,
    delay: 0.15 + rnd * 0.95, // staggered assembly over ~1s
  }
})

export function IntroSplash() {
  const [show, setShow] = useState(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    // freeze the page underneath while the splash is up
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => setShow(false), DURATION)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  // release the scroll lock the moment we start fading out
  useEffect(() => {
    if (!show) document.body.style.overflow = ''
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <style>{`
            .intro-splash {
              position: fixed;
              inset: 0;
              z-index: 99999;
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
            }
            .intro-logo-wrap {
              position: relative;
              width: min(64vw, 460px);
              aspect-ratio: 808 / 244;
              will-change: transform;
            }
            .intro-logo-grid {
              position: absolute;
              inset: 0;
              display: grid;
              grid-template-columns: repeat(${COLS}, 1fr);
              grid-template-rows: repeat(${ROWS}, 1fr);
            }
            .intro-tile {
              background-image: url(${LOGO});
              background-repeat: no-repeat;
              background-size: ${COLS * 100}% ${ROWS * 100}%;
              will-change: transform, opacity;
              backface-visibility: hidden;
            }
            /* seamless full logo that fades in once the tiles have assembled,
               so the resting mark has no hairline seams between the slices */
            .intro-logo-full {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              object-fit: contain;
              display: block;
              pointer-events: none;
            }
            /* glossy highlight, masked to the logo shape so it only glints
               across the actual letters once the mark is whole */
            .intro-logo-shine {
              position: absolute;
              inset: 0;
              pointer-events: none;
              background: linear-gradient(115deg,
                transparent 38%,
                rgba(255,255,255,0.9) 50%,
                transparent 62%);
              -webkit-mask-image: url(${LOGO});
              mask-image: url(${LOGO});
              -webkit-mask-size: contain;
              mask-size: contain;
              -webkit-mask-repeat: no-repeat;
              mask-repeat: no-repeat;
              -webkit-mask-position: center;
              mask-position: center;
              mix-blend-mode: screen;
              will-change: transform;
            }
            @media (prefers-reduced-motion: reduce) {
              .intro-logo-shine { display: none; }
            }
          `}</style>

          {/* gentle float once the logo has rebuilt itself */}
          <motion.div
            className="intro-logo-wrap"
            animate={reduce ? undefined : { y: [0, -8, 0], scale: [1, 1.01, 1] }}
            transition={{ duration: 4.0, ease: 'easeInOut', repeat: Infinity, delay: 1.9 }}
          >
            <div className="intro-logo-grid" aria-label="EG Digital" role="img">
              {TILES.map((t, i) => (
                <motion.div
                  key={i}
                  className="intro-tile"
                  style={{ backgroundPosition: t.bgPos }}
                  initial={reduce ? false : { opacity: 0, scale: 0.25, x: t.ox, y: t.oy, rotate: t.rot }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 0.75, ease: BACK, delay: reduce ? 0 : t.delay }}
                />
              ))}
            </div>

            {/* seamless full mark crossfades in as the tiles settle */}
            <motion.img
              className="intro-logo-full"
              src={LOGO}
              alt="EG Digital"
              decoding="async"
              width={808}
              height={244}
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : 1.6 }}
            />

            {/* shine sweeps across after the mark is assembled */}
            {!reduce && (
              <motion.div
                className="intro-logo-shine"
                initial={{ x: '-130%' }}
                animate={{ x: ['-130%', '140%', '140%', '-130%', '140%'] }}
                transition={{ duration: 3.0, ease: 'easeInOut', delay: 1.9, times: [0, 0.34, 0.6, 0.6, 1] }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
