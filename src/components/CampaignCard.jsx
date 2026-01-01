import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useTheme } from "../provider/ThemeProvider";

const CampaignCard = ({ campaign }) => {
    const { isDark } = useTheme();

    const truncateDescription = (description) => {
        const words = description.split(" ");
        return words.length > 12
            ? words.slice(0, 12).join(" ") + "..."
            : description;
    };

    // Calculate days remaining
    const getDaysRemaining = () => {
        const deadline = new Date(campaign.deadline);
        const today = new Date();
        const diffTime = deadline - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    };

    const daysLeft = getDaysRemaining();
    const isUrgent = daysLeft <= 7 && daysLeft > 0;

    return (
        <div
            className={`group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                isDark ? "bg-gradient-to-b from-darkCard to-darkBg" : "bg-white"
            }`}
        >
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-brightPink/50 via-transparent to-neonGreen/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card inner container */}
            <div
                className={`relative h-full rounded-xl overflow-hidden border ${
                    isDark
                        ? "border-darkBorder group-hover:border-transparent"
                        : "border-gray-100 group-hover:border-transparent shadow-lg group-hover:shadow-2xl group-hover:shadow-brightPink/10"
                }`}
            >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                    {/* Image with overlay */}
                    <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-t ${
                            isDark
                                ? "from-darkCard/80 via-transparent to-transparent"
                                : "from-black/30 via-transparent to-transparent"
                        } opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                    />

                    {/* Top badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                        {/* Category badge */}
                        <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border transition-all duration-300 group-hover:scale-105 ${
                                isDark
                                    ? "bg-darkBg/70 text-neonGreen border-neonGreen/30"
                                    : "bg-white/90 text-brightPink border-white/50 shadow-sm"
                            }`}
                        >
                            <HiSparkles className="w-3 h-3" />
                            {campaign.type}
                        </span>

                        {/* Urgent badge */}
                        {isUrgent && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white animate-pulse shadow-lg">
                                🔥 {daysLeft}d left
                            </span>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-3">
                    {/* Title */}
                    <h2
                        className={`text-lg font-bold leading-tight line-clamp-2 transition-colors duration-300 group-hover:text-brightPink ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        {campaign.title}
                    </h2>

                    {/* Description */}
                    <p
                        className={`text-sm leading-relaxed line-clamp-2 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        {truncateDescription(campaign.description)}
                    </p>

                    {/* Stats Row */}
                    <div
                        className={`flex items-center justify-between pt-3 border-t ${
                            isDark ? "border-darkBorder/50" : "border-gray-100"
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <FaSackDollar className="w-3.5 h-3.5 text-neonGreen" />
                            <div>
                                <p
                                    className={`text-[10px] uppercase tracking-wide ${
                                        isDark
                                            ? "text-gray-500"
                                            : "text-gray-400"
                                    }`}
                                >
                                    Min. Donation
                                </p>
                                <p
                                    className={`text-sm font-bold ${
                                        isDark ? "text-white" : "text-gray-900"
                                    }`}
                                >
                                    ${campaign.minDonation}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegCalendarAlt
                                className={`w-3.5 h-3.5 ${
                                    isUrgent
                                        ? "text-red-500"
                                        : "text-softOrange"
                                }`}
                            />
                            <div className="text-right">
                                <p
                                    className={`text-[10px] uppercase tracking-wide ${
                                        isDark
                                            ? "text-gray-500"
                                            : "text-gray-400"
                                    }`}
                                >
                                    Days Left
                                </p>
                                <p
                                    className={`text-sm font-bold ${
                                        isUrgent
                                            ? "text-red-500"
                                            : isDark
                                            ? "text-white"
                                            : "text-gray-900"
                                    }`}
                                >
                                    {daysLeft}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                        to={`/campaigns/${campaign._id}`}
                        className={`relative flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-500 group/btn ${
                            isDark
                                ? "bg-gradient-to-r from-darkBorder to-darkBorder hover:from-brightPink hover:to-coral text-gray-300 hover:text-white"
                                : "bg-gradient-to-r from-gray-100 to-gray-100 hover:from-brightPink hover:to-coral text-gray-700 hover:text-white"
                        }`}
                    >
                        {/* Shine effect */}
                        <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <FaHandHoldingDollar className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                        <span>View Campaign</span>
                        <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.object.isRequired,
};
export default CampaignCard;
