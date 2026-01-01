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
import { useTheme } from "../../provider/ThemeProvider";

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
    const { isDark } = useTheme();

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

            {/* Features Section - Why Choose InnoFund - Premium Bento Grid */}
            <section className={`py-20 sm:py-32 relative overflow-hidden ${
                isDark 
                    ? "bg-gradient-to-b from-darkBg via-darkCard to-darkBg"
                    : "bg-gradient-to-b from-white via-lightPurple/20 to-white"
            }`}>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonGreen via-brightPink to-softOrange" />
                <div className={`absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? "bg-gradient-to-br from-brightPink/5 to-softOrange/5" : "bg-gradient-to-br from-brightPink/10 to-softOrange/10"}`} />
                <div className={`absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full blur-3xl ${isDark ? "bg-gradient-to-br from-neonGreen/5 to-skyBlue/5" : "bg-gradient-to-br from-neonGreen/10 to-skyBlue/10"}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? "bg-gradient-to-br from-paleYellow/5 to-lightPink/5" : "bg-gradient-to-br from-paleYellow/20 to-lightPink/10"}`} />

                <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 sm:mb-20">
                        <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-brightPink text-sm font-semibold mb-6 ${
                            isDark 
                                ? "bg-brightPink/10 border border-brightPink/20"
                                : "bg-gradient-to-r from-brightPink/10 to-softOrange/10 border border-brightPink/20"
                        }`}>
                            <span className="w-2 h-2 rounded-full bg-brightPink animate-pulse" />
                            Why Choose InnoFund
                        </span>
                        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                            Built for{" "}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-brightPink via-softOrange to-brightPink bg-clip-text text-transparent">
                                    Success
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 10C50 2 150 2 198 10" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#DB2777" />
                                            <stop offset="50%" stopColor="#FDBA74" />
                                            <stop offset="100%" stopColor="#DB2777" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </h2>
                        <p className={`max-w-2xl mx-auto text-lg sm:text-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            Everything you need to launch, manage, and succeed
                            with your crowdfunding campaign.
                        </p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature Card 1 - Large */}
                        <div className="group relative md:col-span-2 lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-brightPink to-rose-600 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-brightPink/20 overflow-hidden">
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                }} />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <FaShieldAlt className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                        Secure & Trusted
                                    </h3>
                                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                                        Enterprise-grade security protecting every donation with end-to-end encrypted payments and fraud detection.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-6 pt-6 border-t border-white/20">
                                    <div>
                                        <p className="text-3xl font-bold text-white">99.9%</p>
                                        <p className="text-white/60 text-sm">Uptime</p>
                                    </div>
                                    <div className="w-px h-12 bg-white/20" />
                                    <div>
                                        <p className="text-3xl font-bold text-white">256-bit</p>
                                        <p className="text-white/60 text-sm">Encryption</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className={`group relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border overflow-hidden ${
                            isDark 
                                ? "bg-darkCard border-darkBorder hover:border-neonGreen/30"
                                : "bg-white border-gray-100 hover:border-neonGreen/30"
                        }`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-neonGreen/5 to-skyBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-neonGreen/20 to-skyBlue/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-neonGreen to-green-600 rounded-2xl mb-6 shadow-lg shadow-neonGreen/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <FaGlobe className="w-7 h-7 text-white" />
                                </div>
                                <h3 className={`text-xl font-bold mb-3 group-hover:text-neonGreen transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    Global Reach
                                </h3>
                                <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    Connect with supporters from 150+ countries worldwide.
                                </p>
                                <div className="flex -space-x-2">
                                    {['🇺🇸', '🇬🇧', '🇯🇵', '🇩🇪', '🇫🇷'].map((flag, i) => (
                                        <span key={i} className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm border-2 ${isDark ? "bg-darkBorder border-darkBg" : "bg-gray-100 border-white"}`}>
                                            {flag}
                                        </span>
                                    ))}
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neonGreen text-xs font-bold text-white border-2 border-white">
                                        +145
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className={`group relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border overflow-hidden ${
                            isDark 
                                ? "bg-darkCard border-darkBorder hover:border-softOrange/30"
                                : "bg-white border-gray-100 hover:border-softOrange/30"
                        }`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-softOrange/5 to-paleYellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-softOrange/20 to-paleYellow/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-softOrange to-orange-500 rounded-2xl mb-6 shadow-lg shadow-softOrange/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <FaChartLine className="w-7 h-7 text-white" />
                                </div>
                                <h3 className={`text-xl font-bold mb-3 group-hover:text-softOrange transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    Real-time Analytics
                                </h3>
                                <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    Track performance with detailed insights and metrics.
                                </p>
                                {/* Mini chart visualization */}
                                <div className="flex items-end gap-1 h-12">
                                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-gradient-to-t from-softOrange to-paleYellow rounded-t transition-all duration-300 group-hover:from-softOrange group-hover:to-orange-400"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 4 - Wide */}
                        <div className="group relative lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden">
                            {/* Animated gradient orbs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brightPink/20 rounded-full blur-3xl group-hover:bg-brightPink/30 transition-colors duration-700" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-neonGreen/20 rounded-full blur-3xl group-hover:bg-neonGreen/30 transition-colors duration-700" />

                            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neonGreen/20 text-neonGreen text-sm font-medium mb-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neonGreen animate-pulse" />
                                        Active Support
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                        24/7 Expert Support
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Our dedicated team is always here to help you succeed. Get assistance whenever you need it.
                                    </p>
                                </div>

                                {/* Support stats */}
                                <div className="flex flex-row sm:flex-col gap-6 sm:gap-4">
                                    <div className="text-center sm:text-right">
                                        <p className="text-4xl font-bold text-white">&lt;2min</p>
                                        <p className="text-gray-500 text-sm">Avg. Response</p>
                                    </div>
                                    <div className="text-center sm:text-right">
                                        <p className="text-4xl font-bold text-neonGreen">98%</p>
                                        <p className="text-gray-500 text-sm">Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <Link
                            to="/about"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brightPink to-softOrange text-white font-semibold rounded-full shadow-lg shadow-brightPink/30 hover:shadow-xl hover:shadow-brightPink/40 hover:scale-105 transition-all duration-300"
                        >
                            <span>Learn More About Us</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
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
            <section className={`py-16 sm:py-20 ${isDark ? "bg-gradient-to-b from-darkBg to-darkCard" : "bg-gradient-to-b from-gray-50 to-white"}`}>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden ${isDark ? "bg-gradient-to-br from-darkCard to-darkBorder" : "bg-gradient-to-br from-slate-900 to-slate-800"}`}>
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
