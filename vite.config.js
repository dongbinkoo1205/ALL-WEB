import { defineConfig } from 'vite'; // defineConfig를 반드시 import
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 절대 경로 설정
        },
    },
    build: {
        target: 'esnext', // 최신 브라우저 타겟
        outDir: 'dist', // 빌드 결과물 저장 폴더
    },
});
