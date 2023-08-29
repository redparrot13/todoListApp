import React from 'react'
import TodoItem from './TodoItem'
import ToggleTodo from './ToggleTodo'
import RemoveTodo from './RemoveTask'


const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <ToggleTodo completed={todo.completed} onToggle={() => onToggle(todo.id)} />
            {todo.text}
            <RemoveTodo onRemove={() => onRemove(todo.id)}/>
          </div>
        ))}
      </div>
    )
  }
/*const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}
*/
export default TodoList