import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CampaignCard from "../../components/CampaignCard";
import { FaArrowRight, FaFire, FaRocket } from "react-icons/fa";

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

    const SkeletonCard = () => (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="h-48 sm:h-56 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
            <div className="p-6">
                <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-4 animate-pulse" />
                <div className="h-4 bg-gray-100 rounded-full w-full mb-2 animate-pulse" />
                <div className="h-4 bg-gray-100 rounded-full w-2/3 mb-6 animate-pulse" />
                <div className="flex justify-between">
                    <div className="h-8 bg-gray-200 rounded-xl w-24 animate-pulse" />
                    <div className="h-8 bg-gray-200 rounded-xl w-24 animate-pulse" />
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brightPink/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neonGreen/5 rounded-full blur-3xl" />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200">
                        <FaFire className="animate-pulse text-orange-500" />
                        <span>Trending Now</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Running <span className="text-brightPink">Campaigns</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                        Discover active campaigns that need your support.
                    </p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {campaigns.map((campaign, index) => (
                            <div key={campaign._id} className="relative group">
                                {index === 0 && (
                                    <div className="absolute -top-3 left-4 z-20 flex items-center gap-1.5 bg-gradient-to-r from-brightPink to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                                        <FaRocket className="w-3 h-3" />
                                        Featured
                                    </div>
                                )}
                                <CampaignCard campaign={campaign} />
                            </div>
                        ))}
                    </div>
                )}

                <div className="text-center mt-12 sm:mt-16">
                    <Link
                        to="/all-campaigns"
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-brightPink to-pink-600 text-white px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
