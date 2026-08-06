import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT PROTECTION (client-only deterrent)
//
// Blocks casual copying / right-click and puts a password gate in front of the
// devtools shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U). Entering the correct
// password unlocks the page for the rest of the browser session.
//
// SEO / SEARCH CONSOLE SAFETY:
//   - Every effect and listener runs only in the browser (inside useEffect), so
//     NOTHING here is emitted into the pre-rendered static HTML. Crawlers
//     (Googlebot / Bingbot) never fire keyboard, copy or contextmenu events and
//     never open devtools, so they are completely unaffected.
//   - No `noindex` is added, no content is hidden or removed from the DOM. The
//     full page text stays crawlable exactly as before.
//
// NOTE: client-side protection is a DETERRENT, not real security. A determined
// user can still bypass it (disable JS, use a proxy, the browser menu, etc.).
// It stops the 99% who casually right-click / hit F12.
// ─────────────────────────────────────────────────────────────────────────────

const NAVY = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'

// SHA-256 of the unlock password. The plaintext password never ships in the
// bundle - only this hash does, and the entered value is hashed and compared.
const PASSWORD_HASH =
  '15f86a69286eb583e18ae8cd1116769b690fa5b44a7cf9cfa250a3cb217f1e73'
const UNLOCK_KEY = 'eg-cp-unlocked'

async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export function ContentProtection() {
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const unlockedRef = useRef(false)
  const toastTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Already unlocked this session -> attach nothing, leave the page normal.
    if (sessionStorage.getItem(UNLOCK_KEY) === '1') {
      unlockedRef.current = true
      return
    }

    // Disable text selection (except real form fields) as an extra copy guard.
    const style = document.createElement('style')
    style.setAttribute('data-content-protection', '')
    style.textContent =
      '*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}' +
      'input,textarea,[contenteditable="true"]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}'
    document.head.appendChild(style)

    const flashToast = () => {
      setShowToast(true)
      window.clearTimeout(toastTimer.current)
      toastTimer.current = window.setTimeout(() => setShowToast(false), 2200)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (unlockedRef.current) return
      const key = e.key.toUpperCase()
      const ctrl = e.ctrlKey || e.metaKey

      // Devtools / view-source shortcuts -> password gate.
      const isInspect =
        e.key === 'F12' ||
        (ctrl && e.shiftKey && (key === 'I' || key === 'J' || key === 'C')) ||
        (ctrl && key === 'U')
      if (isInspect) {
        e.preventDefault()
        setShowModal(true)
        return
      }

      // Copy / cut / select-all / save / print -> protected toast.
      if (ctrl && (key === 'C' || key === 'X' || key === 'A' || key === 'S' || key === 'P')) {
        e.preventDefault()
        flashToast()
      }
    }

    const onContext = (e: MouseEvent) => {
      if (unlockedRef.current) return
      e.preventDefault()
      flashToast()
    }

    const onCopy = (e: ClipboardEvent) => {
      if (unlockedRef.current) return
      e.preventDefault()
      flashToast()
    }

    window.addEventListener('keydown', onKeyDown, { capture: true })
    window.addEventListener('contextmenu', onContext)
    document.addEventListener('copy', onCopy)
    document.addEventListener('cut', onCopy)

    return () => {
      window.removeEventListener('keydown', onKeyDown, { capture: true } as EventListenerOptions)
      window.removeEventListener('contextmenu', onContext)
      document.removeEventListener('copy', onCopy)
      document.removeEventListener('cut', onCopy)
      window.clearTimeout(toastTimer.current)
      style.remove()
    }
  }, [])

  const verify = async (e?: React.FormEvent) => {
    e?.preventDefault()
    const hash = await sha256Hex(input)
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(UNLOCK_KEY, '1')
      unlockedRef.current = true
      // Remove the selection lock immediately.
      document.querySelectorAll('style[data-content-protection]').forEach((s) => s.remove())
      setShowModal(false)
      setInput('')
      setError(false)
    } else {
      setError(true)
    }
  }

  // Until the user actually triggers protection, render nothing at all - this is
  // what keeps the pre-rendered HTML (and therefore SEO) completely untouched.
  if (!showModal && !showToast) return null

  return (
    <>
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            left: '50%',
            bottom: 'clamp(24px, 5vw, 48px)',
            transform: 'translateX(-50%)',
            zIndex: 2147483646,
            background: NAVY,
            color: CREAM,
            padding: '14px clamp(20px, 3vw, 30px)',
            borderRadius: 999,
            fontSize: 'clamp(13px, 1.1vw, 15px)',
            fontWeight: 700,
            letterSpacing: '0.3px',
            boxShadow: '0 12px 40px rgba(8,33,60,0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            maxWidth: 'min(92vw, 440px)',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <span
            aria-hidden
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: GREEN,
              flexShrink: 0,
            }}
          />
          This content is protected by EG Digital.
        </div>
      )}

      {showModal && (
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
              This page is protected. Enter the password to continue.
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
      )}
    </>
  )
}
