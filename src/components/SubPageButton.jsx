import React from 'react';
import './SubPageButton.css';

function SubPageButton({ text, type, url }) {
    return (
        <button
            onClick={() => (window.location.href = url)}
            className={`SubPageButton SubPageButton_${type} Pretendard`}
        >
            {text} 방문하기
        </button>
    );
}

export default SubPageButton;
