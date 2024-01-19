import React, { useEffect, useState } from "react";
import heroBanner from "../../assets/images/hero-banner.png";
import Chefs from "./Chefs";
import NewsLetter from "./NewsLetter";

const Home = () => {
    
    return (
        <div className="min-h-screen bg-[#EAEAEA]">
            <div className="h-screen max-w-7xl mx-auto md:flex md:justify-between md:items-center overflow-hidden">
                <div className="md:w-1/2">
                    <h1 className="text-xl lg:text-2xl">Hey there!</h1>
                    <h1 className="text-4xl text-pacifico my-4 lg:text-5xl">
                        Alchemy on a Plate
                        <br />
                        With our
                        <br />
                        best chef's
                        <br />
                        Culinary Canvas
                    </h1>
                    <p className="text-lg lg:w-[450px] lg:leading-relaxed">
                        Embark on a Culinary Journey with Chef. Where Artistry
                        Meets Flavor, and Every Dish Tells a Story. Indulge in
                        the Extraordinary, Savor the Unforgettable – Welcome to
                        a World of Exquisite Tastes.
                    </p>
                    <button className="py-2 px-6 text-xl custom-button hover:tracking-wider duration-300 my-4">
                        Lets explore
                    </button>
                </div>
                <div className="md:w-1/2 lg:flex justify-end items-center">
                    <img
                        src={heroBanner}
                        alt="hero banner"
                        className="lg:w-3/4"
                    />
                </div>
            </div>
            <Chefs></Chefs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
