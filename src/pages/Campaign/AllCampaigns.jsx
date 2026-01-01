import { useEffect, useState } from "react";
import CampaignCard from "../../components/CampaignCard";
import { useTheme } from "../../provider/ThemeProvider";
import { HiSearch, HiFilter } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { IoGridOutline, IoListOutline } from "react-icons/io5";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid");
    const { isDark } = useTheme();

    useEffect(() => {
        setLoading(true);
        fetch(`https://innofund-server.vercel.app/campaigns?sort=${sortOrder}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setFilteredCampaigns(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [sortOrder]);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredCampaigns(campaigns);
        } else {
            const filtered = campaigns.filter(
                (campaign) =>
                    campaign.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    campaign.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    campaign.type
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
            );
            setFilteredCampaigns(filtered);
        }
    }, [searchQuery, campaigns]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Decorations */}
            <div
                className={`absolute inset-0 ${
                    isDark
                        ? "bg-gradient-to-b from-darkBg via-darkCard/50 to-darkBg"
                        : "bg-gradient-to-b from-lightPink/30 via-white to-lightPurple/20"
                }`}
            />
            <div
                className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl ${
                    isDark ? "bg-brightPink/5" : "bg-brightPink/10"
                }`}
            />
            <div
                className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl ${
                    isDark ? "bg-neonGreen/5" : "bg-neonGreen/10"
                }`}
            />
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
                    isDark ? "bg-violet/5" : "bg-violet/5"
                }`}
            />

            {/* Floating Particles */}
            <div
                className="absolute top-32 left-20 w-3 h-3 bg-brightPink/40 rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}
            />
            <div
                className="absolute top-48 right-32 w-2 h-2 bg-neonGreen/50 rounded-full animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            <div
                className="absolute bottom-40 left-1/4 w-4 h-4 bg-coral/30 rounded-full animate-bounce"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
            />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Hero Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    {/* Title */}
                    <h1
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Discover{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-brightPink via-coral to-softOrange bg-clip-text text-transparent">
                                Amazing
                            </span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 12"
                                fill="none"
                            >
                                <path
                                    d="M2 10C50 2 150 2 198 10"
                                    stroke="url(#underline-grad)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="underline-grad"
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
                        Campaigns
                    </h1>

                    <p
                        className={`max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        Join thousands of supporters making dreams come true.
                        Every contribution creates ripples of positive change.
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-8">
                        <div className="text-center">
                            <p
                                className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brightPink to-coral bg-clip-text text-transparent`}
                            >
                                {campaigns.length}+
                            </p>
                            <p
                                className={`text-sm ${
                                    isDark ? "text-gray-500" : "text-gray-500"
                                }`}
                            >
                                Active Campaigns
                            </p>
                        </div>
                        <div
                            className={`w-px h-12 ${
                                isDark ? "bg-darkBorder" : "bg-gray-200"
                            }`}
                        />
                        <div className="text-center">
                            <p
                                className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neonGreen to-teal bg-clip-text text-transparent`}
                            >
                                $2M+
                            </p>
                            <p
                                className={`text-sm ${
                                    isDark ? "text-gray-500" : "text-gray-500"
                                }`}
                            >
                                Total Raised
                            </p>
                        </div>
                        <div
                            className={`w-px h-12 ${
                                isDark ? "bg-darkBorder" : "bg-gray-200"
                            }`}
                        />
                        <div className="text-center">
                            <p
                                className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet to-coral bg-clip-text text-transparent`}
                            >
                                10K+
                            </p>
                            <p
                                className={`text-sm ${
                                    isDark ? "text-gray-500" : "text-gray-500"
                                }`}
                            >
                                Happy Donors
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div
                    className={`relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl mb-8 border backdrop-blur-sm shadow-xl ${
                        isDark
                            ? "bg-darkCard/80 border-darkBorder shadow-black/20"
                            : "bg-white/80 border-gray-100 shadow-gray-200/50"
                    }`}
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brightPink/20 via-transparent to-neonGreen/20 opacity-50 -z-10 blur-sm" />

                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <HiSearch
                                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                                    isDark ? "text-gray-500" : "text-gray-400"
                                }`}
                            />
                            <input
                                type="text"
                                placeholder="Search campaigns by title, description, or category..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`w-full pl-12 pr-4 py-3.5 rounded-xl text-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brightPink/20 ${
                                    isDark
                                        ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-brightPink/50"
                                        : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-brightPink/50 focus:bg-white"
                                }`}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium px-2 py-1 rounded-md transition-colors ${
                                        isDark
                                            ? "bg-darkBorder text-gray-400 hover:text-white"
                                            : "bg-gray-200 text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        {/* Divider */}
                        <div
                            className={`hidden lg:block w-px h-10 ${
                                isDark ? "bg-darkBorder" : "bg-gray-200"
                            }`}
                        />

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                                    isDark ? "bg-darkBg/50" : "bg-gray-100/50"
                                }`}
                            >
                                <HiFilter
                                    className={`w-4 h-4 ${
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                />
                                <span
                                    className={`text-sm font-medium ${
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }`}
                                >
                                    Sort:
                                </span>
                            </div>
                            <select
                                value={sortOrder}
                                onChange={handleSortChange}
                                className={`px-4 py-3 rounded-xl font-medium text-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brightPink/20 cursor-pointer ${
                                    isDark
                                        ? "bg-darkBg border-darkBorder text-white focus:border-brightPink/50"
                                        : "bg-gray-50 border-gray-200 text-gray-700 focus:border-brightPink/50"
                                }`}
                            >
                                <option value="desc">Highest First</option>
                                <option value="asc">Lowest First</option>
                            </select>
                        </div>

                        {/* View Mode Toggle */}
                        <div
                            className={`flex items-center p-1 rounded-xl ${
                                isDark ? "bg-darkBg/80" : "bg-gray-100"
                            }`}
                        >
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2.5 rounded-lg transition-all duration-300 ${
                                    viewMode === "grid"
                                        ? "bg-gradient-to-r from-brightPink to-coral text-white shadow-lg"
                                        : isDark
                                        ? "text-gray-400 hover:text-white"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                <IoGridOutline className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2.5 rounded-lg transition-all duration-300 ${
                                    viewMode === "list"
                                        ? "bg-gradient-to-r from-brightPink to-coral text-white shadow-lg"
                                        : isDark
                                        ? "text-gray-400 hover:text-white"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                <IoListOutline className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Campaign Grid */}
                {loading ? (
                    <div
                        className={`grid gap-6 lg:gap-8 ${
                            viewMode === "grid"
                                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                : "grid-cols-1"
                        }`}
                    >
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className={`rounded-2xl p-5 border ${
                                    isDark
                                        ? "bg-darkCard border-darkBorder"
                                        : "bg-white border-gray-100"
                                }`}
                            >
                                {/* Shimmer overlay */}
                                <div className="relative overflow-hidden">
                                    <div
                                        className={`absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent to-transparent ${
                                            isDark
                                                ? "via-white/5"
                                                : "via-gray-200/50"
                                        }`}
                                    />
                                    <div
                                        className={`h-48 rounded-xl mb-4 ${
                                            isDark
                                                ? "bg-darkBorder"
                                                : "bg-gray-100"
                                        }`}
                                    />
                                </div>
                                <div
                                    className={`h-6 rounded-lg mb-3 w-3/4 ${
                                        isDark ? "bg-darkBorder" : "bg-gray-100"
                                    }`}
                                />
                                <div
                                    className={`h-4 rounded-lg mb-2 ${
                                        isDark
                                            ? "bg-darkBorder/50"
                                            : "bg-gray-50"
                                    }`}
                                />
                                <div
                                    className={`h-4 rounded-lg w-2/3 mb-4 ${
                                        isDark
                                            ? "bg-darkBorder/50"
                                            : "bg-gray-50"
                                    }`}
                                />
                                <div
                                    className={`h-3 rounded-full w-full mb-4 ${
                                        isDark
                                            ? "bg-darkBorder/30"
                                            : "bg-gray-100"
                                    }`}
                                />
                                <div
                                    className={`flex justify-between pt-4 border-t ${
                                        isDark
                                            ? "border-darkBorder"
                                            : "border-gray-100"
                                    }`}
                                >
                                    <div
                                        className={`h-10 rounded-xl w-24 ${
                                            isDark
                                                ? "bg-darkBorder/50"
                                                : "bg-gray-100"
                                        }`}
                                    />
                                    <div
                                        className={`h-10 rounded-xl w-20 ${
                                            isDark
                                                ? "bg-darkBorder/50"
                                                : "bg-gray-100"
                                        }`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredCampaigns.length === 0 ? (
                    /* Empty State */
                    <div
                        className={`text-center py-20 px-6 rounded-3xl border ${
                            isDark
                                ? "bg-darkCard/50 border-darkBorder"
                                : "bg-white/50 border-gray-100"
                        }`}
                    >
                        <div
                            className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                                isDark ? "bg-darkBorder" : "bg-gray-100"
                            }`}
                        >
                            <FaRocket
                                className={`w-10 h-10 ${
                                    isDark ? "text-gray-600" : "text-gray-400"
                                }`}
                            />
                        </div>
                        <h3
                            className={`text-2xl font-bold mb-3 ${
                                isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                            No campaigns found
                        </h3>
                        <p
                            className={`max-w-md mx-auto mb-6 ${
                                isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                        >
                            {searchQuery
                                ? `We couldn't find any campaigns matching "${searchQuery}". Try adjusting your search terms.`
                                : "There are no campaigns available at the moment. Check back soon!"}
                        </p>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brightPink to-coral text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-brightPink/30 transition-all duration-300 hover:scale-105"
                            >
                                Clear Search
                            </button>
                        )}
                    </div>
                ) : (
                    <div
                        className={`grid gap-6 lg:gap-8 ${
                            viewMode === "grid"
                                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                : "grid-cols-1 max-w-3xl mx-auto"
                        }`}
                    >
                        {filteredCampaigns.map((campaign, index) => (
                            <div
                                key={campaign._id}
                                className="group relative animate-fadeIn"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* Hover glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-brightPink via-coral to-neonGreen rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                <div className="relative">
                                    <CampaignCard campaign={campaign} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Bottom CTA */}
                {!loading && filteredCampaigns.length > 0 && (
                    <div className="text-center mt-16">
                        <p
                            className={`text-sm mb-4 ${
                                isDark ? "text-gray-500" : "text-gray-400"
                            }`}
                        >
                            Can&apos;t find what you&apos;re looking for?
                        </p>
                        <a
                            href="/add-campaign"
                            className="group inline-flex items-center gap-2 text-brightPink hover:text-coral font-semibold text-lg transition-colors duration-300"
                        >
                            <FaRocket className="w-4 h-4 group-hover:animate-bounce" />
                            Start Your Own Campaign
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                →
                            </span>
                        </a>
                    </div>
                )}
            </div>

            {/* Shimmer Animation */}
            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default AllCampaigns;
