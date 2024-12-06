// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
    return (
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/KskdZMB/banner-1.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/x7bwThH/banner-2.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/FYRPtqK/banner-3.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/G2VThTh/banner-4.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/x3FDMC4/banner-5.jpg"
                        alt="banner"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
