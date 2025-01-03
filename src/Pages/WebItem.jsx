import './WebItem.css';
import React, { useContext, useState } from 'react';
import { DataDispatchContext } from '../Context/DataProvider';
import { useNavigate } from 'react-router-dom';
import WebItemCursor from '../components/WebItemCursor';

const WebItem = ({ id, name, layerChange, photoUrl, randomSubindustryItems, enName, enSubName }) => {
    // 현재 사용하지 않는 함수
    // const { onDelete, onUpdate } = useContext(DataDispatchContext);\
    // const onChangeCheckbox = () => {
    //     onUpdate(id);
    // };

    // const onClickDeleteButton = () => {
    //     onDelete(id);
    // };

    // 네비게이션
    const nav = useNavigate();

    // 마우스 오버 상태-> useCursor 사용하지 않았음.
    const [MouseOverWebItem, setMouseOverWebItem] = useState(false);
    // 커서 위치 상태-> useCursor 사용하지 않았음.
    const [WebItemCursorPosition, setWebItemCursorPosition] = useState({ x: 0, y: 0 });

    // 마우스 커서 생성

    const handleMouseEnter = () => {
        setMouseOverWebItem(true);
    };

    const handleMouseLeave = () => {
        setMouseOverWebItem(false);
    };

    const handleMouseMove = (event) => {
        const parentRect = event.currentTarget.getBoundingClientRect(); // 부모 요소의 위치 가져오기
        const y = event.clientY - parentRect.top; // 부모 기준 Y좌표 계산
        setWebItemCursorPosition(y); // Y좌표만 상태에 저장
    };

    return (
        <div
            onClick={() => nav(`/Detail/${id}`)}
            className={`WebItem ${layerChange}`}
            // 마우스 오버시 커서
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{ cursor: MouseOverWebItem ? 'none' : 'true' }}
        >
            <div className="mainPhoto">
                <img src={photoUrl} alt="" />
                <WebItemCursor
                    name={name}
                    randomSubindustryItems={randomSubindustryItems}
                    MouseOverWebItem={MouseOverWebItem} // 마우스 오버 상태 전달
                    WebItemCursorPosition={WebItemCursorPosition} // 마우스 위치 전달
                />
            </div>
            <div className="mainPhotoDesc" style={{ opacity: MouseOverWebItem ? '0' : '1' }}>
                <ul>
                    <li className="id">#{id} Portfolio</li>
                    <li className="name">{enName}</li>
                </ul>
            </div>
        </div>
    );
};

export default WebItem;
