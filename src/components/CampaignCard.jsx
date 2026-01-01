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
            className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                isDark ? "bg-gradient-to-b from-darkCard to-darkBg" : "bg-white"
            }`}
        >
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-brightPink/50 via-transparent to-neonGreen/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card inner container */}
            <div
                className={`relative h-full rounded-3xl overflow-hidden border ${
                    isDark
                        ? "border-darkBorder group-hover:border-transparent"
                        : "border-gray-100 group-hover:border-transparent shadow-lg group-hover:shadow-2xl group-hover:shadow-brightPink/10"
                }`}
            >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
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
                                ? "from-darkCard via-darkCard/20 to-transparent"
                                : "from-black/40 via-transparent to-transparent"
                        } opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                    />

                    {/* Top badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        {/* Category badge */}
                        <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border transition-all duration-300 group-hover:scale-105 ${
                                isDark
                                    ? "bg-darkBg/70 text-neonGreen border-neonGreen/30"
                                    : "bg-white/80 text-brightPink border-white/50"
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

                    {/* Bottom floating stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        <div
                            className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border transition-all duration-300 ${
                                isDark
                                    ? "bg-darkBg/60 border-darkBorder/50 text-white"
                                    : "bg-white/80 border-white/50 text-gray-800"
                            }`}
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neonGreen to-teal flex items-center justify-center">
                                <FaSackDollar className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider opacity-60">
                                    Min. Donation
                                </p>
                                <p className="text-sm font-bold">
                                    ${campaign.minDonation}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border transition-all duration-300 ${
                                isDark
                                    ? "bg-darkBg/60 border-darkBorder/50 text-white"
                                    : "bg-white/80 border-white/50 text-gray-800"
                            }`}
                        >
                            <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                    isUrgent
                                        ? "bg-gradient-to-br from-red-500 to-orange-500"
                                        : "bg-gradient-to-br from-softOrange to-coral"
                                }`}
                            >
                                <FaRegCalendarAlt className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider opacity-60">
                                    Days Left
                                </p>
                                <p className="text-sm font-bold">{daysLeft}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-4">
                    {/* Title */}
                    <h2
                        className={`text-xl font-bold leading-tight line-clamp-2 transition-colors duration-300 group-hover:text-brightPink ${
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

                    {/* CTA Button */}
                    <Link
                        to={`/campaigns/${campaign._id}`}
                        className={`relative flex items-center justify-center gap-3 py-3.5 rounded-2xl font-semibold text-sm overflow-hidden transition-all duration-500 group/btn ${
                            isDark
                                ? "bg-gradient-to-r from-darkBorder to-darkBorder hover:from-brightPink hover:to-coral text-gray-300 hover:text-white"
                                : "bg-gradient-to-r from-gray-100 to-gray-50 hover:from-brightPink hover:to-coral text-gray-700 hover:text-white"
                        }`}
                    >
                        {/* Shine effect */}
                        <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <FaHandHoldingDollar className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
                        <span>View Campaign</span>
                        <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
