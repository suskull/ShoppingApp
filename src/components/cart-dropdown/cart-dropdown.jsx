import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart-selectors';

import {withRouter} from 'react-router-dom';

import {toggleCartHidden} from '../../redux/cart/cart-actions';



import './cart-dropdown.scss';

function CartDropDown({cartItems, history,toggleCartHidden}) {

    return(
        <div className = 'cart-dropdown'>
            <div className ='cart-dropdown__cart-items'>

                {
                    cartItems.length ?
                    (cartItems.map(cartItem => 
                        (<CartItem className = 'cart-dropdown__cart-items' key ={cartItem.id} item = {cartItem}/>)))
                        :<span className = 'cart-dropdown__empty-message'>Your cart is empty</span>
                }
              
            </div>
            <CustomButton onClick = {() => {
                history.push('/checkout'); 
                toggleCartHidden()}}
                >GO TO CHECKOUT
            </CustomButton>

        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})


//or you can use dispatch shorthand, 
//passing dispatch props to function and passing toggleCartHidden() into dispatch
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: cart => dispatch(toggleCartHidden(cart))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));