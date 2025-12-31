import { FaUserPlus, FaEdit, FaShareAlt, FaHandHoldingUsd } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: FaUserPlus,
            title: "Sign Up",
            description: "Create your free account in just a few seconds to get started on your journey.",
            iconBg: "bg-skyBlue",
            bgColor: "bg-skyBlue/20",
        },
        {
            icon: FaEdit,
            title: "Create Campaign",
            description: "Fill out your campaign details, add images, and set your funding goal.",
            iconBg: "bg-brightPink",
            bgColor: "bg-brightPink/10",
        },
        {
            icon: FaShareAlt,
            title: "Share & Promote",
            description: "Share your campaign on social media and with your network to reach more supporters.",
            iconBg: "bg-softOrange",
            bgColor: "bg-softOrange/20",
        },
        {
            icon: FaHandHoldingUsd,
            title: "Receive Funds",
            description: "Collect donations securely and withdraw funds directly to your account.",
            iconBg: "bg-neonGreen",
            bgColor: "bg-neonGreen/20",
        },
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Start your fundraising journey in four simple steps. It&apos;s easy, fast, and secure.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            {/* Connector Line - Hidden on mobile */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 -z-10" />
                            )}
                            
                            <div className={`${step.bgColor} rounded-2xl p-6 sm:p-8 text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                                {/* Step Number */}
                                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-brightPink text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                                    {index + 1}
                                </div>
                                
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${step.iconBg} rounded-2xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" />
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
