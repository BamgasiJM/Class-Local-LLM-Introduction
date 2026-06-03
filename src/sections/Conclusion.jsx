import SectionHeader from '../components/SectionHeader.jsx'
import FAQ from '../components/FAQ.jsx'
import { Cpu, ExternalLink } from 'lucide-react'

// FAQ + 참고자료 + 마무리.
export default function Conclusion() {
  const faqs = [
    { q: '인터넷이 꼭 필요한가요?', a: '모델을 처음 내려받을 때만 필요합니다. 이후에는 완전히 오프라인으로 동작합니다.' },
    { q: 'GPU가 없으면 못 쓰나요?', a: 'CPU만으로도 작은 모델(2B~7B)은 동작합니다. 다만 속도가 느립니다. RTX 3060 같은 GPU가 있으면 훨씬 쾌적합니다.' },
    { q: 'RTX 3060 12GB로 가장 좋은 선택은?', a: 'Q4 양자화 기준 14B 모델(예: qwen2.5:14b)이 품질과 속도의 균형점입니다. 빠른 응답이 필요하면 7~8B를 쓰세요.' },
    { q: '한국어 성능이 좋은 모델은?', a: 'Qwen2.5 계열이 한국어와 코딩에서 강점을 보입니다. 범용으로는 Llama 3.1도 좋습니다.' },
    { q: 'Closed LLM(ChatGPT)을 완전히 대체하나요?', a: '최상위 성능은 여전히 클라우드 초거대 모델이 앞섭니다. 다만 프라이버시·비용·오프라인이 중요한 작업에서는 로컬이 더 낫습니다. 둘을 용도에 맞게 병행하는 것이 현실적입니다.' },
    { q: '이미지 생성도 같은 PC에서 되나요?', a: '네. ComfyUI로 Stable Diffusion·Flux 모델을 RTX 3060 12GB에서 구동할 수 있습니다. 원리는 LLM과 동일합니다.' },
  ]
  const refs = [
    ["Ollama 공식", "https://ollama.com"],
    ["Open WebUI 문서", "https://docs.openwebui.com"],
    ["Hugging Face Models", "https://huggingface.co/models"],
    ["ComfyUI (GitHub)", "https://github.com/comfyanonymous/ComfyUI"],
    ["ComfyUI 웹에서 구동", "https://nordy.ai/comfyui/"],
    ["Stability AI", "https://stability.ai"],
    ["Black Forest Labs (Flux)", "https://blackforestlabs.ai"],
  ];
  return (
    <>
      <section id="faq">
        <div className="container">
          <SectionHeader kicker="자주 묻는 질문" title="FAQ" />
          <FAQ items={faqs} />
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <SectionHeader
            kicker="마무리"
            title="이제, 내 컴퓨터가 AI 서버입니다"
            sub="개념(로컬 LLM) → 도구(Ollama·Open WebUI) → 하드웨어(VRAM·양자화) → 활용(RAG·비서) → 확장(이미지 생성)까지. 이 한 흐름이 '나만의 AI'의 전부입니다."
          />
          <div className="nm-card feature">
            <h3 style={{ marginTop: 0 }}>참고 자료</h3>
            <div className="refs mt1">
              {refs.map(([name, url], i) => (
                <a key={i} href={url} target="_blank" rel="noreferrer">
                  <ExternalLink size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />{name}
                </a>
              ))}
            </div>
          </div>
          <p className="muted center mt2" style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Cpu size={16} /> BamgasiJM | Semyung Univ.
          </p>
        </div>
      </footer>
    </>
  )
}
