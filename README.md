# 나만의 AI 비서 만들기 · 로컬 LLM 완전정복

대학 강의용 스크롤형 인포그래픽 웹사이트입니다.
(React + Vite + lucide-react, Neumorphism / Soft UI 디자인)

## 실행 방법

```bash
npm install   # 의존성 설치
npm run dev   # 개발 서버 (http://localhost:5173)
npm run build # 배포용 빌드
```

## 구성

- `src/sections/` : 강의 흐름(인트로 → 로컬LLM → Ollama → OpenWebUI → 하드웨어 → RAG → AI비서 → ComfyUI → 결론)
- `src/components/` : 재사용 UI(타임라인, 비교표, 카드, 설치 스텝, FAQ 등)
- `src/styles/` : 뉴모피즘 디자인 토큰 및 섹션 스타일

기준 하드웨어: **RTX 3060 12GB**
