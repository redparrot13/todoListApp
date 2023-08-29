import React, { useState } from 'react'
import TodoInput from "./AddTask"
import TodoList from "./TodoList"
import ListEntry from './ListEntry'
import AddListButton from './AddList'

const TodoContainer = ({list, onToggleList, onRemoveList}) => {
    const [todos, setTodos] = useState([])

    const handleAddTodo = newItem => {
        const newTodo = { id: Date.now(), text: newItem, completed: false }
        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    const handleToggle = id => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }


    const handleRemove = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !==id))
    }
return (
    <div className="list-block">
        <ListEntry list={list} onToggleList={onToggleList} onRemoveList={onRemoveList}/>
        <TodoInput onAdd={handleAddTodo}/>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>

    </div>
)

}

export default TodoContainer