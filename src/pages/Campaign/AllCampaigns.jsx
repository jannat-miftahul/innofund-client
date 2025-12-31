import { useEffect, useState } from "react";
// import { HiOutlineChevronDoubleRight } from "react-icons/hi";
// import { Link } from "react-router-dom";
import CampaignCard from "../../components/CampaignCard";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");

    useEffect(() => {
        fetch(`https://innofund-server.vercel.app/campaigns?sort=${sortOrder}`)
            .then((res) => res.json())
            .then((data) => setCampaigns(data));
    }, [sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
            <div className="flex flex-col md:flex-row items-center md:items-baseline md:justify-between">
                <h1 className="text-3xl font-bold mb-6">All Campaigns</h1>

                <div className="space-x-2">
                    <label className="text-lg text-brightPink font-semibold uppercase">
                        sort by donation:
                    </label>
                    <select
                        value={sortOrder}
                        onChange={handleSortChange}
                        className="border border-gray-400 rounded px-2 py-1 font-semibold uppercase"
                    >
                        <option value="desc">Highest to Lowest</option>
                        <option value="asc">Lowest to highest</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {campaigns.map((campaign) => (
                    <CampaignCard key={campaign._id} campaign={campaign} />
                ))}
            </div>
        </div>
    );
};

export default AllCampaigns;
