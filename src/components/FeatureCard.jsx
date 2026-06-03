import Reveal from './Reveal.jsx'

// 아이콘 웰 + 제목 + 설명을 가진 기본 카드. icon은 lucide 컴포넌트.
export default function FeatureCard({ icon: Icon, title, children, teal, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="nm-card hoverable feature">
        <span className={`icon-well ${teal ? 'teal' : ''}`}><Icon size={28} /></span>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </Reveal>
  )
}
