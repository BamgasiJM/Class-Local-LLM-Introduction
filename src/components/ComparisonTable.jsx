import Reveal from './Reveal.jsx'

// 범용 비교표. columns=[..], rows=[[cell,...]]. 셀 값이 '✓'/'✗' 면 색 강조.
export default function ComparisonTable({ columns, rows }) {
  const render = (c) => {
    if (c === '✓') return <span className="tick">✓</span>
    if (c === '✗') return <span className="cross">✗</span>
    return c
  }
  return (
    <Reveal>
      <div className="nm-card cmp">
        <table className="nm-table">
          <thead>
            <tr>{columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <td key={j}>{render(c)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  )
}
