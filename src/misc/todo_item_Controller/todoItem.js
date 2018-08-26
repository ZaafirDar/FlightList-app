import React, { Component } from "react";
import "./Styles/todoItem.css";
// import CompletedTask from "./components/completedTask";

class todoItem extends Component {
  constructor(props) {
    super(props);
  }

  removeToDo(id) {
    this.props.removeToDo(id);
  }

  // OnComplete(completeText) {
  //   this.props.OnComplete(completeText);
  // }

  render() {
    return (
      <div className="todoWrapper">
        <button
          className="removeToDo"
          onClick={e => this.removeToDo(this.props.id)}
        >
          {" "}
          Delete{" "}
        </button>
        <button
          className="completed"
          onClick={this.onComplete(props.onComplete.id)}
        >
          Done
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}

export default todoItem;
