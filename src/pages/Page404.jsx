import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-brightPink mb-4 animate-bounce">
                404
            </h1>
            <p className="text-xl mb-8">Page Not Found</p>
            <Link
                to="/"
                className="bg-softOrange rounded border border-brightPink px-4 py-2 hover:bg-transparent"
            >
                Go Back Home Page &rarr;
            </Link>
        </div>
    );
};

export default Page404;
