import React, { Component } from "react";
import "./Styles/App.css";
import Header from "../Header_Controller/header";
import InputToDo from "../input_toDo_Controller/inputToDo";
import TodoItem from "../todo_item_Controller/todoItem";
import CompletedHeader from "../Com_Controller/completedHeader";
import CompletedTask from "../Com_Controller/completedTask";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "What up" },
        { id: 1, text: "Wash Clothes" },
        { id: 2, text: "Time for dinner" }
      ],
      nextId: 3,

      completed: [
        { id: 0, text: "Time for dinner" },
        { id: 1, text: "Shopping" },
        { id: 2, text: "wash Clothes" }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    // this.onComplete = this.onComplete.bind(this);
  }

  // onComplete(completeText) {
  //   // let completed = this.state.completed.slice();
  //   // completed.push({ id: this.state.nextId, text: completeText });
  //   // this.setState({
  //   //   completed: completed,
  //   //   nextId: ++this.state.nextId
  //   // });
  //   console.log("click happened");
  // }

  addTodo(toDoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: toDoText });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeToDo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  // completedToDo(id){{
  //   this.setState({
  //     todos: this.state.todos.splice(todo,1)
  //   })

  //   todos.push({id: this.state.nextId, text: todos});
  //   nextId:
  // }}
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <InputToDo toDotext="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeToDo={this.removeToDo}
                />
              );
            })}
          </ul>
        </div>
        <div className="done-Wrapper">
          <CompletedHeader completedTodos={this.state.completedTODOs} />
        </div>
      </div>
    );
  }
}

export default App;
