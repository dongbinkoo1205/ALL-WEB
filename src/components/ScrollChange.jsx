import { useContext, useEffect, useRef } from 'react';
import { DataStateContext } from '../Context/DataProvider';
import { AosContext } from '../Context/AosProvider';
import ScrollChangeVd from './../assets/video/ScrollChange.mp4'; // 비디오 파일 경로
import SubPageButton from './SubPageButton';

import './ScrollChange.css';

function ScrollChange() {
    const { refresh } = useContext(AosContext); // AOS refresh 메서드 가져오기

    const data = useContext(DataStateContext);
    const imageRefs = useRef([]); // 각 ScrollChangeImage 요소 참조
    const itemRefs = useRef([]); // ScrollChangeItem 참조
    const sectionRef = useRef();

    // 다른 페이지에 넘어갔을 때 sectionRef가 없기 때문에 return으로 종료
    if (!sectionRef.current) return;
    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const scrollSectionTop = sectionRef.current.getBoundingClientRect().top;

            if (scrollSectionTop < viewportHeight / 2) {
                sectionRef.current.classList.add('black');
            } else {
                sectionRef.current.classList.remove('black');
            }

            imageRefs.current.forEach((image, index) => {
                if (image) {
                    const rect = image.getBoundingClientRect();
                    const isCentered = rect.top < viewportHeight / 2 + 50 && rect.bottom > viewportHeight / 2 - 50;

                    if (isCentered) {
                        // 모든 itemRefs에 대해 transform 값을 조정
                        itemRefs.current.forEach((item, itemIndex) => {
                            if (item) {
                                const transformValue = -index * 100; // -100%, -200%, -300%...
                                item.style.transform = `translateY(${transformValue}%)`;
                            }
                        });
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="ScrollChangeWrapper" ref={sectionRef}>
                {/* 변경 텍스트 컨텐츠 */}
                <div className="ScrollChangeText font_minsans">
                    {/* 첫 번째 섹션 */}
                    <div className="ScrollChangeSection">
                        {data.slice(0, 4).map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => (itemRefs.current[index] = el)} // 0번부터 3번까지
                                className="ScrollChangeItem"
                            >
                                <ul className="ScrollChangeName left">
                                    <li>
                                        <span>{item.enName} </span>
                                        <span>{item.enName} </span>
                                        <span>{item.enName} </span>
                                        <span>{item.enName} </span>
                                    </li>
                                    <li>
                                        <span>{item.enName} </span>
                                        <span>{item.enName} </span>
                                        <span>{item.enName} </span>
                                        <span>{item.enName} </span>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* 두 번째 섹션 */}
                    <div className="ScrollChangeSection">
                        {data.slice(0, 4).map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => (itemRefs.current[4 + index] = el)} // 4번부터 7번까지
                                className="ScrollChangeItem"
                            >
                                <ul className="ScrollChangeDesc right">
                                    <li>
                                        <span>{item.enSubName}</span>
                                        <span>{item.enSubName}</span>
                                        <span>{item.enSubName}</span>
                                        <span>{item.enSubName}</span>
                                    </li>
                                    <li>
                                        <span>{item.enSubName}</span>
                                        <span>{item.enSubName}</span>
                                        <span>{item.enSubName}</span>
                                        <span>{item.enSubName}</span>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* 세 번째 섹션 */}
                    <div className="ScrollChangeSection">
                        {data.slice(0, 4).map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => (itemRefs.current[8 + index] = el)} // 8번부터 11번까지
                                className="ScrollChangeItem"
                            >
                                <ul className="ScrollChangeClick">
                                    <li>
                                        <span>{item.isClick} Click</span>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ScrollChangeImage font_minsans">
                    <div className="ScrollChangeSection">
                        {data.slice(0, 4).map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => (imageRefs.current[index] = el)} // 각 imageRefs에 참조 추가
                                className="ScrollImage"
                            >
                                <img src={item.photoUrl} alt="" />
                                <ul className="ScrollDesc ">
                                    <li>
                                        <span>{item.name}</span>
                                        <span>({item.randomSubindustryItems})</span>
                                    </li>
                                    <li>{item.randomSubDescs}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="ScrollCenterWrap font_minsans">
                <ul>
                    <li data-aos="fade-up" data-aos-duration="1000">
                        Want to see
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1000">
                        How
                        <span>
                            <video src={ScrollChangeVd} loop autoPlay muted playsInline />
                        </span>
                        Elevate
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1000">
                        Experiences?
                    </li>
                </ul>
                <p>우리가 사용자 경험을 어떻게 향상시키는지 알고 싶으신가요?</p>
                <div className="ButtonWrap" data-aos="fade-up" data-aos-duration="1000">
                    <SubPageButton url="/Portfolio" text={'Portfolio'} type={'Large'} />
                </div>
            </div>
        </>
    );
}

export default ScrollChange;
