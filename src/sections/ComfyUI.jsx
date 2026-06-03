import SectionHeader from '../components/SectionHeader.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import ComparisonTable from '../components/ComparisonTable.jsx'
import Callout from '../components/Callout.jsx'
import { ImagePlus, Workflow, Sparkles, Layers } from 'lucide-react'

// 특별 부록: 로컬 이미지 생성 모델 + ComfyUI + SD/Flux + LLM과 비교.
export default function ComfyUI() {
  return (
    <section id="comfyui">
      <div className="container">
        <div className="chip accent" style={{ marginBottom: '1rem' }}><Sparkles size={15} /> 특별 부록</div>
        <SectionHeader
          kicker="텍스트를 넘어 이미지로"
          title="로컬 이미지 생성 — ComfyUI & Stable Diffusion"
          sub="로컬 모델은 텍스트만 만들지 않습니다. 같은 원리로 '이미지를 생성하는 모델'도 내 GPU에서 돌릴 수 있습니다. LLM을 골라 쓰듯, 이미지 모델도 골라 씁니다."
        />

        <div className="grid grid-3 mt1" style={{ marginBottom: '2.5rem' }}>
          <FeatureCard icon={ImagePlus} title="텍스트 → 이미지" delay={0}>
            "노을 지는 도시, 사이버펑크" 같은 프롬프트를 넣으면 모델이 그림을 그려 냅니다. 원리는 LLM과
            마찬가지로 '학습된 가중치를 내 GPU에 올려' 추론하는 것입니다.
          </FeatureCard>
          <FeatureCard icon={Workflow} title="ComfyUI — 노드형 작업판" teal delay={80}>
            Ollama가 LLM 엔진이라면, ComfyUI는 이미지 생성의 '엔진+편집기'입니다. 노드를 연결해 생성
            과정을 시각적으로 조립하고, 모델을 자유롭게 교체합니다.
          </FeatureCard>
          <FeatureCard icon={Layers} title="모델을 골라 쓰기" delay={160}>
            LLM에서 Llama·Qwen을 고르듯, 이미지에서는 SD1.5·SDXL·Flux 같은 체크포인트를 내려받아
            드롭다운에서 선택해 사용합니다.
          </FeatureCard>
        </div>

        <h3 style={{ margin: '0 0 1.2rem', fontFamily: 'Plus Jakarta Sans' }}>대표 이미지 생성 모델</h3>
        <ComparisonTable
          columns={['모델', '특징', 'RTX 3060 12GB']}
          rows={[
            ['Stable Diffusion 1.5', '가볍고 빠름, 자료·확장 풍부', '✓ 매우 쾌적'],
            ['SDXL', '고해상도·고품질, 다소 무거움', '✓ 구동 가능'],
            ['Flux.1 [dev]', '최신 고품질, 텍스트 표현 우수', '양자화 버전 권장'],
          ]}
        />

        <h3 style={{ margin: '2.8rem 0 1.2rem', fontFamily: 'Plus Jakarta Sans' }}>이미지 생성 모델 vs LLM</h3>
        <ComparisonTable
          columns={['항목', '로컬 LLM (텍스트)', '이미지 생성 모델']}
          rows={[
            ['대표 엔진', 'Ollama', 'ComfyUI / WebUI'],
            ['입력 → 출력', '텍스트 → 텍스트', '텍스트 → 이미지'],
            ['모델 예시', 'Llama, Qwen, Gemma', 'SD1.5, SDXL, Flux'],
            ['공통점', '가중치를 GPU(VRAM)에 올려 추론', '동일'],
            ['VRAM 의존', '✓', '✓'],
            ['양자화 활용', '✓', '✓ (Flux 등)'],
          ]}
        />
        <div className="mt2">
          <Callout icon={Sparkles} title="핵심은 같다" teal>
            텍스트든 이미지든, 로컬 AI의 원리는 동일합니다 — <strong>공개된 모델 가중치를 내 GPU의 VRAM에
            올려 직접 추론</strong>. LLM을 이해했다면 이미지 생성도 같은 사고방식으로 접근할 수 있습니다.
          </Callout>
        </div>
      </div>
    </section>
  )
}
