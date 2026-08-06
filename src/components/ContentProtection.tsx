import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT PROTECTION (client-only deterrent)
//
// Text selection stays ALLOWED. A password gate appears whenever someone tries
// to COPY content, DOWNLOAD an image (right-click save / drag), save the page,
// or open devtools (F12, Ctrl+Shift+I/J/C, Ctrl+U). Entering the correct
// password unlocks the page for the rest of the browser session.
//
// SEO / SEARCH CONSOLE SAFETY:
//   - Every effect and listener runs only in the browser (inside useEffect), so
//     NOTHING here is emitted into the pre-rendered static HTML. Crawlers
//     (Googlebot / Bingbot) never fire copy / contextmenu / drag events and
//     never open devtools, so they are completely unaffected.
//   - No `noindex` is added, no content is hidden or removed from the DOM.
//
// NOTE: client-side protection is a DETERRENT, not real security. A determined
// user can still bypass it. It stops the 99% who casually copy / save images.
// ─────────────────────────────────────────────────────────────────────────────

const NAVY = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'

// SHA-256 of the unlock password. The plaintext password never ships in the
// bundle - only this hash does, and the entered value is hashed and compared.
const PASSWORD_HASH =
  '15f86a69286eb583e18ae8cd1116769b690fa5b44a7cf9cfa250a3cb217f1e73'

async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export function ContentProtection() {
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const unlockedRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Protection is re-armed on every page load / refresh (no persistence), so
    // the page is always protected until the password is entered again.

    // Stop the drag-ghost so images cannot be dragged out. Text selection is
    // intentionally left untouched so users can still select/read content.
    const style = document.createElement('style')
    style.setAttribute('data-content-protection', '')
    style.textContent =
      'img,video{-webkit-user-drag:none;user-drag:none;-webkit-touch-callout:none}'
    document.head.appendChild(style)

    const gate = () => setShowModal(true)

    const onKeyDown = (e: KeyboardEvent) => {
      if (unlockedRef.current) return
      const key = e.key.toUpperCase()
      const ctrl = e.ctrlKey || e.metaKey

      // Devtools / view-source shortcuts.
      const isInspect =
        e.key === 'F12' ||
        (ctrl && e.shiftKey && (key === 'I' || key === 'J' || key === 'C')) ||
        (ctrl && key === 'U')
      // Copy / cut / save-page (image download vector). Selection (Ctrl+A) and
      // reading are allowed - only the copy/save itself is gated.
      const isCopySave = ctrl && (key === 'C' || key === 'X' || key === 'S')

      if (isInspect || isCopySave) {
        e.preventDefault()
        gate()
      }
    }

    // Right-click menu is the main vector for "copy" and "save image as".
    const onContext = (e: MouseEvent) => {
      if (unlockedRef.current) return
      e.preventDefault()
      gate()
    }

    // Actual clipboard copy/cut (covers menu copy too).
    const onCopy = (e: ClipboardEvent) => {
      if (unlockedRef.current) return
      e.preventDefault()
      gate()
    }

    // Dragging an image out to the desktop = downloading it.
    const onDragStart = (e: DragEvent) => {
      if (unlockedRef.current) return
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'IMG' || t.tagName === 'VIDEO' || t.tagName === 'PICTURE')) {
        e.preventDefault()
        gate()
      }
    }

    window.addEventListener('keydown', onKeyDown, { capture: true })
    window.addEventListener('contextmenu', onContext)
    document.addEventListener('copy', onCopy)
    document.addEventListener('cut', onCopy)
    document.addEventListener('dragstart', onDragStart, { capture: true })

    return () => {
      window.removeEventListener('keydown', onKeyDown, { capture: true } as EventListenerOptions)
      window.removeEventListener('contextmenu', onContext)
      document.removeEventListener('copy', onCopy)
      document.removeEventListener('cut', onCopy)
      document.removeEventListener('dragstart', onDragStart, { capture: true } as EventListenerOptions)
      style.remove()
    }
  }, [])

  const verify = async (e?: React.FormEvent) => {
    e?.preventDefault()
    const hash = await sha256Hex(input)
    if (hash === PASSWORD_HASH) {
      // Unlock only for this page view (in memory). A refresh re-locks.
      unlockedRef.current = true
      // Drop the image-drag lock immediately.
      document.querySelectorAll('style[data-content-protection]').forEach((s) => s.remove())
      setShowModal(false)
      setInput('')
      setError(false)
    } else {
      setError(true)
    }
  }

  // Until the user triggers protection, render nothing - this is what keeps the
  // pre-rendered HTML (and therefore SEO) completely untouched.
  if (!showModal) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Protected - password required"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483647,
        background: 'rgba(8,33,60,0.72)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(20px, 5vw, 40px)',
      }}
      onMouseDown={(e) => {
        // Click on the backdrop closes the gate (re-locks).
        if (e.target === e.currentTarget) {
          setShowModal(false)
          setInput('')
          setError(false)
        }
      }}
    >
      <form
        onSubmit={verify}
        style={{
          width: 'min(100%, 420px)',
          background: CREAM,
          borderRadius: 20,
          padding: 'clamp(26px, 4vw, 40px)',
          boxShadow: '0 30px 90px rgba(8,33,60,0.45)',
          textAlign: 'center',
        }}
      >
        <div
          aria-hidden
          style={{
            width: 56,
            height: 56,
            margin: '0 auto 18px',
            borderRadius: 16,
            background: NAVY,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: GREEN,
            fontSize: 28,
          }}
        >
          &#128274;
        </div>

        <h2
          style={{
            margin: '0 0 8px',
            fontSize: 'clamp(20px, 2.4vw, 26px)',
            fontWeight: 900,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: NAVY,
          }}
        >
          Content Protected
        </h2>

        <p
          style={{
            margin: '0 0 22px',
            fontSize: 'clamp(13px, 1.2vw, 15px)',
            lineHeight: 1.6,
            color: 'rgba(8,33,60,0.75)',
          }}
        >
          Copying and image downloads are protected. Enter the password to continue.
        </p>

        <input
          autoFocus
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            if (error) setError(false)
          }}
          placeholder="Enter password"
          aria-label="Password"
          style={{
            width: '100%',
            boxSizing: 'border-box',
            minHeight: 48,
            padding: '0 16px',
            borderRadius: 12,
            border: `2px solid ${error ? '#e0483d' : 'rgba(8,33,60,0.18)'}`,
            fontSize: 16,
            outline: 'none',
            color: NAVY,
            background: '#fff',
          }}
        />

        {error && (
          <p
            style={{
              margin: '10px 0 0',
              color: '#e0483d',
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Incorrect password. Please try again.
          </p>
        )}

        <button
          type="submit"
          style={{
            marginTop: 20,
            width: '100%',
            minHeight: 48,
            border: 'none',
            borderRadius: 12,
            background: GREEN,
            color: NAVY,
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Unlock
        </button>
      </form>
    </div>
  )
}
