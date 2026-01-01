import {
    FaUserPlus,
    FaEdit,
    FaShareAlt,
    FaHandHoldingUsd,
} from "react-icons/fa";
import { useTheme } from "../../provider/ThemeProvider";

const HowItWorks = () => {
    const { isDark } = useTheme();

    const steps = [
        {
            icon: FaUserPlus,
            title: "Sign Up",
            description:
                "Create your free account in just a few seconds to get started on your journey.",
            gradient: "from-sky-400 to-blue-500",
            bgGlow: "bg-sky-400/30",
            step: "01",
        },
        {
            icon: FaEdit,
            title: "Create Campaign",
            description:
                "Fill out your campaign details, add images, and set your funding goal.",
            gradient: "from-brightPink to-pink-600",
            bgGlow: "bg-brightPink/30",
            step: "02",
        },
        {
            icon: FaShareAlt,
            title: "Share & Promote",
            description:
                "Share your campaign on social media and with your network to reach more supporters.",
            gradient: "from-orange-400 to-amber-500",
            bgGlow: "bg-orange-400/30",
            step: "03",
        },
        {
            icon: FaHandHoldingUsd,
            title: "Receive Funds",
            description:
                "Collect donations securely and withdraw funds directly to your account.",
            gradient: "from-neonGreen to-green-500",
            bgGlow: "bg-neonGreen/30",
            step: "04",
        },
    ];

    return (
        <section
            className={`py-16 sm:py-24 lg:py-32 relative overflow-hidden ${
                isDark
                    ? "bg-gradient-to-b from-darkBg to-darkCard"
                    : "bg-gradient-to-b from-gray-50 to-white"
            }`}
        >
            {/* Background decorations */}
            <div
                className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
                    isDark ? "bg-brightPink/10" : "bg-brightPink/5"
                }`}
            />
            <div
                className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl ${
                    isDark ? "bg-neonGreen/10" : "bg-neonGreen/5"
                }`}
            />

            {/* Subtle grid pattern */}
            <div
                className={`absolute inset-0 ${
                    isDark ? "opacity-[0.01]" : "opacity-[0.02]"
                }`}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${
                        isDark ? "ffffff" : "000000"
                    }' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <span
                        className={`inline-block px-4 py-2 rounded-full text-neonGreen font-semibold text-sm mb-4 ${
                            isDark
                                ? "bg-neonGreen/10 border border-neonGreen/20"
                                : "bg-neonGreen/10 border border-neonGreen/20"
                        }`}
                    >
                        Simple Process
                    </span>
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        How It{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-brightPink">
                                Works
                            </span>
                            <span className="absolute -bottom-1 left-0 w-full h-3 bg-brightPink/20 rounded-full -rotate-1" />
                        </span>
                    </h2>
                    <p
                        className={`max-w-2xl mx-auto text-base sm:text-lg ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        Start your fundraising journey in four simple steps.
                        It&apos;s easy, fast, and secure.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connection Line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-sky-400 via-softOrange to-neonGreen rounded-full transform -translate-y-1/2 z-0">
                        {/* Animated glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-brightPink to-neonGreen rounded-full blur-sm animate-pulse" />
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Card */}
                                <div
                                    className={`relative rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border group-hover:-translate-y-2 overflow-hidden ${
                                        isDark
                                            ? "bg-darkCard border-darkBorder hover:border-transparent"
                                            : "bg-white border-gray-100 hover:border-transparent"
                                    }`}
                                >
                                    {/* Hover glow effect */}
                                    <div
                                        className={`absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${step.gradient} blur-sm`}
                                    />
                                    <div
                                        className={`absolute inset-[1px] rounded-3xl z-10 ${
                                            isDark ? "bg-darkCard" : "bg-white"
                                        }`}
                                    />

                                    {/* Content */}
                                    <div className="relative z-20">
                                        {/* Step Number */}
                                        <div className="absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold">
                                                {step.step}
                                            </span>
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                                        >
                                            {/* Icon glow */}
                                            <div
                                                className={`absolute inset-0 rounded-2xl ${step.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                            />
                                            <step.icon className="relative w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                        </div>

                                        {/* Text */}
                                        <h3
                                            className={`text-xl sm:text-2xl font-bold mb-3 ${
                                                isDark
                                                    ? "text-white"
                                                    : "text-gray-900"
                                            }`}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className={`leading-relaxed text-sm sm:text-base ${
                                                isDark
                                                    ? "text-gray-400"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile connector arrow */}
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center py-4 lg:hidden">
                                        <div
                                            className={`w-1 h-8 bg-gradient-to-b ${step.gradient} rounded-full`}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p
                        className={`text-sm sm:text-base mb-4 ${
                            isDark ? "text-gray-500" : "text-gray-500"
                        }`}
                    >
                        Ready to start your journey?
                    </p>
                    <a
                        href="/add-campaign"
                        className="inline-flex items-center gap-2 text-brightPink hover:text-pink-700 font-semibold text-lg transition-colors duration-300 group"
                    >
                        Create your first campaign
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
