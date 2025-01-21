import React, { useEffect, createContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AosContext = createContext();

const AosProvider = ({ children }) => {
    useEffect(() => {
        AOS.init(); // AOS 초기화
    }, []);

    const AosAnimation = {
        refresh: AOS.refresh,
        refreshHard: AOS.refreshHard,
    };

    return <AosContext.Provider value={AosAnimation}>{children}</AosContext.Provider>;
};

export default AosProvider;
