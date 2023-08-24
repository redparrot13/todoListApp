import React, { useState } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'
import AddListButton from './components/AddListButton'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'


function App() {
  const [lists, setLists] = useState([])
  
  const handleAddList = (listName) => {
    console.log('Adding new list:', listName)

    const newList = {
      id: Date.now(),
      name: listName,
      todos: [],
    }

    setLists(prevLists => [...prevLists, newList])
  }

  console.log('Rendering app:', lists)

  return (
    <div className="App">
      <h1> The list of Lists App</h1>
      {lists.map(list => (
        <TodoContainer key={list.id} list={list} />
      ))}
      <AddListButton onAddList={handleAddList} />
    </div>
  )
}





/* import ToggleTodo from './components/ToggleTodo'
import RemoveTodo from './components/RemoveItem'
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
      <h1> Multi-List To-do App</h1>
      <TodoContainer/>
    </div>
  )
} */

export default App;
