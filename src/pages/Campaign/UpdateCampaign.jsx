import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useTheme } from "../../provider/ThemeProvider";
import {
    HiOutlinePhotograph, HiOutlineTag, HiOutlineDocument, HiOutlineCurrencyDollar,
    HiOutlineCalendar, HiOutlineMail, HiOutlineUser, HiOutlineArrowRight,
} from "react-icons/hi";
import { MdOutlineSubtitles } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";

const UpdateCampaign = () => {
    const { isDark } = useTheme();
    const campaign = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { _id, image, title, type, description, minDonation, deadline } =
        campaign || {};

    const handleUpdateCampaign = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const form = event.target;

        const updatedCampaign = {
            image: form.image.value,
            title: form.title.value,
            type: form.type.value,
            description: form.description.value,
            minDonation: form.minDonation.value,
            deadline: form.deadline.value,
            email: user?.email || "anonymous@example.com",
            username: user?.displayName || "Anonymous",
        };
        // console.log(campaign);

        try {
            const res = await fetch(`https://innofund-server.vercel.app/campaigns/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedCampaign),
            });

            const data = await res.json();

            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: "Campaign updated successfully!",
                    icon: "success",
                    confirmButtonText: "Close",
                    confirmButtonColor: isDark ? "#0ea5e9" : "#0ea5e9",
                });
                navigate("/my-campaigns");
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Failed to update campaign. Please try again.",
                icon: "error",
                confirmButtonText: "Close",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className={`absolute inset-0 transition-colors duration-300 ${isDark
                ? "bg-gradient-to-br from-darkBg via-darkCard to-darkBg"
                : "bg-gradient-to-br from-lightPurple via-white to-lightGreen"
                }`} />

            {/* Floating Decorative Elements */}
            <div className={`absolute top-20 right-10 w-72 h-72 bg-gradient-to-br rounded-full blur-3xl animate-pulse ${isDark
                ? "from-brightPink/10 to-softOrange/10"
                : "from-brightPink/20 to-softOrange/20"
                }`} />
            <div className={`absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br rounded-full blur-3xl animate-pulse ${isDark
                ? "from-neonGreen/10 to-skyBlue/10"
                : "from-neonGreen/20 to-skyBlue/20"
                }`} style={{ animationDelay: "1s" }} />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border shadow-lg mb-6"
                        style={{
                            background: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(255, 255, 255, 0.6)",
                            borderColor: isDark ? "rgba(71, 85, 105, 0.5)" : "rgba(255, 255, 255, 0.5)"
                        }}>
                        <IoRocketSharp className="w-4 h-4 text-neonGreen animate-bounce" />
                        <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            Update Your Campaign
                        </span>
                    </div>

                    <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                        <span className="bg-gradient-to-r from-brightPink via-softOrange to-neonGreen bg-clip-text text-transparent">
                            Edit Campaign Details
                        </span>
                    </h1>
                    <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        Update your campaign information to keep your supporters informed
                    </p>
                </div>

                {/* Main Form Container */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative group">
                        {/* Card Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brightPink via-softOrange to-neonGreen rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

                        <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl p-8 sm:p-10 transition-colors ${isDark
                            ? "bg-darkCard/70 border-darkBorder"
                            : "bg-white/70 border-white/50"
                            }`}>
                            <form onSubmit={handleUpdateCampaign} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Image URL */}
                                    <div className="space-y-2">
                                        <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            <HiOutlinePhotograph className="w-4 h-4 text-brightPink" />
                                            Campaign Image URL
                                        </label>
                                        <input
                                            type="url"
                                            name="image"
                                            defaultValue={image}
                                            placeholder="https://example.com/image.jpg"
                                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-brightPink focus:shadow-lg focus:shadow-brightPink/10 ${isDark
                                                ? "bg-darkBg/50 border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                                : "bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
                                                }`}
                                            required
                                        />
                                    </div>

                                    {/* Campaign Title */}
                                    <div className="space-y-2">
                                        <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            <MdOutlineSubtitles className="w-4 h-4 text-neonGreen" />
                                            Campaign Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            defaultValue={title}
                                            placeholder="Enter campaign title"
                                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-neonGreen focus:shadow-lg focus:shadow-neonGreen/10 ${isDark
                                                ? "bg-darkBg/50 border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                                : "bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
                                                }`}
                                            required
                                        />
                                    </div>

                                    {/* Campaign Type */}
                                    <div className="space-y-2">
                                        <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            <HiOutlineTag className="w-4 h-4 text-skyBlue" />
                                            Campaign Type
                                        </label>
                                        <select
                                            name="type"
                                            defaultValue={type}
                                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-skyBlue focus:shadow-lg focus:shadow-skyBlue/10 ${isDark
                                                ? "bg-darkBg/50 border-darkBorder text-white focus:bg-darkBg"
                                                : "bg-white/50 border-gray-200 text-gray-800 focus:bg-white"
                                                }`}
                                            required
                                        >
                                            <option value="personal issue">Personal Issue</option>
                                            <option value="startup">Startup</option>
                                            <option value="business">Business</option>
                                            <option value="creative ideas">Innovative Ideas</option>
                                        </select>
                                    </div>

                                    {/* Minimum Donation Amount */}
                                    <div className="space-y-2">
                                        <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            <HiOutlineCurrencyDollar className="w-4 h-4 text-softOrange" />
                                            Minimum Donation
                                        </label>
                                        <input
                                            type="number"
                                            name="minDonation"
                                            defaultValue={minDonation}
                                            placeholder="50"
                                            min="1"
                                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-softOrange focus:shadow-lg focus:shadow-softOrange/10 ${isDark
                                                ? "bg-darkBg/50 border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                                : "bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
                                                }`}
                                            required
                                        />
                                    </div>

                                    {/* Deadline */}
                                    <div className="space-y-2 md:col-span-2">
                                        <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            <HiOutlineCalendar className="w-4 h-4 text-purple-500" />
                                            Deadline
                                        </label>
                                        <input
                                            type="date"
                                            name="deadline"
                                            defaultValue={deadline}
                                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/10 ${isDark
                                                ? "bg-darkBg/50 border-darkBorder text-white focus:bg-darkBg"
                                                : "bg-white/50 border-gray-200 text-gray-800 focus:bg-white"
                                                }`}
                                            required
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2 md:col-span-2">
                                        <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            <HiOutlineDocument className="w-4 h-4 text-neonGreen" />
                                            Campaign Description
                                        </label>
                                        <textarea
                                            name="description"
                                            defaultValue={description}
                                            placeholder="Describe your campaign in detail..."
                                            rows="6"
                                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-neonGreen focus:shadow-lg focus:shadow-neonGreen/10 resize-none ${isDark
                                                ? "bg-darkBg/50 border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                                : "bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
                                                }`}
                                            required
                                        ></textarea>
                                    </div>

                                    {/* User Email (Read-only) */}
                                    <div className="space-y-2">
                                        <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            <HiOutlineMail className="w-4 h-4 text-gray-400" />
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={user?.email || ""}
                                            className={`w-full px-4 py-3 border-2 rounded-xl cursor-not-allowed ${isDark
                                                ? "bg-darkBg/30 border-darkBorder text-gray-500"
                                                : "bg-gray-50 border-gray-200 text-gray-500"
                                                }`}
                                            readOnly
                                        />
                                    </div>

                                    {/* User Name (Read-only) */}
                                    <div className="space-y-2">
                                        <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                            <HiOutlineUser className="w-4 h-4 text-gray-400" />
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={user?.displayName || ""}
                                            className={`w-full px-4 py-3 border-2 rounded-xl cursor-not-allowed ${isDark
                                                ? "bg-darkBg/30 border-darkBorder text-gray-500"
                                                : "bg-gray-50 border-gray-200 text-gray-500"
                                                }`}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-full py-4 bg-gradient-to-r from-brightPink via-softOrange to-neonGreen text-white font-bold text-lg rounded-xl shadow-lg shadow-brightPink/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brightPink/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-neonGreen via-skyBlue to-brightPink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Updating Campaign...
                                            </>
                                        ) : (
                                            <>
                                                Update Campaign
                                                <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </span>
                                </button>

                                {/* Cancel Button */}
                                <button
                                    type="button"
                                    onClick={() => navigate("/my-campaigns")}
                                    className={`w-full py-3 border-2 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] ${isDark
                                        ? "bg-darkBg/50 border-darkBorder text-gray-300 hover:border-gray-500"
                                        : "bg-white/50 border-gray-300 text-gray-700 hover:border-gray-400"
                                        }`}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className={`mt-8 p-6 rounded-2xl border ${isDark
                        ? "bg-darkCard/40 border-darkBorder"
                        : "bg-white/40 border-gray-200"
                        }`}>
                        <div className="flex items-start gap-3">
                            <h3 className={`font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                                Tips for updating your campaign
                            </h3>
                            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                Make sure to provide clear and updated information. High-quality images and detailed descriptions help attract more supporters.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCampaign;
