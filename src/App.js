import React from "react";

const tasks = [
  {
    task: "Does this work?",
    id: 1,
    completed: false,
  },
  {
    task: "Holy crap it works",
    id: 2,
    completed: false,
  },
  {
    task: "Wow I am so good at this",
    id: 3,
    completed: false,
  },
];

class App extends React.Component {
  //extending to get state property, setState function, access to lifecycle methods and props
  //constructor with state - state property for tasks
  constructor() {
    super();
    //initialize state oject
    this.state = { tasks };
  }

  toggleComplete = (id) => {
    //loop through the array at this.state.tasks
    //on each iterattion:
    // if we are looking at the task we clicked on, toggle the completed field
    //else - leave that item unchanged
    this.setState({
      tasks: this.state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Todo's for today!</h2>
      </div>
    );
  }
}

export default App;
