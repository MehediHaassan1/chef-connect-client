import React from "react";
import { Link } from "react-router-dom";

const CoomingSoon = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div
                className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center text-center text-white my-10"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D)",
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

                <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
                    <div className="sm:border-r-2">
                        <div className="flex items-end">
                            <div className="">
                                <div className="border text-center h-24 w-24 flex items-center justify-center">
                                    <div>
                                        <p className="">Hours</p>
                                        <p className="text-xl sm:text-2xl font-bold">
                                            16
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white text-gray-900 text-center h-24 w-24 flex items-center justify-center">
                                    <div>
                                        <p className="">Mins</p>
                                        <p className="text-xl sm:text-2xl font-bold">
                                            39
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-[#053225] text-center h-24 w-24 flex items-center justify-center">
                                    <div>
                                        <p className="">15</p>
                                        <p className="text-xl sm:text-2xl font-bold">
                                            Secs
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-800 text-center h-48 w-48 flex items-center justify-center">
                                <div>
                                    <p className="">Days</p>
                                    <p className="text-xl sm:text-3xl font-bold">
                                        150
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-left md:text-right flex items-center">
                        <div className="mb-4 text-white">
                            <svg
                                height="35px"
                                className="mb-2"
                                fill="#053225"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 32 32"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <g id="right_x5F_quote">
                                        <g>
                                            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                                            <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className="mt-2 text-base leading-6">
                                The future is just around the corner. Brace
                                yourself for something extraordinary. See you at
                                the launch!
                            </p>
                            <div className="text-sm mt-5">
                                <Link
                                    to="/"
                                    className="font-medium leading-none text-[#053225] hover:text-white transition duration-500 ease-in-out"
                                >
                                    Mehedi Hassan Barat
                                </Link>
                                <p>CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoomingSoon;
