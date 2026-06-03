import SectionHeader from '../components/SectionHeader.jsx'
import Timeline from '../components/Timeline.jsx'
import Callout from '../components/Callout.jsx'
import { Bot } from 'lucide-react'

// 실제 'AI 비서' 구축 예시 — 종합 정리.
export default function Assistant() {
  return (
    <section id="assistant">
      <div className="container">
        <SectionHeader
          kicker="종합 실습"
          title="나만의 AI 비서 완성하기"
          sub="지금까지 배운 조각을 합쳐 '내 강의·연구를 돕는 비서'를 만듭니다. 예시 시나리오를 따라가 봅시다."
        />
        <div className="grid grid-2">
          <Timeline items={[
            { title: '1. 베이스 모델 선택', desc: 'RTX 3060이면 qwen2.5:14b (한국어·균형) 또는 llama3.1:8b.' },
            { title: '2. 시스템 프롬프트 작성', desc: '"너는 영상디자인 수업 조교다. 학생 눈높이로 친절히 설명한다" 식으로 역할을 고정.' },
            { title: '3. 강의자료 연결(RAG)', desc: '강의노트·교안 PDF를 업로드해 내 커리큘럼에 근거한 답변 유도.' },
            { title: '4. 커스텀 봇으로 저장', desc: 'Open WebUI의 Model 기능으로 "영상디자인 조교" 봇을 저장해 재사용.' },
            { title: '5. 학생과 공유', desc: '다중 사용자 계정을 열어 강의실에서 함께 사용.' },
          ]} />
          <div>
            <Callout icon={Bot} title="예시 시스템 프롬프트" teal>
              "당신은 '영상디자인개론' 과목의 AI 조교입니다. 업로드된 강의자료에 근거해 답하고, 출처가 없으면
              추측하지 말고 '자료에 없다'고 말합니다. 전문 용어는 영어 원어를 병기하고, 한국어로 친절하게
              단계별로 설명합니다."
            </Callout>
            <div className="mt1">
              <Callout icon={Bot} title="활용 아이디어">
                강의 Q&A 봇, 과제 피드백 보조, 코드 설명(p5.js·C#), 논문 요약, 상담심리 용어 정리 등 —
                모두 내 PC 안에서, 비용 없이, 자료 유출 걱정 없이.
              </Callout>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
