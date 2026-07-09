// ─────────────────────────────────────────────────────────────────────────────
// BLOG POSTS - single source of truth for the /blog listing and each
// /blog/<slug> article page. Adding a post here (with a `body`) automatically
// gives it a full, crawlable article page - just remember to also register its
// slug in ROUTES + PAGE_META (src/lib/pageMeta.ts) for the static build.
//
// Inline rich text inside `body` supports two tiny markups, rendered by the
// article page:
//   **bold text**              -> bold
//   [label](/internal/path)    -> internal link (react-router)
// ─────────────────────────────────────────────────────────────────────────────

export type Category = 'Case Studies' | 'Latest Technologies' | 'Awareness'

// A single content block inside an article body.
export type Block =
  | { k: 'p'; text: string }
  | { k: 'h2'; text: string }
  | { k: 'ul'; items: string[] }
  | { k: 'img'; id: string; alt: string; caption?: string }
  | { k: 'faq'; items: { q: string; a: string }[] }

export interface BlogPost {
  slug: string
  title: string            // card / feature headline
  h1?: string              // article headline (defaults to `title`)
  excerpt: string
  category: Category
  read: string
  date: string
  img: string              // Unsplash photo id, shown on the card + as the hero
  metaTitle: string
  metaDescription: string
  featured?: boolean
  body?: Block[]
}

