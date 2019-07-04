import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../images/stock1.jpg";
import Image2 from "../images/stock2.jpg";
import Image3 from "../images/stock3.jpg";

import { Element } from "react-scroll";

const Home = () => {
  return (
    <Carousel className = "carousel">
      <Carousel.Item>
        <img className="carousel_image" src={Image1} alt="First slide" />
        <Carousel.Caption>
          <h3>Pork Chow Mein</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel_image" src={Image2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Mongolian Beef</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel_image" src={Image3} alt="Third slide" />

        <Carousel.Caption bsPrefix = "carousel-caption">
          <h3>Bird's Nest</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
