import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    const [slicedChefs, setSlicedChefs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then((res) => res.json())
            .then((data) => setSlicedChefs(data));
    });

    useEffect(() => {
        setChefs(slicedChefs.slice(0, 6));
    }, [slicedChefs]);

    return (
        <div className="min-h-screen max-w-7xl mx-auto">
            <h1 className="text-center text-4xl lg:text-5xl text-pacifico underline">
                Best Chef, Best Cook
            </h1>
            <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2 lg:gap-10 lg:mt-10 ">
                {chefs.map((chef) => (
                    <Chef key={chef._id} chef={chef}></Chef>
                ))}
            </div>
        </div>
    );
};

export default Chefs;
