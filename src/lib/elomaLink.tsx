import { Fragment } from 'react'
import type { ReactNode } from 'react'

// Parent company site. "Eloma Group" is always linked here, opening in a new tab.
export const ELOMA_URL = 'https://elomagroup.com.au/'

const GREEN = '#3CB98C'
const linkStyle: React.CSSProperties = {
  color: GREEN,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  fontWeight: 'inherit',
}

// Clickable "Eloma Group" link for use directly inside JSX.
export function ElomaLink({ children = 'Eloma Group' }: { children?: ReactNode }) {
  return (
    <a href={ELOMA_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      {children}
    </a>
  )
}

// Linkify every "Eloma Group" occurrence inside a plain string, for text that is
// stored as data and rendered as-is (legal docs, journey body, service paras...).
export function linkEloma(text: string): ReactNode {
  if (!text.includes('Eloma Group')) return text
  const parts = text.split('Eloma Group')
  return parts.map((p, i) => (
    <Fragment key={i}>
      {i > 0 && <ElomaLink />}
      {p}
    </Fragment>
  ))
}
