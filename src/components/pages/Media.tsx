import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageLayout, Eyebrow, Reveal, NAVY, GREEN, CREAM, EASE } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'
import { photo, photoAlt, NEWSROOM_POSTS, postPath, type Category } from '../../lib/blogPosts'

// Real category filters, derived from the newsroom posts themselves so new
// categories appear automatically as articles are added.
const CATS = Array.from(new Set(NEWSROOM_POSTS.map(p => p.category))) as Category[]
const FILTERS: ('All' | Category)[] = ['All', ...CATS]

export function Media() {
  usePageMeta(
    'EG Digital Media | News, Updates & Press',
    'Stay updated with EG Digital media coverage, announcements, insights, and press releases showcasing our innovation in digital transformation services.',
  )
  const [filter, setFilter] = useState<'All' | Category>('All')
  // Newsroom articles: the first is the featured lead, the rest fill the grid.
  const [lead, ...restNews] = NEWSROOM_POSTS
  const shown = restNews.filter(p => filter === 'All' || p.category === filter)

  return (
    <PageLayout>
      <style>{`
        /* Featured lead + article grid share one shell */
        .md-shell { max-width: 1760px; margin: 0 auto; padding: 0 clamp(24px,4vw,72px); }
        @media (min-width: 1920px) { .md-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .md-shell { max-width: 2400px; } }

        .md-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(16px,2vw,28px);
          padding: clamp(20px,2.4vw,32px) 0 clamp(60px,9vw,130px); }
        @media (max-width: 1000px) { .md-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px)  { .md-grid { grid-template-columns: 1fr; } }

        .md-card { display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(8,33,60,0.08);
          border-radius: 20px; overflow: hidden; box-shadow: 0 4px 22px rgba(8,33,60,0.05); text-decoration: none;
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s; will-change: transform; }
        .md-card:hover { transform: translateY(-6px); box-shadow: 0 22px 52px rgba(8,33,60,0.12); }
        .md-card-imgwrap { aspect-ratio: 16/10; overflow: hidden; background: ${NAVY}; }
        .md-card-img { width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); will-change: transform; }
        .md-card:hover .md-card-img { transform: scale(1.05); }
        .md-card-body { padding: clamp(20px,2vw,28px); display: flex; flex-direction: column; flex: 1; }
        .md-card-cat { font-size: 11px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase;
          word-spacing: 0.14em; color: ${GREEN}; margin-bottom: 12px; }
        .md-card-title { font-size: clamp(17px,1.4vw,22px); font-weight: 800; letter-spacing: -0.02em;
          line-height: 1.25; color: ${NAVY}; margin: 0 0 10px; overflow-wrap: anywhere; }
        .md-card-ex { font-size: 14px; line-height: 1.7; color: rgba(8,33,60,0.55); margin: 0 0 18px; flex: 1; }
        .md-card-foot { display: flex; align-items: center; justify-content: space-between;
          font-size: 12px; font-weight: 700; color: rgba(8,33,60,0.4); }
      `}</style>

      {/* ── Masthead ── */}
      <section style={{ borderBottom: `1px solid rgba(8,33,60,0.12)`, padding: 'clamp(36px,5vw,72px) clamp(24px,4vw,72px) clamp(20px,3vw,36px)', maxWidth: 1760, margin: '0 auto' }}>
        <Reveal>
          <Eyebrow>Press & Features</Eyebrow>
          <h1 style={{ fontSize: 'clamp(52px,12vw,200px)', fontWeight: 900, letterSpacing: '0.015em', lineHeight: 1.06, color: NAVY, margin: '14px 0 0', textTransform: 'uppercase' }}>
            Newsroom
          </h1>
        </Reveal>
      </section>

      {/* ── Featured lead ── */}
      {lead && (
        <section style={{ maxWidth: 1760, margin: '0 auto', padding: 'clamp(28px,4vw,56px) clamp(24px,4vw,72px) clamp(20px,2.4vw,32px)' }}>
          <Reveal>
            <Link
              to={postPath(lead)}
              className="md-lead"
              style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 'clamp(24px,3vw,52px)', alignItems: 'center', background: '#fff', border: '1px solid rgba(8,33,60,0.1)', borderRadius: 20, overflow: 'hidden', textDecoration: 'none' }}
            >
              <div style={{ minHeight: 'clamp(260px,28vw,420px)', background: NAVY, position: 'relative', overflow: 'hidden' }}>
                <img
                  src={photo(lead.img, 900, 560)}
                  alt={photoAlt(lead)}
                  loading="lazy"
                  decoding="async"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', top: 22, left: 22, zIndex: 1, background: GREEN, color: NAVY, fontSize: 11, fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '7px 13px', borderRadius: 99 }}>Featured</span>
              </div>
              <div style={{ padding: 'clamp(28px,3vw,56px) clamp(28px,3vw,56px) clamp(28px,3vw,56px) 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 800, letterSpacing: '1.4px', textTransform: 'uppercase', color: GREEN }}>
                  {lead.category}<span style={{ width: 3, height: 3, borderRadius: '50%', background: GREEN }} />{lead.date}
                </div>
                <h2 style={{ fontSize: 'clamp(24px,2.9vw,44px)', fontWeight: 900, letterSpacing: '0.01em', lineHeight: 1.12, color: NAVY, margin: '16px 0 18px', textTransform: 'uppercase', overflowWrap: 'anywhere' }}>
                  {lead.title}
                </h2>
                <p style={{ fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.8, color: 'rgba(8,33,60,0.6)', margin: '0 0 20px', maxWidth: 520 }}>
                  {lead.excerpt}
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 800, letterSpacing: '0.6px', textTransform: 'uppercase', color: GREEN }}>
                  Read article
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" /></svg>
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* ── Filter bar (real categories) ── */}
      <div style={{ position: 'sticky', top: 76, zIndex: 50, background: `${CREAM}f2`, backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(8,33,60,0.08)', borderBottom: '1px solid rgba(8,33,60,0.08)' }}>
        <div style={{ maxWidth: 1760, margin: '0 auto', padding: '14px clamp(24px,4vw,72px)', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {FILTERS.map(f => {
            const on = filter === f
            return (
              <button key={f} onClick={() => setFilter(f)} style={{
                background: on ? NAVY : 'transparent', color: on ? '#fff' : 'rgba(8,33,60,0.6)',
                border: `1px solid ${on ? NAVY : 'rgba(8,33,60,0.16)'}`, borderRadius: 99,
                padding: '9px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.2s', minHeight: 40,
              }}>{f}</button>
            )
          })}
        </div>
      </div>

      {/* ── Article grid ── */}
      <div className="md-shell">
        {shown.length > 0 ? (
          <motion.div className="md-grid" key={filter} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <Link to={postPath(p)} className="md-card">
                  <div className="md-card-imgwrap">
                    <img className="md-card-img" src={photo(p.img, 640, 400)} alt={photoAlt(p)} loading="lazy" decoding="async" width={640} height={400} />
                  </div>
                  <div className="md-card-body">
                    <div className="md-card-cat">{p.category}</div>
                    <h3 className="md-card-title">{p.title}</h3>
                    <p className="md-card-ex">{p.excerpt}</p>
                    <div className="md-card-foot">
                      <span>{p.date} · {p.read}</span>
                      <svg width="18" height="18" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </motion.div>
        ) : (
          <p style={{ maxWidth: 1760, margin: '0 auto', padding: 'clamp(40px,6vw,80px) 0', fontSize: 'clamp(15px,1.2vw,18px)', color: 'rgba(8,33,60,0.5)', textAlign: 'center' }}>
            More {filter === 'All' ? 'newsroom articles' : filter.toLowerCase()} coming soon.
          </p>
        )}
      </div>

      <style>{`@media (max-width: 820px){ .md-lead { grid-template-columns: 1fr !important; } .md-lead > div:last-child { padding: clamp(24px,5vw,40px) !important; } }`}</style>
    </PageLayout>
  )
}
