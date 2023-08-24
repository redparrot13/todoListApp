import React { useState } from 'react'
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

const TodoContainer = () => {
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
        setTodos(prevTodos = > prevTodos, filter(todo => todo.id !===id))
    }
return (
    <div className="todo-list-container">
        <h2> Todo List</h2>
        <TodoInput onAdd={handleAddTodo}/>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>

    </div>
)

}

export default TodoContainer