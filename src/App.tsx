import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { IntroSplash } from './components/IntroSplash'
import { useCanonical } from './hooks/useCanonical'

// Every page is code-split so opening one route never downloads the others.
// This keeps the initial bundle tiny - the homepage no longer ships the blog,
// solutions, services, etc. The named exports are mapped to a default for lazy().
const HomePage                     = lazy(() => import('./components/HomePage').then(m => ({ default: m.HomePage })))
const OurJourney                   = lazy(() => import('./components/pages/OurJourney').then(m => ({ default: m.OurJourney })))
const OurUSP                       = lazy(() => import('./components/pages/OurUSP').then(m => ({ default: m.OurUSP })))
const NetworksPartners             = lazy(() => import('./components/pages/NetworksPartners').then(m => ({ default: m.NetworksPartners })))
const Media                        = lazy(() => import('./components/pages/Media').then(m => ({ default: m.Media })))
const Values                       = lazy(() => import('./components/pages/Values').then(m => ({ default: m.Values })))
const FAQ                          = lazy(() => import('./components/pages/FAQ').then(m => ({ default: m.FAQ })))
const Contact                      = lazy(() => import('./components/pages/Contact').then(m => ({ default: m.Contact })))
const Solutions                    = lazy(() => import('./components/pages/Solutions').then(m => ({ default: m.Solutions })))
// New SEO service page replaces the old MicrosoftProducts page on this route.
// The old component remains at components/pages/solutions/MicrosoftProducts.tsx.
const MicrosoftSolutions           = lazy(() => import('./components/pages/services/MicrosoftSolutions').then(m => ({ default: m.MicrosoftSolutions })))
const DevelopmentSolution          = lazy(() => import('./components/pages/solutions/Development').then(m => ({ default: m.DevelopmentSolution })))
const DigitalMarketingSolution     = lazy(() => import('./components/pages/solutions/DigitalMarketing').then(m => ({ default: m.DigitalMarketingSolution })))
const SecurityIntegrationSolution  = lazy(() => import('./components/pages/solutions/SecurityIntegration').then(m => ({ default: m.SecurityIntegrationSolution })))
const Services                     = lazy(() => import('./components/pages/Services').then(m => ({ default: m.Services })))
const SocialMediaMarketing         = lazy(() => import('./components/pages/services/SocialMediaMarketing').then(m => ({ default: m.SocialMediaMarketing })))
const PPCServices                  = lazy(() => import('./components/pages/services/PPCServices').then(m => ({ default: m.PPCServices })))
const WebDevelopment               = lazy(() => import('./components/pages/services/WebDevelopment').then(m => ({ default: m.WebDevelopment })))
const SEOServices                  = lazy(() => import('./components/pages/services/SEOServices').then(m => ({ default: m.SEOServices })))
const TechnicalSEO                 = lazy(() => import('./components/pages/services/TechnicalSEO').then(m => ({ default: m.TechnicalSEO })))
const MobileAppDevelopment         = lazy(() => import('./components/pages/services/MobileAppDevelopment').then(m => ({ default: m.MobileAppDevelopment })))
const LocalSEO                     = lazy(() => import('./components/pages/services/LocalSEO').then(m => ({ default: m.LocalSEO })))
const OffPageSEO                   = lazy(() => import('./components/pages/services/OffPageSEO').then(m => ({ default: m.OffPageSEO })))
const FacebookAdsManagement        = lazy(() => import('./components/pages/services/FacebookAdsManagement').then(m => ({ default: m.FacebookAdsManagement })))
const GoogleAdsManagement          = lazy(() => import('./components/pages/services/GoogleAdsManagement').then(m => ({ default: m.GoogleAdsManagement })))
const LinkedInAdsManagement        = lazy(() => import('./components/pages/services/LinkedInAdsManagement').then(m => ({ default: m.LinkedInAdsManagement })))
const Branding                     = lazy(() => import('./components/pages/services/Branding').then(m => ({ default: m.Branding })))
const EmailMarketing               = lazy(() => import('./components/pages/services/EmailMarketing').then(m => ({ default: m.EmailMarketing })))
const ContentCreation              = lazy(() => import('./components/pages/services/ContentCreation').then(m => ({ default: m.ContentCreation })))
const FlutterAppDevelopment        = lazy(() => import('./components/pages/services/FlutterAppDevelopment').then(m => ({ default: m.FlutterAppDevelopment })))
const CustomAppDevelopment         = lazy(() => import('./components/pages/services/CustomAppDevelopment').then(m => ({ default: m.CustomAppDevelopment })))
const AndroidAppDevelopment        = lazy(() => import('./components/pages/services/AndroidAppDevelopment').then(m => ({ default: m.AndroidAppDevelopment })))
const IPhoneAppDevelopment         = lazy(() => import('./components/pages/services/IPhoneAppDevelopment').then(m => ({ default: m.IPhoneAppDevelopment })))
const GraphicDesign                = lazy(() => import('./components/pages/services/GraphicDesign').then(m => ({ default: m.GraphicDesign })))
const Industries                   = lazy(() => import('./components/pages/Industries').then(m => ({ default: m.Industries })))
const Blog                         = lazy(() => import('./components/pages/Blog').then(m => ({ default: m.Blog })))
const BlogArticle                  = lazy(() => import('./components/pages/BlogArticle').then(m => ({ default: m.BlogArticle })))
const Career                       = lazy(() => import('./components/pages/Career').then(m => ({ default: m.Career })))
const PrivacyPolicy                = lazy(() => import('./components/pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })))
const TermsConditions              = lazy(() => import('./components/pages/TermsConditions').then(m => ({ default: m.TermsConditions })))

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

// Keeps the canonical link + og:url pointing at the current route (the static
// build bakes them per page; this fixes them for client-side navigation).
function CanonicalTag() {
  useCanonical()
  return null
}

function App() {
  return (
    <>
      <IntroSplash />
      <ScrollToTop />
      <CanonicalTag />
      <Suspense fallback={null}>
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
        <Route path="/solutions/microsoft-products" element={<MicrosoftSolutions />} />
        <Route path="/solutions/development" element={<DevelopmentSolution />} />
        <Route path="/solutions/digital-marketing" element={<DigitalMarketingSolution />} />
        <Route path="/solutions/security-integration" element={<SecurityIntegrationSolution />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/ppc-services" element={<PPCServices />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/seo-services" element={<SEOServices />} />
        <Route path="/services/technical-seo" element={<TechnicalSEO />} />
        <Route path="/services/mobile-app-development-company-australia" element={<MobileAppDevelopment />} />
        <Route path="/services/local-seo" element={<LocalSEO />} />
        <Route path="/services/off-page-seo" element={<OffPageSEO />} />
        <Route path="/services/facebook-ads-management" element={<FacebookAdsManagement />} />
        <Route path="/services/google-ads-management" element={<GoogleAdsManagement />} />
        <Route path="/services/linkedin-ads-management" element={<LinkedInAdsManagement />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/email-marketing" element={<EmailMarketing />} />
        <Route path="/services/content-creation" element={<ContentCreation />} />
        <Route path="/services/flutter-app-development-company-australia" element={<FlutterAppDevelopment />} />
        <Route path="/services/custom-app-development-company-australia" element={<CustomAppDevelopment />} />
        <Route path="/services/android-app-development-company-australia" element={<AndroidAppDevelopment />} />
        <Route path="/services/iphone-app-development-company-australia" element={<IPhoneAppDevelopment />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        {/* Any unknown path falls back to the homepage. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
