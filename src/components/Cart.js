import React from "react";
import "../css/Cart.css";
import { getSubtotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Cart(props) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_page_title">Shopping Cart</div>
        {basket.length === 0 ? (
          <p className="empty_cart_msg">Your Cart Is Empty</p>
        ) : (
          basket.map((item) => {
            return (
              <div className="items_for_order">
                <div className="order_item_img">
                  <img src={item.imgUrl} alt="" className="cart_item_image" />
                </div>
                <div className="order_item_info">
                  <div className="order_item_name">{item.title}</div>
                  <div className="order_item_price">Price : $ {item.price}</div>
                </div>
                <div className="remove_cart">
                  <button className="remove_cart_btn">Remove Item</button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="cart_total">
        <div className="op_one">Subtotal ({basket.length} items): ${getSubtotal(basket)}</div>
        <div className="op_two">
          <input type="checkbox" /> This order contains a gift
        </div>
        <button className="cart_checkout_btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
