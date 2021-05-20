import {FaTimes} from 'react-icons/fa'
import React from "react";

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className= 'task' onDoubleClick= {(id)=> onToggle(id)}>
     <h3>{task.text} <FaTimes style= {{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/>
     </h3>
     <p>{task.date}</p>
    </div>
  )
 
};

export default Task;
