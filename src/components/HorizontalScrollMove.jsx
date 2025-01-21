import { useEffect, useState, useRef } from 'react';

function HorizontalScrollMove(ref, multiplier) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current;
            if (!element) return;

            // 반응형 조건 분기
            const mediaQuery = window.matchMedia('(min-width: 768px)');
            const rect = element.getBoundingClientRect();

            if (mediaQuery.matches) {
                //PC 버전: 가로 스크롤
                const scrollStart = rect.left;
                const scrollEnd = rect.left + rect.width;

                // 스크롤 진행 계산
                const progress = Math.min(Math.max((window.scrollY - scrollStart) / (scrollEnd - scrollStart), 0), 1);

                // 동작 값 계산 (multiplier 사용)
                setScrollProgress(progress * multiplier);
            } else {
                // Mobile 버전: 세로 스크롤
                const scrollStart = rect.top;
                const scrollEnd = rect.top + rect.height;
                const progress = Math.min(Math.max((window.scrollY - scrollStart) / (scrollEnd - scrollStart), 0), 1);
                setScrollProgress(progress * multiplier);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref, multiplier]);

    return scrollProgress;
}

export default HorizontalScrollMove;
