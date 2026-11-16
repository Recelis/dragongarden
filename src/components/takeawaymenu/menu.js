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
            <Element name="menu">
              <div className="section-header">
                <h2>Takeaway Menu</h2>
                <p className="subtitle">Pick-up or delivery — your favourites to go</p>
              </div>
            </Element>
            <div className="menu-info-bar">
              <span><span className="badge badge-warning" style={{marginRight: '0.3rem'}}>GF</span> Gluten Free</span>
              <span><span className="badge badge-warning">V</span> Vegetarian</span>
            </div>
            <p className="menu-info-text">Food Allergies — Please advise staff. This restaurant cannot be held responsible.</p>
            <p className="menu-info-text">Prices include GST and are subject to change without notice.</p>
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
      </Container>
    </div>
  );
};

export default TakeAwayMenu;