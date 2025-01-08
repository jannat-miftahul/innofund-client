import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);
    // console.log(user);
    console.log("donations", donations);

    useEffect(() => {
        fetch(`https://innofund-server.vercel.app/donations?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setDonations(data));
    }, [user.email]);

    return (
        <div className="max-w-screen-xl mx-auto py-12">
            <h1 className="text-3xl font-bold mb-6">My Donations</h1>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donations.map((donation) => (
                    <div
                        key={donation._id}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <img
                            src={donation.image}
                            alt={donation.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <h2 className="text-xl font-bold mb-2">
                            {donation.title}
                        </h2>
                        <p className="text-gray-700 mb-2">
                            <strong>Type:</strong> {donation.type}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Description:</strong> {donation.description}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Minimum Donation:</strong>{" "}
                            {donation.minDonation}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Deadline:</strong> {donation.deadline}
                        </p>
                    </div>
                ))}
            </div> */}

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Donor</th>
                            <th>Donated Amount</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((donation) => (
                            <tr key={donation._id}>
                                <td>{donations.indexOf(donation) + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={donation.image}
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {donation.title}
                                            </div>
                                            <div className="text-sm opacity-50">
                                                {donation.type}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {donation.donorName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {donation.donorEmail}
                                    </span>
                                </td>
                                <td>{donation.minDonation}</td>
                                <td>{donation.deadline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonations;
