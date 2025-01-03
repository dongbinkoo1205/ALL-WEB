// ScrollSlideProvider.js
import React, { createContext, useContext, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapContext = createContext();

export const ScrollSlideProvider = ({ children }) => {
    useEffect(() => {
        // ScrollTrigger 초기화
        ScrollTrigger.refresh();
        return () => {
            ScrollTrigger.kill(); // 언마운트 시 클린업
        };
    }, []);

    return <GsapContext.Provider value={{ gsap, ScrollTrigger }}>{children}</GsapContext.Provider>;
};

// useGsap 훅이 GsapContext를 참조하도록 수정
export const useGsap = () => useContext(GsapContext);

export default ScrollSlideProvider;
