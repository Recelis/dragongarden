import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const History = () => {
  return (
    <div className="Component">
      <h1>Our History</h1>
      <Container>
        <Row>
          <Col><img src = "#" alt = "original photos"/></Col>
          <Col><p className = "">some stuff for Jimmy</p></Col>
        </Row>
        <Row>
          <Col><p className = "">some stuff about Douglas</p></Col>
          <Col><img src = "#" alt = "original photos"/></Col>
        </Row>
        <Row>
          <Col><img src = "#" alt = "original photos"/></Col>
          <Col><p className = "">Some stuff about current staff</p></Col>
        </Row>
      </Container>
    </div>
  );
};

export default History;

