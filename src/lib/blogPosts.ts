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
    date: 'Jul 10, 2026',
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
          'Encouraging brands to rely on robust [Web Design and Development Services](/services/web-development) and [custom app development](/services/custom-app-development-company-australia) for their main site and products while actively optimizing social platforms to capture top-of-funnel search traffic.',
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
          'Aligning your social media output with your core [Content Marketing Services](/services/content-creation) and consistent [graphic design](/services/graphic-design) so your website and social channels dominate different parts of the same search result page.',
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

  // ── Listing cards ───────────────────────────────────────────────────────────
  {
    slug: 'rank-google-maps-three-pack-australia',
    title: 'How to rank in the Google Maps three-pack in Australia',
    h1: 'How Do You Rank in the Google Maps Three-Pack in Australia?',
    excerpt:
      'Optimising your Google Business Profile, building consistent local citations, earning genuine reviews, and signalling proximity and relevance - here is how Australian businesses win the Google Maps three-pack.',
    category: 'Awareness',
    read: '9 min read',
    date: 'Jul 14, 2026',
    img: 'photo-1604357209793-fca5dca89f97',
    metaTitle: 'How to Rank in the Google Maps Three-Pack in Australia | EG Digital',
    metaDescription:
      'Learn how Australian businesses rank in the Google Maps three-pack, from Google Business Profile optimisation to reviews, citations, and local links.',
    body: [
      {
        k: 'p',
        text: 'You rank in the Google Maps three-pack by optimising your Google Business Profile, building consistent local citations, earning genuine reviews, and signalling proximity and relevance for the exact terms your customers search. No single factor decides it. Google blends relevance, distance, and prominence, and Australian businesses that win the three-pack usually score well on all three at once.',
      },

      { k: 'h2', text: 'TL;DR: Key facts' },
      {
        k: 'ul',
        items: [
          'The three-pack shows the top three local results above the organic listings on Google Search and Maps.',
          "Google's three ranking pillars are relevance, distance, and prominence.",
          'Review count and review recency carry more weight in local rankings than most business owners assume.',
          'NAP (name, address, phone) consistency across the web remains one of the most common reasons Australian businesses get filtered out of local packs.',
          'A fully completed Google Business Profile with accurate categories outperforms a sparse one, even in competitive metro suburbs like Surry Hills or South Yarra.',
        ],
      },

      { k: 'h2', text: 'What Is the Google Maps Three-Pack?' },
      {
        k: 'p',
        text: 'The Google Maps three-pack is the block of three local business listings that appears at the top of Google Search results for location-based queries, shown alongside a map. Search "electrician Parramatta" or "cafe near me" and the three-pack appears before any standard organic result, which makes it the most valuable real estate in local search.',
      },
      {
        k: 'p',
        text: 'Each listing in the pack shows the business name, star rating, review count, category, and often opening hours or a "call now" button. Because it sits above organic results, a business that ranks third in the three-pack still gets more visibility than a business ranking first organically underneath it. This is why local SEO campaigns in Australia increasingly focus on the map pack rather than blue-link rankings alone.',
      },

      {
        k: 'img',
        id: 'photo-1512428559087-560fa5ceab42',
        alt: 'A person tapping a smartphone to run a local search',
        caption: 'Location-based searches like "cafe near me" surface the three-pack before any organic listing.',
      },

      { k: 'h2', text: 'How Does Google Rank Businesses in the Local Three-Pack?' },
      {
        k: 'p',
        text: 'Google ranks three-pack listings using three factors: relevance, distance, and prominence, and it weighs all three together rather than picking a winner on any single one.',
      },
      {
        k: 'ul',
        items: [
          "**Relevance** - how well your Google Business Profile matches the searcher's query, based on your business category, description, and the products or services you list.",
          '**Distance** - how close your business location is to the searcher, or to the location mentioned in the search (e.g. "plumber Brisbane CBD").',
          '**Prominence** - how well-known and well-reviewed your business is, both on Google and across the wider web, including citations, links, and press mentions.',
        ],
      },
      {
        k: 'p',
        text: "A business a few suburbs further away can still outrank a closer competitor if it wins clearly on relevance and prominence. That's why proximity alone won't save a listing with thin reviews, an incomplete profile, or inconsistent business information.",
      },

      { k: 'h2', text: 'How Do You Optimise Your Google Business Profile for Local Rankings?' },
      {
        k: 'p',
        text: 'You optimise your Google Business Profile by claiming and verifying it, then filling in every available field with accurate, keyword-relevant information rather than leaving default or partial entries.',
      },
      {
        k: 'ul',
        items: [
          '**Claim and verify the listing** through Google Business Profile Manager, using the verification method Google offers for your business (postcard, phone, or instant verification for eligible accounts).',
          '**Set the primary category precisely.** "Family Lawyer" ranks differently than the generic "Lawyer," and Google gives real weight to category accuracy.',
          "**Add secondary categories** that reflect genuine services, without keyword-stuffing categories that don't apply.",
          '**Write a complete business description** using natural language that includes your suburb, service area, and core services.',
          '**Upload real photos regularly** - team photos, completed jobs, storefront images - since profiles with fresh, geotagged images tend to hold rankings better over time.',
          '**Enable messaging, Q&A, and booking links** where relevant to your industry.',
          '**Post updates** through the Google Posts feature at least monthly to show Google the profile is active.',
        ],
      },
      {
        k: 'p',
        text: 'Businesses that pair this with a structured [local SEO strategy](/services/local-seo) tend to see three-pack movement within 60 to 90 days, since profile optimisation compounds with citation and review signals rather than working in isolation.',
      },

      { k: 'h2', text: 'Why Do Reviews Matter for Three-Pack Rankings in Australia?' },
      {
        k: 'p',
        text: 'Reviews matter because they feed directly into the prominence signal Google uses to rank three-pack listings, and Australian searchers actively filter results by star rating before clicking. A business with 60 reviews at 4.8 stars will typically outrank a competitor with 8 reviews at 5.0 stars, because review volume and recency both carry ranking weight, not just the average score.',
      },
      {
        k: 'p',
        text: 'Google also reads review content. Mentions of your suburb, service type, or specific job ("fixed our hot water system in Bondi same day") reinforce relevance signals in a way a generic five-star rating doesn\'t. A steady, ongoing flow of new reviews outperforms a big batch collected once and never repeated, since recency resets the signal Google gives more credit to.',
      },

      {
        k: 'img',
        id: 'photo-1556742049-0cfed4f6a45d',
        alt: 'A local business owner serving a customer at the counter',
        caption: 'Genuine, recent reviews from real local customers feed the prominence signal Google rewards most.',
      },

      { k: 'h2', text: 'How Important Is NAP Consistency for Local Pack Rankings?' },
      {
        k: 'p',
        text: 'NAP consistency (your business Name, Address, and Phone number matching exactly across every online listing) is one of the highest-impact, lowest-cost fixes available, because mismatches directly confuse the algorithm Google uses to confirm your business is legitimate and trustworthy.',
      },
      { k: 'p', text: 'Common inconsistencies that hurt Australian businesses include:' },
      {
        k: 'ul',
        items: [
          'Old addresses left live on Yellow Pages, True Local, or Yelp after an office move.',
          '"St" vs "Street," or "Pty Ltd" appearing on some listings but not others.',
          'Multiple phone numbers (mobile on one directory, landline on another).',
          'Duplicate Google Business Profile listings created after a rebrand.',
        ],
      },
      {
        k: 'p',
        text: 'A full citation audit across major Australian directories (Google, True Local, Yellow Pages, Hotfrog, StartLocal, and industry-specific directories) usually surfaces at least a handful of these mismatches, even for businesses that have never moved locations.',
      },

      { k: 'h2', text: 'Which Local Citations and Directories Help Australian Businesses Rank?' },
      {
        k: 'p',
        text: 'The citations that help most are the ones Google already trusts and cross-references, which in Australia means Google Business Profile itself, plus a mix of general and industry-specific directories with consistent NAP data.',
      },
      {
        k: 'ul',
        items: [
          '**General Australian directories:** True Local, Yellow Pages, Hotfrog, StartLocal, Localsearch.',
          '**Industry-specific directories:** relevant to your trade or profession (e.g. HiPages for tradies, HealthEngine for medical practices).',
          '**Data aggregators:** services that feed business data into multiple directories at once, reducing manual listing work.',
          '**Chamber of commerce and local business association listings**, which often carry more local trust signal than generic directories.',
        ],
      },
      {
        k: 'p',
        text: 'Quality matters more than quantity here. Twenty accurate, consistent citations on relevant Australian directories outperform a hundred citations scattered across low-authority or irrelevant sites.',
      },

      { k: 'h2', text: 'How Does Proximity Affect Your Three-Pack Chances?' },
      {
        k: 'p',
        text: "Proximity affects three-pack rankings because Google prioritises businesses physically closer to the searcher or to the location named in the query, but it's the one ranking factor you can't directly control through optimisation.",
      },
      { k: 'p', text: 'You can influence proximity-related outcomes indirectly:' },
      {
        k: 'ul',
        items: [
          "List an accurate service area in Google Business Profile if you're a service-area business without a public storefront.",
          "Avoid listing a virtual office or PO box address, which Google's guidelines prohibit and which can get a listing suspended.",
          'Target suburb-specific landing pages on your website so Google associates your business with multiple nearby locations, not just one.',
        ],
      },

      {
        k: 'img',
        id: 'photo-1449824913935-59a10b8d2000',
        alt: 'A busy city street lined with local businesses',
        caption: 'Suburb-specific location pages help you rank across every area you genuinely serve, not just the closest one.',
      },

      {
        k: 'p',
        text: 'A business genuinely serving five suburbs, with location pages, local schema, and citations for each, has a real shot at ranking in the three-pack across all five searches, not just the one closest to its physical address.',
      },

      { k: 'h2', text: 'Can Local Link Building Improve Your Google Maps Ranking?' },
      {
        k: 'p',
        text: 'Yes, local link building improves Google Maps rankings by strengthening the prominence signal, particularly when the links come from other Australian businesses, local media, or community organisations rather than generic guest posts.',
      },
      { k: 'p', text: 'Effective local link sources include:' },
      {
        k: 'ul',
        items: [
          'Sponsoring a local sports team, school event, or charity that links back from their website.',
          'Getting covered in local news or industry publications relevant to your service area.',
          'Partnering with complementary local businesses for cross-promotion and reciprocal mentions.',
          'Supplier or association pages that list you as a certified or preferred provider.',
        ],
      },
      {
        k: 'p',
        text: 'These links do more than pass authority. They tell Google your business is embedded in the local community, which reinforces exactly the trust signal the three-pack algorithm rewards.',
      },

      { k: 'h2', text: 'Key Takeaways' },
      {
        k: 'ul',
        items: [
          'The three-pack ranks on relevance, distance, and prominence together, not any single factor.',
          'A fully optimised, actively updated Google Business Profile is the foundation everything else builds on.',
          'Review volume, recency, and content all influence prominence, not just star rating.',
          "NAP consistency across directories is a quick win most businesses haven't fixed.",
          'Local citations and local link building both feed the prominence signal Google trusts most.',
          "Local SEO isn't a one-off task. Profiles, citations, and reviews all need ongoing attention to hold a three-pack position once you've earned it.",
        ],
      },
      {
        k: 'p',
        text: "If you want this handled end-to-end, EG Digital's [local SEO services](/services/local-seo) cover Google Business Profile optimisation, citation cleanup, and review growth for Australian businesses targeting the map pack.",
      },

      { k: 'h2', text: 'Frequently Asked Questions' },
      {
        k: 'faq',
        items: [
          {
            q: 'How long does it take to rank in the Google Maps three-pack in Australia?',
            a: 'Most businesses see measurable movement within 60 to 90 days of consistent optimisation, though highly competitive metro categories (lawyers, dentists, real estate agents) can take four to six months. Ongoing review growth and citation building matter more for holding the position than the initial climb.',
          },
          {
            q: 'Do I need a physical office to rank in the three-pack?',
            a: "No, service-area businesses without a public storefront can still rank by setting an accurate service area in Google Business Profile and hiding the exact address, provided they follow Google's guidelines for service-area businesses.",
          },
          {
            q: 'Does responding to Google reviews affect ranking?',
            a: 'Yes, responding to reviews, especially negative ones, signals an active, trustworthy profile and can support prominence. It also improves conversion once a customer sees the listing, since responsive businesses appear more credible.',
          },
          {
            q: 'Can a business rank in the three-pack without any reviews?',
            a: "It's possible but unlikely in any competitive category. Reviews are one of the strongest prominence signals Google uses, so a zero-review profile is competing with one hand tied behind its back against rivals with active review pipelines.",
          },
          {
            q: 'Is Google Maps ranking the same as organic Google ranking?',
            a: 'No, the three-pack uses a separate algorithm weighted toward relevance, distance, and prominence, while organic rankings depend more heavily on content, backlinks, and technical SEO. A business can rank well in one and poorly in the other.',
          },
          {
            q: 'How much does local SEO cost in Australia?',
            a: 'Costs vary by market competitiveness and scope, typically ranging from a few hundred to a few thousand dollars per month for ongoing local SEO management. A free audit is usually the best starting point to understand what a specific business needs before committing to a package.',
          },
        ],
      },
    ],
  },
]

export const getPost = (slug: string | undefined): BlogPost | undefined =>
  POSTS.find(p => p.slug === slug)

export const FEATURED = POSTS.find(p => p.featured) ?? POSTS[0]
export const GRID_POSTS = POSTS.filter(p => p !== FEATURED)
