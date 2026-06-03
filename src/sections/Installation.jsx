import SectionHeader from '../components/SectionHeader.jsx'
import InstallationSteps from '../components/InstallationSteps.jsx'
import Callout from '../components/Callout.jsx'
import { Rocket } from 'lucide-react'

// Ollama + Open WebUI 실제 설치 Step-by-Step.
export default function Installation() {
  const steps = [
    {
      title: 'Ollama 설치',
      desc: 'ollama.com 에서 OS에 맞는 설치 파일을 받습니다. Windows는 설치 후 자동 실행, macOS/Linux는 아래 명령으로도 가능합니다.',
      code: '# macOS / Linux\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# 설치 확인\nollama --version',
    },
    {
      title: '첫 모델 내려받기',
      desc: 'RTX 3060 12GB에 잘 맞는 경량·고성능 모델을 받아봅니다. 한국어가 필요하면 Qwen을 추천합니다.',
      code: '# 범용 8B 모델\nollama pull llama3.1:8b\n\n# 한국어/코딩에 강한 7B\nollama pull qwen2.5:7b\n\n# 바로 대화 테스트\nollama run qwen2.5:7b',
    },
    {
      title: 'Docker 설치 (Open WebUI 준비)',
      desc: 'Open WebUI는 Docker로 띄우는 것이 가장 간편합니다. Docker Desktop을 설치하고 실행해 둡니다.',
      code: '# 설치 후 동작 확인\ndocker --version',
    },
    {
      title: 'Open WebUI 실행',
      desc: '아래 한 줄이면 컨테이너가 뜨고, 호스트의 Ollama에 자동 연결됩니다. NVIDIA GPU 가속을 쓰려면 --gpus all 옵션을 추가합니다.',
      code: 'docker run -d -p 3000:8080 \\\n  --add-host=host.docker.internal:host-gateway \\\n  -v open-webui:/app/backend/data \\\n  --name open-webui --restart always \\\n  ghcr.io/open-webui/open-webui:main',
    },
    {
      title: '브라우저에서 접속',
      desc: 'http://localhost:3000 에 접속해 첫 관리자 계정을 만듭니다. 우측 상단에서 받아둔 모델을 선택하면 끝!',
      code: '# 주소창에 입력\nhttp://localhost:3000',
    },
    {
      title: '대화 시작',
      desc: '모델을 고르고 메시지를 입력하면, 내 GPU가 연산을 수행해 응답을 생성합니다. 인터넷을 꺼도 동작하는지 확인해 보세요.',
      code: '# 예시 프롬프트\n"양자화가 무엇인지 대학생에게 설명해줘"',
    },
  ]
  return (
    <section id="install">
      <div className="container">
        <SectionHeader
          kicker="실습"
          title="설치 Step-by-Step"
          sub="Ollama(엔진)와 Open WebUI(화면)를 차례로 설치해 내 PC에 나만의 ChatGPT를 완성합니다. 명령어는 그대로 복사해 사용할 수 있습니다."
        />
        <InstallationSteps steps={steps} />
        <div className="mt1">
          <Callout icon={Rocket} title="더 간단히 가려면" teal>
            Open WebUI를 Ollama까지 포함한 올인원 이미지로 띄울 수도 있습니다. 다만 GPU 가속·관리 측면에서는
            <code>Ollama 네이티브 설치 + Open WebUI 컨테이너</code> 조합이 가장 안정적입니다.
          </Callout>
        </div>
      </div>
    </section>
  )
}
