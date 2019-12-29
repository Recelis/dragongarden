import React from "react";

var Scroll = require('react-scroll');
var Element = Scroll.Element;

const Footer = () => {
  return (
    <div className="d-flex flex-fill justify-content-center">
        <div className="d-flex justify-content-center">
          <p className="footer-text">
            {" "}
            &#169; 2020 Copyright. All Rights Reserved. Dragon Garden Family Restaurant Gympie
          </p>
        </div>
    </div>
  );
};

export default Footer;
