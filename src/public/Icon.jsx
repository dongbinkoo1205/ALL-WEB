// Icon.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faCircleQuestion,
    faLocationArrow,
    faHeart,
    faCopyright,
    faCaretRight,
    faXmark,
    faSliders,
    faSun,
    faCircle,
    faGear,
    faPlus,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
// 아이콘 모음 객체
const icons = {
    chevronDown: faChevronDown,
    question: faCircleQuestion,
    subArrow: faLocationArrow,
    faHeart: faHeart,
    faCopyright: faCopyright,
    faCaretRight: faCaretRight,
    faXmark: faXmark,
    faSliders: faSliders,
    faSun: faSun,
    faCircle: faCircle,
    faGear: faGear,
    faPlus: faPlus,
    faCaretDown: faCaretDown,
};

// 공통 Icon 컴포넌트
const Icon = ({ name, style, className, onClick, color, width, height, fontSize }) => {
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
            onClick={onClick}
            style={{ color: color, width: width, height: height, fontSize: fontSize }}
        />
    );
};

export default Icon;
