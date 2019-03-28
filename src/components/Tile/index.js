import React from "react";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Tile = props => {
  return (
    <Col xs={3}>
      {/* <Card> */}
        <Image style={{height: 200, width: 200, padding: 10}} alt={props.name} src={props.img} id={props.id} isClicked={props.isClicked} fluid />
      {/* </Card> */}
    </Col>
  );
};

export default Tile;
