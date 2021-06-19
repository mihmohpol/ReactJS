import React from 'react';

import Task from './Task';

class MyTodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: "Name of the task",
        description: "What needs to be done",
        completed: false,
      },
      {
        id: 2,
        name: "Clear room",
        desription: "My room is bad",
        completed: true,
      },
      {
        id: 3,
        name: "Learn React",
        description: "Nice lib",
        completed: true,
      },
      {
        id: 4,
        name: "Get 5 marks",
        description: "it's neccecary",
        completed: false,
      },
      {
        id: 5,
        name: "Learn NodeJS",
        description: "Nice platform",
        completed: false,
      },
      {
        id: 6,
        name: "Buy apple",
        description: "For my mom",
        completed: true,
      },
      {
        id: 7,
        name: "Go sleep",
        description: "Don't know what's a poing",
        completed: false,
      },
       
    ]
  }
  render() {
    return (
      <div>
        {this.state.tasks.map((task, key) => <Task key={key} {...task}/>)}
      </div>
    )
  }
}

export default MyTodoList