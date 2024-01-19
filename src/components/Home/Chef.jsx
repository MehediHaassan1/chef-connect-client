import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
    const { _id, chefName, chefPicture, experienceYears, numOfRecipes, likes } =
        chef;
    return (
        <div
            id="app"
            className="bg-[#EAEAEA] w-128 h-60 rounded shadow-md flex card text-grey-darkest"
        >
            <div className="w-1/2 overflow-hidden">
                <img
                    className="w-full h-full rounded-l-sm object-cover hover:scale-125 duration-300"
                    src={chefPicture}
                    alt="Room Image"
                />
            </div>
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <h3 className="font-light mb-1 text-grey-darkest text-3xl lg:text-5xl">
                        {chefName}
                    </h3>
                    <div className="my-2  md:my-4">
                        <p className="pr-2   lg:text-lg">
                            Years of experience : {experienceYears} Years
                        </p>
                        <p className="pr-2   lg:text-lg">
                            Numbers of recipes : {numOfRecipes} recipes
                        </p>
                        <p className="pr-2   lg:text-lg">People Likes : {likes}</p>
                    </div>

                    <div className="">
                        <Link to={`/chef/${_id}`}>
                            <button className="py-2 px-6 text-xl custom-button hover:tracking-wider duration-300">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;
