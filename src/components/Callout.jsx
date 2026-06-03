import { Info } from 'lucide-react'
import Reveal from './Reveal.jsx'

// 강조 박스. icon 기본 Info.
export default function Callout({ icon: Icon = Info, title, children, teal }) {
  return (
    <Reveal>
      <div className="nm-card callout">
        <span className={`icon-well ${teal ? 'teal' : ''}`} style={{ width: 52, height: 52 }}>
          <Icon size={24} />
        </span>
        <div>
          {title && <strong style={{ display: 'block', marginBottom: '.3rem' }}>{title}</strong>}
          <p>{children}</p>
        </div>
      </div>
    </Reveal>
  )
}
