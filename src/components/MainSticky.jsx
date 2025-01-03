import React, { useEffect, useState } from 'react';
import mainArrowGreen from './../assets/gif/mainSubIcon.gif'; // 비디오 파일 경로
import './MainSticky.css';

function MainSticky() {
    const [scrollState, setScrollState] = useState('WEB'); // "WEB" 또는 "UX・UI"

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setScrollState('WEB'); // 최상단에서는 "WEB" 텍스트
            } else {
                setScrollState('UX・UI'); // 스크롤이 내려가면 "UX・UI" 텍스트
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="MainStickySection">
                <div className="stickySection1">
                    <div className="MainText font_kimm">
                        {/* 텍스트가 scrollState에 따라 애니메이션 */}
                        <div className="TextWrap">
                            <div className="TextDefault">
                                <span>ALL OF</span>
                                <div className="subTextWrap Pretendard">
                                    <p className={`MainTextDynamic  ${scrollState === 'WEB' ? 'visible' : 'hidden'}`}>
                                        <img src={mainArrowGreen} alt="" />
                                        우리는 웹사이트를 탐험하며 <br />
                                        다양한 UI/UX 디자인 사례를 제공합니다.
                                    </p>
                                    <p
                                        className={`MainTextDynamic  ${
                                            scrollState === 'UX・UI' ? 'visible' : 'hidden'
                                        }`}
                                    >
                                        <img src={mainArrowGreen} alt="" />
                                        전 세계 독창적인 UI/UX 디자인을
                                        <br />
                                        <em>ALL WEB에서 아이디어를 탐구해보세요.</em>
                                    </p>
                                </div>
                            </div>
                            <div className="TextChange ">
                                <div className="TextChangeWeb">
                                    <span className={`MainTextDynamic ${scrollState === 'WEB' ? 'visible' : 'hidden'}`}>
                                        WEBSITE
                                    </span>{' '}
                                </div>
                                <div className="TextChangeUX">
                                    <span
                                        className={`MainTextDynamic ${scrollState === 'UX・UI' ? 'visible' : 'hidden'}`}
                                    >
                                        DESIGNS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SubStickySection font_SCD3">
                <p>
                    Explore top websites showcasing diverse UI/UX designs, <br />
                    from trendy visuals to innovative user experiences, all in one place.
                </p>
            </div>
        </>
    );
}

export default MainSticky;
