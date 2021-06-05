import React, {useState} from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'


const ToDo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = content => {
      setTodos([
          ...todos,
          {
              content: content,
              id: shortid.generate()
          }
      ])
  }

  const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  return(  
      <div className='wrap'>
        <h1 className='title'>TODOリスト</h1>
        <React.Fragment>
            <h2 className="subtitle">reactの復習と面接の練習</h2>
            <div className='form'>
                <Form addTodo={addTodo} />
                <List todos ={todos} deleteTodo={deleteTodo}/>
            </div>
        </React.Fragment>
      </div>
    )
}

export default ToDo