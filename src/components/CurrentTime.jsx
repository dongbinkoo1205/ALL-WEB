import React, { useState, useEffect } from 'react';

function CurrentTime({ color, size }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 1초마다 업데이트

        return () => clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머 정리
    }, []);

    const year = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1; // 월은 0부터 시작하므로 +1

    return <div style={{ color: color, fontSize: size }}>{`${year}년 ${month}월 기준`}</div>;
}

export default CurrentTime;
