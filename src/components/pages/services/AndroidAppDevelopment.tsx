import {
  Smartphone, Users, ShieldCheck, Receipt, Boxes, Cpu, Building2,
  Briefcase, Rocket, UploadCloud, Plug, LifeBuoy, Store, TrendingUp,
} from 'lucide-react'
import { AppServicePage } from './_appServiceKit'
import type { ServicePageData } from './_appServiceKit'

const DATA: ServicePageData = {
  route: '/services/android-app-development-company-australia',
  metaTitle: 'Android App Development Company in Australia | Native Kotlin Apps | EG Digital',
  metaDescription:
    'Android app development in Australia done right. Native Kotlin apps built to run across every device, secure and scalable, with in-house engineering. Melbourne team. Get a free quote.',
  eyebrow: 'Android App Development Company in Australia',
  h1: 'Android App Development Company in Australia',
  lede: <>Android apps that work on the phones your users <span>actually own</span>, not just the flagship on your desk.</>,
  primaryCta: 'Get my free quote',
  heroImg: { slug: 'product-launch', alt: 'Illustration of a native Kotlin Android app launching across many devices' },
  heroBadge: { k: 'Native Kotlin', v: 'Every device' },
  signals: [
    { v: 'Native Kotlin', l: 'built and tested across the devices your users carry' },
    { v: 'One team', l: 'app, backend, cloud and security under one roof' },
    { v: 'Real numbers', l: 'a fixed quote and timeline before any code is written' },
  ],
  intro: [
    'The catch with Android is that "Android" is not one device. It is Samsung, Xiaomi, Oppo, Pixel, and hundreds of others, across a dozen screen sizes and half a dozen live OS versions. An app that runs beautifully on the newest Galaxy and crashes on a two-year-old budget handset was tested on the wrong phone. And on Android, the budget handset is often the one most of your users carry.',
    <><strong>EG Digital is a Melbourne-based Android app development company</strong> that builds native apps in Kotlin, engineered to be fast, secure, and reliable across the real range of devices your users have, not just the one in the demo. We are part of Eloma Group, so your app sits alongside cloud hosting, custom software, Microsoft integrations, cyber security, and SEO under one roof. The app we ship talks to your backend, holds up under real load, and keeps working after go-live, because the same team that built it is the team that keeps it running.</>,
    'One partner scopes it, designs it, builds it, gets it onto Google Play, and maintains it. One number to call when something needs attention.',
    'Tell us what you want to build and we will give you a real number and a real timeline, not a vague range.',
  ],
  whyHeading: <>Why choose EG Digital as your Android app developer in <span>Melbourne</span></>,
  why: [
    { icon: Smartphone, t: 'Native Android, tested on the devices that matter', d: 'There is a difference between an app built for Android and one that technically installs on it. We write native code in Kotlin, using current Android frameworks, and we test across the manufacturer skins and OS versions your users actually run, not just a single flagship emulator. Device fragmentation is the thing that quietly sinks Android builds, so we treat cross-device testing as part of the job rather than an afterthought. You own the source code we write.' },
    { icon: Users, t: 'One team for the app, the backend, and everything behind it', d: 'Almost every Android app needs a web application behind it: an API, a database, authentication, an admin dashboard. Because EG Digital also builds custom software, runs cloud infrastructure, and handles security, the parts of a build that usually get handed to a third party and quietly break are handled in one place. No finger-pointing between an app studio, a backend contractor, and a hosting company when something goes wrong.' },
    { icon: ShieldCheck, t: 'Scalable mobile app solutions, secure from the first line', d: 'An Android app that works for a hundred users and falls over at ten thousand was built wrong. We architect for the load you are heading toward and build security in rather than bolting it on afterward. With cyber security engineers on the same team, data protection, encryption, and Australian Privacy Act obligations are part of the build, not something you discover in an audit later. That matters more in 2026, with new Privacy Act transparency rules taking effect for apps that handle personal data.' },
    { icon: Receipt, t: 'Honest pricing and clear timelines', d: 'We quote from your actual requirements and itemise what you are paying for. You will know the scope, the price, and the timeline before we start, and you will not get ambushed by costs that were always coming. No open-ended retainers that never turn into a working app. No "it depends" that never resolves into a number.' },
  ],
  servicesHeading: <>Our Android app development <span>services</span></>,
  servicesLead: 'We are a full-service Android app development company, so you can hand us the whole project or the single piece you are missing.',
  services: [
    { icon: Boxes, t: 'Custom Android app development', paras: ['Apps built around your business and your users, not forced into a generic template. We handle the whole build: strategy, UX and UI design, front-end, backend, integrations, testing, and Google Play submission. This suits businesses launching a new product, digitising an existing process, or replacing an app that has outgrown its original build.'] },
    { icon: Cpu, t: 'Native Kotlin app development', paras: ['Native apps built in Kotlin for the full range of Android devices your users carry, tuned for performance across screen sizes and OS versions. Kotlin gives you the deepest access to device features and the best performance, which matters for hardware-heavy apps, anything graphics-intensive, and products where speed is the point. We build to the standards a fragmented device landscape demands.'] },
    { icon: Building2, t: 'Enterprise Android app development', paras: ['For larger organisations, we build Android apps that connect to internal infrastructure, enforce proper security and access control, and handle real user volumes without buckling. Complex integrations, multiple user roles, compliance requirements, and accountability at scale are normal territory for us. Having cloud and security engineers on the same team is where these projects are won or lost.'] },
    { icon: Briefcase, t: 'B2B Android app development', paras: ['For internal tools, customer portals, and field apps, the app has to fit how your organisation already works and connect to the systems you already run. We build B2B Android apps that integrate with your CRM, ERP, and Microsoft stack, handle multiple stakeholders and user roles, and stand up to the scrutiny a business-critical tool attracts. Android is often the right call for field and frontline apps, where rugged devices and company-issued handsets run it by default.'] },
    { icon: Rocket, t: 'Android MVP development', paras: ['Speed matters when you are proving an idea. We build Android MVPs that get you to market quickly with a focused feature set, then expand as you validate and scale. Because we also do software and cloud, we can take you from a working prototype to a revenue-ready product without changing teams along the way.'] },
    { icon: UploadCloud, t: 'Google Play submission and release', paras: ['Getting an app onto Google Play has its own hurdles: store listing, screenshots, content rating, and the data safety form Google now requires. We prepare all of it to Google\'s guidelines, submit your app, and handle the rejections and resubmissions that catch teams off guard the first time. Your launch does not stall on a form you have never filled in.'] },
    { icon: Plug, t: 'Integrations and APIs', paras: ['A modern Android app rarely stands alone. We connect yours to the tools that run your business: CRM, ERP, Microsoft 365 and Dynamics, payment gateways, booking systems, Xero, MYOB, and more. This is where a lot of builds quietly fall apart, and where having software and cloud engineers on the same team pays off.'] },
    { icon: LifeBuoy, t: 'Maintenance, hosting, and support', paras: ['An Android app is not "done" when it hits Google Play. Google ships a major Android version every year, new devices land constantly, and users expect fixes and new features. We host, monitor, update, and secure what we build, so it stays fast, compatible, and safe long after launch. One team that knows your app, on call when you need them.'] },
  ],
  serviceImg: { slug: 'man-riding-a-rocket', alt: 'Illustration of an Android MVP getting to market quickly', cap: 'MVP to revenue-ready product, without switching teams' },
  audiencesEyebrow: 'Who we build for',
  audiencesHeading: <>Who we <span>build for</span></>,
  audiences: [
    { icon: Rocket, t: 'Startups', d: 'When you are proving an idea, you need reach without burning your runway, and Android gives you the widest install base to test against. We build Android MVPs and startup apps that get to market quickly, then grow as you validate. Because we also do software and cloud, we take you from prototype to a working, revenue-ready product without switching teams partway through.' },
    { icon: Store, t: 'Small businesses', d: 'You need an Android app that does real work without a budget that swallows your year. We build practical, focused Android apps for small businesses across Australia, with clear pricing and no padding. Start with what you need now, built to grow rather than forcing a rebuild in twelve months.' },
    { icon: Briefcase, t: 'B2B and corporate businesses', d: 'For internal tools, customer portals, and field apps, the app has to fit your organisation and connect to the systems you already run. We build B2B and corporate Android apps that integrate with your CRM, ERP, and Microsoft stack, handle multiple user roles, and hold up to the scrutiny a business-critical tool attracts. For field and frontline teams on company-issued Android devices, this is where a lot of the value lands.' },
    { icon: TrendingUp, t: 'Enterprise businesses', d: 'For complex apps, multiple integrations, and higher stakes, you need a team that can handle scale and stay accountable for it. We bring the engineering depth, the security posture, and the project management to deliver enterprise Android app development that holds up, with one partner answerable for the whole thing.' },
  ],
  processEyebrow: 'How we work',
  processHeading: <>How we <span>work</span></>,
  steps: [
    { t: 'Discovery and scope', d: 'We start by understanding your business, your users, and what the app actually has to achieve, including which devices and Android versions your users are on. You get a documented scope, a fixed quote, and a timeline before any code is written. No vague briefs that balloon later.' },
    { t: 'Design and prototype', d: "We design the flows and interface around your users and Android's design conventions, then build a clickable prototype so you can react to something real before we commit to the build. Fixing a screen in design is cheap. Fixing it in code is not." },
    { t: 'Development', d: 'We build in Kotlin, in fortnightly sprints, with the backend, integrations, and security baked in from the start. You see working progress at the end of each sprint, not a black box until launch.' },
    { t: 'Testing and launch', d: 'Before anything ships, we test across the range of Android devices and OS versions your users run, check performance and security, and run user acceptance testing. Then we prepare and submit to Google Play and stay with you through review and go-live.' },
    { t: 'Support and growth', d: 'After launch we host, monitor, and maintain the app. Because SEO, digital marketing, and software all live in the same team, we can keep improving and growing the product rather than handing you the keys and walking away.' },
  ],
  costHeading: <>Cost of Android app development in <span>Australia</span></>,
  costParas: [
    'The honest answer is that it depends on what you are building, and any company quoting a flat price before understanding your project is guessing. Here is the current Australian market for context.',
    'A simple Android app or MVP with a focused feature set typically runs $30,000 to $80,000. A mid-complexity app with multiple user roles, payments, integrations, and a custom backend usually lands between $80,000 and $150,000. Enterprise Android apps connected to internal infrastructure, with advanced security and large-scale user management, commonly start around $150,000 and can climb past $350,000. Australian developer rates generally sit around $150 to $200 an hour, which reflects local salaries, quality assurance standards, and compliance expectations rather than better code by default.',
    'Three things worth knowing about Android specifically. First, the biggest cost driver is functionality, not screen count: payments, integrations, real-time features, and custom logic are what move the number. Second, device fragmentation is a real Android line item. Testing across Samsung, Xiaomi, Oppo, and the rest, over multiple OS versions, adds QA time that an iOS-only build does not carry, and skipping it is how you end up with one-star reviews from users on devices you never checked. Third, Google Play is cheaper to publish on than the App Store: a one-time developer registration fee of roughly USD $25, versus Apple\'s annual charge, with no yearly renewal.',
    'On top of the build, budget for hosting, and ongoing maintenance, which typically runs 15 to 20 percent of the build cost each year. We quote all of it up front so nothing ambushes you. You get an itemised scope and a real number, not a "from $X" asterisk.',
  ],
  prices: [
    { v: '$30,000 - $80,000', l: 'A simple Android app or MVP with a focused feature set.' },
    { v: '$80,000 - $150,000', l: 'A mid-complexity app with multiple user roles, payments, integrations, and a custom backend.' },
    { v: '$150,000+', l: 'Enterprise Android apps connected to internal infrastructure, with advanced security and large-scale user management.' },
  ],
  costNote: <>Get a free quote and an itemised scope. <a href="tel:1800054555">Call 1800 054 555</a></>,
  intlHeading: <>Android app development services across Australia and <span>beyond</span></>,
  intlLead: 'Although EG Digital is based in Melbourne, we deliver custom Android app development for businesses across Australia and international markets. Whether you are launching a startup MVP, building a customer portal, or developing a large-scale enterprise platform, our team creates secure, scalable Android apps that support long-term growth.',
  countries: [
    { t: 'Android app development company in Australia', d: 'As a leading Android app development company in Australia, we build high-performance native Kotlin apps for Australian businesses. Every project is engineered with security, scalability, Privacy Act compliance, and long-term maintainability in mind, and connected to the Australian tools you already run.' },
    { t: 'Android app development company in the UK', d: 'Businesses looking for a reliable Android app development company in the UK need apps that combine performance, security, and a strong user experience across a wide device range. We build native Android apps that integrate cleanly with your existing systems while supporting future growth.' },
    { t: 'Android app development company in the USA', d: 'Our Android app development services in the USA help businesses create modern, scalable apps that improve customer experience and operational efficiency. From consumer apps to enterprise platforms and custom portals, we build solutions designed to scale.' },
    { t: 'Android app development company in Canada', d: 'As a trusted Android app development company in Canada, we help businesses build Android apps and custom platforms that are secure, fast, and easy to maintain. Our process focuses on clean code, sound architecture, and integrations that hold.' },
    { t: 'Android app development company in Singapore', d: 'Our Android app development services in Singapore support businesses looking for high-performance apps and custom platforms that deliver measurable outcomes. We combine technical depth with modern development practices to build products engineered for long-term success.' },
  ],
  intlClose: 'Whether you are based in Australia or expanding internationally, our approach stays the same: build secure, scalable, high-performance Android apps that deliver real business value and integrate with the technology your business relies on.',
  readyHeading: 'Ready to build your Android app?',
  readyParas: [
    'Tell us what you are trying to build and what it needs to do. We will give you a clear scope, an itemised quote, and a realistic timeline, with no obligation and no vague ranges. If we are the right fit, we will show you how. If we are not, we will tell you.',
    'Call us on 1800 054 555 or request your free quote below.',
  ],
  faqs: [
    { q: 'How much does Android app development cost in Australia?', a: 'Most custom Android apps in Australia fall between $30,000 for a simple MVP and $150,000 for a mid-complexity build with payments, integrations, and a custom backend, while enterprise platforms commonly start around $150,000 and can climb past $350,000. Local developer rates generally sit around $150 to $200 an hour, and Google charges a one-time developer registration fee of roughly USD $25 to publish on Google Play. The honest version is that price tracks functionality far more than screen count, so the right number depends on what your app has to do. We quote from your actual requirements and itemise it, so nothing surprises you later.' },
    { q: 'How long does it take to develop an Android app?', a: 'For a straightforward custom Android app, plan on roughly three to four months from kickoff to launch. A simple MVP can be ready sooner, while a larger build with multiple integrations, a custom backend, and enterprise requirements runs closer to six months or more. Android usually needs a little extra time for testing across the range of devices and OS versions your users run. Timelines also depend on scope and on how quickly feedback and content come back from your side, which is why we agree on scope and process before we begin rather than promising a date we cannot hold.' },
    { q: 'Should I build my app in Kotlin or use a cross-platform framework?', a: 'It depends on whether you need iOS too and how much you lean on device hardware. Native Kotlin gives you the best performance and the deepest access to Android features, which matters for hardware-heavy apps and anything where speed is critical. If you also want iOS, a cross-platform build in [Flutter](/services/flutter-app-development-company-australia) or React Native can serve both from one codebase and cut cost by roughly 30 to 40 percent compared with two separate native apps. We are honest about which one fits your product rather than pushing every build down the same path, and we build in all three.' },
    { q: 'Why does Android testing cost more than iOS?', a: "Because \"Android\" covers thousands of device models from different manufacturers, each with its own screen size, hardware, and version of the operating system, sometimes with the manufacturer's own layer on top. An app has to be tested across a real spread of those devices and OS versions to confirm it works everywhere your users are, and that adds QA hours an iOS-only build does not carry. It is not optional. Skipping it is the fastest route to one-star reviews from users on a phone you never checked, so we build device testing into the scope from the start." },
    { q: 'Do you provide app maintenance after launch?', a: "Yes. An Android app starts decaying the day it ships if no one maintains it, because Google releases a major Android version every year, new devices land constantly, and users expect fixes and new features. We host, monitor, update, and secure the apps we build, and because the same team knows your product end to end, fixes and improvements do not sit in a stranger's queue. Ongoing maintenance typically runs 15 to 20 percent of the build cost per year, and we quote it up front." },
  ],
  cta: { heading: "Let's build your", highlight: 'Android app.', button: 'Get my free quote' },
}

export function AndroidAppDevelopment() {
  return <AppServicePage data={DATA} />
}
