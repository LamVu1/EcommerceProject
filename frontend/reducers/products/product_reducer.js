import {
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT
  } from '../products/product_actions';


  // case RECEIVE_PRODUCT:
  //   nextState = Object.assign({}, oldstate, action.product);
  //   return nextState;

  // return Object.assign({},state, { [action.currentUser.id]:action.currentUser });


  const productsReducer = (oldstate = {}, action) => {
    
    Object.freeze(oldstate);
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
          return Object.assign({}, action.products);
            // return {...oldstate, action.products;}
        default:
            return oldstate;
    }
  };
  
  export default productsReducer;