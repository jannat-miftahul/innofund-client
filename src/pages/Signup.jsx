
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";




import { useEffect } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { auth, googleProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const authData = getAuth(app);



const Signup = () => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(loading, user);

    const createNewUser = async (email, password) => {
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        setUser(result.user);
        return result;
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(authData, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(authData);
    };

    const updateUserProfile = async (profile) => {
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, profile);
            setUser({ ...auth.currentUser, ...profile });
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        signInWithGoogle,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authData, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);






    // const {createNewUser, setUser, updateUserProfile, signInWithGoogle} = useContext(AuthContext) || {};
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registering...");
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
        console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
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
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate("/");
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
                <form onSubmit={handleSubmit} className="card-body">
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
