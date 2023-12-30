import React, {
  useContext,
  useRef,
  useEffect,
  createContext,
  useState,
} from "react";
import { GlobalInfo } from "../App.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../styles/speccategory.css";
import ProductTile from "../comp/ProductTile.js";
import star from "../icons/star.png";
const SpecCategory = (props) => {
  const { getData, data, category, getDataCatgeory, isLogin, arr, wish } =
    useContext(GlobalInfo);
  let radio1 = useRef();
  let radio2 = useRef();
  let radio3 = useRef();
  let radio4 = useRef();
  let categoryMap = data
    ? data
        .map((e) => {
          return e;
        })
        .filter((e) => {
          return e.category === props.cat;
        })
    : "";
  let [n, setN] = useState(categoryMap);
  useEffect(() => {
    setN(categoryMap);
    radio1.current.checked = false;
    radio2.current.checked = false;
  }, [props.cat]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [props.cat]);
  return (
    <>
      <Navbar />
      <div className="filters">
        <div
          className={`filter1 `}
          onClick={() => {
            setN(
              categoryMap.filter((e) => {
                return e.rating > 4.5;
              })
            );
          }}
        >
          <input ref={radio1} type="radio" id="starFirst" name="filterStar" />
          <label htmlFor="starFirst">
            &gt;4.5
            <img src={star} alt="" />
          </label>
        </div>
        <div
          className={`filter1 `}
          onClick={() => {
            setN(
              categoryMap.filter((e) => {
                return e.rating > 4.3;
              })
            );
          }}
        >
          <input ref={radio2} type="radio" id="secondStar" name="filterStar" />
          <label htmlFor="secondStar">
            &gt;4.3
            <img src={star} alt="" />
          </label>
        </div>
        {/* <div className={`filter1 `} onClick={() => {}}>
          <input
            ref={radio3}
            type="radio"
            id="pricefilter"
            name="pricefilter"
          />
          <label htmlFor="pricefilter">&nbsp;low to high</label>
        </div>
        <div
          className={`filter1 `}
          onClick={() => {
            let a = [];
            a.push(
              n
                .map((e) => {
                  return e.price;
                })
                .sort((a, b) => {
                  return b - a;
                })
                .filter((i) => {
                  return n.map((j) => {
                    if (i == j.price) {
                      return j;
                    }
                  });
                })
            );
            setN(a);
            console.log(n);
          }}
        >
          <input
            ref={radio4}
            type="radio"
            id="pricefilterrev"
            name="pricefilter"
          />
          <label htmlFor="pricefilterrev">&nbsp; hight to low</label>
        </div> */}
        <button
          className="clearFilter"
          onClick={() => {
            radio1.current.checked = false;
            radio2.current.checked = false;

            setN(categoryMap);
          }}
        >
          clear filter
        </button>
      </div>

      <div className="productShow ">
        <h1>{props.cat}</h1>
        <div className="productTiles">
          {n
            ? n.map((ele, i) => {
                return <ProductTile val={i} dataInfo={n} name={ele.title} />;
              })
            : ""}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpecCategory;
