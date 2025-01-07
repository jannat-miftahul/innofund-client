import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const MyCampaigns = () => {
    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);
    console.log(campaigns);

    useEffect(() => {
        fetch(
            `http://localhost:5000/campaigns?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setCampaigns(data));
    }, [user.email]);

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
                fetch(`http://localhost:5000/campaigns/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.isConfirmed > 0) {
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
        <div className="max-w-screen-xl mx-auto py-12">
            <h1 className="text-3xl font-bold mb-6">My Campaigns</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="py-2"></th>
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
                                <td className="py-2">
                                    {campaigns.indexOf(campaign) + 1}
                                </td>
                                <td className="py-2">{campaign.title}</td>
                                <td className="py-2">{campaign.type}</td>
                                <td className="py-2">{campaign.minDonation}</td>
                                <td className="py-2">{campaign.deadline}</td>
                                <td className="py-2">
                                    <Link
                                        to={`/update-campaign/${campaign._id}`}
                                        className="btn bg-skyBlue mr-2"
                                    >
                                        <FiEdit3 size={24} />
                                        Update
                                    </Link>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleDelete(campaign._id);
                                        }}
                                        className="btn bg-softOrange"
                                    >
                                        <AiOutlineDelete size={24} />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaigns;
