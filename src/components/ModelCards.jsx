import Reveal from './Reveal.jsx'

// 모델 크기 카드 그리드. models=[{size, name, fit:'ok|tight|no', fitText, notes:[]}]
const fitLabel = { ok: '여유롭게 구동', tight: '양자화 시 가능', no: '단독 구동 어려움' }

export default function ModelCards({ models }) {
  return (
    <div className="grid grid-4">
      {models.map((m, i) => (
        <Reveal key={i} delay={i * 70}>
          <div className="nm-card hoverable model">
            <div className="size">{m.size}</div>
            <div style={{ fontWeight: 700, marginTop: '.2rem' }}>{m.name}</div>
            <div className={`fit ${m.fit}`}>● {m.fitText || fitLabel[m.fit]}</div>
            <ul>{m.notes.map((n, j) => <li key={j}>{n}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
