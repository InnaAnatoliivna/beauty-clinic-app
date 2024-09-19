import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../App.css';
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


const SwiperComponent = ({ children }) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                }}
            >

                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
};

export default SwiperComponent;
