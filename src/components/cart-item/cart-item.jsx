import React from 'react';
import './cart-item.scss';

function CartItem ({item: {imageUrl,name,price,quantity}}) {

    return(
        <div className = 'cart-item'>
            <img src = {imageUrl} alt='Cart Item'/>
            <div className ='cart-item__details'>
                <span className= 'cart-item__details--name'>{name}</span>
                <span className= 'cart-item__details--price'>{quantity} x ${price}</span>

            </div>

        </div>
    )
}

export default CartItem;