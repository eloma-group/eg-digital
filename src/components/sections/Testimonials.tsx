import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

const TESTIMONIALS = [
  {
    quote: 'EG Digital transformed how we handle customer reviews. Our star rating went from 4.1 to 4.9 in just 90 days. The automated follow-ups feel personal, not spammy.',
    name: 'Sarah Mitchell',
    role: 'Head of E-commerce · NovaBrands AU',
    rating: 5,
    avatar: GREEN,
  },
  {
    quote: "The sales analytics dashboard is genuinely the best I've used. I can see exactly which products are underperforming and why. It's paid for itself ten times over.",
    name: 'James Okonkwo',
    role: 'Founder · TechDrop Store',
    rating: 5,
    avatar: NAVY,
  },
  {
    quote: 'Response Centre cut our customer message backlog from 200+ daily down to under 30. Our team finally has breathing room, and customers are happier than ever.',
    name: 'Priya Sharma',
    role: 'Operations Manager · LuxeLife Co.',
    rating: 5,
    avatar: '#6366f1',
  },
]

export function Testimonials() {
  return (
    <>
      <style>{`
        .testi-section {
          background: ${CREAM};
          padding: clamp(80px,10vw,140px) clamp(24px,4vw,64px);
        }
        .testi-inner { max-width: min(calc(100vw - 48px),1760px); margin: 0 auto; }
        .testi-header { text-align: center; margin-bottom: clamp(48px,5vw,72px); }
        .testi-eyebrow {
          font-size: clamp(10px,0.75vw,12px); font-weight: 800;
          letter-spacing: 2.5px; text-transform: uppercase; color: ${GREEN};
          margin-bottom: 14px;
        }
        .testi-h2 {
          font-size: clamp(40px,5vw,72px); font-weight: 900;
          color: ${NAVY}; text-transform: uppercase;
          letter-spacing: -0.04em; line-height: 0.94;
        }
        .testi-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: clamp(16px,2vw,28px);
        }
        .testi-card {
          background: #fff; border-radius: 24px;
          padding: clamp(24px,2.5vw,36px);
          box-shadow: 0 4px 24px rgba(8,33,60,0.06);
          border: 1px solid rgba(8,33,60,0.05);
          display: flex; flex-direction: column;
          transition: transform 0.25s, box-shadow 0.25s;
          will-change: transform;
        }
        .testi-card:hover { transform: translateY(-6px); box-shadow: 0 20px 52px rgba(8,33,60,0.11); }
        .testi-stars { display: flex; gap: 4px; margin-bottom: 18px; }
        .testi-openquote {
          font-size: 36px; font-weight: 900; color: ${GREEN};
          line-height: 1; margin-bottom: 8px; font-family: Georgia, serif;
        }
        .testi-quote {
          font-size: clamp(14px,1vw,16px); color: rgba(8,33,60,0.72);
          line-height: 1.75; flex: 1; margin-bottom: 24px;
        }
        .testi-author { display: flex; align-items: center; gap: 12px; }
        .testi-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; font-weight: 900; color: #fff; flex-shrink: 0;
        }
        .testi-name { font-size: 14px; font-weight: 800; color: ${NAVY}; }
        .testi-role { font-size: 12px; color: rgba(8,33,60,0.45); font-weight: 500; margin-top: 2px; }
        @media (max-width: 900px) {
          .testi-grid { grid-template-columns: 1fr; max-width: 540px; margin: 0 auto; }
        }
        @media (min-width: 1920px) { .testi-inner { max-width: 1900px; } }
        @media (min-width: 2560px) { .testi-inner { max-width: 2440px; } }
      `}</style>

      <section className="testi-section">
        <div className="testi-inner">
          <motion.div
            className="testi-header"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="testi-eyebrow">Happy Clients</div>
            <h2 className="testi-h2">What Our Clients Say</h2>
          </motion.div>

          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                className="testi-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              >
                <div className="testi-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={15} fill={GREEN} color={GREEN} />
                  ))}
                </div>
                <div className="testi-openquote">"</div>
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-author">
                  <div className="testi-avatar" style={{ background: t.avatar }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
