import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);

    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" replace  state={{ from: location }}></Navigate>;
};

export default PrivetRoute;
