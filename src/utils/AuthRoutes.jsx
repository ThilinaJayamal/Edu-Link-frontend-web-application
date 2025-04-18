import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function AuthRoutes() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            {
                isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />
            }
        </>
    )
}

export default AuthRoutes