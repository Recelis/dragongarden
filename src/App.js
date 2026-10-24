import React, { Component } from "react";
import "./App.css";

import Navigation from "./navigation";
import HeroBanner from "./components/HeroBanner";
import Welcome from "./components/welcome";
import Details from "./components/details";
import OpenHours from "./components/openHours";
import TakeAwayMenu from "./components/takeawaymenu/menu";
import DineInMenu from "./components/dineinmenu/menu";
import GoogleMaps from "./components/GoogleMaps";
import Footer from "./components/footer";

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
        <Navigation />
        <HeroBanner />
        
        <div className="section-dragon">
          <div className="badge-row">
            <span className="badge badge-dragon">LICENSED</span>
            <span className="badge badge-dragon">AIR CONDITIONED</span>
            <span className="badge badge-dragon">TAKE AWAY</span>
          </div>
          <Welcome />
        </div>

        <Details />
        <OpenHours />

        <div className="section-dragon section-dragon-alt" id="menu-section">
          <div className="section-header">
            <h2>Our Menu</h2>
            <p className="subtitle">Traditional Chinese dishes prepared fresh to order</p>
          </div>
          <div className="menu-toggle-bar">
            <button 
              className={`btn ${this.state.menu === 'takeaway' ? 'active' : ''}`}
              onClick={() => this.setMenu('takeaway')}
            >
              <i className="fa fa-shopping-bag" aria-hidden="true" /> Take Away Menu
            </button>
            <button 
              className={`btn ${this.state.menu === 'dinein' ? 'active' : ''}`}
              onClick={() => this.setMenu('dinein')}
            >
              <i className="fa fa-cutlery" aria-hidden="true" /> Dine-in Menu
            </button>
          </div>
          {this.state.menu === 'takeaway' ? <TakeAwayMenu /> : <DineInMenu />}
        </div>

        <GoogleMaps />
        <Footer />
      </div>
    );
  }
}

export default App;