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
// MARKETING SECTION - Center-aligned text + bottom analytics mockup
// Theme: SEO & Digital Marketing Growth (light background)
// ─────────────────────────────────────────────────────────────────────────────
export function MarketingSection() {
  const navigate = useNavigate()
  const BARS = [22, 38, 30, 55, 48, 72, 64, 88, 78, 95, 85, 100]
  const METRICS = [
    { val:'+150%', lbl:'Organic Traffic', color:GREEN },
    { val:'#1',    lbl:'Google Rankings', color:NAVY  },
    { val:'DA 6', lbl:'Domain Authority', color:NAVY },
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
        /* dot grid - bottom half */
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
            Technical SEO, standout branding, and precision paid media -
            we put your business in front of the right audience and keep it
            performing at its peak.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="hv4-cta-row" style={{ marginBottom:0 }}>
            <button className="hv4-btn-p" onClick={() => navigate('/solutions')}>
              Boost My Rankings
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
            <button className="hv4-btn-g" onClick={() => navigate('/contact')}>Free SEO Audit</button>
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
          {/* Card header - browser chrome style */}
          <div className="hv4-chart-header">
            <div style={{ display:'flex', gap:5 }}>
              {['#ff5f57','#ffbd2e','#28ca41'].map(c => (
                <div key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />
              ))}
            </div>
            <div style={{ flex:1, textAlign:'center' }}>
              <span style={{ fontSize:11, fontWeight:700, color:'rgba(8,33,60,0.35)', fontFamily:'SF Mono,Consolas,monospace' }}>analytics.egdigital.com.au - Organic Traffic · Last 12 months</span>
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
              <span style={{ fontSize:11, fontWeight:700, color:'rgba(8,33,60,0.35)', fontFamily:'SF Mono,Consolas,monospace' }}>google.com.au - Search Results</span>
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
              <span style={{ fontSize:13, fontWeight:800, color:'#1a0dab' }}>Nova Commerce - Premium Online Store</span>
              <span style={{ fontSize:11, color:'rgba(8,33,60,0.5)', lineHeight:1.5 }}>novacommerce.com.au - Shop the new season collection. Free shipping Australia-wide on all orders.</span>
            </div>

            <div className="hv4-serp-row" style={{ opacity:0.55 }}>
              <span style={{ fontSize:13, fontWeight:700, color:'#1a0dab' }}>Competitor Store Co.</span>
              <span style={{ fontSize:11, color:'rgba(8,33,60,0.42)', lineHeight:1.5 }}>competitorstore.com.au - Online shopping for fashion &amp; homeware.</span>
            </div>

            <div className="hv4-serp-row" style={{ opacity:0.4 }}>
              <span style={{ fontSize:13, fontWeight:700, color:'#1a0dab' }}>Generic Marketplace</span>
              <span style={{ fontSize:11, color:'rgba(8,33,60,0.42)', lineHeight:1.5 }}>marketplace.com.au - Millions of products, low prices.</span>
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
