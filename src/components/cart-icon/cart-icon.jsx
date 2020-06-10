import React from 'react';
import './cart-icon.scss';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions';


import {ReactComponent as ShoppingIcon } from '../../assets/cart.svg'

function CartIcon({toggleCartHidden, itemCount}) {
    return(
        <div className = 'cart-icon' onClick = {toggleCartHidden}>
            <ShoppingIcon  className= 'shopping-icon'/>
            <span className = 'item-count'>{itemCount}</span>

        </div>
    )
}

const mapStateToProps = ({cart : {cartItems}}) => ({
    itemCount: cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity+ cartItem.quantity, 0
    )

})

const mapDispathToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispathToProps)(CartIcon);