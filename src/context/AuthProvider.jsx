import { useCallback, useEffect, useState } from "react";

import AuthContext from "./AuthContext";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER_KEY = "auth_user";


function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [loading, setLoading] = useState(true);


    /*
    ============================================================
        Restore Authentication
    ============================================================
    */

    useEffect(() => {
        try {
            const accessToken =
                localStorage.getItem(ACCESS_TOKEN_KEY);

            const refreshToken =
                localStorage.getItem(REFRESH_TOKEN_KEY);

            const savedUser =
                localStorage.getItem(USER_KEY);


            if (
                accessToken &&
                refreshToken
            ) {
                setIsAuthenticated(true);

                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                }
            }
        } catch (error) {
            console.error(
                "Failed to restore authentication:",
                error
            );

            localStorage.removeItem(
                ACCESS_TOKEN_KEY
            );

            localStorage.removeItem(
                REFRESH_TOKEN_KEY
            );

            localStorage.removeItem(
                USER_KEY
            );

            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    }, []);


    /*
    ============================================================
        Login
    ============================================================
    */

    const login = useCallback(
        ({ user, tokens }) => {

            if (!tokens?.access) {
                console.error(
                    "Access token is missing."
                );

                return false;
            }


            localStorage.setItem(
                ACCESS_TOKEN_KEY,
                tokens.access
            );


            if (tokens.refresh) {
                localStorage.setItem(
                    REFRESH_TOKEN_KEY,
                    tokens.refresh
                );
            }


            if (user) {
                localStorage.setItem(
                    USER_KEY,
                    JSON.stringify(user)
                );

                setUser(user);
            }


            setIsAuthenticated(true);

            return true;
        },
        []
    );


    /*
    ============================================================
        Logout
    ============================================================
    */

    const logout = useCallback(() => {

        localStorage.removeItem(
            ACCESS_TOKEN_KEY
        );

        localStorage.removeItem(
            REFRESH_TOKEN_KEY
        );

        localStorage.removeItem(
            USER_KEY
        );


        setUser(null);

        setIsAuthenticated(false);

    }, []);


    /*
    ============================================================
        Update User
    ============================================================
    */

    const updateUser = useCallback(
        (updatedUser) => {

            setUser(updatedUser);

            localStorage.setItem(
                USER_KEY,
                JSON.stringify(updatedUser)
            );

        },
        []
    );


    /*
    ============================================================
        Context Value
    ============================================================
    */

    const value = {
        user,
        isAuthenticated,
        loading,

        login,
        logout,
        updateUser,
    };


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;