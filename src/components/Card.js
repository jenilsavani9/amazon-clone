import React from "react";
import "../css/Card.css";

function Card(props) {
  return (
    <div className="card">
      <h3>{props.heading}</h3>
      <img src={props.imgUrl} alt="" />
    </div>
  );
}

export default Card;
