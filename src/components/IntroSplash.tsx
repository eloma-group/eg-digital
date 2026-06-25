import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// INTRO SPLASH - full-screen white intro that plays the EG Digital logo video
// (its 2s-10s segment, ~8 seconds) on page load, then fades out to reveal the
// app. The video was re-encoded so its background is pure white, so the logo
// reads as if it sits on a transparent backdrop over the white screen.
// ─────────────────────────────────────────────────────────────────────────────

const DURATION = 8000 // video plays its 2s-10s segment (8 seconds)
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function IntroSplash() {
  const [show, setShow] = useState(true)

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
          exit={{ opacity: 0 }}
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
            .intro-splash-video {
              width: min(48vw, 360px);
              max-height: 46vh;
              height: auto;
              object-fit: contain;
              display: block;
              background: #ffffff;
            }
          `}</style>
          <video
            className="intro-splash-video"
            src="/splash-white.mp4"
            autoPlay
            muted
            playsInline
            aria-label="EG Digital"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
