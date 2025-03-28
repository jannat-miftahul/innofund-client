// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/KskdZMB/banner-1.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/x7bwThH/banner-2.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/FYRPtqK/banner-3.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/G2VThTh/banner-4.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/x3FDMC4/banner-5.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
