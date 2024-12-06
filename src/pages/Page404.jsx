import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-deepBlue mb-4">404</h1>
            <p className="text-xl text-warmBrown mb-8">Page Not Found</p>
            <Link
                to="/"
                className="px-4 py-2 bg-lightCream text-deepBlue rounded border border-deepBlue hover:bg-paleGreen"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Page404;
