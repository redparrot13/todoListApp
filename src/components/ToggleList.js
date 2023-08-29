import React from 'react'


const ToggleList = ({ completed, onToggle }) => {
    return (
        <input
            type="checkbox"
            checked={completed}
            onChange={onToggle}
        />
    )
}

export default ToggleList