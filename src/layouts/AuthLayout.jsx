import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useTheme } from "../provider/ThemeProvider";

const AuthLayout = () => {
    const { isDark } = useTheme();

    return (
        <div className={`max-w-screen-2xl mx-auto flex flex-col min-h-screen transition-colors duration-300 ${
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
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AuthLayout;
