import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' placeholder='新しいTodoを作成'
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Form