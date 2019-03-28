import React from "react";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./style.css";

const Tile = props => {

  const handleClick = () => {
    alert("clicked");
  }

  return (
    <Image className="col-3 p-2 p-lg-3 border rounded-circle shadow background"
      style={{ height: "auto", width: "auto"}}
      alt={props.name}
      src={props.img}
      id={props.id}
      onClick={handleClick}
      isClicked={props.isClicked}
      fluid
    />
  );
};

export default Tile;
