import './PortFolio.css';
import Fix from '../components/Fix';
import List from '../components/List';
import Header from '../components/Header';
import { useState } from 'react';

const PortFolio = () => {
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

    return (
        <div className="PortFolio">
            <Header title={'UX・UI를 만나보세요.'} size={'20px'} font={'NEXON Lv1 Gothic OTF'}></Header>
            <div className="layout bgColorBlack">
                <Fix
                    range={range}
                    onRangeChange={onRangeChange}
                    handleClassChange={handleClassChange}
                    checkedSum={checkedSum}
                ></Fix>
                <List range={range} layerChange={layerChange} handleSumCheck={handleSumCheck}></List>
            </div>
        </div>
    );
};

export default PortFolio;
