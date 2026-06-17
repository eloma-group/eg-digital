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
          position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.05);
        }
        /* glass sheen for a real-screen reflection */
        .hv1-glare {
          position:absolute; inset:0; z-index:6; pointer-events:none; border-radius:7px 7px 0 0;
          background:linear-gradient(118deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.06) 17%, rgba(255,255,255,0) 38%);
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
                  <div style={{ background:'linear-gradient(180deg,#ededea,#e3e3df)', borderBottom:'1px solid rgba(0,0,0,0.09)', padding:'6px 9px', display:'flex', alignItems:'center', gap:7, flexShrink:0 }}>
                    <div style={{ display:'flex', gap:5 }}>
                      {['#ff5f57','#ffbd2e','#28ca41'].map(c=><div key={c} style={{ width:8, height:8, borderRadius:'50%', background:c }} />)}
                    </div>
                    <div style={{ display:'flex', gap:7, marginLeft:4, color:'rgba(0,0,0,0.3)' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M5 1.5 2.5 4 5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M3 1.5 5.5 4 3 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ flex:1, background:'#fff', borderRadius:5, padding:'3px 9px', fontSize:8, color:'rgba(0,0,0,0.42)', fontFamily:'ui-monospace,monospace', border:'1px solid rgba(0,0,0,0.07)', whiteSpace:'nowrap', overflow:'hidden', display:'flex', alignItems:'center', gap:5 }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', border:`1px solid ${GREEN}`, flexShrink:0 }} />
                      app.novacommerce.com.au/analytics
                    </div>
                  </div>
                  {/* App shell — fully hand-built flat dashboard UI (sidebar + content) */}
                  <div style={{ flex:1, minHeight:0, display:'flex', background:'#eef2f8' }}>
                    {/* Sidebar */}
                    <div style={{ width:'13%', minWidth:34, maxWidth:56, background:NAVY, display:'flex', flexDirection:'column', alignItems:'center', padding:'8px 0', gap:7 }}>
                      <div style={{ width:14, height:14, background:GREEN, borderRadius:4, marginBottom:4 }} />
                      {[0,1,2,3,4].map(i=>(
                        <div key={i} style={{ width:'56%', height:5, borderRadius:2, background:i===0?GREEN:'rgba(255,255,255,0.16)' }} />
                      ))}
                      <div style={{ marginTop:'auto', width:13, height:13, borderRadius:'50%', background:'rgba(255,255,255,0.18)' }} />
                    </div>

                    {/* Main content */}
                    <div style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column', padding:'9px 10px', gap:7 }}>
                      {/* Page header */}
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
                        <div>
                          <div style={{ fontSize:11, fontWeight:900, color:NAVY, letterSpacing:'-0.02em', lineHeight:1 }}>Analytics Overview</div>
                          <div style={{ fontSize:6.5, color:'rgba(8,33,60,0.4)', marginTop:2, fontWeight:600 }}>Last 6 months · Jan – Jun</div>
                        </div>
                        <div style={{ display:'flex', gap:5, alignItems:'center' }}>
                          <div style={{ width:38, height:11, borderRadius:100, background:'#fff', border:'1px solid rgba(8,33,60,0.1)' }} />
                          <div style={{ width:11, height:11, borderRadius:'50%', background:`linear-gradient(135deg,${GREEN},${NAVY})` }} />
                        </div>
                      </div>

                      {/* KPI cards */}
                      <div style={{ display:'flex', gap:6, flexShrink:0 }}>
                        {[
                          { l:'Revenue', v:'$24.8k', d:'+18.4%', up:true },
                          { l:'Orders', v:'1,204', d:'+6.2%', up:true },
                          { l:'Users', v:'8,450', d:'+12%', up:true },
                          { l:'Conv. Rate', v:'3.6%', d:'-0.4%', up:false },
                        ].map(k=>(
                          <div key={k.l} style={{ flex:1, background:'#fff', borderRadius:6, border:'1px solid rgba(8,33,60,0.06)', boxShadow:'0 1px 2px rgba(8,33,60,0.04)', padding:'6px 7px' }}>
                            <div style={{ fontSize:6, color:'rgba(8,33,60,0.45)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.4px' }}>{k.l}</div>
                            <div style={{ fontSize:12, fontWeight:900, color:NAVY, letterSpacing:'-0.03em', lineHeight:1.1, marginTop:2 }}>{k.v}</div>
                            <div style={{ fontSize:6, fontWeight:700, color:k.up?GREEN:'#d9706f', marginTop:2 }}>{k.up?'↑':'↓'} {k.d}</div>
                          </div>
                        ))}
                      </div>

                      {/* Charts row */}
                      <div style={{ flex:1, minHeight:0, display:'flex', gap:6 }}>
                        {/* Area / line chart */}
                        <div style={{ flex:1.7, minWidth:0, background:'#fff', borderRadius:6, border:'1px solid rgba(8,33,60,0.06)', boxShadow:'0 1px 2px rgba(8,33,60,0.04)', padding:'7px 8px', display:'flex', flexDirection:'column' }}>
                          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
                            <div style={{ fontSize:7, fontWeight:800, color:NAVY }}>Revenue trend</div>
                            <div style={{ display:'flex', gap:5, alignItems:'center' }}>
                              <span style={{ fontSize:5.5, color:'rgba(8,33,60,0.45)', display:'inline-flex', alignItems:'center', gap:2 }}><span style={{ width:5, height:5, borderRadius:'50%', background:GREEN }} />2024</span>
                              <span style={{ fontSize:5.5, color:'rgba(8,33,60,0.45)', display:'inline-flex', alignItems:'center', gap:2 }}><span style={{ width:5, height:5, borderRadius:'50%', background:'rgba(8,33,60,0.3)' }} />2023</span>
                            </div>
                          </div>
                          <svg viewBox="0 0 100 42" preserveAspectRatio="none" style={{ flex:1, width:'100%', minHeight:0, marginTop:4 }}>
                            <defs>
                              <linearGradient id="hv1area" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={GREEN} stopOpacity="0.28" />
                                <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            {[10,20,30].map(y=><line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(8,33,60,0.06)" strokeWidth="0.4" />)}
                            <path d="M0,32 L16,26 L32,29 L48,17 L64,21 L80,9 L100,5 L100,42 L0,42 Z" fill="url(#hv1area)" />
                            <path d="M0,32 L16,26 L32,29 L48,17 L64,21 L80,9 L100,5" fill="none" stroke={GREEN} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0,36 L16,34 L32,35 L48,30 L64,32 L80,27 L100,24" fill="none" stroke="rgba(8,33,60,0.28)" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round" />
                          </svg>
                        </div>

                        {/* Donut */}
                        <div style={{ flex:1, minWidth:0, background:'#fff', borderRadius:6, border:'1px solid rgba(8,33,60,0.06)', boxShadow:'0 1px 2px rgba(8,33,60,0.04)', padding:'7px 8px', display:'flex', flexDirection:'column' }}>
                          <div style={{ fontSize:7, fontWeight:800, color:NAVY, flexShrink:0 }}>Traffic source</div>
                          <div style={{ flex:1, minHeight:0, display:'flex', alignItems:'center', justifyContent:'center', gap:7 }}>
                            <div style={{ width:'46%', aspectRatio:'1', borderRadius:'50%', background:`conic-gradient(${GREEN} 0 45%, ${NAVY} 45% 70%, #c7d2e0 70% 100%)`, position:'relative', flexShrink:0 }}>
                              <div style={{ position:'absolute', inset:'27%', borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:7, fontWeight:900, color:NAVY }}>45%</div>
                            </div>
                            <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
                              {[['Organic',GREEN],['Direct',NAVY],['Social','#c7d2e0']].map(([l,c])=>(
                                <div key={l as string} style={{ display:'flex', alignItems:'center', gap:3, fontSize:5.5, color:'rgba(8,33,60,0.55)', fontWeight:600 }}>
                                  <span style={{ width:5, height:5, borderRadius:'50%', background:c as string }} />{l}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom: bar chart + recent orders */}
                      <div style={{ flexShrink:0, display:'flex', gap:6 }}>
                        <div style={{ flex:1.7, background:'#fff', borderRadius:6, border:'1px solid rgba(8,33,60,0.06)', padding:'6px 8px', display:'flex', alignItems:'flex-end', gap:3, height:30 }}>
                          {BARS.map((h,i)=>(
                            <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:'2px 2px 0 0', background:i===BARS.length-1?GREEN:'rgba(8,33,60,0.12)' }} />
                          ))}
                        </div>
                        <div style={{ flex:1, background:'#fff', borderRadius:6, border:'1px solid rgba(8,33,60,0.06)', padding:'5px 7px', display:'flex', flexDirection:'column', justifyContent:'center', gap:4 }}>
                          {[['#1042','Paid',GREEN],['#1041','Pending','#d8a13b']].map(([id,st,c])=>(
                            <div key={id as string} style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                              <span style={{ fontSize:6, color:'rgba(8,33,60,0.6)', fontWeight:700 }}>Order {id}</span>
                              <span style={{ fontSize:5, fontWeight:800, color:c as string, background:`${c}22`, padding:'1px 4px', borderRadius:100 }}>{st}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hv1-glare" />
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
