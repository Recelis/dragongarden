import React from 'react';
import MenuItem from "./menuItem" 

const ChowMein = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Chown Mein Crisp Noodles 炒面</h3>
            <MenuItem itemNumber="71" itemName="Combination Chow Mein (crisp noodles)" itemPrice="19.50"/>
            <MenuItem itemNumber="72" itemName="King Prawn Chow Mein (crisp noodles)" itemPrice="23.50"/>
            <MenuItem itemNumber="73" itemName="Braised Chicken Chow Mein (crisp noodles)" itemPrice="17.50"/>
            <MenuItem itemNumber="74" itemName="Sliced Beef Chow Mein (crisp noodles)" itemPrice="17.50"/>
            <MenuItem itemNumber="75" itemName="Prawn Chow Mein (crisp noodles)" itemPrice="17.50"/>
            <MenuItem itemNumber="76" itemName="Sliced BBQ Pork Chow Mein (crisp noodles)" itemPrice="19.50"/>
            <MenuItem itemNumber="77" itemName="Pan Fried Soft Noodles or Boiled Noodles" itemPrice="+1.50"/>
            <MenuItem itemNumber="78" itemName="Singapore Noodles with Curry Powder" itemPrice="18.50"/>
        </div>
    );
}
 
export default ChowMein;