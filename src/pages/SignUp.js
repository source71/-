import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'

const Signup = (history) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.default.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.pushState('/todo')
            },({user}) => {
                    user.updateProfile({
                        displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const user = useContext(AuthContext)
    if (user) {
        return <Redirect to='/todo' />
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='route-form'>
                    <div className='route-inner'>
                        <h1 className='title'>SignUp</h1>
                        <div>
                            <input
                                className='route-in'
                                type='name'
                                id='name'
                                name='name'
                                placeholder='name'
                                onChange={e => setName(e.target.value)}
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
                        <button type='submit' className='route-button'>SignUp</button>
                    </div>
            </form>
        </>
    )
}

export default Signup