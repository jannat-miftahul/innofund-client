import { useLoaderData } from "react-router-dom";

const CampaignDetails = () => {
    const campaign = useLoaderData();
    const {
        title,
        type,
        description,
        minDonation,
        deadline,
        email,
        username,
        image,
    } = campaign || {};

    return (
        <div className="container mx-auto mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6">{title}</h1>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover mb-6 rounded-lg"
                />
                <p className="text-lg mb-4">
                    <strong>Type:</strong> {type}
                </p>
                <p className="text-lg mb-4">
                    <strong>Description:</strong> {description}
                </p>
                <p className="text-lg mb-4">
                    <strong>Minimum Donation:</strong> {minDonation}
                </p>
                <p className="text-lg mb-4">
                    <strong>Deadline:</strong> {deadline}
                </p>
                <p className="text-lg mb-4">
                    <strong>Email:</strong> {email}
                </p>
                <p className="text-lg mb-4">
                    <strong>Username:</strong> {username}
                </p>
                <button className="btn bg-warmBrown mt-4">Donate</button>
            </div>
        </div>
    );
};

export default CampaignDetails;
