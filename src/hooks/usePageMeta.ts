import { useEffect } from 'react'

/**
 * Sets the document <title> and the title/description meta tags (standard,
 * Open Graph and Twitter) for a route while the component is mounted, then
 * restores the previous values on unmount. This is a lightweight stand-in for
 * a full head manager (react-helmet etc.) - it keeps per-page SEO metadata
 * co-located with each page component.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    // Keep the standard, Open Graph and Twitter title/description tags in sync
    // so social shares and search snippets all use the approved per-page copy.
    const updates: { selector: string; value: string }[] = [
      { selector: 'meta[property="og:title"]', value: title },
      { selector: 'meta[name="twitter:title"]', value: title },
      { selector: 'meta[name="description"]', value: description },
      { selector: 'meta[property="og:description"]', value: description },
      { selector: 'meta[name="twitter:description"]', value: description },
    ]
    const restore = updates.map(({ selector, value }) => {
      const el = document.querySelector<HTMLMetaElement>(selector)
      const prev = el?.getAttribute('content') ?? null
      if (el) el.setAttribute('content', value)
      return { el, prev }
    })

    return () => {
      document.title = prevTitle
      for (const { el, prev } of restore) {
        if (el && prev !== null) el.setAttribute('content', prev)
      }
    }
  }, [title, description])
}
