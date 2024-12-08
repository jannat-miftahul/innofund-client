import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaigns = () => {
    const { user } = useContext(AuthContext) || {};

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://innofund-server.vercel.app/campaigns?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setCampaigns(data));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://innofund-server.vercel.app/campaigns/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your campaign has been deleted.",
                                "success"
                            );
                            setCampaigns(
                                campaigns.filter(
                                    (campaign) => campaign._id !== id
                                )
                            );
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">My Campaigns</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Title</th>
                        <th className="py-2">Type</th>
                        <th className="py-2">Minimum Donation</th>
                        <th className="py-2">Deadline</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign) => (
                        <tr key={campaign._id} className="hover">
                            <td className="py-2 px-4">{campaign.title}</td>
                            <td className="py-2 px-4">{campaign.type}</td>
                            <td className="py-2 px-4">
                                {campaign.minDonation}
                            </td>
                            <td className="py-2 px-4">{campaign.deadline}</td>
                            <td className="py-2 px-4">
                                <Link
                                    to={`/updateCampaign/${campaign._id}`}
                                    className="btn btn-outline btn-info mr-2"
                                >
                                    Update
                                </Link>
                                <button
                                    onClick={() => handleDelete(campaign._id)}
                                    className="btn btn-outline btn-error"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyCampaigns;
