import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 개발/빌드 설정. React 플러그인만 사용.
export default defineConfig({
  plugins: [react()],
})
