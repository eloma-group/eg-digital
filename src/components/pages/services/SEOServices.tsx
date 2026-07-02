import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3, Users, Bot, Unlock, Wrench, FileText, MapPin, Link2, Sparkles,
  ClipboardList, Search, BadgeCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageLayout, Eyebrow, Reveal, PageCTA, NAVY, GREEN, EASE } from '../_kit'

/* ════════════════════════════════════════════════════════════════════════════
   SERVICE PAGE - SEO SERVICES (Australia)
   Dark navy hero with an animated AI-search panel (search bar with blinking
   cursor, AI Overview answer citing the brand, ranking ladder and AI-engine
   chips - compositor-only animation), SEO/AEO/GEO explainer cards and a
   timeline process rail. Copy is verbatim from the approved page content.
   ════════════════════════════════════════════════════════════════════════════ */

const SKY = '#7dd3fc'

const ENGINES = ['ChatGPT', 'Perplexity', 'Gemini', 'AI Overviews', 'Copilot', 'Claude']

const RANKS: { pos: string; site: string; you?: boolean }[] = [
  { pos: '#1', site: 'egdigital.com.au', you: true },
  { pos: '#2', site: 'competitor-a.com.au' },
  { pos: '#3', site: 'competitor-b.com.au' },
]

const WHY: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: BarChart3,
    t: 'We report on revenue, not rankings',
    d: 'A keyword position is a means, not a result. Our reporting starts with organic enquiries, leads, and the revenue they turn into, then works back to the rankings and traffic that produced them. If a report only shows you keyword positions, it is hiding the part that matters. Ours shows you the part that matters first.',
  },
  {
    icon: Users,
    t: 'One team for search, content, and tech',
    d: 'You get a strategist, SEO specialists, content writers, and developers who work together, not a single account manager forwarding your questions to people you never meet. Because EG Digital also builds websites and runs the underlying cloud and software, the technical fixes that usually stall for months in a developer queue get done in days.',
  },
  {
    icon: Bot,
    t: 'Built for Google and AI search from day one',
    d: 'Search is splitting into two surfaces: the classic Google results page, and the answers that AI assistants generate. We optimize for both in the same program. The work that earns you a Google ranking (clean technical foundations, genuine authority, content that answers real questions) is much of the same work that gets you cited by an AI engine. We do it once and it pays off in both places.',
  },
  {
    icon: Unlock,
    t: 'No lock-in, no smoke',
    d: 'No 24-month contracts. No hidden link networks. No guaranteed "page one in 30 days," because anyone promising that is either misleading you or about to damage your site. We earn the renewal each month by moving the numbers.',
  },
]

const SERVICES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Wrench,
    t: 'Technical SEO',
    d: 'Search engines have to crawl, render, and index your site before content can rank. Many Australian sites fail at this first step without knowing it, often because the page looks fine to a visitor but returns almost nothing to a crawler. We audit and fix the foundations: crawlability and indexation, site speed and Core Web Vitals, mobile rendering, site architecture, internal linking, structured data, canonical tags, and redirects. We report the results in your own Google Search Console, not behind a dashboard only we can read.',
  },
  {
    icon: FileText,
    t: 'On-page SEO and content',
    d: "Content without a keyword map is just publishing. We map every page and article to a specific search intent and a stage in your buyer's journey, then write content that earns the ranking and reads like a person wrote it. That covers service pages, location pages, comparison and pricing pages, and the informational articles that pull in demand earlier in the funnel. Titles, headings, metadata, and on-page structure are optimised so both Google and AI engines can extract a clean answer.",
  },
  {
    icon: MapPin,
    t: 'Local SEO',
    d: 'Close to half of Google searches have local intent, and many include a suburb name or "near me." If you serve customers in specific places, we get you visible in Google Maps and the local pack: an optimised Google Business Profile, consistent citations across Australian directories, location pages with genuine local content, and reviews. We start where you have a real footprint and expand from there.',
  },
  {
    icon: Link2,
    t: 'Off-page SEO and link building',
    d: 'Links still carry real weight, and the cheap way of getting them still gets sites penalised. Our links are earned through digital PR and outreach that pitches journalists and industry publications with stories and data worth covering. Every link passes a relevance and authority check before we pursue it. We would rather build fifty links that hold through the next algorithm update than five hundred that vanish with it. It is slower. It also lasts.',
  },
  {
    icon: Sparkles,
    t: 'AI search optimisation: AEO and GEO',
    d: "This is where most agencies stop and we keep going. More buyers now ask an AI assistant before they ever reach a search results page, and those visitors convert at several times the rate of a mid-page blue link. There is a catch worth knowing: a 2026 audit found AI systems failed to cite brands in 81% of unbranded questions about the brand's own category. That gap is the opportunity. The two disciplines that close it are explained below.",
  },
  {
    icon: ClipboardList,
    t: 'SEO audits and strategy',
    d: 'Every engagement starts with a full audit, technical and content together, benchmarked against the competitors actually beating you in your market. The audit becomes the plan. Every recommendation traces back to something specific we found, with a priority and an expected impact, so you know what we are doing and why before we touch the site.',
  },
]

