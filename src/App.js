import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./navigation.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container className="App">
      <Row>
        <Navigation />
      </Row>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/history" component={History} />
      </Switch>
    </Container>
  );
}

const Home = () => {
  return (
    <div>
      <p>hello</p>
    </div>
  );
};
const Menu = () => {
  return (
    <div>
      <p>Menu</p>
    </div>
  );
};

const History = () => {
  return (
    <div>
      <p>History</p>
    </div>
  );
};

export default App;
