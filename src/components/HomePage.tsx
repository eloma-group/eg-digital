import { Navbar }        from './layout/Navbar'
import { Hero1 }         from './sections/Hero1'
import { Hero2 }         from './sections/Hero2'
import { DevelopmentSection }    from './sections/DevelopmentSection'
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
    <div style={{ overflowX: 'hidden', fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <DevelopmentSection />
      <SecuritySection />
      <MicrosoftSection />
      <MarketingSection />
      <TransformationSection />
      <IndustriesSection />
      <ServicesSection />
      <Features />
      <Testimonials />
      <FooterSection />
    </div>
  )
}
