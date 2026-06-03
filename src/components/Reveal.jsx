import { useReveal } from '../hooks/useReveal.js'

// 스크롤 등장 애니메이션을 입히는 래퍼. delay(ms)로 순차 등장 연출.
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, shown] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
