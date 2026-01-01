import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useTheme } from "../provider/ThemeProvider";

const HomeLayout = () => {
    const { isDark } = useTheme();

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
            isDark
                ? "bg-gradient-to-b from-darkBg via-darkCard to-darkBg"
                : "bg-gradient-to-b from-white via-gray-50 to-white"
        }`}>
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: isDark ? '#1E293B' : '#333',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '16px',
                        border: isDark ? '1px solid #334155' : 'none',
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
