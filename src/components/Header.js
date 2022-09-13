import React from 'react'
import { useAuth } from './AuthProvider'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const { token, onLogout, onLogin } = useAuth()
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-between p-2">
            <a href="/">
                <img src="/logo192.png"  className="h-8 w-auto sm:h-10" alt="logo" />
            </a>

            <nav className="flex justify-between">
                <NavLink className="m-auto" to="/resume">Resume</NavLink>
                { token && (<button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={onLogout}>Logout</button>) }
                { !token && <button
                    type="button"
                    className="bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg"
                    onClick={onLogin}>Login</button>}
            </nav>
        </div>
    )
}

export default Header