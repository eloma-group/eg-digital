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
// INDUSTRIES SECTION - Left content + right full-height image
// Theme: Industries We Serve (light background, premium)
// ─────────────────────────────────────────────────────────────────────────────
export function IndustriesSection() {
  const navigate = useNavigate()
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
          color:rgba(8,33,60,0.03); letter-spacing: 0.01em;
          line-height: 1.12; pointer-events:none; user-select:none;
          text-transform:uppercase; word-spacing: 0.14em;
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
        .hv6-stat-l { font-size:10px; font-weight:700; color:rgba(8,33,60,0.36); text-transform:uppercase; word-spacing: 0.14em; letter-spacing:1.2px; margin-top:3px; }

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

        /* right panel - image collage */
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
          font-size:10px; font-weight:800; letter-spacing:0.6px; text-transform:uppercase; word-spacing: 0.14em;
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
              letterSpacing:'0.01em', lineHeight: 1,
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
              {[{ v:'14', l:'Industries' }, { v:'25+', l:'Projects' }, { v:'2yr', l:'Experience' }].map(s => (
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
              <button className="hv6-btn-p" onClick={() => navigate('/industries')}>
                Find Your Industry
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <button className="hv6-btn-g" onClick={() => navigate('/blog')}>Our Case Studies</button>
            </motion.div>
          </div>
        </div>

        {/* Right - image collage + floating cards */}
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
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1000&h=900&q=80&fit=crop"
                alt="EG Digital team workshop with a client"
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
