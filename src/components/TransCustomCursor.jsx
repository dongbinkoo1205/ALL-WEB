import { useCursor } from '../Context/MouseProvider';
import { MediaQueryContext } from '../Context/MediaQueryContext';
import { useContext } from 'react';

import './TransCustomCursor.css';

function TransCustomCursor() {
    // 항상 useCursor와 useContext 호출
    const { cursorImage, cursorPosition, cursorName, cursorWidth } = useCursor();
    const { isMobile } = useContext(MediaQueryContext);

    // cursorImage가 없을 경우, 렌더링하지 않음
    if (!cursorImage) return null;

    return (
        <>
            {!isMobile && (
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
            )}
        </>
    );
}

export default TransCustomCursor;
