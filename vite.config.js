import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ['three-stdlib'],
    },
    build: {
        target: 'esnext', // 최신 브라우저를 타겟으로 설정
        outDir: 'dist', // 빌드 결과물을 저장할 폴더
    },
});
