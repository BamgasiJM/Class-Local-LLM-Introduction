import Reveal from './Reveal.jsx'

// VRAM 점유를 막대로 시각화. total=총 VRAM(GB), items=[{label, gb, color}]
export default function HardwareGuide({ total = 12, items }) {
  return (
    <Reveal>
      <div className="nm-card feature">
        <h3 style={{ marginTop: 0 }}>RTX 3060 12GB · 모델별 VRAM 점유</h3>
        <p style={{ marginBottom: '1.2rem' }}>
          막대 = 모델이 차지하는 VRAM. 12GB 선을 넘으면 일부가 시스템 RAM으로 넘어가(offload) 속도가 급격히 느려집니다.
        </p>
        {items.map((it, i) => {
          const pct = Math.min(100, (it.gb / total) * 100)
          return (
            <div key={i} style={{ marginBottom: '1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem', fontWeight: 600 }}>
                <span>{it.label}</span>
                <span className="muted">{it.gb} GB / {total} GB</span>
              </div>
              <div className="vram-bar">
                <div className="vram-fill" style={{ width: pct + '%', background: it.color }}>
                  {pct > 22 ? `${Math.round(pct)}%` : ''}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Reveal>
  )
}
