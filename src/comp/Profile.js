import React, { useEffect, useRef, useContext } from "react";
import Navbar from "./Navbar.js";
import "../styles/Profile.css";
import Footer from "./Footer.js";
import { GlobalInfo } from "../App.js";
import { Link } from "react-router-dom";
const Profile = () => {
  let address = useRef();

  const {
    getData,
    data,
    category,
    getDataCatgeory,
    isLogin,
    setLogin,
    arr,
    setCartLen,
    setWishLen,
    trackOrder,
  } = useContext(GlobalInfo);
  return (
    <>
      <Navbar />
      <div className="profileSection">
        <div className="personalDetail">
          <h2>Personal Detail</h2>
          <div className="name">
            <h3>Name</h3>:<p>{window.localStorage.getItem("userName")}</p>
          </div>
          <div className="email">
            <h3>Email</h3>:<p> {window.localStorage.getItem("email")}</p>
          </div>
          <div className="address">
            {window.localStorage.getItem("address") ? (
              <>
                <h3>Address: </h3>
                <p> {window.localStorage.getItem("address")}</p>
              </>
            ) : (
              ""
            )}
          </div>
          <div class="phoneNumber">
            {window.localStorage.getItem("phoneNumber") ? (
              <>
                <h3>Phone: </h3>
                <p> {window.localStorage.getItem("phoneNumber")}</p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="trackOrder">
          <h3 className="trackOrderHeader">Track Order</h3>
          {window.localStorage.getItem("trackOrder")
            ? JSON.parse(window.localStorage.getItem("trackOrder")).map((e) => {
                return <div>{e.title ? e.title : e}</div>;
              })
            : "no order to track"}
        </div>
        <div className="logOut">
          <Link to="/">
            <button
              onClick={() => {
                trackOrder.splice(0, trackOrder.length);
                setLogin(false);
                localStorage.clear();
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
