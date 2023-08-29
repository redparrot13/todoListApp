import React from 'react'
import ToggleTodo from './ToggleTodo'
import RemoveTodo from './RemoveTask'

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <ToggleTodo completed={todo.completed} onToggle={() => onToggle(todo.id)}/>
            {todo.text}
            <RemoveTodo onRemove={() => onRemove(todo.id)}/>
        </div>
    )
}

export default TodoItem