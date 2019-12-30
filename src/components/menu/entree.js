import React from 'react';
import MenuItem from "./menuItem"
 
const Entree = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Entrée 头盘</h3>
            {/* <MenuItem itemNumber="1" itemName="Prawn Cocktail" itemPrice="10.50"/>
            <MenuItem itemNumber="2" itemName="Crab Cocktail" itemPrice="11.50"/> */}

            <MenuItem itemNumber="1" itemName="Special Mini Spring Rolls (4)" itemPrice="7.60"/>
            <MenuItem itemNumber="2" itemName="Dim Sim (4) Steamed or Fried" itemPrice="7.60"/>
            <MenuItem itemNumber="3" itemName="Deep Fried King Prawn (6)" itemPrice="10.80"/>
            <MenuItem itemNumber="4" itemName="Deep Fried Scallops (6)" itemPrice="10.80"/>
            <MenuItem itemNumber="5" itemName="King Prawns Cutlets (4)" itemPrice="12.00"/>

            {/* <MenuItem itemNumber="6" itemName="Sesame Prawn Toast (4)" itemPrice="8.00"/>
            <MenuItem itemNumber="8" itemName="Curried Puffs (4)" itemPrice="8.80"/> */}
        </div>
    );
}
 
export default Entree;