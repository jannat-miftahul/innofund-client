import { useEffect, useState } from "react";
import CampaignCard from "../../components/CampaignCard";

const RunningCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/running-campaigns")
            .then((res) => res.json())
            .then((data) => setCampaigns(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
            <h1 className="text-3xl font-bold mb-6">Running Campaigns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                    <CampaignCard key={campaign._id} campaign={campaign} />
                ))}
            </div>
        </div>
    );
};

export default RunningCampaigns;
