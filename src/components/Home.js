import React from 'react'
import { useAuth } from './AuthProvider'

const Home = () => {
    let { onLogin } = useAuth();
    return (
        <>
            <div>Create your resume right now!</div>
            <button
                type="button"
                className="bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg"
                onClick={onLogin}>Login</button>
        </>
    )
}

export default Home