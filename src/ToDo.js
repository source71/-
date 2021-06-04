import React, {useState} from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'
import { Link } from 'react-router-dom';


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
        <div className="transition">
            <Link to={`/room`}>room</Link>
            <Link to={`/profile`}>profile</Link>
            <Link to={`/Album`}>アルバム</Link>
            <Link to={`/Recommended`}>おすすめ機能</Link>
        </div>
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