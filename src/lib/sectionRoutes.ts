// Single source of truth for the in-page section anchors on the Solutions and
// Services pages. Used by the page (section ids), the Navbar dropdowns, and the
// Footer columns so a click always lands on the right section.

export const SOLUTION_SECTIONS: Record<string, string> = {
  'Microsoft Products':     'microsoft-products',
  'Development':            'development',
  'Digital & Marketing':    'digital-marketing',
  'Security & Integration': 'security-integration',
}

export const SERVICE_SECTIONS: Record<string, string> = {
  'Upgrades':            'upgrades',
  'Cloud Maintenances':  'cloud-maintenances',
  'Server Maintenances': 'server-maintenances',
  'Support Services':    'support-services',
}

export const solutionsHref = (label: string): string | undefined => {
  const id = SOLUTION_SECTIONS[label]
  return id ? `/solutions#${id}` : undefined
}

export const servicesHref = (label: string): string | undefined => {
  const id = SERVICE_SECTIONS[label]
  return id ? `/services#${id}` : undefined
}
