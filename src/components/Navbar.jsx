import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { RiMenuFold2Line } from "react-icons/ri";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `tab text-sm lg:text-base hover:text-brightPink transition-colors ${
                        isActive
                            ? "text-brightPink font-semibold"
                            : "text-gray-700"
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/all-campaigns"
                className={({ isActive }) =>
                    `tab text-sm lg:text-base hover:text-brightPink transition-colors ${
                        isActive
                            ? "text-brightPink font-semibold"
                            : "text-gray-700"
                    }`
                }
            >
                All Campaigns
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    `tab text-sm lg:text-base hover:text-brightPink transition-colors ${
                        isActive
                            ? "text-brightPink font-semibold"
                            : "text-gray-700"
                    }`
                }
            >
                About Us
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `tab text-sm lg:text-base hover:text-brightPink transition-colors ${
                        isActive
                            ? "text-brightPink font-semibold"
                            : "text-gray-700"
                    }`
                }
            >
                Contact
            </NavLink>

            {user && user?.email ? (
                <NavLink
                    to="/add-campaign"
                    className={({ isActive }) =>
                        `tab text-sm lg:text-base hover:text-brightPink transition-colors ${
                            isActive
                                ? "text-brightPink font-semibold"
                                : "text-gray-700"
                        }`
                    }
                >
                    Add Campaign
                </NavLink>
            ) : null}
            {user && user?.email ? (
                <NavLink
                    to="/my-campaigns"
                    className={({ isActive }) =>
                        `tab text-sm lg:text-base hover:text-brightPink transition-colors ${
                            isActive
                                ? "text-brightPink font-semibold"
                                : "text-gray-700"
                        }`
                    }
                >
                    My Campaigns
                </NavLink>
            ) : null}
            {user && user?.email ? (
                <NavLink
                    to="/my-donations"
                    className={({ isActive }) =>
                        `tab text-sm lg:text-base hover:text-brightPink transition-colors ${
                            isActive
                                ? "text-brightPink font-semibold"
                                : "text-gray-700"
                        }`
                    }
                >
                    My Donations
                </NavLink>
            ) : null}
        </>
    );

    return (
        <header className="sticky top-0 z-50 bg-paleYellow/40 backdrop-blur-lg border-b border-paleYellow shadow-sm">
            <div className="navbar max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
                {/* Mobile Menu & Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden p-2 hover:bg-softOrange/20"
                        >
                            <RiMenuFold2Line
                                size={24}
                                className="text-gray-700"
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-xl z-[1] mt-3 w-56 p-3 shadow-xl border border-gray-100 space-y-1"
                        >
                            {links}
                        </ul>
                    </div>
                    <NavLink
                        to="/"
                        className="font-pacifico text-xl sm:text-2xl text-purple-500 font-semibold hover:scale-105 transition-transform"
                    >
                        Inno<span className="text-pink-500">Fund</span>
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
                </div>

                {/* Auth Buttons */}
                <div className="navbar-end gap-2 sm:gap-3">
                    {user && user?.email ? (
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* User Avatar */}
                            <div className="relative flex flex-col items-center group">
                                <img
                                    src={
                                        user?.photoURL ||
                                        "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                    }
                                    alt="user"
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring-2 ring-brightPink/30 hover:ring-brightPink transition-all cursor-pointer object-cover"
                                />
                                <div className="absolute top-full mt-2 bg-gray-800 text-white text-xs sm:text-sm rounded-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                    {user?.displayName || user?.email}
                                </div>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={logOut}
                                className="btn btn-sm sm:btn-md bg-neonGreen hover:bg-lime-400 text-gray-800 border-none rounded-full px-3 sm:px-5 shadow-md hover:shadow-lg transition-all"
                            >
                                <span className="hidden sm:inline">
                                    Log out
                                </span>
                                <AiOutlineLogout className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link
                                to="/auth/signin"
                                className="btn btn-sm sm:btn-md bg-neonGreen hover:bg-lime-400 text-gray-800 border-none rounded-full px-3 sm:px-5 shadow-md hover:shadow-lg transition-all"
                            >
                                <span className="hidden xs:inline">
                                    Sign in
                                </span>
                                <AiOutlineLogin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link
                                to="/auth/signup"
                                className="btn btn-sm sm:btn-md bg-white hover:bg-lightGray text-brightPink border-2 border-brightPink rounded-full px-3 sm:px-5 hidden sm:flex transition-all hover:shadow-md"
                            >
                                Sign up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
