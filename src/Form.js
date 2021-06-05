import React, { useState, useEffect } from 'react'
import firebase from './config/firebase'

const Form = ({ addTodo }) => {
    // const [messages ,setMessages] = useState(null)
    const [value, setValue] = useState('')

    // useEffect(() => {
    //     firebase.default.firestore().collection('todo')
    //         .onSnapshot((snapshot) => {
    //             const messages = snapshot.docs.map(doc => {
    //                 return doc.data()
    //             })
    //             setMessages(messages)
    //         })
    // })

    const handleSubmit = e => {
        e.preventDefault()
        if(value===("")) {
            alert('入力してください')
            return
        }
        firebase.default.firestore().collection('todo').add({
            content: value
        })
        addTodo(value)
        setValue('')
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value} 
                type='text' placeholder='新しいTodoを作成'
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
            <button type='submit'>送信</button>
            {/* <ul>
                {messages?.map((message) => {
                    return <li>{message.content}</li>
                })}
            </ul> */}
        </form>
    )
}

export default Form