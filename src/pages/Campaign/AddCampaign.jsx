import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useTheme } from "../../provider/ThemeProvider";
import {
    HiPhotograph,
    HiPencilAlt,
    HiCurrencyDollar,
    HiCalendar,
    HiUser,
    HiMail,
    HiDocumentText,
    HiTag,
} from "react-icons/hi";
import { FaRocket, FaArrowRight, FaLightbulb } from "react-icons/fa";

const AddCampaign = () => {
    const { user } = useContext(AuthContext);
    const { isDark } = useTheme();

    const handleAddCampaign = (event) => {
        event.preventDefault();
        const form = event.target;

        const campaign = {
            image: form.image.value,
            title: form.title.value,
            type: form.type.value,
            description: form.description.value,
            minDonation: form.minDonation.value,
            deadline: form.deadline.value,
            email: user?.email || "anonymous@example.com",
            username: user?.displayName || "Anonymous",
        };

        fetch("https://innofund-server.vercel.app/campaigns", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(campaign),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Campaign added successfully!",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                    form.reset();
                }
            });
    };

    const campaignTypes = [
        { value: "personal issue", label: "Personal Issue", icon: "❤️" },
        { value: "startup", label: "Startup", icon: "🚀" },
        { value: "business", label: "Business", icon: "💼" },
        { value: "creative ideas", label: "Innovative Ideas", icon: "💡" },
    ];

    const tips = [
        "Use high-quality images to attract more donors",
        "Write a compelling story that connects emotionally",
        "Set a realistic funding goal",
        "Share your campaign on social media",
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Decorations */}
            <div
                className={`absolute inset-0 ${
                    isDark
                        ? "bg-gradient-to-b from-darkBg via-darkCard/30 to-darkBg"
                        : "bg-gradient-to-b from-lightGreen/20 via-white to-lightPurple/20"
                }`}
            />
            <div
                className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl ${
                    isDark ? "bg-neonGreen/5" : "bg-neonGreen/10"
                }`}
            />
            <div
                className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${
                    isDark ? "bg-brightPink/5" : "bg-brightPink/10"
                }`}
            />
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${
                    isDark ? "bg-violet/5" : "bg-violet/5"
                }`}
            />

            {/* Floating Particles */}
            <div
                className="absolute top-32 right-20 w-3 h-3 bg-neonGreen/40 rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}
            />
            <div
                className="absolute top-60 left-32 w-2 h-2 bg-brightPink/50 rounded-full animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            <div
                className="absolute bottom-40 right-1/4 w-4 h-4 bg-coral/30 rounded-full animate-bounce"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
            />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    {/* Title */}
                    <h1
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Create Your{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-neonGreen via-teal to-brightPink bg-clip-text text-transparent">
                                Campaign
                            </span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 12"
                                fill="none"
                            >
                                <path
                                    d="M2 10C50 2 150 2 198 10"
                                    stroke="url(#add-underline)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient
                                        id="add-underline"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%"
                                    >
                                        <stop offset="0%" stopColor="#84CC16" />
                                        <stop
                                            offset="50%"
                                            stopColor="#14B8A6"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#DB2777"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>

                    <p
                        className={`max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        Transform your ideas into reality. Share your vision and
                        connect with supporters who believe in your mission.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Tips Sidebar */}
                    <div className="lg:col-span-1 order-2 lg:order-1">
                        <div
                            className={`sticky top-24 p-6 rounded-3xl border backdrop-blur-sm ${
                                isDark
                                    ? "bg-darkCard/80 border-darkBorder"
                                    : "bg-white/90 border-gray-100 shadow-xl"
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FaLightbulb className="w-5 h-5 text-softOrange" />
                                <h3
                                    className={`text-lg font-bold ${
                                        isDark ? "text-white" : "text-gray-900"
                                    }`}
                                >
                                    Pro Tips
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {tips.map((tip, index) => (
                                    <div
                                        key={index}
                                        className={`flex gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                                            isDark
                                                ? "bg-darkBg/50 hover:bg-darkBg"
                                                : "bg-gray-50 hover:bg-gray-100"
                                        }`}
                                    >
                                        <span
                                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                                isDark
                                                    ? "bg-neonGreen/20 text-neonGreen"
                                                    : "bg-neonGreen/20 text-neonGreen"
                                            }`}
                                        >
                                            {index + 1}
                                        </span>
                                        <p
                                            className={`text-sm ${
                                                isDark
                                                    ? "text-gray-400"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {tip}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-2 order-1 lg:order-2">
                        <div
                            className={`relative p-8 lg:p-10 rounded-3xl border backdrop-blur-sm ${
                                isDark
                                    ? "bg-darkCard/80 border-darkBorder"
                                    : "bg-white/90 border-gray-100 shadow-2xl"
                            }`}
                        >
                            {/* Decorative gradient */}
                            <div className="absolute top-0 right-0 w-1/2 h-32 bg-gradient-to-l from-neonGreen/5 to-transparent rounded-tr-3xl" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-8">
                                    <FaRocket className="w-5 h-5 text-neonGreen" />
                                    <h2
                                        className={`text-2xl font-bold ${
                                            isDark
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        Campaign{" "}
                                        <span className="bg-gradient-to-r from-neonGreen to-teal bg-clip-text text-transparent">
                                            Details
                                        </span>
                                    </h2>
                                </div>

                                <form
                                    onSubmit={handleAddCampaign}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Image URL */}
                                        <div className="space-y-2">
                                            <label
                                                className={`flex items-center gap-2 text-sm font-medium ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <HiPhotograph className="w-4 h-4 text-brightPink" />
                                                Image URL
                                            </label>
                                            <input
                                                type="text"
                                                name="image"
                                                placeholder="https://example.com/image.jpg"
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonGreen/20 ${
                                                    isDark
                                                        ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-neonGreen/50"
                                                        : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-neonGreen/50 focus:bg-white"
                                                }`}
                                                required
                                            />
                                        </div>

                                        {/* Campaign Title */}
                                        <div className="space-y-2">
                                            <label
                                                className={`flex items-center gap-2 text-sm font-medium ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <HiPencilAlt className="w-4 h-4 text-violet" />
                                                Campaign Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                placeholder="Enter a compelling title"
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonGreen/20 ${
                                                    isDark
                                                        ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-neonGreen/50"
                                                        : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-neonGreen/50 focus:bg-white"
                                                }`}
                                                required
                                            />
                                        </div>

                                        {/* Campaign Type */}
                                        <div className="space-y-2">
                                            <label
                                                className={`flex items-center gap-2 text-sm font-medium ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <HiTag className="w-4 h-4 text-coral" />
                                                Campaign Type
                                            </label>
                                            <select
                                                name="type"
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonGreen/20 cursor-pointer ${
                                                    isDark
                                                        ? "bg-darkBg/80 border-darkBorder text-white focus:border-neonGreen/50"
                                                        : "bg-gray-50/80 border-gray-200 text-gray-700 focus:border-neonGreen/50 focus:bg-white"
                                                }`}
                                                required
                                            >
                                                {campaignTypes.map((type) => (
                                                    <option
                                                        key={type.value}
                                                        value={type.value}
                                                    >
                                                        {type.icon} {type.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Minimum Donation */}
                                        <div className="space-y-2">
                                            <label
                                                className={`flex items-center gap-2 text-sm font-medium ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <HiCurrencyDollar className="w-4 h-4 text-neonGreen" />
                                                Minimum Donation ($)
                                            </label>
                                            <input
                                                type="number"
                                                name="minDonation"
                                                placeholder="Enter minimum amount"
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonGreen/20 ${
                                                    isDark
                                                        ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-neonGreen/50"
                                                        : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-neonGreen/50 focus:bg-white"
                                                }`}
                                                required
                                            />
                                        </div>

                                        {/* Deadline */}
                                        <div className="space-y-2">
                                            <label
                                                className={`flex items-center gap-2 text-sm font-medium ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <HiCalendar className="w-4 h-4 text-softOrange" />
                                                Deadline
                                            </label>
                                            <input
                                                type="date"
                                                name="deadline"
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonGreen/20 ${
                                                    isDark
                                                        ? "bg-darkBg/80 border-darkBorder text-white focus:border-neonGreen/50"
                                                        : "bg-gray-50/80 border-gray-200 text-gray-700 focus:border-neonGreen/50 focus:bg-white"
                                                }`}
                                                required
                                            />
                                        </div>

                                        {/* User Email */}
                                        <div className="space-y-2">
                                            <label
                                                className={`flex items-center gap-2 text-sm font-medium ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <HiMail className="w-4 h-4 text-brightPink" />
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={user?.email || ""}
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 cursor-not-allowed ${
                                                    isDark
                                                        ? "bg-darkBorder/50 border-darkBorder text-gray-400"
                                                        : "bg-gray-100 border-gray-200 text-gray-500"
                                                }`}
                                                readOnly
                                            />
                                        </div>

                                        {/* User Name */}
                                        <div className="space-y-2">
                                            <label
                                                className={`flex items-center gap-2 text-sm font-medium ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <HiUser className="w-4 h-4 text-violet" />
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="username"
                                                value={user?.displayName || ""}
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 cursor-not-allowed ${
                                                    isDark
                                                        ? "bg-darkBorder/50 border-darkBorder text-gray-400"
                                                        : "bg-gray-100 border-gray-200 text-gray-500"
                                                }`}
                                                readOnly
                                            />
                                        </div>

                                        {/* Description - Full Width */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label
                                                className={`flex items-center gap-2 text-sm font-medium ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <HiDocumentText className="w-4 h-4 text-teal" />
                                                Description
                                            </label>
                                            <textarea
                                                name="description"
                                                rows={5}
                                                placeholder="Tell your story... Why is this campaign important? What will the funds be used for?"
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonGreen/20 resize-none ${
                                                    isDark
                                                        ? "bg-darkBg/80 border-darkBorder text-white placeholder-gray-500 focus:border-neonGreen/50"
                                                        : "bg-gray-50/80 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-neonGreen/50 focus:bg-white"
                                                }`}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                                        <p
                                            className={`text-sm ${
                                                isDark
                                                    ? "text-gray-500"
                                                    : "text-gray-400"
                                            }`}
                                        >
                                            🔒 Your campaign will be reviewed
                                            before publishing
                                        </p>
                                        <button
                                            type="submit"
                                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neonGreen to-teal text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-neonGreen/30 transition-all duration-300 hover:scale-105"
                                        >
                                            <FaRocket className="w-4 h-4 group-hover:animate-bounce" />
                                            Launch Campaign
                                            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCampaign;
