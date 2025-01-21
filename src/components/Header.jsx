import './Header.css';
import { useContext } from 'react';
import { DataDispatchContext } from '../Context/DataProvider';
import HeadIcons from '../public/HeadIcons';
import { useNavigate } from 'react-router-dom';

function Header({ title, size, font }) {
    const { onChangeSearch, search } = useContext(DataDispatchContext);
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);

        // 스크롤 초기화 대상
        const scrollContainer = document.querySelector('.App') || window;

        // 스크롤 초기화
        requestAnimationFrame(() => {
            scrollContainer.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        });
    };

    return (
        <header className="Header">
            <div className="header_left">
                <span
                    className="mainLogo"
                    style={{ fontSize: size, fontFamily: font }}
                    onClick={() => handleNavigate('/')}
                >
                    ALL WEB
                    <HeadIcons name="faCopyright" width={'8px'} position={'absolute'} top={'8px'} right={'-13px'} />
                </span>
                {/* <img className="Mlogo" src={getLogo(2)} alt="" width={size} /> */}
            </div>
            <div className="header_menu">
                <ul className="menuWrap">
                    <li onClick={() => handleNavigate('/About')}>About</li>
                    <li onClick={() => handleNavigate('/Portfolio')}>
                        Portfolio
                        <HeadIcons name="faHeart" width={'8px'} position={'absolute'} top={'5px'} right={'-8px'} />
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
