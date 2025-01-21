import React, { useState, useRef, createContext } from 'react';
import MokData from '../util/MokData';

export const DataStateContext = createContext();
export const DataDispatchContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState(MokData);
    const idRef = useRef(101);

    const onCreate = () => {
        const newData = {
            id: idRef.current++,
            name: '',
            isMobile: false,
            isNote: false,
            isSlide: false,
            isMypage: false,
            isMemberShip: false,
            isAlert: false,
            isReservation: false,
            isChatBot: false,
            isClick: 0,
            isDone: false,
        };
        setData([newData, ...data]);
    };

    const onUpdate = (targetId) => {
        setData(data.map((item) => (item.id === targetId ? { ...item, isMobile: !item.isMobile } : item)));
    };

    const onDelete = (targetIDX) => {
        setData(data.filter((item) => item.id !== targetIDX));
    };

    const [search, setSearch] = useState({ mainContent: '', subMenu: '' });
    const onChangeSearch = (e) => {
        const { name, value } = e.target;
        setSearch((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [newCheck, setNewCheck] = useState({ Industry: '', SelectOption: '', UiPatten: '' });
    // 선택된 key를 상태로 저장
    const [selectedKey, setSelectedKey] = useState(null);
    const onChangeNewCheck = (e) => {
        const { name, id, checked } = e.target;
        setNewCheck((prev) => ({
            ...prev,
            [name]: checked ? id : '',
        }));
        setSelectedKey(checked ? id : null);
    };

    return (
        <DataStateContext.Provider value={data}>
            <DataDispatchContext.Provider
                value={{
                    onCreate,
                    onUpdate,
                    onDelete,
                    onChangeSearch,
                    search,
                    onChangeNewCheck,
                    newCheck,
                    selectedKey,
                }}
            >
                {children}
            </DataDispatchContext.Provider>
        </DataStateContext.Provider>
    );
};

export default DataProvider;
