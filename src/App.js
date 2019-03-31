import React, { Component } from "react";
import Tile from "./components/Tile";
import cardList from "./cardList.json";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

class App extends Component {
  //set initial state
  state = {
      score: 0,
      clickedArray: [],
      message: "Click an image to begin"
    }

    //event to handle click
  handleClick = (event) => {
    //checks if the id of the clicked image is already in the clickedArray
    //if it is, reset.
    if (this.state.clickedArray.includes(event.target.id)) {
      this.setState({ 
        score: 0, 
        clickedArray: [],
        message: "That's already been clicked. You lose!"
      });
    }
    //if it's not, add the id to the clickedArray and increment score
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat(event.target.id),
        score: this.state.score + 1,
        message: "Good Guess! Keep going."
      });
    }
    //if all 12 images have been clicked, let the player know they won.
    if(this.state.score === 11) {
      this.setState({
        score: 0,
        clickedArray: [],
        message: "You win!"
      })
    }
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} message={this.state.message}/>
        <Container className="pt-1 pb-2">
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
