import React from "react";
import moment from "moment";
import CheckoutItem from "./CheckoutItem";
import "../css/Orders.css";

function Order(props) {
  return (
    <div className="order">
      <div className="order_time_date_order_id">
        <div className="order_order_time_date">
          <h2>Order</h2>
          <p>
            {moment
              .unix(props.order.data.created)
              .format("MMMM Do YYYY, h:mma")}
          </p>
        </div>
        <p className="order_id">
          <small>{props.order.id}</small>
        </p>
      </div>
      <div className="order_page_list">
        {props.order.data.basket?.map((item) => (
          <CheckoutItem
            key={item.id}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            id={item.id}
            stars={item.stars}
            hideBtn
          />
        ))}
      </div>
      <p className="order_page_total">
        Order Total : ${props.order.data.amount / 100}
      </p>
    </div>
  );
}

export default Order;
