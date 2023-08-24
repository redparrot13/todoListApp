import React, {useState} from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
//import ToggleTodo from './components/ToggleTodo'
//import RemoveTodo from './components/RemoveItem'


function App() {

  const [todos, setTodos] =useState([])

  const handleAddTodo = newItem => {
    const newTodo = {id:Date.now(), text:newItem, completed: false}
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const handleToggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
        )
  }

  const handleRemove = (id) => {
    setTodos(prevTodos => 
      prevTodos.filter(todo => todo.id !== id)
      )
  }
  return (
    <div className="App">
      <h1> To-Do List</h1>
      <TodoInput onAdd={handleAddTodo}/>
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </div>
  )
}

export default App;
