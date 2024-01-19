import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Recipes from "./Home/Recipes";

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const {
        _id,
        chefName,
        chefPicture,
        experienceYears,
        numOfRecipes,
        likes,
        shortBio,
        recipes,
    } = chefDetails;
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="my-10 text-center text-4xl lg:text-5xl text-pacifico underline">
                Chef's Details
            </h1>
            <div
                id="app"
                className="bg-[#EAEAEA] w-128 h-60 rounded shadow-md flex card text-grey-darkest"
            >
                <div className="w-1/2 overflow-hidden">
                    <img
                        className="w-full h-full rounded-l-sm object-cover object-top hover:scale-110 duration-300"
                        src={chefPicture}
                        alt="Room Image"
                    />
                </div>
                <div className="w-full flex flex-col">
                    <div className="p-4 pb-0 flex-1">
                        <h3 className="font-light mb-1 text-grey-darkest text-3xl lg:text-5xl">
                            {chefName}
                        </h3>
                        <div>
                            <p className="lg:text-lg">{shortBio}</p>
                        </div>
                        <div className="my-2  md:my-4">
                            <p className="lg:text-lg">
                                Years of experience : {experienceYears} Years
                            </p>
                            <p className="lg:text-lg">
                                Numbers of recipes : {numOfRecipes} recipes
                            </p>
                            <p className="lg:text-lg">People Likes : {likes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <h1 className="my-10 text-center text-4xl lg:text-5xl text-pacifico underline">
                    Chef's Recipes
                </h1>
                <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
                    {recipes.map((recipe) => (
                        <Recipes
                            key={recipe.recipeName}
                            recipe={recipe}
                        ></Recipes>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;
