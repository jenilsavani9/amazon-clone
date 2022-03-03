import React from "react";
import "../css/Cart.css";
import CartItem from "./CartItem";
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
              <CartItem key={item.id} title={item.title} price={item.price} imgUrl={item.imgUrl} id={item.id} stars={item.stars} />
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
