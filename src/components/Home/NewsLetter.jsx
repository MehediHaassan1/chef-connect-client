import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsLetter = () => {
    return (
        <div className="-z-50">
            <div className="h-full w-full">
                <div className="p-4 max-w-4xl mx-auto relative overflow-hidden mt-24">
                    <div className="shadow rounded-lg bg-white overflow-hidden w-full block px-8 md:px-16 lg:px-16 py-8">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden md:block md:w-1/2 px-4 md:pt-12">
                                <h1 className="text-2xl md:text-3xl text-[#050404] font-bold leading-tight tracking-tight mb-6 md:pr-16">
                                    Join our community for taking these benifits
                                </h1>

                                <ul>
                                    <li className="flex items-center gap-2">
                                        {" "}
                                        <FaCheckCircle className="text-[#053225]"/>
                                        collect & organize valuable code
                                        snippets
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheckCircle className="text-[#053225]"/> access from anywhere
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheckCircle className="text-[#053225]"/> share with others
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheckCircle className="text-[#053225]"/> filter snippets by
                                        category
                                    </li>
                                </ul>

                                <div className="mt-8">
                                    <Link
                                        to="/login"
                                        className="inline-flex align-items-center justify-center font-semibold focus:outline-none focus:shadow-outline rounded-lg px-4 py-3 text-[#eaeaea] bg-[#050404] mr-3 hover:opacity-75 shadow"
                                    >
                                        Login with Github
                                    </Link>
                                </div>
                            </div>
                            <div className="md:block lg:block md:w-1/2 px-4">
                                <div className="py-10">
                                    <div className="rounded bg-gray-200 p-4 md:px-6 md:py-10 border-t-8 border-[#053225]">
                                        <div className="mb-3 text-center">
                                            <div className="leading-none text-xl text-gray-700">
                                                Subscribe to our
                                            </div>
                                            <div className="leading-none sans-serif-3 text-4xl md:text-5xl text-[#050404] font-bold italic">
                                                Newsletter.
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-center mb-4">
                                            Get latest technical news straight{" "}
                                            <br />
                                            in your email inbox.
                                        </p>

                                        <div className="mb-4 relative">
                                            <input
                                                className="w-full block px-4 py-3 leading-normal border border-[#053225] text-gray-900 placeholder-gray-400 bg-white font-sans rounded-lg text-left appearance-none focus:outline-none focus:shadow-outline focus:border-blue-100 transition ease-in-out duration-150"
                                                id="username"
                                                type="email"
                                                placeholder="Email address..."
                                            />
                                            <template>
                                                <div className="text-red-600 mt-1 text-sm"></div>
                                            </template>
                                            <template>
                                                <svg
                                                    className=" text-red-600 fill-current mt-3 w-6 h-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z" />
                                                </svg>
                                            </template>
                                        </div>
                                        <button
                                            className="mb-4 shadow w-full bg-[#053225]  text-[#EAEAEA] font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Subscribe Me
                                        </button>

                                        <p className="text-gray-600 text-center text-xs">
                                            By registering you agree to our
                                            Terms &amp; Condition and Privacy
                                            Policy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
