import React from 'react';
import MenuItem from "./menuItem";
 
const KingPrawn = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">King Prawns 虾球</h3>
            <MenuItem itemNumber="36" itemName="Combination King Prawns with Mix Vegetable" itemPrice="26.00"/>
            <MenuItem itemNumber="37" itemName="Braised King Prawns in Curry Sauce" itemPrice="26.00"/>
            <MenuItem itemNumber="38" itemName="Braised King Prawn in Black Bean Sauce" itemPrice="26.00"/>
            <MenuItem itemNumber="39" itemName="Flaming Braised King Prawn in Satay Sauce" itemPrice="26.00"/>
            <MenuItem itemNumber="40" itemName="Falming Braised King Prawn with Special Sauce" itemPrice="26.00"/>
            <MenuItem itemNumber="41" itemName="King Prawn Chow Mein (Soft Noodles or Pan Fried)" itemPrice="27.00"/>
        </div>
    );
}
 
export default KingPrawn;