import React, { useContext, useEffect, useState } from "react";
import Navbar from "../comp/Navbar.js";
import Footer from "../comp/Footer.js";

import "../styles/Product.css";
import { Link } from "react-router-dom";
import star from "../icons/star.png";
import { GlobalInfo } from "../App.js";
const Product = (props) => {
  const {
    data,

    arr,
    wish,
    len,
    setLen,
  } = useContext(GlobalInfo);

  function addToCart() {
    arr.push(props.product);
    window.localStorage.setItem("arr", JSON.stringify(arr));
    setLen(arr.length);
  }
  console.log(arr.length);
  function addToWish() {
    wish.push(props.product);
    window.localStorage.setItem("wish", JSON.stringify(wish));
  }

  return (
    <>
      <Navbar />
      <div className="productSection">
        <img src={props.product ? props.product.images[2] : "loading"} alt="" />

        <div className="productDesc">
          <h2>{data ? props.product.title : "loading"}</h2>
          <h4>${data ? props.product.price : "loading"}</h4>
          <p>{data ? props.product.description : "loading"}</p>
          <div className="rating">
            <img src={star} alt="" />
            {data ? props.product.rating : "loading"}
          </div>
          <p>stock : {data ? props.product.stock : "loading"}</p>
          <p>
            Discount : {data ? props.product.discountPercentage : "loading"}%
          </p>
        </div>
        <div className="btns">
          {window.localStorage.getItem("isLogin") ? (
            <button className="cartBtn" onClick={addToCart}>
              Add to cart {len}
            </button>
          ) : (
            <Link to="/login">
              <button className="cartBtn" onClick={addToCart}>
                Add to cart
              </button>
            </Link>
          )}
          {window.localStorage.getItem("isLogin") ? (
            <button className="cartBtn" onClick={addToWish}>
              Add to Wishlist
            </button>
          ) : (
            <Link to="/login">
              <button className="cartBtn" onClick={addToWish}>
                Add to Wishlist
              </button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
