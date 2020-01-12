import React from 'react';
import MenuItem from "./menuItem";
 
const BBQPork = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Pork 猪肉</h3>
            <MenuItem itemNumber="63" itemName="Honey Glazed BBQ Pork" itemPrice="20.50" itemTag="GF"/>
            <MenuItem itemNumber="64" itemName="Braised BBQ Pork in Plum Sauce" itemPrice="20.50" itemTag="GF"/>
            <MenuItem itemNumber="65" itemName="Braised BBQ Pork with Vegetable" itemPrice="20.50" itemTag="GF"/>
        </div>
    );
}
 
export default BBQPork;