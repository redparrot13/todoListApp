import React, {useState} from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'


function App() {

  const [todos, setTodos] =useState([])

  const handleAddTodo = newItem => {
    const newTodo = {id:Date.now(), text:newItem, completed: false}
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  return (
    <div className="App">
      <h1> To-Do List</h1>
      <TodoInput onAdd={handleAddTodo}/>
      <TodoList todos={todos}/>
    </div>
  )
}

export default App;
