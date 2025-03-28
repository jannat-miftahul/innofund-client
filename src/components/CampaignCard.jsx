import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";
import { PiInfo } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";

const CampaignCard = ({ campaign }) => {
    const truncateDescription = (description) => {
        const words = description.split(" ");
        return words.length > 10
            ? words.slice(0, 10).join(" ") + "..."
            : description;
    };

    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-lg flex flex-col">
            <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">{campaign.title}</h2>
                <p className="text-gray-700 mb-2 flex items-center gap-2">
                    <FaHandHoldingDollar size={24} />
                    {campaign.type}
                </p>
                <p className="text-gray-700 mb-2 flex gap-2">
                    <PiInfo size={28} />
                    {truncateDescription(campaign.description)}
                </p>
                <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-700 flex items-center gap-2">
                        <FaSackDollar size={24} />
                        {campaign.minDonation}
                    </p>
                    <p className="text-gray-700 flex items-center gap-2">
                        <FaRegCalendarAlt size={22} />
                        {campaign.deadline}
                    </p>
                </div>
            </div>
            <Link
                to={`/campaigns/${campaign._id}`}
                className="btn bg-neonGreen w-max rounded-md"
            >
                See More
            </Link>
        </div>
    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.object.isRequired,
};
export default CampaignCard;
