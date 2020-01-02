import React from 'react';
import MenuItem from "./menuItem";
 
const Omelette = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Omelette 蛋芙蓉</h3>
            <p className="my-0"><i>Served with light oyster and soy sauce</i></p>
            <MenuItem itemNumber="65" itemName="Combination Omelette" itemPrice="18.50"/>
            <MenuItem itemNumber="66" itemName="Prawn Omelette" itemPrice="17.50" itemTag="GF"/>
            <MenuItem itemNumber="67" itemName="Beef Omelette" itemPrice="17.50"/>
            <MenuItem itemNumber="68" itemName="Chicken Omelette" itemPrice="17.50"/>
            <MenuItem itemNumber="69" itemName="Plain Omelette" itemPrice="12.50" itemTag="GF"/>
            <MenuItem itemNumber="70" itemName="King Prawn Omelette" itemPrice="23.00"/>
        </div>
    );
}
 
export default Omelette;