import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import Loader from "./components/Loader";
import Payment from "./components/Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./components/Orders";

const stripePromise = loadStripe(
  'pk_test_51KaYFbDY3X0pV9CNjZSSXfIwZlWb9yexRBk1Mf7V3Ve4xezMLP9kG9RPVDp5vgUsyb6rwkWEX1q4zHHzdFZzYrEH00Op9wVpxN'
);

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Loader />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/orders" element={
            <Fragment>
              <Navbar />
              <Orders />
              <Footer />
            </Fragment>
          } />
          <Route exact path="/cart" element={
            <Fragment>
              <Navbar />
              <Cart />
              <Footer />
            </Fragment>
          } />
          <Route exact path="/checkout" element={
            <Fragment>
              <Navbar />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
              <Footer />
            </Fragment>
          } />
          <Route exact path="/" element={
            <Fragment>
              <Navbar />
              <Home />
              <Footer />
            </Fragment>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
