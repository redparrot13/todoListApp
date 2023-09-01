import React from 'react'
import ToggleList from './ToggleList'
//import RemoveList from './RemoveList'

const ListEntry = ({ list, onToggleList,  }) => {
    return (
        <div className={`list-entry ${list.completed ? 'completed' : ''}`}>
            <h3>{list.name}</h3>
            <ToggleList completed={list.completed} onToggleList={() => onToggleList(list.id)} />


            {/*<RemoveList onRemoveList={() => {
                console.log("clicked  remove list in ListEntry")
                onRemoveList(list.id)
            }} /> */}

        </div>
    )
}

export default ListEntry