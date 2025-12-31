import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#333',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '16px',
                    },
                }}
            />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomeLayout;
