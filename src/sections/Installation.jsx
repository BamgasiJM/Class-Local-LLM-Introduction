import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import InstallationSteps from "../components/InstallationSteps.jsx";
import Callout from "../components/Callout.jsx";
import { Rocket, Container, TerminalSquare } from "lucide-react";

// Ollama + Open WebUI 설치 — 두 가지 방식(Docker / pip·venv)을 토글로 제공.
export default function Installation() {
  // 'docker' | 'pip' 선택 상태
  const [method, setMethod] = useState("docker");

  // 공통 1단계: Ollama 설치 + 모델 받기 (방식과 무관)
  const commonSteps = [
    {
      title: "Ollama 설치",
      desc: "ollama.com 에서 OS에 맞는 설치 파일을 받습니다. Windows는 설치 후 자동 실행, macOS/Linux는 아래 명령으로도 가능합니다.",
      code: "# macOS / Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# 설치 확인\nollama --version",
    },
    {
      title: "첫 모델 내려받기",
      desc: "RTX 3060 12GB에 잘 맞는 경량·고성능 모델을 받아봅니다. 한국어가 필요하면 Qwen을 추천합니다.",
      code: "# 한국어/코딩에 강한 7B\nollama pull qwen2.5:7b\n\n# 바로 대화 테스트\nollama run qwen2.5:7b",
    },
  ];

  // 방식 A: Docker
  const dockerSteps = [
    {
      title: "Docker 설치",
      desc: "Open WebUI를 컨테이너로 띄우기 위해 Docker Desktop을 설치하고 실행해 둡니다. (Windows는 WSL2 필요)",
      code: "# 설치 후 동작 확인\ndocker --version",
    },
    {
      title: "Open WebUI 컨테이너 실행",
      desc: "아래 한 줄이면 컨테이너가 뜨고, 호스트의 Ollama에 자동 연결됩니다. --restart always 로 재부팅 후 자동 시작됩니다.",
      code: "docker run -d -p 3000:8080 \\\n  --add-host=host.docker.internal:host-gateway \\\n  -v open-webui:/app/backend/data \\\n  --name open-webui --restart always \\\n  ghcr.io/open-webui/open-webui:main",
    },
    {
      title: "브라우저에서 접속",
      desc: "http://localhost:3000 에 접속해 첫 관리자 계정을 만들고, 받아둔 모델을 선택하면 끝!",
      code: "# 주소창에 입력\nhttp://localhost:3000",
    },
  ];

  // 방식 B: pip + venv (Python 3.11)
  const pipSteps = [
    {
      title: "Python 3.11 설치",
      desc: "Open WebUI는 현재 Python 3.11을 공식 요구합니다. 3.12 이상에서는 호환 문제가 생길 수 있으니 반드시 3.11을 설치하세요.",
      code: "# 버전 확인 (3.11.x 여야 함)\npython3.11 --version",
    },
    {
      title: "가상환경(.venv) 생성 & 활성화",
      desc: "시스템 파이썬과 충돌하지 않도록 프로젝트 폴더에 격리된 가상환경을 만듭니다.",
      code: "# 가상환경 생성\npython3.11 -m venv .venv\n\n# 활성화 (macOS / Linux)\nsource .venv/bin/activate\n\n# 활성화 (Windows PowerShell)\n.venv\\Scripts\\Activate.ps1",
    },
    {
      title: "Open WebUI 설치",
      desc: "활성화된 가상환경 안에서 pip로 설치합니다. 의존성이 많아 수 분 걸릴 수 있습니다.",
      code: "# 최신 버전 설치\npip install -U open-webui",
    },
    {
      title: "서버 실행",
      desc: "open-webui serve 명령으로 서버를 띄웁니다. 기본 포트는 8080입니다. (호스트의 Ollama를 자동 감지)",
      code: "# 서버 시작\nopen-webui serve\n\n# 접속 주소\nhttp://localhost:8080",
    },
  ];

  const steps = [
    ...commonSteps,
    ...(method === "docker" ? dockerSteps : pipSteps),
  ];

  // 토글 버튼 스타일 (선택 시 inset 으로 눌린 느낌)
  const tabStyle = (active) => ({
    boxShadow: active ? "var(--inset-deep)" : "var(--extruded)",
    color: active ? "var(--accent)" : "var(--muted)",
  });

  return (
    <section id="install">
      <div className="container">
        <SectionHeader
          kicker="실습"
          title="설치 Step-by-Step"
          sub="Ollama(엔진)는 공통으로 설치하고, Open WebUI(화면)는 두 가지 방식 중 환경에 맞는 쪽을 고르세요. 명령어는 그대로 복사해 사용할 수 있습니다."
        />

        {/* 방식 선택 토글 */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          <button
            className="nm-btn"
            style={tabStyle(method === "docker")}
            onClick={() => setMethod("docker")}
          >
            <Container size={18} /> 방식 A · Docker{" "}
            <span className="chip accent" style={{ marginLeft: 4 }}>
              권장
            </span>
          </button>
          <button
            className="nm-btn"
            style={tabStyle(method === "pip")}
            onClick={() => setMethod("pip")}
          >
            <TerminalSquare size={18} /> 방식 B · pip (venv)
          </button>
        </div>

        {/* 방식 설명 */}
        <div style={{ marginBottom: "1.6rem" }}>
          {method === "docker" ? (
            <Callout
              icon={Container}
              title="Docker 방식 — 가장 안정적 (공식 1순위 권장)"
              teal
            >
              컨테이너로 환경이 완전히 격리되어 의존성 충돌이 없고,
              업데이트·자동시작 관리가 쉽습니다. Docker Desktop 설치가
              부담이라면 방식 B를 고려하세요.
            </Callout>
          ) : (
            <Callout
              icon={TerminalSquare}
              title="pip(venv) 방식 — 가볍고 빠른 진입"
            >
              Docker 없이 <code>Python 3.11 + .venv</code>만으로 설치합니다.
              파이썬에 익숙한 1인 사용자에게 진입장벽이 가장 낮습니다. 단,
              반드시 3.11을 사용하고 가상환경으로 격리하세요.
            </Callout>
          )}
        </div>

        {/* 선택된 방식의 단계 (key로 전환 시 등장 애니메이션 리셋) */}
        <div key={method}>
          <InstallationSteps steps={steps} />
        </div>

        <div className="mt1">
          <Callout icon={Rocket} title="대화 시작" teal>
            접속 후 모델을 고르고 메시지를 입력하면, 내 GPU가 연산을 수행해
            응답을 생성합니다. 인터넷을 꺼도 동작하는지 확인해 보세요. 예)
            "양자화가 무엇인지 대학생에게 설명해줘"
          </Callout>
        </div>
      </div>
    </section>
  );
}
