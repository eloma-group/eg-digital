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
// SECURITY SECTION - Left editorial + Right SVG network topology illustration
// Theme: Cybersecurity & IT Support - shows protected office network
// ─────────────────────────────────────────────────────────────────────────────
export function SecuritySection() {
  const navigate = useNavigate()
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

        /* right - network illustration */
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

            <motion.h1 {...fadeUp(0.07)} style={{
              fontSize:'clamp(52px,7.5vw,112px)', fontWeight:900,
              letterSpacing:'-0.045em', lineHeight:0.88,
              textTransform:'uppercase', color:'#fff',
              marginBottom:'clamp(18px,2.2vw,28px)',
            }}>
              Zero<br/>
              <span style={{ color:GREEN }}>Threats</span><br/>
              Allowed.
            </motion.h1>

            <motion.p {...fadeUp(0.14)} style={{
              fontSize:'clamp(15px,1.15vw,18px)', color:'rgba(255,255,255,0.5)',
              lineHeight:1.82, maxWidth:480, marginBottom:'clamp(24px,2.8vw,40px)',
            }}>
              AI-driven threat detection, zero-trust architecture, and 24/7 proactive monitoring -
              powered by Microsoft Defender and Sentinel - keeping your business safe around the clock.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="hv2-cta-row">
              <button className="hv2-btn-p" onClick={() => navigate('/contact')}>
                Get Protected
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <button className="hv2-btn-g" onClick={() => navigate('/contact')}>Free Security Audit</button>
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

          {/* Right - SVG network topology illustration */}
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

              {/* Connection lines - hub(220,200) to each device */}
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
