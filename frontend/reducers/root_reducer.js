import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //local storage from browser

//persist cart reducer

import usersReducer from '../reducers/user/users_reducer';
import productsReducer from '../reducers/products/product_reducer';
import sessionReducer from '../reducers/session/session_reducer';
import sessionErrorsReducer from '../reducers/session/session_errors_reducer';
import cartReducer from '../reducers/cart/cart_reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export const rootReducer  = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer,
    session: sessionReducer,
    session_errors: sessionErrorsReducer
});

export default persistReducer(persistConfig, rootReducer);
