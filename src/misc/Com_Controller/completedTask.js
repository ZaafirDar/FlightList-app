import React, { Component } from "react";

class CompletedTask extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onComplete(completeText) {
    if (completeText.length > 0) {
      this.props.addTodo(completeText);
      this.setState({ value: "" });
    }
  }

  render() {
    return <div className="done-wrapper" />;
    {
      this.props.completeText.text;
    }
  }
}

export default CompletedTask;
