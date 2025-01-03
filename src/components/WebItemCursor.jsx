import './WebItemCursor.css';
function WebItemCursor({ name, randomSubindustryItems, MouseOverWebItem, WebItemCursorPosition }) {
    return (
        MouseOverWebItem && (
            <div
                className="photoDesc"
                style={{
                    position: 'absolute',
                    top: `${WebItemCursorPosition}px`, // Y좌표만 설정
                    left: '50%', // 필요하다면 X축 설정
                    transform: 'translateX(-50%)', // X축 중심 정렬
                    pointerEvents: 'none', // 클릭 방지
                    zIndex: 1000, // 최상위 표시
                }}
            >
                <span className="webName firstLetter">
                    {name} :<em className="subCategories"> {randomSubindustryItems}</em>
                </span>
                <div className="webNameLine"></div>
                <p className="moreBtn">
                    <span className="btnBall"></span> More Views
                </p>
            </div>
        )
    );
}

export default WebItemCursor;
