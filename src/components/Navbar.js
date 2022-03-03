import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Navbar() {

  const [{ basket }] = useStateValue();
  return (
    <div className="navbar">
      {/* img */}
      <Link to="/">
        <img
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt="logo"
          className="img__logo"
        />
      </Link>
      {/* search */}
      <div className="search">
        <input type="text" className="search__input" />
        <SearchIcon className="search__icon" />
      </div>
      {/* options */}
      <div className="nav__options">
        <Link to='/login' className="login_nav_link">
          <div className="option__one">
            <div className="one_up">Hello, User</div>
            <div className="one_down">
              <strong>Sign In</strong>
            </div>
          </div>
        </Link>
        <div className="option__two">
          <div className="two_up">Return</div>
          <div className="two_down">
            <strong>& Orders</strong>
          </div>
        </div>
        <div className="option__three">
          <div>
            <Link to="/cart" className="basket_icon">
              <ShoppingBasketIcon />
            </Link>
          </div>
          <div className="cart_item">
            <strong>{basket.length}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
