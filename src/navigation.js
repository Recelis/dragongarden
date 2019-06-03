import React from "react";
import Navbar from "react-bootstrap/Navbar"; 
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand><Link to = "/">Dragon Garden Family Restaurant</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to = "/">Home</Link></Nav.Link>
        <Nav.Link><Link to = "/menu">Menu</Link></Nav.Link>
        <Nav.Link><Link to = "/history">History</Link></Nav.Link>
        <Nav.Link>Contact Us</Nav.Link>
        <Nav.Link>Facebook Icon</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Navigation;
