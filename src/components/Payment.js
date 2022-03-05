import React from "react";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
import { getSubtotal } from "./reducer";
import { useNavigate } from "react-router-dom";

import "../css/Payment.css";

function Payment() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_heading">
        <p>Checkout ({basket.length} Items)</p>
      </div>
      {basket.length === 0 ? (
        <div className="checkout_go_to_home_info">
          <p>No products To CheckOut.</p>
          <button className="checkout_go_to_home" onClick={goToHome}>
            Go To Home
          </button>
        </div>
      ) : (
        <div className="checkout_info">
          <div className="checkout_info_1">
            <div className="checkout_address_label">
              <p>Delivery Address</p>
            </div>
            <div className="checkout_address">
              <p>{user.email}</p>
              <p>174, new saktivijay so., surat</p>
            </div>
          </div>
          <div className="checkout_info_2">
            <div className="checkout_item_label">
              <p>Review Items And Delivery</p>
            </div>
            <div className="items-for-checkout">
              {basket.map((item) => {
                return (
                  <CheckoutItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    id={item.id}
                    stars={item.stars}
                  />
                );
              })}
            </div>
          </div>
          <div className="checkout_info_3">
            <div className="checkout_payment_label">Payment Method</div>
            <div>
              <div className="checkout_card_detail">Card Details</div>
              <div className="checkout_card_num_date">
                <div className="checkout_card_number">Card Number</div>
                <div className="checkout_card_date">Date</div>
              </div>
              <div className="checkout_card_price_total">
                <div>Order total : $ {getSubtotal(basket)}</div>
                <button className="checkout_card_price_total_btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
