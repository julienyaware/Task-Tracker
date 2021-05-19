import {FaTimes} from 'react-icons/fa'
import React from "react";

const Task = ({task, onDelete}) => {
  return (
    <div className= 'task'>
     <h3>{task.text} <FaTimes style= {{color:'red', cursor:'pointer'}} onClick={onDelete}/>
     </h3>
     <p>{task.date}</p>
    </div>
  )
 
};

export default Task;