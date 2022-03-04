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
          <Route exact path="/" element={
            <Fragment>
              <Navbar />
              <Home />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
