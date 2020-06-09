import React from 'react';
import './cart-item.scss';

function CartItem ({item: {imageUrl,name,price,quantity}}) {

    return(
        <div className = 'cart-item'>
            <img src = {imageUrl} atl='Cart Item'/>
            <div className ='item-details'>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>

            </div>

        </div>
    )
}

export default CartItem;