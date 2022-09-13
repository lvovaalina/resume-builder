import React, { useState, createContext, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import fakeAuth from '../services/fakeAuth'

const AuthContext = createContext({})

export const useAuth = () => {
    return useContext(AuthContext);
};

export const Val = 10

const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(getInitialToken());
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = async () => {
        const token = await fakeAuth()

        setToken(token)
        const origin = location.state?.from?.pathname || '/resume';
        navigate(origin);
    }

    const handleLogout = () => {
        setToken(null)
    }

    const value = {
        token: token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    }

    useEffect(() => {
        const temp = JSON.stringify(token)
        localStorage.setItem("token", temp)
      }, [token]);

    function getInitialToken() {
        // getting stored items
        const temp = localStorage.getItem("token")
        const savedToken = JSON.parse(temp)
        return savedToken || []
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider