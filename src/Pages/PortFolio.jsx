import Fix from '../components/Fix';
import List from '../components/List';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

import './Portfolio.css';

const Portfolio = () => {
    const [range, setRange] = useState({ min: 0, max: 11340 });

    const onRangeChange = (newRange) => {
        setRange(newRange);
    };

    // 만약에 조절해야하는 버튼과 리스트가 다른 컴포넌트에 위치한다면?
    // 공통 부모 컴포넌트에 usestate 값을 만들고, 조정하는 함수는 해당 버튼에, 랜더링 하는 값은 리스트에 프롭스로 전달
    const [layerChange, setClListClass] = useState('clList');
    const handleClassChange = (newClassName) => {
        setClListClass(newClassName); // className 변경
    };

    const [checkedSum, setCheckedSum] = useState(0);
    const handleSumCheck = (sum) => {
        setCheckedSum(sum);
    };

    // 모바일(767px)이하일 때, Fix 컨텐츠 상태 변경
    const [mobCloseSection, setMobCloseSection] = useState(true);
    const handleMobClose = () => {
        setMobCloseSection((prevState) => !prevState);
    };
    // 화면 크기 체크 함수 767 이하일 때 상태 변경
    const checkScreenWidth = () => {
        window.innerWidth <= 767 ? setMobCloseSection(false) : setMobCloseSection(true);
    };

    // 컴포넌트 마운트 시 실행
    useEffect(() => {
        // 초기 함수 실행으로 현재 화면넓이 측정 하고
        checkScreenWidth();
        // 혹시라도 윈도우 사이즈가 리사이즈 되면 다시 실행
        window.addEventListener('resize', checkScreenWidth);

        return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);
    return (
        <div className="PortFolio">
            <div className="layout bgColorBlack">
                <Header title={'UX・UI를 만나보세요.'} size={'20px'} font={'NEXON Lv1 Gothic OTF'}></Header>
                <Fix
                    range={range}
                    onRangeChange={onRangeChange}
                    handleClassChange={handleClassChange}
                    checkedSum={checkedSum}
                    mobCloseSection={mobCloseSection}
                    handleMobClose={handleMobClose}
                ></Fix>
                <List
                    range={range}
                    layerChange={layerChange}
                    handleSumCheck={handleSumCheck}
                    mobCloseSection={mobCloseSection}
                    handleMobClose={handleMobClose}
                ></List>
            </div>
            <Footer option="black" />
        </div>
    );
};
export default Portfolio;
