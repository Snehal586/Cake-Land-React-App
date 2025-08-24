import { createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';


const middlewares = [logger];
export const store = createStore(rootReducer,applyMiddleware(...middlewares))

//Using it for storing data in localstorage for cart Items
export const persistor = persistStore(store);

const basic = {store,persistor}
export default basic;

