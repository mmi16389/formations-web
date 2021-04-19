import * as React from 'react';
import { Header, Task } from './components'
import { TaskType } from './components/Tracker/Task'

import { api } from './services'

 
type State = { tasks: TaskType[]};

class App extends React.Component<any, State> {
  state: State = {
    tasks: []
  }
 
  componentDidMount():void{
    api.taskService.getAllTask().then((response)=>{
             this.setState((state: Pick<State, 'tasks'>)=> {return {tasks: response.data}})
   })
  }

  onDeleteTask = (id: number) => {
    this.setState((state: Pick<State, 'tasks'>) => {
      return { tasks: state.tasks.filter((task: TaskType) => task.id !== id)}
    });
  }
  onToggle = (id: number) => {
    this.setState((state: Pick<State, 'tasks'>) => { 
      return {
         tasks:state.tasks.map((task:TaskType)=> task.id ===id?{...task, reminder:!task.reminder}:task)
      }
    })
  }

  render() {
    return (
      <>
        <Header/>
        { this.state.tasks.length > 0 ? <Task tasks={this.state.tasks} onDelete={this.onDeleteTask} onToggle={this.onToggle} /> : <div>Pas de tache</div>}
      </>
    );
  }
}

export default App;
