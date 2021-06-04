import React, { useContext, useEffect, useState } from 'react'
import firebase from '../config/firebase'
import'firebase/firestore'
import { AuthContext } from '../AuthService'

const Room = () => {
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
            <div className='wrap'>
                <button onClick={() => firebase.default.auth().signOut()}>Logout</button>
                <h1>ChatRoom</h1>
                <form onSubmit={handlesubmit} className='form'>
                    <ul>
                        {messages?.map((message) => {
                            return <li>{message.user}<br/>{message.content}</li>
                        })}
                    </ul>
                    <div className='text-box'>
                        <input
                            className='coment-box'
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

export default Room