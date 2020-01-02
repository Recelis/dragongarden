import React from 'react';
import MenuItem from "./menuItem"
 
const Chicken = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Chicken 鸡</h3>
            <MenuItem itemNumber="19" itemName="Braised Chicken with Black Bean Sauce" itemPrice="16.50"/>
            <MenuItem itemNumber="20" itemName="Braised Chicken with Cashew Nuts (diced veges)" itemPrice="17.50"/>
            <MenuItem itemNumber="21" itemName="Braised Chicken with Vegetable" itemPrice="16.50"/>
            <MenuItem itemNumber="22" itemName="Braised Chicken with Mushroom" itemPrice="17.50"/>
            <MenuItem itemNumber="23" itemName="Braised Chicken with Oyster Sauce" itemPrice="16.50"/>
            <MenuItem itemNumber="24" itemName="Braised Chicken with Curry Sauce" itemPrice="16.50"/>
            <MenuItem itemNumber="25" itemName="Braised Chicken in Satay Sauce" itemPrice="17.50"/>
            <MenuItem itemNumber="26" itemName="Braised Chicken in Special Sauce (Hoi Sin Sauce)" itemPrice="17.50"/>
            <MenuItem itemNumber="27" itemName="Fried Chicken Fillet in Lemon Sauce" itemPrice="18.50"/>
            <MenuItem itemNumber="28" itemName="Deep Fried Crispy Skin Chicken (with bones)" itemPrice="16.50" itemTag="GF"/>
        </div>
    );
}
 
export default Chicken;