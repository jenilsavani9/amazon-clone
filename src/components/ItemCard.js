import React from "react";
import "../css/ItemCard.css";
import { useStateValue } from "./StateProvider";

function ItemCard(props) {

  const [{ }, dispatch] = useStateValue();
  const addToBasket = () => {

    dispatch({
      type: 'CHANGE_LOADER',
      loader: true,
      loader_status: 100
    });

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        title: props.title,
        imgUrl: props.imgUrl,
        price: props.price,
        stars: props.stars
      },
    });
  }

  return (
    <div className="item__card">
      <div className="title">
        <strong>{props.title}</strong>
      </div>
      <div className="item_price">
        <strong>$ {props.price}</strong>
      </div>
      <div className="stars">{"⭐".repeat(props.stars)}</div>
      <div className="div__img">
        <img src={props.imgUrl} alt="" className="item__card__img" />
      </div>
      <button className="add__to__cart__btn" onClick={addToBasket}>
        <strong>Add To Cart</strong>
      </button>
    </div>
  );
}

export default ItemCard;
