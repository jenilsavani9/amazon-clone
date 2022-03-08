import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [{ }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    dispatch({
      type: "CHANGE_LOADER",
      loader: true,
      loader_status: 40,
    });

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch({
          type: "CHANGE_LOADER",
          loader: true,
          loader_status: 100,
        });
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    dispatch({
      type: "CHANGE_LOADER",
      loader: true,
      loader_status: 40,
    });

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch({
          type: "CHANGE_LOADER",
          loader: true,
          loader_status: 100,
        });
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

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
            <input
              type="email"
              className="login_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <h5 className="password_h5">Password</h5>
            <input
              type="password"
              className="login_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login_btn" onClick={signIn}>
            Sign In
          </button>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>

          <button className="login_new_ac_btn" onClick={register}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
