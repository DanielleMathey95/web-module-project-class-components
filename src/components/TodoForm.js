import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { task: "" };
  }
  handleChanges = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(event, this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
