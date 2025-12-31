import Slider from "../../components/Slider";
import HowItWorks from "./HowItWorks";
import RunningCampaigns from "./RunningCampaigns";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import { FaRocket, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

const HomePage = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Banner Section */}
            <Slider />

            {/* Stats Section */}
            <section className="py-12 sm:py-16 bg-paleYellow/30">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-brightPink rounded-full mb-4">
                                <FaRocket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                500+
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                Campaigns Launched
                            </p>
                        </div>
                        <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-neonGreen rounded-full mb-4">
                                <FaUsers className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                10K+
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                Active Donors
                            </p>
                        </div>
                        <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:col-span-1 col-span-1">
                            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-softOrange rounded-full mb-4">
                                <FaHandHoldingHeart className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                $2M+
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                Funds Raised
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Running Campaigns */}
            <RunningCampaigns />

            {/* How It Works */}
            <HowItWorks />

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-brightPink">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                        Join thousands of innovators and supporters who are
                        changing the world, one campaign at a time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/add-campaign"
                            className="btn bg-neonGreen text-gray-800 hover:bg-paleYellow border-none px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                        >
                            Start a Campaign
                        </Link>
                        <Link
                            to="/all-campaigns"
                            className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-brightPink px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
                        >
                            Explore Campaigns
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />
        </div>
    );
};

export default HomePage;
