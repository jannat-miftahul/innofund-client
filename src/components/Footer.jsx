import { useState } from "react";
import { FaYoutube, FaHeart, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill, RiSendPlaneFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { HiSparkles, HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
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
        { to: "https://www.instagram.com/", icon: <FaInstagram className="w-5 h-5" />, label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400" },
        { to: "https://www.youtube.com/", icon: <FaYoutube className="w-5 h-5" />, label: "YouTube", color: "hover:bg-red-600" },
        { to: "https://www.linkedin.com/", icon: <FaLinkedinIn className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-blue-700" },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brightPink/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-neonGreen/10 rounded-full blur-3xl" />

                {/* Floating particles */}
                <div className="absolute top-20 right-20 w-2 h-2 bg-brightPink rounded-full animate-pulse" />
                <div className="absolute top-40 left-32 w-3 h-3 bg-neonGreen rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            {/* Newsletter Section */}
            <div className="relative border-b border-gray-800/50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="relative bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-800/50 rounded-3xl p-8 sm:p-10 lg:p-12 backdrop-blur-sm border border-gray-700/50 overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brightPink/20 to-purple-600/20 rounded-full blur-3xl" />

                        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left max-w-lg">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                    <IoRocketSharp className="w-6 h-6 text-neonGreen animate-bounce" />
                                    <span className="text-neonGreen font-semibold text-sm uppercase tracking-wider">Stay Updated</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                                    Subscribe to our Newsletter
                                </h3>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    Get the latest campaigns, success stories, and exclusive offers delivered to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1 lg:w-80">
                                    <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brightPink focus:ring-2 focus:ring-brightPink/20 transition-all duration-300"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brightPink to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brightPink/30 hover:scale-105"
                                >
                                    {isSubscribed ? (
                                        <>
                                            <HiSparkles className="w-5 h-5" />
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
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                            <h4 className="font-pacifico text-2xl sm:text-3xl">
                                <span className="bg-gradient-to-r from-purple-400 to-brightPink bg-clip-text text-transparent">
                                    Inno
                                </span>
                                <span className="bg-gradient-to-r from-brightPink to-neonGreen bg-clip-text text-transparent">
                                    Fund
                                </span>
                            </h4>
                        </Link>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
                            Empowering innovators worldwide to bring their visionary ideas to life through community-driven crowdfunding.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-brightPink/20 transition-colors">
                                    <HiLocationMarker className="w-5 h-5 text-brightPink" />
                                </div>
                                <span>123 Innovation Street, Tech City</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-neonGreen/20 transition-colors">
                                    <HiMail className="w-5 h-5 text-neonGreen" />
                                </div>
                                <span>hello@innofund.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                    <HiPhone className="w-5 h-5 text-purple-400" />
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
                                    className={`w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white ${social.color}`}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h6 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <div className="w-1.5 h-6 bg-gradient-to-b from-brightPink to-purple-600 rounded-full" />
                            Quick Links
                        </h6>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-neonGreen group-hover:scale-150 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h6 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <div className="w-1.5 h-6 bg-gradient-to-b from-neonGreen to-lime-400 rounded-full" />
                            Services
                        </h6>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    {link.disabled ? (
                                        <span className="flex items-center gap-2 text-gray-600 cursor-not-allowed text-sm sm:text-base">
                                            <span className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
                                            {link.label}
                                        </span>
                                    ) : (
                                        <Link
                                            to={link.to}
                                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                        >
                                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-neonGreen group-hover:scale-150 transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-2">
                        <h6 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            <div className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full" />
                            Legal
                        </h6>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-neonGreen group-hover:scale-150 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-gray-800/50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} <span className="text-white font-medium">InnoFund</span>. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span>Made with</span>
                            <FaHeart className="text-brightPink w-4 h-4 animate-pulse" />
                            <span>for</span>
                            <span className="bg-gradient-to-r from-neonGreen to-lime-400 bg-clip-text text-transparent font-semibold">
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
