import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ABOUT_ROUTES } from '../../lib/aboutRoutes'
import { SOLUTION_ROUTES, SERVICE_SECTIONS } from '../../lib/sectionRoutes'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const ABOUT_ITEMS = [
  'Our Journey', 'Our USP', 'Networks & Partners', 'Media', 'Values', 'FAQ',
]
const SERVICES_ITEMS = [
  'Upgrades', 'Cloud Maintenances', 'Server Maintenances', 'Support Services',
]
// Maps each Services item to its in-page anchor on the Services page.
const SERVICES_LINK_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(SERVICE_SECTIONS).map(([label, id]) => [label, `/services#${id}`]),
)
const BLOG_ITEMS = ['Latest Technologies', 'Awareness']
// Every blog option routes to the Blog page (no per-section anchors).
const BLOG_LINK_MAP: Record<string, string> = Object.fromEntries(
  BLOG_ITEMS.map(item => [item, '/blog']),
)

const INDUSTRIES_COL1 = [
  'Professional Services', 'IT', 'Startups & SMEs', 'Non Profit Organizations',
  'Healthcare', 'Banking & Financial Services', 'Manufacturing',
]
const INDUSTRIES_COL2 = [
  'Education', 'Real Estate', 'Logistics & Supply Chain', 'Travel and Tourism',
  'Agriculture', 'Hospitality', 'Food and Beverage',
]
// Every industry option routes to the Industries page (no per-section anchors).
const INDUSTRIES_LINK_MAP: Record<string, string> = Object.fromEntries(
  [...INDUSTRIES_COL1, ...INDUSTRIES_COL2].map(item => [item, '/industries']),
)

const SOLUTIONS_GROUPS = [
  {
    groupLabel: 'Microsoft Products',
    color: '#2563eb',
    categories: [
      { label: 'Microsoft 365',  items: ['Power BI', 'Power Automate', 'Share Point', 'Office 365'] },
      { label: 'Dynamic 365',    items: ['Sales', 'Customer Service', 'Field Service', 'Finance', 'Supply Chain', 'Small and Medium Business'] },
    ],
  },
  {
    groupLabel: 'Development',
    color: GREEN,
    categories: [
      { label: 'Software Development', items: ['Custom Software Development'] },
      { label: 'App Development',      items: ['Custom App Development'] },
      { label: 'Website Development',  items: ['Wordpress', 'React & Next', 'Shopify'] },
      { label: 'CRM',                  items: ['Microsoft', 'Salesforce', 'Oracle', 'Zoho'] },
      { label: 'ERP',                  items: ['Sage', 'NetSuite', 'Microsoft', 'Salesforce'] },
    ],
  },
  {
    groupLabel: 'Digital & Marketing',
    color: '#d97706',
    categories: [
      { label: 'Branding',      items: ['Logo Creation', 'Email Signature', 'Visiting Card Designing', 'Website Designing'] },
      { label: 'Cloud Hosting', items: ['Azure', 'AWS'] },
      { label: 'SEO Marketing', items: ['Email Marketing', 'Social Media Handling', 'Google Ads', 'Wikipedia Creation', 'Content Writing', 'Organic SEO'] },
    ],
  },
  {
    groupLabel: 'Security & Integration',
    color: '#7c3aed',
    categories: [
      { label: 'Cyber Security',    items: ['Microsoft Defender XDR', 'Microsoft Entra', 'Microsoft Defender for Cloud', 'Microsoft Purview'] },
      { label: 'AI Cyber Security', items: ['Microsoft Defender', 'Microsoft Foundry', 'Microsoft 365 Copilot', 'Microsoft Copilot Studio'] },
      { label: 'Integrations',      items: ['API Integrations', 'Middleware / iPaaS', 'Point-to-Point Integration'] },
      { label: 'Licenses',          items: ['Non Profit Microsoft Licenses', 'Office 365 Licenses', 'D365 Licenses'] },
    ],
  },
]

// ─────────────────────────────────────────────
// PANEL DROPDOWN - full-width, Eloma-style
// ─────────────────────────────────────────────
type PanelCol = { header?: string; items: string[] }

