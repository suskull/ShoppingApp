import React from 'react';
import './cart-icon.scss';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions';


import {ReactComponent as ShoppingIcon } from '../../assets/cart.svg'

function CartIcon({toggleCartHidden}) {
    return(
        <div className = 'cart-icon' onClick = {toggleCartHidden}>
            <ShoppingIcon  className= 'shopping-icon'/>
            <span className = 'item-count'>0</span>

        </div>
    )
}

const mapDispathToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null,mapDispathToProps)(CartIcon);