// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA - single source of truth for the /about/faq page and its FAQPage
// JSON-LD. The copy here is deliberately structured to match how Google's AI
// Overview answers these questions, so each answer stands on its own and has the
// best chance of being pulled directly into an AI-generated result.
//
// Adding or editing a question here updates both the on-page accordion and the
// structured data baked in at build time (prerender.js) - keep them in sync by
// only ever editing this one file.
// ─────────────────────────────────────────────────────────────────────────────

export type FaqGroup = {
  id: string
  label: string
  items: { q: string; a: string }[]
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'services',
    label: 'Services & Strategy',
    items: [
      {
        q: 'What services does EG Digital offer?',
        a: 'EG Digital offers Google Ads management, SEO, Facebook Ads, graphic design, and website, app, and SaaS development. Every service is backed by cloud, security, and managed support, so clients get one accountable partner for both building their digital presence and growing it afterwards.',
      },
      {
        q: 'Where is EG Digital based?',
        a: 'EG Digital is a Melbourne-based studio at 71 Gipps Street, Collingwood, working with ambitious businesses right across Australia.',
      },
      {
        q: 'Should I hire a local Australian agency or an overseas one?',
        a: 'A local Australian agency understands Australian consumer behaviour, local search trends, and regional targeting far better than an overseas provider. EG Digital is based in Australia, so campaigns and projects are built around how Australian customers actually search and buy, not a generic global template.',
      },
      {
        q: 'Are you a certified Microsoft partner?',
        a: 'Yes. We deliver Dynamics 365, Power Platform and Azure as a certified partner, alongside our own custom development practice.',
      },
      {
        q: 'How long until I see results?',
        a: 'Google Ads can generate traffic within days of launch, while SEO typically takes 3 to 6 months to show measurable ranking and traffic growth. Most businesses run both together, using paid ads for immediate visibility while SEO builds long term, sustainable organic growth in the background.',
      },
    ],
  },
  {
    id: 'costs',
    label: 'Costs & Contracts',
    items: [
      {
        q: 'How much does EG Digital charge?',
        a: 'Pricing varies by service. Ongoing marketing such as Google Ads or SEO runs on a transparent monthly retainer, while website and app builds are quoted to scope. We quote what a project genuinely costs, with no lock-in and no vague estimates.',
      },
      {
        q: 'Does EG Digital require lock in contracts?',
        a: 'No. EG Digital does not require lock in contracts for its marketing services. Clients are not tied to a fixed minimum term, which keeps the relationship accountable to results rather than a signed commitment period, and clients can adjust or exit without being locked into a long term.',
      },
      {
        q: 'Who owns the campaign assets and accounts?',
        a: 'You do. Clients retain full ownership of their Google Ads accounts, Meta ad accounts, website admin access, and any creative assets produced. If you ever end the engagement, your campaigns, historical data, and accounts stay fully in your control.',
      },
      {
        q: 'Do you offer ongoing support?',
        a: 'Yes. Managed support, cloud maintenance and server maintenance plans keep what we build running at peak performance after launch.',
      },
    ],
  },
  {
    id: 'working-together',
    label: 'Working Together',
    items: [
      {
        q: 'What do I need to provide to get started?',
        a: 'You will need clear business goals, brand guidelines if you have them, access to any existing ad or analytics accounts, and a single point of contact for timely feedback. This is usually gathered during an initial consultation before any campaign work begins.',
      },
      {
        q: 'How do I measure success?',
        a: 'Success is tracked through key performance indicators such as return on ad spend, cost per lead, and organic traffic and ranking growth. Reporting is tied to leads and revenue rather than vanity metrics like clicks or impressions alone.',
      },
      {
        q: 'How involved will we be?',
        a: 'As involved as you want. You get a single point of contact, weekly check-ins and a shared board, with no chasing and no black box.',
      },
      {
        q: 'Do you sign NDAs?',
        a: 'Always, when needed. Your ideas, data and reputation are treated as our own from the first conversation.',
      },
    ],
  },
]

// Builds the FAQPage JSON-LD for the /about/faq route only. Returns null for any
// other route so callers (prerender + runtime hook) can no-op safely, mirroring
// buildServiceJsonLd's contract.
export function buildFaqJsonLd(route: string): object[] | null {
  if (route !== '/about/faq') return null

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_GROUPS.flatMap(g =>
        g.items.map(it => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      ),
    },
  ]
}
