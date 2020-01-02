import React, { Component } from "react";
import "./App.css";


import Header from "./components/header";
import Details from "./components/details";
import Welcome from "./components/welcome";
import TakeAwayMenu from "./components/takeawaymenu/menu";
import DineInMenu from "./components/dineinmenu/menu";
import Footer from "./components/footer";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import OpenHours from "./components/openHours";

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu: 'takeaway'
    }
  }
  setMenu(state){
    this.setState({
      menu: state
    })
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Details />
      <OpenHours />
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger mx-1" onClick={()=>this.setMenu('takeaway')}>
          Take Away Menu
        </button>
        <button className="btn btn-danger mx-1" onClick={()=>this.setMenu('dinein')}>
          Dine-in Menu
        </button>
      </div>
      {(this.state.menu === 'takeaway') ? <TakeAwayMenu /> : <DineInMenu />}
      <hr/>
      <Footer/>
    </div>
  );
  }
}



export default App;
