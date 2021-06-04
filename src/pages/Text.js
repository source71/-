import React, { useContext, useEffect, useState } from 'react'
import firebase from '../config/firebase'
import'firebase/firestore'
import { AuthContext } from '../AuthService'

const Text = () => {
    const [messages ,setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.default.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessages(messages)
            })
    })

    const user = useContext(AuthContext)

    const handlesubmit = (e) => {
        e.preventDefault()
        firebase.default.firestore().collection('messages').add({
            content: value,
            user: user.displayName
        })
        setValue('')
    }

    return (
        <>
            <div>
                <form onSubmit={handlesubmit} className='profile-form'>
                    <ul>
                        {messages?.map((message) => {
                            return <li>{message.user}<br/>{message.content}</li>
                        })}
                    </ul>
                    <div className='profile-text'>
                        <input
                            className='profile-coment'
                            type='text'
                            value={value}
                            onChange={e => {setValue(e.target.value)}}
                        />
                        <button type='submit' style={{height:'5vw'}}>送信</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Text