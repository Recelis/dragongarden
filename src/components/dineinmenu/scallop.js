import React from 'react';
import MenuItem from "./menuItem";
 
const ScallopFish = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Scallops 扇贝</h3>
            <MenuItem itemNumber="42" itemName="Braised Scallops with  Ginger Shallots" itemPrice="26.00"/>
            <MenuItem itemNumber="43" itemName="Braised Scallops in Bird's Nest" itemPrice="27.00"/>
            <MenuItem itemNumber="44" itemName="Flaming Scallops in Satay Sauce" itemPrice="26.00"/>
        </div>
    );
}
 
export default ScallopFish;