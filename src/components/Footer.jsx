import { FaYoutube, FaHeart } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img
                                className="w-8 sm:w-10"
                                src="https://i.ibb.co.com/tq4DwNk/logo.png"
                                alt="logo"
                            />
                            <h4 className="font-pacifico text-xl sm:text-2xl text-neonGreen font-semibold">
                                Inno<span className="text-brightPink">Fund</span>
                            </h4>
                        </Link>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                            Empowering innovators to bring their ideas to life through community-driven crowdfunding.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <Link
                                to="https://twitter.com/"
                                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-skyBlue rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <RiTwitterXFill className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link
                                to="https://www.youtube.com/"
                                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-brightPink rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            <Link
                                to="https://www.facebook.com/"
                                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-softOrange rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <SiFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h6>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link to="/" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/all-campaigns" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    All Campaigns
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Services</h6>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link to="/add-campaign" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    Start Campaign
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-campaigns" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    My Campaigns
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-donations" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    My Donations
                                </Link>
                            </li>
                            <li>
                                <span className="text-sm sm:text-base text-gray-500 cursor-not-allowed">
                                    Premium Features
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h6 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Legal</h6>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <Link to="#" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm sm:text-base hover:text-neonGreen transition-colors">
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} InnoFund. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1">
                            Made with <FaHeart className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" /> for innovators
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