// Builds a stable, cropped Unsplash CDN URL for a photo id at the given size.
export const photo = (id: string, w = 640, h = 400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

export const POSTS: BlogPost[] = [
  // ── Featured / newest article (full body) ──────────────────────────────────
  {
    slug: 'search-console-social-video-properties',
    title: 'Google Search Console gains reporting on social and video platforms',
    excerpt:
      'Google has introduced a new platform property type in Search Console to track how social and video content performs directly on Google Search - across Instagram, TikTok, X and YouTube.',
    category: 'Latest Technologies',
    read: '6 min read',
    date: 'Jul 2026',
    img: 'photo-1460925895917-afdab827c52f',
    metaTitle: 'Google Search Console Adds Social & Video Platform Properties',
    metaDescription:
      'Google Search Console now supports platform properties for Instagram, TikTok, X, and YouTube. Learn how to track your social and video search performance.',
    featured: true,
    body: [
      { k: 'h2', text: 'TL;DR: Key facts about Search Console platform properties' },
      {
        k: 'ul',
        items: [
          'Google has introduced a new platform property type in Search Console to track how social and video content performs directly on Google Search.',
          'The tool currently supports data tracking for Instagram, TikTok, X, and YouTube.',
          'Interactions are logged across multiple Google surfaces, including Search, Google News, and Discover.',
          'Google is rolling out these platform properties gradually to site owners and creators over the coming weeks.',
        ],
      },

      { k: 'h2', text: 'What are platform properties in Google Search Console?' },
      {
        k: 'p',
        text: 'Platform properties in Google Search Console are specialized account configurations that allow creators and publishers to monitor how people find their social media content when searching on Google. This feature provides direct performance reports for off-site content, enabling creators to measure exact search queries leading to their external accounts.',
      },
      { k: 'p', text: 'Key capabilities of platform properties include:' },
      {
        k: 'ul',
        items: [
          'Tracking exact search terms that lead users to your Instagram, TikTok, X, and YouTube content.',
          'Monitoring content performance across Google Search, News, and Discover.',
          'Providing a dedicated dashboard by adding each specific social channel or video account as its own property.',
        ],
      },

      {
        k: 'img',
        id: 'photo-1432888622747-4eb9a8efeb07',
        alt: 'Google Search open on a laptop screen',
        caption: 'Platform properties bring off-site social and video performance into the Search Console dashboard.',
      },

      { k: 'h2', text: 'Why is Google adding social media properties to Search Console?' },
      {
        k: 'p',
        text: 'Google is adding social media properties to Search Console because user behavior shows that people spend less time on traditional websites and increasingly consume content directly on social and video platforms. By bridging this data gap, Google helps site owners and creators understand precisely how their audience interacts with their social media posts through Google Search.',
      },
      { k: 'p', text: 'This update addresses several modern search behaviors:' },
      {
        k: 'ul',
        items: [
          'It tracks the performance of YouTube videos, which have become highly popular in both Google search engine results pages (SERPs) and AI chats.',
          'It allows marketers to quantify the organic search value of platforms like TikTok and X.',
          'It highlights the importance of comprehensive [SEO Services](/services/seo-services) that extend beyond a single website domain.',
        ],
      },

      { k: 'h2', text: 'How does Search Console track social and video clicks?' },
      {
        k: 'p',
        text: 'Search Console tracks social and video clicks by counting an interaction every time a user taps your platform content from the search results, even if the content opens within a native Google viewer. When an Instagram story or YouTube video surfaces in Google Search or Discover, it registers as an impression; when a user engages with it, it registers as a click.',
      },
      { k: 'p', text: 'Specific tracking behaviors include:' },
      {
        k: 'ul',
        items: [
          '**Instagram stories:** These count as impressions when they appear in search results. They register as clicks if a user taps them.',
          '**Videos played on Google:** If a video appears in Discover or Search, it counts as an impression. If clicked, it counts as a click, regardless of whether it plays inside the Google viewer or the native app.',
          '**News and Discover:** Performance reports for Google News and Discover will only appear if your social content actively receives traffic from those specific surfaces.',
        ],
      },

      { k: 'h2', text: 'How do you set up a platform property?' },
      {
        k: 'p',
        text: 'You set up a platform property by adding each individual social media account or video channel as its own distinct property inside your Google Search Console account. Because it takes a few days for Google to collect and process performance metrics, new properties will initially display empty charts.',
      },
      { k: 'p', text: 'To ensure a smooth setup process:' },
      {
        k: 'ul',
        items: [
          'Add each channel separately to keep data isolated and accurate.',
          'Check back after a few days, as charts for recently created properties will only show partial data for the days since collection started.',
          'Connect this data with your broader [Digital Marketing Services](/solutions/digital-marketing) strategy to measure total brand reach across the web.',
        ],
      },

      { k: 'h2', text: 'How do platform properties change organic marketing?' },
      {
        k: 'p',
        text: 'Platform properties change organic marketing by providing the direct search value of off-site content, allowing brands to measure the ROI of social media within a traditional SEO framework. Because a large portion of organic value now comes from partnerships and social content, this update moves search visibility tracking beyond standard website domains.',
      },
      { k: 'p', text: 'The main shifts in marketing include:' },
      {
        k: 'ul',
        items: [
          "Justifying investment in video production by proving YouTube's exact search value.",
          'Providing clearer attribution for off-site influencer marketing campaigns.',
          'Encouraging brands to rely on robust [Web Design and Development Services](/services/web-development) for their main site while actively optimizing social platforms to capture top-of-funnel search traffic.',
        ],
      },

      { k: 'h2', text: 'Which strategies maximize your social search visibility?' },
      {
        k: 'p',
        text: 'The most effective strategies to maximize your social search visibility involve optimizing your social media captions, video descriptions, and hashtags with the same keyword rigor used for standard website content. Because Search Console now tracks which search terms lead to your social posts, actively targeting high-volume keywords on your external platforms directly improves your overall Google Search footprint.',
      },
      { k: 'p', text: 'Tactics to boost your social search performance include:' },
      {
        k: 'ul',
        items: [
          'Placing primary keywords in the first 50 characters of your YouTube and TikTok descriptions.',
          "Utilizing relevant, high-intent hashtags on Instagram and X to provide context to Google's indexers.",
          'Aligning your social media output with your core [Content Marketing Services](/services/social-media-marketing) so your website and social channels dominate different parts of the same search result page.',
        ],
      },

      { k: 'h2', text: 'Frequently asked questions' },
      {
        k: 'faq',
        items: [
          {
            q: 'What platforms are supported by Search Console platform properties?',
            a: 'The platforms currently supported by Search Console platform properties are Instagram, TikTok, X, and YouTube. You must add each of these accounts or channels as a separate property to begin tracking their performance data in Google Search.',
          },
          {
            q: 'Can I see Google Discover data for my social media posts?',
            a: 'Yes, you can see Google Discover data for your social media posts in the Search Console. However, the Discover and Google News reports will only appear in your dashboard if your content actually receives traffic from those specific surfaces.',
          },
          {
            q: 'Will my historical social media data appear immediately?',
            a: 'No, your historical social media data will not appear immediately. If you recently added a platform property, you might see empty charts initially because it takes a few days for Google to collect and process the performance metrics after setup.',
          },
          {
            q: 'Does playing a video in Google Search count as a click?',
            a: "Yes, playing a video directly in Google Search counts as a click. Even if the user's click opens the video inside the native Google viewer rather than taking them to the platform's website, a click is still added in Search Console.",
          },
        ],
      },
    ],
  },

  // ── Existing listing cards ──────────────────────────────────────────────────
  {
    slug: 'scaling-saas-50k-users',
    title: 'Scaling a SaaS platform to 50k users without rewriting the stack',
    excerpt: 'The architecture decisions that let one of our clients 10x their user base on the same codebase.',
    category: 'Case Studies', read: '6 min read', date: 'May 2026', img: 'photo-1551288049-bebda4e38f71',
    metaTitle: 'Scaling a SaaS Platform to 50k Users | EG Digital',
    metaDescription: 'The architecture decisions that let one of our clients 10x their user base on the same codebase - without a costly rewrite.',
  },
  {
    slug: 'dynamics-365-migration-zero-downtime',
    title: 'Migrating a manufacturer to Dynamics 365 - with zero downtime',
    excerpt: 'How we phased a full ERP migration around a 24/7 production line.',
    category: 'Case Studies', read: '7 min read', date: 'Apr 2026', img: 'photo-1717386255773-1e3037c81788',
    metaTitle: 'Zero-Downtime Dynamics 365 ERP Migration | EG Digital',
    metaDescription: 'How we phased a full ERP migration to Microsoft Dynamics 365 around a 24/7 production line, with zero downtime.',
  },
  {
    slug: 'microsoft-copilot-small-business',
    title: 'What Microsoft Copilot actually means for small businesses',
    excerpt: 'Cutting through the hype: where AI assistants genuinely save time today.',
    category: 'Latest Technologies', read: '5 min read', date: 'Jun 2026', img: 'photo-1684369175833-4b445ad6bfb5',
    metaTitle: 'What Microsoft Copilot Means for Small Business | EG Digital',
    metaDescription: 'Cutting through the hype: where Microsoft Copilot and AI assistants genuinely save small businesses time today.',
  },
  {
    slug: 'react-19-end-of-useeffect',
    title: 'React 19 and the end of the useEffect era',
    excerpt: 'The new patterns reshaping how we build fast, resilient front-ends.',
    category: 'Latest Technologies', read: '6 min read', date: 'May 2026', img: 'photo-1461749280684-dccba630e2f6',
    metaTitle: 'React 19 and the End of the useEffect Era | EG Digital',
    metaDescription: 'The new React 19 patterns reshaping how we build fast, resilient front-ends - and what they replace.',
  },
  {
    slug: 'phishing-tactics-australian-business-2026',
    title: 'Five phishing tactics still fooling Australian businesses in 2026',
    excerpt: 'Practical, plain-English steps to protect your team and your data.',
    category: 'Awareness', read: '4 min read', date: 'Jun 2026', img: 'photo-1562813733-b31f71025d54',
    metaTitle: 'Five Phishing Tactics Fooling Australian Businesses | EG Digital',
    metaDescription: 'Practical, plain-English steps to protect your team and your data from the phishing tactics still working in 2026.',
  },
  {
    slug: 'zero-trust-security-model',
    title: 'Why your business needs a zero-trust security model now',
    excerpt: 'The shift from perimeter defence to identity-first security, explained.',
    category: 'Awareness', read: '5 min read', date: 'Apr 2026', img: 'photo-1614064641938-3bbee52942c7',
    metaTitle: 'Why Your Business Needs Zero-Trust Security Now | EG Digital',
    metaDescription: 'The shift from perimeter defence to identity-first, zero-trust security - explained in plain English for business.',
  },
]

export const getPost = (slug: string | undefined): BlogPost | undefined =>
  POSTS.find(p => p.slug === slug)

export const FEATURED = POSTS.find(p => p.featured) ?? POSTS[0]
export const GRID_POSTS = POSTS.filter(p => p !== FEATURED)
