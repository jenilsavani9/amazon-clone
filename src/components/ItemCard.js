import React from "react";
import "../css/ItemCard.css";

function ItemCard(props) {
  return (
    <div className="item__card">
      <div className="title">
        <strong>{props.title}</strong>
      </div>
      <div className="stars">{"⭐".repeat(props.stars)}</div>
      <div className="div__img">
        <img src={props.imgUrl} alt="" className="item__card__img" />
      </div>
      <button className="add__to__cart__btn">
        <strong>Add To Cart</strong>
      </button>
    </div>
  );
}

export default ItemCard;
