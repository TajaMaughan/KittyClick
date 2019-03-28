import React, { Component } from "react";

class Score extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h3>
          Current Score: <span>{this.state.count}</span>
        </h3>
      </div>
    );
  }
}

export default Score;
