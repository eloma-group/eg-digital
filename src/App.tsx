import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { OurJourney } from './components/pages/OurJourney'
import { OurUSP } from './components/pages/OurUSP'
import { NetworksPartners } from './components/pages/NetworksPartners'
import { Media } from './components/pages/Media'
import { Values } from './components/pages/Values'
import { FAQ } from './components/pages/FAQ'

// Reset scroll (and the global Lenis instance) on every route change.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const lenis = (window as unknown as {
      __lenis?: { scrollTo: (t: number, o?: object) => void; resize: () => void }
    }).__lenis
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)

    // The new route mounts with a different page height. Lenis caches its
    // scroll limit, so without a re-measure the wheel clamps short of the
    // footer on tall pages. Re-measure across the next few frames (svh units
    // and late layout settle after the commit).
    if (!lenis) return
    let frame = 0
    const tick = () => {
      lenis.resize()
      if (++frame < 4) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    const t = window.setTimeout(() => lenis.resize(), 300)
    return () => window.clearTimeout(t)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/our-journey" element={<OurJourney />} />
        <Route path="/about/our-usp" element={<OurUSP />} />
        <Route path="/about/networks-partners" element={<NetworksPartners />} />
        <Route path="/about/media" element={<Media />} />
        <Route path="/about/values" element={<Values />} />
        <Route path="/about/faq" element={<FAQ />} />
      </Routes>
    </>
  )
}

export default App
