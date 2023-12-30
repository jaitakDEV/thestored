import React, { useEffect, useRef, useContext, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import search from "../icons/searchIcon.png";
import logo from "../icons/Logo.png";
import hambuger from "../icons/hamburger.png";
import { GlobalInfo } from "../App.js";
import cart from "../icons/cart.png";
import profile from "../icons/profile.png";
import wish from "../icons/wish.png";
const Home = () => {
  const { arr, isLogin, len, setLen } = useContext(GlobalInfo);
  useEffect(() => {
    if (isLogin) {
      window.localStorage.setItem("isLogin", isLogin);
    }
  });

  function createNavCategory(nameLink, name) {
    return (
      <Link to={`/${nameLink}`}>
        <h4>{name}</h4>
      </Link>
    );
  }
  let nav = useRef();
  let navEle = useRef();
  let navbar = useRef();
  let toggleHam = useRef();
  let hamburger = useRef();
  let navEle2 = useRef();
  useEffect(() => {
    toggleHam.current.classList.remove("slideIn");
    nav.current.style.height = navEle.current.offsetHeight + "px";
    toggleHam.current.style.top =
      nav.current.offsetHeight + navbar.current.offsetHeight + "px";
    toggleHam.current.style.height =
      window.innerHeight -
      (navbar.current.offsetHeight + nav.current.offsetHeight) +
      "px";

    toggleHam.current.style.left = -toggleHam.current.offsetWidth + "px";
    window.onscroll = function () {
      toggleHam.current.classList.remove("slideIn");

      if (window.scrollY >= nav.current.offsetHeight) {
        navbar.current.classList.add("fixed");
        toggleHam.current.classList.add("fixed2");
        toggleHam.current.style.top = navbar.current.offsetHeight + "px";
        toggleHam.current.style.height =
          window.innerHeight - navbar.current.offsetHeight + "px";
      } else {
        navbar.current.classList.remove("fixed");
        toggleHam.current.classList.remove("fixed2");
        toggleHam.current.style.top =
          nav.current.offsetHeight + navbar.current.offsetHeight + "px";
        toggleHam.current.style.height =
          window.innerHeight -
          (navbar.current.offsetHeight + nav.current.offsetHeight) +
          "px";
      }
    };
  });
  function toggleExt(e) {
    if (toggleHam.current.classList.contains("slideIn")) {
      toggleHam.current.classList.remove("slideIn");
    } else {
      toggleHam.current.classList.add("slideIn");
    }
  }

  return (
    <>
      <div className="nav" ref={nav}>
        <div className="navele" ref={navEle}>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="searchBar">
            <input type="text" name="" id="" placeholder="search here!!" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img src={search} alt="" />
            </a>
          </div>
          {isLogin || window.localStorage.getItem("isLogin") ? (
            <div className="bar3">
              <Link to="/cart">
                <img width={"30px"} src={cart} alt="" />
                {len}
              </Link>
              <Link to="/wishlist">
                <img width={"30px"} src={wish} alt="" />
              </Link>
              <Link to="/profile">
                <img width={"30px"} src={profile} alt="" />
              </Link>
            </div>
          ) : (
            <div className="loginSign">
              <Link to="/login" className="login">
                LOGIN
              </Link>
              <Link to="/signup" className="signin">
                SIGNUP
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="navbar" ref={navbar}>
        <div className="navele2" ref={navEle2}>
          <img
            src={hambuger}
            ref={hamburger}
            className="hamburger"
            alt=""
            width="25px"
            onClick={toggleExt}
          />
          <Link to={`/`}>
            <h4>Home</h4>
          </Link>
          {createNavCategory("smartphones", "Smartphones")}
          {createNavCategory("laptops", "Laptops")}
          {createNavCategory("fragrances", "Fragrances")}
          {createNavCategory("groceries", "Groceries")}
          {createNavCategory("skincare", "Skincare")}
          {createNavCategory("home-decoration", "Home-decoration")}
        </div>
      </div>
      <div className="hamburgerExt" ref={toggleHam}>
        <Link to={`/`}>
          <h4>Home</h4>
        </Link>
        {createNavCategory("smartphones", "Smartphones")}
        {createNavCategory("laptops", "Laptops")}
        {createNavCategory("fragrances", "Fragrances")}
        {createNavCategory("groceries", "Groceries")}
        {createNavCategory("skincare", "Skincare")}
        {createNavCategory("home-decoration", "Home-decoration")}
      </div>
    </>
  );
};

export default Home;
