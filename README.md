# 나만의 AI 비서 만들기 · 로컬 LLM 완전정복

> 대학 강의용 **스크롤형 인포그래픽 웹사이트**
> 로컬 LLM의 개념부터 Ollama · Open WebUI 설치, RTX 3060 12GB 기준 모델 선택, ComfyUI 이미지 생성까지 한 흐름으로 학습합니다.

***

## 1. 프로젝트 개요

`local-llm-course`는 교수의 강의 자료로 사용하기 위해 제작된 **단일 페이지(One-Page) 교육용 웹사이트**입니다.
방문자가 위에서 아래로 스크롤하는 것만으로 "로컬 AI 비서를 만드는 전 과정"을 자연스럽게 따라갈 수 있도록 **하나의 긴 서사 흐름(narrative flow)** 으로 구성했습니다.

### 학습 목표 (콘텐츠 흐름)

| 순서 | 섹션                   | 다루는 내용                                    |
| -- | -------------------- | ----------------------------------------- |
| 1  | **Hero**             | 주제 제시 · 스크롤 유도                            |
| 2  | **소개(Intro)**        | 왜 로컬 AI인가 — 프라이버시 · 오프라인 · 무료 · 커스터마이즈    |
| 3  | **로컬 LLM(LocalLLM)** | 개념, Closed vs Local 비교, 대표 모델 패밀리, 장단점    |
| 4  | **Ollama**           | 모델 구동 '엔진'의 역할과 동작 원리                     |
| 5  | **Open WebUI**       | ChatGPT 같은 '화면' 레이어                       |
| 6  | **설치(Installation)** | Ollama + Open WebUI 6단계 Step-by-Step      |
| 7  | **하드웨어(Hardware)**   | VRAM 개념, RTX 3060 12GB 기준 모델 적합도, 양자화     |
| 8  | **RAG**              | 내 자료를 아는 AI — RAG · Fine-tuning 비교        |
| 9  | **AI 비서(Assistant)** | 종합 실습 — 나만의 비서 구축 시나리오                    |
| 10 | **이미지 생성(ComfyUI)**  | 〔특별 부록〕 Stable Diffusion · Flux, LLM과의 비교 |
| 11 | **결론(Conclusion)**   | FAQ · 참고자료 · 마무리                          |

### 기준 하드웨어

모든 모델 권장·VRAM 계산은 **NVIDIA RTX 3060 12GB**를 기준으로 작성되었습니다.

***

## 2. 기술 스택

| 구분    | 기술                                  | 버전    | 역할                     |
| ----- | ----------------------------------- | ----- | ---------------------- |
| 프레임워크 | **React**                           | 18.3  | UI 컴포넌트 구성             |
| 빌드 도구 | **Vite**                            | 6.0   | 개발 서버 · 번들링 (빠른 HMR)   |
| 아이콘   | **lucide-react**                    | 0.469 | 일관된 라인 아이콘             |
| 스타일   | **순수 CSS** (CSS Variables)          | —     | 뉴모피즘 디자인 토큰            |
| 폰트    | **Plus Jakarta Sans** · **DM Sans** | —     | 제목 / 본문 (Google Fonts) |
| 애니메이션 | **IntersectionObserver API**        | 네이티브  | 스크롤 등장 효과              |

> **외부 UI 라이브러리 없음** — Tailwind·shadcn 등에 의존하지 않고, 디자인 시스템을 CSS 변수로 직접 구현해 가볍고 의존성이 적습니다.

### 요구 환경

* **Node.js 18 이상** (LTS 권장)

* npm (또는 pnpm / yarn)

***

## 3. 설치 및 실행

```bash
# 1) 의존성 설치
npm install

# 2) 개발 서버 실행  → http://localhost:5173
npm run dev

# 3) 배포용 빌드  → dist/
npm run build

# 4) 빌드 결과 미리보기
npm run preview
```

VSCode에서 폴더를 열고 위 명령을 터미널에 입력하면 바로 동작합니다.

***

## 4. 디자인 시스템 — Neumorphism (Soft UI)

차갑고 모던한 **Cool Grey 단색 팔레트** 위에서 "빛과 그림자"만으로 입체감을 만드는 뉴모피즘을 채택했습니다. 모든 요소가 같은 재질에서 빚어진 듯한(molded) 촉각적이고 차분한 인상을 줍니다.

### 색상 토큰

