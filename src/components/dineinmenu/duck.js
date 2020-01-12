import React from 'react';
import MenuItem from "./menuItem";
 
const Duck = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Duck 鸭</h3>
            <MenuItem itemNumber="74" itemName="Fried Duck in Plum Sauce" itemPrice="27.00"/>
            <MenuItem itemNumber="75" itemName="Fried Duck in Lemon Sauce" itemPrice="27.00"/>
            <MenuItem itemNumber="76" itemName="Steamed Duck with Assorted Meat" itemPrice="28.00"/>
            <MenuItem itemNumber="77" itemName="Steamed Duck with Mushroom" itemPrice="27.00" itemTag="GF"/>            
        </div>
    );
}
 
export default Duck;