import React from "react";
import Tile from "../Tile";
import cardList from "../../cardList.json";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./style.css"

const CardContainer = () => {
  return (

      /* <Row>
        <Tile id={cardList[0]} name={cardList[0].name} img={cardList[0].img} />
        <Tile id={cardList[1]} name={cardList[1].name} img={cardList[1].img} />
        <Tile id={cardList[2]} name={cardList[2].name} img={cardList[2].img} />
        <Tile id={cardList[3]} name={cardList[3].name} img={cardList[3].img} />
      </Row>
      <Row>
        <Tile id={cardList[4]} name={cardList[4].name} img={cardList[4].img} />
        <Tile id={cardList[5]} name={cardList[5].name} img={cardList[5].img} />
        <Tile id={cardList[6]} name={cardList[6].name} img={cardList[6].img} />
        <Tile id={cardList[7]} name={cardList[7].name} img={cardList[7].img} />
      </Row>
      <Row>
        <Tile id={cardList[8]} name={cardList[8].name} img={cardList[8].img} />
        <Tile id={cardList[9]} name={cardList[9].name} img={cardList[9].img} />
        <Tile id={cardList[10]} name={cardList[10].name} img={cardList[10].img} />
        <Tile id={cardList[11]} name={cardList[11].name} img={cardList[11].img} />
      </Row> */
      /* {cardList.map(Tile => (
        <Tile id={card.id} name={card.name} img={card.img} />
      ))} */
    
  );
};

export default CardContainer;
