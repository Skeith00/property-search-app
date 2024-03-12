// auth.context.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext('auth')

export function AuthProvider({ children }) {

    const login = (accessToken, refreshToken) => {
        // Store the tokens in localStorage
        localStorage.setItem('token', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}