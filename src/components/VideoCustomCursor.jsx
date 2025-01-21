import { useCursor } from '../Context/MouseProvider';
import MouseCursor from './../assets/gif/MouseCursor.gif'; // 비디오 파일 경로
import { MediaQueryContext } from '../Context/MediaQueryContext';
import { useContext } from 'react';


import './VideoCustomCursor.css';

// 마우스 커스텀에 대한 코드

function VideoCustomCursor() {
    // MouseProvider에서 가져온 isHovering,cursorPosition를 활용
    const { isMouseOver, cursorPosition } = useCursor();

    // Hover 중이 아닐 때는 아무것도 렌더링하지 않음 처음 값은 false이며,
    // onMouseover가되면 상태가 변경됨 !state 이런식으로 변경
    if (!isMouseOver) return null;

    // 모바일 버전체크
    const { isMobile } = useContext(MediaQueryContext);
    if (!isMobile) {
        return (
            <div
                className="VideoCustomCursor Pretendard"
                style={{
                    position: 'fixed',
                    // cursorPosition의 기본 좌표값을 가져옴
                    top: `${cursorPosition.y}px`,
                    left: `${cursorPosition.x}px`,
                    pointerEvents: 'none', // 클릭 방지
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000,
                }}
            >
                <img src={MouseCursor} alt="Custom Cursor" className="Cursor" />
                <p>Play</p>
            </div>
        );
    }
}

export default VideoCustomCursor;
