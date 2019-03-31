import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Score from "../Score";

const Header = ({ score, message }) => {
  return (
      <Container>
    <Jumbotron className="text-center pt-1 pb-1 mb-0">
      <h2>Test your Memory!</h2>
      <h6>Click on an image to start. Every time you click an image they will render in a different order. Make sure you don't click the same image twice or the score will reset. You win when your score equals 12</h6>
      <Score score={score} />
      <h6>{message}</h6>
    </Jumbotron>
    </Container>
  );
};

export default Header;
