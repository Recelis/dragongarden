import React, { Component } from 'react';
import Logo from "../images/logo.png";
 
class Header extends Component {
    render() { 
        return (
            <div>
                <div className="d-flex justify-content-center my-0">
                    <img alt="logo" src={Logo} height="120px" />
                </div>
                <div className="d-flex justify-content-center">
                    <i>In Gympie since 1983</i>
                </div>
            </div>
        );
    }
}
 
export default Header;