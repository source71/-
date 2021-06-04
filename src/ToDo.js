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
      <div>
        <h1>TODOリスト</h1>
        <br />
        <br />
        <React.Fragment>
            <h2>目標</h2>
            <br/>
            <h2 className="subtitle">reactの復習と面接の練習</h2>
            <Form addTodo={addTodo} />
            <List todos ={todos} deleteTodo={deleteTodo}/>
        </React.Fragment>
      </div>
    )
}

export default ToDo