function PanelDropdown({
  eyebrow, heading, desc, cta, ctaTo, columns, linkMap,
  onClose, onPanelMouseEnter, onPanelMouseLeave,
}: {
  eyebrow: string
  heading: string
  desc: string
  cta: string
  ctaTo?: string
  columns: PanelCol[]
  linkMap?: Record<string, string>
  onClose: () => void
  onPanelMouseEnter: () => void
  onPanelMouseLeave: () => void
}) {
  const navigate = useNavigate()
  const selectItem = (item: string) => {
    const to = linkMap?.[item]
    if (to) navigate(to)
    onClose()
  }
  const onCta = () => {
    if (ctaTo) navigate(ctaTo)
    onClose()
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 76, left: 0, right: 0,
        zIndex: 400,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 clamp(24px,4vw,64px)',
        pointerEvents: 'none',
      }}
    >
      <div
        onMouseEnter={onPanelMouseEnter}
        onMouseLeave={onPanelMouseLeave}
        style={{
          pointerEvents: 'all',
          background: '#fff',
          borderRadius: 18,
          border: '1px solid rgba(8,33,60,0.09)',
          boxShadow: '0 4px 6px rgba(8,33,60,0.04), 0 24px 64px rgba(8,33,60,0.14)',
          width: '100%',
          maxWidth: 'min(calc(100vw - 80px), 1760px)',
          display: 'flex',
          padding: 'clamp(24px,3vh,40px) clamp(24px,3vw,44px)',
          gap: 0,
        }}
      >
        {/* Left editorial panel */}
        <div style={{
          width: 340,
          flexShrink: 0,
          paddingRight: 48,
          borderRight: '1px solid rgba(8,33,60,0.08)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: 10, fontWeight: 800, letterSpacing: '2.5px',
            textTransform: 'uppercase', color: GREEN,
            marginBottom: 14,
          }}>
            <div style={{ width: 20, height: 2, background: GREEN, flexShrink: 0 }} />
            {eyebrow}
          </div>
          <h3 style={{
            fontSize: 'clamp(18px,1.6vw,24px)', fontWeight: 800, color: NAVY,
            letterSpacing: '-0.03em', lineHeight: 1.18,
            marginBottom: 11,
          }}>{heading}</h3>
          <p style={{
            fontSize: 13.5, color: 'rgba(8,33,60,0.48)',
            lineHeight: 1.72, marginBottom: 22,
          }}>{desc}</p>
          <button
            onClick={onCta}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: NAVY, color: '#fff',
              fontSize: 13, fontWeight: 700,
              padding: '10px 22px', borderRadius: 100,
              border: 'none', cursor: 'pointer',
              fontFamily: 'inherit', minHeight: 42,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = GREEN }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = NAVY }}
          >
            {cta}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Right: link columns */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
          paddingLeft: 48,
          gap: 0,
        }}>
          {columns.map((col, ci) => (
            <div
              key={ci}
              style={{
                borderRight: ci < columns.length - 1 ? '1px solid rgba(8,33,60,0.07)' : 'none',
                paddingRight: ci < columns.length - 1 ? 40 : 0,
                paddingLeft: ci > 0 ? 40 : 0,
              }}
            >
              {col.header && (
                <div style={{
                  fontSize: 9.5, fontWeight: 800, letterSpacing: '2px',
                  textTransform: 'uppercase', color: 'rgba(8,33,60,0.32)',
                  paddingBottom: 12, marginBottom: 4,
                  borderBottom: '1px solid rgba(8,33,60,0.07)',
                }}>{col.header}</div>
              )}
              {col.items.map((item, i) => (
                <button
                  key={item}
                  onClick={() => selectItem(item)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit',
                    padding: '13px 0',
                    fontSize: 14.5, fontWeight: 500,
                    color: 'rgba(8,33,60,0.58)',
                    borderBottom: i < col.items.length - 1 ? '1px solid rgba(8,33,60,0.07)' : 'none',
                    minHeight: 46,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = NAVY }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(8,33,60,0.58)' }}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// MEGA MENU - Solutions (accordion + hover expand)
// ─────────────────────────────────────────────
function MegaMenu({
  onClose,
  onPanelMouseEnter,
  onPanelMouseLeave,
}: {
  onClose: () => void
  onPanelMouseEnter: () => void
  onPanelMouseLeave: () => void
}) {
  // unique key: "groupLabel::catLabel"
  const [hoveredCat, setHoveredCat] = useState<string | null>(null)
  const navigate = useNavigate()
  const goToSection = (groupLabel: string) => {
    const to = SOLUTION_ROUTES[groupLabel]
    if (to) navigate(to)
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 76,
        left: 0,
        right: 0,
        zIndex: 400,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 clamp(24px,4vw,64px)',
        pointerEvents: 'none',
      }}
    >
      {/* Scrollable inner panel - handlers here so scroll works */}
      <div
        onMouseEnter={onPanelMouseEnter}
        onMouseLeave={onPanelMouseLeave}
        style={{
          background: '#fff',
          borderRadius: 18,
          border: '1px solid rgba(8,33,60,0.09)',
          boxShadow: '0 4px 6px rgba(8,33,60,0.04), 0 24px 64px rgba(8,33,60,0.14)',
          width: '100%',
          maxWidth: 'min(calc(100vw - 80px), 1760px)',
          maxHeight: 'calc(100vh - 94px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          pointerEvents: 'all',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {SOLUTIONS_GROUPS.map((group, gi) => {
          const isLast = gi === SOLUTIONS_GROUPS.length - 1
          return (
            <div
              key={group.groupLabel}
              style={{
                padding: '28px 18px 32px',
                borderRight: isLast ? 'none' : '1px solid rgba(8,33,60,0.06)',
              }}
            >
              {/* Group header - links to the matching Solutions section */}
              <button
                onClick={() => goToSection(group.groupLabel)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7, width: '100%',
                  marginBottom: 12, paddingBottom: 12,
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', textAlign: 'left',
                  borderBottom: `2px solid ${group.color}22`,
                }}
              >
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: group.color, flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 10, fontWeight: 800,
                  color: group.color,
                  textTransform: 'uppercase',
                  letterSpacing: '1.3px',
                }}>{group.groupLabel}</span>
              </button>

              {/* Categories - each has + accordion on hover */}
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                onMouseLeave={() => setHoveredCat(null)}
              >
                {group.categories.map(cat => {
                  const key = `${group.groupLabel}::${cat.label}`
                  const isOpen = hoveredCat === key

                  return (
                    <div
                      key={cat.label}
                      onMouseEnter={() => setHoveredCat(key)}
                    >
                      {/* Category row */}
                      <div style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '9px 10px',
                        borderRadius: 9,
                        background: isOpen ? `${group.color}0f` : 'transparent',
                        cursor: 'default',
                        transition: 'background 0.15s',
                        gap: 8,
                        minHeight: 40,
                      }}>
                        <span style={{
                          fontSize: 14, fontWeight: 600,
                          color: isOpen ? group.color : NAVY,
                          transition: 'color 0.15s',
                          lineHeight: 1.3,
                        }}>
                          {cat.label}
                        </span>

                        {/* + / − icon in circle */}
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%',
                          border: `1.5px solid ${isOpen ? group.color : 'rgba(8,33,60,0.18)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'border-color 0.15s, background 0.15s',
                          background: isOpen ? group.color : 'transparent',
                        }}>
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 14, fontWeight: 700, lineHeight: 1,
                              color: isOpen ? '#fff' : 'rgba(8,33,60,0.45)',
                              userSelect: 'none',
                            }}
                          >
                            +
                          </motion.span>
                        </div>
                      </div>

                      {/* Sub-items - slide in on hover */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{
                              paddingLeft: 10, paddingRight: 4,
                              paddingBottom: 6, paddingTop: 4,
                              display: 'flex', flexDirection: 'column', gap: 1,
                              borderLeft: `2px solid ${group.color}33`,
                              marginLeft: 10, marginBottom: 4,
                            }}>
                              {cat.items.map(item => (
                                <button
                                  key={item}
                                  onClick={() => goToSection(group.groupLabel)}
                                  style={{
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    textAlign: 'left',
                                    padding: '5px 8px',
                                    fontSize: 13.5, fontWeight: 500,
                                    color: 'rgba(8,33,60,0.58)',
                                    fontFamily: 'inherit',
                                    borderRadius: 6,
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    minHeight: 30,
                                    transition: 'color 0.12s, background 0.12s',
                                  }}
                                  onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLButtonElement
                                    el.style.color = group.color
                                    el.style.background = `${group.color}10`
                                  }}
                                  onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLButtonElement
                                    el.style.color = 'rgba(8,33,60,0.58)'
                                    el.style.background = 'none'
                                  }}
                                >
                                  <div style={{
                                    width: 4, height: 4, borderRadius: '50%',
                                    background: group.color, flexShrink: 0, opacity: 0.65,
                                  }} />
                                  {item}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// MOBILE ACCORDION SECTION
// ─────────────────────────────────────────────
function MobileSection({
  label, children, expanded, onToggle,
}: { label: string; children: React.ReactNode; expanded: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(8,33,60,0.07)', width: '100%' }}>
      <button
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '14px 24px', fontFamily: 'inherit',
          fontSize: 16, fontWeight: 700, color: NAVY,
          textAlign: 'left', minHeight: 52,
        }}
      >
        {label}
        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} color="rgba(8,33,60,0.45)" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: 10 }}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
export function Navbar() {
  const navigate = useNavigate()
  const [scrolled,       setScrolled]       = useState(false)
  const [overHero,       setOverHero]       = useState(false)
  const [activeMenu,     setActiveMenu]     = useState<string | null>(null)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const cb = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', cb, { passive: true })
    return () => window.removeEventListener('scroll', cb)
  }, [])

  // Transparent header while a hero section (tagged with data-nav-overlap)
  // sits under the fixed header band, so the hero design shows through it.
  // useLayoutEffect runs before paint so the homepage opens transparent
  // (no solid → transparent flash).
  useLayoutEffect(() => {
    const check = () => {
      let over = false
      document.querySelectorAll('[data-nav-overlap]').forEach(el => {
        const r = el.getBoundingClientRect()
        if (r.top < 76 && r.bottom > 0) over = true
      })
      setOverHero(over)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function openMenu(id: string) {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
    setActiveMenu(id)
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 200)
  }
  function cancelClose() {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
  }
  function closeAll() { setActiveMenu(null) }

  function toggleMobileSection(id: string) {
    setMobileExpanded(p => p === id ? null : id)
  }

  const isScrolled = scrolled
  // Float transparent over the hero zone, but go solid whenever a dropdown
  // or the mobile menu is open so those panels stay readable.
  const transparent = overHero && !activeMenu && !mobileOpen

  return (
    <>
      <style>{`
        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 300;
          background: ${transparent ? 'transparent' : `rgba(255,255,255,${isScrolled ? '0.97' : '0.93'})`};
          backdrop-filter: ${transparent ? 'none' : 'blur(20px)'};
          -webkit-backdrop-filter: ${transparent ? 'none' : 'blur(20px)'};
          border-bottom: 1px solid ${transparent ? 'transparent' : `rgba(8,33,60,${isScrolled ? '0.09' : '0.05'})`};
          box-shadow: ${transparent ? 'none' : (isScrolled ? '0 4px 28px rgba(8,33,60,0.09)' : 'none')};
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
        }
        .nav-inner {
          max-width: 1760px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 48px);
          display: flex; align-items: center;
          height: 76px;
        }
        @media (min-width: 1920px) { .nav-inner { max-width: 1900px; } }
        @media (min-width: 2560px) { .nav-inner { max-width: 2440px; } }
        .nav-logo {
          display: flex; align-items: center;
          flex-shrink: 0;
          margin-right: clamp(16px, 2vw, 32px);
        }
        .nav-logo img { height: 44px; width: auto; }

        /* Nav links - centered between logo and right actions */
        .nav-links {
          display: flex; align-items: center;
          justify-content: center;       /* ← centers items */
          gap: 0;
          flex: 1;
        }
        .nav-link {
          background: none; border: none; cursor: pointer;
          font-family: inherit;
          font-size: clamp(12.5px, 0.85vw, 14px); font-weight: 600;
          color: rgba(8,33,60,0.6);
          padding: 8px 14px; min-height: 44px;
          border-radius: 9px;
          display: flex; align-items: center; gap: 3px;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }
        .nav-link:hover { color: ${NAVY}; background: rgba(8,33,60,0.04); }

        .nav-right {
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
        }
        .nav-phone {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700; color: ${GREEN};
          padding: 8px 10px; border-radius: 8px;
          white-space: nowrap; text-decoration: none;
          transition: background 0.18s;
        }
        .nav-phone:hover { background: rgba(60,185,140,0.08); }
        .nav-contact {
          display: flex; align-items: center;
          background: ${NAVY}; color: #fff; border: none;
          font-size: 13px; font-weight: 700;
          padding: 10px 20px; border-radius: 100px;
          cursor: pointer; transition: all 0.22s;
          font-family: inherit; white-space: nowrap; min-height: 44px;
        }
        .nav-contact:hover { background: ${GREEN}; transform: translateY(-1px); }

        .nav-hamburger {
          display: none; background: none; border: none;
          cursor: pointer; color: ${NAVY}; padding: 8px;
          min-width: 44px; min-height: 44px;
          align-items: center; justify-content: center;
          border-radius: 10px; border: 1px solid rgba(8,33,60,0.12);
          margin-left: auto;
        }

        /* Mobile */
        .nav-mobile {
          position: fixed; inset: 0; z-index: 500;
          background: #fff;
          display: flex; flex-direction: column;
          overflow-y: auto;
        }
        .nav-mobile-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 24px; flex-shrink: 0;
          border-bottom: 1px solid rgba(8,33,60,0.07);
        }
        .nav-mobile-close {
          background: none; border: 1px solid rgba(8,33,60,0.12);
          cursor: pointer; padding: 8px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          min-width: 44px; min-height: 44px; color: ${NAVY};
        }
        .nav-mobile-link {
          display: block; width: 100%; background: none; border: none;
          cursor: pointer; padding: 14px 24px;
          font-size: 16px; font-weight: 700; color: ${NAVY};
          text-align: left; font-family: inherit;
          border-bottom: 1px solid rgba(8,33,60,0.07); min-height: 52px;
          transition: color 0.18s;
        }
        .nav-mobile-link:hover { color: ${GREEN}; }
        .nav-mobile-item {
          display: block; width: 100%; background: none; border: none;
          cursor: pointer; padding: 10px 24px 10px 40px;
          font-size: 14px; font-weight: 500; color: rgba(8,33,60,0.65);
          text-align: left; font-family: inherit; transition: color 0.15s;
        }
        .nav-mobile-item:hover { color: ${GREEN}; }
        .nav-mobile-footer {
          padding: 20px 24px 36px;
          display: flex; flex-direction: column; gap: 10px;
          border-top: 1px solid rgba(8,33,60,0.07);
          margin-top: auto;
        }

        @media (max-width: 1100px) {
          .nav-links, .nav-right { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      {/* ── Bar ── */}
      <div className="nav-bar">
        <div className="nav-inner">

          {/* Logo */}
          <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img
              src="/images/Egdigital-logo.png"
              alt="EG Digital"
              style={{ height: 36, width: 'auto', display: 'block' }}
            />
          </div>

          {/* Desktop links - centred */}
          <nav className="nav-links" aria-label="Main navigation">

            {/* About Us - full-width panel */}
            <div
              onMouseEnter={() => openMenu('about')}
              onMouseLeave={scheduleClose}
              style={{ position: 'relative' }}
            >
              <button
                className="nav-link"
                style={{ color: activeMenu === 'about' ? NAVY : undefined }}
                aria-expanded={activeMenu === 'about'}
              >
                About Us
                <motion.span
                  animate={{ rotate: activeMenu === 'about' ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={13} />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeMenu === 'about' && (
                  <PanelDropdown
                    eyebrow="About EG Digital"
                    heading="Who We Are & How We Lead"
                    desc="A certified Microsoft partner driving digital transformation for ambitious Australian businesses since 2021."
                    cta="Explore More"
                    columns={[{ items: ABOUT_ITEMS }]}
                    linkMap={ABOUT_ROUTES}
                    onClose={closeAll}
                    onPanelMouseEnter={cancelClose}
                    onPanelMouseLeave={scheduleClose}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Solutions - mega accordion panel */}
            <div
              onMouseEnter={() => openMenu('solutions')}
              onMouseLeave={scheduleClose}
              style={{ position: 'relative' }}
            >
              <button
                className="nav-link"
                style={{ color: activeMenu === 'solutions' ? NAVY : undefined }}
                aria-expanded={activeMenu === 'solutions'}
                onClick={() => { navigate('/solutions'); closeAll() }}
              >
                Solutions
                <motion.span
                  animate={{ rotate: activeMenu === 'solutions' ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={13} />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeMenu === 'solutions' && (
                  <MegaMenu
                    onClose={closeAll}
                    onPanelMouseEnter={cancelClose}
                    onPanelMouseLeave={scheduleClose}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Services - full-width panel */}
            <div
              onMouseEnter={() => openMenu('services')}
              onMouseLeave={scheduleClose}
              style={{ position: 'relative' }}
            >
              <button
                className="nav-link"
                style={{ color: activeMenu === 'services' ? NAVY : undefined }}
                aria-expanded={activeMenu === 'services'}
                onClick={() => { navigate('/services'); closeAll() }}
              >
                Services
                <motion.span
                  animate={{ rotate: activeMenu === 'services' ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={13} />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeMenu === 'services' && (
                  <PanelDropdown
                    eyebrow="Our Services"
                    heading="Expert IT & Support Solutions"
                    desc="From cloud migrations to server management, our team keeps your technology running at peak performance."
                    cta="View All Services"
                    ctaTo="/services"
                    columns={[{ items: SERVICES_ITEMS }]}
                    linkMap={SERVICES_LINK_MAP}
                    onClose={closeAll}
                    onPanelMouseEnter={cancelClose}
                    onPanelMouseLeave={scheduleClose}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Industries - full-width panel */}
            <div
              onMouseEnter={() => openMenu('industries')}
              onMouseLeave={scheduleClose}
              style={{ position: 'relative' }}
            >
              <button
                className="nav-link"
                style={{ color: activeMenu === 'industries' ? NAVY : undefined }}
                aria-expanded={activeMenu === 'industries'}
                onClick={() => { navigate('/industries'); closeAll() }}
              >
                Industries
                <motion.span
                  animate={{ rotate: activeMenu === 'industries' ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={13} />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeMenu === 'industries' && (
                  <PanelDropdown
                    eyebrow="Industries We Serve"
                    heading="Solutions Across Every Sector"
                    desc="From healthcare to hospitality, we deliver tailored digital transformation strategies for every industry."
                    cta="Explore Industries"
                    ctaTo="/industries"
                    columns={[
                      { items: INDUSTRIES_COL1 },
                      { items: INDUSTRIES_COL2 },
                    ]}
                    linkMap={INDUSTRIES_LINK_MAP}
                    onClose={closeAll}
                    onPanelMouseEnter={cancelClose}
                    onPanelMouseLeave={scheduleClose}
                  />
                )}
              </AnimatePresence>
            </div>

            <button className="nav-link" onClick={() => { navigate('/career'); closeAll() }}>Career</button>

            {/* Blog - full-width panel */}
            <div
              onMouseEnter={() => openMenu('blog')}
              onMouseLeave={scheduleClose}
              style={{ position: 'relative' }}
            >
              <button
                className="nav-link"
                style={{ color: activeMenu === 'blog' ? NAVY : undefined }}
                aria-expanded={activeMenu === 'blog'}
                onClick={() => { navigate('/blog'); closeAll() }}
              >
                Blog
                <motion.span
                  animate={{ rotate: activeMenu === 'blog' ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={13} />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeMenu === 'blog' && (
                  <PanelDropdown
                    eyebrow="Latest Insights"
                    heading="Knowledge & Awareness"
                    desc="Stay ahead with expert articles on Microsoft, cloud computing, cyber security, and digital transformation trends."
                    cta="View All Posts"
                    ctaTo="/blog"
                    columns={[{ items: BLOG_ITEMS }]}
                    linkMap={BLOG_LINK_MAP}
                    onClose={closeAll}
                    onPanelMouseEnter={cancelClose}
                    onPanelMouseLeave={scheduleClose}
                  />
                )}
              </AnimatePresence>
            </div>

          </nav>

          {/* Right */}
          <div className="nav-right">
            <a className="nav-phone" href="tel:1800054555">
              <Phone size={14} />
              1800 054 555
            </a>
            <button className="nav-contact" onClick={() => navigate('/contact')}>Contact Us</button>
          </div>

          {/* Hamburger */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="nav-mobile-header">
              <div style={{ background: NAVY, borderRadius: 8, padding: '5px 12px', display: 'flex', alignItems: 'center' }}>
                <img
                  src="/images/Egdigital-logo-white.png"
                  alt="EG Digital"
                  style={{ height: 28, width: 'auto', display: 'block' }}
                />
              </div>
              <button className="nav-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <MobileSection label="About Us" expanded={mobileExpanded === 'about'} onToggle={() => toggleMobileSection('about')}>
              {ABOUT_ITEMS.map(item => (
                <button key={item} className="nav-mobile-item" onClick={() => { setMobileOpen(false); const to = ABOUT_ROUTES[item]; if (to) navigate(to) }}>{item}</button>
              ))}
            </MobileSection>

            <MobileSection label="Solutions" expanded={mobileExpanded === 'solutions'} onToggle={() => toggleMobileSection('solutions')}>
              {SOLUTIONS_GROUPS.map(group => (
                <div key={group.groupLabel}>
                  <div style={{
                    padding: '8px 24px 4px 40px',
                    fontSize: 10.5, fontWeight: 800, color: group.color,
                    textTransform: 'uppercase', letterSpacing: '1.2px',
                    borderLeft: `2.5px solid ${group.color}`, marginLeft: 24, paddingLeft: 12, marginTop: 6,
                  }}>
                    {group.groupLabel}
                  </div>
                  {group.categories.map(cat => (
                    <button key={cat.label} className="nav-mobile-item"
                      style={{ fontWeight: 600, color: NAVY }}
                      onClick={() => { setMobileOpen(false); const to = SOLUTION_ROUTES[group.groupLabel]; if (to) navigate(to) }}>
                      {cat.label}
                    </button>
                  ))}
                </div>
              ))}
            </MobileSection>

            <MobileSection label="Services" expanded={mobileExpanded === 'services'} onToggle={() => toggleMobileSection('services')}>
              {SERVICES_ITEMS.map(item => (
                <button key={item} className="nav-mobile-item" onClick={() => { setMobileOpen(false); const id = SERVICE_SECTIONS[item]; if (id) navigate(`/services#${id}`) }}>{item}</button>
              ))}
            </MobileSection>

            <MobileSection label="Industries" expanded={mobileExpanded === 'industries'} onToggle={() => toggleMobileSection('industries')}>
              {[...INDUSTRIES_COL1, ...INDUSTRIES_COL2].map(item => (
                <button key={item} className="nav-mobile-item" onClick={() => { setMobileOpen(false); navigate('/industries') }}>{item}</button>
              ))}
            </MobileSection>

            <button className="nav-mobile-link" onClick={() => { setMobileOpen(false); navigate('/career') }}>Career</button>

            <MobileSection label="Blog" expanded={mobileExpanded === 'blog'} onToggle={() => toggleMobileSection('blog')}>
              {BLOG_ITEMS.map(item => (
                <button key={item} className="nav-mobile-item" onClick={() => { setMobileOpen(false); navigate('/blog') }}>{item}</button>
              ))}
            </MobileSection>

            <div className="nav-mobile-footer">
              <a href="tel:1800054555" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 15, fontWeight: 700, color: GREEN, textDecoration: 'none',
              }}>
                <Phone size={16} />
                1800 054 555
              </a>
              <a href="mailto:connect@egdigital.com.au" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 14, fontWeight: 600, color: 'rgba(8,33,60,0.55)', textDecoration: 'none',
              }}>
                connect@egdigital.com.au
              </a>
              <button onClick={() => { setMobileOpen(false); navigate('/contact') }} style={{
                background: NAVY, color: '#fff', border: 'none',
                borderRadius: 100, padding: '14px 24px',
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
                fontFamily: 'inherit', minHeight: 52,
              }}>
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
