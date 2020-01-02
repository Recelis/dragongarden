import React from 'react';
import MenuItem from "./menuItem"
 
const Soup = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Soup 汤</h3>
            <MenuItem itemNumber="10" itemName="Sweet Corn with Minced Chicken Soup" itemPrice="7.90"/>
            <MenuItem itemNumber="11" itemName="Sweet Corn with Crab Meat Soup" itemPrice="8.90"/>
            <MenuItem itemNumber="12" itemName="Seafood Combination with Bean Curd Soup" itemPrice="8.90"/>
            <MenuItem itemNumber="13" itemName="Hot and Sour Soup" itemPrice="8.90"/>
            <MenuItem itemNumber="14" itemName="Short Soup (wonton)" itemPrice="7.90"/>
            <MenuItem itemNumber="15" itemName="Long Soup (noodle)" itemPrice="7.90"/>
            <MenuItem itemNumber="16" itemName="Combination Short Soup (wonton)" itemPrice="14.90"/>
            <MenuItem itemNumber="17" itemName="Combination Long Soup (noodle)" itemPrice="14.90"/>
            <MenuItem itemNumber="18" itemName="Sea Scallops and Mushroom Soup" itemPrice="9.90"/>
        </div>
    );
}
 
export default Soup;