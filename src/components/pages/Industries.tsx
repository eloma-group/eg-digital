import {
  Briefcase, Cpu, Rocket, HeartHandshake, Stethoscope, Landmark, Factory,
  GraduationCap, Building2, Truck, Plane, Sprout, Hotel, UtensilsCrossed,
} from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from './_kit'

const INDUSTRIES = [
  { icon: Briefcase, name: 'Professional Services' },
  { icon: Cpu, name: 'IT' },
  { icon: Rocket, name: 'Startups & SMEs' },
  { icon: HeartHandshake, name: 'Non-Profit Organizations' },
  { icon: Stethoscope, name: 'Healthcare' },
  { icon: Landmark, name: 'Banking & Financial Services' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Building2, name: 'Real Estate' },
  { icon: Truck, name: 'Logistics & Supply Chain' },
  { icon: Plane, name: 'Travel & Tourism' },
  { icon: Sprout, name: 'Agriculture' },
  { icon: Hotel, name: 'Hospitality' },
  { icon: UtensilsCrossed, name: 'Food & Beverage' },
]

export function Industries() {
  return (
    <PageLayout>
      <style>{`
        .in-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .in-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .in-shell { max-width: 2440px; } }

        .in-hero { padding: clamp(40px,6vw,96px) 0 clamp(28px,3vw,48px); }
        .in-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em;
          line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .in-h1 span { color: ${GREEN}; }
        .in-intro { max-width: 640px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }

        .in-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(14px,1.6vw,24px);
          padding: clamp(28px,4vw,56px) 0 clamp(64px,9vw,130px); }
        @media (max-width: 1100px) { .in-grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 760px) { .in-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 420px) { .in-grid { grid-template-columns: 1fr; } }

        .in-card { display: flex; flex-direction: column; gap: 16px; background: #fff;
          border: 1px solid rgba(8,33,60,0.08); border-radius: 18px; padding: clamp(20px,2vw,30px);
          box-shadow: 0 4px 20px rgba(8,33,60,0.05); min-height: 140px;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; will-change: transform; }
        .in-card:hover { transform: translateY(-5px); box-shadow: 0 20px 46px rgba(8,33,60,0.12); border-color: rgba(60,185,140,0.3); }
        .in-ic { width: 46px; height: 46px; border-radius: 12px; background: rgba(60,185,140,0.12);
          display: flex; align-items: center; justify-content: center; color: ${GREEN}; }
        .in-name { font-size: clamp(15px,1.15vw,18px); font-weight: 800; letter-spacing: -0.02em;
          color: ${NAVY}; line-height: 1.2; margin: auto 0 0; }
      `}</style>

      <section className="in-shell in-hero">
        <Reveal>
          <Eyebrow>Industries</Eyebrow>
          <h1 className="in-h1">Solutions for<br />every <span>sector.</span></h1>
          <p className="in-intro">
            From healthcare to hospitality, we tailor digital transformation to the realities of your
            industry — its rules, its customers and its pace. Find yours below.
          </p>
        </Reveal>
      </section>

      <div className="in-shell in-grid">
        {INDUSTRIES.map((ind, i) => {
          const Ic = ind.icon
          return (
            <Reveal key={ind.name} delay={(i % 4) * 0.05}>
              <div className="in-card">
                <div className="in-ic"><Ic size={22} /></div>
                <div className="in-name">{ind.name}</div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <PageCTA eyebrow="Your Sector, Our Expertise" heading="Don't see" highlight="yours?" button="Let's talk" />
    </PageLayout>
  )
}
