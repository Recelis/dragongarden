import React from 'react';
 
const MenuItem = (props) => {
    return (
        <div className="row">

            <div className="col-11 d-flex justify-content-between">
                <div>
                    <span className="mx-1">{props.itemNumber}.</span>
                    <span>{props.itemName}</span>
                </div>
                <span>${props.itemPrice}</span>
            </div>
            {
            props.itemTag ? 
            <div className="col-1">
                <div className="badge badge-warning">
                    {props.itemTag}
                </div>
            </div>:
                <div className="col-1">
                </div>
            }
        </div>
    );
}
 
export default MenuItem;