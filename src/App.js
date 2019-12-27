import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos]= useState([])
  
  function handleNewTodoChange(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
  }
  function handleNewTodo(e){
    e.preventDefault()
    if (newTodo  === '') return
    setTodos([...todos, {id: Date.now(), text: newTodo}])
    e.target.reset()
  }

  return(
    <div className="demo-component">
      <h1>todos</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder="Your todo..." onChange={handleNewTodoChange}/>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}
