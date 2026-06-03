import Reveal from './Reveal.jsx'

// 설치 단계. steps=[{title, desc, code}]. code 안의 # 주석 줄은 흐리게 표시.
function Code({ text }) {
  return (
    <pre className="code"><code>{text.split('\n').map((line, i) => (
      <span key={i} className={line.trim().startsWith('#') ? 'cmt' : ''}>{line}{'\n'}</span>
    ))}</code></pre>
  )
}

export default function InstallationSteps({ steps }) {
  return (
    <div>
      {steps.map((s, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="nm-card step">
            <div className="step-num">{i + 1}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              {s.code && <Code text={s.code} />}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
