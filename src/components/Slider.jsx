import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../styles.css";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper/modules";
import { IoArrowForward } from "react-icons/io5";

const Slider = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

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
            <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border-4 border-brightPink/30 animate-ping" />
                        <div className="absolute inset-2 rounded-full border-4 border-t-neonGreen border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                    </div>
                    <p className="text-white/60 text-sm font-medium animate-pulse">
                        Loading campaigns...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <section className="relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* Floating particles */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-brightPink rounded-full animate-float opacity-60" />
                <div
                    className="absolute top-40 right-20 w-3 h-3 bg-neonGreen rounded-full animate-float opacity-50"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-32 left-1/4 w-2 h-2 bg-coral rounded-full animate-float opacity-40"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-float opacity-30"
                    style={{ animationDelay: "0.5s" }}
                />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-brightPink/20 to-transparent rounded-full blur-3xl z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-neonGreen/15 to-transparent rounded-full blur-3xl z-10 pointer-events-none" />

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect="fade"
                speed={1000}
                parallax={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}"><span class="bullet-inner"></span></span>`;
                    },
                }}
                navigation={{
                    enabled: true,
                }}
                breakpoints={{
                    0: { navigation: { enabled: false } },
                    768: { navigation: { enabled: true } },
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[
                    Autoplay,
                    Pagination,
                    Navigation,
                    EffectFade,
                    Parallax,
                ]}
                className="heroSwiper"
            >
                {campaigns.map((campaign, index) => (
                    <SwiperSlide key={campaign._id}>
                        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] w-full overflow-hidden">
                            {/* Background Image with Parallax */}
                            <div
                                className="absolute inset-0 scale-110"
                                data-swiper-parallax="-300"
                            >
                                <img
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out"
                                    src={campaign.image}
                                    alt={campaign.title}
                                    style={{
                                        transform:
                                            activeIndex === index
                                                ? "scale(1.05)"
                                                : "scale(1)",
                                    }}
                                />
                            </div>

                            {/* Multi-layer Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

                            {/* Animated Mesh Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                                    {/* Title with Gradient */}
                                    <h1
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fadeInUp"
                                        data-swiper-parallax="-200"
                                    >
                                        <span className="inline-block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                                            {campaign.title}
                                        </span>
                                    </h1>

                                    {/* Description */}
                                    <p
                                        className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto line-clamp-2 animate-fadeInUp animation-delay-200"
                                        data-swiper-parallax="-150"
                                    >
                                        {campaign.description}
                                    </p>

                                    {/* CTA Buttons */}

                                    <Link
                                        to={`/campaigns/${campaign._id}`}
                                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neonGreen to-teal text-gray-900 font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-neonGreen/30 hover:scale-105"
                                    >
                                        <span className="relative z-10">
                                            Explore Campaign
                                        </span>
                                        <IoArrowForward className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal to-neonGreen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </Link>
                                </div>
                            </div>

                            {/* Bottom Gradient Fade */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

                            {/* Slide Counter */}
                            <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 text-white/60 font-mono text-sm">
                                <span className="text-2xl font-bold text-white">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="w-12 h-px bg-white/30" />
                                <span>
                                    {String(campaigns.length).padStart(2, "0")}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="white"
                        d="M0,64 C288,120 576,0 864,64 C1152,128 1440,32 1440,32 L1440,120 L0,120 Z"
                        className="opacity-100"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Slider;
