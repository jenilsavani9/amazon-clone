import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
          alt="logo"
          className="login_logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form className="login_form">
          <div>
            <h5 className="email_h5">E-mail</h5>
            <input type="email" className="login_email" />
          </div>
          <div>
            <h5 className="password_h5">Password</h5>
            <input type="password" className="login_password" />
          </div>
          <button className="login_btn">Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>

      <div className="login_new_link">
        <p>New to Amazon?</p>
        <button className="login_new_ac_btn">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
