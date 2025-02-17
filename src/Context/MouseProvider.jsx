import React, { useState, useContext, createContext, useRef } from 'react';

const CursorContext = createContext();

function MouseProvider({ children }) {
    // animationFrame 선언(VideoCustomCursor,TransCustomCursor 공통 )
    const animationFrameId = useRef(null);

    // 비디오 마우스 오버시 마우스 이미지 변경 상태(VideoCustomCursor)
    const [isMouseOver, setIsMouseOver] = useState(false);

    // WebItemCursor 마우스 오버시 마우스 이미지 변경 상태(VideoCustomCursor)
    // const [WebItemCursorMouseOver, setWebItemCursorMouseOver] = useState(false);

    // 컨텐츠 오버시 마우스 이미지 변경 상태(TransCustomCursor)
    const [cursorImage, setCursorImage] = useState(false);

    // 컨텐츠 오버시 마우스 네임 변경
    const [cursorName, setCursorName] = useState(null);

    // 컨텐츠 오버시 마우스 넓이 및 높이 변경
    const [cursorWidth, setCursorWidth] = useState(null);

    // 마우스의 공통좌표
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const updateCursorPosition = (x, y) => {
        // 이전 프레임 작업이 있으면 취소
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }

        // requestAnimationFrame을 통해 상태 업데이트 예약
        animationFrameId.current = requestAnimationFrame(() => {
            setCursorPosition({ x, y });
        });
    };

    const value = {
        isMouseOver,
        cursorPosition,
        cursorImage,
        cursorName,
        cursorWidth,
        setIsMouseOver,
        setCursorPosition,
        setCursorImage,
        updateCursorPosition,
        setCursorName,
        setCursorWidth,
    };
    
    return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export function useCursor() {
    const MouseContext = useContext(CursorContext);
    if (!MouseContext) {
        throw new Error('useCursor must be used within a CursorProvider');
    }
    return MouseContext;
}
export default MouseProvider;
