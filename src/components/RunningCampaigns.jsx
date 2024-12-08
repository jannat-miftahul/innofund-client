import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch("https://innofund-server.vercel.app/running-campaigns")
            .then((res) => res.json())
            .then((data) => setCampaigns(data));
    }, []);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">Running Campaigns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                    <div
                        key={campaign._id}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <img
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <h2 className="text-xl font-bold mb-2">
                            {campaign.title}
                        </h2>
                        <p className="text-gray-700 mb-2">
                            <strong>Type:</strong> {campaign.type}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Description:</strong> {campaign.description}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Minimum Donation:</strong>{" "}
                            {campaign.minDonation}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Deadline:</strong> {campaign.deadline}
                        </p>
                        <Link
                            to={`/campaigns/${campaign._id}`}
                            className="btn btn-primary"
                        >
                            See More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RunningCampaigns;
