import React, { Component } from "react";
import "./style.css";
import Todo from "./components/Todo";
import TodoComplete from "./components/TodoComplete/index";
import InputToDo from "./components/Todo/components/InputTodo/index";
import ToDolist from "./components/Todo/components/ToDolist/index";

class App extends Component {
  state = {
    completedList: []
  };
  constructor(props) {
    super(props);

    this.addToCompeteList = this.addToCompeteList.bind(this);
  }

  addToCompeteList(todo) {
    this.state.completedList.push(todo);
    this.setState({ completedList: this.state.completedList });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Flight Schedule</h1>{" "}
        </div>
        <div className="App-title" />
        <div className="todo-wrapper">
          <Todo addToCompeteList={this.addToCompeteList} />
        </div>
        <div className="done-Wrapper">
          <h2>Flight Landed</h2>

          <TodoComplete completedList={this.state.completedList} />
        </div>
      </div>
    );
  }
}
export default App;
