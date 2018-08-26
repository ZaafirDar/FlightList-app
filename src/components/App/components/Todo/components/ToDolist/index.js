import React, { Component } from "react";
import "./style.css";

// import CompletedTask from "./components/completedTask";

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  // removeToDo(id) {
  //   this.props.removeToDo(id);
  // }

  render() {
    return (
      <div className="todoWrapper">
        {/* <button
          className="removeToDo"
          onClick={e => this.removeToDo(this.props.id)}
        >
          {" "}
          Delete{" "}
        </button> */}
        <button
          className="completed"
          onClick={e => {
            this.props.onComplete(this.props.todo);
          }}
        >
          Done
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}

export default Todo;
