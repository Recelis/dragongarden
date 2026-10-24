import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Entree from "./entree";
import Soup from "./soup";
import Banquet from "./banquet";
import TopLineSelections from "./toplineselections";
import SpecialtiesHouse from "./specialtieshouse.js";
import Chicken from "./chicken";
import Beef from "./beef";
import BBQPork from "./bbqpork";
import Fish from "./fish";
import KingPrawn from "./kingprawn";
import Scallops from "./scallop";
import Duck from "./duck";
import SweetSour from "./sweetsour";
import Omelette from "./omelette";
import Childrens from "./childrens";
import Rice from "./rice";
import Desserts from "./desserts";

var Scroll = require('react-scroll');
var Element = Scroll.Element;

const DineInMenu = () => {
  return (
    <div className="Component">
      <Container bsPrefix="menu">
        <Row>
          <Col md={12}>
            <Element name="menu">
              <div className="section-header">
                <h2>Dine-in Menu</h2>
                <p className="subtitle">Enjoy the atmosphere — served at your table</p>
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
            <Banquet />
            <TopLineSelections />
            <SpecialtiesHouse />
            <KingPrawn />
            <Scallops />
            <Beef />
            <Chicken />
            <BBQPork />
            <SweetSour />
            <Fish />
            <Duck />
            <Omelette />
            <Rice />
            <Childrens />
            <Desserts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DineInMenu;