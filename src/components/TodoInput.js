import React, { useState } from 'react'



const TodoInput = ({ onAdd }) => {
    const [newTodoItem, setNewTodoItem] = useState('')

    const handleInputChange = event => {
        setNewTodoItem(event.target.value)
    }

    const handleAddClick = () => {
        if (newTodoItem.trim() !== '') {
            onAdd(newTodoItem)
            setNewTodoItem('')
        }
    }

    const handleKeyPress = event => {
        if (event.key ==='Enter') {
            handleAddClick()
        }
    }

    return (
        <div className="todo-input">
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTodoItem}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleAddClick}>Add</button>

        </div>
    )
}

export default TodoInput