const LAYERS: { k: string; t: string; d: string }[] = [
  {
    k: 'SEO',
    t: 'Search Engine Optimisation',
    d: 'is the established discipline: getting your pages to rank in the classic list of links on Google and Bing.',
  },
  {
    k: 'AEO',
    t: 'Answer Engine Optimisation',
    d: 'is about being the source an AI engine cites when someone asks a question. Ranking first on Google means little if ChatGPT quotes a competitor in its answer. AEO restructures your content so the AI engine finds a clean, sourced answer with your brand attached, through question-shaped content, schema, and citation-grade facts.',
  },
  {
    k: 'GEO',
    t: 'Generative Engine Optimisation',
    d: 'is the broader job of being visible across every generative AI experience: ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Microsoft Copilot. It covers how these engines recognise your brand as an entity, how often you appear in the sources they learn from, and how your authority reads to a machine. AEO is one tactic inside GEO.',
  },
]

const STEPS: { t: string; d: string }[] = [
  {
    t: 'Audit and benchmark',
    d: 'We run a full technical and content audit and measure where you stand against the competitors winning your keywords, including your current visibility in AI answers. Baseline first. We cannot improve what we have not measured.',
  },
  {
    t: 'Strategy and keyword map',
    d: 'We map the keywords and buyer questions that lead to revenue, not just the ones with big search volumes, and assign each to a page. You get a documented strategy with priorities, not a list of tactics.',
  },
  {
    t: 'Technical execution',
    d: 'We fix the foundations so content can rank: crawling and indexation, speed, structure, schema, and internal links. This is the step that unlocks everything after it.',
  },
  {
    t: 'Content and on-page',
    d: 'We produce content mapped to your strategy, structured for both Google and AI retrieval, and optimised page by page.',
  },
  {
    t: 'Authority and AI visibility',
    d: 'We earn quality links through digital PR and build the brand signals that get you cited by AI engines, then track citation share across the assistants that matter.',
  },
  {
    t: 'Measure, report, refine',
    d: "You get monthly reporting tied to leads and revenue, in plain language, with the next month's priorities set against the data. The work compounds, and so do the results.",
  },
]

const COUNTRIES: { t: string; d: string }[] = [
  {
    t: 'SEO Services in the UK',
    d: "Our SEO services in the UK are tailored for businesses competing in one of the world's most mature digital markets. We build scalable SEO strategies that improve rankings on Google, strengthen topical authority, and increase visibility across AI-powered search platforms such as ChatGPT, Gemini, and Google AI Overviews.",
  },
  {
    t: 'SEO Services in USA',
    d: 'Businesses looking for SEO services in the USA need strategies that can compete across highly competitive industries and multiple geographic markets. We combine technical SEO, high-quality content, authority building, and Generative Engine Optimisation (GEO) to help businesses generate sustainable organic growth across the United States.',
  },
  {
    t: 'SEO Services in Canada',
    d: 'Our SEO services in Canada focus on building long-term search visibility through technically sound websites, content aligned with user intent, and high-authority backlinks. Whether you operate locally or nationally, we help Canadian businesses improve both traditional Google rankings and AI search citations.',
  },
  {
    t: 'SEO Services in Singapore',
    d: "Singapore's competitive digital landscape requires a strong technical foundation and content that demonstrates expertise. Our SEO services in Singapore help businesses improve search visibility, generate qualified enquiries, and build authority across Google Search, AI Overviews, ChatGPT, Perplexity, and other emerging search experiences.",
  },
]

