import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";

const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-skyBlue to-softOrange p-10 rounded-lg shadow-lg mb-12">
                <h1 className="text-4xl font-bold mb-4">About InnoFund</h1>
                <p className="text-lg">
                    Empowering startups, businesses, and innovators to bring
                    their ideas to life.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <FaBullseye size={32} className="text-blue-500" />
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg">
                    At InnoFund, we believe that great ideas deserve to be
                    realized. Our platform connects passionate individuals with
                    backers who share their vision. Whether you&apos;re
                    launching a new product, starting a business, or pursuing a
                    creative project, InnoFund is here to help you succeed.
                </p>
            </div>

            {/* How It Works Section */}
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <FaLightbulb size={32} className="text-yellow-500" />
                    <h2 className="text-2xl font-bold">How It Works</h2>
                </div>
                <p className="text-lg">
                    Creating a campaign on InnoFund is simple. Sign up, create
                    your campaign, and share it with the world. Backers can
                    browse campaigns, learn about the projects, and contribute
                    to the ones they believe in. Together, we can turn dreams
                    into reality.
                </p>
            </div>

            {/* Join Us Section */}
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <FaUsers size={32} className="text-green-500" />
                    <h2 className="text-2xl font-bold">Join Us</h2>
                </div>
                <p className="text-lg">
                    Join our community of innovators and backers. Whether
                    you&apos;re looking to fund your next big idea or support
                    someone else&apos;s, InnoFund is the place to make it
                    happen. Sign up today and start making a difference.
                </p>
            </div>

            {/* Call-to-Action */}
            <div className="text-center mt-12">
                <button className="btn bg-gradient-to-r from-skyBlue to-softOrange px-6 py-3 rounded-lg shadow-lg hover:opacity-90">
                    Join Now
                </button>
            </div>
        </div>
    );
};

export default About;
