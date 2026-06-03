import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Reveal from './Reveal.jsx'

// 아코디언 FAQ. items=[{q, a}]
export default function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <Reveal key={i} delay={i * 50}>
            <div className="nm-card faq-item" onClick={() => setOpen(isOpen ? -1 : i)}>
              <div className="faq-q">
                <span>{it.q}</span>
                <span className="icon-well" style={{ width: 38, height: 38 }}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </div>
              {isOpen && <div className="faq-a">{it.a}</div>}
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
