import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useTheme } from "../../provider/ThemeProvider";
import { HiOutlineHeart, HiOutlineCurrencyDollar, HiOutlineCalendar, HiOutlineMail, HiOutlineUser, HiExternalLink } from "react-icons/hi";
import { FaHandHoldingHeart, FaGift, FaChartLine } from "react-icons/fa";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const { isDark } = useTheme();
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://innofund-server.vercel.app/donations?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setDonations(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user.email]);

    // Calculate total donated
    const totalDonated = donations.reduce((acc, d) => acc + Number(d.minDonation || 0), 0);

    // Get type badge styling
    const getTypeBadge = (type) => {
        const styles = {
            "personal issue": { bg: "bg-brightPink/10", text: "text-brightPink", icon: "❤️" },
            "startup": { bg: "bg-neonGreen/10", text: "text-neonGreen", icon: "🚀" },
            "business": { bg: "bg-violet/10", text: "text-violet", icon: "💼" },
            "creative ideas": { bg: "bg-softOrange/10", text: "text-softOrange", icon: "💡" },
        };
        return styles[type?.toLowerCase()] || { bg: "bg-gray-100", text: "text-gray-600", icon: "📋" };
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Decorations */}
            <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-darkBg via-darkCard/30 to-darkBg" : "bg-gradient-to-b from-lightGreen/20 via-white to-lightPink/20"}`} />
            <div className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? "bg-neonGreen/5" : "bg-neonGreen/10"}`} />
            <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? "bg-coral/5" : "bg-coral/10"}`} />

            {/* Floating Particles */}
            <div className="absolute top-32 right-20 w-3 h-3 bg-neonGreen/40 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
            <div className="absolute top-60 left-32 w-2 h-2 bg-coral/50 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                    <div>
                        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                            My{" "}
                            <span className="bg-gradient-to-r from-neonGreen via-teal to-coral bg-clip-text text-transparent">
                                Donations
                            </span>
                        </h1>
                        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            Track your generous contributions and the impact you&apos;re making.
                        </p>
                    </div>

                    <Link
                        to="/all-campaigns"
                        className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-neonGreen to-teal text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-neonGreen/30 transition-all duration-300 hover:scale-105"
                    >
                        <FaHandHoldingHeart className="w-5 h-5" />
                        Donate More
                        <HiOutlineHeart className="w-4 h-4 group-hover:animate-pulse" />
                    </Link>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Total Donations", value: donations.length, icon: FaGift, color: "text-coral" },
                        { label: "Total Donated", value: `$${totalDonated.toLocaleString()}`, icon: HiOutlineCurrencyDollar, color: "text-neonGreen" },
                        { label: "Campaigns Supported", value: new Set(donations.map(d => d.campaignId)).size || donations.length, icon: FaHandHoldingHeart, color: "text-brightPink" },
                        { label: "Impact Score", value: Math.min(100, donations.length * 10) + "%", icon: FaChartLine, color: "text-violet" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${isDark
                                ? "bg-darkCard/50 border-darkBorder hover:border-neonGreen/30"
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
                <div className="rounded-3xl border backdrop-blur-sm overflow-hidden">
                    {/* Table Header */}
                    <div className={`px-6 py-4 border-b ${isDark ? "border-darkBorder" : "border-gray-100"}`}>
                        <div className="flex items-center gap-3">
                            <FaHandHoldingHeart className="w-5 h-5 text-neonGreen" />
                            <h2 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                                Donation Records
                            </h2>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${isDark ? "bg-neonGreen/20 text-neonGreen" : "bg-neonGreen/10 text-neonGreen"
                                }`}>
                                {donations.length} total
                            </span>
                        </div>
                    </div>

                    {loading ? (
                        /* Loading Skeleton */
                        <div className="p-6 space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl animate-pulse ${isDark ? "bg-darkBg/50" : "bg-gray-50"}`}>
                                    <div className={`w-12 h-12 rounded-xl ${isDark ? "bg-darkBorder" : "bg-gray-200"}`} />
                                    <div className="flex-1 space-y-2">
                                        <div className={`h-4 rounded w-1/3 ${isDark ? "bg-darkBorder" : "bg-gray-200"}`} />
                                        <div className={`h-3 rounded w-1/4 ${isDark ? "bg-darkBorder/50" : "bg-gray-100"}`} />
                                    </div>
                                    <div className={`h-8 w-20 rounded-lg ${isDark ? "bg-darkBorder" : "bg-gray-200"}`} />
                                </div>
                            ))}
                        </div>
                    ) : donations.length === 0 ? (
                        /* Empty State */
                        <div className="p-12 text-center">
                            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${isDark ? "bg-darkBorder" : "bg-gray-100"}`}>
                                <FaHandHoldingHeart className={`w-8 h-8 ${isDark ? "text-gray-600" : "text-gray-400"}`} />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                                No donations yet
                            </h3>
                            <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                Start making a difference by supporting campaigns you believe in!
                            </p>
                            <Link
                                to="/all-campaigns"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neonGreen to-teal text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
                            >
                                <FaHandHoldingHeart className="w-5 h-5" />
                                Browse Campaigns
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
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Donor Info</th>
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Amount</th>
                                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Deadline</th>
                                        <th className={`px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-darkBorder">
                                    {donations.map((donation, index) => {
                                        const typeBadge = getTypeBadge(donation.type);

                                        return (
                                            <tr
                                                key={donation._id}
                                                className={`group transition-all duration-300 ${isDark
                                                    ? "hover:bg-darkBg/50"
                                                    : "hover:bg-gray-50/80"
                                                    }`}
                                            >
                                                <td className={`px-6 py-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${isDark ? "bg-darkBorder text-gray-300" : "bg-gray-100 text-gray-600"
                                                        }`}>
                                                        {index + 1}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-offset-2 ${isDark ? "ring-neonGreen/30 ring-offset-darkCard" : "ring-neonGreen/20 ring-offset-white"
                                                            }`}>
                                                            {donation.image ? (
                                                                <img src={donation.image} alt={donation.title} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className={`w-full h-full flex items-center justify-center text-lg ${isDark ? "bg-darkBorder" : "bg-gray-100"}`}>💝</div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className={`font-semibold line-clamp-1 group-hover:text-neonGreen transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
                                                                {donation.title}
                                                            </p>
                                                            <span className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${typeBadge.bg} ${typeBadge.text}`}>
                                                                <span>{typeBadge.icon}</span>
                                                                {donation.type}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <HiOutlineUser className={`w-3.5 h-3.5 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
                                                            <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                                                                {donation.donorName}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <HiOutlineMail className={`w-3.5 h-3.5 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
                                                            <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                                                {donation.donorEmail}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`text-xl font-bold ${isDark ? "text-neonGreen" : "text-neonGreen"}`}>
                                                            ${donation.minDonation}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-2">
                                                        <HiOutlineCalendar className={`w-4 h-4 text-softOrange`} />
                                                        <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                                            {donation.deadline}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex justify-end">
                                                        <Link
                                                            to={`/campaigns/${donation.campaignId}`}
                                                            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${isDark
                                                                ? "bg-neonGreen/20 text-neonGreen hover:bg-neonGreen/30"
                                                                : "bg-neonGreen/10 text-neonGreen hover:bg-neonGreen/20"
                                                                }`}
                                                        >
                                                            <HiExternalLink className="w-4 h-4" />
                                                            View
                                                        </Link>
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

                {/* Thank You Message */}
                {donations.length > 0 && (
                    <div className={`mt-8 p-6 rounded-3xl border text-center ${isDark ? "bg-gradient-to-r from-darkCard to-darkBg border-darkBorder" : "bg-gradient-to-r from-lightGreen/30 to-lightPink/30 border-gray-100"
                        }`}>
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <span className="text-3xl">💖</span>
                            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                                Thank You for Your Generosity!
                            </h3>
                            <span className="text-3xl">💖</span>
                        </div>
                        <p className={`max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            Your donations have helped fund dreams and change lives. Every contribution, no matter the size, makes a real difference.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyDonations;
