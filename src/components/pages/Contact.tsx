import { useState } from 'react'
import type { FormEvent } from 'react'
import { Phone, Mail, Clock, MapPin, ArrowUpRight } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, NAVY, GREEN, CREAM } from './_kit'

const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

// Quick-contact bar in the hero.
const QUICK = [
  { icon: Phone, label: 'Call us',  value: '1800 054 555',            href: 'tel:1800054555' },
  { icon: Mail,  label: 'Email us', value: 'connect@egdigital.com.au', href: 'mailto:connect@egdigital.com.au' },
  { icon: Clock, label: 'Hours',    value: 'Mon–Fri · 9–6 AEST',       href: undefined },
  { icon: MapPin,label: 'Head office', value: 'Sydney, Australia',     href: mapsUrl('60 Martin Place, Sydney 2000') },
]

const SERVICES = [
  'Web / App / SaaS Development', 'Microsoft & Dynamics 365', 'SEO & Digital Marketing',
  'Cyber Security', 'Cloud & Hosting', 'Something else',
]

// What-happens-next steps shown beside the form.
const STEPS = [
  { t: 'We read your brief', d: 'A real person — not a bot — reviews what you send within hours.' },
  { t: 'We scope & quote', d: 'You get a clear, honest plan and a fixed quote within one business day.' },
  { t: 'We kick off', d: 'Approve it and we start building — on time, on budget, no jargon.' },
]

// Office locations — each row opens the address in Google Maps in a new tab.
const AU_LOCATIONS = [
  { name: 'Sydney',    address: '60 Martin Place, Sydney 2000' },
  { name: 'Melbourne', address: '71 Gipps Street, Collingwood, Melbourne, VIC 3066' },
  { name: 'Brisbane',  address: '71 Eagle Street, Brisbane QLD 4000' },
  { name: 'Adelaide',  address: '2-3 Greenhill Road, Wayville, Adelaide 5034' },
  { name: 'Perth',     address: '300 Murray Street, Level 2 East, The Wentworth Building, Perth 6000' },
]
const INTL_LOCATIONS = [
  { name: 'United States',        address: '20 F St NW, Washington, DC 20001, USA' },
  { name: 'Canada',               address: 'First Canadian Place, 100 King St W #5600, Toronto, ON M5X 1C9, Canada' },
  { name: 'United Kingdom',       address: '107-111 Fleet St, London EC4A 2AB, United Kingdom' },
  { name: 'United Arab Emirates', address: 'Level 9 Sheikh Mohammed bin Rashid Blvd, Burj Khalifa, Downtown Dubai' },
  { name: 'India',                address: 'Tower A, Spaze iTech Park, 5th Floor, Sohna - Gurgaon Rd, Gurugram 122018' },
  { name: 'Singapore',            address: '1 Raffles Pl, #19-20 One Raffles Place Tower 2, Singapore 048616' },
  { name: 'China',                address: '18, 35/F Harbour Rd, Wan Chai, Hong Kong' },
]

const STATS = [
  { v: '12', l: 'Offices' },
  { v: '8',  l: 'Countries' },
  { v: '1',  l: 'Accountable team' },
]

