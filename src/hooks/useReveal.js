import { useEffect, useRef, useState } from 'react'

// 요소가 뷰포트에 들어오면 in=true 로 바꿔 등장 애니메이션을 트리거하는 훅.
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true)
        io.unobserve(el) // 한 번만 실행
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, shown]
}
