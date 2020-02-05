import { combineReducers } from 'redux';

import usersReducer from './user/users_reducer';
import productsReducer from './products/product_reducer';
import cartReducer from './cart/cart_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer
  });
  
  export default entitiesReducer;