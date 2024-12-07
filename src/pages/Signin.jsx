// import { useContext, useState } from "react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Signin = () => {
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Logging in...");
        // get the form data
        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        // console.log({ email, password });
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                toast.error(err.message);
            });
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate(location?.state ? location.state : "/");
        } catch (error) {
            setError({ ...error, general: error.message });
            toast.error(error.message);
        }
    };

    // const handleSignin = (e) => {
    //     e.preventDefault();

    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     signinUser(email, password)
    //         .then((result) => {
    //             console.log(result.user);

    //             // update last login time
    //             const lastSigninTime = result?.user?.metadata?.lastSignInTime;
    //             const loginInfo = { email, lastSigninTime };

    //             fetch(`https://espresso-server-gamma.vercel.app/users`, {
    //                 method: "PATCH",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify(loginInfo),
    //             })
    //                 .then((res) => res.json())
    //                 .then((data) => {
    //                     console.log("user login info updated", data);
    //                 });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    return (
        <div className="flex justify-center items-center bg-lightGray py-10">
            <div className="card bg-white/45 w-full max-w-lg shrink-0 border border-darkBrown rounded-md p-10">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <h3 className="text-xl font-semibold text-center pb-4">
                            Sign In to your account
                        </h3>

                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />

                        {error?.login && (
                            <label className="label text-red-500 text-sm">
                                {error.login}
                            </label>
                        )}

                        <label className="label">
                            <Link
                                to="/auth/forgot-password"
                                className="label-text-alt link link-hover text-vibrantOrange"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    <div className="form-control mt-6 space-y-2">
                        <button className="btn bg-skyBlue px-6 py-2 rounded-full">
                            Sign In
                        </button>

                        {/* Sign in with Google */}
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline px-6 py-2 rounded-full"
                        >
                            <FcGoogle size={24} />
                            Sign In with Google
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/auth/signup"
                        className="text-red-500 font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
