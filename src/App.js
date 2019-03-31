import React, { Component } from "react";
// import CardContainer from "./components/CardContainer";
import Tile from "./components/Tile";
import cardList from "./cardList.json";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
// import Score from "./components/Score";

class App extends Component {
  state = {
      cardList,
      score: 0,
      clickedArray: [],
      message: "Click an image to begin"
      // isClicked: false
    }

  handleClick = (event) => {
    // Arrange the pictures in a random manner
    // const shuffledArray = this.shuffleArray(cards);
    // this.setState({cards: shuffledArray});
    // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block
    if (this.state.clickedArray.includes(event.target.id)) {
      this.setState({ 
        score: 0, 
        clickedArray: [],
        message: "That's already been clicked. You lose!"
      });
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat(event.target.id),
        score: this.state.score + 1,
        message: "Good Guess! Keep going."
        // shakeit: "false"
      });
    }
    if(this.state.score === 12) {
      this.setState({
        score: 0,
        clickedArray: [],
        message: "You win!"
      })
    }
  }
  // handleClick = id => {
  //   // let isClicked = this.state.isClicked;
  //   // let id = event.target.id;
  //   let score = this.state.score;
  //   let clickedArray = this.state.clickedArray;
  //   // const { target: { id, clicked } } = event;
  //   if (clickedArray) {
  //     this.setState({
  //       // isClicked: false,
  //       clickedArray: [],
  //       score: 0
  //     });
  //   } else {
      
  //     this.setState({
  //           clickedArray: this.state.clickedArray.concat([id]),
  //           // isClicked[id]: true,
  //           score: ++score
  //         },

  //       () => {
  //         if (this.state.score === 12) {
  //           this.setState({
  //             isClicked: false,
  //             score: 0
  //           });
  //         }
  //       }
  //     );
  //   }
  // };
  render() {
    return (
      <div>
        <Header score={this.state.score} message={this.state.message}/>
        <Container className="pt-2 pb-2">
          <Row className="margin">
            <Col>
              {cardList
                .sort((a, b) => 0.5 - Math.random())
                .map(randomTile => (
                  <Tile
                    key={randomTile.id}
                    id={randomTile.id}
                    img={randomTile.img}
                    name={randomTile.name}
                    isClicked={this.state.isClicked}
                    handleClick={this.handleClick}
                  />
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
