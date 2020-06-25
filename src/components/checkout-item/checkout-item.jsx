import React from 'react';
import './checkout-item.scss';

import {connect} from 'react-redux';
import {clearItem, removeItem,addItem} from '../../redux/cart/cart-actions'

function CheckoutItem({cartItem,clearItem, removeItem, addItem }) {
    const {imageUrl,name,quantity,price} = cartItem;
    return(
        <div className = 'checkout-item'>
            <div className = 'checkout-item__image-container'>
                <img src ={imageUrl} alt="checkout item " className="checkout-item__image-container--img"/>
            </div>
            <span className='checkout-item__name'>{name}</span>
            <span className='checkout-item__quantity'>
                <div className='checkout-item__quantity--arrow' onClick ={() =>removeItem(cartItem)}>&#10094;</div>
                <span className='checkout-item__quantity--value'>{quantity}</span>
                <div className='checkout-item__quantity--arrow' onClick ={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='checkout-item__price'>{price}</span>
            <div className='checkout-item__remove-button' onClick = {() =>clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
    
})

export default connect(null,mapDispatchToProps)(CheckoutItem);