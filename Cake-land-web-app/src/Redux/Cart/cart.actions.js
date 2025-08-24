import { CartActionTypes } from './cart.types';


//for hide cart dropdown component
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


//adding items to cart
export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload:item
});


//Reset The values 
export const ResetItems = item => ({
    type:CartActionTypes.RESET_CART,
    payload:item
})


//clearing Item from cart
export const clearItemFromCart = item => ({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
});



//action perform for removing items
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload:item
});

