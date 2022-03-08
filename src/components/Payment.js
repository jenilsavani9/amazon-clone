import React, { useEffect, useState } from "react";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
import { getSubtotal } from "./reducer";
import { Navigate, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios";
import "../css/Payment.css";
import { db } from "./firebase";

function Payment() {
  const navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        url: `/payments/create?total=${getSubtotal(basket) * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {

        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET'
        })

        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.massage : "");
  };

  const goToHome = () => {
    navigate("/");
  };

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
            <div className="payment_card_details">
              <form action="" onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment_item_price_total">
                  Order Total : $ {getSubtotal(basket)}
                </div>
                <button
                  className="payment_make_btn"
                  disabled={processing || disable || succeeded}
                >
                  {processing ? " Processing.." : "Make Payment"}
                </button>
              </form>
              {error && <div>{error}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
