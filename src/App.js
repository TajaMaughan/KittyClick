import React, { Component } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

class App extends Component {
  //   state = {
  //     cardList
  //   };

  // clicked = id => {
  //     const cardList = this.state.cardList.filter(cardList)
  // }
  render() {
    return (
      <div>
        <Header />
        <CardContainer />
      </div>
    );
  }
}
export default App;
