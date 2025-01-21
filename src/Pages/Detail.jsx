import { useParams } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import Viewer from '../components/Viewer';
import useSite from '../hooks/useSite';
import Footer from '../components/Footer';
import './Detail.css';

function Detail({}) {
    const params = useParams();
    const currentItems = useSite(params.id);

    if (!currentItems) {
        return <div>해당 항목을 찾을 수 없습니다.</div>;
    }
    const {
        id,
        name,
        isMobile,
        isNote,
        isSlide,
        isMypage,
        isMemberShip,
        isAlert,
        isReservation,
        isChatBot,
        isClick,
        photoUrl,
        randomSubCategories,
    } = currentItems;
    return (
        <div className="detailPage">
            <SubHeader title={'UX・UI를 만나보세요.'}></SubHeader>
            <Viewer data={currentItems} />
            <Footer option="black" />
        </div>
    );
}

export default Detail;
