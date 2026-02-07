import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useTheme } from "../../provider/ThemeProvider";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineArrowRight, HiOutlineUser, HiOutlinePhotograph } from "react-icons/hi";
import signupImg from "../../assets/undraw_welcome-cats_tw36.svg";

const Signup = () => {
    const { isDark } = useTheme();
    const { createNewUser, setUser, updateUserProfile, signInWithGoogle } =
        useContext(AuthContext) || {};
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError({});

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const photo = formData.get("photo");
        const email = formData.get("email");
        const password = formData.get("password");

        // Validation
        if (name.length < 4) {
            setError({ name: "Name must be at least 4 characters" });
            setIsLoading(false);
            return;
        }
        if (password.length < 6) {
            setError({ password: "Password must be at least 6 characters" });
            setIsLoading(false);
            return;
        }

        try {
            const result = await createNewUser(email, password);
            const user = result.user;
            setUser(user);

            await updateUserProfile({ displayName: name, photoURL: photo });

            // Save new user info to database
            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = { name, email, photo, createdAt };

            fetch("https://innofund-server.vercel.app/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            }).catch(console.error);

            toast.success("Account created successfully! 🎉");
            navigate("/");
        } catch (err) {
            setError({ general: err.message });
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle();
            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
                createdAt,
            };

            fetch("https://innofund-server.vercel.app/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            }).catch(console.error);

            toast.success("Welcome to InnoFund! 🎉");
            navigate("/");
        } catch (err) {
            setError({ general: err.message });
            toast.error(err.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className={`absolute inset-0 transition-colors duration-300 ${isDark
                ? "bg-gradient-to-br from-darkBg via-darkCard to-darkBg"
                : "bg-gradient-to-br from-lightGreen via-white to-paleYellow"
                }`} />

            {/* Floating Decorative Elements */}
            <div className={`absolute top-20 right-10 w-72 h-72 bg-gradient-to-br rounded-full blur-3xl animate-pulse ${isDark
                ? "from-neonGreen/10 to-skyBlue/10"
                : "from-neonGreen/20 to-skyBlue/20"
                }`} />
            <div className={`absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br rounded-full blur-3xl animate-pulse ${isDark
                ? "from-brightPink/10 to-softOrange/15"
                : "from-brightPink/20 to-softOrange/30"
                }`} style={{ animationDelay: "1s" }} />
            <div className={`absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br rounded-full blur-3xl animate-pulse ${isDark
                ? "from-skyBlue/10 to-lightPurple/15"
                : "from-skyBlue/20 to-lightPurple/30"
                }`} style={{ animationDelay: "2s" }} />

            {/* Grid Pattern Overlay */}
            <div className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.03]"}`} style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="relative max-w-screen-xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-12">
                {/* Left Side - Illustration & Welcome Text */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg order-2 lg:order-1">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        <span className={`bg-gradient-to-r bg-clip-text text-transparent ${isDark
                            ? "from-gray-200 via-gray-100 to-gray-200"
                            : "from-gray-800 via-gray-700 to-gray-800"
                            }`}>
                            Start your
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-neonGreen via-softOrange to-neonGreen bg-clip-text text-transparent">
                            innovation journey
                        </span>
                    </h1>

                    <p className={`text-lg mb-8 max-w-md ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        Create an account to start funding innovative projects and bring creative ideas to life.
                    </p>

                    {/* Illustration */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-neonGreen/20 to-skyBlue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            className="relative w-full max-w-md transform group-hover:scale-105 transition-transform duration-500"
                            src={signupImg}
                            alt="Sign up illustration"
                        />
                    </div>
                </div>

                {/* Right Side - Sign Up Form */}
                <div className="w-full max-w-md order-1 lg:order-2">
                    {/* Glassmorphism Card */}
                    <div className="relative group">
                        {/* Card Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neonGreen via-skyBlue to-brightPink rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                        <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl p-8 sm:p-10 transition-colors ${isDark
                            ? "bg-darkCard/70 border-darkBorder"
                            : "bg-white/70 border-white/50"
                            }`}>
                            {/* Form Header */}
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neonGreen to-skyBlue rounded-2xl shadow-lg shadow-neonGreen/30 mb-4">
                                    <HiOutlineUser className="w-8 h-8 text-white" />
                                </div>
                                <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}>Create Account</h2>
                                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Fill in your details to get started</p>
                            </div>

                            <form onSubmit={handleSignup} className="space-y-4">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                        <HiOutlineUser className="w-4 h-4 text-neonGreen" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-neonGreen focus:shadow-lg focus:shadow-neonGreen/10 ${isDark
                                            ? "bg-darkBg/50 border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                            : "bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
                                            }`}
                                        required
                                    />
                                    {error.name && (
                                        <p className="text-red-500 text-sm flex items-center gap-1">
                                            <span className="w-1 h-1 bg-red-500 rounded-full" />
                                            {error.name}
                                        </p>
                                    )}
                                </div>

                                {/* Photo URL Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                        <HiOutlinePhotograph className="w-4 h-4 text-neonGreen" />
                                        Photo URL
                                    </label>
                                    <input
                                        type="url"
                                        name="photo"
                                        placeholder="https://example.com/photo.jpg"
                                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-neonGreen focus:shadow-lg focus:shadow-neonGreen/10 ${isDark
                                            ? "bg-darkBg/50 border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                            : "bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
                                            }`}
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                        <HiOutlineMail className="w-4 h-4 text-neonGreen" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-neonGreen focus:shadow-lg focus:shadow-neonGreen/10 ${isDark
                                            ? "bg-darkBg/50 border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                            : "bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
                                            }`}
                                        required
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                        <HiOutlineLockClosed className="w-4 h-4 text-neonGreen" />
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Create a strong password"
                                            className={`w-full px-4 py-3 pr-12 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:border-neonGreen focus:shadow-lg focus:shadow-neonGreen/10 ${isDark
                                                ? "bg-darkBg/50 border-darkBorder text-white placeholder-gray-500 focus:bg-darkBg"
                                                : "bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
                                                }`}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isDark
                                                ? "text-gray-500 hover:text-neonGreen"
                                                : "text-gray-500 hover:text-neonGreen"
                                                }`}
                                        >
                                            {showPassword ? (
                                                <AiFillEyeInvisible className="w-5 h-5" />
                                            ) : (
                                                <AiFillEye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                    {error.password && (
                                        <p className="text-red-500 text-sm flex items-center gap-1">
                                            <span className="w-1 h-1 bg-red-500 rounded-full" />
                                            {error.password}
                                        </p>
                                    )}
                                </div>

                                {/* General Error */}
                                {error.general && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                                        <p className="text-red-600 text-sm text-center">{error.general}</p>
                                    </div>
                                )}

                                {/* Sign Up Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative w-full py-4 bg-gradient-to-r from-neonGreen to-softOrange text-white font-semibold rounded-xl shadow-lg shadow-neonGreen/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neonGreen/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-softOrange to-neonGreen opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Creating account...
                                            </>
                                        ) : (
                                            <>
                                                Create Account
                                                <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </span>
                                </button>

                                {/* Divider */}
                                <div className="relative my-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className={`w-full border-t ${isDark ? "border-darkBorder" : "border-gray-200"}`} />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className={`px-4 ${isDark ? "bg-darkCard/70 text-gray-400" : "bg-white/70 text-gray-500"}`}>or continue with</span>
                                    </div>
                                </div>

                                {/* Google Sign Up Button */}
                                <button
                                    type="button"
                                    onClick={handleGoogleSignIn}
                                    className={`group relative w-full py-4 border-2 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDark
                                        ? "bg-darkBg border-darkBorder text-gray-300 hover:border-gray-500"
                                        : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                                        }`}
                                >
                                    <span className="relative flex items-center justify-center gap-3">
                                        <FcGoogle className="w-6 h-6" />
                                        Continue with Google
                                    </span>
                                </button>
                            </form>

                            {/* Sign In Link */}
                            <p className={`text-center mt-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                Already have an account?{" "}
                                <Link
                                    to="/auth/signin"
                                    className="font-semibold bg-gradient-to-r from-neonGreen to-softOrange bg-clip-text text-transparent hover:from-softOrange hover:to-neonGreen transition-all duration-300"
                                >
                                    Sign in instead
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Security Note */}
                    <p className={`text-center text-xs mt-6 flex items-center justify-center gap-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                        <HiOutlineLockClosed className="w-3 h-3" />
                        Your data is protected with industry-standard encryption
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
