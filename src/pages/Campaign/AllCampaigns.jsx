import { useEffect, useState } from "react";
import CampaignCard from "../../components/CampaignCard";
import { useTheme } from "../../provider/ThemeProvider";
import { HiSparkles } from "react-icons/hi";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");
    const [loading, setLoading] = useState(true);
    const { isDark } = useTheme();

    useEffect(() => {
        setLoading(true);
        fetch(`https://innofund-server.vercel.app/campaigns?sort=${sortOrder}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                        isDark
                            ? "bg-neonGreen/10 text-neonGreen border border-neonGreen/20"
                            : "bg-neonGreen/10 text-neonGreen border border-neonGreen/20"
                    }`}
                >
                    <HiSparkles className="w-4 h-4" />
                    Browse All
                </span>
                <h1
                    className={`text-4xl sm:text-5xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                    All{" "}
                    <span className="bg-gradient-to-r from-brightPink to-coral bg-clip-text text-transparent">
                        Campaigns
                    </span>
                </h1>
                <p
                    className={`max-w-2xl mx-auto text-lg ${
                        isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    Discover and support campaigns that inspire you. Every
                    contribution makes a difference.
                </p>
            </div>

            {/* Sort Controls */}
            <div
                className={`flex flex-col sm:flex-row items-center justify-end gap-4 p-6 rounded-2xl mb-8 border ${
                    isDark
                        ? "bg-darkCard border-darkBorder"
                        : "bg-white border-gray-100"
                }`}
            >
                <div className="flex items-center gap-3">
                    <label
                        className={`text-sm font-medium ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        Sort by donation:
                    </label>
                    <select
                        value={sortOrder}
                        onChange={handleSortChange}
                        className={`px-4 py-2.5 rounded-xl font-medium text-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brightPink/20 ${
                            isDark
                                ? "bg-darkBg border-darkBorder text-white"
                                : "bg-gray-50 border-gray-200 text-gray-700"
                        }`}
                    >
                        <option value="desc">Highest to Lowest</option>
                        <option value="asc">Lowest to Highest</option>
                    </select>
                </div>
            </div>

            {/* Campaign Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={`rounded-2xl p-4 animate-pulse ${
                                isDark ? "bg-darkCard" : "bg-gray-100"
                            }`}
                        >
                            <div
                                className={`h-48 rounded-xl mb-4 ${
                                    isDark ? "bg-darkBorder" : "bg-gray-200"
                                }`}
                            />
                            <div
                                className={`h-6 rounded-lg mb-3 w-3/4 ${
                                    isDark ? "bg-darkBorder" : "bg-gray-200"
                                }`}
                            />
                            <div
                                className={`h-4 rounded-lg mb-2 ${
                                    isDark ? "bg-darkBorder/50" : "bg-gray-100"
                                }`}
                            />
                            <div
                                className={`h-4 rounded-lg w-2/3 ${
                                    isDark ? "bg-darkBorder/50" : "bg-gray-100"
                                }`}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {campaigns.map((campaign) => (
                        <CampaignCard key={campaign._id} campaign={campaign} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllCampaigns;
