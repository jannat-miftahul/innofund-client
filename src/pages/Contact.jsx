import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import {
    FaPaperPlane,
    FaArrowRight,
    FaHeadset,
    FaComments,
} from "react-icons/fa";
import { useTheme } from "../provider/ThemeProvider";

const Contact = () => {
    const { isDark } = useTheme();

    const contactInfo = [
        {
            icon: HiMail,
            title: "Email Us",
            value: "hello@innofund.com",
            desc: "We reply within 24 hours",
            color: "text-brightPink",
        },
        {
            icon: HiPhone,
            title: "Call Us",
            value: "+1 (555) 123-4567",
            desc: "Mon-Fri 9am-6pm EST",
            color: "text-neonGreen",
        },
        {
            icon: HiLocationMarker,
            title: "Visit Us",
            value: "123 Innovation Street",
            desc: "Tech City, TC 10001",
            color: "text-violet",
        },
        {
            icon: HiClock,
            title: "Business Hours",
            value: "Mon - Fri: 9AM - 6PM",
            desc: "Weekend: By appointment",
            color: "text-coral",
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Decorations */}
            <div
                className={`absolute inset-0 ${
                    isDark
                        ? "bg-gradient-to-b from-darkBg via-darkCard/30 to-darkBg"
                        : "bg-gradient-to-b from-lightPink/20 via-white to-lightPurple/20"
                }`}
            />
            <div
                className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl ${
                    isDark ? "bg-brightPink/5" : "bg-brightPink/10"
                }`}
            />
            <div
                className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${
                    isDark ? "bg-neonGreen/5" : "bg-neonGreen/10"
                }`}
            />
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${
                    isDark ? "bg-violet/5" : "bg-violet/5"
                }`}
            />

            {/* Floating Particles */}
            <div
                className="absolute top-32 right-20 w-3 h-3 bg-brightPink/40 rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}
            />
            <div
                className="absolute top-60 left-32 w-2 h-2 bg-neonGreen/50 rounded-full animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            <div
                className="absolute bottom-40 right-1/4 w-4 h-4 bg-coral/30 rounded-full animate-bounce"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
            />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    {/* Title */}
                    <h1
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Let&apos;s Start a{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-brightPink via-coral to-softOrange bg-clip-text text-transparent">
                                Conversation
                            </span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 12"
                                fill="none"
                            >
                                <path
                                    d="M2 10C50 2 150 2 198 10"
                                    stroke="url(#contact-underline)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="contact-underline"
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
                        </span>
                    </h1>

                    <p
                        className={`max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        Have questions or ideas? We&apos;re here to help. Reach
                        out and let&apos;s create something amazing together.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {[
                        {
                            icon: FaHeadset,
                            value: "24/7",
                            label: "Support Available",
                        },
                        {
                            icon: FaComments,
                            value: "< 2hrs",
                            label: "Response Time",
                        },
                        {
                            icon: HiMail,
                            value: "10K+",
                            label: "Emails Answered",
                        },
                        {
                            icon: HiPhone,
                            value: "98%",
                            label: "Satisfaction Rate",
                        },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`group p-5 rounded-2xl border backdrop-blur-sm text-center transition-all duration-500 hover:-translate-y-1 ${
                                isDark
                                    ? "bg-darkCard/50 border-darkBorder hover:border-brightPink/30"
                                    : "bg-white/80 border-gray-100 hover:border-brightPink/30 shadow-lg"
                            }`}
                        >
                            <stat.icon
                                className={`w-6 h-6 mx-auto mb-2 text-brightPink group-hover:scale-110 transition-transform duration-300`}
                            />
                            <p
                                className={`text-2xl font-bold mb-1 ${
                                    isDark ? "text-white" : "text-gray-900"
                                }`}
                            >
                                {stat.value}
                            </p>
                            <p
                                className={`text-xs ${
                                    isDark ? "text-gray-500" : "text-gray-500"
                                }`}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2
                            className={`text-2xl font-bold mb-6 ${
                                isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Contact{" "}
                            <span className="bg-gradient-to-r from-brightPink to-coral bg-clip-text text-transparent">
                                Information
                            </span>
                        </h2>

                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className={`group relative p-5 rounded-2xl border transition-all duration-500 hover:-translate-x-1 hover:shadow-xl ${
                                    isDark
                                        ? "bg-darkCard/80 border-darkBorder hover:border-brightPink/30"
                                        : "bg-white/90 border-gray-100 hover:border-brightPink/30 shadow-lg"
                                }`}
                            >
                                {/* Hover accent line */}
                                <div
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-1/2 ${info.color.replace(
                                        "text-",
                                        "bg-"
                                    )} rounded-full transition-all duration-300`}
                                />

                                <div className="flex items-start gap-4">
                                    <info.icon
                                        className={`w-6 h-6 ${info.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}
                                    />
                                    <div className="flex-1">
                                        <h3
                                            className={`font-semibold mb-1 ${
                                                isDark
                                                    ? "text-white"
                                                    : "text-gray-900"
                                            }`}
                                        >
                                            {info.title}
                                        </h3>
                                        <p
                                            className={`font-medium ${
                                                isDark
                                                    ? "text-gray-300"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {info.value}
                                        </p>
                                        <p
                                            className={`text-sm mt-1 ${
                                                isDark
                                                    ? "text-gray-500"
                                                    : "text-gray-400"
                                            }`}
                                        >
                                            {info.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div
                            className={`p-6 rounded-2xl border mt-6 ${
                                isDark
                                    ? "bg-darkCard/50 border-darkBorder"
                                    : "bg-white/80 border-gray-100 shadow-lg"
                            }`}
                        >
                            <h3
                                className={`font-semibold mb-4 ${
                                    isDark ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Follow Us
                            </h3>
                            <div className="flex gap-3">
                                {["𝕏", "in", "f", "📸"].map((icon, i) => (
                                    <button
                                        key={i}
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 hover:scale-110 ${
                                            isDark
                                                ? "bg-darkBorder text-gray-400 hover:text-white hover:bg-brightPink"
                                                : "bg-gray-100 text-gray-500 hover:text-white hover:bg-brightPink"
                                        }`}
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className={`lg:col-span-3 relative p-8 lg:p-10 rounded-3xl border backdrop-blur-sm ${
                            isDark
                                ? "bg-darkCard/80 border-darkBorder"
                                : "bg-white/90 border-gray-100 shadow-2xl"
                        }`}
                    >
                        {/* Decorative gradient */}
                        <div className="absolute top-0 right-0 w-1/2 h-32 bg-gradient-to-l from-brightPink/5 to-transparent rounded-tr-3xl" />

                        <div className="relative">
                            <div className="flex items-center gap-3 mb-8">
                                <FaPaperPlane className="w-5 h-5 text-brightPink" />
                                <h2
                                    className={`text-2xl font-bold ${
                                        isDark ? "text-white" : "text-gray-900"
                                    }`}
                                >
                                    Send us a{" "}
                                    <span className="bg-gradient-to-r from-brightPink to-coral bg-clip-text text-transparent">
                                        Message
                                    </span>
                                </h2>
                            </div>

                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            className={`text-sm font-medium ${
                                                isDark
                                                    ? "text-gray-300"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brightPink/20 ${
                                                isDark
                                                    ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-brightPink/50"
                                                    : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-brightPink/50 focus:bg-white"
                                            }`}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            className={`text-sm font-medium ${
                                                isDark
                                                    ? "text-gray-300"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brightPink/20 ${
                                                isDark
                                                    ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-brightPink/50"
                                                    : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-brightPink/50 focus:bg-white"
                                            }`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        className={`text-sm font-medium ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="How can we help you?"
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brightPink/20 ${
                                            isDark
                                                ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-brightPink/50"
                                                : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-brightPink/50 focus:bg-white"
                                        }`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        className={`text-sm font-medium ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Tell us more about your inquiry..."
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brightPink/20 resize-none ${
                                            isDark
                                                ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-brightPink/50"
                                                : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-brightPink/50 focus:bg-white"
                                        }`}
                                    ></textarea>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                    <p
                                        className={`text-sm ${
                                            isDark
                                                ? "text-gray-500"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        🔒 Your information is secure and
                                        encrypted
                                    </p>
                                    <button
                                        type="submit"
                                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brightPink to-coral text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-brightPink/30 transition-all duration-300 hover:scale-105"
                                    >
                                        <FaPaperPlane className="w-4 h-4 group-hover:animate-pulse" />
                                        Send Message
                                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map or Additional Info Section */}
                <div
                    className={`mt-16 p-8 rounded-3xl border backdrop-blur-sm ${
                        isDark
                            ? "bg-darkCard/50 border-darkBorder"
                            : "bg-white/80 border-gray-100 shadow-xl"
                    }`}
                >
                    <div className="text-center">
                        <h3
                            className={`text-2xl font-bold mb-3 ${
                                isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Still Have{" "}
                            <span className="bg-gradient-to-r from-neonGreen to-teal bg-clip-text text-transparent">
                                Questions?
                            </span>
                        </h3>
                        <p
                            className={`max-w-xl mx-auto mb-6 ${
                                isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            Check out our FAQ section or browse our help center
                            for quick answers to common questions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                                    isDark
                                        ? "bg-darkBorder text-white hover:bg-neonGreen hover:text-darkBg"
                                        : "bg-gray-100 text-gray-700 hover:bg-neonGreen hover:text-white"
                                }`}
                            >
                                View FAQ
                                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button
                                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                                    isDark
                                        ? "bg-darkBorder text-white hover:bg-violet hover:text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-violet hover:text-white"
                                }`}
                            >
                                Help Center
                                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
