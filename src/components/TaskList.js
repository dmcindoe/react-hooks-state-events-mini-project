import React from "react"
import Task from "./Task.js"

const TaskList = ({tasks, onDeleteTask}) => {
 const taskCard = tasks.map((task) => (
      <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
      />
  ))
  return <div className="tasks">{taskCard}</div>
}

export default TaskList
