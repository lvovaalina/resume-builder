import React from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Navigate, useLocation, } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const { token } = useAuth()
    const location = useLocation()

    if(!token) {
        return <Navigate to="/" replace state={{from: location}}/>
    }

    return children
}

export default ProtectedRoute