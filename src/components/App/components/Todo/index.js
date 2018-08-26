// @flow strict

import * as React from "react";
import InputTodo from "./components/InputTodo/index";
import ToDolist from "./components/ToDolist/index";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ id: 0, text: "QT 809" }, { id: 1, text: "JP 777" }],

      nextId: 2
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  addTodo(toDoText) {
    let todos = this.state.todos.slice();
    let myTODO = { id: this.state.nextId, text: toDoText };
    todos.push(myTODO);
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });

    setTimeout(() => {
      this.onComplete(myTODO);
    }, 10000);
  }

  removeToDo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  onComplete(todo) {
    let newTodo = Object.assign({}, todo);
    this.removeToDo(todo.id);
    this.props.addToCompeteList(newTodo);
  }

  render() {
    return (
      <div>
        {/* <h1>ToDo List</h1> */}
        <h1>Add Flight</h1>
        <InputTodo addTodo={this.addTodo} />
        <ul>
          {this.state.todos.map(todo => {
            return (
              <ToDolist
                todo={todo}
                key={todo.id}
                id={todo.id}
                removeToDo={this.removeToDo}
                onComplete={this.onComplete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
