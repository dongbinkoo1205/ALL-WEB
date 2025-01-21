import React, { useEffect, useState } from 'react';
import './ScrollScale.css';
import Icon from '../public/Icon';

const ScrollScale = () => {
    const [scale, setScale] = useState(1.4);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.scrollTextSection');
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const sectionMiddle = rect.height / 2;
            const progress = Math.min(Math.max((sectionMiddle - rect.top) / sectionMiddle, 0), 1);
            const newScale = 2 - progress * 1;
            setScale(newScale);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scrollTextSection">
            <ul className="scrollSubText">
                <li className=" font_SCD3">Professional Community</li>
                <li className="st Pretendard">
                    우리는 다양한 배경과 전문성을 갖춘 뛰어난 전문가들로 구성되어 있으며, <br />
                    가장 복잡한 문제까지도 선제적으로 해결할 수 있도록 종합적인 지원을 제공합니다.
                </li>
            </ul>
            <div className="scrollTextWrap">
                <div className="scrollText Pretendard" style={{ transform: `scale(${scale})` }}>
                    <span>
                        2<em className="tagUI font_SCD3">Total UI/UX</em>
                    </span>
                    <span>1</span>
                    <span>8</span>
                    <span className="gr">
                        4{/* <Icon name={'faCopyright'} width={'30vw'} /> */}
                        <em className="tagYear font_SCD3">Years of experience</em>
                    </span>
                    <span className="gr">0{/* <Icon name={'faCopyright'} width={'30vw'} /> */}</span>
                </div>
            </div>
        </div>
    );
};

export default ScrollScale;
