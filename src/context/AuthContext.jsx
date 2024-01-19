import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.confiq";

export const UserContext = createContext(null);

const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = { user, createUser };
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export default AuthContext;
