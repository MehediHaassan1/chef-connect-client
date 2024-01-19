import React from "react";
import LoginOptions from "../LoginOptions";
import { Link } from "react-router-dom";

const SignUp = () => {
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
                            <form>
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
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#053225]"
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
                                <div className="mt-10">
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
                                <Link to='/login' className="cursor-pointer text-[#053225]">
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
