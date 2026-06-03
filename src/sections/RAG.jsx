import SectionHeader from '../components/SectionHeader.jsx'
import Timeline from '../components/Timeline.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Callout from '../components/Callout.jsx'
import ComparisonTable from '../components/ComparisonTable.jsx'
import { Database, BookOpen, Wand2 } from 'lucide-react'

// RAG 개념 + Fine-tuning 비교.
export default function RAG() {
  return (
    <section id="rag">
      <div className="container">
        <SectionHeader
          kicker="똑똑하게 만들기"
          title="내 자료를 아는 AI — RAG와 미세조정"
          sub="기본 모델은 '내 강의노트·연구자료'를 모릅니다. 이를 가르치는 두 가지 길이 RAG와 Fine-tuning입니다."
        />

        <div className="grid grid-2 mt1">
          <FeatureCard icon={BookOpen} title="RAG (검색 증강 생성)" teal>
            내 문서를 잘게 쪼개 '벡터'로 저장해 두고, 질문이 들어오면 관련 조각을 찾아 프롬프트에 끼워 답하게
            합니다. 모델 자체는 그대로 두고 '참고서를 펴 주는' 방식입니다.
          </FeatureCard>
          <FeatureCard icon={Wand2} title="Fine-tuning (미세조정)">
            모델 가중치 자체를 내 데이터로 추가 학습시켜 말투·전문지식을 '체화'시킵니다. 효과는 강력하지만
            데이터·GPU·시간이 더 필요합니다.
          </FeatureCard>
        </div>

        <h3 style={{ margin: '2.5rem 0 1.2rem', fontFamily: 'Plus Jakarta Sans' }}>RAG 동작 흐름</h3>
        <Timeline items={[
          { title: '1. 문서 업로드', desc: 'Open WebUI에 PDF·메모를 올리면 자동으로 작은 청크로 나눕니다.' },
          { title: '2. 임베딩 & 저장', desc: '각 청크를 의미 벡터로 바꿔 벡터DB에 보관합니다.' },
          { title: '3. 질문 → 검색', desc: '질문과 의미가 가까운 청크를 골라냅니다.' },
          { title: '4. 근거와 함께 답변', desc: '찾은 내용을 모델에게 함께 주어, 내 자료에 근거한 답을 생성합니다.' },
        ]} />

        <h3 style={{ margin: '2.5rem 0 1.2rem', fontFamily: 'Plus Jakarta Sans' }}>RAG vs Fine-tuning</h3>
        <ComparisonTable
          columns={['항목', 'RAG', 'Fine-tuning']}
          rows={[
            ['난이도', '쉬움 (UI로 가능)', '높음 (학습 필요)'],
            ['자료 갱신', '파일 교체만 하면 즉시', '재학습 필요'],
            ['하드웨어 부담', '낮음', '높음 (GPU·시간)'],
            ['출처 제시', '✓ (근거 추적)', '어려움'],
            ['말투·스타일 체화', '제한적', '✓ (강력)'],
            ['강의자료 활용', '✓ 추천', '대규모일 때'],
          ]}
        />
        <div className="mt2">
          <Callout icon={Database} title="강의에는 RAG부터" teal>
            대부분의 '내 자료 비서'는 RAG로 충분합니다. Open WebUI의 문서 업로드 기능만으로 강의노트 기반
            Q&A 봇을 만들 수 있습니다. 미세조정은 자료가 매우 많거나 특정 말투가 꼭 필요할 때 고려하세요.
          </Callout>
        </div>
      </div>
    </section>
  )
}
