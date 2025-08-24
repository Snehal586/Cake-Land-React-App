import { combineReducers} from "redux";
import cartReducer from "./Cart/cart.reducer";
import userReducer from "./User/user.reducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";



const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

//Connect to root reducer
const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

// export default combineReducers({
//     user:userReducer,
//     cart:cartReducer
// })

export default persistReducer(persistConfig,rootReducer);

