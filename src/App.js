import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
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
