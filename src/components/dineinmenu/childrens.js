import React from 'react';
import MenuItem from "./menuItem" 

const Childrens = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Children's Menu 儿童菜单</h3>
            <MenuItem itemNumber="86" itemName="Chicken Nuggets and Chips" itemPrice="9.90"/>
            <MenuItem itemNumber="87" itemName="Fish and Chips (crumbed or battered)" itemPrice="9.90"/>
            <MenuItem itemNumber="88" itemName="Ice Cream Sundae (Strawberry, Caramel, Maple, or Chocolate Flavouring)" itemPrice="5.50"/>
        </div>
    );
}
 
export default Childrens;