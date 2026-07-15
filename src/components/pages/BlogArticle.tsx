import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PageLayout, PageCTA, NAVY, GREEN } from './_kit'
import { usePageMeta } from '../../hooks/usePageMeta'
import { getPost, photo, GRID_POSTS, type Block } from '../../lib/blogPosts'

// Parse the tiny inline markup used in post bodies: **bold** and
// [label](/internal/path). Returns an array of React nodes.
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  // Split on either a [label](url) link or a **bold** run, keeping the matches.
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  let key = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      // [label](url)
      nodes.push(
        <Link key={key++} to={m[2]} className="ba-link">{m[1]}</Link>,
      )
    } else {
      // **bold**
      nodes.push(<strong key={key++} className="ba-strong">{m[3]}</strong>)
    }
    last = re.lastIndex
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function BlockView({ block }: { block: Block }) {
  switch (block.k) {
    case 'h2':
      return <h2 className="ba-h2">{block.text}</h2>
    case 'p':
      return <p className="ba-p">{renderInline(block.text)}</p>
    case 'ul':
      return (
        <ul className="ba-ul">
          {block.items.map((it, i) => <li key={i}>{renderInline(it)}</li>)}
        </ul>
      )
    case 'img':
      return (
        <figure className="ba-figure">
          <img
            className="ba-figure-img"
            src={photo(block.id, 1400, 780)}
            alt={block.alt}
            loading="lazy"
            decoding="async"
            width={1400}
            height={780}
          />
          {block.caption && <figcaption className="ba-cap">{block.caption}</figcaption>}
        </figure>
      )
    case 'faq':
      return (
        <div className="ba-faq">
          {block.items.map((f, i) => (
            <div className="ba-faq-item" key={i}>
              <h3 className="ba-faq-q">{f.q}</h3>
              <p className="ba-faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      )
  }
}

export function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPost(slug)
  const navigate = useNavigate()

  usePageMeta(
    post?.metaTitle ?? 'EG Digital Blog',
    post?.metaDescription ?? 'Insights from the EG Digital team.',
  )

  // Inject FAQPage JSON-LD when the article carries an FAQ block (runtime only;
  // crawlers that run JS pick it up, and it never blocks the initial paint).
  useEffect(() => {
    const faq = post?.body?.find(b => b.k === 'faq')
    if (!faq || faq.k !== 'faq') return
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-article-jsonld', '')
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.items.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [post])

  // Unknown slug -> send back to the blog index.
  if (!post) return <Navigate to="/blog" replace />

  const related = GRID_POSTS.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <PageLayout>
      <style>{`
        /* Full-bleed, edge-to-edge article shell - wide, minimal bezel. */
        .ba-wrap { --gut: clamp(24px,4vw,64px); --shell: min(calc(100vw - 96px),1760px); background: ${'#f8f8ff'}; }
        @media (min-width: 1920px) { .ba-wrap { --shell: 1900px; } }
        @media (min-width: 2560px) { .ba-wrap { --shell: 2440px; } }

        .ba-top { max-width: var(--shell); margin: 0 auto;
          padding: clamp(20px,3vw,40px) var(--gut) 0; }
        .ba-back { display: inline-flex; align-items: center; gap: 8px; font-size: 13px;
          font-weight: 800; letter-spacing: 0.4px; text-transform: uppercase; word-spacing: 0.14em; color: ${GREEN};
          background: none; border: none; cursor: pointer; font-family: inherit; padding: 8px 0;
          min-height: 44px; }

        /* Hero - full width band */
        .ba-hero { max-width: var(--shell); margin: 0 auto;
          padding: clamp(6px,1vw,14px) var(--gut) clamp(24px,3vw,44px); }
        .ba-cat { display: inline-flex; align-items: center; gap: 8px; font-size: 12px;
          font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; word-spacing: 0.14em; color: ${GREEN}; }
        .ba-cat span { width: 8px; height: 8px; border-radius: 99px; background: ${GREEN}; }
        .ba-h1 { font-size: clamp(34px,5.2vw,68px); font-weight: 900; letter-spacing: -0.035em;
          line-height: 1.02; color: ${NAVY}; margin: 16px 0 18px; }
        .ba-meta { font-size: 14px; font-weight: 700; color: rgba(8,33,60,0.45); letter-spacing: 0.4px; }

        /* Full-bleed hero image */
        .ba-hero-img-wrap { width: 100%; max-width: var(--shell);
          margin: 0 auto clamp(28px,4vw,56px); padding: 0 var(--gut); }
        .ba-hero-img { width: 100%; aspect-ratio: 21/9; object-fit: cover; display: block;
          border-radius: clamp(14px,1.4vw,22px); background: #eef1f4; }
        @media (max-width: 640px) { .ba-hero-img { aspect-ratio: 16/10; } }

        /* Prose - full-width, edge-to-edge */
        .ba-prose { max-width: var(--shell); margin: 0 auto;
          padding: 0 var(--gut) clamp(48px,7vw,110px); }
        .ba-p { font-size: clamp(16px,1.15vw,19px); line-height: 1.85; color: rgba(8,33,60,0.82);
          margin: 0 0 22px; }
        .ba-h2 { font-size: clamp(26px,3vw,40px); font-weight: 900; letter-spacing: -0.03em;
          line-height: 1.12; color: ${NAVY}; margin: clamp(36px,4vw,60px) 0 18px; }
        .ba-ul { margin: 0 0 26px; padding: 0; list-style: none; }
        .ba-ul li { position: relative; padding-left: 30px; margin-bottom: 14px;
          font-size: clamp(16px,1.1vw,18px); line-height: 1.78; color: rgba(8,33,60,0.82); }
        .ba-ul li::before { content: ''; position: absolute; left: 4px; top: 12px; width: 9px; height: 9px;
          border-radius: 2px; background: ${GREEN}; transform: rotate(45deg); }
        .ba-strong { color: ${NAVY}; font-weight: 800; }
        .ba-link { color: ${GREEN}; font-weight: 700; text-decoration: none;
          border-bottom: 1px solid rgba(60,185,140,0.4); }
        .ba-link:hover { border-bottom-color: ${GREEN}; }

        .ba-figure { margin: clamp(28px,3.5vw,48px) 0; }
        .ba-figure-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block;
          border-radius: 16px; background: #eef1f4; }
        .ba-cap { font-size: 13px; color: rgba(8,33,60,0.5); margin-top: 12px; text-align: center;
          font-weight: 600; }

        /* FAQ */
        .ba-faq { margin: 8px 0 0; }
        .ba-faq-item { padding: 22px 0; border-top: 1px solid rgba(8,33,60,0.1); }
        .ba-faq-item:last-child { border-bottom: 1px solid rgba(8,33,60,0.1); }
        .ba-faq-q { font-size: clamp(18px,1.5vw,22px); font-weight: 800; letter-spacing: -0.02em;
          color: ${NAVY}; margin: 0 0 10px; }
        .ba-faq-a { font-size: clamp(15px,1.1vw,18px); line-height: 1.8; color: rgba(8,33,60,0.72); margin: 0; }

        /* Related */
        .ba-rel { max-width: min(calc(100vw - 40px),1760px); margin: 0 auto;
          padding: 0 var(--gut) clamp(56px,8vw,120px); }
        .ba-rel-h { font-size: clamp(24px,3vw,40px); font-weight: 900; letter-spacing: 0.01em;
          text-transform: uppercase; word-spacing: 0.14em; color: ${NAVY}; margin: 0 0 clamp(20px,2.5vw,36px); }
        .ba-rel-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(16px,2vw,28px); }
        @media (max-width: 900px) { .ba-rel-grid { grid-template-columns: 1fr; } }
        .ba-rel-card { display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(8,33,60,0.08);
          border-radius: 20px; overflow: hidden; box-shadow: 0 4px 22px rgba(8,33,60,0.05);
          text-decoration: none; transition: transform 0.25s, box-shadow 0.25s; will-change: transform; }
        .ba-rel-card:hover { transform: translateY(-6px); box-shadow: 0 22px 52px rgba(8,33,60,0.12); }
        .ba-rel-imgwrap { aspect-ratio: 16/10; overflow: hidden; background: #eef1f4; }
        .ba-rel-img { width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); will-change: transform; }
        .ba-rel-card:hover .ba-rel-img { transform: scale(1.05); }
        .ba-rel-body { padding: clamp(18px,1.8vw,26px); display: flex; flex-direction: column; flex: 1; }
        .ba-rel-cat { font-size: 11px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; word-spacing: 0.14em; color: ${GREEN}; margin-bottom: 10px; }
        .ba-rel-title { font-size: clamp(16px,1.2vw,20px); font-weight: 800; letter-spacing: -0.02em;
          line-height: 1.25; color: ${NAVY}; margin: 0 0 12px; }
        .ba-rel-foot { display: flex; align-items: center; justify-content: space-between; margin-top: auto;
          font-size: 12px; font-weight: 700; color: rgba(8,33,60,0.4); }
      `}</style>

      <article className="ba-wrap">
        <div className="ba-top">
          <button className="ba-back" onClick={() => navigate('/blog')}>
            <ArrowLeft size={16} /> All articles
          </button>
        </div>

        <header className="ba-hero">
          <div className="ba-cat"><span />{post.category}</div>
          <h1 className="ba-h1">{post.h1 ?? post.title}</h1>
          <div className="ba-meta">{post.date} · {post.read}</div>
        </header>

        <div className="ba-hero-img-wrap">
          <img
            className="ba-hero-img"
            src={photo(post.img, 1600, 700)}
            alt={post.title}
            decoding="async"
            width={1600}
            height={700}
          />
        </div>

        <div className="ba-prose">
          {post.body
            ? post.body.map((b, i) => <BlockView key={i} block={b} />)
            : <p className="ba-p">{post.excerpt}</p>}
        </div>
      </article>

      {related.length > 0 && (
        <section className="ba-rel">
          <h2 className="ba-rel-h">More from the blog</h2>
          <div className="ba-rel-grid">
            {related.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="ba-rel-card">
                <div className="ba-rel-imgwrap">
                  <img className="ba-rel-img" src={photo(p.img)} alt="" loading="lazy" decoding="async" width={640} height={400} />
                </div>
                <div className="ba-rel-body">
                  <div className="ba-rel-cat">{p.category}</div>
                  <h3 className="ba-rel-title">{p.title}</h3>
                  <div className="ba-rel-foot">
                    <span>{p.date} · {p.read}</span>
                    <ArrowUpRight color={GREEN} size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <PageCTA eyebrow="Want Results Like These?" heading="Let's grow your" highlight="search visibility." button="Start a project" />
    </PageLayout>
  )
}
