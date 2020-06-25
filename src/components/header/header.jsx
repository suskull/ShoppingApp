import React from 'react';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/batman.svg';
import {connect} from 'react-redux';

import {selectCurrentUser} from '../../redux/user/user-selectors';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';


import {auth} from '../../firebase/firebase.utils';

import './header.scss';

function Header({currentUser,hidden}) {
 return(
     <div className ='header'>
         <Link  className ='logo-container' to='/'>
            <Logo className ='logo-container__logo'/>
         </Link>
         <div className='navigation'>
            <Link className ='navigation__nav' to ='/shop'>SHOP</Link>
            <Link className ='navigation__nav' to ='/contact'>CONTACT</Link>

            {currentUser ? (
               <div className='navigation__nav' onClick ={() => auth.signOut()}>
                SIGN OUT
               </div>)
               :(<Link className ='navigation__nav' to ='/signin'>SIGN IN</Link>
            )}
          

            <CartIcon />
         </div>
         {
               hidden ? null : <CartDropDown />
         }
        
     </div>
 )
}

// const mapStateToProps = (state) => ({
//    currentUser : selectCurrentUser(state),
//    hidden: selectCartHidden(state)
// })

//createStructuredSelector() help us in case there are more and more prop

const mapStateToProps = createStructuredSelector({
   currentUser : selectCurrentUser,
   hidden: selectCartHidden
})



export default connect(mapStateToProps)(Header);