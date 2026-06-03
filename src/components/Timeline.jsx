import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'

// 세로 타임라인. items=[{title, desc}] 형태.
export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 80}>
          <div className="tl-item">
            <span className="tl-dot"><Check size={15} /></span>
            <h4>{it.title}</h4>
            <p>{it.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
