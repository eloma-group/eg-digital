import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { IntroSplash } from './components/IntroSplash'
import { HomePage } from './components/HomePage'
import { OurJourney } from './components/pages/OurJourney'
import { OurUSP } from './components/pages/OurUSP'
import { NetworksPartners } from './components/pages/NetworksPartners'
import { Media } from './components/pages/Media'
import { Values } from './components/pages/Values'
import { FAQ } from './components/pages/FAQ'
import { Contact } from './components/pages/Contact'
import { Solutions } from './components/pages/Solutions'
import { MicrosoftProducts } from './components/pages/solutions/MicrosoftProducts'
import { DevelopmentSolution } from './components/pages/solutions/Development'
import { DigitalMarketingSolution } from './components/pages/solutions/DigitalMarketing'
import { SecurityIntegrationSolution } from './components/pages/solutions/SecurityIntegration'
import { Services } from './components/pages/Services'
import { Industries } from './components/pages/Industries'
import { Blog } from './components/pages/Blog'
import { Career } from './components/pages/Career'

// Reset scroll (and the global Lenis instance) on every route change, or scroll
// to a #section anchor when the URL carries a hash.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const lenis = (window as unknown as {
      __lenis?: { scrollTo: (t: number | string | HTMLElement, o?: object) => void; resize: () => void }
    }).__lenis

    // ── Hash navigation: land on the target section (offset for fixed Navbar) ──
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      let tries = 0
      const settle = () => {
        lenis?.resize()
        const el = document.getElementById(id)
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: -92 })
          else el.scrollIntoView()
          return
        }
        // Element may not be laid out yet on a fresh page mount - retry briefly.
        if (++tries < 20) requestAnimationFrame(settle)
      }
      requestAnimationFrame(settle)
      return
    }

    // ── Plain route change: reset to top ──
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
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <IntroSplash />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/our-journey" element={<OurJourney />} />
        <Route path="/about/our-usp" element={<OurUSP />} />
        <Route path="/about/networks-partners" element={<NetworksPartners />} />
        <Route path="/about/media" element={<Media />} />
        <Route path="/about/values" element={<Values />} />
        <Route path="/about/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/microsoft-products" element={<MicrosoftProducts />} />
        <Route path="/solutions/development" element={<DevelopmentSolution />} />
        <Route path="/solutions/digital-marketing" element={<DigitalMarketingSolution />} />
        <Route path="/solutions/security-integration" element={<SecurityIntegrationSolution />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  )
}

export default App
