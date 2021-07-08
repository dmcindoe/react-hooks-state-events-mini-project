import React, { useState } from "react"
import CategoryFilter from "./CategoryFilter.js"
import NewTaskForm from "./NewTaskForm.js"
import TaskList from "./TaskList.js"

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

function App() {
  const [taskItems, setTaskItems] = useState(TASKS)
  const [category, setCategory] = useState('All')

 /* const filteredTasks = TASKS.filter(task =>{
   return selectedCategory === task.category || selectedCategory === 'All'

   const handleDeleteTask = {deletedTaskText} => {
     const newTaskItems = filter(task =>{
       return task.text != deletedTaskText
     })
     setTaskItems(newTaskItems)
   }*/
  
  const handleAddTask = (newTaskItem) => {
    setTaskItems([...taskItems, newTaskItem])
  }

  function handleDeleteTask(deletedTaskText) {
    setTaskItems(taskItems.filter((task) => task.text !== deletedTaskText))
  }

  const ShownTasks = taskItems.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm
          categories={CATEGORIES.filter((catz) => catz !== "All")}
          onTaskFormSubmit={handleAddTask}
        />
        <TaskList onDeleteTask={handleDeleteTask} tasks={ ShownTasks} />
      </div>leTas
    </div>
  )
}

export default App;
