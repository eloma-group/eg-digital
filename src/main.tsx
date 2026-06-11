import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App.tsx'

const lenis = new Lenis({
  duration: 0.9,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  touchMultiplier: 1.5,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

;(window as unknown as Record<string, unknown>).__lenis = lenis

// Keep Lenis' scroll limit in sync when late layout shifts grow the page
// (async image loads, web-font swap, etc.) — otherwise wheel scroll clamps
// short of the real bottom even though the native scrollbar can reach it.
const resync = () => lenis.resize()

window.addEventListener('load', resync)
if (document.fonts) document.fonts.ready.then(resync)

if (typeof ResizeObserver !== 'undefined') {
  const ro = new ResizeObserver(resync)
  ro.observe(document.body)
}

// Any image finishing later can change height — re-measure on each load.
window.addEventListener(
  'load',
  () => {
    document.querySelectorAll('img').forEach(img => {
      if (!img.complete) img.addEventListener('load', resync, { once: true })
    })
  },
  { once: true },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
