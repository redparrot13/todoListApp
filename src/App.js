import React, { useState } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'
import AddListButton from './components/AddList'
import TodoList from './components/TodoList'
import TodoInput from './components/AddTask'


function App() {
  const [lists, setLists] = useState([])
  
  const handleAddList = (listName) => {
    console.log('Adding new list:', listName)

    const newList = {
      id: Date.now(),
      name: listName,
      todos: [],
    }

    setLists((prevLists) => [...prevLists, newList])
  }

  const handleRemoveList = (listId) => {
    // Implement the logic to remove the list with the provided listId
    // Update the state to remove the specified list
    setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
  };

  console.log('Rendering app:', lists)

  return (
    <div className="App">
      <h1> The List of Lists</h1>
      <div className="list-container">
      {lists.map(list => (
        <TodoContainer key={list.id} list={list} onRemoveList={handleRemoveList} />
      ))}
      </div>
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
