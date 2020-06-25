import React from 'react';
import './cart-icon.scss';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors';


import {ReactComponent as ShoppingIcon } from '../../assets/cart.svg'

function CartIcon({toggleCartHidden, itemCount}) {
    return(
        <div className = 'cart-icon' onClick = {toggleCartHidden}>
            <ShoppingIcon  className= 'cart-icon__shopping-icon'/>
            <span className = 'cart-icon__item-count'>{itemCount}</span>

        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)

})

const mapDispathToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispathToProps)(CartIcon);