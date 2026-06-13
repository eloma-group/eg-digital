import { useState } from 'react'
import type { FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, NAVY, GREEN, CREAM } from './_kit'

const METHODS = [
  { icon: Phone, label: 'Call us', value: '+61 1800 054 555', href: 'tel:+611800054555' },
  { icon: Mail, label: 'Email us', value: 'connect@egdigital.com.au', href: 'mailto:connect@egdigital.com.au' },
  { icon: MapPin, label: 'Visit us', value: 'Sydney, Australia', href: undefined },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri · 9am–6pm AEST', href: undefined },
]

const SERVICES = [
  'Web / App / SaaS Development', 'Microsoft & Dynamics 365', 'SEO & Digital Marketing',
  'Cyber Security', 'Cloud & Hosting', 'Something else',
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageLayout>
      <style>{`
        .ct-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .ct-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .ct-shell { max-width: 2440px; } }

        .ct-hero { padding: clamp(40px,6vw,96px) 0 clamp(28px,3vw,44px); }
        .ct-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em;
          line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .ct-h1 span { color: ${GREEN}; }
        .ct-intro { max-width: 600px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8;
          color: rgba(8,33,60,0.58); margin: 22px 0 0; }

        .ct-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: clamp(32px,5vw,88px);
          padding: clamp(32px,5vw,72px) 0 clamp(64px,9vw,140px); align-items: start; }
        @media (max-width: 900px) { .ct-grid { grid-template-columns: 1fr; } }

        .ct-methods { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(14px,1.6vw,22px); }
        @media (max-width: 420px) { .ct-methods { grid-template-columns: 1fr; } }
        .ct-method { display: flex; flex-direction: column; gap: 12px; padding: clamp(20px,2vw,28px);
          background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 18px;
          box-shadow: 0 4px 24px rgba(8,33,60,0.05); text-decoration: none; transition: transform 0.25s, box-shadow 0.25s; will-change: transform; }
        a.ct-method:hover { transform: translateY(-4px); box-shadow: 0 18px 44px rgba(8,33,60,0.11); }
        .ct-method-ic { width: 44px; height: 44px; border-radius: 12px; background: rgba(60,185,140,0.12);
          display: flex; align-items: center; justify-content: center; color: ${GREEN}; }
        .ct-method-lbl { font-size: 12px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(8,33,60,0.42); }
        .ct-method-val { font-size: clamp(15px,1.1vw,17px); font-weight: 700; color: ${NAVY}; }

        .ct-form { background: #fff; border: 1px solid rgba(8,33,60,0.08); border-radius: 24px;
          padding: clamp(24px,3vw,44px); box-shadow: 0 10px 40px rgba(8,33,60,0.07); }
        .ct-form-h { font-size: clamp(24px,3vw,38px); font-weight: 900; letter-spacing: -0.03em;
          color: ${NAVY}; text-transform: uppercase; margin: 0 0 24px; line-height: 1; }
        .ct-field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
        .ct-field label { font-size: 12px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; color: rgba(8,33,60,0.5); }
        .ct-field input, .ct-field textarea, .ct-field select {
          font-family: inherit; font-size: 15px; color: ${NAVY}; background: ${CREAM};
          border: 1px solid rgba(8,33,60,0.12); border-radius: 12px; padding: 14px 16px; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s; }
        .ct-field input:focus, .ct-field textarea:focus, .ct-field select:focus {
          border-color: ${GREEN}; box-shadow: 0 0 0 3px rgba(60,185,140,0.16); }
        .ct-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 540px) { .ct-row2 { grid-template-columns: 1fr; } }
        .ct-submit { width: 100%; margin-top: 8px; background: ${NAVY}; color: #fff; border: none;
          border-radius: 100px; padding: 16px 24px; font-size: 15px; font-weight: 800; cursor: pointer;
          font-family: inherit; min-height: 54px; transition: background 0.2s; }
        .ct-submit:hover { background: ${GREEN}; color: ${NAVY}; }
        .ct-thanks { text-align: center; padding: clamp(28px,4vw,56px) 0; }
        .ct-thanks h3 { font-size: clamp(26px,3vw,40px); font-weight: 900; color: ${NAVY}; text-transform: uppercase; letter-spacing: -0.03em; margin: 0 0 12px; }
        .ct-thanks p { font-size: 16px; color: rgba(8,33,60,0.6); line-height: 1.7; margin: 0; }
      `}</style>

      <section className="ct-shell ct-hero">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="ct-h1">Let's build<br />something <span>great.</span></h1>
          <p className="ct-intro">
            Tell us about your project, your timeline and your goals — we'll come back within one
            business day with a clear, honest next step. No pressure, no jargon.
          </p>
        </Reveal>
      </section>

      <div className="ct-shell ct-grid">
        <Reveal>
          <div className="ct-methods">
            {METHODS.map(m => {
              const Ic = m.icon
              const inner = (
                <>
                  <div className="ct-method-ic"><Ic size={20} /></div>
                  <div className="ct-method-lbl">{m.label}</div>
                  <div className="ct-method-val">{m.value}</div>
                </>
              )
              return m.href
                ? <a key={m.label} className="ct-method" href={m.href}>{inner}</a>
                : <div key={m.label} className="ct-method">{inner}</div>
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="ct-form">
            {sent ? (
              <div className="ct-thanks">
                <h3>Thank you.</h3>
                <p>Your message is on its way. We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 className="ct-form-h">Start a project</h2>
                <div className="ct-row2">
                  <div className="ct-field">
                    <label htmlFor="ct-name">Name</label>
                    <input id="ct-name" name="name" type="text" required placeholder="Jane Smith" />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-company">Company</label>
                    <input id="ct-company" name="company" type="text" placeholder="Acme Co." />
                  </div>
                </div>
                <div className="ct-row2">
                  <div className="ct-field">
                    <label htmlFor="ct-email">Email</label>
                    <input id="ct-email" name="email" type="email" required placeholder="jane@acme.com" />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-phone">Phone</label>
                    <input id="ct-phone" name="phone" type="tel" placeholder="+61 ..." />
                  </div>
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-service">What do you need?</label>
                  <select id="ct-service" name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-msg">Tell us more</label>
                  <textarea id="ct-msg" name="message" rows={4} placeholder="A few lines about your project, timeline and budget." />
                </div>
                <button type="submit" className="ct-submit">Send message</button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </PageLayout>
  )
}
