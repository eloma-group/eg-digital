import { LegalDoc, type LegalSection } from './LegalDoc'
import { usePageMeta } from '../../hooks/usePageMeta'

const SECTIONS: LegalSection[] = [
  {
    id: 'overview', heading: 'Overview',
    blocks: [
      { type: 'para', text: 'EG Digital Australia Pty Ltd (a unit of Eloma Group), ABN 76 693 175 012, respects your privacy. This policy explains what personal information we collect, how we use it, and the choices you have. It applies to this website and to the services we provide.' },
      { type: 'para', text: 'We handle personal information in line with the Australian Privacy Principles set out in the Privacy Act 1988 (Cth).' },
    ],
  },
  {
    id: 'collect', heading: 'Information we collect',
    blocks: [
      { type: 'para', text: 'We only collect information we genuinely need to work with you. Depending on how you interact with us, this may include:' },
      { type: 'list', items: [
        'Contact details you give us - your name, email address, phone number and company.',
        'Project information you share when you enquire about or engage our services.',
        'Technical data your browser sends automatically, such as your IP address, device type and pages visited.',
        'Cookies and analytics data used to understand how the site is used and to improve it.',
      ] },
    ],
  },
  {
    id: 'use', heading: 'How we use your information',
    blocks: [
      { type: 'para', text: 'We use the information we collect to:' },
      { type: 'list', items: [
        'Respond to your enquiries and provide the services you request.',
        'Prepare quotes, deliver projects and manage our relationship with you.',
        'Improve our website, services and customer experience.',
        'Send you relevant updates where you have asked to hear from us.',
        'Meet our legal, accounting and regulatory obligations.',
      ] },
      { type: 'para', text: 'We never sell your personal information to third parties.' },
    ],
  },
  {
    id: 'cookies', heading: 'Cookies & analytics',
    blocks: [
      { type: 'para', text: 'Our website uses cookies and similar technologies to keep the site working, remember your preferences and measure traffic. You can disable cookies in your browser settings, though some features may not work as intended if you do.' },
    ],
  },
  {
    id: 'sharing', heading: 'Sharing your information',
    blocks: [
      { type: 'para', text: 'We may share your information with trusted service providers who help us operate - for example cloud hosting, email and analytics providers - and only to the extent they need it to perform their service. These providers are required to protect your information.' },
      { type: 'para', text: 'We may also disclose information where required by law, or to protect our rights, property or safety.' },
    ],
  },
  {
    id: 'security', heading: 'How we protect your data',
    blocks: [
      { type: 'para', text: 'We take reasonable technical and organisational steps to protect your personal information from misuse, loss, unauthorised access, modification and disclosure. While no method of transmission over the internet is completely secure, we work hard to safeguard the data we hold.' },
    ],
  },
  {
    id: 'rights', heading: 'Your rights',
    blocks: [
      { type: 'para', text: 'You have the right to:' },
      { type: 'list', items: [
        'Ask what personal information we hold about you.',
        'Request corrections to any inaccurate information.',
        'Ask us to delete your information where we are not required to keep it.',
        'Opt out of marketing communications at any time.',
      ] },
      { type: 'para', text: 'To exercise any of these rights, contact us using the details below.' },
    ],
  },
  {
    id: 'changes', heading: 'Changes to this policy',
    blocks: [
      { type: 'para', text: 'We may update this Privacy Policy from time to time. The latest version will always be published on this page with a revised "last updated" date.' },
    ],
  },
]

export function PrivacyPolicy() {
  usePageMeta(
    'Privacy Policy | EG Digital Australia',
    'Read the EG Digital Australia privacy policy - what personal information we collect, how we use it, and the rights and choices you have over your data.',
  )
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy"
      highlight="policy."
      updated="6 July 2026"
      intro="Your trust matters to us. This policy sets out, in plain language, how EG Digital collects, uses and protects your personal information when you use our website or work with us."
      sections={SECTIONS}
    />
  )
}
