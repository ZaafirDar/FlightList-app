import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //count: 0,
      //tags: ["tag1", "tag2", "tag3"]
      userInput: "",
      list: []
    };
  }
  styles = {
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic"
  };

  styles1 = {
    marginLeft: "20px"
  };

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    let listArray = this.state.list;
    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ""
    });
  }

  handleDelete = () => {
    console.log("Event Handler Called");
  };

  render() {
    return (
      <div className="col-sm-12">
        <span style={this.styles}>
          <h1 className="jumbotron text-center">TO DO LIST</h1>
        </span>

        <div className="row">
          <div className="col-sm-8">
            <span style={this.styles1}>
              Task:{" "}
              <input
                onChange={e => this.changeUserInput(e.target.value)}
                value={this.state.userInput}
                type="text"
              />
            </span>
            <span style={this.styles1}>
              {" "}
              <button
                onClick={() => this.addToList(this.state.userInput)}
                className="btn btn-primary btn-sm m-10"
              >
                Add Task
              </button>
            </span>
            <ul>
              {this.state.list.map(val => (
                <li>
                  {val}
                  <button
                    onClick={this.handleDelete}
                    className="btn btn-danger btn-sm"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
