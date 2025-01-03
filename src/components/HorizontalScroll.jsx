// 리액트
import { Link } from 'react-router-dom';
import React, { useRef, useEffect, useContext } from 'react';

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
    const containerRef = useRef(null);
    const { gsap, ScrollTrigger } = useGsap();

    useEffect(() => {
        const container = containerRef.current;

        // ScrollTrigger와 gsap 초기화
        gsap.registerPlugin(ScrollTrigger);

        // 가로 길이 계산
        const totalWidth = container.scrollWidth; // 콘텐츠 전체 너비
        const viewportWidth = window.innerWidth; // 뷰포트 너비
        const scrollDistance = totalWidth - viewportWidth; // 스크롤 거리

        // ScrollTrigger 생성
        const animation = gsap.to(container, {
            x: -scrollDistance, // 가로로 콘텐츠의 끝까지 이동
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top top', // 시작 지점
                end: `+=${scrollDistance}+100vw`, // 동적으로 종료 지점 설정

                scrub: true, // 스크롤과 동기화
                pin: true, // 스크롤 트리거 동안 고정
            },
            onLeave: () => {
                // gsapContent가 끝난 후 HorizontalSection03을 활성화
                document.querySelector('.HorizontalSection03').style.zIndex = 1;
            },
        });

        // 클린업: 트리거와 애니메이션 제거
        return () => {
            animation.kill(); // 애니메이션 제거
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // 모든 트리거 제거
        };
    }, [gsap, ScrollTrigger]);

    // 스크롤시 동영상, 이미지 움직임
    const videoLeftRef = useRef();
    const imageLeftRef = useRef();
    // 괄호안에는 useRef와 속도값이 들어감
    const videoLeft = HorizontalScrollMove(videoLeftRef, 200);
    const imageLeft = HorizontalScrollMove(imageLeftRef, 400);

    return (
        <div className="HorizontalScroll Pretendard">
            <div
                className="gsapContent"
                ref={containerRef}
                style={{
                    display: 'flex',
                    width: '360vw',
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                <div className="HorizontalSection01" ref={videoLeftRef} style={{ width: '35.29%', height: '100%' }}>
                    <div className="HorizontalSection01_Text">
                        <ul>
                            <li>
                                <span className="logo">
                                    <img src={getLogo(2)} alt="" />
                                </span>
                                은 다양한 영역에서 창의적이고 전문적인 <br />
                                디지털 솔루션을 제공하는 웹 에이전시입니다.
                            </li>
                            <li>
                                우리는 독창적이고 변치 않는 디자인 감각을 바탕으로, <br />
                                고객 맞춤형 브랜드와 웹 서비스를 통해 그들의 철학과 가치를 담아냅니다.
                            </li>
                            <li className="font_josun">
                                WE STRIVE FOR THE PERFECT SYNERGY OF <br />
                                STRATEGY, IDEATION AND TECHNICAL EXECUTION
                            </li>
                        </ul>
                        <div className="AboutBottomText">
                            <img src={AboutBottomText} alt="" />
                        </div>
                    </div>
                    <div className="HorizontalSection01_Image">
                        <div className="imageCover">
                            <img
                                src={AboutImage}
                                alt=""
                                style={{
                                    transform: `translateX(${-videoLeft}px)`,
                                    transition: 'transform 0.3s ease',
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
                                    WEB EXPERIENCES
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
                                        transform: `translateX(${-videoLeft}px)`,
                                        transition: 'transform 0.3s ease',
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
                <div className="HorizontalSection02" ref={imageLeftRef} style={{ width: '35.29%', height: '100%' }}>
                    <div
                        className="flowText"
                        style={{
                            transform: `translateY(${-videoLeft}px) rotate(90deg) translate(-4%, -50%) scale(4)`,
                            transition: 'transform 0.1s ease',
                        }}
                    >
                        All Web<div className="midleLine"></div>Everything in the World
                    </div>
                    <div className="AboutText">
                        <ul>
                            <li className="AboutTextLogo ">
                                <img src={AboutBottomText} alt="" />
                            </li>
                            <li>
                                2014년에 설립된 ALL WEB은 혁신적인 스타트업부터 글로벌 브랜드까지 다양한 고객들에게
                                풀스케일 웹 솔루션을 제공해왔습니다. 우리는 웹사이트 디자인과 개발을 중심으로, 고객의
                                비즈니스 목표를 실현하는 창의적이고 전략적인 디지털 경험을 만들어 왔습니다.
                            </li>
                        </ul>
                    </div>
                    <div className="imageCover">
                        <img
                            src={AboutImage2}
                            alt=""
                            style={{
                                transform: `translateX(${imageLeft}px)`,
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
                                We love working with visionary brands driving innovation in digital commerce, UX/UI
                                design, web development, and online marketing.
                            </li>
                            <li>
                                우리는 디지털 커머스, UX/UI 디자인, 웹 애플리케이션 개발, 온라인 마케팅 분야에서
                                <br /> 열정을 공유하는 비전 있는 브랜드들과 협력합니다.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="HorizontalSection03" style={{ width: '29.41%', height: '100%' }}>
                    <div className="imgWrap">
                        <img src={AboutImage3} alt="" />
                    </div>
                    <ul className="textWrap">
                        <li className="font_SCD3">Web for All, All for Web</li>
                        <li className="font_josun">ALL WEB</li>
                        <li className="font_SCD3">
                            <Link to="/Portfolio">
                                <span>More PortFolio</span>
                            </Link>
                            <Icon
                                className="downArrow"
                                name="chevronDown"
                                style={{ color: 'white', fontSize: '18px' }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HorizontalScroll;
