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
// DEVELOPMENT SECTION - Left editorial + Right CSS device-mockup composition
// Theme: Web, App & Software Development - shows the actual product we build
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

        /* right - device composition */
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
              <span style={{ fontSize:11, fontWeight:600, color:'rgba(8,33,60,0.4)', textTransform:'uppercase', letterSpacing:'1px' }}>Melbourne · Est. 2025</span>
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
              Marketing sites, SaaS platforms, mobile apps, and e-commerce stores -
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
              {[{ v:'25+', l:'Projects' }, { v:'100%', l:'On-Time Delivery' }, { v:'4.2★', l:'Client Rating' }].map(s => (
                <div key={s.l}><div className="hv1-sv">{s.v}</div><div className="hv1-sl">{s.l}</div></div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.28)} className="hv1-pills">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Shopify', 'WordPress', 'React Native'].map(t => (
                <span key={t} className="hv1-pill">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Right - CSS device mockup */}
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
                <div style={{ background:'#0a1322', height:'100%', display:'flex', flexDirection:'column' }}>
                  {/* Browser chrome - dark */}
                  <div style={{ background:'linear-gradient(180deg,#101c2e,#0c1626)', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'6px 9px', display:'flex', alignItems:'center', gap:7, flexShrink:0 }}>
                    <div style={{ display:'flex', gap:5 }}>
                      {['#ff5f57','#ffbd2e','#28ca41'].map(c=><div key={c} style={{ width:8, height:8, borderRadius:'50%', background:c }} />)}
                    </div>
                    <div style={{ display:'flex', gap:7, marginLeft:4, color:'rgba(255,255,255,0.28)' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M5 1.5 2.5 4 5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M3 1.5 5.5 4 3 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ flex:1, background:'rgba(255,255,255,0.05)', borderRadius:5, padding:'3px 9px', fontSize:8, color:'rgba(255,255,255,0.5)', fontFamily:'ui-monospace,monospace', border:'1px solid rgba(255,255,255,0.07)', whiteSpace:'nowrap', overflow:'hidden', display:'flex', alignItems:'center', gap:5 }}>
                      <svg width="7" height="7" viewBox="0 0 8 8" fill="none" style={{ flexShrink:0 }}><path d="M2 3.6V2.7a2 2 0 0 1 4 0v0.9M1.6 3.6h4.8v3H1.6z" stroke={GREEN} strokeWidth="0.8" strokeLinejoin="round"/></svg>
                      app.novapay.io/dashboard
                    </div>
                  </div>
                  {/* App shell - dark glass fintech dashboard (NovaPay) */}
                  <div style={{ flex:1, minHeight:0, display:'flex', position:'relative', background:'radial-gradient(120% 90% at 85% -10%, #143a52 0%, #0b1a2e 42%, #081322 100%)' }}>
                    {/* ambient glow */}
                    <div style={{ position:'absolute', top:-20, right:'18%', width:90, height:90, borderRadius:'50%', background:`radial-gradient(circle,${GREEN}33,transparent 70%)`, pointerEvents:'none' }} />

                    {/* Sidebar */}
                    <div style={{ width:'13%', minWidth:36, maxWidth:58, borderRight:'1px solid rgba(255,255,255,0.06)', display:'flex', flexDirection:'column', alignItems:'center', padding:'8px 0 7px', gap:7, position:'relative', zIndex:1 }}>
                      <div style={{ width:15, height:15, background:`linear-gradient(135deg,${GREEN},#2d8e6c)`, borderRadius:5, marginBottom:5, boxShadow:`0 2px 10px ${GREEN}66` }} />
                      {[0,1,2,3,4].map(i=>(
                        <div key={i} style={{ width:17, height:17, borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center', background:i===0?'rgba(60,185,140,0.16)':'transparent', border:i===0?`1px solid ${GREEN}44`:'1px solid transparent' }}>
                          <span style={{ width:7, height:7, borderRadius:2, border:`1.2px solid ${i===0?GREEN:'rgba(255,255,255,0.28)'}` }} />
                        </div>
                      ))}
                      <div style={{ marginTop:'auto', width:14, height:14, borderRadius:'50%', background:`linear-gradient(135deg,${GREEN},#1b6f53)`, border:'1px solid rgba(255,255,255,0.2)' }} />
                    </div>

                    {/* Main content */}
                    <div style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column', padding:'8px 9px', gap:6, position:'relative', zIndex:1 }}>
                      {/* Header */}
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
                        <div>
                          <div style={{ fontSize:11, fontWeight:900, color:'#fff', letterSpacing:'-0.03em', lineHeight:1 }}>Wallet Overview</div>
                          <div style={{ fontSize:6.5, color:'rgba(255,255,255,0.4)', marginTop:2.5, fontWeight:600 }}>Welcome back, Alex Morgan</div>
                        </div>
                        <div style={{ display:'flex', gap:5, alignItems:'center' }}>
                          <div style={{ width:46, height:13, borderRadius:100, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.09)', display:'flex', alignItems:'center', gap:3, padding:'0 5px' }}>
                            <span style={{ width:4, height:4, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.4)' }} />
                            <span style={{ flex:1, height:2, borderRadius:2, background:'rgba(255,255,255,0.12)' }} />
                          </div>
                          <div style={{ position:'relative', width:13, height:13, borderRadius:'50%', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.09)' }}>
                            <span style={{ position:'absolute', top:-1, right:-1, width:4, height:4, borderRadius:'50%', background:GREEN, border:'1px solid #0a1322' }} />
                          </div>
                          <div style={{ width:13, height:13, borderRadius:'50%', background:`linear-gradient(135deg,${GREEN},#0c3b6b)`, border:'1px solid rgba(255,255,255,0.25)' }} />
                        </div>
                      </div>

                      {/* Top row: balance glass card + virtual payment card */}
                      <div style={{ display:'flex', gap:6, flexShrink:0 }}>
                        {/* Balance card */}
                        <div style={{ flex:1.45, minWidth:0, borderRadius:9, padding:'9px 10px', position:'relative', overflow:'hidden', background:'linear-gradient(135deg,rgba(60,185,140,0.16),rgba(255,255,255,0.04))', border:'1px solid rgba(255,255,255,0.1)', boxShadow:'0 6px 18px rgba(0,0,0,0.3)' }}>
                          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                            <div>
                              <div style={{ fontSize:6, color:'rgba(255,255,255,0.5)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.6px' }}>Available Balance</div>
                              <div style={{ fontSize:17, fontWeight:900, color:'#fff', letterSpacing:'-0.045em', lineHeight:1.05, marginTop:3 }}>$48,250<span style={{ fontSize:9, color:'rgba(255,255,255,0.5)' }}>.00</span></div>
                              <div style={{ display:'inline-flex', alignItems:'center', gap:2, fontSize:6, fontWeight:800, color:GREEN, marginTop:3, background:'rgba(60,185,140,0.18)', padding:'1.5px 5px', borderRadius:100 }}>↑ 12.5% this month</div>
                            </div>
                            <span style={{ display:'inline-flex', alignItems:'center', gap:2, fontSize:5.5, fontWeight:700, color:'rgba(255,255,255,0.6)' }}>
                              <span style={{ width:4, height:4, borderRadius:'50%', background:GREEN, boxShadow:`0 0 0 2px ${GREEN}40` }} />Live
                            </span>
                          </div>
                          {/* action chips */}
                          <div style={{ display:'flex', gap:4, marginTop:6 }}>
                            {[['Send',true],['Request',false],['Top up',false]].map(([t,act])=>(
                              <span key={t as string} style={{ fontSize:5.5, fontWeight:800, padding:'2.5px 7px', borderRadius:100, color:act?'#06231a':'rgba(255,255,255,0.7)', background:act?GREEN:'rgba(255,255,255,0.07)', border:act?'none':'1px solid rgba(255,255,255,0.1)' }}>{t}</span>
                            ))}
                          </div>
                        </div>

                        {/* Virtual payment card */}
                        <div style={{ flex:1, minWidth:0, borderRadius:9, padding:'8px 9px', position:'relative', overflow:'hidden', background:`linear-gradient(135deg,${NAVY} 0%,#0c3b6b 70%,#11543f 140%)`, border:'1px solid rgba(255,255,255,0.1)', boxShadow:'0 6px 18px rgba(0,0,0,0.34)', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                          <div style={{ position:'absolute', bottom:-18, left:-12, width:50, height:50, borderRadius:'50%', background:`radial-gradient(circle,${GREEN}44,transparent 70%)`, pointerEvents:'none' }} />
                          <div style={{ position:'relative', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                            <span style={{ fontSize:6, fontWeight:900, color:'#fff', letterSpacing:'0.5px' }}>NOVA<span style={{ color:GREEN }}>PAY</span></span>
                            <div style={{ width:11, height:8, borderRadius:2, background:'linear-gradient(135deg,#f5d77f,#caa64a)' }} />
                          </div>
                          <div style={{ position:'relative', fontSize:7, fontWeight:700, color:'rgba(255,255,255,0.85)', letterSpacing:'1.5px', fontFamily:'ui-monospace,monospace' }}>••••&nbsp;••••&nbsp;••••&nbsp;4921</div>
                          <div style={{ position:'relative', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
                            <span style={{ fontSize:5, color:'rgba(255,255,255,0.55)', fontWeight:700, letterSpacing:'0.3px' }}>A. MORGAN</span>
                            <div style={{ display:'flex' }}>
                              <span style={{ width:8, height:8, borderRadius:'50%', background:'#eb5b34', opacity:0.9 }} />
                              <span style={{ width:8, height:8, borderRadius:'50%', background:'#f5a623', marginLeft:-3, opacity:0.85 }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Chart row: cashflow chart + transactions */}
                      <div style={{ flex:1, minHeight:0, display:'flex', gap:6 }}>
                        {/* Cashflow chart */}
                        <div style={{ flex:1.75, minWidth:0, borderRadius:8, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', padding:'7px 8px', display:'flex', flexDirection:'column' }}>
                          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
                            <div style={{ fontSize:7, fontWeight:800, color:'#fff' }}>Cash flow</div>
                            <div style={{ display:'flex', gap:3 }}>
                              {['1W','1M','1Y'].map((t,i)=>(
                                <span key={t} style={{ fontSize:5, fontWeight:800, padding:'1.5px 5px', borderRadius:100, color:i===1?'#06231a':'rgba(255,255,255,0.45)', background:i===1?GREEN:'rgba(255,255,255,0.06)' }}>{t}</span>
                              ))}
                            </div>
                          </div>
                          <svg viewBox="0 0 100 42" preserveAspectRatio="none" style={{ flex:1, width:'100%', minHeight:0, marginTop:4 }}>
                            <defs>
                              <linearGradient id="hv1area" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={GREEN} stopOpacity="0.34" />
                                <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
                              </linearGradient>
                              <filter id="hv1glow" x="-20%" y="-40%" width="140%" height="180%">
                                <feGaussianBlur stdDeviation="1.4" result="b" />
                                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                              </filter>
                            </defs>
                            {[10,20,30].map(y=><line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />)}
                            <path d="M0,32 L16,26 L32,29 L48,17 L64,21 L80,9 L100,5 L100,42 L0,42 Z" fill="url(#hv1area)" />
                            <path d="M0,32 L16,26 L32,29 L48,17 L64,21 L80,9 L100,5" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#hv1glow)" />
                            <path d="M0,36 L16,34 L32,35 L48,30 L64,32 L80,27 L100,24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round" />
                            <circle cx="80" cy="9" r="1.8" fill="#0b1a2e" stroke={GREEN} strokeWidth="1.3" />
                          </svg>
                        </div>

                        {/* Transactions list */}
                        <div style={{ flex:1, minWidth:0, borderRadius:8, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', padding:'7px 8px', display:'flex', flexDirection:'column', gap:4 }}>
                          <div style={{ fontSize:7, fontWeight:800, color:'#fff', flexShrink:0 }}>Transactions</div>
                          {[
                            { n:'Spotify', s:'Subscription', a:'-$9.99', c:'#eb5b34' },
                            { n:'Stripe', s:'Payout', a:'+$1,240', c:GREEN },
                            { n:'Figma', s:'Software', a:'-$15.00', c:'#a855f7' },
                          ].map(t=>(
                            <div key={t.n} style={{ display:'flex', alignItems:'center', gap:5 }}>
                              <span style={{ width:11, height:11, borderRadius:4, flexShrink:0, background:`${t.c}22`, border:`1px solid ${t.c}55`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                                <span style={{ width:4, height:4, borderRadius:'50%', background:t.c }} />
                              </span>
                              <div style={{ minWidth:0, flex:1 }}>
                                <div style={{ fontSize:6, fontWeight:800, color:'rgba(255,255,255,0.85)', lineHeight:1 }}>{t.n}</div>
                                <div style={{ fontSize:5, color:'rgba(255,255,255,0.35)', marginTop:1.5, fontWeight:600 }}>{t.s}</div>
                              </div>
                              <span style={{ fontSize:6, fontWeight:800, color:t.a.startsWith('+')?GREEN:'rgba(255,255,255,0.7)', flexShrink:0 }}>{t.a}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom: mini stat chips */}
                      <div style={{ flexShrink:0, display:'flex', gap:6 }}>
                        {[
                          { l:'Income', v:'$12.4k', up:true, spark:'M0,8 L12,7 L24,8 L36,4 L48,5 L60,2' },
                          { l:'Spending', v:'$5.8k', up:false, spark:'M0,3 L12,4 L24,3 L36,6 L48,5 L60,7' },
                          { l:'Savings', v:'$6.6k', up:true, spark:'M0,7 L12,6 L24,7 L36,4 L48,3 L60,2' },
                        ].map(k=>(
                          <div key={k.l} style={{ flex:1, minWidth:0, borderRadius:7, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', padding:'5px 7px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:5 }}>
                            <div style={{ minWidth:0 }}>
                              <div style={{ fontSize:5, color:'rgba(255,255,255,0.4)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.4px' }}>{k.l}</div>
                              <div style={{ fontSize:9.5, fontWeight:900, color:'#fff', letterSpacing:'-0.03em', lineHeight:1.1, marginTop:1 }}>{k.v}</div>
                            </div>
                            <svg viewBox="0 0 60 10" preserveAspectRatio="none" style={{ width:28, height:13, flexShrink:0 }}>
                              <path d={k.spark} fill="none" stroke={k.up?GREEN:'#d9706f'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                            </svg>
                          </div>
                        ))}
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
