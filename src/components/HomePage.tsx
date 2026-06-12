import { Navbar }        from './layout/Navbar'
import { Hero }          from './sections/Hero'
import { HeroV1, HeroV2, HeroV3, HeroV4, HeroV5, HeroV6, HeroV7 } from './sections/HeroVariants'
import { HeroKinetic, HeroImageFujiDiag, HeroImageCityDiag, HeroVideoDiag } from './sections/HeroConcepts'
// import { AboutUs }       from './sections/AboutUs'
import { Features }      from './sections/Features'
import { Testimonials }  from './sections/Testimonials'
import { FooterSection } from './sections/FooterSection'

export function HomePage() {
  return (
    <div style={{ overflowX: 'hidden', fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <HeroKinetic />
      <HeroImageFujiDiag />
      <HeroImageCityDiag />
      <HeroVideoDiag />
      <HeroV1 />
      <HeroV2 />
      <HeroV3 />
      <HeroV4 />
      <HeroV5 />
      <HeroV6 />
      <HeroV7 />
      {/* <AboutUs /> */}
      <Features />
      <Testimonials />
      <FooterSection />
    </div>
  )
}