const FAQS: { q: string; a: string[] }[] = [
  {
    q: 'What is the difference between an SEO company and an SEO consultant?',
    a: [
      'An SEO consultant is typically an individual who provides strategic advice, audits, or project-based guidance. An SEO company offers a broader team of specialists, including technical SEO experts, content strategists, link-building specialists, developers, and reporting analysts, to execute and scale an ongoing SEO program.',
      'At EG Digital, you get both strategic guidance and hands-on execution under one roof. Our strategists work alongside SEO specialists, content writers, and developers, ensuring recommendations are implemented quickly and aligned with your business goals. This integrated approach delivers faster execution, greater accountability, and better long-term results.',
    ],
  },
  {
    q: 'How long does SEO take to work in Australia?',
    a: [
      'Most clients see measurable movement in three to six months, with stronger results across six to twelve. A brand-new site, or one with a weak technical foundation, takes longer because the groundwork has to be laid first. We would rather set that expectation honestly than promise a timeline we cannot hit.',
    ],
  },
  {
    q: 'Do I still need traditional SEO if AI search is taking over?',
    a: [
      'Yes, and the reverse is also true. AI engines retrieve heavily from indexed web pages, so first-page Google rankings remain one of the strongest predictors of whether you get cited in an AI answer. Skipping SEO and going AI-only leaves the foundation those engines pull from unbuilt. We run both together for that reason.',
    ],
  },
  {
    q: 'What makes EG Digital a full-service SEO company?',
    a: [
      'We cover the whole of search under one team: technical SEO, on-page and content, local SEO, off-page authority and digital PR, and AI search optimisation through AEO and GEO. Because EG Digital is also a web, cloud, and software partner, the technical work that usually waits in a developer queue gets handled in-house.',
    ],
  },
  {
    q: 'Will you lock me into a long contract?',
    a: [
      'No. We work on flexible terms and earn the renewal by moving your numbers. A short minimum to let the work take effect is reasonable; a two-year lock-in is not, and we do not use them.',
    ],
  },
  {
    q: 'How do you measure SEO success?',
    a: [
      'By outcomes that map to your business: organic enquiries and leads, the revenue they produce, rankings for commercial-intent keywords, your Search Console traffic trend, click-through rate, and, increasingly, your share of citations in AI answers. Rankings are in the report, but they are not the headline. Revenue is.',
    ],
  },
  {
    q: 'Which AI engines do you optimize for?',
    a: [
      'ChatGPT, Perplexity, Claude, Google AI Overviews, Gemini, and Microsoft Copilot. Each retrieves and weights sources differently, so we tune the work per engine and track your citation share across all of them.',
    ],
  },
  {
    q: 'Do you provide SEO services outside Australia?',
    a: [
      'Yes. While EG Digital is headquartered in Melbourne, we also deliver SEO campaigns for businesses targeting the UK, USA, Canada and Singapore. Every campaign is tailored to the search landscape, competitors and customer behaviour within the target country, ensuring your SEO strategy aligns with local search intent while maintaining a scalable international presence.',
    ],
  },
]

/* Animated AI-search panel - a query types in, an AI Overview cites the brand,
   the ranking ladder settles at #1, and AI-engine chips fade in.
   Transform/opacity only. */
