import React from 'react';
import './FlowText.css';
function FlowText({ text, color, fontSize, fontStyle }) {
    return (
        <div className="marquee-container">
            <div className="marquee">
                <span className={fontStyle} style={{ color: color, fontSize: fontSize }}>
                    {text} &nbsp; {text} &nbsp; {text} &nbsp; {text} &nbsp;{text} &nbsp; {text} &nbsp; {text} &nbsp;{' '}
                    {text} &nbsp;{text} &nbsp; {text} &nbsp; {text} &nbsp; {text} &nbsp;
                </span>
                <span>
                    {text} &nbsp; {text} &nbsp; {text} &nbsp; {text} &nbsp;{text} &nbsp; {text} &nbsp; {text} &nbsp;{' '}
                    {text} &nbsp;{text} &nbsp; {text} &nbsp; {text} &nbsp; {text} &nbsp;
                </span>
            </div>
        </div>
    );
}

export default FlowText;
