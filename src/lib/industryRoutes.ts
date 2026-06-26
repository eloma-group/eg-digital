// Single source of truth for industry deep-links. The Footer "Industries"
// column links to /industries#<slug> and the Industries page gives each tile
// the same id + pre-selects it, so a footer click lands on that sector.
// Names differ slightly between the footer and the page ("and" vs "&",
// hyphen vs space), so the slug normalises both to one canonical form.
export const industrySlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/\band\b/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const industryHref = (label: string): string =>
  `/industries#${industrySlug(label)}`
