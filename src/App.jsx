import { useState } from 'react'
import { Menu, X, Cpu } from 'lucide-react'

import Hero from './components/Hero.jsx'
import Intro from './sections/Intro.jsx'
import LocalLLM from './sections/LocalLLM.jsx'
import Ollama from './sections/Ollama.jsx'
import OpenWebUI from './sections/OpenWebUI.jsx'
import Installation from './sections/Installation.jsx'
import Hardware from './sections/Hardware.jsx'
import RAG from './sections/RAG.jsx'
import Assistant from './sections/Assistant.jsx'
import ComfyUI from './sections/ComfyUI.jsx'
import Conclusion from './sections/Conclusion.jsx'

// 네비게이션 링크 정의 (스크롤 인포그래픽 순서)
const links = [
  ['intro', '소개'],
  ['local-llm', '로컬 LLM'],
  ['ollama', 'Ollama'],
  ['install', '설치'],
  ['hardware', '하드웨어'],
  ['rag', 'RAG'],
  ['assistant', 'AI 비서'],
  ['comfyui', '이미지 생성'],
  ['faq', 'FAQ'],
]

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#top">
            <span className="icon-well"><Cpu size={22} /></span>
            로컬 AI 구축하기
          </a>
          <div className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
            {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
          <button className="nm-btn nav-toggle" onClick={() => setOpen(o => !o)} aria-label="메뉴 열기">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <main id="top">
        <Hero />
        <Intro />
        <LocalLLM />
        <Ollama />
        <OpenWebUI />
        <Installation />
        <Hardware />
        <RAG />
        <Assistant />
        <ComfyUI />
        <Conclusion />
      </main>
    </>
  )
}
