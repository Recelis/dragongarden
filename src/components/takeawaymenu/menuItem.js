import React from 'react';

const MenuItem = (props) => {
    return (
        <div className="menu-item-row">
            <div>
                <span className="menu-item-number">{props.itemNumber}.</span>
                <span className="menu-item-name">{props.itemName}</span>
            </div>
            <div>
                <span className="menu-item-price">${props.itemPrice}</span>
                {props.itemTag ? (
                    <span className="badge badge-warning" style={{ marginLeft: '0.5rem' }}>{props.itemTag}</span>
                ) : null}
            </div>
        </div>
    );
}

export default MenuItem;