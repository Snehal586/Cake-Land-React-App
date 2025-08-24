import React from 'react';
import {connect} from 'react-redux';
import { selectCartItems } from '../../Redux/Cart/cart.selector';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../CustomButton/custom-button';
import './cart-dropdown.scss';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router';
import {toggleCartHidden} from '../../Redux/Cart/cart.actions';

 
const CartDropDown = ({cartItems,history,dispatch}) => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                    {
                         cartItems.length ? cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )) :
                         (
                             <span className="empty-message">
                                 Your cart is empty
                             </span>
                         )
                    }
            </div>
            <CustomButton onClick={() => {
                dispatch(toggleCartHidden())
                history.push('/checkout')}}>GO TO CHECKOUT</CustomButton>
        </div>
     );
}
 
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems

})

export default withRouter(connect(mapStateToProps)(CartDropDown));