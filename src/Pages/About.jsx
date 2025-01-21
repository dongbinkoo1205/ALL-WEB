import { useEffect } from 'react';
import Header from '../components/Header';
import HorizontalScroll from '../components/HorizontalScroll';
function About() {
    useEffect(() => {
        // 컴포넌트가 마운트될 때 스크롤 초기화
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="About">
            {/* Header Section */}
            <Header title={'수정가능한 텍스트 영역'} size={'20px'} font={'NEXON Lv1 Gothic OTF'}></Header>
            <HorizontalScroll />
        </div>
    );
}

export default About;
