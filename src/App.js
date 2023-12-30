import "./App.css";
import "./styles/landingpage.css";
import Wishlist from "./comp/Wishlist";
import Footer from "./comp/Footer.js";
import Navbar from "./comp/Navbar.js";
import Landingpage from "./comp/Landingpage.js";
import Profile from "./comp/Profile";
import Product from "./comp/Product.js";
import Signup from "./comp/Signup";
import Cart from "./comp/Cart.js";
import LoginPage from "./comp/LoginPage.js";
import CheckOut from "./comp/CheckOut.js";
import { useEffect, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecCategory from "./comp/SpecCategory";

export const GlobalInfo = createContext();
function App() {
  let [trackOrder, setTrackOrder] = useState(
    window.localStorage.getItem("trackOrder")
      ? JSON.parse(window.localStorage.getItem("trackOrder"))
      : []
  );

  let wish = window.localStorage.getItem("wish")
    ? JSON.parse(window.localStorage.getItem("wish"))
    : [];
  let arr = window.localStorage.getItem("arr")
    ? JSON.parse(window.localStorage.getItem("arr"))
    : [];
  let [len, setLen] = useState(arr ? arr.length : 0);
  let [cartLen, setCartLen] = useState(
    JSON.parse(window.localStorage.getItem("arr"))
      ? JSON.parse(window.localStorage.getItem("arr")).length
      : 0
  );
  let [wishLen, setWishLen] = useState(
    JSON.parse(window.localStorage.getItem("wish"))
      ? JSON.parse(window.localStorage.getItem("wish")).length
      : 0
  );
  var [isLogin, setLogin] = useState(false);
  const [data, setData] = useState();
  let [category, setCategory] = useState();
  const url = `https://dummyjson.com/products`;
  const options = {
    method: "GET",
  };

  async function getData() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      let products = JSON.parse(result);
      setData(products.products);
    } catch (error) {
      console.error(error);
    }
  }
  const urlCategory = `https://dummyjson.com/products/categories`;
  const optionsCatgeory = {
    method: "GET",
  };

  async function getDataCatgeory() {
    try {
      const response = await fetch(urlCategory, optionsCatgeory);
      const result = await response.text();
      let products = JSON.parse(result);
      setCategory(products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
    getDataCatgeory();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GlobalInfo.Provider
        value={{
          getData: getData,
          data: data,
          category: category,
          getDataCatgeory: getDataCatgeory,
          isLogin: isLogin,
          setLogin: setLogin,
          arr: arr,
          wish: wish,
          len: len,
          setLen: setLen,
          trackOrder: trackOrder,
          setTrackOrder: setTrackOrder,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Landingpage />
                  <Footer />
                </>
              }
            />
            {category
              ? category.map((e, i) => {
                  return (
                    <Route element={<SpecCategory cat={e} />} path={`/${e}`} />
                  );
                })
              : ""}

            {data
              ? data.map((e, i) => {
                  return (
                    <Route
                      path={`/${e.title}`}
                      element={<Product product={e} />}
                    />
                  );
                })
              : ""}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />

            {isLogin || window.localStorage.getItem("isLogin") ? (
              <Route
                path="/cart"
                element={
                  <>
                    <Navbar />
                    <Cart />
                    <Footer />
                  </>
                }
              />
            ) : (
              ""
            )}
            {isLogin || window.localStorage.getItem("isLogin") ? (
              <Route path="/profile" element={<Profile />} />
            ) : (
              ""
            )}
            {isLogin || window.localStorage.getItem("isLogin") ? (
              <Route path="/wishlist" element={<Wishlist />} />
            ) : (
              ""
            )}

            {isLogin || window.localStorage.getItem("isLogin") ? (
              <Route path="/checkout" element={<CheckOut />} />
            ) : (
              ""
            )}
            <Route path="*" element="404error" />
          </Routes>
        </BrowserRouter>
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
