import React from 'react';
import './Checkout.scss';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal} from '../../Redux/Cart/cart.selector';
import CheckoutItem from '../../Components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button';



const CheckoutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                
                <CheckoutItem key ={ cartItem.id } cartItem={cartItem} />

                )
        }
        <div className="total">
            <span>TOTAL : ₹{total}</span>
        </div>
        <div className="test-warning">
            *Please use the following test Creadit card for payments* <br/>
            4242 4242 4242 4242 - Exp: 01/32 - CVV: 123
        </div>
        {   
            // console.log(cartItems.length)
            cartItems.length > 0 ? <StripeCheckoutButton price={total}/> : <h3>Add Items</h3>
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);