function OfficeRow({ index, name, address }: { index: number; name: string; address: string }) {
  return (
    <a className="ct-office" href={mapsUrl(address)} target="_blank" rel="noopener noreferrer">
      <span className="ct-office-idx">{String(index).padStart(2, '0')}</span>
      <span className="ct-office-main">
        <span className="ct-office-city">{name}</span>
        <span className="ct-office-addr">{address}</span>
      </span>
      <span className="ct-office-go"><ArrowUpRight size={18} strokeWidth={2.4} /></span>
    </a>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const [region, setRegion] = useState<'au' | 'intl'>('au')

  const offices = region === 'au' ? AU_LOCATIONS : INTL_LOCATIONS

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

        /* ── Hero ── */
        .ct-hero { padding: clamp(48px,7vw,110px) 0 clamp(28px,3vw,40px); }
        .ct-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em;
          line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .ct-h1 span { color: ${GREEN}; }
        .ct-intro { max-width: 620px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8;
          color: rgba(8,33,60,0.58); margin: 22px 0 0; }

        .ct-bar { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(16px,2vw,40px);
          margin-top: clamp(40px,5vw,72px); padding-top: clamp(28px,3vw,40px); border-top: 1px solid rgba(8,33,60,0.12); }
        @media (max-width: 768px) { .ct-bar { grid-template-columns: 1fr 1fr; gap: 28px; } }
        @media (max-width: 420px) { .ct-bar { grid-template-columns: 1fr; } }
        .ct-bar-item { display: flex; flex-direction: column; gap: 10px; text-decoration: none; }
        .ct-bar-ic { width: 40px; height: 40px; border-radius: 11px; background: rgba(60,185,140,0.12);
          color: ${GREEN}; display: flex; align-items: center; justify-content: center; transition: background 0.2s, transform 0.2s; }
        a.ct-bar-item:hover .ct-bar-ic { background: rgba(60,185,140,0.2); transform: translateY(-2px); }
        .ct-bar-l { font-size: 11px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: rgba(8,33,60,0.4); }
        .ct-bar-v { font-size: clamp(15px,1.1vw,17px); font-weight: 700; color: ${NAVY}; transition: color 0.2s; }
        a.ct-bar-item:hover .ct-bar-v { color: ${GREEN}; }

        /* ── Form section ── */
        .ct-form-sec { padding: clamp(40px,6vw,96px) 0 clamp(56px,8vw,120px); }
        .ct-form-grid { display: grid; grid-template-columns: 0.82fr 1.18fr; gap: clamp(32px,4.5vw,80px); align-items: start; }
        @media (max-width: 900px) { .ct-form-grid { grid-template-columns: 1fr; gap: 40px; } }

        .ct-aside-h { font-size: clamp(28px,3.4vw,48px); font-weight: 900; letter-spacing: -0.035em;
          line-height: 1; color: ${NAVY}; text-transform: uppercase; margin: 14px 0 18px; }
        .ct-aside-p { font-size: clamp(14px,1.05vw,16px); line-height: 1.8; color: rgba(8,33,60,0.55);
          max-width: 440px; margin-bottom: clamp(24px,3vw,38px); }
        .ct-steps { display: flex; flex-direction: column; }
        .ct-step { display: grid; grid-template-columns: 34px 1fr; gap: 16px; padding: 18px 0;
          border-top: 1px solid rgba(8,33,60,0.1); align-items: start; }
        .ct-step:last-child { border-bottom: 1px solid rgba(8,33,60,0.1); }
        .ct-step-n { width: 30px; height: 30px; border-radius: 9px; display: flex; align-items: center; justify-content: center;
          background: ${NAVY}; color: #fff; font-size: 13px; font-weight: 900; }
        .ct-step:last-child .ct-step-n { background: ${GREEN}; color: ${NAVY}; }
        .ct-step-t { font-size: clamp(15px,1.2vw,18px); font-weight: 800; color: ${NAVY}; letter-spacing: -0.01em; }
        .ct-step-d { font-size: 13.5px; color: rgba(8,33,60,0.5); line-height: 1.6; margin-top: 3px; }

        .ct-form { position: relative; overflow: hidden; background: #fff; border: 1px solid rgba(8,33,60,0.08);
          border-radius: 24px; padding: clamp(26px,3vw,46px); box-shadow: 0 10px 40px rgba(8,33,60,0.07); }
        .ct-form::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, ${GREEN}, #2dd4a0); }
        .ct-form-h { font-size: clamp(24px,3vw,38px); font-weight: 900; letter-spacing: -0.03em;
          color: ${NAVY}; text-transform: uppercase; margin: 0 0 26px; line-height: 1; }
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
          font-family: inherit; min-height: 54px; transition: background 0.2s, transform 0.2s; }
        .ct-submit:hover { background: ${GREEN}; color: ${NAVY}; transform: translateY(-2px); }
        .ct-thanks { text-align: center; padding: clamp(28px,4vw,56px) 0; }
        .ct-thanks h3 { font-size: clamp(26px,3vw,40px); font-weight: 900; color: ${NAVY}; text-transform: uppercase; letter-spacing: -0.03em; margin: 0 0 12px; }
        .ct-thanks p { font-size: 16px; color: rgba(8,33,60,0.6); line-height: 1.7; margin: 0; }

        /* ── Locations / global presence ── */
        .ct-loc { position: relative; overflow: hidden; background: ${NAVY}; padding: clamp(64px,9vw,140px) 0; }
        .ct-loc-dots { position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 30px 30px;
          -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, #000 25%, transparent 80%);
          mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, #000 25%, transparent 80%); }
        .ct-loc-glow { position: absolute; bottom: -120px; right: 2%; width: 620px; height: 620px; border-radius: 50%;
          background: radial-gradient(circle, rgba(60,185,140,0.10) 0%, transparent 62%); pointer-events: none; }
        .ct-loc-inner { position: relative; z-index: 1; }
        .ct-loc-grid { display: grid; grid-template-columns: 0.86fr 1.14fr; gap: clamp(32px,5vw,96px); align-items: start; }
        @media (max-width: 980px) { .ct-loc-grid { grid-template-columns: 1fr; gap: clamp(36px,5vw,52px); } }

        /* left rail */
        .ct-loc-h2 { font-size: clamp(40px,6vw,92px); font-weight: 900; color: #fff; letter-spacing: -0.045em;
          line-height: 0.92; text-transform: uppercase; margin: 16px 0 0; }
        .ct-loc-h2 span { color: ${GREEN}; }
        .ct-loc-sub { font-size: clamp(14px,1.1vw,17px); color: rgba(255,255,255,0.5); line-height: 1.75; margin: 18px 0 0; max-width: 460px; }
        .ct-loc-stats { display: flex; gap: clamp(20px,3vw,40px); margin-top: clamp(28px,3.4vw,44px); flex-wrap: wrap; }
        .ct-loc-stat-v { font-size: clamp(30px,3.6vw,52px); font-weight: 900; color: #fff; letter-spacing: -0.04em; line-height: 1; }
        .ct-loc-stat-l { font-size: 10px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-top: 8px; }
        .ct-loc-cta { display: inline-flex; align-items: center; gap: 10px; margin-top: clamp(28px,3.4vw,44px);
          background: ${GREEN}; color: ${NAVY}; border-radius: 100px; padding: 15px 30px;
          font-size: 15px; font-weight: 800; text-decoration: none; min-height: 52px;
          transition: transform 0.2s, box-shadow 0.2s; }
        .ct-loc-cta:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(60,185,140,0.35); }

        /* right — tabbed directory */
        .ct-tabs { display: inline-flex; gap: 4px; padding: 5px; border-radius: 100px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); margin-bottom: clamp(20px,2.4vw,30px); }
        .ct-tab { appearance: none; border: none; cursor: pointer; font-family: inherit;
          padding: 10px 22px; border-radius: 100px; font-size: 13px; font-weight: 800; letter-spacing: 0.4px;
          color: rgba(255,255,255,0.62); background: transparent; min-height: 42px;
          display: inline-flex; align-items: center; gap: 8px; transition: color 0.2s, background 0.2s; }
        .ct-tab:hover { color: #fff; }
        .ct-tab[data-active="true"] { background: #fff; color: ${NAVY}; }
        .ct-tab-count { font-size: 11px; font-weight: 800; opacity: 0.55; }

        .ct-office-list { display: flex; flex-direction: column; }
        .ct-office { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: clamp(14px,2vw,28px);
          padding: clamp(16px,1.8vw,22px) clamp(8px,1.4vw,18px); text-decoration: none;
          border-top: 1px solid rgba(255,255,255,0.09); transition: background 0.22s, padding 0.22s; }
        .ct-office:last-child { border-bottom: 1px solid rgba(255,255,255,0.09); }
        .ct-office:hover { background: rgba(255,255,255,0.04); padding-left: clamp(14px,1.8vw,24px); }
        .ct-office-idx { font-size: 12px; font-weight: 900; color: rgba(255,255,255,0.3); letter-spacing: 0.5px; transition: color 0.22s; }
        .ct-office:hover .ct-office-idx { color: ${GREEN}; }
        .ct-office-main { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .ct-office-city { font-size: clamp(18px,1.7vw,24px); font-weight: 800; color: #fff; letter-spacing: -0.02em; line-height: 1.1; }
        .ct-office-addr { font-size: 13px; color: rgba(255,255,255,0.46); line-height: 1.5; }
        .ct-office-go { display: flex; flex-shrink: 0; width: 42px; height: 42px; border-radius: 50%;
          align-items: center; justify-content: center; color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.14); transition: color 0.22s, border-color 0.22s, background 0.22s, transform 0.22s; }
        .ct-office:hover .ct-office-go { color: ${NAVY}; background: ${GREEN}; border-color: ${GREEN}; transform: translate(2px,-2px); }
      `}</style>

      {/* ── Hero ── */}
      <section className="ct-shell ct-hero">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="ct-h1">Let's build<br />something <span>great.</span></h1>
          <p className="ct-intro">
            Tell us about your project, your timeline and your goals — we'll come back within one
            business day with a clear, honest next step. No pressure, no jargon.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="ct-bar">
            {QUICK.map(q => {
              const Ic = q.icon
              const inner = (
                <>
                  <div className="ct-bar-ic"><Ic size={19} /></div>
                  <div className="ct-bar-l">{q.label}</div>
                  <div className="ct-bar-v">{q.value}</div>
                </>
              )
              return q.href
                ? <a key={q.label} className="ct-bar-item" href={q.href} {...(q.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
                : <div key={q.label} className="ct-bar-item">{inner}</div>
            })}
          </div>
        </Reveal>
      </section>

      {/* ── Form + steps ── */}
      <section className="ct-shell ct-form-sec">
        <div className="ct-form-grid">
          <Reveal>
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="ct-aside-h">From hello<br />to handover.</h2>
              <p className="ct-aside-p">
                Every enquiry is handled by the people who'll actually do the work. Here's exactly
                what happens after you hit send.
              </p>
              <div className="ct-steps">
                {STEPS.map((s, i) => (
                  <div key={s.t} className="ct-step">
                    <div className="ct-step-n">{i + 1}</div>
                    <div>
                      <div className="ct-step-t">{s.t}</div>
                      <div className="ct-step-d">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
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
                      <input id="ct-phone" name="phone" type="tel" placeholder="04 ..." />
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
      </section>

      {/* ── Global presence ── */}
      <section className="ct-loc">
        <div className="ct-loc-dots" aria-hidden="true" />
        <div className="ct-loc-glow" aria-hidden="true" />
        <div className="ct-shell ct-loc-inner">
          <div className="ct-loc-grid">
            {/* Left rail */}
            <Reveal>
              <div>
                <Eyebrow light>Our Offices</Eyebrow>
                <h2 className="ct-loc-h2">One team,<br /><span>worldwide.</span></h2>
                <p className="ct-loc-sub">
                  Headquartered in Sydney with offices and partners across the globe — wherever you
                  are, there's a team accountable for your project.
                </p>
                <div className="ct-loc-stats">
                  {STATS.map(s => (
                    <div key={s.l}>
                      <div className="ct-loc-stat-v">{s.v}</div>
                      <div className="ct-loc-stat-l">{s.l}</div>
                    </div>
                  ))}
                </div>
                <a className="ct-loc-cta" href="tel:1800054555">
                  <Phone size={17} strokeWidth={2.4} />
                  Call 1800 054 555
                </a>
              </div>
            </Reveal>

            {/* Right — tabbed directory */}
            <Reveal delay={0.1}>
              <div>
                <div className="ct-tabs" role="tablist">
                  <button
                    role="tab" aria-selected={region === 'au'} data-active={region === 'au'}
                    className="ct-tab" onClick={() => setRegion('au')}
                  >
                    Australia <span className="ct-tab-count">{AU_LOCATIONS.length}</span>
                  </button>
                  <button
                    role="tab" aria-selected={region === 'intl'} data-active={region === 'intl'}
                    className="ct-tab" onClick={() => setRegion('intl')}
                  >
                    International <span className="ct-tab-count">{INTL_LOCATIONS.length}</span>
                  </button>
                </div>

                <div className="ct-office-list" key={region}>
                  {offices.map((o, i) => (
                    <OfficeRow key={o.name} index={i + 1} {...o} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
