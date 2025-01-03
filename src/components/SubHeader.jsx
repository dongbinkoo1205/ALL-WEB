import './SubHeader.css';
import Input from './Input';
import { useContext } from 'react';
import { DataDispatchContext } from '../Context/DataProvider';
import { getLogo } from '../util/Mlogo';

function SubHeader({ title }) {
    const { onChangeSearch, search } = useContext(DataDispatchContext);
    return (
        <header className="SubHeader">
            {/* <div className="header_center">{title}</div> */}

            <div className="header_left">
                <img className="Mlogo" src={getLogo(2)} alt="" />
            </div>
            <div className="header_right">
                {/* <Input
                    name="mainContent"
                    value={search.mainContent}
                    onChange={onChangeSearch}
                    option={'Default'}
                    desc={'웹사이트를 검색해보세요'}
                /> */}
            </div>
        </header>
    );
}

export default SubHeader;