import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "Campaign Creator",
            avatar: "https://i.pravatar.cc/150?img=1",
            message:
                "InnoFund helped me raise funds for my tech startup in just 2 weeks! The platform is incredibly user-friendly and the support team is amazing. I couldn't have done it without them.",
            rating: 5,
            amount: "$25,000",
            campaign: "TechStartup Pro",
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Regular Donor",
            avatar: "https://i.pravatar.cc/150?img=5",
            message:
                "I love how easy it is to find and support meaningful campaigns. The transparency and security features give me confidence in every donation I make.",
            rating: 5,
            amount: "$5,000+",
            campaign: "Monthly Contributions",
        },
        {
            id: 3,
            name: "Sam Wilson",
            role: "Nonprofit Organizer",
            avatar: "https://i.pravatar.cc/150?img=3",
            message:
                "Our nonprofit has raised over $50,000 through InnoFund. The tools for campaign management are fantastic and exceed all expectations. Highly recommended!",
            rating: 5,
            amount: "$50,000+",
            campaign: "Community Aid",
        },
        {
            id: 4,
            name: "Emily Chen",
            role: "Creative Artist",
            avatar: "https://i.pravatar.cc/150?img=9",
            message:
                "As an independent artist, InnoFund gave me the platform to fund my dream project. The community support was overwhelming. This platform truly changes lives.",
            rating: 5,
            amount: "$15,000",
            campaign: "Art Exhibition",
        },
        {
            id: 5,
            name: "Michael Brown",
            role: "Social Entrepreneur",
            avatar: "https://i.pravatar.cc/150?img=11",
            message:
                "The analytics dashboard is incredible! I could track every donation in real-time and engage with supporters directly. Game-changer for social impact projects.",
            rating: 5,
            amount: "$75,000",
            campaign: "GreenTech Initiative",
        },
    ];

    // Auto-play logic
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                );
            }, 5000);
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, testimonials.length]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brightPink/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonGreen/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            {/* Subtle pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-neonGreen text-sm font-semibold mb-4 border border-white/20">
                        ⭐ Success Stories
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Loved by{" "}
                        <span className="bg-gradient-to-r from-neonGreen via-brightPink to-softOrange bg-clip-text text-transparent">
                            Thousands
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                        Hear from our community of creators and supporters who
                        have made their dreams come true.
                    </p>
                </div>

                {/* Featured Testimonial Card */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Main Card */}
                    <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-neonGreen to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-neonGreen/30 rotate-6">
                            <FaQuoteLeft className="w-7 h-7 text-gray-900" />
                        </div>

                        {/* Content */}
                        <div className="relative">
                            {/* Rating */}
                            <div className="flex gap-1.5 mb-6 justify-center sm:justify-start">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-softOrange drop-shadow-md"
                                    />
                                ))}
                            </div>

                            {/* Message */}
                            <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light text-center sm:text-left min-h-[120px] sm:min-h-[100px]">
                                &ldquo;{testimonials[currentIndex].message}&rdquo;
                            </p>

                            {/* Author & Stats */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-4 ring-neonGreen/30"
                                        />
                                        {/* Online indicator */}
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-neonGreen rounded-full border-2 border-slate-900" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg sm:text-xl">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-400 text-sm sm:text-base">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex gap-6 text-center sm:text-right">
                                    <div>
                                        <p className="text-2xl sm:text-3xl font-bold text-neonGreen">
                                            {testimonials[currentIndex].amount}
                                        </p>
                                        <p className="text-gray-400 text-xs sm:text-sm">
                                            Raised
                                        </p>
                                    </div>
                                    <div className="hidden sm:block w-px bg-white/20" />
                                    <div className="hidden sm:block">
                                        <p className="text-lg font-semibold text-white">
                                            {testimonials[currentIndex].campaign}
                                        </p>
                                        <p className="text-gray-400 text-xs sm:text-sm">
                                            Campaign
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:border-neonGreen/50 focus:outline-none focus:ring-2 focus:ring-neonGreen/50"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-300 hover:scale-110 hover:border-neonGreen/50 focus:outline-none focus:ring-2 focus:ring-neonGreen/50"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neonGreen/50 ${currentIndex === index
                                    ? "w-10 h-3 bg-gradient-to-r from-neonGreen to-brightPink"
                                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Thumbnail Preview - Desktop */}
                <div className="hidden lg:flex justify-center gap-4 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={testimonial.id}
                            onClick={() => goToSlide(index)}
                            className={`relative group focus:outline-none focus:ring-2 focus:ring-neonGreen/50 rounded-2xl transition-all duration-300 ${currentIndex === index
                                    ? "scale-110 ring-2 ring-neonGreen"
                                    : "opacity-60 hover:opacity-100"
                                }`}
                        >
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-2xl object-cover"
                            />
                            {currentIndex !== index && (
                                <div className="absolute inset-0 bg-black/40 rounded-2xl group-hover:bg-transparent transition-colors duration-300" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
