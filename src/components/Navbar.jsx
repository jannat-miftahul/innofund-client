import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { RiMenuFold2Line, RiCloseLine } from "react-icons/ri";
import { IoRocketSharp } from "react-icons/io5";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/all-campaigns", label: "All Campaigns" },
        { to: "/about", label: "About Us" },
        { to: "/contact", label: "Contact" },
    ];

    const userLinks = [
        { to: "/add-campaign", label: "Add Campaign", icon: <IoRocketSharp className="w-4 h-4" /> },
        { to: "/my-campaigns", label: "My Campaigns" },
        { to: "/my-donations", label: "My Donations" },
    ];

    const NavLinkItem = ({ to, label, icon, isMobile = false }) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `relative group flex items-center gap-2 px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-xl ${isMobile ? "w-full" : ""
                } ${isActive
                    ? "text-brightPink bg-brightPink/10"
                    : "text-gray-700 hover:text-brightPink hover:bg-brightPink/5"
                }`
            }
        >
            {icon && icon}
            <span>{label}</span>
            {/* Animated underline */}
            <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brightPink to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
        </NavLink>
    );

    NavLinkItem.propTypes = {
        to: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.node,
        isMobile: PropTypes.bool,
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-100"
                    : "bg-gradient-to-r from-paleYellow/60 via-white/40 to-softOrange/30 backdrop-blur-md"
                    }`}
            >
                {/* Animated top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brightPink via-purple-500 to-neonGreen animate-gradient" />

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <NavLink
                            to="/"
                            className="group flex items-center gap-2 sm:gap-3"
                        >
                            <div className="font-pacifico text-xl sm:text-2xl lg:text-3xl">
                                <span className="bg-gradient-to-r from-purple-600 to-brightPink bg-clip-text text-transparent">
                                    Inno
                                </span>
                                <span className="bg-gradient-to-r from-brightPink to-softOrange bg-clip-text text-transparent">
                                    Fund
                                </span>
                            </div>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <NavLinkItem key={link.to} {...link} />
                            ))}
                            {user?.email &&
                                userLinks.map((link) => (
                                    <NavLinkItem key={link.to} {...link} />
                                ))}
                        </nav>

                        {/* Auth Section */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {user?.email ? (
                                <div className="flex items-center gap-3 sm:gap-4">
                                    {/* User Avatar */}
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-brightPink to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                                        <img
                                            src={
                                                user?.photoURL ||
                                                "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                            }
                                            alt="user"
                                            className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full ring-2 ring-white object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Online indicator */}
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-neonGreen rounded-full border-2 border-white" />
                                        {/* Tooltip */}
                                        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs sm:text-sm rounded-xl px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl">
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-gray-900" />
                                            {user?.displayName || user?.email}
                                        </div>
                                    </div>

                                    {/* Logout Button */}
                                    <button
                                        onClick={logOut}
                                        className="group relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/30"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-brightPink to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative hidden sm:inline">Log out</span>
                                        <AiOutlineLogout className="relative w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                            ) : (
                                <div className="hidden sm:flex items-center gap-3">
                                    <Link
                                        to="/auth/signin"
                                        className="group relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neonGreen to-lime-400 text-gray-900 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neonGreen/40 hover:scale-105"
                                    >
                                        <span className="relative">Sign in</span>
                                        <AiOutlineLogin className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                    <Link
                                        to="/auth/signup"
                                        className="relative px-5 py-2.5 bg-transparent text-brightPink font-semibold text-sm rounded-full border-2 border-brightPink overflow-hidden transition-all duration-300 hover:text-white hover:border-transparent group"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-brightPink to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                        <span className="relative">Sign up</span>
                                    </Link>
                                </div>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-brightPink/20 hover:to-purple-500/20 transition-all duration-300"
                            >
                                {isMobileMenuOpen ? (
                                    <RiCloseLine className="w-6 h-6 text-gray-700" />
                                ) : (
                                    <RiMenuFold2Line className="w-6 h-6 text-gray-700" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute top-0 right-0 w-[280px] sm:w-[320px] h-full bg-white shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Menu Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-100">
                            <span className="text-lg font-semibold text-gray-800">Menu</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                                <RiCloseLine className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {navLinks.map((link) => (
                                <NavLinkItem key={link.to} {...link} isMobile />
                            ))}

                            {user?.email && (
                                <>
                                    <div className="my-4 border-t border-gray-100" />
                                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Your Account
                                    </p>
                                    {userLinks.map((link) => (
                                        <NavLinkItem key={link.to} {...link} isMobile />
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Menu Footer */}
                        <div className="p-4 border-t border-gray-100">
                            {user?.email ? (
                                <button
                                    onClick={logOut}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                                >
                                    <AiOutlineLogout className="w-5 h-5" />
                                    Log out
                                </button>
                            ) : (
                                <div className="space-y-3">
                                    <Link
                                        to="/auth/signin"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-neonGreen to-lime-400 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                                    >
                                        <AiOutlineLogin className="w-5 h-5" />
                                        Sign in
                                    </Link>
                                    <Link
                                        to="/auth/signup"
                                        className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-brightPink to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer for fixed navbar */}
            <div className="h-16 sm:h-20" />
        </>
    );
};

export default Navbar;
