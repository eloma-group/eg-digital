import { Navbar }        from './layout/Navbar'
// import { Hero3 }         from './sections/Hero3'  // robot hero hidden, do not delete
import { HeroVideo }     from './sections/HeroVideo'
import { DevKineticSection }     from './sections/DevKineticSection'
import { SecuritySection }       from './sections/SecuritySection'
import { MicrosoftSection }      from './sections/MicrosoftSection'
import { MarketingSection }      from './sections/MarketingSection'
import { TransformationSection } from './sections/TransformationSection'
import { IndustriesSection }     from './sections/IndustriesSection'
import { ServicesSection }       from './sections/ServicesSection'
import { Features }      from './sections/Features'
import { Testimonials }  from './sections/Testimonials'
import { FooterSection } from './sections/FooterSection'

export function HomePage() {
  return (
    <div style={{ overflowX: 'clip', fontFamily: "'Eloma Sans', 'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
      <Navbar />
      {/* Robot hero section - hidden for now, do not delete */}
      {/* <Hero3 /> */}
      <HeroVideo />
      <TransformationSection />
      <SecuritySection />
      <MicrosoftSection />
      <MarketingSection />
      <DevKineticSection />
      <IndustriesSection />
      <ServicesSection />
      <Features />
      <Testimonials />
      <FooterSection />
    </div>
  )
}
