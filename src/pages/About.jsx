import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../provider/ThemeProvider";

const About = () => {
    const { isDark } = useTheme();

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-brightPink to-coral p-10 rounded-2xl shadow-lg mb-12">
                <h1 className="text-4xl font-bold mb-4 text-white">About InnoFund</h1>
                <p className="text-lg text-white/90">
                    Empowering startups, businesses, and innovators to bring
                    their ideas to life.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className={`mb-12 p-8 rounded-2xl border ${isDark ? "bg-darkCard border-darkBorder" : "bg-white border-gray-100"}`}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <FaBullseye size={24} className="text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Our Mission</h2>
                </div>
                <p className={`text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    At InnoFund, we believe that great ideas deserve to be
                    realized. Our platform connects passionate individuals with
                    backers who share their vision. Whether you&apos;re
                    launching a new product, starting a business, or pursuing a
                    creative project, InnoFund is here to help you succeed.
                </p>
            </div>

            {/* How It Works Section */}
            <div className={`mb-12 p-8 rounded-2xl border ${isDark ? "bg-darkCard border-darkBorder" : "bg-white border-gray-100"}`}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                        <FaLightbulb size={24} className="text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>How It Works</h2>
                </div>
                <p className={`text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Creating a campaign on InnoFund is simple. Sign up, create
                    your campaign, and share it with the world. Backers can
                    browse campaigns, learn about the projects, and contribute
                    to the ones they believe in. Together, we can turn dreams
                    into reality.
                </p>
            </div>

            {/* Join Us Section */}
            <div className={`mb-12 p-8 rounded-2xl border ${isDark ? "bg-darkCard border-darkBorder" : "bg-white border-gray-100"}`}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neonGreen to-green-500 flex items-center justify-center">
                        <FaUsers size={24} className="text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Join Us</h2>
                </div>
                <p className={`text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Join our community of innovators and backers. Whether
                    you&apos;re looking to fund your next big idea or support
                    someone else&apos;s, InnoFund is the place to make it
                    happen. Sign up today and start making a difference.
                </p>
            </div>

            {/* Call-to-Action */}
            <div className="text-center mt-12">
                <Link
                    to="/all-campaigns"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brightPink to-coral text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-brightPink/30 transition-all duration-300 font-semibold text-lg hover:scale-105"
                >
                    Join Now
                </Link>
            </div>
        </div>
    );
};

export default About;
