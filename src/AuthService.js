import React, { useEffect, useState } from 'react'
import firebase from '../src/config/firebase'

const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)

    useEffect(() => {
        firebase.default.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}


export {
    AuthContext,
    AuthProvider
}