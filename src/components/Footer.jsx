import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MediaQueryContext } from '../Context/MediaQueryContext';
import './footer.css';
const Footer = ({ option }) => {
    const { isMobile } = useContext(MediaQueryContext);
    const handleAlert = () => {
        alert('준비 중입니다.');
    };
    return (
        <footer className={`footer_${option} footer `}>
            <div className="footerTop">
                <p>
                    세상의 <span>모든 웹</span>을
                    <br /> 담은 웹 <span>MAGAZINE</span>
                    <br />
                    <span>ALLWEB.</span>
                </p>
            </div>
            <div className="footerBottom">
                <ul>
                    <li>
                        <a onClick={handleAlert}>부정비리신고</a>
                    </li>
                    <li>
                        <a onClick={handleAlert}>개인정보처리방침</a>
                    </li>
                    <li>
                        <a onClick={handleAlert}>이메일무단수집거부</a>
                    </li>
                </ul>
                <p>©ALLWEB. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
