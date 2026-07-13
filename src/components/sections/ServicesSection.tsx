import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// As the viewport (or browser zoom) shrinks, the floating cards would slide
// under the centre column. Instead of hiding them we scale them down so they
// stay visible and tuck into their outer corner. Text size is untouched.
function useCardScale() {
  const [cs, setCs] = useState(1)
  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth
      const center = Math.min(vw - 48, 800)        // centre column width
      const centerLeft = (vw - center) / 2          // gap from edge to centre column
      const cardW = Math.min(Math.max(0.28 * vw, 270), 370)
      const edge = 0.03 * vw                         // card sits 3% from the edge
      const gap = 14                                 // breathing room before the text
      const s = (centerLeft - edge - gap) / cardW    // corner-anchored fit scale
      setCs(Math.max(0.3, Math.min(1, s)))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])
  return cs
}

function fadeUp(delay = 0) {
  return {
    initial:     { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport:    { once: true, margin: '-60px' },
    transition:  { duration: 0.9, ease: EASE, delay },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES SECTION - Center content + 4 floating service cards
// Theme: All four service pillars united (light background, premium)
// ─────────────────────────────────────────────────────────────────────────────
export function ServicesSection() {
  const navigate = useNavigate()
  const cardScale = useCardScale()
  const cards = [
    {
      id:'ms', label:'Microsoft Solutions',
      icon:<div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3.5, width:34, height:34 }}>{['#f25022','#7fba00','#00a4ef','#ffb900'].map(c=><span key={c} style={{ display:'block', background:c, borderRadius:2.5 }}/>)}</div>,
      items:['Microsoft 365', 'Dynamics CRM', 'Azure Cloud'],
      stat:'22 Clients', statColor:'#0078d4',
      color:'#0078d4', pos:{ top:'10%', left:'3%' }, anim:'hv7-float-a', dur:'4.4s', delay:'0s',
    },
    {
      id:'dev', label:'Digital Development',
      icon:<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M8 9L4 12L8 15M16 9L20 12L16 15M13 6L11 18" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      items:['Web & App Build', 'Custom Software', 'Shopify / React'],
      stat:'50+ Delivered', statColor:GREEN,
      color:GREEN, pos:{ top:'8%', right:'3%' }, anim:'hv7-float-b', dur:'5.2s', delay:'-1.4s',
    },
    {
      id:'sec', label:'AI Cybersecurity',
      icon:<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="12" rx="1.5" stroke="#ef4444" strokeWidth="1.8"/><path d="M8 20H16M12 16V20" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round"/><rect x="9.4" y="8.2" width="5.2" height="4.2" rx="0.8" stroke="#ef4444" strokeWidth="1.6"/><path d="M10.2 8.2V7a1.8 1.8 0 0 1 3.6 0v1.2" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round"/></svg>,
      items:['MS Defender XDR', 'Zero-Trust Arch', '24/7 Monitoring'],
      stat:'178+ Blocked/day', statColor:'#ef4444',
      color:'#ef4444', pos:{ bottom:'12%', left:'3%' }, anim:'hv7-float-c', dur:'4.8s', delay:'-0.7s',
    },
    {
      id:'mkt', label:'Growth Marketing',
      icon:<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M3 17L7 13L11 15L17 8L21 11" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="21" cy="11" r="1.5" fill="#d97706"/></svg>,
      items:['Organic SEO', 'Google / Meta Ads', 'Brand & Creative'],
      stat:'+284% Traffic', statColor:'#d97706',
      color:'#d97706', pos:{ bottom:'10%', right:'3%' }, anim:'hv7-float-d', dur:'5.6s', delay:'-2.2s',
    },
  ]

  return (
    <>
      <style>{`
        @keyframes hv7-float-a { 0%,100%{transform:translateY(0) rotate(-1.5deg) scale(var(--cs,1));} 50%{transform:translateY(-12px) rotate(-1.5deg) scale(var(--cs,1));} }
        @keyframes hv7-float-b { 0%,100%{transform:translateY(0) rotate(1.5deg) scale(var(--cs,1));}  50%{transform:translateY(-16px) rotate(1.5deg) scale(var(--cs,1));}  }
        @keyframes hv7-float-c { 0%,100%{transform:translateY(0) rotate(-1deg) scale(var(--cs,1));}   50%{transform:translateY(-9px) rotate(-1deg) scale(var(--cs,1));}    }
        @keyframes hv7-float-d { 0%,100%{transform:translateY(0) rotate(2deg) scale(var(--cs,1));}    50%{transform:translateY(-14px) rotate(2deg) scale(var(--cs,1));}    }
        @keyframes hv7-ring-spin { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }

        .hv7-section {
          min-height:100svh; background:#fff;
          display:flex; align-items:center; justify-content:center;
          padding:clamp(90px,11vh,140px) clamp(24px,4vw,64px);
          position:relative; overflow:hidden;
        }
        /* subtle dot grid */
        .hv7-section::after {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image:radial-gradient(circle, rgba(8,33,60,0.06) 1px, transparent 1px);
          background-size:28px 28px;
          mask-image:radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%);
          -webkit-mask-image:radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%);
        }
        /* soft blooms */
        .hv7-bloom-a {
          position:absolute; top:-10%; left:10%; pointer-events:none; z-index:0;
          width:clamp(260px,36vw,520px); height:clamp(260px,36vw,520px); border-radius:50%;
          background:radial-gradient(circle, rgba(60,185,140,0.09) 0%, transparent 65%);
        }
        .hv7-bloom-b {
          position:absolute; bottom:-10%; right:8%; pointer-events:none; z-index:0;
          width:clamp(220px,30vw,440px); height:clamp(220px,30vw,440px); border-radius:50%;
          background:radial-gradient(circle, rgba(8,33,60,0.04) 0%, transparent 65%);
        }

        /* decorative concentric ring behind center */
        .hv7-ring {
          position:absolute; top:50%; left:50%; border-radius:50%;
          border:1px dashed rgba(8,33,60,0.07);
          transform:translate(-50%,-50%);
          pointer-events:none; z-index:1;
        }

        .hv7-center {
          position:relative; z-index:2;
          max-width:min(calc(100vw - 48px), 800px);
          text-align:center; margin:0 auto;
        }

        /* floating cards */
        .hv7-card {
          position:absolute; background:#fff;
          border:1px solid rgba(8,33,60,0.07); border-radius:24px;
          padding:28px 30px;
          box-shadow:0 8px 36px rgba(8,33,60,0.1);
          width:clamp(270px,28vw,370px);
          will-change:transform; z-index:3;
          transform-origin:var(--ox,center) var(--oy,center);
          transition:border-color .25s, box-shadow .25s;
        }
        .hv7-card:hover { border-color:rgba(60,185,140,0.4); box-shadow:0 18px 54px rgba(8,33,60,0.2); }
        .hv7-card-hd { display:flex; align-items:center; gap:13px; margin-bottom:16px; }
        .hv7-card-ico {
          width:54px; height:54px; border-radius:15px;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
          transition:transform .25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .hv7-card:hover .hv7-card-ico { transform:scale(1.12) rotate(-4deg); }
        .hv7-card-title { font-size:17.5px; font-weight:800; color:${NAVY}; line-height:1.25; }
        .hv7-card-items { display:flex; flex-direction:column; gap:8px; margin-bottom:16px; }
        .hv7-card-item {
          display:flex; align-items:center; gap:9px;
          font-size:15.5px; font-weight:600; color:rgba(8,33,60,0.52);
        }
        .hv7-card-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
        .hv7-card-stat {
          font-size:15px; font-weight:800; letter-spacing:'0.8px';
          padding:7px 15px; border-radius:100px;
        }

        /* center divider */
        .hv7-divider { width:clamp(60px,8vw,100px); height:2px;
          background:linear-gradient(90deg, transparent, ${GREEN}, transparent);
          margin:clamp(18px,2.2vw,28px) auto; }

        .hv7-cta-row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .hv7-btn-p {
          background:${NAVY}; color:#fff; border:none;
          padding:16px 38px; border-radius:100px; font-size:15px; font-weight:700;
          cursor:pointer; font-family:inherit; min-height:54px;
          display:inline-flex; align-items:center; gap:10px;
          transition:background .22s,transform .18s; will-change:transform;
        }
        .hv7-btn-p:hover { background:${GREEN}; transform:translateY(-2px); }
        .hv7-btn-g {
          background:transparent; color:${NAVY};
          border:1.5px solid rgba(8,33,60,0.16); padding:16px 38px; border-radius:100px;
          font-size:15px; font-weight:700; cursor:pointer; font-family:inherit; min-height:54px;
          transition:border-color .22s;
        }
        .hv7-btn-g:hover { border-color:rgba(8,33,60,0.45); }

        @media (max-width:1100px) { .hv7-card { display:none; } }
      `}</style>

      <section className="hv7-section" style={{ ['--cs' as string]: cardScale } as React.CSSProperties}>
        <div className="hv7-bloom-a" aria-hidden="true" />
        <div className="hv7-bloom-b" aria-hidden="true" />

        {/* Concentric rings */}
        {[180, 280, 380].map(r => (
          <div key={r} className="hv7-ring" style={{ width:r*2, height:r*2 }} aria-hidden="true" />
        ))}

        {/* Floating cards */}
        {cards.map((card, i) => {
          const p = card.pos as Record<string, string | undefined>
          const ox = 'right' in p ? 'right' : 'left'
          const oy = 'bottom' in p ? 'bottom' : 'top'
          return (
          <motion.div
            key={card.id}
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.8, ease:EASE, delay:0.4+i*0.1 }}
            className="hv7-card"
            style={{ ...card.pos, ['--ox' as string]:ox, ['--oy' as string]:oy, animation:`${card.anim} ${card.dur} ease-in-out infinite`, animationDelay:card.delay } as React.CSSProperties}
          >
            <div className="hv7-card-hd">
              <div className="hv7-card-ico" style={{ background:`${card.color}14` }}>{card.icon}</div>
              <span className="hv7-card-title">{card.label}</span>
            </div>
            <div className="hv7-card-items">
              {card.items.map(item => (
                <div key={item} className="hv7-card-item">
                  <div className="hv7-card-dot" style={{ background:card.color }} />
                  {item}
                </div>
              ))}
            </div>
            <div className="hv7-card-stat" style={{ color:card.statColor, background:`${card.statColor}10`, border:`1px solid ${card.statColor}25` }}>
              {card.stat}
            </div>
          </motion.div>
          )
        })}

        {/* Center content */}
        <div className="hv7-center">
          <motion.div {...fadeUp(0)} style={{ marginBottom:18 }}>
            <span style={{
              display:'inline-flex', alignItems:'center', gap:8,
              fontSize:'clamp(10px,.75vw,12px)', fontWeight:800,
              letterSpacing:'2.5px', textTransform:'uppercase', color:GREEN,
            }}>
              <span style={{ width:22, height:2, background:GREEN, borderRadius:1 }} />
              One Partner. Every Solution.
              <span style={{ width:22, height:2, background:GREEN, borderRadius:1 }} />
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.07)} style={{ fontSize:'clamp(52px,8vw,120px)', fontWeight:900, letterSpacing:'-0.045em', lineHeight:0.9, textTransform:'uppercase', color:NAVY, marginBottom:0 }}>Transform.</motion.h1>
          <motion.h1 {...fadeUp(0.11)} style={{ fontSize:'clamp(52px,8vw,120px)', fontWeight:900, letterSpacing:'-0.045em', lineHeight:0.9, textTransform:'uppercase', color:GREEN, marginBottom:0 }}>Build.</motion.h1>
          <motion.h1 {...fadeUp(0.15)} style={{ fontSize:'clamp(52px,8vw,120px)', fontWeight:900, letterSpacing:'-0.045em', lineHeight:0.9, textTransform:'uppercase', color:NAVY, marginBottom:0 }}>Protect.</motion.h1>
          <motion.h1 {...fadeUp(0.19)} style={{ fontSize:'clamp(52px,8vw,120px)', fontWeight:900, letterSpacing:'-0.045em', lineHeight:0.9, textTransform:'uppercase', color:GREEN, marginBottom:'clamp(16px,2vw,28px)' }}>Grow.</motion.h1>

          <div className="hv7-divider" />

          <motion.p {...fadeUp(0.25)} style={{
            fontSize:'clamp(15px,1.15vw,18px)', color:'rgba(8,33,60,0.52)',
            lineHeight:1.82, maxWidth:540, margin:'0 auto clamp(28px,3.2vw,48px)',
          }}>
            Stop managing six vendors. EG Digital is your single point of accountability -
            from cloud infrastructure to custom software, cybersecurity to organic growth.
          </motion.p>

          {/* Inline stat strip */}
          <motion.div {...fadeUp(0.28)} style={{
            display:'flex', justifyContent:'center', gap:'clamp(20px,3vw,40px)',
            marginBottom:'clamp(28px,3.5vw,48px)',
          }}>
            {[{ v:'25+', l:'Projects' }, { v:'14', l:'Industries' }, { v:'4.2★', l:'Rating' }].map(s => (
              <div key={s.l} style={{ textAlign:'center' }}>
                <div style={{ fontSize:'clamp(20px,2vw,28px)', fontWeight:900, color:NAVY, letterSpacing:'-0.04em', lineHeight:1 }}>{s.v}</div>
                <div style={{ fontSize:10, fontWeight:700, color:'rgba(8,33,60,0.36)', textTransform:'uppercase', letterSpacing:'1.2px', marginTop:3 }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="hv7-cta-row">
            <button className="hv7-btn-p" onClick={() => navigate('/services')}>
              Start Your Journey
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
            <button className="hv7-btn-g" onClick={() => navigate('/contact')}>Contact Us</button>
          </motion.div>
        </div>

      </section>
    </>
  )
}
