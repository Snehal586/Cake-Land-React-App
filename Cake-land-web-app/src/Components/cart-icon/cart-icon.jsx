import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../Redux/Cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/Cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import './cart-icon.scss';



    
const CartIcon = ({toggleCartHidden,itemCount}) => {
    return ( 
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
     );
}

//Get Length of Cart So That we can show it on item count class
const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})


//Just to set Toggle Function
const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
 
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);