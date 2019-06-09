import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./navigation.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/history" component={History} />
      </Switch>
      <Footer/>
    </div>
  );
}

const History = () => {
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

const Footer = () => {
  return (
    <div>
      <p>Copyright created by Jacky Lui</p>
    </div>
  )
}

export default App;