| 토큰           | 값         | 용도                         |
| ------------ | --------- | -------------------------- |
| `--bg`       | `#E0E5EC` | 베이스 'cool clay' 표면 (전역 배경) |
| `--fg`       | `#3D4852` | 기본 텍스트 (대비 7.5:1, AAA)     |
| `--muted`    | `#6B7280` | 보조 텍스트 (대비 4.6:1, AA)      |
| `--accent`   | `#6C63FF` | 소프트 바이올렛 — CTA · 포커스       |
| `--accent-2` | `#38B2AC` | Teal — 성공 · 긍정 지표          |

### 그림자 프리셋 (RGBA 기반)

* `--extruded` : 기본 돌출 상태 (카드 · 버튼)

* `--extruded-hover` : 호버 시 떠오르는 효과

* `--inset` / `--inset-deep` : 눌린 / 깊게 파인 상태 (입력 · 아이콘 웰)

* `--inset-sm` : 미세한 트랙 · 칩

### 그 외 토큰

* **반경**: 컨테이너 `32px`, 버튼 `16px`, 내부 요소 `12px`

* **타이포**: 제목 `Plus Jakarta Sans` (800, tracking-tight) / 본문 `DM Sans` (400\~500)

* **애니메이션**: UI `300ms ease-out`, 장식용 `float 3s` 무한 반복

* **접근성**: 2px 액센트 포커스 링, 최소 44px 터치 타깃, `prefers-reduced-motion` 대응

> 디자인 원칙 상세는 동봉된 `웹디자인 프롬프트 - Neumorphism.md`를 참고하세요.

***

## 5. 파일 트리

```
local-llm-course/
├── index.html              # 진입 HTML · Google Fonts 로드
├── package.json            # 의존성 · 스크립트
├── vite.config.js          # Vite + React 플러그인 설정
├── .gitignore
├── README.md
└── src/
    ├── main.jsx            # React 18 진입점 (root 마운트)
    ├── App.jsx             # 반응형 네비 + 전체 섹션 조립
    │
    ├── hooks/
    │   └── useReveal.js    # IntersectionObserver 스크롤 등장 훅
    │
    ├── components/         # 재사용 UI 컴포넌트
    │   ├── Reveal.jsx          # 스크롤 등장 래퍼
    │   ├── SectionHeader.jsx   # kicker + 제목 + 서브텍스트
    │   ├── Hero.jsx            # 첫 화면 (동심원 장식)
    │   ├── Timeline.jsx        # 세로 타임라인
    │   ├── FeatureCard.jsx     # 아이콘 웰 + 설명 카드
    │   ├── ComparisonTable.jsx # 범용 비교표 (✓/✗ 강조)
    │   ├── HardwareGuide.jsx   # VRAM 점유 막대 시각화
    │   ├── ModelCards.jsx      # 모델 크기 적합도 카드
    │   ├── InstallationSteps.jsx # 번호 매긴 설치 스텝 + 코드 블록
    │   ├── FAQ.jsx             # 아코디언 FAQ
    │   └── Callout.jsx         # 강조 박스
    │
    ├── sections/          # 강의 콘텐츠 섹션 (스크롤 순서)
    │   ├── Intro.jsx           # 왜 로컬 AI인가
    │   ├── LocalLLM.jsx        # 개념 · Closed vs Local · 모델 패밀리
    │   ├── Ollama.jsx          # 구동 엔진
    │   ├── OpenWebUI.jsx       # 사용자 화면
    │   ├── Installation.jsx    # 설치 Step-by-Step
    │   ├── Hardware.jsx        # VRAM · 모델 크기 · 양자화
    │   ├── RAG.jsx             # RAG · Fine-tuning
    │   ├── Assistant.jsx       # AI 비서 구축 예시
    │   ├── ComfyUI.jsx         # 〔부록〕 이미지 생성
    │   └── Conclusion.jsx      # FAQ · 참고자료 · 푸터
    │
    └── styles/
        ├── globals.css        # 디자인 토큰 · 공통 유틸 · 애니메이션
        └── sections.css       # 네비 · Hero · 섹션 레이아웃
```

***

## 6. 컴포넌트 구성

### 6.1 구조 원칙

