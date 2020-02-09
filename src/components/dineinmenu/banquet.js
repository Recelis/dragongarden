import React from 'react';
import MenuItem from "./menuItem"
 
const Banquet = () => {
    return (
        <div className="menu-category container-fluid px-0 mx-0">
            <h3 className="menu-subheading">Banquet 宴会</h3>
            <p>Minimum four persons</p>
            <h4> Banquet A</h4>
            <div className="row">
                <div className="col-11 d-flex justify-content-between">
                    <div className="row mx-1">
                        <div className="d-flex flex-column">
                            <h5>Entree</h5>
                            <span>Spring Roll & Fried Wonton</span>
                            <span>Spring Roll with Minced Chicken Soup</span>
                            <h5 className="mt-2">Main</h5>
                            <span>Chicken with Vegetables</span>
                            <span>Honey King Prawns</span>
                            <span>Sweet and Sour Pork</span>
                            <span>Flaming Beef with Hoi Sin Sauce</span>
                            <span>Fried Rice</span>
                            <h5 className="mt-2">Dessert</h5>
                            <span>Ice Cream with Topping (Caramel, Chocolate, Strawberry, Maple)</span>
                            <span>Fortune Cookie</span>
                        </div>
                    </div>
                    <span>$31.50/person</span>
                </div>
                <div className="col-1">
                </div>
            </div>
            <h4 className="mt-4"> Banquet B</h4>
            <div className="row">
                <div className="col-11 d-flex justify-content-between">
                    <div className="row mx-1">
                        <div className="d-flex flex-column">
                            <h5>Entree</h5>
                            <span>Curry Puffs & Spring Rolls</span>
                            <span>Sweet Corn Crab Soup</span>
                            <h5 className="mt-2">Main</h5>
                            <span>Seafood Combination</span>
                            <span>Thai Chicken</span>
                            <span>Mongolian Lamb</span>
                            <span>Pork Rib Plum Sauce</span>
                            <span>Fried Rice</span>
                            <h5 className="mt-2">Dessert</h5>
                            <span>Ice Cream with Topping (Caramel, Chocolate, Strawberry, Maple)</span>
                            <span>Fortune Cookie</span>
                        </div>
                    </div>
                    <span>$38.50/person</span>
                </div>
                <div className="col-1">
                </div>
            </div>
            <hr/>
            <p><b>Please Note:</b> You can upgrade dessert to:</p>
            <MenuItem itemNumber="" itemName="Banana Fritters & Ice Cream" itemPrice="4.50"/>
            <MenuItem itemNumber="" itemName="Lychees and Ice Cream" itemPrice="4.50"/>
            <MenuItem itemNumber="" itemName="Deep Fried Ice Cream" itemPrice="5.00"/>
        </div>
    );
}
 
export default Banquet;