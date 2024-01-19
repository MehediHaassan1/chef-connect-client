import React, { useEffect, useState } from "react";
import Chef from "../Chef";

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then((res) => res.json())
            .then((data) => setChefs(data));
    });
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="my-10 text-center text-4xl lg:text-5xl text-pacifico underline">
                All chef gather here
            </h1>
            <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2 lg:gap-10 lg:my-10 ">
                {chefs.map((chef) => (
                    <Chef key={chef._id} chef={chef}></Chef>
                ))}
            </div>
        </div>
    );
};

export default Chefs;
