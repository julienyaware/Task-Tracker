import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddComponent from './components/AddComponent'
import React from "react";

function App() {
const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Doctors appointment",
      date: "Feb 6th",
      reminder: true
    },
    {
      id: "2",
      text: "Meeting at school",
      date: "Feb 7th",
      reminder: true
    },
    {
      id: "3",
      text: "Food shopping",
      date: "Feb 8th",
      reminder: false
    }
  ])

const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id
))
}

const addTask = (task) => {
  const id =  Math.floor(Math.random()*10000) +1
const newTask = {id,...task}
setTasks([...tasks, newTask])
}

const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
}

  return (
    <div className="container">
      <Header  onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      { showAddTask && <AddComponent onAdd ={addTask}/>}
       {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ): ('No tasks to show')}
    </div>
  );
}

export default App;


