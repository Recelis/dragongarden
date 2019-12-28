import React, { Component } from 'react';
import Logo from "../images/logo.png";
 
class Header extends Component {
    render() { 
        return (
            <div>
                <div className="d-flex justify-content-center my-0">
                    <img alt="logo" src={Logo} height="120px" />
                </div>
                <a 
                    href="https://www.google.com/maps/dir//-26.1915088,152.6566924/@-26.191509,152.656692,18z?hl=en"
                    alt="#"
                    className="d-flex justify-content-center my-0"
                > 
                    18 Wickham Street, Bruce Highway, GYMPIE
                </a>
                <p className="d-flex justify-content-center my-0">(Opposite Super Cheap Auto)</p>
                <div className="d-flex justify-content-center my-0">
                    <p className="mx-1">Phone: <a href="tel: 0754825700">(07) 5482 5700</a></p>
                    <p className="mx-1">Mobile Phone: <a href="tel:0413889889">0413 889 889</a> (Douglas)</p>
                </div>
            </div>
        );
    }
}
 
export default Header;