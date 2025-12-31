import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CampaignCard from "../../components/CampaignCard";
import { FaArrowRight, FaFire } from "react-icons/fa";

const RunningCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://innofund-server.vercel.app/running-campaigns")
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 bg-softOrange/30 text-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                        <FaFire className="animate-pulse" />
                        <span>Trending Now</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Running Campaigns
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Discover active campaigns that need your support. Every
                        contribution makes a difference!
                    </p>
                </div>

                {/* Campaign Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-gray-100 rounded-2xl h-80 sm:h-96 animate-pulse"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {campaigns.map((campaign) => (
                            <CampaignCard
                                key={campaign._id}
                                campaign={campaign}
                            />
                        ))}
                    </div>
                )}

                {/* View All Button */}
                <div className="text-center mt-8 sm:mt-12">
                    <Link
                        to="/all-campaigns"
                        className="inline-flex items-center gap-2 bg-brightPink hover:bg-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                        View All Campaigns
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RunningCampaigns;
