import {
    FaBullseye, FaLightbulb, FaUsers, FaRocket,
    FaHeart, FaShieldAlt, FaGlobe, FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../provider/ThemeProvider";

const About = () => {
    const { isDark } = useTheme();

    const stats = [
        {
            value: "10K+",
            label: "Projects Funded",
            color: "from-brightPink to-coral",
        },
        {
            value: "$50M+",
            label: "Total Raised",
            color: "from-neonGreen to-teal",
        },
        {
            value: "100K+",
            label: "Happy Backers",
            color: "from-violet to-coral",
        },
        {
            value: "98%",
            label: "Success Rate",
            color: "from-softOrange to-brightPink",
        },
    ];

    const values = [
        {
            icon: FaHeart,
            title: "Community First",
            desc: "We prioritize our community of creators and backers above all.",
            color: "text-brightPink",
            hoverColor: "group-hover:text-coral",
        },
        {
            icon: FaShieldAlt,
            title: "Trust & Security",
            desc: "Your funds and data are protected with enterprise-grade security.",
            color: "text-violet",
            hoverColor: "group-hover:text-brightPink",
        },
        {
            icon: FaGlobe,
            title: "Global Reach",
            desc: "Connect with supporters from around the world, 24/7.",
            color: "text-neonGreen",
            hoverColor: "group-hover:text-teal",
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Decorations */}
            <div
                className={`absolute inset-0 ${isDark
                    ? "bg-gradient-to-b from-darkBg via-darkCard/30 to-darkBg"
                    : "bg-gradient-to-b from-lightPink/20 via-white to-lightPurple/20"
                    }`}
            />
            <div
                className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? "bg-brightPink/5" : "bg-brightPink/10"
                    }`}
            />
            <div
                className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? "bg-neonGreen/5" : "bg-neonGreen/10"
                    }`}
            />
            <div
                className={`absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl ${isDark ? "bg-violet/5" : "bg-violet/5"
                    }`}
            />

            {/* Floating Particles */}
            <div
                className="absolute top-40 left-20 w-3 h-3 bg-brightPink/40 rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}
            />
            <div
                className="absolute top-60 right-32 w-2 h-2 bg-neonGreen/50 rounded-full animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            <div
                className="absolute bottom-60 left-1/3 w-4 h-4 bg-coral/30 rounded-full animate-bounce"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
            />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    {/* Title */}
                    <h1
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"
                            }`}
                    >
                        Empowering Dreams,{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-brightPink via-coral to-softOrange bg-clip-text text-transparent">
                                One Campaign
                            </span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 12"
                                fill="none"
                            >
                                <path
                                    d="M2 10C50 2 150 2 198 10"
                                    stroke="url(#about-underline)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="about-underline"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%"
                                    >
                                        <stop offset="0%" stopColor="#DB2777" />
                                        <stop
                                            offset="50%"
                                            stopColor="#F472B6"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#FDBA74"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>{" "}
                        at a Time
                    </h1>

                    <p
                        className={`max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed mb-12 ${isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        InnoFund is where visionaries meet supporters.
                        We&apos;re building the future of crowdfunding by
                        connecting passionate creators with people who believe
                        in their ideas.
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`relative group p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isDark
                                    ? "bg-darkCard/50 border-darkBorder hover:border-brightPink/30"
                                    : "bg-white/80 border-gray-100 hover:border-brightPink/30 shadow-lg"
                                    }`}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brightPink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p
                                    className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                                >
                                    {stat.value}
                                </p>
                                <p
                                    className={`text-sm font-medium ${isDark
                                        ? "text-gray-500"
                                        : "text-gray-500"
                                        }`}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Section */}
                <div className="relative mb-20">
                    <div
                        className={`relative overflow-hidden rounded-3xl border backdrop-blur-sm ${isDark
                            ? "bg-darkCard/80 border-darkBorder"
                            : "bg-white/90 border-gray-100 shadow-2xl"
                            }`}
                    >
                        {/* Decorative gradient */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brightPink/5 to-transparent" />

                        <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <FaBullseye className="w-10 h-10 text-brightPink transition-all duration-300 hover:text-coral hover:scale-110" />
                                    <div>
                                        <p
                                            className={`text-sm font-semibold uppercase tracking-wider ${isDark
                                                ? "text-brightPink"
                                                : "text-brightPink"
                                                }`}
                                        >
                                            Our Purpose
                                        </p>
                                        <h2
                                            className={`text-3xl font-bold ${isDark
                                                ? "text-white"
                                                : "text-gray-900"
                                                }`}
                                        >
                                            Our Mission
                                        </h2>
                                    </div>
                                </div>
                                <p
                                    className={`text-lg leading-relaxed mb-6 ${isDark
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                        }`}
                                >
                                    At InnoFund, we believe that great ideas
                                    deserve to be realized. Our platform
                                    connects passionate individuals with backers
                                    who share their vision. Whether you&apos;re
                                    launching a new product, starting a
                                    business, or pursuing a creative project,
                                    InnoFund is here to help you succeed.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-medium ${isDark
                                            ? "bg-brightPink/10 text-brightPink"
                                            : "bg-brightPink/10 text-brightPink"
                                            }`}
                                    >
                                        🎯 Goal-Oriented
                                    </span>
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-medium ${isDark
                                            ? "bg-neonGreen/10 text-neonGreen"
                                            : "bg-neonGreen/10 text-neonGreen"
                                            }`}
                                    >
                                        💡 Innovation-Driven
                                    </span>
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-medium ${isDark
                                            ? "bg-violet/10 text-violet"
                                            : "bg-violet/10 text-violet"
                                            }`}
                                    >
                                        🤝 Community-Focused
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brightPink to-coral rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                                    <FaRocket className="relative w-32 h-32 text-brightPink transition-all duration-500 group-hover:text-coral group-hover:scale-110 group-hover:-rotate-12" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${isDark
                                ? "bg-softOrange/10 text-softOrange"
                                : "bg-softOrange/10 text-softOrange"
                                }`}
                        >
                            <FaLightbulb className="w-4 h-4" />
                            Simple Process
                        </span>
                        <h2
                            className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            How It{" "}
                            <span className="bg-gradient-to-r from-softOrange to-coral bg-clip-text text-transparent">
                                Works
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                step: "01",
                                title: "Create Campaign",
                                desc: "Sign up and create your campaign with compelling story and goals.",
                                icon: "➕",
                                color: "from-brightPink to-coral",
                            },
                            {
                                step: "02",
                                title: "Share & Promote",
                                desc: "Share your campaign with friends, family, and social networks.",
                                icon: "📢",
                                color: "from-neonGreen to-teal",
                            },
                            {
                                step: "03",
                                title: "Get Funded",
                                desc: "Receive funds from backers who believe in your vision.",
                                icon: "🎉",
                                color: "from-violet to-brightPink",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${isDark
                                    ? "bg-darkCard/80 border-darkBorder hover:border-transparent"
                                    : "bg-white border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl"
                                    }`}
                            >
                                {/* Hover gradient border */}
                                <div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]`}
                                >
                                    <div
                                        className={`w-full h-full rounded-3xl ${isDark ? "bg-darkCard" : "bg-white"
                                            }`}
                                    />
                                </div>

                                <div className="relative">
                                    <div className="flex items-start justify-between mb-6">
                                        <span
                                            className={`text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                                        >
                                            {item.step}
                                        </span>
                                        <span className="text-4xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <h3
                                        className={`text-xl font-bold mb-3 ${isDark
                                            ? "text-white"
                                            : "text-gray-900"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`leading-relaxed ${isDark
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${isDark
                                ? "bg-neonGreen/10 text-neonGreen"
                                : "bg-neonGreen/10 text-neonGreen"
                                }`}
                        >
                            <FaUsers className="w-4 h-4" />
                            What We Stand For
                        </span>
                        <h2
                            className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Our{" "}
                            <span className="bg-gradient-to-r from-neonGreen to-teal bg-clip-text text-transparent">
                                Values
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`group p-8 rounded-3xl border text-center transition-all duration-500 hover:-translate-y-2 ${isDark
                                    ? "bg-darkCard/50 border-darkBorder hover:bg-darkCard"
                                    : "bg-white/80 border-gray-100 hover:bg-white shadow-lg hover:shadow-xl"
                                    }`}
                            >
                                <div className="flex justify-center mb-6">
                                    <value.icon className={`w-12 h-12 ${value.color} ${value.hoverColor} transition-all duration-500 group-hover:scale-125`} />
                                </div>
                                <h3
                                    className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    {value.title}
                                </h3>
                                <p
                                    className={`leading-relaxed ${isDark
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                        }`}
                                >
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className={`relative overflow-hidden rounded-3xl p-10 lg:p-16 text-center ${isDark
                        ? "bg-gradient-to-r from-darkCard to-darkBg border border-darkBorder"
                        : ""
                        }`}
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brightPink via-coral to-softOrange opacity-90" />
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />

                    <div className="relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Ready to Make a Difference?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of creators and backers who are
                            changing the world, one campaign at a time.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/all-campaigns"
                                className="group inline-flex items-center gap-3 bg-white text-brightPink px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105"
                            >
                                <FaRocket className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110" />
                                Explore Campaigns
                                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/add-campaign"
                                className="group inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 font-bold text-lg hover:scale-105"
                            >
                                Start Your Campaign
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
