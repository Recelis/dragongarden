import React from 'react';
import MenuItem from "./menuItem"
 
const SpecialtiesHouse = () => {
    return (
        <div className="menu-category">
            <h3 className="menu-subheading">Specialties of the House 房子的特色</h3>
            <MenuItem itemNumber="25" itemName="West Lake Duck" itemPrice="27.00"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Boneless duck marinated with spices and cooked in a special sauce and deep-fried and served with sweet and sour sauce. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="26" itemName="Singapore Noodles" itemPrice="19.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        BBQ pork, prawn, egg, capsicum, onion, shallot, bean sprouts, rice stick, curry, sate sauce, peanut paste.
                    </p>
                </div>
            </div>
            
            <MenuItem itemNumber="27" itemName="Assorted Seafood" itemPrice="26.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        This geniune taste of the sea is presented in authentic Chinese style. King prawns, sea scallops, seafood stick, squid & reef fish prepared in a 
                        wine and ginger sauce to enhance the flavour of these delicacies. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="28" itemName="Shredded Meat Special" itemPrice="23.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Shredded chicken, BBQ pork, king prawn, scallops, beef, bamboo shoots, marinated and pan fried with onion and shallots. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="29" itemName="Honey King Prawns" itemPrice="26.00"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Succulent king prawns rolled in a mixture of flour and egg white, marinated and served with glazed honey sauce. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="30" itemName="Black Pepper Steak" itemPrice="24.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Specially selected tender-cut filled steak pieces, marinated Chinese style. Pan fried and served with black pepper sauce on a 
                        bed of lettuce. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="31" itemName="Tropical Chicken with Mango & Cashew Nuts" itemPrice="21.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Shredded chicken, pan fried with capsicum, shallots, and onion. Then lightly stir-fried with sliced mango. Service topped with cashew nut.
                    </p>
                </div>
            </div>
            
            <MenuItem itemNumber="32" itemName="Sze Chun Chicken" itemPrice="20.00"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        <span role="img" aria-label="chilli">🌶️🌶️🌶️</span>(CHILLI BEAN SAUCE) MEDIUM OR HOT! Braised Chicken with capsicum, shallots, and onion, carrot cooked in chilli bean sauce. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="33" itemName="Empress Boneless Chicken with Lemon Sauce" itemPrice="20.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Half boneless bird, marinated, and deep fried, cut into bite size pieces, topped with lemon sauce. 
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="34" itemName="Vegetarian's Delight" itemPrice="14.50"/>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Mixed vegetables cooked in their own juice very briefly to retain their natural flavour. Add soya sauce and light oyster sauce ready to serve.
                    </p>
                </div>
            </div>
            <MenuItem itemNumber="35" itemName="Dragon Garden Chow Mein" itemPrice="24.50"/>
            <div className="mb-0">
                <p className="pl-4 pb-0 mb-0">
                    (Soft Noodle or Pan Fried)
                </p>
            </div>
            <div className="row">
                <div className="col-6">
                    <p className="menu-item-description pl-4">
                        Braised king prawns, scallops, beef, BBQ pork, chicken stir-fry vegetables, pan fried soft noodles on bedding with light oyster sauce. 
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default SpecialtiesHouse;