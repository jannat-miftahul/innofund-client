import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CampaignCard from "../../components/CampaignCard";
import { FaArrowRight, FaFire, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

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
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10" />

            {/* Image skeleton */}
            <div className="relative h-52 sm:h-56 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200">
                {/* Category badge skeleton */}
                <div className="absolute top-4 left-4 h-6 w-20 bg-gray-300/50 rounded-full" />
            </div>

            <div className="p-6">
                {/* Title skeleton */}
                <div className="h-7 bg-gray-200 rounded-xl w-4/5 mb-4" />

                {/* Description skeleton */}
                <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-100 rounded-lg w-full" />
                    <div className="h-4 bg-gray-100 rounded-lg w-3/4" />
                </div>

                {/* Progress bar skeleton */}
                <div className="h-3 bg-gray-100 rounded-full w-full mb-4" />

                {/* Stats skeleton */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="h-10 bg-gray-100 rounded-xl w-28" />
                    <div className="h-10 bg-gray-100 rounded-xl w-24" />
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-lightPink/30 via-white to-lightPurple/20" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brightPink via-softOrange to-neonGreen" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brightPink/10 to-softOrange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-neonGreen/10 to-skyBlue/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-paleYellow/10 to-lightPink/5 rounded-full blur-3xl" />

            {/* Floating particles */}
            <div
                className="absolute top-32 left-20 w-4 h-4 bg-brightPink/30 rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}
            />
            <div
                className="absolute top-48 right-32 w-3 h-3 bg-neonGreen/40 rounded-full animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            <div
                className="absolute bottom-40 left-1/3 w-5 h-5 bg-softOrange/30 rounded-full animate-bounce"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
            />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 sm:mb-20">
                    {/* Trending badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-brightPink/10 backdrop-blur-sm text-orange-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-orange-200/50 shadow-lg shadow-orange-500/10">
                        <FaFire className="text-orange-500 animate-pulse" />
                        <span>Trending Now</span>
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Running{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-brightPink via-softOrange to-brightPink bg-clip-text text-transparent">
                                Campaigns
                            </span>
                            <HiSparkles className="absolute -top-2 -right-6 w-6 h-6 text-softOrange animate-pulse" />
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl">
                        Discover active campaigns making a difference right now.
                        Your support can help turn dreams into reality.
                    </p>
                </div>

                {/* Campaign Cards */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[1, 2, 3].map((i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {campaigns.map((campaign, index) => (
                            <div
                                key={campaign._id}
                                className="relative group"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                {/* Featured badge for first campaign */}
                                {index === 0 && (
                                    <div className="absolute -top-3 left-4 z-20 flex items-center gap-1.5 bg-gradient-to-r from-brightPink to-softOrange text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-brightPink/30 animate-pulse">
                                        <FaRocket className="w-3 h-3" />
                                        Featured
                                    </div>
                                )}

                                {/* Hot badge for second campaign */}
                                {index === 1 && (
                                    <div className="absolute -top-3 left-4 z-20 flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-orange-500/30">
                                        <FaFire className="w-3 h-3" />
                                        Hot
                                    </div>
                                )}

                                {/* Hover glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-brightPink via-softOrange to-neonGreen rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                                <div className="relative">
                                    <CampaignCard campaign={campaign} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center mt-16 sm:mt-20">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            to="/all-campaigns"
                            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-brightPink to-softOrange text-white px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-brightPink/30 hover:shadow-2xl hover:shadow-brightPink/40 transition-all duration-300 hover:scale-105 overflow-hidden"
                        >
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative">View All Campaigns</span>
                            <FaArrowRight className="relative group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <span className="text-gray-400 text-sm hidden sm:block">
                            or
                        </span>

                        <Link
                            to="/add-campaign"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-brightPink font-semibold transition-colors duration-300"
                        >
                            J<span>Start Your Own Campaign</span>
                            <FaArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-10 text-gray-400 text-sm">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neonGreen animate-pulse" />
                            Secure Donations
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brightPink animate-pulse" />
                            Verified Campaigns
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-skyBlue animate-pulse" />
                            24/7 Support
                        </span>
                    </div>
                </div>
            </div>

            {/* Shimmer animation keyframes - add to your CSS */}
            <style>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
};

export default RunningCampaigns;
