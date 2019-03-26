import React from "react";

function Card(props) {
    return (
        <div>
            <img alt={props.name} src={props.img} id={props.id} /*onClick={}*/ />
        </div>
    );
}

export default Card;