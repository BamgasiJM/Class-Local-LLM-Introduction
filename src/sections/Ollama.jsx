import SectionHeader from '../components/SectionHeader.jsx'
import Timeline from '../components/Timeline.jsx'
import Callout from '../components/Callout.jsx'
import { Terminal } from 'lucide-react'

// Ollama가 무엇이고 어떻게 동작하는지(엔진 역할) 설명.
export default function Ollama() {
  return (
    <section id="ollama">
      <div className="container">
        <SectionHeader
          kicker="구동 엔진"
          title="Ollama — 모델을 돌리는 엔진"
          sub="Ollama는 복잡한 로컬 LLM 실행을 'docker처럼' 단순화한 도구입니다. 명령어 한 줄로 모델을 내려받고, 백그라운드에서 모델 서버를 띄워 줍니다."
        />
        <div className="grid grid-2">
          <Timeline items={[
            { title: '1. 모델 저장소(Registry)', desc: 'ollama.com 라이브러리에서 Llama·Qwen·Gemma 등 검증된 모델을 이름만으로 받습니다.' },
            { title: '2. 다운로드 & 캐시', desc: 'ollama pull 한 번이면 양자화된 GGUF 모델을 자동으로 내려받아 보관합니다.' },
            { title: '3. 로컬 API 서버', desc: 'localhost:11434 에서 OpenAI 호환 API를 제공해, 다른 앱이 붙어 쓸 수 있습니다.' },
            { title: '4. GPU 자동 활용', desc: 'NVIDIA GPU를 감지해 VRAM에 모델을 올리고, 부족하면 일부를 CPU로 분산합니다.' },
          ]} />
          <Callout icon={Terminal} title="가장 빠른 체험" teal>
            Ollama 설치 후 터미널에 <code>ollama run llama3.1</code> 한 줄이면, 모델을 받아 바로
            대화창이 열립니다. 즉, Ollama는 '엔진+API 서버', 뒤에 나올 Open WebUI는 '예쁜 화면'입니다.
          </Callout>
        </div>
      </div>
    </section>
  )
}
