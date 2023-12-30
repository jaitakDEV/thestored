import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  let year = new Date();

  return (
    <>
      <div className="about">
        <div className="aboutus">
          <h3>About us</h3>
          
Welcome to TheStored—your ultimate destination where style meets convenience. At TheStored, we're committed to transforming your online shopping experience. Our curated collections blend quality, innovation, and trendsetting products. Established in [Year], TheStored began with a passion for delivering exceptional items to customers worldwide. As we evolve, we invite you to be part of our story. Join us on social media, explore our curated selection, and experience the joy of shopping redefined. Thank you for choosing TheStored—your trusted destination for a seamless and stylish online shopping adventure.

        </div>
        <div className="foot">Copyright All rights reserved | by  Jai Tak {year.getFullYear()}</div>
      </div>
    </>
  );
};

export default Footer;
