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

export type Category = 'Case Studies' | 'Latest Technologies'

// A single content block inside an article body.
export type Block =
  | { k: 'p'; text: string }
  | { k: 'h2'; text: string }
  | { k: 'ul'; items: string[] }
  | { k: 'img'; id: string; alt: string; caption?: string; fit?: 'cover' | 'contain' }
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
  heroFit?: 'cover' | 'contain'  // 'contain' shows the full hero uncropped (for diagrams/graphics)
  metaTitle: string
  metaDescription: string
  featured?: boolean
  // When true, the post lives in the Newsroom (/about/media/<slug>) instead of
  // the Blog. It is excluded from the /blog listing and gets a newsroom URL.
  newsroom?: boolean
  body?: Block[]
}

// Builds a stable, cropped Unsplash CDN URL for a photo id at the given size.
// A locally hosted image (a path beginning with "/") is returned as-is, so a
// post can mix Unsplash ids with images we've downloaded into /public/images.
export const photo = (id: string, w = 640, h = 400) =>
  id.startsWith('/')
    ? id
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

export const POSTS: BlogPost[] = [
  // ── Newsroom articles (live at /about/media/<slug>, not in the Blog) ─────────
  {
    slug: 'people-warming-up-to-ai-tools-trust-gap',
    title: "People Are Warming Up to AI Tools, But They Still Don't Fully Trust Them, Here's Why That Matters",
    h1: "People Are Warming Up to AI Tools, But They Still Don't Fully Trust Them, Here's Why That Matters",
    excerpt:
      "New data shows people are more open to AI tools like ChatGPT and Claude than ever, yet only 28% actually trust the answers they get back. Here's why that gap matters for how businesses build real visibility.",
    category: 'Latest Technologies',
    read: '3 min read',
    date: 'Aug 8, 2026',
    img: '/images/newsroom/ai-tools-trust-hero.jpg',
    metaTitle: "People Are Warming Up to AI Tools But Still Don't Trust Them | EG Digital",
    metaDescription:
      "Gen Z is more open to AI tools like ChatGPT and Claude, but only 28% of Americans trust the answers. Here's why that gap matters for your marketing in 2026.",
    newsroom: true,
    body: [
      {
        k: 'p',
        text: "There's some interesting new data out this week about how people really feel about AI tools like Claude and ChatGPT. According to Search Engine Journal, a survey by YouGov found that young Americans (Gen Z) are now much more open to using Claude and OpenAI's tools than they were a few months ago, so much so that these AI companies landed in the same top 10 list as well known brands like Johnnie Walker and REI. But here's the catch: a separate survey found only 28% of Americans actually trust AI tools to give them a correct answer. So people are becoming more open to using AI, but that doesn't mean they trust what it tells them.",
      },

      { k: 'h2', text: "Being Open to Something Isn't the Same as Trusting It" },
      {
        k: 'p',
        text: "Think about it like this. You might be happy to try a new restaurant because it looks good on Instagram, but that doesn't mean you'd trust everything the waiter tells you about the ingredients. It's a similar idea here. People are willing to give AI tools a go, but a lot of them still aren't convinced the answers they get back are accurate. If your business is hoping to get mentioned by AI tools like ChatGPT one day, this gap matters a lot.",
      },

      { k: 'h2', text: 'What Actually Worked This Quarter' },
      {
        k: 'p',
        text: "It's worth looking at what actually helped brands climb this ranking, because none of it was some clever AI trick. Johnnie Walker did it with a straightforward ad campaign on streaming, social media and billboards. REI did it with a good old fashioned sale that got picked up by lifestyle websites. Even Google Assistant's numbers went up mostly because people were hearing about Google's other AI news, not because Assistant did anything new itself. The lesson here: normal marketing like ads, PR and good timing still works, and often works faster than trying to game AI search.",
      },

      { k: 'h2', text: 'So What Should You Actually Do With This?' },
      {
        k: 'ul',
        items: [
          "**Don't lump everything under \"AI visibility\".** Whether people are open to using an AI tool is one thing. Whether that AI tool actually trusts your website enough to mention it is a completely different thing. Keep an eye on both separately.",
          "**Don't put all your eggs in the AI basket.** If your whole 2026 plan is built around getting quoted by ChatGPT, this data is a good reminder that regular marketing, ads, and press coverage still move the needle, sometimes faster than any content tweak will.",
          '**Focus on being trustworthy, not just visible.** Real data, named experts, and being upfront about where your information comes from are what actually get you mentioned by AI tools. Just having a website out there isn\'t enough anymore.',
        ],
      },

      { k: 'h2', text: 'How We Think About This at EG Digital' },
      {
        k: 'p',
        text: "This is basically why we don't treat SEO and paid ads as two separate jobs. AI tools are quickly becoming another place people go to find businesses, alongside Google and social media, and getting picked up there comes down to the same basics that help you rank normally: clear information, real data, and content that's actually useful rather than just written to tick a box. Our [Google Ads management](/services/google-ads-management) service works hand in hand with organic strategy for exactly this reason, so you're not relying on just one channel to carry your visibility.",
      },

      { k: 'h2', text: 'The Bottom Line' },
      {
        k: 'p',
        text: "Getting people to try AI tools is one thing, getting them to actually trust and rely on the answers is a whole different challenge, and it's still playing out. The businesses that win in the long run won't just be the ones chasing an AI mention. They'll be the ones building something worth trusting in the first place.",
      },
      {
        k: 'p',
        text: "**Want help building a strategy that covers both search and AI visibility?** [Get in touch with EG Digital](/contact).",
      },
    ],
  },

  {
    slug: 'google-search-leadership-jeff-dean-exit-seo',
    title: "Google's Search Leadership Just Shifted: What Jeff Dean's Exit Means for SEO",
    h1: "Google's Search Leadership Just Shifted: What Jeff Dean's Exit Means for SEO",
    excerpt:
      "Jeff Dean is leaving Google after 27 years to launch his own AI venture, and DeepMind's leadership is being reshuffled at the same time. Here's what the shake-up at the top of Google Search could mean for your SEO.",
    category: 'Latest Technologies',
    read: '3 min read',
    date: 'Aug 6, 2026',
    img: '/images/blog/google-search-leadership-hero.jpg',
    metaTitle: "Jeff Dean Leaves Google: What It Means for SEO | EG Digital",
    metaDescription:
      "Jeff Dean is leaving Google after 27 years and DeepMind's leadership is shifting. Here's what the search leadership shake-up could mean for your SEO strategy.",
    newsroom: true,
    body: [
      {
        k: 'p',
        text: "Big news out of Google this week if you keep half an eye on how search works behind the scenes. According to Search Engine Land, Jeff Dean is leaving Google after 27 years to launch his own AI venture, Discover Loop. He was one of the first 30 people ever hired at Google, and he's had his fingerprints on pretty much every major upgrade to Search since, from RankBrain all the way through to AI Overviews and AI Mode.",
      },
      {
        k: 'p',
        text: "On top of that, Demis Hassabis is stepping back from his role as CEO of Google DeepMind to take on the title of Alphabet's chief scientist, while Koray Kavukcuoglu steps in to run DeepMind, reporting straight to Sundar Pichai. A handful of other senior researchers are following Dean out the door to join his new company too.",
      },

      { k: 'h2', text: 'Why This Actually Matters if You Care About SEO' },
      {
        k: 'p',
        text: "Here's the thing about Jeff Dean, he wasn't just another exec with a fancy title. He's one of the people who actually built the AI systems deciding how search results look today. That doesn't mean your rankings are about to flip overnight, but it's a fair reminder that the people steering Google's next moves have just changed, and that tends to ripple through eventually. Alphabet's share price dropped around 4% straight after the announcement, which says a fair bit about how seriously the market is taking this. The teams behind AI Overviews and AI Mode are getting reshuffled right now, and whoever's calling the shots next will shape where search heads from here.",
      },
      {
        k: 'p',
        text: "No one can tell you exactly what this means for future algorithm updates, and to be honest, anyone who says they can is probably guessing. But it's as good a nudge as any to check your [SEO strategy](/services/seo-services) isn't running on autopilot. If it's been a while since your last audit, now's not a bad time to have a proper look under the bonnet. It's the kind of thing we keep tabs on as part of every [Google Ads](/services/google-ads-management) and search strategy we run for clients, so nobody gets blindsided when the ground shifts.",
      },
      {
        k: 'p',
        text: "**Want a second set of eyes on your search strategy?** [Get in touch with EG Digital](/contact).",
      },
    ],
  },

  {
    slug: 'content-marketing-quality-over-quantity-australia',
    title: 'Quality Over Quantity: Rethinking Content Marketing for Australian Brands in 2026',
    h1: 'Quality Over Quantity: Rethinking Content Marketing for Australian Brands in 2026',
    excerpt:
      "Most Australian businesses assume the fix for flat engagement is to post more. But the brands winning attention in 2026 aren't publishing the most - they're publishing the most deliberately. Here's how to shift from volume to strategy.",
    category: 'Latest Technologies',
    read: '5 min read',
    date: 'Aug 6, 2026',
    img: '/images/blog/content-marketing-hero.jpg',
    metaTitle: 'Quality Over Quantity: Content Marketing in 2026 | EG Digital',
    metaDescription:
      "Posting more isn't a strategy. Learn why publishing less at a higher standard wins in 2026, and how Australian brands shift from content volume to real strategy.",
    body: [
      {
        k: 'p',
        text: "Most Australian businesses assume the fix for flat engagement is to post more. More reels, more blog posts, more email sends. But the brands actually winning attention in 2026 aren't the ones publishing the most, they're the ones publishing the most deliberately. Every extra post that doesn't add value competes with your own best work for the same limited attention, and on most platforms, weak content actively suppresses how far your strong content reaches.",
      },
      {
        k: 'p',
        text: "Independent research backs this up: [83% of marketers now say it's more effective to publish less content, at a higher standard, than to chase volume](https://seoprofy.com/blog/content-marketing-statistics/). If your content calendar is built around a posting frequency rather than a business outcome, this is a good moment to rethink the approach.",
      },

      { k: 'h2', text: 'Why More Content Often Performs Worse, Not Better' },
      {
        k: 'p',
        text: 'Social platforms and search engines are both built to reward engagement, not effort. When a brand publishes content that doesn\'t earn a reaction, a save, a click or a follow, the algorithm reads that as a signal to show the brand less often, not more. In effect, filling a calendar with filler content can quietly train the algorithm to bury everything you publish, including the pieces that actually matter.',
      },
      {
        k: 'p',
        text: 'The businesses pulling ahead right now tend to share a few habits: they post with a clear objective rather than because a schedule demands it, they choose the trends that genuinely fit their audience instead of chasing every one, and they judge success by engagement and business impact rather than raw volume of posts.',
      },

      { k: 'h2', text: 'What a Strategic Content Approach Actually Looks Like' },
      {
        k: 'p',
        text: "Before any piece of content goes live, it should be able to answer two simple questions: is this genuinely useful or interesting to the audience it's aimed at, and does it move the business toward a specific goal, whether that's awareness, enquiries, or customer retention? If the honest answer to either is no, that piece probably isn't worth publishing.",
      },
      {
        k: 'p',
        text: "This starts with understanding who you're actually talking to: what problems they're trying to solve, what they respond to, and why they'd choose your brand over the alternative sitting one tab away. Content built on that understanding tends to outperform content built on what's trending this week, because it's solving for the audience rather than the algorithm.",
      },

      { k: 'h2', text: 'Storytelling Beats Selling' },
      {
        k: 'p',
        text: "Audiences have grown fatigued with content that's obviously trying to sell them something. What tends to stick instead is content that educates, entertains, or shows the real people and process behind a brand. People remember how a brand made them feel or what it taught them long after they've forgotten a product spec sheet. Behind-the-scenes footage, founder stories, customer wins, and genuinely useful how-to content all build the kind of familiarity that makes someone choose your brand when they're finally ready to buy.",
      },

      {
        k: 'img',
        id: '/images/blog/content-marketing-writing.png',
        alt: 'A content writer drafting copy by hand beside a laptop',
        caption: 'Content that educates and tells a genuine story sticks with people long after a product spec sheet is forgotten.',
      },

      { k: 'h2', text: 'A Practical Way to Shift From Volume to Strategy' },
      {
        k: 'ul',
        items: [
          '**Audit what you already have.** Identify your best-performing posts and the recurring themes or formats behind them, and be honest about what\'s consistently underperforming.',
          '**Track the metrics that actually matter.** Impressions look good on a slide, but engagement rate, saves, shares, website traffic and enquiries tell you what\'s actually working.',
          '**Double down on proven formats.** Once you know which topics and formats consistently perform, build more of your calendar around them instead of starting from scratch each time.',
          '**Repurpose instead of recreating.** A single strong idea can become a blog post, a carousel, a short-form video and an email, stretching the value of the work you\'ve already done.',
        ],
      },

      {
        k: 'img',
        id: '/images/blog/content-marketing-types.png',
        fit: 'contain',
        alt: 'Illustration of the different types of content marketing branching from one core idea',
        caption: 'One strong idea can take many forms - blogs, social posts, videos, podcasts, infographics and newsletters all from the same core content.',
      },

      { k: 'h2', text: 'How EG Digital Approaches Content Marketing' },
      {
        k: 'p',
        text: "At EG Digital, content strategy isn't treated as a separate line item from the rest of your digital marketing, it's built to work alongside SEO and paid media so that every piece of content is pulling in the same direction. Our team pairs strategic [content planning](/services/content-creation) with [Google Ads management](/services/google-ads-management) to amplify the content that's already proving itself organically, and our in-house [graphic design team](/services/graphic-design) makes sure the creative behind every campaign looks as considered as the strategy driving it.",
      },

      { k: 'h2', text: 'Final Thoughts' },
      {
        k: 'p',
        text: "Posting more isn't a strategy, it's a habit. The brands building real momentum in 2026 are the ones treating every piece of content as an investment that has to earn its place, not a box to tick on a content calendar. If your current approach is producing plenty of content but not much business impact, it's worth stepping back and asking whether the problem is really a lack of content, or a lack of strategy behind it.",
      },
      {
        k: 'p',
        text: "**Ready to build a content strategy that actually moves the needle?** EG Digital combines strategic content, [SEO](/services/seo-services) and Google Ads under one accountable Melbourne team. [Get in touch with EG Digital](/contact) to talk through your content marketing goals.",
      },
    ],
  },

  {
    slug: 'query-fan-out-google-ai-search-seo',
    title: "Query fan-out explained: why Google's AI search is rewriting the rules of SEO",
    h1: "Query Fan-Out Explained: Why Google's AI Search Is Rewriting the Rules of SEO",
    excerpt:
      "If your organic traffic is shifting even though your rankings haven't moved, the cause might be query fan-out - the way Google's AI search breaks one question into many sub-queries and stitches the answers together before anyone clicks.",
    category: 'Latest Technologies',
    read: '5 min read',
    date: 'Aug 4, 2026',
    img: '/images/blog/queryfanout-hero.jpg',
    metaTitle: "Query Fan-Out Explained | Google AI Search & SEO | EG Digital",
    metaDescription:
      "Query fan-out is how Google's AI Mode and AI Overviews answer questions. Learn what it means for SEO and how Australian businesses stay visible in AI search.",
    body: [
      {
        k: 'p',
        text: "If you've noticed your organic traffic shifting even though your rankings haven't moved, the explanation might not be your SEO at all - it might be how Google is generating answers before anyone clicks a result. At the centre of that shift is a technique called query fan-out, and it's quietly changing what \"ranking well\" even means.",
      },

      { k: 'h2', text: 'What Is Query Fan-Out?' },
      {
        k: 'p',
        text: "Traditionally, a search engine matched one query to one set of ranked results. Query fan-out works differently. When someone asks a question inside Google's AI Mode or triggers an AI Overview, the system breaks that single question into a series of related sub-queries, runs them in parallel behind the scenes, and stitches the results into one combined answer.",
      },
      {
        k: 'p',
        text: "Ask something like \"best suburbs for young families in Melbourne\", and instead of returning one results page, the system might quietly search school ratings, safety statistics, commute times, and rental prices - then weave all of it into a single response. The person asking never sees those individual searches happen; they just see one comprehensive answer.",
      },

      {
        k: 'img',
        id: '/images/blog/queryfanout-ai-mode-laptop.jpg',
        alt: "Google's AI Mode answering a question on a laptop screen",
        caption: 'Query fan-out breaks one question into many sub-queries, then stitches the results into a single AI answer.',
      },

      { k: 'h2', text: 'Why This Matters for SEO' },
      {
        k: 'p',
        text: 'This changes what content actually needs to do. Ranking for a single keyword used to be the goal. Now, a page might get pulled into an AI-generated answer because one specific paragraph provides the clearest response to just one of many sub-queries - even if the rest of the page never gets seen.',
      },
      {
        k: 'p',
        text: "This isn't a minor tweak to search behaviour. [Google's own documentation on AI features](https://developers.google.com/search/docs/appearance/ai-features) confirms that AI Overviews and AI Mode may use this fan-out approach, issuing multiple related searches across subtopics and data sources to build a response - while normal ranking fundamentals like crawlability, structured data, and content quality still apply underneath it.",
      },

      { k: 'h2', text: 'Query Fan-Out vs Traditional Keyword Research' },
      {
        k: 'p',
        text: "Traditional keyword research asks: what is one phrase people search for, and how do we rank for it? Query fan-out asks a broader question: what are all the sub-questions someone might have around this topic, and does our content answer them clearly enough to be pulled into a synthesised response? The shift is from optimising for a phrase to optimising for a topic's full range of related intents.",
      },

      { k: 'h2', text: 'What This Means for Australian Businesses' },
      {
        k: 'p',
        text: "For local and service-based businesses, this raises the bar on completeness. A tradie's service page, a clinic's treatment page, or a retailer's product page now needs to anticipate the follow-up questions a customer would naturally ask - pricing, availability, comparisons, and location-specific details - rather than covering just the primary topic.",
      },

      {
        k: 'img',
        id: '/images/blog/queryfanout-analytics-dashboard.jpg',
        alt: 'An analytics dashboard showing search and referral trends',
        caption: 'Completeness wins: pages that answer the natural follow-up questions are the ones pulled into synthesised answers.',
      },

      { k: 'h2', text: 'How to Optimise for Query Fan-Out' },
      {
        k: 'ul',
        items: [
          'Structure content in clear, self-contained sections using proper H2/H3 subheadings, so each part can stand alone if pulled into an AI answer.',
          'Answer likely follow-up questions directly within the page, not just the primary query.',
          'Use structured data to help systems understand exactly what each section covers.',
          'Back up claims with specific, verifiable details rather than vague statements.',
          'Keep information current, since freshness affects whether a page gets pulled into a live answer.',
        ],
      },

      { k: 'h2', text: 'The Bigger Picture' },
      {
        k: 'p',
        text: "Query fan-out is really a reminder that content should be built around real customer questions, not just target keywords. That's the same principle good SEO has always rewarded - it's just being tested more literally now. If you'd like a clearer picture of how your content holds up under this kind of scrutiny, our [SEO team at EG Digital](/services/seo-services) can walk you through it.",
      },
      {
        k: 'p',
        text: "**Want to know how your site performs under Google's query fan-out approach?** [Get in touch with EG Digital](/contact) for a tailored AI search visibility review.",
      },

      { k: 'h2', text: 'Frequently Asked Questions' },
      {
        k: 'faq',
        items: [
          {
            q: "Is query fan-out only relevant to Google's AI Mode?",
            a: "It's most associated with AI Mode, but Google has confirmed AI Overviews can use the same approach, and similar retrieval behaviour appears in tools like Gemini and ChatGPT when they need to pull in current information.",
          },
          {
            q: 'Does this replace the need for keyword research?',
            a: 'No. Keyword research still tells you what people are searching for. Query fan-out simply means content also needs to cover the related questions around that topic, not just the primary phrase.',
          },
          {
            q: 'How do I know if my content is being pulled into AI-generated answers?',
            a: "This is harder to track than traditional rankings, since there's no single position to check. Monitoring branded search volume, referral patterns, and manually testing your own target queries in AI Mode are practical starting points.",
          },
          {
            q: 'Should every business rewrite their content for query fan-out right now?',
            a: 'Not necessarily all at once. Starting with your highest-value pages - the ones already driving leads or sales - is the most practical way to adapt without a full site overhaul.',
          },
        ],
      },
    ],
  },

  // ── Choosing an SEO company guide ───────────────────────────────────────────
  {
    slug: 'how-to-choose-seo-company-australia',
    title: 'How to Choose a Search Engine Optimisation Company in Australia (2026 Guide)',
    h1: 'How to Choose a Search Engine Optimisation Company in Australia (2026 Guide)',
    excerpt:
      "Every agency claims to be \"the best\", which makes choosing an SEO company harder, not easier. Here's what actually separates a genuine partner from a risky one - the questions to ask, the red flags to watch, and why the best agencies handle SEO, Google Ads, web and app together.",
    category: 'Latest Technologies',
    read: '6 min read',
    date: 'Jul 31, 2026',
    img: '/images/blog/seo-hero-laptop.jpg',
    heroFit: 'contain',
    metaTitle: 'How to Choose an SEO Company in Australia (2026 Guide) | EG Digital',
    metaDescription:
      'Choosing a search engine optimisation company in Australia? Learn what a genuine SEO agency should offer, the questions to ask, red flags to avoid, and why SEO, Google Ads and development belong together.',
    body: [
      {
        k: 'p',
        text: "Searching for a search engine optimisation company in Australia usually means one of two things: your current results aren't good enough, or you've never invested in SEO and don't know where to start. Either way, the number of agencies claiming to be \"the best\" makes the decision harder, not easier. Here's what actually separates a good partner from a risky one.",
      },

      { k: 'h2', text: 'What a Genuine SEO Company Should Offer' },
      {
        k: 'p',
        text: "A proper SEO engagement isn't just link-building or keyword stuffing. It covers technical health (crawlability, site speed, indexing), on-page optimisation, content that matches real search intent, and increasingly, visibility inside AI-generated search results. If an agency only talks about rankings and never mentions [technical audits](/services/technical-seo) or content strategy, that's a gap worth asking about.",
      },

      { k: 'h2', text: 'Questions Worth Asking Before You Sign On' },
      {
        k: 'ul',
        items: [
          'Can they show real, verifiable case studies, not just screenshots of ranking positions?',
          'Do they explain their process, or just promise "page one" without detail?',
          'Is reporting transparent, with access to your own analytics and Search Console data?',
          'Do they understand your industry, or are they applying a generic template?',
        ],
      },

      {
        k: 'img',
        id: '/images/blog/seo-components.png',
        fit: 'contain',
        alt: 'The core pieces of SEO - analysis, content, website, traffic and ranking',
        caption: 'A genuine SEO engagement covers analysis, content, on-page work and technical health - not just a ranking screenshot.',
      },

      { k: 'h2', text: 'SEO and Google Ads: Why the Best Agencies Handle Both' },
      {
        k: 'p',
        text: "Businesses searching for a search engine optimisation company are often, at the same time, weighing up a [Google Ads agency](/services/google-ads-management). That's not a coincidence. SEO builds long-term, compounding visibility, while paid search delivers immediate traffic while organic rankings are still climbing. Run separately by two different providers, the two channels often send mixed signals and duplicate spend on the same keywords. Run together, they reinforce each other: ad data reveals which keywords convert, and that same data sharpens SEO content priorities.",
      },

      { k: 'h2', text: 'What About Web and App Development?' },
      {
        k: 'p',
        text: "SEO and ads can only do so much if the destination they're sending people to doesn't convert. This is why businesses researching \"build my app Australia\" or a new website often end up back at the same digital agencies offering SEO - a [site](/services/web-development) or [app](/services/custom-app-development-company-australia) built with search performance in mind from day one avoids a costly rebuild down the line. Structure, load speed, and mobile usability aren't afterthoughts; they're ranking factors in their own right.",
      },

      {
        k: 'img',
        id: '/images/blog/seo-technical-factors.webp',
        fit: 'contain',
        alt: 'Technical SEO factors - rendering, meta tags, JavaScript bundles and routing',
        caption: 'Technical factors like rendering, meta tags and JavaScript bundles are ranking factors in their own right - which is why the build matters.',
      },

      { k: 'h2', text: 'Red Flags to Watch For' },
      {
        k: 'p',
        text: "Guaranteed rankings, suspiciously cheap packages, and vague reporting are the most common warning signs. [Google's own guidance for hiring an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) explicitly warns that no one can guarantee a #1 ranking on Google, and recommends asking any prospective agency for references and a clear explanation of their methods before committing.",
      },

      { k: 'h2', text: 'How EG Digital Approaches This' },
      {
        k: 'p',
        text: "We work as one accountable team across [SEO](/services/seo-services), [Google Ads](/services/google-ads-management), web and app development, and [Microsoft solutions](/solutions/microsoft-products), rather than handing clients between disconnected specialists. If you're comparing options and want a clear, no-pressure look at where your current site stands, our [SEO and digital marketing team](/services/seo-services) can walk you through it.",
      },

      { k: 'h2', text: 'FAQs' },
      {
        k: 'faq',
        items: [
          {
            q: 'How much does SEO cost in Australia?',
            a: 'Costs vary widely based on competition and scope, but ongoing monthly retainers are more common than one-off projects, since SEO is a continuous process rather than a single fix.',
          },
          {
            q: 'Should I choose SEO or Google Ads first?',
            a: "If you need traffic immediately, start with Google Ads. If you're building long-term visibility, SEO is the better investment. Most businesses benefit from running both together.",
          },
          {
            q: 'How long does SEO take to show results?',
            a: 'Most businesses see measurable movement within three to six months, with stronger gains compounding over six to twelve months depending on competition.',
          },
          {
            q: 'Does a new website or app need SEO built in from the start?',
            a: 'Yes. Site structure, page speed, and mobile performance are foundational ranking factors - retrofitting them after launch is far more costly than building them in from day one.',
          },
          {
            q: 'Comparing SEO companies or Google Ads agencies in Australia?',
            a: 'Get in touch with EG Digital for a straightforward look at your options.',
          },
        ],
      },
    ],
  },

  // ── Content decay article ───────────────────────────────────────────────────
  {
    slug: 'content-decay-declining-seo-content',
    title: 'Content Decay: How to Spot It and Bring Declining SEO Content Back to Life',
    h1: 'Content Decay: How to Spot It and Bring Declining SEO Content Back to Life',
    excerpt:
      "If a page that used to bring in steady traffic has quietly started sliding down the rankings, you're probably dealing with content decay - one of the most common and most ignored problems in SEO. Here's how to diagnose it and bring declining content back to life.",
    category: 'Latest Technologies',
    read: '8 min read',
    date: 'Jul 28, 2026',
    img: '/images/blog/semrush-position-tracking.jpg',
    metaTitle: 'Content Decay: How to Diagnose & Fix Declining SEO',
    metaDescription:
      "Struggling with declining SEO rankings? Learn how to spot content decay, diagnose the cause, and refresh, rewrite, or consolidate content that's losing traffic.",
    body: [
      {
        k: 'p',
        text: 'If a page that used to bring in steady traffic has quietly started sliding down the rankings, you\'re probably dealing with content decay. It\'s one of the most common - and most ignored - problems in SEO, because unlike a Google penalty or a technical outage, it doesn\'t announce itself. It just erodes your traffic, one small drop at a time, until someone finally checks the analytics and asks, "wait, what happened to this page?"',
      },
      {
        k: 'p',
        text: 'At EG Digital, we see this constantly when auditing new client websites: dozens of once-strong pages sitting untouched for years, slowly losing relevance while competitors publish fresher, more useful content around the same keywords. Take a look at some of our [client results](/blog) to see what a proper content and [SEO](/services/seo-services) overhaul can achieve. The good news is that content decay is fixable - often more easily and cheaply than creating something new from scratch.',
      },

      { k: 'h2', text: 'Key Takeaways' },
      {
        k: 'ul',
        items: [
          'Content decay is a gradual, ongoing loss of rankings and traffic on pages that used to perform well.',
          "It's usually caused by outdated information, growing competition, or search intent shifting away from what the page originally offered.",
          'Not every declining page needs a rewrite - some just need a refresh, others should be merged, and a few are better removed entirely.',
          'Regular content audits (ideally quarterly) catch decay early, before it turns into a full ranking collapse.',
        ],
      },

      { k: 'h2', text: 'What Is Content Decay?' },
      {
        k: 'p',
        text: 'Content decay is the slow decline in organic traffic, rankings, or engagement that a piece of content experiences over time, even though nothing was actively changed on the page. The content itself hasn\'t gotten "worse" - the world around it has moved on. Google rewards freshness and relevance as part of its helpful content guidelines, so a page that stood still while the topic, competition, or user expectations evolved will naturally start losing ground.',
      },
      {
        k: 'p',
        text: "It's different from a sudden traffic drop caused by an algorithm update or a technical issue. Decay is gradual - a slow bleed rather than a cliff edge - which is exactly why it's so easy to miss until the damage has compounded.",
      },

      { k: 'h2', text: 'Why Does Content Decay Happen?' },
      { k: 'p', text: "There's rarely a single cause. In most audits, it's a mix of the following:" },
      {
        k: 'ul',
        items: [
          '**Outdated information.** Statistics, pricing, product details, or industry advice that were accurate a year or two ago no longer hold up.',
          '**Rising competition.** Other websites have published newer, deeper, or better-structured content targeting the same keywords.',
          '**Shifting search intent.** What people mean when they search a term can change, a query that used to be informational might now be transactional, or vice versa.',
          '**Algorithm updates.** Google periodically re-evaluates what "quality" and "helpfulness" look like - see the official Google Search Status Dashboard for update history.',
          "**Neglected internal linking.** As a website grows, older pages often get fewer internal links pointed at them, quietly signalling to search engines that they're less important.",
        ],
      },

      { k: 'h2', text: 'Four Common Content Decay Patterns' },
      {
        k: 'p',
        text: 'When we run audits at EG Digital, declining pages tend to fall into one of four recognisable patterns:',
      },
      {
        k: 'ul',
        items: [
          '**1. The slow fade** - a gradual, steady decline over many months, usually tied to competitors publishing better content.',
          '**2. The cliff drop** - a sharp, sudden loss after a core algorithm update, often affecting a cluster of similar pages at once.',
          '**3. The seasonal mirage** - traffic that looks like decay but is actually a normal seasonal dip, which should be judged year-over-year, not month-over-month.',
          '**4. The cannibalisation drag** - a page losing ground because a newer page on the same site is competing with it for the same keywords.',
        ],
      },
      {
        k: 'p',
        text: "Knowing which pattern you're looking at matters, because the fix is different for each one.",
      },

      { k: 'h2', text: 'How to Identify Content Decay' },
      {
        k: 'p',
        text: 'The clearest signal is a consistent, multi-month decline in organic sessions or keyword rankings for a page that once performed well. To spot it reliably:',
      },
      {
        k: 'ul',
        items: [
          'Compare traffic and rankings over a rolling 6-12 month window in Google Search Console, not just the last 30 days.',
          "Segment by page or page group so seasonal categories aren't mixed in with genuinely declining ones.",
          'Check click-through rate alongside impressions - a drop in CTR with stable impressions often points to a weaker or outdated title and meta description rather than a ranking problem.',
          'Cross-check against competitor content for the same keywords using a tool such as Ahrefs or Semrush to see whether newer, more comprehensive pages have overtaken yours.',
        ],
      },

      {
        k: 'img',
        id: '/images/blog/semrush-competitors.jpg',
        alt: 'Semrush dashboard comparing a website against competitor rankings for the same keywords',
        caption: 'A tool like Semrush lets you cross-check declining pages against competitors ranking for the same keywords.',
      },

      { k: 'h2', text: 'Refresh, Rewrite, Consolidate, or Remove?' },
      {
        k: 'p',
        text: "Not every declining page deserves the same treatment. Once you've identified a page in decline, decide which bucket it falls into:",
      },
      {
        k: 'ul',
        items: [
          '**Refresh** - the core topic is still relevant, but facts, examples, or data need updating. This is the lightest-touch fix and usually the fastest to see results from.',
          "**Rewrite** - the topic still matters, but the structure, depth, or angle no longer matches what's ranking well. This calls for a more substantial overhaul.",
          '**Consolidate** - you have several thin or overlapping pages competing with each other. Merging them into one authoritative page often outperforms all of them combined.',
          '**Remove (or redirect)** - the topic is no longer relevant to your business or audience, and no amount of updating will bring it back. Use a 301 redirect to a more relevant page to preserve any remaining link value.',
        ],
      },

      { k: 'h2', text: 'What Should a Content Refresh Include?' },
      { k: 'p', text: 'A genuine refresh goes beyond swapping the publish date. It typically involves:' },
      {
        k: 'ul',
        items: [
          'Updating statistics, screenshots, pricing, and examples to reflect current information.',
          'Reviewing the page against current search intent - does it still answer the question the way people are actually asking it now?',
          'Strengthening the introduction and headings so they match how the topic is being searched today.',
          'Adding missing subtopics that competitor pages now cover.',
          'Refreshing internal links, both to and from the page, to signal renewed relevance - see our [SEO services](/services/seo-services) for how we approach this.',
          'Improving the title tag and meta description if click-through rate has slipped.',
        ],
      },

      {
        k: 'img',
        id: '/images/blog/semrush-visibility-trend.jpg',
        alt: 'Semrush position tracking dashboard showing keyword visibility trending over time',
        caption: 'Position tracking in Semrush shows whether a refreshed page is recovering visibility over the following weeks.',
      },

      { k: 'h2', text: 'How to Prioritise Declining Pages' },
      {
        k: 'p',
        text: "Most businesses don't have the resources to refresh everything at once, so prioritisation matters. We generally recommend ranking declining pages by:",
      },
      {
        k: 'ul',
        items: [
          '**Traffic and revenue potential** - start with pages that used to drive meaningful business value, not just traffic volume.',
          '**Ranking proximity** - pages sitting just outside page one often respond fastest to a refresh.',
          '**Business relevance** - prioritise topics still central to your current offering over legacy content.',
          '**Effort required** - a quick refresh with strong upside beats a major rewrite with uncertain payoff, especially early on.',
        ],
      },

      { k: 'h2', text: 'Common Content Decay Mistakes' },
      {
        k: 'ul',
        items: [
          'Refreshing the date without meaningfully updating the content - search engines and readers both notice.',
          'Treating every declining page the same way, rather than choosing refresh, rewrite, consolidate, or remove based on the specific cause.',
          'Ignoring internal linking when updating a page, which limits how much authority it can regain.',
          'Waiting for a page to hit zero traffic before acting, instead of catching decay early through regular audits.',
        ],
      },

      { k: 'h2', text: 'Content Decay Audit Checklist' },
      {
        k: 'ul',
        items: [
          'Pull 12 months of Search Console data, segmented by page.',
          'Flag pages with a sustained decline (not a seasonal dip).',
          'Check current search intent against the existing content.',
          'Compare against top-ranking competitor pages for the same keywords.',
          'Decide: refresh, rewrite, consolidate, or remove.',
          'Update content, internal links, and metadata together.',
          'Track rankings and traffic for 60-90 days post-update.',
        ],
      },

      { k: 'h2', text: 'Content Decay Is a Diagnosis, Not a Death Sentence' },
      {
        k: 'p',
        text: "A declining page isn't a failure - it's feedback. It's Google and your audience telling you the content needs attention before it can keep earning its place in the rankings. The businesses that treat content like a living asset, auditing and refreshing it on a regular cycle, consistently outperform those that publish once and walk away.",
      },
      { k: 'p', text: '**Not sure which of your pages are quietly losing ground?**' },
      {
        k: 'p',
        text: "That's exactly the kind of audit our team at EG Digital runs for clients across Australia. [Get in touch with EG Digital](/contact) and we'll help you turn declining content back into growth.",
      },
    ],
  },

  // ── Older article (full body) ──────────────────────────────────────────────
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
    slug: 'chatgpt-ads-australian-businesses',
    title: 'ChatGPT Ads are here: should your business be advertising inside AI conversations?',
    h1: 'ChatGPT Ads Are Here: Should Your Business Be Advertising Inside AI Conversations?',
    excerpt:
      "ChatGPT Ads respond to context and intent inside a conversation, not keywords, reaching people before they'd ever type a search query. Here's what Australian businesses need to know before testing this new channel.",
    category: 'Latest Technologies',
    read: '5 min read',
    date: 'Jul 21, 2026',
    img: '/images/blog/chatgpt-ads-hero.jpg',
    metaTitle: 'ChatGPT Ads for Australian Businesses: Worth It in 2026? | EG Digital',
    metaDescription:
      "ChatGPT Ads are changing how people discover brands. Here's what Australian businesses need to know before testing this new advertising channel.",
    body: [
      {
        k: 'p',
        text: "For the past two decades, digital advertising has revolved around one idea: catch someone at the exact moment they're searching. ChatGPT Ads flip that model. Instead of matching keywords, they respond to context and intent inside a conversation - meaning a business can now appear in front of someone while they're still figuring out what they actually need, well before they'd ever type a search query.",
      },
      {
        k: 'p',
        text: "It's an early-stage platform, and like every new advertising channel, it comes with more questions than answers. But the businesses that understand how it works now are the ones best placed to use it well once it matures.",
      },

      { k: 'h2', text: 'How ChatGPT Ads Actually Work' },
      {
        k: 'p',
        text: "Rather than bidding on search terms, OpenAI's advertising platform shows ads based on what a conversation is actually about. Two campaign types are currently available: standard campaigns aimed at traffic, leads and awareness, and product feed campaigns for ecommerce businesses that upload a product catalogue via SFTP.",
      },
      {
        k: 'p',
        text: "Conversion tracking and pixels can already be set up, even though full conversion-based optimisation isn't live yet. For businesses used to [Google Ads](/services/google-ads-management) or [Meta](/services/facebook-ads-management), the mechanics will feel familiar - the targeting logic is what's genuinely new.",
      },

      {
        k: 'img',
        id: '/images/blog/chatgpt-ads-apps.jpg',
        alt: 'A smartphone showing a folder of AI chat apps including ChatGPT',
        caption: 'ChatGPT Ads surface inside AI conversations, reaching people while they are still working out what they actually need.',
      },

      { k: 'h2', text: 'Is This the Right Channel for Your Business?' },
      {
        k: 'p',
        text: "ChatGPT Ads won't suit every business equally. They tend to perform best for products and services with a longer research phase - where people ask questions, compare options, and weigh up decisions before buying. Think SaaS, financial services, legal and healthcare providers, education, travel, automotive, and ecommerce brands with larger catalogues.",
      },
      {
        k: 'p',
        text: "If your business relies on impulse or last-minute purchases, this channel is less likely to move the needle right now - though that could shift as the platform develops.",
      },

      { k: 'h2', text: 'Why Your Brand Still Needs to Earn Trust Beyond the Ad' },
      {
        k: 'p',
        text: "Here's the part many businesses overlook: getting the click is only half the job. Picture two businesses running near-identical ChatGPT campaigns. One has a strong, well-documented online presence - genuine expertise, consistent business information, and a few credible mentions elsewhere. The other has a website and not much else.",
      },
      {
        k: 'p',
        text: "When a user follows up with more questions, or asks the AI to double-check a claim, the business with the stronger digital footprint wins that moment of trust - regardless of which one paid for the placement. Your presence beyond the ad doesn't stop mattering once someone clicks. If anything, it matters more.",
      },

      {
        k: 'img',
        id: '/images/blog/chatgpt-ads-strategy.jpg',
        alt: 'A marketing team mapping out a strategy with notes on a wall',
        caption: 'Whether or not you advertise yet, the groundwork of content, structured data and consistent information is what wins trust once someone clicks.',
      },

      { k: 'h2', text: 'How to Prepare, Whether You Advertise Yet or Not' },
      {
        k: 'ul',
        items: [
          'Publish [content](/services/content-creation) that genuinely answers the questions your customers are asking.',
          'Build brand authority through [digital PR](/services/off-page-seo) and credible third-party mentions.',
          'Add [structured data](/services/technical-seo) so AI systems can understand your website correctly.',
          'Keep your business details consistent everywhere they appear online.',
          'Continue investing in solid [SEO](/services/seo-services) alongside newer GEO (Generative Engine Optimisation) strategies.',
        ],
      },

      { k: 'h2', text: 'Our Take' },
      {
        k: 'p',
        text: "We don't recommend shifting your existing Google Ads or Meta Ads budget over to ChatGPT Ads just yet. Treat it as a channel worth testing with modest spend, while the fundamentals - content, structured data, and AI visibility - keep doing the heavier lifting in the background. If you'd like help figuring out where ChatGPT Ads fits into your marketing mix, our [PPC and digital advertising team](/services/ppc-services) can walk you through it.",
      },
      {
        k: 'p',
        text: "Thinking about testing ChatGPT Ads for your business? [Get in touch with EG Digital](/contact) to see how it fits alongside your existing SEO and paid media strategy.",
      },

      { k: 'h2', text: 'FAQs' },
      {
        k: 'faq',
        items: [
          {
            q: 'Are ChatGPT Ads available to Australian businesses?',
            a: "Yes. Australian businesses can create an advertiser account, verify using their ABN, and begin setting up campaigns, subject to OpenAI's platform availability and policies.",
          },
          {
            q: 'How much do ChatGPT Ads cost?',
            a: 'At the time of writing, the platform suggests a minimum daily budget of around AUD $25, with typical CPC bids near AUD $5 for healthy delivery. Costs are expected to shift as the platform matures.',
          },
          {
            q: 'How is this different from Google Ads?',
            a: "Google Ads targets people based on what they search for. ChatGPT Ads respond to the context and intent of an ongoing conversation, often reaching people earlier in their research, before they've defined a specific search query.",
          },
          {
            q: 'Should I move my ad budget from Google Ads to ChatGPT Ads?',
            a: "Not yet. It's best treated as an emerging channel to test alongside established platforms, rather than a replacement for them.",
          },
          {
            q: 'Which businesses benefit most from ChatGPT Ads?',
            a: 'Businesses with longer buying cycles or considered purchases - such as SaaS, finance, legal, healthcare, education, travel, and larger ecommerce catalogues - tend to see the most value.',
          },
        ],
      },
    ],
  },

  {
    slug: 'is-ai-search-eating-your-organic-traffic-australia',
    title: 'Is AI search eating your organic traffic? What Australian businesses need to know',
    h1: 'Is AI Search Eating Your Organic Traffic? What Australian Businesses Need to Know',
    excerpt:
      "AI Overviews, ChatGPT and Perplexity are answering questions on the results page before anyone clicks. Here is what's really happening to your organic traffic, and how Australian businesses stay visible.",
    category: 'Latest Technologies',
    read: '6 min read',
    date: 'Jul 17, 2026',
    img: 'photo-1677442136019-21780ecad995',
    metaTitle: 'Is AI Search Killing Your Organic Traffic? | EG Digital',
    metaDescription:
      "AI Overviews and chatbots are changing how Australians search. Learn what's really happening to your organic traffic and how to stay visible.",
    body: [
      {
        k: 'p',
        text: "If your organic traffic has dipped over the past year even though your rankings look fine, you're not imagining it. Google's AI Overviews, along with tools like ChatGPT and Perplexity, are answering questions directly on the search results page, often without the user ever clicking through to a website. For Australian businesses that have spent years building their SEO, this shift raises a fair question: is SEO still worth it?",
      },
      {
        k: 'p',
        text: 'The short answer is yes, but the rules of visibility are being rewritten, and businesses that adapt early will have a real advantage over those that wait.',
      },

      { k: 'h2', text: 'Why AI Search Is Changing the Game' },
      {
        k: 'p',
        text: 'Traditional search sent users to a list of blue links. AI-powered search instead summarises information from multiple sources into a single answer, shown right at the top of the page. This is convenient for users, but it means fewer clicks reach individual websites, particularly for informational queries like "what is", "how to", or "best way to".',
      },
      {
        k: 'p',
        text: 'This doesn\'t affect every business equally. A local plumber searched for by suburb, or an ecommerce brand searched for by product name, still gets direct clicks because the intent is transactional, not informational. The businesses feeling the biggest impact are the ones relying heavily on top-of-funnel blog content to drive traffic.',
      },

      {
        k: 'img',
        id: 'photo-1526628953301-3e589a6a8b74',
        alt: 'A search performance dashboard showing click-through rate and quality metrics',
        caption: 'Informational queries lose the most clicks to AI answers; transactional, local searches are far less affected.',
      },

      { k: 'h2', text: 'So, Is SEO Dead?' },
      {
        k: 'p',
        text: 'No, but it is evolving. SEO is no longer just about ranking a page; it\'s about becoming the source that AI engines trust enough to cite or summarise. This broader discipline is often called AEO (Answer Engine Optimisation) or GEO (Generative Engine Optimisation), and it builds directly on solid [technical SEO](/services/technical-seo) foundations rather than replacing them.',
      },

      { k: 'h2', text: 'What Helps AI Engines Cite Your Website' },
      {
        k: 'ul',
        items: [
          'Clear, well-structured content that answers a specific question in the first few lines, rather than burying the answer under a long introduction.',
          'Structured data (schema markup) that helps search engines understand exactly what your page is about.',
          'Strong E-E-A-T signals - Experience, Expertise, Authoritativeness, and Trustworthiness - including author credentials and up-to-date information.',
          "Original data, case studies, or insights that can't be found word-for-word on competitor sites.",
          "A technically healthy site that's easy to crawl, fast to load, and free of indexing issues.",
        ],
      },
      {
        k: 'p',
        text: "Google's own documentation on AI features in Search confirms that standard SEO best practices - helpful content, structured data, and technical health - remain the foundation for appearing in AI-generated results.",
      },

      { k: 'h2', text: 'What Metrics Should You Track Now?' },
      {
        k: 'p',
        text: "Relying on organic click volume alone no longer tells the full story. Alongside traditional traffic and ranking reports, it's worth tracking:",
      },
      {
        k: 'ul',
        items: [
          '**Branded search volume** - are more people searching for your business by name after seeing you referenced elsewhere?',
          '**AI citation visibility** - is your brand or content being referenced in AI Overviews or chatbot answers?',
          '**Conversion rate of the traffic you do get** - fewer but higher-intent visitors can still mean more revenue.',
          '**Assisted conversions** - where search played a role earlier in the customer journey, even without a final click.',
        ],
      },

      {
        k: 'img',
        id: 'photo-1551288049-bebda4e38f71',
        alt: 'An analytics dashboard tracking page load, bounce rate and session metrics',
        caption: 'Branded search, AI citations, conversion rate and assisted conversions paint a fuller picture than clicks alone.',
      },

      { k: 'h2', text: 'How EG Digital Approaches AI-Era SEO' },
      {
        k: 'p',
        text: "At EG Digital, our approach combines technical SEO fundamentals with content built to be cited, not just clicked. This means fixing the technical basics - like crawlability, structured data, and site performance - while building content around real expertise and clear, direct answers. If you'd like a clearer picture of how your site currently performs on both fronts, our team can walk you through a [full SEO review](/services/seo-services), including how visible your business is in AI-generated results.",
      },

      { k: 'h2', text: 'Frequently Asked Questions' },
      {
        k: 'faq',
        items: [
          {
            q: 'Is SEO still worth investing in with AI search on the rise?',
            a: 'Yes. AI-generated answers are still built from indexed, well-optimised content. Businesses with strong SEO foundations are more likely to be cited by AI tools, not less.',
          },
          {
            q: 'Will AI Overviews reduce my website traffic?',
            a: 'For purely informational searches, some click reduction is likely. For local and transactional searches - where most small business revenue comes from - the impact is generally much smaller.',
          },
          {
            q: 'What is AEO or GEO, and do I need it?',
            a: 'AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation) refer to optimising content so AI tools can understand, trust, and cite it. It\'s not a replacement for SEO - it\'s an extension of it.',
          },
          {
            q: 'How long does it take to see results from AI search optimisation?',
            a: 'Similar to traditional SEO, most businesses start seeing measurable shifts in visibility within three to six months, depending on site authority and competition.',
          },
        ],
      },
    ],
  },

  {
    slug: 'rank-google-maps-three-pack-australia',
    title: 'How to rank in the Google Maps three-pack in Australia',
    h1: 'How Do You Rank in the Google Maps Three-Pack in Australia?',
    excerpt:
      'Optimising your Google Business Profile, building consistent local citations, earning genuine reviews, and signalling proximity and relevance - here is how Australian businesses win the Google Maps three-pack.',
    category: 'Latest Technologies',
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

// The public URL for a post depends on its channel: newsroom posts live under
// /about/media, everything else under /blog.
export const postPath = (p: BlogPost) =>
  p.newsroom ? `/about/media/${p.slug}` : `/blog/${p.slug}`

// Blog listing sources (newsroom posts are excluded from the Blog entirely).
const BLOG_POSTS = POSTS.filter(p => !p.newsroom)
export const FEATURED = BLOG_POSTS.find(p => p.featured) ?? BLOG_POSTS[0]
export const GRID_POSTS = BLOG_POSTS.filter(p => p !== FEATURED)

// Newsroom listing source (newest first, matching array order).
export const NEWSROOM_POSTS = POSTS.filter(p => p.newsroom)
