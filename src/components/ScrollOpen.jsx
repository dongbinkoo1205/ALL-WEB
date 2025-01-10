import { useEffect, useRef, useState } from 'react';
import './ScrollOpen.css';
import MainVd from './../assets/video/mainVd.mp4'; // 비디오 파일 경로
import circleGif from './../assets/gif/circleGif.gif'; // 비디오 파일 경로
import { useCursor } from '../Context/MouseProvider';
import { useNavigate } from 'react-router-dom';
import HeadIcons from '../public/HeadIcons';

function ScrollOpen() {
    const nav = useNavigate();

    // 마우스 커서 생성
    const { setIsMouseOver, updateCursorPosition, isMouseOver } = useCursor();

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        updateCursorPosition(clientX, clientY); // x, y 값을 개별 인자로 전달
    };

    // 스크롤시 열리는 동영상 Ref
    const openSectionRef = useRef();

    // 동영상 높이 조절에 대한 상태
    const [sectionOpen, setSectionOpen] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (!openSectionRef) return;
            const rect = openSectionRef.current.getBoundingClientRect();
            const sectionHeight = rect.height * 1.1;
            const viewportHeight = window.innerHeight; // 뷰포트 높이 가져오기
            const progress = Math.min(
                Math.max((sectionHeight - rect.top) / (sectionHeight + viewportHeight / 2), 0),
                1
            );
            const newHeight = Math.max(progress * 10, Math.min(progress * 60, 60));

            setSectionOpen(newHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="ScrollOpenWrap">
            <div className="ScrollOpen" ref={openSectionRef}>
                <p className="ScrollOpenText font_minsans">
                    WE L<img src={circleGif} alt="" />
                    VE
                </p>
                <div
                    className="VdCont"
                    style={{ height: `${sectionOpen}vh`, cursor: isMouseOver ? 'none' : 'default' }}
                    // 마우스 오버시 커서
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    // 네비게이션
                    onClick={() => nav(`/PortFolio`)}
                >
                    <video src={MainVd} loop autoPlay muted playsInline />
                </div>
                <p className="ScrollOpenText font_minsans">
                    <span className="Pretendard">세상의 모든 웹사이트를 한 번에 그리고 즐겁게</span>
                    <em>WEB's</em>
                </p>
            </div>
            <div className="SubText">
                <ul className="SubTextLeftWrap font_SCD3">
                    <li>
                        ALL WEB: Redefining the
                        <br />
                        Digital Frontier.
                    </li>
                </ul>
                <ul className="SubTextRightWrap">
                    <li className="SubTexEn font_josun">
                        We explore the limitless potential of the web, uniting tech pioneers, creative designers, and
                        strategists to push boundaries and expand its horizons.
                        <p>
                            This is
                            <span className="">
                                ALL WEB!
                                <HeadIcons name="faCopyright" width={'10px'} position={'absolute'} />
                            </span>
                        </p>
                    </li>
                    <li className="SubTexKr Pretendard">
                        우리는 웹이 가진 무한한 가능성을 재발견하며, 새롭고 과감한 시도를 멈추지 않습니다.
                        <br /> 기술의 선구자, 크리에이티브 디자이너, 그리고 전략가들이 모여 웹의 경계를 넓히는 공간, ALL
                        WEB!
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ScrollOpen;
