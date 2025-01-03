import { useContext, useEffect, useState } from 'react';
import { DataStateContext, DataDispatchContext } from '../Context/DataProvider';

import { useNavigate } from 'react-router-dom';
const useSite = (id) => {
    const data = useContext(DataStateContext);
    const [curItem, setCurItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const curItem = data.find((item) => String(item.id) === String(id));

        if (!curItem) {
            window.alert('존재하지 않는 페이지입니다.');
            nav('/', { replace: true });
        }

        setCurItem(curItem);
    }, [id, data]);

    return curItem;
};

export default useSite;
