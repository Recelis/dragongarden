import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import StockPhoto from "../images/stock1.jpg";

const Menu = () => {
  return (
    <div className="Component">
      <Container bsPrefix="menu">
        <Row>
          <Col md={6}>
            <h2>Food</h2>
            <ItemPrice />
            <ItemPrice />
            <ItemPrice />
            <ItemPrice />
            <ItemPrice />
            <ItemPrice />
            <h2>Drinks</h2>
            <ItemPrice />
            <ItemPrice />
            <ItemPrice />
            <ItemPrice />
            <ItemPrice />
            <ItemPrice />
          </Col>
          <Col md={6}>
            <Row>
              <Col lg={6}>
                <Picture />
              </Col>
              <Col lg={6}>
                <Picture />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Picture />
              </Col>
              <Col lg={6}>
                <Picture />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row />
      </Container>
    </div>
  );
};

const ItemPrice = () => {
  return (
    <Row>
      <Col>meal</Col>
      <Col>$price</Col>
    </Row>
  );
};

const Picture = () => {
  return (
    <div className="menu_img">
      <Image src={StockPhoto} alt="stockphoto" rounded fluid />
    </div>
  );
};

export default Menu;
