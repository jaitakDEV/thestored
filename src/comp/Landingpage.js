import React, { useContext, useEffect } from "react";

import slider1 from "../icons/slider1.png";
import slider2 from "../icons/slider2.png";
import slider3 from "../icons/slider3.png";
import "../styles/landingpage.css";
import { GlobalInfo } from "../App.js";
import Slider from "./Slider.js";
import ProductTile from "./ProductTile.js";
const Landingpage = () => {
  const { data } = useContext(GlobalInfo);
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="landingPage">
        <Slider images={[slider1, slider2, slider3]} />
        <div className="todaysdeal">
          <div className="dealHeader">
            <h1>Todays Deal</h1>
          </div>
          <div className="dealTile">
            {data ? (
              <ProductTile name={data[0].title} dataInfo={data} val={0} />
            ) : (
              ""
            )}
            {data ? (
              <ProductTile name={data[10].title} dataInfo={data} val={10} />
            ) : (
              ""
            )}
            {data ? (
              <ProductTile name={data[20].title} dataInfo={data} val={20} />
            ) : (
              ""
            )}
            {data ? (
              <ProductTile name={data[3].title} dataInfo={data} val={3} />
            ) : (
              ""
            )}
            {data ? (
              <ProductTile name={data[7].title} dataInfo={data} val={7} />
            ) : (
              ""
            )}
            {data ? (
              <ProductTile name={data[23].title} dataInfo={data} val={23} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="seasonSale">
          <div className="saleHeader">
            <h1>Season Sale</h1>
          </div>
          <div className="saleTile">
            {data ? (
              <ProductTile name={data[1].title} dataInfo={data} val={1} />
            ) : (
              ""
            )}
            {data ? (
              <ProductTile name={data[16].title} dataInfo={data} val={16} />
            ) : (
              ""
            )}
            {data ? (
              <ProductTile name={data[11].title} dataInfo={data} val={11} />
            ) : (
              ""
            )}
            {data ? (
              <ProductTile name={data[8].title} dataInfo={data} val={8} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
