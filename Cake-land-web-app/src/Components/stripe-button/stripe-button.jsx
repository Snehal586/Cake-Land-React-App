import React from 'react';
import './stripe-button.scss';
import StripeCheckout from 'react-stripe-checkout';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../Redux/Cart/cart.selector';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { AllTransactionData, UserOrder } from '../../Firebase/firebase.util';
import { ResetItems } from '../../Redux/Cart/cart.actions';

const StripeCheckoutButton = ({price,cartItems,ResetItems}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ip4wpSGbelzIZUmeyVdhz3SY8YEcTCzszZttZ4HLyiAO6vvCMVr9KdnZeJ9giuVyGKzOUenCMjK4U3vKwpWUCC300xnhQlWir';
    const onToken = token => {
        token.price = price
        token.cartItems = cartItems
        // console.log(token);
        var user = firebase.auth().currentUser;
        if(user){
            AllTransactionData(token);
            UserOrder(token);
            ResetItems({data:"one"})
            alert("Order Successfull")
            
        }else{
            alert("You Need to Sign In")
        }   
    }
    return ( 
        <StripeCheckout 
        label="Pay Now"
        name="Cake Land"
        billingAddress
        shippingAddress
        currency="INR"
        image='https://www.recipetineats.com/wp-content/uploads/2016/06/Red-Velvet-Layer-Cake_4.jpg'
        description={`Your Total is ₹${price}`}
        amount={priceForStripe}
        panelLabel="pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
     );
}


// Exact value
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total:selectCartTotal
});

//change value
const mapDispatchToProps = dispatch => ({
    ResetItems : item => dispatch(ResetItems(item))
  })
 
export default connect(mapStateToProps,mapDispatchToProps)(StripeCheckoutButton);