import { LegalDoc, type LegalSection } from './LegalDoc'
import { usePageMeta } from '../../hooks/usePageMeta'

const SECTIONS: LegalSection[] = [
  {
    id: 'acceptance', heading: 'Acceptance of terms',
    blocks: [
      { type: 'para', text: 'These Terms & Conditions govern your use of the EG Digital website and the services provided by EG Digital Australia Pty Ltd (a unit of Eloma Group), ABN 76 693 175 012. By accessing this website or engaging our services, you agree to be bound by these terms.' },
      { type: 'para', text: 'If you do not agree with any part of these terms, please do not use our website or services.' },
    ],
  },
  {
    id: 'services', heading: 'Our services',
    blocks: [
      { type: 'para', text: 'EG Digital provides digital services including web and app development, cloud, cybersecurity, Microsoft solutions and digital marketing. The specific scope, deliverables, timeline and fees for any engagement are set out in a separate proposal or agreement between you and us.' },
      { type: 'para', text: 'We reserve the right to modify, suspend or discontinue any part of our services at any time.' },
    ],
  },
  {
    id: 'use', heading: 'Use of the website',
    blocks: [
      { type: 'para', text: 'You agree to use this website lawfully and not to:' },
      { type: 'list', items: [
        'Attempt to gain unauthorised access to any part of the site or its systems.',
        'Use the site to distribute malware, spam or harmful content.',
        'Copy, reproduce or republish our content without permission.',
        'Interfere with the proper working or security of the website.',
      ] },
    ],
  },
  {
    id: 'ip', heading: 'Intellectual property',
    blocks: [
      { type: 'para', text: 'All content on this website - including text, graphics, logos, images and code - is owned by or licensed to EG Digital and is protected by copyright and other intellectual property laws. You may not use it without our prior written consent.' },
      { type: 'para', text: 'Ownership of deliverables created during a client engagement is governed by the specific agreement for that project.' },
    ],
  },
  {
    id: 'payment', heading: 'Fees & payment',
    blocks: [
      { type: 'para', text: 'Fees for our services are quoted in your proposal or agreement. Unless stated otherwise, invoices are payable within the terms specified on the invoice. Fixed-scope projects are quoted against defined milestones, and ongoing work runs on the agreed retainer.' },
      { type: 'para', text: 'Late payments may result in suspension of work until the account is brought up to date.' },
    ],
  },
  {
    id: 'liability', heading: 'Limitation of liability',
    blocks: [
      { type: 'para', text: 'To the maximum extent permitted by law, EG Digital is not liable for any indirect, incidental or consequential loss arising from your use of this website or our services. Nothing in these terms excludes rights you have under the Australian Consumer Law that cannot be lawfully excluded.' },
      { type: 'para', text: 'Our website is provided "as is". While we work hard to keep it accurate and available, we do not warrant that it will be uninterrupted or error-free.' },
    ],
  },
  {
    id: 'thirdparty', heading: 'Third-party links',
    blocks: [
      { type: 'para', text: 'Our website may contain links to third-party websites. We are not responsible for the content, policies or practices of those sites and provide the links for convenience only.' },
    ],
  },
  {
    id: 'law', heading: 'Governing law',
    blocks: [
      { type: 'para', text: 'These terms are governed by the laws of Victoria, Australia. Any dispute relating to these terms or our services will be subject to the jurisdiction of the courts of Victoria.' },
    ],
  },
  {
    id: 'changes', heading: 'Changes to these terms',
    blocks: [
      { type: 'para', text: 'We may update these Terms & Conditions from time to time. The current version will always be published on this page with a revised "last updated" date, and continued use of the site means you accept the updated terms.' },
    ],
  },
]

export function TermsConditions() {
  usePageMeta(
    'Terms & Conditions | EG Digital Australia',
    'Read the terms and conditions that govern the use of the EG Digital Australia website and services, including intellectual property, payment and liability.',
  )
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms &"
      highlight="conditions."
      updated="6 July 2026"
      intro="These terms set out the rules for using the EG Digital website and engaging our services. Please read them carefully - by using our site you agree to everything below."
      sections={SECTIONS}
    />
  )
}
