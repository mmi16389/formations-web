import * as React from 'react';
import { Header, Task } from './components'
import { TaskType } from './components/Tracker/Task'

const listTache: TaskType[] = [
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
];

type State = { tasks: TaskType[] };

class App extends React.Component<any, State> {
  state: State = {
    tasks: listTache
  }

  onDeleteTask = (id: number) => {
    console.log('hello the world ', this.state.tasks.filter((task) => task.id !== id));
    //this.setState(this.state.tasks.filter((task) => [...this.state.tasks, task.id !== id]))
    this.setState((state: State) => {
      console.log(' show state ', state)
      state.tasks.filter((task: TaskType) => task.id !== id)
    });
  }
  onToggle = (id: number) => {
    // this.setState(this.state.tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    this.setState((task: Pick<State, "tasks">) => { })
  }

  render() {
    return (
      <>
        <Header title="Header" />
        { this.state.tasks.length > 0 ? <Task tasks={this.state.tasks} onDelete={this.onDeleteTask} onToggle={this.onToggle} /> : <div>Pas de tache</div>}
      </>
    );
  }
}

export default App;
