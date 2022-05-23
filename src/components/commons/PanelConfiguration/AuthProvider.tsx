import React from 'react'
import { useAppSelector } from '@app/state/hook'
import { Redirect } from 'react-router-dom'

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const { isLogged, token } = useAppSelector((state) => state.user)

    if (!isLogged && !token) return <Redirect to="/login" />

    return <>auth - {children}</>
}

export default AuthProvider
