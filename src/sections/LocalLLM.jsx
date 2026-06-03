import SectionHeader from '../components/SectionHeader.jsx'
import ComparisonTable from '../components/ComparisonTable.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Callout from '../components/Callout.jsx'
import { Cloud, HardDrive, ThumbsUp, ThumbsDown, Boxes } from 'lucide-react'

// 로컬 LLM 개념 + Closed LLM과의 차이 + 대표 모델 비교표.
export default function LocalLLM() {
  return (
    <section id="local-llm">
      <div className="container">
        <SectionHeader
          kicker="개념"
          title="로컬 LLM이란 무엇인가"
          sub="LLM(Large Language Model)은 방대한 텍스트로 학습된 '언어 예측 모델'입니다. 이 모델 파일을 어디에 두고 실행하느냐에 따라 Closed(클라우드)와 Local(로컬)로 나뉩니다."
        />

        <div className="grid grid-2 mt1">
          <FeatureCard icon={Cloud} title="Closed LLM (클라우드)">
            GPT-4, Claude, Gemini처럼 회사 서버에서 돌아갑니다. 우리는 인터넷으로 '요청'만 보내고
            결과를 받습니다. 모델 가중치는 비공개이며, 입력 데이터는 외부로 전송됩니다.
          </FeatureCard>
          <FeatureCard icon={HardDrive} title="Local LLM (로컬)" teal>
            Llama, Qwen, Gemma, Mistral처럼 공개된 가중치 파일을 내 PC에 내려받아 직접 실행합니다.
            GPU(또는 CPU)가 연산을 수행하며, 데이터는 컴퓨터 밖으로 나가지 않습니다.
          </FeatureCard>
        </div>

        <h3 style={{ margin: '2.5rem 0 1.2rem', fontFamily: 'Plus Jakarta Sans' }}>Closed vs Local 한눈에 비교</h3>
        <ComparisonTable
          columns={['항목', 'Closed LLM (클라우드)', 'Local LLM (로컬)']}
          rows={[
            ['프라이버시', '데이터 외부 전송', '✓'],
            ['인터넷 필요', '항상 필요', '최초 1회 다운로드만'],
            ['비용', '구독 / API 사용료', '하드웨어 구매 / 전기료'],
            ['성능 상한', '최상위 (초거대 모델)', 'PC 사양에 종속'],
            ['커스터마이즈', '제한적', '✓'],
            ['설치', '없음', 'Ollama / Open WebUI 설정'],
            ['검열/제한', '제공사 정책 적용', '사용자가 통제'],
          ]}
        />

        <div className="grid grid-2 mt2">
          <Callout icon={ThumbsUp} title="로컬 LLM의 장점" teal>
            프라이버시, 무료 무제한 사용, 오프라인 동작, 모델·프롬프트 완전 제어, 데이터 주권 확보.
          </Callout>
          <Callout icon={ThumbsDown} title="로컬 LLM의 단점">
            초거대 모델 대비 낮은 성능, GPU·VRAM 같은 하드웨어 요구, 초기 설치·관리 부담, 전력 소모.
          </Callout>
        </div>

        <h3 style={{ margin: '2.5rem 0 1.2rem', fontFamily: 'Plus Jakarta Sans' }}>대표 로컬 모델 패밀리</h3>
        <ComparisonTable
          columns={['모델 패밀리', '개발사', '특징', '대표 크기']}
          rows={[
            ['Llama 3.x', 'Meta', '범용 성능 우수, 생태계 가장 큼', '8B · 70B'],
            ['Qwen 2.5', 'Alibaba', '한국어 포함 다국어·코딩 강함', '7B · 14B · 32B · 72B'],
            ['Gemma 2', 'Google', '가볍고 효율적, 소형에 강점', '2B · 9B · 27B'],
            ['Mistral / Mixtral', 'Mistral AI', '경량 고효율, MoE 구조', '7B · 8x7B'],
            ['Phi-4', 'Microsoft', '초소형이지만 똑똑한 추론', '14B'],
            ['DeepSeek-R1', 'DeepSeek', '추론(reasoning) 특화', '7B · 32B · 70B'],
          ]}
        />
        <Callout icon={Boxes} title="B = Billion (10억) 파라미터">
          모델 이름의 7B·70B는 파라미터(가중치) 개수입니다. 숫자가 클수록 똑똑하지만 그만큼 큰 VRAM이 필요합니다.
          뒤의 하드웨어 섹션에서 RTX 3060 12GB로 어디까지 가능한지 다룹니다.
        </Callout>
      </div>
    </section>
  )
}
