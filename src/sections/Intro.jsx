import SectionHeader from '../components/SectionHeader.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { ShieldCheck, WifiOff, Wallet, Wrench } from 'lucide-react'

// 로컬 AI를 왜 배우는가 — 동기 부여 섹션.
export default function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <SectionHeader
          kicker="왜 로컬 AI인가"
          title="클라우드를 떠나, 내 손안의 AI로"
          sub="ChatGPT 같은 서비스는 강력하지만, 내 데이터가 외부 서버로 나가고 매달 비용이 듭니다. 로컬 LLM은 이 전제를 뒤집습니다 — 모델 전체를 내 PC에 내려받아 인터넷 없이 직접 구동합니다."
        />
        <div className="grid grid-4">
          <FeatureCard icon={ShieldCheck} title="완전한 프라이버시" delay={0}>
            대화·문서가 내 컴퓨터를 벗어나지 않습니다. 민감한 연구·상담·개인 자료에 적합합니다.
          </FeatureCard>
          <FeatureCard icon={WifiOff} title="오프라인 동작" teal delay={80}>
            한 번 모델을 받아두면 인터넷 없이도 작동합니다. 비행기·외부망 차단 환경에서도 사용 가능.
          </FeatureCard>
          <FeatureCard icon={Wallet} title="비용 없음" delay={160}>
            API 사용료·구독료가 없습니다. 전기료를 제외하면 무제한으로 질문할 수 있습니다.
          </FeatureCard>
          <FeatureCard icon={Wrench} title="나에게 딱 맞춤" teal delay={240}>
            모델 교체, 시스템 프롬프트 변경, 내 문서 연결(RAG), 미세조정까지 마음대로.
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
