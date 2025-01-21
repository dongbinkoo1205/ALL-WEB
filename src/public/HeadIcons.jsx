// Icon.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons';

// 아이콘 모음 객체

const icons = {
    faHeart: faHeart,
    faCopyright: faCopyright,
};

// 공통 Icon 컴포넌트
const HeadIcons = ({ name, className, color, width, position, top, right }) => {
    // 아이콘 콘텍스트 전달

    const icon = icons[name]; // 전달받은 이름으로 아이콘 선택
    if (!icon) {
        console.error(`Icon "${name}" not found!`);
        return null;
    }

    return (
        <FontAwesomeIcon
            icon={icon}
            className={className}
            style={{ color: color, width: width, height: width, position: position, top: top, right: right }}
        />
    );
};

export default HeadIcons;
