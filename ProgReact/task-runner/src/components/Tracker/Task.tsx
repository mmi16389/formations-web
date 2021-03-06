import * as React from 'react';
import { FaTimes } from 'react-icons/fa'
import { ListGroup } from 'react-bootstrap';
import TaskStyle from '../../styles/Task.module.scss'

export interface Task {
    id: number,
    text: string,
    day: string,
    reminder:boolean
}
export interface Tasks {
    tasks: Array<Task>;
    onDelete: (id:number)=>void;
    onToggle: (id:number)=> void;
}


const TaskComponent: React.FC<Tasks> = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
          
        {   
            tasks.map((task, idx) => (
                <ListGroup  key={idx} className={task.reminder?TaskStyle.reminder: ''}>
                     <ListGroup.Item onDoubleClick={()=>onToggle(task.id)} style={{cursor:'pointer'}}> 
                            <h3>{task.text} 
                              <FaTimes style={{color:'red', cursor: 'pointer',float: 'right'}} onClick={()=>onDelete(task.id)}/>
                            </h3> 
                            <p>{task.day}</p>    
                    </ListGroup.Item>
                </ListGroup>
            ))
        }
        </>
    )
}

export default TaskComponent;