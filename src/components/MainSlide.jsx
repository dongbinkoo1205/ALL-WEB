import { useContext, useRef, useState, useEffect } from 'react';
import { ScrollContext } from '../Context/ScrollSlideProvider';
import { DataStateContext } from '../Context/DataProvider';
import './MainSlide.css';
import WebItem from '../Pages/WebItem';

const MainSlide = () => {
    const { containerRef } = useContext(ScrollContext);
    // 동적 너비 저장
    const [containerWidth, setContainerWidth] = useState('auto');
    const data = useContext(DataStateContext);

    useEffect(() => {
        // 데이터 길이와 아이템 너비 계산
        const itemWidth = 200; // WebItem의 예상 또는 실제 너비 (px)
        const totalWidth = data.slice(0, 5).length * itemWidth; // 아이템 개수 * 개별 아이템 너비
        setContainerWidth(`${totalWidth}px`); // 계산된 너비를 상태로 설정
    }, [data]);

    return (
        <div
            ref={containerRef}
            className="MainSlide"
            style={{ display: 'flex', width: containerWidth, height: '30vh' }}
        >
            <div className="MainSlideItem">
                {data.slice(0, 10).map((item) => (
                    <WebItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default MainSlide;
