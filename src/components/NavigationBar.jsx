import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavigationBar = () => {
    const [user, setUser] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const activeNavStyle = ({ isActive }) => {
        return {
            color: isActive ? "#053225" : "",
        };
    };

    const menus = [
        { path: "/", pathName: "Home" },
        { path: "/about", pathName: "about" },
        { path: "/blog", pathName: "blog" },
        { path: "/contact", pathName: "contact" },
    ];
    return (
        <div className="max-w-7xl mx-auto flex justify-between items-center px-1 lg:px-0 relative h-20 md:sticky md:top-0">
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
                    <div className="dropdown dropdown-end -z-10">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
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
    );
};

export default NavigationBar;
