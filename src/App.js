import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddComponent from './components/AddComponent'
import React from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Doctors appoinymen",
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

const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
}

  return (
    <div className="Container">
      <Header />
      <AddComponent />
       {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ): ('No tasks to show')}
    </div>
  );
}

export default App;

// class App extends React.Component {
//   render (){
//     return <div>
//     <h1>wawawa</h1>
//   </div>

//   }
// }

// export default App;
