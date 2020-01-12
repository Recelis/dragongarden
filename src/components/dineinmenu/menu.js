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
            <Element name="menu"><h2><u>Dine-in Menu</u></h2></Element>
            <p><div className="badge badge-warning">GF</div> Gluten Free</p>
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
        <Row />
      </Container>
    </div>
  );
};


export default DineInMenu;
