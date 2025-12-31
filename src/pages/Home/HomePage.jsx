import Slider from "../../components/Slider";
import HowItWorks from "./HowItWorks";
import RunningCampaigns from "./RunningCampaigns";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import {
    FaRocket,
    FaUsers,
    FaHandHoldingHeart,
    FaArrowRight,
    FaShieldAlt,
    FaGlobe,
    FaChartLine,
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const stepValue = target / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
        <span ref={counterRef}>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};

AnimatedCounter.propTypes = {
    target: PropTypes.number.isRequired,
    suffix: PropTypes.string,
};

// Floating particles background component
const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full opacity-20"
                    style={{
                        width: `${Math.random() * 20 + 10}px`,
                        height: `${Math.random() * 20 + 10}px`,
                        background: `linear-gradient(135deg, ${["#DB2777", "#84CC16", "#FDBA74", "#BAE6FD"][
                            Math.floor(Math.random() * 4)
                        ]
                            }, transparent)`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    );
};

const HomePage = () => {
    const [, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const stats = [
        {
            icon: FaRocket,
            value: 500,
            suffix: "+",
            label: "Campaigns Launched",
            color: "from-pink-500 to-rose-500",
            bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
            iconBg: "bg-gradient-to-br from-brightPink to-pink-600",
        },
        {
            icon: FaUsers,
            value: 10000,
            suffix: "+",
            label: "Active Donors",
            color: "from-lime-500 to-green-500",
            bgColor: "bg-gradient-to-br from-lime-50 to-green-50",
            iconBg: "bg-gradient-to-br from-neonGreen to-green-600",
        },
        {
            icon: FaHandHoldingHeart,
            value: 2,
            suffix: "M+",
            label: "Funds Raised",
            prefix: "$",
            color: "from-orange-400 to-amber-500",
            bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
            iconBg: "bg-gradient-to-br from-softOrange to-orange-500",
        },
    ];

    const features = [
        {
            icon: FaShieldAlt,
            title: "Secure Transactions",
            description:
                "Enterprise-grade security protecting every donation with encrypted payments.",
        },
        {
            icon: FaGlobe,
            title: "Global Reach",
            description:
                "Connect with supporters worldwide and expand your campaign's impact.",
        },
        {
            icon: FaChartLine,
            title: "Real-time Analytics",
            description:
                "Track your campaign performance with detailed insights and metrics.",
        },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Banner Section */}
            <Slider />

            {/* Stats Section with Glassmorphism */}
            <section className="relative py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
                <FloatingParticles />

                {/* Background glow effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brightPink/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonGreen/20 rounded-full blur-3xl" />

                <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-neonGreen text-sm font-medium mb-4 border border-white/20">
                            ✨ Trusted by thousands
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Making Dreams{" "}
                            <span className="bg-gradient-to-r from-neonGreen via-brightPink to-softOrange bg-clip-text text-transparent">
                                Come True
                            </span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                            Join the movement of creators and supporters
                            changing the world together.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                {/* Glassmorphism Card */}
                                <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-neonGreen/20">
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neonGreen/0 via-brightPink/0 to-softOrange/0 group-hover:from-neonGreen/10 group-hover:via-brightPink/10 group-hover:to-softOrange/10 transition-all duration-500" />

                                    <div className="relative z-10 text-center">
                                        {/* Icon */}
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 ${stat.iconBg} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                                        >
                                            <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                        </div>

                                        {/* Value */}
                                        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                            {stat.prefix && stat.prefix}
                                            <AnimatedCounter
                                                target={stat.value}
                                                suffix={stat.suffix}
                                            />
                                        </h3>

                                        {/* Label */}
                                        <p className="text-gray-300 text-base sm:text-lg font-medium">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section - New Premium Section */}
            <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonGreen via-brightPink to-softOrange" />
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-brightPink/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neonGreen/5 rounded-full blur-3xl" />

                <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-brightPink/10 text-brightPink text-sm font-semibold mb-4">
                            Why Choose InnoFund
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Built for{" "}
                            <span className="text-brightPink">Success</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                            Everything you need to launch, manage, and succeed
                            with your crowdfunding campaign.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brightPink/30 overflow-hidden"
                            >
                                {/* Hover gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brightPink/5 to-neonGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Decorative corner */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-neonGreen/20 to-brightPink/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brightPink to-pink-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brightPink transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Running Campaigns */}
            <RunningCampaigns />

            {/* How It Works */}
            <HowItWorks />

            {/* Premium CTA Section */}
            <section className="relative py-20 sm:py-28 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brightPink via-pink-600 to-rose-700" />

                {/* Animated mesh gradient overlay */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Floating shapes */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-neonGreen/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

                <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Badge */}
                    <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/30">
                        🚀 Start Today
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Make a{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">Difference</span>
                            <span className="absolute -bottom-2 left-0 w-full h-3 bg-neonGreen/50 rounded-full -rotate-1" />
                        </span>
                        ?
                    </h2>

                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of innovators and supporters who are
                        changing the world, one campaign at a time.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/add-campaign"
                            className="group relative inline-flex items-center gap-3 bg-neonGreen text-gray-900 hover:bg-lime-400 px-8 sm:px-10 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-neonGreen/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                        >
                            <span className="relative z-10">
                                Start a Campaign
                            </span>
                            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </Link>

                        <Link
                            to="/all-campaigns"
                            className="group inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brightPink px-8 sm:px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <span>Explore Campaigns</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80">
                        <span className="flex items-center gap-2 text-sm">
                            <FaShieldAlt className="text-neonGreen" />
                            Secure Payments
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                            <FaUsers className="text-neonGreen" />
                            10K+ Active Users
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                            <FaGlobe className="text-neonGreen" />
                            Global Community
                        </span>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Newsletter Section - New */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brightPink/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neonGreen/20 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                                Stay in the Loop
                            </h3>
                            <p className="text-gray-300 mb-8 text-base sm:text-lg">
                                Get the latest updates on new campaigns,
                                success stories, and exclusive tips delivered to
                                your inbox.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-4 justify-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 max-w-md px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-neonGreen focus:ring-2 focus:ring-neonGreen/20 transition-all duration-300"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-neonGreen hover:bg-lime-400 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-neonGreen/30 transition-all duration-300 hover:scale-105"
                                >
                                    Subscribe
                                </button>
                            </form>

                            <p className="mt-4 text-gray-400 text-sm">
                                No spam, unsubscribe anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
