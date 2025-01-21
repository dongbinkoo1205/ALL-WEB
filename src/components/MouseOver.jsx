import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCursor } from '../Context/MouseProvider';
import { DataStateContext } from '../Context/DataProvider';
import './MouseOver.css';

function MouseOver() {
    const nav = useNavigate();

    // 목업데이터 정의
    const data = useContext(DataStateContext);

    // MouseProvider에서 커서 위치 관리만 담당함
    const { cursorImage, setCursorImage, updateCursorPosition, setCursorName, setCursorWidth } = useCursor();

    const handleMouseEnter = (photoUrl) => {
        setCursorImage(photoUrl); // 특정 photoUrl을 커서 이미지로 설정
    };

    const handleMouseLeave = () => {
        setCursorImage(false); // 빈 배열로 설정
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        updateCursorPosition(clientX, clientY); // x, y 값을 개별 인자로 전달
    };
    const handleCursorName = (name) => {
        setCursorName(name);
    };
    const handleCursorWidth = (width) => {
        setCursorWidth(width);
    };
    // 컨텐츠 오버시 랜덤한 넓이 값 반환에 대한 상태
    // 250부터 300까지의 랜덤한 값 만들기
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 컴포넌트 초기화 nav(`/Detail/${content.id}`)} 클릭이후에 이전페이지로 돌아왔을 때 나머지 함수 초기화하여 이전에 남아있던 이벤트들 삭제
    useEffect(() => {
        handleMouseEnter(null); // 초기화
        handleCursorName(null); // 초기화
        handleCursorWidth(0); // 초기화
        handleMouseLeave(); // 초기화
    }, []);
    return (
        <div className="MouseOverWrap">
            {data.slice(0, 5).map((content) => (
                <div
                    onClick={() => nav(`/Detail/${content.id}`)}
                    key={content.id}
                    className="MouseOver Pretendard"
                    // onMouseEnter={handleMouseEnter}
                    onMouseEnter={() => {
                        handleMouseEnter(content.photoUrl); // 첫 번째 함수 실행
                        handleCursorName(content.subName); // 두 번째 함수 실행
                        handleCursorWidth(getRandomInteger(150, 250));
                    }}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    style={{
                        cursor: cursorImage ? 'none' : 'default',
                    }}
                >
                    <span className="id">{content.id}.</span>
                    <span className="name ">{content.name}</span>
                    <span className="desc">{content.randomSubDescs}</span>
                </div>
            ))}
        </div>
    );
}

export default MouseOver;
