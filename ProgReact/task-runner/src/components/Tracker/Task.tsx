import * as React from 'react';
import { FaTimes } from 'react-icons/fa'
import { ListGroup } from 'react-bootstrap';
import TaskStyle from '../../styles/Task.module.scss'

export interface TaskType {
    id: number,
    text: string,
    day: string,
    reminder: boolean
}
export interface Tasks {
    tasks: TaskType[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    children?: () => void;
}


const TaskComponent = (props: Tasks) => {
    return (
        <>
            {    
                props.tasks.map((task, idx) => (
                    <ListGroup key={idx} className={task.reminder ? TaskStyle.reminder : ''}>
                        <ListGroup.Item onDoubleClick={() => props.onToggle(task.id)} style={{ cursor: 'pointer' }}>
                            <h3>{task.text}
                                <FaTimes style={{ color: 'red', cursor: 'pointer', float: 'right' }} onClick={() => props.onDelete(task.id)} />
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