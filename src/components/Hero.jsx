import { Cpu, ArrowDown, ShieldCheck, Sparkles } from 'lucide-react'

// 첫 화면. 동심원 뉴모피즘 장식 + 핵심 메시지 + 스크롤 유도.
export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <span className="chip accent">
            <Sparkles size={15} /> BamgasiJM 강의 자료
          </span>
          <h1 className="mt1">
            내 컴퓨터에서
            <br />
            돌아가는
            <br />
            <span className="grad">나만의 AI 비서</span>
            <br />만들기
          </h1>
          <p className="lead">
            클라우드 없이, 내 PC 안에서 동작하는 로컬 LLM의 개념부터 Ollama ·
            Open WebUI 설치, RTX 3060 기준 모델 선택, 그리고 ComfyUI 이미지
            생성까지 — 스크롤 한 번으로 전 과정을 따라가 봅니다.
          </p>
          <div className="hero-cta">
            <a className="nm-btn primary" href="#intro">
              <ArrowDown size={18} /> 시작하기
            </a>
            <a className="nm-btn" href="#install">
              <ShieldCheck size={18} /> 설치 가이드로
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="rings floating">
            <div className="ring r1" />
            <div className="ring r2" />
            <div className="ring r3" />
            <div className="ring r4">
              <Cpu size={30} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
