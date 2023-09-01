import React from 'react'

const RemoveList = ({listId, onRemoveList}) => {
    const handleRemoveList = () => {
        console.log("clicked remove list,",  listId)
        onRemoveList(listId)
    }
    return (
        <button onClick={handleRemoveList}>RemoveList</button>
    )
}
export default RemoveList