//Creating for adding Items in our Cart
export const addItemToCart = (cartItems,cartItemToAdd) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    //Check if Item is already on cart or not
    if(existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems,{...cartItemToAdd,quantity:1}]

} 

// Removing Item from a cart
export const removeItemFromCart = (cartItems,cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        )
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem,quantity:cartItem.quantity - 1 } : cartItem
    )

}

