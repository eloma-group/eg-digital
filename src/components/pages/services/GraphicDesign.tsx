import {
  Target, Users, Layers, Unlock, PenTool, Palette, Building2,
  Monitor, MousePointer2, Share2, Printer, BookOpen, Store, Rocket,
  ShoppingBag, TrendingUp,
} from 'lucide-react'
import { AppServicePage } from './_appServiceKit'
import type { ServicePageData } from './_appServiceKit'

const DATA: ServicePageData = {
  route: '/services/graphic-design',
  metaTitle: 'Graphic Design Services in Australia | EG Digital',
  metaDescription:
    'Full-service graphic design company in Australia. Logo design, brand identity, UI/UX, social, brochure & book cover design from a Melbourne team. Get a free design audit.',
  eyebrow: 'Graphic Design Company in Australia',
  h1: 'Graphic Design Services in Australia',
  lede: <>Design that does a <span>job</span>, not just looks nice.</>,
  primaryCta: 'Get a free design audit',
  heroImg: { slug: 'graphic-design', alt: 'Illustration of a designer building a logo, brand identity and visual assets' },
  heroBadge: { k: 'Design that', v: 'Does a job' },
  signals: [
    { v: 'Tied to your business', l: 'design that makes you recognisable, not just pretty' },
    { v: 'One studio', l: 'brand, digital and print from designers who work together' },
    { v: 'No lock-in', l: 'no 12-month contracts, and you own the source files' },
  ],
  intro: [
    'Most design agencies sell you a pretty picture. Pretty is not the point. What the design gets done is.',
    <><strong>EG Digital is a Melbourne-based graphic design company</strong> that treats design as a business tool, not decoration. We handle the logo, the brand identity, the digital and print assets, and the UI/UX behind your site and product, and we point every piece at something you can use: a brand people recognise, assets that sell, and interfaces that convert. When a design wins an award and does nothing for the business, we do not call that a win. We build design that works and looks the part while doing it.</>,
    'We are part of Eloma Group, which means your design sits next to web development, SEO, PPC, social media, and content under one roof. That matters more than it sounds. Your logo, the website it lives on, the ads that carry it, and the social posts that repeat it are usually made by four different suppliers who never talk to each other, which is why so many brands look like a different company on every channel. When one team handles all of it, your design stays consistent everywhere it appears.',
    'One partner. One team that builds the brand, designs the assets, and keeps the look consistent across everything you put out.',
    'Get a free design and brand audit. No lock-in, just an honest look at how your brand and your assets are working.',
  ],
  whyHeading: <>Why work with EG Digital as your graphic design company in <span>Australia</span></>,
  why: [
    { icon: Target, t: 'Design tied to your business, not just your taste', d: 'Good design is not about what looks nice in a portfolio. It is about what makes your brand recognisable, your assets effective, and your interfaces easy to use. We start with what the design needs to achieve, then make it look the part. That is the difference between a logo you like and a brand that works, between a brochure that looks expensive and one that gets read.' },
    { icon: Users, t: 'One team for brand, digital, and print', d: 'You get designers, brand strategists, and UI/UX specialists who work together, not a single freelancer covering one skill and outsourcing the rest. Because EG Digital also builds websites, runs social and content, and handles paid ads, your design is consistent from your logo to your homepage to your last Instagram post, instead of three suppliers each pulling the look in a different direction.' },
    { icon: Layers, t: 'A full studio, not a solo freelancer', d: 'A freelancer is one person with one strength. A project usually needs several: a logo needs a brand thinker, a website needs UI and UX, an ad needs a designer who understands the platform. As a full-service creative agency in Australia, we bring the whole studio, so you are not stitching together a logo from one person, a website from another, and social graphics from a third that never quite match.' },
    { icon: Unlock, t: 'No lock-in, no filler', d: 'No 12-month contracts on ongoing design. No padding a package with revisions and deliverables you did not ask for to justify the fee. We earn the work by producing design that does its job. For ongoing design support a short minimum is fair; a long lock-in is not, and we do not use them.' },
  ],
  servicesHeading: <>Our graphic design <span>services</span></>,
  servicesLead: 'We are a full-service creative design company, so you can hand us the whole brand or the single piece you are missing. Here is what we do.',
  services: [
    { icon: PenTool, t: 'Logo design', paras: ['Your logo is the first thing people recognise and the last thing you want done cheaply. We design logos built to last: a mark that works at any size, reads clearly in one colour or many, and still looks right in five years. You get the full set, primary and secondary marks, the variations you will actually use, and the files for every application. Whether you are a startup naming yourself for the first time or an established business overdue for a refresh, our logo design in Australia gives you a mark you can build a brand on, and our professional logo design services for small business come without the enterprise price tag.'] },
    { icon: Palette, t: 'Brand identity design', paras: ['A logo is one piece; a brand is the whole system. We build brand identity from the ground up: your logo, colour palette, typography, imagery, and the rules that hold them together, delivered as a style guide so everyone who touches your brand keeps it consistent. This is custom brand identity design for startups that need to look credible from day one, and for established businesses that have grown out of a look they threw together early. Either way, you end up with a brand that holds up across every channel and touchpoint.'] },
    { icon: Building2, t: 'Corporate design', paras: ['Bigger organisations need design that stays consistent across departments, documents, and years. We produce corporate design in Australia that keeps your brand disciplined: report and presentation templates, corporate collateral, internal and external documents, and the systems that stop your brand drifting every time someone opens a new file. One look, applied everywhere, so your business reads as one business.'] },
    { icon: Monitor, t: 'Digital graphic design', paras: ['Most of your brand now lives on a screen. We produce the digital graphic design services your channels run on: web graphics, banners, display ad creative, email design, and the visual assets that carry your brand online. Everything is built to your brand and sized for where it appears, so nothing looks stretched, cramped, or off-brand. Because design lives in the same team as your website and your ads, the look stays consistent from your homepage to your last banner.'] },
    { icon: MousePointer2, t: 'UI/UX design', paras: ['A good-looking interface that is hard to use is a bad interface. We design UI and UX that people can actually navigate: website and app interfaces, user flows, wireframes, and the design decisions that make a product easy instead of frustrating. Our UI/UX design in Australia is built on how people actually use a screen, not just what looks good in a mockup, and because EG Digital also builds websites and software, the design gets handed to developers who work in the same team, so what gets built matches what was designed.'] },
    { icon: Share2, t: 'Social media graphic design', paras: ['Social is a visual channel, and generic graphics get scrolled past. We produce social media graphic design that stops the scroll: post templates, carousels, story graphics, and branded visuals that hold up next to anyone in the feed. Everything is built to your brand and sized for each platform, and because our design team sits alongside our social team, the graphics match the content and the schedule rather than arriving late and off-brand.'] },
    { icon: Printer, t: 'Brochure and print design', paras: ['Print still matters when it lands in the right hands. We produce brochure design services in Australia along with the rest of your print: flyers, catalogues, packaging, signage, and the physical assets that carry your brand off-screen. Everything is set up correctly for print, so what you approve on screen is what comes back from the printer, and it matches the brand people already know from everywhere else.'] },
    { icon: BookOpen, t: 'Book cover design', paras: ['A cover sells the book before anyone reads a word. We design book covers built to work where books are actually browsed: a cover that reads at thumbnail size on a store listing, holds up in print, and fits its genre without looking like everything else on the shelf. Our book cover design in Australia covers the full package, front, spine, and back, set up correctly for your printer or platform.'] },
  ],
  serviceImg: { slug: 'web-design', alt: 'Illustration of UI and UX design for a website and app interface', cap: 'Interfaces designed on how people actually use a screen' },
  audiencesEyebrow: 'Who we design for',
  audiencesHeading: <>Who we <span>design for</span></>,
  audiences: [
    { icon: Store, t: 'Small businesses', d: 'You need design that makes you look established without a budget that swallows the year. We build graphic design packages for small business in Australia with clear pricing and no padding, focused on what you actually need now, a logo, a brand, the handful of assets that matter, rather than a bloated package you will not use. Start with the essentials, look the part, then add as you grow.' },
    { icon: Rocket, t: 'Startups', d: 'Startups have to look credible before they have the track record to prove it, and design is how they do it. We build the brand from scratch: a logo, an identity system, and the assets you need to launch, pitch, and sell, all consistent from day one. You get a brand that looks like it belongs, not one thrown together in a weekend that you have to redo the moment you raise.' },
    { icon: ShoppingBag, t: 'E-commerce brands', d: 'Online stores live and die on how they look, and generic design costs sales. We produce graphic design services for ecommerce websites: product and category graphics, banners, promotional creative, and the social and email design that drive traffic and revenue. Because EG Digital also builds and hosts stores, your design, your site, and your marketing all pull in the same direction.' },
    { icon: TrendingUp, t: 'Established and growth businesses', d: 'For bigger brands with more at stake, you need design produced at volume and kept consistent across every channel and document. As a creative agency in Australia working with growth businesses, we bring the studio, the systems, and the reporting to manage design at scale, with one partner answerable for how it all holds together.' },
  ],
  processEyebrow: 'How we work',
  processHeading: <>How we <span>work</span></>,
  steps: [
    { t: 'Discovery and brief', d: 'We start by understanding your business, your audience, and what the design needs to achieve. You get a clear brief and direction before anyone opens a design file.' },
    { t: 'Research and concepts', d: 'We research your industry, your competitors, and your audience, then develop concepts for you to react to, rather than one option you either take or leave.' },
    { t: 'Design and refine', d: 'We produce the design and work with you to refine it until it is right, whether that is a logo, a full brand, an interface, or a set of assets.' },
    { t: 'Deliver and document', d: 'You get the final files in every format you need, plus the source files and a style guide so your brand stays consistent after we hand it over.' },
    { t: 'Ongoing support', d: 'As your brand grows, we produce the new assets it needs and keep everything consistent, so the look does not drift as you scale.' },
  ],
  costHeading: <>What graphic design costs in <span>Australia</span></>,
  costParas: [
    'Honest answer: it depends on what you need and how much of it, and any company quoting a flat number before understanding the project is guessing.',
    'For context, a professional logo design usually runs between $500 and $3,000 depending on how much brand work sits behind it, and a full brand identity, logo, palette, typography, and a style guide, typically runs $2,500 to $8,000 or more. Ongoing design support, where a studio produces your social, digital, and print assets month to month, commonly runs $1,000 to $4,000 per month depending on volume. One-off projects like a brochure, a book cover, or a UI/UX project are usually scoped on their own.',
    'Two things worth knowing. First, price tracks scope and volume more than anything else, so a full brand plus ongoing assets costs more than a single logo. Second, cheap design is usually cheap for a reason: a $50 logo from a marketplace generally means a template someone else also bought, with no brand thinking behind it, which is why so many businesses end up paying to redo it. We would rather do it properly once.',
    'We quote from your actual project, and the quote comes with a clear scope, not just a number. You will know exactly what you are getting, and you will own the files at the end of it.',
  ],
  prices: [
    { v: '$500 - $3,000', l: 'A professional logo design, depending on how much brand work sits behind it.' },
    { v: '$2,500 - $8,000+', l: 'A full brand identity: logo, colour palette, typography, and a style guide.' },
    { v: '$1,000 - $4,000', l: 'Per month for ongoing design support producing your social, digital, and print assets.' },
    { v: 'Scoped separately', l: 'One-off projects like a brochure, a book cover, or a UI/UX project.' },
  ],
  costNote: <>Get a free design audit and a real quote. <a href="tel:1800054555">Call 1800 054 555</a></>,
  intlHeading: <>International Graphic Design <span>Services</span></>,
  intlLead: "Based in Melbourne, EG Digital delivers graphic design services in Australia while also helping businesses build their brand across the UK, USA, Canada, and Singapore, with design shaped for each market's audience and expectations.",
  countries: [
    { t: 'Graphic Design in the UK', d: "Our graphic design services in the UK help businesses stand out in one of the world's most competitive markets. We build logos, brand identities, and digital and print assets that make businesses look credible and consistent, tailored to UK audiences and expectations." },
    { t: 'Graphic Design in the USA', d: 'Businesses looking for graphic design services in the USA need design that competes across large, crowded markets. We combine logo design, brand identity, UI/UX, and digital and print assets to help businesses build a brand that holds up and scales across the United States.' },
    { t: 'Graphic Design in Canada', d: 'Our graphic design services in Canada focus on design that makes businesses recognisable and consistent: logos, brand systems, and the assets that carry them across every channel. Whether you operate locally or nationally, we help Canadian businesses build a brand that works.' },
    { t: 'Graphic Design in Singapore', d: "Singapore's competitive, design-conscious market rewards a sharp, consistent brand. Our graphic design services in Singapore help businesses build strong logos, brand identities, and digital and print assets that stand out and stay consistent across every touchpoint." },
  ],
  intlClose: 'Whether your business operates in Australia or internationally, our approach stays the same: design built to do a job, consistent across every channel, and made to last rather than to be redone next year.',
  readyEyebrow: 'Free audit',
  readyHeading: 'Ready to make your brand look the part?',
  readyParas: [
    'Tell us where your brand or your design is falling short. We will run a free audit, review how your brand and your competitors look, and tell you exactly where the opportunity is. If we can help, we will show you how. If we cannot, we will tell you that too.',
    'Call us on 1800 054 555 or request your free design audit below.',
  ],
  faqs: [
    { q: 'How do I choose the best graphic design services in Australia?', a: 'Look past the portfolio, because good work in a portfolio does not mean good work for you. Check three things. First, whether they understand the job, not just the aesthetic: a designer who asks what the design needs to achieve will serve you better than one who only talks about looks. Second, whether you get the full skill set you need, since a logo, a website, and a UI project each require different specialists, and a solo freelancer rarely covers all of them. Third, whether you own the source files at the end, which is what lets you use and update your design without going back to square one. EG Digital covers the full studio, ties design to what your business actually needs, and hands over the source files as standard, alongside web, social, and content under one roof.' },
    { q: 'Do graphic designers in Australia provide source files?', a: 'Reputable ones do, and you should insist on it. Source files are the editable, original versions of your design, the layered logo, the working files, the fonts and assets, rather than a flat JPG or PDF that cannot be changed. Owning them means you, or any designer you choose later, can update and reuse your design without rebuilding it from scratch. Some cheap providers hold source files back or charge extra to release them, which locks you in. EG Digital hands over the source files as part of the job, along with a style guide, so your brand is yours to keep and use.' },
  ],
  cta: { heading: "Let's make your brand", highlight: 'look the part.', button: 'Get a free design audit' },
}

export function GraphicDesign() {
  return <AppServicePage data={DATA} />
}
