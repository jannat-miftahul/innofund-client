import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyDonations = () => {
    const { user } = useContext(AuthContext) || {};
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/donations?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setDonations(data));
        }
    }, [user]);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">My Donations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
        </div>
    );
};

export default MyDonations;
