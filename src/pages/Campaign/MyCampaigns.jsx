import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useTheme } from "../../provider/ThemeProvider";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineDocumentText, HiOutlineCurrencyDollar, HiOutlineCalendar, HiPlus } from "react-icons/hi";
import { VscLayersActive } from "react-icons/vsc";
import { FaRocket, FaLayerGroup } from "react-icons/fa";

const MyCampaigns = () => {
    const { user } = useContext(AuthContext);
    const { isDark } = useTheme();
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://innofund-server.vercel.app/campaigns?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://innofund-server.vercel.app/campaigns/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your campaign has been deleted.",
                                "success"
                            );
                            setCampaigns(
                                campaigns.filter(
                                    (campaign) => campaign._id !== id
                                )
                            );
                        }
                    });
            }
        });
    };

    // Get type badge styling
    const getTypeBadge = (type) => {
        const styles = {
            "personal issue": { bg: "bg-brightPink/10", text: "text-brightPink", icon: "❤️" },
            "startup": { bg: "bg-neonGreen/10", text: "text-neonGreen", icon: "🚀" },
            "business": { bg: "bg-violet/10", text: "text-violet", icon: "💼" },
            "creative ideas": { bg: "bg-softOrange/10", text: "text-softOrange", icon: "💡" },
        };
        return styles[type.toLowerCase()] || { bg: "bg-gray-100", text: "text-gray-600", icon: "📋" };
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Decorations */}
            <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-darkBg via-darkCard/30 to-darkBg" : "bg-gradient-to-b from-lightPurple/20 via-white to-lightPink/20"}`} />
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? "bg-violet/5" : "bg-violet/10"}`} />
            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? "bg-brightPink/5" : "bg-brightPink/10"}`} />

            {/* Floating Particles */}
            <div className="absolute top-32 left-20 w-3 h-3 bg-violet/40 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
            <div className="absolute top-60 right-32 w-2 h-2 bg-brightPink/50 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                    <div>
                        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                            My{" "}
                            <span className="bg-gradient-to-r from-violet via-brightPink to-coral bg-clip-text text-transparent">
                                Campaigns
                            </span>
                        </h1>
                        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            Manage and track all your crowdfunding campaigns in one place.
                        </p>
                    </div>

                    <Link
                        to="/add-campaign"
                        className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet to-brightPink text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-violet/30 transition-all duration-300 hover:scale-105"
                    >
                        <HiPlus className="w-5 h-5" />
                        New Campaign
                        <FaRocket className="w-4 h-4 group-hover:animate-bounce" />
                    </Link>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Total Campaigns", value: campaigns.length, icon: FaLayerGroup, color: "text-violet" },
                        { label: "Active", value: campaigns.filter(c => new Date(c.deadline) > new Date()).length, icon: VscLayersActive, color: "text-neonGreen" },
                        { label: "Ended", value: campaigns.filter(c => new Date(c.deadline) <= new Date()).length, icon: HiOutlineCalendar, color: "text-softOrange" },
                        { label: "Total Goal", value: `$${campaigns.reduce((acc, c) => acc + Number(c.minDonation || 0), 0).toLocaleString()}`, icon: HiOutlineCurrencyDollar, color: "text-brightPink" },
                    ].map((stat, index) => (
                        <div 
                            key={index}
                            className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                                isDark 
                                    ? "bg-darkCard/50 border-darkBorder hover:border-violet/30" 
                                    : "bg-white/80 border-gray-100 shadow-lg hover:shadow-xl"
                            }`}
                        >
                            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                            <p className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{stat.value}</p>
                            <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Table Section */}
                <div className="rounded-3xl backdrop-blur-sm overflow-hidden">
                    {/* Table Header */}
                    <div className={`px-6 py-4 border-b ${isDark ? "border-darkBorder" : "border-gray-100"}`}>
                        <div className="flex items-center gap-3">
                            <HiOutlineDocumentText className="w-5 h-5 text-violet" />
                            <h2 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                                All Campaigns
                            </h2>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                isDark ? "bg-violet/20 text-violet" : "bg-violet/10 text-violet"
                            }`}>
                                {campaigns.length} total
                            </span>
                        </div>
                    </div>

                    {loading ? (
                        /* Loading Skeleton */
                        <div className="p-6 space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl animate-pulse ${isDark ? "bg-darkBg/50" : "bg-gray-50"}`}>
                                    <div className={`w-8 h-8 rounded-lg ${isDark ? "bg-darkBorder" : "bg-gray-200"}`} />
                                    <div className="flex-1 space-y-2">
                                        <div className={`h-4 rounded w-1/3 ${isDark ? "bg-darkBorder" : "bg-gray-200"}`} />
                                        <div className={`h-3 rounded w-1/4 ${isDark ? "bg-darkBorder/50" : "bg-gray-100"}`} />
                                    </div>
                                    <div className={`h-8 w-20 rounded-lg ${isDark ? "bg-darkBorder" : "bg-gray-200"}`} />
                                </div>
                            ))}
                        </div>
                    ) : campaigns.length === 0 ? (
                        /* Empty State */
                        <div className="p-12 text-center">
                            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${isDark ? "bg-darkBorder" : "bg-gray-100"}`}>
                                <FaRocket className={`w-8 h-8 ${isDark ? "text-gray-600" : "text-gray-400"}`} />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                                No campaigns yet
                            </h3>
                            <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                Start your first campaign and bring your ideas to life!
                            </p>
                            <Link
                                to="/add-campaign"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet to-brightPink text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
                            >
                                <HiPlus className="w-5 h-5" />
                                Create Campaign
                            </Link>
                        </div>
                    ) : (
                        /* Table */
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className={`border-b ${isDark ? "border-darkBorder" : "border-gray-200"}`}>
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>#</th>
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Campaign</th>
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Type</th>
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Min. Donation</th>
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Deadline</th>
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Status</th>
                                        <th className={`px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-darkBorder">
                                    {campaigns.map((campaign, index) => {
                                        const typeBadge = getTypeBadge(campaign.type);
                                        const isExpired = new Date(campaign.deadline) <= new Date();
                                        
                                        return (
                                            <tr 
                                                key={campaign._id} 
                                                className={`group transition-all duration-300 ${
                                                    isDark 
                                                        ? "hover:bg-darkBg/50" 
                                                        : "hover:bg-gray-50/80"
                                                }`}
                                            >
                                                <td className={`px-6 py-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                                                        isDark ? "bg-darkBorder text-gray-300" : "bg-gray-100 text-gray-600"
                                                    }`}>
                                                        {index + 1}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 ${isDark ? "bg-darkBorder" : "bg-gray-100"}`}>
                                                            {campaign.image ? (
                                                                <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center text-lg">📋</div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className={`font-semibold line-clamp-1 group-hover:text-violet transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
                                                                {campaign.title}
                                                            </p>
                                                            <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                                                                ID: {campaign._id.slice(-6)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${typeBadge.bg} ${typeBadge.text}`}>
                                                        <span>{typeBadge.icon}</span>
                                                        {campaign.type}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <span className={`font-semibold ${isDark ? "text-neonGreen" : "text-neonGreen"}`}>
                                                        ${campaign.minDonation}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-2">
                                                        <HiOutlineCalendar className={`w-4 h-4 ${isExpired ? "text-red-400" : "text-softOrange"}`} />
                                                        <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                                            {campaign.deadline}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    {isExpired ? (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-red-500/10 text-red-500">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                            Ended
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neonGreen/10 text-neonGreen">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-neonGreen animate-pulse"></span>
                                                            Active
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Link
                                                            to={`/update-campaign/${campaign._id}`}
                                                            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                                                isDark 
                                                                    ? "bg-skyBlue/20 text-skyBlue hover:bg-skyBlue/30" 
                                                                    : "bg-skyBlue/20 text-blue-600 hover:bg-skyBlue/30"
                                                            }`}
                                                        >
                                                            <FiEdit3 className="w-4 h-4" />
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(campaign._id)}
                                                            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                                                isDark 
                                                                    ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
                                                                    : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                                                            }`}
                                                        >
                                                            <AiOutlineDelete className="w-4 h-4" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Bottom Info */}
                {campaigns.length > 0 && (
                    <div className={`mt-6 p-4 rounded-2xl border text-center ${
                        isDark ? "bg-darkCard/50 border-darkBorder" : "bg-white/80 border-gray-100"
                    }`}>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            💡 Tip: Keep your campaigns updated regularly to attract more donors!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCampaigns;
