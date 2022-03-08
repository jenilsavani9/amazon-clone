import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Navbar() {

  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  }

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
        <Link to={!user && '/login'} className="login_nav_link">
          <div className="option__one" onClick={handleAuth}>
            <div className="one_up">{user ? user?.email : 'Hello, User'}</div>
            <div className="one_down">
              <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
            </div>
          </div>
        </Link>
        <div className="option__two">
          <Link to='/orders' className="option_two_order_link">
            <div className="two_up">Return</div>
            <div className="two_down">
              <strong>& Orders</strong>
            </div>
          </Link>
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
