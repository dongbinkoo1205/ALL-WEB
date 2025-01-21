import React, { useRef, useEffect, useState } from 'react';
import './MainPage.css';
import Header from '../components/Header.jsx';
import MainSticky from '../components/MainSticky.jsx';
import MySwiperSlide from '../components/MySwiperSlide.jsx';
import ScrollScale from '../components/ScrollScale.jsx';
import ScrollOpen from '../components/ScrollOpen.jsx';
import VideoCustomCursor from '../components/VideoCustomCursor.jsx';
import MouseOver from '../components/MouseOver.jsx';
import TransCustomCursor from '../components/TransCustomCursor.jsx';
import ScrollChange from '../components/ScrollChange.jsx';
import Scene from '../components/ThreeJsScene.jsx';
import Footer from '../components/Footer.jsx';

function MainPage() {
    const scrollY = useRef(0);
    const [activeSection, setActiveSection] = useState(null);

    const handleScroll = () => {
        scrollY.current = window.scrollY;

        // 각 섹션의 top 값을 계산
        const chageElementSection = document.querySelectorAll('.chageElement');
        const topValues = Array.from(chageElementSection).map((element) => {
            return {
                top: element.getBoundingClientRect().top,
                height: element.getBoundingClientRect().height,
            };
        });

        // some 매서드에 대하여
        // 배열 안의 모든 요소를 하나씩 검사함
        // 조건이 맞는 첫 번째 요소를 찾으면
        // true를 반환하고, 더 이상 검사하지 않고 멈춘다
        // 조건에 맞는 요소가 하나도 없으면, false를 반환한다
        topValues.some((value, index) => {
            const adjustedTop = value.top + window.scrollY; // 문서 기준으로 보정

            if (scrollY.current >= adjustedTop && scrollY.current < adjustedTop + value.height) {
                setActiveSection(`ScrollScale${index + 1}`); // 조건에 맞는 섹션 설정
                return true; // 조건이 맞으면 루프 중단
            }
            return false;
        }) || setActiveSection(null); // 조건이 맞는 섹션이 없으면 null로 설정
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="MainPage">
            {/* Scene Component for 3D Scroll Effects */}
            <Scene scrollY={scrollY} activeSection={activeSection} />

            {/* Header Section */}
            <Header title={'수정가능한 텍스트 영역'} size={'20px'} font={'NEXON Lv1 Gothic OTF'}></Header>

            {/* 메인 배너 + 스와이퍼 */}
            <div>
                <MainSticky />
                <MySwiperSlide spaceBetween={'0'} slidesPerView={'1'} className={'mainSwiper'} />
            </div>

            {/* 스크롤시 폰트 사이즈 변경 */}
            <div className="ScrollScale chageElement">
                <ScrollScale />
            </div>

            {/* 스크롤시 동영상 높이 변경 & 동영상 마우스 오버시 커스텀 커서등장 */}
            <div className="chageElement">
                <ScrollOpen />
                <VideoCustomCursor />
            </div>

            {/* 스크롤시 화면고정 및 컨텐츠 변경 */}
            <div className="chageElement">
                <ScrollChange />
            </div>

            {/* 마우스 오버시 해당 섹션에 맞는 컨텐츠가 마우스 따라다님 */}
            <div className="chageElement">
                <MouseOver />
                <TransCustomCursor />
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;
