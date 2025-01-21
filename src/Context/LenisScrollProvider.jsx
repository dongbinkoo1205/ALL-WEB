import { useEffect, useRef, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export const LenisContext = createContext(null);

function LenisScrollProvider({ children }) {
    const lenisRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1,
        });
        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    useEffect(() => {
        // 페이지 전환 후 .Fix 요소에 wheel 이벤트 다시 등록
        const FixSections = document.querySelectorAll('.ScrollAdd');
        FixSections.forEach((section) => {
            section.addEventListener('wheel', (e) => e.stopPropagation());
        });

        // Cleanup: 이전 이벤트 리스너 제거
        return () => {
            FixSections.forEach((section) => {
                section.removeEventListener('wheel', (e) => e.stopPropagation());
            });
        };
    }, [location]); // location 변경 시 실행

    return <LenisContext.Provider value={lenisRef.current}>{children}</LenisContext.Provider>;
}

export default LenisScrollProvider;
