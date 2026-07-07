// This is a build-only SSG entry, never HMR-loaded, so it intentionally exports
// data alongside the render function.
/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { StaticRouter } from 'react-router'
import { prerenderToNodeStream } from 'react-dom/static'
import App from './App.tsx'

// Re-export the build-time SEO data so the plain-Node prerender script can pull
// everything it needs from this single compiled bundle.
export { ROUTES, PAGE_META, DEFAULT_META, SITE_URL } from './lib/pageMeta.ts'
export { buildServiceJsonLd } from './lib/serviceSchema.ts'

/**
 * Render a single route to an HTML string for the #root container.
 *
 * prerenderToNodeStream waits for all Suspense boundaries to resolve, so the
 * code-split (lazy) page for `url` is loaded and fully rendered before we read
 * the stream - unlike renderToString, which would emit the Suspense fallback.
 * Browser-only layers (Spline/WebGL, Lenis) live behind effects or a deferred
 * mount and simply render nothing here, which is exactly what we want.
 */
export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )

  // At runtime `prelude` is a Node Readable (async-iterable, yielding chunks);
  // its published type here is the Web ReadableStream, so cast to iterate.
  const stream = prelude as unknown as AsyncIterable<Uint8Array | string>
  const decoder = new TextDecoder()
  let html = ''
  for await (const chunk of stream) {
    html += typeof chunk === 'string' ? chunk : decoder.decode(chunk, { stream: true })
  }
  html += decoder.decode()
  return html
}
