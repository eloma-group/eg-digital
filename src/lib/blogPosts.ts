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
  modified?: string        // last-updated date for BlogPosting schema (defaults to `date`)
  schemaImage?: string     // photo id for BlogPosting schema image (defaults to `img`)
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

// Alt text for a post's card / hero image. One source of truth so every
// instance of the same image is labelled identically across the site.
export const photoAlt = (p: Pick<BlogPost, 'title'>) => `${p.title} - EG Digital`

export const POSTS: BlogPost[] = [
  // ── Newsroom articles (live at /about/media/<slug>, not in the Blog) ─────────
  {
    slug: 'seoquake-free-chrome-extension-on-page-seo-checks',
    title: 'SEOquake: A Free Chrome Extension for Quick On-Page SEO Checks',
    h1: 'SEOquake: A Free Chrome Extension for Quick On-Page SEO Checks',
    excerpt:
      "Not every SEO question needs a full audit platform. SEOquake is a free Chrome extension, rebuilt to work alongside AI-powered search, that checks a page's SEO fundamentals without leaving the browser. Here is what it checks, how to use it, and when you need a full platform instead.",
    category: 'Latest Technologies',
    read: '4 min read',
    date: 'Sep 14, 2026',
    img: '/images/newsroom/seoquake-chrome-extension-hero.jpg',
    metaTitle: 'SEOquake Guide: Free Chrome Extension for On-Page SEO Checks',
    metaDescription:
      'SEOquake is a free Chrome extension for fast on-page SEO audits. Here is what it checks, how to use it, and when you need a full SEO platform instead.',
    newsroom: true,
    body: [
      {
        k: 'p',
        text: "Not every SEO question needs a full audit platform. Sometimes you are simply browsing a competitor's landing page, or looking at an article that is outranking yours for no obvious reason, and all you actually want to know is what is going on with that page. That is the exact gap SEOquake fills, and it recently got rebuilt from the ground up to work better alongside AI-powered search results.",
      },
      { k: 'h2', text: 'What SEOquake Actually Is' },
      {
        k: 'p',
        text: "SEOquake is a free Chrome extension, built and maintained by Semrush, that checks a page's SEO fundamentals without leaving the browser. Roughly 1.16 million users run it in Chrome every week, which makes it one of the most widely installed SEO tools available. It is worth being clear about what it is not, too. SEOquake analyses the single page you are currently viewing. It is not a full site crawler, and it does not try to be one.",
      },
      {
        k: 'p',
        text: "Core on-page analysis works without creating a Semrush account. Connecting one simply extends the workflow with deeper backlink and traffic data where available, rather than gating the basic features behind a paywall.",
      },
      { k: 'h2', text: 'What It Checks' },
      {
        k: 'p',
        text: "Clicking the toolbar icon opens a Quick View with five tabs covering the fundamentals: page info, content structure, a 28-point audit, schema and social metadata, and public Semrush metrics.",
      },
      {
        k: 'p',
        text: "The Page Info tab alone tends to answer most \"why isn't this page ranking\" questions, since it surfaces title and meta description length, heading and link counts, canonical URL, and robots.txt status in one view. The Content tab breaks down the heading structure and keyword density, which is genuinely useful when reviewing how a competitor has structured a page around specific search intents rather than just one broad keyword.",
      },
      {
        k: 'p',
        text: "The rebuilt Audit tab runs 28 checks across page, mobile, technical and social signals, each flagged as Passed, Warning, Failed or Informational, and the results can be exported as a PDF for client reporting. For anything that needs a closer look, the Full Report expands into six panels covering keyword density tables, a complete links report with anchor text and HTTP status, schema and social previews, and a side-by-side Compare tool for benchmarking a handful of URLs or domains.",
      },
      { k: 'h2', text: 'Why This Matters for Australian Businesses' },
      {
        k: 'p',
        text: "For a business without a full-time SEO team, a tool like this offers a fast way to sanity check a page before assuming something bigger is wrong. A missing meta description, an accidental noindex tag, or a broken internal link can quietly hurt a page's performance for months before anyone notices, and SEOquake surfaces these in a few clicks rather than requiring a dive into the page source.",
      },
      {
        k: 'p',
        text: "It is also a genuinely useful first pass before commissioning a full audit. Running it across a handful of key pages gives a rough sense of whether a site needs light optimisation or has enough recurring issues to warrant a larger engagement, without committing to that scope upfront.",
      },
      { k: 'h2', text: 'Where It Falls Short' },
      {
        k: 'p',
        text: "SEOquake checks one page at a time, so it is the wrong tool when the job requires a full site crawl, ongoing technical monitoring, deep backlink analysis across an entire domain, or tracking multiple competitor domains over time. Those tasks need a full platform such as Semrush's Site Audit. The practical way to think about it is that SEOquake is the quick check that tells you something might be wrong, while a full platform is what you reach for once you know it is worth investigating properly.",
      },
      {
        k: 'p',
        text: "Tools like SEOquake are useful for a fast read on a page, but turning those findings into a working strategy, and knowing which warnings actually matter, is where professional SEO support makes the difference. [Get in touch with EG Digital](/contact) and we can help you work out what is actually worth fixing.",
      },
    ],
  },

  {
    slug: 'australia-my-feed-my-way-social-media-law',
    title: 'Australia Proposes New Law Giving Social Media Users Control Over Algorithm Feeds',
    h1: 'Australia Proposes New Law Giving Social Media Users Control Over Algorithm Feeds',
    excerpt:
      "Australia has unveiled draft legislation, dubbed \"My Feed, My Way,\" that would require major social media platforms including Facebook, Instagram and TikTok to give users a direct choice between an algorithm driven feed and a chronological one. Here is what the new legislation means.",
    category: 'Latest Technologies',
    read: '3 min read',
    date: 'Sep 10, 2026',
    img: '/images/newsroom/australia-feed-choice-law-hero.png',
    metaTitle: 'Australia Proposes New Social Media Feed Choice Law | 2026',
    metaDescription:
      'Australia has proposed the "My Feed, My Way" law, giving social media users control over algorithm based feeds. Here is what the new legislation means.',
    newsroom: true,
    body: [
      {
        k: 'p',
        text: "Australia has unveiled draft legislation that would require major social media platforms, including Facebook, Instagram and TikTok, to give users a direct choice over how their content feed works.",
      },
      {
        k: 'p',
        text: "The proposed law, dubbed \"My Feed, My Way,\" would compel platforms to notify users and let them choose between an algorithm driven personalised feed or a chronological feed showing only content from accounts they actively follow.",
      },
      {
        k: 'p',
        text: "Prime Minister Anthony Albanese called the move \"sensible, pragmatic, practical reform,\" saying it puts control in the hands of users rather than tech companies. The proposal builds on Australia's earlier world first ban on social media accounts for under 16s and reflects growing global scrutiny of engagement driven algorithms.",
      },
      {
        k: 'p',
        text: "The country's online safety regulator, the eSafety Commissioner, will oversee compliance. Platforms that fail to meet the new requirements could face penalties of up to AUD 109.2 million.",
      },
      {
        k: 'p',
        text: "Australia's approach mirrors the European Union's Digital Services Act, which has mandated similar opt out choices since 2024, though regulators there flagged that some platforms made the process difficult to find.",
      },
      {
        k: 'p',
        text: "Meta and Google did not immediately respond to requests for comment. The bill will go through industry and public consultation before being introduced to Parliament later this year.",
      },
      {
        k: 'p',
        text: "If a shift toward chronological feeds changes how your audience discovers content, it is worth making sure your visibility does not rest on the algorithm alone. [Get in touch with EG Digital](/contact) if you'd like to talk through what this could mean for your social and paid strategy.",
      },
    ],
  },

  {
    slug: 'google-personalised-alcohol-ads-youtube',
    title: 'Google Is Letting Alcohol Brands Run Personalised Ads on YouTube, Here Is What Changes',
    h1: 'Google Is Letting Alcohol Brands Run Personalised Ads on YouTube, Here Is What Changes',
    excerpt:
      "Alcohol advertisers on YouTube have been advertising with one of the platform's core strengths switched off. From October 30, 2026, Google will allow personalised alcohol advertising across YouTube inventory where local law permits. Here's what's changing, where it applies, and how to prepare.",
    category: 'Latest Technologies',
    read: '4 min read',
    date: 'Sep 5, 2026',
    img: '/images/newsroom/youtube-alcohol-ads-personalisation-hero.jpg',
    metaTitle: 'Google Allows Personalised Alcohol Ads on YouTube From Oct 30',
    metaDescription:
      "Google is opening personalised YouTube ad targeting to alcohol brands from October 30, 2026. See what's changing, where it applies, and how to prepare.",
    newsroom: true,
    body: [
      {
        k: 'p',
        text: "Alcohol advertisers on YouTube have been working with one hand tied behind their back for a while now. Personalised targeting, the kind most advertisers take for granted, simply was not an option for this category. According to Google's own advertising policy update, that changes from October 30, 2026, when Google will allow personalised alcohol advertising across YouTube inventory, in markets where local law permits it.",
      },

      { k: 'h2', text: "What's Actually Changing" },
      {
        k: 'p',
        text: "Up until this update, alcohol brands could still advertise on YouTube, but they were limited to non personalised placements, meaning ads were shown broadly rather than targeted to specific audiences the way most other product categories can be. From October 30, eligible advertisers can use personalisation for alcohol, alcohol related products, and alcohol alternative beverages, bringing this category closer to how the rest of YouTube's ad inventory already works.",
      },

      { k: 'h2', text: 'It Is Not Rolling Out Everywhere' },
      {
        k: 'p',
        text: "This is a market by market change, not a global switch. Personalised alcohol advertising will not be available in Egypt, India, Indonesia or Poland under this update, and availability elsewhere still depends on local laws and regulations. For Australian advertisers, this is one to keep an eye on, since Google has said it will share more detail as additional markets and surfaces become eligible.",
      },

      { k: 'h2', text: 'The Guardrails Are Staying in Place' },
      {
        k: 'p',
        text: "Google has been fairly clear that this is not a loosening of its broader sensitive advertising rules. Targeting based on health information related to alcohol remains prohibited under Google's Health sensitive interest category. Age restrictions still apply, sensitive categories remain restricted, and Google says it will continue to avoid personalising ads for minors altogether. People can also still manage what they see through My Ad Center, including asking for fewer ads on specific topics or from specific brands.",
      },

      { k: 'h2', text: 'Why This Is Worth Paying Attention To' },
      {
        k: 'p',
        text: "If you work in or around alcohol, hospitality, or alcohol alternative brands, this is a genuinely useful shift. Personalised targeting tends to perform better than broad placements because it reaches people more likely to actually be interested, rather than paying to show an ad to everyone. Brands in this category have effectively been advertising on YouTube with one of the platform's core strengths switched off, and that is changing from the end of October.",
      },

      { k: 'h2', text: 'What to Do Between Now and October 30' },
      {
        k: 'p',
        text: "If this applies to your business, it is worth using the time before the update lands to get campaign structure and audience data in order, rather than waiting until the policy switches on to start planning. Confirm whether your specific market is included in the initial rollout, review what first party audience data you already have that could be used once personalisation is available, and make sure your creative and landing pages are ready to make the most of more targeted reach rather than broad awareness alone.",
      },
      {
        k: 'p',
        text: "Policy changes like this are exactly the sort of thing we track as part of managing [Google Ads](/services/google-ads-management) for clients, so campaigns are ready to take advantage the moment new options become available rather than catching up after the fact. [Get in touch with EG Digital](/contact) if you want a hand preparing your YouTube campaigns for this change.",
      },
    ],
  },

  {
    slug: 'reddit-vanished-from-chatgpt-overnight',
    title: "Reddit Nearly Vanished From ChatGPT Overnight, Here's the Lesson for Every Business",
    h1: "Reddit Nearly Vanished From ChatGPT Overnight, Here's the Lesson for Every Business",
    excerpt:
      "Reddit's share of ChatGPT Search citations dropped 86.4% in four days. Here's what happened, why it matters, and what businesses should learn from it.",
    category: 'Latest Technologies',
    read: '3 min read',
    date: 'Aug 21, 2026',
    img: '/images/newsroom/reddit-chatgpt-visibility-hero.jpg',
    metaTitle: "Reddit Vanished From ChatGPT Overnight | EG Digital",
    metaDescription:
      "Reddit's share of ChatGPT Search citations dropped 86.4% in just four days. Discover why it happened and the critical SEO lesson for every business.",
    newsroom: true,
    body: [
      {
        k: 'p',
        text: "Reddit has quietly been one of the most cited sources across AI tools like ChatGPT for a long time. Then, in the space of about four days, most of that visibility disappeared. According to Search Engine Land, data from the AI visibility platform Promptwatch shows Reddit's share of ChatGPT Search citations dropped 86.4% between August 14 and August 17, falling from an average of 3.83% down to just 0.52%. For a site that had been one of the most reliably cited sources on the internet, that is a huge and very sudden fall.",
      },

      { k: 'h2', text: 'What Actually Happened' },
      {
        k: 'p',
        text: "Between July 18 and August 7, Reddit held a steady share of roughly 3.83% of all ChatGPT Search citations, a genuinely large slice for any single website. On August 14 that share suddenly fell below 1%, and it stayed low, averaging just 0.52% through August 17. An earlier, smaller dip had already started on August 8, the same day Promptwatch noticed ChatGPT Search change how it runs background searches while putting an answer together. But that first change only explains part of the story, since the bigger drop came six days later and Promptwatch itself says it cannot fully explain what caused it.",
      },

      { k: 'h2', text: 'It Was Not the Same Everywhere' },
      {
        k: 'p',
        text: "This sharp, sudden drop only showed up in ChatGPT. Google's AI Overviews and AI Mode also showed Reddit citations declining over the same period, but much more gradually, moving down slowly over several weeks rather than falling off a cliff in a matter of days. That difference matters, because it shows this was not a case of AI in general deciding Reddit was less trustworthy. It looks specific to whatever changed inside ChatGPT itself.",
      },

      { k: 'h2', text: 'Why This Matters Even If You Have Never Heard of Promptwatch' },
      {
        k: 'p',
        text: "Reddit is about as established and heavily cited as a website gets. If a change like this can happen to Reddit with no warning and no real explanation, it can happen to any business relying on AI tools to send them traffic or mention their brand. Visibility inside AI platforms is not something you can lock in once and forget about. These systems change how they pick and rank sources on their own schedule, and sometimes those changes are large, fast, and completely unannounced.",
      },

      { k: 'h2', text: 'What This Means for Your Own Business' },
      {
        k: 'p',
        text: "Do not build your entire visibility strategy around one AI platform. If ChatGPT, Google AI Overviews, or any other tool becomes a major source of traffic or leads, treat that as a bonus on top of solid SEO fundamentals, not a replacement for them.",
      },
      {
        k: 'p',
        text: "Keep an eye on your own referral data. If you can see where your traffic is coming from, watch for sudden changes rather than assuming a slow decline is the only kind worth noticing.",
      },
      {
        k: 'p',
        text: "Remember that a drop like this does not necessarily mean anything about your content quality. Reddit did not suddenly become a worse source of information in four days, something changed in how ChatGPT was searching, which is largely out of any individual website's control.",
      },

      { k: 'h2', text: 'How EG Digital Approaches This' },
      {
        k: 'p',
        text: "This is exactly why we build strategies around a mix of channels rather than betting everything on any single one, AI included. Alongside organic SEO, our [Google Ads management](/services/google-ads-management) gives businesses a channel they can rely on that is not subject to an unannounced change inside someone else's AI model. [Get in touch with EG Digital](/contact) if you would like a second opinion on how exposed your visibility currently is to a single channel.",
      },
    ],
  },

  {
    slug: 'google-view-counts-google-business-posts',
    title: 'Google May Be Bringing Back View Counts on Google Business Posts',
    h1: 'Google May Be Bringing Back View Counts on Google Business Posts',
    excerpt:
      "Google appears to be testing a return of view counts on Google Posts, showing a simple people viewed number under updates published on a Google Business Profile. Here's what's being tested, why it matters, and what it means for how you post.",
    category: 'Latest Technologies',
    read: '3 min read',
    date: 'Aug 20, 2026',
    img: '/images/newsroom/google-business-posts-view-counts-hero.jpg',
    heroFit: 'contain',
    metaTitle: 'Google May Bring Back View Counts on Google Business Posts | EG Digital',
    metaDescription:
      "Google appears to be testing a return of view counts on Google Business Posts. Here's what's being tested, why it matters, and what it means for your posting strategy.",
    newsroom: true,
    body: [
      {
        k: 'p',
        text: "Something small but genuinely useful might be making a comeback on Google Business Profiles. According to Search Engine Roundtable, Google appears to be testing a return of view counts on Google Posts, the updates business owners can publish directly on their Google Business Profile. It's showing up as a simple **people viewed** number under individual posts, and it's only appearing for a small number of accounts right now.",
      },

      { k: 'h2', text: 'A Bit of Background' },
      {
        k: 'p',
        text: "Google actually had this feature years ago. Back in 2018, Google Posts came with proper insights, showing business owners how many views and clicks each post was getting. That data disappeared in January 2023 when Google quietly removed it, leaving business owners publishing posts with no real way to tell if anyone was actually seeing them.",
      },

      { k: 'h2', text: 'What Is Being Tested Now' },
      {
        k: 'p',
        text: "A view count labelled people viewed has started showing up under some Google Posts, spotted and shared by a user on LinkedIn. It hasn't rolled out broadly, and Google hasn't made any official announcement about it, so this looks like an early, limited test rather than a confirmed feature. It's worth noting Google has also recently brought back view counts on photos and videos within Business Profiles, so there does seem to be a pattern of some of these older insights slowly making a return.",
      },

      { k: 'h2', text: 'Why This Actually Matters' },
      {
        k: 'p',
        text: "Right now, posting on a Google Business Profile is largely a leap of faith. You write the post, publish it, and hope it's getting seen. Without any performance data, it's genuinely hard to tell whether your posting strategy is working or whether you're just adding content nobody looks at. Bringing back even a basic view count would give business owners a simple way to see which posts are landing and which ones are not, without needing to dig into more complex analytics tools.",
      },

      { k: 'h2', text: 'What This Means for Your Google Business Profile' },
      {
        k: 'p',
        text: "There's nothing to change or set up right now, since this is still a limited test and not something you can turn on. But it's a good moment to think about your posting habits more broadly. If you haven't posted on your Google Business Profile in a while, this is a reasonable nudge to start again, since Google clearly still sees value in the feature.",
      },
      {
        k: 'p',
        text: "It's also worth keeping your posts genuinely useful rather than just filler. Photos, offers, updates and short announcements all tend to perform better than generic posts, and if view counts do roll out properly, that difference will finally be measurable.",
      },

      { k: 'h2', text: 'How EG Digital Can Help' },
      {
        k: 'p',
        text: "Keeping a Google Business Profile active and genuinely useful is part of the bigger picture we look at alongside [Google Ads management](/services/google-ads-management) for our clients, since local visibility and paid visibility tend to work best together rather than in isolation. If you want a second opinion on how your business is showing up locally, [get in touch with EG Digital](/contact) and we'll take a look.",
      },
    ],
  },

  {
    slug: 'google-august-2026-spam-update',
    title: 'Google Releases August 2026 Spam Update',
    h1: 'Google Releases August 2026 Spam Update',
    excerpt:
      "Google has rolled out its August 2026 spam update globally across all languages. It's the third spam update of the year. Here's what's changing, why it matters, and what you should do to keep your site aligned with Google's spam policies.",
    category: 'Latest Technologies',
    read: '3 min read',
    date: 'Aug 19, 2026',
    img: '/images/newsroom/google-august-2026-spam-update-hero.png',
    metaTitle: 'Google Releases August 2026 Spam Update | EG Digital',
    metaDescription:
      "Google has released the August 2026 spam update worldwide across all languages. Here's what it means, why it matters, and how to keep your website aligned with Google's spam policies.",
    newsroom: true,
    body: [
      {
        k: 'p',
        text: 'Google has released its latest algorithm update, the **August 2026 spam update**. According to the company, the rollout will take a few days to complete, and it applies globally across all languages.',
      },

      { k: 'h2', text: 'Update Details' },
      {
        k: 'p',
        text: 'Google posted the announcement on its search status dashboard, confirming that the August 2026 spam update has been released worldwide across all languages, with the rollout expected to take a few days to finish.',
      },
      {
        k: 'p',
        text: "To learn more about spam updates and Google's spam policies, you can refer to [Google's official spam policies help document](https://developers.google.com/search/docs/essentials/spam-policies).",
      },

      { k: 'h2', text: 'Why This Update Matters' },
      {
        k: 'p',
        text: 'This is the third spam update Google has announced in 2026, following the June 2026 spam update earlier this year. The main goal of spam updates is to remove low quality, manipulative, or spammy content from search results while improving visibility for genuine, high quality websites.',
      },
      {
        k: 'p',
        text: "If your website hasn't used any black hat SEO tactics, there's generally no need to worry. That said, history shows that occasionally clean, legitimate websites can be affected too, so it's important to keep monitoring your rankings.",
      },

      { k: 'h2', text: 'What You Should Do' },
      {
        k: 'ul',
        items: [
          "Regularly check your website's Google Search Console data.",
          'Watch for any sudden drops in traffic or rankings.',
          "Make sure your site follows Google's spam policies.",
          'Avoid practices like low quality backlinks, keyword stuffing, or duplicate content.',
        ],
      },
      {
        k: 'p',
        text: "If you think your website has been affected by this update, or you'd like to proactively strengthen your site's SEO health, get in touch with our team. EG Digital's [SEO services](/services/seo-services) can help keep your website aligned with Google's evolving algorithms.",
      },
      {
        k: 'p',
        text: "**Worried this update may have hit your rankings?** [Get in touch with EG Digital](/contact) and we'll take a look.",
      },
    ],
  },

  {
    slug: 'google-removing-language-targeting-search-ads',
    title: "Google Is Taking Away Language Targeting in Search Ads, Here's What That Means",
    h1: "Google Is Taking Away Language Targeting in Search Ads, Here's What That Means",
    excerpt:
      "Google is removing the option to manually pick which languages your Search ads target. From late September, its own systems decide who sees your ad. Here's what's changing and what advertisers need to do.",
    category: 'Latest Technologies',
    read: '4 min read',
    date: 'Aug 14, 2026',
    img: 'photo-1432888622747-4eb9a8efeb07',
    metaTitle: 'Google Removing Language Targeting in Search Ads | EG Digital',
    metaDescription:
      "Google is removing manual language targeting from Search and AI Max campaigns from late September 2026. Here's what's changing and what advertisers need to do.",
    newsroom: true,
    body: [
      {
        k: 'p',
        text: "Google just announced a change to Search campaigns that's worth knowing about if you run any Google Ads at all. According to Search Engine Journal, Google is removing the option for advertisers to manually pick which languages their Search ads target. Starting late September, that setting simply won't exist anymore for Search and AI Max for Search campaigns. Instead, Google's own systems will decide which language ad to show someone, based on things like the language of the ad itself and what Google already knows about the languages that person understands.",
      },

      { k: 'h2', text: "What's Changing" },
      {
        k: 'p',
        text: "Right now, if you run a Search campaign, you can go into your settings and tell Google exactly which languages you want your ads to show up for. Maybe you only want English, or maybe you're targeting both English and Mandarin speakers. Either way, you're the one choosing.",
      },
      {
        k: 'p',
        text: "Once this change rolls out, that manual choice disappears for Search campaigns. Google will look at the language your ad and landing page are written in, along with signals like someone's search history and browser settings, and decide for itself who should see your ad. So someone who searches in English but has their browser set to Spanish could still end up seeing your ad, or might not, depending on what Google's system decides they'll actually understand.",
      },

      { k: 'h2', text: 'What About Performance Max?' },
      {
        k: 'p',
        text: "Not entirely. Search campaigns and AI Max for Search are the ones losing this setting completely. Performance Max is a bit of a mixed bag. For the part of Performance Max that shows ads on Google Search, the same automatic system takes over. But for YouTube, Display, Discover and Gmail within Performance Max, you can still choose your languages manually as normal. Shopping ads inside Performance Max aren't affected by this at all.",
      },

      { k: 'h2', text: 'What Advertisers Need to Do' },
      {
        k: 'p',
        text: "Google says existing campaigns don't need any immediate action, and old language settings can just sit there doing nothing once the change kicks in. But that doesn't mean it's worth ignoring completely.",
      },
      {
        k: 'p',
        text: "If your business runs ads in more than one language, this is genuinely worth paying attention to. Since Google will now lean heavily on the language your ad copy and landing page are written in, it becomes much more important that those are clear and consistent. If an ad is in English but the landing page it sends people to is a mix of English and another language, that mismatch could confuse Google's system, not just your visitors.",
      },

      { k: 'h2', text: 'Practical Steps to Take' },
      {
        k: 'ul',
        items: [
          "**Match ad and landing page language.** Check that each ad's language matches its landing page language clearly, rather than mixing languages across the two.",
          "**Watch multilingual campaigns closely.** If you run multilingual campaigns, keep a close eye on performance once the change goes live in late September, since delivery might shift in ways that are hard to predict beforehand.",
          "**Update any API workflows.** If you use the Google Ads API to manage campaigns, note that you'll need to stop adding language settings to Search campaigns going forward, since Google will start returning an error if you try.",
        ],
      },

      { k: 'h2', text: 'Why We Care' },
      {
        k: 'p',
        text: "This fits a pattern we've been seeing across Google Ads for a while now. Manual controls keep getting handed over to Google's automated systems, and advertisers are left trusting the algorithm a little more each time. It's not necessarily a bad thing, automation often does a genuinely good job, but it does mean the quality of your ad copy and landing pages matters more than ever, since those are increasingly what Google's systems lean on to make decisions you used to make yourself.",
      },
      {
        k: 'p',
        text: "Not sure how this change might affect your own campaigns? That's exactly the kind of thing we keep across as part of our [Google Ads management](/services/google-ads-management) service, so you don't have to track every update yourself. [Get in touch with EG Digital](/contact) if you'd like us to take a look at your account.",
      },
    ],
  },

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

  // ── Blog articles (live at /blog/<slug>) ─────────────────────────────────────
  {
    slug: 'gsc-indexing-report-missing-june-data',
    title: 'Google Search Console Indexing Report Missing June 2026 Data: What Site Owners Need to Know',
    h1: 'Google Search Console Indexing Report Missing June 2026 Data: What Site Owners Need to Know',
    excerpt:
      "If you logged into Google Search Console this week and noticed a gap in your Page Indexing report, you're not alone. Google has confirmed several days of June 2026 data are missing across all properties, and that the data is not coming back. Here's what happened, what John Mueller said, and why you shouldn't panic.",
    category: 'Latest Technologies',
    read: '3 min read',
    date: 'Sep 11, 2026',
    img: '/images/blog/gsc-indexing-report-missing-june-data-hero.jpg',
    metaTitle: 'GSC Indexing Report Missing June 2026 Data: What It Means',
    metaDescription:
      "Google Search Console's Page Indexing report is missing several days of June 2026 data. Here's why it happened, what Google's John Mueller said, and why site owners shouldn't panic.",
    body: [
      {
        k: 'p',
        text: "If you logged into Google Search Console this week and noticed a gap in your Page Indexing report, you're not alone. Webmasters and SEOs across the board are reporting missing data for several days in June 2026, and Google has now confirmed it's a widespread issue, not something specific to your site.",
      },

      { k: 'h2', text: "What's Happening" },
      {
        k: 'p',
        text: "Starting this week, the Page Indexing report inside Google Search Console is showing blank stretches on the left side of the indexing graph, corresponding to certain days in June 2026. The gap appears consistently across different sites and properties, which is the main reason this looks like a platform-wide reporting problem rather than an indexing penalty or crawl issue tied to any individual domain.",
      },
      {
        k: 'p',
        text: "If your own [indexing performance dashboard](/services/technical-seo) has started tracking dips or irregular patterns recently, it's worth cross-checking whether the anomaly lines up with this known gap before assuming something changed on your end.",
      },

      { k: 'h2', text: "Google's Official Response" },
      {
        k: 'p',
        text: "John Mueller from Google addressed the reports directly, explaining that the missing days trace back to a delay in data processing that occurred back in June. According to Mueller, the indexing report simply was never updated for that window, and, notably, Google does not backfill historical indexing data once it's missed. He added that the team would double check internally once relevant staff returned from holiday, but the expectation is that this data gap is permanent.",
      },

      { k: 'h2', text: "Why This Matters (And Why You Shouldn't Panic)" },
      {
        k: 'p',
        text: "For any single site owner, a sudden dip in an indexing graph can trigger alarm bells: has something changed in how Google is crawling or indexing pages? In this case, the answer is no. Because the missing data is showing up identically across unrelated properties, this is a **reporting artifact**, not a signal about your site's actual visibility or indexing health in Google Search.",
      },
      { k: 'p', text: 'A few practical takeaways:' },
      {
        k: 'ul',
        items: [
          "**Don't treat the gap as a ranking or crawling signal.** It reflects a break in Google's own reporting pipeline, not a change in how your pages are being indexed.",
          "**The June data isn't coming back.** Google has been clear that indexing data isn't backfilled retroactively, so this gap will likely remain a permanent blank spot in historical GSC records.",
          "**Cross-check with other signals** like server logs, crawl stats, or third-party rank tracking if you want to verify indexing health during that period. GSC alone won't fill in the picture for those specific days.",
        ],
      },

      { k: 'h2', text: 'The Bigger Pattern' },
      {
        k: 'p',
        text: "This isn't the first time Search Console's reporting has hiccuped independently of actual search performance, and it's a good reminder that GSC, while indispensable, is still a reporting layer sitting on top of Google's infrastructure, and reporting layers can break even when the underlying system doesn't. For teams that rely heavily on GSC data for [technical SEO reporting](/services/technical-seo), it's worth building in occasional sanity checks against other data sources so a one-off glitch like this doesn't get misread as a real performance issue.",
      },
      {
        k: 'p',
        text: "If you'd like a second set of eyes on your indexing health beyond what Search Console shows, [get in touch with EG Digital](/contact) and our [SEO team](/services/seo-services) can run a proper audit.",
      },
      {
        k: 'p',
        text: 'Source: [Search Engine Land - "Google Search Console Indexing report missing June data"](https://searchengineland.com), reported by Barry Schwartz, September 11, 2026.',
      },
    ],
  },

  {
    slug: 'visual-search-image-seo-ai-2027',
    title: 'Visual Content and SEO: How to Optimise Images and Videos for AI Search in 2027',
    h1: 'Visual Content and SEO: How to Optimise Images and Videos for AI Search in 2027',
    excerpt:
      'Images and videos have always mattered for SEO, but the job has changed. AI systems no longer just index a picture, they interpret the scene, identify what is in it, and connect it to a real-world entity. For businesses that have treated image SEO as an afterthought, that gap is starting to show.',
    category: 'Latest Technologies',
    read: '4 min read',
    date: 'Sep 24, 2026',
    img: '/images/blog/visual-search-image-seo-2027-hero.jpg',
    metaTitle: 'Visual Search & Image SEO for AI in 2027: What Actually Matters',
    metaDescription:
      'AI systems now interpret images, not just index them. Here is how to optimise visual content for Google Lens, AI Overviews and multimodal search in 2027.',
    body: [
      {
        k: 'p',
        text: 'Images and videos have always mattered for SEO, but the job has changed. AI systems no longer just index a picture, they interpret the scene, identify what is in it, connect it to a real-world entity, and use that understanding to help people move from noticing a brand to actually choosing it. For businesses that have treated image SEO as an afterthought, that gap is starting to show.',
      },

      { k: 'h2', text: 'Visual Search Has Become a Discovery Layer, Not Just an Index' },
      {
        k: 'p',
        text: 'Google reports that [Google Lens](https://lens.google/) now powers more than 25 billion visual searches every month, with roughly one in five carrying commercial intent. That scale alone makes visual content a genuine discovery channel, not a supporting asset.',
      },
      {
        k: 'p',
        text: 'What has changed is depth. Modern visual search systems can identify multiple objects and attributes within a single image, understand how those elements relate to each other, and run [several searches behind the scenes](/blog/what-is-query-fan-out-seo-2026) to interpret what the image actually represents before forming an answer. A product photo can now communicate colour, material and features. A hotel photo can communicate room type, amenities and setting. A restaurant photo can communicate cuisine and dining experience, all without a word of surrounding text.',
      },

      { k: 'h2', text: 'Why Good Images Can Still Get Misread' },
      {
        k: 'p',
        text: 'The core challenge is no longer whether an image is technically visible to a crawler. It is whether an AI system can correctly connect that image to the right entity, context, and current information. An image can be well optimised in the traditional sense and still be ambiguous to an AI system if the surrounding data does not clearly reinforce what it represents.',
      },
      {
        k: 'p',
        text: 'This matters most where entities can be confused with each other, such as multiple hotel room types, several product variants, or a business with more than one location. If the visual, the page content, and the structured data around it do not all describe the same thing consistently, the AI system is left to resolve that conflict on its own, and the outcome is no longer something a brand controls.',
      },

      { k: 'h2', text: 'Five Things Worth Getting Right' },
      {
        k: 'p',
        text: '**Entity consistency matters more than adding extra schema.** Every image should connect clearly to the correct entity it represents, whether that is a specific product, property, or location. Using relevant [structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) types such as Product, Hotel, or [ImageObject](https://schema.org/ImageObject) helps, but only if that markup stays aligned with current feeds, inventory, and listings rather than becoming another source of contradictory information.',
      },
      {
        k: 'p',
        text: '**Image and attribute depth is about specificity, not just attractive photography.** Original images that clearly show the details customers actually care about, such as colour, room type, or dish ingredients, give both people and AI systems more to work with than generic stock-style imagery. This is where [custom graphic design](/services/graphic-design) and original photography start to pay off.',
      },
      {
        k: 'p',
        text: "**Content alignment ties the image to its surrounding context.** Descriptive filenames, alt text, captions, and nearby copy still matter, but their real job now is reinforcing what the image represents as part of a broader semantic picture, not just ticking an accessibility checkbox. [Google's image SEO best practices](https://developers.google.com/search/docs/appearance/google-images) and well-planned [content creation](/services/content-creation) both point in the same direction here.",
      },
      {
        k: 'p',
        text: '**Freshness and consistency across locations** prevent outdated signals from undermining an otherwise well-optimised asset. A price, availability, or amenity that has changed but is not reflected in the image and its metadata creates the same kind of ambiguity that confuses AI systems trying to interpret intent.',
      },
      {
        k: 'p',
        text: '**Clear governance over assets**, particularly for businesses managing images across multiple locations or platforms, ensures there is one authoritative version of each image rather than several slightly different ones circulating across a website, social channels, and third-party listings.',
      },

      { k: 'h2', text: 'What This Means for Australian Businesses' },
      {
        k: 'p',
        text: 'For local and multi-location businesses in particular, such as real estate agencies, hospitality venues, and retailers with several stores, inconsistent imagery across [Google Business Profile](/services/local-seo) listings, the website, and social platforms is an easy way to quietly lose visibility in visual and AI search. The fix is not necessarily more images. It is making sure the images that exist consistently point to the same entity, the same details, and the same current information everywhere they appear.',
      },
      {
        k: 'p',
        text: '**Not sure if your images are sending consistent signals to AI systems?** Visual search readiness sits at the intersection of [SEO](/services/seo-services), content strategy, and local search, and it is an area most Australian businesses have not audited yet. [Get in touch with EG Digital](/contact) and we can walk through what needs tightening up.',
      },
      {
        k: 'p',
        text: 'Sources: [Search Engine Land](https://searchengineland.com), [Wikipedia: Knowledge Graph](https://en.wikipedia.org/wiki/Knowledge_Graph_%28Google%29), [Schema.org](https://schema.org).',
      },
    ],
  },

  {
    slug: 'what-is-query-fan-out-seo-2026',
    title: 'What Is Query Fan-Out and Why It Matters for Your SEO in 2026',
    h1: 'What Is Query Fan-Out and Why It Matters for Your SEO in 2026',
    excerpt:
      "When someone asks ChatGPT, Google AI Mode or Perplexity a detailed question, the system breaks it into smaller sub-questions, searches for each separately, then combines everything into one answer. This process is called query fan-out, and it is quietly changing which pages get cited in AI-generated answers and which get skipped.",
    category: 'Latest Technologies',
    read: '5 min read',
    date: 'Sep 13, 2026',
    img: '/images/blog/query-fanout-2026-hero.jpg',
    metaTitle: 'What Is Query Fan-Out and How It Changes AI Search SEO',
    metaDescription:
      'Query fan-out is reshaping how AI search engines choose what to cite. Learn how it works and what it means for your SEO strategy in 2026.',
    body: [
      {
        k: 'p',
        text: "When someone asks ChatGPT, Google AI Mode or Perplexity a detailed question, the system does not simply search for that exact sentence. It breaks the question into several smaller sub-questions, searches for each one separately, and then combines everything into a single answer. This process is called query fan-out, and it is quietly changing which pages get cited in AI-generated answers and which ones get skipped entirely.",
      },

      { k: 'h2', text: 'What Query Fan-Out Actually Means' },
      {
        k: 'p',
        text: "Query fan-out is the process AI search systems use to split one user question into multiple parallel sub-queries before generating a response. Google's Head of Search, Elizabeth Reid, introduced the term at Google I/O 2025 while explaining how AI Mode works internally.",
      },
      {
        k: 'p',
        text: "Here is a simple example. If someone asks \"best accounting software for a small business in Australia,\" the AI does not search for that exact phrase. It might generate sub-queries such as \"top accounting software 2026,\" \"cloud accounting pricing comparison Australia,\" \"accounting software for sole traders,\" and \"software with BAS integration.\" Each sub-query pulls results from different sources, and the AI stitches the best answers together into one response.",
      },
      {
        k: 'p',
        text: "This matters because your content is now competing at the level of these smaller sub-questions, not just the original broad search term.",
      },

      { k: 'h2', text: 'Why Ranking First Is No Longer Enough' },
      {
        k: 'p',
        text: "A widely cited Surfer SEO study, which analysed more than 173,000 URLs, found that 68 percent of pages cited in AI Overviews did not rank in the top 10 organic results for the original query. Query fan-out explains why. The AI is not necessarily pulling from the page ranked first for the broad topic. It is pulling from whichever page gives the clearest, most specific answer to each individual sub-question it generated.",
      },
      {
        k: 'p',
        text: "In practice, this means a page ranked seventh that directly and precisely answers one narrow sub-question can earn an AI citation over a page ranked first that only covers the topic in general terms.",
      },

      { k: 'h2', text: 'How the Big Three Handle Fan-Out Differently' },
      {
        k: 'p',
        text: "Google AI Mode uses a version of Gemini to break down complex questions, drawing on Google's extensive search index, which gives it the largest retrieval pool of any AI search system. ChatGPT tends to generate fewer sub-queries but pulls from a wider mix of source types, including forums and niche publications that Google sometimes ranks lower. Perplexity is the most transparent of the three, showing users the exact sub-queries it generated, and it leans more heavily on recently published content than the other platforms.",
      },
      {
        k: 'p',
        text: "The common thread across all three is the same: content needs to satisfy the sub-questions behind a search, not just the headline query.",
      },

      { k: 'h2', text: 'What This Means for Your Content Strategy' },
      {
        k: 'p',
        text: "Three shifts matter most here.",
      },
      {
        k: 'p',
        text: "Topical depth now carries more weight than a single well-optimised page. A website with one article on a subject sends a weaker signal than a website covering the same subject from multiple angles, such as pricing, comparisons, common mistakes and implementation guides, all linked together internally. AI systems appear to favour sites that demonstrate this kind of coverage when deciding what to cite.",
      },
      {
        k: 'p',
        text: "Writing needs to shift from exact-match keywords toward natural, conversational language. Sub-queries generated during fan-out use everyday phrasing rather than rigid keyword syntax, so content built purely around exact-match terms can miss the semantic variations AI systems actually search for.",
      },
      {
        k: 'p',
        text: "Freshness plays a bigger role than many businesses assume, particularly for Perplexity and Google AI Mode. Pages that have not been updated in over a year tend to lose ground to newer competing content answering the same sub-questions.",
      },

      { k: 'h2', text: 'Practical Steps to Optimise for Query Fan-Out' },
      {
        k: 'p',
        text: "Start by mapping the sub-questions behind your main topics rather than relying on a flat list of keywords. Typing your target question into ChatGPT, Perplexity and Google AI Mode and studying which sub-questions and sources appear is a useful way to reverse-engineer what these systems are actually looking for.",
      },
      {
        k: 'p',
        text: "From there, structure content around question-based headings that mirror likely sub-queries, cover the realistic follow-up questions either on the same page or across a connected cluster of pages, and add structured data such as FAQ or HowTo schema to help AI systems map your content to specific questions more accurately.",
      },

      { k: 'h2', text: 'The Bigger Shift Behind This' },
      {
        k: 'p',
        text: "Query fan-out is one of the main reasons Generative Engine Optimisation has become a distinct discipline rather than an extension of traditional SEO. A brand that ranks well for one broad term but has no supporting content around the related sub-topics will increasingly lose visibility to competitors with deeper, more connected coverage, even if that competitor's overall domain authority is lower.",
      },
      {
        k: 'p',
        text: "For Australian businesses, this means the traditional approach of targeting one keyword per page is becoming less effective on its own. The websites earning consistent AI citations tend to be the ones treating a topic as an ecosystem of related questions rather than a single search term to rank for.",
      },
      {
        k: 'p',
        text: "**Want to see how your content holds up under query fan-out?** Our team builds SEO and content strategies around topical depth, mapping the sub-questions your audience is actually asking rather than optimising for a single keyword in isolation. [Get in touch with EG Digital](/contact) and we'll walk you through where the gaps are.",
      },
    ],
  },

  {
    slug: 'are-people-leaving-google-for-ai-what-the-data-shows',
    title: 'Are People Leaving Google for AI? What the Latest Data Actually Shows',
    h1: 'Are People Leaving Google for AI? What the Latest Data Actually Shows',
    excerpt:
      "Every few months a new headline claims Google is losing ground to ChatGPT. The reality, based on the latest independent research, is more nuanced. People are not abandoning Google - they are using Google and AI tools side by side. Here is what Australian businesses need to know for their SEO strategy.",
    category: 'Latest Technologies',
    read: '5 min read',
    date: 'Sep 7, 2026',
    img: '/images/blog/ai-search-vs-google-hero.jpg',
    metaTitle: 'Are Users Leaving Google for AI? What the Data Shows in 2026',
    metaDescription:
      'New research on ChatGPT, AI Mode and Google reveals how search behaviour is actually changing. Here is what Australian businesses need to know for their SEO strategy.',
    body: [
      {
        k: 'p',
        text: "Every few months a new headline claims Google is losing ground to ChatGPT and other AI tools. The reality, based on the latest independent research, is more nuanced than that. People are not abandoning Google. They are using Google and AI tools side by side, and the effect on search behaviour depends heavily on what you actually measure. For Australian businesses relying on organic traffic, understanding this distinction matters more than reacting to a single statistic.",
      },

      { k: 'h2', text: 'The Overlap Number Everyone Quotes' },
      {
        k: 'p',
        text: "A widely shared figure from Similarweb shows that 95 percent of ChatGPT users also use Google, and that this overlap has held steady since 2025 even as visits to AI platforms grew significantly year over year. On the surface, this looks like reassuring news. It suggests AI is being added on top of search rather than replacing it.",
      },
      {
        k: 'p',
        text: "The catch is that this overlap measures whether the same people show up in both audiences during a given period, not how often they search or what they search for. Someone who has shifted most of their research to ChatGPT but still uses Google occasionally for maps or store hours still counts as a Google user. This is a genuinely low bar, and it is one of the reasons the 95 percent figure gets repeated so often without much scrutiny.",
      },

      { k: 'h2', text: 'Same Users, Noticeably Fewer Searches' },
      {
        k: 'p',
        text: "A separate study from Bocconi University tells a more specific story. Researchers compared households that gained access to ChatGPT Search with similar households that had none, using desktop clickstream data. Households with access ran roughly 9.4 percent fewer traditional search queries on average, and that gap widened to 17 percent after 20 weeks of use.",
      },
      {
        k: 'p',
        text: "The drop was not evenly spread. Referrals to academic and reference sites fell sharply, while referrals to marketplaces and entertainment sites barely moved. This pattern is worth paying attention to if your business or content sits in an informational category, since that is where the biggest declines showed up.",
      },

      { k: 'h2', text: 'Clicks Can Fall Even When Search Volume Holds' },
      {
        k: 'p',
        text: "A more recent field experiment offers a third angle. Researchers assigned a group of Chrome users to run all of their searches through Google's AI Mode for a week. Click through to external websites dropped by close to 19 percentage points compared with standard Google search, and clicks to news sites, Reddit and Wikipedia fell noticeably as well.",
      },
      {
        k: 'p',
        text: "This is the piece that matters most for anyone measuring organic performance. A page can hold its ranking, keep appearing in Google's data, and still lose the click, because the answer is increasingly being delivered directly inside the AI generated result rather than requiring a visit to the source page.",
      },

      { k: 'h2', text: 'Why This Matters for Australian Businesses' },
      {
        k: 'p',
        text: "Google itself has said the opposite is true from its side, with executives stating that people who use AI features in Search end up using Search more overall. That may well be accurate at a platform level. It does not change what an individual business sees in its own analytics, where impressions can stay flat while click through rate quietly declines.",
      },
      {
        k: 'p',
        text: "The practical takeaway is not to panic or to assume AI search is replacing Google. It is to stop relying on a single metric to judge visibility. Rankings, impressions, click through rate and branded search volume each tell a different part of the story, and increasingly, some of the value your content generates in an AI answer will never show up as a session in your analytics at all.",
      },

      { k: 'h2', text: 'What to Do About It' },
      {
        k: 'p',
        text: "Rather than chasing every new AI platform individually, focus on the fundamentals that make content easy for both traditional search and AI systems to understand and cite. Clear structure, direct answers early in the page, and well supported claims all help regardless of where the query ends up being answered. This is the same foundation our team focuses on as part of our [SEO services](/services/seo-services), since strong on page fundamentals tend to perform well across both channels rather than requiring a separate strategy for each.",
      },
      {
        k: 'p',
        text: "It is also worth tracking branded search volume alongside organic clicks. If someone asks an AI tool for a recommendation and then searches your brand name on Google, that shows up as a normal organic visit with no obvious link back to the AI interaction. A rise in branded search without a matching rise in generic keyword traffic can be an early signal that AI referrals are contributing more than your standard reports suggest.",
      },

      { k: 'h2', text: 'Final Thoughts' },
      {
        k: 'p',
        text: "The honest answer to whether people are leaving Google for AI is that it depends on what you count. Audiences are not leaving. Query volume is softening in some categories. Clicks can fall even when rankings hold. None of the current research tracks the same individual across Google, AI Mode, ChatGPT and Gemini over time, so treat any single statistic, including the ones in this article, as one piece of a larger and still developing picture.",
      },
      {
        k: 'p',
        text: "**Want a clearer read on how your own site's visibility is trending across search and AI?** [Get in touch with EG Digital](/contact) and we'll walk through what your data is actually showing.",
      },
    ],
  },

  {
    slug: 'black-friday-email-sms-marketing-2026-planning-guide',
    title: 'Black Friday Email and SMS Marketing: Your 2026 Planning Guide',
    h1: 'Black Friday Email and SMS Marketing: Your 2026 Planning Guide',
    excerpt:
      "Black Friday 2026 falls on Friday, 27 November, and it is closer than it feels. The brands that win the sale will be the ones who used the months before to build an engaged list, clean their data and test what their customers actually respond to. Here is what Australian businesses should be doing now.",
    category: 'Latest Technologies',
    read: '5 min read',
    date: 'Sep 6, 2026',
    img: '/images/blog/black-friday-email-sms-hero.jpg',
    metaTitle: 'Black Friday Email & SMS Marketing 2026 Guide | EG Digital',
    metaDescription:
      'Get your Black Friday email and SMS marketing ready early. Build your list, clean your data, test your campaigns and prepare your Australian brand for BFCM 2026.',
    body: [
      {
        k: 'p',
        text: 'Black Friday 2026 falls on Friday, 27 November, and it is closer than it feels. The brands that win the sale will not be the ones sending the most messages or offering the deepest discount. They will be the ones who used the months before to build an engaged list, clean their data and test what their customers actually respond to. This guide breaks down what Australian businesses should be doing now to get their email and SMS marketing ready for peak season.',
      },

      { k: 'h2', text: 'Build Your List Before You Build Your Campaigns' },
      {
        k: 'p',
        text: 'Before deciding what to send, decide who you are sending it to. The audience available to you in November is being built right now. Review your current pop ups and signup forms. If the same generic discount offer has been running all year, test messaging that gives people a reason to subscribe ahead of the sale, such as early access, VIP perks or first notice when the sale goes live.',
      },
      {
        k: 'p',
        text: 'You do not need to reveal your offer yet. The goal is simply to turn people already interested in your brand into subscribers you can keep engaging with between now and November. If SMS is part of your strategy, start growing that list alongside email rather than trying to build it at the last minute.',
      },

      { k: 'h2', text: 'Clean and Segment Your Data' },
      {
        k: 'p',
        text: 'A bigger list is only useful if it is a healthy one. Review bounces, unsubscribes, spam complaints and contacts who have not engaged in a long time, and run a re engagement campaign before peak season rather than sending to everyone by default.',
      },
      {
        k: 'p',
        text: 'Segmentation matters more than list size. A few purposeful segments, such as previous Black Friday buyers, high intent browsers and lapsed customers, will do more for your results than a dozen segments that all receive the same message.',
      },

      { k: 'h2', text: 'Audit Your Automations' },
      {
        k: 'p',
        text: 'Your welcome, cart abandonment, browse abandonment and win back flows keep running during the sale unless you turn them off or update them. Check whether your welcome flow discount still makes sense next to your Black Friday offer, and confirm someone who purchases through early access will not keep receiving emails telling them the sale has not started yet.',
      },
      {
        k: 'p',
        text: "Automated flows carry more weight than most brands expect. Industry data from Omnisend's Australian ecommerce benchmarks shows automated emails generated 32.8 percent of total email revenue while making up just 2.3 percent of total sends in 2025, which makes getting the automation logic right well worth the time.",
      },

      { k: 'h2', text: 'Know the Rules for Australian SMS' },
      {
        k: 'p',
        text: "From 1 July 2026, Australia's SMS Sender ID Register is in effect. If your business sends SMS using a branded name rather than a phone number, that sender ID needs to be registered with the Australian Communications and Media Authority. Unregistered sender IDs are now shown as Unverified, which can reduce trust right when you need it most. Consent also matters. Having a customer's mobile number is not the same as having permission to send marketing SMS, so make sure opt ins are recorded properly if SMS is part of your Black Friday pop ups.",
      },

      { k: 'h2', text: 'Test Before Peak, Not During It' },
      {
        k: 'p',
        text: 'Black Friday should not be the first time you test your approach. Use the months before to learn what your audience responds to, one variable at a time. Test subject lines, offer led versus product led creative, and SMS message length and timing. Judge results by clicks, conversions and revenue per recipient rather than open rate alone, since open rate alone can be misleading.',
      },

      { k: 'h2', text: 'Plan Email and SMS as One Journey' },
      {
        k: 'p',
        text: 'Email and SMS should not run as two separate calendars, and they should not repeat each other either. Email gives you room for detail, imagery and product recommendations. SMS is best used for genuine urgency and time sensitive moments, such as early access going live or a closing deadline. If a customer gets an SMS five minutes after an identical email, the second message is not adding value.',
      },
      {
        k: 'p',
        text: 'A simple journey could look like this: a teaser email to build anticipation, a VIP email for early access, an early access SMS once it goes live, a launch email when the sale opens, a behavioural follow up based on what someone has browsed, and an urgency SMS reserved for a real deadline.',
      },

      { k: 'h2', text: 'Your 2026 Timeline' },
      {
        k: 'ul',
        items: [
          '**August:** build and clean your list, test signup offers and confirm your SMS sender ID registration.',
          '**September:** build the segments you will actually use and audit existing automations.',
          '**October:** build the full campaign journey and test links, forms and send logic.',
          '**November:** launch and adjust based on real customer behaviour as the sale runs.',
          '**December:** move new customers into the right post purchase journey instead of letting the relationship go quiet.',
        ],
      },

      { k: 'h2', text: 'Frequently Asked Questions' },
      {
        k: 'faq',
        items: [
          {
            q: 'When should we start Black Friday planning?',
            a: 'Now, if you want your list and data ready in time. Campaigns themselves can be built in October, but the audience you send them to needs to be grown and cleaned in the months before. Brands that start in November are stuck working with whatever list they already have.',
          },
          {
            q: 'Should we send more emails than usual during Black Friday?',
            a: 'Slightly more frequency is normal during peak season, but it should be based on engagement, not a fixed schedule. Prioritise subscribers who already open and click, and be cautious about suddenly emailing large groups of inactive contacts, since that can hurt deliverability right when it matters most.',
          },
          {
            q: 'Do we need SMS as well as email?',
            a: 'Not every business needs SMS, but it works well for genuine urgency, such as early access going live or a sale closing soon. If you do use SMS, make sure consent is recorded properly and, from 1 July 2026, that any branded sender ID is registered with the ACMA.',
          },
          {
            q: 'What should we measure after the sale?',
            a: 'Look beyond open rate. Clicks, conversion rate, revenue per recipient and unsubscribe behaviour give a much clearer picture of what worked. Compare automation performance against campaign performance too, since automated flows often carry a disproportionate share of revenue.',
          },
        ],
      },

      { k: 'h2', text: 'How EG Digital Can Help' },
      {
        k: 'p',
        text: 'Getting Black Friday right takes more than a campaign put together in November. Our team helps Australian brands with [email marketing strategy](/services/email-marketing), list growth and campaign planning ahead of peak season, so your data, automations and messaging are ready well before the sale starts. If you want a second set of eyes on your current setup, [get in touch with EG Digital](/contact) and we can walk through what is worth fixing first.',
      },
    ],
  },

  {
    slug: 'more-leads-or-better-leads-google-ads',
    title: 'More Leads or Better Leads? Why Your Google Ads Account Needs to Pick One',
    h1: 'More Leads or Better Leads? Why Your Google Ads Account Needs to Pick One',
    excerpt:
      "\"We need more leads.\" A few weeks later: \"The leads we're getting aren't good enough.\" Sound familiar? Lead volume and lead quality are not competing strategies, they are two different objectives, and each one needs a different setup in your Google Ads account to actually work.",
    category: 'Latest Technologies',
    read: '4 min read',
    date: 'Aug 30, 2026',
    img: '/images/blog/leads-volume-quality-hero.jpg',
    metaTitle: 'More Leads or Better Leads? What Your Ads Should Target',
    metaDescription:
      'Chasing more leads and better leads at the same time rarely works. Learn how to tell Google Ads which one your business actually needs right now.',
    body: [
      {
        k: 'p',
        text: "\"We need more leads.\" A few weeks later: \"The leads we're getting aren't good enough.\" Sound familiar?",
      },
      {
        k: 'p',
        text: "It is one of the most common cycles in paid advertising, and according to Search Engine Land, the root problem is usually a false assumption: that lead volume and lead quality are competing strategies. They are not. They are two different objectives, and each one needs a different setup in your Google Ads or Meta account to actually work.",
      },

      { k: 'h2', text: 'Start With the Business Goal, Not the Ad Metric' },
      {
        k: 'p',
        text: "The first mistake most businesses make is jumping straight to cost per lead. If the real goal is more revenue, chasing a lower cost per lead can actually make things worse. A thirty dollar lead that never buys anything is not better than a hundred dollar lead that closes reliably every time. Before touching any campaign settings, it is worth asking what the business genuinely needs right now: more people entering the funnel, or a better quality of person entering it.",
      },

      { k: 'h2', text: 'When Volume Is Actually the Right Call' },
      {
        k: 'p',
        text: "Chasing more leads makes sense when your sales team has spare capacity, you are launching in a new market and need to build demand, or you simply do not have enough data yet to know what a good lead even looks like. In this case the goal is to remove friction. That can mean broadening keyword match types, testing new geographic markets, shortening lead forms, cutting unnecessary qualifying questions, or expanding into Display, YouTube and other Google inventory beyond plain Search.",
      },

      { k: 'h2', text: 'When Quality Is What the Business Actually Needs' },
      {
        k: 'p',
        text: "Quality becomes the priority when sales is drowning in poor fit enquiries, close rates are sliding, or customer acquisition costs keep climbing even though lead volume looks healthy. The fix here is not tighter targeting alone, it is giving the ad platform better information. Google Ads supports optimising toward qualified lead and converted lead goals rather than the raw form fill, and Meta's Conversions API works the same way, feeding real CRM outcomes back into the algorithm so it learns what a genuinely good lead looks like, not just who filled in a form.",
      },
      {
        k: 'img',
        id: '/images/blog/leads-business-goal-target.jpg',
        alt: 'A dart landing in the centre bullseye of a dartboard',
        caption: 'Quality is about hitting the right target: telling the ad platform what a genuinely good lead looks like, not just who filled in a form.',
      },

      { k: 'h2', text: 'The Form Fill Was Never the Real Goal' },
      {
        k: 'p',
        text: "Here is the part most accounts get wrong. If Google only ever sees a form submission, it has no way of knowing that only a small fraction of those submissions turned into paying customers. The platform is optimising toward an incomplete definition of success. Closing that gap means feeding deeper funnel data back in, whether that is a qualified lead, a sales opportunity, or an actual closed deal, so the algorithm is chasing the outcome that actually matters rather than the easiest metric to collect.",
      },

      { k: 'h2', text: 'Even Your Ad Creative Can Filter Lead Quality' },
      {
        k: 'p',
        text: "It is easy to overlook, but the wording of an ad does real work here too. A generic \"get started today\" pulls in a broad audience, some of whom were never a genuine fit. Being specific about who the offer is for, what problem it solves, and what the next step actually involves naturally filters out people who were unlikely to convert anyway. Click through rate might dip slightly, and that is fine if the people who remain are far more likely to become customers.",
      },
      {
        k: 'img',
        id: '/images/blog/leads-ad-creative-copy.jpg',
        alt: 'A person writing ad copy on a laptop at a desk',
        caption: 'The wording of an ad does real work: being specific about who the offer is for naturally filters out people who were never a genuine fit.',
      },

      { k: 'h2', text: 'The Metric That Looks Good in Isolation Is the Dangerous One' },
      {
        k: 'p',
        text: "A twenty five dollar cost per lead looks fantastic until those leads convert at one percent. A hundred dollar cost per lead looks expensive until those leads convert at twenty percent. This is exactly why cost per lead should never be judged on its own. Tracking it alongside qualified lead rate, cost per qualified lead, and eventual return on ad spend gives a far more honest picture of whether a campaign is actually working.",
      },
      {
        k: 'img',
        id: '/images/blog/leads-cost-per-lead-metrics.jpg',
        alt: 'A Google Ads dashboard showing CTR, cost per conversion and quality score metrics',
        caption: 'Cost per lead should never be judged on its own - track it alongside qualified lead rate, cost per qualified lead and return on ad spend.',
      },

      { k: 'h2', text: 'What This Means for Your Own Campaigns' },
      {
        k: 'p',
        text: "If your business genuinely needs both more leads and better ones, the answer is not picking a side, it is setting a quality floor and a volume ceiling, then scaling within that boundary while watching what happens to lead quality as you go. This is exactly the kind of setup we build into [Google Ads management](/services/google-ads-management) for clients, connecting real business outcomes back into the campaign rather than optimising blindly toward form fills. [Get in touch with EG Digital](/contact) if you are not sure whether your current campaigns are actually chasing the right goal.",
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
    slug: 'customers-building-confidence-not-following-funnel',
    title: "Your Customers Aren't Following a Funnel, They're Building Confidence",
    h1: "Your Customers Aren't Following a Funnel, They're Building Confidence",
    excerpt:
      "New research shows people don't move neatly through a marketing funnel. They bounce between search engines, AI tools, communities and creators, gathering little bits of reassurance until they feel confident enough to buy. Here's what that means for how you plan marketing.",
    category: 'Latest Technologies',
    read: '5 min read',
    date: 'Aug 17, 2026',
    img: '/images/blog/confidence-search-hero.jpg',
    metaTitle: "Customers Build Confidence, They Don't Follow a Funnel | EG Digital",
    metaDescription:
      "New research shows customers gather reassurance across search, AI tools and communities before buying, not a linear funnel. Here's how to plan marketing around it.",
    body: [
      {
        k: 'p',
        text: "New research from Reflect Digital, covered by Search Engine Land, makes a point that's worth sitting with if you run any kind of digital marketing. Every week there's a new headline about search changing. Google losing ground, ChatGPT growing, Reddit becoming a place people trust more, TikTok pulling in younger audiences. It's easy to read all that and think search is just getting messier and harder to plan for. The research suggests something different is actually going on, and it's less about which platform wins and more about how people build confidence before they act.",
      },

      { k: 'h2', text: 'Why the Data Seems to Contradict Itself' },
      {
        k: 'p',
        text: "Here's the confusing part on the surface. The study found that 56% of people now regularly use AI search tools, yet 57% still fall into what the researchers call the Traditional Searcher category. Those numbers only look contradictory until you realise people aren't picking one platform and sticking with it. They're moving between several, gathering little bits of reassurance from each one before they feel ready to make a decision. The fastest growing group in the research is what they call the multi platform searcher, someone who naturally bounces between search engines, AI tools, online communities, creators and brand websites before buying anything.",
      },

      { k: 'h2', text: "People Don't Actually Move Through a Funnel" },
      {
        k: 'p',
        text: "Marketers have spent years mapping neat customer journeys, awareness, consideration, purchase. In reality, nobody sits there thinking now I'm in the consideration stage. People just keep resolving little bits of doubt until they feel confident enough to act. Every website visit, video watched, or forum post read is closing a different gap in their confidence, not ticking a box on a funnel diagram.",
      },

      { k: 'h2', text: 'Four Reasons People Actually Search' },
      {
        k: 'p',
        text: "The research points to four consistent psychological reasons behind search behaviour, and they've probably always existed, AI just changed which platforms satisfy them.",
      },
      {
        k: 'ul',
        items: [
          '**Fact finding** - wanting accurate, trustworthy information.',
          '**Crowdsourcing** - wanting to know what people like them actually think.',
          '**Taste tuning** - figuring out whether something genuinely feels right for them.',
          '**Autopilot** - just wanting help getting something done quickly.',
        ],
      },

      { k: 'h2', text: 'Different Platforms Are Getting Better at Different Jobs' },
      {
        k: 'p',
        text: "YouTube isn't popular just because people enjoy watching videos, watching something removes a kind of doubt that text alone often can't. Reddit isn't valuable simply because it's another place to search, it works because communities offer reassurance through other people's real experiences. AI tools are good at quickly helping someone understand a topic. Google still plays a big role in double checking information. Brand websites reassure people they're buying from a legitimate, trustworthy business.",
      },
      {
        k: 'p',
        text: "Each platform is quietly becoming the go to place for a specific kind of reassurance, not just another channel competing for the same click.",
      },
      {
        k: 'img',
        id: '/images/blog/confidence-search-platforms.jpg',
        alt: 'A smartphone home screen showing a folder of social and video apps including YouTube, Instagram, Facebook and X',
        caption: 'Each platform is quietly becoming the go-to place for a specific kind of reassurance, not just another channel chasing the same click.',
      },

      { k: 'h2', text: 'What This Means for How You Plan Marketing' },
      {
        k: 'p',
        text: "Most marketing teams are still organised around channels, SEO, paid search, social, PR, content, each running as its own lane. Customers don't think in those terms at all. They move between whatever builds their confidence until they're ready to buy. The real question isn't which channel deserves the biggest budget, it's which gaps in confidence your audience still has, and whether your marketing is actually helping close them.",
      },
      {
        k: 'img',
        id: '/images/blog/confidence-search-marketing-planning.jpg',
        alt: 'A marketing team gathered around a strategy session discussing how they win customers',
        caption: "The real question isn't which channel gets the biggest budget, it's which confidence gaps your audience still has.",
      },

      { k: 'h2', text: 'A Simple Way to Think It Through' },
      {
        k: 'p',
        text: "Start by asking what confidence your audience actually needs before they'll buy. A first time customer needs different reassurance than someone who's bought from you before, and a big B2B purchase needs a lot more proof than a quick, low cost order.",
      },
      {
        k: 'p',
        text: "Next, look at what you already have that builds trust, reviews, case studies, original research, expert opinions, product demos, industry awards, and see which confidence gap each one is actually answering.",
      },
      {
        k: 'p',
        text: "Then think about where people will naturally come across that proof. The exact same review might reach someone through a Google search, an AI generated answer, your own site, or a direct visit to a review platform. The proof stays the same, it's just discovered in different places.",
      },

      { k: 'h2', text: "Some of This Won't Show Up in Your Analytics" },
      {
        k: 'p',
        text: "This is the part that's genuinely tricky. Someone might read a Reddit thread about your industry, watch a YouTube comparison, or ask an AI tool to compare suppliers, all before they ever land on your site or convert. None of that shows up neatly in a dashboard, but it still shapes the decision. It means not every marketing activity should be judged purely on clicks and conversions. Some content exists to drive an obvious action, other content exists purely to chip away at uncertainty, and both genuinely contribute to growth even if only one of them is easy to measure.",
      },
      {
        k: 'img',
        id: '/images/blog/confidence-search-analytics.jpg',
        alt: 'An analytics dashboard showing sessions, bounce rate and engagement trends over time',
        caption: 'A lot of confidence gets built off-platform, in threads, videos and AI answers that never show up cleanly in a dashboard.',
      },

      { k: 'h2', text: 'How We Approach This at EG Digital' },
      {
        k: 'p',
        text: "This is a big part of why we don't treat SEO and paid advertising as separate boxes to tick. If your customers are genuinely assembling confidence from multiple places before they buy, your business needs to show up credibly in more than one of them at once. Our [Google Ads management](/services/google-ads-management) is built to work alongside [organic strategy](/services/seo-services) for exactly this reason, so you're building trust across the places your customers are actually looking, not just the one channel that's easiest to report on.",
      },
      {
        k: 'p',
        text: "**Want help figuring out where your customers' confidence gaps actually are?** [Get in touch with EG Digital](/contact) and we'll walk you through it.",
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

  // ── Google vs Social vs AI discovery article ────────────────────────────────
  {
    slug: 'google-vs-social-media-vs-ai-brand-discovery-australia',
    title: 'Google vs Social Media vs AI: Where Are Australians Actually Discovering Brands?',
    h1: 'Google vs Social Media vs AI: Where Are Australians Actually Discovering Brands?',
    excerpt:
      "Google, social media, or AI - where do Australians really discover brands in 2026? The honest answer isn't a competition, it's a messy relay race. Here's how search, social and AI hand off to each other, and why brands now need to show up across all three.",
    category: 'Latest Technologies',
    read: '6 min read',
    date: 'Aug 27, 2026',
    img: '/images/blog/brand-discovery-channels.png',
    metaTitle: 'Google vs Social Media vs AI: Where Aussies Find Brands',
    metaDescription:
      'Discover where Australians really find brands in 2026 - Google, social media, or AI. See the trends and how EG Digital can boost your visibility.',
    body: [
      {
        k: 'p',
        text: "Picture this. You're scrolling through your phone late at night, half-watching a video, when a product flashes across the screen. Ten minutes later, you're not on that app anymore. You're on Google, typing the brand name, checking reviews, maybe even asking an AI chatbot if it's \"worth it.\" So... where did you actually discover that brand? Was it the app you were scrolling on? Or the search engine that closed the deal?",
      },
      {
        k: 'p',
        text: "This is the exact question keeping Australian marketers up at night in 2026. For years, the answer was simple: Google. Type a question, get ten blue links, click one, done. But that world has quietly cracked open. Social media apps have turned into search engines. AI chatbots are now a normal stop on the shopping journey. And somehow, all three are fighting for the same moment - the moment you decide a brand exists and matters to you.",
      },
      {
        k: 'p',
        text: "This shift is exactly why digital marketing in Australia looks so different today than it did even two years ago. Businesses that once relied purely on traditional [SEO services](/services/seo-services) are now having to think about search engine optimization, social media marketing, and AI visibility all at once - not as separate strategies, but as one connected system.",
      },
      {
        k: 'p',
        text: "So let's settle it. Where are Australians really discovering brands right now: Google, social media, or AI? The honest answer might surprise you, because it's not really a competition anymore. It's a messy, overlapping relay race - and understanding the handoffs is exactly what separates brands that grow from brands that quietly fade into the scroll.",
      },

      { k: 'h2', text: 'Google Still Wins the Popularity Contest - Just Not by as Much' },
      {
        k: 'p',
        text: "Let's start with the obvious heavyweight. Google still holds a massive grip on Australian search, sitting somewhere around 88 to 91 percent of the search engine market. That's still enormous. If a brand is invisible on Google, it's invisible to most of the country, full stop.",
      },
      {
        k: 'p',
        text: "But here's the twist: the way people use Google has changed underneath everyone's feet. A big chunk of Google searches today never end in a click at all. AI-generated summaries now appear on roughly half of tracked searches, answering the question right there on the results page. People get their answer and move on - no website visit, no \"discovery\" in the traditional sense. Google is still the finish line for a lot of purchase decisions, but it's increasingly not where the story begins anymore.",
      },
      {
        k: 'p',
        text: "Roughly a third of Australians say they discover brands directly through search, which is still the single biggest slice of the pie. But notice that word: \"slice.\" It's no longer the whole pie. Not even close.",
      },
      {
        k: 'p',
        text: "This is also why search engine optimization on its own isn't enough anymore. Smart brands are now investing in AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) alongside classic SEO - making sure their content is structured well enough to be picked up not just by Google's rankings, but by the AI summaries sitting on top of them.",
      },

      { k: 'h2', text: 'Social Media Has Quietly Become a Search Engine' },
      {
        k: 'p',
        text: "Here's where it gets interesting. If you asked someone in 2015 whether they'd search for a product on Instagram or TikTok, they'd have laughed. In 2026, it's just normal behavior.",
      },
      {
        k: 'p',
        text: "Around six in ten Australians now use [social media](https://learn.meltwater.com/apac-en-report-2026_australia_digital_report_Download-Report.html) every month specifically to research brands. Younger Australians have gone even further - many Gen Z shoppers now say social platforms are their first stop, ahead of Google entirely. TikTok in particular is treated less like an entertainment app and more like a genuine search bar, with users typing product questions directly into it the same way their parents type into Google.",
      },
      {
        k: 'p',
        text: "And the habit doesn't stop at browsing. A striking number of Australians who see a product on social media then go and search for it on Google to double-check it's legitimate before buying. In other words, social media is often where the spark happens - the \"wait, what is that?\" moment - while Google becomes the verification step right after.",
      },
      {
        k: 'img',
        id: 'photo-1611926653458-09294b3142bf',
        alt: 'A person browsing social media apps on a smartphone',
        caption: 'Social platforms like TikTok, Instagram and Reddit are now genuine search bars - often where brand discovery actually starts.',
      },
      {
        k: 'p',
        text: "This is exactly why [social media marketing](/services/social-media-marketing) in Australia has grown from an afterthought into a core part of any serious online marketing strategy. Platforms like Reddit, Instagram, and TikTok have also become places where people go to read honest opinions before trusting a brand, almost like a modern word-of-mouth network. People don't just want to see a product anymore - they want to see real humans reacting to it, unfiltered, before they believe the hype. Interestingly, as more feeds fill up with obviously AI-made content, Australians are pushing back and gravitating toward raw, human, behind-the-scenes posts instead. Authenticity has become the new currency of discovery.",
      },

      { k: 'h2', text: "AI Is the New Guest at the Table - And It's Growing Fast" },
      {
        k: 'p',
        text: "Now for the newest player. Roughly three in ten Australians use AI tools like ChatGPT on a monthly basis, and close to half say they've used generative AI at some point in the past year. That's not a niche habit anymore - that's a real, measurable slice of how people explore the internet.",
      },
      {
        k: 'p',
        text: "What's fascinating is how AI tools are being used differently than Google or [social media](https://learn.meltwater.com/apac-en-report-2026_australia_digital_report_Download-Report.html). People aren't necessarily discovering brand new brands through a chatbot the way they'd stumble on one through a video. Instead, AI is being used more like a smart, slightly skeptical friend - someone you ask to compare two products, summarize reviews, or confirm whether a brand's claims actually hold up. It's a filtering tool as much as a discovery tool.",
      },
      {
        k: 'p',
        text: "That said, trust is still catching up to usage. Australians consistently say they trust a well-known search engine noticeably more than they trust AI chatbots or social platforms when it comes to serious purchase decisions - by a significant margin. So while AI is absolutely part of the journey now, it hasn't replaced the credibility that Google and, to a lesser extent, established brand websites still carry.",
      },

      { k: 'h2', text: 'So... Who Actually Wins?' },
      {
        k: 'p',
        text: "Here's the real, slightly unsatisfying truth: none of them win alone anymore. The Australian brand discovery journey in 2026 looks less like a straight line and more like a triangle, with people bouncing between all three constantly.",
      },
      {
        k: 'p',
        text: "A typical path might look like this: someone sees a product on TikTok or Instagram (the spark), searches it on Google to check reviews and pricing (the verification), and maybe asks an AI tool to compare it against a competitor (the sense-check) all before ever visiting the brand's actual website. Miss any one of those three touchpoints, and the whole chain can break.",
      },
      {
        k: 'p',
        text: "For everyday Australians, this isn't something to overthink. It just means trusting your instincts a little more: if something looks too polished or too perfect on social media, it's completely normal and smart to double-check it elsewhere before buying. For brands, the lesson is even simpler: showing up in only one of these three places is no longer enough. The brands winning attention in Australia right now are the ones treating Google, [social media](https://learn.meltwater.com/apac-en-report-2026_australia_digital_report_Download-Report.html), and AI not as competitors, but as three doors into the exact same house.",
      },
      {
        k: 'p',
        text: "The real question isn't \"Google vs social vs AI\" anymore. It's whether a brand can be found, trusted, and confirmed across all three because today's Australian shopper is checking every single one before they believe you're worth their money.",
      },

      { k: 'h2', text: 'Need Help Being Found Everywhere That Matters?' },
      {
        k: 'p',
        text: "This is precisely the gap EG Digital helps Australian businesses close. As an SEO and digital marketing agency, EG Digital focuses on making sure brands aren't just ranking on Google, but are genuinely visible across the full discovery journey - from [search engine optimization](/services/seo-services) and [content strategy](/services/content-creation) to keeping pace with how AI-driven search is reshaping online visibility. If your brand is only winning in one of these three arenas, you're leaving the other two on the table. That's where a dedicated SEO services partner like EG Digital comes in, turning scattered visibility into a consistent, connected presence across the channels Australians actually use to discover and trust brands today.",
      },
      {
        k: 'p',
        text: "**Want to be found everywhere your customers are actually looking?** [Get in touch with EG Digital](/contact) and we'll map out where your brand shows up across search, social and AI.",
      },
    ],
  },

  // ── Google search operators guide ───────────────────────────────────────────
  {
    slug: 'google-search-operators-seo-tricks',
    title: 'Google Search Operators: Simple SEO Tricks Explained',
    h1: 'Google Search Operators: Simple SEO Tricks Explained',
    excerpt:
      "Google lets you search in much smarter ways using search operators - simple commands like site: and intitle: that save a surprising amount of time on SEO research, competitor checks and content ideas.",
    category: 'Latest Technologies',
    read: '4 min read',
    date: 'Aug 13, 2026',
    img: '/images/blog/google-search-operators-hero.jpg',
    metaTitle: 'Google Search Operators: Simple SEO Tricks Explained | EG Digital',
    metaDescription:
      'Learn the Google search operators worth knowing, from site: to intitle:, and how to use them for easy SEO research, competitor checks, and content ideas.',
    featured: true,
    body: [
      {
        k: 'p',
        text: "Most people use Google the same simple way every single day. Type a question, hit enter, scroll through the results. But Google actually lets you search in much smarter ways using something called search operators. These are just special commands you type straight into the search box, and they help you find exactly what you're looking for instead of digging through pages of results that don't quite answer your question.",
      },
      {
        k: 'p',
        text: "A really detailed breakdown of these was put together by Search Engine Land, and it's worth knowing the basics even if you're not an SEO professional. Whether you're checking how your own website looks in Google, researching competitors, or just trying to find something specific online, these little tricks save a genuinely surprising amount of time once you get used to them.",
      },

      { k: 'h2', text: "The Operators You'll Actually Use All the Time" },
      {
        k: 'p',
        text: "There are quite a few of these commands floating around, but a small handful cover most of what a business owner or marketer would ever realistically need. Here's how each one works and why it's useful.",
      },
      {
        k: 'ul',
        items: [
          "**site:** This one shows you only results from a specific website. Type site:egdigital.com.au and Google will only show pages from our site. It's a quick way to see how many of your own pages are actually showing up in Google, or to check what a competitor has published on their site without having to click through their whole menu.",
          "**intitle:** This finds pages that have a specific word in the page title. It's handy for seeing how competitive a topic is based on how many results come back, or for spotting websites that might be open to guest posts or collaborations, since a lot of sites put phrases like write for us right in their page titles.",
          "**\"exact phrase\"** Putting quotation marks around a phrase tells Google to only show pages with that exact wording. This is genuinely useful if you want to check whether your website content has been copied somewhere else. Just paste a sentence from your own site in quotes and see what comes up. It's also handy for tracking down a quote or line you half remember but can't place.",
          "**filetype:** This limits results to a certain type of file, like PDF or Word documents. It's a nice way to find in depth guides, reports or presentations on a topic instead of just blog posts, and it's a favourite trick for finding information that other websites on the topic haven't already covered.",
          "**minus sign** Adding a minus sign in front of a word removes results with that word in them. Searching for jaguar speed minus car will give you results about the animal rather than the car brand. It's a simple fix whenever your search keeps returning results about the wrong meaning of a word.",
          "**inurl:** This finds pages that have a certain word in the actual web address, not just the title or content. It's useful for spotting patterns, like finding every blog tag page on a site, or locating pages built around a specific topic such as inurl:guest post to find sites open to contributed articles.",
          "**related:** This shows you websites Google considers similar to a site you already know, for example related:egdigital.com.au. It only works well on larger, well known websites, but it's a genuinely interesting way to see who Google thinks your digital competitors actually are, which isn't always the same as who you'd assume.",
          "**OR** Typing OR in capitals between two words tells Google to show results matching either term, not just both together. It's useful when you're researching a topic that goes by more than one name, like seo audit OR site audit, so you don't miss relevant results just because of wording.",
        ],
      },

      {
        k: 'img',
        id: '/images/blog/google-search-operators-typing.jpg',
        alt: 'A person typing a search query into a laptop to run Google search operators',
        caption: 'A handful of simple commands typed straight into the search box cover most of the research a business owner ever needs.',
      },

      { k: 'h2', text: 'Why This Actually Matters for Your Business' },
      {
        k: 'p',
        text: "These commands aren't just fun tricks, they're genuinely practical for anyone running a website or thinking seriously about their online presence, even without any technical background.",
      },
      {
        k: 'p',
        text: "You can use the site: command to quickly check whether Google has actually indexed all your important pages. If a page you expect to see doesn't show up, that's usually a sign something needs fixing before it costs you traffic.",
      },
      {
        k: 'p',
        text: "You can use exact phrase searches to protect your content and catch anyone who has copied it word for word, which happens more often than most business owners realise.",
      },
      {
        k: 'p',
        text: "You can use intitle: and inurl: together to get a realistic feel for how many other businesses are chasing the same keywords you're targeting, which helps set expectations before you invest heavily in a content push.",
      },
      {
        k: 'p',
        text: "And you can use related: to sense check who Google actually sees as your competition online, which is sometimes a genuine surprise compared to who you compete with in the real world.",
      },

      {
        k: 'img',
        id: '/images/blog/google-search-operators-research.jpg',
        alt: 'Someone researching competitors and keywords on a laptop at a tidy desk',
        caption: 'Used together, these operators give you a fast, low-cost read on how your site and your competitors show up in search.',
      },

      { k: 'h2', text: 'A Word of Caution' },
      {
        k: 'p',
        text: "Not every command that circulates online still works. Google quietly retires some of them over time, so it's worth double checking a command still functions before building a whole research process around it. If a search operator suddenly returns strange or unrelated results, that's often a sign it's been discontinued rather than a mistake on your end. It's also worth remembering these are aimed at getting a rough, directional sense of things, not perfectly exact data, since Google only samples a portion of its index for some of these commands.",
      },

      { k: 'h2', text: 'Want This Done Without the Trial and Error?' },
      {
        k: 'p',
        text: "Search operators are a great starting point, but running a proper [SEO audit](/services/seo-services) involves a lot more than a handful of clever Google searches. Our team handles this kind of research every day as part of our [Google Ads management](/services/google-ads-management) and broader digital strategy work, so you get the insights without having to learn a whole new set of commands and second guess whether they still work.",
      },
      {
        k: 'p',
        text: "**Want a proper look at how your site is actually performing in search?** [Get in touch with EG Digital](/contact) and we'll walk you through it.",
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
        alt: 'Google Search open on a laptop screen - EG Digital',
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
    modified: 'Oct 8, 2026',
    img: 'photo-1604357209793-fca5dca89f97',
    schemaImage: 'photo-1512428559087-560fa5ceab42',
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

// Newest-first ordering by the human-readable `date` (e.g. "Aug 17, 2026").
const byDateDesc = (a: BlogPost, b: BlogPost) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()

// Blog listing sources (newsroom posts are excluded from the Blog entirely).
const BLOG_POSTS = POSTS.filter(p => !p.newsroom).sort(byDateDesc)
export const FEATURED = BLOG_POSTS.find(p => p.featured) ?? BLOG_POSTS[0]
export const GRID_POSTS = BLOG_POSTS.filter(p => p !== FEATURED)

// Newsroom listing source (newest first).
export const NEWSROOM_POSTS = POSTS.filter(p => p.newsroom).sort(byDateDesc)
