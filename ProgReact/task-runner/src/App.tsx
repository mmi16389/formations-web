import * as React from 'react';
import { Header, Task } from './components' 

function App() {
  const [tasks, setTasks ]= React.useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Go to supermaet",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 4,
      "text": "Travel to the Anglend",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    } 
  ])
  const onDeleteTask = (id:number)=>{
     setTasks(tasks.filter((task)=> task.id !==id))
  }
  const onToggle = (id: number)=>{
    setTasks(tasks.map((task)=> task.id ===id?{...task,reminder: !task.reminder}: task))
  }
  return (
    <>
      <Header title="Header" />
     { tasks.length >0? <Task tasks={tasks} onDelete={onDeleteTask} onToggle={onToggle}/>: <div>Pas de tache</div>}
    </>
  );
}

export default App;
