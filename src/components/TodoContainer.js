import React, { useState } from 'react'
import TodoInput from "./AddTask"
import TodoList from "./TodoList"
import ListEntry from './ListEntry'
//import AddListButton from './AddList'
import RemoveList from './RemoveList'

const TodoContainer = ({list, onToggleList, onRemoveList}) => {
    const [listData, setListData ] = useState(list)
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

    const handleRemoveList = () => {
        console.log(" removing the list", listData)
        onRemoveList(list.id)
        setListData({ name: '', completed: false })
        setTodos([])
    }
return (

    <div className="list-block">
        <ListEntry list={list} onToggleList={onToggleList}/>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        <TodoInput onAdd={handleAddTodo}/>
        <RemoveList listId={list.id} onRemoveList={handleRemoveList}/>
</div>
)

}

export default TodoContainer