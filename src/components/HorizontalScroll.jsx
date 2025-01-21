// 리액트
import { Link } from 'react-router-dom';
import React, { useRef, useEffect, useContext, useState } from 'react';

// FlowText 컴포넌트 호출
import FlowText from './FlowText';

// 미디어 쿼리 함수
import { MediaQueryContext } from '../Context/MediaQueryContext';

// 스크롤 함수
import HorizontalScrollMove from './HorizontalScrollMove';

// 플러그인
import { useGsap } from '../Context/ScrollSlideProvider';

// css
import './HorizontalScroll.css';

// 이미지 및 아이콘
import { getLogo } from '../util/Mlogo';
import AboutBottomText from './../assets/AboutBottomText.png';
import AboutImage from './../assets/AboutImage.jpg';
import AboutImage2 from './../assets/AboutImage2.jpg';
import AboutImage3 from './../assets/AboutImage3.jpg';
import Icon from '../public/Icon';

function HorizontalScroll() {
    const HorizontalScroll = useRef(null);
    const containerRef = useRef(null);
    const { gsap, ScrollTrigger } = useGsap();
    const [paddingValue, setPaddingValue] = useState(0);

    // 반응형에 따라 조절
    const { isMobile } = useContext(MediaQueryContext);
    useEffect(() => {
        const container = containerRef.current;

        const setAnimations = () => {
            ScrollTrigger.matchMedia({
                // PC 화면: 가로 스크롤 설정
                '(min-width: 768px)': () => {
                    const totalWidth = container.scrollWidth;
                    const viewportWidth = window.innerWidth;
                    // 가상 스크롤 영역 생성
                    gsap.set(HorizontalScroll.current, { height: `${totalWidth}px ` });
                    gsap.to(container, {
                        x: () => -(totalWidth - viewportWidth),
                        ease: 'none',
                        scrollTrigger: {
                            trigger: container,
                            start: 'top top',
                            end: () => `+=${totalWidth - viewportWidth}`,
                            scrub: true,
                            pin: true,
                            pinSpacing: false, // pinSpacing 설정을 true로 변경
                        },
                    });
                },
            });

            ScrollTrigger.refresh();
        };
        setAnimations();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [gsap, ScrollTrigger]);

    // 스크롤시 동영상, 이미지 움직임
    // 요소 참조
    const imageLeftRef = useRef(0);
    const MobileScaleRef = useRef(0);

    const imageLeft = HorizontalScrollMove(containerRef, 150);
    const videoLeft = HorizontalScrollMove(containerRef, 100);

    // 모바일 버전 스케일 image
    const videoScale = HorizontalScrollMove(imageLeftRef, 1);
    const MobileScale = HorizontalScrollMove(MobileScaleRef, 1.2);

    // 흐르는 텍스트 높이값 제어
    const MoveTextRef = useRef(null);

    useEffect(() => {
        if (!isMobile && MoveTextRef.current) {
            const rect = MoveTextRef.current.getBoundingClientRect().width;
            // 패딩값 저장
            setPaddingValue(Math.ceil(rect));
        } else if (!isMobile) {
            console.error('Ref is not attached to any DOM element.');
        }
    });

    return (
        <div className="HorizontalScroll Pretendard" ref={HorizontalScroll}>
            <div className="gsapContent" ref={containerRef}>
                <div className="HorizontalSection01">
                    <div className="HorizontalSection01_Text">
                        <ul>
                            <li>
                                <span className="logo">
                                    <img src={getLogo(2)} alt="" />
                                </span>
                                은
                                <br />
                                세상의 모든 웹에 대한 이야기를 담아내는 매거진입니다. <br />
                            </li>
                            <li>
                                우리는 독창적이고 변치 않는 디자인 감각을 바탕으로, <br />
                                독자들에게 영감을 줄 수 있는 콘텐츠를 제공합니다.
                            </li>
                            <li className="font_josun">
                                WE STRIVE FOR THE PERFECT SYNERGY OF <br />
                                STRATEGY, IDEATION AND TECHNICAL EXECUTION
                            </li>
                        </ul>
                        <div className="AboutBottomText">
                            <img src={AboutBottomText} alt="" loading="lazy" />
                        </div>
                    </div>
                    <div className="HorizontalSection01_Image">
                        <div className="imageCover">
                            <img
                                src={AboutImage}
                                alt=""
                                loading="lazy"
                                style={{
                                    transform: isMobile
                                        ? `translateY(${videoLeft * 2}px )`
                                        : `translateX(${videoLeft * 4}px)`,
                                    display: 'block',
                                }}
                            />
                        </div>
                        <div className="imageCoverText font_kimm">
                            <ul>
                                <li>
                                    BRAND <div className="midleLine"></div> IDENTITY
                                </li>
                                <li
                                    style={{
                                        transform: `translateX(${-videoLeft}px)`,
                                        transition: 'transform 0.3s ease',
                                        display: 'block',
                                    }}
                                >
                                    WE & EXPERIENCES
                                </li>
                                <li
                                    style={{
                                        transform: `translateX(${-videoLeft}px)`,
                                        transition: 'transform 0.1s ease',
                                        display: 'block',
                                    }}
                                >
                                    <div className="midleLine"></div>SOLUTIONS
                                </li>
                                <li
                                    style={{
                                        transform: `translateX(${videoLeft}px)`,
                                        transition: 'transform 0.9s ease',
                                        display: 'block',
                                    }}
                                >
                                    E-COMMERCE
                                </li>
                                <li>WEB CONNECT</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="HorizontalSection02">
                    {isMobile ? (
                        <FlowText
                            color={'white'}
                            fontSize={'50px'}
                            text={'Everything in the World All Web All Web'}
                            fontStyle={'font_kimm'}
                        />
                    ) : (
                        <div
                            className="flowText"
                            style={{
                                transform: `translateY(${-videoLeft}px) rotate(90deg) translate(-4%, -50%) scale(4)`,
                            }}
                            ref={MoveTextRef}
                        >
                            All Web<div className="midleLine"></div>Everything in the World
                        </div>
                    )}

                    <div className="AboutText" style={{ padding: ` 0 ${paddingValue}px` }}>
                        <ul>
                            <li className="AboutTextLogo ">
                                <img src={AboutBottomText} alt="" />
                            </li>
                            <li>
                                2014년에 설립된 ALL WEB 매거진은 혁신적인 스타트업부터 글로벌 브랜드까지 다양한 웹
                                이야기를 전하는 매체로 자리 잡았습니다. ALLWEB 매거진은 전 세계의 웹 트렌드와 성공적인
                                디지털 전략을 한눈에 조망할 수 있는 플랫폼입니다.
                            </li>
                        </ul>
                    </div>
                    {isMobile ? (
                        <div className="PcImageDescSection" ref={MobileScaleRef}>
                            <div className="imageCover">
                                <img
                                    src={AboutImage2}
                                    alt=""
                                    loading="lazy"
                                    style={{
                                        transform: `scale(${MobileScale})`,
                                        display: 'block',
                                    }}
                                />
                            </div>
                            <div className="descText ">
                                <ul className="mainDescText font_josun">
                                    <li>MAKE</li>
                                    <li>UI・UX</li>
                                    <li>DESIGN</li>
                                </ul>

                                <div className="font_josun decoText">
                                    Aw<div className="midleLine"></div>AW
                                </div>
                                <ul className="subDescText Pretendard">
                                    <li>
                                        We love working with visionary brands driving innovation in digital commerce,
                                        UX/UI design, web development, and online marketing.
                                    </li>
                                    <li>
                                        우리는 웹과 관련된 전 분야에서
                                        <br /> 열정을 공유하는 비전 있는 브랜드들과 협력합니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="PcImageDescSection">
                            <div className="imageCover">
                                <img
                                    src={AboutImage2}
                                    loading="lazy"
                                    alt=""
                                    style={{
                                        transform: isMobile ? `scale(${videoScale})` : `translateX(${-imageLeft}px)`,
                                        display: 'block',
                                    }}
                                />
                            </div>
                            <div className="descText ">
                                <ul className="mainDescText font_josun">
                                    <li>MAKE</li>
                                    <li>UI・UX</li>
                                    <li>DESIGN</li>
                                </ul>
                                <div className="font_josun decoText">
                                    Aw<div className="midleLine"></div>AW
                                </div>
                                <ul className="subDescText Pretendard">
                                    <li>
                                        We love working with visionary brands driving innovation in digital commerce,
                                        UX/UI design, web development, and online marketing.
                                    </li>
                                    <li>
                                        우리는 디지털 커머스, UX/UI 디자인, 웹 개발, 온라인 마케팅 분야에서
                                        <br /> 열정을 공유하는 비전 있는 브랜드들과 협력합니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="HorizontalSection03">
                <div className="imgWrap">
                    <img src={AboutImage3} alt="" loading="lazy" />
                </div>
                <ul className="textWrap">
                    <li className="font_SCD3">Web for All, All for Web</li>
                    <li className="font_josun">ALL WEB</li>
                    <li className="font_SCD3">
                        <Link to="/Portfolio">
                            <span className="Pretendard">포트폴리오 확인하기</span>
                        </Link>
                        <Icon className="faPlus" name="faPlus" style={{ color: 'white', fontSize: '12px' }} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HorizontalScroll;
