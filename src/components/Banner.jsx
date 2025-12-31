// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "../styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const Banner = () => {
    const slides = [
        {
            image: "https://i.ibb.co.com/KskdZMB/banner-1.jpg",
            title: "Fund Your Dreams",
            subtitle: "Turn your innovative ideas into reality with community support",
        },
        {
            image: "https://i.ibb.co.com/x7bwThH/banner-2.jpg",
            title: "Support Innovation",
            subtitle: "Help brilliant minds bring their visions to life",
        },
        {
            image: "https://i.ibb.co.com/FYRPtqK/banner-3.jpg",
            title: "Make an Impact",
            subtitle: "Every contribution creates a ripple of positive change",
        },
        {
            image: "https://i.ibb.co.com/G2VThTh/banner-4.jpg",
            title: "Join the Movement",
            subtitle: "Be part of a community that believes in possibilities",
        },
        {
            image: "https://i.ibb.co.com/x3FDMC4/banner-5.jpg",
            title: "Create Change",
            subtitle: "Your support can transform lives and communities",
        },
    ];

    return (
        <section className="relative">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect="fade"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={{
                    enabled: true,
                }}
                breakpoints={{
                    0: {
                        navigation: {
                            enabled: false,
                        },
                    },
                    768: {
                        navigation: {
                            enabled: true,
                        },
                    },
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="heroSwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
                            {/* Background Image */}
                            <img
                                className="w-full h-full object-cover"
                                src={slide.image}
                                alt={slide.title}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-lg animate-fadeInUp">
                                        {slide.title}
                                    </h1>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 drop-shadow-md max-w-2xl mx-auto">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                        <Link
                                            to="/all-campaigns"
                                            className="btn bg-neonGreen hover:bg-lime-400 text-gray-800 border-none px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                        >
                                            Explore Campaigns
                                        </Link>
                                        <Link
                                            to="/add-campaign"
                                            className="btn bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:scale-105"
                                        >
                                            Start Your Campaign
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
