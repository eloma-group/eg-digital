import { Navbar }        from './layout/Navbar'
import { Hero }          from './sections/Hero'
import { HeroV1, HeroV2, HeroV3, HeroV4, HeroV5, HeroV6, HeroV7 } from './sections/HeroVariants'
import { AboutUs }       from './sections/AboutUs'
import { Features }      from './sections/Features'
import { Pricing }       from './sections/Pricing'
import { Testimonials }  from './sections/Testimonials'
import { FooterSection } from './sections/FooterSection'

export function HomePage() {
  return (
    <div style={{ overflowX: 'hidden', fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <HeroV1 />
      <HeroV2 />
      <HeroV3 />
      <HeroV4 />
      <HeroV5 />
      <HeroV6 />
      <HeroV7 />
      <AboutUs />
      <Features />
      <Pricing />
      <Testimonials />
      <FooterSection />
    </div>
  )
}
