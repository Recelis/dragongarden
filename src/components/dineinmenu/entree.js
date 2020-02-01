import React from 'react';
import MenuItem from "./menuItem"
 
const Entree = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Entrée 头盘</h3>
            <MenuItem itemNumber="1" itemName="Prawn Cocktail" itemPrice="10.50"/>
            <MenuItem itemNumber="2" itemName="Crab Cocktail" itemPrice="11.50"/>
            <MenuItem itemNumber="3" itemName="Mini Spring Rolls (4)" itemPrice="8.80"/>
            <MenuItem itemNumber="4" itemName="King Prawn Cutlets (4)" itemPrice="14.00"/>
            <MenuItem itemNumber="5" itemName="Coconut King Prawns (4)" itemPrice="14.00"/>
            <MenuItem itemNumber="6" itemName="Sesame Prawn Toast (4)" itemPrice="8.00"/>
            <MenuItem itemNumber="7" itemName="Fried Scallops (6)" itemPrice="12.00"/>
            <MenuItem itemNumber="8" itemName="Curried Puffs (4)" itemPrice="8.80"/>
            <MenuItem itemNumber="9" itemName="Dim Sim (4) Steamed or Fried" itemPrice="8.80"/>            
        </div>
    );
}
 
export default Entree;