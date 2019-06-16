import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./navigation.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./pages/home";
import Menu from "./pages/menu";
import History from "./pages/history";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/our-history" component={History} />
      </Switch>
      <Footer/>
    </div>
  );
}



export default App;
