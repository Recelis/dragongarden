import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Entree from "./entree";
import Soup from "./soup";
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


const TakeAwayMenu = () => {
  return (
    <div className="Component">
      <Container bsPrefix="menu">
        <Row>
          <Col md={12}>
            <Element name="menu"><h2><u>Takeaway Menu</u></h2></Element>
            <p><span className="badge badge-warning">GF</span> Gluten Free <span className="badge badge-warning">V</span> Vegetarian</p>
            <p>Food Allergies - Should you have food allergies, please advise staff as this restaurant cannot be held responsible.</p>
            <p>Prices include GST and are subject to change without notice.</p>
            <Entree />
            <Soup />
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


export default TakeAwayMenu;
