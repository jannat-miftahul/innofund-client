import { useEffect, useState } from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/campaigns")
            .then((res) => res.json())
            .then((data) => setCampaigns(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">All Campaigns</h1>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="py-2"></th>
                            <th className="py-2">Title</th>
                            <th className="py-2">Type</th>
                            <th className="py-2">Minimum Donation</th>
                            <th className="py-2">Deadline</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Username</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign.id} className="hover">
                                <td className="py-2 px-4">
                                    {campaigns.indexOf(campaign) + 1}
                                </td>
                                <td className="py-2 px-4">{campaign.title}</td>
                                <td className="py-2 px-4">{campaign.type}</td>
                                <td className="py-2 px-4">
                                    {campaign.minDonation}
                                </td>
                                <td className="py-2 px-4">
                                    {campaign.deadline}
                                </td>
                                <td className="py-2 px-4">{campaign.email}</td>
                                <td className="py-2 px-4">
                                    {campaign.username}
                                </td>
                                <td className="py-2 px-4">
                                    <Link
                                        to={`/campaigns/${campaign._id}`}
                                        className="flex items-center gap-2 hover:underline"
                                    >
                                        See More
                                        <HiOutlineChevronDoubleRight />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaigns;
