import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleComplete(props.task.id)}
      className={`Todo${!props.task.completed ? "completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
