import React from 'react';
import MenuItem from "./menuItem"
 
const ChefsSuggestionSpecial = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Top Line Selections 顶线选择</h3>
            <MenuItem itemNumber="19" itemName="Sizzling Mongolian Lamb" itemPrice="23.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Choice pieces of lamb served with delightfully spicy sauce and onion. Just the right touch of all.
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="20" itemName="Combination Phoenix Nest Deluxe" itemPrice="27.00"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Shredded chicken, king prawns, BBQ pork, beef, sea scallops, celery, carrots, straw mushrooms, bamboo shoots, baby corn, and peas.
                        Served in a deep-fried potato nest with cashew nuts on top.
                    </p>
                </div>
            </div>
            
            <MenuItem itemNumber="21" itemName="Hong Kong Sizzling Steak" itemPrice="24.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Australian special. Tender juicy pieces of choice cut fillet steak, marinated and broiled evenly with a special Chinese BBQ sauce that 
                        would please the most discerning palates. Served with grilled onions on a hot sizzling platter so that the meal continues to cook after removal
                        from the fire. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="22" itemName="Pork Spare Ribs Flambe" itemPrice="22.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        This is inspired by the so-called Mongolian BBQ which is served outdoors during the winter season around a big charcoal grill. Pork
                        spare ribs chopped into bite sized pieces, marinated, and dipped in a smooth batter, then crisp fried, and dressed in a lightly spiced sauce. Wrapped
                        and served in foil paper with a flame. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="23" itemName="Sizzling Garlic King Prawns" itemPrice="26.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Succulent juicy king prawns marinated, and stir-fried lightly. Served with garlic sauce on a hot sizzling platter. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="24" itemName="Chilli Spicy Calamari" itemPrice="20.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        <span role="img" aria-label="chilli">🌶️🌶️🌶️</span>Fresh calamari coated in a mixture of flour and egg white, marinated, and lightly deep-fried with spices and chilli. Served on a bed of shredded lettuce. 
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default ChefsSuggestionSpecial;