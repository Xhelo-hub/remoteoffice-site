import type { SVGProps } from 'react'

export type IconName =
  | 'arrow-right' | 'file-check' | 'calendar-check' | 'shield' | 'users' | 'list'
  | 'lock' | 'message-circle' | 'grid' | 'check' | 'phone' | 'mail'

// Outline icons, 2 px stroke, slightly rounded corners (brand guidelines, "Elementet vizuale").
const paths: Record<IconName, string[]> = {
  'arrow-right': ['M5 12h14M12 5l7 7-7 7'],
  'file-check': ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'm9 15 2 2 4-4'],
  'calendar-check': ['M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M16 2v4M8 2v4M3 10h18', 'm9 16 2 2 4-4'],
  shield: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'm9 12 2 2 4-4'],
  users: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  list: ['M8 6h13M8 12h13M8 18h13', 'M3 6h.01M3 12h.01M3 18h.01'],
  lock: ['M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z', 'M7 11V7a5 5 0 0 1 10 0v4'],
  'message-circle': ['M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'],
  grid: [
    'M4 3h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z',
    'M14 3h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z',
    'M4 13h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z',
    'M14 13h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z',
  ],
  check: ['m5 12 5 5L20 7'],
  phone: ['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z'],
  mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'm22 6-10 7L2 6'],
}

type IconProps = { name: IconName } & Omit<SVGProps<SVGSVGElement>, 'name'>

export function Icon({ name, className, ...rest }: IconProps) {
  return (
    <svg className={className ? `icon ${className}` : 'icon'} viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...rest}>
      {paths[name].map((d) => <path key={d} d={d} />)}
    </svg>
  )
}

// The mark: an open door in a rounded navy tile with three gold rings on its hinge. Colours are fixed.
function MarkShapes() {
  return (
    <>
      <rect width="64" height="64" rx="14" fill="#1D4E89" />
      <path d="M20 50V16h24v34" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M20 16 36 21.5v23L20 50Z" fill="#FFFFFF" />
      <g fill="#C9A227"><circle cx="20" cy="24.5" r="3" /><circle cx="20" cy="33" r="3" /><circle cx="20" cy="41.5" r="3" /></g>
      <g fill="#1D4E89"><circle cx="20" cy="24.5" r="1.1" /><circle cx="20" cy="33" r="1.1" /><circle cx="20" cy="41.5" r="1.1" /></g>
    </>
  )
}

export function LogoMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <MarkShapes />
    </svg>
  )
}

// Hero illustration: document cards, a calendar with ONE gold-checked deadline, and the door motif.
export function HeroIllustration({ totalLabel }: { totalLabel: string }) {
  const cols = [307, 337, 367, 397, 427, 457, 487]
  const rows = [166, 192, 218, 244, 270]
  const cells: Array<[number, number]> = []
  rows.forEach((y, r) => cols.forEach((x, c) => {
    if (r === 4 && c > 4) return
    if (x === 397 && y === 218) return
    cells.push([x, y])
  }))
  return (
    <svg className="hero-illustration" viewBox="0 0 560 440" aria-hidden="true" focusable="false">
      <circle cx="300" cy="225" r="205" fill="none" className="ill-border" strokeWidth="1.5" strokeDasharray="3 7" />

      <rect x="72" y="46" width="230" height="300" rx="14" className="ill-surface ill-border" strokeWidth="1.5" opacity="0.7" />
      <rect x="56" y="58" width="230" height="300" rx="14" className="ill-surface ill-border" strokeWidth="1.5" opacity="0.85" />
      <rect x="40" y="70" width="230" height="300" rx="14" className="ill-surface ill-border" strokeWidth="1.5" />
      <rect x="64" y="96" width="112" height="10" rx="5" className="ill-primary" />
      <rect x="64" y="126" width="182" height="8" rx="4" className="ill-line" />
      <rect x="64" y="146" width="150" height="8" rx="4" className="ill-line" />
      <rect x="64" y="166" width="170" height="8" rx="4" className="ill-line" />
      <rect x="64" y="186" width="120" height="8" rx="4" className="ill-line" />
      <line x1="64" y1="220" x2="246" y2="220" className="ill-border" strokeWidth="1.5" />
      <text x="64" y="248" className="ill-muted" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="500" letterSpacing="1">{totalLabel}</text>
      <text x="246" y="248" textAnchor="end" className="ill-text num" fontFamily="Inter, system-ui, sans-serif" fontSize="15" fontWeight="600">124 800,00</text>
      <line x1="64" y1="264" x2="246" y2="264" className="ill-border" strokeWidth="1.5" />
      <rect x="64" y="318" width="52" height="24" rx="6" className="ill-bg ill-border" strokeWidth="1.5" />
      <text x="90" y="334" textAnchor="middle" className="ill-muted" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="500" letterSpacing="1">PDF</text>
      <path d="M232 322l4 4 8-8" fill="none" className="ill-stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="290" y="90" width="230" height="210" rx="14" className="ill-surface ill-border" strokeWidth="1.5" />
      <rect x="312" y="110" width="84" height="10" rx="5" className="ill-line" />
      <circle cx="486" cy="115" r="3" className="ill-line" />
      <circle cx="500" cy="115" r="3" className="ill-line" />
      <line x1="290" y1="134" x2="520" y2="134" className="ill-border" strokeWidth="1.5" />
      <g className="ill-line">{cols.map((x) => <rect key={x} x={x + 5} y="148" width="12" height="4" rx="2" />)}</g>
      <g className="ill-bg ill-border" strokeWidth="1">{cells.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="22" height="22" rx="6" />)}</g>
      <rect x="397" y="218" width="22" height="22" rx="6" fill="#C9A227" />
      <path d="M402.5 229.5l3.5 3.5 7-8" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      <g transform="translate(404 316) scale(1.5)"><MarkShapes /></g>
      <path d="M270 330h60c14 0 20 6 34 6h28" fill="none" className="ill-border" strokeWidth="1.5" strokeDasharray="4 5" />
    </svg>
  )
}
