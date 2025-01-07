import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CampaignCard = ({ campaign }) => {
    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-lg flex flex-col">
            <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">{campaign.title}</h2>
                <p className="text-gray-700 mb-2">
                    <strong>Type:</strong> {campaign.type}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Description:</strong> {campaign.description}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Minimum Donation:</strong> {campaign.minDonation}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Deadline:</strong> {campaign.deadline}
                </p>
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
