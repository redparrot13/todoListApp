import React, { useState } from 'react'
const TodoInput = ({ onAdd }) => {
    const [newTodoItem, setNewTodoItem] = useState('')

    const handleAddClick = () => {
        if (newTodoItem.trim() !== '') {
            onAdd(newTodoItem)
            setNewTodoItem('')
        }
    }

    return (
        <div className="todo-input">
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTodoItem}
                onChange={event => setNewTodoItem(event.target.value)}
            />
            <button onClick={handleAddClick}>Add</button>

        </div>
    )
}

export default TodoInput

