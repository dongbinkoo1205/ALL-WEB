import Input from './Input';
import { useState, useContext } from 'react';
import { DataDispatchContext } from '../Context/DataProvider';
import { MainOption, labels } from './Categories';
import { getLogo } from '../util/Mlogo';
import Icon from '../public/Icon';
import './Fix.css';

function Fix({ range, onRangeChange, onFilterChange, handleClassChange, checkedSum, mobCloseSection, handleMobClose }) {
    // 메인메뉴 검색 기능에 필요한 usecontext
    const { onChangeSearch, search, onChangeNewCheck, newCheck, selectedKey } = useContext(DataDispatchContext);

    //색상 토글 및 레이아웃 버튼활성화
    const [toggleColor, setToggleColor] = useState({
        isDefaultColor: true,
        activeButton: '', // 활성화된 버튼 상태
    });

    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        onRangeChange({
            ...range,
            [name]: Number(value),
        });
    };

    const handleCheckboxChange = (e) => {
        // e.target 즉 내가 선택한 체크박스의 id와 checked를 가져와서,
        const { id, checked } = e.target;
        // onFilterChage로 부모 컴포넌트에게 값을 전달
        onFilterChange(id, checked);
    };

    const handleClick = (newClassName) => {
        handleColorChange(); // 색상 변경
        handleClassChange(newClassName); // 클래스 변경
    };
    const handleColorChange = () => {
        setToggleColor((prevState) => ({
            ...prevState,
            isDefaultColor: !prevState.isDefaultColor, // 색상 토글
        }));
    };
    const handleButtonClick = (buttonName) => {
        setToggleColor({
            isDefaultColor: buttonName === 'clListW', // 버튼에 따라 색상 결정
            activeButton: buttonName, // 현재 활성화된 버튼
        });
    };

    const iColor = toggleColor.isDefaultColor ? '#4F555A' : '#fff';
    const iColor2 = toggleColor.isDefaultColor ? '#fff' : '#4F555A';

    // 모바일 버전에서 옵션 설정 닫기 토글
    const mobCloseToggle = mobCloseSection ? 'block' : 'none';

    return (
        <div className="Fix scrollBar Pretendard ScrollAdd" style={{ display: mobCloseToggle }}>
            <div className="FixTopWrap">
                <div className="FixLogo">
                    <div className="Pretendard">
                        <span>세상의 모든 웹</span>
                    </div>
                    <img className="Mlogo" src={getLogo(2)} alt="" />
                </div>
                <div
                    className="MobClose"
                    onClick={() => {
                        handleMobClose();
                    }}
                >
                    <Icon name={'faXmark'} fontSize={'28px'} color={'white'} />
                </div>
            </div>
            <div className="searchBox">
                <Input
                    name="mainContent"
                    value={search.mainContent}
                    onChange={onChangeSearch}
                    option={'Default'}
                    desc={'웹사이트를 검색해보세요'}
                    head={'Search'}
                />
            </div>

            <div className="volume_cont">
                <h3>Weekly Clicks</h3>
                <div className="rangeNum Pretendard">0K ~ {range.min}K</div>
                <h3 className="subtitle">한 주 동안 서비스를 이용한 순수한 이용자 수입니다.</h3>
                <label>
                    <input
                        className="rangeInput"
                        type="range"
                        name="min"
                        min="0"
                        max="11340"
                        value={range.min}
                        onChange={handleRangeChange}
                    />
                </label>
            </div>

            <div className="check_List">
                <div className="clData">
                    <div className="clTitle">Ui Patten</div>
                    <ul className="layerChange">
                        <button
                            disabled={toggleColor.activeButton === 'clListW'}
                            onClick={() => {
                                {
                                    handleClick('clListW');
                                    handleButtonClick('clListW');
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" fill="none">
                                <g fill={iColor2}>
                                    <rect width="3.5" height="15" rx="0.7"></rect>
                                    <rect width="3.5" height="15" x="5" rx="0.7"></rect>
                                    <rect width="3.5" height="15" x="10" rx="0.7"></rect>
                                </g>
                            </svg>
                        </button>
                        <button
                            disabled={toggleColor.activeButton === 'clListS'}
                            onClick={() => {
                                {
                                    handleClick('clListS');
                                    handleButtonClick('clListS');
                                }
                            }}
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill={iColor}>
                                    <rect x="8" width="6" height="6" rx="1"></rect>
                                    <rect x="8" y="8" width="6" height="6" rx="1"></rect>
                                    <rect y="8" width="6" height="6" rx="1"></rect>
                                    <rect width="6" height="6" rx="1"></rect>
                                </g>
                            </svg>
                        </button>
                    </ul>
                </div>
                <ul className="clList font_minsans">
                    {MainOption.map((key) => (
                        <li key={key}>
                            <label htmlFor={key}>
                                {labels[key]}
                                <input
                                    name="UiPatten"
                                    type="checkbox"
                                    id={key}
                                    checked={newCheck.UiPatten === key}
                                    onChange={onChangeNewCheck}
                                />
                            </label>
                            <div className="borderBottom"></div>
                            <div
                                className="clListSum"
                                style={{
                                    opacity: selectedKey === key ? '1' : '0',
                                    fontSize: selectedKey === key ? '12px' : '0',
                                }}
                            >
                                ({checkedSum})
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mobCloseTrueCont">
                    <div onClick={handleMobClose}>
                        <Icon name={'subArrow'} fontSize={'18px'} color={'black'} />
                        <span className="Pretendard">확인하기</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fix;
