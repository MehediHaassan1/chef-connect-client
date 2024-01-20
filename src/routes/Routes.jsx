import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Login from "../components/Login/Login";
import App from "../App";
import ChefDetails from "../components/ChefDetails";
import NotFound from "../components/NotFound";
import Chefs from "../components/Chefs/Chefs";
import SignUp from "../components/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import ResetPassword from "../components/Login/ResetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "blog",
                element: <Blog></Blog>,
            },
            {
                path: "contact",
                element: <Contact></Contact>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "reset-password",
                element: <ResetPassword></ResetPassword>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "chef/:chefId",
                element: (
                    <PrivetRoute>
                        <ChefDetails></ChefDetails>
                    </PrivetRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/chef/${params.chefId}`),
            },
            {
                path: "/chefs",
                element: (
                    <PrivetRoute>
                        <Chefs></Chefs>
                    </PrivetRoute>
                ),
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
            },
        ],
    },
]);

export default router;
