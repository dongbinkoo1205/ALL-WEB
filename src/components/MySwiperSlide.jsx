import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwiperContext } from '../Context/SwiperProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { DataStateContext } from '../Context/DataProvider';
import 'swiper/css';
import 'swiper/css/navigation';
import './MySwiperSlide.css';

const MySwiperSlide = ({ spaceBetween, slidesPerView, className }) => {
    const nav = useNavigate();
    const data = useContext(DataStateContext); // 데이터 가져오기
    const { setSwiperInstance } = useSwiperContext(); // Swiper 인스턴스 설정

    return (
        <div className="MySwiperSlide font_SCD3">
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
                {data.slice(0, 5).map((item) => (
                    <SwiperSlide className={className} key={item.id} onClick={() => nav(`/Detail/${item.id}`)}>
                        <div className="imgCover">
                            <span>{item.name}</span>
                            <em>{item.subName}</em>
                        </div>
                        <img src={item.photoUrl} alt={item.name} />
                        <strong className="font_kimm">(Click) {item.isClick} </strong>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MySwiperSlide;
