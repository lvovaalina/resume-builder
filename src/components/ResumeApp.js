import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthProvider from './AuthProvider'
import Home from './Home'
import NotFound from './NotFound'
import ProtectedRoute from './ProtectedRoute'
import Resume from './Resume'
import Header from './Header'

const ResumeApp = () => {
    return (
        <AuthProvider>
            <Header />
            <Routes>
                <Route index path="/" element={<Home />}></Route>
                <Route path="/resume" element={
                    <ProtectedRoute>
                        <Resume/>
                    </ProtectedRoute>
                }></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </AuthProvider>
    )
}

export default ResumeApp