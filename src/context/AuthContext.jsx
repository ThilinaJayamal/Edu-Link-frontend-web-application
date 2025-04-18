import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getAuthState();
    }, []);

    const getUser = async () => {
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.get("http://localhost:5000/api/user/data");
            setUser(res?.data.userData);
        } catch (error) {
            console.log(error?.message);
        }
    }

    const getAuthState = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.get("http://localhost:5000/api/user/data");
            console.log(data)
            if (data.success) {
                await getUser();
                setIsLoggedIn(true);
            }
        } catch (error) {
            return null;
        }
    }

    const logout = async () => {
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post("http://localhost:5000/api/auth/logout");
            setUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isLoggedIn,
            setIsLoggedIn,
            getUser,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider