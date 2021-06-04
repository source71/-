import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'

const Login = (history) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.default.auth().signInWithEmailAndPassword(email, password)
            .then (() => {
                history.pushState("/")
            })
            .catch(err => {
                console.log(err)
            })

        }
    const user = useContext(AuthContext)
    if (user) {
        return <Redirect to="/" />
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='route-form'>
                    <div className='route-inner'>
                        <h1 style={{margin:'unset'}}>Login</h1>
                        <div>
                            <input
                                className='route-in'
                                type='name'
                                id='name'
                                name='name'
                                placeholder='name'
                            />
                        </div>
                        <div>
                            <input
                                className='route-in'
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email'
                                onChange={e => {setEmail(e.target.value)}}
                            />
                        </div>
                        <div>
                            <input
                                className='route-in'
                                type='password'
                                id='password'
                                name='password'
                                placeholder='password'
                                onChange={e => {setPassword(e.target.value)}}
                            />
                        </div>
                        <button type='submit' className='route-button'>Login</button>
                    </div>
            </form>
        </>
    )
}

export default Login