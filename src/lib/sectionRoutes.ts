// Single source of truth for the in-page section anchors on the Solutions and
// Services pages. Used by the page (section ids), the Navbar dropdowns, and the
// Footer columns so a click always lands on the right section.

export const SOLUTION_SECTIONS: Record<string, string> = {
  'Microsoft Products':     'microsoft-products',
  'Development':            'development',
  'Digital & Marketing':    'digital-marketing',
  'Security & Integration': 'security-integration',
}

// Each of the four solution practices now has its own dedicated detail page.
// Used by the Navbar mega menu / mobile menu and the Footer "Solutions" column.
export const SOLUTION_ROUTES: Record<string, string> = {
  'Microsoft Products':     '/solutions/microsoft-products',
  'Development':            '/solutions/development',
  'Digital & Marketing':    '/solutions/digital-marketing',
  'Security & Integration': '/solutions/security-integration',
}

// The footer "Solutions" column lists the offerings grouped under each of the
// four solution pages. Every sub-link routes to its parent solution page.
export const SOLUTION_SUBLINK_ROUTES: Record<string, string> = {
  // Microsoft Products
  'Microsoft 365':        SOLUTION_ROUTES['Microsoft Products'],
  'Dynamic 365':          SOLUTION_ROUTES['Microsoft Products'] + '#dynamics-365',
  // Development (CRM & ERP now live here)
  'Software Development': SOLUTION_ROUTES['Development'],
  'App Development':      SOLUTION_ROUTES['Development'],
  'Website Development':  SOLUTION_ROUTES['Development'],
  'CRM':                  SOLUTION_ROUTES['Development'] + '#crm',
  'ERP':                  SOLUTION_ROUTES['Development'] + '#erp',
  // Digital & Marketing
  'Branding':             SOLUTION_ROUTES['Digital & Marketing'],
  'Cloud Hosting':        SOLUTION_ROUTES['Digital & Marketing'],
  'SEO Marketing':        SOLUTION_ROUTES['Digital & Marketing'],
  // Security & Integration
  'Cyber Security':       SOLUTION_ROUTES['Security & Integration'],
  'AI Cyber Security':    SOLUTION_ROUTES['Security & Integration'],
  'Integrations':         SOLUTION_ROUTES['Security & Integration'],
  'Licenses':             SOLUTION_ROUTES['Security & Integration'],
}

export const SERVICE_SECTIONS: Record<string, string> = {
  'Upgrades':            'upgrades',
  'Cloud Maintenances':  'cloud-maintenances',
  'Server Maintenances': 'server-maintenances',
  'Support Services':    'support-services',
}

export const solutionsHref = (label: string): string | undefined =>
  SOLUTION_ROUTES[label] ?? SOLUTION_SUBLINK_ROUTES[label]

export const servicesHref = (label: string): string | undefined => {
  const id = SERVICE_SECTIONS[label]
  return id ? `/services#${id}` : undefined
}
