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
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
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
                        InnoFund
                        <br />
                        Providing a platform for innovators to fund their
                        projects
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link>
                            <RiTwitterXFill size={24} />
                        </Link>
                        <Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </Link>
                        <Link>
                            <SiFacebook size={24} />
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
