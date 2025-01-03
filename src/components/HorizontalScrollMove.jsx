import { useEffect, useState, useRef } from 'react';

function HorizontalScrollMove(ref, multiplier = 200) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const scrollStart = rect.left;
            const scrollEnd = rect.left + rect.width;

            // 스크롤 진행 계산
            const progress = Math.min(Math.max((window.scrollX - scrollStart) / (scrollEnd - scrollStart), 0), 1);

            // 동작 값 계산 (multiplier 사용)
            setScrollProgress(progress * multiplier);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref, multiplier]);

    return scrollProgress;
}

export default HorizontalScrollMove;
