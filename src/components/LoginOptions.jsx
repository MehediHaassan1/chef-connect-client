import React, { useContext } from "react";
import google from "../assets/google.png";
import github from "../assets/github.png";
import { UserContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const LoginOptions = () => {
    const { googleLogIn, githubSignIn } = useContext(UserContext);

    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogIn()
            .then((result) => {
                const user = result.user;
                if (user) {
                    toast.success("Logged In Successfully!");
                    navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    };

    const handleGithubLogin = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                if (user) {
                    toast.success("Logged In Successfully!");
                    navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    };

    return (
        <div>
            <div className="mt-10">
                <button
                    onClick={handleGoogleLogin}
                    className="text-[#053225] p-4 w-full rounded-bl-2xl rounded-tr-2xl tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg border-2 border-[#053225] flex items-center justify-center gap-3"
                >
                    <img className="w-8 h-8" src={google} alt="google" />
                    Google
                </button>
            </div>
            <div className="mt-10">
                <button
                    onClick={handleGithubLogin}
                    className="text-[#053225]  p-4 w-full rounded-bl-2xl rounded-tr-2xl tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg border-2 border-[#053225] flex items-center justify-center gap-3"
                >
                    <img className="w-8 h-8" src={github} alt="github" />
                    Github
                </button>
            </div>
        </div>
    );
};

export default LoginOptions;
