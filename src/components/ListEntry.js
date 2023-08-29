import React from 'react'
import ToggleList from './ToggleList'
import RemoveList from './RemoveList'

const ListEntry = ({list, onToggleList, onRemoveList}) => {
    return (
        <div className={`list-entry ${list.completed ? 'completed' : ''}`}>
<ToggleList completed={list.completed} onToggle={() => onToggleList(list.id)}/>
<h3>{list.name}</h3>
<RemoveList onRemove={() => onRemoveList(list.id)}/>

        </div>
    )
}

export default ListEntry