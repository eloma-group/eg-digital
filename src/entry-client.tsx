import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
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
// (async image loads, web-font swap, etc.) - otherwise wheel scroll clamps
// short of the real bottom even though the native scrollbar can reach it.
const resync = () => lenis.resize()

window.addEventListener('load', resync)
if (document.fonts) document.fonts.ready.then(resync)

if (typeof ResizeObserver !== 'undefined') {
  const ro = new ResizeObserver(resync)
  ro.observe(document.body)
}

// Any image finishing later can change height - re-measure on each load.
window.addEventListener(
  'load',
  () => {
    document.querySelectorAll('img').forEach(img => {
      if (!img.complete) img.addEventListener('load', resync, { once: true })
    })
  },
  { once: true },
)

const root = document.getElementById('root')!

// The route HTML is pre-rendered into #root at build time (see prerender.js) so
// crawlers get real content. We deliberately do a fresh client render rather
// than hydrate: the heavy 3D/WebGL and animation layers make a clean re-render
// far more robust than reconciling against server markup, and the intro splash
// covers the swap so it is never visible. Clearing first avoids React's
// "createRoot on server-rendered container" warning.
root.innerHTML = ''

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
