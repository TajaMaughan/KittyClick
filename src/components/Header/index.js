import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Score from "../Score";
import "./style.css"

const Header = ({ score, message }) => {
  return (
      <Container>
    <Jumbotron className="text-center pt-1 pb-1 mb-0 header">
      <h3>Test your Memory!</h3>
      <h5>Try to click every image without clicking any a second time.</h5>
      <Score score={score} />
      <h5>{message}</h5>
    </Jumbotron>
    </Container>
  );
};

export default Header;
