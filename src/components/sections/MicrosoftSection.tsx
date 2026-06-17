import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

function fadeUp(delay = 0) {
  return {
    initial:     { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport:    { once: true, margin: '-60px' },
    transition:  { duration: 0.9, ease: EASE, delay },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// MICROSOFT SECTION - Left text + Image with Microsoft product overlay
// Theme: Microsoft Cloud Solutions (light background)
// ─────────────────────────────────────────────────────────────────────────────
export function MicrosoftSection() {
  const navigate = useNavigate()
  const MS_CHIPS = [
    { label:'Microsoft 365', sub:'Productivity Suite',   color:'#0078d4', icon:'365', pos:'top-left'    },
    { label:'Teams',         sub:'Real-time Collab',     color:'#4b53bc', icon:'T',   pos:'top-right'   },
    { label:'Azure',         sub:'Cloud Infrastructure', color:'#0072c6', icon:'Az',  pos:'mid-right'   },
    { label:'Dynamics 365',  sub:'CRM & ERP',            color:'#e8732a', icon:'D',   pos:'bot-right'   },
    { label:'Power Platform',sub:'Low-Code Apps',        color:'#742774', icon:'P',   pos:'bot-left'    },
    { label:'SharePoint',    sub:'Intranet & Docs',      color:'#038387', icon:'S',   pos:'mid-left'    },
  ]

  return (
    <>
      <style>{`
        @keyframes hv3-float-a { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
        @keyframes hv3-float-b { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }

        .hv3-section {
          min-height:100svh; background:#fff;
          display:flex; align-items:center;
          padding:clamp(90px,11vh,140px) clamp(24px,4vw,64px);
          position:relative; overflow:hidden;
        }
        .hv3-bloom {
          position:absolute; pointer-events:none; z-index:0; border-radius:50%;
          top:-10%; right:-6%;
          width:clamp(300px,42vw,620px); height:clamp(300px,42vw,620px);
          background:radial-gradient(circle, rgba(0,114,196,0.07) 0%, transparent 68%);
        }
        .hv3-inner {
          max-width:min(calc(100vw - 48px),1760px);
          margin:0 auto; width:100%; position:relative; z-index:1;
          display:grid; grid-template-columns:1fr 1.12fr;
          align-items:center; gap:clamp(48px,5.5vw,88px);
        }

        /* left */
        .hv3-partner-pill {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(0,120,212,0.07); border:1px solid rgba(0,120,212,0.16);
          border-radius:100px; padding:6px 14px 6px 8px;
          margin-bottom:clamp(18px,2.2vw,28px);
        }
        .hv3-cta-row { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:clamp(22px,2.8vw,36px); }
        .hv3-btn-p {
          background:${NAVY}; color:#fff; border:none;
          padding:14px 30px; border-radius:100px; font-size:14px; font-weight:700;
          cursor:pointer; font-family:inherit; min-height:50px;
          display:inline-flex; align-items:center; gap:10px;
          transition:background .22s,transform .18s; will-change:transform;
        }
        .hv3-btn-p:hover { background:${GREEN}; transform:translateY(-2px); }
        .hv3-btn-g {
          background:transparent; color:${NAVY};
          border:1.5px solid rgba(8,33,60,0.16); padding:14px 30px; border-radius:100px;
          font-size:14px; font-weight:700; cursor:pointer; font-family:inherit; min-height:50px;
          transition:border-color .22s;
        }
        .hv3-btn-g:hover { border-color:rgba(8,33,60,0.45); }
        .hv3-stat-row {
          display:flex; gap:clamp(20px,3vw,36px);
          padding:clamp(16px,2vw,22px) 0;
          border-top:1px solid rgba(8,33,60,0.07);
          border-bottom:1px solid rgba(8,33,60,0.07);
        }
        .hv3-stat-v { font-size:clamp(20px,2vw,28px); font-weight:900; color:${NAVY}; letter-spacing:-0.04em; line-height:1; }
        .hv3-stat-l { font-size:10px; font-weight:700; color:rgba(8,33,60,0.36); text-transform:uppercase; letter-spacing:1.2px; margin-top:3px; }

        /* right - photo + chips */
        .hv3-right { position:relative; padding:28px 32px 28px 8px; }
        .hv3-photo {
          border-radius:clamp(18px,2vw,26px); overflow:hidden;
          aspect-ratio:4/3;
          box-shadow:0 20px 64px rgba(8,33,60,0.14);
          border:1px solid rgba(8,33,60,0.06);
        }
        .hv3-photo img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s cubic-bezier(0.16,1,0.3,1); }
        .hv3-photo:hover img { transform:scale(1.05); }
        .hv3-ms-badge { transition:transform .25s cubic-bezier(0.16,1,0.3,1), box-shadow .25s; }
        .hv3-ms-badge:hover { transform:translateX(-50%) translateY(-3px); box-shadow:0 10px 30px rgba(8,33,60,0.16); }
        .hv3-chip { transition:border-color .22s, box-shadow .22s; cursor:default; }
        .hv3-chip:hover { border-color:rgba(60,185,140,0.45); box-shadow:0 12px 30px rgba(8,33,60,0.18); }

        /* MS partner badge - top-center overlap */
        .hv3-ms-badge {
          position:absolute; top:8px; left:50%; transform:translateX(-50%);
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:100px; padding:10px 22px;
          display:flex; align-items:center; gap:11px;
          box-shadow:0 4px 20px rgba(8,33,60,0.1);
          white-space:nowrap; z-index:3;
        }

        /* product chips */
        .hv3-chip {
          position:absolute; z-index:3;
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:14px; padding:11px 15px;
          display:flex; align-items:center; gap:11px;
          box-shadow:0 6px 22px rgba(8,33,60,0.1);
          will-change:transform;
        }
        .hv3-chip-ico {
          width:34px; height:34px; border-radius:8px;
          display:flex; align-items:center; justify-content:center;
          font-size:11px; font-weight:900; color:#fff; flex-shrink:0;
        }
        /* chip positions */
        .hv3-chip-tl { top:50px; left:-16px; animation:hv3-float-b 5s ease-in-out infinite; }
        .hv3-chip-tr { top:50px; right:-4px; animation:hv3-float-a 4.6s ease-in-out infinite 0.4s; }
        .hv3-chip-ml { top:calc(28px + 30%); left:-20px; animation:hv3-float-a 5.4s ease-in-out infinite 0.8s; }
        .hv3-chip-mr { top:calc(28px + 30%); right:-4px; animation:hv3-float-b 4.8s ease-in-out infinite 1.2s; }
        .hv3-chip-bl { bottom:14px; left:-16px; animation:hv3-float-a 5.2s ease-in-out infinite 1.6s; }
        .hv3-chip-br { bottom:14px; right:-4px; animation:hv3-float-b 4.4s ease-in-out infinite 2s; }

        @media (max-width:900px) {
          .hv3-inner { grid-template-columns:1fr; }
          .hv3-right { padding:28px 0; }
          .hv3-chip { display:none; }
          .hv3-ms-badge { position:static; transform:none; margin-bottom:12px; }
        }
        @media (min-width:1920px) { .hv3-inner { max-width:1900px; } }
        @media (min-width:2560px) { .hv3-inner { max-width:2440px; } }
      `}</style>

      <section className="hv3-section">
        <div className="hv3-bloom" aria-hidden="true" />

        <div className="hv3-inner">
          {/* Left */}
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="hv3-partner-pill">
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, width:14, height:14, flexShrink:0 }}>
                  {['#f25022','#7fba00','#00a4ef','#ffb900'].map(c => (
                    <span key={c} style={{ display:'block', background:c, borderRadius:0.5 }} />
                  ))}
                </div>
                <span style={{ fontSize:11, fontWeight:800, letterSpacing:'1.5px', textTransform:'uppercase', color:'rgba(8,33,60,0.52)' }}>
                  Certified Microsoft Partner
                </span>
              </div>
            </motion.div>

            <motion.h2 {...fadeUp(0.07)} style={{
              fontSize:'clamp(52px,7.5vw,112px)', fontWeight:900,
              letterSpacing:'-0.045em', lineHeight:0.88,
              textTransform:'uppercase', color:NAVY,
              marginBottom:'clamp(18px,2.2vw,28px)',
            }}>
              Run Your<br />
              Business<br />
              <span style={{ color:'#0078d4' }}>On Cloud.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.14)} style={{
              fontSize:'clamp(15px,1.15vw,18px)', color:'rgba(8,33,60,0.52)',
              lineHeight:1.82, maxWidth:460, marginBottom:'clamp(24px,2.8vw,40px)',
            }}>
              As a certified Microsoft Partner, we deploy and manage the full ecosystem -
              365, Dynamics, Teams, and Azure - so your team collaborates smarter from day one.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="hv3-cta-row">
              <button className="hv3-btn-p" onClick={() => navigate('/solutions')}>
                Explore Microsoft Services
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <button className="hv3-btn-g" onClick={() => navigate('/contact')}>Get a Quote</button>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="hv3-stat-row">
              {[{ v:'25+', l:'Deployments' }, { v:'6', l:'MS Products' }, { v:'4.2★', l:'Client Rating' }].map(s => (
                <div key={s.l}><div className="hv3-stat-v">{s.v}</div><div className="hv3-stat-l">{s.l}</div></div>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo + floating chips */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={{ duration:1.0, ease:EASE, delay:0.18 }}
            className="hv3-right"
          >
            {/* Partner badge top */}
            <div className="hv3-ms-badge">
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3, width:20, height:20, flexShrink:0 }}>
                {['#f25022','#7fba00','#00a4ef','#ffb900'].map(c => (
                  <span key={c} style={{ display:'block', background:c, borderRadius:1 }} />
                ))}
              </div>
              <span style={{ fontSize:13, fontWeight:800, color:NAVY, letterSpacing:'0.3px' }}>Microsoft Solutions Partner</span>
            </div>

            {/* Photo */}
            <div className="hv3-photo">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=675&q=80&fit=crop"
                alt="Team working on Microsoft cloud solutions"
                loading="lazy" decoding="async"
              />
            </div>

            {/* Floating product chips */}
            {MS_CHIPS.map((chip, i) => {
              const cls = `hv3-chip hv3-chip-${['tl','tr','ml','mr','bl','br'][i]}`
              return (
                <motion.div
                  key={chip.label}
                  className={cls}
                  initial={{ opacity:0, scale:0.85 }}
                  whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once:true }}
                  transition={{ duration:0.5, ease:EASE, delay:0.32 + i * 0.07 }}
                >
                  <div className="hv3-chip-ico" style={{ background:chip.color }}>{chip.icon}</div>
                  <div>
                    <div style={{ fontSize:13, fontWeight:700, color:NAVY, lineHeight:1.2 }}>{chip.label}</div>
                    <div style={{ fontSize:10.5, color:'rgba(8,33,60,0.42)', marginTop:1 }}>{chip.sub}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}
