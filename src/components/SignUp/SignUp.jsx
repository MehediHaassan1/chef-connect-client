import React, { useContext, useState } from "react";
import LoginOptions from "../LoginOptions";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const SignUp = () => {
    const [error, setError] = useState("");

    const { createUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError("");
        if (password !== confirmPassword) {
            setError("Password did't match");
            return;
        } else if (!/.*[A-Z]/.test(password)) {
            setError("Password must contain at least 1 uppercase");
            return;
        } else if (!/.*[a-z]/.test(password)) {
            setError("Password must contain at least 1 lowercase");
            return;
        } else if (!/.{6,}/.test(password)) {
            setError("Password must contain at least 6 characters");
            return;
        } else if (!/.*[0-9]/.test(password)) {
            setError("Password must contain at least 1 number");
            return;
        } else {
            createUser(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    if (user) {
                        toast.success("User created Successfully!");
                        navigate("/");
                    }
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                });
        }
    };

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="lg:flex justify-center">
                <div className="lg:w-1/2 xl:max-w-screen-sm">
                    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2
                            className="text-center text-4xl text-[#053225] font-display font-semibold xl:text-5xl
                    xl:text-bold"
                        >
                            Sign Up
                        </h2>
                        <div className="mt-12">
                            <form onSubmit={handleSingUp}>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Email Address
                                    </div>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#053225]"
                                        type="email"
                                        name="email"
                                        placeholder="mike@gmail.com"
                                        required
                                    />
                                </div>
                                <div className="mt-8">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>

                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#053225] "
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="mt-8">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Confirm Password
                                    </div>

                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#053225]"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        required
                                    />
                                </div>
                                <div className="my-4">
                                    <p className="text-red-600">{error}</p>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="bg-[#053225] text-gray-100 p-4 w-full rounded-bl-2xl rounded-tr-2xl tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg"
                                    >
                                        Signup
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6 grid grid-cols-3 items-center text-[#053225]">
                                <hr className="border-[#053225]" />
                                <p className="text-center text-sm">OR</p>
                                <hr className="border-[#053225]" />
                            </div>
                            <LoginOptions></LoginOptions>
                            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                Already have an account ?{" "}
                                <Link
                                    to="/login"
                                    className="cursor-pointer text-[#053225]"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
