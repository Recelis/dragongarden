import React from 'react';
import MenuItem from "./menuItem";
 
const SweetSour = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Sweet and Sour 糖醋</h3>
            <MenuItem itemNumber="59" itemName="Sweet and Sour Pork" itemPrice="16.50"/>
            <MenuItem itemNumber="60" itemName="Sweet and Sour Chicken" itemPrice="16.50"/>
            <MenuItem itemNumber="61" itemName="Sweet and Sour Fried Short Soup" itemPrice="16.50"/>
            <MenuItem itemNumber="62" itemName="Sweet and Sour Scallop" itemPrice="23.00"/>
            <MenuItem itemNumber="63" itemName="Sweet and Sour Fried King Prawn" itemPrice="23.00"/>
            <MenuItem itemNumber="64" itemName="Sweet and Sour Fish" itemPrice="19.50"/>
        </div>
    );
}
 
export default SweetSour;