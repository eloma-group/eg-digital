import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { buildPageJsonLd } from '../lib/pageSchema'

const MARKER = 'data-page-jsonld'

/**
 * Keeps the page-level JSON-LD (breadcrumb, service, FAQ, article) in sync with
 * the current route. Mounted once in App.
 *
 * The static pre-render (prerender.js) bakes the same tags, marked with the
 * same [data-page-jsonld] attribute, into the HTML so crawlers that do not run
 * JavaScript still read them. On every navigation this clears those tags (or
 * the previous route's) and re-adds fresh ones, so there is never a duplicate.
 */
export function PageJsonLd() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.querySelectorAll(`script[${MARKER}]`).forEach(el => el.remove())

    const added = buildPageJsonLd(pathname).map(obj => {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.setAttribute(MARKER, '')
      el.textContent = JSON.stringify(obj)
      document.body.appendChild(el)
      return el
    })

    return () => added.forEach(el => el.remove())
  }, [pathname])

  return null
}
