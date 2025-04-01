import { FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10 border border-t-gray-400">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to="/about" className="link link-hover">
                        About us
                    </Link>
                    <Link to="/contact" className="link link-hover">
                        Contact
                    </Link>
                    <Link to="/all-campaigns" className="link link-hover">
                        Campaigns
                    </Link>
                    <Link to="/my-donations" className="link link-hover">
                        Donations
                    </Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img
                        className="w-8"
                        src="https://i.ibb.co.com/tq4DwNk/logo.png"
                        alt="logo"
                    />
                    <p>
                        <span className="font-pacifico text-xl">InnoFund</span>
                        <br />
                        Providing a platform for innovators to fund their
                        projects
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://twitter.com/" className="hover:text-brightPink">
                            <RiTwitterXFill size={24} />
                        </Link>
                        <Link to="https://www.youtube.com/" className="hover:text-brightPink">
                            <FaYoutube size={24} />
                        </Link>
                        <Link to="https://www.facebook.com/" className="hover:text-brightPink">
                            <SiFacebook size={24} />
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
