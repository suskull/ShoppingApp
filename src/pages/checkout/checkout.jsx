import React from 'react';
import './checkout.scss'

import {connect} from 'react-redux';
import {createStruturedSelector} from 'reselect';
import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart-selectors';


function Checkout({cartItems,total}) {
    return(
        <div className = 'checkout-page'>
            <div className = 'checkout-header'>
                <div className = 'header-block'>
                    <spand>Product</spand>
                </div>
                <div className = 'header-block'>
                    <spand>Description</spand>
                </div>
                <div className = 'header-block'>
                    <spand>Quantity</spand>
                </div>
                <div className = 'header-block'>
                    <spand>Price</spand>
                </div>
                <div className = 'header-block'>
                    <spand>Remove</spand>
                </div>
                
                
            </div>
                {
                    cartItems.map(cartItem => cartItem.name)
                }
            <div className = 'total'>TOTAL:${total}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartItemsTotal(state)

})

export default connect(mapStateToProps)(Checkout);