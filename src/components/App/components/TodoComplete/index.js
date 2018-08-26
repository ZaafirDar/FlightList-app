// @flow strict

import * as React from "react";
import "./styles.css";

class TodoComplete extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoWrapper">
        <ul className="list-group">
          {this.props.completedList.map(todo => {
            return (
              <li key={todo.id} className="list-group-item">
                {todo.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoComplete;
