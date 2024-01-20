import React, { useContext, useState } from "react";
import { UserContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ResetPassword = () => {
    const [error, setError] = useState("");
    const { resetPassword } = useContext(UserContext);

    const handlePasswordReset = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;

        setError("");
        resetPassword(email)
            .then(() => {
                toast.success("Password reset email sent!");
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="lg:flex justify-center">
                <div className="lg:w-1/2 xl:max-w-screen-sm">
                    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2
                            className="text-center text-4xl text-[#053225] font-display font-semibold xl:text-5xl
                    xl:text-bold"
                        >
                            Password Reset
                        </h2>
                        <div className="mt-12">
                            <form onSubmit={handlePasswordReset}>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Email Address
                                    </div>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#053225]"
                                        type="email"
                                        name="email"
                                        placeholder="mike@gmail.com"
                                        required
                                    />
                                </div>

                                <div className="my-4">
                                    <p className="text-red-600">{error}</p>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="bg-[#053225] text-gray-100 p-4 w-full rounded-bl-2xl rounded-tr-2xl tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
