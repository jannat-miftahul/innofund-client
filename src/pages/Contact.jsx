import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { useTheme } from "../provider/ThemeProvider";

const Contact = () => {
    const { isDark } = useTheme();

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                    isDark ? "bg-brightPink/10 text-brightPink border border-brightPink/20" : "bg-brightPink/10 text-brightPink border border-brightPink/20"
                }`}>
                    Get in Touch
                </span>
                <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Contact <span className="text-brightPink">Us</span>
                </h1>
                <p className={`max-w-2xl mx-auto text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info Cards */}
                <div className="lg:col-span-1 space-y-6">
                    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                        isDark ? "bg-darkCard border-darkBorder hover:border-brightPink/30" : "bg-white border-gray-100 hover:border-brightPink/30"
                    }`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brightPink to-coral flex items-center justify-center mb-4">
                            <HiMail className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Email</h3>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>hello@innofund.com</p>
                    </div>

                    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                        isDark ? "bg-darkCard border-darkBorder hover:border-neonGreen/30" : "bg-white border-gray-100 hover:border-neonGreen/30"
                    }`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neonGreen to-green-500 flex items-center justify-center mb-4">
                            <HiPhone className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Phone</h3>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>+1 (555) 123-4567</p>
                    </div>

                    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                        isDark ? "bg-darkCard border-darkBorder hover:border-violet/30" : "bg-white border-gray-100 hover:border-violet/30"
                    }`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet to-purple-600 flex items-center justify-center mb-4">
                            <HiLocationMarker className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Location</h3>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>123 Innovation Street, Tech City</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={`lg:col-span-2 p-8 rounded-2xl border ${
                    isDark ? "bg-darkCard border-darkBorder" : "bg-white border-gray-100"
                }`}>
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className={`label ${isDark ? "text-gray-300" : ""}`}>
                                    <span className={`label-text font-medium ${isDark ? "text-gray-300" : ""}`}>Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    className={`input input-bordered w-full rounded-xl ${
                                        isDark ? "bg-darkBg border-darkBorder text-white placeholder-gray-500 focus:border-brightPink" : ""
                                    }`}
                                />
                            </div>
                            <div className="form-control">
                                <label className={`label ${isDark ? "text-gray-300" : ""}`}>
                                    <span className={`label-text font-medium ${isDark ? "text-gray-300" : ""}`}>Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className={`input input-bordered w-full rounded-xl ${
                                        isDark ? "bg-darkBg border-darkBorder text-white placeholder-gray-500 focus:border-brightPink" : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className={`label ${isDark ? "text-gray-300" : ""}`}>
                                <span className={`label-text font-medium ${isDark ? "text-gray-300" : ""}`}>Subject</span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="How can we help?"
                                className={`input input-bordered w-full rounded-xl ${
                                    isDark ? "bg-darkBg border-darkBorder text-white placeholder-gray-500 focus:border-brightPink" : ""
                                }`}
                            />
                        </div>
                        <div className="form-control">
                            <label className={`label ${isDark ? "text-gray-300" : ""}`}>
                                <span className={`label-text font-medium ${isDark ? "text-gray-300" : ""}`}>Message</span>
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your message..."
                                className={`textarea textarea-bordered w-full rounded-xl resize-none ${
                                    isDark ? "bg-darkBg border-darkBorder text-white placeholder-gray-500 focus:border-brightPink" : ""
                                }`}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brightPink to-coral text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-brightPink/30 transition-all duration-300 hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
