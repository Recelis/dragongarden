import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";


const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" bsPrefix="navbar">
      <Navbar.Brand>
        <Link to="/">
          
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" bsPrefix="nav">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/menu">Menu</Link>
          </Nav.Link>
          {/* <Nav.Link><Link to = "/our-history">Our History</Link></Nav.Link> */}
          <Nav.Link>Contact Us</Nav.Link>
          <Nav.Link>Facebook Icon</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
