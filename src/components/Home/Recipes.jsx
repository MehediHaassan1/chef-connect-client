import React, { useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import toast from "react-hot-toast";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Recipes = ({ recipe }) => {
    const { recipeName, ingredients, cookingMethod, rating } = recipe;

    const [favorite, setFavorite] = useState(false);
    const handleFavourite = () => {
        setFavorite(!favorite);
        toast.success('Favorite Listed')
    };

    return (
        <div className="border rounded hover:-translate-y-4 duration-300 relative h-96 w-full">
            <h1 className="text-lg lg:text-3xl p-3 text-pacifico ">
                {recipeName}
            </h1>
            <div className="grid grid-cols-2 gap-x-3 my-2 p-3">
                {ingredients.map((item, index) => (
                    <p key={index} className="hover:bg-gray-200 p-1">
                        {index + 1}. {item}
                    </p>
                ))}
            </div>
            <p className="p-3">
                <span className="lg:text-lg font-bold">Cooking Method :</span>{" "}
                {cookingMethod}
            </p>
            <div className="flex justify-between items-center absolute bottom-0 w-full p-3">
                <ReactStarsRating
                    value={rating}
                    isHalf={true}
                    className="flex gap-1"
                    size={20}
                    isEdit={false}
                />
                <button
                    onClick={handleFavourite}
                    disabled={favorite ? true : false}
                >
                    {favorite ? (
                        <FaHeart className="w-5 h-5" />
                    ) : (
                        <FaRegHeart className="w-5 h-5" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Recipes;
