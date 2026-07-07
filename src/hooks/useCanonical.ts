import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../lib/pageMeta'

/**
 * Keeps <link rel="canonical"> and og:url in sync with the current route on the
 * client. The static pre-render bakes the correct per-page canonical into each
 * HTML file, but the SPA never updated it on navigation, so client-side route
 * changes left the homepage canonical in place. This runs on every route change
 * and points both tags at SITE_URL + pathname.
 */
export function useCanonical() {
  const { pathname } = useLocation()

  useEffect(() => {
    const url = SITE_URL + pathname

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url

    const og = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (og) og.setAttribute('content', url)
  }, [pathname])
}