function SearchPanel() {
  return (
    <div className="seo-panel" aria-label="Search and AI answer visibility">
      <div className="seo-sbar">
        <Search size={15} />
        <span className="seo-query">best seo company australia</span>
        <span className="seo-cursor" />
      </div>

      <motion.div
        className="seo-ai"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
      >
        <div className="seo-ai-head"><Sparkles size={13} /> AI Overview</div>
        <div className="seo-ai-lines">
          <span style={{ width: '92%' }} />
          <span style={{ width: '78%' }} />
          <span style={{ width: '58%' }} />
        </div>
        <div className="seo-cite"><BadgeCheck size={13} /> egdigital.com.au <b>cited</b></div>
      </motion.div>

      <div className="seo-ranks">
        {RANKS.map((r, i) => (
          <motion.div
            key={r.pos}
            className={r.you ? 'seo-rank you' : 'seo-rank'}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.95 + i * 0.12, duration: 0.5, ease: EASE }}
          >
            <b>{r.pos}</b><span>{r.site}</span>
          </motion.div>
        ))}
      </div>

      <div className="seo-engines">
        {ENGINES.map((e, i) => (
          <motion.span
            key={e}
            className="seo-eng"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 1.35 + i * 0.07, duration: 0.45, ease: EASE }}
          >
            <i />{e}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export function SEOServices() {
  const navigate = useNavigate()

  // No global per-route meta helper exists, so set the document title here to
  // match the approved META TITLE for this page.
  useEffect(() => {
    const prev = document.title
    document.title = 'SEO company in Australia | SEO + AEO & GEO | EG Digital'
    return () => { document.title = prev }
  }, [])

  return (
    <PageLayout>
      <style>{`
        .seo-shell { max-width:min(calc(100vw - 96px),1760px); margin:0 auto; padding:0 clamp(24px,4vw,64px); }
        @media (min-width:1920px){ .seo-shell{ max-width:1900px; } }
        @media (min-width:2560px){ .seo-shell{ max-width:2440px; } }
        /* Mobile: drop the outer 96px gutter so content keeps a clean 24px bezel
           instead of a narrow centred column. */
        @media (max-width:768px){ .seo-shell{ max-width:100%; } }

        /* ── Hero (dark navy) ── */
        .seo-hero { position:relative; overflow:hidden; background:${NAVY};
          padding:clamp(48px,6vw,104px) clamp(24px,4vw,64px) clamp(48px,6vw,96px); }
        .seo-hero::before { content:''; position:absolute; top:-28%; right:-10%; width:min(760px,70vw); height:min(760px,70vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}2b, transparent 62%); pointer-events:none; }
        .seo-hero::after { content:''; position:absolute; bottom:-34%; left:-12%; width:min(640px,60vw); height:min(640px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${SKY}1f, transparent 62%); pointer-events:none; }
        .seo-hin { position:relative; z-index:1; max-width:min(calc(100vw - 96px),1760px); margin:0 auto; }
        @media (min-width:1920px){ .seo-hin{ max-width:1900px; } }
        @media (min-width:2560px){ .seo-hin{ max-width:2440px; } }
        @media (max-width:768px){ .seo-hin{ max-width:100%; } }
        .seo-hgrid { display:grid; grid-template-columns:1.06fr 0.94fr; gap:clamp(36px,5vw,88px); align-items:center; }
        @media (max-width:960px){ .seo-hgrid{ grid-template-columns:1fr; } }
        .seo-h1 { font-size:clamp(44px,7.4vw,108px); font-weight:900; letter-spacing:0.015em; line-height:1.02; color:#fff; margin:16px 0 0; text-transform:uppercase; }
        .seo-h1 em { font-style:normal; color:${GREEN}; }
        .seo-lede { font-size:clamp(20px,2.6vw,34px); font-weight:800; letter-spacing:-0.01em; line-height:1.28; color:rgba(255,255,255,0.92); margin:22px 0 0; }
        .seo-lede span { color:${GREEN}; }
        .seo-intro { max-width:600px; font-size:clamp(15px,1.2vw,18px); line-height:1.8; color:rgba(255,255,255,0.64); margin:20px 0 0; }
        .seo-intro strong { color:#fff; font-weight:700; }
        .seo-cta { display:flex; flex-wrap:wrap; gap:12px; margin-top:clamp(26px,3vw,36px); }
        .seo-bp { display:inline-flex; align-items:center; gap:9px; background:${GREEN}; color:${NAVY}; border:none; border-radius:100px; padding:15px 30px;
          font-size:14px; font-weight:800; cursor:pointer; font-family:inherit; min-height:52px; transition:background .2s,color .2s,transform .18s; will-change:transform; }
        .seo-bp:hover { background:#fff; transform:translateY(-2px); }
        .seo-bp svg { transition:transform .2s; } .seo-bp:hover svg { transform:translateX(3px); }
        @media (max-width:480px){ .seo-bp{ width:100%; justify-content:center; } }
        .seo-hero-more { max-width:900px; margin-top:clamp(30px,3.6vw,52px); padding-top:clamp(26px,3vw,40px); border-top:1px solid rgba(255,255,255,0.12); }
        .seo-hero-more .seo-intro { max-width:900px; margin-top:16px; }
        .seo-hero-more .seo-intro:first-child { margin-top:0; }

        /* ── Animated AI-search panel ── */
        @keyframes seo-float { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-12px); } }
        @keyframes seo-blink { 0%,49%{ opacity:1; } 50%,100%{ opacity:0; } }
        .seo-panel { position:relative; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.12); border-radius:24px;
          padding:clamp(20px,2.4vw,32px); box-shadow:0 40px 90px -40px rgba(0,0,0,0.6); animation:seo-float 8s ease-in-out infinite; will-change:transform; }
        .seo-panel:hover { animation-play-state:paused; }
        .seo-sbar { display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.14);
          border-radius:99px; padding:12px 18px; color:rgba(255,255,255,0.55); }
        .seo-query { font-size:13.5px; font-weight:600; color:rgba(255,255,255,0.85); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .seo-cursor { display:inline-block; width:2px; height:16px; background:${GREEN}; animation:seo-blink 1.1s step-end infinite; }
        .seo-ai { margin-top:14px; background:rgba(125,211,252,0.07); border:1px solid rgba(125,211,252,0.22); border-radius:16px; padding:16px 18px; }
        .seo-ai-head { display:inline-flex; align-items:center; gap:7px; font-size:11px; font-weight:800; letter-spacing:1.4px; text-transform:uppercase; color:${SKY}; }
        .seo-ai-lines { display:flex; flex-direction:column; gap:8px; margin-top:12px; }
        .seo-ai-lines span { display:block; height:9px; border-radius:5px; background:rgba(255,255,255,0.16); }
        .seo-cite { display:inline-flex; align-items:center; gap:7px; margin-top:14px; font-size:12.5px; font-weight:700; color:${GREEN};
          background:rgba(60,185,140,0.12); border:1px solid rgba(60,185,140,0.32); padding:7px 14px; border-radius:99px; }
        .seo-cite b { font-weight:900; text-transform:uppercase; letter-spacing:0.6px; font-size:10.5px; }
        .seo-ranks { display:flex; flex-direction:column; gap:8px; margin-top:14px; }
        .seo-rank { display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1);
          border-radius:12px; padding:11px 15px; }
        .seo-rank b { font-size:13px; font-weight:900; color:rgba(255,255,255,0.5); width:26px; }
        .seo-rank span { font-size:13px; font-weight:600; color:rgba(255,255,255,0.6); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .seo-rank.you { background:rgba(60,185,140,0.1); border-color:rgba(60,185,140,0.35); }
        .seo-rank.you b, .seo-rank.you span { color:${GREEN}; }
        .seo-engines { display:flex; flex-wrap:wrap; gap:8px; margin-top:16px; }
        .seo-eng { display:inline-flex; align-items:center; gap:7px; font-size:12px; font-weight:700; color:rgba(255,255,255,0.8);
          background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); padding:7px 13px; border-radius:100px; }
        .seo-eng i { width:7px; height:7px; border-radius:50%; background:${GREEN}; }
        @media (prefers-reduced-motion:reduce){ .seo-panel, .seo-cursor{ animation:none; } }

        /* ── Section base ── */
        .seo-sec { padding:clamp(56px,7vw,120px) 0; }
        .seo-sec.alt { background:#fff; }
        .seo-sec.dark { background:${NAVY}; position:relative; overflow:hidden; }
        .seo-sec.dark::before { content:''; position:absolute; top:-22%; left:-10%; width:min(640px,60vw); height:min(640px,60vw); border-radius:50%;
          background:radial-gradient(circle, ${GREEN}29, transparent 65%); pointer-events:none; }
        .seo-sec.dark .seo-shell { position:relative; z-index:1; }
        .seo-h2 { font-size:clamp(34px,4.8vw,80px); font-weight:900; letter-spacing:0.01em; line-height:1.02; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .seo-h2 span { color:${GREEN}; }
        .seo-sec.dark .seo-h2 { color:#fff; }
        .seo-lead { max-width:640px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.58); margin:18px 0 0; }
        .seo-sec.dark .seo-lead { color:rgba(255,255,255,0.66); }

        /* ── Why cards ── */
        .seo-why { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .seo-why{ grid-template-columns:1fr; } }
        .seo-wc { position:relative; overflow:hidden; background:#fafbfd; border:1px solid rgba(8,33,60,0.08); border-radius:22px;
          padding:clamp(24px,2.6vw,40px); box-shadow:0 4px 22px rgba(8,33,60,0.05);
          transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .seo-wc::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:${GREEN};
          transform:scaleX(0); transform-origin:left center; transition:transform .45s cubic-bezier(0.16,1,0.3,1); }
        .seo-wc:hover { transform:translateY(-6px); box-shadow:0 30px 64px rgba(8,33,60,0.12); border-color:${GREEN}55; }
        .seo-wc:hover::before { transform:scaleX(1); }
        .seo-wc-ic { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${GREEN}29,${GREEN}0d); color:${GREEN}; margin-bottom:18px; }
        .seo-wc-t { font-size:clamp(19px,1.7vw,26px); font-weight:900; letter-spacing:-0.01em; color:${NAVY}; margin:0 0 12px; line-height:1.16; }
        .seo-wc-d { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:0; }

        /* ── Services (2-col cards) ── */
        .seo-srv { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:900px){ .seo-srv{ grid-template-columns:1fr; } }
        .seo-sc { position:relative; overflow:hidden; background:#fff; border:1px solid rgba(8,33,60,0.09); border-radius:24px;
          padding:clamp(26px,2.8vw,44px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s, border-color .4s; will-change:transform; }
        .seo-sc:hover { transform:translateY(-6px); box-shadow:0 32px 68px -30px rgba(8,33,60,0.3); border-color:${GREEN}; }
        .seo-sc-no { position:absolute; top:clamp(12px,1.4vw,20px); right:clamp(16px,2vw,28px); font-size:clamp(46px,5vw,84px); font-weight:900;
          letter-spacing:-0.05em; color:${GREEN}; opacity:0.12; line-height:1; font-variant-numeric:tabular-nums; pointer-events:none; }
        .seo-sc-ic { width:58px; height:58px; border-radius:16px; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(150deg,${NAVY},#12395f); color:${GREEN}; margin-bottom:18px; }
        .seo-sc-t { font-size:clamp(21px,2.1vw,32px); font-weight:900; letter-spacing:0.01em; line-height:1.12; color:${NAVY}; margin:0; text-transform:uppercase; }
        .seo-sc-p { font-size:clamp(14px,1.02vw,16px); line-height:1.78; color:rgba(8,33,60,0.62); margin:14px 0 0; }

        /* ── SEO / AEO / GEO layer cards (dark) ── */
        .seo-layers { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:900px){ .seo-layers{ grid-template-columns:1fr; } }
        .seo-lc { position:relative; overflow:hidden; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:22px;
          padding:clamp(26px,3vw,42px); transition:transform .4s cubic-bezier(0.16,1,0.3,1), border-color .4s; will-change:transform; }
        .seo-lc:hover { transform:translateY(-6px); border-color:rgba(60,185,140,0.45); }
        .seo-lc-k { font-size:clamp(40px,4.4vw,72px); font-weight:900; letter-spacing:-0.02em; line-height:1; color:${GREEN}; }
        .seo-lc-t { font-size:clamp(15px,1.2vw,18px); font-weight:800; color:#fff; margin:12px 0 0; }
        .seo-lc-d { font-size:clamp(14px,1.02vw,16px); line-height:1.76; color:rgba(255,255,255,0.68); margin:12px 0 0; }
        .seo-lay-close { max-width:860px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(30px,3.6vw,48px) 0 0; }

        /* ── How we work (timeline rail) ── */
        .seo-steps { margin-top:clamp(36px,4vw,56px); }
        .seo-step { display:grid; grid-template-columns:auto 1fr; gap:clamp(18px,2.6vw,44px); }
        .seo-rail { display:flex; flex-direction:column; align-items:center; }
        .seo-dot { width:clamp(46px,4vw,60px); height:clamp(46px,4vw,60px); border-radius:50%; background:${GREEN}; color:${NAVY};
          display:flex; align-items:center; justify-content:center; font-weight:900; font-size:clamp(16px,1.4vw,21px);
          letter-spacing:-0.02em; flex-shrink:0; box-shadow:0 10px 26px -8px rgba(60,185,140,0.55); }
        .seo-line { flex:1; width:2px; background:rgba(8,33,60,0.14); margin:10px 0; min-height:26px; }
        .seo-step:last-child .seo-line { display:none; }
        .seo-step-body { padding-bottom:clamp(28px,3.4vw,52px); }
        .seo-step:last-child .seo-step-body { padding-bottom:0; }
        .seo-step-t { font-size:clamp(22px,2.4vw,40px); font-weight:900; letter-spacing:0.01em; line-height:1.12; color:${NAVY}; margin:0; text-transform:uppercase; padding-top:clamp(8px,1vw,14px); }
        .seo-step-d { font-size:clamp(14px,1.05vw,16.5px); line-height:1.8; color:rgba(8,33,60,0.62); margin:12px 0 0; max-width:72ch; }
        @media (max-width:480px){
          .seo-step{ grid-template-columns:1fr; gap:10px; }
          .seo-rail{ flex-direction:row; }
          .seo-line{ display:none; }
        }

        /* ── Cost ── */
        .seo-cost { display:grid; grid-template-columns:1.1fr 0.9fr; gap:clamp(32px,4vw,72px); align-items:center; margin-top:clamp(32px,4vw,52px); }
        @media (max-width:900px){ .seo-cost{ grid-template-columns:1fr; } }
        .seo-cost-p { font-size:clamp(15px,1.1vw,17.5px); line-height:1.82; color:rgba(8,33,60,0.66); margin:0 0 18px; }
        .seo-cost-p:last-child { margin-bottom:0; }
        .seo-pricecard { background:${NAVY}; border-radius:24px; padding:clamp(28px,3vw,44px); color:#fff; position:relative; overflow:hidden; }
        .seo-pricecard::before { content:''; position:absolute; bottom:-40%; right:-15%; width:60%; height:150%; border-radius:50%;
          background:radial-gradient(circle, ${GREEN}33, transparent 62%); pointer-events:none; }
        .seo-pr { position:relative; padding:18px 0; border-bottom:1px solid rgba(255,255,255,0.12); }
        .seo-pr:first-of-type { padding-top:0; }
        .seo-pr:last-of-type { border-bottom:none; padding-bottom:0; }
        .seo-pr-v { font-size:clamp(24px,2.6vw,40px); font-weight:900; letter-spacing:-0.03em; color:${GREEN}; line-height:1; }
        .seo-pr-v small { font-size:0.42em; font-weight:700; color:rgba(255,255,255,0.6); }
        .seo-pr-l { font-size:clamp(13px,1vw,15px); color:rgba(255,255,255,0.66); margin-top:8px; line-height:1.5; }
        .seo-note { font-size:clamp(14px,1.02vw,16px); font-weight:700; color:${NAVY}; margin:clamp(24px,3vw,36px) 0 0; }
        .seo-note a { color:${GREEN}; text-decoration:none; cursor:pointer; }

        /* ── Countries ── */
        .seo-co { display:grid; grid-template-columns:repeat(2,1fr); gap:clamp(14px,1.6vw,22px); margin-top:clamp(36px,4vw,56px); }
        @media (max-width:800px){ .seo-co{ grid-template-columns:1fr; } }
        .seo-coc { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:clamp(24px,2.6vw,38px);
          transition:transform .35s cubic-bezier(0.16,1,0.3,1), border-color .35s; will-change:transform; }
        .seo-coc:hover { transform:translateY(-5px); border-color:rgba(60,185,140,0.45); }
        .seo-coc-t { font-size:clamp(18px,1.7vw,24px); font-weight:900; letter-spacing:-0.01em; color:#fff; margin:0 0 10px; line-height:1.2; }
        .seo-coc-d { font-size:clamp(14px,1.02vw,15.5px); line-height:1.75; color:rgba(255,255,255,0.66); margin:0; }
        .seo-co-close { max-width:820px; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(255,255,255,0.72); margin:clamp(30px,3.6vw,48px) 0 0; }

        /* ── Ready band ── */
        .seo-ready { position:relative; overflow:hidden; background:linear-gradient(160deg, #f2fbf7 0%, #e9f4fb 100%); border:1px solid rgba(8,33,60,0.1); border-radius:28px;
          padding:clamp(34px,5vw,72px); margin-top:clamp(36px,4vw,56px); text-align:center; }
        .seo-ready::before { content:''; position:absolute; inset:0; pointer-events:none;
          background:radial-gradient(ellipse 50% 60% at 85% 10%, ${GREEN}1a, transparent 65%); }
        .seo-ready-h { font-size:clamp(30px,4.4vw,68px); font-weight:900; letter-spacing:0.01em; line-height:1.04; text-transform:uppercase; color:${NAVY}; margin:14px 0 0; }
        .seo-ready-p { max-width:720px; margin:18px auto 0; font-size:clamp(15px,1.15vw,18px); line-height:1.8; color:rgba(8,33,60,0.62); }
        .seo-ready-cta { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-top:clamp(24px,3vw,34px); }

        /* ── FAQ ── */
        .seo-faq { margin-top:clamp(36px,4vw,56px); }
        .seo-fq { padding:clamp(24px,3vw,40px) 0; border-top:1px solid rgba(8,33,60,0.12); }
        .seo-fq:last-child { border-bottom:1px solid rgba(8,33,60,0.12); }
        .seo-fq-q { font-size:clamp(20px,2.1vw,32px); font-weight:900; letter-spacing:-0.01em; color:${NAVY}; margin:0 0 14px; line-height:1.18; }
        .seo-fq-a { font-size:clamp(14px,1.05vw,16.5px); line-height:1.82; color:rgba(8,33,60,0.64); margin:0 0 14px; max-width:90ch; }
        .seo-fq-a:last-child { margin-bottom:0; }
      `}</style>

      {/* ── Hero (dark) ── */}
      <section className="seo-hero">
        <div className="seo-hin">
          <div className="seo-hgrid">
            <Reveal>
              <Eyebrow light>SEO Services in Australia</Eyebrow>
              <h1 className="seo-h1">Get found on Google and in <em>AI answers</em></h1>
              <p className="seo-lede">
                Get found on Google and in AI answers, by the people who are <span>ready to buy</span>.
              </p>
              <p className="seo-intro">
                Most SEOs sell you rankings. Rankings are not the point. Leads are. Revenue is.
              </p>
              <p className="seo-intro">
                EG Digital is a Melbourne-based SEO company that treats organic search as a growth channel, not a
                vanity dashboard. We run the technical fixes, the content, and the off-page authority work as one
                program, and we tie all of it to one number you actually care about: qualified enquiries from people
                searching for what you sell. We also do the part most Australian agencies are still catching up on,
                which is making your brand the answer when buyers ask ChatGPT, Perplexity, Gemini, or Google's AI
                Overviews instead of typing into a search box.
              </p>
              <div className="seo-cta">
                <button className="seo-bp" onClick={() => navigate('/contact')}>
                  Get a free SEO audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <SearchPanel />
            </Reveal>
          </div>

          <Reveal>
            <div className="seo-hero-more">
              <p className="seo-intro">
                We are part of Eloma Group, which means your SEO sits next to web development, Microsoft and cloud,
                custom software, and cyber security under one roof. <strong>One partner, one team, one set of monthly
                reports you can read without a translator.</strong>
              </p>
              <p className="seo-intro">
                Get a free SEO audit. No lock-in, just a clear picture of where you stand.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why work with EG Digital ── */}
      <section className="seo-sec alt">
        <div className="seo-shell">
          <Reveal>
            <Eyebrow>Why EG Digital</Eyebrow>
            <h2 className="seo-h2">Why work with EG Digital as your SEO company in <span>Australia</span></h2>
          </Reveal>
          <div className="seo-why">
            {WHY.map((w, i) => {
              const Ic = w.icon
              return (
                <Reveal key={w.t} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="seo-wc" style={{ height: '100%' }}>
                    <div className="seo-wc-ic"><Ic size={24} /></div>
                    <h3 className="seo-wc-t">{w.t}</h3>
                    <p className="seo-wc-d">{w.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Our SEO services ── */}
      <section className="seo-sec">
        <div className="seo-shell">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="seo-h2">Our SEO <span>services</span></h2>
            <p className="seo-lead">
              We are a full-service SEO company, so you can take the whole program or the single piece you are
              missing. Here is what we do.
            </p>
          </Reveal>
          <div className="seo-srv">
            {SERVICES.map((s, i) => {
              const Ic = s.icon
              return (
                <Reveal key={s.t} delay={Math.min(i * 0.04, 0.2)}>
                  <div className="seo-sc" style={{ height: '100%' }}>
                    <span className="seo-sc-no">{String(i + 1).padStart(2, '0')}</span>
                    <div className="seo-sc-ic"><Ic size={26} /></div>
                    <h3 className="seo-sc-t">{s.t}</h3>
                    <p className="seo-sc-p">{s.d}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SEO, AEO, GEO explainer (dark) ── */}
      <section className="seo-sec dark">
        <div className="seo-shell">
          <Reveal>
            <Eyebrow light>The new search layer</Eyebrow>
            <h2 className="seo-h2">SEO, AEO, and GEO: what the new search layer means for <span>you</span></h2>
            <p className="seo-lead">The vocabulary has multiplied lately, so here is the plain version.</p>
          </Reveal>
          <div className="seo-layers">
            {LAYERS.map((l, i) => (
              <Reveal key={l.k} delay={Math.min(i * 0.08, 0.24)}>
                <div className="seo-lc" style={{ height: '100%' }}>
                  <div className="seo-lc-k">{l.k}</div>
                  <div className="seo-lc-t">({l.t})</div>
                  <p className="seo-lc-d">{l.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="seo-lay-close">
              You do not choose between these. AI engines pull heavily from indexed web content, so strong Google
              rankings still predict whether you get cited in an AI answer. We run SEO, AEO, and GEO as one program
              because the technical groundwork (schema, factual content, authority) compounds across all of them.
              Build it once, get found everywhere your buyers are looking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── How we work (timeline) ── */}
      <section className="seo-sec alt">
        <div className="seo-shell">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="seo-h2">From baseline to <span>compounding</span></h2>
          </Reveal>
          <div className="seo-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={Math.min(i * 0.04, 0.16)}>
                <div className="seo-step">
                  <div className="seo-rail">
                    <div className="seo-dot">{String(i + 1).padStart(2, '0')}</div>
                    <div className="seo-line" />
                  </div>
                  <div className="seo-step-body">
                    <h3 className="seo-step-t">{s.t}</h3>
                    <p className="seo-step-d">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost ── */}
      <section className="seo-sec">
        <div className="seo-shell">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="seo-h2">What SEO costs in <span>Australia</span></h2>
          </Reveal>
          <div className="seo-cost">
            <Reveal>
              <div>
                <p className="seo-cost-p">
                  Honest answer: it depends on your market and scope, and any company quoting a flat number before
                  seeing your site is guessing. For context, most Australian SMBs pay between $1,500 and $5,000 per
                  month on an SEO retainer, with competitive industries such as legal, finance, and trades pushing
                  higher. One-off projects like audits and migrations are usually scoped separately. Dedicated AI
                  search work (AEO and GEO) often folds into a mid or premium retainer rather than appearing as a
                  separate line.
                </p>
                <p className="seo-cost-p">
                  We quote from an actual audit of your situation, and the quote comes with a scope document, not just
                  a number. You will know what gets done each month, and the report will show whether it did.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="seo-pricecard">
                <div className="seo-pr">
                  <div className="seo-pr-v">$1,500 - $5,000 <small>/mo</small></div>
                  <div className="seo-pr-l">What most Australian SMBs pay on an SEO retainer, with competitive industries such as legal, finance, and trades pushing higher.</div>
                </div>
                <div className="seo-pr">
                  <div className="seo-pr-v">Scoped separately</div>
                  <div className="seo-pr-l">One-off projects like audits and migrations.</div>
                </div>
                <div className="seo-pr">
                  <div className="seo-pr-v">AEO + GEO</div>
                  <div className="seo-pr-l">Dedicated AI search work often folds into a mid or premium retainer rather than appearing as a separate line.</div>
                </div>
              </div>
            </Reveal>
          </div>
          <p className="seo-note">
            <a onClick={() => navigate('/contact')}>Get a free SEO audit and a real quote</a>
          </p>
        </div>
      </section>

      {/* ── International (dark) ── */}
      <section className="seo-sec dark">
        <div className="seo-shell">
          <Reveal>
            <Eyebrow light>Worldwide</Eyebrow>
            <h2 className="seo-h2">International SEO <span>Services</span></h2>
            <p className="seo-lead">
              Based in Melbourne, EG Digital delivers SEO services in Australia while also helping businesses grow
              their organic visibility across the UK, USA, Canada and Singapore through market-specific SEO strategies
              built for Google and AI search.
            </p>
          </Reveal>
          <div className="seo-co">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 0.06, 0.24)}>
                <div className="seo-coc" style={{ height: '100%' }}>
                  <h3 className="seo-coc-t">{c.t}</h3>
                  <p className="seo-coc-d">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="seo-co-close">
              Whether your business operates in Australia or internationally, our approach remains the same: build
              technically strong websites, create authoritative content, earn trusted links, and optimise your brand
              for both traditional search engines and AI-powered search experiences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ready to grow your organic traffic ── */}
      <section className="seo-sec alt">
        <div className="seo-shell">
          <Reveal>
            <div className="seo-ready">
              <Eyebrow>Free audit</Eyebrow>
              <h2 className="seo-ready-h">Ready to grow your organic traffic?</h2>
              <p className="seo-ready-p">
                Tell us where your search visibility is falling short. We will run a free audit, review your
                competitors, and tell you exactly where you stand on Google and in AI answers. If we can help, we will
                show you how. If we cannot, we will tell you that too.
              </p>
              <div className="seo-ready-cta">
                <button className="seo-bp" onClick={() => navigate('/contact')}>
                  Get a free SEO audit
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke={NAVY} strokeWidth="1.7" strokeLinecap="round" /></svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="seo-sec">
        <div className="seo-shell">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="seo-h2">Frequently asked <span>questions</span></h2>
          </Reveal>
          <div className="seo-faq">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.15)}>
                <div className="seo-fq">
                  <h3 className="seo-fq-q">{f.q}</h3>
                  {f.a.map((p, pi) => <p key={pi} className="seo-fq-a">{p}</p>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready When You Are"
        heading="Let's grow your"
        highlight="visibility."
        button="Get a free SEO audit"
      />
    </PageLayout>
  )
}
