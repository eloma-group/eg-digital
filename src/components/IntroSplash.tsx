import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { LogoBuild } from './LogoBuild'

// ─────────────────────────────────────────────────────────────────────────────
// INTRO SPLASH - full-screen white intro where the EG Digital logo BUILDS
// itself on load: the kangaroo "G" icon sweeps in with a conic-gradient reveal,
// then each letter of "digital" pops up in sequence, finished by the ™ mark
// (see LogoBuild). Once whole, it gently floats, then the screen fades away.
// Everything animates on transform / opacity / mask only, so it stays smooth.
// ─────────────────────────────────────────────────────────────────────────────

const DURATION = 3000 // total time the splash stays up before fading out
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function IntroSplash() {
  // Only ever exists on the client. During the static pre-render there is no
  // `window`, so we start hidden - otherwise the full-screen white overlay
  // (z-index 99999) is baked into the raw HTML and covers every page's content
  // for crawlers and before JS runs. On the client it starts shown and masks
  // the fresh re-render swap as intended.
  const [show, setShow] = useState(() => typeof window !== 'undefined')
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
              width: min(52vw, 360px);
              will-change: transform;
            }
            .intro-logo-build {
              width: 100%;
              height: auto;
            }
          `}</style>

          {/* gentle float once the logo has built itself */}
          <motion.div
            className="intro-logo-wrap"
            animate={reduce ? undefined : { y: [0, -8, 0], scale: [1, 1.01, 1] }}
            transition={{ duration: 4.0, ease: 'easeInOut', repeat: Infinity, delay: 1.9 }}
          >
            <LogoBuild className="intro-logo-build" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
