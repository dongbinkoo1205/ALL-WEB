import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useSite';
import { getStringedDate } from '../util/getString';
import './Detail.css';

const Diary = () => {
    const nav = useNavigate();
    const params = useParams();
    const currentDiaryItem = useDiary(params.id);

    if (!currentDiaryItem) {
        return <div>데이터 로딩중..!</div>;
    }
    const { createdDate, emotionId, content } = currentDiaryItem;
    const title = getStringedDate(new Date(createdDate));
    return (
        <div>
            <Header
                title={`${title} 기록`}
                leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)} />}
                rightChild={<Button text={'수정하기'} onClick={() => nav(`/edit/${params.id}`)} />}
            ></Header>
            <Viewer emotionId={emotionId} content={content} />
        </div>
    );
};

export default Diary;
