import React, { Component } from "react";
import Card from "./components/Card";
// import Score from "./components/Score";
// import TopScore from "./components/TopScore";
import cardList from "./cardList.json";

class App extends Component {
  state = {
    cardList
  };

  // clicked = id => {
  //     const cardList = this.state.cardList.filter(cardList)
  // }
  render() {
    return (
    <div>
      {cardList.map(card => (
        <Card id={card.id} name={card.name} img={card.img} />
      ))}
    </div>
  )}
}
export default App;
