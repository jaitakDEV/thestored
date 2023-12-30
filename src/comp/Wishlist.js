import React, { useContext, useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Bin from "../icons/bin.png";
import "../styles/Cart.css";
import { Link } from "react-router-dom";
import { GlobalInfo } from "../App.js";
const Wishlist = () => {
  const { arr, wish, setLen } = useContext(GlobalInfo);
  let [wishList, setWish] = useState(window.localStorage.getItem("wish"));
  let finalWishList = wishList ? JSON.parse(wishList) : "";
  function delEle(index) {
    wish.splice(index, 1);
    window.localStorage.setItem("wish", JSON.stringify(wish));
    setWish(window.localStorage.getItem("wish"));
  }
  function addToCart(e, i) {
    arr.push(e);
    setLen(JSON.parse(window.localStorage.getItem("arr")).length + 2);
    window.localStorage.setItem("arr", JSON.stringify(arr));
    setLen(arr.length);
    delEle(i);
  }
  return (
    <>
      <Navbar />
      <div className="wishSection">
        <h1>Wishlist</h1>
        {finalWishList.length != 0
          ? finalWishList.map((e, i) => {
              return (
                <>
                  <div className="productCart">
                    <Link to={`/${e.title}`}>
                      <div className="tile">
                        <div className="imgProduct">
                          <img src={e.thumbnail} alt="" />
                        </div>
                        <div className="title">{e.title}</div>
                        <div className="price">${e.price}</div>
                      </div>
                    </Link>
                    <button
                      className="bin"
                      onClick={() => {
                        delEle(i);
                      }}
                    >
                      <img src={Bin} alt="" />
                    </button>
                  </div>
                  <button
                    className="addToCart"
                    onClick={() => {
                      addToCart(e, i);
                    }}
                  >
                    Add to Cart
                  </button>
                </>
              );
            })
          : "your wishlist is empty"}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
