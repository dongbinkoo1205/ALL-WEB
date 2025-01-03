import React from 'react';
import './FlowText.css';
function FlowText({ text }) {
    return (
        <div className="marquee-container">
            <div className="marquee">
                <span>
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
