import { useEffect } from 'react'
import { buildServiceJsonLd } from '../lib/serviceSchema'

const MARKER = 'data-page-jsonld'

/**
 * Injects the Service + BreadcrumbList JSON-LD for a service route into the
 * document <body> while the page is mounted, and removes it on unmount.
 *
 * The static pre-render (prerender.js) bakes the same tags (marked with the
 * same [data-page-jsonld] attribute) into the HTML so crawlers that do not run
 * JavaScript still read them. On the client this hook first clears any of those
 * pre-rendered tags, then re-adds fresh ones for the current route, so there is
 * never a duplicate and SPA navigation always emits the right schema.
 */
export function useServiceJsonLd(route: string) {
  useEffect(() => {
    const objects = buildServiceJsonLd(route)
    if (!objects) return

    // Drop any tags baked in by SSG (or left by a previous route) first.
    document.querySelectorAll(`script[${MARKER}]`).forEach(el => el.remove())

    const added = objects.map(obj => {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.setAttribute(MARKER, '')
      el.textContent = JSON.stringify(obj)
      document.body.appendChild(el)
      return el
    })

    return () => added.forEach(el => el.remove())
  }, [route])
}
