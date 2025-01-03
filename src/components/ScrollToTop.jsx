import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 페이지 전환 시 세로 및 가로 스크롤 초기화
        window.scrollTo({
            top: 0, // 세로 스크롤 위치 초기화
            left: 0, // 가로 스크롤 위치 초기화
            behavior: 'auto', // 즉시 이동
        });
    }, [pathname]); // pathname이 변경될 때마다 실행

    return null;
}

export default ScrollToTop;
