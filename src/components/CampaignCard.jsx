import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useTheme } from "../provider/ThemeProvider";

const CampaignCard = ({ campaign }) => {
    const { isDark } = useTheme();

    const truncateDescription = (description) => {
        const words = description.split(" ");
        return words.length > 10
            ? words.slice(0, 10).join(" ") + "..."
            : description;
    };

    return (
        <div className={`p-4 rounded-2xl shadow-lg flex flex-col transition-all duration-300 hover:shadow-xl border ${
            isDark 
                ? "bg-darkCard border-darkBorder hover:border-brightPink/30" 
                : "bg-white border-gray-100 hover:border-brightPink/30"
        }`}>
            <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    isDark 
                        ? "bg-darkBg/80 text-neonGreen backdrop-blur-sm" 
                        : "bg-white/90 text-brightPink backdrop-blur-sm"
                }`}>
                    {campaign.type}
                </div>
            </div>
            <div className="flex-grow">
                <h2 className={`text-xl font-bold mb-3 line-clamp-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {campaign.title}
                </h2>
                <p className={`mb-4 flex gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    <BsFillInfoCircleFill size={18} className="flex-shrink-0 mt-0.5 text-brightPink" />
                    <span className="line-clamp-2">{truncateDescription(campaign.description)}</span>
                </p>
                <div className={`flex justify-between items-center mb-4 pt-4 border-t ${isDark ? "border-darkBorder" : "border-gray-100"}`}>
                    <p className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        <FaSackDollar size={18} className="text-neonGreen" />
                        <span className="font-semibold">${campaign.minDonation}</span>
                    </p>
                    <p className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        <FaRegCalendarAlt size={18} className="text-softOrange" />
                        <span>{campaign.deadline}</span>
                    </p>
                </div>
            </div>
            <Link
                to={`/campaigns/${campaign._id}`}
                className="group flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brightPink to-coral text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brightPink/30 hover:scale-[1.02]"
            >
                <FaHandHoldingDollar size={18} />
                View Campaign
            </Link>
        </div>
    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.object.isRequired,
};
export default CampaignCard;
