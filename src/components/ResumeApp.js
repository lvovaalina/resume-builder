import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import AuthProvider, { useAuth } from './AuthProvider'
import Home from './Home'
import NotFound from './NotFound'
import ProtectedRoute from './ProtectedRoute'
import Resume from './Resume'

const ResumeApp = () => {
    return (
        <AuthProvider>
            <Navigation />
            <Routes>
                <Route index path="/" element={<Home />}></Route>
                <Route path="/resume" element={
                    <ProtectedRoute>
                        <Resume/>
                    </ProtectedRoute>
                }></Route>
                <Route
                    path="admin"
                    element={
                        <ProtectedRoute>
                        <Admin />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </AuthProvider>
    )
}

const Navigation = () => {
    const { token, onLogout } = useAuth()
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/admin">Admin</NavLink>
            { token && (<button onClick={onLogout}>Logout</button>) }
        </nav>
    )
}

const Admin = () => {
    return (
      <>
        <h2>Admin (Protected)</h2>
      </>
    )
  }

export default ResumeApp