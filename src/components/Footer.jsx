import React from "react";
import logoAlt from "../assets/logo-alt.svg";
import { FaDribbble, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <section className="bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center text-white text-center">
                    <div className="p-6 md:w-1/4">
                        <img src={logoAlt} alt="logo" />
                    </div>
                    <div className="p-6 md:w-1/4">
                        <h1 className="capitalize text-2xl font-bold leading-none tracking-normal pb-5">
 Location
                        </h1>
                        <p>
                            Metropolitan City of Bari,
                            <br />
                            70121, Italy
                        </p>
                    </div>
                    <div className="p-6 md:w-1/4">
                        <h1 className="capitalize text-2xl font-bold  leading-none tracking-normal">
                    around the web
                        </h1>
                        <div className="flex justify-center py-5 ">
                            <span className="items-center rounded-full border-2 p-1 cursor-pointer mx-1">
                                <FaFacebook  className="w-6 h-6"/>
                            </span>
                            <span className="items-center rounded-full border-2 p-1 cursor-pointer mx-1">
                                <FaInstagram className="w-6 h-6"/>
                            </span>
                            <span className="items-center rounded-full border-2 p-1 cursor-pointer mx-1">
                                <FaXTwitter className="w-6 h-6"/>
                            </span>
                            <span className="items-center rounded-full border-2 p-1 cursor-pointer mx-1">
                            <FaDribbble className="w-6 h-6"/>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 md:w-1/4">
                        <h1 className="capitalize text-2xl font-bold leading-none tracking-normal pb-5">
                            About Chef Connect
                        </h1>
                        <p className="text-xl break-normal">
                            Start your connection with <span>Chef Connect</span>{" "}
                            today and let the aroma of delicious recipes fill
                            your kitchen!
                        </p>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 h-16">
                <p className="pt-5 text-center text-white">
                    Copyright © Reserved By Chef Connect{" "}
                    {new Date().getFullYear()}
                </p>
            </footer>
        </>
    );
};

export default Footer;
