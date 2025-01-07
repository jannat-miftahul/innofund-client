const HowItWorks = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-12">
            <h1 className="text-3xl font-bold mb-6">How It Works</h1>
            <div className="space-y-4">
                <div className="p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Step 1: Sign Up</h2>
                    <p className="mt-2">Create an account to get started.</p>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold">
                        Step 2: Create a Campaign
                    </h2>
                    <p className="mt-2">
                        Fill out the campaign details and submit for review.
                    </p>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold">
                        Step 3: Share Your Campaign
                    </h2>
                    <p className="mt-2">
                        Share your campaign with friends and family to gather
                        support.
                    </p>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold">
                        Step 4: Receive Donations
                    </h2>
                    <p className="mt-2">
                        Receive donations directly to your account.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
