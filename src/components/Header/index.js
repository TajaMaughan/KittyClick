import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Score from "../Score"

const Header = () => {
    return(
    <Jumbotron>
        <h1>Test your Memory!</h1>
        <Score />
    </Jumbotron>
    )
}

export default Header;