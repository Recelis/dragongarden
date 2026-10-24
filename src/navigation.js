import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar className="navbar-dragon" expand="lg" fixed="top">
      <Navbar.Brand>
        <ScrollLink to="hero" smooth={true} duration={500} spy={true} offset={-70}>
          Dragon Garden
        </ScrollLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={ScrollLink} to="hero" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">
            Home
          </Nav.Link>
          <Nav.Link as={ScrollLink} to="menu" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">
            Menu
          </Nav.Link>
          <Nav.Link as={ScrollLink} to="hours" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">
            Hours
          </Nav.Link>
          <Nav.Link as={ScrollLink} to="map" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">
            Find Us
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="tel:0754825700" className="phone-number">
            <i className="fa fa-phone" aria-hidden="true" /> (07) 5482 5700
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com/DragonGardenRestaurant/" target="_blank" rel="noreferrer" className="d-flex align-items-center px-2">
            <i className="fa fa-facebook" aria-hidden="true" style={{ lineHeight: 1, fontSize: '1.2rem' }} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;