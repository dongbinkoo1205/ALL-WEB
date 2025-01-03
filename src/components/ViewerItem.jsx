// import './ViewerItem.css';
// import { useContext, useState } from 'react';
// import { DataStateContext, DataDispatchContext } from '../App';
// function ViewerItem({}) {
//     const {} = useContext(DataDispatchContext);
//     const data = useContext(DataStateContext);
//     return <div>ViewerItem</div>;
// }

// export default ViewerItem;

import './List.css';
import WebItem from '../Pages/WebItem';
import Icon from '../public/Icon';
import { useContext, useState } from 'react';
import { DataStateContext, DataDispatchContext } from '../App';
import { SubCategories, SubCategorieDesc } from './Categories';
import Input from './Input';

const List = ({ range, filters, layerChange, onFilterChange }) => {
    const { onChangeSearch, search, onUpdate, onDelete } = useContext(DataDispatchContext);
    const data = useContext(DataStateContext);

    // 현재 선택된 아이콘의 key 저장
    const [selectedKey, setSelectedKey] = useState(null);

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        onFilterChange('randomSubCategories', checked ? id : null); // 체크 해제 시 null
    };

    const handleToggleClick = (index) => {
        setSelectedKey((previndex) => (previndex === index ? null : index));
    };

    const getFilteredData = () => {
        let filtered = data;
        let filteredSubCategories = SubCategories;
        let filteredSubCategoriesDesc = SubCategorieDesc;

        // 1. 메인 컨텐츠 검색 필터링
        if (search.mainContent) {
            filtered = filtered.filter((item) => item.name.toLowerCase().includes(search.mainContent.toLowerCase()));
        }

        // 2. 서브 메뉴 검색 필터링 (SubCategories 필터링만 적용)
        if (search.subMenu) {
            filteredSubCategories = SubCategories.filter((item) =>
                item.toLowerCase().includes(search.subMenu.toLowerCase())
            );
        }

        // 3. range 범위 필터링 (메인 컨텐츠만 적용)
        if (range) {
            filtered = filtered.filter((item) => item.isClick >= range.min && item.isClick <= range.max);
        }

        // 4. Checkbox 필터링 (메인 컨텐츠만 적용)
        filtered = filtered.filter((item) => Object.keys(filters).every((key) => !filters[key] || item[key]));

        // 5. 서브타이틀 필터링 (메인 컨텐츠만 적용)
        if (filters.randomSubCategories) {
            filtered = filtered.filter((item) => item.randomSubCategories === filters.randomSubCategories);
        }

        // 6. SubCategorieDesc 필터링 (선택된 아이콘의 key 기준)
        if (selectedKey) {
            filteredSubCategoriesDesc = SubCategorieDesc.filter((item) => item.id === selectedKey);
        }

        return { filtered, filteredSubCategories, filteredSubCategoriesDesc };
    };

    const { filtered: filteredData, filteredSubCategories } = getFilteredData();

    // 서브메뉴와 설명 토글 상태 관리
    const [addClassName, setAddClassName] = useState('subMenuOn');

    return (
        <div className="List Pretendard">
            <div className="searchCategories">
                <button
                    className="scHead"
                    onClick={() => {
                        setAddClassName(addClassName === 'subMenuOn' ? 'subMenuOff' : 'subMenuOn');
                    }}
                >
                    <span className="head">상세 옵션</span>
                    <Icon
                        className={`downArrow downArrow_${addClassName}`}
                        name="chevronDown"
                        style={{ color: 'white', fontSize: '20px' }}
                    />
                </button>
                <ul className={`scList scList_${addClassName} scrollBar`}>
                    <p>업종검색</p>
                    <Input
                        name="subMenu"
                        value={search.subMenu}
                        onChange={onChangeSearch}
                        option="Default"
                        desc="서브 메뉴 검색"
                    />
                    <p>컨텐츠</p>
                    <div className="SubCategories ">
                        {filteredSubCategories.map((key, index) => (
                            <li key={key}>
                                <label htmlFor={key}>
                                    <input type="checkbox" id={key} onChange={handleCheckboxChange} />
                                    {key}
                                    <Icon
                                        className="IconDesc"
                                        name="question"
                                        style={{ color: 'white', fontSize: '20px' }}
                                        onClick={() => {
                                            handleToggleClick(index);
                                        }}
                                    />
                                </label>
                            </li>
                        ))}
                    </div>
                </ul>
                <div className="SubCategorieDesc">
                    {SubCategorieDesc.map((item) => (
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
            <div className="todos_wrapper">
                {/* {filteredData.map((item) => (
                    <Link to={`/Detail/${item.id}`} key={item.id} className={`WebItem ${layerChange}`}>
                        <WebItem {...item} onUpdate={onUpdate} onDelete={onDelete} layerChange={layerChange}>
                        </WebItem>
                    </Link>
                ))} */}
                {filteredData.map((item) => (
                    <WebItem
                        key={item.id}
                        {...item}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        layerChange={layerChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
