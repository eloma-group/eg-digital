import { motion } from 'framer-motion'

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
// HERO V1 — Left editorial + Right CSS device-mockup composition
// Theme: Web, App & Software Development — shows the actual product we build
// ─────────────────────────────────────────────────────────────────────────────
export function HeroV1() {
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
        .hv1-stack-badge { transition:transform .28s cubic-bezier(0.16,1,0.3,1), box-shadow .28s; }
        .hv1-devices:hover .hv1-stack-badge { transform:translateY(-3px); box-shadow:0 12px 30px rgba(8,33,60,0.18); }
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

        /* stack badge */
        .hv1-stack-badge {
          position:absolute; top:-14px; left:16px;
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:100px; padding:7px 14px;
          font-size:11px; font-weight:700; color:rgba(8,33,60,0.55);
          box-shadow:0 4px 20px rgba(8,33,60,0.1);
          white-space:nowrap;
        }

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
              <button className="hv1-btn-p">
                Start a Project
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <button className="hv1-btn-g">View Our Work</button>
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
            {/* Stack badge */}
            <div className="hv1-stack-badge">Built with React · Next.js · Shopify</div>

            {/* Laptop */}
            <div className="hv1-laptop-lid">
              <div className="hv1-camera" />
              <div className="hv1-screen">
                {/* ── Mini website mockup inside screen ── */}
                <div style={{ background:'#fff', height:'100%', display:'flex', flexDirection:'column' }}>
                  {/* Browser chrome */}
                  <div style={{ background:'#f0f0ec', borderBottom:'1px solid rgba(0,0,0,0.07)', padding:'5px 8px', display:'flex', alignItems:'center', gap:5 }}>
                    {['#ff5f57','#ffbd2e','#28ca41'].map(c=><div key={c} style={{ width:7, height:7, borderRadius:'50%', background:c }} />)}
                    <div style={{ flex:1, background:'#fff', borderRadius:4, padding:'2px 8px', fontSize:8, color:'rgba(0,0,0,0.35)', fontFamily:'monospace', border:'1px solid rgba(0,0,0,0.08)', whiteSpace:'nowrap', overflow:'hidden' }}>
                      nova-commerce.com.au
                    </div>
                  </div>
                  {/* Nav */}
                  <div style={{ padding:'5px 10px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid rgba(8,33,60,0.05)' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                      <div style={{ width:10, height:10, background:GREEN, borderRadius:2 }} />
                      <div style={{ width:44, height:5, background:NAVY, borderRadius:2, opacity:.7 }} />
                    </div>
                    <div style={{ display:'flex', gap:8 }}>
                      {[28,28,28,52].map((w,i)=><div key={i} style={{ width:w, height:5, background:i===3?NAVY:'rgba(8,33,60,0.15)', borderRadius:i===3?100:2, opacity:i===3?.8:.7 }} />)}
                    </div>
                  </div>
                  {/* Hero section of website */}
                  <div style={{ margin:'6px 8px', borderRadius:6, background:'linear-gradient(135deg,#08213C 0%,#0d3a6e 100%)', padding:'10px 10px 10px' }}>
                    <div style={{ fontSize:7, fontWeight:800, color:GREEN, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:4 }}>New Season Collection</div>
                    <div style={{ width:'75%', height:8, background:'rgba(255,255,255,0.9)', borderRadius:2, marginBottom:4 }} />
                    <div style={{ width:'55%', height:5, background:'rgba(255,255,255,0.4)', borderRadius:2, marginBottom:7 }} />
                    <div style={{ display:'flex', gap:5 }}>
                      <div style={{ width:52, height:14, background:GREEN, borderRadius:100 }} />
                      <div style={{ width:52, height:14, background:'rgba(255,255,255,0.1)', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }} />
                    </div>
                  </div>
                  {/* Product cards row */}
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:4, margin:'0 8px 6px', flex:1 }}>
                    {[GREEN,'rgba(8,33,60,0.08)','rgba(8,33,60,0.08)','rgba(8,33,60,0.08)'].map((bg,i)=>(
                      <div key={i} style={{ background:'rgba(8,33,60,0.03)', border:'1px solid rgba(8,33,60,0.07)', borderRadius:5, overflow:'hidden' }}>
                        <div style={{ height:28, background:i===0?'linear-gradient(135deg,#08213C,#0d4080)':'rgba(8,33,60,0.05)', borderBottom:'1px solid rgba(8,33,60,0.06)' }} />
                        <div style={{ padding:4 }}>
                          <div style={{ width:'80%', height:4, background:'rgba(8,33,60,0.45)', borderRadius:2, marginBottom:2 }} />
                          <div style={{ width:'55%', height:4, background:`${bg}`, borderRadius:2 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Status bar */}
                  <div style={{ borderTop:'1px solid rgba(8,33,60,0.06)', padding:'3px 10px', background:'rgba(8,33,60,0.02)', display:'flex', justifyContent:'space-between' }}>
                    <div style={{ display:'flex', gap:6 }}>
                      {['Shopify','Next.js','TypeScript'].map(t=><span key={t} style={{ fontSize:6, fontWeight:700, color:'rgba(8,33,60,0.35)', background:'rgba(8,33,60,0.05)', padding:'1px 5px', borderRadius:3 }}>{t}</span>)}
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:3 }}>
                      <div style={{ width:5, height:5, borderRadius:'50%', background:GREEN }} />
                      <span style={{ fontSize:6, color:'rgba(8,33,60,0.4)', fontWeight:600 }}>Live</span>
                    </div>
                  </div>
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


// ─────────────────────────────────────────────────────────────────────────────
// HERO V2 — Left editorial + Right SVG network topology illustration
// Theme: Cybersecurity & IT Support — shows protected office network
// ─────────────────────────────────────────────────────────────────────────────
export function HeroV2() {
  return (
    <>
      <style>{`
        @keyframes hv2-live-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.3;transform:scale(2.2);} }
        @keyframes hv2-hub-pulse { 0%{r:44;opacity:0.18;} 100%{r:68;opacity:0;} }
        @keyframes hv2-conn-dash { from{strokeDashoffset:80;} to{strokeDashoffset:0;} }
        @keyframes hv2-float-a { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
        @keyframes hv2-float-b { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }

        .hv2-section {
          min-height:100svh; background:#07192f;
          display:flex; align-items:center;
          padding:clamp(90px,11vh,140px) clamp(24px,4vw,64px);
          position:relative; overflow:hidden;
        }
        .hv2-grid-bg {
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(60,185,140,0.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,185,140,0.04) 1px,transparent 1px);
          background-size:44px 44px;
          mask-image:radial-gradient(ellipse 80% 80% at 75% 50%,black 0%,transparent 70%);
          -webkit-mask-image:radial-gradient(ellipse 80% 80% at 75% 50%,black 0%,transparent 70%);
        }
        .hv2-bloom {
          position:absolute; top:-15%; right:-8%; pointer-events:none; border-radius:50%;
          width:clamp(380px,52vw,720px); height:clamp(380px,52vw,720px);
          background:radial-gradient(circle,rgba(60,185,140,0.1) 0%,transparent 62%);
        }
        .hv2-inner {
          max-width:min(calc(100vw - 48px),1760px);
          margin:0 auto; width:100%; position:relative; z-index:1;
          display:grid; grid-template-columns:1fr 1fr;
          align-items:center; gap:clamp(48px,5.5vw,88px);
        }
        .hv2-eyebrow { display:inline-flex; align-items:center; gap:8px; margin-bottom:clamp(18px,2.2vw,30px); }
        .hv2-stat-row {
          display:flex; gap:clamp(20px,3vw,40px);
          padding:clamp(16px,2vw,24px) 0;
          border-top:1px solid rgba(255,255,255,0.07);
          border-bottom:1px solid rgba(255,255,255,0.07);
          margin-bottom:clamp(18px,2.2vw,28px);
        }
        .hv2-stat-val { font-size:clamp(22px,2.2vw,32px); font-weight:900; color:#fff; letter-spacing:-0.04em; line-height:1; }
        .hv2-stat-lbl { font-size:10px; font-weight:700; color:rgba(255,255,255,0.32); letter-spacing:1.3px; text-transform:uppercase; margin-top:4px; }
        .hv2-tags { display:flex; gap:8px; flex-wrap:wrap; }
        .hv2-tag { padding:6px 14px; border-radius:100px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); font-size:12px; font-weight:600; color:rgba(255,255,255,0.5); transition:background .2s,border-color .2s,color .2s,transform .2s; cursor:default; }
        .hv2-tag:hover { background:rgba(60,185,140,0.12); border-color:rgba(60,185,140,0.4); color:#fff; transform:translateY(-2px); }
        .hv2-card { transition:border-color .25s, box-shadow .25s, background .25s; cursor:default; }
        .hv2-card:hover { border-color:rgba(60,185,140,0.5); background:rgba(12,28,54,0.96); box-shadow:0 16px 44px rgba(0,0,0,0.4); }
        .hv2-cta-row { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:clamp(22px,2.8vw,34px); }
        .hv2-btn-p {
          background:${GREEN}; color:${NAVY}; border:none;
          padding:14px 30px; border-radius:100px; font-size:14px; font-weight:800;
          cursor:pointer; font-family:inherit; min-height:50px;
          display:inline-flex; align-items:center; gap:10px;
          transition:background .22s,transform .18s; will-change:transform;
        }
        .hv2-btn-p:hover { background:#4dcfa0; transform:translateY(-2px); }
        .hv2-btn-g {
          background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.75);
          border:1.5px solid rgba(255,255,255,0.15); padding:14px 30px; border-radius:100px;
          font-size:14px; font-weight:700; cursor:pointer; font-family:inherit; min-height:50px;
          transition:border-color .22s,background .22s;
        }
        .hv2-btn-g:hover { border-color:rgba(255,255,255,0.35); background:rgba(255,255,255,0.09); }

        /* right — network illustration */
        .hv2-network { position:relative; }
        .hv2-conn { stroke:rgba(60,185,140,0.22); stroke-width:1; stroke-dasharray:8 5; animation:hv2-conn-dash 4s linear infinite; }
        .hv2-card {
          position:absolute; background:rgba(8,20,42,0.88);
          border:1px solid rgba(255,255,255,0.1); border-radius:12px;
          padding:10px 14px; white-space:nowrap; will-change:transform;
        }
        .hv2-card-a { top:2%; right:-2%; animation:hv2-float-a 4.5s ease-in-out infinite; }
        .hv2-card-b { bottom:8%; left:-4%; animation:hv2-float-b 5.2s ease-in-out infinite 0.9s; }
        .hv2-card-c { top:42%; right:-6%; animation:hv2-float-a 6.1s ease-in-out infinite 1.6s; }

        @media (max-width:900px) { .hv2-inner { grid-template-columns:1fr; } .hv2-card { display:none; } }
        @media (min-width:1920px) { .hv2-inner { max-width:1900px; } }
        @media (min-width:2560px) { .hv2-inner { max-width:2440px; } }
      `}</style>

      <section className="hv2-section">
        <div className="hv2-grid-bg" aria-hidden="true" />
        <div className="hv2-bloom" aria-hidden="true" />

        <div className="hv2-inner">
          {/* Left */}
          <div>
            <motion.div {...fadeUp(0)} className="hv2-eyebrow">
              <span style={{ position:'relative', display:'inline-flex', width:8, height:8 }}>
                <span style={{ position:'absolute',inset:0,borderRadius:'50%',background:GREEN,animation:'hv2-live-dot 2s ease-out infinite' }}/>
                <span style={{ width:8,height:8,borderRadius:'50%',background:GREEN,position:'relative' }}/>
              </span>
              <span style={{ fontSize:'clamp(10px,.75vw,12px)', fontWeight:800, letterSpacing:'2.5px', textTransform:'uppercase', color:GREEN }}>Cybersecurity · IT Support</span>
            </motion.div>

            <motion.h2 {...fadeUp(0.07)} style={{
              fontSize:'clamp(52px,7.5vw,112px)', fontWeight:900,
              letterSpacing:'-0.045em', lineHeight:0.88,
              textTransform:'uppercase', color:'#fff',
              marginBottom:'clamp(18px,2.2vw,28px)',
            }}>
              Zero<br/>
              <span style={{ color:GREEN }}>Threats</span><br/>
              Allowed.
            </motion.h2>

            <motion.p {...fadeUp(0.14)} style={{
              fontSize:'clamp(15px,1.15vw,18px)', color:'rgba(255,255,255,0.5)',
              lineHeight:1.82, maxWidth:480, marginBottom:'clamp(24px,2.8vw,40px)',
            }}>
              AI-driven threat detection, zero-trust architecture, and 24/7 proactive monitoring —
              powered by Microsoft Defender and Sentinel — keeping your business safe around the clock.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="hv2-cta-row">
              <button className="hv2-btn-p">
                Get Protected
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <button className="hv2-btn-g">Free Security Audit</button>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="hv2-stat-row">
              {[{ val:'178+', lbl:'Threats Blocked/Day' }, { val:'99.9%', lbl:'System Uptime' }, { val:'24/7', lbl:'Live Monitoring' }].map(s => (
                <div key={s.lbl}><div className="hv2-stat-val">{s.val}</div><div className="hv2-stat-lbl">{s.lbl}</div></div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="hv2-tags">
              {['MS Defender','Azure Sentinel','Zero Trust','SIEM/SOC','Endpoint EDR'].map(t => (
                <span key={t} className="hv2-tag">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — SVG network topology illustration */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={{ duration:1.0, ease:EASE, delay:0.2 }}
            className="hv2-network"
          >
            <svg width="100%" viewBox="0 0 440 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <radialGradient id="hv2-hub-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={GREEN} stopOpacity="0.22"/>
                  <stop offset="100%" stopColor={GREEN} stopOpacity="0"/>
                </radialGradient>
              </defs>

              {/* Hub glow */}
              <circle cx="220" cy="200" r="80" fill="url(#hv2-hub-grad)"/>

              {/* Connection lines — hub(220,200) to each device */}
              <line x1="220" y1="200" x2="220" y2="66" className="hv2-conn"/>
              <line x1="220" y1="200" x2="82"  y2="96" className="hv2-conn" style={{ animationDelay:'0.8s' }}/>
              <line x1="220" y1="200" x2="69"  y2="294" className="hv2-conn" style={{ animationDelay:'1.6s' }}/>
              <line x1="220" y1="200" x2="358" y2="96" className="hv2-conn" style={{ animationDelay:'2.4s' }}/>
              <line x1="220" y1="200" x2="368" y2="290" className="hv2-conn" style={{ animationDelay:'3.2s' }}/>

              {/* Threat dots animated along lines */}
              <circle r="4" fill="#ef4444" opacity="0">
                <animate attributeName="cy" values="66;148;148" dur="4s" keyTimes="0;0.7;1" repeatCount="indefinite" begin="0s"/>
                <animate attributeName="cx" values="220;220;220" dur="4s" repeatCount="indefinite" begin="0s"/>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.65;0.8" dur="4s" repeatCount="indefinite" begin="0s"/>
              </circle>
              <circle r="4" fill="#f59e0b" opacity="0">
                <animate attributeName="cx" values="358;296;296" dur="5s" keyTimes="0;0.7;1" repeatCount="indefinite" begin="2s"/>
                <animate attributeName="cy" values="96;146;146" dur="5s" keyTimes="0;0.7;1" repeatCount="indefinite" begin="2s"/>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.65;0.8" dur="5s" repeatCount="indefinite" begin="2s"/>
              </circle>

              {/* Hub pulsing rings */}
              <circle cx="220" cy="200" r="44" fill="none" stroke={`${GREEN}30`} strokeWidth="1.5">
                <animate attributeName="r" values="44;68" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="220" cy="200" r="44" fill="none" stroke={`${GREEN}30`} strokeWidth="1.5">
                <animate attributeName="r" values="44;68" dur="2.5s" repeatCount="indefinite" begin="1.25s"/>
                <animate attributeName="opacity" values="0.4;0" dur="2.5s" repeatCount="indefinite" begin="1.25s"/>
              </circle>
              {/* Hub body */}
              <circle cx="220" cy="200" r="38" fill="#0c1e35" stroke={GREEN} strokeWidth="1.5"/>
              <circle cx="220" cy="200" r="28" fill={`${GREEN}15`} stroke={`${GREEN}45`} strokeWidth="1"/>
              <text x="220" y="196" textAnchor="middle" fill={GREEN} fontSize="7.5" fontWeight="800" letterSpacing="1.5" fontFamily="system-ui,sans-serif">ACTIVE</text>
              <text x="220" y="208" textAnchor="middle" fill={`${GREEN}99`} fontSize="6" fontFamily="system-ui,sans-serif" letterSpacing="0.5">MONITORING</text>

              {/* ── DEVICE: Server (top-center) ── */}
              <g transform="translate(194,14)">
                <rect width="52" height="48" rx="4" fill="#0d1f35" stroke={`${GREEN}45`} strokeWidth="1"/>
                {[7,20,33].map((y,i)=>(
                  <g key={i}>
                    <rect x="4" y={y} width="44" height="10" rx="2" fill="#162a42"/>
                    <circle cx="42" cy={y+5} r="2.5" fill={i<2?GREEN:'#f59e0b'}/>
                    <rect x="8" y={y+3} width="20" height="4" rx="1" fill={`${GREEN}${i===0?'25':'12'}`}/>
                  </g>
                ))}
                {/* Secure indicator */}
                <circle cx="46" cy="-5" r="7" fill={`${GREEN}20`} stroke={`${GREEN}60`} strokeWidth="1"/>
                <path d="M43 -5L45 -3L49 -7" stroke={GREEN} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="26" y="58" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="600">Server</text>
              </g>

              {/* ── DEVICE: Laptop TL (top-left) ── */}
              <g transform="translate(52,62)">
                {/* Lid */}
                <rect width="54" height="34" rx="3" fill="#0d1f35" stroke={`${GREEN}45`} strokeWidth="1"/>
                <rect x="3" y="3" width="48" height="28" rx="1" fill="#162a42"/>
                {/* Screen content (mini UI) */}
                <rect x="6" y="6" width="30" height="5" rx="2" fill={`${GREEN}35`}/>
                <rect x="6" y="14" width="22" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
                <rect x="6" y="20" width="28" height="3" rx="1" fill="rgba(255,255,255,0.07)"/>
                {/* Base */}
                <rect x="-6" y="34" width="66" height="7" rx="3" fill="#0a1828" stroke={`${GREEN}28`} strokeWidth="1"/>
                {/* Trackpad */}
                <rect x="19" y="36" width="16" height="2" rx="1" fill="#162a42"/>
                {/* Secure indicator */}
                <circle cx="48" cy="-5" r="7" fill={`${GREEN}20`} stroke={`${GREEN}60`} strokeWidth="1"/>
                <path d="M45 -5L47 -3L51 -7" stroke={GREEN} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="27" y="52" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="600">Laptop</text>
              </g>

              {/* ── DEVICE: Phone BL (bottom-left) ── */}
              <g transform="translate(44,256)">
                <rect width="26" height="52" rx="6" fill="#0d1f35" stroke={`${GREEN}45`} strokeWidth="1"/>
                <rect x="2" y="8" width="22" height="36" rx="1" fill="#162a42"/>
                <rect x="9" y="3" width="8" height="3" rx="1.5" fill="#0a1520"/>
                <rect x="9" y="47" width="8" height="2" rx="1" fill="#0a1520"/>
                {/* App grid on phone screen */}
                {[0,1,2,3].map(i=>(
                  <rect key={i} x={5+(i%2)*11} y={11+Math.floor(i/2)*11} width="8" height="8" rx="1.5"
                    fill={['rgba(60,185,140,0.4)','rgba(0,120,212,0.4)','rgba(75,83,188,0.4)','rgba(232,115,42,0.35)'][i]}/>
                ))}
                {/* Status bar line */}
                <rect x="5" y="33" width="16" height="3" rx="1" fill={`${GREEN}30`}/>
                {/* Secure indicator */}
                <circle cx="20" cy="-5" r="7" fill={`${GREEN}20`} stroke={`${GREEN}60`} strokeWidth="1"/>
                <path d="M17 -5L19 -3L23 -7" stroke={GREEN} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="13" y="63" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="600">Mobile</text>
              </g>

              {/* ── DEVICE: Cloud/Azure TR (top-right) ── */}
              <g transform="translate(308,54)">
                {/* Cloud shape: base + bumps */}
                <rect x="0" y="18" width="64" height="22" rx="4" fill="#0d1f35"/>
                <ellipse cx="16" cy="18" rx="14" ry="11" fill="#0d1f35"/>
                <ellipse cx="36" cy="14" rx="16" ry="12" fill="#0d1f35"/>
                <ellipse cx="54" cy="18" rx="12" ry="9" fill="#0d1f35"/>
                {/* Outline */}
                <path d="M4 22 Q2 20 2 18 A14 11 0 0 1 24 10 A16 12 0 0 1 54 8 A12 9 0 0 1 64 18 Q64 22 62 24" stroke="rgba(0,114,196,0.5)" strokeWidth="1" fill="none"/>
                <rect x="2" y="22" width="60" height="18" rx="4" fill="#0d1f35" stroke="rgba(0,114,196,0.4)" strokeWidth="1"/>
                <text x="32" y="35" textAnchor="middle" fill="rgba(0,114,196,0.9)" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="900">Az</text>
                {/* Secure indicator */}
                <circle cx="58" cy="4" r="7" fill={`${GREEN}20`} stroke={`${GREEN}60`} strokeWidth="1"/>
                <path d="M55 4L57 6L61 2" stroke={GREEN} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="32" y="52" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="600">Azure</text>
              </g>

              {/* ── DEVICE: Desktop Monitor BR (bottom-right) ── */}
              <g transform="translate(336,252)">
                {/* Monitor body */}
                <rect width="64" height="42" rx="3" fill="#0d1f35" stroke={`${GREEN}45`} strokeWidth="1"/>
                <rect x="2" y="2" width="60" height="38" rx="1" fill="#162a42"/>
                {/* Screen content */}
                <rect x="5" y="6" width="36" height="5" rx="2" fill={`${GREEN}35`}/>
                <rect x="5" y="15" width="50" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
                <rect x="5" y="21" width="40" height="3" rx="1" fill="rgba(255,255,255,0.06)"/>
                <rect x="5" y="27" width="30" height="3" rx="1" fill="rgba(255,255,255,0.05)"/>
                {/* Neck + stand */}
                <rect x="29" y="42" width="6" height="8" fill="#0a1520"/>
                <rect x="20" y="50" width="24" height="4" rx="2" fill="#0a1520"/>
                {/* Secure indicator */}
                <circle cx="58" cy="-5" r="7" fill={`${GREEN}20`} stroke={`${GREEN}60`} strokeWidth="1"/>
                <path d="M55 -5L57 -3L61 -7" stroke={GREEN} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="32" y="63" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="600">Desktop</text>
              </g>
            </svg>

            {/* Floating info cards */}
            <div className="hv2-card hv2-card-a">
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:7, height:7, borderRadius:'50%', background:'#ef4444', boxShadow:'0 0 8px #ef444480', flexShrink:0 }}/>
                <div>
                  <div style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.38)', textTransform:'uppercase', letterSpacing:'1px' }}>Blocked</div>
                  <div style={{ fontSize:13, fontWeight:800, color:'#fff' }}>Ransomware Attempt</div>
                </div>
              </div>
            </div>
            <div className="hv2-card hv2-card-b">
              <div style={{ fontSize:9, fontWeight:800, letterSpacing:'1.3px', textTransform:'uppercase', color:'rgba(255,255,255,0.28)', marginBottom:5 }}>System Uptime</div>
              <div style={{ fontSize:24, fontWeight:900, color:GREEN, letterSpacing:'-0.04em', lineHeight:1 }}>99.9%</div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,0.32)', marginTop:3 }}>30-day average</div>
            </div>
            <div className="hv2-card hv2-card-c">
              <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:GREEN, boxShadow:`0 0 8px ${GREEN}` }}/>
                <span style={{ fontSize:12, fontWeight:700, color:'#fff' }}>24/7 Active Monitoring</span>
              </div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,0.32)', marginTop:3 }}>178 threats blocked today</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}


// ─────────────────────────────────────────────────────────────────────────────
// HERO V3 — Structure 1C: Left text + Image with Microsoft product overlay
// Theme: Microsoft Cloud Solutions (light background)
// ─────────────────────────────────────────────────────────────────────────────
export function HeroV3() {
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

        /* right — photo + chips */
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

        /* MS partner badge — top-center overlap */
        .hv3-ms-badge {
          position:absolute; top:8px; left:50%; transform:translateX(-50%);
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:100px; padding:8px 18px;
          display:flex; align-items:center; gap:9px;
          box-shadow:0 4px 20px rgba(8,33,60,0.1);
          white-space:nowrap; z-index:3;
        }

        /* product chips */
        .hv3-chip {
          position:absolute; z-index:3;
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:12px; padding:9px 12px;
          display:flex; align-items:center; gap:9px;
          box-shadow:0 6px 22px rgba(8,33,60,0.1);
          will-change:transform;
        }
        .hv3-chip-ico {
          width:28px; height:28px; border-radius:7px;
          display:flex; align-items:center; justify-content:center;
          font-size:9px; font-weight:900; color:#fff; flex-shrink:0;
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
              As a certified Microsoft Partner, we deploy and manage the full ecosystem —
              365, Dynamics, Teams, and Azure — so your team collaborates smarter from day one.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="hv3-cta-row">
              <button className="hv3-btn-p">
                Explore Microsoft Services
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <button className="hv3-btn-g">Get a Quote</button>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="hv3-stat-row">
              {[{ v:'50+', l:'Deployments' }, { v:'6', l:'MS Products' }, { v:'5★', l:'Client Rating' }].map(s => (
                <div key={s.l}><div className="hv3-stat-v">{s.v}</div><div className="hv3-stat-l">{s.l}</div></div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo + floating chips */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={{ duration:1.0, ease:EASE, delay:0.18 }}
            className="hv3-right"
          >
            {/* Partner badge top */}
            <div className="hv3-ms-badge">
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2.5, width:16, height:16, flexShrink:0 }}>
                {['#f25022','#7fba00','#00a4ef','#ffb900'].map(c => (
                  <span key={c} style={{ display:'block', background:c, borderRadius:1 }} />
                ))}
              </div>
              <span style={{ fontSize:11, fontWeight:800, color:NAVY, letterSpacing:'0.3px' }}>Microsoft Solutions Partner</span>
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
                    <div style={{ fontSize:11, fontWeight:700, color:NAVY, lineHeight:1.2 }}>{chip.label}</div>
                    <div style={{ fontSize:9, color:'rgba(8,33,60,0.42)', marginTop:1 }}>{chip.sub}</div>
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


// ─────────────────────────────────────────────────────────────────────────────
// HERO V4 — Structure 2: Center-aligned text + bottom analytics mockup
// Theme: SEO & Digital Marketing Growth (light background)
// ─────────────────────────────────────────────────────────────────────────────
export function HeroV4() {
  const BARS = [22, 38, 30, 55, 48, 72, 64, 88, 78, 95, 85, 100]
  const METRICS = [
    { val:'+284%', lbl:'Organic Traffic', color:GREEN },
    { val:'#1',    lbl:'Google Rankings', color:NAVY  },
    { val:'DA 84', lbl:'Domain Authority', color:NAVY },
    { val:'14',    lbl:'Industries Served', color:NAVY },
  ]

  return (
    <>
      <style>{`
        @keyframes hv4-bar-rise {
          from { transform:scaleY(0); opacity:0; }
          to   { transform:scaleY(1); opacity:1; }
        }
        @keyframes hv4-trend-draw {
          from { stroke-dashoffset:600; }
          to   { stroke-dashoffset:0; }
        }
        @keyframes hv4-float-up {
          0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);}
        }

        .hv4-section {
          min-height:100svh; background:#fff;
          display:flex; flex-direction:column; align-items:center;
          justify-content:center;
          padding:clamp(90px,11vh,140px) clamp(24px,4vw,64px) clamp(48px,6vw,80px);
          position:relative; overflow:hidden;
        }
        /* dot grid — bottom half */
        .hv4-section::after {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image:radial-gradient(circle, rgba(8,33,60,0.055) 1px, transparent 1px);
          background-size:28px 28px;
          mask-image:radial-gradient(ellipse 80% 60% at 50% 80%, black 30%, transparent 80%);
          -webkit-mask-image:radial-gradient(ellipse 80% 60% at 50% 80%, black 30%, transparent 80%);
        }
        /* green bloom */
        .hv4-bloom {
          position:absolute; top:-8%; left:50%; transform:translateX(-50%);
          width:clamp(400px,60vw,900px); height:clamp(280px,36vh,480px);
          background:radial-gradient(ellipse, rgba(60,185,140,0.1) 0%, transparent 65%);
          pointer-events:none; z-index:0; border-radius:50%;
        }

        .hv4-center {
          max-width:min(calc(100vw - 48px), 860px);
          margin:0 auto; text-align:center;
          position:relative; z-index:1;
        }

        /* metric strip */
        .hv4-metric-strip {
          display:flex; justify-content:center; gap:0;
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:18px; overflow:hidden;
          box-shadow:0 4px 24px rgba(8,33,60,0.07);
          margin-top:clamp(28px,3.5vw,48px);
          flex-wrap:wrap;
        }
        .hv4-metric-cell {
          flex:1; min-width:100px; padding:clamp(16px,2vw,24px) clamp(14px,2vw,24px);
          border-right:1px solid rgba(8,33,60,0.06); text-align:center;
          transition:background .2s;
        }
        .hv4-metric-cell:last-child { border-right:none; }
        .hv4-metric-cell:hover { background:rgba(60,185,140,0.06); }
        .hv4-chart-card, .hv4-serp-card { transition:border-color .25s, box-shadow .25s; }
        .hv4-chart-card:hover, .hv4-serp-card:hover {
          border-color:rgba(60,185,140,0.32);
          box-shadow:0 2px 0 rgba(8,33,60,0.04), 0 32px 90px rgba(8,33,60,0.18);
        }
        .hv4-serp-row { transition:opacity .2s; }
        .hv4-serp-card:hover .hv4-serp-row:not(.is-client) { opacity:0.75 !important; }

        /* bottom showcase row */
        .hv4-bottom {
          display:grid; grid-template-columns:1.6fr 1fr;
          gap:clamp(14px,1.6vw,22px);
          width:100%; max-width:min(calc(100vw - 48px), 1200px);
          margin:clamp(36px,4.5vw,64px) auto 0;
          align-items:stretch;
        }
        @media (max-width:860px) {
          .hv4-bottom { grid-template-columns:1fr; }
        }
        @media (min-width:1920px) { .hv4-bottom { max-width:1440px; } }
        @media (min-width:2560px) { .hv4-bottom { max-width:1760px; } }

        /* chart mockup card */
        .hv4-chart-card {
          width:100%;
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:clamp(16px,2vw,24px);
          overflow:hidden;
          box-shadow:0 2px 0 rgba(8,33,60,0.04), 0 24px 80px rgba(8,33,60,0.1);
          position:relative; z-index:1;
          animation:hv4-float-up 7s ease-in-out infinite;
          will-change:transform;
        }

        /* SERP ranking card */
        .hv4-serp-card {
          width:100%; background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:clamp(16px,2vw,24px); overflow:hidden;
          box-shadow:0 2px 0 rgba(8,33,60,0.04), 0 24px 80px rgba(8,33,60,0.1);
          position:relative; z-index:1; display:flex; flex-direction:column;
          animation:hv4-float-up 7.6s ease-in-out infinite 0.4s;
          will-change:transform;
        }
        .hv4-serp-search {
          display:flex; align-items:center; gap:8px;
          margin:clamp(16px,2vw,22px) clamp(16px,2vw,22px) 0;
          background:rgba(8,33,60,0.04); border:1px solid rgba(8,33,60,0.07);
          border-radius:100px; padding:9px 14px;
        }
        .hv4-serp-results { padding:clamp(14px,1.8vw,20px); display:flex; flex-direction:column; gap:clamp(10px,1.4vw,16px); flex:1; }
        .hv4-serp-row { display:flex; flex-direction:column; gap:3px; }
        .hv4-serp-row.is-client {
          border:1px solid ${GREEN}40; background:${GREEN}0d;
          border-radius:12px; padding:10px 12px; margin:-10px -12px;
        }
        .hv4-chart-header {
          background:rgba(8,33,60,0.02); border-bottom:1px solid rgba(8,33,60,0.06);
          padding:14px 20px; display:flex; align-items:center; gap:12px;
        }
        .hv4-chart-body {
          padding:clamp(20px,2.5vw,32px) clamp(20px,2.5vw,32px) clamp(16px,2vw,24px);
        }
        /* bar chart */
        .hv4-bars {
          display:flex; align-items:flex-end; gap:clamp(4px,0.5vw,8px);
          height:clamp(80px,12vw,140px);
        }
        .hv4-bar {
          flex:1; border-radius:4px 4px 0 0;
          transform-origin:bottom center;
          animation:hv4-bar-rise .8s cubic-bezier(0.16,1,0.3,1) forwards;
          opacity:0;
        }
        /* trend line */
        .hv4-trend-line {
          stroke-dasharray:600; stroke-dashoffset:600;
          animation:hv4-trend-draw 1.6s cubic-bezier(0.16,1,0.3,1) 0.5s forwards;
        }
        .hv4-chart-footer {
          display:flex; align-items:center; justify-content:space-between;
          padding:0 clamp(20px,2.5vw,32px) clamp(14px,1.8vw,20px);
          flex-wrap:wrap; gap:8px;
        }

        .hv4-cta-row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .hv4-btn-p {
          background:${NAVY}; color:#fff; border:none;
          padding:15px 34px; border-radius:100px; font-size:15px; font-weight:700;
          cursor:pointer; font-family:inherit; min-height:52px;
          display:inline-flex; align-items:center; gap:10px;
          transition:background .22s,transform .18s; will-change:transform;
        }
        .hv4-btn-p:hover { background:${GREEN}; transform:translateY(-2px); }
        .hv4-btn-g {
          background:transparent; color:${NAVY};
          border:1.5px solid rgba(8,33,60,0.16); padding:15px 34px; border-radius:100px;
          font-size:15px; font-weight:700; cursor:pointer; font-family:inherit; min-height:52px;
          transition:border-color .22s;
        }
        .hv4-btn-g:hover { border-color:rgba(8,33,60,0.45); }

        @media (max-width:600px) {
          .hv4-metric-cell { min-width:50%; border-bottom:1px solid rgba(8,33,60,0.06); }
        }
      `}</style>

      <section className="hv4-section">
        <div className="hv4-bloom" aria-hidden="true" />

        <div className="hv4-center">
          {/* Eyebrow */}
          <motion.div {...fadeUp(0)} style={{ marginBottom:18 }}>
            <span style={{
              display:'inline-flex', alignItems:'center', gap:8,
              fontSize:'clamp(10px,.75vw,12px)', fontWeight:800,
              letterSpacing:'2.5px', textTransform:'uppercase', color:GREEN,
            }}>
              <span style={{ width:22, height:2, background:GREEN, borderRadius:1 }} />
              SEO · Branding · Digital Marketing
              <span style={{ width:22, height:2, background:GREEN, borderRadius:1 }} />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 {...fadeUp(0.07)} style={{
            fontSize:'clamp(52px,9vw,136px)', fontWeight:900,
            letterSpacing:'-0.045em', lineHeight:0.88,
            textTransform:'uppercase', color:NAVY,
            marginBottom:'clamp(18px,2.2vw,28px)',
          }}>
            Rank Higher.<br />
            <span style={{ color:GREEN }}>Grow</span> Faster.
          </motion.h2>

          <motion.p {...fadeUp(0.14)} style={{
            fontSize:'clamp(15px,1.2vw,19px)', color:'rgba(8,33,60,0.52)',
            lineHeight:1.82, maxWidth:580, margin:'0 auto clamp(28px,3vw,44px)',
          }}>
            Technical SEO, standout branding, and precision paid media —
            we put your business in front of the right audience and keep it
            performing at its peak.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="hv4-cta-row" style={{ marginBottom:0 }}>
            <button className="hv4-btn-p">
              Boost My Rankings
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
            <button className="hv4-btn-g">Free SEO Audit</button>
          </motion.div>

          {/* Metric strip */}
          <motion.div {...fadeUp(0.26)} className="hv4-metric-strip">
            {METRICS.map((m) => (
              <div key={m.lbl} className="hv4-metric-cell">
                <div style={{ fontSize:'clamp(22px,2.5vw,34px)', fontWeight:900, color:m.color, letterSpacing:'-0.04em', lineHeight:1 }}>{m.val}</div>
                <div style={{ fontSize:'clamp(10px,0.72vw,11px)', fontWeight:700, color:'rgba(8,33,60,0.38)', marginTop:5, letterSpacing:'0.8px', textTransform:'uppercase' }}>{m.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hv4-bottom">
        {/* Analytics chart card */}
        <motion.div
          initial={{ opacity:0, y:48 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-40px' }}
          transition={{ duration:1.1, ease:EASE, delay:0.28 }}
          className="hv4-chart-card"
        >
          {/* Card header — browser chrome style */}
          <div className="hv4-chart-header">
            <div style={{ display:'flex', gap:5 }}>
              {['#ff5f57','#ffbd2e','#28ca41'].map(c => (
                <div key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />
              ))}
            </div>
            <div style={{ flex:1, textAlign:'center' }}>
              <span style={{ fontSize:11, fontWeight:700, color:'rgba(8,33,60,0.35)', fontFamily:'SF Mono,Consolas,monospace' }}>analytics.egdigital.com.au — Organic Traffic · Last 12 months</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:6, background:`${GREEN}14`, border:`1px solid ${GREEN}30`, borderRadius:100, padding:'4px 12px' }}>
              <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 7L3.5 3L5.5 5L7 1" stroke={GREEN} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontSize:10, fontWeight:800, color:GREEN }}>+284% YoY</span>
            </div>
          </div>

          <div className="hv4-chart-body">
            {/* Bar chart */}
            <div className="hv4-bars">
              {BARS.map((h, i) => (
                <div key={i} className="hv4-bar" style={{
                  height:`${h}%`,
                  background: i >= 8
                    ? `linear-gradient(to top, ${GREEN}, #2dd4a0)`
                    : `rgba(8,33,60,0.08)`,
                  animationDelay:`${i * 0.06}s`,
                }} />
              ))}
            </div>

            {/* Month labels */}
            <div style={{ display:'flex', gap:'inherit', marginTop:8, justifyContent:'space-between', padding:'0 2px' }}>
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                <span key={m} style={{ flex:1, textAlign:'center', fontSize:10, color:'rgba(8,33,60,0.3)', fontWeight:600 }}>{m}</span>
              ))}
            </div>
          </div>

          <div className="hv4-chart-footer">
            <div style={{ display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}>
              {[
                { color:GREEN, label:'Organic Traffic' },
                { color:'rgba(8,33,60,0.12)', label:'Previous Year' },
              ].map(l => (
                <div key={l.label} style={{ display:'flex', alignItems:'center', gap:5 }}>
                  <div style={{ width:10, height:10, borderRadius:2, background:l.color }} />
                  <span style={{ fontSize:11, fontWeight:600, color:'rgba(8,33,60,0.45)' }}>{l.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:16 }}>
              {['SEO','Paid Media','Content','Email'].map(t => (
                <span key={t} style={{ fontSize:10, fontWeight:700, color:'rgba(8,33,60,0.4)', background:'rgba(8,33,60,0.05)', padding:'4px 10px', borderRadius:6 }}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Google SERP ranking card */}
        <motion.div
          initial={{ opacity:0, y:48 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-40px' }}
          transition={{ duration:1.1, ease:EASE, delay:0.38 }}
          className="hv4-serp-card"
        >
          <div className="hv4-chart-header">
            <div style={{ display:'flex', gap:5 }}>
              {['#ff5f57','#ffbd2e','#28ca41'].map(c => (
                <div key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />
              ))}
            </div>
            <div style={{ flex:1, textAlign:'center' }}>
              <span style={{ fontSize:11, fontWeight:700, color:'rgba(8,33,60,0.35)', fontFamily:'SF Mono,Consolas,monospace' }}>google.com.au — Search Results</span>
            </div>
          </div>

          <div className="hv4-serp-search">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="rgba(8,33,60,0.35)" strokeWidth="2"/><path d="M20 20L16.5 16.5" stroke="rgba(8,33,60,0.35)" strokeWidth="2" strokeLinecap="round"/></svg>
            <span style={{ fontSize:12, color:'rgba(8,33,60,0.45)', fontWeight:600 }}>ecommerce agency sydney</span>
          </div>

          <div className="hv4-serp-results">
            <div className="hv4-serp-row is-client">
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:2 }}>
                <span style={{ fontSize:9, fontWeight:800, letterSpacing:'1px', color:GREEN, background:`${GREEN}1a`, padding:'2px 8px', borderRadius:100 }}>#1 RANKING</span>
                <span style={{ fontSize:9, fontWeight:700, color:GREEN }}>▲ +12 positions</span>
              </div>
              <span style={{ fontSize:13, fontWeight:800, color:'#1a0dab' }}>Nova Commerce — Premium Online Store</span>
              <span style={{ fontSize:11, color:'rgba(8,33,60,0.5)', lineHeight:1.5 }}>novacommerce.com.au — Shop the new season collection. Free shipping Australia-wide on all orders.</span>
            </div>

            <div className="hv4-serp-row" style={{ opacity:0.55 }}>
              <span style={{ fontSize:13, fontWeight:700, color:'#1a0dab' }}>Competitor Store Co.</span>
              <span style={{ fontSize:11, color:'rgba(8,33,60,0.42)', lineHeight:1.5 }}>competitorstore.com.au — Online shopping for fashion &amp; homeware.</span>
            </div>

            <div className="hv4-serp-row" style={{ opacity:0.4 }}>
              <span style={{ fontSize:13, fontWeight:700, color:'#1a0dab' }}>Generic Marketplace</span>
              <span style={{ fontSize:11, color:'rgba(8,33,60,0.42)', lineHeight:1.5 }}>marketplace.com.au — Millions of products, low prices.</span>
            </div>
          </div>

          <div className="hv4-chart-footer" style={{ borderTop:'1px solid rgba(8,33,60,0.06)', paddingTop:14 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <div style={{ width:10, height:10, borderRadius:2, background:GREEN }} />
              <span style={{ fontSize:11, fontWeight:600, color:'rgba(8,33,60,0.45)' }}>Position 13 → Position 1 in 6 months</span>
            </div>
          </div>
        </motion.div>
        </div>

      </section>
    </>
  )
}


// ─────────────────────────────────────────────────────────────────────────────
// HERO V5 — Structure 3: Full animated network BG + centered text
// Theme: End-to-End Digital Transformation (light background)
// ─────────────────────────────────────────────────────────────────────────────
export function HeroV5() {
  const nodes = [
    { cx:80,  cy:120, r:3.0 }, { cx:220, cy:60,  r:2.0 },
    { cx:380, cy:140, r:3.5 }, { cx:540, cy:80,  r:2.0 },
    { cx:680, cy:160, r:2.5 }, { cx:820, cy:90,  r:4.0 },
    { cx:960, cy:150, r:2.0 }, { cx:120, cy:280, r:3.5 },
    { cx:300, cy:320, r:2.0 }, { cx:460, cy:260, r:3.0 },
    { cx:600, cy:310, r:3.5 }, { cx:750, cy:240, r:2.0 },
    { cx:900, cy:300, r:3.0 }, { cx:60,  cy:420, r:2.0 },
    { cx:200, cy:460, r:3.5 }, { cx:420, cy:400, r:2.0 },
    { cx:580, cy:450, r:3.0 }, { cx:720, cy:380, r:2.0 },
    { cx:860, cy:440, r:3.5 }, { cx:980, cy:390, r:2.5 },
  ]
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[7,8],[8,9],[9,10],[10,11],[11,12],
    [13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[0,7],[1,8],[2,9],[3,10],
    [4,11],[5,12],[7,13],[8,14],[9,15],[10,16],[11,17],[12,18],[6,19],
  ]

  const SERVICE_CARDS = [
    { icon:'⬡', label:'Custom Development', sub:'React · Node · Mobile', accent:NAVY },
    { icon:'☁', label:'Microsoft Solutions', sub:'365 · Azure · Dynamics', accent:'#0078d4' },
    { icon:'⚙', label:'AI Cybersecurity',    sub:'Defender · Sentinel',  accent:'#ef4444' },
    { icon:'📈', label:'Growth Marketing',    sub:'SEO · Ads · Branding', accent:GREEN },
  ]

  const ROADMAP = [
    { n:'01', label:'Discover',     sub:'Audit & Strategy' },
    { n:'02', label:'Design & Build', sub:'Dev · Cloud Setup' },
    { n:'03', label:'Launch',       sub:'Deploy & Train' },
    { n:'04', label:'Grow',         sub:'SEO · Ongoing Support' },
  ]

  return (
    <>
      <style>{`
        @keyframes hv5-node-pulse {
          0%,100%{opacity:.25; transform:scale(1);}
          50%{opacity:.7; transform:scale(1.8);}
        }
        @keyframes hv5-line-fade {
          0%,100%{opacity:.04;}
          50%{opacity:.14;}
        }
        @keyframes hv5-card-float-a { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-7px);} }
        @keyframes hv5-card-float-b { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-5px);} }

        .hv5-section {
          min-height:100svh; background:#f9f9f9;
          display:flex; flex-direction:column; align-items:center;
          justify-content:center;
          padding:clamp(90px,11vh,140px) clamp(24px,4vw,64px) clamp(48px,7vw,96px);
          position:relative; overflow:hidden; text-align:center;
        }
        .hv5-network {
          position:absolute; inset:0; width:100%; height:100%;
          pointer-events:none; z-index:0;
        }
        /* radial fog in center — keeps text readable over network */
        .hv5-fog {
          position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:clamp(480px,70vw,900px); height:clamp(360px,50vh,640px);
          background:radial-gradient(ellipse, rgba(249,249,249,0.98) 20%, rgba(249,249,249,0.7) 55%, transparent 80%);
          pointer-events:none; z-index:1;
        }
        /* green bloom */
        .hv5-bloom {
          position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:clamp(400px,60vw,800px); height:clamp(300px,40vh,600px);
          background:radial-gradient(ellipse, rgba(60,185,140,0.09) 0%, transparent 65%);
          pointer-events:none; z-index:0; border-radius:50%;
        }

        .hv5-center {
          position:relative; z-index:2;
          max-width:min(calc(100vw - 48px), 900px);
          margin:0 auto;
        }

        /* Service cards strip */
        .hv5-cards {
          display:grid; grid-template-columns:repeat(4,1fr);
          gap:clamp(10px,1.2vw,16px);
          width:100%; max-width:min(calc(100vw - 48px), 1100px);
          margin:clamp(32px,4vw,52px) auto 0;
          position:relative; z-index:2;
        }
        .hv5-card {
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:14px; padding:clamp(14px,1.5vw,20px);
          text-align:left; box-shadow:0 2px 16px rgba(8,33,60,0.07);
          will-change:transform;
        }
        .hv5-card:nth-child(odd)  { animation:hv5-card-float-a 5s ease-in-out infinite; }
        .hv5-card:nth-child(even) { animation:hv5-card-float-b 6s ease-in-out infinite 0.8s; }
        .hv5-card-icon {
          width:36px; height:36px; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          font-size:18px; margin-bottom:10px;
          transition:transform .25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .hv5-card { transition:border-color .25s, box-shadow .25s; cursor:default; }
        .hv5-card:hover { border-color:rgba(60,185,140,0.4); box-shadow:0 14px 40px rgba(8,33,60,0.13); }
        .hv5-card:hover .hv5-card-icon { transform:scale(1.12) rotate(-4deg); }
        .hv5-roadmap-num { transition:transform .25s cubic-bezier(0.34,1.56,0.64,1), background .2s, color .2s, border-color .2s; }
        .hv5-roadmap-step:hover .hv5-roadmap-num { transform:scale(1.14); background:${GREEN}; border-color:${GREEN}; color:#fff; }

        .hv5-cta-row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .hv5-btn-p {
          background:${NAVY}; color:#fff; border:none;
          padding:16px 38px; border-radius:100px; font-size:15px; font-weight:700;
          cursor:pointer; font-family:inherit; min-height:54px;
          display:inline-flex; align-items:center; gap:10px;
          transition:background .22s,transform .18s; will-change:transform;
        }
        .hv5-btn-p:hover { background:${GREEN}; transform:translateY(-2px); }
        .hv5-btn-g {
          background:transparent; color:${NAVY};
          border:1.5px solid rgba(8,33,60,0.16); padding:16px 38px; border-radius:100px;
          font-size:15px; font-weight:700; cursor:pointer; font-family:inherit; min-height:54px;
          transition:border-color .22s;
        }
        .hv5-btn-g:hover { border-color:rgba(8,33,60,0.45); }

        @media (max-width:700px) { .hv5-cards { grid-template-columns:1fr 1fr; } }
        @media (max-width:400px) { .hv5-cards { grid-template-columns:1fr; } }

        /* transformation roadmap */
        .hv5-roadmap {
          display:flex; justify-content:space-between; align-items:flex-start;
          width:100%; max-width:min(calc(100vw - 48px), 880px);
          margin:0 auto; position:relative; z-index:2;
        }
        .hv5-roadmap::before {
          content:''; position:absolute; top:18px; left:9%; right:9%; height:2px;
          background:linear-gradient(90deg, rgba(8,33,60,0.1), ${GREEN}66 50%, rgba(8,33,60,0.1));
          z-index:0;
        }
        .hv5-roadmap-step {
          position:relative; z-index:1; flex:1;
          display:flex; flex-direction:column; align-items:center; gap:9px; text-align:center;
        }
        .hv5-roadmap-num {
          width:36px; height:36px; border-radius:50%;
          background:#fff; border:2px solid ${NAVY};
          display:flex; align-items:center; justify-content:center;
          font-size:13px; font-weight:900; color:${NAVY};
        }
        .hv5-roadmap-step:last-child .hv5-roadmap-num { border-color:${GREEN}; color:${GREEN}; }
        .hv5-roadmap-label { font-size:clamp(11px,0.95vw,14px); font-weight:800; color:${NAVY}; letter-spacing:-0.01em; }
        .hv5-roadmap-sub { font-size:clamp(9px,0.7vw,11px); color:rgba(8,33,60,0.4); font-weight:600; }

        @media (max-width:700px) {
          .hv5-roadmap { flex-wrap:wrap; row-gap:24px; column-gap:0; }
          .hv5-roadmap::before { display:none; }
          .hv5-roadmap-step { flex:0 0 50%; }
        }
        @media (max-width:400px) {
          .hv5-roadmap-step { flex:0 0 100%; }
        }
      `}</style>

      <section className="hv5-section">
        {/* Network BG */}
        <svg className="hv5-network" viewBox="0 0 1040 520" preserveAspectRatio="xMidYMid slice">
          {edges.map(([a, b], i) => (
            <line key={i}
              x1={nodes[a].cx} y1={nodes[a].cy}
              x2={nodes[b].cx} y2={nodes[b].cy}
              stroke={NAVY} strokeWidth="0.7"
              style={{
                animation:`hv5-line-fade ${4+(i%5)}s ease-in-out infinite`,
                animationDelay:`${(i%7)*0.4}s`,
              }}
            />
          ))}
          {nodes.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={GREEN}
              style={{
                animation:`hv5-node-pulse ${2.5+(i%4)*0.6}s ease-in-out infinite`,
                animationDelay:`${(i%6)*0.35}s`,
                transformOrigin:`${n.cx}px ${n.cy}px`,
              }}
            />
          ))}
        </svg>

        <div className="hv5-bloom" aria-hidden="true" />
        <div className="hv5-fog" aria-hidden="true" />

        <div className="hv5-center">
          <motion.div {...fadeUp(0)} style={{ marginBottom:20 }}>
            <span style={{
              display:'inline-flex', alignItems:'center', gap:10,
              fontSize:'clamp(10px,.75vw,12px)', fontWeight:800,
              letterSpacing:'2.5px', textTransform:'uppercase', color:GREEN,
            }}>
              <span style={{ width:22, height:2, background:GREEN, borderRadius:1 }} />
              EG Digital · Sydney, Australia · Est. 2021
              <span style={{ width:22, height:2, background:GREEN, borderRadius:1 }} />
            </span>
          </motion.div>

          <div style={{ position:'relative', left:'50%', transform:'translateX(-50%)', width:'max-content', maxWidth:'100vw' }}>
            <motion.h2 {...fadeUp(0.07)} style={{
              fontSize:'clamp(48px,8.5vw,132px)', fontWeight:900,
              letterSpacing:'-0.045em', lineHeight:0.88,
              textTransform:'uppercase', color:NAVY, textAlign:'center',
              marginBottom:'clamp(18px,2.2vw,28px)',
            }}>
              End-to-End<br />
              <span style={{ color:GREEN }}>Digital</span><br />
              Transformation
            </motion.h2>
          </div>

          <motion.p {...fadeUp(0.16)} style={{
            fontSize:'clamp(15px,1.2vw,19px)', color:'rgba(8,33,60,0.52)',
            lineHeight:1.82, maxWidth:640, margin:'0 auto clamp(28px,3.2vw,48px)',
          }}>
            Microsoft licensing, custom development, AI cybersecurity, and digital marketing
            — all delivered by one expert team, built for Australian businesses ready
            to lead their industry.
          </motion.p>

          <motion.div {...fadeUp(0.22)} className="hv5-cta-row">
            <button className="hv5-btn-p">
              Book a Discovery Call
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
            <button className="hv5-btn-g">Explore Services</button>
          </motion.div>
        </div>

        {/* Transformation roadmap */}
        <motion.div
          className="hv5-roadmap"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-40px' }}
          transition={{ duration:0.9, ease:EASE, delay:0.26 }}
          style={{ marginTop:'clamp(36px,4.5vw,56px)' }}
        >
          {ROADMAP.map((s) => (
            <div key={s.n} className="hv5-roadmap-step">
              <div className="hv5-roadmap-num">{s.n}</div>
              <div className="hv5-roadmap-label">{s.label}</div>
              <div className="hv5-roadmap-sub">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Service cards */}
        <motion.div
          className="hv5-cards"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-40px' }}
          transition={{ duration:0.9, ease:EASE, delay:0.3 }}
        >
          {SERVICE_CARDS.map((c, i) => (
            <div key={c.label} className="hv5-card" style={{ animationDelay:`${i*0.2}s` }}>
              <div className="hv5-card-icon" style={{ background:`${c.accent}12` }}>
                <span style={{ fontSize:16 }}>{c.icon}</span>
              </div>
              <div style={{ fontSize:'clamp(12px,1vw,14px)', fontWeight:800, color:NAVY, lineHeight:1.2, marginBottom:4 }}>{c.label}</div>
              <div style={{ fontSize:'clamp(10px,0.72vw,11px)', color:'rgba(8,33,60,0.4)', fontWeight:600 }}>{c.sub}</div>
            </div>
          ))}
        </motion.div>

      </section>
    </>
  )
}


// ─────────────────────────────────────────────────────────────────────────────
// HERO V6 — Structure 4: Left content + right full-height image
// Theme: Industries We Serve (light background, premium)
// ─────────────────────────────────────────────────────────────────────────────
export function HeroV6() {
  const INDUSTRIES = [
    { name:'Healthcare',          accent:'#ef4444' },
    { name:'Banking & Finance',   accent:'#0078d4' },
    { name:'Real Estate',         accent:'#d97706' },
    { name:'Manufacturing',       accent:'#6366f1' },
    { name:'Education',           accent:'#0891b2' },
    { name:'Logistics',           accent:'#16a34a' },
    { name:'Hospitality',         accent:'#e11d48' },
    { name:'Non-Profit',          accent:GREEN },
    { name:'IT & Professional',   accent:NAVY },
    { name:'Agriculture',         accent:'#84cc16' },
  ]

  return (
    <>
      <style>{`
        @keyframes hv6-float-card { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-7px);} }

        .hv6-section {
          min-height:100svh; background:#fff;
          display:grid; grid-template-columns:1fr 1fr;
          position:relative; overflow:hidden;
        }

        /* left panel */
        .hv6-left {
          display:flex; align-items:center;
          padding:clamp(90px,11vh,140px) clamp(24px,4vw,72px) clamp(60px,8vh,100px) clamp(24px,4vw,72px);
          position:relative; z-index:1; overflow:hidden;
        }
        /* ghost "14" watermark */
        .hv6-watermark {
          position:absolute; bottom:-6%; left:-3%;
          font-size:clamp(160px,24vw,340px); font-weight:900;
          color:rgba(8,33,60,0.03); letter-spacing:-0.06em;
          line-height:1; pointer-events:none; user-select:none;
          text-transform:uppercase;
        }
        .hv6-left-inner { position:relative; z-index:1; max-width:620px; width:100%; }

        /* industry card grid */
        .hv6-ind-grid {
          display:grid; grid-template-columns:1fr 1fr;
          gap:7px; margin-bottom:clamp(24px,3vw,40px);
        }
        .hv6-ind-card {
          display:flex; align-items:center; gap:9px;
          padding:9px 12px; border-radius:10px;
          border:1px solid rgba(8,33,60,0.07);
          background:#fff; transition:border-color .2s, background .2s, transform .2s;
          cursor:default;
        }
        .hv6-ind-card:hover { border-color:rgba(60,185,140,0.4); background:rgba(60,185,140,0.06); transform:translateX(4px); }
        .hv6-ind-card:hover .hv6-ind-dot { transform:scale(1.4); }
        .hv6-ind-dot { transition:transform .2s cubic-bezier(0.34,1.56,0.64,1); }
        .hv6-collage-main img, .hv6-collage-sm img { transition:transform .55s cubic-bezier(0.16,1,0.3,1); }
        .hv6-collage-main:hover img, .hv6-collage-sm:hover img { transform:scale(1.06); }
        .hv6-img-card { transition:border-color .25s, box-shadow .25s; }
        .hv6-img-card:hover { border-color:rgba(60,185,140,0.4); box-shadow:0 12px 40px rgba(8,33,60,0.2); }
        .hv6-ind-dot { width:8px; height:8px; border-radius:2px; flex-shrink:0; }
        .hv6-ind-name { font-size:clamp(11px,.82vw,13px); font-weight:700; color:${NAVY}; }
        .hv6-more {
          grid-column:1/-1; text-align:center;
          padding:8px; border-radius:10px; border:1px dashed rgba(8,33,60,0.1);
          font-size:12px; fontWeight:600; color:'rgba(8,33,60,0.4)';
        }

        .hv6-stat-row {
          display:flex; gap:clamp(18px,2.5vw,32px);
          padding:clamp(14px,1.8vw,20px) 0;
          border-top:1px solid rgba(8,33,60,0.07);
          border-bottom:1px solid rgba(8,33,60,0.07);
          margin-bottom:clamp(22px,2.8vw,36px);
        }
        .hv6-stat-v { font-size:clamp(20px,2vw,28px); font-weight:900; color:${NAVY}; letter-spacing:-0.04em; line-height:1; }
        .hv6-stat-l { font-size:10px; font-weight:700; color:rgba(8,33,60,0.36); text-transform:uppercase; letter-spacing:1.2px; margin-top:3px; }

        .hv6-cta-row { display:flex; gap:12px; flex-wrap:wrap; }
        .hv6-btn-p {
          background:${NAVY}; color:#fff; border:none;
          padding:14px 30px; border-radius:100px; font-size:14px; font-weight:700;
          cursor:pointer; font-family:inherit; min-height:50px;
          display:inline-flex; align-items:center; gap:10px;
          transition:background .22s,transform .18s; will-change:transform;
        }
        .hv6-btn-p:hover { background:${GREEN}; transform:translateY(-2px); }
        .hv6-btn-g {
          background:transparent; color:${NAVY};
          border:1.5px solid rgba(8,33,60,0.16); padding:14px 30px; border-radius:100px;
          font-size:14px; font-weight:700; cursor:pointer; font-family:inherit; min-height:50px;
          transition:border-color .22s;
        }
        .hv6-btn-g:hover { border-color:rgba(8,33,60,0.45); }

        /* right panel — image collage */
        .hv6-right {
          position:relative; overflow:hidden; min-height:100svh;
          display:flex; align-items:stretch;
          padding:clamp(20px,2.6vw,36px) clamp(20px,2.6vw,36px) clamp(20px,2.6vw,36px) 0;
        }
        .hv6-collage {
          display:grid; grid-template-rows:1.5fr 1fr;
          gap:clamp(8px,1vw,14px); width:100%; height:100%; flex:1;
          min-height:clamp(400px,60svh,900px);
        }
        .hv6-collage-row {
          display:grid; grid-template-columns:1fr 1fr; gap:inherit;
        }
        .hv6-collage-main, .hv6-collage-sm {
          position:relative; overflow:hidden;
          border-radius:clamp(14px,1.6vw,22px);
          background:rgba(8,33,60,0.04);
        }
        .hv6-collage-main img, .hv6-collage-sm img {
          width:100%; height:100%; object-fit:cover; display:block;
        }
        /* gradient fade on main image's left edge into left panel */
        .hv6-collage-main::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(to right, rgba(255,255,255,0.5) 0%, transparent 22%);
          pointer-events:none;
        }
        /* caption chip on small images */
        .hv6-collage-tag {
          position:absolute; left:10px; bottom:10px; z-index:2;
          font-size:10px; font-weight:800; letter-spacing:0.6px; text-transform:uppercase;
          color:#fff; background:rgba(8,33,60,0.55); backdrop-filter:blur(6px);
          padding:5px 10px; border-radius:100px;
        }
        /* floating stat card on image */
        .hv6-img-card {
          position:absolute; z-index:3;
          background:#fff; border:1px solid rgba(8,33,60,0.08);
          border-radius:14px; padding:14px 18px;
          box-shadow:0 6px 28px rgba(8,33,60,0.13);
          animation:hv6-float-card 5s ease-in-out infinite;
          will-change:transform;
        }
        .hv6-img-card-a { top:8%; right:8%; }
        .hv6-img-card-b { bottom:8%; right:8%; animation-delay:1.5s; }

        @media (max-width:880px) {
          .hv6-section { grid-template-columns:1fr; }
          .hv6-right { min-height:64svh; padding:clamp(16px,3vw,28px); }
          .hv6-watermark { display:none; }
        }
        @media (max-width:540px) {
          .hv6-collage { grid-template-rows:1.3fr 1fr; }
          .hv6-img-card { padding:10px 14px; }
          .hv6-img-card-a { top:6%; right:6%; }
        }
      `}</style>

      <section className="hv6-section">
        {/* Left */}
        <div className="hv6-left">
          <div className="hv6-watermark" aria-hidden="true">14</div>
          <div className="hv6-left-inner">
            <motion.div {...fadeUp(0)} style={{ marginBottom:18 }}>
              <span style={{
                display:'inline-flex', alignItems:'center', gap:8,
                fontSize:'clamp(10px,.75vw,12px)', fontWeight:800,
                letterSpacing:'2.5px', textTransform:'uppercase', color:GREEN,
              }}>
                <span style={{ width:22, height:2, background:GREEN, borderRadius:1 }} />
                Industry Expertise
              </span>
            </motion.div>

            <motion.h2 {...fadeUp(0.07)} style={{
              fontSize:'clamp(52px,6.5vw,100px)', fontWeight:900,
              letterSpacing:'-0.045em', lineHeight:0.88,
              textTransform:'uppercase', color:NAVY,
              marginBottom:'clamp(16px,2vw,24px)',
            }}>
              Built For<br />
              <span style={{ color:GREEN }}>Every</span><br />
              Industry.
            </motion.h2>

            <motion.p {...fadeUp(0.14)} style={{
              fontSize:'clamp(15px,1.15vw,18px)', color:'rgba(8,33,60,0.52)',
              lineHeight:1.82, maxWidth:460,
              marginBottom:'clamp(20px,2.5vw,32px)',
            }}>
              From healthcare to hospitality, we deliver tailored digital strategies
              built around the unique challenges of your sector.
            </motion.p>

            {/* Stat row */}
            <motion.div {...fadeUp(0.18)} className="hv6-stat-row">
              {[{ v:'14', l:'Industries' }, { v:'50+', l:'Projects' }, { v:'5yr', l:'Experience' }].map(s => (
                <div key={s.l}>
                  <div className="hv6-stat-v">{s.v}</div>
                  <div className="hv6-stat-l">{s.l}</div>
                </div>
              ))}
            </motion.div>

            {/* Industry card grid */}
            <motion.div {...fadeUp(0.22)} className="hv6-ind-grid">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="hv6-ind-card">
                  <div className="hv6-ind-dot" style={{ background:ind.accent }} />
                  <span className="hv6-ind-name">{ind.name}</span>
                </div>
              ))}
              <div className="hv6-more">
                <span style={{ fontSize:12, fontWeight:600, color:'rgba(8,33,60,0.38)' }}>+4 more industries</span>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.28)} className="hv6-cta-row">
              <button className="hv6-btn-p">
                Find Your Industry
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <button className="hv6-btn-g">Our Case Studies</button>
            </motion.div>
          </div>
        </div>

        {/* Right — image collage + floating cards */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:1.2, ease:EASE, delay:0.1 }}
          className="hv6-right"
        >
          <div className="hv6-collage">
            <div className="hv6-collage-main">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=900&q=80&fit=crop"
                alt="EG Digital team workshop with a healthcare client"
                loading="lazy" decoding="async" width={1000} height={900}
              />
              <span className="hv6-collage-tag">Client Workshop</span>
            </div>
            <div className="hv6-collage-row">
              <div className="hv6-collage-sm">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=520&q=80&fit=crop"
                  alt="Custom dashboard build for a finance client"
                  loading="lazy" decoding="async" width={600} height={520}
                />
                <span className="hv6-collage-tag">Dashboard Build</span>
              </div>
              <div className="hv6-collage-sm">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=520&q=80&fit=crop"
                  alt="Strategy session for a retail rollout"
                  loading="lazy" decoding="async" width={600} height={520}
                />
                <span className="hv6-collage-tag">Strategy Session</span>
              </div>
            </div>
          </div>

          {/* Floating stat card A */}
          <div className="hv6-img-card hv6-img-card-a">
            <div style={{ fontSize:10, fontWeight:800, letterSpacing:'1.3px', textTransform:'uppercase', color:'rgba(8,33,60,0.36)', marginBottom:5 }}>Industries Served</div>
            <div style={{ fontSize:32, fontWeight:900, color:NAVY, letterSpacing:'-0.04em', lineHeight:1 }}>14+</div>
            <div style={{ display:'flex', gap:4, marginTop:6, flexWrap:'wrap' }}>
              {['Healthcare','Finance','Retail','Tech'].map(i => (
                <span key={i} style={{ fontSize:9, fontWeight:700, padding:'2px 6px', borderRadius:4, background:'rgba(8,33,60,0.05)', color:'rgba(8,33,60,0.45)' }}>{i}</span>
              ))}
            </div>
          </div>

          {/* Floating stat card B */}
          <div className="hv6-img-card hv6-img-card-b">
            <div style={{ display:'flex', alignItems:'center', gap:7 }}>
              <div style={{ width:7, height:7, borderRadius:'50%', background:GREEN }} />
              <span style={{ fontSize:12, fontWeight:700, color:NAVY }}>Tailored Strategy</span>
            </div>
            <div style={{ fontSize:10, color:'rgba(8,33,60,0.4)', marginTop:4 }}>Custom solution per sector</div>
          </div>
        </motion.div>
      </section>
    </>
  )
}


// ─────────────────────────────────────────────────────────────────────────────
// HERO V7 — Structure 5: Center content + 4 floating service cards
// Theme: All four service pillars united (light background, premium)
// ─────────────────────────────────────────────────────────────────────────────
export function HeroV7() {
  const cards = [
    {
      id:'ms', label:'Microsoft Solutions',
      icon:<div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2.5, width:22, height:22 }}>{['#f25022','#7fba00','#00a4ef','#ffb900'].map(c=><span key={c} style={{ display:'block', background:c, borderRadius:1.5 }}/>)}</div>,
      items:['Microsoft 365', 'Dynamics CRM', 'Azure Cloud'],
      stat:'22 Clients', statColor:'#0078d4',
      color:'#0078d4', pos:{ top:'10%', left:'3%' }, anim:'hv7-float-a', dur:'4.4s', delay:'0s',
    },
    {
      id:'dev', label:'Digital Development',
      icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 9L4 12L8 15M16 9L20 12L16 15M13 6L11 18" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      items:['Web & App Build', 'Custom Software', 'Shopify / React'],
      stat:'50+ Delivered', statColor:GREEN,
      color:GREEN, pos:{ top:'8%', right:'3%' }, anim:'hv7-float-b', dur:'5.2s', delay:'-1.4s',
    },
    {
      id:'sec', label:'AI Cybersecurity',
      icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="12" rx="1.5" stroke="#ef4444" strokeWidth="1.8"/><path d="M8 20H16M12 16V20" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round"/><rect x="9.4" y="8.2" width="5.2" height="4.2" rx="0.8" stroke="#ef4444" strokeWidth="1.6"/><path d="M10.2 8.2V7a1.8 1.8 0 0 1 3.6 0v1.2" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round"/></svg>,
      items:['MS Defender XDR', 'Zero-Trust Arch', '24/7 Monitoring'],
      stat:'178+ Blocked/day', statColor:'#ef4444',
      color:'#ef4444', pos:{ bottom:'12%', left:'3%' }, anim:'hv7-float-c', dur:'4.8s', delay:'-0.7s',
    },
    {
      id:'mkt', label:'Growth Marketing',
      icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17L7 13L11 15L17 8L21 11" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="21" cy="11" r="1.5" fill="#d97706"/></svg>,
      items:['Organic SEO', 'Google / Meta Ads', 'Brand & Creative'],
      stat:'+284% Traffic', statColor:'#d97706',
      color:'#d97706', pos:{ bottom:'10%', right:'3%' }, anim:'hv7-float-d', dur:'5.6s', delay:'-2.2s',
    },
  ]

  return (
    <>
      <style>{`
        @keyframes hv7-float-a { 0%,100%{transform:translateY(0) rotate(-1.5deg);} 50%{transform:translateY(-12px) rotate(-1.5deg);} }
        @keyframes hv7-float-b { 0%,100%{transform:translateY(0) rotate(1.5deg);}  50%{transform:translateY(-16px) rotate(1.5deg);}  }
        @keyframes hv7-float-c { 0%,100%{transform:translateY(0) rotate(-1deg);}   50%{transform:translateY(-9px) rotate(-1deg);}    }
        @keyframes hv7-float-d { 0%,100%{transform:translateY(0) rotate(2deg);}    50%{transform:translateY(-14px) rotate(2deg);}    }
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
          border:1px solid rgba(8,33,60,0.07); border-radius:16px;
          padding:16px 18px;
          box-shadow:0 8px 36px rgba(8,33,60,0.1);
          width:clamp(170px,18vw,230px);
          will-change:transform; z-index:3;
          transition:border-color .25s, box-shadow .25s;
        }
        .hv7-card:hover { border-color:rgba(60,185,140,0.4); box-shadow:0 18px 54px rgba(8,33,60,0.2); }
        .hv7-card-hd { display:flex; align-items:center; gap:9px; margin-bottom:10px; }
        .hv7-card-ico {
          width:34px; height:34px; border-radius:9px;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
          transition:transform .25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .hv7-card:hover .hv7-card-ico { transform:scale(1.12) rotate(-4deg); }
        .hv7-card-title { font-size:11.5px; font-weight:800; color:${NAVY}; line-height:1.25; }
        .hv7-card-items { display:flex; flex-direction:column; gap:4px; margin-bottom:10px; }
        .hv7-card-item {
          display:flex; align-items:center; gap:5px;
          font-size:10.5px; font-weight:600; color:rgba(8,33,60,0.52);
        }
        .hv7-card-dot { width:4px; height:4px; border-radius:50%; flex-shrink:0; }
        .hv7-card-stat {
          font-size:10px; font-weight:800; letter-spacing:'0.8px';
          padding:3px 9px; border-radius:100px;
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

      <section className="hv7-section">
        <div className="hv7-bloom-a" aria-hidden="true" />
        <div className="hv7-bloom-b" aria-hidden="true" />

        {/* Concentric rings */}
        {[180, 280, 380].map(r => (
          <div key={r} className="hv7-ring" style={{ width:r*2, height:r*2 }} aria-hidden="true" />
        ))}

        {/* Floating cards */}
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity:0, y:24, scale:0.9 }}
            whileInView={{ opacity:1, y:0, scale:1 }}
            viewport={{ once:true }}
            transition={{ duration:0.8, ease:EASE, delay:0.4+i*0.1 }}
            className="hv7-card"
            style={{ ...card.pos, animation:`${card.anim} ${card.dur} ease-in-out infinite`, animationDelay:card.delay }}
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
        ))}

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

          <motion.h2 {...fadeUp(0.07)} style={{ fontSize:'clamp(52px,8vw,120px)', fontWeight:900, letterSpacing:'-0.045em', lineHeight:0.9, textTransform:'uppercase', color:NAVY, marginBottom:0 }}>Transform.</motion.h2>
          <motion.h2 {...fadeUp(0.11)} style={{ fontSize:'clamp(52px,8vw,120px)', fontWeight:900, letterSpacing:'-0.045em', lineHeight:0.9, textTransform:'uppercase', color:GREEN, marginBottom:0 }}>Build.</motion.h2>
          <motion.h2 {...fadeUp(0.15)} style={{ fontSize:'clamp(52px,8vw,120px)', fontWeight:900, letterSpacing:'-0.045em', lineHeight:0.9, textTransform:'uppercase', color:NAVY, marginBottom:0 }}>Protect.</motion.h2>
          <motion.h2 {...fadeUp(0.19)} style={{ fontSize:'clamp(52px,8vw,120px)', fontWeight:900, letterSpacing:'-0.045em', lineHeight:0.9, textTransform:'uppercase', color:GREEN, marginBottom:'clamp(16px,2vw,28px)' }}>Grow.</motion.h2>

          <div className="hv7-divider" />

          <motion.p {...fadeUp(0.25)} style={{
            fontSize:'clamp(15px,1.15vw,18px)', color:'rgba(8,33,60,0.52)',
            lineHeight:1.82, maxWidth:540, margin:'0 auto clamp(28px,3.2vw,48px)',
          }}>
            Stop managing six vendors. EG Digital is your single point of accountability —
            from cloud infrastructure to custom software, cybersecurity to organic growth.
          </motion.p>

          {/* Inline stat strip */}
          <motion.div {...fadeUp(0.28)} style={{
            display:'flex', justifyContent:'center', gap:'clamp(20px,3vw,40px)',
            marginBottom:'clamp(28px,3.5vw,48px)',
          }}>
            {[{ v:'50+', l:'Projects' }, { v:'14', l:'Industries' }, { v:'5★', l:'Rating' }].map(s => (
              <div key={s.l} style={{ textAlign:'center' }}>
                <div style={{ fontSize:'clamp(20px,2vw,28px)', fontWeight:900, color:NAVY, letterSpacing:'-0.04em', lineHeight:1 }}>{s.v}</div>
                <div style={{ fontSize:10, fontWeight:700, color:'rgba(8,33,60,0.36)', textTransform:'uppercase', letterSpacing:'1.2px', marginTop:3 }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="hv7-cta-row">
            <button className="hv7-btn-p">
              Start Your Journey
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
            <button className="hv7-btn-g">Contact Us</button>
          </motion.div>
        </div>

      </section>
    </>
  )
}


// ─────────────────────────────────────────────────────────────────────────────
// Barrel export — all 7 variants in sequence
// ─────────────────────────────────────────────────────────────────────────────
export function HeroVariants() {
  return (
    <>
      <HeroV1 />
      <HeroV2 />
      <HeroV3 />
      <HeroV4 />
      <HeroV5 />
      <HeroV6 />
      <HeroV7 />
    </>
  )
}
