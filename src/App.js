import React, { Component } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import "./style.css";
// import Score from "./components/Score";

class App extends React.Component {
  state = {
    score: 0,
    isClicked: false,

  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <CardContainer />
      </div>
    );
  }
}
export default App;
