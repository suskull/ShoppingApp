import React from 'react';
import './checkout.scss'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart-selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe/stripe';


function Checkout({cartItems,total}) {
    return(
        <div className = 'checkout'>
            <div className = 'checkout__header'>
                <div className = 'checkout__header--block'>
                    <spand>Product</spand>
                </div>
                <div className = 'checkout__header--block'>
                    <spand>Description</spand>
                </div>
                <div className = 'checkout__header--block'>
                    <spand>Quantity</spand>
                </div>
                <div className = 'checkout__header--block'>
                    <spand>Price</spand>
                </div>
                <div className = 'checkout__header--block'>
                    <spand>Remove</spand>
                </div>
                
                
            </div>
                {
                    cartItems.map(cartItem => <CheckoutItem key ={cartItem.id} cartItem = {cartItem}/>)
                }
            <div className = 'checkout__total'>TOTAL:${total}</div>
            <StripeCheckoutButton price = {total} />
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal

})

export default connect(mapStateToProps)(Checkout);