* **components/** = "어떻게 보이는가"(재사용 UI), **sections/** = "무엇을 말하는가"(콘텐츠)로 명확히 분리.

* 모든 섹션은 `<SectionHeader>` + 데이터를 props로 받는 재사용 컴포넌트의 조합으로 구성 → 콘텐츠 수정이 쉽고 중복이 없습니다.

* 스타일은 컴포넌트별 클래스로 CSS에 집중, 디자인 토큰은 CSS 변수로 중앙 관리.

### 6.2 핵심 재사용 컴포넌트

| 컴포넌트                | Props                                | 설명                                              |
| ------------------- | ------------------------------------ | ----------------------------------------------- |
| `Reveal`            | `delay`, `className`                 | 자식 요소가 뷰포트 진입 시 페이드·슬라이드 등장. 순차 지연으로 stagger 연출 |
| `SectionHeader`     | `kicker`, `title`, `sub`             | 모든 섹션 상단 공통 헤더                                  |
| `Hero`              | —                                    | 동심원(extruded↔inset 교차) + floating 장식, CTA 버튼    |
| `Timeline`          | `items[{title, desc}]`               | inset 트랙 + extruded 도트의 세로 타임라인                 |
| `FeatureCard`       | `icon`, `title`, `teal`, `delay`     | 아이콘 웰을 가진 hover 카드                              |
| `ComparisonTable`   | `columns[]`, `rows[][]`              | `✓`/`✗` 자동 색상 강조 비교표                            |
| `HardwareGuide`     | `total`, `items[{label, gb, color}]` | VRAM 점유율을 막대로 시각화                               |
| `ModelCards`        | `models[{size, name, fit, notes}]`   | 모델 크기별 적합도(ok/tight/no) 카드                      |
| `InstallationSteps` | `steps[{title, desc, code}]`         | 번호 스텝 + 주석 하이라이트 코드 블록                          |
| `FAQ`               | `items[{q, a}]`                      | 단일 개방 아코디언 (`useState`)                         |
| `Callout`           | `icon`, `title`, `teal`              | 보조 설명 강조 박스                                     |

### 6.3 커스텀 훅

* **`useReveal(options)`** — `IntersectionObserver`로 요소의 가시성을 감지해 `in` 상태를 한 번만 토글합니다. 외부 애니메이션 라이브러리 없이 가벼운 스크롤 등장 효과를 구현합니다.

### 6.4 상태 관리

별도 상태 관리 라이브러리 없이 **React 로컬** **`useState`만 사용** — 모바일 메뉴 토글(`App.jsx`), FAQ 아코디언(`FAQ.jsx`)에 한정됩니다. 콘텐츠는 모두 정적 데이터(props)라 전역 상태가 필요 없습니다.

***

## 7. 반응형 · 접근성

* **반응형**: Mobile-First. `860px` 이하에서 네비가 햄버거 메뉴로 전환되고, 그리드(4·3·2열)는 단계적으로 1열로 접힙니다. 폰트·여백은 `clamp()`로 유연하게 축소.

* **접근성**: WCAG AA/AAA 대비 충족, 모든 인터랙티브 요소에 가시적 포커스 링, 44px+ 터치 타깃, `prefers-reduced-motion` 존중(애니메이션 비활성화), 시맨틱 태그(`<nav> <main> <section> <footer>`) 사용.

***

## 8. 콘텐츠 수정 가이드

* **텍스트·표·모델 목록 변경**: 해당 `sections/*.jsx` 파일 안의 데이터 배열(props)만 수정하면 됩니다. 컴포넌트 로직은 건드릴 필요가 없습니다.

* **VRAM 막대 추가**: `Hardware.jsx`의 `<HardwareGuide items={[...]}>` 배열에 `{label, gb, color}` 항목을 추가.

* **색상 테마 변경**: `styles/globals.css` 상단 `:root`의 CSS 변수만 바꾸면 사이트 전체에 일괄 적용됩니다.

* **섹션 순서 변경**: `App.jsx`의 JSX 순서와 `links` 배열을 함께 수정.

***

## 9. 참고 자료

* [Ollama](https://ollama.com) · [Open WebUI](https://docs.openwebui.com)

* [Hugging Face Models](https://huggingface.co/models)

* [ComfyUI](https://github.com/comfyanonymous/ComfyUI) · [Stability AI](https://stability.ai) · [Black Forest Labs (Flux)](https://blackforestlabs.ai)

***

*대학 강의 자료 · 로컬 LLM으로 만드는 나만의 AI 비서 · 기준 GPU: RTX 3060 12GB*
