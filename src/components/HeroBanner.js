import React from 'react';
import Logo from "../images/logo.png";
import stock1 from "../images/stock1.jpg";
import stock2 from "../images/stock2.jpg";
import stock3 from "../images/stock3.jpg";

var Scroll = require('react-scroll');
var Element = Scroll.Element;

const HeroBanner = () => {
  // Rotate through stock images
  const images = [stock1, stock2, stock3];
  const heroImage = images[Math.floor(Math.random() * images.length)];

  return (
    <Element name="hero">
      <div className="hero-section">
        <img src={heroImage} alt="Dragon Garden Restaurant" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src={Logo} alt="Dragon Garden Logo" className="hero-logo" />
          <h1 className="hero-title">Dragon Garden Family Restaurant</h1>
          <p className="hero-subtitle">龙苑大酒家欢迎您品尝我们的传统中式佳肴</p>
          <p className="hero-tagline">Traditional Chinese Cuisine — Serving Gympie Since 1983</p>
          <div className="hero-cta">
            <a href="tel:0754825700" className="btn btn-dragon-primary">
              <i className="fa fa-phone" aria-hidden="true" /> Call to Book
            </a>
            <button className="btn btn-dragon-outline" onClick={() => {
              document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
            }}>
              View Menu
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HeroBanner;