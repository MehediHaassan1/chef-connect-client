import React from "react";
import google from '../assets/google.png'
import github from '../assets/github.png'

const LoginOptions = () => {
    return (
        <div>
            <div className="mt-10">
                <button
                    className="text-[#053225] p-4 w-full rounded-bl-2xl rounded-tr-2xl tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg border-2 border-[#053225] flex items-center justify-center gap-3"
                >
                    <img className="w-8 h-8" src={google} alt="google" />
                    Login with Google
                </button>
            </div>
            <div className="mt-10">
                <button
                    className="text-[#053225]  p-4 w-full rounded-bl-2xl rounded-tr-2xl tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg border-2 border-[#053225] flex items-center justify-center gap-3"
                >
                    <img className="w-8 h-8" src={github} alt="github" />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default LoginOptions;
