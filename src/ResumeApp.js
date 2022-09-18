import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthProvider from './containers/AuthProvider'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './containers/ProtectedRoute'
import Resume from './pages/Resume'
import Header from './components/Header'

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