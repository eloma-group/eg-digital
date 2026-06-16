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
// DEVELOPMENT SECTION — Left editorial + Right CSS device-mockup composition
// Theme: Web, App & Software Development — shows the actual product we build
// ─────────────────────────────────────────────────────────────────────────────
export function DevelopmentSection() {
  const navigate = useNavigate()
  const BARS = [35, 55, 42, 70, 58, 80, 68, 92]
  return (
    <>
      <style>{`
        @keyframes hv1-ping { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.3;transform:scale(1.8);} }
        @keyframes hv1-progress { from{width:0;} to{width:80%;} }
        @keyframes hv1-phone-in { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }

        .hv1-section {
          min-height:100svh; background:#f5f5f0;
          display:flex; align-items:center;
          padding:clamp(90px,11vh,140px) clamp(24px,4vw,64px);
          position:relative; overflow:hidden;
        }
        .hv1-inner {
          max-width:min(calc(100vw - 48px),1760px);
          margin:0 auto; width:100%; position:relative; z-index:1;
          display:grid; grid-template-columns:1fr 1.1fr;
          align-items:center; gap:clamp(40px,5vw,80px);
        }

        /* left */
        .hv1-tag { display:inline-flex; align-items:center; gap:8px; margin-bottom:clamp(20px,2.5vw,36px); }
        .hv1-dot-pulse { position:relative; width:8px; height:8px; flex-shrink:0; }
        .hv1-dot-pulse::before {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:${GREEN}; animation:hv1-ping 2s ease-out infinite;
        }
        .hv1-dot-pulse::after { content:''; position:absolute; inset:0; border-radius:50%; background:${GREEN}; }
        .hv1-stat-strip {
          display:flex; gap:clamp(18px,2.5vw,32px);
          padding:clamp(14px,1.8vw,20px) 0;
          border-top:1px solid rgba(8,33,60,0.08); border-bottom:1px solid rgba(8,33,60,0.08);
          margin-bottom:clamp(18px,2.2vw,28px);
        }
        .hv1-sv { font-size:clamp(20px,2vw,28px); font-weight:900; color:${NAVY}; letter-spacing:-0.04em; line-height:1; }
        .hv1-sl { font-size:9px; font-weight:800; color:rgba(8,33,60,0.36); text-transform:uppercase; letter-spacing:1.4px; margin-top:3px; }
        .hv1-pills { display:flex; flex-wrap:wrap; gap:6px; }
        .hv1-pill { padding:5px 13px; border-radius:100px; background:rgba(8,33,60,0.06); border:1px solid rgba(8,33,60,0.09); font-size:11.5px; font-weight:600; color:rgba(8,33,60,0.55); transition:background .2s,border-color .2s,color .2s,transform .2s; cursor:default; }
        .hv1-pill:hover { background:rgba(60,185,140,0.12); border-color:rgba(60,185,140,0.32); color:${NAVY}; transform:translateY(-2px); }
        .hv1-devices { transition:transform .45s cubic-bezier(0.16,1,0.3,1); }
        .hv1-devices:hover { transform:translateY(-7px); }
        .hv1-cta-row { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:clamp(20px,2.5vw,32px); }
        .hv1-btn-p {
          background:${NAVY}; color:#fff; border:none;
          padding:14px 28px; border-radius:100px; font-size:14px; font-weight:700;
          cursor:pointer; font-family:inherit; min-height:50px;
          display:inline-flex; align-items:center; gap:9px;
          transition:background .22s,transform .18s; will-change:transform;
        }
        .hv1-btn-p:hover { background:${GREEN}; transform:translateY(-2px); }
        .hv1-btn-g {
          background:transparent; color:${NAVY};
          border:1.5px solid rgba(8,33,60,0.18); padding:14px 28px; border-radius:100px;
          font-size:14px; font-weight:700; cursor:pointer; font-family:inherit; min-height:50px;
          transition:border-color .22s;
        }
        .hv1-btn-g:hover { border-color:rgba(8,33,60,0.45); }

        /* right — device composition */
        .hv1-devices { position:relative; }

        /* laptop shell */
        .hv1-laptop-lid {
          background:#d4d4d0; border-radius:12px 12px 0 0;
          padding:5px 5px 0; position:relative;
          box-shadow:0 2px 0 #bbbbb7, 0 32px 80px rgba(0,0,0,0.16);
        }
        .hv1-screen {
          background:#fff; border-radius:7px 7px 0 0;
          overflow:hidden; aspect-ratio:16/10;
        }
        .hv1-camera { width:6px; height:6px; border-radius:50%; background:#999; margin:4px auto 0; }
        .hv1-laptop-base {
          background:linear-gradient(180deg,#d0d0cc,#c2c2be);
          height:clamp(12px,1.5vw,18px); border-radius:0 0 16px 16px;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 3px 0 #b0b0ac;
        }
        .hv1-trackpad {
          width:clamp(50px,8vw,80px); height:clamp(26px,3.5vw,36px);
          border-radius:5px; background:rgba(255,255,255,0.22);
          border:1px solid rgba(255,255,255,0.18);
        }

        /* phone overlay */
        .hv1-phone {
          position:absolute; bottom:-10px; right:-16px; z-index:4;
          width:clamp(80px,10vw,108px);
          background:#1a1a2a; border-radius:clamp(14px,2vw,20px);
          padding:5px; box-shadow:0 20px 60px rgba(0,0,0,0.28);
          animation:hv1-phone-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both;
        }
        .hv1-phone-notch {
          width:28px; height:4px; background:#2a2a3a; border-radius:0 0 4px 4px;
          margin:0 auto 4px;
        }
        .hv1-phone-screen { border-radius:10px; overflow:hidden; aspect-ratio:9/18; background:#0d1117; }
        .hv1-phone-home { width:20px; height:3px; background:rgba(255,255,255,0.2); border-radius:99px; margin:5px auto 0; }

        @media (max-width:900px) {
          .hv1-inner { grid-template-columns:1fr; }
          .hv1-devices { display:none; }
        }
        @media (min-width:1920px) { .hv1-inner { max-width:1900px; } }
        @media (min-width:2560px) { .hv1-inner { max-width:2440px; } }
      `}</style>

      <section className="hv1-section">
        <div className="hv1-inner">
          {/* Left */}
          <div>
            <motion.div {...fadeUp(0)} className="hv1-tag">
              <span className="hv1-dot-pulse" />
              <span style={{ fontSize:11, fontWeight:800, letterSpacing:'2px', textTransform:'uppercase', color:GREEN }}>Taking New Projects</span>
              <span style={{ width:1, height:14, background:'rgba(8,33,60,0.12)', flexShrink:0 }} />
              <span style={{ fontSize:11, fontWeight:600, color:'rgba(8,33,60,0.4)', textTransform:'uppercase', letterSpacing:'1px' }}>Sydney · Est. 2021</span>
            </motion.div>

            <motion.h2 {...fadeUp(0.07)} style={{
              fontSize:'clamp(52px,7.5vw,112px)', fontWeight:900,
              letterSpacing:'-0.045em', lineHeight:0.88,
              textTransform:'uppercase', color:NAVY,
              marginBottom:'clamp(16px,2vw,24px)',
            }}>
              We Ship<br />
              <span style={{ color:GREEN }}>Digital</span><br />
              Products.
            </motion.h2>

            <motion.p {...fadeUp(0.14)} style={{
              fontSize:'clamp(15px,1.15vw,18px)', color:'rgba(8,33,60,0.52)',
              lineHeight:1.82, maxWidth:440, marginBottom:'clamp(22px,2.8vw,36px)',
            }}>
              Marketing sites, SaaS platforms, mobile apps, and e-commerce stores —
              engineered on time, on budget, built to scale.
            </motion.p>

            <motion.div {...fadeUp(0.19)} className="hv1-cta-row">
              <button className="hv1-btn-p" onClick={() => navigate('/contact')}>
                Start a Project
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <button className="hv1-btn-g" onClick={() => navigate('/services')}>View Our Work</button>
            </motion.div>

            <motion.div {...fadeUp(0.24)} className="hv1-stat-strip">
              {[{ v:'50+', l:'Projects' }, { v:'100%', l:'On-Time Delivery' }, { v:'5★', l:'Client Rating' }].map(s => (
                <div key={s.l}><div className="hv1-sv">{s.v}</div><div className="hv1-sl">{s.l}</div></div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.28)} className="hv1-pills">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Shopify', 'WordPress', 'React Native'].map(t => (
                <span key={t} className="hv1-pill">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — CSS device mockup */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={{ duration:1.0, ease:EASE, delay:0.2 }}
            className="hv1-devices"
          >
            {/* Laptop */}
            <div className="hv1-laptop-lid">
              <div className="hv1-camera" />
              <div className="hv1-screen">
                <div style={{ background:'#fff', height:'100%', display:'flex', flexDirection:'column' }}>
                  {/* Browser chrome */}
                  <div style={{ background:'#f0f0ec', borderBottom:'1px solid rgba(0,0,0,0.07)', padding:'5px 8px', display:'flex', alignItems:'center', gap:5, flexShrink:0 }}>
                    {['#ff5f57','#ffbd2e','#28ca41'].map(c=><div key={c} style={{ width:7, height:7, borderRadius:'50%', background:c }} />)}
                    <div style={{ flex:1, background:'#fff', borderRadius:4, padding:'2px 8px', fontSize:8, color:'rgba(0,0,0,0.35)', fontFamily:'monospace', border:'1px solid rgba(0,0,0,0.08)', whiteSpace:'nowrap', overflow:'hidden' }}>
                      nova-commerce.com.au
                    </div>
                  </div>
                  {/* Nav */}
                  <div style={{ padding:'5px 10px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid rgba(8,33,60,0.05)', flexShrink:0 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                      <div style={{ width:10, height:10, background:GREEN, borderRadius:2 }} />
                      <div style={{ width:44, height:5, background:NAVY, borderRadius:2, opacity:.7 }} />
                    </div>
                    <div style={{ display:'flex', gap:8 }}>
                      {[28,28,28,52].map((w,i)=><div key={i} style={{ width:w, height:5, background:i===3?NAVY:'rgba(8,33,60,0.15)', borderRadius:i===3?100:2, opacity:i===3?.8:.7 }} />)}
                    </div>
                  </div>
                  {/* Dashboard screenshot fills the rest of the screen */}
                  <img
                    src="/images/Dashboard.png"
                    alt="Analytics dashboard built by EG Digital"
                    loading="lazy" decoding="async"
                    style={{ flex:1, width:'100%', minHeight:0, objectFit:'cover', objectPosition:'center top', display:'block' }}
                  />
                </div>
              </div>
            </div>
            <div className="hv1-laptop-base">
              <div className="hv1-trackpad" />
            </div>

            {/* Phone overlay */}
            <div className="hv1-phone">
              <div className="hv1-phone-notch" />
              <div className="hv1-phone-screen">
                <div style={{ height:'100%', background:'#0d1117', padding:'5px 4px', display:'flex', flexDirection:'column', gap:4 }}>
                  {/* App header */}
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:6, fontWeight:800, color:'rgba(255,255,255,0.7)' }}>Dashboard</span>
                    <div style={{ width:12, height:12, borderRadius:'50%', background:`${GREEN}30`, border:`1px solid ${GREEN}50` }} />
                  </div>
                  {/* Revenue card */}
                  <div style={{ background:`${GREEN}18`, border:`1px solid ${GREEN}30`, borderRadius:5, padding:'5px 5px' }}>
                    <div style={{ fontSize:6, color:'rgba(255,255,255,0.4)', marginBottom:2 }}>Revenue</div>
                    <div style={{ fontSize:11, fontWeight:900, color:'#fff', letterSpacing:'-0.03em', lineHeight:1 }}>$24.8k</div>
                    <div style={{ fontSize:6, color:GREEN, marginTop:2, fontWeight:700 }}>↑ +18.4% this month</div>
                  </div>
                  {/* Bar chart */}
                  <div style={{ display:'flex', alignItems:'flex-end', gap:2, height:22, padding:'0 1px' }}>
                    {BARS.map((h,i)=>(
                      <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:2, background:i===7?GREEN:'rgba(255,255,255,0.14)' }} />
                    ))}
                  </div>
                  {/* Orders list */}
                  {[['Order #1042',GREEN],['Order #1041','rgba(255,255,255,0.3)']].map(([label,col],i)=>(
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'3px 2px', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontSize:6, color:'rgba(255,255,255,0.5)', fontWeight:600 }}>{label}</span>
                      <div style={{ width:4, height:4, borderRadius:'50%', background:col as string }} />
                    </div>
                  ))}
                  {/* Tab bar */}
                  <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:3, display:'flex', justifyContent:'space-around', marginTop:'auto' }}>
                    {['⊙','⊞','◷','☰'].map((icon,i)=>(
                      <span key={i} style={{ fontSize:9, color:i===0?GREEN:'rgba(255,255,255,0.25)' }}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hv1-phone-home" />
            </div>

          </motion.div>
        </div>
      </section>
    </>
  )
}
