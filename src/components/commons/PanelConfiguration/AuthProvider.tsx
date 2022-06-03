import { useAppSelector } from '@app/state/hook'
import React from 'react'
import { Redirect } from 'react-router-dom'

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // const { isLogged, token } = useAppSelector((state) => state?.user)

    // console.log(isLogged, token)

    // if (!isLogged && !token) return <Redirect to="/login" />

    return <>auth - {children}</>
}

export default AuthProvider
