import React from 'react';
import './checkout-item.scss';

import {connect} from 'react-redux';
import {clearItem} from '../../redux/cart/cart-actions'

function CheckoutItem({cartItem,clearItem }) {
    const {imageUrl,name,quantity,price} = cartItem;
    return(
        <div className = 'checkout-item'>
            <div className = 'image-container'>
                <img src ={imageUrl} atl=""/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick = {() =>clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);