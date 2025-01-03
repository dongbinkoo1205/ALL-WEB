import Header from '../components/Header';
import HorizontalScroll from '../components/HorizontalScroll';

function About() {
    return (
        <div className="About">
            {/* Header Section */}
            <Header title={'수정가능한 텍스트 영역'} size={'20px'} font={'NEXON Lv1 Gothic OTF'}></Header>
            <HorizontalScroll />
        </div>
    );
}

export default About;
