import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useCursor } from '../Context/MouseProvider';

// import MouseCursor from './../assets/gif/MouseCursor.gif'; // 비디오 파일 경로
import './TransCustomCursor.css';

// 마우스 커스텀에 대한 코드

function TransCustomCursor() {
    // MouseProvider에서 가져온 cursorImage,cursorPosition를 활용
    const { cursorImage, cursorPosition, cursorName, cursorWidth } = useCursor();

    // Hover 중이 아닐 때는 아무것도 렌더링하지 않음 처음 값은 false이며,
    // onMouseover가되면 상태가 변경됨 !state 이런식으로 변경
    if (!cursorImage) return null;

    return (
        <div
            className={`TransCustomCursor ${cursorImage ? 'TransCustomCursorOpen' : ''} Pretendard`}
            style={{
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}px`,
            }}
        >
            <div
                className="Cursor Pretendard"
                style={{
                    backgroundImage: cursorImage ? `url(${cursorImage})` : 'none',
                    width: cursorWidth,
                    height: cursorWidth,
                }}
            ></div>

            <div className="cursorName">{cursorName}</div>
        </div>
    );
}

export default TransCustomCursor;
