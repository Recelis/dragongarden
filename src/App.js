import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./navigation.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Header from "./components/header";
import Menu from "./components/menu";
import History from "./components/history";
import Footer from "./footer";



function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/our-history" component={History} />
      </Switch>
      <Footer/>
    </div>
  );
}



export default App;
