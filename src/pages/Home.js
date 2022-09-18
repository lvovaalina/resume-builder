import React from 'react'
import { useAuth } from '../containers/AuthProvider'

const Home = () => {
    let { onLogin } = useAuth();
    return (
        <main className="flex justify-center flex-col items-center">
            <div>Create your resume right now!</div>
            <button
                type="button"
                className="bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg w-28"
                onClick={onLogin}>Login</button>
        </main>
    )
}

export default Home