import React from 'react'
import { useAuth } from '../providers/AuthProvider'

const Header = () => {
    const { token, onLogout, onLogin } = useAuth()
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-between p-2 border-b-4 border-blue-600 border-opacity-10">
            <a href="/">
                <img src="/logo192.png"  className="h-8 w-auto sm:h-10" alt="logo" />
            </a>

            <nav className="flex justify-between">
                { token ? (<button
                    className="outline-button"
                    onClick={onLogout}>Logout</button>) :
                (<button
                    type="button"
                    className="button"
                    onClick={onLogin}>Login</button>)}
            </nav>
        </div>
    )
}

export default Header