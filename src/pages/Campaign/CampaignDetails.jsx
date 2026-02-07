import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useTheme } from "../../provider/ThemeProvider";
import { FaCalendarAlt, FaDollarSign, FaTag, FaHeart, FaArrowLeft } from "react-icons/fa";

const CampaignDetails = () => {
    const { isDark } = useTheme();
    const campaign = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(user.displayName, user.email);
    const navigate = useNavigate();
    const { title, type, description, minDonation, deadline, image } =
        campaign || {};

    const handleDonate = () => {
        if (!user) {
            toast.error("Please sign in to donate");
            navigate("/auth/signin");
            return;
        }

        const donation = {
            campaignId: campaign._id,
            title,
            image,
            type,
            description,
            minDonation,
            deadline,
            donorEmail: user?.email,
            donorName: user?.displayName,
        };

        fetch("https://innofund-server.vercel.app/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donation),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Donation Successful! 🎉");
                    navigate("/my-donations");
                }
            })
            .catch((error) => {
                console.error("Error donating:", error);
                toast.error("Failed to donate. Please try again later.");
            });
    };

    return (
        <div className={`min-h-screen bg-gradient-to-b transition-colors duration-300 ${isDark
            ? "from-darkBg via-darkCard to-darkBg"
            : "from-white via-lightPurple/10 to-white"
            }`}>
            {/* Back button */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <button
                    onClick={() => navigate(-1)}
                    className={`group inline-flex items-center gap-2 transition-colors duration-300 mb-4 ${isDark
                        ? "text-gray-400 hover:text-brightPink"
                        : "text-gray-600 hover:text-brightPink"
                        }`}
                >
                    <FaArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="text-sm font-medium">Back</span>
                </button>
            </div>

            {/* Hero Section with Image */}
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    {/* Image */}
                    <div className="relative h-[280px] sm:h-[340px] lg:h-[420px]">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Category badge */}
                        <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-sm rounded-full shadow-md ${isDark
                            ? "bg-darkCard/90 border border-darkBorder"
                            : "bg-white/90"
                            }`}>
                            <FaTag className="w-3 h-3 text-brightPink" />
                            <span className={`text-xs font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{type}</span>
                        </div>

                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                            <div className="max-w-3xl">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                                    {title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm">
                                    <div className="flex items-center gap-1.5">
                                        <FaCalendarAlt className="w-3.5 h-3.5" />
                                        <span>Deadline: {new Date(deadline).toLocaleDateString()}</span>
                                    </div>
                                    <div className="hidden sm:block w-px h-3 bg-white/30" />
                                    <div className="flex items-center gap-1.5">
                                        <FaDollarSign className="w-3.5 h-3.5" />
                                        <span>Min. ${minDonation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content - Description */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* About Section */}
                        <div>
                            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>About This Campaign</h2>
                            <p className={`text-base leading-relaxed whitespace-pre-line ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                {description}
                            </p>
                        </div>

                        {/* Campaign Stats - Compact */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className={`rounded-xl p-4 border transition-colors ${isDark
                                ? "bg-gradient-to-br from-brightPink/10 to-softOrange/10 border-brightPink/20"
                                : "bg-gradient-to-br from-brightPink/5 to-softOrange/5 border-brightPink/10"
                                }`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brightPink to-softOrange flex items-center justify-center">
                                        <FaDollarSign className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <p className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>${minDonation}</p>
                                <p className={`text-xs mt-0.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Min. Donation</p>
                            </div>

                            <div className={`rounded-xl p-4 border transition-colors ${isDark
                                ? "bg-gradient-to-br from-neonGreen/10 to-skyBlue/10 border-neonGreen/20"
                                : "bg-gradient-to-br from-neonGreen/5 to-skyBlue/5 border-neonGreen/10"
                                }`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neonGreen to-green-600 flex items-center justify-center">
                                        <FaCalendarAlt className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <p className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{new Date(deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                <p className={`text-xs mt-0.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Deadline</p>
                            </div>

                            <div className={`rounded-xl p-4 border transition-colors ${isDark
                                ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-400/20"
                                : "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100"
                                }`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                        <FaTag className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <p className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{type}</p>
                                <p className={`text-xs mt-0.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Category</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Donation CTA - Compact */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6">
                            {/* Donation Card - More compact */}
                            <div className={`relative rounded-2xl border shadow-lg overflow-hidden transition-colors ${isDark
                                ? "bg-darkCard border-darkBorder"
                                : "bg-white border-gray-100"
                                }`}>
                                {/* Decorative gradient */}
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brightPink via-softOrange to-neonGreen" />

                                <div className="p-6">
                                    <div className="text-center mb-5">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brightPink to-softOrange rounded-xl mb-3 shadow-md shadow-brightPink/20">
                                            <FaHeart className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>Support This Campaign</h3>
                                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Make a difference today</p>
                                    </div>

                                    {/* Donation amount display */}
                                    <div className={`rounded-xl p-4 mb-5 ${isDark
                                        ? "bg-gradient-to-br from-darkBg to-darkBorder"
                                        : "bg-gradient-to-br from-gray-50 to-gray-100"
                                        }`}>
                                        <p className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Minimum Amount</p>
                                        <p className="text-3xl font-bold bg-gradient-to-r from-brightPink to-softOrange bg-clip-text text-transparent">
                                            ${minDonation}
                                        </p>
                                    </div>

                                    {/* Donate Button */}
                                    <button
                                        onClick={handleDonate}
                                        className="group relative w-full py-3 bg-gradient-to-r from-brightPink to-softOrange text-white font-bold text-base rounded-xl shadow-md shadow-brightPink/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brightPink/30 hover:scale-[1.02]"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-softOrange to-brightPink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center justify-center gap-2">
                                            <FaHeart className="w-4 h-4" />
                                            Donate Now
                                        </span>
                                    </button>

                                    <p className={`text-xs text-center mt-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                                        🔒 Secure • 100% to campaign
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;
