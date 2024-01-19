import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="my-10">
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-center h-96">
                                    <h1 className="text-center text-7xl">
                                        404
                                    </h1>
                                </div>

                                <div>
                                    <h3 className="text-5xl">
                                        Look like you're lost
                                    </h3>

                                    <p className="text-xl">
                                        the page you are looking for not
                                        avaible!
                                    </p>
                                    <div className="mt-6">
                                        <Link
                                            to="/"
                                            className="py-2 px-4 custom-button"
                                        >
                                            Go to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
