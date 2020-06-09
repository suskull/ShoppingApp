import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import {connect} from 'react-redux';



import './cart-dropdown.scss';

function CartDropDown({cartItems}) {

    return(
        <div className = 'cart-dropdown'>
            <div className ='cart-items'>
                {
                    cartItems.map(cartItem => 
                        (<CartItem className = 'cart-items' key ={cartItem.id} item = {cartItem}/>))
                }
              
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>

        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})


export default connect(mapStateToProps)(CartDropDown);