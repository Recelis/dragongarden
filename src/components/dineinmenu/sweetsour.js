import React from 'react';
import MenuItem from "./menuItem";
 
const SweetSour = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Sweet and Sour 糖醋</h3>
            <MenuItem itemNumber="66" itemName="Sweet and Sour Fried Short Soup" itemPrice="19.50"/>
            <MenuItem itemNumber="57" itemName="Sweet and Sour Pork" itemPrice="19.50"/>
            <MenuItem itemNumber="68" itemName="Sweet and Sour Chicken" itemPrice="19.50"/>
            <MenuItem itemNumber="69" itemName="Sweet and Sour Fried King Prawn" itemPrice="26.00"/>
            <MenuItem itemNumber="70" itemName="Sweet and Sour Fish" itemPrice="20.50"/>
        </div>
    );
}
 
export default SweetSour;