import React, { useContext, useEffect, useRef, useState } from "react";

import arrowL from "../icons/arrowL.png";
import arrowR from "../icons/arrowR.png";
import { GlobalInfo } from "../App.js";
import "../styles/slider.css";
const Slider = (props) => {
  let sliderSec = useRef();
  let imgWidth = useRef();
  //   let images = [slider1, slider2, slider3];
  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        slideRight();
      }, 6000);
    }, 5000);
  }, []);
  function slideRight() {
    return sliderSec.current
      ? (sliderSec.current.scrollLeft += imgWidth.current.offsetWidth)
      : "";
  }
  function slideLeft() {
    sliderSec.current.scrollLeft -= imgWidth.current.offsetWidth;
  }

  return (
    <>
      <div className="sliderSection" ref={sliderSec}>
        <div className="imagesSection">
          {props.images.map((e) => {
            return (
              <div className="imgKeeper" ref={imgWidth}>
                <img src={e} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="arrow">
        <img src={arrowL} alt="" onClick={slideLeft} />
        <img src={arrowR} alt="" onClick={slideRight} />
      </div>
    </>
  );
};

export default Slider;
