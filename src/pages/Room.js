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
    },[])

    // const user = useContext(AuthContext)

    const handlesubmit = (e) => {
        e.preventDefault()
        firebase.default.firestore().collection('messages').add({
            content: value
            // user: user.displayName
        })
        setValue('')
    }

    return (
        <>
            <div className='wrap'>
                <h1 className='title'>ChatRoom</h1>
                    <form onSubmit={handlesubmit} className='form'>
                    <div>
                        <input
                            type='text'
                            value={value}
                            onChange={e => {setValue(e.target.value)}}
                            />
                        <button type='submit'>送信</button>
                    </div>
                    <ul>
                        {messages?.map((message) => {
                            return <li>{message.content}</li>
                        })}
                    </ul>
                    </form>
            </div>
        </>
    )
}

export default Room