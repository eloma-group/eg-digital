import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN } from './_kit'

type Post = { title: string; excerpt: string; category: 'Case Studies' | 'Latest Technologies' | 'Awareness'; read: string; date: string; img: string }

// Hand-picked, content-matched Unsplash photos. `img` holds the Unsplash photo
// id and this builds a stable, cropped CDN URL at the requested size - so each
// card always shows the same relevant image (no reshuffle / flicker).
const photo = (id: string, _seed: number, w = 640, h = 400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const FEATURED: Post = {
  title: 'How we took an e-commerce brand from 4.1 to 4.9 stars in 90 days',
  excerpt: 'A deep dive into the review automation, analytics and response workflows we built - and the measurable revenue lift that followed.',
  category: 'Case Studies', read: '8 min read', date: 'June 2026', img: 'photo-1539278383962-a7774385fa02',
}

const POSTS: Post[] = [
  { title: 'Scaling a SaaS platform to 50k users without rewriting the stack', excerpt: 'The architecture decisions that let one of our clients 10x their user base on the same codebase.', category: 'Case Studies', read: '6 min read', date: 'May 2026', img: 'photo-1551288049-bebda4e38f71' },
  { title: 'Migrating a manufacturer to Dynamics 365 - with zero downtime', excerpt: 'How we phased a full ERP migration around a 24/7 production line.', category: 'Case Studies', read: '7 min read', date: 'Apr 2026', img: 'photo-1717386255773-1e3037c81788' },
  { title: 'What Microsoft Copilot actually means for small businesses', excerpt: 'Cutting through the hype: where AI assistants genuinely save time today.', category: 'Latest Technologies', read: '5 min read', date: 'Jun 2026', img: 'photo-1684369175833-4b445ad6bfb5' },
  { title: 'React 19 and the end of the useEffect era', excerpt: 'The new patterns reshaping how we build fast, resilient front-ends.', category: 'Latest Technologies', read: '6 min read', date: 'May 2026', img: 'photo-1461749280684-dccba630e2f6' },
  { title: 'Five phishing tactics still fooling Australian businesses in 2026', excerpt: 'Practical, plain-English steps to protect your team and your data.', category: 'Awareness', read: '4 min read', date: 'Jun 2026', img: 'photo-1562813733-b31f71025d54' },
  { title: 'Why your business needs a zero-trust security model now', excerpt: 'The shift from perimeter defence to identity-first security, explained.', category: 'Awareness', read: '5 min read', date: 'Apr 2026', img: 'photo-1614064641938-3bbee52942c7' },
]

const FILTERS = ['All', 'Case Studies', 'Latest Technologies', 'Awareness'] as const

// Footer links use ?category=<slug> to open the Blog with that filter applied.
const CATEGORY_SLUGS: Record<string, (typeof FILTERS)[number]> = {
  'case-studies': 'Case Studies',
  'latest-technologies': 'Latest Technologies',
  'awareness': 'Awareness',
}
const filterFromSearch = (search: string): (typeof FILTERS)[number] =>
  CATEGORY_SLUGS[new URLSearchParams(search).get('category') ?? ''] ?? 'All'

export function Blog() {
  const { search } = useLocation()
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>(() => filterFromSearch(search))
  // Keep the active filter in sync when arriving via a footer category link.
  useEffect(() => { setFilter(filterFromSearch(search)) }, [search])
  const visible = filter === 'All' ? POSTS : POSTS.filter(p => p.category === filter)

  return (
    <PageLayout>
      <style>{`
        .bl-shell { max-width: min(calc(100vw - 96px),1760px); margin: 0 auto; padding: 0 clamp(24px,4vw,64px); }
        @media (min-width: 1920px) { .bl-shell { max-width: 1900px; } }
        @media (min-width: 2560px) { .bl-shell { max-width: 2440px; } }

        .bl-hero { padding: clamp(40px,6vw,96px) 0 clamp(24px,3vw,40px); }
        .bl-h1 { font-size: clamp(52px,10.5vw,136px); font-weight: 900; letter-spacing: -0.05em;
          line-height: 0.88; color: ${NAVY}; margin: 18px 0 0; text-transform: uppercase; }
        .bl-h1 span { color: ${GREEN}; }
        .bl-intro { max-width: 640px; font-size: clamp(15px,1.25vw,19px); line-height: 1.8; color: rgba(8,33,60,0.58); margin: 22px 0 0; }

        .bl-feat { display: grid; grid-template-columns: 1.4fr 1fr; gap: clamp(20px,3vw,48px);
          background: ${NAVY}; border-radius: 26px; padding: clamp(28px,4vw,64px); align-items: center;
          margin: clamp(24px,3vw,40px) 0 clamp(36px,4vw,64px); overflow: hidden; position: relative; }
        @media (max-width: 820px) { .bl-feat { grid-template-columns: 1fr; } }
        .bl-feat-cat { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 800;
          letter-spacing: 1.8px; text-transform: uppercase; color: ${GREEN}; margin-bottom: 18px; }
        .bl-feat-title { font-size: clamp(28px,3.4vw,52px); font-weight: 900; letter-spacing: -0.04em;
          line-height: 1.02; color: #fff; margin: 0 0 18px; text-transform: uppercase; }
        .bl-feat-ex { font-size: clamp(15px,1.15vw,18px); line-height: 1.8; color: rgba(255,255,255,0.6); margin: 0 0 24px; }
        .bl-feat-meta { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.45); letter-spacing: 0.4px; }
        .bl-feat-art { aspect-ratio: 4/3; width: 100%; object-fit: cover; display: block;
          border-radius: 18px; border: 1px solid rgba(255,255,255,0.1); background: #0d2e52; }

        .bl-filters { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: clamp(24px,3vw,40px); }
        .bl-filter { font-family: inherit; font-size: 13px; font-weight: 800; letter-spacing: 0.4px;
          padding: 10px 20px; border-radius: 100px; cursor: pointer; min-height: 44px;
          border: 1px solid rgba(8,33,60,0.14); background: #fff; color: rgba(8,33,60,0.6); transition: all 0.2s; }
        .bl-filter.active { background: ${NAVY}; color: #fff; border-color: ${NAVY}; }

        .bl-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(16px,2vw,28px);
          padding-bottom: clamp(64px,9vw,130px); }
        @media (max-width: 1000px) { .bl-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px) { .bl-grid { grid-template-columns: 1fr; } }

        .bl-card { display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(8,33,60,0.08);
          border-radius: 20px; overflow: hidden; box-shadow: 0 4px 22px rgba(8,33,60,0.05); cursor: pointer;
          transition: transform 0.25s, box-shadow 0.25s; will-change: transform; }
        .bl-card:hover { transform: translateY(-6px); box-shadow: 0 22px 52px rgba(8,33,60,0.12); }
        .bl-card:hover .bl-card-ar { transform: rotate(0deg) translate(2px,-2px); }
        .bl-card-imgwrap { aspect-ratio: 16/10; overflow: hidden; background: #eef1f4; }
        .bl-card-img { width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); will-change: transform; }
        .bl-card:hover .bl-card-img { transform: scale(1.05); }
        .bl-card-body { padding: clamp(20px,2vw,28px); display: flex; flex-direction: column; flex: 1; }
        .bl-card-cat { font-size: 11px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: ${GREEN}; margin-bottom: 12px; }
        .bl-card-title { font-size: clamp(17px,1.3vw,21px); font-weight: 800; letter-spacing: -0.02em;
          line-height: 1.25; color: ${NAVY}; margin: 0 0 10px; }
        .bl-card-ex { font-size: 14px; line-height: 1.7; color: rgba(8,33,60,0.55); margin: 0 0 18px; flex: 1; }
        .bl-card-foot { display: flex; align-items: center; justify-content: space-between;
          font-size: 12px; font-weight: 700; color: rgba(8,33,60,0.4); }
        .bl-card-ar { color: ${GREEN}; transform: rotate(0deg); transition: transform 0.25s; }
      `}</style>

      <section className="bl-shell bl-hero">
        <Reveal>
          <Eyebrow>Blog &amp; Case Studies</Eyebrow>
          <h1 className="bl-h1">Proof, ideas<br />&amp; <span>know-how.</span></h1>
          <p className="bl-intro">
            Real client outcomes, what we're building next, and plain-English guidance to keep your
            business sharp and secure. Browse our case studies and the latest from the team.
          </p>
        </Reveal>
      </section>

      <div className="bl-shell">
        <Reveal>
          <article className="bl-feat">
            <div>
              <div className="bl-feat-cat"><span style={{ width: 8, height: 8, borderRadius: 99, background: GREEN }} />{FEATURED.category}</div>
              <h2 className="bl-feat-title">{FEATURED.title}</h2>
              <p className="bl-feat-ex">{FEATURED.excerpt}</p>
              <div className="bl-feat-meta">{FEATURED.date} · {FEATURED.read}</div>
            </div>
            <img className="bl-feat-art" src={photo(FEATURED.img, 0, 800, 600)} alt="" loading="lazy" decoding="async" width={800} height={600} />
          </article>
        </Reveal>

        <div id="work" className="bl-filters" style={{ scrollMarginTop: 96 }}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`bl-filter${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="bl-grid">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <article className="bl-card">
                <div className="bl-card-imgwrap">
                  <img className="bl-card-img" src={photo(p.img, i + 1)} alt="" loading="lazy" decoding="async" width={640} height={400} />
                </div>
                <div className="bl-card-body">
                  <div className="bl-card-cat">{p.category}</div>
                  <h3 className="bl-card-title">{p.title}</h3>
                  <p className="bl-card-ex">{p.excerpt}</p>
                  <div className="bl-card-foot">
                    <span>{p.date} · {p.read}</span>
                    <ArrowUpRight className="bl-card-ar" size={18} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <PageCTA eyebrow="Want Results Like These?" heading="Let's write your" highlight="case study." button="Start a project" />
    </PageLayout>
  )
}
