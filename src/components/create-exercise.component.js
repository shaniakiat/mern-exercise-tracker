import React, { Component } from "react";

export default class CreateExercises extends Component {
  constructor(props) {
    super(props);

    //react use state as variables
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p>You are on the Create Exercises Component</p>
      </div>
    );
  }
}
