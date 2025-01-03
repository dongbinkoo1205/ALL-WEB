import './Header.css';
import { useContext } from 'react';
import { DataDispatchContext } from '../Context/DataProvider';
import { Link } from 'react-router-dom';

import HeadIcons from '../public/HeadIcons';

function Header({ title, size, font }) {
    const { onChangeSearch, search } = useContext(DataDispatchContext);
    return (
        <header className="Header">
            <div className="header_left">
                <span className="mainLogo" style={{ fontSize: size, fontFamily: font }}>
                    <Link to="/">ALL WEB</Link>
                    <HeadIcons name="faCopyright" width={'8px'} position={'absolute'} top={'8px'} right={'-13px'} />
                </span>
                {/* <img className="Mlogo" src={getLogo(2)} alt="" width={size} /> */}
            </div>
            <div className="header_menu">
                <ul className="menuWrap">
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Portfolio">
                            Portfolio
                            <HeadIcons name="faHeart" width={'8px'} position={'absolute'} top={'5px'} right={'-8px'} />
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div className="header_right">
                <Input
                    name="mainContent"
                    value={search.mainContent}
                    onChange={onChangeSearch}
                    option={'Default'}
                    desc={'웹사이트를 검색해보세요'}
                />
            </div> */}
        </header>
    );
}

export default Header;
