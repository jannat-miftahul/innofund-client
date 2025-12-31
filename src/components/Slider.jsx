import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../styles.css";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const Slider = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://innofund-server.vercel.app/running-campaigns")
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch campaigns", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full flex items-center justify-center bg-gray-100">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <section className="relative">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect="fade"
                autoplay={{
                    delay: 5000,
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
                    0: { navigation: { enabled: false } },
                    768: { navigation: { enabled: true } },
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="heroSwiper"
            >
                {campaigns.map((campaign) => (
                    <SwiperSlide key={campaign._id}>
                        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
                            {/* Background Image */}
                            <img
                                className="w-full h-full object-cover"
                                src={campaign.image}
                                alt={campaign.title}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-lg animate-fadeInUp">
                                        {campaign.title}
                                    </h1>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 drop-shadow-md max-w-2xl mx-auto line-clamp-2">
                                        {campaign.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                        <Link
                                            to={`/campaigns/${campaign._id}`}
                                            className="btn bg-neonGreen hover:bg-lime-400 text-gray-800 border-none px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                        >
                                            See Details
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

export default Slider;
