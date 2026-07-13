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
// TRANSFORMATION SECTION - Full animated network BG + centered text
// Theme: End-to-End Digital Transformation (light background)
// ─────────────────────────────────────────────────────────────────────────────
export function TransformationSection() {
  const navigate = useNavigate()
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
        /* radial fog in center - keeps text readable over network */
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
              EG Digital · Melbourne, Australia · Est. 2025
              <span style={{ width:22, height:2, background:GREEN, borderRadius:1 }} />
            </span>
          </motion.div>

          <div style={{ position:'relative', left:'50%', transform:'translateX(-50%)', width:'max-content', maxWidth:'100vw' }}>
            <motion.h1 {...fadeUp(0.07)} style={{
              fontSize:'clamp(48px,8.5vw,132px)', fontWeight:900,
              letterSpacing:'-0.045em', lineHeight:0.88,
              textTransform:'uppercase', color:NAVY, textAlign:'center',
              marginBottom:'clamp(18px,2.2vw,28px)',
            }}>
              End-to-End<br />
              <span style={{ color:GREEN }}>Digital</span><br />
              Transformation
            </motion.h1>
          </div>

          <motion.p {...fadeUp(0.16)} style={{
            fontSize:'clamp(15px,1.2vw,19px)', color:'rgba(8,33,60,0.52)',
            lineHeight:1.82, maxWidth:640, margin:'0 auto clamp(28px,3.2vw,48px)',
          }}>
            Microsoft licensing, custom development, AI cybersecurity, and digital marketing
            - all delivered by one expert team, built for Australian businesses ready
            to lead their industry.
          </motion.p>

          <motion.div {...fadeUp(0.22)} className="hv5-cta-row">
            <button className="hv5-btn-p" onClick={() => navigate('/contact')}>
              Book a Discovery Call
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
            <button className="hv5-btn-g" onClick={() => navigate('/services')}>Explore Services</button>
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
