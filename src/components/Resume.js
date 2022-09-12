import React from 'react'
import { useAuth } from './AuthProvider'

const Resume = () => {
    const { token }  = useAuth();

    return (
        <>
        <h2>Dashboard (Protected)</h2>

        <div>Authenticated as {token}</div>
        </>
    )
}

export default Resume