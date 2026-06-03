import Reveal from './Reveal.jsx'

// 모든 섹션 상단의 kicker + 제목 + 서브텍스트 공통 헤더.
export default function SectionHeader({ kicker, title, sub }) {
  return (
    <Reveal>
      <div className="sec-head">
        {kicker && <div className="sec-kicker">{kicker}</div>}
        <h2 className="sec-title">{title}</h2>
        {sub && <p className="sec-sub">{sub}</p>}
      </div>
    </Reveal>
  )
}
