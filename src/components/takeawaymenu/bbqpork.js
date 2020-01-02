import React from 'react';
import MenuItem from "./menuItem";
 
const BBQPork = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">BBQ Pork 猪肉</h3>
            <MenuItem itemNumber="37" itemName="Honey Glazed BBQ Pork" itemPrice="18.00" itemTag="GF"/>
            <MenuItem itemNumber="38" itemName="Sliced BBQ Pork in Plum Sauce" itemPrice="18.00" itemTag="GF"/>
            <MenuItem itemNumber="39" itemName="Sliced BBQ Pork with Vegetable" itemPrice="18.00" itemTag="GF"/>
        </div>
    );
}
 
export default BBQPork;