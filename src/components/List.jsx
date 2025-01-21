import './List.css';
import WebItem from '../Pages/WebItem';
import Icon from '../public/Icon';
import { useContext, useState, useEffect } from 'react';
import { DataStateContext, DataDispatchContext } from '../Context/DataProvider';
import { SubCategories, SubCategorieDesc, IndustryItems } from './Categories';

// 반응형 컨텍스트
import { MediaQueryContext } from '../Context/MediaQueryContext';

import Input from './Input';

const List = ({ range, layerChange, handleSumCheck, mobCloseSection, handleMobClose }) => {
    // 반응형 컨텍스트 선언
    const { isMobile } = useContext(MediaQueryContext);

    // 데이터 개수 제어 상태(10개까지만 보여주며, 10개 초과시 더보기 버튼)
    const [visibleCount, setVisibleCount] = useState(10); // 초기 표시 개수

    // "더보기" 버튼 클릭 핸들러
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 10); // 10개씩 추가 표시
    };

    // DataDispatchContext, DataStateContext에서 가져온 함수 및 객체 활용
    const { onChangeSearch, search, onUpdate, onDelete, onChangeNewCheck, newCheck } = useContext(DataDispatchContext);
    const data = useContext(DataStateContext);

    const [selectedKey, setSelectedKey] = useState(null);

    const handleToggleClick = (index) => {
        setSelectedKey((previndex) => (previndex === index ? null : index));
    };

    const getFilteredData = () => {
        let filtered = data || []; // 초기 데이터 보장
        let filteredSubCategories = SubCategories;
        let filteredSubCategoriesDesc = SubCategorieDesc;

        // 1. 메인 컨텐츠 검색 필터링
        if (search.mainContent) {
            filtered = filtered.filter((item) => item.name.toLowerCase().includes(search.mainContent.toLowerCase()));
        }

        // 2. 서브 메뉴 검색 필터링
        if (search.subMenu) {
            filteredSubCategories = SubCategories.filter((item) =>
                item.toLowerCase().includes(search.subMenu.toLowerCase())
            );
        }

        // 3. range 범위 필터링
        if (range) {
            filtered = filtered.filter((item) => item.isClick >= range.min && item.isClick <= range.max);
        }

        if (newCheck.UiPatten) {
            filtered = filtered.filter((item) => item[newCheck.UiPatten]);
        }

        if (newCheck.Industry) {
            // 만약에 내가 선택한 체크박스의 이름이 Industry라면, filtered에서  randomSubindustryItems를 찾아서 내가 선택한 newCheck.Industry의 값과 일치하는 값만 랜더링
            filtered = filtered.filter((item) => item.randomSubindustryItems === newCheck.Industry);
        }

        if (newCheck.SelectOption) {
            // randomSubSelectOption 배열이기 때문에 Array.isArray로 배열검사를 하며, 해당 값이 배열이며, randomSubSelectOption 값에 newCheck.SelectOption이 includes되어있으면, 해당 조건 실행
            filtered = filtered.filter(
                (item) =>
                    Array.isArray(item.randomSubSelectOption) &&
                    item.randomSubSelectOption.includes(newCheck.SelectOption)
            );
        }

        return { filtered, filteredSubCategories, filteredSubCategoriesDesc };
    };

    const { filtered: filteredData, filteredSubCategories, filteredSubCategoriesDesc } = getFilteredData();

    // 렌더링 이후에 총합 계산
    useEffect(() => {
        if (newCheck.UiPatten) {
            handleSumCheck(filteredData.length);
        }
    }, [newCheck.UiPatten, handleSumCheck]);

    // 서브메뉴와 설명 토글 상태 관리
    const [addClassName, setAddClassName] = useState('subMenuOn');

    return (
        <div className="List Pretendard">
            {isMobile && (
                <div className="mobTitle font_minsans">
                    <div className="mobTitleIcon ">
                        <Icon className={`downArrow`} name="faSun" fontSize={'13px'} color={'red'} />
                        <span className="Pretendard">ALL WEB</span>
                    </div>
                    <div>
                        WEB부터 APP까지
                        <br />
                        디지털 세상을 한 번에,
                        <br />
                        그리고 한 눈에
                    </div>
                </div>
            )}
            <div className="searchCategories ">
                {isMobile ? (
                    <button
                        className="MobileScHead"
                        onClick={() => {
                            setAddClassName(addClassName === 'subMenuOn' ? 'subMenuOff' : 'subMenuOn');
                        }}
                    >
                        <span className="head Pretendard">ALL Options</span>
                        <Icon className={`downArrow downArrow_${addClassName}`} name="chevronDown" fontSize={'14px'} />
                    </button>
                ) : (
                    <button
                        className="scHead "
                        onClick={() => {
                            setAddClassName(addClassName === 'subMenuOn' ? 'subMenuOff' : 'subMenuOn');
                        }}
                    >
                        <span className="head Pretendard">ALL Options+</span>
                        <Icon className={`downArrow downArrow_${addClassName}`} name="chevronDown" fontSize={'16px'} />
                    </button>
                )}

                <ul className={`scList scList_${addClassName} scrollBar ScrollAdd`}>
                    <div className="scListTop">
                        <p>Industry Search</p>
                        {isMobile && (
                            <button
                                onClick={() => {
                                    setAddClassName(addClassName === 'subMenuOn' ? 'subMenuOff' : 'subMenuOn');
                                }}
                            >
                                <Icon
                                    className={`downArrow downArrow_${addClassName}`}
                                    name="faXmark"
                                    fontSize={'25px'}
                                    color={'white'}
                                />
                            </button>
                        )}
                    </div>

                    <Input
                        name="subMenu"
                        value={search.subMenu}
                        onChange={onChangeSearch}
                        option="Large"
                        desc="업종 검색"
                    />
                    <div className="SubCategoriesWrap">
                        <div className="SubCategories">
                            <p>Industry</p>
                            {filteredSubCategories.length > 0 ? (
                                filteredSubCategories.map((key) => (
                                    <li key={key}>
                                        <label htmlFor={key}>
                                            <input
                                                name="Industry"
                                                type="checkbox"
                                                id={key} // id를 key로 설정
                                                checked={newCheck.Industry === key}
                                                // 현재 선택된 값과 비교하여 상태 설정
                                                onChange={onChangeNewCheck}
                                            />
                                            {key}
                                        </label>
                                    </li>
                                ))
                            ) : (
                                <p style={{ margin: '30px 0' }}>데이터가 없습니다.</p>
                            )}
                        </div>
                        <div className="SubCategories">
                            <p>Options</p>
                            {IndustryItems.map((key, index) => (
                                <li key={key}>
                                    <label htmlFor={key}>
                                        <input
                                            name="SelectOption"
                                            type="checkbox"
                                            id={key} // id를 key로 설정
                                            checked={newCheck.SelectOption === key}
                                            // 현재 선택된 값과 비교하여 상태 설정
                                            onChange={onChangeNewCheck}
                                        />
                                        <span>{key}</span>
                                    </label>
                                    <span
                                        className="SubCategoriesIcon"
                                        style={{ display: isMobile ? 'none' : 'block' }}
                                    >
                                        <Icon
                                            className="IconDesc"
                                            name="question"
                                            style={{ color: 'white', fontSize: '20px' }}
                                            onClick={() => {
                                                handleToggleClick(index);
                                            }}
                                        />
                                    </span>
                                </li>
                            ))}
                        </div>
                        <div className="SubCategorieDesc">
                            {filteredSubCategoriesDesc.map((item) => (
                                <li
                                    key={item.id}
                                    className="desc"
                                    style={{
                                        display: selectedKey !== null && item.id === selectedKey + 1 ? 'block' : 'none',
                                    }}
                                >
                                    <img src={item.image} alt={item.title} />
                                    <p>{item.title}</p>
                                </li>
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
            <div className="todos_wrapper">
                {filteredData.length > 0 ? (
                    <>
                        {filteredData.slice(0, visibleCount).map((item) => (
                            <WebItem
                                key={item.id}
                                {...item}
                                onUpdate={onUpdate}
                                onDelete={onDelete}
                                layerChange={layerChange}
                            />
                        ))}

                        {/* 데이터가 더 있을 때만 "더보기" 버튼 표시 */}
                        {visibleCount < filteredData.length && (
                            <button className="load_more_button" onClick={handleLoadMore}>
                                <Icon className={`faCaretDown`} name="faCaretDown" fontSize={'13px'} color={'white'} />
                                <div>LEAD MORE</div>
                                <div>
                                    ({visibleCount / 10}/{filteredData.length / 10})
                                </div>
                            </button>
                        )}
                    </>
                ) : (
                    <p>데이터가 없습니다.</p>
                )}
            </div>
            {!mobCloseSection && (
                <div className="mobCloseFalseCont">
                    <div onClick={handleMobClose}>
                        <Icon name={'faSliders'} fontSize={'16px'} color={'white'} />
                        <span className="Pretendard">필터</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;
