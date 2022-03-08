import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "../css/Orders.css";

function Orders() {
  const [{ basket, user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1 className="orders_your_orders">Your Orders</h1>
      {!user ? (
        <div className="orders_login_or_not_message">
          Sign In to View Orders
        </div>
      ) : (
        <div className="orders_order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
