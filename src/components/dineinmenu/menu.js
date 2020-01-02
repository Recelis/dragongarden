import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Entree from "./entree";
import Soup from "./soup";
import Banquet from "./banquet";
import ChefsSuggestionSpecial from "./chefsSuggestionSpecial";
import Chicken from "./chicken";
import Beef from "./beef";
import BBQPork from "./bbqpork";
import KingPrawn from "./kingprawn";
import ScallopsFish from "./scallopfish";
import Duck from "./duck";
import SweetSour from "./sweetsour";
import Omelette from "./omelette";
import ChowMein from "./chowmein";
import Rice from "./rice";


var Scroll = require('react-scroll');
var Element = Scroll.Element;


const DineInMenu = () => {
  return (
    <div className="Component">
      <Container bsPrefix="menu">
        <Row>
          <Col md={12}>
            <Element name="menu"><h2><u>Dine-in Menu</u></h2></Element>
            <p><div className="badge badge-warning">GF</div> Gluten Free</p>
            <Entree />
            <Soup />
            <Banquet />
            <ChefsSuggestionSpecial />
            <Chicken />
            <Beef />
            <BBQPork />
            <KingPrawn />
            <ScallopsFish />
            <Duck />
            <SweetSour />
            <Omelette />
            <ChowMein />
            <Rice />
          </Col>
        </Row>
        <Row />
      </Container>
    </div>
  );
};


export default DineInMenu;
