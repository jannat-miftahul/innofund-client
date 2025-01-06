import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {
    const { createNewUser, setUser, updateUserProfile, signInWithGoogle } =
        useContext(AuthContext) || {};
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        // console.log("Registering...");
        // get the form data
        const formData = new FormData(e.target);

        const name = formData.get("name");
        if (name.length < 4) {
            setError({ ...error, name: "Name must be at least 3 characters" });
            return;
        }
        const photo = formData.get("photo");
        const email = formData.get("email");
        const password = formData.get("password");
        if (password.length < 6) {
            setError({
                ...error,
                password: "Password must be at least 6 characters",
            });
            return;
        }
        // console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("User created successfully");
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                // console.log(errorCode, errorMessage);
                setError({ ...error, general: errorMessage });
                toast.error(errorMessage);
            });

        //
        createNewUser(email, password)
            .then((result) => {
                // console.log(result);
                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, email, photo, createdAt };
                // save new user info to database
                fetch("https://innofund-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("user created to db", data);
                        if (data.insertedId) {
                            console.log("User created successfully");
                            setUser(result.user);
                            updateUserProfile({
                                displayName: name,
                                photoURL: photo,
                            });
                        }
                    });
            })
            .catch((error) => {
                console.log(error);
            });
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

            // Save new user info to database
            fetch("https://innofund-server.vercel.app/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("user created to db", data);
                    if (data.insertedId) {
                        // console.log("User created successfully");
                        setUser(result.user);
                        toast.success("Logged in successfully");
                        navigate("/");
                    }
                });
        } catch (error) {
            setError({ ...error, general: error.message });
            toast.error(error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex justify-center items-start bg-lightGray py-10">
            <div className="card bg-white/45 w-full max-w-lg shrink-0 border border-darkBrown rounded-md p-10">
                <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                        <h3 className="text-xl font-semibold text-center pb-4">
                            Register for an account
                        </h3>
                        {/* name */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                        {error.name && (
                            <label className="label text-red-500 text-sm">
                                {error.name}
                            </label>
                        )}

                        {/* photo */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Photo URl
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                        {/* email */}
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

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <div
                            className="absolute inset-y-14 right-0 pr-3 flex items-center cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <AiFillEyeInvisible size={24} />
                            ) : (
                                <AiFillEye size={24} />
                            )}
                        </div>
                        {error.password && (
                            <p className="text-red-500 text-sm mt-2">
                                {error.password}
                            </p>
                        )}
                    </div>

                    <div className="form-control mt-6 space-y-2">
                        <button className="btn bg-skyBlue px-6 py-2 rounded-full">
                            Sign Up
                        </button>

                        {/* sign up with google */}
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline px-6 py-2 rounded-full"
                        >
                            <FcGoogle size={24} />
                            Sign Up with Google
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Already Have An Account?{" "}
                    <Link
                        to="/auth/signin"
                        className="text-red-500 font-semibold hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
