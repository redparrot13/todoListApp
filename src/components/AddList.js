import React, {useState} from 'react'

const AddListButton = ({ onAddList }) => {
    const [listName, setListName] = useState('')
  
    const handleAddListClick = () => {
      if (listName !== '') {
        onAddList(listName)
        setListName('') // Reset the input field after adding the list
      }
    }

    const handleKeyPress = event => {
        if (event.key ==='Enter') {
            handleAddListClick()
        }
    }
  
    return (
      <div>
        <input
          type="text"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter list name"
        />
        <button onClick={handleAddListClick}>Add New List</button>
      </div>
    )
  }




/* const AddListButton = ({ onAddList}) => {
    const handleAddListClick = () => {
        const listName = prompt('Create list name:')
        if (listName !== null && listName !== '') {
            onAddList(listName)
        }
    }

    return (
        <button onClick ={handleAddListClick}> List</button>
    )
}
 */

export default AddListButton