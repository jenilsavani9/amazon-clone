import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* img */}
      <img
        src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
        alt="logo"
        className="img__logo"
      />
      {/* search */}
      <div className="search">
        <input type="text" className="search__input" />
        <SearchIcon className="search__icon" />
      </div>
      {/* options */}
      <div className="nav__options">
        <div className="option__one">
          <div className="one_up">Hello, User</div>
          <div className="one_down">
            <strong>Sign In</strong>
          </div>
        </div>
        <div className="option__two">
          <div className="two_up">Return</div>
          <div className="two_down">
            <strong>& Orders</strong>
          </div>
        </div>
        <div className="option__three">
          <div>
            <ShoppingBasketIcon />
          </div>
          <div className="cart_item">
            <strong>0</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
