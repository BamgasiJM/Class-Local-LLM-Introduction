import SectionHeader from '../components/SectionHeader.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { MessagesSquare, Users, FileText, Settings2 } from 'lucide-react'
import Callout from '../components/Callout.jsx'

// Open WebUI가 Ollama 위에서 어떤 역할을 하는지(UI 레이어) 설명.
export default function OpenWebUI() {
  return (
    <section id="openwebui">
      <div className="container">
        <SectionHeader
          kicker="사용자 화면"
          title="Open WebUI — ChatGPT 같은 인터페이스"
          sub="터미널 대화는 불편합니다. Open WebUI는 Ollama에 연결되는 웹 화면으로, ChatGPT와 거의 똑같은 채팅 경험을 브라우저에서 제공합니다."
        />
        <div className="grid grid-4">
          <FeatureCard icon={MessagesSquare} title="친숙한 채팅 UI" delay={0}>
            대화 기록, 마크다운·코드 하이라이트, 모델 전환을 클릭으로. 터미널 지식이 없어도 됩니다.
          </FeatureCard>
          <FeatureCard icon={Users} title="다중 사용자" teal delay={80}>
            계정·권한 관리를 지원해 연구실·강의실에서 여러 명이 한 서버를 공유할 수 있습니다.
          </FeatureCard>
          <FeatureCard icon={FileText} title="문서 업로드(RAG)" delay={160}>
            PDF·문서를 올려 '내 자료에 근거해 답하는' AI를 만들 수 있습니다. (뒤 RAG 섹션 참고)
          </FeatureCard>
          <FeatureCard icon={Settings2} title="모델·프롬프트 관리" teal delay={240}>
            시스템 프롬프트, 모델 파라미터, 커스텀 봇(Model)을 화면에서 손쉽게 설정합니다.
          </FeatureCard>
        </div>
        <div className="mt2">
          <Callout icon={MessagesSquare} title="역할 분담 정리">
            <strong>Ollama</strong>(엔진, 모델 실행·API) + <strong>Open WebUI</strong>(화면, 채팅·문서·계정) =
            내 PC 안의 '나만의 ChatGPT'. 다음 섹션에서 이 둘을 실제로 설치합니다.
          </Callout>
        </div>
      </div>
    </section>
  )
}
