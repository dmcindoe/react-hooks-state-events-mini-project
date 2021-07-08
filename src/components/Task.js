import React from "react"

const Task = ({ text, category, onDeleteTask }) => {
  const handleClick = () => {
    onDeleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  )
}

export default Task
