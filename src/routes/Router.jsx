import React from 'react'
import Dashboard from '../pages/Dashboard'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'

const Router = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />

                    {/* Rotas protegidas dentro do Dashboard */}
                    <Route path='/app' element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }>
                        <Route index element={<Home />} />
                        {/* <Route path='pets' element={<Pets />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default Router