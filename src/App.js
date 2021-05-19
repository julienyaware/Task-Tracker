import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
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
console.log('deleting task with id',id)
}

  return (
    <div className="Container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
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
