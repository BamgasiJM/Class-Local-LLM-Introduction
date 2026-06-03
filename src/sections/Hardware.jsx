import SectionHeader from '../components/SectionHeader.jsx'
import HardwareGuide from '../components/HardwareGuide.jsx'
import ModelCards from '../components/ModelCards.jsx'
import Callout from '../components/Callout.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { MemoryStick, Gauge, Layers, Cpu } from 'lucide-react'

// VRAM 개념 + RTX 3060 12GB 기준 + 모델 크기 + 양자화.
export default function Hardware() {
  return (
    <section id="hardware">
      <div className="container">
        <SectionHeader
          kicker="하드웨어"
          title="내 PC로 어디까지? — VRAM 이야기"
          sub="로컬 LLM의 속도와 가능 여부를 결정하는 핵심은 GPU의 VRAM(그래픽 메모리)입니다. 기준 그래픽카드는 RTX 3060 12GB로 잡습니다."
        />

        <div className="grid grid-3 mt1" style={{ marginBottom: '2.5rem' }}>
          <FeatureCard icon={MemoryStick} title="VRAM이란?" delay={0}>
            GPU 전용 메모리입니다. 모델의 가중치 전체가 이 VRAM 안에 '통째로' 올라가야 GPU가 빠르게 연산합니다.
            RTX 3060은 12GB로, 동급에서 가성비가 가장 좋은 입문 카드입니다.
          </FeatureCard>
          <FeatureCard icon={Gauge} title="넘치면 느려진다" teal delay={80}>
            모델이 12GB를 초과하면 초과분이 시스템 RAM·CPU로 넘어갑니다(offload). 동작은 하지만 속도가
            수 배~수십 배 느려집니다. '들어가느냐'가 곧 '쾌적하냐'입니다.
          </FeatureCard>
          <FeatureCard icon={Layers} title="VRAM = 모델 + 여유" delay={160}>
            모델 가중치 외에 문맥(KV 캐시)·OS·다른 앱도 VRAM을 씁니다. 실제로는 12GB 중 약 10~11GB를
            모델에 쓸 수 있다고 보고 여유를 둬야 합니다.
          </FeatureCard>
        </div>

        <HardwareGuide
          total={12}
          items={[
            { label: 'Gemma2 2B (Q4)',  gb: 2.0,  color: 'linear-gradient(90deg,#38B2AC,#6C63FF)' },
            { label: 'Qwen2.5 7B (Q4)', gb: 5.5,  color: 'linear-gradient(90deg,#38B2AC,#6C63FF)' },
            { label: 'Llama3.1 8B (Q4)', gb: 6.0, color: 'linear-gradient(90deg,#38B2AC,#6C63FF)' },
            { label: 'Qwen2.5 14B (Q4)', gb: 9.5, color: 'linear-gradient(90deg,#6C63FF,#8B84FF)' },
            { label: 'Qwen2.5 32B (Q4)', gb: 20,  color: 'linear-gradient(90deg,#b06,#8B84FF)' },
            { label: 'Llama3.1 70B (Q4)', gb: 42, color: 'linear-gradient(90deg,#b06,#8B84FF)' },
          ]}
        />

        <h3 style={{ margin: '2.8rem 0 1.2rem', fontFamily: 'Plus Jakarta Sans' }}>모델 크기별 — RTX 3060 12GB 적합도</h3>
        <ModelCards models={[
          { size: '7B', name: '입문·일상', fit: 'ok',
            notes: ['VRAM 약 5~6GB', '빠르고 쾌적', '한국어는 Qwen2.5 추천', '일상 질문·요약·코딩'] },
          { size: '14B', name: '균형점', fit: 'ok',
            notes: ['VRAM 약 9~10GB', '12GB에 딱 맞음', '품질↑ 속도 적당', '가장 추천하는 크기'] },
          { size: '32B', name: '고품질', fit: 'tight',
            notes: ['Q4도 약 20GB', '단독은 어려움', '일부 offload 필요', '느리지만 동작은 가능'] },
          { size: '70B', name: '초대형', fit: 'no',
            notes: ['Q4도 약 40GB+', '3060 단독 불가', '다중 GPU/서버급 필요', '클라우드가 현실적'] },
        ]} />

        <h3 style={{ margin: '2.8rem 0 1.2rem', fontFamily: 'Plus Jakarta Sans' }}>양자화(Quantization) — 모델 다이어트</h3>
        <div className="grid grid-2">
          <Callout icon={Cpu} title="양자화란?" teal>
            가중치를 16비트(FP16)에서 4비트(Q4) 등으로 '압축'해 용량을 1/3~1/4로 줄이는 기술입니다.
            덕분에 14B 모델도 12GB VRAM에 들어갑니다. 품질 손실은 Q4 기준 대체로 미미합니다.
          </Callout>
          <Callout icon={Layers} title="어떤 양자화를 고를까">
            <strong>Q4_K_M</strong>이 용량·품질 균형으로 가장 무난합니다. VRAM이 빠듯하면 Q3, 여유가 있고
            품질을 더 원하면 Q5/Q6. Ollama는 보통 Q4를 기본 제공하므로 초보자는 기본값이면 충분합니다.
          </Callout>
        </div>
        <div className="mt2">
          <Callout icon={Gauge} title="RTX 3060 12GB 결론">
            <strong>7B는 여유, 14B가 최적</strong>의 선택입니다. Q4 양자화를 쓰면 14B까지 쾌적하게 돌릴 수 있어
            '나만의 AI 비서'용으로 충분합니다. 32B 이상은 속도를 감수하거나 더 큰 GPU가 필요합니다.
          </Callout>
        </div>
      </div>
    </section>
  )
}
