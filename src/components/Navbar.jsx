import { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import { useTheme } from "../provider/ThemeProvider";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { IoRocketSharp, IoChevronDown, IoWallet, IoHeart, IoAddCircle, IoSunny, IoMoon } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";
import logo from "../assets/innofund-logo.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { toggleTheme, isDark } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const userMenuRef = useRef(null);
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
        setIsUserMenuOpen(false);
    }, [location]);

    // Close user menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target)
            ) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/all-campaigns", label: "All Campaigns" },
        { to: "/about", label: "About Us" },
        { to: "/contact", label: "Contact" },
    ];

    const userLinks = [
        {
            to: "/add-campaign",
            label: "Add Campaign",
            icon: <IoAddCircle className="w-5 h-5" />,
            description: "Start a new campaign",
        },
        {
            to: "/my-campaigns",
            label: "My Campaigns",
            icon: <IoRocketSharp className="w-5 h-5" />,
            description: "Manage your campaigns",
        },
        {
            to: "/my-donations",
            label: "My Donations",
            icon: <IoHeart className="w-5 h-5" />,
            description: "View donation history",
        },
    ];

    const NavLinkItem = ({ to, label, icon, isMobile = false }) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `relative group flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-2xl ${isMobile ? "w-full" : ""
                } ${isActive
                    ? "text-white bg-gradient-to-r from-brightPink to-coral shadow-lg shadow-brightPink/25"
                    : isDark
                        ? "text-gray-300 hover:text-brightPink hover:bg-brightPink/10"
                        : "text-gray-700 hover:text-brightPink hover:bg-brightPink/10"
                }`
            }
        >
            {icon && icon}
            <span>{label}</span>
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
                    ? isDark
                        ? "bg-darkBg/80 backdrop-blur-2xl shadow-xl shadow-black/20 border-b border-darkBorder/50"
                        : "bg-white/70 backdrop-blur-2xl shadow-xl shadow-gray-200/40 border-b border-white/50"
                    : isDark
                        ? "bg-gradient-to-r from-darkBg/60 via-darkCard/40 to-darkBg/60 backdrop-blur-xl"
                        : "bg-gradient-to-r from-paleYellow/40 via-white/60 to-softOrange/40 backdrop-blur-xl"
                    }`}
            >
                {/* Animated shimmer border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brightPink to-neonGreen bg-[length:200%_100%] animate-shimmer" />

                {/* Subtle mesh gradient overlay */}
                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${isDark ? "from-violet/10 via-transparent to-neonGreen/10" : "from-violet/5 via-transparent to-neonGreen/5"} pointer-events-none`} />

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <NavLink
                            to="/"
                            className="group flex items-center gap-3"
                        >
                            <img
                                src={logo}
                                alt="InnoFund Logo"
                                className="h-8 sm:h-16 w-auto object-contain"
                            />
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav className={`hidden lg:flex items-center gap-1 backdrop-blur-lg rounded-full px-2 py-1.5 border shadow-sm ${isDark ? "bg-darkCard/50 border-darkBorder/50" : "bg-white/50 border-gray-200/50"}`}>
                            {navLinks.map((link) => (
                                <NavLinkItem key={link.to} {...link} />
                            ))}
                        </nav>

                        {/* Right Section */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className={`relative p-2.5 rounded-full transition-all duration-500 group overflow-hidden ${isDark
                                    ? "bg-darkCard hover:bg-darkBorder border border-darkBorder"
                                    : "bg-gray-100/80 hover:bg-white hover:shadow-md"
                                    }`}
                                aria-label="Toggle theme"
                            >
                                <div className="relative w-5 h-5">
                                    <IoSunny
                                        className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-500 ${isDark
                                            ? "rotate-0 scale-100 opacity-100"
                                            : "-rotate-90 scale-0 opacity-0"
                                            }`}
                                    />
                                    <IoMoon
                                        className={`absolute inset-0 w-5 h-5 text-violet transition-all duration-500 ${isDark
                                            ? "rotate-90 scale-0 opacity-0"
                                            : "rotate-0 scale-100 opacity-100"
                                            }`}
                                    />
                                </div>
                            </button>

                            {/* Search Button - Desktop */}
                            <div
                                className={`hidden md:flex items-center transition-all duration-300 ${isSearchFocused ? "w-64" : "w-44"
                                    }`}
                            >
                                <div className="relative w-full">
                                    <RiSearchLine className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
                                    <input
                                        type="text"
                                        placeholder="Search campaigns..."
                                        className={`w-full pl-10 pr-4 py-2.5 border border-transparent rounded-full text-sm outline-none focus:ring-2 focus:ring-brightPink/20 transition-all duration-300 ${isDark
                                            ? "bg-darkCard/80 hover:bg-darkCard focus:bg-darkCard focus:border-brightPink/30 text-gray-200 placeholder-gray-500"
                                            : "bg-gray-100/80 hover:bg-white focus:bg-white focus:border-brightPink/30 text-gray-700 placeholder-gray-400"
                                            }`}
                                        onFocus={() => setIsSearchFocused(true)}
                                        onBlur={() => setIsSearchFocused(false)}
                                    />
                                </div>
                            </div>

                            {user?.email ? (
                                <div className="flex items-center gap-2 sm:gap-3">
                                    {/* Notification Bell */}
                                    <button className={`relative p-2.5 rounded-full transition-all duration-300 group ${isDark ? "bg-darkCard hover:bg-darkBorder" : "bg-gray-100/80 hover:bg-white hover:shadow-md"}`}>
                                        <HiOutlineBell className={`w-5 h-5 group-hover:text-brightPink transition-colors ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                                        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-brightPink rounded-full border-2 border-white dark:border-darkBg animate-pulse" />
                                    </button>

                                    {/* Wallet Button */}
                                    <button className={`hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-neonGreen/20 to-teal/20 hover:from-neonGreen/30 hover:to-teal/30 border border-neonGreen/30 transition-all duration-300 group`}>
                                        <IoWallet className="w-4 h-4 text-neonGreen" />
                                        <span className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                            $0.00
                                        </span>
                                    </button>

                                    {/* User Menu Dropdown */}
                                    <div className="relative" ref={userMenuRef}>
                                        <button
                                            onClick={() =>
                                                setIsUserMenuOpen(
                                                    !isUserMenuOpen
                                                )
                                            }
                                            className={`flex items-center gap-2 p-1.5 pr-3 rounded-full border transition-all duration-300 ${isDark
                                                ? "bg-darkCard hover:bg-darkBorder border-darkBorder hover:border-gray-600"
                                                : "bg-gray-100/80 hover:bg-white hover:shadow-md border-transparent hover:border-gray-200"
                                                }`}
                                        >
                                            <div className="relative">
                                                <img
                                                    src={
                                                        user?.photoURL ||
                                                        "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                                    }
                                                    alt="user"
                                                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 object-cover ${isDark ? "ring-darkBorder" : "ring-white"}`}
                                                />
                                                <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 bg-neonGreen rounded-full border-2 ${isDark ? "border-darkBg" : "border-white"}`} />
                                            </div>
                                            <IoChevronDown
                                                className={`w-4 h-4 transition-transform duration-300 ${isUserMenuOpen
                                                    ? "rotate-180"
                                                    : ""
                                                    } ${isDark ? "text-gray-400" : "text-gray-500"}`}
                                            />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div
                                            className={`absolute top-full right-0 mt-3 w-72 backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden transition-all duration-300 origin-top-right ${isUserMenuOpen
                                                ? "scale-100 opacity-100 visible"
                                                : "scale-95 opacity-0 invisible"
                                                } ${isDark
                                                    ? "bg-darkCard/95 border-darkBorder shadow-black/30"
                                                    : "bg-white/95 border-gray-100 shadow-gray-200/50"
                                                }`}
                                        >
                                            {/* User Info */}
                                            <div className={`p-4 bg-gradient-to-br from-brightPink/10 via-teal/5 to-neonGreen/10 border-b ${isDark ? "border-darkBorder" : "border-gray-100"}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className="relative">
                                                        <div className="absolute -inset-1 bg-gradient-to-r from-brightPink to-coral rounded-full blur opacity-50" />
                                                        <img
                                                            src={
                                                                user?.photoURL ||
                                                                "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                                            }
                                                            alt="user"
                                                            className={`relative w-12 h-12 rounded-full ring-2 object-cover ${isDark ? "ring-darkBorder" : "ring-white"}`}
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className={`text-sm font-semibold truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                                                            {user?.displayName ||
                                                                "User"}
                                                        </p>
                                                        <p className={`text-xs truncate ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                                            {user?.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Menu Links */}
                                            <div className="p-2">
                                                {userLinks.map((link) => (
                                                    <Link
                                                        key={link.to}
                                                        to={link.to}
                                                        className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group ${isDark ? "hover:bg-darkBorder" : "hover:bg-gray-100"}`}
                                                    >
                                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brightPink/20 to-coral/20 flex items-center justify-center text-brightPink group-hover:from-brightPink group-hover:to-coral group-hover:text-white transition-all duration-300">
                                                            {link.icon}
                                                        </div>
                                                        <div>
                                                            <p className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                                                                {link.label}
                                                            </p>
                                                            <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                                                {
                                                                    link.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Logout */}
                                            <div className={`p-2 border-t ${isDark ? "border-darkBorder" : "border-gray-100"}`}>
                                                <button
                                                    onClick={logOut}
                                                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group ${isDark ? "text-gray-300 hover:bg-red-500/10 hover:text-red-400" : "text-gray-700 hover:bg-red-50 hover:text-red-600"}`}
                                                >
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isDark ? "bg-darkBorder group-hover:bg-red-500/20" : "bg-gray-100 group-hover:bg-red-100"}`}>
                                                        <AiOutlineLogout className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-sm font-medium">
                                                        Log out
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="hidden sm:flex items-center gap-3">
                                    <Link
                                        to="/auth/signin"
                                        className={`group relative flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm border overflow-hidden transition-all duration-300 hover:border-brightPink hover:text-brightPink hover:shadow-md ${isDark
                                            ? "bg-darkCard text-gray-300 border-darkBorder"
                                            : "bg-white text-gray-700 border-gray-200"
                                            }`}
                                    >
                                        <span className="relative">
                                            Sign in
                                        </span>
                                    </Link>
                                    <Link
                                        to="/auth/signup"
                                        className="group relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-brightPink to-coral text-white rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brightPink/40 hover:scale-105"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-coral to-brightPink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative z-10">
                                            Get Started
                                        </span>
                                        <AiOutlineLogin className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                                className={`lg:hidden relative w-11 h-11 flex items-center justify-center rounded-2xl shadow-sm hover:shadow-md border transition-all duration-300 ${isDark
                                    ? "bg-darkCard hover:bg-darkBorder border-darkBorder"
                                    : "bg-white/80 hover:bg-white border-gray-200/50"
                                    }`}
                            >
                                <div
                                    className={`w-5 h-5 flex flex-col justify-center items-center gap-1.5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-90" : ""
                                        }`}
                                >
                                    <span
                                        className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isDark ? "bg-gray-300" : "bg-gray-700"} ${isMobileMenuOpen
                                            ? "rotate-45 translate-y-2"
                                            : ""
                                            }`}
                                    />
                                    <span
                                        className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isDark ? "bg-gray-300" : "bg-gray-700"} ${isMobileMenuOpen ? "opacity-0" : ""
                                            }`}
                                    />
                                    <span
                                        className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isDark ? "bg-gray-300" : "bg-gray-700"} ${isMobileMenuOpen
                                            ? "-rotate-45 -translate-y-2"
                                            : ""
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 backdrop-blur-md ${isDark ? "bg-black/70" : "bg-gray-900/60"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute top-0 right-0 w-[300px] sm:w-[350px] h-full backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        } ${isDark ? "bg-darkBg/95" : "bg-white/95"}`}
                >
                    <div className="flex flex-col h-full">
                        {/* Menu Header */}
                        <div className={`flex items-center justify-between p-5 border-b bg-gradient-to-r from-brightPink/5 to-coral/5 ${isDark ? "border-darkBorder" : "border-gray-100"}`}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-brightPink to-coral rounded-xl flex items-center justify-center">
                                    <IoRocketSharp className="w-5 h-5 text-white" />
                                </div>
                                <span className={`text-lg font-bold bg-clip-text text-transparent ${isDark ? "bg-gradient-to-r from-white to-gray-400" : "bg-gradient-to-r from-gray-900 to-gray-600"}`}>
                                    Menu
                                </span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${isDark ? "bg-darkCard hover:bg-darkBorder" : "bg-gray-100 hover:bg-gray-200"}`}
                            >
                                <RiCloseLine className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                            </button>
                        </div>

                        {/* Mobile Search */}
                        <div className={`p-4 border-b ${isDark ? "border-darkBorder" : "border-gray-100"}`}>
                            <div className="relative">
                                <RiSearchLine className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
                                <input
                                    type="text"
                                    placeholder="Search campaigns..."
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-brightPink/30 transition-all ${isDark
                                        ? "bg-darkCard text-gray-200 placeholder-gray-500"
                                        : "bg-gray-100 text-gray-700 placeholder-gray-400"
                                        }`}
                                />
                            </div>
                        </div>

                        {/* Menu Links */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            <p className={`px-4 text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                                Navigation
                            </p>
                            {navLinks.map((link) => (
                                <NavLinkItem key={link.to} {...link} isMobile />
                            ))}

                            {user?.email && (
                                <>
                                    <div className={`my-6 border-t ${isDark ? "border-darkBorder" : "border-gray-100"}`} />
                                    <p className={`px-4 text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                                        Your Account
                                    </p>
                                    {userLinks.map((link) => (
                                        <Link
                                            key={link.to}
                                            to={link.to}
                                            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-brightPink/10 hover:to-coral/10 transition-all group"
                                        >
                                            <div className={`w-10 h-10 rounded-xl group-hover:bg-gradient-to-br group-hover:from-brightPink group-hover:to-coral flex items-center justify-center group-hover:text-white transition-all ${isDark ? "bg-darkCard text-gray-400" : "bg-gray-100 text-gray-600"}`}>
                                                {link.icon}
                                            </div>
                                            <div>
                                                <p className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                                                    {link.label}
                                                </p>
                                                <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                                    {link.description}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Menu Footer */}
                        <div className={`p-4 border-t ${isDark ? "border-darkBorder bg-gradient-to-t from-darkCard" : "border-gray-100 bg-gradient-to-t from-gray-50"}`}>
                            {user?.email ? (
                                <div className="space-y-4">
                                    {/* User info */}
                                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-brightPink/10 to-coral/10 rounded-2xl">
                                        <img
                                            src={
                                                user?.photoURL ||
                                                "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                            }
                                            alt="user"
                                            className={`w-11 h-11 rounded-xl ring-2 object-cover ${isDark ? "ring-darkBorder" : "ring-white"}`}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm font-semibold truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                                                {user?.displayName || "User"}
                                            </p>
                                            <p className={`text-xs truncate ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                                {user?.email}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={logOut}
                                        className={`w-full flex items-center justify-center gap-2 px-4 py-3.5 text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-lg ${isDark ? "bg-gradient-to-r from-darkCard to-darkBorder" : "bg-gradient-to-r from-gray-800 to-gray-900"}`}
                                    >
                                        <AiOutlineLogout className="w-5 h-5" />
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <Link
                                        to="/auth/signup"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-brightPink to-coral text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brightPink/30"
                                    >
                                        Get Started Free
                                    </Link>
                                    <Link
                                        to="/auth/signin"
                                        className={`w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-semibold transition-all duration-300 ${isDark ? "bg-darkCard text-gray-300 hover:bg-darkBorder" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        <AiOutlineLogin className="w-5 h-5" />
                                        Sign in
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
