import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar.js";
import "../styles/Login.css";
import Footer from "./Footer.js";
import { GlobalInfo } from "../App.js";
import logo from "../icons/Logo.png";
import { Link } from "react-router-dom";
const LoginPage = () => {
  let [name, setName] = useState(null);
  let [pass, setPass] = useState(null);
  let [mail, setMail] = useState(null);
  let userName = useRef();

  let email = useRef();
  let password = useRef();
  let submitBtn = useRef();
  const { getData, data, category, getCategory, isLogin, setLogin } =
    useContext(GlobalInfo);
  function isTrue() {
    if (name && pass && mail) {
      setLogin(true);
    } else {
      alert("enter required details!!");
    }
  }

  return (
    <>
      <Navbar />
      <div className="loginSec">
        <h1>Login</h1>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form action="">
          <input
            required
            type="text"
            placeholder="Name"
            onChange={function () {
              setName(userName.current.value.trim());
              window.localStorage.setItem(
                "userName",
                userName.current.value.trim()
              );
            }}
            ref={userName}
          />

          <input
            required
            type="email"
            placeholder="Email"
            onChange={function () {
              setMail(email.current.value.trim());
              window.localStorage.setItem("email", email.current.value.trim());
            }}
            ref={email}
          />
          <input
            required
            type="password"
            placeholder="Password"
            onChange={function () {
              setPass(password.current.value.trim());
              window.localStorage.setItem(
                "password",
                password.current.value.trim()
              );
            }}
            ref={password}
          />

          <Link to={name && pass && mail ? "/" : "/login"}>
            <button
              className="submitBtn"
              type="submit"
              ref={submitBtn}
              onClick={isTrue}
            >
              submit
            </button>
          </Link>
        </form>

        <p>
          New user? <Link to="/signup">Signup</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
