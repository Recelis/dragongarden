import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs={4}>Opening Times</Col>
        <Col xs={4}>Address</Col>
        <Col xs={4}>Phone Number + Booking</Col>
      </Row>
      <Row>
        <Col xs={4}><p>Copyright Dragon Garden Restaurant, created by Jacky Lui</p></Col>
        <Col xs={4}>maps</Col>
        <Col xs={4}>facebook</Col>
      </Row>
    </Container>
  );
};

export default Footer;

/*
  <div>
       
      </div>*/
