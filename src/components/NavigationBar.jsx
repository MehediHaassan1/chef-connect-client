import Hamburger from "hamburger-react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { UserContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const NavigationBar = () => {
    const { user, logOutUser } = useContext(UserContext);
    const [isOpen, setOpen] = useState(false);
    const [optionsOpen, setOptionsOpen] = useState(false);

    const activeNavStyle = ({ isActive }) => {
        return {
            color: isActive ? "#053225" : "",
        };
    };

    const handleUserOptions = () => {
        setOptionsOpen(!optionsOpen);
    };

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success("Sign out successful");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    //

    const menus = [
        { path: "/", pathName: "Home" },
        { path: "/chefs", pathName: "chefs" },
        { path: "/about", pathName: "about" },
        { path: "/blog", pathName: "blog" },
        { path: "/contact", pathName: "contact" },
    ];
    return (
        <div className="md:sticky md:top-0 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-1 lg:px-0 relative h-20 ">
                <div className="md:hidden">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        color="#053225"
                        duration={0.5}
                    />
                </div>
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-16 lg:h-20" />
                    </Link>
                </div>
                <div
                    className={`absolute flex flex-col w-full bg-[#050404]  duration-500  ease-out  text-center ${
                        isOpen ? "left-0  top-20" : "left-[-100vw]  top-20"
                    } 
                    md:static md:top-0 md:bg-transparent md:flex-row md:w-fit
                  z-[1000] `}
                >
                    {menus.map((menu) => (
                        <NavLink
                            style={activeNavStyle}
                            key={menu.pathName}
                            to={menu.path}
                            className="my-2 py-2 md:my-0 md:py-0 md:mx-4 text-lg capitalize text-[#EAEAEA] md:text-[#0D1115] font-bold"
                        >
                            {menu.pathName}
                        </NavLink>
                    ))}
                </div>
                <div>
                    {user ? (
                        <div
                            className="relative cursor-pointer"
                            onClick={handleUserOptions}
                        >
                            <img
                                title={user.displayName || "John Doe"}
                                className="w-10 h-10 rounded-full"
                                alt=""
                                src={
                                    user.photoURL ||
                                    "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1705724506~exp=1705725106~hmac=a583c2e577ed906b92b0dab2aabba11a49900639df857f4801aa12b52c34dd86"
                                }
                            />
                            <div
                                className={`mt-4 flex flex-col absolute bg-slate-400 p-4 rounded ${
                                    optionsOpen
                                        ? "opacity-100 h-fit"
                                        : "opacity-0 h-0 p-0"
                                } duration-500 z-50 -left-12`}
                            >
                                <Link>Profile</Link>
                                <Link>Settings</Link>
                                <Link onClick={handleLogOut}>Logout</Link>
                            </div>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="py-2 px-6 bg-[#053225] rounded-bl-2xl rounded-tr-2xl text-[#D5F2E3]"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
