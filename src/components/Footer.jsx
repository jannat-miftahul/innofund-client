import { useState } from "react";
import { useTheme } from "../provider/ThemeProvider";
import { FaYoutube, FaHeart, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill, RiSendPlaneFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/innofund-logo.png"

const Footer = () => {
    const { isDark } = useTheme();
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail("");
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const quickLinks = [
        { to: "/", label: "Home" },
        { to: "/all-campaigns", label: "All Campaigns" },
        { to: "/about", label: "About Us" },
        { to: "/contact", label: "Contact" },
    ];

    const serviceLinks = [
        { to: "/add-campaign", label: "Start Campaign" },
        { to: "/my-campaigns", label: "My Campaigns" },
        { to: "/my-donations", label: "My Donations" },
        { to: "#", label: "Premium Features", disabled: true },
    ];

    const legalLinks = [
        { to: "#", label: "Terms of Service" },
        { to: "#", label: "Privacy Policy" },
        { to: "#", label: "Cookie Policy" },
        { to: "#", label: "Refund Policy" },
    ];

    const socialLinks = [
        { to: "https://twitter.com/", icon: <RiTwitterXFill className="w-5 h-5" />, label: "Twitter", color: "hover:bg-sky-500" },
        { to: "https://www.facebook.com/", icon: <SiFacebook className="w-5 h-5" />, label: "Facebook", color: "hover:bg-blue-600" },
        { to: "https://www.instagram.com/", icon: <FaInstagram className="w-5 h-5" />, label: "Instagram", color: "hover:bg-gradient-to-br hover:from-brightPink hover:via-coral hover:to-softOrange" },
        { to: "https://www.youtube.com/", icon: <FaYoutube className="w-5 h-5" />, label: "YouTube", color: "hover:bg-red-600" },
        { to: "https://www.linkedin.com/", icon: <FaLinkedinIn className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-blue-700" },
    ];

    return (
        <footer className={`relative bg-gradient-to-b overflow-hidden border-t transition-colors duration-300 ${isDark
            ? "from-darkBg via-darkCard to-black text-gray-300 border-darkBorder"
            : "from-lightPink via-lightYellow to-lightPurple text-gray-600 border-gray-100"
            }`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? "bg-brightPink/5" : "bg-brightPink/10"}`} />
                <div className={`absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl ${isDark ? "bg-violet/5" : "bg-violet/10"}`} />
                <div className={`absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl ${isDark ? "bg-neonGreen/5" : "bg-neonGreen/10"}`} />

                {/* Floating particles */}
                <div className="absolute top-20 right-20 w-3 h-3 bg-brightPink/20 rounded-full animate-pulse" />
                <div className="absolute top-40 left-32 w-4 h-4 bg-neonGreen/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-violet/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            {/* Newsletter Section */}
            <div className="relative">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className={`relative rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border overflow-hidden transition-all duration-300 ${isDark
                        ? "bg-darkCard border-darkBorder shadow-black/20"
                        : "bg-white shadow-gray-100/50 border-gray-100"
                        }`}>
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brightPink/5 to-coral/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-neonGreen/5 to-skyBlue/5 rounded-full blur-3xl" />

                        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left max-w-lg">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${isDark ? "bg-neonGreen/20" : "bg-neonGreen/10"}`}>
                                        <IoRocketSharp className="w-4 h-4 text-neonGreen animate-bounce" />
                                    </span>
                                    <span className="text-neonGreen font-bold text-sm uppercase tracking-wider">Stay Updated</span>
                                </div>
                                <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                                    Subscribe to our Newsletter
                                </h3>
                                <p className={`text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                    Get the latest campaigns, success stories, and exclusive offers delivered to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1 lg:w-80">
                                    <HiMail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:border-brightPink focus:bg-transparent focus:ring-4 focus:ring-brightPink/10 transition-all duration-300 shadow-sm ${isDark
                                            ? "bg-darkBg border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                            : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white"
                                            }`}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brightPink to-coral text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brightPink/30 hover:scale-105"
                                >
                                    {isSubscribed ? (
                                        <>
                                            <IoCheckmarkDoneCircleOutline className="w-5 h-5" />
                                            Subscribed!
                                        </>
                                    ) : (
                                        <>
                                            Subscribe
                                            <RiSendPlaneFill className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                            <img
                                src={logo}
                                alt="InnoFund Logo"
                                className="h-10 sm:h-12 w-auto object-contain"
                            />
                        </Link>

                        <p className={`text-sm sm:text-base leading-relaxed mb-6 max-w-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            Empowering innovators worldwide to bring their visionary ideas to life through community-driven crowdfunding.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-8">
                            <div className={`flex items-center gap-3 text-sm transition-colors group ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                                <div className={`w-10 h-10 rounded-xl border shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-brightPink/10 group-hover:border-brightPink/20 ${isDark ? "bg-darkCard border-darkBorder" : "bg-white border-gray-100"}`}>
                                    <HiLocationMarker className={`w-5 h-5 transition-colors ${isDark ? "text-gray-500 group-hover:text-brightPink" : "text-gray-400 group-hover:text-brightPink"}`} />
                                </div>
                                <span>123 Innovation Street, Tech City</span>
                            </div>
                            <div className={`flex items-center gap-3 text-sm transition-colors group ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                                <div className={`w-10 h-10 rounded-xl border shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-neonGreen/10 group-hover:border-neonGreen/20 ${isDark ? "bg-darkCard border-darkBorder" : "bg-white border-gray-100"}`}>
                                    <HiMail className={`w-5 h-5 transition-colors ${isDark ? "text-gray-500 group-hover:text-neonGreen" : "text-gray-400 group-hover:text-neonGreen"}`} />
                                </div>
                                <span>hello@innofund.com</span>
                            </div>
                            <div className={`flex items-center gap-3 text-sm transition-colors group ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                                <div className={`w-10 h-10 rounded-xl border shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-violet/10 group-hover:border-violet/20 ${isDark ? "bg-darkCard border-darkBorder" : "bg-white border-gray-100"}`}>
                                    <HiPhone className={`w-5 h-5 transition-colors ${isDark ? "text-gray-500 group-hover:text-violet" : "text-gray-400 group-hover:text-violet"}`} />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    to={social.to}
                                    aria-label={social.label}
                                    className={`w-11 h-11 border shadow-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white hover:border-transparent ${isDark
                                        ? "bg-darkCard border-darkBorder text-gray-400"
                                        : "bg-white border-gray-100 text-gray-500"
                                        } ${social.color}`}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h6 className={`font-bold text-lg mb-6 flex items-center gap-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                            <div className="w-1 h-6 bg-gradient-to-b from-brightPink to-coral rounded-full" />
                            Quick Links
                        </h6>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className={`group flex items-center gap-2 transition-colors text-sm sm:text-base ${isDark ? "text-gray-400 hover:text-brightPink" : "text-gray-500 hover:text-brightPink"}`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full group-hover:bg-brightPink group-hover:scale-150 transition-all duration-300 ${isDark ? "bg-gray-600" : "bg-gray-300"}`} />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h6 className={`font-bold text-lg mb-6 flex items-center gap-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                            <div className="w-1 h-6 bg-gradient-to-b from-neonGreen to-lime-400 rounded-full" />
                            Services
                        </h6>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    {link.disabled ? (
                                        <span className={`flex items-center gap-2 cursor-not-allowed text-sm sm:text-base ${isDark ? "text-gray-600" : "text-gray-400"}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`} />
                                            {link.label}
                                        </span>
                                    ) : (
                                        <Link
                                            to={link.to}
                                            className={`group flex items-center gap-2 transition-colors text-sm sm:text-base ${isDark ? "text-gray-400 hover:text-neonGreen" : "text-gray-500 hover:text-neonGreen"}`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full group-hover:bg-neonGreen group-hover:scale-150 transition-all duration-300 ${isDark ? "bg-gray-600" : "bg-gray-300"}`} />
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-2">
                        <h6 className={`font-bold text-lg mb-6 flex items-center gap-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                            <div className="w-1 h-6 bg-gradient-to-b from-violet to-teal rounded-full" />
                            Legal
                        </h6>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className={`group flex items-center gap-2 transition-colors text-sm sm:text-base ${isDark ? "text-gray-400 hover:text-violet" : "text-gray-500 hover:text-violet"}`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full group-hover:bg-violet group-hover:scale-150 transition-all duration-300 ${isDark ? "bg-gray-600" : "bg-gray-300"}`} />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={`relative border-t backdrop-blur-sm ${isDark ? "border-darkBorder bg-darkCard/50" : "border-gray-100 bg-white/50"}`}>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className={`text-sm text-center sm:text-left ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            © {new Date().getFullYear()} <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>InnoFund</span>. All rights reserved.
                        </p>
                        <div className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            <span>Made with</span>
                            <FaHeart className="text-brightPink w-4 h-4 animate-pulse" />
                            <span>for</span>
                            <span className="bg-gradient-to-r from-neonGreen to-lime-500 bg-clip-text text-transparent font-bold">
                                innovators worldwide
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
