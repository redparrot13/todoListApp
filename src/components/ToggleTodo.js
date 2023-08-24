import React from 'react'


const ToggleTodo = ({ completed, onToggle }) => {
    return (
        <input
            type="checkbox"
            checked={completed}
            onChange={onToggle}
        />
    )
}

export default ToggleTodo