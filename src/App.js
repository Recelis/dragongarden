import React, { Component } from "react";
import "./App.css";


import Header from "./components/header";
import Details from "./components/details";
import Welcome from "./components/welcome";
import Menu from "./components/menu/menu";
import Footer from "./components/footer";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import OpenHours from "./components/openHours";

class App extends Component {
  constructor(){
    super()
  }
  scrollToElement(element) {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Welcome />
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger mx-1" onClick={()=>this.scrollToElement('hours')}>
          Hours
        </button>
        <button className="btn btn-danger mx-1" onClick={()=>this.scrollToElement('menu')}>
          Menu
        </button>
      </div>
      <hr/>
      <Details />
      <OpenHours />
      <hr/>
      <Menu/>
      <hr/>
      <Footer/>
    </div>
  );
  }
}



export default App;
